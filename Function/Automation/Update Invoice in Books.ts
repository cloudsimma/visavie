try 
{
	req_inv = zoho.crm.getRecordById("Request_invoice",compatibiliteID.toNumber());
	info req_inv.get("Books_invoice_Id");
	info req_inv.get("Organization_Id");
	if(req_inv.get("Books_invoice_Id") != null && req_inv.get("Books_invoice_Id") != "" && req_inv.get("Organization_Id") != null && req_inv.get("Organization_Id") != "")
	{
		info "Hi";
		inv_map = Map();
		item_list = List();
		line_item_trigg = false;
		v_deal = zoho.crm.searchRecords("Deals","(Deal_Number:equals:" + req_inv.get("Deal_Number") + ")");
		if(v_deal.size() > 0)
		{
			v_frst_deal = v_deal.get(0).toMap();
			line_item_trigg = false;
			if(v_frst_deal.containKey("Contact"))
			{
				crm_cont1_id = v_frst_deal.get("Contact").get("id");
				if(crm_cont1_id != null)
				{
					v_crm_cont1 = zoho.crm.getRecordById("Contacts",crm_cont1_id);
					if(v_crm_cont1.containKey("Client_Number"))
					{
						line_item_map = Map();
						line_item_map.put("name","Customer : " + ifnull(v_crm_cont1.get("Client_Number"),"") + " " + v_crm_cont1.get("Full_Name"));
						line_item_map.put("quantity",1);
						line_item_map.put("rate",ifnull(req_inv.get("Total_bill"),0.0));
						item_list.add(line_item_map);
						line_item_trigg = true;
					}
				}
			}
			if(v_frst_deal.get("Contacts") != null)
			{
				crm_cont2_id = v_frst_deal.get("Contacts").get("id");
				if(crm_cont2_id != null)
				{
					v_crm_cont2 = zoho.crm.getRecordById("Contacts",crm_cont2_id);
					if(v_crm_cont2.containKey("Client_Number"))
					{
						line_item_map2 = Map();
						line_item_map2.put("name","Customer : " + ifnull(v_crm_cont2.get("Client_Number"),"") + " " + v_crm_cont2.get("Full_Name"));
						line_item_map2.put("quantity",1);
						if(line_item_trigg == false)
						{
							line_item_map2.put("rate",ifnull(req_inv.get("Total_bill"),0.0));
						}
						else
						{
							line_item_map2.put("rate",0.0);
						}
						item_list.add(line_item_map2);
					}
				}
			}
		}
		// 	inv_map.put("customer_id",req_inv.get("Customer_Id").toNumber());
		residenceId = "";
		if(req_inv.get("Residence") != null)
		{
			residenceId = req_inv.get("Residence").get("id");
		}
		resi = zoho.crm.getRecordById("Residence",residenceId.toNumber());
		info "residence" + resi;
		if(resi.get("id") != null)
		{
			cust_list = List();
			if(resi.get("Provinces") == "Québec/Quebec")
			{
				if(req_inv.get("Apartment_number") != null && req_inv.get("Apartment_number") != "")
				{
					cust_map1 = Map();
					cust_map1.put("customfield_id","2658202000000425152");
					cust_map1.put("value",ifnull(req_inv.get("Apartment_number"),""));
					cust_list.add(cust_map1);
				}
				if(req_inv.get("Lease_Signature_Date") != null && req_inv.get("Lease_Signature_Date") != "")
				{
					cust_map2 = Map();
					cust_map2.put("customfield_id","2658202000000425164");
					cust_map2.put("value",ifnull(req_inv.get("Lease_Signature_Date"),""));
					cust_list.add(cust_map2);
				}
				if(req_inv.get("Lease_Start_Date") != null && req_inv.get("Lease_Start_Date") != "")
				{
					cust_map3 = Map();
					cust_map3.put("customfield_id","2658202000000425158");
					cust_map3.put("value",ifnull(req_inv.get("Lease_Start_Date"),""));
					cust_list.add(cust_map3);
				}
				if(req_inv.get("Advisor") != null)
				{
					getCounselorName = req_inv.get("Advisor").get("name");
					cust_map3 = Map();
					cust_map3.put("customfield_id","2658202000001152034");
					cust_map3.put("value",ifnull(getCounselorName,""));
					cust_list.add(cust_map3);
				}
				if(resi.get("Residence_number") != null && resi.get("Residence_number") != "")
				{
					cust_map3 = Map();
					cust_map3.put("customfield_id","2658202000001152056");
					cust_map3.put("value",ifnull(resi.get("Residence_number"),""));
					cust_list.add(cust_map3);
				}
			}
			if(resi.get("Provinces") == "Ontario")
			{
				info "Ontario----";
				if(req_inv.get("Apartment_number") != null && req_inv.get("Apartment_number") != "")
				{
					cust_map1 = Map();
					cust_map1.put("customfield_id","3035265000000074567");
					cust_map1.put("value",ifnull(req_inv.get("Apartment_number"),""));
					cust_list.add(cust_map1);
				}
				if(req_inv.get("Lease_Signature_Date") != null && req_inv.get("Lease_Signature_Date") != "")
				{
					cust_map2 = Map();
					cust_map2.put("customfield_id","3035265000000074571");
					cust_map2.put("value",ifnull(req_inv.get("Lease_Signature_Date"),""));
					cust_list.add(cust_map2);
				}
				if(req_inv.get("Lease_Start_Date") != null && req_inv.get("Lease_Start_Date") != "")
				{
					cust_map3 = Map();
					cust_map3.put("customfield_id","3035265000000074569");
					cust_map3.put("value",ifnull(req_inv.get("Lease_Start_Date"),""));
					cust_list.add(cust_map3);
				}
				if(req_inv.get("Advisor") != null)
				{
					getCounselorName = req_inv.get("Advisor").get("name");
					cust_map3 = Map();
					cust_map3.put("customfield_id","3035265000000283015");
					cust_map3.put("value",ifnull(getCounselorName,""));
					cust_list.add(cust_map3);
				}
				if(resi.get("Residence_number") != null && resi.get("Residence_number") != "")
				{
					cust_map3 = Map();
					cust_map3.put("customfield_id","3035265000000283019");
					cust_map3.put("value",ifnull(resi.get("Residence_number"),""));
					cust_list.add(cust_map3);
				}
			}
			if(req_inv.get("P_O_number") != null && req_inv.get("P_O_number") != "")
			{
				inv_map.put("reference_number",req_inv.get("P_O_number"));
			}
			if(cust_list.size() > 0)
			{
				inv_map.put("custom_fields",cust_list);
			}
			inv_map.put("line_items",item_list);
			resp = zoho.books.updateRecord("invoices",req_inv.get("Organization_Id"),req_inv.get("Books_invoice_Id"),inv_map,"books_connect");
			info resp;
		}
	}
}
catch (e)
{
}