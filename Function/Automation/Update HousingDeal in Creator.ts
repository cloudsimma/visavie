if(id != null)
{
	getdeal_info = zoho.crm.getRecordById("Deals",id);
	Creator_Deal_ID = getdeal_info.get("Zoho_Creator_DealID");
	info Creator_Deal_ID;
	Owner_name = "lion_visavie";
	app_name = "visavie";
	report_name = "All_Deals";
	Creator_housingDealMap = Map();
	Creator_housingDealMap.put("Subject_field",getdeal_info.get("Deal_Name"));
	Creator_housingDealMap.put("CRM_Deal_ID",getdeal_info.get("id"));
	// 		Creator_housingDealMap.put("Stage",getdeal_info.get("Stage"));
	// 		Creator_housingDealMap.put("Date_Creation_date",getdeal_info.get("Creation_date"));
	Temporary_info = getdeal_info.get("Conseiller_temporaire");
	if(Temporary_info != null)
	{
		Creator_housingDealMap.put("Temporary_counselor",Temporary_info.get("name"));
	}
	Creator_housingDealMap.put("Deal_type",getdeal_info.get("Deal_type"));
	Account_info = getdeal_info.get("Account_Name");
	if(Account_info != null)
	{
		Creator_housingDealMap.put("Account_ID",Account_info.get("id"));
	}
	Creator_housingDealMap.put("Deal_type_Type_of_approach",getdeal_info.get("Deal_type_Type_de_d_marche"));
	Creator_housingDealMap.put("Deal_Source_Source_of_approach",getdeal_info.get("Deal_Source_Source_de_la_d_marche"));
	Creator_housingDealMap.put("Type_s_of_client_Type_s_de_client",getdeal_info.get("Type_s_of_client"));
	// 		Creator_housingDealMap.put("Lead_type",getdeal_info.get("Lead_type"));
	//	Creator_housingDealMap.put("Deal_unique_number_Num_ro_de_d_marche_unique",getdeal_info.get("Deal_Name"));
	// Client profile/Client profile
	Contact_info = getdeal_info.get("Contacts");
	if(Contact_info != null)
	{
		Creator_housingDealMap.put("Contact1_CRM_ID",Contact_info.get("id"));
	}
	Creator_housingDealMap.put("Personal_referral",getdeal_info.get("Personal_referral"));
	//         Advisor_info = getdeal_info.get("Advisors");
	// 		if ( Advisor_info != null ) 
	//         {
	// 			Creator_housingDealMap.put("Advisor_ID",Advisor_info.get("id"));
	// -
	//        }
	Creator_housingDealMap.put("Region",getdeal_info.get("Region"));
	Creator_housingDealMap.put("General_comments",getdeal_info.get("General_comments_Commentaires_g_n_raux"));
	Creator_housingDealMap.put("Desired_moving_date",getdeal_info.get("Desired_moving_date"));
	Creator_housingDealMap.put("Budget_range_Gamme_de_budget",getdeal_info.get("Budget_range_Gamme_de_budget"));
	Creator_housingDealMap.put("Preferred_city_to_move_in",getdeal_info.get("Preferred_city"));
	// 	Profile 2 Client/Client profile
	Contact_info2 = getdeal_info.get("Contacts");
	if(Contact_info2 != null)
	{
		Creator_housingDealMap.put("Contact2_CRM_ID",Contact_info2.get("id"));
	}
	Creator_housingDealMap.put("Profile_2_Budget_range_Gamme_de_budget",getdeal_info.get("Profile_2_Budget_range_Gamme_de_budget"));
	Creator_housingDealMap.put("Profile_2_Desired_moving_date_Date_de_d_m_nagement",getdeal_info.get("Profile_2_Desired_moving_date_Date_de_d_m_nagement"));
	Creator_housingDealMap.put("Profile_2_Commentaires_g_n_raux_General_comments",getdeal_info.get("Profile_2_Commentaires_g_n_raux_General_comments"));
	Creator_housingDealMap.put("Profile_2_Type_s_of_client_Type_s_de_client",getdeal_info.get("Profile_2_Type_s_of_client_Type_s_de_client"));
	Creator_housingDealMap.put("Profile_2_R_gion_Region",getdeal_info.get("Profile_2_R_gion_Region"));
	Creator_housingDealMap.put("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f",getdeal_info.get("Profile_2_Preferred_city_to_move_in_Ville_de_pr_f"));
	// Source of the approach/Deal Source
	Creator_housingDealMap.put("Former_customer_Ancien_client",getdeal_info.get("Former_customer_Ancien_client"));
	Creator_housingDealMap.put("Traditional_marketing_Traditional_Marketing",getdeal_info.get("Traditionnal_marketing_Marketing_traditionnel"));
	Creator_housingDealMap.put("Health_care_network_RSSS",getdeal_info.get("Health_care_network_RSSS"));
	Creator_housingDealMap.put("Other_Autre",getdeal_info.get("Other_Autre"));
	Creator_housingDealMap.put("Friend_Family_Ami_Famille",getdeal_info.get("Friend_Family_Ami_Famille"));
	Creator_housingDealMap.put("Web_s",getdeal_info.get("Web_s"));
	Creator_housingDealMap.put("Partners_Partners",getdeal_info.get("Partners_Partenaires"));
	// contact type subform
	contact_subform_list = List();
	deal_contact_subform = getdeal_info.get("Client_contact_Contact_cl");
	info "deal_contact_subform" + deal_contact_subform;
	for each  contact_subform in deal_contact_subform
	{
		contact_subform_map = Map();
		contact_subform_map.put("First_Name",contact_subform.get("Name1"));
		contact_subform_map.put("CRM_ContactID",contact_subform.get("id"));
		contact_subform_list.add(contact_subform_map);
		info contact_subform_list;
	}
	// 	Residences subform
	residence_subform_list = List();
	deal_residence_subform = getdeal_info.get("Subform_3");
	info "deal_residence_subform" + deal_residence_subform;
	for each  residence_subform in deal_residence_subform
	{
		residence_subform_map = Map();
		residence_subform_map.put("Usual_name",residence_subform.get("Name"));
		residence_subform_map.put("Deal_ID",residence_subform.get("id"));
		residence_subform_list.add(residence_subform_map);
		info residence_subform_list;
	}
	Creator_housingDealMap.put("Client_contact_Contact_cl",contact_subform_list);
	Creator_housingDealMap.put("Residences",residence_subform_list);
	// 	update creator record
	update_records = zoho.creator.updateRecord(Owner_name,app_name,report_name,Creator_Deal_ID,Creator_housingDealMap,Map(),"zoho_mail");
	info update_records;
}