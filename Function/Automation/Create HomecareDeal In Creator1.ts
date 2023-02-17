if(id != null)
{
	homecaredeal = zoho.crm.getRecordById("Home_Care_Deal",id);
	ownerName = "lion_visavie";
	formName = "Home_Care_Deal";
	appName = "visavie";
	baseUrl = "creatorapp.zoho.com";
	Creator_homecareDealMap = Map();
	// 	Home Care Deal Information
	Creator_homecareDealMap.put("Home_Care_Deal_Name",homecaredeal.get("Name"));
	Creator_homecareDealMap.put("Email",homecaredeal.get("Email"));
	Creator_homecareDealMap.put("Request_unique_number_Num_ro_de_d_marche_unique",homecaredeal.get("Request_unique_number_Num_ro_de_d_marche_unique"));
	Creator_homecareDealMap.put("Customer_service_rep",homecaredeal.get("Customer_service_rep"));
	Creator_homecareDealMap.put("Desired_home_care_start_date_Date_de_d_but_soins",homecaredeal.get("Desired_home_care_start_date_Date_de_d_but_soins"));
	Creator_homecareDealMap.put("Lead_type",homecaredeal.get("Lead_type"));
	Creator_homecareDealMap.put("Request_stages_for_home_care_services_Statuts_d_ma1",homecaredeal.get("Request_stages_for_home_care_services_Statuts_d_ma"));
	Creator_homecareDealMap.put("Deal_creation_date_Date_de_cr_ation_de_la_d_marche",homecaredeal.get("Deal_creation_date_Date_de_cr_ation_de_la_d_marche"));
	Creator_homecareDealMap.put("Deal_Source_Source_of_the_approach1",homecaredeal.get("Deal_Source_Source_de_la_d_marche"));
	Creator_homecareDealMap.put("Contact_persons_Personnes_contact",homecaredeal.get("Contact_persons_Personnes_contact"));
	Creator_homecareDealMap.put("Deal_type_Type_de_d_marche",homecaredeal.get("Deal_type_Type_de_d_marche"));
	Creator_homecareDealMap.put("Personal_referral",homecaredeal.get("Personal_referral"));
	Advisor_info = homecaredeal.get("Advisors");
	if(Advisor_info != null)
	{
		Creator_homecareDealMap.put("Advisor",Advisor_info.get("id"));
	}
	// Profil client/Client profile
	Client_info = homecaredeal.get("Client");
	if(Client_info != null)
	{
		Creator_homecareDealMap.put("Client",Client_info.get("id"));
	}
	Creator_homecareDealMap.put("Budget_range_Gamme_de_budget",homecaredeal.get("Budget_range_Gamme_de_budget"));
	Creator_homecareDealMap.put("Desired_moving_date_Date_de_d_m_nagement_d_sir_e",homecaredeal.get("Desired_moving_date_Date_de_d_m_nagement_d_sir_e"));
	Creator_homecareDealMap.put("Commentaires_g_n_raux_General_comments",homecaredeal.get("Commentaires_g_n_raux_General_comments"));
	Creator_homecareDealMap.put("Type_s_of_client_Type_s_de_client",homecaredeal.get("Type_s_of_client_Type_s_de_client"));
	Creator_homecareDealMap.put("R_gion_Region",homecaredeal.get("R_gion_Region"));
	Creator_homecareDealMap.put("Preferred_city_to_move_in_Ville_de_pr_f_rence_d_em",homecaredeal.get("Preferred_city_to_move_in_Ville_de_pr_f_rence_d_em"));
	// Profile 2 Client/Client profile
	Client_info2 = homecaredeal.get("Client_2");
	if(Client_info2 != null)
	{
		Creator_homecareDealMap.put("Client_2",Client_info2.get("id"));
	}
	Creator_homecareDealMap.put("Profile_2_Budget_range_Gamme_de_budget",homecaredeal.get("Profile_2_Budget_range_Gamme_de_budget"));
	Creator_homecareDealMap.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement",homecaredeal.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"));
	Creator_homecareDealMap.put("Profile_2_Commentaires_g_n_raux_General_comments",homecaredeal.get("Profile_2_Commentaires_g_n_raux_General_comments"));
	Creator_homecareDealMap.put("Profile_2_Type_s_of_client_Type_s_de_client",homecaredeal.get("Profile_2_Type_s_of_client_Type_s_de_client"));
	Creator_homecareDealMap.put("Profile_2_R_gion_Region",homecaredeal.get("Profile_2_R_gion_Region"));
	Creator_homecareDealMap.put("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f",homecaredeal.get("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f"));
	// 	Care plan/Plan de soins
	Creator_homecareDealMap.put("Tasks_T_ches",homecaredeal.get("Tasks_T_chesEdit"));
	Creator_homecareDealMap.put("Context_Context",homecaredeal.get("Context_Context"));
	Creator_homecareDealMap.put("General_health_Medication_Sant_g_n_rale_M_dic",homecaredeal.get("General_health_Medication_Sant_g_n_rale_M_dic"));
	Creator_homecareDealMap.put("Cognitive_health_Sant_cognitive",homecaredeal.get("Cognitive_health_Sant_cognitive"));
	Creator_homecareDealMap.put("Mobility_Mobilit",homecaredeal.get("Mobility_Mobilit"));
	Creator_homecareDealMap.put("Hygiene_contience_clothing_Hygi_ne_continence_ha",homecaredeal.get("Hygiene_contience_clothing_Hygi_ne_continence_ha"));
	Creator_homecareDealMap.put("Nutrition_Nutrition",homecaredeal.get("Nutrition_Nutrition"));
	Creator_homecareDealMap.put("Other_important_elements_Autres_l_ment_importants",homecaredeal.get("Other_important_elements_Autres_l_ment_importants"));
	Creator_homecareDealMap.put("Desired_schedule_Horaire_souhait",homecaredeal.get("Desired_schedule_Horaire_souhait"));
	// 	Lead source
	Creator_homecareDealMap.put("Former_customer_Ancien_client",homecaredeal.get("Former_customer_Ancien_client"));
	Creator_homecareDealMap.put("Traditionnal_marketing_Marketing_traditionnel",homecaredeal.get("Traditionnal_marketing_Marketing_traditionnel"));
	Creator_homecareDealMap.put("Health_care_network_RSSS",homecaredeal.get("Health_care_network_RSSS"));
	Creator_homecareDealMap.put("Web",homecaredeal.get("Web"));
	Creator_homecareDealMap.put("Friend_Family_Ami_Famille",homecaredeal.get("Friend_Family_Ami_Famille"));
	Creator_homecareDealMap.put("Partners_Partenaires",homecaredeal.get("Partners_Partenaires"));
	Creator_homecareDealMap.put("Other_Autre",homecaredeal.get("Other_Autre"));
}