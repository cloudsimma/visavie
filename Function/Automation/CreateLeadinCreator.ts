try 
{
	getlead_info = zoho.crm.getRecordById("Leads",LeadID);
	if(getlead_info.get("id") != null)
	{
		data_map = Map();
		ownerName = "lion_visavie";
		formName = "Leads";
		appName = "visavie";
		baseUrl = "creatorapp.zoho.com";
		//Lead information
		lead_owner_info = getlead_info.get("Owner");
		if(lead_owner_info != null)
		{
			data_map.put("Lead_Owner",lead_owner_info.get("name"));
		}
		// 		data_map.put("Lead_status",getlead_info.get("Lead_Status"));
		data_map.put("Lead_Name",getlead_info.get("Subject"));
		data_map.put("Deal_Type",getlead_info.get("Deal_Type"));
		data_map.put("Deal_Conversion",getlead_info.get("Deal_Conversion"));
		data_map.put("Personal_referral1",getlead_info.get("Personal_referral"));
		data_map.put("Zoho_CRMID",LeadID);
		Advisor_info = getlead_info.get("Advisors");
		if(Advisor_info != null)
		{
			data_map.put("Advisor_ID",Advisor_info.get("id"));
		}
		//Primary Contact
		data_map.put("First_Name",getlead_info.get("First_Name"));
		data_map.put("Last_Name",getlead_info.get("Last_Name"));
		data_map.put("Email",getlead_info.get("Email"));
		data_map.put("Phone",getlead_info.get("Phone"));
		data_map.put("City1",getlead_info.get("City"));
		data_map.put("Type_of_contact",getlead_info.get("Type_of_Contact"));
		data_map.put("Sex",getlead_info.get("Sex"));
		data_map.put("Mobile",getlead_info.get("Mobile"));
		data_map.put("Province1",getlead_info.get("Province"));
		data_map.put("Language",getlead_info.get("Language"));
		//Prospect contact 
		data_map.put("Prospect_Contact_First_Name",getlead_info.get("Prospect_First_Name"));
		data_map.put("Prospect_Contact_Last_Name",getlead_info.get("Prospect_Last_Name"));
		data_map.put("Prospect_Type_of_contact",getlead_info.get("Prospect_contact"));
		data_map.put("Prospect_Contact_Language",getlead_info.get("Prospect_Language"));
		data_map.put("Prospect_City",getlead_info.get("Prospect_City"));
		data_map.put("Prospect_Home_Phone",getlead_info.get("Prospect_Phone"));
		data_map.put("Prospect_Cellphone",getlead_info.get("Prospect_Mobile"));
		data_map.put("Prospect_Contact_Email",getlead_info.get("Prospect_Email"));
		data_map.put("Prospect_Contact_Sex",getlead_info.get("Prospect_Sex"));
		data_map.put("Prospect_Contact_Province",getlead_info.get("Prospect_Province"));
		// 		Secondary Contact
		data_map.put("Secondary_Contact_First_Name",getlead_info.get("Secondary_First_Name"));
		data_map.put("Secondary_Contact_Last_Name",getlead_info.get("Secondary_Last_Name"));
		data_map.put("Secondary_Contact_Email",getlead_info.get("Secondary_Con_Email"));
		// 		data_map.put("Secondary_Type_of_Contact",getlead_info.get("Secondary_Contact"));
		data_map.put("Secondary_Contact_Home_Phone",getlead_info.get("Secondary_Home_Phone"));
		data_map.put("Secondary_Contact_Cellphone",getlead_info.get("Secondary_Cellphone"));
		data_map.put("Secondary_Contact_Language",getlead_info.get("Secondary_Language"));
		data_map.put("Secondary_Contact_Province",getlead_info.get("Secondary_Province"));
		data_map.put("Secondary_Contact_Sex",getlead_info.get("Secondary_Sex"));
		data_map.put("Secondary_Contact_City",getlead_info.get("Secondary_City"));
		//Health care contact
		data_map.put("Healthcare_contact_Province",getlead_info.get("Healthcare_Province"));
		data_map.put("Healthcare_contact_City",getlead_info.get("Healthcare_City"));
		data_map.put("Healthcare_contact_Email",getlead_info.get("Healthcare_Email"));
		data_map.put("Healthcare_contact_Cellphone",getlead_info.get("Healthcare_contact_Cellphone"));
		data_map.put("Healthcare_Type_of_Contact",getlead_info.get("Healthcare_Contact"));
		data_map.put("Healthcare_contact_First_Name",getlead_info.get("Healthcare_First_Name"));
		data_map.put("Healthcare_contact_Last_Name",getlead_info.get("Healthcare_Last_Name"));
		data_map.put("Healthcare_contact_Home_Phone",getlead_info.get("Healthcare_Home_Phone"));
		data_map.put("Healthcare_contact_Sex",getlead_info.get("Healthcare_Sex"));
		//Lead Source
		// 		data_map.put("Lead_Source1",getlead_info.get("Lead_Source"));
		data_map.put("RSSS_Health_care_network",getlead_info.get("Health_care_network"));
		data_map.put("Ancien_client_Former_customer",getlead_info.get("Former_customer_Ancien_client"));
		data_map.put("Partners",getlead_info.get("Partners_Partenaires"));
		data_map.put("Web",getlead_info.get("Web"));
		data_map.put("Traditional_Traditional_Marketing",getlead_info.get("Traditional_marketing"));
		data_map.put("Friend_Family",getlead_info.get("Friend_Family_Ami_Famille"));
		data_map.put("Other_Other",getlead_info.get("Other_Autre"));
		//Address information
		data_map.put("Street",getlead_info.get("Street"));
		data_map.put("Country",getlead_info.get("Country"));
		data_map.put("Zip_Code",getlead_info.get("Zip_Code"));
		//Lead Profile
		data_map.put("Type_s_de_client_Type_s_of_client",getlead_info.get("Type_s_of_client"));
		data_map.put("Type_s_de_service_s_Type_s_of_service_s",getlead_info.get("Type_s_of_service_s"));
		data_map.put("Desired_moving_date",getlead_info.get("Desired_moving_date"));
		data_map.put("City_preference_moving_Move_in_pref_City",getlead_info.get("Preferred_city"));
		data_map.put("Budget_range",getlead_info.get("Budget_range"));
		data_map.put("Type_prospect_Lead_type",getlead_info.get("Lead_type"));
		data_map.put("Start_date_SAD_Home_care_start_date",getlead_info.get("home_care_start_date"));
		data_map.put("Region",getlead_info.get("Region"));
		data_map.put("General_comments",getlead_info.get("General_comments"));
		creatorLeadResp = zoho.creator.createRecord(ownerName,appName,formName,data_map,Map(),"zoho_mail");
		info creatorLeadResp;
		if(creatorLeadResp.get("code") == 3000)
		{
			creatorIDUpdateMap = Map();
			creatorIDUpdateMap.put("Creator_LeadID",creatorLeadResp.get("data").get("ID").toString());
			updateCreatorID = zoho.crm.updateRecord("Leads",LeadID,creatorIDUpdateMap);
			info updateCreatorID;
		}
	}
}
catch (e)
{
}