try 
{
	getresidence = zoho.crm.getRecordById("Residence",id);
	// 	info getLead;
	residence_map = Map();
	if(getresidence.get("Advisor") != null)
	{
		counselorId = getresidence.get("Advisor").get("id");
		getCounselor = zoho.crm.getRecordById("Advisor",counselorId.toLong());
		if(getCounselor.get("id") != null)
		{
			getUser = getCounselor.get("Counselor_user");
			if(getUser != null)
			{
				residence_map.put("Official_counselor_user",getUser.get("id"));
			}
		}
	}
	else
	{
		residence_map.put("Official_counselor_user",null);
	}
	if(residence_map.size() > 0)
	{
		updateresidence = zoho.crm.updateRecord("Residence",id,residence_map);
		info updateresidence;
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Residence");
	dataMap.put("Process_Description","CRM - Update Counselor and Temporary Counselor user");
	dataMap.put("In_Data",id.toString());
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}