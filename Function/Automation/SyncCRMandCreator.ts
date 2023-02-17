try 
{
	residence = zoho.crm.getRecordById("Residence",ResidenceID.toLong());
	//info  Residence_info;
	residence_map = Map();
	if(residence.get("Line_1") != null && residence.get("Line_1") != "")
	{
		if(residence.get("Adress_Adresse_1") == null)
		{
			residence_map.put("Adress_Adresse_1",residence.get("Line_1"));
		}
	}
	if(residence.get("Postal_code") != null && residence.get("Postal_code") != "")
	{
		if(residence.get("Postal_codes_Code_postal") == null)
		{
			residence_map.put("Postal_codes_Code_postal",residence.get("Postal_code"));
		}
	}
	if(residence.get("Province") != null && residence.get("Province") != "")
	{
		if(residence.get("Provinces") == null)
		{
			residence_map.put("Provinces",residence.get("Province"));
		}
	}
	if(residence.get("Primary_phone") != null && residence.get("Primary_phone") != "")
	{
		if(residence.get("Primary_phones_T_l_phone_principal") == null)
		{
			residence_map.put("Primary_phones_T_l_phone_principal",residence.get("Primary_phone"));
		}
	}
	if(residence.get("Region") != null && residence.get("Region") != "")
	{
		if(residence.get("Regions_R_gion") == null)
		{
			residence_map.put("Regions_R_gion",residence.get("Region"));
		}
	}
	if(residence.get("City") != null && residence.get("City") != "")
	{
		if(residence.get("City_Ville") == null)
		{
			residence_map.put("City_Ville",residence.get("City"));
		}
	}
	if(residence.get("Residence_number") == null)
	{
		residence_map.put("Residence_number",residence.get("Residence_Auto_number"));
	}
	info residence_map;
	updateResidence = zoho.crm.updateRecord("Residence",ResidenceID.toLong(),residence_map);
	info "=======================" + updateResidence;
	Residence_info = zoho.crm.getRecordById("Residence",ResidenceID.toLong());
	// 	info Residence_info;
	if(Residence_info.get("id") != null)
	{
		Owner_name = "lion_visavie";
		app_name = "visavie";
		form_linkname = "Residences";
		report_name = "All_Residences";
		getData = zoho.creator.getRecords(Owner_name,app_name,report_name,"CRM_ID == \"" + ResidenceID + "\"",1,200,"zoho_mail");
		if(getData.get("code") == 3000)
		{
			info "update";
			//Informations générales/General information
			datamap = Map();
			datamap.put("Usual_name",Residence_info.get("Name"));
			datamap.put("Legal_name",Residence_info.get("Legal_name"));
			datamap.put("Status",Residence_info.get("Status"));
			datamap.put("Owner",Residence_info.get("Owner1"));
			datamap.put("Ancien_CRM_ID",Residence_info.get("Ancien_CRM_ID"));
			datamap.put("Referral_agreement",Residence_info.get("Referral_payment_agreement_Entente_de_paiement_de"));
			datamap.put("Special_agreement_specification",Residence_info.get("Special_agreement_specification"));
			datamap.put("Language_s_spoken_by_the_personnel",Residence_info.get("Language_s_spoken_by_the_personnel"));
			//	datamap.put("Signed_agreement",Residence_info.get("Signed_agreement"));
			datamap.put("Number_of_units",Residence_info.get("Number_of_units"));
			datamap.put("Name_of_the_group",Residence_info.get("Nom_du_groupe"));
			datamap.put("Size_of_the_residence",Residence_info.get("Size_of_the_residence"));
			Advisor_info = Residence_info.get("Advisor");
			info "Advisor" + Advisor_info;
			if(Advisor_info != null)
			{
				datamap.put("Official_Advisor",Advisor_info.get("id"));
			}
			else
			{
				datamap.put("Official_Advisor","");
			}
			datamap.put("Notes",Residence_info.get("Notes"));
			//Coordonnées/Contact details
			datamap.put("Address_Line_1",Residence_info.get("Line_1"));
			datamap.put("Postal_code",Residence_info.get("Postal_code"));
			datamap.put("Province",Residence_info.get("Province"));
			datamap.put("Primary_phone",Residence_info.get("Primary_phone"));
			datamap.put("Region",Residence_info.get("Region"));
			datamap.put("City",Residence_info.get("City"));
			//Facturation/Billing
			datamap.put("Billing_Address_Line_1",Residence_info.get("Adress_Adresse_1"));
			datamap.put("Method_of_sending_invoicing",Residence_info.get("Method_of_sending_invoicing"));
			datamap.put("Code_postal_Postal_code",Residence_info.get("Postal_codes_Code_postal"));
			datamap.put("Province1",Residence_info.get("Provinces"));
			datamap.put("Primary_phone1",Residence_info.get("Primary_phones_T_l_phone_principal"));
			datamap.put("City1",Residence_info.get("City_Ville"));
			//Type(s) de client/Client type(s)
			datamap.put("Client_type_s",Residence_info.get("Client_Type"));
			datamap.put("Notes_clients_type_s",Residence_info.get("Notes_type_s_de_clients"));
			//Promotion(s) en vigueur/Current promotion(s)
			datamap.put("Promotion_1",Residence_info.get("Promotion_type"));
			datamap.put("Promotion_2",Residence_info.get("Promotion_2"));
			datamap.put("Promotion_3",Residence_info.get("Promotion_3"));
			if(Residence_info.get("Promotion_1_end_date") != null)
			{
				datamap.put("Promotion_1_end_date",Residence_info.get("Promotion_1_end_date").toString("dd-MMM-yyyy"));
			}
			else
			{
				datamap.put("Promotion_1_end_date","");
			}
			if(Residence_info.get("Promotion_2_end_date") != null)
			{
				datamap.put("Promotion_2_end_date",Residence_info.get("Promotion_2_end_date").toString("dd-MMM-yyyy"));
			}
			else
			{
				datamap.put("Promotion_2_end_date","");
			}
			if(Residence_info.get("Promotion_3_end_date") != null)
			{
				datamap.put("Promotion_3_end_date",Residence_info.get("Promotion_3_end_date").toString("dd-MMM-yyyy"));
			}
			else
			{
				datamap.put("Promotion_3_end_date","");
			}
			//Caract. & équipemements/Features & equipment
			datamap.put("Building",Residence_info.get("Building"));
			datamap.put("Housing_units",Residence_info.get("Housing_units"));
			datamap.put("Common_areas",Residence_info.get("Common_areas"));
			datamap.put("Notes_features",Residence_info.get("Notes_features"));
			//Service de repas/Meal service
			datamap.put("meal_day",Residence_info.get("meal_day"));
			datamap.put("meals_day",Residence_info.get("meals_day"));
			datamap.put("meals_day1",Residence_info.get("meals_day1"));
			datamap.put("Notes_repas",Residence_info.get("Meal_Notes1"));
			//Commerces intérieurs/Internal services	
			datamap.put("Internal_services",Residence_info.get("Accepts_personal_help"));
			datamap.put("Internal_services_Notes",Residence_info.get("Note_1"));
			//Services assist. à la pers./ Pers. assist. serv	
			datamap.put("Assistance_Services",Residence_info.get("Nurse"));
			datamap.put("Notes_21",Residence_info.get("Personal_assistance_Notes"));
			// Services à proximité/Services nearby
			datamap.put("Services_nearby",Residence_info.get("Service_nearby"));
			datamap.put("Notes_services_nearby",Residence_info.get("Services_Notes"));
			//	Services de la résidence/Residence services
			datamap.put("Residence_services",Residence_info.get("Services_de_la_r_sidence_Residence_services"));
			datamap.put("Notes_1",Residence_info.get("Notes_services"));
			//Loisirs/Activities
			datamap.put("Activities",Residence_info.get("Physiotherapist"));
			datamap.put("Notes4",Residence_info.get("Others"));
			datamap.put("CRM_ID",Residence_info.get("id"));
			creatorResidenceId = getData.get("data").get(0).get("ID");
			info "datamap" + datamap;
			updatercreator_respond = zoho.creator.updateRecord(Owner_name,app_name,report_name,creatorResidenceId.toLong(),datamap,Map(),"zoho_mail");
			info updatercreator_respond;
		}
		else
		{
			//Informations générales/General information
			info "Create";
			datamap = Map();
			datamap.put("Residence_number",Residence_info.get("Residence_number"));
			datamap.put("Usual_name",Residence_info.get("Name"));
			datamap.put("Owner",Residence_info.get("Owner1"));
			datamap.put("Legal_name",Residence_info.get("Legal_name"));
			datamap.put("Status",Residence_info.get("Status"));
			datamap.put("Ancien_CRM_ID",Residence_info.get("Ancien_CRM_ID"));
			datamap.put("Referral_agreement",Residence_info.get("Referral_payment_agreement_Entente_de_paiement_de"));
			datamap.put("Special_agreement_specification",Residence_info.get("Special_agreement_specification"));
			datamap.put("Language_s_spoken_by_the_personnel",Residence_info.get("Language_s_spoken_by_the_personnel"));
			//	datamap.put("Signed_agreement",Residence_info.get("Signed_agreement"));
			datamap.put("Number_of_units",Residence_info.get("Number_of_units"));
			datamap.put("Notes",Residence_info.get("Notes"));
			datamap.put("Name_of_the_group",Residence_info.get("Nom_du_groupe"));
			datamap.put("Size_of_the_residence",Residence_info.get("Size_of_the_residence"));
			Advisor_info = Residence_info.get("Advisor");
			if(Advisor_info != null)
			{
				datamap.put("Official_Advisor",Advisor_info.get("id"));
			}
			else
			{
				datamap.put("Official_Advisor","");
			}
			// 			//Coordonnées/Contact details
			datamap.put("Address_Line_1",Residence_info.get("Line_1"));
			datamap.put("Postal_code",Residence_info.get("Postal_code"));
			datamap.put("Province",Residence_info.get("Province"));
			datamap.put("Primary_phone",Residence_info.get("Primary_phone"));
			datamap.put("Region",Residence_info.get("Region"));
			datamap.put("City",Residence_info.get("City"));
			//Facturation/Billing
			datamap.put("Billing_Address_Line_1",Residence_info.get("Adress_Adresse_1"));
			datamap.put("Method_of_sending_invoicing",Residence_info.get("Method_of_sending_invoicing"));
			datamap.put("Code_postal_Postal_code",Residence_info.get("Postal_codes_Code_postal"));
			datamap.put("Province1",Residence_info.get("Provinces"));
			datamap.put("Primary_phone1",Residence_info.get("Primary_phones_T_l_phone_principal"));
			datamap.put("City1",Residence_info.get("City_Ville"));
			//Type(s) de client/Client type(s)
			datamap.put("Client_type_s",Residence_info.get("Client_Type"));
			datamap.put("Notes_clients_type_s",Residence_info.get("Notes_type_s_de_clients"));
			//Promotion(s) en vigueur/Current promotion(s)
			datamap.put("Promotion_1",Residence_info.get("Promotion_type"));
			datamap.put("Promotion_2",Residence_info.get("Promotion_2"));
			datamap.put("Promotion_3",Residence_info.get("Promotion_3"));
			if(Residence_info.get("Promotion_1_end_date") != null)
			{
				datamap.put("Promotion_1_end_date",Residence_info.get("Promotion_1_end_date").toString("dd-MMM-yyyy"));
			}
			if(Residence_info.get("Promotion_2_end_date") != null)
			{
				datamap.put("Promotion_2_end_date",Residence_info.get("Promotion_2_end_date").toString("dd-MMM-yyyy"));
			}
			if(Residence_info.get("Promotion_3_end_date") != null)
			{
				datamap.put("Promotion_3_end_date",Residence_info.get("Promotion_3_end_date").toString("dd-MMM-yyyy"));
			}
			//Caract. & équipemements/Features & equipment
			datamap.put("Building",Residence_info.get("Building"));
			datamap.put("Housing_units",Residence_info.get("Housing_units"));
			datamap.put("Common_areas",Residence_info.get("Common_areas"));
			datamap.put("Notes_features",Residence_info.get("Notes_features"));
			//Service de repas/Meal service
			datamap.put("meal_day",Residence_info.get("meal_day"));
			datamap.put("meals_day",Residence_info.get("meals_day"));
			datamap.put("meals_day1",Residence_info.get("meals_day1"));
			datamap.put("Notes_repas",Residence_info.get("Meal_Notes1"));
			//Commerces intérieurs/Internal services	
			datamap.put("Internal_services",Residence_info.get("Accepts_personal_help"));
			datamap.put("Internal_services_Notes",Residence_info.get("Note_1"));
			//Services assist. à la pers./ Pers. assist. serv	
			datamap.put("Assistance_Services",Residence_info.get("Nurse"));
			datamap.put("Notes_21",Residence_info.get("Personal_assistance_Notes"));
			// Services à proximité/Services nearby
			datamap.put("Services_nearby",Residence_info.get("Service_nearby"));
			datamap.put("Notes_services_nearby",Residence_info.get("Services_Notes"));
			//	Services de la résidence/Residence services
			datamap.put("Residence_services",Residence_info.get("Services_de_la_r_sidence_Residence_services"));
			datamap.put("Notes_1",Residence_info.get("Notes_services"));
			//Loisirs/Activities
			datamap.put("Activities",Residence_info.get("Physiotherapist"));
			datamap.put("Notes4",Residence_info.get("Others"));
			datamap.put("CRM_ID",Residence_info.get("id"));
			info datamap;
			CreatorResidence_resp = zoho.creator.createRecord(Owner_name,app_name,form_linkname,datamap,Map(),"zoho_mail");
			info CreatorResidence_resp;
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Residence");
	dataMap.put("Process_Description","Create and Update records in Creator");
	dataMap.put("In_Data",ResidenceID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}