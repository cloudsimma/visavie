try 
{
	getContact = zoho.crm.getRecordById("Contacts",contactID);
	/*Client number*/
	if(getContact.get("id") != null && getContact.get("Client_Number") != null)
	{
		var1 = getContact.get("Client_Number");
		var2 = getContact.get("id");
		getdeal = zoho.crm.searchRecords("Deals","(Client_1_number:equals:" + var1 + ") or (Client_2_number:equals:" + var1 + ")");
		if(getdeal.size() > 0)
		{
			for each  dealInfo in getdeal
			{
				if(dealInfo.get("Contact") != null)
				{
					client_1_ID = dealInfo.get("Contact").get("id");
					if(client_1_ID == var2)
					{
						update_data = Map();
						update_data.put("Client_1_Provinces",getContact.get("Provinces"));
						dealupdate = zoho.crm.updateRecord("Deals",dealInfo.get("id").toNumber(),update_data);
					}
				}
				if(dealInfo.get("Contacts") != null)
				{
					client_2_ID = dealInfo.get("Contacts").get("id");
					if(client_2_ID == var2)
					{
						update_data = Map();
						update_data.put("Client_2_Provinces",getContact.get("Provinces"));
						dealupdate = zoho.crm.updateRecord("Deals",dealInfo.get("id").toNumber(),update_data);
					}
				}
			}
		}
	}
	/*Deal Number*/
	if(getContact.get("id") != null && getContact.get("Deal_Number") != null)
	{
		var1 = getContact.get("Deal_Number");
		var2 = getContact.get("id");
		getdeal = zoho.crm.searchRecords("Deals","(Deal_Number:equals:" + var1 + ")");
		if(getdeal.size() > 0)
		{
			for each  dealInfo in getdeal
			{
				if(dealInfo.get("Contact") != null)
				{
					client_1_ID = dealInfo.get("Contact").get("id");
					if(client_1_ID == var2)
					{
						update_data = Map();
						update_data.put("Client_1_Provinces",getContact.get("Provinces"));
						dealupdate = zoho.crm.updateRecord("Deals",dealInfo.get("id").toNumber(),update_data);
					}
				}
				if(dealInfo.get("Contacts") != null)
				{
					client_2_ID = dealInfo.get("Contacts").get("id");
					if(client_2_ID == var2)
					{
						update_data = Map();
						update_data.put("Client_2_Provinces",getContact.get("Provinces"));
						dealupdate = zoho.crm.updateRecord("Deals",dealInfo.get("id").toNumber(),update_data);
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
	dataMap.put("Module","Contacts");
	dataMap.put("Process_Description","In CRM :Update Province in Deal Module in CRM");
	dataMap.put("In_Data",contactID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
