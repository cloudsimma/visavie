try 
{
	getLead = zoho.crm.getRecordById("New_Leads",LeadID);
	if(getLead.get("id") != null)
	{
		lead_map = Map();
		lead_map.put("Name",getLead.get("Lead_First_Name") + " " + getLead.get("Lead_Last_Name"));
		lead_map.put("Lead_Record_ID",getLead.get("id"));
		lead_map.put("Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
		/*user*/
		userID = zoho.loginuserid;
		if(userID != null)
		{
			getUser = zoho.crm.searchRecords("users","(email:equals:" + userID + ")");
			if(getUser.size() > 0)
			{
				for each  userInfo in getUser.get("users")
				{
					lead_map.put("User_Name",ifnull(userInfo.get("full_name"),""));
					lead_map.put("User_Email",ifnull(userInfo.get("email"),""));
					if(userInfo.get("role") != null)
					{
						lead_map.put("User_Role",userInfo.get("role").get("name"));
					}
					else
					{
						lead_map.put("User_Role","");
					}
				}
			}
		}
		updateLead = zoho.crm.updateRecord("New_Leads",LeadID,lead_map);
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module"," New Lead");
	dataMap.put("Process_Description","CRM :Create fields value in  New Lead Module CRM");
	dataMap.put("In_Data",LeadID);
	dataMap.put("Out_Response",e);
	leadResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
