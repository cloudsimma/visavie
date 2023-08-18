if(input.id != null)
{
	v_deal = zoho.crm.getRecordById("deals",id.toNumber());
	info v_deal;
	if(v_deal.containKey("Contact"))
	{
		contact = v_deal.get("Contact").toMap();
		if(contact.containKey("id"))
		{
			openUrl("https://crm.zoho.com/crm/org746753262/tab/Contacts/" + contact.get("id"),"new window");
		}
	}
}
return "";
