string CRM.Contact(int pageno)
{
	try 
	{
		CRM_IDList = List();
		dupList = list();
		Contact_response = invokeurl
		[
			url :"https://www.zohoapis.com/crm/v2.1/Contacts?page=" + pageno + "&per_page=200"
			type :GET
			connection:"zoho_one"
		];
		contactInfo = Contact_response.get("data");
		for each  Contact_rec in contactInfo
		{
			if(Contact_rec.get("New_Client_Import") == true)
			{
				layout_info = Contact_rec.get("Layout");
				if(layout_info.get("name") == "Contact - Client")
				{
					DOB = null;
					if(Contact_rec.get("Date_of_Birth") != null)
					{
						DOB = Contact_rec.get("Date_of_Birth").toString("yyyy-MM-dd");
					}
					Contact_ID = Contact_rec.get("id");
					info "Contact - Client : CRM_ID===" + Contact_ID;
					getexisting_contact = Contacts[ZohoCRM_ID == Contact_ID];
					info "Count===" + getexisting_contact.count();
					if(getexisting_contact.count() == 0)
					{
						add_contact = insert into Contacts
						[
							Added_User=zoho.loginuser
							Layout=layout_info.get("name")
							Ancien_CRM_ID=Contact_rec.get("Ancien_CRM_ID")
							ZohoCRM_ID=Contact_rec.get("id")
							Contact_Number=Contact_rec.get("Client_Number")
							Full_Name=Contact_rec.get("Full_Name")
							First_Name=Contact_rec.get("First_Name")
							Name=Contact_rec.get("Nom_de_jeune_fille")
							Last_Name1=Contact_rec.get("Last_Name")
							Work_Phone=Contact_rec.get("T_l_phone_maison")
							Kind_of_contact=Contact_rec.get("Contact_Type")
							Preferred_communication=Contact_rec.get("Preferred_communication1")
							Language_s=Contact_rec.get("language_spoken1")
							Date_of_Birth=ifnull(DOB,null)
							Sex=Contact_rec.get("Sexe")
							Cell_Phone=Contact_rec.get("Cellulaire")
							Home_Phone=Contact_rec.get("T_l_phone_travail")
							Email=Contact_rec.get("E_mail_Courriel_1")
							Address_Line=Contact_rec.get("Adresse")
							Postal_code=Contact_rec.get("Postal_code")
							Ville_City=Contact_rec.get("Ville_City")
							Provinces=Contact_rec.get("Provinces")
							Budget_range=Contact_rec.get("Budget_range")
							Preference_on_the_size_of_the_residence=Contact_rec.get("Taille_de_la_r_sidence")
							Type_s_of_accommodation_sought=Contact_rec.get("Type_de_logement")
							Notes_Accomodation=Contact_rec.get("Notes_h_bergement")
							Client_type_s=Contact_rec.get("Type_de_client")
							Hygiene=Contact_rec.get("Hygiene")
							Dressing=Contact_rec.get("Habillement")
							Nutrition=Contact_rec.get("Alimentation")
							Urinary_incontinence=Contact_rec.get("Incontinence")
							Faecal_incontinence=Contact_rec.get("Incontinence_f_cale")
							Use_of_toilets=Contact_rec.get("Utilisation_des_toilettes")
							Vision=Contact_rec.get("Vision")
							Hearing=Contact_rec.get("Audition")
							Communication1=Contact_rec.get("Communication1")
							Notes_Autonomy_Assessment=Contact_rec.get("Note_valuation")
							Mobility_equipment=Contact_rec.get("quipement_pour_mobilit")
							Indoor_mobility=Contact_rec.get("D_placements_l_int_rieur")
							Transfer_assistance=Contact_rec.get("Transferts")
							Notes_Mobility=Contact_rec.get("Notes_Mobility")
							Medication_management=Contact_rec.get("Distribution")
							Oxygene=Contact_rec.get("Oxig_ne")
							Insulin_injection=Contact_rec.get("Insulin_injection")
							Notes_Medication=Contact_rec.get("Notes_4")
							Memory_impairment=Contact_rec.get("Memoiry")
							Orientation_disorder=Contact_rec.get("Orientation_disorder")
							Notes_Neurocognitive_State=Contact_rec.get("Notes_5")
							Type_s_of_neurocognitive_disorder=Contact_rec.get("Dementia")
							Aggressiveness=Contact_rec.get("Agressivit")
							Wandering=Contact_rec.get("Wandering")
							Meals=Contact_rec.get("Repas")
							Notes_IADLs=Contact_rec.get("Notes_6")
							Laundry=Contact_rec.get("Laundry")
							Housekeeping=Contact_rec.get("Housekeeping_frequency")
							Smoker=Contact_rec.get("Fumeur")
							Pet_Animal=Contact_rec.get("Pet")
							Protection_mandate=Contact_rec.get("Protection_mandate")
							Notes_Other=Contact_rec.get("Notes_3")
							Evaluation_s_available_Avail_rating_s=Contact_rec.get("Available_evaluation_s")
							Procuration_disponible=Contact_rec.get("Procuration_disponible")
							Benefit_from_the_help_of_the_CLSC=Contact_rec.get("Benefit_from_the_help_of_the_CLSC")
							Interests_specifics=Contact_rec.get("Comments_Activities_Interests_particularities")
							New_Client_Import=true
						];
						info "Creator_ID===" + add_contact;
						CRM_IDList.add(add_contact);
						info "CRM ID-Count=== " + CRM_IDList.size();
					}
				}
				else
				{
					info "Contact-other";
					Contact_ID = Contact_rec.get("id");
					info "Contact-other : CRM_ID===" + Contact_ID;
				}
			}
			else
			{
				info "There is no missing client import";
			}
		}
	}
	catch (e)
	{
		thisapp.addDeveloperLog("Creator-contact-client"," Fetching All Records From Contact(CRM)-",Contact_ID.toString(),e);
	}
	return "pageno==" + pageno;
}