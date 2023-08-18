if(Lead_ID != null)
{
	lead_map = Map();
	lead_map.put("Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
	update_res = zoho.crm.updateRecord("Leads",Lead_ID,lead_map);
}
