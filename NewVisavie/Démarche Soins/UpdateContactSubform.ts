try 
{
	if(id != null)
	{
		get_deal = zoho.crm.getRecordById("Home_Care_Deal",id);
		if(get_deal.get("id") != null)
		{
			contactMap = Map();
			if(get_deal.get("Contact_subform") != null)
			{
				data_map = Map();
				ownerName = "lion_visavie";
				appName = "visavie";
				report_name = "All_Contacts";
				for each  subforms in get_deal.get("Contact_subform")
				{
					if(subforms.get("contact") != null)
					{
						get_contact = zoho.crm.getRecordById("Contacts",subforms.get("contact").get("id"));
						if(get_contact.get("id") != null)
						{
							contactMap.put("Type_de_contact",ifnull(subforms.get("Type_of_contact"),""));
							contactMap.put("E_mail_Courriel_1",ifnull(subforms.get("Email"),""));
							contactMap.put("T_l_phone_maison",ifnull(subforms.get("Work_Phone"),""));
							contactMap.put("Work_Phone_Extension",ifnull(subforms.get("Work_Phone_Extension"),""));
							contactMap.put("Cellulaire",ifnull(subforms.get("Cell_Phone"),""));
							contactMap.put("T_l_phone_travail",ifnull(subforms.get("Home_Phone"),""));
							update_contact = zoho.crm.updateRecord("Contacts",get_contact.get("id"),contactMap);
						}
						//Creator -contact
						contactID = subforms.get("contact").get("id");
						getCreatorContact = zoho.creator.getRecords(ownerName,appName,report_name,"ZohoCRM_ID == \"" + contactID + "\"",1,200,"zoho_mail");
						if(getCreatorContact.get("code") == 3000)
						{
							if(getCreatorContact.get("data").size() > 0)
							{
								data_map.put("Email",ifnull(subforms.get("Email"),""));
								data_map.put("Work_Phone",ifnull(subforms.get("Work_Phone"),""));
								data_map.put("Work_phone_Extension",ifnull(subforms.get("Work_Phone_Extension"),""));
								data_map.put("Cell_Phone",ifnull(subforms.get("Cell_Phone"),""));
								data_map.put("Home_Phone",ifnull(subforms.get("Home_Phone"),""));
								data_map.put("Type_of_contact1",ifnull(subforms.get("Type_of_contact"),""));
								creatorId = getCreatorContact.get("data").get(0).get("ID");
								updatercreator_respond = zoho.creator.updateRecord(ownerName,appName,report_name,creatorId.toLong(),data_map,Map(),"zoho_mail");
							}
						}
					}
				}
			}
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Home care Deals");
	dataMap.put("Process_Description","In CRM : Update contact subform records in Contact (CRM/Creator)");
	dataMap.put("In_Data",id);
	dataMap.put("Out_Response",e);
	resCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
