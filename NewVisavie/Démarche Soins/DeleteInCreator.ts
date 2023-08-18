try 
{
	if(HomecareID != null)
	{
		Owner_name = "lion_visavie";
		app_name = "visavie";
		form_linkname = "Home_Care_Deal";
		report_name = "All_Home_Care_Deals";
		getData = zoho.creator.getRecords(Owner_name,app_name,report_name,"CRM_HomeCareDealId == \"" + HomecareID + "\"",1,200,"zoho_mail");
		if(getData.get("code") == 3000)
		{
			get_recId = getData.get("data").get(0).get("ID");
			response = invokeurl
			[
				url :"https://creatorapp.zoho.com/api/v2/lion_visavie/visavie/report/All_Home_Care_Deals/" + get_recId
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
	dataMap.put("Module","Démarche Soins");
	dataMap.put("Process_Description","Delete records in Creator");
	dataMap.put("In_Data",HomecareID);
	dataMap.put("Out_Response",e);
}
