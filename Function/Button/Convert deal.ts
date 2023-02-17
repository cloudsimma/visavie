resp = "";
try 
{
	getLeads = zoho.crm.getRecordById("Leads",leadID.toLong());
	if(getLeads.get("id") != null)
	{
		/* General information*/
		housingDealMap = Map();
		housingDealMap.put("Creation_date",zoho.currentdate.toString("yyyy-MM-dd"));
		housingDealMap.put("Stage","Active");
		Counselor = getLeads.get("Advisors");
		if(Counselor != null)
		{
			housingDealMap.put("Counselor_Conseiller",Counselor.get("id"));
		}
		User = getLeads.get("Counselor_User");
		if(User != null)
		{
			housingDealMap.put("Counselor_user",User.get("id"));
		}
		Temporary_counselor = getLeads.get("Conseiller_Counselor");
		if(Temporary_counselor != null)
		{
			housingDealMap.put("Conseiller_temporaire_Temporary_counselor",Temporary_counselor.get("id"));
		}
		Temporary_User = getLeads.get("Temporary_Counselor_User");
		if(Temporary_User != null)
		{
			housingDealMap.put("Temporary_counselor_user",Temporary_User.get("id"));
		}
		OWner_info = getLeads.get("Owner");
		if(OWner_info != null)
		{
			housingDealMap.put("Owner",OWner_info.get("id"));
		}
		housingDealMap.put("Personal_referral",getLeads.get("Personal_referral"));
		housingDealMap.put("General_comments",getLeads.get("General_comments"));
		/* Deal source*/
		housingDealMap.put("Deal_type_Type_de_d_marche",getLeads.get("Lead_type"));
		housingDealMap.put("Lead_source_1",getLeads.get("Source_du_prospect"));
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
			housingDealMap.put("Trade_marketing_1",getLeads.get("Marketing_traditionnel_Trad_marketing"));
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
		/* Create 1 deal using 1 prospect--- starts */
		if(getLeads.get("Deal_Conversion") == "Créer 1 démarche avec 1 prospect/Create 1 deal using 1 prospect")
		{
			housingDealMap.put("Deal_Name",getLeads.get("First_Namee") + " " + getLeads.get("Last_Name"));
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
				primaryContactMap.put("Layout","4846491000000339001");
				primaryContactMap.put("Contact_Type","Client");
				Contact_Counselor = getLeads.get("Advisors");
				if(Contact_Counselor != null)
				{
					primaryContactMap.put("Counselor",Contact_Counselor.get("id"));
				}
				Contact_User = getLeads.get("Counselor_User");
				if(Contact_User != null)
				{
					primaryContactMap.put("Counselor_user",Contact_User.get("id"));
				}
				Contact_Temporary_counselor = getLeads.get("Conseiller_Counselor");
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
					Update_contact_C1 = Map();
					Update_contact_C1.put("Client_Number",get_contact_Info.get("Num_ro_Client"));
					housingDealMap.put("Client_1_number",get_contact_Info.get("Num_ro_Client"));
					update_Number_contact = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,Update_contact_C1);
				}
				housingDealMap.put("Contact",createPrimaryContact.get("id"));
				if(getLeads.get("Do_you_like_to_enter_prospect_1_profile_details") == "Oui/Yes")
				{
					/* Lead Profile*/
					housingDealMap.put("Type_s_of_client_Type_s_de_client",getLeads.get("Type_s_of_client"));
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
					Prospect_ContactMap.put("Layout","4846491000000091033");
					Prospect_ContactMap.put("Contact_Type","Primaire/Primary");
					createProspectcontact = zoho.crm.createRecord("Contacts",Prospect_ContactMap);
					// 					if(createProspectcontact.get("id") != null)
					// 					{
					// 						Primary_contact_ID = createProspectcontact.get("id");
					// 						get_Primary_Info = zoho.crm.getRecordById("Contacts",Primary_contact_ID);
					// 						Update_contact_P = Map();
					// 						Update_contact_P.put("Client_Number",get_Primary_Info.get("Num_ro_Client"));
					// 						update_primary_res = zoho.crm.updateRecord("Contacts",Primary_contact_ID,Update_contact_P);
					// 					}
					if(createProspectcontact.get("id") != null)
					{
						prospect_contact_map = Map();
						prospect_contact_map.put("contact",createProspectcontact.get("id"));
						prospect_contact_map.put("Kind_of_Contact","Primaire/Primary");
						prospect_contact_map.put("Cell_Phone",getLeads.get("Prospect_Contact_1_Cellphone"));
						prospect_contact_map.put("Email",getLeads.get("Prospect_Contact_1_Email"));
						prospect_contact_map.put("Home_Phone",getLeads.get("Prospect_Contact_1_Home_Phone"));
						prospect_contact_map.put("Type_of_Contact_s",getLeads.get("Prospect_Contact_1_Type_of_contact"));
						prospect_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_P1"));
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
					if(getexisting_contact != null)
					{
						Existing_Primary_contact = Map();
						Existing_Primary_contact.put("contact",Existing_primary_ID);
						Existing_Primary_contact.put("Kind_of_Contact","Primaire/Primary");
						Existing_Primary_contact.put("Cell_Phone",getexisting_contact.get("Cellulaire"));
						Existing_Primary_contact.put("Email",getexisting_contact.get("E_mail_Courriel_1"));
						Existing_Primary_contact.put("Home_Phone",getexisting_contact.get("T_l_phone_travail"));
						Existing_Primary_contact.put("Type_of_Contact_s",getexisting_contact.get("Type_de_contact"));
						Existing_Primary_contact.put("Work_Phone",getexisting_contact.get("T_l_phone_maison"));
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
					Secondary_ContactMap.put("Layout","4846491000000091033");
					Secondary_ContactMap.put("Contact_Type","Secondaire/Secondary");
					createSecondarycontact = zoho.crm.createRecord("Contacts",Secondary_ContactMap);
					// 					if(createSecondarycontact.get("id") != null)
					// 					{
					// 						Secondary_contact_ID = createSecondarycontact.get("id");
					// 						get_Sec_Info = zoho.crm.getRecordById("Contacts",Secondary_contact_ID);
					// 						Update_contact_S = Map();
					// 						Update_contact_S.put("Client_Number",get_Sec_Info.get("Num_ro_Client"));
					// 						update_Sec_contact = zoho.crm.updateRecord("Contacts",Secondary_contact_ID,Update_contact_S);
					// 					}
					if(createSecondarycontact.get("id") != null)
					{
						Sec_contact_map = Map();
						Sec_contact_map.put("contact",createSecondarycontact.get("id"));
						Sec_contact_map.put("Kind_of_Contact","Secondaire/Secondary");
						Sec_contact_map.put("Cell_Phone",getLeads.get("Secondary_Cellphone"));
						Sec_contact_map.put("Email",getLeads.get("Secondary_Con_Email"));
						Sec_contact_map.put("Home_Phone",getLeads.get("Secondary_Home_Phone"));
						Sec_contact_map.put("Type_of_Contact_s",getLeads.get("Secondary_Contact"));
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
					if(getexisting_S_contact != null)
					{
						Existing_S_contact = Map();
						Existing_S_contact.put("contact",Existing_secondary_ID);
						Existing_S_contact.put("Kind_of_Contact","Secondaire/Secondary");
						Existing_S_contact.put("Cell_Phone",getexisting_S_contact.get("Cellulaire"));
						Existing_S_contact.put("Email",getexisting_S_contact.get("E_mail_Courriel_1"));
						Existing_S_contact.put("Home_Phone",getexisting_S_contact.get("T_l_phone_travail"));
						Existing_S_contact.put("Type_of_Contact_s",getexisting_S_contact.get("Type_de_contact"));
						Existing_S_contact.put("Work_Phone",getexisting_S_contact.get("T_l_phone_maison"));
						contactList.add(Existing_S_contact);
					}
				}
			}
			/*Create Healthcare contact*/
			if(getLeads.get("Choose_Healthcare_Contact") == "Créer un nouveau contact/Create new contact")
			{
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
					Health_ContactMap.put("Layout","4846491000000091033");
					Health_ContactMap.put("Contact_Type","Soins de santé/Health Care");
					createHealthcontact = zoho.crm.createRecord("Contacts",Health_ContactMap);
					// 					if(createHealthcontact.get("id") != null)
					// 					{
					// 						Health_contact_ID = createHealthcontact.get("id");
					// 						get_health_Info = zoho.crm.getRecordById("Contacts",Health_contact_ID);
					// 						Update_contact_H = Map();
					// 						Update_contact_H.put("Client_Number",get_health_Info.get("Num_ro_Client"));
					// 						update_Health_contact = zoho.crm.updateRecord("Contacts",Health_contact_ID,Update_contact_H);
					// 					}
					if(createHealthcontact.get("id") != null)
					{
						Health_contact_map = Map();
						Health_contact_map.put("contact",createHealthcontact.get("id"));
						Health_contact_map.put("Kind_of_Contact","Soins de santé/Health Care");
						Health_contact_map.put("Cell_Phone",getLeads.get("Healthcare_contact_Cellphone"));
						Health_contact_map.put("Email",getLeads.get("Healthcare_Email"));
						Health_contact_map.put("Home_Phone",getLeads.get("Healthcare_Home_Phone"));
						Health_contact_map.put("Type_of_Contact_s",getLeads.get("Healthcare_Contact"));
						Health_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
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
					if(getexisting_H_contact != null)
					{
						Existing_H_contact = Map();
						Existing_H_contact.put("contact",Existing_Health_ID);
						Existing_H_contact.put("Kind_of_Contact","Soins de santé/Health Care");
						Existing_H_contact.put("Cell_Phone",getexisting_H_contact.get("Cellulaire"));
						Existing_H_contact.put("Email",getexisting_H_contact.get("E_mail_Courriel_1"));
						Existing_H_contact.put("Home_Phone",getexisting_H_contact.get("T_l_phone_travail"));
						Existing_H_contact.put("Type_of_Contact_s",getexisting_H_contact.get("Type_de_contact"));
						Existing_H_contact.put("Work_Phone",getexisting_H_contact.get("T_l_phone_maison"));
						contactList.add(Existing_H_contact);
					}
				}
			}
			housingDealMap.put("Contact_persons",contactList);
			createHouseCareDeal_1 = zoho.crm.createRecord("Deals",housingDealMap);
			if(createHouseCareDeal_1.get("id") != null)
			{
				Created_deal_res = createHouseCareDeal_1.get("id");
				getdeal_info = zoho.crm.getRecordById("Deals",Created_deal_res);
				UpdateDealMap = Map();
				UpdateDealMap.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
				update_deal_res = zoho.crm.updateRecord("Deals",Created_deal_res,UpdateDealMap);
				/* updating deal number to Contact*/
				if(Client_1_contact_ID != "")
				{
					client1_map = Map();
					client1_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
					updateClient1 = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,client1_map);
				}
			}
			resp = "La démarche a été créée avec succès/Deal has been created successfully";
			openUrl("https://crm.zoho.com/crm/org746753262/tab/Potentials/" + createHouseCareDeal_1.get("id"),"new window");
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
			deleteRecordMap.put("module","Leads");
			deleteRecordMap.put("id",leadID);
			deleteResp = zoho.crm.invokeConnector("crm.delete",deleteRecordMap);
			// 					info deleteResp;
		}
		/* Create 1 deal using 1 prospect--- ends */
		/* Create 1 deal using 2 prospects--- starts */
		if(getLeads.get("Deal_Conversion") == "Créer 1 démarche avec 2 prospects/Create 1 deal using 2 prospects")
		{
			housingDealMap.put("Deal_Name",getLeads.get("First_Namee") + " " + getLeads.get("Last_Name") + " " + getLeads.get("Prospect_First_Name2") + " " + getLeads.get("Prospect_Last_Name2"));
			/*	Create  Prospect contact 1 */
			Client_1_contact_ID = "";
			Client_2_contact_ID = "";
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
				primaryContactMap.put("Layout","4846491000000339001");
				primaryContactMap.put("Contact_Type","Client");
				Contact_Counselor = getLeads.get("Advisors");
				if(Contact_Counselor != null)
				{
					primaryContactMap.put("Counselor",Contact_Counselor.get("id"));
				}
				Contact_User = getLeads.get("Counselor_User");
				if(Contact_User != null)
				{
					primaryContactMap.put("Counselor_user",Contact_User.get("id"));
				}
				Contact_Temporary_counselor = getLeads.get("Conseiller_Counselor");
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
					Update_contact_C1 = Map();
					Update_contact_C1.put("Client_Number",get_contact_Info.get("Num_ro_Client"));
					housingDealMap.put("Client_1_number",get_contact_Info.get("Num_ro_Client"));
					update_Number_contact = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,Update_contact_C1);
				}
				housingDealMap.put("Contact",createPrimaryContact.get("id"));
				if(getLeads.get("Do_you_like_to_enter_prospect_1_profile_details") == "Oui/Yes")
				{
					/* Lead Profile*/
					housingDealMap.put("Type_s_of_client_Type_s_de_client",getLeads.get("Type_s_of_client"));
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
					contactList.add(primary_map);
				}
			}
			/* Create Prospect contact 2 */
			// 			if(getLeads.get("Add_second_client") == "Oui/Yes")
			// 			{
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
				primaryContactMap_2.put("Layout","4846491000000339001");
				primaryContactMap_2.put("Contact_Type","Client");
				Contact_Counselor = getLeads.get("Advisors");
				if(Contact_Counselor != null)
				{
					primaryContactMap_2.put("Counselor",Contact_Counselor.get("id"));
				}
				Contact_User = getLeads.get("Counselor_User");
				if(Contact_User != null)
				{
					primaryContactMap_2.put("Counselor_user",Contact_User.get("id"));
				}
				Contact_Temporary_counselor = getLeads.get("Conseiller_Counselor");
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
					Update_contact_C2 = Map();
					Update_contact_C2.put("Client_Number",get_Client_Info.get("Num_ro_Client"));
					housingDealMap.put("Client_2_number",get_Client_Info.get("Num_ro_Client"));
					update_Client_contact = zoho.crm.updateRecord("Contacts",Client_2_contact_ID,Update_contact_C2);
				}
				housingDealMap.put("Contacts",createPrimaryContact_res.get("id"));
				if(getLeads.get("Do_you_like_to_enter_prospect_2_profile_details") == "Oui/Yes")
				{
					/* Lead  Profile -2*/
					housingDealMap.put("Profile_2_Type_s_of_client_Type_s_de_client",getLeads.get("Profile_Type_s_de_client_Type_s_of_client"));
					housingDealMap.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement",getLeads.get("Profile_Desired_moving_date"));
					housingDealMap.put("Profile_2_Budget_range_Gamme_de_budget",getLeads.get("Profile_Budget_range"));
					housingDealMap.put("Profile_Service_s_sought",getLeads.get("Profile_Type_s_de_service_s_Type_s_of_service_s"));
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
					contactList.add(primary_map_2);
				}
			}
			// 			}
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
					Prospect_ContactMap.put("Layout","4846491000000091033");
					Prospect_ContactMap.put("Contact_Type","Primaire/Primary");
					createProspectcontact = zoho.crm.createRecord("Contacts",Prospect_ContactMap);
					// 					if(createProspectcontact.get("id") != null)
					// 					{
					// 						Primary_contact_ID = createProspectcontact.get("id");
					// 						get_Primary_Info = zoho.crm.getRecordById("Contacts",Primary_contact_ID);
					// 						Update_contact_P = Map();
					// 						Update_contact_P.put("Client_Number",get_Primary_Info.get("Num_ro_Client"));
					// 						update_primary_res = zoho.crm.updateRecord("Contacts",Primary_contact_ID,Update_contact_P);
					// 					}
					if(createProspectcontact.get("id") != null)
					{
						prospect_contact_map = Map();
						prospect_contact_map.put("contact",createProspectcontact.get("id"));
						prospect_contact_map.put("Kind_of_Contact","Primaire/Primary");
						prospect_contact_map.put("Cell_Phone",getLeads.get("Prospect_Contact_1_Cellphone"));
						prospect_contact_map.put("Email",getLeads.get("Prospect_Contact_1_Email"));
						prospect_contact_map.put("Home_Phone",getLeads.get("Prospect_Contact_1_Home_Phone"));
						prospect_contact_map.put("Type_of_Contact_s",getLeads.get("Prospect_Contact_1_Type_of_contact"));
						prospect_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_P1"));
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
					if(getexisting_contact != null)
					{
						Existing_Primary_contact = Map();
						Existing_Primary_contact.put("contact",Existing_primary_ID);
						Existing_Primary_contact.put("Kind_of_Contact","Primaire/Primary");
						Existing_Primary_contact.put("Cell_Phone",getexisting_contact.get("Cellulaire"));
						Existing_Primary_contact.put("Email",getexisting_contact.get("E_mail_Courriel_1"));
						Existing_Primary_contact.put("Home_Phone",getexisting_contact.get("T_l_phone_travail"));
						Existing_Primary_contact.put("Type_of_Contact_s",getexisting_contact.get("Type_de_contact"));
						Existing_Primary_contact.put("Work_Phone",getexisting_contact.get("T_l_phone_maison"));
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
					Secondary_ContactMap.put("Layout","4846491000000091033");
					Secondary_ContactMap.put("Contact_Type","Secondaire/Secondary");
					createSecondarycontact = zoho.crm.createRecord("Contacts",Secondary_ContactMap);
					// 					if(createSecondarycontact.get("id") != null)
					// 					{
					// 						Secondary_contact_ID = createSecondarycontact.get("id");
					// 						get_Sec_Info = zoho.crm.getRecordById("Contacts",Secondary_contact_ID);
					// 						Update_contact_S = Map();
					// 						Update_contact_S.put("Client_Number",get_Sec_Info.get("Num_ro_Client"));
					// 						update_Sec_contact = zoho.crm.updateRecord("Contacts",Secondary_contact_ID,Update_contact_S);
					// 					}
					if(createSecondarycontact.get("id") != null)
					{
						Sec_contact_map = Map();
						Sec_contact_map.put("contact",createSecondarycontact.get("id"));
						Sec_contact_map.put("Kind_of_Contact","Secondaire/Secondary");
						Sec_contact_map.put("Cell_Phone",getLeads.get("Secondary_Cellphone"));
						Sec_contact_map.put("Email",getLeads.get("Secondary_Con_Email"));
						Sec_contact_map.put("Home_Phone",getLeads.get("Secondary_Home_Phone"));
						Sec_contact_map.put("Type_of_Contact_s",getLeads.get("Secondary_Contact"));
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
					if(getexisting_S_contact != null)
					{
						Existing_S_contact = Map();
						Existing_S_contact.put("contact",Existing_secondary_ID);
						Existing_S_contact.put("Kind_of_Contact","Secondaire/Secondary");
						Existing_S_contact.put("Cell_Phone",getexisting_S_contact.get("Cellulaire"));
						Existing_S_contact.put("Email",getexisting_S_contact.get("E_mail_Courriel_1"));
						Existing_S_contact.put("Home_Phone",getexisting_S_contact.get("T_l_phone_travail"));
						Existing_S_contact.put("Type_of_Contact_s",getexisting_S_contact.get("Type_de_contact"));
						Existing_S_contact.put("Work_Phone",getexisting_S_contact.get("T_l_phone_maison"));
						contactList.add(Existing_S_contact);
					}
				}
			}
			/*Create Healthcare contact*/
			if(getLeads.get("Choose_Healthcare_Contact") == "Créer un nouveau contact/Create new contact")
			{
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
					Health_ContactMap.put("Layout","4846491000000091033");
					Health_ContactMap.put("Contact_Type","Soins de santé/Health Care");
					createHealthcontact = zoho.crm.createRecord("Contacts",Health_ContactMap);
					// 					if(createHealthcontact.get("id") != null)
					// 					{
					// 						Health_contact_ID = createHealthcontact.get("id");
					// 						get_health_Info = zoho.crm.getRecordById("Contacts",Health_contact_ID);
					// 						Update_contact_H = Map();
					// 						Update_contact_H.put("Client_Number",get_health_Info.get("Num_ro_Client"));
					// 						update_Health_contact = zoho.crm.updateRecord("Contacts",Health_contact_ID,Update_contact_H);
					// 					}
					if(createHealthcontact.get("id") != null)
					{
						Health_contact_map = Map();
						Health_contact_map.put("contact",createHealthcontact.get("id"));
						Health_contact_map.put("Kind_of_Contact","Soins de santé/Health Care");
						Health_contact_map.put("Cell_Phone",getLeads.get("Healthcare_contact_Cellphone"));
						Health_contact_map.put("Email",getLeads.get("Healthcare_Email"));
						Health_contact_map.put("Home_Phone",getLeads.get("Healthcare_Home_Phone"));
						Health_contact_map.put("Type_of_Contact_s",getLeads.get("Healthcare_Contact"));
						Health_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
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
					if(getexisting_H_contact != null)
					{
						Existing_H_contact = Map();
						Existing_H_contact.put("contact",Existing_Health_ID);
						Existing_H_contact.put("Kind_of_Contact","Soins de santé/Health Care");
						Existing_H_contact.put("Cell_Phone",getexisting_H_contact.get("Cellulaire"));
						Existing_H_contact.put("Email",getexisting_H_contact.get("E_mail_Courriel_1"));
						Existing_H_contact.put("Home_Phone",getexisting_H_contact.get("T_l_phone_travail"));
						Existing_H_contact.put("Type_of_Contact_s",getexisting_H_contact.get("Type_de_contact"));
						Existing_H_contact.put("Work_Phone",getexisting_H_contact.get("T_l_phone_maison"));
						contactList.add(Existing_H_contact);
					}
				}
			}
			housingDealMap.put("Contact_persons",contactList);
			createHouseCareDeal_1 = zoho.crm.createRecord("Deals",housingDealMap);
			if(createHouseCareDeal_1.get("id") != null)
			{
				Created_deal_res = createHouseCareDeal_1.get("id");
				getdeal_info = zoho.crm.getRecordById("Deals",Created_deal_res);
				UpdateDealMap = Map();
				UpdateDealMap.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
				update_deal_res = zoho.crm.updateRecord("Deals",Created_deal_res,UpdateDealMap);
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
			}
			resp = "La démarche a été créée avec succès/Deal has been created successfully";
			openUrl("https://crm.zoho.com/crm/org746753262/tab/Potentials/" + createHouseCareDeal_1.get("id"),"new window");
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
			deleteRecordMap.put("module","Leads");
			deleteRecordMap.put("id",leadID);
			deleteResp = zoho.crm.invokeConnector("crm.delete",deleteRecordMap);
			// 			info deleteResp;
		}
		/* Create 1 deal using 2 prospects--- ends */
		/* Create 2 deal using 2 prospects--- start */
		else if(getLeads.get("Deal_Conversion") == "Créer 2 démarches avec 2 prospects/Create 2 deals using 2 prospects")
		{
			housingDealMap.put("Deal_Name",getLeads.get("First_Namee") + " " + getLeads.get("Last_Name"));
			Client_1_contact_ID = "";
			Client_contact_ID = "";
			contactList = List();
			Second_deal_contactList = List();
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
				primaryContactMap.put("Layout","4846491000000339001");
				primaryContactMap.put("Contact_Type","Client");
				Contact_Counselor = getLeads.get("Advisors");
				if(Contact_Counselor != null)
				{
					primaryContactMap.put("Counselor",Contact_Counselor.get("id"));
				}
				Contact_User = getLeads.get("Counselor_User");
				if(Contact_User != null)
				{
					primaryContactMap.put("Counselor_user",Contact_User.get("id"));
				}
				Contact_Temporary_counselor = getLeads.get("Conseiller_Counselor");
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
					Update_contact_C1 = Map();
					Update_contact_C1.put("Client_Number",get_contact_Info.get("Num_ro_Client"));
					housingDealMap.put("Client_1_number",get_contact_Info.get("Num_ro_Client"));
					update_Number_contact = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,Update_contact_C1);
				}
				housingDealMap.put("Contact",createPrimaryContact.get("id"));
				if(getLeads.get("Do_you_like_to_enter_prospect_1_profile_details") == "Oui/Yes")
				{
					/* Lead Profile*/
					housingDealMap.put("Type_s_of_client_Type_s_de_client",getLeads.get("Type_s_of_client"));
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
					Prospect_ContactMap.put("Layout","4846491000000091033");
					Prospect_ContactMap.put("Contact_Type","Primaire/Primary");
					createProspectcontact = zoho.crm.createRecord("Contacts",Prospect_ContactMap);
					// 					if(createProspectcontact.get("id") != null)
					// 					{
					// 						Primary_contact_ID = createProspectcontact.get("id");
					// 						get_Primary_Info = zoho.crm.getRecordById("Contacts",Primary_contact_ID);
					// 						Update_contact_P = Map();
					// 						Update_contact_P.put("Client_Number",get_Primary_Info.get("Num_ro_Client"));
					// 						update_primary_res = zoho.crm.updateRecord("Contacts",Primary_contact_ID,Update_contact_P);
					// 					}
					if(createProspectcontact.get("id") != null)
					{
						prospect_contact_map = Map();
						prospect_contact_map.put("contact",createProspectcontact.get("id"));
						prospect_contact_map.put("Kind_of_Contact","Primaire/Primary");
						prospect_contact_map.put("Cell_Phone",getLeads.get("Prospect_Contact_1_Cellphone"));
						prospect_contact_map.put("Email",getLeads.get("Prospect_Contact_1_Email"));
						prospect_contact_map.put("Home_Phone",getLeads.get("Prospect_Contact_1_Home_Phone"));
						prospect_contact_map.put("Type_of_Contact_s",getLeads.get("Prospect_Contact_1_Type_of_contact"));
						prospect_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_P1"));
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
					if(getexisting_contact != null)
					{
						Existing_Primary_contact = Map();
						Existing_Primary_contact.put("contact",Existing_primary_ID);
						Existing_Primary_contact.put("Kind_of_Contact","Primaire/Primary");
						Existing_Primary_contact.put("Cell_Phone",getexisting_contact.get("Cellulaire"));
						Existing_Primary_contact.put("Email",getexisting_contact.get("E_mail_Courriel_1"));
						Existing_Primary_contact.put("Home_Phone",getexisting_contact.get("T_l_phone_travail"));
						Existing_Primary_contact.put("Type_of_Contact_s",getexisting_contact.get("Type_de_contact"));
						Existing_Primary_contact.put("Work_Phone",getexisting_contact.get("T_l_phone_maison"));
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
					Secondary_ContactMap.put("Layout","4846491000000091033");
					Secondary_ContactMap.put("Contact_Type","Secondaire/Secondary");
					createSecondarycontact = zoho.crm.createRecord("Contacts",Secondary_ContactMap);
					// 					if(createSecondarycontact.get("id") != null)
					// 					{
					// 						Secondary_contact_ID = createSecondarycontact.get("id");
					// 						get_Sec_Info = zoho.crm.getRecordById("Contacts",Secondary_contact_ID);
					// 						Update_contact_S = Map();
					// 						Update_contact_S.put("Client_Number",get_Sec_Info.get("Num_ro_Client"));
					// 						update_Sec_contact = zoho.crm.updateRecord("Contacts",Secondary_contact_ID,Update_contact_S);
					// 					}
					if(createSecondarycontact.get("id") != null)
					{
						Sec_contact_map = Map();
						Sec_contact_map.put("contact",createSecondarycontact.get("id"));
						Sec_contact_map.put("Kind_of_Contact","Secondaire/Secondary");
						Sec_contact_map.put("Cell_Phone",getLeads.get("Secondary_Cellphone"));
						Sec_contact_map.put("Email",getLeads.get("Secondary_Con_Email"));
						Sec_contact_map.put("Home_Phone",getLeads.get("Secondary_Home_Phone"));
						Sec_contact_map.put("Type_of_Contact_s",getLeads.get("Secondary_Contact"));
						Sec_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_S"));
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
					if(getexisting_S_contact != null)
					{
						Existing_S_contact = Map();
						Existing_S_contact.put("contact",Existing_secondary_ID);
						Existing_S_contact.put("Kind_of_Contact","Secondaire/Secondary");
						Existing_S_contact.put("Cell_Phone",getexisting_S_contact.get("Cellulaire"));
						Existing_S_contact.put("Email",getexisting_S_contact.get("E_mail_Courriel_1"));
						Existing_S_contact.put("Home_Phone",getexisting_S_contact.get("T_l_phone_travail"));
						Existing_S_contact.put("Type_of_Contact_s",getexisting_S_contact.get("Type_de_contact"));
						Existing_S_contact.put("Work_Phone",getexisting_S_contact.get("T_l_phone_maison"));
						contactList.add(Existing_S_contact);
						Second_deal_contactList.add(Existing_S_contact);
					}
				}
			}
			/*Create Healthcare contact*/
			if(getLeads.get("Choose_Healthcare_Contact") == "Créer un nouveau contact/Create new contact")
			{
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
					Health_ContactMap.put("Layout","4846491000000091033");
					Health_ContactMap.put("Contact_Type","Soins de santé/Health Care");
					createHealthcontact = zoho.crm.createRecord("Contacts",Health_ContactMap);
					// 					if(createHealthcontact.get("id") != null)
					// 					{
					// 						Health_contact_ID = createHealthcontact.get("id");
					// 						get_health_Info = zoho.crm.getRecordById("Contacts",Health_contact_ID);
					// 						Update_contact_H = Map();
					// 						Update_contact_H.put("Client_Number",get_health_Info.get("Num_ro_Client"));
					// 						update_Health_contact = zoho.crm.updateRecord("Contacts",Health_contact_ID,Update_contact_H);
					// 					}
					if(createHealthcontact.get("id") != null)
					{
						Health_contact_map = Map();
						Health_contact_map.put("contact",createHealthcontact.get("id"));
						Health_contact_map.put("Kind_of_Contact","Soins de santé/Health Care");
						Health_contact_map.put("Cell_Phone",getLeads.get("Healthcare_contact_Cellphone"));
						Health_contact_map.put("Email",getLeads.get("Healthcare_Email"));
						Health_contact_map.put("Home_Phone",getLeads.get("Healthcare_Home_Phone"));
						Health_contact_map.put("Type_of_Contact_s",getLeads.get("Healthcare_Contact"));
						Health_contact_map.put("Work_Phone",getLeads.get("T_l_phone_travail_R"));
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
					if(getexisting_H_contact != null)
					{
						Existing_H_contact = Map();
						Existing_H_contact.put("contact",Existing_Health_ID);
						Existing_H_contact.put("Kind_of_Contact","Soins de santé/Health Care");
						Existing_H_contact.put("Cell_Phone",getexisting_H_contact.get("Cellulaire"));
						Existing_H_contact.put("Email",getexisting_H_contact.get("E_mail_Courriel_1"));
						Existing_H_contact.put("Home_Phone",getexisting_H_contact.get("T_l_phone_travail"));
						Existing_H_contact.put("Type_of_Contact_s",getexisting_H_contact.get("Type_de_contact"));
						Existing_H_contact.put("Work_Phone",getexisting_H_contact.get("T_l_phone_maison"));
						contactList.add(Existing_H_contact);
						Second_deal_contactList.add(Existing_H_contact);
					}
				}
			}
			// Creating another deal 
			/* General information*/
			homeDealMap = Map();
			homeDealMap.put("Deal_Name",getLeads.get("Prospect_First_Name2") + " " + getLeads.get("Prospect_Last_Name2"));
			homeDealMap.put("Creation_date",zoho.currentdate.toString("yyyy-MM-dd"));
			homeDealMap.put("Stage","Active");
			Counselor_2 = getLeads.get("Advisors");
			if(Counselor_2 != null)
			{
				homeDealMap.put("Counselor_Conseiller",Counselor_2.get("id"));
			}
			User_2 = getLeads.get("Counselor_User");
			if(User_2 != null)
			{
				homeDealMap.put("Counselor_user",User_2.get("id"));
			}
			Temporary_counselor_2 = getLeads.get("Conseiller_Counselor");
			if(Temporary_counselor_2 != null)
			{
				homeDealMap.put("Conseiller_temporaire_Temporary_counselor",Temporary_counselor_2.get("id"));
			}
			Temporary_User_2 = getLeads.get("Temporary_Counselor_User");
			if(Temporary_User_2 != null)
			{
				homeDealMap.put("Temporary_counselor_user",Temporary_User_2.get("id"));
			}
			OWner_info_2 = getLeads.get("Owner");
			if(OWner_info_2 != null)
			{
				homeDealMap.put("Owner",OWner_info_2.get("id"));
			}
			homeDealMap.put("Personal_referral",getLeads.get("Personal_referral"));
			homeDealMap.put("General_comments",getLeads.get("General_comments"));
			/* Deal source*/
			homeDealMap.put("Deal_type_Type_de_d_marche",getLeads.get("Lead_type"));
			homeDealMap.put("Lead_source_1",getLeads.get("Source_du_prospect"));
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
				homeDealMap.put("Trade_marketing_1",getLeads.get("Marketing_traditionnel_Trad_marketing"));
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
			/* Create Prospect contact 2 */
			// 			if(getLeads.get("Add_second_client") == "Oui/Yes")
			// 			{
			if(getLeads.get("Prospect_First_Name2") != "" && getLeads.get("Prospect_Last_Name2") != "")
			{
				primaryContactMap = Map();
				primaryContactMap.put("First_Name",getLeads.get("Prospect_First_Name2"));
				primaryContactMap.put("Nom_de_jeune_fille",getLeads.get("Prospect_Maiden_Name2"));
				primaryContactMap.put("Date_of_Birth",getLeads.get("Date_de_naissance_Birth_date_2"));
				primaryContactMap.put("T_l_phone_maison",getLeads.get("T_l_phone_travail_P"));
				primaryContactMap.put("T_l_phone_travail",getLeads.get("Prospect_T_l_phone_maison_Home_phone"));
				primaryContactMap.put("Cellulaire",getLeads.get("Prospect_Portable_Mobile"));
				primaryContactMap.put("Last_Name",getLeads.get("Prospect_Last_Name2"));
				primaryContactMap.put("Sexe",getLeads.get("Prospect_Sex2"));
				primaryContactMap.put("E_mail_Courriel_1",getLeads.get("Prospect_Email2"));
				primaryContactMap.put("Ville_City",getLeads.get("Prospect_Ville_City"));
				primaryContactMap.put("Provinces",getLeads.get("Prospect_Province2"));
				primaryContactMap.put("language_spoken1",getLeads.get("Prospect_Langue_Language"));
				primaryContactMap.put("Preferred_communication1",getLeads.get("Preferred_communication_2"));
				primaryContactMap.put("Layout","4846491000000339001");
				primaryContactMap.put("Contact_Type","Client");
				Contact_Counselor = getLeads.get("Advisors");
				if(Contact_Counselor != null)
				{
					primaryContactMap.put("Counselor",Contact_Counselor.get("id"));
				}
				Contact_User = getLeads.get("Counselor_User");
				if(Contact_User != null)
				{
					primaryContactMap.put("Counselor_user",Contact_User.get("id"));
				}
				Contact_Temporary_counselor = getLeads.get("Conseiller_Counselor");
				if(Contact_Temporary_counselor != null)
				{
					primaryContactMap.put("Temporary_counselor",Contact_Temporary_counselor.get("id"));
				}
				Contact_Temporary_User = getLeads.get("Temporary_Counselor_User");
				if(Contact_Temporary_User != null)
				{
					primaryContactMap.put("Temporary_counselor_user",Contact_Temporary_User.get("id"));
				}
				createPrimaryContact_2 = zoho.crm.createRecord("Contacts",primaryContactMap);
				if(createPrimaryContact_2.get("id") != null)
				{
					Client_contact_ID = createPrimaryContact_2.get("id");
					Client_Info_2 = zoho.crm.getRecordById("Contacts",Client_contact_ID);
					Update_contact = Map();
					Update_contact.put("Client_Number",Client_Info_2.get("Num_ro_Client"));
					homeDealMap.put("Client_2_number",Client_Info_2.get("Num_ro_Client"));
					update_Client_c2 = zoho.crm.updateRecord("Contacts",Client_contact_ID,Update_contact);
				}
				homeDealMap.put("Contacts",createPrimaryContact_2.get("id"));
				if(getLeads.get("Do_you_like_to_enter_prospect_2_profile_details") == "Oui/Yes")
				{
					/* Lead  Profile -2*/
					homeDealMap.put("Profile_2_Type_s_of_client_Type_s_de_client",getLeads.get("Profile_Type_s_de_client_Type_s_of_client"));
					homeDealMap.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement",getLeads.get("Profile_Desired_moving_date"));
					homeDealMap.put("Profile_2_Budget_range_Gamme_de_budget",getLeads.get("Profile_Budget_range"));
					homeDealMap.put("Profile_Service_s_sought",getLeads.get("Profile_Type_s_de_service_s_Type_s_of_service_s"));
					homeDealMap.put("Profile_2_R_gion_Region",getLeads.get("Profile_Region_Region"));
					homeDealMap.put("Profile_SAD_start_date",getLeads.get("Profile_Start_date_SAD_Home_care_start_date"));
				}
				if(createPrimaryContact_2.get("id") != null)
				{
					primary_map = Map();
					primary_map.put("contact",createPrimaryContact_2.get("id"));
					primary_map.put("Kind_of_Contact","Client");
					primary_map.put("Cell_Phone",getLeads.get("Prospect_Portable_Mobile"));
					primary_map.put("Email",getLeads.get("Prospect_Email2"));
					primary_map.put("Home_Phone",getLeads.get("Prospect_T_l_phone_maison_Home_phone"));
					primary_map.put("Work_Phone",getLeads.get("T_l_phone_travail_P"));
					Second_deal_contactList.add(primary_map);
				}
			}
			// 			}
			homeDealMap.put("Contact_persons",Second_deal_contactList);
			createHouseCareDeal_2 = zoho.crm.createRecord("Deals",homeDealMap);
			if(createHouseCareDeal_2.get("id") != null)
			{
				another_dealID = createHouseCareDeal_2.get("id");
				getdeal_info_2 = zoho.crm.getRecordById("Deals",another_dealID);
				UpdateDealMap_2 = Map();
				UpdateDealMap_2.put("Deal_Number",getdeal_info_2.get("Num_ro_de_d_marche"));
				update_Number_deal = zoho.crm.updateRecord("Deals",another_dealID,UpdateDealMap_2);
				/* update deal number to contact -client 2*/
				if(Client_contact_ID != null)
				{
					client2_map = Map();
					client2_map.put("Deal_Number",getdeal_info_2.get("Num_ro_de_d_marche"));
					updateClient2 = zoho.crm.updateRecord("Contacts",Client_contact_ID,client2_map);
				}
			}
			housingDealMap.put("Contact_persons",contactList);
			createHouseCareDeal_1 = zoho.crm.createRecord("Deals",housingDealMap);
			if(createHouseCareDeal_1.get("id") != null)
			{
				Created_deal_res = createHouseCareDeal_1.get("id");
				getdeal_info = zoho.crm.getRecordById("Deals",Created_deal_res);
				UpdateDealMap = Map();
				UpdateDealMap.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
				update_deal_res = zoho.crm.updateRecord("Deals",Created_deal_res,UpdateDealMap);
				/* update deal number to contact -client 1*/
				if(Client_1_contact_ID != null)
				{
					client1_map = Map();
					client1_map.put("Deal_Number",getdeal_info.get("Num_ro_de_d_marche"));
					updateClient1 = zoho.crm.updateRecord("Contacts",Client_1_contact_ID,client1_map);
				}
			}
			resp = "2 La démarche a été créée avec succès/2 Deals has been created successfully";
			openUrl("https://crm.zoho.com/crm/org746753262/tab/Potentials/","new window");
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
					Contact_info_2 = deal_info.get("Contacts");
					if(Contact_info_2 != null)
					{
						housingDealMap.put("Contact2_CRM_ID",Contact_info_2.get("id"));
					}
					housingDealMap.put("Profile_2_Budget_range_Gamme_de_budget",deal_info.get("Profile_2_Budget_range_Gamme_de_budget"));
					housingDealMap.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement1",deal_info.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"));
					housingDealMap.put("Profile_SAD_start_date",deal_info.get("Profile_SAD_start_date"));
					housingDealMap.put("Profile_2_Type_s_of_client_Type_s_de_client",deal_info.get("Profile_2_Type_s_of_client_Type_s_de_client"));
					housingDealMap.put("Profile_2_R_gion_Region",deal_info.get("Profile_2_R_gion_Region"));
					housingDealMap.put("Profile_Service_s_sought",deal_info.get("Profile_Service_s_sought"));
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
			deleteRecordMap.put("module","Leads");
			deleteRecordMap.put("id",leadID);
			deleteResp = zoho.crm.invokeConnector("crm.delete",deleteRecordMap);
			// 			info deleteResp;
		}
		/* Create 2 deal using 2 prospects--- ends */
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Lead");
	dataMap.put("Process_Description","House Deal :Create Deal and Contact in CRM and Deal in Creator");
	dataMap.put("In_Data",leadID.toLong());
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
	//info ContactCreateResponse;
}
return resp;