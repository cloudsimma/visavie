crm_deal = zoho.crm.getRecords("Deals",1,1);
for each  deal_info in crm_deal
{
	CRM_ID = deal_info.get("id");
	info CRM_ID;
}