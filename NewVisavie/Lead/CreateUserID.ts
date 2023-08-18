try 
{
	getLead = zoho.crm.getRecordById("Leads",Lead_ID.toNumber());
	if(getLead.get("id") != null)
	{
		lead_map = Map();
		userID = zoho.loginuserid;
		if(userID != null)
		{
			getUser = zoho.crm.searchRecords("users","(email:equals:" + userID + ")");
			if(getUser.size() > 0)
			{
				for each  userInfo in getUser.get("users")
				{
					lead_map.put("Login_User",ifnull(userInfo.get("full_name"),""));
					lead_map.put("Login_User_Email",ifnull(userInfo.get("email"),""));
					if(userInfo.get("role") != null)
					{
						lead_map.put("Login_User_Role",userInfo.get("role").get("name"));
					}
					else
					{
						lead_map.put("Login_User_Role","");
					}
				}
			}
			update_res = zoho.crm.updateRecord("Leads",Lead_ID,lead_map);
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Lead");
	dataMap.put("Process_Description","CRM:create and edit User in Lead CRM");
	dataMap.put("In_Data",Lead_ID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
