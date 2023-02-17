void test_profile()
{
	try 
	{
		start_tag = "<html><head>";
		end_tag = "</head></html>";
		body_tag_open = "<body><div style='line-height:30px;font-weight: bold;font-size: 18px;padding:3px;'>";
		body_tag_close = "</body>";
		closing_tag = "</div></div></div>";
		div = "</div>";
		final = closing_tag + body_tag_close + end_tag;
		deal = Deals[ID == 4252979000000911003];
		msg = "<div>Bonjour,</div><br><div>Vous trouverez le profil client en pièce jointe.</div><br><div>Meilleures salutations.</div><br>";
		// getPageUrl = "";
		if(deal.Client_ID != null)
		{
			link = "https://creatorapp.zohopublic.com/lion_visavie/visavie/page-perma/Deal_Client_1_New/xQhvX7vQMe2JEOjDGpjCgSOAz0JhMJXjsWYtT10dO0fbgXrW6gUNS5Fxm36PWN1DHmszRsmCzFHxNbOsBDB3dUZapuywFR0sbbW2?DealCRMId=" + 4846491000007242003;
			pageUrl1 = "https://creatorapp.zohopublic.com/lion_visavie/visavie/pdf/Deal_Client_1_New/xQhvX7vQMe2JEOjDGpjCgSOAz0JhMJXjsWYtT10dO0fbgXrW6gUNS5Fxm36PWN1DHmszRsmCzFHxNbOsBDB3dUZapuywFR0sbbW2?DealCRMId=" + 4846491000007242003 + "&isc5page=true";
			getPageUrl1 = invokeurl
			[
				url :pageUrl1
				type :GET
			];
		}
		if(deal.Client_2 != null)
		{
			link = "https://creatorapp.zohopublic.com/lion_visavie/visavie/page-perma/Deal_Client2_New/8HquyArWHupa4h2OwRdPgk0UQDam9UHQ2vNsS6qbOWvF04famNUjTduerzM09s3qu5d1ssEVaO1XjDJdk9Xtvwq3w88RPH0VCqYk?DealCRMId=" + 4846491000007242003;
			pageUrl2 = "https://creatorapp.zohopublic.com/lion_visavie/visavie/pdf/Deal_Client2_New/8HquyArWHupa4h2OwRdPgk0UQDam9UHQ2vNsS6qbOWvF04famNUjTduerzM09s3qu5d1ssEVaO1XjDJdk9Xtvwq3w88RPH0VCqYk?DealCRMId=" + 4846491000007242003 + "&isc5page=true";
			getPageUrl2 = invokeurl
			[
				url :pageUrl2
				type :GET
			];
		}
		msg = msg;
		Message_Body = start_tag + body_tag_open + msg + body_tag_close + end_tag;
		// 	if(contact_lst.isEmpty() != true)
		// 	{
		// 		for each  rec in contact_lst
		// 		{
		if(getPageUrl1 != "" && getPageUrl2 != "")
		{
			sendmail
			[
				from :zoho.loginuserid
				to :"hariprema@cloudlion.org"
				subject :"Visavie " + "Démarche " + "x" + ":"
				message :msg
				Attachments :file:getPageUrl1,file:getPageUrl2
			]
		}
		else if(getPageUrl1 != "")
		{
			sendmail
			[
				from :zoho.loginuserid
				to :"hariprema@cloudlion.org"
				subject :"Visavie " + "Démarche " + "y" + ":"
				message :msg
				Attachments :file:getPageUrl1
			]
		}
		// 		}
		// 	}
		info "lodin user" + zoho.loginuserid;
	}
	catch (e)
	{
		// 	thisapp.addDeveloperLog("Creator : Send Email","Update records to Deal CRM",input.Deal_ID.toString(),e);
	}
}