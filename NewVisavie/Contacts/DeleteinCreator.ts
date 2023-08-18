try 
{
	if(ContactID != null)
	{
		Owner_name = "lion_visavie";
		app_name = "visavie";
		form_linkname = "Contacts";
		report_name = "All_Contacts";
		getData = zoho.creator.getRecords(Owner_name,app_name,report_name,"ZohoCRM_ID == \"" + ContactID + "\"",1,200,"zoho_mail");
		if(getData.get("code") == 3000)
		{
			recId = getData.get("data").get(0).get("ID");
			response = invokeurl
			[
				url :"https://creatorapp.zoho.com/api/v2/lion_visavie/visavie/report/All_Contacts/" + recId
				type :DELETE
				connection:"zoho_mail"
			];
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
	dataMap.put("Process_Description","Delete records in Creator");
	dataMap.put("In_Data",ContactID);
	dataMap.put("Out_Response",e);
}
