void migrate.Counselor()
{
	counselor_map = Map();
	getCounselor = zoho.crm.getRecords("Advisor",1,200,counselor_map,"zoho_one");
	for each  counselor in getCounselor
	{
		creator_map = Map();
		coun_map = counselor.toMap();
		counselor_id = coun_map.get("id");
		if(counselor_id != null)
		{
			if(counselor.get("Active_Status") == false)
			{
				creator_map.put("Advisor_Number",counselor.get("Advisor_Number"));
				creator_map.put("Advisor_Name",counselor.get("Name"));
				creator_map.put("Sex",counselor.get("Sex"));
				creator_map.put("Language",counselor.get("Languages"));
				creator_map.put("English_Web_Profile",counselor.get("English_Web_Profile"));
				creator_map.put("French_Web_Profile",counselor.get("French_Web_Profile"));
				creator_map.put("Mentor",counselor.get("Mentor"));
				creator_map.put("Birth_date",counselor.get("Birth_date"));
				creator_map.put("Description",counselor.get("Description"));
				creator_map.put("Ancien_CRM_ID",counselor.get("Ancien_CRM_ID"));
				// 				creator_map.put("Status",get_crm_advisor.get("Active_Status"));
				creator_map.put("CRM_AdvisorID",counselor.get("id"));
				creator_map.put("TPS_Number",counselor.get("TPS_Number"));
				creator_map.put("Company_name_If_applicable",counselor.get("Company_name_If_applicable"));
				creator_map.put("TVQ_Number",counselor.get("TVQ_Number"));
				creator_map.put("First_name",counselor.get("First_name"));
				// 				creator_map.put("Name",get_crm_advisor.get("Name"));
				creator_map.put("Line_1",counselor.get("Line_1"));
				creator_map.put("Line_2",counselor.get("Line_2"));
				creator_map.put("Postal_code",counselor.get("Postal_code"));
				creator_map.put("Province",counselor.get("Province"));
				creator_map.put("City",counselor.get("City"));
				creator_map.put("Home_phone_num",counselor.get("Home_phone_number"));
				creator_map.put("Mobile_phone_num",counselor.get("Mobile_phone_number"));
				creator_map.put("Work_phone_num",counselor.get("Work_phone_number"));
				creator_map.put("Email",counselor.get("Advisor_Email"));
				creator_map.put("Email_1",counselor.get("Personal_email"));
				info "creator_map" + creator_map;
				create_counselor_creator = zoho.creator.createRecord("lion_visavie","visavie","Advisor",creator_map,Map(),"zoho_one");
				info "create_counselor_creator" + create_counselor_creator;
			}
		}
	}
}