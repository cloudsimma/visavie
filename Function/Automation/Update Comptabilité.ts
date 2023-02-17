try 
{
	getCompatible = zoho.crm.getRecordById("Request_invoice",id.toLong());
	info getCompatible;
	if(getCompatible.get("Status") == "À vérifier/To be verified")
	{
		houseDealInfo = getCompatible.get("Housing_Deal");
		if(houseDealInfo != null)
		{
			update_deal_map = Map();
			update_deal_map.put("Stage","Location enregistrée/Registered renting");
			updateDealResp = zoho.crm.updateRecord("Deals",houseDealInfo.get("id").toLong(),update_deal_map);
			info updateDealResp;
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
	dataMap.put("Process_Description","CRM - Create - Update - Comptabilité");
	dataMap.put("In_Data",id);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}