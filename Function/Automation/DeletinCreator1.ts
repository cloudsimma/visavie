try 
{
	if(AdvisorID != null)
	{
		Owner_name = "lion_visavie";
		app_name = "visavie";
		form_linkname = "Advisor";
		report_name = "All_Advisors";
		getData = zoho.creator.getRecords(Owner_name,app_name,report_name,"CRM_AdvisorID == \"" + AdvisorID + "\"",1,200,"zoho_mail");
		if(getData.get("code") == 3000)
		{
			get_recId = getData.get("data").get(0).get("ID");
			response = invokeurl
			[
				url :"https://creatorapp.zoho.com/api/v2/lion_visavie/visavie/report/All_Advisors/" + get_recId
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
	dataMap.put("Module","Advisor");
	dataMap.put("Process_Description","Delete records in Creator");
	dataMap.put("In_Data",AdvisorID);
	dataMap.put("Out_Response",e);
}