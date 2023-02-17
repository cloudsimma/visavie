void create_deal_residence()
{
	fet_sendmail = Send_Email[Deal_ID == 4252979000000258029];
	fet_creator_deal = Deals[ID == fet_sendmail.Deal_ID];
	get_crm_deal = zoho.crm.getRecordById("Deals",fet_creator_deal.CRM_Deal_ID.toLong(),Map(),"zoho_one");
	info get_crm_deal;
	lst = List();
	main_map = Map();
	for each  residence in fet_sendmail.Residence_Number
	{
		for each  rec in get_crm_deal.get("Subform_3")
		{
			subform_map = Map();
			fet_residence = Residences[ID == residence].CRM_ID;
			if(fet_residence == rec.get("Residence").get("id"))
			{
				id_ = rec.get("Date_profile_sent");
				info id_;
				subform_map.put(id_,fet_sendmail.Added_Time.toDate());
				lst.add(subform_map);
			}
		}
	}
	main_map.put("Subform_3",lst);
	update_crm_deal = zoho.crm.updateRecord("Deals",fet_creator_deal.CRM_Deal_ID.toLong(),main_map,Map(),"zoho_one");
	info update_crm_deal;
}