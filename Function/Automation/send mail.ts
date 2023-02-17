if(id != null)
{
	get_deal = zoho.crm.getRecordById("Deals",id);
	// 	info get_deal;
	residence = get_deal.get("Subform_3");
	status_list = List();
	for each  subform in residence
	{
		sub = subform.get("Status");
		// 		info sub;
		if(sub != null)
		{
			openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/report-perma/All_Residences/9VmuweQeTPThv1PaWanOTCSd2EmBrn1fjZZr4TB6QZ93hbbFMs8sEVhaJVz3QJezJCmqvGys2unktXZabs4MW8tO4QwSr4EPVyvF?Deals_bidirectional=" + id,"new window");
		}
	}
}