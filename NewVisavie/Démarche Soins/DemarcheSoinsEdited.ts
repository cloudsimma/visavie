try 
{
	getHomeCare = zoho.crm.getRecordById("Home_Care_Deal",id);
	// 	info getLead;
	homecare_map = Map();
	if(getHomeCare.get("Advisors") != null)
	{
		counselorId = getHomeCare.get("Advisors").get("id");
		getCounselor = zoho.crm.getRecordById("Advisor",counselorId.toLong());
		if(getCounselor.get("id") != null)
		{
			getUser = getCounselor.get("Counselor_user");
			if(getUser != null)
			{
				homecare_map.put("Counselor_user",getUser.get("id"));
			}
		}
	}
	else
	{
		homecare_map.put("Counselor_user",null);
	}
	if(getHomeCare.get("Temporary_counselor") != null)
	{
		tempCounselorId = getHomeCare.get("Temporary_counselor").get("id");
		getTempCounselor = zoho.crm.getRecordById("Advisor",tempCounselorId.toLong());
		if(getTempCounselor.get("id") != null)
		{
			getTempUser = getTempCounselor.get("Counselor_user");
			if(getTempUser != null)
			{
				homecare_map.put("Temporary_counselor_user",getTempUser.get("id"));
			}
		}
	}
	else
	{
		homecare_map.put("Temporary_counselor_user",null);
	}
	if(homecare_map.size() > 0)
	{
		updatehomecare = zoho.crm.updateRecord("Home_Care_Deal",id,homecare_map);
		info updatehomecare;
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Home_Care_Deal");
	dataMap.put("Process_Description","CRM - Update Counselor and Temporary Counselor user");
	dataMap.put("In_Data",id.toString());
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
