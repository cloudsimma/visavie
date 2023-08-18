try 
{
	getDeal = zoho.crm.getRecordById("Deals",DealID);
	update_number = Map();
	/*user login -starts*/
	userID = zoho.loginuserid;
	if(userID != null)
	{
		getUser = zoho.crm.searchRecords("users","(email:equals:" + userID + ")");
		if(getUser.size() > 0)
		{
			for each  userInfo in getUser.get("users")
			{
				if(getDeal.get("Login_User") == null)
				{
					update_number.put("Login_User",ifnull(userInfo.get("full_name"),""));
				}
			}
		}
	}
	/*user login -ends*/
	if(getDeal.get("Deal_Number") == null)
	{
		update_number.put("Deal_Number",getDeal.get("Num_ro_de_d_marche"));
	}
	if(getDeal.get("Contact") != null)
	{
		update_number.put("Deal_Name",getDeal.get("Contact").get("name"));
	}
	else
	{
		update_number.put("Deal_Name",getDeal.get("Num_ro_de_d_marche"));
	}
	if(getDeal.get("Contact") != null)
	{
		if(getDeal.get("Contact").get("id") != null)
		{
			get_contacts = zoho.crm.getRecordById("Contacts",getDeal.get("Contact").get("id"));
			update_number.put("Client_1_number",get_contacts.get("Client_Number"));
			update_number.put("Client_1_Provinces",get_contacts.get("Provinces"));
		}
	}
	else
	{
		update_number.put("Client_1_number","");
	}
	if(getDeal.get("Contacts") != null)
	{
		if(getDeal.get("Contacts").get("id") != null)
		{
			get_contacts = zoho.crm.getRecordById("Contacts",getDeal.get("Contacts").get("id"));
			update_number.put("Client_2_number",get_contacts.get("Client_Number"));
			update_number.put("Client_2_Provinces",get_contacts.get("Provinces"));
		}
	}
	else
	{
		update_number.put("Client_2_number","");
	}
	update_deal = zoho.crm.updateRecord("Deals",DealID,update_number);
	getdeal_info = zoho.crm.getRecordById("Deals",DealID);
	if(getdeal_info.get("id") != null)
	{
		ownerName = "lion_visavie";
		formName = "Deals";
		appName = "visavie";
		reportLinkName = "All_Deals";
		get_creator_deal = zoho.creator.getRecords(ownerName,appName,reportLinkName,"CRM_Deal_ID==\"" + DealID + "\"",1,200,"zoho_mail");
		if(get_creator_deal.get("code") == 3000)
		{
			//update creator deal
			Creator_housingDealMap = Map();
			Creator_housingDealMap.put("CRM_Deal_ID",getdeal_info.get("id"));
			Creator_housingDealMap.put("Ancien_CRM_ID",getdeal_info.get("Ancien_CRM_ID"));
			Creator_housingDealMap.put("Deal_Number",getdeal_info.get("Deal_Number"));
			Creator_housingDealMap.put("Subject_field",getdeal_info.get("Deal_Name"));
			Creator_housingDealMap.put("Stage",getdeal_info.get("Stage"));
			if(getdeal_info.get("Creation_date") != null)
			{
				Creator_housingDealMap.put("Date_Creation_date",getdeal_info.get("Creation_date").toDate());
			}
			else
			{
				Creator_housingDealMap.put("Date_Creation_date",zoho.currentdate.toString("dd-MMM-yyyy"));
			}
			Temporary_info = getdeal_info.get("Conseiller_temporaire_Temporary_counselor");
			if(Temporary_info != null)
			{
				Creator_housingDealMap.put("Counseiller_ID",Temporary_info.get("id"));
			}
			else
			{
				Creator_housingDealMap.put("Counseiller_ID","");
			}
			Advisor_info = getdeal_info.get("Counselor_Conseiller");
			if(Advisor_info != null)
			{
				Creator_housingDealMap.put("Advisor_ID",Advisor_info.get("id"));
			}
			else
			{
				Creator_housingDealMap.put("Advisor_ID","");
			}
			Creator_housingDealMap.put("Deal_CRM_Login",getdeal_info.get("Login_User"));
			// 			Creator_housingDealMap.put("Deal_type_Type_of_approach",getdeal_info.get("Deal_type_Type_de_d_marche"));
			Creator_housingDealMap.put("Deal_Source_Source_of_approach",getdeal_info.get("Deal_Source_Source_de_la_d_marche"));
			Creator_housingDealMap.put("Personal_referral",getdeal_info.get("Personal_referral"));
			// 			Client profile/Client profile
			Contact_info = getdeal_info.get("Contact");
			if(Contact_info != null)
			{
				Creator_housingDealMap.put("Contact1_CRM_ID",Contact_info.get("id"));
			}
			else
			{
				Creator_housingDealMap.put("Contact1_CRM_ID","");
			}
			Creator_housingDealMap.put("Budget_range_Gamme_de_budget",getdeal_info.get("Budget_range_Gamme_de_budget"));
			Creator_housingDealMap.put("Desired_moving_date",getdeal_info.get("Desired_moving_date"));
			Creator_housingDealMap.put("SAD_start_date",getdeal_info.get("SAD_start_date"));
			Creator_housingDealMap.put("Service_s_sought",getdeal_info.get("Service_s_sought"));
			Creator_housingDealMap.put("Type_s_of_client_Type_s_de_client",getdeal_info.get("Type_s_of_client_Type_s_de_client"));
			Creator_housingDealMap.put("Region",getdeal_info.get("Region"));
			Creator_housingDealMap.put("General_comments",getdeal_info.get("General_comments_Commentaires_g_n_raux"));
			Creator_housingDealMap.put("Preferred_city_to_move_in",getdeal_info.get("Preferred_city"));
			// 			Profile 2 Client/Client profile
			Contact_info2 = getdeal_info.get("Contacts");
			if(Contact_info2 != null)
			{
				Creator_housingDealMap.put("Contact2_CRM_ID",Contact_info2.get("id"));
			}
			else
			{
				Creator_housingDealMap.put("Contact2_CRM_ID","");
			}
			Creator_housingDealMap.put("Profile_2_Budget_range_Gamme_de_budget",getdeal_info.get("Profile_2_Budget_range_Gamme_de_budget"));
			Creator_housingDealMap.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement1",getdeal_info.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"));
			Creator_housingDealMap.put("Profile_SAD_start_date",getdeal_info.get("Profile_SAD_start_date"));
			Creator_housingDealMap.put("Profile_2_Commentaires_g_n_raux_General_comments",getdeal_info.get("Profile_2_Commentaires_g_n_raux_General_comments"));
			Creator_housingDealMap.put("Profile_2_Type_s_of_client_Type_s_de_client",getdeal_info.get("Profile_2_Type_s_of_client_Type_s_de_client"));
			Creator_housingDealMap.put("Profile_2_R_gion_Region",getdeal_info.get("Profile_2_R_gion_Region"));
			Creator_housingDealMap.put("Profile_Service_s_sought",getdeal_info.get("Profile_Service_s_sought"));
			Creator_housingDealMap.put("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f",getdeal_info.get("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f"));
			// Description de la demande/Description of the reque
			Creator_housingDealMap.put("Comments",getdeal_info.get("General_comments"));
			// Source of the approach/Deal Source
			Creator_housingDealMap.put("Deal_Type",getdeal_info.get("Deal_type_Type_de_d_marche"));
			Creator_housingDealMap.put("Lead_source_s",getdeal_info.get("Lead_source_1"));
			Creator_housingDealMap.put("RSSS",getdeal_info.get("Health_care_network_RSSS"));
			Creator_housingDealMap.put("Personal_referral",getdeal_info.get("Personal_referral"));
			Creator_housingDealMap.put("Partners",getdeal_info.get("Partners_Partenaires"));
			Creator_housingDealMap.put("Precision",getdeal_info.get("Precision"));
			Creator_housingDealMap.put("Web",getdeal_info.get("Web"));
			Creator_housingDealMap.put("Marketing_traditionnel",getdeal_info.get("Trade_marketing_1"));
			creatorId = get_creator_deal.get("data").get(0).get("ID");
			update_deal = zoho.creator.updateRecord("lion_visavie","visavie","All_Deals",creatorId.tolong(),Creator_housingDealMap,Map(),"zoho_mail");
		}
		else
		{
			// 			create deal in creator
			Creator_housingDealMap = Map();
			// 			Information générale/General information
			Creator_housingDealMap.put("CRM_Deal_ID",getdeal_info.get("id"));
			Creator_housingDealMap.put("Deal_Number",getdeal_info.get("Deal_Number"));
			Creator_housingDealMap.put("Ancien_CRM_ID",getdeal_info.get("Ancien_CRM_ID"));
			Creator_housingDealMap.put("Subject_field",getdeal_info.get("Deal_Name"));
			Creator_housingDealMap.put("Stage",getdeal_info.get("Stage"));
			Creator_housingDealMap.put("Deal_CRM_Login",getdeal_info.get("Login_User"));
			if(getdeal_info.get("Creation_date") != null)
			{
				Creator_housingDealMap.put("Date_Creation_date",getdeal_info.get("Creation_date").toDate());
			}
			else
			{
				Creator_housingDealMap.put("Date_Creation_date",zoho.currentdate.toString("dd-MMM-yyyy"));
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
			Creator_housingDealMap.put("Deal_Source_Source_of_approach",getdeal_info.get("Deal_Source_Source_de_la_d_marche"));
			Creator_housingDealMap.put("Personal_referral",getdeal_info.get("Personal_referral"));
			// 			Client profile/Client profile
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
			Creator_housingDealMap.put("General_comments",getdeal_info.get("General_comments_Commentaires_g_n_raux"));
			Creator_housingDealMap.put("Preferred_city_to_move_in",getdeal_info.get("Preferred_city"));
			// 			Profile 2 Client/Client profile
			Contact_info2 = getdeal_info.get("Contacts");
			if(Contact_info2 != null)
			{
				Creator_housingDealMap.put("Contact2_CRM_ID",Contact_info2.get("id"));
			}
			Creator_housingDealMap.put("Profile_2_Budget_range_Gamme_de_budget",getdeal_info.get("Profile_2_Budget_range_Gamme_de_budget"));
			Creator_housingDealMap.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement1",getdeal_info.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"));
			Creator_housingDealMap.put("Profile_SAD_start_date",getdeal_info.get("Profile_SAD_start_date"));
			Creator_housingDealMap.put("Profile_2_Commentaires_g_n_raux_General_comments",getdeal_info.get("Profile_2_Commentaires_g_n_raux_General_comments"));
			Creator_housingDealMap.put("Profile_2_Type_s_of_client_Type_s_de_client",getdeal_info.get("Profile_2_Type_s_of_client_Type_s_de_client"));
			Creator_housingDealMap.put("Profile_2_R_gion_Region",getdeal_info.get("Profile_2_R_gion_Region"));
			Creator_housingDealMap.put("Profile_Service_s_sought",getdeal_info.get("Profile_Service_s_sought"));
			Creator_housingDealMap.put("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f",getdeal_info.get("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f"));
			// 						Description de la demande/Description of the reque
			Creator_housingDealMap.put("Comments",getdeal_info.get("General_comments"));
			// 			Source of the approach/Deal Source
			Creator_housingDealMap.put("Deal_Type",getdeal_info.get("Deal_type_Type_de_d_marche"));
			Creator_housingDealMap.put("Lead_source_s",getdeal_info.get("Lead_source_1"));
			Creator_housingDealMap.put("RSSS",getdeal_info.get("Health_care_network_RSSS"));
			Creator_housingDealMap.put("Personal_referral",getdeal_info.get("Personal_referral"));
			Creator_housingDealMap.put("Partners",getdeal_info.get("Partners_Partenaires"));
			Creator_housingDealMap.put("Precision",getdeal_info.get("Precision"));
			Creator_housingDealMap.put("Web",getdeal_info.get("Web"));
			Creator_housingDealMap.put("Marketing_traditionnel",getdeal_info.get("Trade_marketing_1"));
			creatorDealResp = zoho.creator.createRecord(ownerName,appName,formName,Creator_housingDealMap,Map(),"zoho_mail");
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Deal");
	dataMap.put("Process_Description","IN CRM -Create and Update records in Creator");
	dataMap.put("In_Data",DealID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
