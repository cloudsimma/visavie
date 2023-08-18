try 
{
	if(dealID != null && trackID != null)
	{
		trackInfo = zoho.crm.getRecordById("Tracking",trackID);
		if(trackInfo.get("id") != null)
		{
			newTRackID = trackInfo.get("id");
			deleteRecordMap = Map();
			deleteRecordMap.put("module","Tracking");
			deleteRecordMap.put("id",newTRackID);
			deleteResp = zoho.crm.invokeConnector("crm.delete",deleteRecordMap);
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Deal");
	dataMap.put("Process_Description","Delete Record in Tracking When Lead ID is not present");
	dataMap.put("In_Data",dealID);
	dataMap.put("Out_Response",e);
	deleteResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
