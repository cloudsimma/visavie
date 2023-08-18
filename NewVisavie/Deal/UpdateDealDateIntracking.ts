try 
{
	getDeal = zoho.crm.getRecordById("Deals",DealID);
	if(getDeal.get("id") != null)
	{
		if(getDeal.get("Stage") != null)
		{
			update_deal_map = Map();
			update_deal_map.put("Deal_status_update_date",zoho.currentdate.toString("yyyy-MM-dd"));
			updateTrack = zoho.crm.updateRecord("Tracking",getDeal.get("Tracking_Id"),update_deal_map);
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
	dataMap.put("Process_Description","CRM - Update Deal Status Update date in tracking");
	dataMap.put("In_Data",DealID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
