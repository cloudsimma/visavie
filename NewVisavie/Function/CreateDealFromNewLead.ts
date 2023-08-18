resp = "";
dealID = "";
dealID1 = "";
try 
{
	getLeads = zoho.crm.getRecordById("New_Leads",leadID.toLong());
	if(getLeads.get("id") != null)
	{
		/*check type conversion -start*/
		dealavailable = false;
		dealwithdata = false;
		if(DealType == "1 démarche avec 2 prospects/1 deal with 2 leads" || DealType == "2 démarches avec 2 prospects/2 deals with 2 leads")
		{
			if(getLeads.get("First_name_2") != null && getLeads.get("Last_name_2") != null && getLeads.get("Sex_2") != null && getLeads.get("Province_2") != null)
			{
				dealwithdata = true;
			}
			else
			{
				updatemap = Map();
				updatemap.put("Available_Contact","Senior 1 and  2");
				updaterecord = zoho.crm.updateRecord("New_Leads",leadID.toLong(),updatemap);
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
			/*Gestion prospect/Lead management*/
			housingDealMap = Map();
			homeDealMap = Map();
			housingDealMap.put("Owner",current_userID.tolong());
			housingDealMap.put("Creation_date",zoho.currentdate.toString("yyyy-MM-dd"));
			housingDealMap.put("Stage","Active");
			housingDealMap.put("Through_Lead","Yes");
			housingDealMap.put("Tracking_Id",getLeads.get("Tracking_Id"));
			housingDealMap.put("Deal_IDS","Deal1");
			housingDealMap.put("Lead_ID",getLeads.get("id"));
			Counselor = getLeads.get("Counselor");
			if(Counselor != null)
			{
				housingDealMap.put("Counselor_Conseiller",Counselor.get("id"));
				homeDealMap.put("Counselor_Conseiller",Counselor.get("id"));
			}
			User = getLeads.get("Counselor_User");
			if(User != null)
			{
				housingDealMap.put("Counselor_user",User.get("id"));
				homeDealMap.put("Counselor_user",User.get("id"));
			}
			Temporary_counselor = getLeads.get("Temporary_counselor");
			if(Temporary_counselor != null)
			{
				housingDealMap.put("Conseiller_temporaire_Temporary_counselor",Temporary_counselor.get("id"));
				homeDealMap.put("Counselor_user",User.get("id"));
			}
			Temporary_User = getLeads.get("Temporary_Counselor_User");
			if(Temporary_User != null)
			{
				housingDealMap.put("Temporary_counselor_user",Temporary_User.get("id"));
				homeDealMap.put("Counselor_user",User.get("id"));
			}
			/*Informations générales/General informations*/
			housingDealMap.put("Deal_type_Type_de_d_marche",getLeads.get("Lead_origin"));
			housingDealMap.put("Lead_source_1",getLeads.get("Lead_category"));
			homeDealMap.put("Deal_type_Type_de_d_marche",getLeads.get("Lead_origin"));
			homeDealMap.put("Lead_source_1",getLeads.get("Lead_category"));
			if(getLeads.get("Lead_category") == "Ami/Famille-Friend/Family")
			{
				housingDealMap.put("Precision",getLeads.get("Precision"));
				homeDealMap.put("Precision",getLeads.get("Precision"));
			}
			if(getLeads.get("Lead_category") == "Ancient client/Former customer")
			{
				housingDealMap.put("Precision",getLeads.get("Precision"));
				homeDealMap.put("Precision",getLeads.get("Precision"));
			}
			if(getLeads.get("Lead_category") == "Autre/Other")
			{
				housingDealMap.put("Precision",getLeads.get("Precision"));
				homeDealMap.put("Precision",getLeads.get("Precision"));
			}
			if(getLeads.get("Lead_category") == "Marketing traditionnel/Trad.marketing")
			{
				housingDealMap.put("Precision",getLeads.get("Precision"));
				housingDealMap.put("Trade_marketing_1",getLeads.get("Trad_marketing"));
				homeDealMap.put("Precision",getLeads.get("Precision"));
				homeDealMap.put("Trade_marketing_1",getLeads.get("Trad_marketing"));
			}
			if(getLeads.get("Lead_category") == "Partenaires/Partners")
			{
				housingDealMap.put("Partners_Partenaires",getLeads.get("Partners"));
				housingDealMap.put("Precision",getLeads.get("Precision"));
				homeDealMap.put("Partners_Partenaires",getLeads.get("Partners"));
				homeDealMap.put("Precision",getLeads.get("Precision"));
			}
			if(getLeads.get("Lead_category") == "RSSS/Healthcare network")
			{
				housingDealMap.put("Health_care_network_RSSS",getLeads.get("RSSS"));
				housingDealMap.put("Precision",getLeads.get("Precision"));
				homeDealMap.put("Health_care_network_RSSS",getLeads.get("RSSS"));
				homeDealMap.put("Precision",getLeads.get("Precision"));
			}
			if(getLeads.get("Lead_category") == "Spectrum")
			{
				housingDealMap.put("Spectrum",getLeads.get("Spectrum"));
				homeDealMap.put("Spectrum",getLeads.get("Spectrum"));
			}
			if(getLeads.get("Lead_category") == "Web")
			{
				housingDealMap.put("Web",getLeads.get("Web"));
				housingDealMap.put("Precision",getLeads.get("Precision"));
				homeDealMap.put("Web",getLeads.get("Web"));
				homeDealMap.put("Precision",getLeads.get("Precision"));
			}
			housingDealMap.put("Personal_referral",getLeads.get("Personal_reference"));
			// 			housingDealMap.put("Region",getLeads.get("Region_sought"));
			// 			housingDealMap.put("Service_s_sought",getLeads.get("Service_s_recherch_s"));
			// 			housingDealMap.put("Type_s_of_client_Type_s_de_client",getLeads.get("Type_de_client"));
			homeDealMap.put("Personal_referral",getLeads.get("Personal_reference"));
			// 			homeDealMap.put("Region",getLeads.get("Region_sought"));
			// 			homeDealMap.put("Service_s_sought",getLeads.get("Service_s_recherch_s"));
			// 			homeDealMap.put("Type_s_of_client_Type_s_de_client",getLeads.get("Type_de_client"));
			/*Description demande/Request description*/
			housingDealMap.put("General_comments",getLeads.get("Comments_1"));
			homeDealMap.put("General_comments",getLeads.get("Comments_1"));
			/* Create 1 deal using 1 prospect--- starts */
			if(getLeads.get("Type_de_conversion") == "1 démarche avec 1 prospect/1 deal with 1 lead")
			{
				housingDealMap.put("Deal_Name",getLeads.get("First_name_1") + " " + getLeads.get("Last_name"));
				/*Prospect/Lead (1)*/
				Client_1_contact_ID = "";
				contactList = List();
				if(getLeads.get("First_name_1") != "" && getLeads.get("Last_name") != "")
				{
					primaryContactMap = Map();
					primaryContactMap.put("First_Name",getLeads.get("First_name_1"));
					primaryContactMap.put("Nom_de_jeune_fille",getLeads.get("Maiden_name"));
					primaryContactMap.put("Date_of_Birth",getLeads.get("Date_of_birth"));
					primaryContactMap.put("T_l_phone_maison",getLeads.get("Work_phone"));
					primaryContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
					primaryContactMap.put("T_l_phone_travail",getLeads.get("Home_phone"));
					primaryContactMap.put("Cellulaire",getLeads.get("Cell_phone"));
					primaryContactMap.put("Budget_range",getLeads.get("Budget_range"));
					primaryContactMap.put("Last_Name",getLeads.get("Last_name"));
					primaryContactMap.put("Sexe",getLeads.get("Sex"));
					primaryContactMap.put("E_mail_Courriel_1",getLeads.get("Email_1"));
					primaryContactMap.put("Provinces",getLeads.get("Province_1"));
					primaryContactMap.put("Ville_City",getLeads.get("City_1"));
					primaryContactMap.put("language_spoken1",getLeads.get("Language_s"));
					primaryContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication"));
					primaryContactMap.put("Layout","4846491000000339001");
					primaryContactMap.put("Contact_Type","Client");
					Contact_Counselor = getLeads.get("Counselor");
					if(Contact_Counselor != null)
					{
						primaryContactMap.put("Counselor",Contact_Counselor.get("id"));
					}
					Contact_User = getLeads.get("Counselor_User");
					if(Contact_User != null)
					{
						primaryContactMap.put("Counselor_user",Contact_User.get("id"));
					}
					Contact_Temporary_counselor = getLeads.get("Temporary_counselor");
					if(Contact_Temporary_counselor != null)
					{
						primaryContactMap.put("Temporary_counselor",Contact_Temporary_counselor.get("id"));
					}
					Contact_Temporary_User = getLeads.get("Temporary_Counselor_User");
					if(Contact_Temporary_User != null)
					{
						primaryContactMap.put("Temporary_counselor_user",Contact_Temporary_User.get("id"));
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
					housingDealMap.put("Contact",createPrimaryContact.get("id"));
					housingDealMap.put("Client_1_Provinces",getLeads.get("Province"));
					housingDealMap.put("SAD_start_date",getLeads.get("Home_care_start_date"));
					housingDealMap.put("Budget_range_Gamme_de_budget",getLeads.get("Budget_range"));
					housingDealMap.put("Desired_moving_date",getLeads.get("Desired_moving_date"));
					if(createPrimaryContact.get("id") != null)
					{
						primary_map = Map();
						primary_map.put("contact",createPrimaryContact.get("id"));
						primary_map.put("Kind_of_Contact","Client");
						primary_map.put("Cell_Phone",getLeads.get("Cell_phone"));
						primary_map.put("Email",getLeads.get("Email_1"));
						primary_map.put("Home_Phone",getLeads.get("Home_phone"));
						primary_map.put("Work_Phone",getLeads.get("Work_phone"));
						primary_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
						contactList.add(primary_map);
					}
				}
				/*Contact primaire/Primary contact*/
				if(getLeads.get("Add_primary_contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_1 = "";
					if(getLeads.get("First_name_P") != "" && getLeads.get("Last_name_P") != "")
					{
						Prospect_ContactMap = Map();
						Prospect_ContactMap.put("First_Name",getLeads.get("First_name_P"));
						Prospect_ContactMap.put("T_l_phone_maison",getLeads.get("Work_phone_P"));
						Prospect_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_P"));
						Prospect_ContactMap.put("Cellulaire",getLeads.get("Cell_phone_P"));
						Prospect_ContactMap.put("T_l_phone_travail",getLeads.get("Home_phone_P"));
						Prospect_ContactMap.put("Type_de_contact",getLeads.get("Type_of_contact_P"));
						Prospect_ContactMap.put("Last_Name",getLeads.get("Last_name_P"));
						Prospect_ContactMap.put("Sexe",getLeads.get("Sex_P"));
						Prospect_ContactMap.put("E_mail_Courriel_1",getLeads.get("Email_P"));
						Prospect_ContactMap.put("Provinces",getLeads.get("Province_P"));
						Prospect_ContactMap.put("Ville_City",getLeads.get("City_P"));
						Prospect_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_P"));
						Prospect_ContactMap.put("language_spoken1",getLeads.get("Language_s_P"));
						Prospect_ContactMap.put("Layout","4846491000000091033");
						Prospect_ContactMap.put("Contact_Type","Primaire/Primary");
						createProspectcontact = zoho.crm.createRecord("Contacts",Prospect_ContactMap);
						if(createProspectcontact.get("id") != null)
						{
							contact_Other_1 = createProspectcontact.get("id");
							prospect_contact_map = Map();
							prospect_contact_map.put("contact",createProspectcontact.get("id"));
							prospect_contact_map.put("Kind_of_Contact","Primaire/Primary");
							prospect_contact_map.put("Cell_Phone",getLeads.get("Cell_phone_P"));
							prospect_contact_map.put("Email",getLeads.get("Email_P"));
							prospect_contact_map.put("Home_Phone",getLeads.get("Home_phone_P"));
							prospect_contact_map.put("Type_of_Contact_s",getLeads.get("Type_of_contact_P"));
							prospect_contact_map.put("Work_Phone",getLeads.get("Work_phone_P"));
							prospect_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_P"));
							contactList.add(prospect_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Primary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Primary_info = getLeads.get("Existing_primary_contact");
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
				/*Contact secondaire/Secondary contact*/
				if(getLeads.get("Add_secondary_contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_2 = "";
					if(getLeads.get("First_name_S") != "" && getLeads.get("Last_name_S") != "")
					{
						Secondary_ContactMap = Map();
						Secondary_ContactMap.put("First_Name",getLeads.get("First_name_S"));
						Secondary_ContactMap.put("T_l_phone_maison",getLeads.get("Work_phone_S"));
						Secondary_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_S"));
						Secondary_ContactMap.put("Cellulaire",getLeads.get("Cell_phone_S"));
						Secondary_ContactMap.put("T_l_phone_travail",getLeads.get("Home_phone_S"));
						Secondary_ContactMap.put("Type_de_contact",getLeads.get("Type_of_contact_S"));
						Secondary_ContactMap.put("Last_Name",getLeads.get("Last_name_S"));
						Secondary_ContactMap.put("Sexe",getLeads.get("Sex_S	"));
						Secondary_ContactMap.put("E_mail_Courriel_1",getLeads.get("Email_S"));
						Secondary_ContactMap.put("Provinces",getLeads.get("Province_S"));
						Secondary_ContactMap.put("Ville_City",getLeads.get("City_S"));
						Secondary_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_S"));
						Secondary_ContactMap.put("language_spoken1",getLeads.get("Language_s_S"));
						Secondary_ContactMap.put("Layout","4846491000000091033");
						Secondary_ContactMap.put("Contact_Type","Secondaire/Secondary");
						createSecondarycontact = zoho.crm.createRecord("Contacts",Secondary_ContactMap);
						if(createSecondarycontact.get("id") != null)
						{
							contact_Other_2 = createSecondarycontact.get("id");
							Sec_contact_map = Map();
							Sec_contact_map.put("contact",createSecondarycontact.get("id"));
							Sec_contact_map.put("Kind_of_Contact","Secondaire/Secondary");
							Sec_contact_map.put("Cell_Phone",getLeads.get("Cell_phone_S"));
							Sec_contact_map.put("Email",getLeads.get("Email_S"));
							Sec_contact_map.put("Home_Phone",getLeads.get("Home_phone_S"));
							Sec_contact_map.put("Type_of_Contact_s",getLeads.get("Type_of_contact_S"));
							Sec_contact_map.put("Work_Phone",getLeads.get("Work_phone_S"));
							Sec_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_S"));
							contactList.add(Sec_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Secondary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_secondary_info = getLeads.get("Existing_secondary_contact");
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
				/*Contact RSSS/Healthcare network contact*/
				if(getLeads.get("Add_healthcare_network_contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_3 = "";
					if(getLeads.get("First_name_R") != "" && getLeads.get("Last_name_R") != "")
					{
						Health_ContactMap = Map();
						Health_ContactMap.put("First_Name",getLeads.get("First_name_R"));
						Health_ContactMap.put("T_l_phone_maison",getLeads.get("Work_phone_R"));
						Health_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
						Health_ContactMap.put("Cellulaire",getLeads.get("Cell_phone_R"));
						Health_ContactMap.put("T_l_phone_travail",getLeads.get("Home_phone_R"));
						Health_ContactMap.put("Type_de_contact",getLeads.get("Type_of_contact_R"));
						Health_ContactMap.put("Last_Name",getLeads.get("Last_name_R"));
						Health_ContactMap.put("Sexe",getLeads.get("Sex_R"));
						Health_ContactMap.put("E_mail_Courriel_1",getLeads.get("Email_R"));
						Health_ContactMap.put("Provinces",getLeads.get("Province_R"));
						Health_ContactMap.put("Ville_City",getLeads.get("City_R"));
						Health_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_R"));
						Health_ContactMap.put("language_spoken1",getLeads.get("Language_s_R"));
						Health_ContactMap.put("Layout","4846491000000091033");
						Health_ContactMap.put("Contact_Type","Soins de santé/Health Care");
						Health_ContactMap.put("Lead_ID",getLeads.get("id"));
						createHealthcontact = zoho.crm.createRecord("Contacts",Health_ContactMap);
						if(createHealthcontact.get("id") != null)
						{
							// 														/*Add Hospital contact*/
							// 														hsptlContact = Map();
							// 														hsptlContact.put("Name",getLeads.get("Healthcare_First_Name") + " " + getLeads.get("Healthcare_Last_Name"));
							// 														hsptlContact.put("Email",getLeads.get("Healthcare_Email"));
							// 														hsptlContact.put("Phone",getLeads.get("Healthcare_contact_Cellphone"));
							// 														hsptlContact.put("Contact_Sex",getLeads.get("Healthcare_Sex"));
							// 														hsptlContact.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
							// 														hsptlContact.put("Contact_ID",createHealthcontact.get("id"));
							// 														createHospitalcontact = zoho.crm.createRecord("Hospital_Contacts",hsptlContact);
							// 														if(createHospitalcontact.get("id") != null)
							// 														{
							// 															if(getLeads.get("Hospital") == null)
							// 															{
							// 																/*updating Hospital Contact in Deal*/
							// 																housingDealMap.put("Hospital",createHospitalcontact.get("id"));
							// 															}
							// 														}
							/*create In deal*/
							contact_Other_3 = createHealthcontact.get("id");
							Health_contact_map = Map();
							Health_contact_map.put("contact",createHealthcontact.get("id"));
							Health_contact_map.put("Kind_of_Contact","Soins de santé/Health Care");
							Health_contact_map.put("Cell_Phone",getLeads.get("Cell_phone_R"));
							Health_contact_map.put("Email",getLeads.get("Email_R"));
							Health_contact_map.put("Home_Phone",getLeads.get("Home_phone_R"));
							Health_contact_map.put("Type_of_Contact_s",getLeads.get("Type_of_contact_R"));
							Health_contact_map.put("Work_Phone",getLeads.get("Work_phone_R"));
							Health_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
							contactList.add(Health_contact_map);
						}
					}
				}
				else if(getLeads.get("Add_healthcare_network_contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Health_info = getLeads.get("Existing_H_N_contact");
					if(Existing_Health_info != null)
					{
						Existing_Health_ID = Existing_Health_info.get("id");
						getexisting_H_contact = zoho.crm.getRecordById("Contacts",Existing_Health_ID);
						if(getexisting_H_contact.get("id") != null)
						{
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
				housingDealMap.put("Contact_persons",contactList);
				createHouseCareDeal_1 = zoho.crm.createRecord("Deals",housingDealMap);
				if(createHouseCareDeal_1.get("id") != null)
				{
					dealID = createHouseCareDeal_1.get("id");
					leadCRMID = "";
					dealCRMID = "";
					Created_deal_res = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Deals",Created_deal_res);
					if(getdeal_info.get("id") != null)
					{
						leadCRMID = getdeal_info.get("Lead_ID");
						dealCRMID = getdeal_info.get("id");
						UpdateDealMap = Map();
						UpdateDealMap.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
						update_deal_res = zoho.crm.updateRecord("Deals",Created_deal_res,UpdateDealMap);
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
										trackingMap.put("Deal_Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
										trackingMap.put("Personal_Reference_Deal_1",getdeal_info.get("Personal_referral"));
										trackingMap.put("Lead_Stage","Lead Converted");
										trackingMap.put("Lead_CRM_ID",leadCRMID);
										trackingMap.put("Deal_Status","Opened");
										trackingMap.put("D_marches_Status",getdeal_info.get("Stage"));
										trackingMap.put("Deal_ID",dealCRMID);
										if(getdeal_info.get("Contact") != null)
										{
											trackingMap.put("client_1",getdeal_info.get("Contact").get("id"));
										}
										trackingMap.put("Provinces",getdeal_info.get("Client_1_Provinces"));
										trackingMap.put("Deal_Type","Housing");
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
										subformInfo = getdeal_info.get("Contact_persons");
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
										trackingMap.put("Deal_Source",getdeal_info.get("Lead_source_1"));
										trackingMap.put("RSSS",ifnull(getdeal_info.get("Health_care_network_RSSS"),""));
										trackingMap.put("Web",ifnull(getdeal_info.get("Web"),""));
										trackingMap.put("Partners",ifnull(getdeal_info.get("Partners_Partenaires"),""));
										trackingMap.put("Trad_marketing",ifnull(getdeal_info.get("Trade_marketing_1"),""));
										trackingMap.put("Precision",ifnull(getdeal_info.get("Precision"),""));
										trackingMap.put("Spectrum",ifnull(getdeal_info.get("Spectrum"),""));
										updateleadTrack = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),trackingMap);
									}
								}
							}
						}
						/* tracking-ends*/
						/* Notes */
						if(leadCRMID != null && dealCRMID != null)
						{
							getNotes = zoho.crm.getRelatedRecords("Notes","New_Leads",leadCRMID);
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
								notes_map.put("se_module","Deals");
								dataList.add(notes_map);
								datamaps.put("data",dataList);
								notecreate = zoho.crm.createRecord("Notes",notes_map);
							}
							/*Task*/
							getTask = zoho.crm.getRelatedRecords("Tasks","New_Leads",leadCRMID);
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
								mp.put("$se_module","Deals");
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
							client1_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateClient1 = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,client1_map);
						}
						/* Updating deal number to Contact other --starts*/
						if(contact_Other_1 != "")
						{
							other1_map = Map();
							other1_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateother1 = zoho.crm.updateRecord("Contacts",contact_Other_1,other1_map);
						}
						if(contact_Other_2 != "")
						{
							other2_map = Map();
							other2_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateother2 = zoho.crm.updateRecord("Contacts",contact_Other_2,other2_map);
						}
						if(contact_Other_3 != "")
						{
							other3_map = Map();
							other3_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateother3 = zoho.crm.updateRecord("Contacts",contact_Other_3,other3_map);
						}
						/* Updating deal number to Contact other --ends*/
					}
				}
				/* Create Deal in Creator --starts */
				if(createHouseCareDeal_1.get("id") != null)
				{
					Deal_CRM_ID = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Deals",Deal_CRM_ID);
					if(getdeal_info.get("id") != null)
					{
						ownerName = "lion_visavie";
						formName = "Deals";
						appName = "visavie";
						Creator_housingDealMap = Map();
						// 	General information
						Creator_housingDealMap.put("CRM_Deal_ID",getdeal_info.get("id"));
						Creator_housingDealMap.put("Lead_CRMID",getdeal_info.get("Lead_ID"));
						Creator_housingDealMap.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
						Creator_housingDealMap.put("Subject_field",getdeal_info.get("Deal_Name"));
						Creator_housingDealMap.put("Stage","Active");
						if(getdeal_info.get("Creation_date") != null)
						{
							Creator_housingDealMap.put("Date_Creation_date",getdeal_info.get("Creation_date").toDate());
						}
						Temporary_info = getdeal_info.get("Conseiller_temporaire_Temporary_counselor");
						if(Temporary_info != null)
						{
							Creator_housingDealMap.put("Counseiller_ID",Temporary_info.get("id"));
						}
						Advisor_info = getdeal_info.get("Counselor_Conseiller");
						if(Advisor_info != null)
						{
							Creator_housingDealMap.put("Advisor_ID",Advisor_info.get("id"));
						}
						Creator_housingDealMap.put("Personal_referral",getdeal_info.get("Personal_referral"));
						Creator_housingDealMap.put("Languages",getdeal_info.get("Languages"));
						// 			Profile 1 Client
						Contact_info = getdeal_info.get("Contact");
						if(Contact_info != null)
						{
							Creator_housingDealMap.put("Contact1_CRM_ID",Contact_info.get("id"));
						}
						Creator_housingDealMap.put("Budget_range_Gamme_de_budget",getdeal_info.get("Budget_range_Gamme_de_budget"));
						Creator_housingDealMap.put("Desired_moving_date",getdeal_info.get("Desired_moving_date"));
						Creator_housingDealMap.put("SAD_start_date",getdeal_info.get("SAD_start_date"));
						Creator_housingDealMap.put("Service_s_sought",getdeal_info.get("Service_s_sought"));
						Creator_housingDealMap.put("Type_s_of_client_Type_s_de_client",getdeal_info.get("Type_s_of_client_Type_s_de_client"));
						Creator_housingDealMap.put("Region",getdeal_info.get("Region"));
						// 			 Description de la demande/Description of the reque
						Creator_housingDealMap.put("Comments",getdeal_info.get("General_comments"));
						// Source of the approach/Deal Source
						Creator_housingDealMap.put("Deal_Type",getdeal_info.get("Deal_type_Type_de_d_marche"));
						Creator_housingDealMap.put("Precision",getdeal_info.get("Precision"));
						Creator_housingDealMap.put("Lead_source_s",getdeal_info.get("Lead_source_1"));
						Creator_housingDealMap.put("RSSS",getdeal_info.get("Health_care_network_RSSS"));
						Creator_housingDealMap.put("Partners",getdeal_info.get("Partners_Partenaires"));
						Creator_housingDealMap.put("Web",getdeal_info.get("Web"));
						Creator_housingDealMap.put("Marketing_traditionnel",getdeal_info.get("Trade_marketing_1"));
						creatorDealResp = zoho.creator.createRecord(ownerName,appName,formName,Creator_housingDealMap,Map(),"zoho_mail");
					}
				}
				/* delete lead*/
				deleteRecordMap = Map();
				deleteRecordMap.put("module","New_Leads");
				deleteRecordMap.put("id",leadID);
				deleteResp = zoho.crm.invokeConnector("crm.delete",deleteRecordMap);
			}
			/* Create 1 deal using 1 prospect--- ends */
			/* Create 1 deal using 2 prospects--- starts */
			if(getLeads.get("Type_de_conversion") == "1 démarche avec 2 prospects/1 deal with 2 leads")
			{
				housingDealMap.put("Deal_Name",getLeads.get("First_name_1") + " " + getLeads.get("Last_name") + " " + getLeads.get("First_name_2") + " " + getLeads.get("Last_name_2"));
				Client_1_contact_ID = "";
				Client_2_contact_ID = "";
				contact_Other_1 = "";
				contact_Other_2 = "";
				contact_Other_3 = "";
				contactList = List();
				/*Prospect/Lead (1)*/
				if(getLeads.get("First_name_1") != "" && getLeads.get("Last_name") != "")
				{
					primaryContactMap = Map();
					primaryContactMap.put("First_Name",getLeads.get("First_name_1"));
					primaryContactMap.put("Nom_de_jeune_fille",getLeads.get("Maiden_name"));
					primaryContactMap.put("Date_of_Birth",getLeads.get("Date_of_birth"));
					primaryContactMap.put("T_l_phone_maison",getLeads.get("Work_phone"));
					primaryContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
					primaryContactMap.put("T_l_phone_travail",getLeads.get("Home_phone"));
					primaryContactMap.put("Cellulaire",getLeads.get("Cell_phone"));
					primaryContactMap.put("Budget_range",getLeads.get("Budget_range"));
					primaryContactMap.put("Last_Name",getLeads.get("Last_name"));
					primaryContactMap.put("Sexe",getLeads.get("Sex"));
					primaryContactMap.put("E_mail_Courriel_1",getLeads.get("Email_1"));
					primaryContactMap.put("Provinces",getLeads.get("Province_1"));
					primaryContactMap.put("Ville_City",getLeads.get("City_1"));
					primaryContactMap.put("language_spoken1",getLeads.get("Language_s"));
					primaryContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication"));
					primaryContactMap.put("Layout","4846491000000339001");
					primaryContactMap.put("Contact_Type","Client");
					Contact_Counselor = getLeads.get("Counselor");
					if(Contact_Counselor != null)
					{
						primaryContactMap.put("Counselor",Contact_Counselor.get("id"));
					}
					Contact_User = getLeads.get("Counselor_User");
					if(Contact_User != null)
					{
						primaryContactMap.put("Counselor_user",Contact_User.get("id"));
					}
					Contact_Temporary_counselor = getLeads.get("Temporary_counselor");
					if(Contact_Temporary_counselor != null)
					{
						primaryContactMap.put("Temporary_counselor",Contact_Temporary_counselor.get("id"));
					}
					Contact_Temporary_User = getLeads.get("Temporary_Counselor_User");
					if(Contact_Temporary_User != null)
					{
						primaryContactMap.put("Temporary_counselor_user",Contact_Temporary_User.get("id"));
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
					housingDealMap.put("Contact",createPrimaryContact.get("id"));
					housingDealMap.put("Client_1_Provinces",getLeads.get("Province"));
					housingDealMap.put("SAD_start_date",getLeads.get("Home_care_start_date"));
					housingDealMap.put("Budget_range_Gamme_de_budget",getLeads.get("Budget_range"));
					housingDealMap.put("Desired_moving_date",getLeads.get("Desired_moving_date"));
					if(createPrimaryContact.get("id") != null)
					{
						primary_map = Map();
						primary_map.put("contact",createPrimaryContact.get("id"));
						primary_map.put("Kind_of_Contact","Client");
						primary_map.put("Cell_Phone",getLeads.get("Cell_phone"));
						primary_map.put("Email",getLeads.get("Email_1"));
						primary_map.put("Home_Phone",getLeads.get("Home_phone"));
						primary_map.put("Work_Phone",getLeads.get("Work_phone"));
						primary_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
						contactList.add(primary_map);
					}
				}
				/*Prospect/Lead (2)*/
				if(getLeads.get("First_name_2") != "" && getLeads.get("Last_name_2") != "")
				{
					primaryContactMap_2 = Map();
					primaryContactMap_2.put("First_Name",getLeads.get("First_name_2"));
					primaryContactMap_2.put("Nom_de_jeune_fille",getLeads.get("Maiden_name_2"));
					primaryContactMap_2.put("Date_of_Birth",getLeads.get("Date_of_birth_2"));
					primaryContactMap_2.put("T_l_phone_maison",getLeads.get("Work_phone_2"));
					primaryContactMap_2.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_2"));
					primaryContactMap_2.put("T_l_phone_travail",getLeads.get("Home_phone_2"));
					primaryContactMap_2.put("Cellulaire",getLeads.get("Cell_phone_2"));
					primaryContactMap_2.put("Budget_range",getLeads.get("Budget_range_2"));
					primaryContactMap_2.put("Last_Name",getLeads.get("Last_name_2"));
					primaryContactMap_2.put("Sexe",getLeads.get("Sex_2"));
					primaryContactMap_2.put("E_mail_Courriel_1",getLeads.get("Email_2"));
					primaryContactMap_2.put("Provinces",getLeads.get("Province_2"));
					primaryContactMap_2.put("Ville_City",getLeads.get("City_2"));
					primaryContactMap_2.put("language_spoken1",getLeads.get("Language_s_2"));
					primaryContactMap_2.put("Preferred_communication1",getLeads.get("Preferred_communication_2"));
					primaryContactMap_2.put("Layout","4846491000000339001");
					primaryContactMap_2.put("Contact_Type","Client");
					Contact_Counselor = getLeads.get("Counselor");
					if(Contact_Counselor != null)
					{
						primaryContactMap_2.put("Counselor",Contact_Counselor.get("id"));
					}
					Contact_User = getLeads.get("Counselor_User");
					if(Contact_User != null)
					{
						primaryContactMap_2.put("Counselor_user",Contact_User.get("id"));
					}
					Contact_Temporary_counselor = getLeads.get("Temporary_counselor");
					if(Contact_Temporary_counselor != null)
					{
						primaryContactMap_2.put("Temporary_counselor",Contact_Temporary_counselor.get("id"));
					}
					Contact_Temporary_User = getLeads.get("Temporary_Counselor_User");
					if(Contact_Temporary_User != null)
					{
						primaryContactMap_2.put("Temporary_counselor_user",Contact_Temporary_User.get("id"));
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
					housingDealMap.put("Contacts",createPrimaryContact_res.get("id"));
					housingDealMap.put("Client_2_Provinces",getLeads.get("Province_2"));
					housingDealMap.put("Profile_2_Budget_range_Gamme_de_budget",getLeads.get("Budget_range_2"));
					housingDealMap.put("Profile_SAD_start_date",getLeads.get("Home_care_start_date_2"));
					housingDealMap.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement",getLeads.get("Desired_moving_date_2"));
					if(createPrimaryContact_res.get("id") != null)
					{
						primary_map_2 = Map();
						primary_map_2.put("contact",createPrimaryContact_res.get("id"));
						primary_map_2.put("Kind_of_Contact","Client");
						primary_map_2.put("Cell_Phone",getLeads.get("Cell_phone_2"));
						primary_map_2.put("Email",getLeads.get("Email_2"));
						primary_map_2.put("Home_Phone",getLeads.get("Home_phone_2"));
						primary_map_2.put("Work_Phone",getLeads.get("Work_phone_2"));
						primary_map_2.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_2"));
						contactList.add(primary_map_2);
					}
				}
				/*Contact primaire/Primary contact*/
				if(getLeads.get("Add_primary_contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_1 = "";
					if(getLeads.get("First_name_P") != "" && getLeads.get("Last_name_P") != "")
					{
						Prospect_ContactMap = Map();
						Prospect_ContactMap.put("First_Name",getLeads.get("First_name_P"));
						Prospect_ContactMap.put("T_l_phone_maison",getLeads.get("Work_phone_P"));
						Prospect_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_P"));
						Prospect_ContactMap.put("Cellulaire",getLeads.get("Cell_phone_P"));
						Prospect_ContactMap.put("T_l_phone_travail",getLeads.get("Home_phone_P"));
						Prospect_ContactMap.put("Type_de_contact",getLeads.get("Type_of_contact_P"));
						Prospect_ContactMap.put("Last_Name",getLeads.get("Last_name_P"));
						Prospect_ContactMap.put("Sexe",getLeads.get("Sex_P"));
						Prospect_ContactMap.put("E_mail_Courriel_1",getLeads.get("Email_P"));
						Prospect_ContactMap.put("Provinces",getLeads.get("Province_P"));
						Prospect_ContactMap.put("Ville_City",getLeads.get("City_P"));
						Prospect_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_P"));
						Prospect_ContactMap.put("language_spoken1",getLeads.get("Language_s_P"));
						Prospect_ContactMap.put("Layout","4846491000000091033");
						Prospect_ContactMap.put("Contact_Type","Primaire/Primary");
						createProspectcontact = zoho.crm.createRecord("Contacts",Prospect_ContactMap);
						if(createProspectcontact.get("id") != null)
						{
							contact_Other_1 = createProspectcontact.get("id");
							prospect_contact_map = Map();
							prospect_contact_map.put("contact",createProspectcontact.get("id"));
							prospect_contact_map.put("Kind_of_Contact","Primaire/Primary");
							prospect_contact_map.put("Cell_Phone",getLeads.get("Cell_phone_P"));
							prospect_contact_map.put("Email",getLeads.get("Email_P"));
							prospect_contact_map.put("Home_Phone",getLeads.get("Home_phone_P"));
							prospect_contact_map.put("Type_of_Contact_s",getLeads.get("Type_of_contact_P"));
							prospect_contact_map.put("Work_Phone",getLeads.get("Work_phone_P"));
							prospect_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_P"));
							contactList.add(prospect_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Primary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Primary_info = getLeads.get("Existing_primary_contact");
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
				/*Contact secondaire/Secondary contact*/
				if(getLeads.get("Add_secondary_contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_2 = "";
					if(getLeads.get("First_name_S") != "" && getLeads.get("Last_name_S") != "")
					{
						Secondary_ContactMap = Map();
						Secondary_ContactMap.put("First_Name",getLeads.get("First_name_S"));
						Secondary_ContactMap.put("T_l_phone_maison",getLeads.get("Work_phone_S"));
						Secondary_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_S"));
						Secondary_ContactMap.put("Cellulaire",getLeads.get("Cell_phone_S"));
						Secondary_ContactMap.put("T_l_phone_travail",getLeads.get("Home_phone_S"));
						Secondary_ContactMap.put("Type_de_contact",getLeads.get("Type_of_contact_S"));
						Secondary_ContactMap.put("Last_Name",getLeads.get("Last_name_S"));
						Secondary_ContactMap.put("Sexe",getLeads.get("Sex_S	"));
						Secondary_ContactMap.put("E_mail_Courriel_1",getLeads.get("Email_S"));
						Secondary_ContactMap.put("Provinces",getLeads.get("Province_S"));
						Secondary_ContactMap.put("Ville_City",getLeads.get("City_S"));
						Secondary_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_S"));
						Secondary_ContactMap.put("language_spoken1",getLeads.get("Language_s_S"));
						Secondary_ContactMap.put("Layout","4846491000000091033");
						Secondary_ContactMap.put("Contact_Type","Secondaire/Secondary");
						createSecondarycontact = zoho.crm.createRecord("Contacts",Secondary_ContactMap);
						if(createSecondarycontact.get("id") != null)
						{
							contact_Other_2 = createSecondarycontact.get("id");
							Sec_contact_map = Map();
							Sec_contact_map.put("contact",createSecondarycontact.get("id"));
							Sec_contact_map.put("Kind_of_Contact","Secondaire/Secondary");
							Sec_contact_map.put("Cell_Phone",getLeads.get("Cell_phone_S"));
							Sec_contact_map.put("Email",getLeads.get("Email_S"));
							Sec_contact_map.put("Home_Phone",getLeads.get("Home_phone_S"));
							Sec_contact_map.put("Type_of_Contact_s",getLeads.get("Type_of_contact_S"));
							Sec_contact_map.put("Work_Phone",getLeads.get("Work_phone_S"));
							Sec_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_S"));
							contactList.add(Sec_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Secondary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_secondary_info = getLeads.get("Existing_secondary_contact");
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
				/*Contact RSSS/Healthcare network contact*/
				if(getLeads.get("Add_healthcare_network_contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_3 = "";
					if(getLeads.get("First_name_R") != "" && getLeads.get("Last_name_R") != "")
					{
						Health_ContactMap = Map();
						Health_ContactMap.put("First_Name",getLeads.get("First_name_R"));
						Health_ContactMap.put("T_l_phone_maison",getLeads.get("Work_phone_R"));
						Health_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
						Health_ContactMap.put("Cellulaire",getLeads.get("Cell_phone_R"));
						Health_ContactMap.put("T_l_phone_travail",getLeads.get("Home_phone_R"));
						Health_ContactMap.put("Type_de_contact",getLeads.get("Type_of_contact_R"));
						Health_ContactMap.put("Last_Name",getLeads.get("Last_name_R"));
						Health_ContactMap.put("Sexe",getLeads.get("Sex_R"));
						Health_ContactMap.put("E_mail_Courriel_1",getLeads.get("Email_R"));
						Health_ContactMap.put("Provinces",getLeads.get("Province_R"));
						Health_ContactMap.put("Ville_City",getLeads.get("City_R"));
						Health_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_R"));
						Health_ContactMap.put("language_spoken1",getLeads.get("Language_s_R"));
						Health_ContactMap.put("Layout","4846491000000091033");
						Health_ContactMap.put("Contact_Type","Soins de santé/Health Care");
						Health_ContactMap.put("Lead_ID",getLeads.get("id"));
						createHealthcontact = zoho.crm.createRecord("Contacts",Health_ContactMap);
						if(createHealthcontact.get("id") != null)
						{
							// 							/*Add Hospital contact*/
							// 							hsptlContact = Map();
							// 							hsptlContact.put("Name",getLeads.get("Healthcare_First_Name") + " " + getLeads.get("Healthcare_Last_Name"));
							// 							hsptlContact.put("Email",getLeads.get("Healthcare_Email"));
							// 							hsptlContact.put("Phone",getLeads.get("Healthcare_contact_Cellphone"));
							// 							hsptlContact.put("Contact_Sex",getLeads.get("Healthcare_Sex"));
							// 							hsptlContact.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
							// 							hsptlContact.put("Contact_ID",createHealthcontact.get("id"));
							// 							createHospitalcontact = zoho.crm.createRecord("Hospital_Contacts",hsptlContact);
							// 							if(createHospitalcontact.get("id") != null)
							// 							{
							// 								if(getLeads.get("Hospital") == null)
							// 								{
							// 									/*updating Hospital Contact in Deal*/
							// 									housingDealMap.put("Hospital",createHospitalcontact.get("id"));
							// 								}
							// 							}
							/*create In deal*/
							contact_Other_3 = createHealthcontact.get("id");
							Health_contact_map = Map();
							Health_contact_map.put("contact",createHealthcontact.get("id"));
							Health_contact_map.put("Kind_of_Contact","Soins de santé/Health Care");
							Health_contact_map.put("Cell_Phone",getLeads.get("Cell_phone_R"));
							Health_contact_map.put("Email",getLeads.get("Email_R"));
							Health_contact_map.put("Home_Phone",getLeads.get("Home_phone_R"));
							Health_contact_map.put("Type_of_Contact_s",getLeads.get("Type_of_contact_R"));
							Health_contact_map.put("Work_Phone",getLeads.get("Work_phone_R"));
							Health_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
							contactList.add(Health_contact_map);
						}
					}
				}
				else if(getLeads.get("Add_healthcare_network_contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Health_info = getLeads.get("Existing_H_N_contact");
					if(Existing_Health_info != null)
					{
						Existing_Health_ID = Existing_Health_info.get("id");
						getexisting_H_contact = zoho.crm.getRecordById("Contacts",Existing_Health_ID);
						if(getexisting_H_contact.get("id") != null)
						{
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
				housingDealMap.put("Contact_persons",contactList);
				createHouseCareDeal_1 = zoho.crm.createRecord("Deals",housingDealMap);
				if(createHouseCareDeal_1.get("id") != null)
				{
					dealID = createHouseCareDeal_1.get("id");
					leadCRMID = "";
					dealCRMID = "";
					Created_deal_res = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Deals",Created_deal_res);
					if(getdeal_info.get("id") != null)
					{
						leadCRMID = getdeal_info.get("Lead_ID");
						dealCRMID = getdeal_info.get("id");
						UpdateDealMap = Map();
						UpdateDealMap.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
						update_deal_res = zoho.crm.updateRecord("Deals",Created_deal_res,UpdateDealMap);
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
										trackingMap.put("Name",getdeal_info.get("Deal_Name"));
										trackingMap.put("Lead_to_Deal_Conversion_Date",ifnull(getdeal_info.get("Creation_date"),""));
										trackingMap.put("Personal_Reference_Deal_1",getdeal_info.get("Personal_referral"));
										trackingMap.put("Deal_Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
										trackingMap.put("Lead_Stage","Lead Converted");
										trackingMap.put("Lead_CRM_ID",leadCRMID);
										trackingMap.put("Deal_Status","Opened");
										trackingMap.put("D_marches_Status",getdeal_info.get("Stage"));
										trackingMap.put("Deal_ID",dealCRMID);
										if(getdeal_info.get("Contact") != null)
										{
											trackingMap.put("client_1",getdeal_info.get("Contact").get("id"));
										}
										if(getdeal_info.get("Contacts") != null)
										{
											trackingMap.put("client_2",getdeal_info.get("Contacts").get("id"));
										}
										trackingMap.put("Provinces",getdeal_info.get("Client_1_Provinces"));
										trackingMap.put("Client_2_Provinces",getdeal_info.get("Client_2_Provinces"));
										trackingMap.put("Deal_Type","Housing");
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
										subformInfo = getdeal_info.get("Contact_persons");
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
										trackingMap.put("Deal_Source",getdeal_info.get("Lead_source_1"));
										trackingMap.put("RSSS",ifnull(getdeal_info.get("Health_care_network_RSSS"),""));
										trackingMap.put("Web",ifnull(getdeal_info.get("Web"),""));
										trackingMap.put("Partners",ifnull(getdeal_info.get("Partners_Partenaires"),""));
										trackingMap.put("Trad_marketing",ifnull(getdeal_info.get("Trade_marketing_1"),""));
										trackingMap.put("Precision",ifnull(getdeal_info.get("Precision"),""));
										trackingMap.put("Spectrum",ifnull(getdeal_info.get("Spectrum"),""));
										updateleadTrack = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),trackingMap);
									}
								}
							}
						}
						/* tracking-ends*/
						/* Notes */
						if(leadCRMID != null && dealCRMID != null)
						{
							getNotes = zoho.crm.getRelatedRecords("Notes","New_Leads",leadCRMID);
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
								notes_map.put("se_module","Deals");
								dataList.add(notes_map);
								datamaps.put("data",dataList);
								notecreate = zoho.crm.createRecord("Notes",notes_map);
							}
							/*Task*/
							getTask = zoho.crm.getRelatedRecords("Tasks","New_Leads",leadCRMID);
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
								mp.put("$se_module","Deals");
								mp.put("What_Id",dealCRMID);
								dataList.add(mp);
								datamaps.put("data",dataList);
								taskcreate = zoho.crm.createRecord("Tasks",mp);
							}
						}
						/* updating deal number to Client1-Contact*/
						if(Client_1_contact_ID != "")
						{
							client1_map = Map();
							client1_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateClient1 = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,client1_map);
						}
						/* updating deal number to Client2-Contact*/
						if(Client_2_contact_ID != "")
						{
							client2_map = Map();
							client2_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateClient2 = zoho.crm.updateRecord("Contacts",Client_2_contact_ID,client2_map);
						}
						/* Updating deal number to Contact other --starts*/
						if(contact_Other_1 != "")
						{
							other1_map = Map();
							other1_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateother1 = zoho.crm.updateRecord("Contacts",contact_Other_1,other1_map);
						}
						if(contact_Other_2 != "")
						{
							other2_map = Map();
							other2_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateother2 = zoho.crm.updateRecord("Contacts",contact_Other_2,other2_map);
						}
						if(contact_Other_3 != "")
						{
							other3_map = Map();
							other3_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateother3 = zoho.crm.updateRecord("Contacts",contact_Other_3,other3_map);
						}
						/* Updating deal number to Contact other --ends*/
					}
				}
				/* Create Deal in Creator --starts */
				if(createHouseCareDeal_1.get("id") != null)
				{
					Deal_CRM_ID = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Deals",Deal_CRM_ID);
					if(getdeal_info.get("id") != null)
					{
						ownerName = "lion_visavie";
						formName = "Deals";
						appName = "visavie";
						Creator_housingDealMap = Map();
						// 	General information
						Creator_housingDealMap.put("CRM_Deal_ID",getdeal_info.get("id"));
						Creator_housingDealMap.put("Lead_CRMID",getdeal_info.get("Lead_ID"));
						Creator_housingDealMap.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
						Creator_housingDealMap.put("Subject_field",getdeal_info.get("Deal_Name"));
						Creator_housingDealMap.put("Stage","Active");
						if(getdeal_info.get("Creation_date") != null)
						{
							Creator_housingDealMap.put("Date_Creation_date",getdeal_info.get("Creation_date").toDate());
						}
						Temporary_info = getdeal_info.get("Conseiller_temporaire_Temporary_counselor");
						if(Temporary_info != null)
						{
							Creator_housingDealMap.put("Counseiller_ID",Temporary_info.get("id"));
						}
						Advisor_info = getdeal_info.get("Counselor_Conseiller");
						if(Advisor_info != null)
						{
							Creator_housingDealMap.put("Advisor_ID",Advisor_info.get("id"));
						}
						Creator_housingDealMap.put("Personal_referral",getdeal_info.get("Personal_referral"));
						Creator_housingDealMap.put("Languages",getdeal_info.get("Languages"));
						// 			Profile 1 Client
						Contact_info = getdeal_info.get("Contact");
						if(Contact_info != null)
						{
							Creator_housingDealMap.put("Contact1_CRM_ID",Contact_info.get("id"));
						}
						Creator_housingDealMap.put("Budget_range_Gamme_de_budget",getdeal_info.get("Budget_range_Gamme_de_budget"));
						Creator_housingDealMap.put("Desired_moving_date",getdeal_info.get("Desired_moving_date"));
						Creator_housingDealMap.put("SAD_start_date",getdeal_info.get("SAD_start_date"));
						Creator_housingDealMap.put("Service_s_sought",getdeal_info.get("Service_s_sought"));
						Creator_housingDealMap.put("Type_s_of_client_Type_s_de_client",getdeal_info.get("Type_s_of_client_Type_s_de_client"));
						Creator_housingDealMap.put("Region",getdeal_info.get("Region"));
						// 			Profile 2 Client
						Contact_info2 = getdeal_info.get("Contacts");
						if(Contact_info2 != null)
						{
							Creator_housingDealMap.put("Contact2_CRM_ID",Contact_info2.get("id"));
						}
						Creator_housingDealMap.put("Profile_2_Budget_range_Gamme_de_budget",getdeal_info.get("Profile_2_Budget_range_Gamme_de_budget"));
						Creator_housingDealMap.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement1",getdeal_info.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"));
						Creator_housingDealMap.put("Profile_SAD_start_date",getdeal_info.get("Profile_SAD_start_date"));
						Creator_housingDealMap.put("Profile_2_Type_s_of_client_Type_s_de_client",getdeal_info.get("Profile_2_Type_s_of_client_Type_s_de_client"));
						Creator_housingDealMap.put("Profile_2_R_gion_Region",getdeal_info.get("Profile_2_R_gion_Region"));
						Creator_housingDealMap.put("Profile_Service_s_sought",getdeal_info.get("Profile_Service_s_sought"));
						// 			 Description de la demande/Description of the reque
						Creator_housingDealMap.put("Comments",getdeal_info.get("General_comments"));
						// Source of the approach/Deal Source
						Creator_housingDealMap.put("Deal_Type",getdeal_info.get("Deal_type_Type_de_d_marche"));
						Creator_housingDealMap.put("Precision",getdeal_info.get("Precision"));
						Creator_housingDealMap.put("Lead_source_s",getdeal_info.get("Lead_source_1"));
						Creator_housingDealMap.put("RSSS",getdeal_info.get("Health_care_network_RSSS"));
						Creator_housingDealMap.put("Partners",getdeal_info.get("Partners_Partenaires"));
						Creator_housingDealMap.put("Web",getdeal_info.get("Web"));
						Creator_housingDealMap.put("Marketing_traditionnel",getdeal_info.get("Trade_marketing_1"));
						creatorDealResp = zoho.creator.createRecord(ownerName,appName,formName,Creator_housingDealMap,Map(),"zoho_mail");
					}
				}
				/* delete lead*/
				deleteRecordMap = Map();
				deleteRecordMap.put("module","New_Leads");
				deleteRecordMap.put("id",leadID);
				deleteResp = zoho.crm.invokeConnector("crm.delete",deleteRecordMap);
			}
			/* Create 1 deal using 2 prospects--- ends */
			/* Create 2 deal using 2 prospects--- start */
			else if(getLeads.get("Type_de_conversion") == "2 démarches avec 2 prospects/2 deals with 2 leads")
			{
				Client_1_contact_ID = "";
				Client_contact_ID = "";
				contact_Other_1 = "";
				contact_Other_2 = "";
				contact_Other_3 = "";
				contactList = List();
				Second_deal_contactList = List();
				/*	Create  Prospect contact 1 */
				housingDealMap.put("Deal_Name",getLeads.get("First_name_1") + " " + getLeads.get("Last_name"));
				if(getLeads.get("First_name_1") != "" && getLeads.get("Last_name") != "")
				{
					primaryContactMap = Map();
					primaryContactMap.put("First_Name",getLeads.get("First_name_1"));
					primaryContactMap.put("Nom_de_jeune_fille",getLeads.get("Maiden_name"));
					primaryContactMap.put("Date_of_Birth",getLeads.get("Date_of_birth"));
					primaryContactMap.put("T_l_phone_maison",getLeads.get("Work_phone"));
					primaryContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
					primaryContactMap.put("T_l_phone_travail",getLeads.get("Home_phone"));
					primaryContactMap.put("Cellulaire",getLeads.get("Cell_phone"));
					primaryContactMap.put("Budget_range",getLeads.get("Budget_range"));
					primaryContactMap.put("Last_Name",getLeads.get("Last_name"));
					primaryContactMap.put("Sexe",getLeads.get("Sex"));
					primaryContactMap.put("E_mail_Courriel_1",getLeads.get("Email_1"));
					primaryContactMap.put("Provinces",getLeads.get("Province_1"));
					primaryContactMap.put("Ville_City",getLeads.get("City_1"));
					primaryContactMap.put("language_spoken1",getLeads.get("Language_s"));
					primaryContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication"));
					primaryContactMap.put("Layout","4846491000000339001");
					primaryContactMap.put("Contact_Type","Client");
					Contact_Counselor = getLeads.get("Counselor");
					if(Contact_Counselor != null)
					{
						primaryContactMap.put("Counselor",Contact_Counselor.get("id"));
					}
					Contact_User = getLeads.get("Counselor_User");
					if(Contact_User != null)
					{
						primaryContactMap.put("Counselor_user",Contact_User.get("id"));
					}
					Contact_Temporary_counselor = getLeads.get("Temporary_counselor");
					if(Contact_Temporary_counselor != null)
					{
						primaryContactMap.put("Temporary_counselor",Contact_Temporary_counselor.get("id"));
					}
					Contact_Temporary_User = getLeads.get("Temporary_Counselor_User");
					if(Contact_Temporary_User != null)
					{
						primaryContactMap.put("Temporary_counselor_user",Contact_Temporary_User.get("id"));
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
					housingDealMap.put("Contact",createPrimaryContact.get("id"));
					housingDealMap.put("Client_1_Provinces",getLeads.get("Province"));
					housingDealMap.put("SAD_start_date",getLeads.get("Home_care_start_date"));
					housingDealMap.put("Budget_range_Gamme_de_budget",getLeads.get("Budget_range"));
					housingDealMap.put("Desired_moving_date",getLeads.get("Desired_moving_date"));
					if(createPrimaryContact.get("id") != null)
					{
						primary_map = Map();
						primary_map.put("contact",createPrimaryContact.get("id"));
						primary_map.put("Kind_of_Contact","Client");
						primary_map.put("Cell_Phone",getLeads.get("Cell_phone"));
						primary_map.put("Email",getLeads.get("Email_1"));
						primary_map.put("Home_Phone",getLeads.get("Home_phone"));
						primary_map.put("Work_Phone",getLeads.get("Work_phone"));
						primary_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension"));
						contactList.add(primary_map);
					}
				}
				/*Contact primaire/Primary contact*/
				if(getLeads.get("Add_primary_contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_1 = "";
					if(getLeads.get("First_name_P") != "" && getLeads.get("Last_name_P") != "")
					{
						Prospect_ContactMap = Map();
						Prospect_ContactMap.put("First_Name",getLeads.get("First_name_P"));
						Prospect_ContactMap.put("T_l_phone_maison",getLeads.get("Work_phone_P"));
						Prospect_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_P"));
						Prospect_ContactMap.put("Cellulaire",getLeads.get("Cell_phone_P"));
						Prospect_ContactMap.put("T_l_phone_travail",getLeads.get("Home_phone_P"));
						Prospect_ContactMap.put("Type_de_contact",getLeads.get("Type_of_contact_P"));
						Prospect_ContactMap.put("Last_Name",getLeads.get("Last_name_P"));
						Prospect_ContactMap.put("Sexe",getLeads.get("Sex_P"));
						Prospect_ContactMap.put("E_mail_Courriel_1",getLeads.get("Email_P"));
						Prospect_ContactMap.put("Provinces",getLeads.get("Province_P"));
						Prospect_ContactMap.put("Ville_City",getLeads.get("City_P"));
						Prospect_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_P"));
						Prospect_ContactMap.put("language_spoken1",getLeads.get("Language_s_P"));
						Prospect_ContactMap.put("Layout","4846491000000091033");
						Prospect_ContactMap.put("Contact_Type","Primaire/Primary");
						createProspectcontact = zoho.crm.createRecord("Contacts",Prospect_ContactMap);
						if(createProspectcontact.get("id") != null)
						{
							contact_Other_1 = createProspectcontact.get("id");
							prospect_contact_map = Map();
							prospect_contact_map.put("contact",createProspectcontact.get("id"));
							prospect_contact_map.put("Kind_of_Contact","Primaire/Primary");
							prospect_contact_map.put("Cell_Phone",getLeads.get("Cell_phone_P"));
							prospect_contact_map.put("Email",getLeads.get("Email_P"));
							prospect_contact_map.put("Home_Phone",getLeads.get("Home_phone_P"));
							prospect_contact_map.put("Type_of_Contact_s",getLeads.get("Type_of_contact_P"));
							prospect_contact_map.put("Work_Phone",getLeads.get("Work_phone_P"));
							prospect_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_P"));
							contactList.add(prospect_contact_map);
							Second_deal_contactList.add(prospect_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Primary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Primary_info = getLeads.get("Existing_primary_contact");
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
							Second_deal_contactList.add(prospect_contact_map);
						}
					}
				}
				/*Contact secondaire/Secondary contact*/
				if(getLeads.get("Add_secondary_contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_2 = "";
					if(getLeads.get("First_name_S") != "" && getLeads.get("Last_name_S") != "")
					{
						Secondary_ContactMap = Map();
						Secondary_ContactMap.put("First_Name",getLeads.get("First_name_S"));
						Secondary_ContactMap.put("T_l_phone_maison",getLeads.get("Work_phone_S"));
						Secondary_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_S"));
						Secondary_ContactMap.put("Cellulaire",getLeads.get("Cell_phone_S"));
						Secondary_ContactMap.put("T_l_phone_travail",getLeads.get("Home_phone_S"));
						Secondary_ContactMap.put("Type_de_contact",getLeads.get("Type_of_contact_S"));
						Secondary_ContactMap.put("Last_Name",getLeads.get("Last_name_S"));
						Secondary_ContactMap.put("Sexe",getLeads.get("Sex_S	"));
						Secondary_ContactMap.put("E_mail_Courriel_1",getLeads.get("Email_S"));
						Secondary_ContactMap.put("Provinces",getLeads.get("Province_S"));
						Secondary_ContactMap.put("Ville_City",getLeads.get("City_S"));
						Secondary_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_S"));
						Secondary_ContactMap.put("language_spoken1",getLeads.get("Language_s_S"));
						Secondary_ContactMap.put("Layout","4846491000000091033");
						Secondary_ContactMap.put("Contact_Type","Secondaire/Secondary");
						createSecondarycontact = zoho.crm.createRecord("Contacts",Secondary_ContactMap);
						if(createSecondarycontact.get("id") != null)
						{
							contact_Other_2 = createSecondarycontact.get("id");
							Sec_contact_map = Map();
							Sec_contact_map.put("contact",createSecondarycontact.get("id"));
							Sec_contact_map.put("Kind_of_Contact","Secondaire/Secondary");
							Sec_contact_map.put("Cell_Phone",getLeads.get("Cell_phone_S"));
							Sec_contact_map.put("Email",getLeads.get("Email_S"));
							Sec_contact_map.put("Home_Phone",getLeads.get("Home_phone_S"));
							Sec_contact_map.put("Type_of_Contact_s",getLeads.get("Type_of_contact_S"));
							Sec_contact_map.put("Work_Phone",getLeads.get("Work_phone_S"));
							Sec_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_S"));
							contactList.add(Sec_contact_map);
							Second_deal_contactList.add(Sec_contact_map);
						}
					}
				}
				else if(getLeads.get("Choose_Secondary_Contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_secondary_info = getLeads.get("Existing_secondary_contact");
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
				/*Contact RSSS/Healthcare network contact*/
				if(getLeads.get("Add_healthcare_network_contact") == "Créer nouveau contact/Create new contact")
				{
					contact_Other_3 = "";
					if(getLeads.get("First_name_R") != "" && getLeads.get("Last_name_R") != "")
					{
						Health_ContactMap = Map();
						Health_ContactMap.put("First_Name",getLeads.get("First_name_R"));
						Health_ContactMap.put("T_l_phone_maison",getLeads.get("Work_phone_R"));
						Health_ContactMap.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
						Health_ContactMap.put("Cellulaire",getLeads.get("Cell_phone_R"));
						Health_ContactMap.put("T_l_phone_travail",getLeads.get("Home_phone_R"));
						Health_ContactMap.put("Type_de_contact",getLeads.get("Type_of_contact_R"));
						Health_ContactMap.put("Last_Name",getLeads.get("Last_name_R"));
						Health_ContactMap.put("Sexe",getLeads.get("Sex_R"));
						Health_ContactMap.put("E_mail_Courriel_1",getLeads.get("Email_R"));
						Health_ContactMap.put("Provinces",getLeads.get("Province_R"));
						Health_ContactMap.put("Ville_City",getLeads.get("City_R"));
						Health_ContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_R"));
						Health_ContactMap.put("language_spoken1",getLeads.get("Language_s_R"));
						Health_ContactMap.put("Layout","4846491000000091033");
						Health_ContactMap.put("Contact_Type","Soins de santé/Health Care");
						Health_ContactMap.put("Lead_ID",getLeads.get("id"));
						createHealthcontact = zoho.crm.createRecord("Contacts",Health_ContactMap);
						if(createHealthcontact.get("id") != null)
						{
							// 							/*Add Hospital contact*/
							// 							hsptlContact = Map();
							// 							hsptlContact.put("Name",getLeads.get("Healthcare_First_Name") + " " + getLeads.get("Healthcare_Last_Name"));
							// 							hsptlContact.put("Email",getLeads.get("Healthcare_Email"));
							// 							hsptlContact.put("Phone",getLeads.get("Healthcare_contact_Cellphone"));
							// 							hsptlContact.put("Contact_Sex",getLeads.get("Healthcare_Sex"));
							// 							hsptlContact.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
							// 							hsptlContact.put("Contact_ID",createHealthcontact.get("id"));
							// 							createHospitalcontact = zoho.crm.createRecord("Hospital_Contacts",hsptlContact);
							// 							if(createHospitalcontact.get("id") != null)
							// 							{
							// 								if(getLeads.get("Hospital") == null)
							// 								{
							// 									/*updating Hospital Contact in Deal*/
							// 									housingDealMap.put("Hospital",createHospitalcontact.get("id"));
							// 								}
							// 							}
							/*create In deal*/
							contact_Other_3 = createHealthcontact.get("id");
							Health_contact_map = Map();
							Health_contact_map.put("contact",createHealthcontact.get("id"));
							Health_contact_map.put("Kind_of_Contact","Soins de santé/Health Care");
							Health_contact_map.put("Cell_Phone",getLeads.get("Cell_phone_R"));
							Health_contact_map.put("Email",getLeads.get("Email_R"));
							Health_contact_map.put("Home_Phone",getLeads.get("Home_phone_R"));
							Health_contact_map.put("Type_of_Contact_s",getLeads.get("Type_of_contact_R"));
							Health_contact_map.put("Work_Phone",getLeads.get("Work_phone_R"));
							Health_contact_map.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_R"));
							contactList.add(Health_contact_map);
							Second_deal_contactList.add(Health_contact_map);
						}
					}
				}
				else if(getLeads.get("Add_healthcare_network_contact") == "Choisir contact existant/Select existing contact")
				{
					Existing_Health_info = getLeads.get("Existing_H_N_contact");
					if(Existing_Health_info != null)
					{
						Existing_Health_ID = Existing_Health_info.get("id");
						getexisting_H_contact = zoho.crm.getRecordById("Contacts",Existing_Health_ID);
						if(getexisting_H_contact.get("id") != null)
						{
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
				/* Create Deal 2 */
				homeDealMap.put("Deal_Name",getLeads.get("First_name_2") + " " + getLeads.get("Last_name_2"));
				homeDealMap.put("Deal_IDS","Deal2");
				homeDealMap.put("Owner",current_userID.tolong());
				homeDealMap.put("Creation_date",zoho.currentdate.toString("yyyy-MM-dd"));
				homeDealMap.put("Stage","Active");
				homeDealMap.put("Through_Lead","Yes");
				homeDealMap.put("Tracking_Id",getLeads.get("Tracking_Id"));
				homeDealMap.put("Lead_ID",getLeads.get("id"));
				/*Prospect/Lead (2)*/
				if(getLeads.get("First_name_2") != "" && getLeads.get("Last_name_2") != "")
				{
					primaryContactMap_2 = Map();
					primaryContactMap_2.put("First_Name",getLeads.get("First_name_2"));
					primaryContactMap_2.put("Nom_de_jeune_fille",getLeads.get("Maiden_name_2"));
					primaryContactMap_2.put("Date_of_Birth",getLeads.get("Date_of_birth_2"));
					primaryContactMap_2.put("T_l_phone_maison",getLeads.get("Work_phone_2"));
					primaryContactMap_2.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_2"));
					primaryContactMap_2.put("T_l_phone_travail",getLeads.get("Home_phone_2"));
					primaryContactMap_2.put("Cellulaire",getLeads.get("Cell_phone_2"));
					primaryContactMap_2.put("Budget_range",getLeads.get("Budget_range_2"));
					primaryContactMap_2.put("Last_Name",getLeads.get("Last_name_2"));
					primaryContactMap_2.put("Sexe",getLeads.get("Sex_2"));
					primaryContactMap_2.put("E_mail_Courriel_1",getLeads.get("Email_2"));
					primaryContactMap_2.put("Provinces",getLeads.get("Province_2"));
					primaryContactMap_2.put("Ville_City",getLeads.get("City_2"));
					primaryContactMap_2.put("language_spoken1",getLeads.get("Language_s_2"));
					primaryContactMap_2.put("Preferred_communication1",getLeads.get("Preferred_communication_2"));
					primaryContactMap_2.put("Layout","4846491000000339001");
					primaryContactMap_2.put("Contact_Type","Client");
					Contact_Counselor = getLeads.get("Counselor");
					if(Contact_Counselor != null)
					{
						primaryContactMap_2.put("Counselor",Contact_Counselor.get("id"));
					}
					Contact_User = getLeads.get("Counselor_User");
					if(Contact_User != null)
					{
						primaryContactMap_2.put("Counselor_user",Contact_User.get("id"));
					}
					Contact_Temporary_counselor = getLeads.get("Temporary_counselor");
					if(Contact_Temporary_counselor != null)
					{
						primaryContactMap_2.put("Temporary_counselor",Contact_Temporary_counselor.get("id"));
					}
					Contact_Temporary_User = getLeads.get("Temporary_Counselor_User");
					if(Contact_Temporary_User != null)
					{
						primaryContactMap_2.put("Temporary_counselor_user",Contact_Temporary_User.get("id"));
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
					homeDealMap.put("Contacts",createPrimaryContact_res.get("id"));
					homeDealMap.put("Client_2_Provinces",getLeads.get("Province_2"));
					homeDealMap.put("Profile_2_Budget_range_Gamme_de_budget",getLeads.get("Budget_range_2"));
					homeDealMap.put("Profile_SAD_start_date",getLeads.get("Home_care_start_date_2"));
					homeDealMap.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement",getLeads.get("Desired_moving_date_2"));
					if(createPrimaryContact_res.get("id") != null)
					{
						primary_map_2 = Map();
						primary_map_2.put("contact",createPrimaryContact_res.get("id"));
						primary_map_2.put("Kind_of_Contact","Client");
						primary_map_2.put("Cell_Phone",getLeads.get("Cell_phone_2"));
						primary_map_2.put("Email",getLeads.get("Email_2"));
						primary_map_2.put("Home_Phone",getLeads.get("Home_phone_2"));
						primary_map_2.put("Work_Phone",getLeads.get("Work_phone_2"));
						primary_map_2.put("Work_Phone_Extension",getLeads.get("Work_phone_Extension_2"));
						Second_deal_contactList.add(primary_map_2);
					}
				}
				homeDealMap.put("Contact_persons",Second_deal_contactList);
				createHouseCareDeal_2 = zoho.crm.createRecord("Deals",homeDealMap);
				if(createHouseCareDeal_2.get("id") != null)
				{
					dealID1 = createHouseCareDeal_2.get("id");
					leadCRMID_2 = "";
					dealCRMID_2 = "";
					another_dealID = createHouseCareDeal_2.get("id");
					getdeal_info_2 = zoho.crm.getRecordById("Deals",another_dealID);
					if(getdeal_info_2.get("id") != null)
					{
						leadCRMID_2 = getdeal_info_2.get("Lead_ID");
						dealCRMID_2 = getdeal_info_2.get("id");
						UpdateDealMap_2 = Map();
						UpdateDealMap_2.put("Deal_Number",getdeal_info_2.get("Num_ro_de_d_marche"));
						update_Number_deal = zoho.crm.updateRecord("Deals",another_dealID,UpdateDealMap_2);
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
										trackingMap_2 = Map();
										trackingMap_2.put("Deal_Status_1","Opened");
										trackingMap_2.put("Deal_Creation_Date_1",zoho.currentdate.toString("yyyy-MM-dd"));
										trackingMap_2.put("Personal_Reference_Deal_2",getdeal_info_2.get("Personal_referral"));
										trackingMap_2.put("D_marches_Status_1",getdeal_info_2.get("Stage"));
										trackingMap_2.put("Lead_CRM_ID_1",leadCRMID_2);
										trackingMap_2.put("Deal_ID_1",dealCRMID_2);
										if(getdeal_info_2.get("Contact") != null)
										{
											trackingMap_2.put("Client",getdeal_info_2.get("Contact").get("name"));
										}
										trackingMap_2.put("Primary_Province_1",getdeal_info_2.get("Client_2_Provinces"));
										trackingMap_2.put("Deal_Type_1","Housing");
										hospitalInfo = getdeal_info_2.get("Hospital");
										if(hospitalInfo != null)
										{
											trackingMap_2.put("Deal_Hospital_2",hospitalInfo.get("name"));
											trackingMap_2.put("Deal_Hospital_ID_2",hospitalInfo.get("id"));
											contactInfo = zoho.crm.getRelatedRecords("Hospital_Branches21","Hospital_Contacts",hospitalInfo.get("id"));
											for each  contactrec in contactInfo
											{
												if(contactrec.get("Hospital_Branches") != null)
												{
													trackingMap_2.put("Deal_Hospital_Branch_2",contactrec.get("Hospital_Branches").get("name"));
													branchInfo = zoho.crm.getRecordById("Branches",contactrec.get("Hospital_Branches").get("id"));
													if(branchInfo.get("id") != null)
													{
														hsptlInfo = zoho.crm.getRelatedRecords("Hospital19","Branches",branchInfo.get("id"));
														for each  rechsptl in hsptlInfo
														{
															if(rechsptl.get("Hospital_Branches") != null)
															{
																trackingMap_2.put("Deal_Hospital_21",rechsptl.get("Hospital_Branches").get("name"));
															}
														}
													}
												}
											}
										}
										/*subform*/
										subformInfo = getdeal_info_2.get("Contact_persons");
										for each  contactSubform in subformInfo
										{
											if(contactSubform.get("Kind_of_Contact") == "Primaire/Primary")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap_2.put("Primary_contact_1",contactSubform.get("contact").get("name"));
												}
											}
											if(contactSubform.get("Kind_of_Contact") == "Secondaire/Secondary")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap_2.put("Secondary_contact_1",contactSubform.get("contact").get("name"));
												}
											}
											if(contactSubform.get("Kind_of_Contact") == "Soins de santé/Health Care")
											{
												if(contactSubform.get("contact") != null)
												{
													trackingMap_2.put("Health_care_contact_1",contactSubform.get("contact").get("name"));
												}
											}
										}
										/*Deal source 2*/
										trackingMap_2.put("Deal_Type_Deal_2",getdeal_info_2.get("Deal_type_Type_de_d_marche"));
										trackingMap_2.put("Deal_Source_1",getdeal_info_2.get("Lead_source_1"));
										trackingMap_2.put("RSSS_1",ifnull(getdeal_info_2.get("Health_care_network_RSSS"),""));
										trackingMap_2.put("Web_1",ifnull(getdeal_info_2.get("Web"),""));
										trackingMap_2.put("Partners_1",ifnull(getdeal_info_2.get("Partners_Partenaires"),""));
										trackingMap_2.put("Trad_marketing_1",ifnull(getdeal_info_2.get("Trade_marketing_1"),""));
										trackingMap_2.put("Precision_1",ifnull(getdeal_info_2.get("Precision"),""));
										trackingMap_2.put("Spectrum_1",ifnull(getdeal_info_2.get("Spectrum"),""));
										updateleadTrack_2 = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),trackingMap_2);
									}
								}
							}
						}
						/* tracking-ends*/
						/* Notes */
						if(leadCRMID_2 != null && dealCRMID_2 != null)
						{
							getNotes = zoho.crm.getRelatedRecords("Notes","New_Leads",leadCRMID_2);
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
								notes_map.put("se_module","Deals");
								dataList.add(notes_map);
								datamaps.put("data",dataList);
								notecreate = zoho.crm.createRecord("Notes",notes_map);
							}
							/*Task*/
							getTask = zoho.crm.getRelatedRecords("Tasks","New_Leads",leadCRMID_2);
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
								mp.put("$se_module","Deals");
								mp.put("What_Id",dealCRMID_2);
								dataList.add(mp);
								datamaps.put("data",dataList);
								taskcreate = zoho.crm.createRecord("Tasks",mp);
							}
						}
						/* update deal number to contact -client 2*/
						if(Client_contact_ID != null)
						{
							client2_map = Map();
							client2_map.put("Deal_Number",getdeal_info_2.get("Num_ro_de_d_marche"));
							updateClient2 = zoho.crm.updateRecord("Contacts",Client_contact_ID,client2_map);
						}
					}
				}
				housingDealMap.put("Contact_persons",contactList);
				createHouseCareDeal_1 = zoho.crm.createRecord("Deals",housingDealMap);
				if(createHouseCareDeal_1.get("id") != null)
				{
					dealID = createHouseCareDeal_1.get("id");
					leadCRMID = "";
					dealCRMID = "";
					Created_deal_res = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Deals",Created_deal_res);
					if(getdeal_info.get("id") != null)
					{
						leadCRMID = getdeal_info.get("Lead_ID");
						dealCRMID = getdeal_info.get("id");
						UpdateDealMap = Map();
						UpdateDealMap.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
						update_deal_res = zoho.crm.updateRecord("Deals",Created_deal_res,UpdateDealMap);
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
										trackingMap.put("Deal_Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
										trackingMap.put("Personal_Reference_Deal_1",getdeal_info.get("Personal_referral"));
										trackingMap.put("Lead_Stage","Lead Converted");
										trackingMap.put("Deal_Status","Opened");
										trackingMap.put("Lead_CRM_ID",leadCRMID);
										trackingMap.put("D_marches_Status",getdeal_info.get("Stage"));
										trackingMap.put("Deal_ID",dealCRMID);
										if(getdeal_info.get("Contact") != null)
										{
											trackingMap.put("client_1",getdeal_info.get("Contact").get("id"));
										}
										trackingMap.put("Provinces",getdeal_info.get("Client_1_Provinces"));
										trackingMap.put("Deal_Type","Housing");
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
										subformInfo = getdeal_info.get("Contact_persons");
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
										trackingMap.put("Deal_Source",getdeal_info.get("Lead_source_1"));
										trackingMap.put("RSSS",ifnull(getdeal_info.get("Health_care_network_RSSS"),""));
										trackingMap.put("Web",ifnull(getdeal_info.get("Web"),""));
										trackingMap.put("Partners",ifnull(getdeal_info.get("Partners_Partenaires"),""));
										trackingMap.put("Trad_marketing",ifnull(getdeal_info.get("Trade_marketing_1"),""));
										trackingMap.put("Precision",ifnull(getdeal_info.get("Precision"),""));
										trackingMap.put("Spectrum",ifnull(getdeal_info.get("Spectrum"),""));
										updateleadTrack = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),trackingMap);
									}
								}
							}
						}
						/* tracking-ends*/
						/* Notes */
						if(leadCRMID != null && dealCRMID != null)
						{
							getNotes = zoho.crm.getRelatedRecords("Notes","New_Leads",leadCRMID);
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
								notes_map.put("se_module","Deals");
								dataList.add(notes_map);
								datamaps.put("data",dataList);
								notecreate = zoho.crm.createRecord("Notes",notes_map);
							}
							/*Task*/
							getTask = zoho.crm.getRelatedRecords("Tasks","New_Leads",leadCRMID);
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
								mp.put("$se_module","Deals");
								mp.put("What_Id",dealCRMID);
								dataList.add(mp);
								datamaps.put("data",dataList);
								taskcreate = zoho.crm.createRecord("Tasks",mp);
							}
						}
						/* update deal number to contact -client 1*/
						if(Client_1_contact_ID != null)
						{
							client1_map = Map();
							client1_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateClient1 = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,client1_map);
						}
						/* Updating deal number to Contact other --starts*/
						if(contact_Other_1 != "")
						{
							other1_map = Map();
							other1_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateother1 = zoho.crm.updateRecord("Contacts",contact_Other_1,other1_map);
						}
						if(contact_Other_2 != "")
						{
							other2_map = Map();
							other2_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateother2 = zoho.crm.updateRecord("Contacts",contact_Other_2,other2_map);
						}
						if(contact_Other_3 != "")
						{
							other3_map = Map();
							other3_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
							updateother3 = zoho.crm.updateRecord("Contacts",contact_Other_3,other3_map);
						}
						/* Updating deal number to Contact other --ends*/
					}
				}
				/* Create  1st Deal in Creator --starts */
				if(createHouseCareDeal_1.get("id") != null)
				{
					Deal_CRM_ID = createHouseCareDeal_1.get("id");
					getdeal_info = zoho.crm.getRecordById("Deals",Deal_CRM_ID);
					if(getdeal_info.get("id") != null)
					{
						ownerName = "lion_visavie";
						formName = "Deals";
						appName = "visavie";
						Creator_housingDealMap = Map();
						// 	General information
						Creator_housingDealMap.put("CRM_Deal_ID",getdeal_info.get("id"));
						Creator_housingDealMap.put("Lead_CRMID",getdeal_info.get("Lead_ID"));
						Creator_housingDealMap.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
						Creator_housingDealMap.put("Subject_field",getdeal_info.get("Deal_Name"));
						Creator_housingDealMap.put("Stage","Active");
						if(getdeal_info.get("Creation_date") != null)
						{
							Creator_housingDealMap.put("Date_Creation_date",getdeal_info.get("Creation_date").toDate());
						}
						Temporary_info = getdeal_info.get("Conseiller_temporaire_Temporary_counselor");
						if(Temporary_info != null)
						{
							Creator_housingDealMap.put("Counseiller_ID",Temporary_info.get("id"));
						}
						Advisor_info = getdeal_info.get("Counselor_Conseiller");
						if(Advisor_info != null)
						{
							Creator_housingDealMap.put("Advisor_ID",Advisor_info.get("id"));
						}
						Creator_housingDealMap.put("Personal_referral",getdeal_info.get("Personal_referral"));
						Creator_housingDealMap.put("Languages",getdeal_info.get("Languages"));
						// 			Profile 1 Client
						Contact_info = getdeal_info.get("Contact");
						if(Contact_info != null)
						{
							Creator_housingDealMap.put("Contact1_CRM_ID",Contact_info.get("id"));
						}
						Creator_housingDealMap.put("Budget_range_Gamme_de_budget",getdeal_info.get("Budget_range_Gamme_de_budget"));
						Creator_housingDealMap.put("Desired_moving_date",getdeal_info.get("Desired_moving_date"));
						Creator_housingDealMap.put("SAD_start_date",getdeal_info.get("SAD_start_date"));
						Creator_housingDealMap.put("Service_s_sought",getdeal_info.get("Service_s_sought"));
						Creator_housingDealMap.put("Type_s_of_client_Type_s_de_client",getdeal_info.get("Type_s_of_client_Type_s_de_client"));
						Creator_housingDealMap.put("Region",getdeal_info.get("Region"));
						// 			 Description de la demande/Description of the reque
						Creator_housingDealMap.put("Comments",getdeal_info.get("General_comments"));
						// Source of the approach/Deal Source
						Creator_housingDealMap.put("Deal_Type",getdeal_info.get("Deal_type_Type_de_d_marche"));
						Creator_housingDealMap.put("Precision",getdeal_info.get("Precision"));
						Creator_housingDealMap.put("Lead_source_s",getdeal_info.get("Lead_source_1"));
						Creator_housingDealMap.put("RSSS",getdeal_info.get("Health_care_network_RSSS"));
						Creator_housingDealMap.put("Partners",getdeal_info.get("Partners_Partenaires"));
						Creator_housingDealMap.put("Web",getdeal_info.get("Web"));
						Creator_housingDealMap.put("Marketing_traditionnel",getdeal_info.get("Trade_marketing_1"));
						creatorDealResp = zoho.creator.createRecord(ownerName,appName,formName,Creator_housingDealMap,Map(),"zoho_mail");
					}
				}
				/* Create 2 nd Deal in Creator --starts */
				if(createHouseCareDeal_2.get("id") != null)
				{
					another_Deal_CRM_ID = createHouseCareDeal_2.get("id");
					deal_info = zoho.crm.getRecordById("Deals",another_Deal_CRM_ID);
					if(deal_info.get("id") != null)
					{
						ownerName = "lion_visavie";
						formName = "Deals";
						appName = "visavie";
						housingDealMap = Map();
						// 	General information
						housingDealMap.put("CRM_Deal_ID",deal_info.get("id"));
						housingDealMap.put("Lead_CRMID",deal_info.get("Lead_ID"));
						housingDealMap.put("Deal_Number",deal_info.get("Num_ro_de_d_marche"));
						housingDealMap.put("Subject_field",deal_info.get("Deal_Name"));
						housingDealMap.put("Stage","Active");
						if(getdeal_info.get("Creation_date") != null)
						{
							housingDealMap.put("Date_Creation_date",getdeal_info.get("Creation_date").toDate());
						}
						Temporary_info_2 = deal_info.get("Conseiller_temporaire_Temporary_counselor");
						if(Temporary_info_2 != null)
						{
							housingDealMap.put("Counseiller_ID",Temporary_info_2.get("id"));
						}
						Advisor_info_2 = deal_info.get("Counselor_Conseiller");
						if(Advisor_info_2 != null)
						{
							housingDealMap.put("Advisor_ID",Advisor_info_2.get("id"));
						}
						housingDealMap.put("Personal_referral",deal_info.get("Personal_referral"));
						housingDealMap.put("Languages",deal_info.get("Languages"));
						// 			Profile 2 Client
						Contact_info_2 = deal_info.get("Contact");
						if(Contact_info_2 != null)
						{
							housingDealMap.put("Contact1_CRM_ID",Contact_info_2.get("id"));
						}
						housingDealMap.put("Budget_range_Gamme_de_budget",deal_info.get("Budget_range_Gamme_de_budget"));
						housingDealMap.put("Desired_moving_date",deal_info.get("Desired_moving_date"));
						housingDealMap.put("SAD_start_date",deal_info.get("SAD_start_date"));
						housingDealMap.put("Type_s_of_client_Type_s_de_client",deal_info.get("Type_s_of_client_Type_s_de_client"));
						housingDealMap.put("Region",deal_info.get("Region"));
						housingDealMap.put("Service_s_sought",deal_info.get("Service_s_sought"));
						// 			 Description de la demande/Description of the reque
						housingDealMap.put("Comments",deal_info.get("General_comments"));
						// Source of the approach/Deal Source
						housingDealMap.put("Deal_Type",deal_info.get("Deal_type_Type_de_d_marche"));
						housingDealMap.put("Precision",deal_info.get("Precision"));
						housingDealMap.put("Lead_source_s",deal_info.get("Lead_source_1"));
						housingDealMap.put("RSSS",deal_info.get("Health_care_network_RSSS"));
						housingDealMap.put("Partners",deal_info.get("Partners_Partenaires"));
						housingDealMap.put("Web",deal_info.get("Web"));
						housingDealMap.put("Marketing_traditionnel",deal_info.get("Trade_marketing_1"));
						another_creatorDealResp = zoho.creator.createRecord(ownerName,appName,formName,housingDealMap,Map(),"zoho_mail");
					}
				}
				/* delete lead*/
				deleteRecordMap = Map();
				deleteRecordMap.put("module","New_Leads");
				deleteRecordMap.put("id",leadID);
				deleteResp = zoho.crm.invokeConnector("crm.delete",deleteRecordMap);
				// 			info deleteResp;
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
	dataMap.put("Module","New Lead");
	dataMap.put("Process_Description","House Deal :Create Deal and Contact in CRM and Deal in Creator");
	dataMap.put("In_Data",leadID.toLong());
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
// return "";
