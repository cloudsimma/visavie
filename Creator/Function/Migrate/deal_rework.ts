void migrate.deal_rework()
{
	try 
	{
		det = Map();
		val = zoho.crm.getRecords("Deals",316,200,det,"zoho_one");
		for each  rec in val
		{
			re_map = rec.toMap();
			deal_id = re_map.get("id");
			if(deal_id != null)
			{
				// 				info "deal_id----------" + deal_id;
				v_fet = Deals[CRM_Deal_ID == deal_id.toString()];
				if(v_fet.count() > 0)
				{
					client_1_creator_id = null;
					client_1_id = null;
					client_2_id = null;
					if(re_map.containKey("Contact") && re_map.get("Contact") != null)
					{
						client_1_map = re_map.get("Contact");
						if(re_map.get("Contact") != null)
						{
							// 							info "Contact 1" + re_map.get("Contact");
							client_1_id = client_1_map.get("id");
							client_1_fet = Contacts[ZohoCRM_ID == client_1_id.toString()];
							if(client_1_fet.count() > 0)
							{
								client_1_creator_id = client_1_fet.ID;
							}
							else
							{
								info "No Contact client 1 -------" + client_1_id;
							}
						}
					}
					client_2_creator_id = null;
					if(re_map.containKey("Contacts") && re_map.get("Contacts") != null)
					{
						client_2_map = re_map.get("Contacts");
						if(re_map.get("Contacts") != null)
						{
							// 							info "Contact 2" + re_map.get("Contacts");
							client_2_id = client_2_map.get("id");
							client_2_fet = Contacts[ZohoCRM_ID == client_2_id.toString()];
							if(client_2_fet.count() > 0)
							{
								client_2_creator_id = client_2_fet.ID;
							}
							else
							{
								info "No Contact client 2-------" + client_2_id;
							}
						}
					}
					v_fet.Client_ID=ifnull(client_1_creator_id,null);
					v_fet.Contact1_CRM_ID=ifnull(client_1_id,null);
					v_fet.Client_2=ifnull(client_2_creator_id,null);
					v_fet.Contact2_CRM_ID=ifnull(client_2_id,null);
					info "Success Deal" + deal_id;
				}
				else
				{
					info "No Deal---" + deal_id;
				}
			}
		}
	}
	catch (e)
	{
		info "alert" + e;
		thisapp.addDeveloperLog("Creator : Deals","Deal-Rework",deal_id,e);
	}
}