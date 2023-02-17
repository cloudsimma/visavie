void send_mail_single_record(Deal_Residences id)
{
	mail_list = List();
	fet_deal_id = Deals[ID == id.Deals_bidirectional_lookup].ID;
	fet_residence = Residences[ID == id.Residences].CRM_ID;
	get_crm_deal = zoho.crm.getRecordById("Residence",fet_residence.toLong(),Map(),"zoho_one");
	for each  subform_contcat in get_crm_deal.get("Contac")
	{
		if(subform_contcat.get("Send_profile_confirmation") == true)
		{
			fet_contact = Contacts[ZohoCRM_ID == subform_contcat.get("Contact").get("id")].Email;
			if(fet_contact != null)
			{
				mail_list.add(fet_contact);
			}
		}
	}
	openUrl("https://creatorapp.zoho.com/lion_visavie/visavie/#Form:Send_Email?Contact_Email=" + mail_list + "&Deal_ID=" + fet_deal_id + "&Residence_Number=" + id.Residences,"same window");
}