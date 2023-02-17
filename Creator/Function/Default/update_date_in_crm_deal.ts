void update_date_in_crm_deal()
{
	deal_crm = Deals[ID == 4252979000000379025].CRM_Deal_ID;
	get_crm_deal = zoho.crm.getRecordById("Deals",deal_crm.toLong(),Map(),"zoho_one");
	info "get_crm_deal" + get_crm_deal;
	lst = List();
	main_map = Map();
	residence = Residences[ID == 4252979000000379017].CRM_ID;
	for each  rec in get_crm_deal.get("Subform_3")
	{
		if(rec.get("Date_profile_sent").isEmpty() != false)
		{
			if(rec.get("Residence").get("id") == residence)
			{
				subform_map = Map();
				subform_map.put("Date_profile_sent",zoho.currentdate);
				subform_map.put("Residence_Number",rec.get("Residence_Number"));
				subform_map.put("Residence",rec.get("Residence"));
				subform_map.put("Invoice_Preference",rec.get("Invoice_Preference"));
				lst.add(subform_map);
			}
			else
			{
				subform_map = Map();
				subform_map.put("Residence_Number",rec.get("Residence_Number"));
				subform_map.put("Residence",rec.get("Residence"));
				subform_map.put("Invoice_Preference",rec.get("Invoice_Preference"));
				lst.add(subform_map);
			}
		}
		else
		{
			subform_map = Map();
			subform_map.put("Residence_Number",rec.get("Residence_Number"));
			subform_map.put("Residence",rec.get("Residence"));
			subform_map.put("Date_profile_sent",rec.get("Date_profile_sent"));
			lst.add(subform_map);
		}
	}
	info "lst" + lst;
	main_map.put("Subform_3",lst);
	update_crm_deal = zoho.crm.updateRecord("Deals",deal_crm.toLong(),main_map,Map(),"zoho_one");
	info update_crm_deal;
}