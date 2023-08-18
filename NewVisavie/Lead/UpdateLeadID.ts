try 
{
	if(LeadID != null)
	{
		lead_map = Map();
		lead_map.put("test_leadID",LeadID.toString());
		update_lead = zoho.crm.updateRecord("Leads",LeadID,lead_map);
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Lead");
	dataMap.put("Process_Description","CRM : Updating CRMID in Lead Module CRM");
	dataMap.put("In_Data",LeadID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
