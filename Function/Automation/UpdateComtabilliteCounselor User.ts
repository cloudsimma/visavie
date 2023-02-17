try 
{
	getcompatiblite = zoho.crm.getRecordById("Request_invoice",id);
	compatiblite_map = Map();
	if(getcompatiblite.get("Advisor") != null)
	{
		counselorId = getcompatiblite.get("Advisor").get("id");
		getCounselor = zoho.crm.getRecordById("Advisor",counselorId.toLong());
		if(getCounselor.get("id") != null)
		{
			getUser = getCounselor.get("Counselor_user");
			if(getUser != null)
			{
				compatiblite_map.put("Counselor_User",getUser.get("id"));
			}
		}
	}
	else
	{
		compatiblite_map.put("Counselor_User",null);
	}
	if(getcompatiblite.get("Temporary_counselor") != null)
	{
		tempCounselorId = getcompatiblite.get("Temporary_counselor").get("id");
		getTempCounselor = zoho.crm.getRecordById("Advisor",tempCounselorId.toLong());
		if(getTempCounselor.get("id") != null)
		{
			getTempUser = getTempCounselor.get("Counselor_user");
			if(getTempUser != null)
			{
				compatiblite_map.put("Temporary_counselor_user",getTempUser.get("id"));
			}
		}
	}
	else
	{
		compatiblite_map.put("Temporary_counselor_user",null);
	}
	if(compatiblite_map.size() > 0)
	{
		updatecompatibilite = zoho.crm.updateRecord("Request_invoice",id,compatiblite_map);
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Request_invoice");
	dataMap.put("Process_Description","CRM - Update Counselor and Temporary Counselor user");
	dataMap.put("In_Data",id.toString());
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}