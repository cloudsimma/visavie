query_map = Map();
query_map.put("Stage","Active");
val = zoho.crm.getRecords("Deals",635,100);
//630  - 635
if(val.size() > 0)
{
	for each  rec in val
	{
		re_map = rec.toMap();
		deal_id = re_map.get("id");
		if(re_map.get("Stage") != "Active")
		{
			//	info "deal_id-------" + deal_id;
			deal_anc_id = re_map.get("Ancien_CRM_ID");
			if(deal_anc_id != null && deal_anc_id != "")
			{
				update_map = Map();
				res_fet = zoho.crm.searchRecords("Import_D_marche_Residence","(Deal_Ancien_CRM_ID:equals:" + deal_anc_id + ")");
				if(res_fet.size() <= 0)
				{
					//info "There is no residense - " + deal_anc_id;
				}
				else
				{
					sublist = List();
					for each  tec in res_fet
					{
						if(tec.containKey("Residence_Ancien_CRM_ID") && tec.get("Residence_Ancien_CRM_ID") != null)
						{
							resi_lookup = zoho.crm.searchRecords("Residence","(Ancien_CRM_ID:equals:" + tec.get("Residence_Ancien_CRM_ID") + ")");
							if(resi_lookup.size() > 0)
							{
								resi_id = resi_lookup.get(0).get("id");
								if(resi_id != null)
								{
									res_map = Map();
									res_map.put("Residence_Number",ifnull(tec.get("Residence_number"),""));
									res_map.put("Date_profile_sent",ifnull(tec.get("Date_profile_sent"),null));
									res_map.put("Statut",ifnull(tec.get("Statut"),""));
									res_map.put("Residence",resi_id);
									res_map.put("Ancien_Residence_Id",ifnull(tec.get("Residence_Ancien_CRM_ID"),""));
									sublist.add(res_map);
								}
							}
						}
					}
					update_map.put("Subform_3",sublist);
				}
				contact_fet = zoho.crm.searchRecords("Import_Deal_Contacts","(D_marche_ID:equals:" + deal_anc_id + ")");
				if(contact_fet.size() <= 0)
				{
					//info "There is no contact - " + deal_anc_id;
				}
				else
				{
					sublist2 = List();
					for each  item in contact_fet
					{
						if(item.containKey("Ancient_CRM_ID") && item.get("Ancient_CRM_ID") != "" && item.get("Ancient_CRM_ID") != null)
						{
							contact_lookup = zoho.crm.searchRecords("Contacts","(Ancien_CRM_ID:equals:" + item.get("Ancient_CRM_ID") + ")");
							if(contact_lookup.size() > 0)
							{
								contact_id = contact_lookup.get(0).get("id");
								if(contact_id != null)
								{
									cont_map = Map();
									cont_map.put("contact",contact_id);
									cont_map.put("Kind_of_Contact",ifnull(item.get("Kind_of_Contact"),""));
									cont_map.put("Type_of_Contact_s",ifnull(item.get("Type_of_Contact"),""));
									cont_map.put("Email",ifnull(item.get("Email"),""));
									cont_map.put("Work_Phone",ifnull(item.get("Work_Phone"),""));
									cont_map.put("Cell_Phone",ifnull(item.get("Cell_Phone"),""));
									cont_map.put("Home_Phone",ifnull(item.get("Home_Phone"),""));
									sublist2.add(cont_map);
								}
							}
						}
					}
					update_map.put("Contact_persons",sublist2);
				}
				if(re_map.containKey("Client_1_number") && re_map.get("Client_1_number") != null && re_map.get("Client_1_number") != "")
				{
					client_1 = zoho.crm.searchRecords("Contacts","(Client_Number:equals:" + re_map.get("Client_1_number") + ")");
					if(client_1.size() > 0)
					{
						client_1_map = client_1.get(0);
						if(client_1_map.get("Contact_Type") == "Client")
						{
							update_map.put("Contact",client_1_map.get("id").toNumber());
						}
					}
					else
					{
						update_map.put("Contact",null);
					}
				}
				if(re_map.containKey("Client_2_number") && re_map.get("Client_2_number") != null && re_map.get("Client_2_number") != "")
				{
					client_2 = zoho.crm.searchRecords("Contacts","(Client_Number:equals:" + re_map.get("Client_2_number") + ")");
					if(client_2.size() > 0)
					{
						client_2_map = client_2.get(0);
						if(client_2_map.get("Contact_Type") == "Client")
						{
							update_map.put("Contacts",client_2_map.get("id").toNumber());
						}
					}
					else
					{
						update_map.put("Contacts",null);
					}
				}
				if(re_map.containKey("Counselor_Ancien_CRM_ID") && re_map.get("Counselor_Ancien_CRM_ID") != null && re_map.get("Counselor_Ancien_CRM_ID") != "")
				{
					counselor = zoho.crm.searchRecords("Advisor","(Ancien_CRM_ID:equals:" + re_map.get("Counselor_Ancien_CRM_ID") + ")");
					if(counselor.size() > 0)
					{
						counselor_map = counselor.get(0);
						update_map.put("Counselor_Conseiller",counselor_map.get("id").toNumber());
						if(counselor_map.get("id") != null)
						{
							getUser = counselor_map.get("Counselor_user");
							if(getUser != null)
							{
								update_map.put("Counselor_user",getUser.get("id").toNumber());
							}
						}
					}
				}
				if(re_map.containKey("Temporary_Ancien_CRM_ID") && re_map.get("Temporary_Ancien_CRM_ID") != null && re_map.get("Temporary_Ancien_CRM_ID") != "")
				{
					counselor2 = zoho.crm.searchRecords("Advisor","(Ancien_CRM_ID:equals:" + re_map.get("Temporary_Ancien_CRM_ID") + ")");
					if(counselor2.size() > 0)
					{
						counselor2_map = counselor2.get(0);
						update_map.put("Conseiller_temporaire_Temporary_counselor",counselor2_map.get("id").toNumber());
						if(counselor2_map.get("id") != null)
						{
							getUser2 = counselor2_map.get("Counselor_user");
							if(getUser2 != null)
							{
								update_map.put("Temporary_counselor_user",getUser2.get("id").toNumber());
							}
						}
					}
				}
				up_res = zoho.crm.updateRecord("Deals",deal_id,update_map);
			}
		}
	}
}
else
{
	info "no more";
}