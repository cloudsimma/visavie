try 
{
	deal_rec = zoho.crm.searchRecords("Deals","(Lead_source_1:equals:RSSS)",1,100);
	if(deal_rec.size() > 0)
	{
		for each  deal_info in deal_rec
		{
			deal_ID = deal_info.get("id");
			if(deal_ID != null)
			{
				upda_map = Map();
				upda_map.put("Lead_source_1","RSSS/Healthcare network");
				deal_res = zoho.crm.updateRecord("Deals",deal_ID,upda_map);
				info "Success" + deal_res;
			}
		}
	}
	else
	{
		info "Deal ID+==" + deal_ID;
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Deal-Deal Source");
	dataMap.put("Process_Description","Updating deal source");
	dataMap.put("In_Data",deal_ID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
	//info ContactCreateResponse;
}