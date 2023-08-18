try 
{
	lead_map = Map();
	if(input.Language == "English")
	{
		if(input.decision == true)
		{
			lead_map.put("First_Namee",input.Name.first_name2);
			lead_map.put("Last_Name",input.Name.last_name2);
			lead_map.put("Preferred_communication",input.preffered);
			if(input.preffered == "Courriel/Email")
			{
				lead_map.put("Courriel_Email",input.Email);
			}
			if(input.preffered == "Téléphone cellulaire/Cell phone")
			{
				lead_map.put("Portable_Mobile",input.Cell_phone.toString());
			}
			if(input.preffered == "Téléphone maison/Home phone")
			{
				lead_map.put("T_l_phone_maison_Home_phone",input.Home_phone.toString());
			}
			if(input.preffered == "Téléphone travail/Work phone")
			{
				lead_map.put("T_l_phone_travail",input.Work_phone.toString());
			}
			lead_map.put("Work_phone_Extension",input.Work_phone_Extension);
			if(input.Types_of_service_you_are_looking_for.isEmpty() != true || input.Province.isEmpty() != true)
			{
				lead_map.put("Do_you_like_to_enter_prospect_1_profile_details","Oui/Yes");
			}
			lead_map.put("Type_s_of_service_s",input.Types_of_service_you_are_looking_for);
			lead_map.put("Region",input.Province);
			lead_map.put("home_care_start_date",input.Home_help_start_date);
			lead_map.put("Desired_moving_date",input.Desired_moving_date);
			lead_map.put("Preffered_Languages","Anglais/English");
		}
		else
		{
			lead_map.put("First_Namee",input.prospect_first_name);
			lead_map.put("Last_Name",input.person_last_name);
			lead_map.put("Preferred_communication",input.preffered);
			if(input.preffered == "Courriel/Email")
			{
				lead_map.put("Courriel_Email",input.Email);
			}
			if(input.preffered == "Téléphone cellulaire/Cell phone")
			{
				lead_map.put("Portable_Mobile",input.Cell_phone.toString());
			}
			if(input.preffered == "Téléphone maison/Home phone")
			{
				lead_map.put("T_l_phone_maison_Home_phone",input.Home_phone.toString());
			}
			if(input.preffered == "Téléphone travail/Work phone")
			{
				lead_map.put("T_l_phone_travail",input.Work_phone.toString());
			}
			lead_map.put("Work_phone_Extension",input.Work_phone_Extension);
			if(input.Types_of_service_you_are_looking_for.isEmpty() != true || input.Province.isEmpty() != true)
			{
				lead_map.put("Do_you_like_to_enter_prospect_1_profile_details","Oui/Yes");
			}
			lead_map.put("Type_s_of_service_s",input.Types_of_service_you_are_looking_for);
			lead_map.put("Region",input.Province);
			lead_map.put("home_care_start_date",input.Home_help_start_date);
			lead_map.put("Desired_moving_date",input.Desired_moving_date);
			if(Name.first_name2.isEmpty() != true && Name.last_name2.isEmpty() != true)
			{
				lead_map.put("Choose_Primary_Contact","Créer nouveau contact/Create new contact");
			}
			lead_map.put("Prospect_Contact_1_First_Name",input.Name.first_name2);
			lead_map.put("Prospect_Contact_1_Last_Name",input.Name.last_name2);
			lead_map.put("Prospect_Contact_1_Type_of_contact",input.relationship);
			lead_map.put("Preffered_Languages","Anglais/English");
		}
	}
	else if(input.Language == "French")
	{
		if(input.decision_fr == true)
		{
			lead_map.put("First_Namee",input.Nom1.first_name1);
			lead_map.put("Last_Name",input.Nom1.last_name1);
			// 			lead_map.put("First_Namee",input.Pr_nom);
			// 			lead_map.put("Last_Name",input.Nom);
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
			if(input.Province_fr.isEmpty() != true || input.type_service_fr.isEmpty() != true)
			{
				lead_map.put("Do_you_like_to_enter_prospect_1_profile_details","Oui/Yes");
			}
			lead_map.put("Region",input.Province_fr);
			lead_map.put("Type_s_of_service_s",input.type_service_fr);
			lead_map.put("home_care_start_date",input.date_de_demen_fr);
			lead_map.put("Desired_moving_date",input.Date_de_debut_fr);
			lead_map.put("Preffered_Languages","Français/French");
		}
		else
		{
			lead_map.put("First_Namee",input.Personne_Prenom_fr);
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
			if(input.Province_fr.isEmpty() != true || input.type_service_fr.isEmpty() != true)
			{
				lead_map.put("Do_you_like_to_enter_prospect_1_profile_details","Oui/Yes");
			}
			lead_map.put("Region",input.Province_fr);
			lead_map.put("Type_s_of_service_s",input.type_service_fr);
			lead_map.put("home_care_start_date",input.date_de_demen_fr);
			lead_map.put("Desired_moving_date",input.Date_de_debut_fr);
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
	lead_map.put("Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
	lead_map.put("Source_du_prospect","Web");
	lead_map.put("Web_s","Formulaire web/Web form");
	lead_map.put("Owner",4846491000001442001);
	lead_map.put("Personal_referral","Non/No");
	lead_map.put("Lead_Status_s","Prospect à être qualifié vente/Sales to be qualified lead");
	createLeadResponse = zoho.crm.createRecord("Leads",lead_map,Map(),"zoho_one");
	CRM_ID = createLeadResponse.get("id");
	if(CRM_ID != null)
	{
		getLead = zoho.crm.getRecordById("Leads",CRM_ID.toNumber(),Map(),"zoho_one");
		/*tracking starts*/
		if(getLead.get("id") != null)
		{
			dataMap = Map();
			dataMap.put("Lead_Name",getLead.get("First_Namee") + " " + getLead.get("Last_Name"));
			dataMap.put("Name",getLead.get("First_Namee") + " " + getLead.get("Last_Name"));
			dataMap.put("Email",getLead.get("Courriel_Email"));
			dataMap.put("Initial_Stage","Leads");
			dataMap.put("Lead_ID",getLead.get("id"));
			dataMap.put("Lead_origin",getLead.get("Lead_type"));
			dataMap.put("Lead_source_1",getLead.get("Source_du_prospect"));
			dataMap.put("Lead_Creation_Date",getLead.get("Creation_Date"));
			dataMap.put("Lead_CRM_ID",getLead.get("id"));
			dataMap.put("Lead_Stage","Lead Created");
			dataMap.put("Personal_reference",getLead.get("Personal_referral"));
			createTracking = zoho.crm.createRecord("Tracking",dataMap,Map(),"zoho_one");
			if(createTracking.get("id") != null)
			{
				updateLeadMap = Map();
				updateLeadMap.put("Tracking_Id",createTracking.get("id"));
				updateLeadMap.put("test_leadID",CRM_ID.toString());
				updateLead = zoho.crm.updateRecord("Leads",getLead.get("id").toNumber(),updateLeadMap,Map(),"zoho_one");
			}
			/* tracking ends*/
			lead_name = ifnull(getLead.get("First_Namee"),"") + " " + ifnull(getLead.get("Last_Name"),"");
			firstName = getLead.get("First_Namee");
			lastName = getLead.get("Last_Name");
			email = getLead.get("Courriel_Email");
			url = "https://crm.zoho.com/crm/org746753262/tab/Leads/" + CRM_ID;
			style = "text-decoration: none;background-color: #008CBA;color: white;padding: 6px;";
			mailContent = "<html><body>You have a new submission on your Visavie web profile form. <br><br>";
			if(firstName != null && firstName != "")
			{
				mailContent = mailContent + "First name: " + firstName + "<br><br>";
			}
			if(lastName != null && lastName != "")
			{
				mailContent = mailContent + "Last Name: " + lastName + "<br><br>";
			}
			if(email != null && email != "")
			{
				mailContent = mailContent + "Email: " + email + "<br><br>";
			}
			mailContent = mailContent + "<a style= '" + style + "' href='" + url + "'>View the rest of the submission in the application</a><br><br><br><br>";
			mailContent = mailContent + "<html><body>Vous avez une nouvelle soumission sur le formulaire de votre profil web Visavie. <br><br>";
			if(firstName != null && firstName != "")
			{
				mailContent = mailContent + "Prénom: " + firstName + "<br><br>";
			}
			if(lastName != null && lastName != "")
			{
				mailContent = mailContent + "Nom: " + lastName + "<br><br>";
			}
			if(email != null && email != "")
			{
				mailContent = mailContent + "Courriel: " + email + "<br><br>";
			}
			mailContent = mailContent + "<a style= '" + style + "' href='" + url + "'>Afficher le reste de la soumission dans l'application	</a><br><br></body></html>";
			sendmail
			[
				from :zoho.adminuserid
				to :"info@visavie.com"
				subject :"New Lead Assignment - " + lead_name
				message :mailContent
			]
			datamaps = Map();
			dataList = List();
			notes_map = Map();
			content = "The mail notification has been sent to info@visavie.com " + zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-04:00");
			notes_map.put("Note_Title","Web Form Mail Notification");
			notes_map.put("Note_Content",content);
			notes_map.put("Parent_Id",CRM_ID);
			notes_map.put("se_module","Leads");
			dataList.add(notes_map);
			datamaps.put("data",dataList);
			notecreate = zoho.crm.createRecord("Notes",notes_map,Map(),"zoho_one");
		}
	}
	else
	{
		error_response = "Response==" + createLeadResponse + "Mapping===" + lead_map;
		thisapp.addDeveloperLog("Creator : visavie Web form","Error Message : To create Leads records in CRM",input.ID.toString(),error_response);
	}
}
catch (e)
{
	thisapp.addDeveloperLog("Creator : visavie Web form","Create Leads records in CRM",input.ID.toString(),e);
}
