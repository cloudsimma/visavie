resp = "";
dealID = "";
dealID1 = "";
try 
{
	getLeads = zoho.crm.getRecordById("Leads",LeadID.toLong());
	if(getLeads.get("id") != null)
	{
		/*check type conversion -start*/
		dealavailable = false;
		dealwithdata = false;
		if(DealType == "1 démarche avec 2 prospects/1 deal with 2 leads" || DealType == "2 démarches avec 2 prospects/2 deals with 2 leads")
		{
			if(getLeads.get("Prospect_First_Name2") != null && getLeads.get("Prospect_Last_Name2") != null && getLeads.get("Prospect_Sex2") != null && getLeads.get("Prospect_Province2") != null)
			{
				dealwithdata = true;
			}
			else
			{
				updatemap = Map();
				updatemap.put("Add_second_client","Oui/Yes");
				updaterecord = zoho.crm.updateRecord("Leads",LeadID.toLong(),updatemap);
				dealavailable = true;
			}
		}
		if(dealavailable == true)
		{
			resp = "Please enter prospect/client 2 details";
		}
		/*check type conversion -ends*/
		else
		{
			/* General information*/
			housingDealMap = Map();
			housingDealMap.put("Owner",current_userID.tolong());
			housingDealMap.put("Creation_date",zoho.currentdate.toString("yyyy-MM-dd"));
			housingDealMap.put("Stage","Active");
			housingDealMap.put("Through_Lead","Yes");
			housingDealMap.put("Tracking_Id",getLeads.get("Tracking_Id"));
			housingDealMap.put("Deal_IDS","Deal1");
			housingDealMap.put("Lead_ID",getLeads.get("id"));
			Counselor = getLeads.get("Advisors");
			if(Counselor != null)
			{
				housingDealMap.put("Advisors",Counselor.get("id"));
			}
			User = getLeads.get("Counselor_User");
			if(User != null)
			{
				housingDealMap.put("Counselor_user",User.get("id"));
			}
			Temporary_counselor = getLeads.get("Conseiller_Counselor");
			if(Temporary_counselor != null)
			{
				housingDealMap.put("Temporary_counselor",Temporary_counselor.get("id"));
			}
			Temporary_User = getLeads.get("Temporary_Counselor_User");
			if(Temporary_User != null)
			{
				housingDealMap.put("Temporary_counselor_user",Temporary_User.get("id"));
			}
			housingDealMap.put("Personal_referral",getLeads.get("Personal_referral"));
			housingDealMap.put("Comments",getLeads.get("General_comments"));
			/* Deal source*/
			housingDealMap.put("Deal_type_Type_de_d_marche",getLeads.get("Lead_type"));
			housingDealMap.put("Lead_source",getLeads.get("Source_du_prospect"));
			if(getLeads.get("Source_du_prospect") == "Ami/Famille-Friend/Family")
			{
				housingDealMap.put("Precision",getLeads.get("Precision"));
			}
			if(getLeads.get("Source_du_prospect") == "Ancient client/Former customer")
			{
				housingDealMap.put("Precision",getLeads.get("Precision"));
			}
			if(getLeads.get("Source_du_prospect") == "Autre/Other")
			{
				housingDealMap.put("Precision",getLeads.get("Precision"));
			}
			if(getLeads.get("Source_du_prospect") == "Marketing traditionnel/Trad.marketing")
			{
				housingDealMap.put("Precision",getLeads.get("Precision"));
				housingDealMap.put("Traditionnal_marketing",getLeads.get("Marketing_traditionnel_Trad_marketing"));
			}
			if(getLeads.get("Source_du_prospect") == "Partenaires/Partners")
			{
				housingDealMap.put("Partners_Partenaires",getLeads.get("Partners_Partenaires"));
				housingDealMap.put("Precision",getLeads.get("Precision"));
			}
			if(getLeads.get("Source_du_prospect") == "RSSS/Healthcare network")
			{
				housingDealMap.put("Health_care_network_RSSS",getLeads.get("Health_care_network"));
				housingDealMap.put("Precision",getLeads.get("Precision"));
			}
			if(getLeads.get("Source_du_prospect") == "Web")
			{
				housingDealMap.put("Web",getLeads.get("Web_s"));
				housingDealMap.put("Precision",getLeads.get("Precision"));
			}
			housingDealMap.put("Languages",getLeads.get("Preffered_Languages"));
			/*lookup field ---start*/
			if(getLeads.get("Hospital") != null)
			{
				hsptlInfo = zoho.crm.getRelatedRecords("Hospital_Contacts22","Leads",getLeads.get("id"));
				IDlist = List();
				for each  rec in hsptlInfo
				{
					if(rec.get("Hospital") != null)
					{
						hopsitalID = rec.get("Hospital").get("id");
						IDlist.add(hopsitalID);
					}
					contactID = IDlist.getasstring(0);
				}
				housingDealMap.put("Hospital",contactID.tolong());
			}
			/*lookup field ---end*/
			/* Create 1 deal using 1 prospects--- starts */
			if(getLeads.get("Test") == "1 démarche avec 1 prospect/1 deal with 1 lead")
			{
				housingDealMap.put("Name",getLeads.get("First_Namee") + " " + getLeads.get("Last_Name"));
				/*	Create  Prospect contact 1 */
				Client_1_contact_ID = "";
				contactList = List();
				if(getLeads.get("First_Namee") != "" && getLeads.get("Last_Name") != "")
				{
					primaryContactMap = Map();
					primaryContactMap.put("First_Name",getLeads.get("First_Namee"));
					primaryContactMap.put("Nom_de_jeune_fille",getLeads.get("Nom_de_jeune_fille_Maiden_name"));
					primaryContactMap.put("Date_of_Birth",getLeads.get("Date_de_naissance_Birth_date"));
					primaryContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail"));
					primaryContactMap.put("T_l_phone_travail",getLeads.get("T_l_phone_maison_Home_phone"));
					primaryContactMap.put("Cellulaire",getLeads.get("Portable_Mobile"));
					primaryContactMap.put("Last_Name",getLeads.get("Last_Name"));
					primaryContactMap.put("Sexe",getLeads.get("Sex"));
					primaryContactMap.put("E_mail_Courriel_1",getLeads.get("Courriel_Email"));
					primaryContactMap.put("Provinces",getLeads.get("Province"));
					primaryContactMap.put("Ville_City",getLeads.get("Ville_City"));
					primaryContactMap.put("language_spoken1",getLeads.get("Language"));
					primaryContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication"));
					primaryContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
					primaryContactMap.put("Layout","4846491000000339001");
					primaryContactMap.put("Contact_Type","Client");
					Counselor = getLeads.get("Advisors");
					if(Counselor != null)
					{
						primaryContactMap.put("Counselor",Counselor.get("id"));
					}
					User = getLeads.get("Counselor_User");
					if(User != null)
					{
						primaryContactMap.put("Counselor_user",User.get("id"));
					}
					Temporary_counselor = getLeads.get("Conseiller_Counselor");
					if(Temporary_counselor != null)
					{
						primaryContactMap.put("Temporary_counselor",Temporary_counselor.get("id"));
					}
					Temporary_User = getLeads.get("Temporary_Counselor_User");
					if(Temporary_User != null)
					{
						primaryContactMap.put("Temporary_counselor_user",Temporary_User.get("id"));
					}
					createPrimaryContact = zoho.crm.createRecord("Contacts",primaryContactMap);
					if(createPrimaryContact.get("id") != null)
					{
						Client_1_contact_ID = createPrimaryContact.get("id");
						get_contact_Info = zoho.crm.getRecordById("Contacts",Client_1_contact_ID);
						if(get_contact_Info.get("id") != null)
						{
							Update_contact_C1 = Map();
							Update_contact_C1.put("Client_Number",get_contact_Info.get("Num_ro_Client"));
							housingDealMap.put("Client_1_number",get_contact_Info.get("Num_ro_Client"));
							update_Number_contact = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,Update_contact_C1);
						}
					}
					housingDealMap.put("Client",createPrimaryContact.get("id"));
					housingDealMap.put("Client_1_Provinces",getLeads.get("Province"));
					if(getLeads.get("Do_you_like_to_enter_prospect_1_profile_details") == "Oui/Yes")
					{
						/* Lead Profile*/
						housingDealMap.put("Type_of_client",getLeads.get("Type_s_of_client"));
						housingDealMap.put("Budget_range_Gamme_de_budget",getLeads.get("Budget_range"));
						housingDealMap.put("Desired_moving_date",getLeads.get("Desired_moving_date"));
						housingDealMap.put("Service_s_sought",getLeads.get("Type_s_of_service_s"));
						housingDealMap.put("Region",getLeads.get("Region"));
						housingDealMap.put("SAD_start_date",getLeads.get("home_care_start_date"));
					}
					if(createPrimaryContact.get("id") != null)
					{
						primary_map = Map();
						primary_map.put("contact",createPrimaryContact.get("id"));
						primary_map.put("Kind_of_Contact","Client");
						primary_map.put("Cell_Phone",getLeads.get("Portable_Mobile"));
						primary_map.put("Email",getLeads.get("Courriel_Email"));
						primary_map.put("Home_Phone",getLeads.get("T_l_phone_maison_Home_phone"));
						primary_map.put("Work_Phone",getLeads.get("T_l_phone_travail"));
						primary_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
						contactList.add(primary_map);
					}
				}
				/* Create Primary contact */
				if(getLeads.get("Choose_Primary_Contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_1 = "";
					if(getLeads.get("Prospect_Contact_1_First_Name") != "" && getLeads.get("Prospect_Contact_1_Last_Name") != "")
					{
						Prospect_ContactMap = Map();
						Prospect_ContactMap.put("First_Name",getLeads.get("Prospect_Contact_1_First_Name"));
						Prospect_ContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_P1"));
						Prospect_ContactMap.put("T_l_phone_travail",getLeads.get("Prospect_Contact_1_Home_Phone"));
						Prospect_ContactMap.put("Cellulaire",getLeads.get("Prospect_Contact_1_Cellphone"));
						Prospect_ContactMap.put("Type_de_contact",getLeads.get("Prospect_Contact_1_Type_of_contact"));
						Prospect_ContactMap.put("language_spoken1",getLeads.get("Prospect_Contact_1_Language"));
						Prospect_ContactMap.put("Last_Name",getLeads.get("Prospect_Contact_1_Last_Name"));
						Prospect_ContactMap.put("Sexe",getLeads.get("Prospect_Contact_1_Sex"));
						Prospect_ContactMap.put("E_mail_Courriel_1",getLeads.get("Prospect_Contact_1_Email"));
						Prospect_ContactMap.put("Provinces",getLeads.get("Prospect_Contact_1_Province"));
						Prospect_ContactMap.put("Ville_City",getLeads.get("Ville_City_P"));
						Prospect_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_P"));
						Prospect_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_p"));
						Prospect_ContactMap.put("Layout","4846491000000091033");
						Prospect_ContactMap.put("Contact_Type","Primaire/Primary");
						createProspectcontact = zoho.crm.createRecord("Contacts",Prospect_ContactMap);
						if(createProspectcontact.get("id") != null)
						{
							contact_Other_1 = createProspectcontact.get("id");
							prospect_contact_map = Map();
							prospect_contact_map.put("contact",createProspectcontact.get("id"));
							prospect_contact_map.put("Kind_of_Contact","Primaire/Primary");
							prospect_contact_map.put("Cell_Phone",getLeads.get("Prospect_Contact_1_Cellphone"));
							prospect_contact_map.put("Email",getLeads.get("Prospect_Contact_1_Email"));
							prospect_contact_map.put("Home_Phone",getLeads.get("Prospect_Contact_1_Home_Phone"));
							prospect_contact_map.put("Type_of_Contact_s",getLeads.get("Prospect_Contact_1_Type_of_contact"));
							prospect_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_P1"));
							prospect_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_p"));
							contactList.add(prospect_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Primary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Primary_info = getLeads.get("Primary_Contacts");
					if(Existing_Primary_info != null)
					{
						Existing_primary_ID = Existing_Primary_info.get("id");
						getexisting_contact = zoho.crm.getRecordById("Contacts",Existing_primary_ID);
						if(getexisting_contact.get("id") != null)
						{
							Existing_Primary_contact = Map();
							Existing_Primary_contact.put("contact",Existing_primary_ID);
							Existing_Primary_contact.put("Kind_of_Contact","Primaire/Primary");
							Existing_Primary_contact.put("Cell_Phone",getexisting_contact.get("Cellulaire"));
							Existing_Primary_contact.put("Email",getexisting_contact.get("E_mail_Courriel_1"));
							Existing_Primary_contact.put("Home_Phone",getexisting_contact.get("T_l_phone_travail"));
							Existing_Primary_contact.put("Type_of_Contact_s",getexisting_contact.get("Type_de_contact"));
							Existing_Primary_contact.put("Work_Phone",getexisting_contact.get("T_l_phone_maison"));
							Existing_Primary_contact.put("Work_Phone_Extension",getexisting_contact.get("Work_Phone_Extension"));
							contactList.add(Existing_Primary_contact);
						}
					}
				}
				/*  Create Secondary contact */
				if(getLeads.get("Choose_Secondary_Contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_2 = "";
					if(getLeads.get("Secondary_First_Name") != "" && getLeads.get("Secondary_Last_Name") != "")
					{
						Secondary_ContactMap = Map();
						Secondary_ContactMap.put("First_Name",getLeads.get("Secondary_First_Name"));
						Secondary_ContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_S"));
						Secondary_ContactMap.put("T_l_phone_travail",getLeads.get("Secondary_Home_Phone"));
						Secondary_ContactMap.put("Cellulaire",getLeads.get("Secondary_Cellphone"));
						Secondary_ContactMap.put("Type_de_contact",getLeads.get("Secondary_Contact"));
						Secondary_ContactMap.put("language_spoken1",getLeads.get("Language_S"));
						Secondary_ContactMap.put("Last_Name",getLeads.get("Secondary_Last_Name"));
						Secondary_ContactMap.put("Sexe",getLeads.get("Secondary_Sex"));
						Secondary_ContactMap.put("E_mail_Courriel_1",getLeads.get("Secondary_Con_Email"));
						Secondary_ContactMap.put("Provinces",getLeads.get("Secondary_Province"));
						Secondary_ContactMap.put("Ville_City",getLeads.get("Ville_City_S"));
						Secondary_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_S"));
						Secondary_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_s"));
						Secondary_ContactMap.put("Layout","4846491000000091033");
						Secondary_ContactMap.put("Contact_Type","Secondaire/Secondary");
						createSecondarycontact = zoho.crm.createRecord("Contacts",Secondary_ContactMap);
						if(createSecondarycontact.get("id") != null)
						{
							contact_Other_2 = createSecondarycontact.get("id");
							Sec_contact_map = Map();
							Sec_contact_map.put("contact",createSecondarycontact.get("id"));
							Sec_contact_map.put("Kind_of_Contact","Secondaire/Secondary");
							Sec_contact_map.put("Cell_Phone",getLeads.get("Secondary_Cellphone"));
							Sec_contact_map.put("Email",getLeads.get("Secondary_Con_Email"));
							Sec_contact_map.put("Home_Phone",getLeads.get("Secondary_Home_Phone"));
							Sec_contact_map.put("Type_of_Contact_s",getLeads.get("Secondary_Contact"));
							Sec_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_s"));
							Sec_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_S"));
							contactList.add(Sec_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Secondary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_secondary_info = getLeads.get("Secondary_Contact1");
					if(Existing_secondary_info != null)
					{
						Existing_secondary_ID = Existing_secondary_info.get("id");
						getexisting_S_contact = zoho.crm.getRecordById("Contacts",Existing_secondary_ID);
						if(getexisting_S_contact.get("id") != null)
						{
							Existing_S_contact = Map();
							Existing_S_contact.put("contact",Existing_secondary_ID);
							Existing_S_contact.put("Kind_of_Contact","Secondaire/Secondary");
							Existing_S_contact.put("Cell_Phone",getexisting_S_contact.get("Cellulaire"));
							Existing_S_contact.put("Email",getexisting_S_contact.get("E_mail_Courriel_1"));
							Existing_S_contact.put("Home_Phone",getexisting_S_contact.get("T_l_phone_travail"));
							Existing_S_contact.put("Type_of_Contact_s",getexisting_S_contact.get("Type_de_contact"));
							Existing_S_contact.put("Work_Phone",getexisting_S_contact.get("T_l_phone_maison"));
							Existing_S_contact.put("Work_Phone_Extension",getexisting_S_contact.get("Work_Phone_Extension"));
							contactList.add(Existing_S_contact);
						}
					}
				}
				/*Create Healthcare contact*/
				if(getLeads.get("Choose_Healthcare_Contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_3 = "";
					if(getLeads.get("Healthcare_First_Name") != "" && getLeads.get("Healthcare_Last_Name") != "")
					{
						Health_ContactMap = Map();
						Health_ContactMap.put("First_Name",getLeads.get("Healthcare_First_Name"));
						Health_ContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_R"));
						Health_ContactMap.put("T_l_phone_travail",getLeads.get("Healthcare_Home_Phone"));
						Health_ContactMap.put("Cellulaire",getLeads.get("Healthcare_contact_Cellphone"));
						Health_ContactMap.put("Type_de_contact",getLeads.get("Healthcare_Contact"));
						Health_ContactMap.put("language_spoken1",getLeads.get("Language_H"));
						Health_ContactMap.put("Last_Name",getLeads.get("Healthcare_Last_Name"));
						Health_ContactMap.put("Sexe",getLeads.get("Healthcare_Sex"));
						Health_ContactMap.put("E_mail_Courriel_1",getLeads.get("Healthcare_Email"));
						Health_ContactMap.put("Provinces",getLeads.get("Healthcare_Province"));
						Health_ContactMap.put("Ville_City",getLeads.get("Ville_City_R"));
						Health_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_R"));
						Health_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
						Health_ContactMap.put("Layout","4846491000000091033");
						Health_ContactMap.put("Contact_Type","Soins de santé/Health Care");
						Health_ContactMap.put("Lead_ID",getLeads.get("id"));
						createHealthcontact = zoho.crm.createRecord("Contacts",Health_ContactMap);
						if(createHealthcontact.get("id") != null)
						{
							/*Add Hospital contact*/
							hsptlContact = Map();
							hsptlContact.put("Name",getLeads.get("Healthcare_First_Name") + " " + getLeads.get("Healthcare_Last_Name"));
							hsptlContact.put("Email",getLeads.get("Healthcare_Email"));
							hsptlContact.put("Phone",getLeads.get("Healthcare_contact_Cellphone"));
							hsptlContact.put("Contact_Sex",getLeads.get("Healthcare_Sex"));
							hsptlContact.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
							hsptlContact.put("Contact_ID",createHealthcontact.get("id"));
							createHospitalcontact = zoho.crm.createRecord("Hospital_Contacts",hsptlContact);
							if(createHospitalcontact.get("id") != null)
							{
								if(getLeads.get("Hospital") == null)
								{
									/*updating Hospital Contact in Deal*/
									housingDealMap.put("Hospital",createHospitalcontact.get("id"));
								}
							}
							/*create In deal*/
							contact_Other_3 = createHealthcontact.get("id");
							Health_contact_map = Map();
							Health_contact_map.put("contact",createHealthcontact.get("id"));
							Health_contact_map.put("Kind_of_Contact","Soins de santé/Health Care");
							Health_contact_map.put("Cell_Phone",getLeads.get("Healthcare_contact_Cellphone"));
							Health_contact_map.put("Email",getLeads.get("Healthcare_Email"));
							Health_contact_map.put("Home_Phone",getLeads.get("Healthcare_Home_Phone"));
							Health_contact_map.put("Type_of_Contact_s",getLeads.get("Healthcare_Contact"));
							Health_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
							Health_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
							contactList.add(Health_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Healthcare_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Health_info = getLeads.get("Healthcare_Contact1");
					if(Existing_Health_info != null)
					{
						Existing_Health_ID = Existing_Health_info.get("id");
						getexisting_H_contact = zoho.crm.getRecordById("Contacts",Existing_Health_ID);
						if(getexisting_H_contact.get("id") != null)
						{
							/*create In deal*/
							Existing_H_contact = Map();
							Existing_H_contact.put("contact",Existing_Health_ID);
							Existing_H_contact.put("Kind_of_Contact","Soins de santé/Health Care");
							Existing_H_contact.put("Cell_Phone",getexisting_H_contact.get("Cellulaire"));
							Existing_H_contact.put("Email",getexisting_H_contact.get("E_mail_Courriel_1"));
							Existing_H_contact.put("Home_Phone",getexisting_H_contact.get("T_l_phone_travail"));
							Existing_H_contact.put("Type_of_Contact_s",getexisting_H_contact.get("Type_de_contact"));
							Existing_H_contact.put("Work_Phone",getexisting_H_contact.get("T_l_phone_maison"));
							Existing_H_contact.put("Work_Phone_Extension",getexisting_H_contact.get("Work_Phone_Extension"));
							contactList.add(Existing_H_contact);
						}
					}
				}
				housingDealMap.put("Contact_subform",contactList);
				createHouseCareDeal_1 = zoho.crm.createRecord("Home_Care_Deal",housingDealMap);
				if(createHouseCareDeal_1.get("id") != null)
				{
					dealID = createHouseCareDeal_1.get("id");
					leadCRMID = "";
					dealCRMID = "";
					Created_deal_res = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Home_Care_Deal",Created_deal_res);
					if(getdeal_info.get("id") != null)
					{
						leadCRMID = getdeal_info.get("Lead_ID");
						dealCRMID = getdeal_info.get("id");
						UpdateDealMap = Map();
						UpdateDealMap.put("Home_Care_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
						update_deal_res = zoho.crm.updateRecord("Home_Care_Deal",Created_deal_res,UpdateDealMap);
						/* tracking-starts*/
						if(leadCRMID != null)
						{
							leadTrackerInfo = zoho.crm.searchRecords("Tracking","(Lead_ID:equals:" + leadCRMID + ")");
							if(leadTrackerInfo.size() > 0)
							{
								for each  rec in leadTrackerInfo
								{
									if(rec.get("id") != null)
									{
										trackingMap = Map();
										trackingMap.put("Lead_to_Deal_Conversion_Date",ifnull(getdeal_info.get("Creation_date"),""));
										trackingMap.put("Home_care_Deal_Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
										trackingMap.put("Personal_Reference_Deal_1",getdeal_info.get("Personal_referral"));
										trackingMap.put("Lead_Stage","Lead Converted");
										trackingMap.put("Lead_CRM_ID",leadCRMID);
										trackingMap.put("Deal_Status","Opened");
										trackingMap.put("D_marche_Soins_Status",getdeal_info.get("Stage"));
										trackingMap.put("Deal_ID",dealCRMID);
										if(getdeal_info.get("Client") != null)
										{
											trackingMap.put("client_1",getdeal_info.get("Client").get("id"));
										}
										trackingMap.put("Provinces",getdeal_info.get("Client_1_Provinces"));
										trackingMap.put("Deal_Type","Home Care");
										hospitalInfo = getdeal_info.get("Hospital");
										if(hospitalInfo != null)
										{
											trackingMap.put("Deal_Hospital_1",hospitalInfo.get("name"));
											trackingMap.put("Deal_Hospital_ID_1",hospitalInfo.get("id"));
											contactInfo = zoho.crm.getRelatedRecords("Hospital_Branches21","Hospital_Contacts",hospitalInfo.get("id"));
											for each  contactrec in contactInfo
											{
												if(contactrec.get("Hospital_Branches") != null)
												{
													trackingMap.put("Deal_Hospital_Branch_1",contactrec.get("Hospital_Branches").get("name"));
													branchInfo = zoho.crm.getRecordById("Branches",contactrec.get("Hospital_Branches").get("id"));
													if(branchInfo.get("id") != null)
													{
														hsptlInfo = zoho.crm.getRelatedRecords("Hospital19","Branches",branchInfo.get("id"));
														for each  rechsptl in hsptlInfo
														{
															if(rechsptl.get("Hospital_Branches") != null)
															{
																trackingMap.put("Deal_Hospital_11",rechsptl.get("Hospital_Branches").get("name"));
															}
														}
													}
												}
											}
										}
										/*subform*/
										subformInfo = getdeal_info.get("Contact_subform");
										for each  contactSubform in subformInfo
										{
											if(contactSubform.get("Kind_of_Contact") == "Primaire/Primary")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("Primary_Contacts",contactSubform.get("contact").get("id"));
												}
											}
											if(contactSubform.get("Kind_of_Contact") == "Secondaire/Secondary")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("secondary_contact",contactSubform.get("contact").get("id"));
												}
											}
											if(contactSubform.get("Kind_of_Contact") == "Soins de santé/Health Care")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("Health_care_contact",contactSubform.get("contact").get("id"));
												}
											}
										}
										/*Deal source*/
										trackingMap.put("Deal_Type_Deal_1",getdeal_info.get("Deal_type_Type_de_d_marche"));
										trackingMap.put("Deal_Source",getdeal_info.get("Lead_source"));
										trackingMap.put("RSSS",ifnull(getdeal_info.get("Health_care_network_RSSS"),""));
										trackingMap.put("Web",ifnull(getdeal_info.get("Web"),""));
										trackingMap.put("Partners",ifnull(getdeal_info.get("Partners_Partenaires"),""));
										trackingMap.put("Trad_marketing",ifnull(getdeal_info.get("Traditionnal_marketing"),""));
										trackingMap.put("Precision",ifnull(getdeal_info.get("Precision"),""));
										updateleadTrack = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),trackingMap);
									}
								}
							}
						}
						/* tracking-ends*/
						/* Notes */
						if(leadCRMID != null && dealCRMID != null)
						{
							getNotes = zoho.crm.getRelatedRecords("Notes","Leads",leadCRMID);
							for each  notes in getNotes
							{
								datamaps = Map();
								dataList = List();
								notes_map = Map();
								content = notes.get("Note_Content");
								if(notes.get("Created_By") != null)
								{
									content = content + "    " + "Created By: " + " " + notes.get("Created_By").get("name");
								}
								notesTitle = if(notes.get("Note_Title") != "" || notes.get("Note_Title") != null,notes.get("Note_Title"),"");
								notes_map.put("Note_Title",notesTitle);
								notes_map.put("Note_Content",content);
								notes_map.put("Parent_Id",dealCRMID);
								notes_map.put("se_module","Home_Care_Deal");
								dataList.add(notes_map);
								datamaps.put("data",dataList);
								notecreate = zoho.crm.createRecord("Notes",notes_map);
							}
							/*Task*/
							getTask = zoho.crm.getRelatedRecords("Tasks","Leads",leadCRMID);
							for each  task in getTask
							{
								owner_info = task.get("Owner");
								task_owner = if(owner_info.get("name") != "" || owner_info.get("name") != null,owner_info.get("name"),"");
								datamaps = Map();
								dataList = List();
								mp = Map();
								mp.put("Task Owner",task_owner);
								mp.put("Owner",task.get("Owner"));
								mp.put("Created By",zoho.adminuserid);
								mp.put("Modified By",zoho.adminuserid);
								mp.put("Subject",task.get("Subject"));
								mp.put("Due_Date",task.get("Due_Date"));
								mp.put("Status",task.get("Status"));
								mp.put("Priority",task.get("Priority"));
								mp.put("Description",task.get("Description"));
								mp.put("$se_module","Home_Care_Deal");
								mp.put("What_Id",dealCRMID);
								dataList.add(mp);
								datamaps.put("data",dataList);
								taskcreate = zoho.crm.createRecord("Tasks",mp);
							}
						}
						/* updating deal number to Contact*/
						if(Client_1_contact_ID != "")
						{
							client1_map = Map();
							client1_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateClient1 = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,client1_map);
						}
						/* Updating deal number to Contact other --starts*/
						if(contact_Other_1 != "")
						{
							other1_map = Map();
							other1_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateother1 = zoho.crm.updateRecord("Contacts",contact_Other_1,other1_map);
						}
						if(contact_Other_2 != "")
						{
							other2_map = Map();
							other2_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateother2 = zoho.crm.updateRecord("Contacts",contact_Other_2,other2_map);
						}
						if(contact_Other_3 != "")
						{
							other3_map = Map();
							other3_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateother3 = zoho.crm.updateRecord("Contacts",contact_Other_3,other3_map);
						}
						/* Updating deal number to Contact other --ends*/
					}
				}
				/* Create Deal in Creator --starts */
				if(createHouseCareDeal_1.get("id") != null)
				{
					Deal_CRM_ID = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Home_Care_Deal",Deal_CRM_ID);
					if(getdeal_info.get("id") != null)
					{
						ownerName = "lion_visavie";
						formName = "Home_Care_Deal";
						appName = "visavie";
						Creator_housingDealMap = Map();
						// 	General information
						Creator_housingDealMap.put("CRM_HomeCareDealId",getdeal_info.get("id"));
						Creator_housingDealMap.put("Lead_CRMID",getdeal_info.get("Lead_ID"));
						Creator_housingDealMap.put("Home_Care_Number",getdeal_info.get("Home_Care_Number"));
						Creator_housingDealMap.put("Home_Care_Deal_Name",getdeal_info.get("Name"));
						Creator_housingDealMap.put("Home_care_deal_status","Active");
						Temporary_info = getdeal_info.get("Temporary_counselor");
						if(Temporary_info != null)
						{
							Creator_housingDealMap.put("Temporary_ID",Temporary_info.get("id"));
						}
						Advisor_info = getdeal_info.get("Advisors");
						if(Advisor_info != null)
						{
							Creator_housingDealMap.put("Counseiller_ID",Advisor_info.get("id"));
						}
						if(getdeal_info.get("Creation_date") != null)
						{
							Creator_housingDealMap.put("Deal_creation_date",getdeal_info.get("Creation_date").toDate());
						}
						Creator_housingDealMap.put("Languages",getdeal_info.get("Languages"));
						// 			Profile 1 Client
						Contact_info = getdeal_info.get("Client");
						if(Contact_info != null)
						{
							Creator_housingDealMap.put("Contact1_CRM_ID",Contact_info.get("id"));
						}
						// 					Creator_housingDealMap.put("Budget_range_Gamme_de_budget",getdeal_info.get("Budget_range"));
						Creator_housingDealMap.put("Desired_moving_date_Date_de_d_m_nagement_d_sir_e",getdeal_info.get("Desired_moving_date"));
						Creator_housingDealMap.put("SAD_start_date",getdeal_info.get("SAD_start_date"));
						Creator_housingDealMap.put("Type_s_of_client_Type_s_de_client",getdeal_info.get("Type_of_client"));
						Creator_housingDealMap.put("Service_s_sought",getdeal_info.get("Service_s_sought"));
						Creator_housingDealMap.put("R_gion_Region",getdeal_info.get("Region"));
						// 			 Description de la demande/Description of the reque
						Creator_housingDealMap.put("Comments",getdeal_info.get("Comments"));
						// Source of the approach/Deal Source
						Creator_housingDealMap.put("Personal_referral",getdeal_info.get("Personal_referral"));
						Creator_housingDealMap.put("Lead_source",getdeal_info.get("Lead_source"));
						Creator_housingDealMap.put("Deal_type",getdeal_info.get("Deal_type_Type_de_d_marche"));
						Creator_housingDealMap.put("Precision",getdeal_info.get("Precision"));
						Creator_housingDealMap.put("Health_care_RSS",getdeal_info.get("Health_care_network_RSSS"));
						Creator_housingDealMap.put("Partners_Partenaires",getdeal_info.get("Partners_Partenaires"));
						Creator_housingDealMap.put("Web",getdeal_info.get("Web"));
						Creator_housingDealMap.put("Traditionnal_marketing_Marketing_traditionnel",getdeal_info.get("Traditionnal_marketing"));
						creatorDealResp = zoho.creator.createRecord(ownerName,appName,formName,Creator_housingDealMap,Map(),"zoho_mail");
					}
				}
				/* delete lead*/
				deleteRecordMap = Map();
				deleteRecordMap.put("module","Leads");
				deleteRecordMap.put("id",LeadID);
				deleteResp = zoho.crm.invokeConnector("crm.delete",deleteRecordMap);
			}
			/* Create 1 deal using 1 prospect--- ends */
			/* Create 1 deal using 2 prospects--- starts */
			if(getLeads.get("Test") == "1 démarche avec 2 prospects/1 deal with 2 leads")
			{
				housingDealMap.put("Name",getLeads.get("First_Namee") + " " + getLeads.get("Last_Name") + " " + getLeads.get("Prospect_First_Name2") + " " + getLeads.get("Prospect_Last_Name2"));
				/*	Create  Prospect contact 1 */
				Client_2_contact_ID = "";
				Client_1_contact_ID = "";
				contact_Other_1 = "";
				contact_Other_2 = "";
				contact_Other_3 = "";
				contactList = List();
				if(getLeads.get("First_Namee") != "" && getLeads.get("Last_Name") != "")
				{
					primaryContactMap = Map();
					primaryContactMap.put("First_Name",getLeads.get("First_Namee"));
					primaryContactMap.put("Nom_de_jeune_fille",getLeads.get("Nom_de_jeune_fille_Maiden_name"));
					primaryContactMap.put("Date_of_Birth",getLeads.get("Date_de_naissance_Birth_date"));
					primaryContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail"));
					primaryContactMap.put("T_l_phone_travail",getLeads.get("T_l_phone_maison_Home_phone"));
					primaryContactMap.put("Cellulaire",getLeads.get("Portable_Mobile"));
					primaryContactMap.put("Last_Name",getLeads.get("Last_Name"));
					primaryContactMap.put("Sexe",getLeads.get("Sex"));
					primaryContactMap.put("E_mail_Courriel_1",getLeads.get("Courriel_Email"));
					primaryContactMap.put("Provinces",getLeads.get("Province"));
					primaryContactMap.put("Ville_City",getLeads.get("Ville_City"));
					primaryContactMap.put("language_spoken1",getLeads.get("Language"));
					primaryContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication"));
					primaryContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
					primaryContactMap.put("Layout","4846491000000339001");
					primaryContactMap.put("Contact_Type","Client");
					Counselor = getLeads.get("Advisors");
					if(Counselor != null)
					{
						primaryContactMap.put("Counselor",Counselor.get("id"));
					}
					User = getLeads.get("Counselor_User");
					if(User != null)
					{
						primaryContactMap.put("Counselor_user",User.get("id"));
					}
					Temporary_counselor = getLeads.get("Conseiller_Counselor");
					if(Temporary_counselor != null)
					{
						primaryContactMap.put("Temporary_counselor",Temporary_counselor.get("id"));
					}
					Temporary_User = getLeads.get("Temporary_Counselor_User");
					if(Temporary_User != null)
					{
						primaryContactMap.put("Temporary_counselor_user",Temporary_User.get("id"));
					}
					createPrimaryContact = zoho.crm.createRecord("Contacts",primaryContactMap);
					if(createPrimaryContact.get("id") != null)
					{
						Client_1_contact_ID = createPrimaryContact.get("id");
						get_contact_Info = zoho.crm.getRecordById("Contacts",Client_1_contact_ID);
						if(get_contact_Info.get("id") != null)
						{
							Update_contact_C1 = Map();
							Update_contact_C1.put("Client_Number",get_contact_Info.get("Num_ro_Client"));
							housingDealMap.put("Client_1_number",get_contact_Info.get("Num_ro_Client"));
							update_Number_contact = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,Update_contact_C1);
						}
					}
					housingDealMap.put("Client",createPrimaryContact.get("id"));
					housingDealMap.put("Client_1_Provinces",getLeads.get("Province"));
					if(getLeads.get("Do_you_like_to_enter_prospect_1_profile_details") == "Oui/Yes")
					{
						/* Lead Profile*/
						housingDealMap.put("Type_of_client",getLeads.get("Type_s_of_client"));
						housingDealMap.put("Budget_range_Gamme_de_budget",getLeads.get("Budget_range"));
						housingDealMap.put("Desired_moving_date",getLeads.get("Desired_moving_date"));
						housingDealMap.put("Service_s_sought",getLeads.get("Type_s_of_service_s"));
						housingDealMap.put("Region",getLeads.get("Region"));
						housingDealMap.put("SAD_start_date",getLeads.get("home_care_start_date"));
					}
					if(createPrimaryContact.get("id") != null)
					{
						primary_map = Map();
						primary_map.put("contact",createPrimaryContact.get("id"));
						primary_map.put("Kind_of_Contact","Client");
						primary_map.put("Cell_Phone",getLeads.get("Portable_Mobile"));
						primary_map.put("Email",getLeads.get("Courriel_Email"));
						primary_map.put("Home_Phone",getLeads.get("T_l_phone_maison_Home_phone"));
						primary_map.put("Work_Phone",getLeads.get("T_l_phone_travail"));
						primary_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
						contactList.add(primary_map);
					}
				}
				/* Create Prospect contact 2 */
				if(getLeads.get("Prospect_First_Name2") != "" && getLeads.get("Prospect_Last_Name2") != "")
				{
					primaryContactMap_2 = Map();
					primaryContactMap_2.put("First_Name",getLeads.get("Prospect_First_Name2"));
					primaryContactMap_2.put("Nom_de_jeune_fille",getLeads.get("Prospect_Maiden_Name2"));
					primaryContactMap_2.put("Date_of_Birth",getLeads.get("Date_de_naissance_Birth_date_2"));
					primaryContactMap_2.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_P"));
					primaryContactMap_2.put("T_l_phone_travail",getLeads.get("Prospect_T_l_phone_maison_Home_phone"));
					primaryContactMap_2.put("Cellulaire",getLeads.get("Prospect_Portable_Mobile"));
					primaryContactMap_2.put("Last_Name",getLeads.get("Prospect_Last_Name2"));
					primaryContactMap_2.put("Sexe",getLeads.get("Prospect_Sex2"));
					primaryContactMap_2.put("E_mail_Courriel_1",getLeads.get("Prospect_Email2"));
					primaryContactMap_2.put("Ville_City",getLeads.get("Prospect_Ville_City"));
					primaryContactMap_2.put("Provinces",getLeads.get("Prospect_Province2"));
					primaryContactMap_2.put("language_spoken1",getLeads.get("Prospect_Langue_Language"));
					primaryContactMap_2.put("Preferred_communication1",getLeads.get("Preferred_communication_2"));
					primaryContactMap_2.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_2"));
					primaryContactMap_2.put("Layout","4846491000000339001");
					primaryContactMap_2.put("Contact_Type","Client");
					Counselor = getLeads.get("Advisors");
					if(Counselor != null)
					{
						primaryContactMap.put("Counselor",Counselor.get("id"));
					}
					User = getLeads.get("Counselor_User");
					if(User != null)
					{
						primaryContactMap.put("Counselor_user",User.get("id"));
					}
					Temporary_counselor = getLeads.get("Conseiller_Counselor");
					if(Temporary_counselor != null)
					{
						primaryContactMap.put("Temporary_counselor",Temporary_counselor.get("id"));
					}
					Temporary_User = getLeads.get("Temporary_Counselor_User");
					if(Temporary_User != null)
					{
						primaryContactMap.put("Temporary_counselor_user",Temporary_User.get("id"));
					}
					createPrimaryContact_res = zoho.crm.createRecord("Contacts",primaryContactMap_2);
					if(createPrimaryContact_res.get("id") != null)
					{
						Client_2_contact_ID = createPrimaryContact_res.get("id");
						get_Client_Info = zoho.crm.getRecordById("Contacts",Client_2_contact_ID);
						if(get_Client_Info.get("id") != null)
						{
							Update_contact_C2 = Map();
							Update_contact_C2.put("Client_Number",get_Client_Info.get("Num_ro_Client"));
							housingDealMap.put("Client_2_number",get_Client_Info.get("Num_ro_Client"));
							update_Client_contact = zoho.crm.updateRecord("Contacts",Client_2_contact_ID,Update_contact_C2);
						}
					}
					housingDealMap.put("Client_2",createPrimaryContact_res.get("id"));
					housingDealMap.put("Client_2_Provinces",getLeads.get("Prospect_Province2"));
					if(getLeads.get("Do_you_like_to_enter_prospect_2_profile_details") == "Oui/Yes")
					{
						/* Lead  Profile -2*/
						housingDealMap.put("Profile_2_Type_s_of_client_Type_s_de_client",getLeads.get("Profile_Type_s_de_client_Type_s_of_client"));
						housingDealMap.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement",getLeads.get("Profile_Desired_moving_date"));
						housingDealMap.put("Profile_2_Service_s_sought",getLeads.get("Profile_Type_s_de_service_s_Type_s_of_service_s"));
						housingDealMap.put("Profile_2_R_gion_Region",getLeads.get("Profile_Region_Region"));
						housingDealMap.put("Profile_SAD_start_date",getLeads.get("Profile_Start_date_SAD_Home_care_start_date"));
					}
					if(createPrimaryContact_res.get("id") != null)
					{
						primary_map_2 = Map();
						primary_map_2.put("contact",createPrimaryContact_res.get("id"));
						primary_map_2.put("Kind_of_Contact","Client");
						primary_map_2.put("Cell_Phone",getLeads.get("Prospect_Portable_Mobile"));
						primary_map_2.put("Email",getLeads.get("Prospect_Email2"));
						primary_map_2.put("Home_Phone",getLeads.get("Prospect_T_l_phone_maison_Home_phone"));
						primary_map_2.put("Work_Phone",getLeads.get("T_l_phone_travail_P"));
						primary_map_2.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_2"));
						contactList.add(primary_map_2);
					}
				}
				/* Create Primary contact */
				if(getLeads.get("Choose_Primary_Contact") == "Créer nouveau contact/Create new contact")
				{
					if(getLeads.get("Prospect_Contact_1_First_Name") != "" && getLeads.get("Prospect_Contact_1_Last_Name") != "")
					{
						Prospect_ContactMap = Map();
						Prospect_ContactMap.put("First_Name",getLeads.get("Prospect_Contact_1_First_Name"));
						Prospect_ContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_P1"));
						Prospect_ContactMap.put("T_l_phone_travail",getLeads.get("Prospect_Contact_1_Home_Phone"));
						Prospect_ContactMap.put("Cellulaire",getLeads.get("Prospect_Contact_1_Cellphone"));
						Prospect_ContactMap.put("Type_de_contact",getLeads.get("Prospect_Contact_1_Type_of_contact"));
						Prospect_ContactMap.put("language_spoken1",getLeads.get("Prospect_Contact_1_Language"));
						Prospect_ContactMap.put("Last_Name",getLeads.get("Prospect_Contact_1_Last_Name"));
						Prospect_ContactMap.put("Sexe",getLeads.get("Prospect_Contact_1_Sex"));
						Prospect_ContactMap.put("E_mail_Courriel_1",getLeads.get("Prospect_Contact_1_Email"));
						Prospect_ContactMap.put("Provinces",getLeads.get("Prospect_Contact_1_Province"));
						Prospect_ContactMap.put("Ville_City",getLeads.get("Ville_City_P"));
						Prospect_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_P"));
						Prospect_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_p"));
						Prospect_ContactMap.put("Layout","4846491000000091033");
						Prospect_ContactMap.put("Contact_Type","Primaire/Primary");
						createProspectcontact = zoho.crm.createRecord("Contacts",Prospect_ContactMap);
						if(createProspectcontact.get("id") != null)
						{
							contact_Other_1 = createProspectcontact.get("id");
							prospect_contact_map = Map();
							prospect_contact_map.put("contact",createProspectcontact.get("id"));
							prospect_contact_map.put("Kind_of_Contact","Primaire/Primary");
							prospect_contact_map.put("Cell_Phone",getLeads.get("Prospect_Contact_1_Cellphone"));
							prospect_contact_map.put("Email",getLeads.get("Prospect_Contact_1_Email"));
							prospect_contact_map.put("Home_Phone",getLeads.get("Prospect_Contact_1_Home_Phone"));
							prospect_contact_map.put("Type_of_Contact_s",getLeads.get("Prospect_Contact_1_Type_of_contact"));
							prospect_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_P1"));
							prospect_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_p"));
							contactList.add(prospect_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Primary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Primary_info = getLeads.get("Primary_Contacts");
					if(Existing_Primary_info != null)
					{
						Existing_primary_ID = Existing_Primary_info.get("id");
						getexisting_contact = zoho.crm.getRecordById("Contacts",Existing_primary_ID);
						if(getexisting_contact.get("id") != null)
						{
							Existing_Primary_contact = Map();
							Existing_Primary_contact.put("contact",Existing_primary_ID);
							Existing_Primary_contact.put("Kind_of_Contact","Primaire/Primary");
							Existing_Primary_contact.put("Cell_Phone",getexisting_contact.get("Cellulaire"));
							Existing_Primary_contact.put("Email",getexisting_contact.get("E_mail_Courriel_1"));
							Existing_Primary_contact.put("Home_Phone",getexisting_contact.get("T_l_phone_travail"));
							Existing_Primary_contact.put("Type_of_Contact_s",getexisting_contact.get("Type_de_contact"));
							Existing_Primary_contact.put("Work_Phone",getexisting_contact.get("T_l_phone_maison"));
							Existing_Primary_contact.put("Work_Phone_Extension",getexisting_contact.get("Work_Phone_Extension"));
							contactList.add(Existing_Primary_contact);
						}
					}
				}
				/*  Create Secondary contact */
				if(getLeads.get("Choose_Secondary_Contact") == "Créer nouveau contact/Create new contact")
				{
					if(getLeads.get("Secondary_First_Name") != "" && getLeads.get("Secondary_Last_Name") != "")
					{
						Secondary_ContactMap = Map();
						Secondary_ContactMap.put("First_Name",getLeads.get("Secondary_First_Name"));
						Secondary_ContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_S"));
						Secondary_ContactMap.put("T_l_phone_travail",getLeads.get("Secondary_Home_Phone"));
						Secondary_ContactMap.put("Cellulaire",getLeads.get("Secondary_Cellphone"));
						Secondary_ContactMap.put("Type_de_contact",getLeads.get("Secondary_Contact"));
						Secondary_ContactMap.put("language_spoken1",getLeads.get("Language_S"));
						Secondary_ContactMap.put("Last_Name",getLeads.get("Secondary_Last_Name"));
						Secondary_ContactMap.put("Sexe",getLeads.get("Secondary_Sex"));
						Secondary_ContactMap.put("E_mail_Courriel_1",getLeads.get("Secondary_Con_Email"));
						Secondary_ContactMap.put("Provinces",getLeads.get("Secondary_Province"));
						Secondary_ContactMap.put("Ville_City",getLeads.get("Ville_City_S"));
						Secondary_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_S"));
						Secondary_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_s"));
						Secondary_ContactMap.put("Layout","4846491000000091033");
						Secondary_ContactMap.put("Contact_Type","Secondaire/Secondary");
						createSecondarycontact = zoho.crm.createRecord("Contacts",Secondary_ContactMap);
						if(createSecondarycontact.get("id") != null)
						{
							contact_Other_2 = createSecondarycontact.get("id");
							Sec_contact_map = Map();
							Sec_contact_map.put("contact",createSecondarycontact.get("id"));
							Sec_contact_map.put("Kind_of_Contact","Secondaire/Secondary");
							Sec_contact_map.put("Cell_Phone",getLeads.get("Secondary_Cellphone"));
							Sec_contact_map.put("Email",getLeads.get("Secondary_Con_Email"));
							Sec_contact_map.put("Home_Phone",getLeads.get("Secondary_Home_Phone"));
							Sec_contact_map.put("Type_of_Contact_s",getLeads.get("Secondary_Contact"));
							Sec_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_S"));
							Sec_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_s"));
							contactList.add(Sec_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Secondary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_secondary_info = getLeads.get("Secondary_Contact1");
					if(Existing_secondary_info != null)
					{
						Existing_secondary_ID = Existing_secondary_info.get("id");
						getexisting_S_contact = zoho.crm.getRecordById("Contacts",Existing_secondary_ID);
						if(getexisting_S_contact.get("id") != null)
						{
							Existing_S_contact = Map();
							Existing_S_contact.put("contact",Existing_secondary_ID);
							Existing_S_contact.put("Kind_of_Contact","Secondaire/Secondary");
							Existing_S_contact.put("Cell_Phone",getexisting_S_contact.get("Cellulaire"));
							Existing_S_contact.put("Email",getexisting_S_contact.get("E_mail_Courriel_1"));
							Existing_S_contact.put("Home_Phone",getexisting_S_contact.get("T_l_phone_travail"));
							Existing_S_contact.put("Type_of_Contact_s",getexisting_S_contact.get("Type_de_contact"));
							Existing_S_contact.put("Work_Phone",getexisting_S_contact.get("T_l_phone_maison"));
							Existing_S_contact.put("Work_Phone_Extension",getexisting_S_contact.get("Work_Phone_Extension"));
							contactList.add(Existing_S_contact);
						}
					}
				}
				/*Create Healthcare contact*/
				if(getLeads.get("Choose_Healthcare_Contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_3 = "";
					if(getLeads.get("Healthcare_First_Name") != "" && getLeads.get("Healthcare_Last_Name") != "")
					{
						Health_ContactMap = Map();
						Health_ContactMap.put("First_Name",getLeads.get("Healthcare_First_Name"));
						Health_ContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_R"));
						Health_ContactMap.put("T_l_phone_travail",getLeads.get("Healthcare_Home_Phone"));
						Health_ContactMap.put("Cellulaire",getLeads.get("Healthcare_contact_Cellphone"));
						Health_ContactMap.put("Type_de_contact",getLeads.get("Healthcare_Contact"));
						Health_ContactMap.put("language_spoken1",getLeads.get("Language_H"));
						Health_ContactMap.put("Last_Name",getLeads.get("Healthcare_Last_Name"));
						Health_ContactMap.put("Sexe",getLeads.get("Healthcare_Sex"));
						Health_ContactMap.put("E_mail_Courriel_1",getLeads.get("Healthcare_Email"));
						Health_ContactMap.put("Provinces",getLeads.get("Healthcare_Province"));
						Health_ContactMap.put("Ville_City",getLeads.get("Ville_City_R"));
						Health_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_R"));
						Health_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
						Health_ContactMap.put("Layout","4846491000000091033");
						Health_ContactMap.put("Contact_Type","Soins de santé/Health Care");
						Health_ContactMap.put("Lead_ID",getLeads.get("id"));
						createHealthcontact = zoho.crm.createRecord("Contacts",Health_ContactMap);
						if(createHealthcontact.get("id") != null)
						{
							/*Add Hospital contact*/
							hsptlContact = Map();
							hsptlContact.put("Name",getLeads.get("Healthcare_First_Name") + " " + getLeads.get("Healthcare_Last_Name"));
							hsptlContact.put("Email",getLeads.get("Healthcare_Email"));
							hsptlContact.put("Phone",getLeads.get("Healthcare_contact_Cellphone"));
							hsptlContact.put("Contact_Sex",getLeads.get("Healthcare_Sex"));
							hsptlContact.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
							hsptlContact.put("Contact_ID",createHealthcontact.get("id"));
							createHospitalcontact = zoho.crm.createRecord("Hospital_Contacts",hsptlContact);
							if(createHospitalcontact.get("id") != null)
							{
								if(getLeads.get("Hospital") == null)
								{
									/*updating Hospital Contact in Deal*/
									housingDealMap.put("Hospital",createHospitalcontact.get("id"));
								}
							}
							/*create In deal*/
							contact_Other_3 = createHealthcontact.get("id");
							Health_contact_map = Map();
							Health_contact_map.put("contact",createHealthcontact.get("id"));
							Health_contact_map.put("Kind_of_Contact","Soins de santé/Health Care");
							Health_contact_map.put("Cell_Phone",getLeads.get("Healthcare_contact_Cellphone"));
							Health_contact_map.put("Email",getLeads.get("Healthcare_Email"));
							Health_contact_map.put("Home_Phone",getLeads.get("Healthcare_Home_Phone"));
							Health_contact_map.put("Type_of_Contact_s",getLeads.get("Healthcare_Contact"));
							Health_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
							Health_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
							contactList.add(Health_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Healthcare_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Health_info = getLeads.get("Healthcare_Contact1");
					if(Existing_Health_info != null)
					{
						Existing_Health_ID = Existing_Health_info.get("id");
						getexisting_H_contact = zoho.crm.getRecordById("Contacts",Existing_Health_ID);
						if(getexisting_H_contact.get("id") != null)
						{
							/*create In deal*/
							Existing_H_contact = Map();
							Existing_H_contact.put("contact",Existing_Health_ID);
							Existing_H_contact.put("Kind_of_Contact","Soins de santé/Health Care");
							Existing_H_contact.put("Cell_Phone",getexisting_H_contact.get("Cellulaire"));
							Existing_H_contact.put("Email",getexisting_H_contact.get("E_mail_Courriel_1"));
							Existing_H_contact.put("Home_Phone",getexisting_H_contact.get("T_l_phone_travail"));
							Existing_H_contact.put("Type_of_Contact_s",getexisting_H_contact.get("Type_de_contact"));
							Existing_H_contact.put("Work_Phone",getexisting_H_contact.get("T_l_phone_maison"));
							Existing_H_contact.put("Work_Phone_Extension",getexisting_H_contact.get("Work_Phone_Extension"));
							contactList.add(Existing_H_contact);
						}
					}
				}
				housingDealMap.put("Contact_subform",contactList);
				createHouseCareDeal_1 = zoho.crm.createRecord("Home_Care_Deal",housingDealMap);
				if(createHouseCareDeal_1.get("id") != null)
				{
					dealID = createHouseCareDeal_1.get("id");
					leadCRMID = "";
					dealCRMID = "";
					Created_deal_res = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Home_Care_Deal",Created_deal_res);
					if(getdeal_info.get("id") != null)
					{
						leadCRMID = getdeal_info.get("Lead_ID");
						dealCRMID = getdeal_info.get("id");
						UpdateDealMap = Map();
						UpdateDealMap.put("Home_Care_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
						update_deal_res = zoho.crm.updateRecord("Home_Care_Deal",Created_deal_res,UpdateDealMap);
						/* tracking-starts*/
						if(leadCRMID != null)
						{
							leadTrackerInfo = zoho.crm.searchRecords("Tracking","(Lead_ID:equals:" + leadCRMID + ")");
							if(leadTrackerInfo.size() > 0)
							{
								for each  rec in leadTrackerInfo
								{
									if(rec.get("id") != null)
									{
										trackingMap = Map();
										trackingMap.put("Lead_to_Deal_Conversion_Date",ifnull(getdeal_info.get("Creation_date"),""));
										trackingMap.put("Home_care_Deal_Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
										trackingMap.put("Personal_Reference_Deal_1",getdeal_info.get("Personal_referral"));
										trackingMap.put("Lead_Stage","Lead Converted");
										trackingMap.put("Lead_CRM_ID",leadCRMID);
										trackingMap.put("Deal_Status","Opened");
										trackingMap.put("D_marche_Soins_Status",getdeal_info.get("Stage"));
										trackingMap.put("Deal_ID",dealCRMID);
										if(getdeal_info.get("Client") != null)
										{
											trackingMap.put("client_1",getdeal_info.get("Client").get("id"));
										}
										trackingMap.put("Provinces",getdeal_info.get("Client_1_Provinces"));
										if(getdeal_info.get("Client_2") != null)
										{
											trackingMap.put("client_2",getdeal_info.get("Client_2").get("id"));
										}
										trackingMap.put("Client_2_Provinces",getdeal_info.get("Client_2_Provinces"));
										trackingMap.put("Deal_Type","Home Care");
										hospitalInfo = getdeal_info.get("Hospital");
										if(hospitalInfo != null)
										{
											trackingMap.put("Deal_Hospital_1",hospitalInfo.get("name"));
											trackingMap.put("Deal_Hospital_ID_1",hospitalInfo.get("id"));
											contactInfo = zoho.crm.getRelatedRecords("Hospital_Branches21","Hospital_Contacts",hospitalInfo.get("id"));
											for each  contactrec in contactInfo
											{
												if(contactrec.get("Hospital_Branches") != null)
												{
													trackingMap.put("Deal_Hospital_Branch_1",contactrec.get("Hospital_Branches").get("name"));
													branchInfo = zoho.crm.getRecordById("Branches",contactrec.get("Hospital_Branches").get("id"));
													if(branchInfo.get("id") != null)
													{
														hsptlInfo = zoho.crm.getRelatedRecords("Hospital19","Branches",branchInfo.get("id"));
														for each  rechsptl in hsptlInfo
														{
															if(rechsptl.get("Hospital_Branches") != null)
															{
																trackingMap.put("Deal_Hospital_11",rechsptl.get("Hospital_Branches").get("name"));
															}
														}
													}
												}
											}
										}
										/*subform*/
										subformInfo = getdeal_info.get("Contact_subform");
										for each  contactSubform in subformInfo
										{
											if(contactSubform.get("Kind_of_Contact") == "Primaire/Primary")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("Primary_Contacts",contactSubform.get("contact").get("id"));
												}
											}
											if(contactSubform.get("Kind_of_Contact") == "Secondaire/Secondary")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("secondary_contact",contactSubform.get("contact").get("id"));
												}
											}
											if(contactSubform.get("Kind_of_Contact") == "Soins de santé/Health Care")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("Health_care_contact",contactSubform.get("contact").get("id"));
												}
											}
										}
										/*Deal source*/
										trackingMap.put("Deal_Type_Deal_1",getdeal_info.get("Deal_type_Type_de_d_marche"));
										trackingMap.put("Deal_Source",getdeal_info.get("Lead_source"));
										trackingMap.put("RSSS",ifnull(getdeal_info.get("Health_care_network_RSSS"),""));
										trackingMap.put("Web",ifnull(getdeal_info.get("Web"),""));
										trackingMap.put("Partners",ifnull(getdeal_info.get("Partners_Partenaires"),""));
										trackingMap.put("Trad_marketing",ifnull(getdeal_info.get("Traditionnal_marketing"),""));
										trackingMap.put("Precision",ifnull(getdeal_info.get("Precision"),""));
										updateleadTrack = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),trackingMap);
									}
								}
							}
						}
						/* tracking-ends*/
						/* Notes */
						if(leadCRMID != null && dealCRMID != null)
						{
							getNotes = zoho.crm.getRelatedRecords("Notes","Leads",leadCRMID);
							for each  notes in getNotes
							{
								datamaps = Map();
								dataList = List();
								notes_map = Map();
								content = notes.get("Note_Content");
								if(notes.get("Created_By") != null)
								{
									content = content + "    " + "Created By: " + " " + notes.get("Created_By").get("name");
								}
								notesTitle = if(notes.get("Note_Title") != "" || notes.get("Note_Title") != null,notes.get("Note_Title"),"");
								notes_map.put("Note_Title",notesTitle);
								notes_map.put("Note_Content",content);
								notes_map.put("Parent_Id",dealCRMID);
								notes_map.put("se_module","Home_Care_Deal");
								dataList.add(notes_map);
								datamaps.put("data",dataList);
								notecreate = zoho.crm.createRecord("Notes",notes_map);
							}
							/*Task*/
							getTask = zoho.crm.getRelatedRecords("Tasks","Leads",leadCRMID);
							for each  task in getTask
							{
								owner_info = task.get("Owner");
								task_owner = if(owner_info.get("name") != "" || owner_info.get("name") != null,owner_info.get("name"),"");
								datamaps = Map();
								dataList = List();
								mp = Map();
								mp.put("Task Owner",task_owner);
								mp.put("Owner",task.get("Owner"));
								mp.put("Created By",zoho.adminuserid);
								mp.put("Modified By",zoho.adminuserid);
								mp.put("Subject",task.get("Subject"));
								mp.put("Due_Date",task.get("Due_Date"));
								mp.put("Status",task.get("Status"));
								mp.put("Priority",task.get("Priority"));
								mp.put("Description",task.get("Description"));
								mp.put("$se_module","Home_Care_Deal");
								mp.put("What_Id",dealCRMID);
								dataList.add(mp);
								datamaps.put("data",dataList);
								taskcreate = zoho.crm.createRecord("Tasks",mp);
							}
						}
						/* updating deal number to Client1- Contact*/
						if(Client_1_contact_ID != "")
						{
							client1_map = Map();
							client1_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateClient1 = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,client1_map);
						}
						/* updating deal number to Client 2-Contact*/
						if(Client_2_contact_ID != "")
						{
							client2_map = Map();
							client2_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateClient1 = zoho.crm.updateRecord("Contacts",Client_2_contact_ID,client2_map);
						}
						/* Updating deal number to Contact other --starts*/
						if(contact_Other_1 != "")
						{
							other1_map = Map();
							other1_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateother1 = zoho.crm.updateRecord("Contacts",contact_Other_1,other1_map);
						}
						if(contact_Other_2 != "")
						{
							other2_map = Map();
							other2_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateother2 = zoho.crm.updateRecord("Contacts",contact_Other_2,other2_map);
						}
						if(contact_Other_3 != "")
						{
							other3_map = Map();
							other3_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateother3 = zoho.crm.updateRecord("Contacts",contact_Other_3,other3_map);
						}
						/* Updating deal number to Contact other --ends*/
					}
				}
				/* Create Deal in Creator --starts */
				if(createHouseCareDeal_1.get("id") != null)
				{
					Deal_CRM_ID = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Home_Care_Deal",Deal_CRM_ID);
					if(getdeal_info.get("id") != null)
					{
						ownerName = "lion_visavie";
						formName = "Home_Care_Deal";
						appName = "visavie";
						Creator_housingDealMap = Map();
						// 	General information
						Creator_housingDealMap.put("CRM_HomeCareDealId",getdeal_info.get("id"));
						Creator_housingDealMap.put("Lead_CRMID",getdeal_info.get("Lead_ID"));
						Creator_housingDealMap.put("Home_Care_Number",getdeal_info.get("Home_Care_Number"));
						Creator_housingDealMap.put("Home_Care_Deal_Name",getdeal_info.get("Name"));
						Creator_housingDealMap.put("Home_care_deal_status","Active");
						Temporary_info = getdeal_info.get("Temporary_counselor");
						if(Temporary_info != null)
						{
							Creator_housingDealMap.put("Temporary_ID",Temporary_info.get("id"));
						}
						Advisor_info = getdeal_info.get("Advisors");
						if(Advisor_info != null)
						{
							Creator_housingDealMap.put("Counseiller_ID",Advisor_info.get("id"));
						}
						if(getdeal_info.get("Creation_date") != null)
						{
							Creator_housingDealMap.put("Deal_creation_date",getdeal_info.get("Creation_date").toDate());
						}
						Creator_housingDealMap.put("Languages",getdeal_info.get("Languages"));
						// 			Profile 1 Client
						Contact_info = getdeal_info.get("Client");
						if(Contact_info != null)
						{
							Creator_housingDealMap.put("Contact1_CRM_ID",Contact_info.get("id"));
						}
						// 					Creator_housingDealMap.put("Budget_range_Gamme_de_budget",getdeal_info.get("Budget_range"));
						Creator_housingDealMap.put("Desired_moving_date_Date_de_d_m_nagement_d_sir_e",getdeal_info.get("Desired_moving_date"));
						Creator_housingDealMap.put("SAD_start_date",getdeal_info.get("SAD_start_date"));
						Creator_housingDealMap.put("Type_s_of_client_Type_s_de_client",getdeal_info.get("Type_of_client"));
						Creator_housingDealMap.put("Service_s_sought",getdeal_info.get("Service_s_sought"));
						Creator_housingDealMap.put("R_gion_Region",getdeal_info.get("Region"));
						// Profile 2 client
						Contact_info = getdeal_info.get("Client_2");
						if(Contact_info != null)
						{
							Creator_housingDealMap.put("Contact2_CRM_ID",Contact_info.get("id"));
						}
						Creator_housingDealMap.put("Profile_2_Type_s_of_client",getdeal_info.get("Profile_2_Type_s_of_client_Type_s_de_client"));
						Creator_housingDealMap.put("Profile_2_Desired_moving_date",getdeal_info.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"));
						Creator_housingDealMap.put("Profile_Service_s_sought",getdeal_info.get("Profile_2_Service_s_sought"));
						Creator_housingDealMap.put("Profile_2_Region_Region",getdeal_info.get("Profile_2_R_gion_Region"));
						Creator_housingDealMap.put("Profile_SAD_start_date",getdeal_info.get("Profile_SAD_start_date"));
						// 			 Description de la demande/Description of the reque
						Creator_housingDealMap.put("Comments",getdeal_info.get("Comments"));
						// Source of the approach/Deal Source
						Creator_housingDealMap.put("Personal_referral",getdeal_info.get("Personal_referral"));
						Creator_housingDealMap.put("Lead_source",getdeal_info.get("Lead_source"));
						Creator_housingDealMap.put("Deal_type",getdeal_info.get("Deal_type_Type_de_d_marche"));
						Creator_housingDealMap.put("Precision",getdeal_info.get("Precision"));
						Creator_housingDealMap.put("Health_care_RSS",getdeal_info.get("Health_care_network_RSSS"));
						Creator_housingDealMap.put("Partners_Partenaires",getdeal_info.get("Partners_Partenaires"));
						Creator_housingDealMap.put("Web",getdeal_info.get("Web"));
						Creator_housingDealMap.put("Traditionnal_marketing_Marketing_traditionnel",getdeal_info.get("Traditionnal_marketing"));
						creatorDealResp = zoho.creator.createRecord(ownerName,appName,formName,Creator_housingDealMap,Map(),"zoho_mail");
					}
				}
				/* Create Deal in Creator --ends */
				/* delete lead*/
				deleteRecordMap = Map();
				deleteRecordMap.put("module","Leads");
				deleteRecordMap.put("id",LeadID);
				deleteResp = zoho.crm.invokeConnector("crm.delete",deleteRecordMap);
			}
			// 		/* Create 1 deal using 2 prospects--- ends */
			/* Create 2 deal using 2 prospects--- start */
			else if(getLeads.get("Test") == "2 démarches avec 2 prospects/2 deals with 2 leads")
			{
				Client_2_contact_ID = "";
				Client_1_contact_ID = "";
				contact_Other_1 = "";
				contact_Other_2 = "";
				contact_Other_3 = "";
				housingDealMap.put("Name",getLeads.get("First_Namee") + " " + getLeads.get("Last_Name"));
				contactList = List();
				Second_deal_contactList = List();
				homeDealMap = Map();
				/*	Create  Prospect contact 1 */
				if(getLeads.get("First_Namee") != "" && getLeads.get("Last_Name") != "")
				{
					primaryContactMap = Map();
					primaryContactMap.put("First_Name",getLeads.get("First_Namee"));
					primaryContactMap.put("Nom_de_jeune_fille",getLeads.get("Nom_de_jeune_fille_Maiden_name"));
					primaryContactMap.put("Date_of_Birth",getLeads.get("Date_de_naissance_Birth_date"));
					primaryContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail"));
					primaryContactMap.put("T_l_phone_travail",getLeads.get("T_l_phone_maison_Home_phone"));
					primaryContactMap.put("Cellulaire",getLeads.get("Portable_Mobile"));
					primaryContactMap.put("Last_Name",getLeads.get("Last_Name"));
					primaryContactMap.put("Sexe",getLeads.get("Sex"));
					primaryContactMap.put("E_mail_Courriel_1",getLeads.get("Courriel_Email"));
					primaryContactMap.put("Provinces",getLeads.get("Province"));
					primaryContactMap.put("Ville_City",getLeads.get("Ville_City"));
					primaryContactMap.put("language_spoken1",getLeads.get("Language"));
					primaryContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication"));
					primaryContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
					primaryContactMap.put("Layout","4846491000000339001");
					primaryContactMap.put("Contact_Type","Client");
					Counselor = getLeads.get("Advisors");
					if(Counselor != null)
					{
						primaryContactMap.put("Counselor",Counselor.get("id"));
					}
					User = getLeads.get("Counselor_User");
					if(User != null)
					{
						primaryContactMap.put("Counselor_user",User.get("id"));
					}
					Temporary_counselor = getLeads.get("Conseiller_Counselor");
					if(Temporary_counselor != null)
					{
						primaryContactMap.put("Temporary_counselor",Temporary_counselor.get("id"));
					}
					Temporary_User = getLeads.get("Temporary_Counselor_User");
					if(Temporary_User != null)
					{
						primaryContactMap.put("Temporary_counselor_user",Temporary_User.get("id"));
					}
					createPrimaryContact = zoho.crm.createRecord("Contacts",primaryContactMap);
					if(createPrimaryContact.get("id") != null)
					{
						Client_1_contact_ID = createPrimaryContact.get("id");
						get_contact_Info = zoho.crm.getRecordById("Contacts",Client_1_contact_ID);
						if(get_contact_Info.get("id") != null)
						{
							Update_contact_C1 = Map();
							Update_contact_C1.put("Client_Number",get_contact_Info.get("Num_ro_Client"));
							housingDealMap.put("Client_1_number",get_contact_Info.get("Num_ro_Client"));
							update_Number_contact = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,Update_contact_C1);
						}
					}
					housingDealMap.put("Client",createPrimaryContact.get("id"));
					housingDealMap.put("Client_1_Provinces",getLeads.get("Province"));
					if(getLeads.get("Do_you_like_to_enter_prospect_1_profile_details") == "Oui/Yes")
					{
						/* Lead Profile*/
						housingDealMap.put("Type_of_client",getLeads.get("Type_s_of_client"));
						housingDealMap.put("Budget_range_Gamme_de_budget",getLeads.get("Budget_range"));
						housingDealMap.put("Desired_moving_date",getLeads.get("Desired_moving_date"));
						housingDealMap.put("Service_s_sought",getLeads.get("Type_s_of_service_s"));
						housingDealMap.put("Region",getLeads.get("Region"));
						housingDealMap.put("SAD_start_date",getLeads.get("home_care_start_date"));
					}
					if(createPrimaryContact.get("id") != null)
					{
						primary_map = Map();
						primary_map.put("contact",createPrimaryContact.get("id"));
						primary_map.put("Kind_of_Contact","Client");
						primary_map.put("Cell_Phone",getLeads.get("Portable_Mobile"));
						primary_map.put("Email",getLeads.get("Courriel_Email"));
						primary_map.put("Home_Phone",getLeads.get("T_l_phone_maison_Home_phone"));
						primary_map.put("Work_Phone",getLeads.get("T_l_phone_travail"));
						primary_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
						contactList.add(primary_map);
					}
				}
				/* Create Primary contact */
				if(getLeads.get("Choose_Primary_Contact") == "Créer nouveau contact/Create new contact")
				{
					if(getLeads.get("Prospect_Contact_1_First_Name") != "" && getLeads.get("Prospect_Contact_1_Last_Name") != "")
					{
						Prospect_ContactMap = Map();
						Prospect_ContactMap.put("First_Name",getLeads.get("Prospect_Contact_1_First_Name"));
						Prospect_ContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_P1"));
						Prospect_ContactMap.put("T_l_phone_travail",getLeads.get("Prospect_Contact_1_Home_Phone"));
						Prospect_ContactMap.put("Cellulaire",getLeads.get("Prospect_Contact_1_Cellphone"));
						Prospect_ContactMap.put("Type_de_contact",getLeads.get("Prospect_Contact_1_Type_of_contact"));
						Prospect_ContactMap.put("language_spoken1",getLeads.get("Prospect_Contact_1_Language"));
						Prospect_ContactMap.put("Last_Name",getLeads.get("Prospect_Contact_1_Last_Name"));
						Prospect_ContactMap.put("Sexe",getLeads.get("Prospect_Contact_1_Sex"));
						Prospect_ContactMap.put("E_mail_Courriel_1",getLeads.get("Prospect_Contact_1_Email"));
						Prospect_ContactMap.put("Provinces",getLeads.get("Prospect_Contact_1_Province"));
						Prospect_ContactMap.put("Ville_City",getLeads.get("Ville_City_P"));
						Prospect_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_P"));
						Prospect_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_p"));
						Prospect_ContactMap.put("Layout","4846491000000091033");
						Prospect_ContactMap.put("Contact_Type","Primaire/Primary");
						createProspectcontact = zoho.crm.createRecord("Contacts",Prospect_ContactMap);
						if(createProspectcontact.get("id") != null)
						{
							contact_Other_1 = createProspectcontact.get("id");
							prospect_contact_map = Map();
							prospect_contact_map.put("contact",createProspectcontact.get("id"));
							prospect_contact_map.put("Kind_of_Contact","Primaire/Primary");
							prospect_contact_map.put("Cell_Phone",getLeads.get("Prospect_Contact_1_Cellphone"));
							prospect_contact_map.put("Email",getLeads.get("Prospect_Contact_1_Email"));
							prospect_contact_map.put("Home_Phone",getLeads.get("Prospect_Contact_1_Home_Phone"));
							prospect_contact_map.put("Type_of_Contact_s",getLeads.get("Prospect_Contact_1_Type_of_contact"));
							prospect_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_P1"));
							prospect_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_p"));
							contactList.add(prospect_contact_map);
							Second_deal_contactList.add(prospect_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Primary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Primary_info = getLeads.get("Primary_Contacts");
					if(Existing_Primary_info != null)
					{
						Existing_primary_ID = Existing_Primary_info.get("id");
						getexisting_contact = zoho.crm.getRecordById("Contacts",Existing_primary_ID);
						if(getexisting_contact.get("id") != null)
						{
							Existing_Primary_contact = Map();
							Existing_Primary_contact.put("contact",Existing_primary_ID);
							Existing_Primary_contact.put("Kind_of_Contact","Primaire/Primary");
							Existing_Primary_contact.put("Cell_Phone",getexisting_contact.get("Cellulaire"));
							Existing_Primary_contact.put("Email",getexisting_contact.get("E_mail_Courriel_1"));
							Existing_Primary_contact.put("Home_Phone",getexisting_contact.get("T_l_phone_travail"));
							Existing_Primary_contact.put("Type_of_Contact_s",getexisting_contact.get("Type_de_contact"));
							Existing_Primary_contact.put("Work_Phone",getexisting_contact.get("T_l_phone_maison"));
							Existing_Primary_contact.put("Work_Phone_Extension",getexisting_contact.get("Work_Phone_Extension"));
							contactList.add(Existing_Primary_contact);
							Second_deal_contactList.add(Existing_Primary_contact);
						}
					}
				}
				/*  Create Secondary contact */
				if(getLeads.get("Choose_Secondary_Contact") == "Créer nouveau contact/Create new contact")
				{
					if(getLeads.get("Secondary_First_Name") != "" && getLeads.get("Secondary_Last_Name") != "")
					{
						Secondary_ContactMap = Map();
						Secondary_ContactMap.put("First_Name",getLeads.get("Secondary_First_Name"));
						Secondary_ContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_S"));
						Secondary_ContactMap.put("T_l_phone_travail",getLeads.get("Secondary_Home_Phone"));
						Secondary_ContactMap.put("Cellulaire",getLeads.get("Secondary_Cellphone"));
						Secondary_ContactMap.put("Type_de_contact",getLeads.get("Secondary_Contact"));
						Secondary_ContactMap.put("language_spoken1",getLeads.get("Language_S"));
						Secondary_ContactMap.put("Last_Name",getLeads.get("Secondary_Last_Name"));
						Secondary_ContactMap.put("Sexe",getLeads.get("Secondary_Sex"));
						Secondary_ContactMap.put("E_mail_Courriel_1",getLeads.get("Secondary_Con_Email"));
						Secondary_ContactMap.put("Provinces",getLeads.get("Secondary_Province"));
						Secondary_ContactMap.put("Ville_City",getLeads.get("Ville_City_S"));
						Secondary_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_S"));
						Secondary_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_s"));
						Secondary_ContactMap.put("Layout","4846491000000091033");
						Secondary_ContactMap.put("Contact_Type","Secondaire/Secondary");
						createSecondarycontact = zoho.crm.createRecord("Contacts",Secondary_ContactMap);
						if(createSecondarycontact.get("id") != null)
						{
							contact_Other_2 = createSecondarycontact.get("id");
							Sec_contact_map = Map();
							Sec_contact_map.put("contact",createSecondarycontact.get("id"));
							Sec_contact_map.put("Kind_of_Contact","Secondaire/Secondary");
							Sec_contact_map.put("Cell_Phone",getLeads.get("Secondary_Cellphone"));
							Sec_contact_map.put("Email",getLeads.get("Secondary_Con_Email"));
							Sec_contact_map.put("Home_Phone",getLeads.get("Secondary_Home_Phone"));
							Sec_contact_map.put("Type_of_Contact_s",getLeads.get("Secondary_Contact"));
							Sec_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_S"));
							Sec_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_s"));
							contactList.add(Sec_contact_map);
							Second_deal_contactList.add(Sec_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Secondary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_secondary_info = getLeads.get("Secondary_Contact1");
					if(Existing_secondary_info != null)
					{
						Existing_secondary_ID = Existing_secondary_info.get("id");
						getexisting_S_contact = zoho.crm.getRecordById("Contacts",Existing_secondary_ID);
						if(getexisting_S_contact.get("id") != null)
						{
							Existing_S_contact = Map();
							Existing_S_contact.put("contact",Existing_secondary_ID);
							Existing_S_contact.put("Kind_of_Contact","Secondaire/Secondary");
							Existing_S_contact.put("Cell_Phone",getexisting_S_contact.get("Cellulaire"));
							Existing_S_contact.put("Email",getexisting_S_contact.get("E_mail_Courriel_1"));
							Existing_S_contact.put("Home_Phone",getexisting_S_contact.get("T_l_phone_travail"));
							Existing_S_contact.put("Type_of_Contact_s",getexisting_S_contact.get("Type_de_contact"));
							Existing_S_contact.put("Work_Phone",getexisting_S_contact.get("T_l_phone_maison"));
							Existing_S_contact.put("Work_Phone_Extension",getexisting_S_contact.get("Work_Phone_Extension"));
							contactList.add(Existing_S_contact);
							Second_deal_contactList.add(Existing_S_contact);
						}
					}
				}
				/*Create Healthcare contact*/
				if(getLeads.get("Choose_Healthcare_Contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_3 = "";
					if(getLeads.get("Healthcare_First_Name") != "" && getLeads.get("Healthcare_Last_Name") != "")
					{
						Health_ContactMap = Map();
						Health_ContactMap.put("First_Name",getLeads.get("Healthcare_First_Name"));
						Health_ContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_R"));
						Health_ContactMap.put("T_l_phone_travail",getLeads.get("Healthcare_Home_Phone"));
						Health_ContactMap.put("Cellulaire",getLeads.get("Healthcare_contact_Cellphone"));
						Health_ContactMap.put("Type_de_contact",getLeads.get("Healthcare_Contact"));
						Health_ContactMap.put("language_spoken1",getLeads.get("Language_H"));
						Health_ContactMap.put("Last_Name",getLeads.get("Healthcare_Last_Name"));
						Health_ContactMap.put("Sexe",getLeads.get("Healthcare_Sex"));
						Health_ContactMap.put("E_mail_Courriel_1",getLeads.get("Healthcare_Email"));
						Health_ContactMap.put("Provinces",getLeads.get("Healthcare_Province"));
						Health_ContactMap.put("Ville_City",getLeads.get("Ville_City_R"));
						Health_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_R"));
						Health_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
						Health_ContactMap.put("Layout","4846491000000091033");
						Health_ContactMap.put("Contact_Type","Soins de santé/Health Care");
						Health_ContactMap.put("Lead_ID",getLeads.get("id"));
						createHealthcontact = zoho.crm.createRecord("Contacts",Health_ContactMap);
						if(createHealthcontact.get("id") != null)
						{
							/*Add Hospital contact*/
							hsptlContact = Map();
							hsptlContact.put("Name",getLeads.get("Healthcare_First_Name") + " " + getLeads.get("Healthcare_Last_Name"));
							hsptlContact.put("Email",getLeads.get("Healthcare_Email"));
							hsptlContact.put("Phone",getLeads.get("Healthcare_contact_Cellphone"));
							hsptlContact.put("Contact_Sex",getLeads.get("Healthcare_Sex"));
							hsptlContact.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
							hsptlContact.put("Contact_ID",createHealthcontact.get("id"));
							createHospitalcontact = zoho.crm.createRecord("Hospital_Contacts",hsptlContact);
							if(createHospitalcontact.get("id") != null)
							{
								if(getLeads.get("Hospital") == null)
								{
									/*updating Hospital Contact in Deal*/
									housingDealMap.put("Hospital",createHospitalcontact.get("id"));
									homeDealMap.put("Hospital",createHospitalcontact.get("id"));
								}
							}
							/*create In deal*/
							contact_Other_3 = createHealthcontact.get("id");
							Health_contact_map = Map();
							Health_contact_map.put("contact",createHealthcontact.get("id"));
							Health_contact_map.put("Kind_of_Contact","Soins de santé/Health Care");
							Health_contact_map.put("Cell_Phone",getLeads.get("Healthcare_contact_Cellphone"));
							Health_contact_map.put("Email",getLeads.get("Healthcare_Email"));
							Health_contact_map.put("Home_Phone",getLeads.get("Healthcare_Home_Phone"));
							Health_contact_map.put("Type_of_Contact_s",getLeads.get("Healthcare_Contact"));
							Health_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
							Health_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
							contactList.add(Health_contact_map);
							Second_deal_contactList.add(Health_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Healthcare_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Health_info = getLeads.get("Healthcare_Contact1");
					if(Existing_Health_info != null)
					{
						Existing_Health_ID = Existing_Health_info.get("id");
						getexisting_H_contact = zoho.crm.getRecordById("Contacts",Existing_Health_ID);
						if(getexisting_H_contact.get("id") != null)
						{
							/*create In deal*/
							Existing_H_contact = Map();
							Existing_H_contact.put("contact",Existing_Health_ID);
							Existing_H_contact.put("Kind_of_Contact","Soins de santé/Health Care");
							Existing_H_contact.put("Cell_Phone",getexisting_H_contact.get("Cellulaire"));
							Existing_H_contact.put("Email",getexisting_H_contact.get("E_mail_Courriel_1"));
							Existing_H_contact.put("Home_Phone",getexisting_H_contact.get("T_l_phone_travail"));
							Existing_H_contact.put("Type_of_Contact_s",getexisting_H_contact.get("Type_de_contact"));
							Existing_H_contact.put("Work_Phone",getexisting_H_contact.get("T_l_phone_maison"));
							Existing_H_contact.put("Work_Phone_Extension",getexisting_H_contact.get("Work_Phone_Extension"));
							contactList.add(Existing_H_contact);
							Second_deal_contactList.add(Existing_H_contact);
						}
					}
				}
				// Creating another deal 
				/* General information*/
				homeDealMap.put("Owner",current_userID.tolong());
				homeDealMap.put("Name",getLeads.get("Prospect_First_Name2") + " " + getLeads.get("Prospect_Last_Name2"));
				homeDealMap.put("Creation_date",zoho.currentdate.toString("yyyy-MM-dd"));
				homeDealMap.put("Stage","Active");
				homeDealMap.put("Through_Lead","Yes");
				homeDealMap.put("Tracking_Id",getLeads.get("Tracking_Id"));
				homeDealMap.put("Deal_IDS","Deal2");
				homeDealMap.put("Lead_ID",getLeads.get("id"));
				Counselor_2 = getLeads.get("Advisors");
				if(Counselor_2 != null)
				{
					homeDealMap.put("Advisors",Counselor_2.get("id"));
				}
				User_2 = getLeads.get("Counselor_User");
				if(User_2 != null)
				{
					homeDealMap.put("Counselor_user",User_2.get("id"));
				}
				Temporary_counselor_2 = getLeads.get("Conseiller_Counselor");
				if(Temporary_counselor_2 != null)
				{
					homeDealMap.put("Temporary_counselor",Temporary_counselor_2.get("id"));
				}
				Temporary_User_2 = getLeads.get("Temporary_Counselor_User");
				if(Temporary_User_2 != null)
				{
					homeDealMap.put("Temporary_counselor_user",Temporary_User_2.get("id"));
				}
				homeDealMap.put("Personal_referral",getLeads.get("Personal_referral"));
				homeDealMap.put("Comments",getLeads.get("General_comments"));
				/* Deal source*/
				homeDealMap.put("Deal_type_Type_de_d_marche",getLeads.get("Lead_type"));
				homeDealMap.put("Lead_source",getLeads.get("Source_du_prospect"));
				if(getLeads.get("Source_du_prospect") == "Ami/Famille-Friend/Family")
				{
					homeDealMap.put("Precision",getLeads.get("Precision"));
				}
				if(getLeads.get("Source_du_prospect") == "Ancient client/Former customer")
				{
					homeDealMap.put("Precision",getLeads.get("Precision"));
				}
				if(getLeads.get("Source_du_prospect") == "Autre/Other")
				{
					homeDealMap.put("Precision",getLeads.get("Precision"));
				}
				if(getLeads.get("Source_du_prospect") == "Marketing traditionnel/Trad.marketing")
				{
					homeDealMap.put("Precision",getLeads.get("Precision"));
					homeDealMap.put("Traditionnal_marketing",getLeads.get("Marketing_traditionnel_Trad_marketing"));
				}
				if(getLeads.get("Source_du_prospect") == "Partenaires/Partners")
				{
					homeDealMap.put("Partners_Partenaires",getLeads.get("Partners_Partenaires"));
					homeDealMap.put("Precision",getLeads.get("Precision"));
				}
				if(getLeads.get("Source_du_prospect") == "RSSS/Healthcare network")
				{
					homeDealMap.put("Health_care_network_RSSS",getLeads.get("Health_care_network"));
					homeDealMap.put("Precision",getLeads.get("Precision"));
				}
				if(getLeads.get("Source_du_prospect") == "Web")
				{
					homeDealMap.put("Web",getLeads.get("Web_s"));
					homeDealMap.put("Precision",getLeads.get("Precision"));
				}
				homeDealMap.put("Languages",getLeads.get("Preffered_Languages"));
				/*lookup field ---start*/
				if(getLeads.get("Hospital") != null)
				{
					hsptlInfo = zoho.crm.getRelatedRecords("Hospital_Contacts22","Leads",getLeads.get("id"));
					IDlist = List();
					for each  rec in hsptlInfo
					{
						if(rec.get("Hospital") != null)
						{
							hopsitalID = rec.get("Hospital").get("id");
							IDlist.add(hopsitalID);
						}
						contactID = IDlist.getasstring(0);
					}
					homeDealMap.put("Hospital",contactID.tolong());
				}
				/*lookup field ---end*/
				/* Create Prospect contact 2 */
				if(getLeads.get("Prospect_First_Name2") != "" && getLeads.get("Prospect_Last_Name2") != "")
				{
					primaryContactMap_2 = Map();
					primaryContactMap_2.put("First_Name",getLeads.get("Prospect_First_Name2"));
					primaryContactMap_2.put("Nom_de_jeune_fille",getLeads.get("Prospect_Maiden_Name2"));
					primaryContactMap_2.put("Date_of_Birth",getLeads.get("Date_de_naissance_Birth_date_2"));
					primaryContactMap_2.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_P"));
					primaryContactMap_2.put("T_l_phone_travail",getLeads.get("Prospect_T_l_phone_maison_Home_phone"));
					primaryContactMap_2.put("Cellulaire",getLeads.get("Prospect_Portable_Mobile"));
					primaryContactMap_2.put("Last_Name",getLeads.get("Prospect_Last_Name2"));
					primaryContactMap_2.put("Sexe",getLeads.get("Prospect_Sex2"));
					primaryContactMap_2.put("E_mail_Courriel_1",getLeads.get("Prospect_Email2"));
					primaryContactMap_2.put("Ville_City",getLeads.get("Prospect_Ville_City"));
					primaryContactMap_2.put("Provinces",getLeads.get("Prospect_Province2"));
					primaryContactMap_2.put("language_spoken1",getLeads.get("Prospect_Langue_Language"));
					primaryContactMap_2.put("Preferred_communication1",getLeads.get("Preferred_communication_2"));
					primaryContactMap_2.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_2"));
					primaryContactMap_2.put("Layout","4846491000000339001");
					primaryContactMap_2.put("Contact_Type","Client");
					Counselor = getLeads.get("Advisors");
					if(Counselor != null)
					{
						primaryContactMap.put("Counselor",Counselor.get("id"));
					}
					User = getLeads.get("Counselor_User");
					if(User != null)
					{
						primaryContactMap.put("Counselor_user",User.get("id"));
					}
					Temporary_counselor = getLeads.get("Conseiller_Counselor");
					if(Temporary_counselor != null)
					{
						primaryContactMap.put("Temporary_counselor",Temporary_counselor.get("id"));
					}
					Temporary_User = getLeads.get("Temporary_Counselor_User");
					if(Temporary_User != null)
					{
						primaryContactMap.put("Temporary_counselor_user",Temporary_User.get("id"));
					}
					createPrimaryContact_res = zoho.crm.createRecord("Contacts",primaryContactMap_2);
					if(createPrimaryContact_res.get("id") != null)
					{
						Client_2_contact_ID = createPrimaryContact_res.get("id");
						get_Client_Info = zoho.crm.getRecordById("Contacts",Client_2_contact_ID);
						if(get_Client_Info.get("id") != null)
						{
							Update_contact_C2 = Map();
							Update_contact_C2.put("Client_Number",get_Client_Info.get("Num_ro_Client"));
							homeDealMap.put("Client_1_number",get_Client_Info.get("Num_ro_Client"));
							update_Client_contact = zoho.crm.updateRecord("Contacts",Client_2_contact_ID,Update_contact_C2);
						}
					}
					homeDealMap.put("Client",createPrimaryContact_res.get("id"));
					homeDealMap.put("Client_1_Provinces",getLeads.get("Prospect_Province2"));
					if(getLeads.get("Do_you_like_to_enter_prospect_2_profile_details") == "Oui/Yes")
					{
						/* Lead  Profile -2*/
						homeDealMap.put("Type_of_client",getLeads.get("Profile_Type_s_de_client_Type_s_of_client"));
						homeDealMap.put("Desired_moving_date",getLeads.get("Profile_Desired_moving_date"));
						homeDealMap.put("Budget_range_Gamme_de_budget",getLeads.get("Profile_Budget_range"));
						homeDealMap.put("Service_s_sought",getLeads.get("Profile_Type_s_de_service_s_Type_s_of_service_s"));
						homeDealMap.put("Region",getLeads.get("Profile_Region_Region"));
						homeDealMap.put("SAD_start_date",getLeads.get("Profile_Start_date_SAD_Home_care_start_date"));
					}
					if(createPrimaryContact_res.get("id") != null)
					{
						primary_map_2 = Map();
						primary_map_2.put("contact",createPrimaryContact_res.get("id"));
						primary_map_2.put("Kind_of_Contact","Client");
						primary_map_2.put("Cell_Phone",getLeads.get("Prospect_Portable_Mobile"));
						primary_map_2.put("Email",getLeads.get("Prospect_Email2"));
						primary_map_2.put("Home_Phone",getLeads.get("Prospect_T_l_phone_maison_Home_phone"));
						primary_map_2.put("Work_Phone",getLeads.get("T_l_phone_travail_P"));
						primary_map_2.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_2"));
						Second_deal_contactList.add(primary_map_2);
					}
				}
				homeDealMap.put("Contact_subform",Second_deal_contactList);
				createHouseCareDeal_2 = zoho.crm.createRecord("Home_Care_Deal",homeDealMap);
				if(createHouseCareDeal_2.get("id") != null)
				{
					dealID1 = createHouseCareDeal_2.get("id");
					leadCRMID_2 = "";
					dealCRMID_2 = "";
					another_dealID = createHouseCareDeal_2.get("id");
					getdeal_info_2 = zoho.crm.getRecordById("Home_Care_Deal",another_dealID);
					if(getdeal_info_2.get("id") != null)
					{
						leadCRMID_2 = getdeal_info_2.get("Lead_ID");
						dealCRMID_2 = getdeal_info_2.get("id");
						UpdateDealMap_2 = Map();
						UpdateDealMap_2.put("Home_Care_Number",getdeal_info_2.get("Request_unique_number_Num_ro_de_d_marche_unique"));
						update_Number_deal = zoho.crm.updateRecord("Home_Care_Deal",another_dealID,UpdateDealMap_2);
						/* tracking-starts*/
						if(leadCRMID_2 != null)
						{
							leadTrackerInfo_2 = zoho.crm.searchRecords("Tracking","(Lead_ID:equals:" + leadCRMID_2 + ")");
							if(leadTrackerInfo_2.size() > 0)
							{
								for each  rec in leadTrackerInfo_2
								{
									if(rec.get("id") != null)
									{
										trackingMap = Map();
										trackingMap.put("Lead_CRM_ID_1",leadCRMID_2);
										trackingMap.put("Home_care_Deal_Creation_Date_1",zoho.currentdate.toString("yyyy-MM-dd"));
										trackingMap.put("Personal_Reference_Deal_2",getdeal_info_2.get("Personal_referral"));
										trackingMap.put("Deal_Status_1","Opened");
										trackingMap.put("D_marches_Status_1",getdeal_info_2.get("Stage"));
										trackingMap.put("Deal_ID_1",dealCRMID_2);
										if(getdeal_info_2.get("Client") != null)
										{
											trackingMap.put("Client",getdeal_info_2.get("Client").get("name"));
										}
										trackingMap.put("Primary_Province_1",getdeal_info_2.get("Client_2_Provinces"));
										trackingMap.put("Deal_Type_1","Home Care");
										hospitalInfo = getdeal_info_2.get("Hospital");
										if(hospitalInfo != null)
										{
											trackingMap.put("Deal_Hospital_2",hospitalInfo.get("name"));
											trackingMap.put("Deal_Hospital_ID_2",hospitalInfo.get("id"));
											contactInfo = zoho.crm.getRelatedRecords("Hospital_Branches21","Hospital_Contacts",hospitalInfo.get("id"));
											for each  contactrec in contactInfo
											{
												if(contactrec.get("Hospital_Branches") != null)
												{
													trackingMap.put("Deal_Hospital_Branch_2",contactrec.get("Hospital_Branches").get("name"));
													branchInfo = zoho.crm.getRecordById("Branches",contactrec.get("Hospital_Branches").get("id"));
													if(branchInfo.get("id") != null)
													{
														hsptlInfo = zoho.crm.getRelatedRecords("Hospital19","Branches",branchInfo.get("id"));
														for each  rechsptl in hsptlInfo
														{
															if(rechsptl.get("Hospital_Branches") != null)
															{
																trackingMap.put("Deal_Hospital_21",rechsptl.get("Hospital_Branches").get("name"));
															}
														}
													}
												}
											}
										}
										/*subform*/
										subformInfo = getdeal_info_2.get("Contact_subform");
										for each  contactSubform in subformInfo
										{
											if(contactSubform.get("Kind_of_Contact") == "Primaire/Primary")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("Primary_contact_1",contactSubform.get("contact").get("name"));
												}
											}
											if(contactSubform.get("Kind_of_Contact") == "Secondaire/Secondary")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("Secondary_contact_1",contactSubform.get("contact").get("name"));
												}
											}
											if(contactSubform.get("Kind_of_Contact") == "Soins de santé/Health Care")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("Health_care_contact_1",contactSubform.get("contact").get("name"));
												}
											}
										}
										/*Deal source 2*/
										trackingMap.put("Deal_Type_Deal_2",getdeal_info_2.get("Deal_type_Type_de_d_marche"));
										trackingMap.put("Deal_Source_1",getdeal_info_2.get("Lead_source"));
										trackingMap.put("RSSS_1",ifnull(getdeal_info_2.get("Health_care_network_RSSS"),""));
										trackingMap.put("Web_1",ifnull(getdeal_info_2.get("Web"),""));
										trackingMap.put("Partners_1",ifnull(getdeal_info_2.get("Partners_Partenaires"),""));
										trackingMap.put("Trad_marketing_1",ifnull(getdeal_info_2.get("Traditionnal_marketing"),""));
										trackingMap.put("Precision_1",ifnull(getdeal_info_2.get("Precision"),""));
										updateleadTrack = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),trackingMap);
									}
								}
							}
						}
						/* tracking-ends*/
						/* Notes */
						if(leadCRMID_2 != null && dealCRMID_2 != null)
						{
							getNotes = zoho.crm.getRelatedRecords("Notes","Leads",leadCRMID_2);
							for each  notes in getNotes
							{
								datamaps = Map();
								dataList = List();
								notes_map = Map();
								content = notes.get("Note_Content");
								if(notes.get("Created_By") != null)
								{
									content = content + "    " + "Created By: " + " " + notes.get("Created_By").get("name");
								}
								notesTitle = if(notes.get("Note_Title") != "" || notes.get("Note_Title") != null,notes.get("Note_Title"),"");
								notes_map.put("Note_Title",notesTitle);
								notes_map.put("Note_Content",content);
								notes_map.put("Parent_Id",dealCRMID_2);
								notes_map.put("se_module","Home_Care_Deal");
								dataList.add(notes_map);
								datamaps.put("data",dataList);
								notecreate = zoho.crm.createRecord("Notes",notes_map);
							}
							/*Task*/
							getTask = zoho.crm.getRelatedRecords("Tasks","Leads",leadCRMID_2);
							for each  task in getTask
							{
								owner_info = task.get("Owner");
								task_owner = if(owner_info.get("name") != "" || owner_info.get("name") != null,owner_info.get("name"),"");
								datamaps = Map();
								dataList = List();
								mp = Map();
								mp.put("Task Owner",task_owner);
								mp.put("Owner",task.get("Owner"));
								mp.put("Created By",zoho.adminuserid);
								mp.put("Modified By",zoho.adminuserid);
								mp.put("Subject",task.get("Subject"));
								mp.put("Due_Date",task.get("Due_Date"));
								mp.put("Status",task.get("Status"));
								mp.put("Priority",task.get("Priority"));
								mp.put("Description",task.get("Description"));
								mp.put("$se_module","Home_Care_Deal");
								mp.put("What_Id",dealCRMID_2);
								dataList.add(mp);
								datamaps.put("data",dataList);
								taskcreate = zoho.crm.createRecord("Tasks",mp);
							}
						}
						/* update deal number to contact -client 2*/
						if(Client_2_contact_ID != "")
						{
							client2_map = Map();
							client2_map.put("Deal_Number",getdeal_info_2.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateClient2 = zoho.crm.updateRecord("Contacts",Client_2_contact_ID.toLong(),client2_map);
						}
					}
				}
				housingDealMap.put("Contact_subform",contactList);
				createHouseCareDeal_1 = zoho.crm.createRecord("Home_Care_Deal",housingDealMap);
				if(createHouseCareDeal_1.get("id") != null)
				{
					dealID = createHouseCareDeal_1.get("id");
					leadCRMID = "";
					dealCRMID = "";
					Created_deal_res = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Home_Care_Deal",Created_deal_res);
					if(getdeal_info.get("id") != null)
					{
						leadCRMID = getdeal_info.get("Lead_ID");
						dealCRMID = getdeal_info.get("id");
						UpdateDealMap = Map();
						UpdateDealMap.put("Home_Care_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
						update_deal_res = zoho.crm.updateRecord("Home_Care_Deal",Created_deal_res,UpdateDealMap);
						/*tracking ---starts*/
						if(leadCRMID != null)
						{
							leadTrackerInfo = zoho.crm.searchRecords("Tracking","(Lead_ID:equals:" + leadCRMID + ")");
							if(leadTrackerInfo.size() > 0)
							{
								for each  rec in leadTrackerInfo
								{
									if(rec.get("id") != null)
									{
										trackingMap = Map();
										trackingMap.put("Lead_to_Deal_Conversion_Date",ifnull(getdeal_info.get("Creation_date"),""));
										trackingMap.put("Deal_Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
										trackingMap.put("Personal_Reference_Deal_1",getdeal_info.get("Personal_referral"));
										trackingMap.put("Lead_Stage","Lead Converted");
										trackingMap.put("Lead_CRM_ID",leadCRMID);
										trackingMap.put("Deal_Status","Opened");
										trackingMap.put("D_marche_Soins_Status",getdeal_info.get("Stage"));
										trackingMap.put("Deal_ID",dealCRMID);
										if(getdeal_info.get("Client") != null)
										{
											trackingMap.put("client_1",getdeal_info.get("Client").get("id"));
										}
										trackingMap.put("Provinces",getdeal_info.get("Client_1_Provinces"));
										trackingMap.put("Deal_Type","Home Care");
										hospitalInfo = getdeal_info.get("Hospital");
										if(hospitalInfo != null)
										{
											trackingMap.put("Deal_Hospital_1",hospitalInfo.get("name"));
											trackingMap.put("Deal_Hospital_ID_1",hospitalInfo.get("id"));
											contactInfo = zoho.crm.getRelatedRecords("Hospital_Branches21","Hospital_Contacts",hospitalInfo.get("id"));
											for each  contactrec in contactInfo
											{
												if(contactrec.get("Hospital_Branches") != null)
												{
													trackingMap.put("Deal_Hospital_Branch_1",contactrec.get("Hospital_Branches").get("name"));
													branchInfo = zoho.crm.getRecordById("Branches",contactrec.get("Hospital_Branches").get("id"));
													if(branchInfo.get("id") != null)
													{
														hsptlInfo = zoho.crm.getRelatedRecords("Hospital19","Branches",branchInfo.get("id"));
														for each  rechsptl in hsptlInfo
														{
															if(rechsptl.get("Hospital_Branches") != null)
															{
																trackingMap.put("Deal_Hospital_11",rechsptl.get("Hospital_Branches").get("name"));
															}
														}
													}
												}
											}
										}
										/*subform*/
										subformInfo = getdeal_info.get("Contact_subform");
										for each  contactSubform in subformInfo
										{
											if(contactSubform.get("Kind_of_Contact") == "Primaire/Primary")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("Primary_Contacts",contactSubform.get("contact").get("id"));
												}
											}
											if(contactSubform.get("Kind_of_Contact") == "Secondaire/Secondary")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("secondary_contact",contactSubform.get("contact").get("id"));
												}
											}
											if(contactSubform.get("Kind_of_Contact") == "Soins de santé/Health Care")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap.put("Health_care_contact",contactSubform.get("contact").get("id"));
												}
											}
										}
										/*Deal source*/
										trackingMap.put("Deal_Type_Deal_1",getdeal_info.get("Deal_type_Type_de_d_marche"));
										trackingMap.put("Deal_Source",getdeal_info.get("Lead_source"));
										trackingMap.put("RSSS",ifnull(getdeal_info.get("Health_care_network_RSSS"),""));
										trackingMap.put("Web",ifnull(getdeal_info.get("Web"),""));
										trackingMap.put("Partners",ifnull(getdeal_info.get("Partners_Partenaires"),""));
										trackingMap.put("Trad_marketing",ifnull(getdeal_info.get("Traditionnal_marketing"),""));
										trackingMap.put("Precision",ifnull(getdeal_info.get("Precision"),""));
										updateleadTrack = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),trackingMap);
									}
								}
							}
						}
						/* tracking-ends*/
						/* Notes */
						if(leadCRMID != null && dealCRMID != null)
						{
							getNotes = zoho.crm.getRelatedRecords("Notes","Leads",leadCRMID);
							for each  notes in getNotes
							{
								datamaps = Map();
								dataList = List();
								notes_map = Map();
								content = notes.get("Note_Content");
								if(notes.get("Created_By") != null)
								{
									content = content + "    " + "Created By: " + " " + notes.get("Created_By").get("name");
								}
								notesTitle = if(notes.get("Note_Title") != "" || notes.get("Note_Title") != null,notes.get("Note_Title"),"");
								notes_map.put("Note_Title",notesTitle);
								notes_map.put("Note_Content",content);
								notes_map.put("Parent_Id",dealCRMID);
								notes_map.put("se_module","Home_Care_Deal");
								dataList.add(notes_map);
								datamaps.put("data",dataList);
								notecreate = zoho.crm.createRecord("Notes",notes_map);
							}
							/*Task*/
							getTask = zoho.crm.getRelatedRecords("Tasks","Leads",leadCRMID);
							for each  task in getTask
							{
								owner_info = task.get("Owner");
								task_owner = if(owner_info.get("name") != "" || owner_info.get("name") != null,owner_info.get("name"),"");
								datamaps = Map();
								dataList = List();
								mp = Map();
								mp.put("Task Owner",task_owner);
								mp.put("Owner",task.get("Owner"));
								mp.put("Created By",zoho.adminuserid);
								mp.put("Modified By",zoho.adminuserid);
								mp.put("Subject",task.get("Subject"));
								mp.put("Due_Date",task.get("Due_Date"));
								mp.put("Status",task.get("Status"));
								mp.put("Priority",task.get("Priority"));
								mp.put("Description",task.get("Description"));
								mp.put("$se_module","Home_Care_Deal");
								mp.put("What_Id",dealCRMID);
								dataList.add(mp);
								datamaps.put("data",dataList);
								taskcreate = zoho.crm.createRecord("Tasks",mp);
							}
						}
						/* update deal number to contact -client 1*/
						if(Client_1_contact_ID != "")
						{
							client1_map = Map();
							client1_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateClient1 = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,client1_map);
						}
						/* Updating deal number to Contact other --starts*/
						if(contact_Other_1 != "")
						{
							other1_map = Map();
							other1_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateother1 = zoho.crm.updateRecord("Contacts",contact_Other_1,other1_map);
						}
						if(contact_Other_2 != "")
						{
							other2_map = Map();
							other2_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateother2 = zoho.crm.updateRecord("Contacts",contact_Other_2,other2_map);
						}
						if(contact_Other_3 != "")
						{
							other3_map = Map();
							other3_map.put("Deal_Number",getdeal_info.get("Request_unique_number_Num_ro_de_d_marche_unique"));
							updateother3 = zoho.crm.updateRecord("Contacts",contact_Other_3,other3_map);
						}
						/* Updating deal number to Contact other --ends*/
					}
				}
				/* Create  1st Deal in Creator --starts */
				if(createHouseCareDeal_1.get("id") != null)
				{
					Deal_CRM_ID = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Home_Care_Deal",Deal_CRM_ID);
					if(getdeal_info.get("id") != null)
					{
						ownerName = "lion_visavie";
						formName = "Home_Care_Deal";
						appName = "visavie";
						Creator_housingDealMap = Map();
						// 	General information
						Creator_housingDealMap.put("CRM_HomeCareDealId",getdeal_info.get("id"));
						Creator_housingDealMap.put("Lead_CRMID",getdeal_info.get("Lead_ID"));
						Creator_housingDealMap.put("Home_Care_Number",getdeal_info.get("Home_Care_Number"));
						Creator_housingDealMap.put("Home_Care_Deal_Name",getdeal_info.get("Name"));
						Creator_housingDealMap.put("Home_care_deal_status","Active");
						Temporary_info = getdeal_info.get("Temporary_counselor");
						if(Temporary_info != null)
						{
							Creator_housingDealMap.put("Temporary_ID",Temporary_info.get("id"));
						}
						Advisor_info = getdeal_info.get("Advisors");
						if(Advisor_info != null)
						{
							Creator_housingDealMap.put("Counseiller_ID",Advisor_info.get("id"));
						}
						if(getdeal_info.get("Creation_date") != null)
						{
							Creator_housingDealMap.put("Deal_creation_date",getdeal_info.get("Creation_date").toDate());
						}
						Creator_housingDealMap.put("Languages",getdeal_info.get("Languages"));
						// 			Profile 1 Client
						Contact_info = getdeal_info.get("Client");
						if(Contact_info != null)
						{
							Creator_housingDealMap.put("Contact1_CRM_ID",Contact_info.get("id"));
						}
						// 					Creator_housingDealMap.put("Budget_range_Gamme_de_budget",getdeal_info.get("Budget_range"));
						Creator_housingDealMap.put("Desired_moving_date_Date_de_d_m_nagement_d_sir_e",getdeal_info.get("Desired_moving_date"));
						Creator_housingDealMap.put("SAD_start_date",getdeal_info.get("SAD_start_date"));
						Creator_housingDealMap.put("Type_s_of_client_Type_s_de_client",getdeal_info.get("Type_of_client"));
						Creator_housingDealMap.put("Service_s_sought",getdeal_info.get("Service_s_sought"));
						Creator_housingDealMap.put("R_gion_Region",getdeal_info.get("Region"));
						// 			 Description de la demande/Description of the reque
						Creator_housingDealMap.put("Comments",getdeal_info.get("Comments"));
						// Source of the approach/Deal Source
						Creator_housingDealMap.put("Personal_referral",getdeal_info.get("Personal_referral"));
						Creator_housingDealMap.put("Lead_source",getdeal_info.get("Lead_source"));
						Creator_housingDealMap.put("Deal_type",getdeal_info.get("Deal_type_Type_de_d_marche"));
						Creator_housingDealMap.put("Precision",getdeal_info.get("Precision"));
						Creator_housingDealMap.put("Health_care_RSS",getdeal_info.get("Health_care_network_RSSS"));
						Creator_housingDealMap.put("Partners_Partenaires",getdeal_info.get("Partners_Partenaires"));
						Creator_housingDealMap.put("Web",getdeal_info.get("Web"));
						Creator_housingDealMap.put("Traditionnal_marketing_Marketing_traditionnel",getdeal_info.get("Traditionnal_marketing"));
						creatorDealResp = zoho.creator.createRecord(ownerName,appName,formName,Creator_housingDealMap,Map(),"zoho_mail");
					}
				}
				/* Create 2 nd Deal in Creator --starts */
				if(createHouseCareDeal_2.get("id") != null)
				{
					another_Deal_CRM_ID = createHouseCareDeal_2.get("id");
					deal_info = zoho.crm.getRecordById("Home_Care_Deal",another_Deal_CRM_ID);
					if(deal_info.get("id") != null)
					{
						ownerName = "lion_visavie";
						formName = "Home_Care_Deal";
						appName = "visavie";
						housingDealMap = Map();
						// 	General information
						housingDealMap.put("CRM_HomeCareDealId",deal_info.get("id"));
						housingDealMap.put("Lead_CRMID",deal_info.get("Lead_ID"));
						housingDealMap.put("Home_Care_Number",deal_info.get("Home_Care_Number"));
						housingDealMap.put("Home_Care_Deal_Name",deal_info.get("Name"));
						housingDealMap.put("Home_care_deal_status","Active");
						Temporary_info_2 = deal_info.get("Temporary_counselor");
						if(Temporary_info_2 != null)
						{
							housingDealMap.put("Temporary_ID",Temporary_info_2.get("id"));
						}
						Advisor_info_2 = deal_info.get("Advisors");
						if(Advisor_info_2 != null)
						{
							housingDealMap.put("Counseiller_ID",Advisor_info_2.get("id"));
						}
						if(deal_info.get("Creation_date") != null)
						{
							housingDealMap.put("Deal_creation_date",deal_info.get("Creation_date").toDate());
						}
						housingDealMap.put("Languages",deal_info.get("Languages"));
						// Profile 2 client
						Contact_info_2 = deal_info.get("Client");
						if(Contact_info_2 != null)
						{
							housingDealMap.put("Contact1_CRM_ID",Contact_info_2.get("id"));
						}
						housingDealMap.put("Type_s_of_client_Type_s_de_client",deal_info.get("Type_of_client"));
						housingDealMap.put("Desired_moving_date_Date_de_d_m_nagement_d_sir_e",deal_info.get("Desired_moving_date"));
						housingDealMap.put("Service_s_sought",deal_info.get("Service_s_sought"));
						housingDealMap.put("R_gion_Region",deal_info.get("Region"));
						housingDealMap.put("SAD_start_date",deal_info.get("SAD_start_date"));
						// 			 Description de la demande/Description of the reque
						housingDealMap.put("Comments",deal_info.get("Comments"));
						// Source of the approach/Deal Source
						housingDealMap.put("Personal_referral",deal_info.get("Personal_referral"));
						housingDealMap.put("Lead_source",deal_info.get("Lead_source"));
						housingDealMap.put("Deal_type",deal_info.get("Deal_type_Type_de_d_marche"));
						housingDealMap.put("Precision",deal_info.get("Precision"));
						housingDealMap.put("Health_care_RSS",deal_info.get("Health_care_network_RSSS"));
						housingDealMap.put("Partners_Partenaires",deal_info.get("Partners_Partenaires"));
						housingDealMap.put("Web",deal_info.get("Web"));
						housingDealMap.put("Traditionnal_marketing_Marketing_traditionnel",deal_info.get("Traditionnal_marketing"));
						another_creatorDealResp = zoho.creator.createRecord(ownerName,appName,formName,housingDealMap,Map(),"zoho_mail");
					}
				}
				/* delete lead*/
				deleteRecordMap = Map();
				deleteRecordMap.put("module","Leads");
				deleteRecordMap.put("id",LeadID);
				deleteResp = zoho.crm.invokeConnector("crm.delete",deleteRecordMap);
			}
			/* Create 2 deal using 2 prospects--- ends */
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Lead");
	dataMap.put("Process_Description","Home care Deal :Create Deal and Contact in CRM and Deal in Creator");
	dataMap.put("In_Data",LeadID.toLong());
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
/* return function*/
if(resp != "")
{
	return_Map = Map();
	return_Map.put("dealType",resp);
}
else
{
	return_Map = Map();
	return_Map.put("dealID1",dealID);
	return_Map.put("dealID2",dealID1);
}
return return_Map;
