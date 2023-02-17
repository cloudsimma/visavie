void migrate.Update_Inactive_Counselor_in_Deal()
{
	try 
	{
		val = zoho.crm.getRecords("Deals",318,200,Map(),"zoho_one");
		if(val.size() > 0)
		{
			for each  rec in val
			{
				re_map = rec.toMap();
				deal_id = re_map.get("id");
				if(deal_id != null)
				{
					if(re_map.containKey("Counselor_Ancien_CRM_ID") && re_map.get("Counselor_Ancien_CRM_ID") != null && re_map.get("Counselor_Ancien_CRM_ID") != "" && re_map.get("Counselor_Conseiller") != null)
					{
						deal_counselor = re_map.get("Counselor_Conseiller");
						if(deal_counselor != null)
						{
							deal_counselor_ID = deal_counselor.get("id");
							creator_deal = Deals[CRM_Deal_ID == deal_id];
							if(creator_deal.count() > 0)
							{
								creator_deal.Advisor_ID=deal_counselor_ID;
								info "Success===" + deal_id;
							}
							else
							{
								info "No CRM deal match with Creator deal===" + deal_id;
							}
						}
					}
					else
					{
						info "No Inactive Counselor present in Deal CRM====" + deal_id;
					}
				}
			}
		}
	}
	catch (e)
	{
		info "alert" + e;
		thisapp.addDeveloperLog("Creator : Deal","Update Inactive Counsleor In Deal",deal_id,e);
	}
}