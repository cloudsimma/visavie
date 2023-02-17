resp = "";
try 
{
	if(input.id != null)
	{
		v_deal = zoho.crm.getRecordById("Home_Care_Deal",id.toNumber());
		getResideceList = v_deal.get("Residence1");
		invoicePreferenceList = List();
		for each  residence in getResideceList
		{
			if(residence.get("Invoice_Preference") == true)
			{
				invoicePreferenceList.add(residence.get("Invoice_Preference"));
			}
		}
		if(invoicePreferenceList.size() == 1)
		{
			m_map = Map();
			m_map.put("Name",v_deal.get("Name"));
			m_map.put("Deal_Number",v_deal.get("Request_unique_number_Num_ro_de_d_marche_unique").toString());
			m_map.put("Home_Care_Deal",id.toNumber());
			clientList = List();
			if(v_deal.get("Client") != null)
			{
				con = v_deal.get("Client").toMap();
				if(con.containKey("id"))
				{
					multiselect_map = Map();
					clientMap = Map();
					multiselect_map.put("id",con.get("id"));
					clientMap.put("Clients",multiselect_map);
					clientList.add(clientMap);
				}
			}
			if(v_deal.get("Client_2") != null)
			{
				con2 = v_deal.get("Client_2").toMap();
				if(con2.containKey("id"))
				{
					multiselect_map = Map();
					clientMap = Map();
					multiselect_map.put("id",con2.get("id"));
					clientMap.put("Clients",multiselect_map);
					clientList.add(clientMap);
				}
			}
			m_map.put("Clients",clientList);
			if(v_deal.get("Advisors") != null)
			{
				advisor = v_deal.get("Advisors").toMap();
				if(advisor.containKey("id"))
				{
					m_map.put("Advisor",advisor.get("id"));
				}
			}
			if(v_deal.get("Residence1") != null)
			{
				resi_list = v_deal.get("Residence1");
				for each  resident in resi_list
				{
					resident_map = resident.toMap();
					if(resident_map.containKey("Invoice_Preference") && resident_map.get("Invoice_Preference") == true)
					{
						if(resident_map.containKey("Residence"))
						{
							m_map.put("Residence",resident_map.get("Residence").get("id"));
						}
					}
				}
			}
			finalMap = Map();
			datalList = list();
			datalList.add(m_map);
			finalMap.put("data",datalList);
			createrequest = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v2.1/Request_invoice"
				type :POST
				parameters:finalMap.toString()
				connection:"crm_visavie"
			];
			info "Createrequest" + createrequest;
			if(createrequest.get("data") != null && createrequest.get("data").size() > 0)
			{
				if(createrequest.get("data").get(0).get("code") == "SUCCESS" && createrequest.get("data").get(0).get("details") != null)
				{
					requestId = createrequest.get("data").get(0).get("details").get("id");
					update_deal_map = Map();
					update_deal_map.put("Stage","Location enregistrée");
					updateDealResp = zoho.crm.updateRecord("Home_Care_Deal",id.toLong(),update_deal_map);
					info updateDealResp;
					getOwnerName = "";
					if(v_deal.get("Owner") != null)
					{
						getOwnerName = v_deal.get("Owner").get("name");
					}
					datamaps = Map();
					dataList = List();
					notes_map = Map();
					content = "Request Invoice record has been created " + "by: " + getOwnerName + " " + zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-05:00");
					notes_map.put("Note_Title","Request Invoice");
					notes_map.put("Note_Content",content);
					notes_map.put("Parent_Id",id.toNumber());
					notes_map.put("se_module","Home_Care_Deal");
					dataList.add(notes_map);
					datamaps.put("data",dataList);
					notecreate = zoho.crm.createRecord("Notes",notes_map);
					info notecreate;
					resp = "Request has been created successfully";
					openUrl("https://crm.zoho.com/crm/org746753262/tab/CustomModule4/" + requestId,"new window");
				}
			}
		}
		else
		{
			resp = "Please select only one residence to request invoice";
		}
	}
}
catch (e)
{
}
return resp;