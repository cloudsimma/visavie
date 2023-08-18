try 
{
	getDeal = zoho.crm.getRecordById("Deals",dealID.toNumber());
	if(getDeal.get("id") != null && getDeal.get("Tracking_Id") != null)
	{
		appName = "visavie";
		ownerName = "lion_visavie";
		formName = "Developer_Log";
		/*Hospital Tracking -starts*/
		creatorHosptlTracking = zoho.creator.getRecords("lion_visavie","visavie","All_Hospital_Trackings","Deal_ID==\"" + getDeal.get("id") + "\"",1,200,"zoho_mail");
		if(creatorHosptlTracking.get("code") == 3000)
		{
			hsptlmap = Map();
			hsptlmap.put("Deal_Name",getDeal.get("Deal_Name"));
			hsptlmap.put("Status1",getDeal.get("Stage"));
			hospitalInfo = getDeal.get("Hospital");
			if(hospitalInfo != null)
			{
				hsptlmap.put("Hospital_Contact",hospitalInfo.get("name"));
				hsptlmap.put("Hospital_Contact_ID",hospitalInfo.get("id"));
				contactInfo = zoho.crm.getRelatedRecords("Hospital_Branches21","Hospital_Contacts",hospitalInfo.get("id"));
				for each  rec in contactInfo
				{
					if(rec.get("Hospital_Branches") != null)
					{
						hsptlmap.put("Branch",rec.get("Hospital_Branches").get("name"));
						branchInfo = zoho.crm.getRecordById("Branches",rec.get("Hospital_Branches").get("id"));
						if(branchInfo.get("id") != null)
						{
							hsptlInfo = zoho.crm.getRelatedRecords("Hospital19","Branches",branchInfo.get("id"));
							for each  rechsptl in hsptlInfo
							{
								if(rechsptl.get("Hospital_Branches") != null)
								{
									hsptlmap.put("Hospital1",rechsptl.get("Hospital_Branches").get("name"));
								}
							}
						}
					}
				}
			}
			else
			{
				hsptlmap.put("Hospital_Contact","");
				hsptlmap.put("Hospital_Contact_ID","");
				hsptlmap.put("Branch","");
				hsptlmap.put("Hospital1","");
			}
			creatorID = creatorHosptlTracking.get("data").get(0).get("ID");
			updateHospitalTracking = zoho.creator.updateRecord("lion_visavie","visavie","All_Hospital_Trackings",creatorID.tolong(),hsptlmap,Map(),"zoho_mail");
			if(updateHospitalTracking.get("code") != 3000)
			{
				dataMap = Map();
				dataMap.put("Module","Deal");
				dataMap.put("Process_Description","CRM: Update Deal in Hospital Tracking Creator");
				dataMap.put("In_Data",dealID);
				dataMap.put("Out_Response",updateHospitalTracking);
				createHospitalResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
			}
		}
		/*Hospital Tracking -ends*/
		if(getDeal.get("Deal_IDS") != null && getDeal.get("Deal_IDS") == "Deal1")
		{
			/*updating 1st deal */
			tracking_map = Map();
			tracking_map.put("Name",getDeal.get("Deal_Name"));
			tracking_map.put("Personal_Reference_Deal_1",getDeal.get("Personal_referral"));
			if(getDeal.get("Counselor_Conseiller") != null)
			{
				tracking_map.put("Counselor_name",getDeal.get("Counselor_Conseiller").get("name"));
				tracking_map.put("Counselor_ID",getDeal.get("Counselor_Conseiller").get("id"));
				/*user*/
				getCounselor = zoho.crm.getRecordById("Advisor",getDeal.get("Counselor_Conseiller").get("id").toLong());
				if(getCounselor.get("id") != null && getCounselor.get("Counselor_user") != null)
				{
					getOwner = zoho.crm.getRecordById("users",getCounselor.get("Counselor_user").get("id").toLong());
					if(getOwner.get("users") != null)
					{
						for each  rec in getOwner.get("users")
						{
							if(rec.get("status") == "active")
							{
								tracking_map.put("Counselor_User",rec.get("id"));
							}
							else
							{
								tracking_map.put("Counselor_User",null);
							}
						}
					}
				}
			}
			else
			{
				tracking_map.put("Counselor_name","");
				tracking_map.put("Counselor_ID","");
				tracking_map.put("Counselor_User",null);
			}
			if(getDeal.get("Conseiller_temporaire_Temporary_counselor") != null)
			{
				tracking_map.put("Temporary_Counselor_name",getDeal.get("Conseiller_temporaire_Temporary_counselor").get("name"));
				tracking_map.put("Temporary_Counselor_ID",getDeal.get("Conseiller_temporaire_Temporary_counselor").get("id"));
				/*user*/
				getCounselor = zoho.crm.getRecordById("Advisor",getDeal.get("Conseiller_temporaire_Temporary_counselor").get("id").toLong());
				if(getCounselor.get("id") != null && getCounselor.get("Counselor_user") != null)
				{
					getOwner = zoho.crm.getRecordById("users",getCounselor.get("Counselor_user").get("id").toLong());
					if(getOwner.get("users") != null)
					{
						for each  rec in getOwner.get("users")
						{
							if(rec.get("status") == "active")
							{
								tracking_map.put("Temporary_User",rec.get("id"));
							}
							else
							{
								tracking_map.put("Temporary_User",null);
							}
						}
					}
				}
			}
			else
			{
				tracking_map.put("Temporary_Counselor_name","");
				tracking_map.put("Temporary_Counselor_ID","");
				tracking_map.put("Temporary_User",null);
			}
			tracking_map.put("D_marches_Status",getDeal.get("Stage"));
			if(getDeal.get("Stage") == "Active" || getDeal.get("Stage") == "Visite du domicile/hôpital/Home/hospital in-person visit" || getDeal.get("Stage") == "Proposition du profil à des résidences/Profile sent to retirement homes" || getDeal.get("Stage") == "Visite de résidences/Retirement home visits" || getDeal.get("Stage") == "En réflexion (suivi en cours)/On hold (ongoing follow up)" || getDeal.get("Stage") == "En pause - soins à domicile (suivi en cours)/On hold - home care (ongoing follow up)")
			{
				tracking_map.put("Deal_Status","Opened");
			}
			if(getDeal.get("Stage") == "Location enregistrée/Registered renting")
			{
				tracking_map.put("Deal_Status","Closed Won");
			}
			else if(getDeal.get("Stage") == "Fermé - solution alternative/Closed-lost (alternative solution)" || getDeal.get("Stage") == "Fermé - transfert au public/Closed-lost (transfer to public healthcare)" || getDeal.get("Stage") == "Fermé - décédé/Closed-lost (deceased)" || getDeal.get("Stage") == "Fermé/Closed (ancien CRM)")
			{
				tracking_map.put("Deal_Status","Closed Lost");
			}
			if(getDeal.get("Contact") != null)
			{
				tracking_map.put("client_1",getDeal.get("Contact").get("id"));
				if(getDeal.get("Contact").get("id") != null)
				{
					get_contacts = zoho.crm.getRecordById("Contacts",getDeal.get("Contact").get("id"));
					tracking_map.put("Provinces",get_contacts.get("Provinces"));
				}
			}
			else
			{
				tracking_map.put("client_1","");
			}
			if(getDeal.get("Contacts") != null)
			{
				tracking_map.put("client_2",getDeal.get("Contacts").get("id"));
				if(getDeal.get("Contacts").get("id") != null)
				{
					get_contacts = zoho.crm.getRecordById("Contacts",getDeal.get("Contacts").get("id"));
					tracking_map.put("Client_2_Provinces",get_contacts.get("Provinces"));
				}
			}
			else
			{
				tracking_map.put("client_2","");
			}
			tracking_map.put("Deal_Type","Housing");
			/* contact subform*/
			subformInfo = getDeal.get("Contact_persons");
			if(subformInfo != null)
			{
				for each  contactSubform in subformInfo
				{
					if(contactSubform.get("Kind_of_Contact") == "Primaire/Primary")
					{
						if(contactSubform.get("contact") != null)
						{
							tracking_map.put("Primary_Contacts",contactSubform.get("contact").get("id"));
						}
						else
						{
							tracking_map.put("Primary_Contacts","");
						}
					}
					if(contactSubform.get("Kind_of_Contact") == "Secondaire/Secondary")
					{
						if(contactSubform.get("contact") != null)
						{
							tracking_map.put("secondary_contact",contactSubform.get("contact").get("id"));
						}
						else
						{
							tracking_map.put("secondary_contact","");
						}
					}
					if(contactSubform.get("Kind_of_Contact") == "Soins de santé/Health Care")
					{
						if(contactSubform.get("contact") != null)
						{
							tracking_map.put("Health_care_contact",contactSubform.get("contact").get("id"));
						}
						else
						{
							tracking_map.put("Health_care_contact","");
						}
					}
				}
			}
			tracking_map.put("Deal_Update_Date",zoho.currentdate.toString("yyyy-MM-dd"));
			/* Residence Subform*/
			resInfo = getDeal.get("Subform_3");
			if(resInfo != null)
			{
				resList = list();
				for each  resSubform in resInfo
				{
					res_map = Map();
					if(resSubform.get("Residence") != null)
					{
						res_map.put("Residence_number",resSubform.get("Residence").get("id"));
						res_map.put("Profile_Sent_Date",resSubform.get("Date_profile_sent"));
						resList.add(res_map);
					}
					else
					{
						res_map.put("Residence_number","");
						res_map.put("Profile_Sent_Date","");
					}
				}
			}
			tracking_map.put("D_marches_Residence",resList);
			/*Deal source*/
			tracking_map.put("Deal_Type_Deal_1",getDeal.get("Deal_type_Type_de_d_marche"));
			tracking_map.put("Deal_Source",getDeal.get("Lead_source_1"));
			tracking_map.put("RSSS",ifnull(getDeal.get("Health_care_network_RSSS"),""));
			tracking_map.put("Web",ifnull(getDeal.get("Web"),""));
			tracking_map.put("Partners",ifnull(getDeal.get("Partners_Partenaires"),""));
			tracking_map.put("Trad_marketing",ifnull(getDeal.get("Trade_marketing_1"),""));
			tracking_map.put("Precision",ifnull(getDeal.get("Precision"),""));
			hospitalInfo = getDeal.get("Hospital");
			if(hospitalInfo != null)
			{
				tracking_map.put("Deal_Hospital_1",hospitalInfo.get("name"));
				tracking_map.put("Deal_Hospital_ID_1",hospitalInfo.get("id"));
				contactInfo = zoho.crm.getRelatedRecords("Hospital_Branches21","Hospital_Contacts",hospitalInfo.get("id"));
				for each  rec in contactInfo
				{
					if(rec.get("Hospital_Branches") != null)
					{
						tracking_map.put("Deal_Hospital_Branch_1",rec.get("Hospital_Branches").get("name"));
						branchInfo = zoho.crm.getRecordById("Branches",rec.get("Hospital_Branches").get("id"));
						if(branchInfo.get("id") != null)
						{
							hsptlInfo = zoho.crm.getRelatedRecords("Hospital19","Branches",branchInfo.get("id"));
							for each  rechsptl in hsptlInfo
							{
								if(rechsptl.get("Hospital_Branches") != null)
								{
									tracking_map.put("Deal_Hospital_11",rechsptl.get("Hospital_Branches").get("name"));
								}
							}
						}
					}
				}
			}
			else
			{
				tracking_map.put("Deal_Hospital_11",null);
				tracking_map.put("Deal_Hospital_1",null);
				tracking_map.put("Deal_Hospital_ID_1",null);
				tracking_map.put("Deal_Hospital_Branch_1",null);
			}
			updateDealTracking = zoho.crm.updateRecord("Tracking",getDeal.get("Tracking_Id").toNumber(),tracking_map);
		}
		if(getDeal.get("Deal_IDS") != null && getDeal.get("Deal_IDS") == "Deal2")
		{
			/*updating 2nd deal */
			trackingMap_2 = Map();
			trackingMap_2.put("Personal_Reference_Deal_2",getDeal.get("Personal_referral"));
			trackingMap_2.put("D_marches_Status_1",getDeal.get("Stage"));
			if(getDeal.get("Stage") == "Active" || getDeal.get("Stage") == "Visite du domicile/hôpital/Home/hospital in-person visit" || getDeal.get("Stage") == "Proposition du profil à des résidences/Profile sent to retirement homes" || getDeal.get("Stage") == "Visite de résidences/Retirement home visits" || getDeal.get("Stage") == "En réflexion (suivi en cours)/On hold (ongoing follow up)" || getDeal.get("Stage") == "En pause - soins à domicile (suivi en cours)/On hold - home care (ongoing follow up)")
			{
				trackingMap_2.put("Deal_Status_1","Opened");
			}
			if(getDeal.get("Stage") == "Location enregistrée/Registered renting")
			{
				trackingMap_2.put("Deal_Status_1","Closed Won");
			}
			else if(getDeal.get("Stage") == "Fermé - solution alternative/Closed-lost (alternative solution)" || getDeal.get("Stage") == "Fermé - transfert au public/Closed-lost (transfer to public healthcare)" || getDeal.get("Stage") == "Fermé - décédé/Closed-lost (deceased)" || getDeal.get("Stage") == "Fermé/Closed (ancien CRM)")
			{
				trackingMap_2.put("Deal_Status_1","Closed Lost");
			}
			if(getDeal.get("Contact") != null)
			{
				trackingMap_2.put("Client",getDeal.get("Contact").get("name"));
				if(getDeal.get("Contact").get("id") != null)
				{
					get_contacts = zoho.crm.getRecordById("Contacts",getDeal.get("Contact").get("id"));
					trackingMap_2.put("Provinces",get_contacts.get("Provinces"));
				}
			}
			else
			{
				trackingMap_2.put("Client","");
			}
			trackingMap_2.put("Deal_Type_1","Housing");
			/* contact subform*/
			subformInfo = getDeal.get("Contact_persons");
			if(subformInfo != null)
			{
				for each  contactSubform in subformInfo
				{
					if(contactSubform.get("Kind_of_Contact") == "Primaire/Primary")
					{
						if(contactSubform.get("contact") != null)
						{
							trackingMap_2.put("Primary_contact_1",contactSubform.get("contact").get("name"));
						}
						else
						{
							trackingMap_2.put("Primary_contact_1","");
						}
					}
					if(contactSubform.get("Kind_of_Contact") == "Secondaire/Secondary")
					{
						if(contactSubform.get("contact") != null)
						{
							trackingMap_2.put("Secondary_contact_1",contactSubform.get("contact").get("name"));
						}
						else
						{
							trackingMap_2.put("Secondary_contact_1","");
						}
					}
					if(contactSubform.get("Kind_of_Contact") == "Soins de santé/Health Care")
					{
						if(contactSubform.get("contact") != null)
						{
							trackingMap_2.put("Health_care_contact_1",contactSubform.get("contact").get("name"));
						}
						else
						{
							trackingMap_2.put("Health_care_contact_1","");
						}
					}
				}
			}
			trackingMap_2.put("Deal_Update_Date_1",zoho.currentdate.toString("yyyy-MM-dd"));
			/* Residence Subform*/
			resInfo = getDeal.get("Subform_3");
			if(resInfo != null)
			{
				for each  resSubform in resInfo
				{
					if(resSubform.get("Residence") != null)
					{
						trackingMap_2.put("Residence_1",resSubform.get("Residence").get("name"));
						trackingMap_2.put("Profile_Sent_Date_1",resSubform.get("Date_profile_sent"));
						trackingMap_2.put("Residence_ID_1",resSubform.get("Residence").get("id"));
					}
					else
					{
						trackingMap_2.put("Residence_1","");
						trackingMap_2.put("Profile_Sent_Date_1","");
						trackingMap_2.put("Residence_ID_1","");
					}
				}
			}
			/*Deal source*/
			trackingMap_2.put("Deal_Type_Deal_2",getDeal.get("Deal_type_Type_de_d_marche"));
			trackingMap_2.put("Deal_Source_1",getDeal.get("Lead_source_1"));
			trackingMap_2.put("RSSS_1",ifnull(getDeal.get("Health_care_network_RSSS"),""));
			trackingMap_2.put("Web_1",ifnull(getDeal.get("Web"),""));
			trackingMap_2.put("Partners_1",ifnull(getDeal.get("Partners_Partenaires"),""));
			trackingMap_2.put("Trad_marketing_1",ifnull(getDeal.get("Trade_marketing_1"),""));
			trackingMap_2.put("Precision_1",ifnull(getDeal.get("Precision"),""));
			hospitalInfo = getDeal.get("Hospital");
			if(hospitalInfo != null)
			{
				trackingMap_2.put("Deal_Hospital_2",hospitalInfo.get("name"));
				trackingMap_2.put("Deal_Hospital_ID_2",hospitalInfo.get("id"));
				contactInfo = zoho.crm.getRelatedRecords("Hospital_Branches21","Hospital_Contacts",hospitalInfo.get("id"));
				for each  rec in contactInfo
				{
					if(rec.get("Hospital_Branches") != null)
					{
						trackingMap_2.put("Deal_Hospital_Branch_2",rec.get("Hospital_Branches").get("name"));
						branchInfo = zoho.crm.getRecordById("Branches",rec.get("Hospital_Branches").get("id"));
						if(branchInfo.get("id") != null)
						{
							hsptlInfo = zoho.crm.getRelatedRecords("Hospital19","Branches",branchInfo.get("id"));
							for each  rechsptl in hsptlInfo
							{
								if(rechsptl.get("Hospital_Branches") != null)
								{
									trackingMap_2.put("Deal_Hospital_21",rechsptl.get("Hospital_Branches").get("name"));
								}
							}
						}
					}
				}
			}
			else
			{
				trackingMap_2.put("Deal_Hospital_Branch_2",null);
				trackingMap_2.put("Deal_Hospital_21",null);
				trackingMap_2.put("Deal_Hospital_2",null);
				trackingMap_2.put("Deal_Hospital_ID_2",null);
			}
			updateDealTracking_2 = zoho.crm.updateRecord("Tracking",getDeal.get("Tracking_Id").toNumber(),trackingMap_2);
		}
	}
	else if(getDeal.get("Tracking_Id") == null || getDeal.get("Tracking_Id") == "")
	{
		/*Hospital Tracking-starts*/
		hsptlmap = Map();
		hsptlmap.put("Deal_Name",getDeal.get("Deal_Name"));
		hsptlmap.put("Deal_Creation_Date",zoho.currentdate.toString("dd-MMM-yyyy"));
		hsptlmap.put("Deal_ID",getDeal.get("id").toString());
		hsptlmap.put("Status1",getDeal.get("Stage"));
		/*Hospital Tracking-ends*/
		tracking_map = Map();
		tracking_map.put("Name",getDeal.get("Deal_Name"));
		tracking_map.put("Personal_Reference_Deal_1",getDeal.get("Personal_referral"));
		tracking_map.put("Deal_Creation_Date",getDeal.get("Creation_date"));
		tracking_map.put("Initial_Stage","Démarches");
		if(getDeal.get("Counselor_Conseiller") != null)
		{
			tracking_map.put("Counselor_name",getDeal.get("Counselor_Conseiller").get("name"));
			tracking_map.put("Counselor_ID",getDeal.get("Counselor_Conseiller").get("id"));
			/*user*/
			getCounselor = zoho.crm.getRecordById("Advisor",getDeal.get("Counselor_Conseiller").get("id").toLong());
			if(getCounselor.get("id") != null && getCounselor.get("Counselor_user") != null)
			{
				getOwner = zoho.crm.getRecordById("users",getCounselor.get("Counselor_user").get("id").toLong());
				if(getOwner.get("users") != null)
				{
					for each  rec in getOwner.get("users")
					{
						if(rec.get("status") == "active")
						{
							tracking_map.put("Counselor_User",rec.get("id"));
						}
						else
						{
							tracking_map.put("Counselor_User",null);
						}
					}
				}
			}
		}
		else
		{
			tracking_map.put("Counselor_name","");
			tracking_map.put("Counselor_ID","");
			tracking_map.put("Counselor_User",null);
		}
		if(getDeal.get("Conseiller_temporaire_Temporary_counselor") != null)
		{
			tracking_map.put("Temporary_Counselor_name",getDeal.get("Conseiller_temporaire_Temporary_counselor").get("name"));
			tracking_map.put("Temporary_Counselor_ID",getDeal.get("Conseiller_temporaire_Temporary_counselor").get("id"));
			/*user*/
			getCounselor = zoho.crm.getRecordById("Advisor",getDeal.get("Conseiller_temporaire_Temporary_counselor").get("id").toLong());
			if(getCounselor.get("id") != null && getCounselor.get("Counselor_user") != null)
			{
				getOwner = zoho.crm.getRecordById("users",getCounselor.get("Counselor_user").get("id").toLong());
				if(getOwner.get("users") != null)
				{
					for each  rec in getOwner.get("users")
					{
						if(rec.get("status") == "active")
						{
							tracking_map.put("Temporary_User",rec.get("id"));
						}
						else
						{
							tracking_map.put("Temporary_User",null);
						}
					}
				}
			}
		}
		else
		{
			tracking_map.put("Temporary_Counselor_name","");
			tracking_map.put("Temporary_Counselor_ID","");
			tracking_map.put("Temporary_User",null);
		}
		tracking_map.put("Deal_ID",getDeal.get("id").toString());
		tracking_map.put("D_marches_Status",getDeal.get("Stage"));
		if(getDeal.get("Stage") == "Active" || getDeal.get("Stage") == "Visite du domicile/hôpital/Home/hospital in-person visit" || getDeal.get("Stage") == "Proposition du profil à des résidences/Profile sent to retirement homes" || getDeal.get("Stage") == "Visite de résidences/Retirement home visits" || getDeal.get("Stage") == "En réflexion (suivi en cours)/On hold (ongoing follow up)" || getDeal.get("Stage") == "En pause - soins à domicile (suivi en cours)/On hold - home care (ongoing follow up)")
		{
			tracking_map.put("Deal_Status","Opened");
		}
		if(getDeal.get("Stage") == "Location enregistrée/Registered renting")
		{
			tracking_map.put("Deal_Status","Closed Won");
		}
		else if(getDeal.get("Stage") == "Fermé - solution alternative/Closed-lost (alternative solution)" || getDeal.get("Stage") == "Fermé - transfert au public/Closed-lost (transfer to public healthcare)" || getDeal.get("Stage") == "Fermé - décédé/Closed-lost (deceased)" || getDeal.get("Stage") == "Fermé/Closed (ancien CRM)")
		{
			tracking_map.put("Deal_Status","Closed Lost");
		}
		if(getDeal.get("Contact") != null)
		{
			tracking_map.put("client_1",getDeal.get("Contact").get("id"));
			if(getDeal.get("Contact").get("id") != null)
			{
				get_contacts = zoho.crm.getRecordById("Contacts",getDeal.get("Contact").get("id"));
				tracking_map.put("Provinces",get_contacts.get("Provinces"));
			}
		}
		else
		{
			tracking_map.put("client_1","");
		}
		if(getDeal.get("Contacts") != null)
		{
			tracking_map.put("client_2",getDeal.get("Contacts").get("id"));
			if(getDeal.get("Contacts").get("id") != null)
			{
				get_contacts = zoho.crm.getRecordById("Contacts",getDeal.get("Contacts").get("id"));
				tracking_map.put("Client_2_Provinces",get_contacts.get("Provinces"));
			}
		}
		else
		{
			tracking_map.put("client_2","");
		}
		tracking_map.put("Deal_Type","Housing");
		/* contact subform*/
		subformInfo = getDeal.get("Contact_persons");
		if(subformInfo != null)
		{
			for each  contactSubform in subformInfo
			{
				if(contactSubform.get("Kind_of_Contact") == "Primaire/Primary")
				{
					if(contactSubform.get("contact") != null)
					{
						tracking_map.put("Primary_Contacts",contactSubform.get("contact").get("id"));
					}
					else
					{
						tracking_map.put("Primary_Contacts","");
					}
				}
				if(contactSubform.get("Kind_of_Contact") == "Secondaire/Secondary")
				{
					if(contactSubform.get("contact") != null)
					{
						tracking_map.put("secondary_contact",contactSubform.get("contact").get("id"));
					}
					else
					{
						tracking_map.put("secondary_contact","");
					}
				}
				if(contactSubform.get("Kind_of_Contact") == "Soins de santé/Health Care")
				{
					if(contactSubform.get("contact") != null)
					{
						tracking_map.put("Health_care_contact",contactSubform.get("contact").get("id"));
					}
					else
					{
						tracking_map.put("Health_care_contact","");
					}
				}
			}
		}
		/* Residence Subform*/
		resInfo = getDeal.get("Subform_3");
		if(resInfo != null)
		{
			resList = list();
			for each  resSubform in resInfo
			{
				res_map = Map();
				if(resSubform.get("Residence") != null)
				{
					res_map.put("Residence_number",resSubform.get("Residence").get("id"));
					res_map.put("Profile_Sent_Date",resSubform.get("Date_profile_sent"));
					resList.add(res_map);
				}
				else
				{
					res_map.put("Residence_number","");
					res_map.put("Profile_Sent_Date","");
				}
			}
		}
		tracking_map.put("D_marches_Residence",resList);
		/*Deal source*/
		tracking_map.put("Deal_Type_Deal_1",getDeal.get("Deal_type_Type_de_d_marche"));
		tracking_map.put("Deal_Source",getDeal.get("Lead_source_1"));
		tracking_map.put("RSSS",ifnull(getDeal.get("Health_care_network_RSSS"),""));
		tracking_map.put("Web",ifnull(getDeal.get("Web"),""));
		tracking_map.put("Partners",ifnull(getDeal.get("Partners_Partenaires"),""));
		tracking_map.put("Trad_marketing",ifnull(getDeal.get("Trade_marketing_1"),""));
		tracking_map.put("Precision",ifnull(getDeal.get("Precision"),""));
		hospitalInfo = getDeal.get("Hospital");
		if(hospitalInfo != null)
		{
			tracking_map.put("Deal_Hospital_1",hospitalInfo.get("name"));
			tracking_map.put("Deal_Hospital_ID_1",hospitalInfo.get("id"));
			hsptlmap.put("Hospital_Contact",hospitalInfo.get("name"));
			hsptlmap.put("Hospital_Contact_ID",hospitalInfo.get("id"));
			contactInfo = zoho.crm.getRelatedRecords("Hospital_Branches21","Hospital_Contacts",hospitalInfo.get("id"));
			for each  rec in contactInfo
			{
				if(rec.get("Hospital_Branches") != null)
				{
					tracking_map.put("Deal_Hospital_Branch_1",rec.get("Hospital_Branches").get("name"));
					hsptlmap.put("Branch",rec.get("Hospital_Branches").get("name"));
					branchInfo = zoho.crm.getRecordById("Branches",rec.get("Hospital_Branches").get("id"));
					if(branchInfo.get("id") != null)
					{
						hsptlInfo = zoho.crm.getRelatedRecords("Hospital19","Branches",branchInfo.get("id"));
						for each  rechsptl in hsptlInfo
						{
							if(rechsptl.get("Hospital_Branches") != null)
							{
								tracking_map.put("Deal_Hospital_11",rechsptl.get("Hospital_Branches").get("name"));
								hsptlmap.put("Hospital1",rechsptl.get("Hospital_Branches").get("name"));
							}
						}
					}
				}
			}
		}
		createTrackingRecord = zoho.crm.createRecord("Tracking",tracking_map);
		if(createTrackingRecord.get("id") != null)
		{
			updateDealMap = Map();
			updateDealMap.put("Tracking_Id",createTrackingRecord.get("id"));
			updateDealMap.put("Deal_IDS","Deal1");
			updateDeal = zoho.crm.updateRecord("Deals",dealID.toNumber(),updateDealMap);
			/*Hospital tracking*/
			hospitalTracking = zoho.creator.createRecord("lion_visavie","visavie","Hospital_Tracking",hsptlmap,Map(),"zoho_mail");
			if(hospitalTracking.get("code") != 3000)
			{
				dataMap = Map();
				dataMap.put("Module","Deal");
				dataMap.put("Process_Description","CRM: New Create Deal in Hospital Tracking Creator");
				dataMap.put("In_Data",dealID);
				dataMap.put("Out_Response",hospitalTracking);
				createHospitalResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
			}
		}
		else
		{
			dataMap = Map();
			dataMap.put("Module","Deal");
			dataMap.put("Process_Description","CRM: Create Deal Tracking Record");
			dataMap.put("In_Data",dealID);
			dataMap.put("Out_Response",createTrackingRecord);
			ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
		}
	}
}
catch (e)
{
	dataMap = Map();
	dataMap.put("Module","Deal");
	dataMap.put("Process_Description","CRM: Update Deal Tracking Record");
	dataMap.put("In_Data",dealID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
