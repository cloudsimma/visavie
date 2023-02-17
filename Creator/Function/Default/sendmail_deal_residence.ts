void sendmail_deal_residence(Deal_Residences id)
{
	mail_list = List();
	deal_residence_list = List();
	deal_list = List();
	fet_residence_name = List();
	fet_deal_id = null;
	residence_id = List();
	for each  rec in id
	{
		fet_deal_residence = Deal_Residences[ID == rec];
		fet_deal_id = fet_deal_residence.Deals_bidirectional_lookup;
		fet_crm_residence = Residences[ID == fet_deal_residence.Residences].CRM_ID;
		fet_residence_id = Residences[ID == fet_deal_residence.Residences];
		if(fet_residence_id.ID > 0)
		{
			residence_id.add(fet_residence_id.ID);
		}
		// 		info "residence_id" + residence_id;
		// 		get_crm_deal = zoho.crm.getRecordById("Residence",fet_crm_residence.toLong(),Map(),"zoho_one");
		// 		info "get_crm_deal" + get_crm_deal;
		// 		for each  subform_contcat in get_crm_deal.get("Contac")
		// 		{
		// 			info subform_contcat.get("Send_profile_confirmation");
		// 			if(subform_contcat.get("Send_profile_confirmation") == true)
		// 			{
		// 				fet_contact = Contacts[ZohoCRM_ID == subform_contcat.get("Contact").get("id")].ID;
		// 				info "fet_contact ID" + fet_contact;
		// 				if(fet_contact != null)
		// 				{
		// 					mail_list.add(fet_contact);
		// 				}
		// 			}
		// 		}
	}
	// 	info "mail_list" + mail_list;
	if(residence_id.isEmpty() != true)
	{
		if(residence_id.size() > 1)
		{
			info "Choose Only one contact";
		}
		else
		{
			openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/form-perma/Send_Email/R2p8nYRsud3Rv4n0hqNQD72742GaFWrY5uEOx8sAOaQ4wWGafE8DOzKPq6Fu76vz4RfgAPFWA1z7zMHQCFUThM1sJmgq8CJOeAbG?Residence_Number=" + residence_id + "&Deal_ID=" + fet_deal_id,"same window");
		}
	}
}