if(id != null)
{
	get_deal_rec = zoho.crm.getRecordById("Deals",id);
	info get_deal_rec;
	if(get_deal_rec.containKey("Subform_3"))
	{
		subform = get_deal_rec.get("Subform_3");
		info subform;
		for each  sub in subform
		{
			sub_list = sub.toMap();
			info sub_list;
			status = sub_list.get("Status");
			info status;
			if(status != "Temporarily suspended - awaiting payment" || status != "Temporarily suspended - inadequate services" || status != "Closed" || status != "Closed by management")
			{
				info "true";
				openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/report-perma/All_Residences/9VmuweQeTPThv1PaWanOTCSd2EmBrn1fjZZr4TB6QZ93hbbFMs8sEVhaJVz3QJezJCmqvGys2unktXZabs4MW8tO4QwSr4EPVyvF?Deal_ID=id","new window");
			}
		}
	}
}