try 
{
	lead_map = Map();
	det_map = Map();
	new_map = Map();
	Advisor_response = invokeurl
	[
		url :"https://www.zohoapis.com/crm/v2.1/Advisor/" + input.Counselor_ID.toLong()
		type :GET
		connection:"zoho_one"
	];
	for each  advisor_info in Advisor_response.get("data")
	{
		User = advisor_info.get("Counselor_user");
		if(User != null)
		{
			User_info = User.get("id");
			user_name = User.get("name");
		}
	}
	if(input.Language == "English")
	{
		if(input.decision == true)
		{
			lead_map.put("First_Namee",input.Name.first_name2);
			lead_map.put("Last_Name",input.Name.last_name2);
			lead_map.put("Preferred_communication",input.Preferred);
			if(input.Preferred == "Courriel/Email")
			{
				lead_map.put("Courriel_Email",input.Email);
			}
			if(input.Preferred == "Téléphone cellulaire/Cell phone")
			{
				lead_map.put("Portable_Mobile",input.Cell_phone.toString());
			}
			if(input.Preferred == "Téléphone maison/Home phone")
			{
				lead_map.put("T_l_phone_maison_Home_phone",input.Home_phone.toString());
			}
			if(input.Preferred == "Téléphone travail/Work phone")
			{
				lead_map.put("T_l_phone_travail",input.Work_phone.toString());
			}
			lead_map.put("Work_phone_Extension",input.Work_phone_Extension);
			if(Types_of_service_you_are_looking_for.isEmpty() != true || Province.isEmpty() != true)
			{
				lead_map.put("Do_you_like_to_enter_prospect_1_profile_details","Oui/Yes");
			}
			lead_map.put("Type_s_of_service_s",input.Types_of_service_you_are_looking_for);
			lead_map.put("Region",input.Province);
			lead_map.put("Desired_moving_date",input.Desired_moving_date);
			lead_map.put("Preffered_Languages","Anglais/English");
		}
		else
		{
			lead_map.put("First_Namee",input.Person_first_name);
			lead_map.put("Last_Name",input.Name_of_the_person);
			lead_map.put("Preferred_communication",input.Preferred);
			if(input.Preferred == "Courriel/Email")
			{
				lead_map.put("Courriel_Email",input.Email);
			}
			if(input.Preferred == "Téléphone cellulaire/Cell phone")
			{
				lead_map.put("Portable_Mobile",input.Cell_phone.toString());
			}
			if(input.Preferred == "Téléphone maison/Home phone")
			{
				lead_map.put("T_l_phone_maison_Home_phone",input.Home_phone.toString());
			}
			if(input.Preferred == "Téléphone travail/Work phone")
			{
				lead_map.put("T_l_phone_travail",input.Work_phone.toString());
			}
			lead_map.put("Work_phone_Extension",input.Work_phone_Extension);
			if(Types_of_service_you_are_looking_for.isEmpty() != true || Province.isEmpty() != true)
			{
				lead_map.put("Do_you_like_to_enter_prospect_1_profile_details","Oui/Yes");
			}
			lead_map.put("Type_s_of_service_s",input.Types_of_service_you_are_looking_for);
			lead_map.put("Region",input.Province);
			lead_map.put("Desired_moving_date",input.Desired_moving_date);
			if(Name.first_name2.isEmpty() != true && Name.last_name2.isEmpty() != true)
			{
				lead_map.put("Choose_Primary_Contact","Créer nouveau contact/Create new contact");
			}
			lead_map.put("Prospect_Contact_1_First_Name",input.Name.first_name2);
			lead_map.put("Prospect_Contact_1_Last_Name",input.Name.last_name2);
			lead_map.put("Prospect_Contact_1_Type_of_contact",input.Relationship);
			lead_map.put("Preffered_Languages","Anglais/English");
		}
	}
	else if(input.Language == "French")
	{
		if(input.decision_fr == true)
		{
			lead_map.put("First_Namee",input.Nom1.first_name1);
			lead_map.put("Last_Name",input.Nom1.last_name1);
			lead_map.put("Preferred_communication",input.Preffered_fr);
			if(input.Preffered_fr == "Courriel/Email")
			{
				lead_map.put("Courriel_Email",input.Email_fr);
			}
			if(input.Preffered_fr == "Téléphone cellulaire/Cell phone")
			{
				lead_map.put("Portable_Mobile",input.T_l_phone_Cellulaire.toString());
			}
			if(input.Preffered_fr == "Téléphone maison/Home phone")
			{
				lead_map.put("T_l_phone_maison_Home_phone",input.T_l_phone_maison.toString());
			}
			if(input.Preffered_fr == "Téléphone travail/Work phone")
			{
				lead_map.put("T_l_phone_travail",input.T_l_phone_travail.toString());
			}
			lead_map.put("Work_phone_Extension",input.Poste_de_t_l_phone_professionnel);
			lead_map.put("Region",input.Province_fr);
			lead_map.put("Type_s_of_service_s",input.type_service_fr);
			lead_map.put("Desired_moving_date",input.date_de_demen_fr);
			if(type_service_fr.isEmpty() != true || Province_fr.isEmpty() != true)
			{
				lead_map.put("Do_you_like_to_enter_prospect_1_profile_details","Oui/Yes");
			}
			lead_map.put("Preffered_Languages","Français/French");
		}
		else
		{
			lead_map.put("First_Namee",input.prospect_first_name);
			lead_map.put("Last_Name",input.Nom_de_la_personne);
			lead_map.put("Preferred_communication",input.Preffered_fr);
			if(input.Preffered_fr == "Courriel/Email")
			{
				lead_map.put("Courriel_Email",input.Email_fr);
			}
			if(input.Preffered_fr == "Téléphone cellulaire/Cell phone")
			{
				lead_map.put("Portable_Mobile",input.T_l_phone_Cellulaire.toString());
			}
			if(input.Preffered_fr == "Téléphone maison/Home phone")
			{
				lead_map.put("T_l_phone_maison_Home_phone",input.T_l_phone_maison.toString());
			}
			if(input.Preffered_fr == "Téléphone travail/Work phone")
			{
				lead_map.put("T_l_phone_travail",input.T_l_phone_travail.toString());
			}
			lead_map.put("Work_phone_Extension",input.Poste_de_t_l_phone_professionnel);
			if(type_service_fr.isEmpty() != true || Province_fr.isEmpty() != true)
			{
				lead_map.put("Do_you_like_to_enter_prospect_1_profile_details","Oui/Yes");
			}
			lead_map.put("Region",input.Province_fr);
			lead_map.put("Type_s_of_service_s",input.type_service_fr);
			lead_map.put("Desired_moving_date",input.date_de_demen_fr);
			if(Nom1.first_name1.isEmpty() != true && Nom1.last_name1.isEmpty() != true)
			{
				lead_map.put("Choose_Primary_Contact","Créer nouveau contact/Create new contact");
			}
			lead_map.put("Prospect_Contact_1_First_Name",input.Nom1.first_name1);
			lead_map.put("Prospect_Contact_1_Last_Name",input.Nom1.last_name1);
			lead_map.put("Prospect_Contact_1_Type_of_contact",input.Lien_avec_la_personne);
			lead_map.put("Preffered_Languages","Français/French");
		}
	}
	lead_map.put("Do_you_like_to_enter_prospect_2_profile_details","Non/No");
	lead_map.put("Lead_type","Demande web/Web inquiry");
	lead_map.put("Source_du_prospect","Web");
	lead_map.put("Web_s","Formulaire web/Web form");
	lead_map.put("Advisors",input.Counselor_ID.toLong());
	lead_map.put("Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
	lead_map.put("Counselor_User",User_info);
	lead_map.put("Personal_referral","Non/No");
	lead_map.put("Lead_Status_s","Prospect à être qualifié vente/Sales to be qualified lead");
	createLeadResponse = zoho.crm.createRecord("Leads",lead_map,Map(),"zoho_one");
	/*Email notification*/
	CRM_ID = createLeadResponse.get("id");
	if(CRM_ID != null)
	{
		v_lead = zoho.crm.getRecordById("Leads",CRM_ID.toLong(),det_map,"zoho_one");
		if(v_lead.get("id") != null)
		{
			/*tracking starts*/
			dataMap = Map();
			dataMap.put("Lead_Name",v_lead.get("First_Namee") + " " + v_lead.get("Last_Name"));
			dataMap.put("Name",v_lead.get("First_Namee") + " " + v_lead.get("Last_Name"));
			dataMap.put("Email",v_lead.get("Courriel_Email"));
			dataMap.put("Initial_Stage","Leads");
			dataMap.put("Lead_ID",v_lead.get("id"));
			dataMap.put("Lead_origin",v_lead.get("Lead_type"));
			dataMap.put("Lead_source_1",v_lead.get("Source_du_prospect"));
			dataMap.put("Lead_Creation_Date",v_lead.get("Creation_Date"));
			dataMap.put("Lead_CRM_ID",v_lead.get("id"));
			dataMap.put("Lead_Stage","Lead Created");
			dataMap.put("Personal_reference",v_lead.get("Personal_referral"));
			if(v_lead.get("Advisors") != null)
			{
				var1 = "";
				dataMap.put("Counselor_name",v_lead.get("Advisors").get("name"));
				dataMap.put("Counselor_ID",v_lead.get("Advisors").get("id"));
				/*user*/
				var1 = v_lead.get("Advisors").get("id");
				Advisor_response = invokeurl
				[
					url :"https://www.zohoapis.com/crm/v2.1/Advisor/" + var1
					type :GET
					connection:"zoho_one"
				];
				for each  advisor_info in Advisor_response.get("data")
				{
					if(advisor_info.get("Counselor_user") != null)
					{
						dataMap.put("Counselor_User",advisor_info.get("Counselor_user").get("id"));
					}
				}
			}
			createTracking = zoho.crm.createRecord("Tracking",dataMap,Map(),"zoho_one");
			if(createTracking.get("id") != null)
			{
				updateLeadMap = Map();
				updateLeadMap.put("Tracking_Id",createTracking.get("id"));
				updateLeadMap.put("test_leadID",CRM_ID.toString());
				updateLead = zoho.crm.updateRecord("Leads",v_lead.get("id").toNumber(),updateLeadMap,Map(),"zoho_one");
			}
			/* tracking ends*/
			// Counselor
			if(v_lead.containKey("Advisors") && v_lead.containKey("Advisors") != null)
			{
				adv_map = v_lead.get("Advisors");
				if(adv_map.containKey("id") && adv_map.containKey("id") != null)
				{
					v_adv = zoho.crm.getRecordById("Advisor",adv_map.get("id").toLong(),new_map,"zoho_one");
					if(v_adv.get("id") != null)
					{
						if(v_adv.containKey("Advisor_Email") && v_adv.containKey("Advisor_Email") != null)
						{
							url = "https://crm.zoho.com/crm/org746753262/tab/Leads/" + CRM_ID;
							lead_name = ifnull(v_lead.get("First_Namee"),"") + "" + ifnull(v_lead.get("Last_Name"),"");
							card = "<html><body>Bonjour " + v_adv.get("Name") + "!<br><br>Le prospect " + lead_name + " a été qualifié et a vous a été assigné par " + zoho.loginuser + ".<br><br>Merci<br><br>Hello " + v_adv.get("Name") + "!<br><br>The Lead has been qualified and assigned to you by " + zoho.loginuser + ".<br><br>Thank You</body><br><a href='" + url + "'>Voir prospect/View lead</a><br></html>";
							sendmail
							[
								from :zoho.adminuserid
								to :v_adv.get("Advisor_Email")
								subject :"Nouvelle alerte prospect/Lead assigned notification - " + lead_name
								message :card
							]
							datamaps = Map();
							dataList = List();
							notes_map = Map();
							content = "The mail notification has been sent to " + v_adv.get("Advisor_Email") + " " + zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-04:00");
							notes_map.put("Note_Title","Conseiller Mail Notification");
							notes_map.put("Note_Content",content);
							notes_map.put("Parent_Id",CRM_ID);
							notes_map.put("se_module","Leads");
							dataList.add(notes_map);
							datamaps.put("data",dataList);
							notecreate = zoho.crm.createRecord("Notes",notes_map,Map(),"zoho_one");
							info notecreate;
						}
					}
				}
			}
		}
	}
	else
	{
		error_response = "Response==" + createLeadResponse + "Mapping===" + lead_map;
		thisapp.addDeveloperLog("Creator : Counselor Web form","Error Message : To create Leads records in CRM",input.ID.toString(),error_response);
	}
}
catch (e)
{
	thisapp.addDeveloperLog("Creator : Counselor Web Form","Create Lead records in CRM",input.ID.toString(),e);
	// 	info e;
}
