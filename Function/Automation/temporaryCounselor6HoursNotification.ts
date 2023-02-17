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
					french_content = "Bonjour " + v_adv.get("Name") + "," + "<br><br>" + "Il s'agit d'un deuxième suivi concernant un nouveau prospect " + "<a target=\"_blank\" href=\"" + url + " \">" + lead_name + "</a>" + "," + " qui vous a été attribué il y a " + "<b>" + "6 heures." + "</b>" + "<br><br>" + "Si vous n'êtes pas en mesure de vous en occuper immédiatement, veuillez-nous en aviser afin que nous puissions l'attribuer à un autre conseiller." + "<br><br>" + "Merci et passez une bonne journée";
					english_content = "Hello " + v_adv.get("Name") + "," + "<br><br>" + "This is a second follow-up regarding a new lead " + "<a target=\"_blank\" href=\"" + url + " \">" + lead_name + "</a>" + "," + " which was assigned to you " + "<b>" + "6 hours ago." + "</b>" + "<br><br>" + "If you are not able to take care of it immediately, please let us know so that we may assign it to another counselor." + "<br><br>" + "Thank you and have a great day";
					if(v_adv.containKey("Advisor_Email"))
					{
						sendmail
						[
							from :zoho.loginuserid
							to :v_adv.get("Advisor_Email")
							subject :"Second follow-up regarding " + lead_name
							message :french_content + "<br><br><br>" + english_content
						]
					}
				}
			}
		}
	}
}