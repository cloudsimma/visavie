try 
{
	if(ResID != null)
	{
		Owner_name = "lion_visavie";
		app_name = "visavie";
		form_linkname = "Residences";
		report_name = "All_Residences";
		getData = zoho.creator.getRecords(Owner_name,app_name,report_name,"CRM_ID == \"" + ResID + "\"",1,200,"zoho_mail");
		if(getData.get("code") == 3000)
		{
			get_recId = getData.get("data").get(0).get("ID");
			response = invokeurl
			[
				url :"https://creatorapp.zoho.com/api/v2/lion_visavie/visavie/report/All_Residences/" + get_recId
				type :DELETE
				connection:"zoho_mail"
			];
			// 			info response ;
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Resistance");
	dataMap.put("Process_Description","Delete records in Creator");
	dataMap.put("In_Data",ResID);
	dataMap.put("Out_Response",e);
}
