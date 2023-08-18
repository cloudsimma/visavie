if(input.id != null)
{
	v_deal = zoho.crm.getRecordById("Home_Care_Deal",id.toNumber());
	if(v_deal.containKey("Client"))
	{
		contact = v_deal.get("Client").toMap();
		if(contact.containKey("id"))
		{
			openUrl("https://crm.zoho.com/crm/org746753262/tab/Contacts/" + contact.get("id"),"new window");
		}
	}
}
return "";
