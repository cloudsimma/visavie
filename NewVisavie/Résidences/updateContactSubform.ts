try 
{
	resiInfo = zoho.crm.getRecordById("Residence",res_ID);
	if(resiInfo.get("id") != null)
	{
		contactInfo = resiInfo.get("Contac");
		if(contactInfo != null)
		{
			data_map = Map();
			ownerName = "lion_visavie";
			appName = "visavie";
			report_name = "All_Contacts";
			for each  rec in contactInfo
			{
				cont_data = rec.get("Contact");
				if(cont_data != null)
				{
					//CRM -contact
					contactrec = zoho.crm.searchRecords("Contacts","(id:equals:" + cont_data.get("id").toNumber() + ")");
					if(contactrec.size() > 0)
					{
						for each  cont_rec in contactrec
						{
							if(cont_rec.get("id") != null)
							{
								dataMap = Map();
								dataMap.put("E_mail_Courriel_1",ifnull(rec.get("Email"),""));
								dataMap.put("Work_Phone_Extension",ifnull(rec.get("Work_Phone_Extension"),""));
								dataMap.put("T_l_phone_maison",ifnull(rec.get("Work_Phone"),""));
								dataMap.put("Cellulaire",ifnull(rec.get("Cell_phone"),""));
								dataMap.put("Type_de_contact",ifnull(rec.get("Type_of_contact"),""));
								updateContact = zoho.crm.updateRecord("Contacts",cont_rec.get("id").toNumber(),dataMap);
							}
						}
					}
					//Creator -contact
					contactID = cont_data.get("id");
					getCreatorContact = zoho.creator.getRecords(ownerName,appName,report_name,"ZohoCRM_ID == \"" + contactID + "\"",1,200,"zoho_mail");
					if(getCreatorContact.get("code") == 3000)
					{
						if(getCreatorContact.get("data").size() > 0)
						{
							data_map.put("Email",ifnull(rec.get("Email"),""));
							data_map.put("Work_Phone",ifnull(rec.get("Work_Phone"),""));
							data_map.put("Work_phone_Extension",ifnull(rec.get("Work_Phone_Extension"),""));
							data_map.put("Cell_Phone",ifnull(rec.get("Cell_phone"),""));
							data_map.put("Type_of_contact1",ifnull(rec.get("Type_of_contact"),""));
							creatorId = getCreatorContact.get("data").get(0).get("ID");
							updatercreator_respond = zoho.creator.updateRecord(ownerName,appName,report_name,creatorId.toLong(),data_map,Map(),"zoho_mail");
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
	dataMap.put("Module","Residence");
	dataMap.put("Process_Description","In CRM : Update contact subform records in Contact (CRM/Creator)");
	dataMap.put("In_Data",res_ID);
	dataMap.put("Out_Response",e);
	resCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
