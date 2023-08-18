try 
{
	getLead = zoho.crm.getRecordById("Leads",id);
	lead_map = Map();
	if(getLead.get("id") != null)
	{
		if(getLead.get("Advisors") != null)
		{
			counselorId = getLead.get("Advisors").get("id");
			getCounselor = zoho.crm.getRecordById("Advisor",counselorId.toLong());
			if(getCounselor.get("id") != null)
			{
				getUser = getCounselor.get("Counselor_user");
				if(getUser != null)
				{
					lead_map.put("Counselor_User",getUser.get("id"));
				}
				else
				{
					lead_map.put("Counselor_User",null);
				}
			}
			else
			{
				lead_map.put("Counselor_User",null);
			}
		}
		else
		{
			lead_map.put("Counselor_User",null);
		}
		if(getLead.get("Conseiller_Counselor") != null)
		{
			tempCounselorId = getLead.get("Conseiller_Counselor").get("id");
			getTempCounselor = zoho.crm.getRecordById("Advisor",tempCounselorId.toLong());
			if(getTempCounselor.get("id") != null)
			{
				getTempUser = getTempCounselor.get("Counselor_user");
				if(getTempUser != null)
				{
					lead_map.put("Temporary_Counselor_User",getTempUser.get("id"));
				}
				else
				{
					lead_map.put("Temporary_Counselor_User",null);
				}
			}
		}
		else
		{
			lead_map.put("Temporary_Counselor_User",null);
		}
		if(lead_map.size() > 0)
		{
			updateLead = zoho.crm.updateRecord("Leads",id,lead_map);
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
	dataMap.put("Process_Description","In CRM : Update Counselor user in Lead module");
	dataMap.put("In_Data",id);
	dataMap.put("Out_Response",e);
	resCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
