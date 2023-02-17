try 
{
	getdeal = zoho.crm.getRecordById("Deals",id);
	deal_map = Map();
	if(getdeal.get("Counselor_Conseiller") != null)
	{
		counselorId = getdeal.get("Counselor_Conseiller").get("id");
		getCounselor = zoho.crm.getRecordById("Advisor",counselorId.toLong());
		if(getCounselor.get("id") != null)
		{
			getUser = getCounselor.get("Counselor_user");
			if(getUser != null)
			{
				deal_map.put("Counselor_user",getUser.get("id"));
			}
			else
			{
				deal_map.put("Counselor_user",null);
			}
		}
	}
	else
	{
		deal_map.put("Counselor_user",null);
	}
	if(getdeal.get("Conseiller_temporaire_Temporary_counselor") != null)
	{
		tempCounselorId = getdeal.get("Conseiller_temporaire_Temporary_counselor").get("id");
		getTempCounselor = zoho.crm.getRecordById("Advisor",tempCounselorId.toLong());
		if(getTempCounselor.get("id") != null)
		{
			getTempUser = getTempCounselor.get("Counselor_user");
			if(getTempUser != null)
			{
				deal_map.put("Temporary_counselor_user",getTempUser.get("id"));
			}
			else
			{
				deal_map.put("Temporary_counselor_user",null);
			}
		}
	}
	else
	{
		deal_map.put("Temporary_counselor_user",null);
	}
	if(deal_map.size() > 0)
	{
		updatedeal = zoho.crm.updateRecord("Deals",id,deal_map);
		info updatedeal;
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Demarches");
	dataMap.put("Process_Description","CRM - Update Counselor and Temporary Counselor user");
	dataMap.put("In_Data",id.toString());
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}