try 
{
	if(dealID1 != null && dealID1 != "" && trackID != null)
	{
		trackInfo = zoho.crm.getRecordById("Tracking",trackID);
		if(trackInfo.get("id") != null)
		{
			datamap = Map();
			datamap.put("Comptabilit_Status","");
			datamap.put("Comptabilit_Province","");
			datamap.put("Name_of_the_group","");
			datamap.put("Lease_signature_date","");
			datamap.put("Lease_start_date","");
			datamap.put("Invoice_Generation_Date","");
			datamap.put("Comptabilit_ID","");
			datamap.put("P_O_number","");
			datamap.put("Apartment_number","");
			updatetrack = zoho.crm.updateRecord("Tracking",trackInfo.get("id").toNumber(),datamap);
		}
	}
	else if(dealID2 != null && trackID != null)
	{
		trackInfo2 = zoho.crm.getRecordById("Tracking",trackID);
		if(trackInfo2.get("id") != null)
		{
			datamap = Map();
			datamap.put("Comptabilit_Status_1","");
			datamap.put("Comptabilit_Province_1","");
			datamap.put("Comptabilit_ID_1","");
			datamap.put("Lease_signature_date_1","");
			datamap.put("Lease_start_date_1","");
			datamap.put("P_O_number_1","");
			datamap.put("Apartment_number_1","");
			datamap.put("Name_of_the_group_1","");
			datamap.put("Invoice_Generation_Date_1","");
			updatetrack = zoho.crm.updateRecord("Tracking",trackInfo2.get("id").toNumber(),datamap);
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Comptabilité");
	dataMap.put("Process_Description","Delete Record in Tracking");
	dataMap.put("In_Data",compID);
	dataMap.put("Out_Response",e);
	deleteResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
