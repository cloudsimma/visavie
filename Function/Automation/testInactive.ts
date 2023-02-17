if(dealid != null)
{
	get_deal = zoho.crm.getRecordById("Deals",dealid);
	update_map = Map();
	if(get_deal.containKey("Counselor_Ancien_CRM_ID") && get_deal.get("Counselor_Ancien_CRM_ID") != null && get_deal.get("Counselor_Ancien_CRM_ID") != "" && get_deal.get("Counselor_Conseiller") == null)
	{
		get_counselor = zoho.crm.searchRecords("Advisor","(Ancien_CRM_ID:equals:" + get_deal.get("Counselor_Ancien_CRM_ID") + ")");
		// 					// Get counselor data
		if(get_counselor.size() > 0)
		{
			counselor_map = get_counselor.get(0);
			update_map.put("Counselor_Conseiller",counselor_map.get("id"));
		}
		else
		{
			info "No counselor available  ";
		}
	}
	if(update_map.size() > 0)
	{
		updateDeal = zoho.crm.updateRecord("Deals",dealid,update_map);
		info "updated";
	}
}