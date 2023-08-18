try 
{
	getcomptabille = zoho.crm.getRecordById("Request_invoice",comptabiliteID.toNumber());
	if(getcomptabille.get("id") != null && getcomptabille.get("Tracking_Id") != null)
	{
		d_map = Map();
		if(getcomptabille.get("Advisor") != null)
		{
			d_map.put("Counselor_ID",getcomptabille.get("Advisor").get("id"));
			d_map.put("Counselor_name",getcomptabille.get("Advisor").get("name"));
			/*user*/
			getCounselor = zoho.crm.getRecordById("Advisor",getcomptabille.get("Advisor").get("id").toLong());
			if(getCounselor.get("id") != null && getCounselor.get("Counselor_user") != null)
			{
				getOwner = zoho.crm.getRecordById("users",getCounselor.get("Counselor_user").get("id").toLong());
				if(getOwner.get("users") != null)
				{
					for each  rec in getOwner.get("users")
					{
						if(rec.get("status") == "active")
						{
							d_map.put("Counselor_User",rec.get("id"));
						}
						else
						{
							d_map.put("Counselor_User",null);
						}
					}
				}
			}
		}
		else
		{
			d_map.put("Counselor_ID","");
			d_map.put("Counselor_name","");
			d_map.put("Counselor_User",null);
		}
		if(getcomptabille.get("Temporary_counselor") != null)
		{
			d_map.put("Temporary_Counselor_ID",getcomptabille.get("Temporary_counselor").get("id"));
			d_map.put("Temporary_Counselor_name",getcomptabille.get("Temporary_counselor").get("name"));
			/*user*/
			getCounselor = zoho.crm.getRecordById("Advisor",getcomptabille.get("Temporary_counselor").get("id").toLong());
			if(getCounselor.get("id") != null && getCounselor.get("Counselor_user") != null)
			{
				getOwner = zoho.crm.getRecordById("users",getCounselor.get("Counselor_user").get("id").toLong());
				if(getOwner.get("users") != null)
				{
					for each  rec in getOwner.get("users")
					{
						if(rec.get("status") == "active")
						{
							d_map.put("Temporary_User",rec.get("id"));
						}
						else
						{
							d_map.put("Temporary_User",null);
						}
					}
				}
			}
		}
		else
		{
			d_map.put("Temporary_Counselor_ID","");
			d_map.put("Temporary_Counselor_name","");
			d_map.put("Temporary_User",null);
		}
		if(getcomptabille.get("Deal_ID1") != null)
		{
			d_map.put("Comptabilit_Status",getcomptabille.get("Status"));
			d_map.put("Lease_signature_date",getcomptabille.get("Lease_Signature_Date"));
			d_map.put("Lease_start_date",getcomptabille.get("Lease_Start_Date"));
			d_map.put("P_O_number",getcomptabille.get("P_O_number"));
			d_map.put("Apartment_number",getcomptabille.get("Apartment_number"));
		}
		if(getcomptabille.get("DealID2") != null)
		{
			d_map.put("Comptabilit_Status_1",getcomptabille.get("Status"));
			d_map.put("Lease_signature_date_1",getcomptabille.get("Lease_Signature_Date"));
			d_map.put("Lease_start_date_1",getcomptabille.get("Lease_Start_Date"));
			d_map.put("P_O_number_1",getcomptabille.get("P_O_number"));
			d_map.put("Apartment_number_1",getcomptabille.get("Apartment_number"));
		}
		updatecomptable = zoho.crm.updateRecord("Tracking",getcomptabille.get("Tracking_Id").toNumber(),d_map);
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Comptabilité");
	dataMap.put("Process_Description","CRM: Update Comptabilité Tracking Record");
	dataMap.put("In_Data",comptabiliteID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
