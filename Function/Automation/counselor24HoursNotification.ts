if(id != null)
{
	get_leads = zoho.crm.getRecordById("Leads",id);
	lead_name = ifnull(get_leads.get("First_Namee"),"") + " " + ifnull(get_leads.get("Last_Name"),"");
	if(get_leads.containKey("Advisors"))
	{
		adv_map = get_leads.get("Advisors");
		if(adv_map.containKey("id"))
		{
			if(adv_map.get("id") != null)
			{
				v_adv = zoho.crm.getRecordById("Advisor",adv_map.get("id"));
				if(v_adv.containKey("Name"))
				{
					url = "https://crm.zoho.com/crm/org746753262/tab/Leads/" + id;
					french_content = "Bonjour " + v_adv.get("Name") + "," + "<br><br>" + "Il s'agit du troisième et dernier suivi concernant un nouveau prospect " + "<a target=\"_blank\" href=\"" + url + " \">" + lead_name + "</a>" + "," + " qui vous a été attribué il y a près de " + "<b>" + "24 heures." + "</b>" + "<br><br>" + "Cette demande sera réaffectée à un autre conseiller dans les " + "<b>" + "30 prochaines minutes." + "</b>" + "Si vous souhaitez conserver ce prospect, veuillez contacter immédiatement le service à la clientèle." + "<br><br>" + "Merci et passez une bonne journée";
					english_content = "Hello " + v_adv.get("Name") + "," + "<br><br>" + "This is the third and last follow-up regarding a new lead " + "<a target=\"_blank\" href=\"" + url + " \">" + lead_name + "</a>" + "," + " which was assigned to you almost " + "<b>" + "24 hours ago." + "</b>" + "<br><br>" + "This request will be reassigned to another counselor " + "<b>" + "within 30 minutes. " + "</b>" + "If you wish to keep this lead, please contact customer service immediately. " + "<br><br>" + "Thank you and have a great day";
					if(v_adv.containKey("Advisor_Email"))
					{
						sendmail
						[
							from :zoho.loginuserid
							to :v_adv.get("Advisor_Email")
							subject :"Third follow-up regarding " + lead_name
							message :french_content + "<br><br><br>" + english_content
						]
					}
				}
			}
		}
	}
}