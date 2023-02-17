if(id != null)
{
	get_leads = zoho.crm.getRecordById("Leads",id);
	lead_name = ifnull(get_leads.get("First_Namee"),"") + " " + ifnull(get_leads.get("Last_Name"),"");
	if(get_leads.containKey("Conseiller_Counselor"))
	{
		adv_map = get_leads.get("Conseiller_Counselor");
		if(adv_map.containKey("id"))
		{
			if(adv_map.get("id") != null)
			{
				v_adv = zoho.crm.getRecordById("Advisor",adv_map.get("id"));
				if(v_adv.containKey("Name"))
				{
					url = "https://crm.zoho.com/crm/org746753262/tab/Leads/" + id;
					french_content = "Bonjour " + v_adv.get("Name") + "," + "<br><br>" + "Un nouveau prospect " + "<a target=\"_blank\" href=\"" + url + " \">" + lead_name + "</a> vous a été attribué il y a " + "<b>" + "3 heures." + "</b>" + "<br><br>" + "Merci d'en prendre soin rapidement, dans le respect de nos standards d'excellence. Si vous l'avez déjà fait, veuillez mettre à jour le statut en prospect accepté vente." + "<br><br>" + "Merci et passez une bonne journée";
					english_content = "Hello " + v_adv.get("Name") + "," + "<br><br>" + "A new lead " + "<a target=\"_blank\" href=\"" + url + " \">" + lead_name + "</a> was assigned and sent to you " + "<b>" + "3 hours ago." + "</b>" + "<br><br>" + "Please take care of it quickly, in accordance with our standards of excellence. If you have already done so, please update the status to sales accepted lead." + "<br><br>" + "Thank you and have a great day";
					if(v_adv.containKey("Advisor_Email"))
					{
						sendmail
						[
							from :zoho.loginuserid
							to :v_adv.get("Advisor_Email")
							subject :"First follow-up regarding " + lead_name
							message :french_content + "<br><br><br>" + english_content
						]
					}
				}
			}
		}
	}
}