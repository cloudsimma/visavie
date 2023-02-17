resp = "";
try 
{
	if(input.id != null)
	{
		v_deal = zoho.crm.getRecordById("Deals",id.toNumber());
		getResideceList = v_deal.get("Subform_3");
		invoicePreferenceList = List();
		for each  residence in getResideceList
		{
			if(residence.get("Invoice_Preference") == true)
			{
				invoicePreferenceList.add(residence.get("Invoice_Preference"));
			}
		}
		getInvoiceRecord = zoho.crm.searchRecords("Request_invoice","(Deal_Number:equals:" + v_deal.get("Deal_Number") + ")");
		info getInvoiceRecord;
		if(getInvoiceRecord.size() == 0)
		{
			if(invoicePreferenceList.size() == 1)
			{
				m_map = Map();
				m_map.put("Name",v_deal.get("Deal_Name"));
				m_map.put("Deal_Number",v_deal.get("Deal_Number").toString());
				m_map.put("Housing_Deal",id.toNumber());
				clientList = List();
				clientNumber = "";
				if(v_deal.get("Contact") != null)
				{
					con = v_deal.get("Contact").toMap();
					if(con.containKey("id"))
					{
						// 					m_map.put("Client_s",con.get("id"));
						multiselect_map = Map();
						clientMap = Map();
						multiselect_map.put("id",con.get("id"));
						clientMap.put("Clients",multiselect_map);
						clientList.add(clientMap);
						getClient1Info = zoho.crm.getRecordById("Contacts",con.get("id").toLong());
						if(getClient1Info.get("id") != null)
						{
							if(getClient1Info.get("Client_Number") != null && getClient1Info.get("Client_Number") != "")
							{
								clientNumber = getClient1Info.get("Client_Number");
							}
							if(getClient1Info.get("Full_Name") != null && getClient1Info.get("Full_Name") != "")
							{
								clientNumber = clientNumber + "-" + getClient1Info.get("Full_Name");
							}
						}
					}
				}
				if(v_deal.get("Contacts") != null)
				{
					con2 = v_deal.get("Contacts").toMap();
					if(con2.containKey("id"))
					{
						multiselect_map = Map();
						clientMap = Map();
						multiselect_map.put("id",con2.get("id"));
						clientMap.put("Clients",multiselect_map);
						clientList.add(clientMap);
						getClient2Info = zoho.crm.getRecordById("Contacts",con2.get("id").toLong());
						if(getClient2Info.get("id") != null)
						{
							if(getClient2Info.get("Client_Number") != null && getClient2Info.get("Client_Number") != "")
							{
								clientNumber = clientNumber + ", " + getClient2Info.get("Client_Number");
							}
							if(getClient2Info.get("Full_Name") != null && getClient2Info.get("Full_Name") != "")
							{
								clientNumber = clientNumber + "-" + getClient2Info.get("Full_Name");
							}
						}
					}
				}
				m_map.put("Clients",clientList);
				if(clientNumber != "")
				{
					m_map.put("Client_Number",clientNumber);
				}
				info "clientList" + clientList;
				//Contacts
				if(v_deal.get("Counselor_Conseiller") != null)
				{
					advisor = v_deal.get("Counselor_Conseiller");
					m_map.put("Advisor",advisor.get("id"));
				}
				if(v_deal.get("Conseiller_temporaire_Temporary_counselor") != null)
				{
					tempCounselor = v_deal.get("Conseiller_temporaire_Temporary_counselor");
					m_map.put("Temporary_counselor",tempCounselor.get("id"));
				}
				if(v_deal.get("Subform_3") != null)
				{
					resi_list = v_deal.get("Subform_3");
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
				info createrequest;
				if(createrequest.get("data") != null && createrequest.get("data").size() > 0)
				{
					if(createrequest.get("data").get(0).get("code") == "SUCCESS" && createrequest.get("data").get(0).get("details") != null)
					{
						requestId = createrequest.get("data").get(0).get("details").get("id");
						// 					update_deal_map = Map();
						// 					update_deal_map.put("Stage","Location enregistrée/Registered renting");
						// 					updateDealResp = zoho.crm.updateRecord("Deals",id.toLong(),update_deal_map);
						// 					info updateDealResp;
						getOwnerName = "";
						if(v_deal.get("Owner") != null)
						{
							getOwnerName = v_deal.get("Owner").get("name");
						}
						datamaps = Map();
						dataList = List();
						notes_map = Map();
						content = "Request Invoice record has been created " + "by: " + getOwnerName + " " + zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-04:00");
						notes_map.put("Note_Title","Request Invoice");
						notes_map.put("Note_Content",content);
						notes_map.put("Parent_Id",id.toNumber());
						notes_map.put("se_module","Deals");
						dataList.add(notes_map);
						datamaps.put("data",dataList);
						notecreate = zoho.crm.createRecord("Notes",notes_map);
						info notecreate;
						resp = "Votre demande de facture a bien été créée/Your invoice request was created successfully";
						openUrl("https://crm.zoho.com/crm/org746753262/tab/CustomModule4/" + requestId,"new window");
					}
				}
			}
			else
			{
				resp = "Veuillez sélectionner une seule résidence pour demander une facture/Please select only one residence to request invoice";
			}
		}
		else
		{
			resp = "Enregistrement de Compatibilité déjà créé/Compatibilité record already created";
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Deal");
	dataMap.put("Process_Description","Create and Update Request Invoice");
	dataMap.put("In_Data",id.toNumber());
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
return resp;