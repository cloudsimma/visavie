try 
{
	if(input.From_CRM = true)
	{
		if(input.Default_View_Language == "Français")
		{
			// redirect to View Client Profile
			openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/page-perma/View_Client_language/WHz2ufzU6xMRC72uUBRREsFvWh95dxrZSgr4GN9D8CVT94SZxWxwFSbfU86X1mz5z7sJuKY1De2AK1H9xgsbb1QeMBy39D9035Fb?dealCRMID=" + input.Deal_ID + "&Language=French","same window");
		}
		else if(input.Default_View_Language == "English")
		{
			openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/page-perma/View_Client_language/WHz2ufzU6xMRC72uUBRREsFvWh95dxrZSgr4GN9D8CVT94SZxWxwFSbfU86X1mz5z7sJuKY1De2AK1H9xgsbb1QeMBy39D9035Fb?dealCRMID=" + input.Deal_ID + "&Language=English","same window");
		}
	}
	else
	{
		/*Send profile*/
		if(input.Default_View_Language == "Français")
		{
			// 			openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/form-perma/Send_Mail_language/XP4ZCEkZFgupmWCKxHuy4ZDPXTNVxjGRfuVCbpmGapkze3dz0rHQNJg5QggzVKF947WpjsyP08QDpJBsCSGKCNH8fYZ7B8tpjXv6?Contact_Email=" + input.Contact_Email + "&Deal_ID=" + input.Deal_ID + "&Residence_Number=" + input.Residence_Number + "&DealResID=" + input.Deal_Resp_ID + "&Language=French","same window");
			// 			openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/form-perma/Send_Email/R2p8nYRsud3Rv4n0hqNQD72742GaFWrY5uEOx8sAOaQ4wWGafE8DOzKPq6Fu76vz4RfgAPFWA1z7zMHQCFUThM1sJmgq8CJOeAbG?Contact_Email=" + input.Contact_Email + "&Deal_ID=" + input.Deal_ID + "&Residence_Number=" + input.Residence_Number + "&DealResID=" + input.Deal_Resp_ID + "&Language=French" + "&Test_Send=true","same window");
			openUrl("https://creatorapp.zoho.com/lion_visavie/visavie/#Page:SendProfile?Contact_Email=" + input.Contact_Email + "&Deal_ID=" + input.Deal_ID + "&Residence_Number=" + input.Residence_Number + "&DealResID=" + input.Deal_Resp_ID + "&Language=French" + "&Test_Send=true","same window");
		}
		else if(input.Default_View_Language == "English")
		{
			// 			openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/form-perma/Send_Mail_language/XP4ZCEkZFgupmWCKxHuy4ZDPXTNVxjGRfuVCbpmGapkze3dz0rHQNJg5QggzVKF947WpjsyP08QDpJBsCSGKCNH8fYZ7B8tpjXv6?Contact_Email=" + input.Contact_Email + "&Deal_ID=" + input.Deal_ID + "&Residence_Number=" + input.Residence_Number + "&DealResID=" + input.Deal_Resp_ID + "&Language=English","same window");
			// 			openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/form-perma/Send_Email/R2p8nYRsud3Rv4n0hqNQD72742GaFWrY5uEOx8sAOaQ4wWGafE8DOzKPq6Fu76vz4RfgAPFWA1z7zMHQCFUThM1sJmgq8CJOeAbG?Contact_Email=" + input.Contact_Email + "&Deal_ID=" + input.Deal_ID + "&Residence_Number=" + input.Residence_Number + "&DealResID=" + input.Deal_Resp_ID + "&Language=English" + "&Test_Send=true","same window");
			openUrl("https://creatorapp.zoho.com/lion_visavie/visavie/#Page:SendProfile?Contact_Email=" + input.Contact_Email + "&Deal_ID=" + input.Deal_ID + "&Residence_Number=" + input.Residence_Number + "&DealResID=" + input.Deal_Resp_ID + "&Language=English" + "&Test_Send=true","same window");
		}
	}
}
catch (e)
{
	thisapp.addDeveloperLog("Creator :View profile","On Success",input.ID.toString(),e);
}
