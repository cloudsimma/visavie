void creatorDealUpdate()
{
	try 
	{
		det = Map();
		// 				val = zoho.crm.getRecords("Deals",1,1,det,"zoho_one");
		val = zoho.crm.searchRecords("Deals","(Lead_source_1:equals:RSSS/Healthcare network)",306,50,det,"zoho_one");
		//307...315
		// 		hcount = 0;
		for each  rec in val
		{
			re_map = rec.toMap();
			deal_id = re_map.get("id");
			info "1";
			//ariable> = Advisor [ CRM_AdvisorID == <expression> ];
			if(deal_id != null)
			{
				getCreatorDeal = Deals[CRM_Deal_ID == deal_id];
				if(getCreatorDeal.count() > 0)
				{
					info "2";
					deal_data = zoho.crm.getRecordById("Deals",deal_id.toNumber(),det,"zoho_one");
					counselor_creator_id = null;
					counselor_id = null;
					if(deal_data.containKey("Counselor_Conseiller") && deal_data.get("Counselor_Conseiller") != null)
					{
						counselor_map = deal_data.get("Counselor_Conseiller");
						if(counselor_map.containKey("id"))
						{
							info "3";
							counselor_id = counselor_map.get("id");
							counselor_fet = Advisor[CRM_AdvisorID == counselor_id.toString()];
							if(counselor_fet.count() > 0)
							{
								getCreatorDeal.Counselor=counselor_fet.ID.toLong();
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
							info "4";
							temp_counselor_id = temp_counselor_map.get("id");
							temp_counselor_fet = Advisor[CRM_AdvisorID == temp_counselor_id.toString()];
							if(temp_counselor_fet.count() > 0)
							{
								getCreatorDeal.Temporary_counselor=temp_counselor_fet.ID;
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
							info "5";
							client_1_id = client_1_map.get("id");
							client_1_fet = Contacts[ZohoCRM_ID == client_1_id.toString()];
							if(client_1_fet.count() > 0)
							{
								getCreatorDeal.Client_ID=client_1_fet.ID;
							}
						}
					}
					client_2_creator_id = null;
					if(deal_data.containKey("Contacts") && deal_data.get("Contacts") != null)
					{
						client_2_map = deal_data.get("Contacts");
						if(client_2_map.containKey("id"))
						{
							info "6";
							client_2_id = client_2_map.get("id");
							client_2_fet = Contacts[ZohoCRM_ID == client_2_id.toString()];
							if(client_2_fet.count() > 0)
							{
								getCreatorDeal.Client_2=client_2_fet.ID;
							}
						}
					}
					getCreatorDeal.Stage=deal_data.get("Stage");
					getCreatorDeal.Counselor=ifnull(counselor_creator_id,null);
					getCreatorDeal.Advisor_ID=ifnull(counselor_id.toString(),"");
					getCreatorDeal.Temporary_counselor=ifnull(temp_counselor_creator_id,null);
					getCreatorDeal.Counseiller_ID=ifnull(temp_counselor_id.toString(),"");
					getCreatorDeal.Comments=ifnull(deal_data.get("General_comments"),"");
					getCreatorDeal.Client_ID=ifnull(client_1_creator_id,null);
					getCreatorDeal.Contact1_CRM_ID=ifnull(client_1_id,"");
					getCreatorDeal.Budget_range_Gamme_de_budget=ifnull(deal_data.get("Budget_range_Gamme_de_budget"),"");
					getCreatorDeal.Desired_moving_date=ifnull(deal_data.get("Desired_moving_date"),"");
					getCreatorDeal.SAD_start_date=ifnull(deal_data.get("SAD_start_date"),"");
					getCreatorDeal.Service_s_sought=ifnull(deal_data.get("Service_s_sought"),"");
					getCreatorDeal.Type_s_of_client_Type_s_de_client=ifnull(deal_data.get("Type_s_of_client_Type_s_de_client"),"");
					getCreatorDeal.Region=ifnull(deal_data.get("Region"),"");
					getCreatorDeal.Client_2=ifnull(client_2_creator_id,null);
					getCreatorDeal.Contact2_CRM_ID=ifnull(client_2_id,"");
					getCreatorDeal.Profile_2_Budget_range_Gamme_de_budget=ifnull(deal_data.get("Profile_2_Budget_range_Gamme_de_budget"),"");
					getCreatorDeal.Profile_2_Desired_moving_date_Date_de_d_m_nagement1=ifnull(deal_data.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"),"");
					getCreatorDeal.Profile_SAD_start_date=ifnull(deal_data.get("Profile_SAD_start_date"),"");
					getCreatorDeal.Profile_Service_s_sought=ifnull(deal_data.get("Profile_Service_s_sought"),"");
					getCreatorDeal.Profile_2_Type_s_of_client_Type_s_de_client=ifnull(deal_data.get("Profile_2_Type_s_of_client_Type_s_de_client"),"");
					getCreatorDeal.Profile_2_R_gion_Region=ifnull(deal_data.get("Profile_2_R_gion_Region"),"");
					getCreatorDeal.Deal_Type=ifnull(deal_data.get("Deal_type_Type_de_d_marche"),"");
					getCreatorDeal.Lead_source_s=ifnull(deal_data.get("Lead_source_1"),"");
					getCreatorDeal.Personal_referral=ifnull(deal_data.get("Personal_referral"),"");
					getCreatorDeal.Precision=ifnull(deal_data.get("Precision"),"");
					getCreatorDeal.RSSS=ifnull(deal_data.get("Health_care_network_RSSS"),"");
					getCreatorDeal.Web=ifnull(deal_data.get("Web"),"");
					getCreatorDeal.Partners=ifnull(deal_data.get("Partners_Partenaires"),"");
					getCreatorDeal.Marketing_traditionnel=ifnull(deal_data.get("Trade_marketing_1"),"");
					delete from Deal_Contacts[Deals_bidirectional == getCreatorDeal.ID];
					delete from Deal_Residences[Deals_bidirectional_lookup == getCreatorDeal.ID];
					if(deal_data.containKey("Contact_persons"))
					{
						info "7";
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
											Deals_bidirectional=getCreatorDeal.ID
											Contacts=sub_cont_fet.ID
											Sorte_de_contact_Kind_of_contact=ifnull(tec_map.get("Kind_of_Contact"),"")
											Type_de_contact_Type_of_contact=ifnull(tec_map.get("Type_of_Contact_s"),"")
											Email=ifnull(tec_map.get("Email"),"")
											Cell_Phone=ifnull(tec_map.get("Cell_Phone"),"")
											Work_Phone=ifnull(tec_map.get("Work_Phone"),"")
											Home_Phone=ifnull(tec_map.get("Home_Phone"),"")
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
						info "8";
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
												Deals_bidirectional_lookup=getCreatorDeal.ID
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
					// 					hcount = hcount + 1;
					info "Deal not available in creator" + deal_id;
				}
			}
			// 			else
			// 			{
			// 				hcount = hcount + 1;
			// 			}
		}
		// 		info "no RSSS==" +hcount;
	}
	catch (e)
	{
		info "alert";
		thisapp.addDeveloperLog("In Creator : Updating-Deals","Deal-Migrate",deal_id,e);
	}
}