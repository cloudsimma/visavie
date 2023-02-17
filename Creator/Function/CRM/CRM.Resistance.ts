string CRM.Resistance(int pageno)
{
	try 
	{
		CRM_IDList = List();
		Old_response = invokeurl
		[
			url :"https://www.zohoapis.com/crm/v2.1/Residence?page=" + pageno + "&per_page=100"
			type :GET
			connection:"zoho_one"
		];
		for each  Residence_data in Old_response.get("data")
		{
			Residence_ID = Residence_data.get("id");
			new_response = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v2.1/Residence/" + Residence_ID
				type :GET
				connection:"zoho_one"
			];
			for each  Residence_info in new_response.get("data")
			{
				New_CRMID = Residence_info.get("id");
				info "CRM_ID===" + New_CRMID;
				get_existing_res = Residences[CRM_ID == New_CRMID];
				info "Count===" + get_existing_res.count();
				Advisor_info = Residence_info.get("Advisor");
				if(Advisor_info != null)
				{
					Advisor_ID = Advisor_info.get("id");
				}
				Promotion_1 = null;
				if(Residence_info.get("Promotion_1_end_date") != null)
				{
					Promotion_1 = Residence_info.get("Promotion_1_end_date").toString("dd-MMM-yyyy");
				}
				Promotion_2 = null;
				if(Residence_info.get("Promotion_2_end_date") != null)
				{
					Promotion_2 = Residence_info.get("Promotion_2_end_date").toString("dd-MMM-yyyy");
				}
				Promotion_3 = null;
				if(Residence_info.get("Promotion_3_end_date") != null)
				{
					Promotion_3 = Residence_info.get("Promotion_3_end_date").toString("dd-MMM-yyyy");
				}
				/* subform-contact ==starts*/
				rows = Collection();
				get_subform = Residence_info.get("Contac");
				for each  subform_info in get_subform
				{
					Contact_Line_ItemID = subform_info.get("id");
					Res_info = subform_info.get("Parent_Id");
					if(Res_info != null)
					{
						Res_CRMID = Res_info.get("id");
						Res_name = Res_info.get("name");
					}
					Contact_info = subform_info.get("Contact");
					if(Contact_info != null)
					{
						Contact_CRMID = Contact_info.get("id");
						Contact_name = Contact_info.get("name");
					}
				}
				if(get_existing_res.count() == 0)
				{
					add_residence = insert into Residences
					[
						Added_User=zoho.loginuser
						CRM_ID=Residence_info.get("id")
						Residence_number=Residence_info.get("Residence_number")
						Usual_name=Residence_info.get("Name")
						Owner=Residence_info.get("Owner1")
						Legal_name=Residence_info.get("Legal_name")
						Status=Residence_info.get("Status")
						Ancien_CRM_ID=Residence_info.get("Ancien_CRM_ID")
						Referral_agreement=Residence_info.get("Referral_payment_agreement_Entente_de_paiement_de")
						Special_agreement_specification=Residence_info.get("Special_agreement_specification")
						Language_s_spoken_by_the_personnel=Residence_info.get("Language_s_spoken_by_the_personnel")
						Number_of_units=Residence_info.get("Number_of_units")
						Notes=Residence_info.get("Notes")
						Name_of_the_group=Residence_info.get("Nom_du_groupe")
						Size_of_the_residence=Residence_info.get("Size_of_the_residence")
						Official_Advisor=ifnull(Advisor_ID,"")
						Address_Line_1=Residence_info.get("Line_1")
						Postal_code=Residence_info.get("Postal_code")
						Province=Residence_info.get("Province")
						Primary_phone=Residence_info.get("Primary_phone")
						Region=Residence_info.get("Region")
						City=Residence_info.get("City")
						Billing_Address_Line_1=Residence_info.get("Adress_Adresse_1")
						Method_of_sending_invoicing=Residence_info.get("Method_of_sending_invoicing")
						Code_postal_Postal_code=Residence_info.get("Postal_codes_Code_postal")
						Province1=Residence_info.get("Provinces")
						Primary_phone1=Residence_info.get("Primary_phones_T_l_phone_principal")
						City1=Residence_info.get("City_Ville")
						Client_type_s=Residence_info.get("Client_Type")
						Notes_clients_type_s=Residence_info.get("Notes_type_s_de_clients")
						Promotion_1=Residence_info.get("Promotion_type")
						Promotion_2=Residence_info.get("Promotion_2")
						Promotion_3=Residence_info.get("Promotion_3")
						Promotion_1_end_date=Promotion_1
						Promotion_2_end_date=Promotion_2
						Promotion_3_end_date=Promotion_3
						Building=Residence_info.get("Building")
						Housing_units=Residence_info.get("Housing_units")
						Common_areas=Residence_info.get("Common_areas")
						Notes_features=Residence_info.get("Notes_features")
						meal_day=Residence_info.get("meal_day")
						meals_day=Residence_info.get("meals_day")
						meals_day1=Residence_info.get("meals_day1")
						Notes_repas=Residence_info.get("Meal_Notes1")
						Internal_services=Residence_info.get("Accepts_personal_help")
						Internal_services_Notes=Residence_info.get("Note_1")
						Assistance_Services=Residence_info.get("Nurse")
						Notes_21=Residence_info.get("Personal_assistance_Notes")
						Services_nearby=Residence_info.get("Service_nearby")
						Notes_services_nearby=Residence_info.get("Services_Notes")
						Residence_services=Residence_info.get("Services_de_la_r_sidence_Residence_services")
						Notes_1=Residence_info.get("Notes_services")
						Activities=Residence_info.get("Physiotherapist")
						Notes4=Residence_info.get("Others")
					];
					if(Contact_CRMID != null && Contact_CRMID != "")
					{
						get_Contact = Contacts[ZohoCRM_ID == Contact_CRMID.toString()];
						if(get_Contact.count() > 0)
						{
							get_Contact_Name = get_Contact.ID;
						}
						if(get_Contact_Name != null)
						{
							add_subform = insert into Residence_Contact
							[
								Added_User=zoho.loginuser
								Residences_ID=add_residence
								Contacts=get_Contact_Name
								Contact_CRM_ID=Contact_CRMID.toString()
								Residence_CRM_ID=Res_CRMID.toString()
								Contact_Line_Item_ID=Contact_Line_ItemID.toString()
							];
						}
					}
					info "Creator_ID===" + add_residence;
					CRM_IDList.add(add_residence);
					info "CRM ID-Count=== " + CRM_IDList.size();
				}
				else
				{
					sendmail
					[
						from :zoho.loginuserid
						to :"indhu@cloudlion.org"
						subject :"Issue -Fetching All Records From Residence(CRM)"
						message :"Zoho CRM ID===" + Residence_ID
					]
				}
			}
		}
	}
	catch (e)
	{
		thisapp.addDeveloperLog("Creator","Fetching All Records From Residence(CRM)",Residence_ID.toString(),e);
	}
	return "Pageno===" + pageno;
}