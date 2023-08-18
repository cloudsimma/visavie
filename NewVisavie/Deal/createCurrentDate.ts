try 
{
	getdealinfo = zoho.crm.getRecordById("Deals",DealID);
	if(getdealinfo.get("id") != null)
	{
		deal_map = Map();
		// 	//counselor user update if the login user has the role as counselor
		// 	if(getdealinfo.get("Counselor_Conseiller") == null)
		// 	{
		// 		userID = "";
		// 		userRole = "";
		// 		getUsers = zoho.crm.searchRecords("users","(email:equals:" + zoho.loginuserid + ")");
		// 		if(getUsers.get("users") != null && getUsers.get("users").size() > 0)
		// 		{
		// 			userInfo = getUsers.get("users").get(0);
		// 			userID = userInfo.get("id");
		// 			userRole = userInfo.get("role").get("name");
		// 		}
		// 		if(userRole == "Conseillères" && userID != null)
		// 		{
		// 			get_counselor = zoho.crm.searchRecords("Advisor","(Counselor_user:equals:" + userID + ")");
		// 			if(get_counselor.size() > 0)
		// 			{
		// 				get_counselor_id = get_counselor.get(0).get("id");
		// 				if(get_counselor_id != null)
		// 				{
		// 					housingDealMap = Map();
		// 					housingDealMap.put("Counselor_Conseiller",get_counselor_id);
		// 					housingDealMap.put("Counselor_user",userID);
		// 					updateDeal = zoho.crm.updateRecord("Deals",getdealinfo.get("id").toNumber(),housingDealMap);
		// 				}
		// 			}
		// 		}
		// 	}
		//Current date update
		deal_map.put("Creation_date",zoho.currentdate.toString("yyyy-MM-dd"));
		update_res = zoho.crm.updateRecord("Deals",getdealinfo.get("id").toNumber(),deal_map);
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Deal");
	dataMap.put("Process_Description","IN CRM -Counselor User is null");
	dataMap.put("In_Data",DealID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
	//info ContactCreateResponse;
}
