try 
{
	val = zoho.crm.getRecords("Deals",317,200);
	//13...317
	if(val.size() > 0)
	{
		for each  rec in val
		{
			re_map = rec.toMap();
			deal_id = re_map.get("id");
			update_map = Map();
			if(deal_id != null)
			{
				if(re_map.containKey("Client_1_number") && re_map.get("Client_1_number") != null && re_map.get("Client_1_number") != "" && re_map.get("Contact") == null)
				{
					info "deal_id-------" + deal_id;
					info "Client 1 empty " + deal_id;
					client_1 = zoho.crm.searchRecords("Contacts","(Client_Number:equals:" + re_map.get("Client_1_number") + ")");
					if(client_1.size() > 0)
					{
						client_1_map = client_1.get(0);
						if(client_1_map.get("Contact_Type") == "Client")
						{
							info "Client1 number" + client_1_map.get("id");
							update_map.put("Contact",client_1_map.get("id").toNumber());
						}
					}
					else
					{
						info "No client1 available  " + re_map.get("Client_1_number");
						// 						update_map.put("Contact",null);
					}
				}
				if(re_map.containKey("Client_2_number") && re_map.get("Client_2_number") != null && re_map.get("Client_2_number") != "" && re_map.get("Contacts") == null)
				{
					info "deal_id-------" + deal_id;
					info "Client 2 empty " + deal_id;
					client_2 = zoho.crm.searchRecords("Contacts","(Client_Number:equals:" + re_map.get("Client_2_number") + ")");
					if(client_2.size() > 0)
					{
						client_2_map = client_2.get(0);
						if(client_2_map.get("Contact_Type") == "Client")
						{
							info "Client2 number update" + client_2_map.get("id");
							update_map.put("Contacts",client_2_map.get("id").toNumber());
						}
					}
					else
					{
						info "No client2 available" + re_map.get("Client_2_number");
						// 						update_map.put("Contacts",null);
					}
				}
				if(update_map.size() > 0)
				{
					updateDeal = zoho.crm.updateRecord("Deals",deal_id,update_map);
					info "updated";
				}
			}
		}
	}
}
catch (e)
{
	info e;
	sendmail
	[
		from :zoho.adminuserid
		to :"sharmila@cloudlion.org"
		subject :"CRM contact update"
		message :e
	]
}