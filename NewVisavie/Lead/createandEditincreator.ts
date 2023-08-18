try 
{
	getlead_info = zoho.crm.getRecordById("Leads",LeadID);
	if(getlead_info.get("id") != null)
	{
		data_map = Map();
		ownerName = "lion_visavie";
		formName = "Leads";
		appName = "visavie";
		report_name = "Leads_Report";
		getData = zoho.creator.getRecords(ownerName,appName,report_name,"Zoho_CRMID == \"" + LeadID + "\"",1,200,"zoho_mail");
		if(getData.get("code") == 3000)
		{
			//Lead information
			data_map.put("Statut",getlead_info.get("Lead_Status_s"));
			data_map.put("Type_de_conversion",getlead_info.get("Test"));
			// 			data_map.put("Type_de_conversion",getlead_info.get("Deal_Conversion"));
			if(getlead_info.get("Creation_Date") != null)
			{
				data_map.put("Creation_Date",getlead_info.get("Creation_Date").toString("dd-MMM-yyyy"));
			}
			else
			{
				data_map.put("Creation_Date",null);
			}
			data_map.put("Zoho_CRMID",LeadID);
			Advisor_info = getlead_info.get("Advisors");
			if(Advisor_info != null)
			{
				data_map.put("Counsleor_ID",Advisor_info.get("id"));
			}
			else
			{
				data_map.put("Counsleor_ID","");
			}
			temp_Advisor_info = getlead_info.get("Conseiller_Counselor");
			if(temp_Advisor_info != null)
			{
				data_map.put("Temporary_counselor_ID",temp_Advisor_info.get("id"));
			}
			else
			{
				data_map.put("Temporary_counselor_ID","");
			}
			// 		Description demande/Request description
			data_map.put("Commentaires",getlead_info.get("General_comments"));
			//Prospect 1 
			data_map.put("Prospect_Pr_nom",getlead_info.get("First_Namee"));
			data_map.put("Nom",getlead_info.get("Last_Name"));
			data_map.put("Nom_de_jeune_fille",getlead_info.get("Nom_de_jeune_fille_Maiden_name"));
			data_map.put("Prospect_courriel",getlead_info.get("Courriel_Email"));
			info getlead_info.get("Date_de_naissance_Birth_date");
			if(getlead_info.get("Date_de_naissance_Birth_date") != null)
			{
				data_map.put("Date_de_naissance",getlead_info.get("Date_de_naissance_Birth_date").toString("dd-MMM-yyyy"));
			}
			else
			{
				data_map.put("Date_de_naissance_Birth_date",null);
			}
			data_map.put("Work_Phone",getlead_info.get("T_l_phone_travail"));
			data_map.put("Ajouter_des_informations",getlead_info.get("Do_you_like_to_enter_prospect_1_profile_details"));
			data_map.put("Prospect_Ville",getlead_info.get("Ville_City"));
			data_map.put("Type_of_contact",getlead_info.get("Type_of_Contact"));
			data_map.put("Sex",getlead_info.get("Sex"));
			data_map.put("Prospect_Portable",getlead_info.get("Portable_Mobile"));
			data_map.put("Province1",getlead_info.get("Province"));
			data_map.put("Language",getlead_info.get("Language"));
			data_map.put("Preferred_communication",getlead_info.get("Preferred_communication"));
			data_map.put("Add_second_lead",getlead_info.get("Add_second_client"));
			data_map.put("T_l_phone_domestique",getlead_info.get("T_l_phone_maison_Home_phone"));
			//Prospect 2
			data_map.put("Prospect_Pr_nom_2",getlead_info.get("Prospect_First_Name2"));
			data_map.put("Prospect_Nom",getlead_info.get("Prospect_Last_Name2"));
			data_map.put("Prospect_Nom_de_jeune_fille",getlead_info.get("Prospect_Maiden_Name2"));
			data_map.put("Prospect_courriel_2",getlead_info.get("Prospect_Email2"));
			if(getlead_info.get("Date_de_naissance_Birth_date_2") != null)
			{
				data_map.put("Prospect_Date_de_naissance",getlead_info.get("Date_de_naissance_Birth_date_2").toString("dd-MMM-yyyy"));
			}
			else
			{
				data_map.put("Date_de_naissance_Birth_date_2",null);
			}
			data_map.put("Work_Phone4",getlead_info.get("T_l_phone_travail_P"));
			data_map.put("Ajouter_info_2",getlead_info.get("Do_you_like_to_enter_prospect_2_profile_details"));
			data_map.put("Prospect_Ville_2",getlead_info.get("Prospect_Ville_City"));
			data_map.put("Prospect_Sexe",getlead_info.get("Prospect_Sex2"));
			data_map.put("Prospect_portable_2",getlead_info.get("Prospect_Portable_Mobile"));
			data_map.put("Province_2",getlead_info.get("Prospect_Province2"));
			data_map.put("Prospect_Langue",getlead_info.get("Prospect_Langue_Language"));
			data_map.put("Preferred_communication1",getlead_info.get("Preferred_communication_2"));
			data_map.put("Prospect_T_l_phone_domestique",getlead_info.get("Prospect_T_l_phone_maison_Home_phone"));
			// 		//Primary Contact
			data_map.put("Choose_Primary_Contact",getlead_info.get("Choose_Primary_Contact"));
			data_map.put("First_Name_Primary",getlead_info.get("Prospect_Contact_1_First_Name"));
			data_map.put("Last_Name_Primary",getlead_info.get("Prospect_Contact_1_Last_Name"));
			data_map.put("Work_Phone1",getlead_info.get("T_l_phone_travail_P1"));
			data_map.put("Langue_P",getlead_info.get("Prospect_Contact_1_Language"));
			data_map.put("Ville_P",getlead_info.get("Ville_City_P"));
			data_map.put("Home_Phone_Primary",getlead_info.get("Prospect_Contact_1_Home_Phone"));
			data_map.put("Cellphone_Primary",getlead_info.get("Prospect_Contact_1_Cellphone"));
			data_map.put("Type_of_contact_P",getlead_info.get("Prospect_Contact_1_Type_of_contact"));
			data_map.put("Email_Primary",getlead_info.get("Prospect_Contact_1_Email"));
			data_map.put("Sex_Primary",getlead_info.get("Prospect_Contact_1_Sex"));
			data_map.put("Province_Primary",getlead_info.get("Prospect_Contact_1_Province"));
			data_map.put("Preferred_communication_P",getlead_info.get("Preferred_communication_P"));
			// 		Secondary Contact
			data_map.put("Choose_Secondary_Contact",getlead_info.get("Choose_Secondary_Contact"));
			data_map.put("First_Name_S",getlead_info.get("Secondary_First_Name"));
			data_map.put("Last_Name_S",getlead_info.get("Secondary_Last_Name"));
			data_map.put("Work_Phone2",getlead_info.get("T_l_phone_travail_S"));
			data_map.put("Home_Phone_S",getlead_info.get("Secondary_Home_Phone"));
			data_map.put("Cellphone_S",getlead_info.get("Secondary_Cellphone"));
			data_map.put("Email_S",getlead_info.get("Secondary_Con_Email"));
			data_map.put("Language_s_S",getlead_info.get("Language_S"));
			data_map.put("Province_S",getlead_info.get("Secondary_Province"));
			data_map.put("Sex_S",getlead_info.get("Secondary_Sex"));
			data_map.put("Ville_S",getlead_info.get("Ville_City_S"));
			data_map.put("Type_of_contact_S1",getlead_info.get("Secondary_Contact"));
			data_map.put("Preferred_communication2",getlead_info.get("Preferred_communication_S"));
			// 		//Health care contact
			data_map.put("Choose_Healthcare_Contact",getlead_info.get("Choose_Healthcare_Contact"));
			data_map.put("First_Name_H",getlead_info.get("Healthcare_First_Name"));
			data_map.put("Last_Name_H",getlead_info.get("Healthcare_Last_Name"));
			data_map.put("Sex_H",getlead_info.get("Healthcare_Sex"));
			data_map.put("Work_Phone3",getlead_info.get("T_l_phone_travail_R"));
			data_map.put("Email_H",getlead_info.get("Healthcare_Email"));
			data_map.put("Cellphone_H",getlead_info.get("Healthcare_contact_Cellphone"));
			data_map.put("Type_of_contact_R",getlead_info.get("Healthcare_Contact"));
			data_map.put("Province_H",getlead_info.get("Healthcare_Province"));
			data_map.put("Ville_R",getlead_info.get("Ville_City_R"));
			data_map.put("Langue_R",getlead_info.get("Language_H"));
			data_map.put("Preferred_communication_R",getlead_info.get("Preferred_communication_R"));
			//Lead Source
			data_map.put("Type_prospect",getlead_info.get("Lead_type"));
			data_map.put("Origine_du_Prospect",getlead_info.get("Source_du_prospect"));
			data_map.put("Personal_reference",getlead_info.get("Personal_referral"));
			data_map.put("Precision",getlead_info.get("Precision"));
			data_map.put("Partners",getlead_info.get("Partners_Partenaires"));
			data_map.put("Precision",getlead_info.get("Precision"));
			data_map.put("Traditional_Traditional_Marketing",getlead_info.get("Marketing_traditionnel_Trad_marketing"));
			data_map.put("RSSS_Health_care_network",getlead_info.get("RSSS"));
			data_map.put("Web",getlead_info.get("Web"));
			data_map.put("Other_Other",getlead_info.get("Other_Autre"));
			data_map.put("Reason",getlead_info.get("Reason"));
			//Lead Profile1
			data_map.put("Type_de_client",getlead_info.get("Type_s_of_client"));
			data_map.put("Fourchette_budg_taire",getlead_info.get("Budget_range"));
			data_map.put("R_gion_recherch_e",getlead_info.get("Region"));
			data_map.put("Service_s_recherch_s",getlead_info.get("Type_s_of_service_s"));
			data_map.put("Date_de_d_m_nagement_souhait_e",getlead_info.get("Desired_moving_date"));
			data_map.put("Date_de_d_but_du_TAS",getlead_info.get("home_care_start_date"));
			data_map.put("Start_date_SAD_Home_care_start_date",getlead_info.get("home_care_start_date"));
			//Lead Profile2
			data_map.put("Type_of_client_2",getlead_info.get("Profile_Type_s_de_client_Type_s_of_client"));
			data_map.put("Profile_Fourchette_budg_taire",getlead_info.get("Profile_Budget_range"));
			data_map.put("Profile_Date_de_d_m_nagement_souhait_e",getlead_info.get("Profile_Desired_moving_date"));
			data_map.put("Profile_R_gion_recherch_e",getlead_info.get("Profile_Region_Region"));
			data_map.put("Profile_Service_s_recherch_s",getlead_info.get("Profile_Type_s_de_service_s_Type_s_of_service_s"));
			data_map.put("Profile_Date_de_d_but_du_TAS",getlead_info.get("Profile_Start_date_SAD_Home_care_start_date"));
			/*extension-start*/
			data_map.put("Work_phone_Extension",getlead_info.get("Work_phone_Extension"));
			data_map.put("Work_phone_Extension_2",getlead_info.get("Work_phone_Extension_2"));
			data_map.put("Work_phone_Extension_p",getlead_info.get("Work_phone_Extension_p"));
			data_map.put("Work_phone_Extension_s",getlead_info.get("Work_phone_Extension_s"));
			data_map.put("Work_phone_Extension_R",getlead_info.get("Work_phone_Extension_R"));
			/*extension -ends*/
			creatorId = getData.get("data").get(0).get("ID");
			updatercreator_respond = zoho.creator.updateRecord(ownerName,appName,report_name,creatorId.toLong(),data_map,Map(),"zoho_mail");
		}
		else
		{
			data_map = Map();
			ownerName = "lion_visavie";
			formName = "Leads";
			appName = "visavie";
			Advisor_info = getlead_info.get("Advisors");
			if(Advisor_info != null)
			{
				data_map.put("Counsleor_ID",Advisor_info.get("id"));
			}
			else
			{
				data_map.put("Counsleor_ID","");
			}
			temp_Advisor_info = getlead_info.get("Conseiller_Counselor");
			if(temp_Advisor_info != null)
			{
				data_map.put("Temporary_counselor_ID",temp_Advisor_info.get("id"));
			}
			else
			{
				data_map.put("Temporary_counselor_ID","");
			}
			data_map.put("Statut",getlead_info.get("Lead_Status_s"));
			data_map.put("Type_de_conversion",getlead_info.get("Test"));
			// 			data_map.put("Type_de_conversion",getlead_info.get("Deal_Conversion"));
			if(getlead_info.get("Creation_Date") != null)
			{
				data_map.put("Creation_Date",getlead_info.get("Creation_Date").toString("dd-MMM-yyyy"));
			}
			else
			{
				data_map.put("Creation_Date",zoho.currentdate.toString("dd-MMM-yyyy"));
			}
			data_map.put("Zoho_CRMID",LeadID);
			// 		Description demande/Request description
			data_map.put("Commentaires",getlead_info.get("General_comments"));
			//Prospect 1 
			data_map.put("Prospect_Pr_nom",getlead_info.get("First_Namee"));
			data_map.put("Nom",getlead_info.get("Last_Name"));
			data_map.put("Nom_de_jeune_fille",getlead_info.get("Nom_de_jeune_fille_Maiden_name"));
			data_map.put("Prospect_courriel",getlead_info.get("Courriel_Email"));
			if(getlead_info.get("Date_de_naissance_Birth_date") != null)
			{
				data_map.put("Date_de_naissance",getlead_info.get("Date_de_naissance_Birth_date").toString("dd-MMM-yyyy"));
			}
			else
			{
				data_map.put("Date_de_naissance_Birth_date",null);
			}
			data_map.put("Work_Phone",getlead_info.get("T_l_phone_travail"));
			data_map.put("Ajouter_des_informations",getlead_info.get("Do_you_like_to_enter_prospect_1_profile_details"));
			data_map.put("Prospect_Ville",getlead_info.get("Ville_City"));
			data_map.put("Type_of_contact",getlead_info.get("Type_of_Contact"));
			data_map.put("Sex",getlead_info.get("Sex"));
			data_map.put("Prospect_Portable",getlead_info.get("Portable_Mobile"));
			data_map.put("Province1",getlead_info.get("Province"));
			data_map.put("Language",getlead_info.get("Language"));
			data_map.put("Preferred_communication",getlead_info.get("Preferred_communication"));
			data_map.put("Add_second_lead",getlead_info.get("Add_second_client"));
			data_map.put("T_l_phone_domestique",getlead_info.get("T_l_phone_maison_Home_phone"));
			// 	Prospect 2
			data_map.put("Prospect_Pr_nom_2",getlead_info.get("Prospect_First_Name2"));
			data_map.put("Prospect_Nom",getlead_info.get("Prospect_Last_Name2"));
			data_map.put("Prospect_Nom_de_jeune_fille",getlead_info.get("Prospect_Maiden_Name2"));
			if(getlead_info.get("Date_de_naissance_Birth_date_2") != null)
			{
				data_map.put("Prospect_Date_de_naissance",getlead_info.get("Date_de_naissance_Birth_date_2").toString("dd-MMM-yyyy"));
			}
			else
			{
				data_map.put("Date_de_naissance_Birth_date_2",null);
			}
			data_map.put("Prospect_courriel_2",getlead_info.get("Prospect_Email2"));
			data_map.put("Work_Phone4",getlead_info.get("T_l_phone_travail_P"));
			data_map.put("Ajouter_info_2",getlead_info.get("Do_you_like_to_enter_prospect_2_profile_details"));
			data_map.put("Prospect_Ville_2",getlead_info.get("Prospect_Ville_City"));
			data_map.put("Prospect_Sexe",getlead_info.get("Prospect_Sex2"));
			data_map.put("Prospect_portable_2",getlead_info.get("Prospect_Portable_Mobile"));
			data_map.put("Province_2",getlead_info.get("Prospect_Province2"));
			data_map.put("Prospect_Langue",getlead_info.get("Prospect_Langue_Language"));
			data_map.put("Preferred_communication1",getlead_info.get("Preferred_communication_2"));
			data_map.put("Prospect_T_l_phone_domestique",getlead_info.get("Prospect_T_l_phone_maison_Home_phone"));
			// 		Primary Contact
			data_map.put("Choose_Primary_Contact",getlead_info.get("Choose_Primary_Contact"));
			data_map.put("First_Name_Primary",getlead_info.get("Prospect_Contact_1_First_Name"));
			data_map.put("Last_Name_Primary",getlead_info.get("Prospect_Contact_1_Last_Name"));
			data_map.put("Work_Phone1",getlead_info.get("T_l_phone_travail_P1"));
			data_map.put("Langue_P",getlead_info.get("Prospect_Contact_1_Language"));
			data_map.put("Ville_P",getlead_info.get("Ville_City_P"));
			data_map.put("Home_Phone_Primary",getlead_info.get("Prospect_Contact_1_Home_Phone"));
			data_map.put("Cellphone_Primary",getlead_info.get("Prospect_Contact_1_Cellphone"));
			data_map.put("Type_of_contact_Primary",getlead_info.get("Prospect_Contact_1_Type_of_contact"));
			data_map.put("Email_Primary",getlead_info.get("Prospect_Contact_1_Email"));
			data_map.put("Sex_Primary",getlead_info.get("Prospect_Contact_1_Sex"));
			data_map.put("Province_Primary",getlead_info.get("Prospect_Contact_1_Province"));
			data_map.put("Preferred_communication_P",getlead_info.get("Preferred_communication_P"));
			// 		Secondary Contact
			data_map.put("Choose_Secondary_Contact",getlead_info.get("Choose_Secondary_Contact"));
			data_map.put("First_Name_S",getlead_info.get("Secondary_First_Name"));
			data_map.put("Last_Name_S",getlead_info.get("Secondary_Last_Name"));
			data_map.put("Work_Phone2",getlead_info.get("T_l_phone_travail_S"));
			data_map.put("Home_Phone_S",getlead_info.get("Secondary_Home_Phone"));
			data_map.put("Cellphone_S",getlead_info.get("Secondary_Cellphone"));
			data_map.put("Email_S",getlead_info.get("Secondary_Con_Email"));
			data_map.put("Language_s_S",getlead_info.get("Language_S"));
			data_map.put("Province_S",getlead_info.get("Secondary_Province"));
			data_map.put("Sex_S",getlead_info.get("Secondary_Sex"));
			data_map.put("Ville_S",getlead_info.get("Ville_City_S"));
			data_map.put("Type_of_Contact_S",getlead_info.get("Secondary_Contact"));
			data_map.put("Preferred_communication2",getlead_info.get("Preferred_communication_S"));
			// 		//Health care contact
			data_map.put("Choose_Healthcare_Contact",getlead_info.get("Choose_Healthcare_Contact"));
			data_map.put("First_Name_H",getlead_info.get("Healthcare_First_Name"));
			data_map.put("Last_Name_H",getlead_info.get("Healthcare_Last_Name"));
			data_map.put("Sex_H",getlead_info.get("Healthcare_Sex"));
			data_map.put("Work_Phone3",getlead_info.get("T_l_phone_travail_R"));
			data_map.put("Home_Phone_H",getlead_info.get("Healthcare_Home_Phone"));
			data_map.put("Email_H",getlead_info.get("Healthcare_Email"));
			data_map.put("Cellphone_H",getlead_info.get("Healthcare_contact_Cellphone"));
			data_map.put("Type_of_Contact_H",getlead_info.get("Healthcare_Contact"));
			data_map.put("Province_H",getlead_info.get("Healthcare_Province"));
			data_map.put("Ville_R",getlead_info.get("Ville_City_R"));
			data_map.put("Langue_R",getlead_info.get("Language_H"));
			data_map.put("Preferred_communication_R",getlead_info.get("Preferred_communication_R"));
			//Lead Source
			data_map.put("Type_prospect",getlead_info.get("Lead_type"));
			data_map.put("Origine_du_Prospect",getlead_info.get("Source_du_prospect"));
			data_map.put("Personal_reference",getlead_info.get("Personal_referral"));
			data_map.put("Precision",getlead_info.get("Precision"));
			data_map.put("Partners",getlead_info.get("Partners_Partenaires"));
			data_map.put("Traditional_Traditional_Marketing",getlead_info.get("Marketing_traditionnel_Trad_marketing"));
			data_map.put("RSSS_Health_care_network",getlead_info.get("RSSS"));
			data_map.put("Web",getlead_info.get("Web"));
			data_map.put("Other_Other",getlead_info.get("Other_Autre"));
			data_map.put("Reason",getlead_info.get("Reason"));
			//Lead Profile 1
			data_map.put("Type_de_client",getlead_info.get("Type_s_of_client"));
			data_map.put("Fourchette_budg_taire",getlead_info.get("Budget_range"));
			data_map.put("R_gion_recherch_e",getlead_info.get("Region"));
			data_map.put("Service_s_recherch_s",getlead_info.get("Type_s_of_service_s"));
			data_map.put("Date_de_d_m_nagement_souhait_e",getlead_info.get("Desired_moving_date"));
			data_map.put("Date_de_d_but_du_TAS",getlead_info.get("home_care_start_date"));
			data_map.put("Start_date_SAD_Home_care_start_date",getlead_info.get("home_care_start_date"));
			//Lead Profile 2
			data_map.put("Type_of_client_2",getlead_info.get("Profile_Type_s_de_client_Type_s_of_client"));
			data_map.put("Profile_Fourchette_budg_taire",getlead_info.get("Profile_Budget_range"));
			data_map.put("Profile_Date_de_d_m_nagement_souhait_e",getlead_info.get("Profile_Desired_moving_date"));
			data_map.put("Profile_R_gion_recherch_e",getlead_info.get("Profile_Region_Region"));
			data_map.put("Profile_Service_s_recherch_s",getlead_info.get("Profile_Type_s_de_service_s_Type_s_of_service_s"));
			data_map.put("Profile_Date_de_d_but_du_TAS",getlead_info.get("Profile_Start_date_SAD_Home_care_start_date"));
			/*extension-start*/
			data_map.put("Work_phone_Extension",getlead_info.get("Work_phone_Extension"));
			data_map.put("Work_phone_Extension_2",getlead_info.get("Work_phone_Extension_2"));
			data_map.put("Work_phone_Extension_p",getlead_info.get("Work_phone_Extension_p"));
			data_map.put("Work_phone_Extension_s",getlead_info.get("Work_phone_Extension_s"));
			data_map.put("Work_phone_Extension_R",getlead_info.get("Work_phone_Extension_R"));
			/*extension -ends*/
			creatorLeadResp = zoho.creator.createRecord(ownerName,appName,formName,data_map,Map(),"zoho_mail");
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Leads");
	dataMap.put("Process_Description","In CRM :Create and Update records in Creator");
	dataMap.put("In_Data",LeadID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
