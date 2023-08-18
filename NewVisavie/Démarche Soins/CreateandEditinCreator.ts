try 
{
	get_deal = zoho.crm.getRecordById("Home_Care_Deal",Deal_ID);
	dataMap = Map();
	if(get_deal.get("dealNumber") == null)
	{
		dataMap.put("Home_Care_Number",get_deal.get("Request_unique_number_Num_ro_de_d_marche_unique"));
	}
	if(get_deal.get("Client") != null)
	{
		dataMap.put("Name",get_deal.get("Client").get("name"));
	}
	else
	{
		dataMap.put("Name",get_deal.get("Request_unique_number_Num_ro_de_d_marche_unique"));
	}
	if(get_deal.get("Client") != null)
	{
		if(get_deal.get("Client").get("id") != null)
		{
			get_contacts = zoho.crm.getRecordById("Contacts",get_deal.get("Client").get("id"));
			dataMap.put("Client_1_number",get_contacts.get("Client_Number"));
		}
	}
	else
	{
		dataMap.put("Client_1_number","");
	}
	if(get_deal.get("Client_2") != null)
	{
		if(get_deal.get("Client_2").get("id") != null)
		{
			get_contacts = zoho.crm.getRecordById("Contacts",get_deal.get("Client_2").get("id"));
			dataMap.put("Client_2_number",get_contacts.get("Client_Number"));
		}
	}
	else
	{
		dataMap.put("Client_2_number","");
	}
	update_response = zoho.crm.updateRecord("Home_Care_Deal",Deal_ID.toLong(),dataMap);
	getdeal_info = zoho.crm.getRecordById("Home_Care_Deal",Deal_ID);
	// 		info "getdeal_info" + getdeal_info;
	if(getdeal_info.get("id") != null)
	{
		ownerName = "lion_visavie";
		formName = "Home_Care_Deal";
		appName = "visavie";
		reportLinkName = "All_Home_Care_Deals";
		get_creator_deal = zoho.creator.getRecords(ownerName,appName,reportLinkName,"CRM_HomeCareDealId==\"" + Deal_ID + "\"",1,200,"zoho_mail");
		// 		info "get_creator_deal" + get_creator_deal;
		if(get_creator_deal.get("code") == 3000)
		{
			// 			update creator deal
			info "update record";
			Creator_housingDeal = Map();
			// 			// 			Home Care Deal Information
			Creator_housingDeal.put("CRM_HomeCareDealId",getdeal_info.get("id"));
			Creator_housingDeal.put("Home_care_deal_status",getdeal_info.get("Stage"));
			Creator_housingDeal.put("Ancien_CRM_ID",getdeal_info.get("Ancien_CRM_ID"));
			Creator_housingDeal.put("Home_care_deal_status","Active");
			Creator_housingDeal.put("Home_Care_Deal_Name",getdeal_info.get("Name"));
			Creator_housingDeal.put("Desired_home_care_start_date_Date_de_d_but_soins",getdeal_info.get("Desired_home_care_start_date_Date_de_d_but_soins"));
			if(getdeal_info.get("Creation_date") != null)
			{
				Creator_housingDeal.put("Deal_creation_date",getdeal_info.get("Creation_date").toDate());
			}
			Creator_housingDeal.put("Personal_referral",getdeal_info.get("Personal_referral"));
			Temporary_info = getdeal_info.get("Temporary_counselor");
			if(Temporary_info != null)
			{
				Creator_housingDeal.put("Temporary_ID",Temporary_info.get("id"));
			}
			else
			{
				Creator_housingDeal.put("Temporary_ID","");
			}
			counsilor_info = getdeal_info.get("Advisors");
			if(counsilor_info != null)
			{
				Creator_housingDeal.put("Counseiller_ID",counsilor_info.get("id"));
			}
			else
			{
				Creator_housingDeal.put("Counseiller_ID","");
			}
			// 			Profil client/Client profile
			client_1_info = getdeal_info.get("Client");
			if(client_1_info != null)
			{
				Creator_housingDeal.put("Contact1_CRM_ID",client_1_info.get("id"));
			}
			else
			{
				Creator_housingDeal.put("Contact1_CRM_ID","");
			}
			Creator_housingDeal.put("Budget_range_Gamme_de_budget",getdeal_info.get("Budget_range"));
			Creator_housingDeal.put("Desired_moving_date_Date_de_d_m_nagement_d_sir_e",getdeal_info.get("Desired_moving_date"));
			Creator_housingDeal.put("SAD_start_date",getdeal_info.get("SAD_start_date"));
			Creator_housingDeal.put("Service_s_sought",getdeal_info.get("Service_s_sought"));
			Creator_housingDeal.put("Type_s_of_client_Type_s_de_client",getdeal_info.get("Type_of_client"));
			Creator_housingDeal.put("R_gion_Region",getdeal_info.get("Region"));
			Creator_housingDeal.put("Preferred_city_to_move_in_Ville_de_pr_f_rence_d_em",getdeal_info.get("Preferred_city_to_move_in_Ville_de_pr_f_rence_d_em"));
			// 			Profile 2 Client/Client profile
			client_2_info = getdeal_info.get("Client_2");
			if(client_2_info != null)
			{
				Creator_housingDeal.put("Contact2_CRM_ID",client_2_info.get("id"));
			}
			else
			{
				Creator_housingDeal.put("Contact2_CRM_ID","");
			}
			Creator_housingDeal.put("Profile_2_Budget_range_Gamme_de_budget",getdeal_info.get("Profile_2_Budget_range"));
			Creator_housingDeal.put("Profile_2_Desired_moving_date",getdeal_info.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"));
			Creator_housingDeal.put("Profile_SAD_start_date",getdeal_info.get("Profile_SAD_start_date"));
			Creator_housingDeal.put("Profile_2_Type_s_of_client",getdeal_info.get("Profile_2_Type_s_of_client_Type_s_de_client"));
			Creator_housingDeal.put("Profile_2_Region_Region",getdeal_info.get("Profile_2_R_gion_Region"));
			Creator_housingDeal.put("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f",getdeal_info.get("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f"));
			Creator_housingDeal.put("Profile_Service_s_sought",getdeal_info.get("Profile_2_Service_s_sought"));
			// 			Care plan/Plan de soins
			Creator_housingDeal.put("Tasks_T_ches",getdeal_info.get("Tasks_T_ches"));
			Creator_housingDeal.put("Context_Context",getdeal_info.get("Context_Context"));
			Creator_housingDeal.put("General_health_Medication_Sant_g_n_rale_M_dic",getdeal_info.get("General_health_Medication_Sant_g_n_rale_M_dic"));
			Creator_housingDeal.put("Cognitive_health_Sant_cognitive",getdeal_info.get("Cognitive_health_Sant_cognitive"));
			Creator_housingDeal.put("Hygiene_contience_clothing_Hygi_ne_continence_ha",getdeal_info.get("Hygiene_contience_clothing_Hygi_ne_continence_ha"));
			Creator_housingDeal.put("Nutrition_Nutrition",getdeal_info.get("Nutrition_Nutrition"));
			Creator_housingDeal.put("Other_important_elements_Autres_l_ment_importants",getdeal_info.get("Other_important_elements_Autres_l_ment_importants"));
			Creator_housingDeal.put("Desired_schedule_Horaire_souhait",getdeal_info.get("Desired_schedule_Horaire_souhait"));
			Creator_housingDeal.put("Mobility_Mobilit",getdeal_info.get("Mobility_Mobilit"));
			// 			Deal source
			Creator_housingDeal.put("Precision",getdeal_info.get("Precision"));
			Creator_housingDeal.put("Deal_type",getdeal_info.get("Deal_type_Type_de_d_marche"));
			Creator_housingDeal.put("Lead_source",getdeal_info.get("Lead_source"));
			Creator_housingDeal.put("Health_care_RSS",getdeal_info.get("Health_care_network_RSSS"));
			Creator_housingDeal.put("Partners_Partenaires",getdeal_info.get("Partners_Partenaires"));
			Creator_housingDeal.put("Web",getdeal_info.get("Web"));
			Creator_housingDeal.put("Traditionnal_marketing_Marketing_traditionnel",getdeal_info.get("Traditionnal_marketing"));
			//Description de la demande/Description of the reque
			Creator_housingDeal.put("Comments",getdeal_info.get("Comments"));
			//update creator record
			get_deal = zoho.creator.getRecords("lion_visavie","visavie","All_Home_Care_Deals","CRM_HomeCareDealId==\"" + Deal_ID + "\"",1,200,"zoho_mail");
			if(get_deal.get("code") == 3000)
			{
				get_deal_data = get_deal.get("data").toMap();
				get_deal_id = get_deal_data.get("ID");
				update_deal = zoho.creator.updateRecord("lion_visavie","visavie","All_Home_Care_Deals",get_deal_id,Creator_housingDeal,Map(),"zoho_mail");
				info "update_deal" + update_deal;
			}
		}
		else
		{
			info "create record";
			// 			create deal in creator
			Creator_housingDeal = Map();
			// 			Home Care Deal Information
			Creator_housingDeal.put("CRM_HomeCareDealId",getdeal_info.get("id"));
			Creator_housingDeal.put("Home_care_deal_status",getdeal_info.get("Stage"));
			Creator_housingDeal.put("Home_Care_Number",getdeal_info.get("Home_Care_Number"));
			Creator_housingDeal.put("Ancien_CRM_ID",getdeal_info.get("Ancien_CRM_ID"));
			Creator_housingDeal.put("Home_care_deal_status","Active");
			Creator_housingDeal.put("Home_Care_Deal_Name",getdeal_info.get("Name"));
			Creator_housingDeal.put("Desired_home_care_start_date_Date_de_d_but_soins",getdeal_info.get("Desired_home_care_start_date_Date_de_d_but_soins"));
			if(getdeal_info.get("Creation_date") != null)
			{
				Creator_housingDeal.put("Deal_creation_date",getdeal_info.get("Creation_date").toDate());
			}
			Creator_housingDeal.put("Personal_referral",getdeal_info.get("Personal_referral"));
			Temporary_info = getdeal_info.get("Temporary_counselor");
			if(Temporary_info != null)
			{
				Creator_housingDeal.put("Temporary_ID",Temporary_info.get("id"));
			}
			counsilor_info = getdeal_info.get("Advisors");
			if(counsilor_info != null)
			{
				Creator_housingDeal.put("Counseiller_ID",counsilor_info.get("id"));
			}
			// 						Profil client/Client profile
			client_1_info = getdeal_info.get("Client");
			if(client_1_info != null)
			{
				Creator_housingDeal.put("Contact1_CRM_ID",client_1_info.get("id"));
			}
			Creator_housingDeal.put("Budget_range_Gamme_de_budget",getdeal_info.get("Budget_range"));
			Creator_housingDeal.put("Desired_moving_date_Date_de_d_m_nagement_d_sir_e",getdeal_info.get("Desired_moving_date"));
			Creator_housingDeal.put("SAD_start_date",getdeal_info.get("SAD_start_date"));
			Creator_housingDeal.put("Service_s_sought",getdeal_info.get("Service_s_sought"));
			Creator_housingDeal.put("Type_s_of_client_Type_s_de_client",getdeal_info.get("Type_of_client"));
			Creator_housingDeal.put("R_gion_Region",getdeal_info.get("Region"));
			Creator_housingDeal.put("Preferred_city_to_move_in_Ville_de_pr_f_rence_d_em",getdeal_info.get("Preferred_city_to_move_in_Ville_de_pr_f_rence_d_em"));
			// 			Profile 2 Client/Client profile
			client_2_info = getdeal_info.get("Client_2");
			if(client_2_info != null)
			{
				Creator_housingDeal.put("Contact2_CRM_ID",client_2_info.get("id"));
			}
			Creator_housingDeal.put("Profile_2_Budget_range_Gamme_de_budget",getdeal_info.get("Profile_2_Budget_range"));
			Creator_housingDeal.put("Profile_2_Desired_moving_date",getdeal_info.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"));
			Creator_housingDeal.put("Profile_SAD_start_date",getdeal_info.get("Profile_SAD_start_date"));
			Creator_housingDeal.put("Profile_2_Type_s_of_client",getdeal_info.get("Profile_2_Type_s_of_client_Type_s_de_client"));
			Creator_housingDeal.put("Profile_2_Region_Region",getdeal_info.get("Profile_2_R_gion_Region"));
			Creator_housingDeal.put("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f",getdeal_info.get("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f"));
			Creator_housingDeal.put("Profile_Service_s_sought",getdeal_info.get("Profile_2_Service_s_sought"));
			// 						Care plan/Plan de soins
			Creator_housingDeal.put("Tasks_T_ches",getdeal_info.get("Tasks_T_ches"));
			Creator_housingDeal.put("Context_Context",getdeal_info.get("Context_Context"));
			Creator_housingDeal.put("General_health_Medication_Sant_g_n_rale_M_dic",getdeal_info.get("General_health_Medication_Sant_g_n_rale_M_dic"));
			Creator_housingDeal.put("Cognitive_health_Sant_cognitive",getdeal_info.get("Cognitive_health_Sant_cognitive"));
			Creator_housingDeal.put("Hygiene_contience_clothing_Hygi_ne_continence_ha",getdeal_info.get("Hygiene_contience_clothing_Hygi_ne_continence_ha"));
			Creator_housingDeal.put("Nutrition_Nutrition",getdeal_info.get("Nutrition_Nutrition"));
			Creator_housingDeal.put("Other_important_elements_Autres_l_ment_importants",getdeal_info.get("Other_important_elements_Autres_l_ment_importants"));
			Creator_housingDeal.put("Desired_schedule_Horaire_souhait",getdeal_info.get("Desired_schedule_Horaire_souhait"));
			Creator_housingDeal.put("Mobility_Mobilit",getdeal_info.get("Mobility_Mobilit"));
			// 			Deal source
			Creator_housingDeal.put("Precision",getdeal_info.get("Precision"));
			Creator_housingDeal.put("Deal_type",getdeal_info.get("Deal_type_Type_de_d_marche"));
			Creator_housingDeal.put("Lead_source",getdeal_info.get("Lead_source"));
			Creator_housingDeal.put("Health_care_RSS",getdeal_info.get("Health_care_network_RSSS"));
			Creator_housingDeal.put("Partners_Partenaires",getdeal_info.get("Partners_Partenaires"));
			Creator_housingDeal.put("Web",getdeal_info.get("Web"));
			Creator_housingDeal.put("Traditionnal_marketing_Marketing_traditionnel",getdeal_info.get("Traditionnal_marketing"));
			// 			Description de la demande/Description of the reque
			Creator_housingDeal.put("Comments",getdeal_info.get("Comments"));
			info Creator_housingDeal;
			creatorDealResp = zoho.creator.createRecord("lion_visavie","visavie","Home_Care_Deal",Creator_housingDeal,Map(),"zoho_mail");
			info "creatorDealResp" + creatorDealResp;
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","HomecareDeal");
	dataMap.put("Process_Description","Create and Update records in Creator");
	dataMap.put("In_Data",Deal_ID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
