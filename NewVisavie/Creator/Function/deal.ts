void migrate.deal_migrate()
{
	try 
	{
		det = Map();
		val = zoho.crm.getRecords("Deals",477,100,det,"zoho_one");
		//307...315
		hcount = 0;
		for each  rec in val
		{
			re_map = rec.toMap();
			deal_id = re_map.get("id");
			//ariable> = Advisor [ CRM_AdvisorID == <expression> ];
			if(deal_id != null)
			{
				getCreatorDeal = Deals[CRM_Deal_ID == deal_id];
				if(getCreatorDeal.count() == 0)
				{
					deal_data = zoho.crm.getRecordById("Deals",deal_id.toNumber(),det,"zoho_one");
					counselor_creator_id = null;
					counselor_id = null;
					if(deal_data.containKey("Counselor_Conseiller") && deal_data.get("Counselor_Conseiller") != null)
					{
						counselor_map = deal_data.get("Counselor_Conseiller");
						if(counselor_map.containKey("id"))
						{
							counselor_id = counselor_map.get("id");
							counselor_fet = Advisor[CRM_AdvisorID == counselor_id.toString()];
							if(counselor_fet.count() > 0)
							{
								counselor_creator_id = counselor_fet.ID;
							}
						}
					}
					temp_counselor_creator_id = null;
					temp_counselor_id = null;
					if(deal_data.containKey("Conseiller_temporaire_Temporary_counselor") && deal_data.get("Conseiller_temporaire_Temporary_counselor") != null)
					{
						temp_counselor_map = deal_data.get("Conseiller_temporaire_Temporary_counselor");
						if(temp_counselor_map.containKey("id"))
						{
							temp_counselor_id = temp_counselor_map.get("id");
							temp_counselor_fet = Advisor[CRM_AdvisorID == temp_counselor_id.toString()];
							if(temp_counselor_fet.count() > 0)
							{
								temp_counselor_creator_id = temp_counselor_fet.ID;
							}
						}
					}
					client_1_creator_id = null;
					client_1_id = null;
					client_2_id = null;
					if(deal_data.containKey("Contact") && deal_data.get("Contact") != null)
					{
						client_1_map = deal_data.get("Contact");
						if(client_1_map.containKey("id"))
						{
							client_1_id = client_1_map.get("id");
							client_1_fet = Contacts[ZohoCRM_ID == client_1_id.toString()];
							if(client_1_fet.count() > 0)
							{
								client_1_creator_id = client_1_fet.ID;
							}
						}
					}
					client_2_creator_id = null;
					if(deal_data.containKey("Contacts") && deal_data.get("Contacts") != null)
					{
						client_2_map = deal_data.get("Contacts");
						if(client_2_map.containKey("id"))
						{
							client_2_id = client_2_map.get("id");
							client_2_fet = Contacts[ZohoCRM_ID == client_2_id.toString()];
							if(client_2_fet.count() > 0)
							{
								client_2_creator_id = client_2_fet.ID;
							}
						}
					}
					new_add = insert into Deals
					[
						Added_User=zoho.loginuser
						Deal_Number=ifnull(deal_data.get("Deal_Number"),"")
						Subject_field=ifnull(deal_data.get("Deal_Name"),"")
						Stage=ifnull(deal_data.get("Stage"),"")
						CRM_Deal_ID=ifnull(deal_data.get("id").toString(),"")
						Counselor=ifnull(counselor_creator_id,null)
						Ancien_CRM_ID=ifnull(deal_data.get("Ancien_CRM_ID"),"")
						Advisor_ID=ifnull(counselor_id.toString(),"")
						Temporary_counselor=ifnull(temp_counselor_creator_id,null)
						Counseiller_ID=ifnull(temp_counselor_id.toString(),"")
						Comments=ifnull(deal_data.get("General_comments"),"")
						Client_ID=ifnull(client_1_creator_id,null)
						Contact1_CRM_ID=ifnull(client_1_id,"")
						Budget_range_Gamme_de_budget=ifnull(deal_data.get("Budget_range_Gamme_de_budget"),"")
						Desired_moving_date=ifnull(deal_data.get("Desired_moving_date"),"")
						SAD_start_date=ifnull(deal_data.get("SAD_start_date"),"")
						Service_s_sought=ifnull(deal_data.get("Service_s_sought"),"")
						Type_s_of_client_Type_s_de_client=ifnull(deal_data.get("Type_s_of_client_Type_s_de_client"),"")
						Region=ifnull(deal_data.get("Region"),"")
						Client_2=ifnull(client_2_creator_id,null)
						Contact2_CRM_ID=ifnull(client_2_id,"")
						Profile_2_Budget_range_Gamme_de_budget=ifnull(deal_data.get("Profile_2_Budget_range_Gamme_de_budget"),"")
						Profile_2_Desired_moving_date_Date_de_d_m_nagement1=ifnull(deal_data.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"),"")
						Profile_SAD_start_date=ifnull(deal_data.get("Profile_SAD_start_date"),"")
						Profile_Service_s_sought=ifnull(deal_data.get("Profile_Service_s_sought"),"")
						Profile_2_Type_s_of_client_Type_s_de_client=ifnull(deal_data.get("Profile_2_Type_s_of_client_Type_s_de_client"),"")
						Profile_2_R_gion_Region=ifnull(deal_data.get("Profile_2_R_gion_Region"),"")
						Deal_Type=ifnull(deal_data.get("Deal_type_Type_de_d_marche"),"")
						Lead_source_s=ifnull(deal_data.get("Lead_source_1"),"")
						Personal_referral=ifnull(deal_data.get("Personal_referral"),"")
						Precision=ifnull(deal_data.get("Precision"),"")
						RSSS=ifnull(deal_data.get("Health_care_network_RSSS"),"")
						Web=ifnull(deal_data.get("Web"),"")
						Partners=ifnull(deal_data.get("Partners_Partenaires"),"")
						Marketing_traditionnel=ifnull(deal_data.get("Trade_marketing_1"),"")
						Deal_Created_through_CRM=true
						Date_Creation_date=ifnull(deal_data.get("Creation_date"),null)
					];
					if(deal_data.containKey("Contact_persons"))
					{
						cont_list = deal_data.get("Contact_persons");
						for each  tec in cont_list
						{
							tec_map = tec.toMap();
							if(tec_map.containKey("contact"))
							{
								sub_cont_map = tec_map.get("contact");
								if(sub_cont_map.containKey("id") && sub_cont_map.get("id") != null)
								{
									sub_cont_fet = Contacts[ZohoCRM_ID == sub_cont_map.get("id").toString()];
									if(sub_cont_fet.count() > 0)
									{
										new_add_contact_sub = insert into Deal_Contacts
										[
											Added_User=zoho.loginuser
											Deals_bidirectional=new_add
											Contacts=sub_cont_fet.ID
											Sorte_de_contact_Kind_of_contact=ifnull(tec_map.get("Kind_of_Contact"),"")
											Xp=ifnull(tec_map.get("Type_of_Contact_s"),"")
											Email=ifnull(tec_map.get("Email"),"")
											CP=ifnull(tec_map.get("Cell_Phone"),"")
											WP=ifnull(tec_map.get("Work_Phone"),"")
											HP=ifnull(tec_map.get("Home_Phone"),"")
											CRM_ID=ifnull(sub_cont_map.get("id").toString(),"")
											Deal_ID=ifnull(deal_data.get("id").toString(),"")
											Line_CRMID=ifnull(tec_map.get("id").toString(),"")
										];
									}
								}
							}
						}
					}
					if(deal_data.containKey("Subform_3"))
					{
						residence_list = deal_data.get("Subform_3");
						for each  item in residence_list
						{
							item_map = item.toMap();
							if(item_map.containKey("Residence"))
							{
								sub_resi_map = item_map.get("Residence");
								if(sub_resi_map != null)
								{
									if(sub_resi_map.containKey("id") && sub_resi_map.get("id") != null)
									{
										sub_resi_fet = Residences[CRM_ID == sub_resi_map.get("id").toString()];
										if(sub_resi_fet.count() > 0)
										{
											new_add_contact_sub = insert into Deal_Residences
											[
												Added_User=zoho.loginuser
												Deals_bidirectional_lookup=new_add
												Residences=sub_resi_fet.ID
												Status=ifnull(item_map.get("Statut"),"")
												Invoice_Preference=ifnull(item_map.get("Invoice_Preference"),"")
												Date_Profile_Sent=ifnull(item_map.get("Date_profile_sent").toString("dd-MMM-yyyy"),null)
												Date_Profile_Sent1=ifnull(item_map.get("Date_profile_sent").toString("dd-MMM-yyyy"),"")
												Status=ifnull(item_map.get("Statut"),"")
												CRM_ID=ifnull(sub_resi_map.get("id").toString(),"")
												Deal_ID=ifnull(deal_data.get("id").toString(),"")
												Residence_Line_Item_ID=ifnull(item_map.get("id").toString(),"")
											];
										}
									}
								}
							}
						}
					}
				}
				else
				{
					hcount = hcount + 1;
					info "Deal is already available" + deal_id;
				}
			}
			else
			{
				hcount = hcount + 1;
			}
		}
		info hcount;
	}
	catch (e)
	{
		info "alert";
		thisapp.addDeveloperLog("Creator : Deals","Deal-Migrate",deal_id,e);
	}
}
