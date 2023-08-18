try 
{
	getresidence = zoho.crm.getRecordById("Residence",ResidenceID.toNumber());
	if(getresidence.get("id") != null)
	{
		dataMap = Map();
		dataMap.put("Residence_ID",getresidence.get("id"));
		dataMap.put("Name",getresidence.get("Name"));
		dataMap.put("Residence_Name",getresidence.get("Name"));
		dataMap.put("Residence_Status",getresidence.get("Status"));
		dataMap.put("Residence_Province",getresidence.get("Province"));
		// 		dataMap.put("Modules","Residence");
		if(getresidence.get("Advisor") != null)
		{
			var1 = "";
			dataMap.put("Counselor_name",getresidence.get("Advisor").get("name"));
			dataMap.put("Counselor_ID",getresidence.get("Advisor").get("id"));
			/*user*/
			var1 = getresidence.get("Advisor").get("id");
			advisorInfo = zoho.crm.searchRecords("Advisor","(id:equals:" + var1.toNumber() + ")");
			if(advisorInfo.size() > 0)
			{
				for each  rec in advisorInfo
				{
					if(rec.get("Counselor_user") != null)
					{
						dataMap.put("Counselor_User",rec.get("Counselor_user").get("id"));
					}
				}
			}
		}
		// 		if(getresidence.get("Official_counselor_user") != null)
		// 		{
		// 			dataMap.put("Counselor_User",getresidence.get("Official_counselor_user").get("id"));
		// 		}
		subformInfo = getresidence.get("Contac");
		resList = list();
		for each  residenceSubform in subformInfo
		{
			res_map = Map();
			if(residenceSubform.get("Contact") != null)
			{
				res_map.put("Contact_Name",residenceSubform.get("Contact").get("id"));
				if(residenceSubform.get("Send_profile_confirmation") == true)
				{
					dataMap.put("Send_client_profile_Email_ID_s",residenceSubform.get("Email"));
				}
				if(residenceSubform.get("Billing_Confirmation") == true)
				{
					dataMap.put("Send_Invoice_Email_ID_s",residenceSubform.get("Email"));
				}
				if(residenceSubform.get("Send_profile_confirmation") == true && residenceSubform.get("Billing_Confirmation") == true)
				{
					dataMap.put("Send_client_profile_Email_ID_s",residenceSubform.get("Email"));
					dataMap.put("Send_Invoice_Email_ID_s",residenceSubform.get("Email"));
				}
				resList.add(res_map);
			}
		}
		dataMap.put("R_sidences_Contact",resList);
		CreateTracking = zoho.crm.createRecord("Tracking",dataMap);
		if(CreateTracking.get("id") != null)
		{
			updateResiMap = Map();
			updateResiMap.put("Tracking_Id",CreateTracking.get("id"));
			updateResi = zoho.crm.updateRecord("Residence",ResidenceID.toNumber(),updateResiMap);
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","residence");
	dataMap.put("Process_Description","CRM: Create residence Tracking Record");
	dataMap.put("In_Data",ResidenceID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
