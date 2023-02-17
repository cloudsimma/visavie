try 
{
	getContact = zoho.crm.getRecordById("Contacts",ContactID);
	//	info contact_info;
	update_number = Map();
	if(getContact.get("Client_Number") == null && getContact.get("Contact_Type") == "Client")
	{
		update_number.put("Client_Number",getContact.get("Num_ro_Client"));
		updatecontacts = zoho.crm.updateRecord("Contacts",ContactID.toLong(),update_number);
		info "updatecontacts" + updatecontacts;
	}
	contact_info = zoho.crm.getRecordById("Contacts",ContactID);
	info "contact_info" + contact_info;
	if(contact_info.get("id") != null)
	{
		contact_map = Map();
		Owner_name = "lion_visavie";
		app_name = "visavie";
		form_linkname = "Contacts";
		report_name = "All_Contacts";
		getData = zoho.creator.getRecords(Owner_name,app_name,report_name,"ZohoCRM_ID == \"" + ContactID + "\"",1,200,"zoho_mail");
		if(getData.get("code") == 3000)
		{
			contact_info = zoho.crm.getRecordById("Contacts",ContactID.toLong());
			datamap = Map();
			layout_info = contact_info.get("Layout");
			if(layout_info != null)
			{
				datamap.put("Layout",layout_info.get("name"));
			}
			if(layout_info.get("name") == "Contact - Others")
			{
				datamap.put("Type_of_contact1",contact_info.get("Type_de_contact"));
				datamap.put("Address_Line",contact_info.get("Line_1"));
			}
			else if(layout_info.get("name") == "Contact - Client")
			{
				datamap.put("Address_Line",contact_info.get("Adresse"));
			}
			datamap.put("Contact_Number",contact_info.get("Client_Number"));
			datamap.put("Ancien_CRM_ID",contact_info.get("Ancien_CRM_ID"));
			datamap.put("ZohoCRM_ID",contact_info.get("id"));
			datamap.put("Full_Name",contact_info.get("Full_Name"));
			datamap.put("First_Name",contact_info.get("First_Name"));
			datamap.put("Last_Name1",contact_info.get("Last_Name"));
			datamap.put("Name",contact_info.get("Nom_de_jeune_fille"));
			datamap.put("Work_Phone",contact_info.get("T_l_phone_maison"));
			// 			if(contact_info.get("T_l_phone_maison") != null)
			// 			{
			// 				Work_Phone = contact_info.get("T_l_phone_maison");
			// 				getworkNumber = Work_Phone.remove(".");
			// 				FinalworkNumber = "+1" + getworkNumber;
			// 				datamap.put("Work_Phone",FinalworkNumber);
			// 			}
			datamap.put("Kind_of_contact",contact_info.get("Contact_Type"));
			datamap.put("Preferred_communication",contact_info.get("Preferred_communication1"));
			datamap.put("Language_s",contact_info.get("language_spoken1"));
			if(contact_info.get("Date_of_Birth") != null)
			{
				datamap.put("Date_of_Birth",contact_info.get("Date_of_Birth").toString("dd-MMM-yyyy"));
			}
			else
			{
				datamap.put("Date_of_Birth","");
			}
			datamap.put("Sex",contact_info.get("Sexe"));
			datamap.put("Cell_Phone",contact_info.get("Cellulaire"));
			datamap.put("Home_Phone",contact_info.get("T_l_phone_travail"));
			datamap.put("Email",contact_info.get("E_mail_Courriel_1"));
			// 		//Address 
			// 			datamap.put("Address_Line",contact_info.get("Adresse"));
			datamap.put("Postal_code",contact_info.get("Postal_code"));
			datamap.put("Provinces",contact_info.get("Provinces"));
			datamap.put("Ville_City",contact_info.get("Ville_City"));
			// 		//Accommodation sought
			datamap.put("Budget_range",contact_info.get("Budget_range"));
			datamap.put("Preference_on_the_size_of_the_residence",contact_info.get("Taille_de_la_r_sidence"));
			datamap.put("Notes_Accomodation",contact_info.get("Notes_h_bergement"));
			datamap.put("Type_s_of_accommodation_sought",contact_info.get("Type_de_logement"));
			datamap.put("Client_type_s",contact_info.get("Type_de_client"));
			// 				//Autonomy Assessment				   
			datamap.put("Hygiene",contact_info.get("Hygiene"));
			datamap.put("Dressing",contact_info.get("Habillement"));
			datamap.put("Nutrition",contact_info.get("Alimentation"));
			datamap.put("Urinary_incontinence",contact_info.get("Incontinence"));
			datamap.put("Faecal_incontinence",contact_info.get("Incontinence_f_cale"));
			datamap.put("Use_of_toilets",contact_info.get("Utilisation_des_toilettes"));
			datamap.put("Vision",contact_info.get("Vision"));
			datamap.put("Hearing",contact_info.get("Audition"));
			datamap.put("Communication1",contact_info.get("Communication1"));
			datamap.put("Notes_Autonomy_Assessment",contact_info.get("Note_valuation"));
			// 				//Mobility/Mobility					
			datamap.put("Mobility_equipment",contact_info.get("quipement_pour_mobilit"));
			datamap.put("Indoor_mobility",contact_info.get("D_placements_l_int_rieur"));
			datamap.put("Transfer_assistance",contact_info.get("Transferts"));
			datamap.put("Notes_Mobility",contact_info.get("Notes_Mobility"));
			//Médication/Medication		   
			datamap.put("Medication_management",contact_info.get("Distribution"));
			datamap.put("Oxygene",contact_info.get("Oxig_ne"));
			datamap.put("Insulin_injection",contact_info.get("Insulin_injection"));
			datamap.put("Notes_Medication",contact_info.get("Notes_4"));
			//État neurocognitif/Neurocognitive state
			datamap.put("Memory_impairment",contact_info.get("Memoiry"));
			datamap.put("Orientation_disorder",contact_info.get("Orientation_disorder"));
			datamap.put("Notes_Neurocognitive_State",contact_info.get("Notes_5"));
			datamap.put("Type_s_of_neurocognitive_disorder",contact_info.get("Dementia"));
			datamap.put("Aggressiveness",contact_info.get("Agressivit"));
			datamap.put("Wandering",contact_info.get("Wandering"));
			//Activities domestic life - Inst. Act. Daily living			
			datamap.put("Meals",contact_info.get("Repas"));
			datamap.put("Notes_IADLs",contact_info.get("Notes_6"));
			datamap.put("Laundry",contact_info.get("Laundry"));
			datamap.put("Housekeeping",contact_info.get("Housekeeping_frequency"));
			//Other/Other	   
			datamap.put("Smoker",contact_info.get("Fumeur"));
			datamap.put("Pet_Animal",contact_info.get("Pet"));
			datamap.put("Protection_mandate",contact_info.get("Protection_mandate"));
			datamap.put("Notes_Other",contact_info.get("Notes_3"));
			datamap.put("Evaluation_s_available_Avail_rating_s",contact_info.get("Available_evaluation_s"));
			datamap.put("Benefit_from_the_help_of_the_CLSC",contact_info.get("Benefit_from_the_help_of_the_CLSC"));
			datamap.put("Procuration_disponible",contact_info.get("Procuration_disponible"));
			//Comments/Comments				
			datamap.put("Interests_specifics",contact_info.get("Comments_Activities_Interests_particularities"));
			info datamap;
			creatorId = getData.get("data").get(0).get("ID");
			updatercreator_respond = zoho.creator.updateRecord(Owner_name,app_name,report_name,creatorId.toLong(),datamap,Map(),"zoho_mail");
			info updatercreator_respond;
		}
		else
		{
			contact_map = Map();
			// 	/*Informations client/Client information*/
			datamap = Map();
			layout_info = contact_info.get("Layout");
			if(layout_info != null)
			{
				datamap.put("Layout",layout_info.get("name"));
			}
			if(layout_info.get("name") == "Contact - Others")
			{
				datamap.put("Type_of_contact1",contact_info.get("Type_de_contact"));
				datamap.put("Address_Line",contact_info.get("Line_1"));
			}
			else if(layout_info.get("name") == "Contact - Client")
			{
				datamap.put("Address_Line",contact_info.get("Adresse"));
			}
			datamap.put("Contact_Number",contact_info.get("Client_Number"));
			datamap.put("Ancien_CRM_ID",contact_info.get("Ancien_CRM_ID"));
			datamap.put("ZohoCRM_ID",contact_info.get("id"));
			datamap.put("Full_Name",contact_info.get("Full_Name"));
			datamap.put("First_Name",contact_info.get("First_Name"));
			datamap.put("Last_Name1",contact_info.get("Last_Name"));
			datamap.put("Name",contact_info.get("Nom_de_jeune_fille"));
			datamap.put("Work_Phone",contact_info.get("T_l_phone_maison"));
			datamap.put("Kind_of_contact",contact_info.get("Contact_Type"));
			datamap.put("Preferred_communication",contact_info.get("Preferred_communication1"));
			datamap.put("Language_s",contact_info.get("language_spoken1"));
			if(contact_info.get("Date_of_Birth") != null)
			{
				datamap.put("Date_of_Birth",contact_info.get("Date_of_Birth").toString("dd-MMM-yyyy"));
			}
			else
			{
				datamap.put("Date_of_Birth","");
			}
			datamap.put("Sex",contact_info.get("Sexe"));
			datamap.put("Cell_Phone",contact_info.get("Cellulaire"));
			datamap.put("Home_Phone",contact_info.get("T_l_phone_travail"));
			datamap.put("Email",contact_info.get("E_mail_Courriel_1"));
			// 		// 		//Address 
			// 			datamap.put("Address_Line",contact_info.get("Adresse"));
			datamap.put("Postal_code",contact_info.get("Postal_code"));
			datamap.put("Provinces",contact_info.get("Provinces"));
			datamap.put("Ville_City",contact_info.get("Ville_City"));
			// 		//Accommodation sought
			datamap.put("Budget_range",contact_info.get("Budget_range"));
			datamap.put("Preference_on_the_size_of_the_residence",contact_info.get("Taille_de_la_r_sidence"));
			datamap.put("Notes_Accomodation",contact_info.get("Notes_h_bergement"));
			datamap.put("Type_s_of_accommodation_sought",contact_info.get("Type_de_logement"));
			datamap.put("Client_type_s",contact_info.get("Type_de_client"));
			// 				//Autonomy Assessment				   
			datamap.put("Hygiene",contact_info.get("Hygiene"));
			datamap.put("Dressing",contact_info.get("Habillement"));
			datamap.put("Nutrition",contact_info.get("Alimentation"));
			datamap.put("Urinary_incontinence",contact_info.get("Incontinence"));
			datamap.put("Faecal_incontinence",contact_info.get("Incontinence_f_cale"));
			datamap.put("Use_of_toilets",contact_info.get("Utilisation_des_toilettes"));
			datamap.put("Vision",contact_info.get("Vision"));
			datamap.put("Hearing",contact_info.get("Audition"));
			datamap.put("Communication1",contact_info.get("Communication1"));
			datamap.put("Notes_Autonomy_Assessment",contact_info.get("Note_valuation"));
			// 				//Mobility/Mobility					
			datamap.put("Mobility_equipment",contact_info.get("quipement_pour_mobilit"));
			datamap.put("Indoor_mobility",contact_info.get("D_placements_l_int_rieur"));
			datamap.put("Transfer_assistance",contact_info.get("Transferts"));
			datamap.put("Notes_Mobility",contact_info.get("Notes_Mobility"));
			//Médication/Medication		   
			datamap.put("Medication_management",contact_info.get("Distribution"));
			datamap.put("Oxygene",contact_info.get("Oxig_ne"));
			datamap.put("Insulin_injection",contact_info.get("Insulin_injection"));
			datamap.put("Notes_Medication",contact_info.get("Notes_4"));
			//État neurocognitif/Neurocognitive state
			datamap.put("Memory_impairment",contact_info.get("Memoiry"));
			datamap.put("Orientation_disorder",contact_info.get("Orientation_disorder"));
			datamap.put("Notes_Neurocognitive_State",contact_info.get("Notes_5"));
			datamap.put("Type_s_of_neurocognitive_disorder",contact_info.get("Dementia"));
			datamap.put("Aggressiveness",contact_info.get("Agressivit"));
			datamap.put("Wandering",contact_info.get("Wandering"));
			//Activities domestic life - Inst. Act. Daily living			
			datamap.put("Meals",contact_info.get("Repas"));
			datamap.put("Notes_IADLs",contact_info.get("Notes_6"));
			datamap.put("Laundry",contact_info.get("Laundry"));
			datamap.put("Housekeeping",contact_info.get("Housekeeping_frequency"));
			//Other/Other	   
			datamap.put("Smoker",contact_info.get("Fumeur"));
			datamap.put("Pet_Animal",contact_info.get("Pet"));
			datamap.put("Protection_mandate",contact_info.get("Protection_mandate"));
			datamap.put("Notes_Other",contact_info.get("Notes_3"));
			datamap.put("Evaluation_s_available_Avail_rating_s",contact_info.get("Available_evaluation_s"));
			datamap.put("Benefit_from_the_help_of_the_CLSC",contact_info.get("Benefit_from_the_help_of_the_CLSC"));
			datamap.put("Procuration_disponible",contact_info.get("Procuration_disponible"));
			//Comments/Comments				
			datamap.put("Interests_specifics",contact_info.get("Comments_Activities_Interests_particularities"));
			info "datamap" + datamap;
			creatorcontact_response = zoho.creator.createRecord(Owner_name,app_name,form_linkname,datamap,Map(),"zoho_mail");
			info creatorcontact_response;
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Contacts");
	dataMap.put("Process_Description","In CRM :Create and Update records in Creator");
	dataMap.put("In_Data",ContactID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}