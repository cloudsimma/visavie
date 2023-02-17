void send_mail(Residences id)
{
	lst = List();
	fet_deal_id = null;
	fet_homecaredeal_id = null;
	for each  i in id
	{
		fet = Deal_Residences[ID == i];
		lst.add(fet.ID);
		if(fet.CRM_ID != null)
		{
			fet_homecaredeal_id = fet.CRM_ID;
			info "fet_homecaredeal_id......" + fet_homecaredeal_id;
			// 			fet_deal_id = fet.Deal_ID;
			// 			info "fet_deal_id......" + fet_deal_id;
		}
	}
	// 	if(fet_deal_id != null && fet_deal_id != "")
	// 	{
	// 		openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/form-perma/Send_Email/R2p8nYRsud3Rv4n0hqNQD72742GaFWrY5uEOx8sAOaQ4wWGafE8DOzKPq6Fu76vz4RfgAPFWA1z7zMHQCFUThM1sJmgq8CJOeAbG?To_Email=" + lst + "&Deal_ID=" + fet_deal_id,"same window");
	// 	}
	if(fet_homecaredeal_id != null && fet_homecaredeal_id != "")
	{
		openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/form-perma/Send_Email/R2p8nYRsud3Rv4n0hqNQD72742GaFWrY5uEOx8sAOaQ4wWGafE8DOzKPq6Fu76vz4RfgAPFWA1z7zMHQCFUThM1sJmgq8CJOeAbG?To_Email=" + lst + "&Deal_ID=" + fet_homecaredeal_id,"same window");
	}
}