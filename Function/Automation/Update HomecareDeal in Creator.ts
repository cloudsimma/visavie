if(id != null)
{
	homecaredeal = zoho.crm.getRecordById("Home_Care_Deal",id);
	creator_ID = homecaredeal.get("Zoho_Creator_Homecare_Deal_ID");
	info creator_ID;
	ownerName = "lion_visavie";
	appName = "visavie";
	formName = "Home_Care_Deal";
	report_name = "All_Home_Care_Deals";
	homecaredeal_map = Map();
	// 	Home Care Deal Information
	homecaredeal_map.put("Home_Care_Deal_Name",homecaredeal.get("Name"));
	homecaredeal_map.put("Email",homecaredeal.get("Email"));
	homecaredeal_map.put("Request_unique_number_Num_ro_de_d_marche_unique",homecaredeal.get("Request_unique_number_Num_ro_de_d_marche_unique"));
	homecaredeal_map.put("Customer_service_rep",homecaredeal.get("Customer_service_rep"));
	homecaredeal_map.put("Desired_home_care_start_date_Date_de_d_but_soins",homecaredeal.get("Desired_home_care_start_date_Date_de_d_but_soinsEdit"));
	homecaredeal_map.put("Lead_type",homecaredeal.get("Lead_type"));
	homecaredeal_map.put("Request_stages_for_home_care_services_Statuts_d_ma1",homecaredeal.get("Request_stages_for_home_care_services_Statuts_d_ma"));
	homecaredeal_map.put("Deal_creation_date_Date_de_cr_ation_de_la_d_marche",homecaredeal.get("Deal_creation_date_Date_de_cr_ation_de_la_d_marche"));
	homecaredeal_map.put("Deal_Source_Source_of_the_approach1",homecaredeal.get("Deal_Source_Source_de_la_d_marche"));
	homecaredeal_map.put("Contact_persons_Personnes_contact",homecaredeal.get("Contact_persons_Personnes_contact"));
	homecaredeal_map.put("Deal_type_Type_de_d_marche",homecaredeal.get("Deal_type_Type_de_d_marche"));
	homecaredeal_map.put("Personal_referral",homecaredeal.get("Personal_referral"));
	advisor = homecaredeal.get("Advisors");
	if(advisor != null)
	{
		homecaredeal_map.put("Advisor_CRM_ID",advisor.get("id"));
	}
	// 	// 	Profil client/Client profile
	contact_info1 = homecaredeal.get("Client");
	if(contact_info1 != null)
	{
		homecaredeal_map.put("Contact1_CRM_ID",contact_info1.get("id"));
	}
	homecaredeal_map.put("Budget_range_Gamme_de_budget",homecaredeal.get("Budget_range_Gamme_de_budget"));
	homecaredeal_map.put("Desired_moving_date_Date_de_d_m_nagement_d_sir_e",homecaredeal.get("Desired_moving_date_Date_de_d_m_nagement_d_sir_e"));
	homecaredeal_map.put("Commentaires_g_n_raux_General_comments",homecaredeal.get("Commentaires_g_n_raux_General_comments"));
	homecaredeal_map.put("Type_s_of_client_Type_s_de_client",homecaredeal.get("Type_s_of_client_Type_s_de_client"));
	homecaredeal_map.put("R_gion_Region",homecaredeal.get("R_gion_Region"));
	homecaredeal_map.put("Preferred_city_to_move_in_Ville_de_pr_f_rence_d_em",homecaredeal.get("Preferred_city_to_move_in_Ville_de_pr_f_rence_d_em"));
	contact_info2 = homecaredeal.get("Client_2");
	if(contact_info2 != null)
	{
		homecaredeal_map.put("Contact2_CRM_ID",contact_info2.get("id"));
	}
	homecaredeal_map.put("Profile_2_Budget_range_Gamme_de_budget",homecaredeal.get("Profile_2_Budget_range_Gamme_de_budget"));
	homecaredeal_map.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement",homecaredeal.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"));
	homecaredeal_map.put("Profile_2_Commentaires_g_n_raux_General_comments",homecaredeal.get("Profile_2_Commentaires_g_n_raux_General_comments"));
	homecaredeal_map.put("Profile_2_Type_s_of_client_Type_s_de_client",homecaredeal.get("Profile_2_Type_s_of_client_Type_s_de_client"));
	homecaredeal_map.put("Profile_2_R_gion_Region",homecaredeal.get("Profile_2_R_gion_Region"));
	homecaredeal_map.put("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f",homecaredeal.get("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f"));
	// 	// 	Care plan/Plan de soins
	homecaredeal_map.put("Tasks_T_ches",homecaredeal.get("Tasks_T_ches"));
	homecaredeal_map.put("Context_Context",homecaredeal.get("Context_Context"));
	homecaredeal_map.put("General_health_Medication_Sant_g_n_rale_M_dic",homecaredeal.get("General_health_Medication_Sant_g_n_rale_M_dic"));
	homecaredeal_map.put("Cognitive_health_Sant_cognitive",homecaredeal.get("Cognitive_health_Sant_cognitive"));
	homecaredeal_map.put("Mobility_Mobilit",homecaredeal.get("Mobility_Mobilit"));
	homecaredeal_map.put("Hygiene_contience_clothing_Hygi_ne_continence_ha",homecaredeal.get("Hygiene_contience_clothing_Hygi_ne_continence_ha"));
	homecaredeal_map.put("Nutrition_Nutrition",homecaredeal.get("Nutrition_Nutrition"));
	homecaredeal_map.put("Other_important_elements_Autres_l_ment_importants",homecaredeal.get("Other_important_elements_Autres_l_ment_importants"));
	homecaredeal_map.put("Desired_schedule_Horaire_souhait",homecaredeal.get("Desired_schedule_Horaire_souhait"));
	// 	Lead source
	homecaredeal_map.put("Former_customer_Ancien_client",homecaredeal.get("Former_customer_Ancien_client"));
	homecaredeal_map.put("Traditionnal_marketing_Marketing_traditionnel",homecaredeal.get("Traditionnal_marketing_Marketing_traditionnel"));
	homecaredeal_map.put("Health_care_network_RSSS",homecaredeal.get("Health_care_network_RSSS"));
	homecaredeal_map.put("Web",homecaredeal.get("Web"));
	homecaredeal_map.put("Friend_Family_Ami_Famille",homecaredeal.get("Friend_Family_Ami_Famille"));
	homecaredeal_map.put("Partners_Partenaires",homecaredeal.get("Partners_Partenaires"));
	homecaredeal_map.put("Other_Autre",homecaredeal.get("Other_Autre"));
	// contact type subform
	contact_subform_list = List();
	homecaredeal_contact_subform = homecaredeal.get("Subform_2");
	for each  contact_subform in homecaredeal_contact_subform
	{
		contact_subform_map = Map();
		contact_subform_map.put("First_Name",contact_subform.get("First_Name"));
		contact_subform_map.put("Name",contact_subform.get("Name1"));
		contact_subform_map.put("Address_Line",contact_subform.get("Address"));
		contact_subform_map.put("CRM_ContactID",contact_subform.get("id"));
		contact_subform_list.add(contact_subform_map);
	}
	// 	Residences subform
	residence_subform_list = List();
	homecaredeal_residence_subform = homecaredeal.get("Residence1");
	for each  residence_subform in homecaredeal_residence_subform
	{
		info "residence_subform" + residence_subform;
		residence_subform_map = Map();
		residence_subform_map.put("Residence_number",residence_subform.get("Residence_Numbers"));
		residence_subform_map.put("Date_field",residence_subform.get("Date_profile_sent"));
		residence_subform_map.put("Deal_ID",residence_subform.get("id"));
		residence_subform_list.add(residence_subform_map);
	}
	homecaredeal_map.put("Contact_Type",contact_subform_list);
	homecaredeal_map.put("Proposed_retirement_homes",residence_subform_list);
	// 	update creator record
	update_record = zoho.creator.updateRecord(ownerName,appName,report_name,creator_ID,homecaredeal_map,Map(),"zoho_mail");
	info update_record;
}