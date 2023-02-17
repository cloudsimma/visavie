try 
{
	val = zoho.crm.getRecords("Deals",317,200);
	//278...317
	if(val.size() > 0)
	{
		for each  rec in val
		{
			re_map = rec.toMap();
			deal_id = re_map.get("id");
			update_map = Map();
			if(deal_id != null)
			{
				if(re_map.containKey("Counselor_Ancien_CRM_ID") && re_map.get("Counselor_Ancien_CRM_ID") != null && re_map.get("Counselor_Ancien_CRM_ID") != "" && re_map.get("Counselor_Conseiller") == null)
				{
					get_counselor = zoho.crm.searchRecords("Advisor","(Ancien_CRM_ID:equals:" + re_map.get("Counselor_Ancien_CRM_ID") + ")");
					// 					// Get counselor data
					if(get_counselor.size() > 0)
					{
						counselor_map = get_counselor.get(0);
						update_map.put("Counselor_Conseiller",counselor_map.get("id"));
						info "update";
					}
					else
					{
						info "No counselor available  ";
					}
				}
				if(update_map.size() > 0)
				{
					updateDeal = zoho.crm.updateRecord("Deals",deal_id,update_map);
					info "updated";
				}
			}
		}
	}
}
catch (e)
{
	info e;
	sendmail
	[
		from :zoho.adminuserid
		to :"sharmila@cloudlion.org"
		subject :"CRM contact update"
		message :e
	]
}