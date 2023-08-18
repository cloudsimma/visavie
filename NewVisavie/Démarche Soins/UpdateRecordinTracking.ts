try 
{
	getDeal = zoho.crm.getRecordById("Home_Care_Deal",DealID.toNumber());
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
				dataMap.put("Module","Home Care Deal");
				dataMap.put("Process_Description","CRM: Update Deal in Hospital Tracking Creator");
				dataMap.put("In_Data",DealID);
				dataMap.put("Out_Response",updateHospitalTracking);
				createHospitalResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
			}
		}
		/*Hospital Tracking -ends*/
		if(getDeal.get("Deal_IDS") != null && getDeal.get("Deal_IDS") == "Deal1")
		{
			/*updating 1st deal */
			tracking_map = Map();
			tracking_map.put("Name",getDeal.get("Name"));
			tracking_map.put("Personal_Reference_Deal_1",getDeal.get("Personal_referral"));
			if(getDeal.get("Advisors") != null)
			{
				var1 = "";
				tracking_map.put("Counselor_name",getDeal.get("Advisors").get("name"));
				tracking_map.put("Counselor_ID",getDeal.get("Advisors").get("id"));
				/*user*/
				var1 = getDeal.get("Advisors").get("id");
				advisorInfo = zoho.crm.searchRecords("Advisor","(id:equals:" + var1.toNumber() + ")");
				if(advisorInfo.size() > 0)
				{
					for each  rec in advisorInfo
					{
						if(rec.get("Counselor_user") != null)
						{
							tracking_map.put("Counselor_User",rec.get("Counselor_user").get("id"));
						}
					}
				}
			}
			else
			{
				tracking_map.put("Counselor_name","");
				tracking_map.put("Counselor_ID","");
				tracking_map.put("Counselor_User","");
			}
			if(getDeal.get("Temporary_counselor") != null)
			{
				var2 = "";
				tracking_map.put("Temporary_Counselor_name",getDeal.get("Temporary_counselor").get("name"));
				tracking_map.put("Temporary_Counselor_ID",getDeal.get("Temporary_counselor").get("id"));
				/*user*/
				var2 = getDeal.get("Temporary_counselor").get("id");
				advisorInfo = zoho.crm.searchRecords("Advisor","(id:equals:" + var2.toNumber() + ")");
				if(advisorInfo.size() > 0)
				{
					for each  rec in advisorInfo
					{
						if(rec.get("Counselor_user") != null)
						{
							tracking_map.put("Temporary_User",rec.get("Counselor_user").get("id"));
						}
					}
				}
			}
			else
			{
				tracking_map.put("Temporary_Counselor_name","");
				tracking_map.put("Temporary_Counselor_ID","");
				tracking_map.put("Temporary_User","");
			}
			tracking_map.put("Deal_ID",getDeal.get("id").toString());
			tracking_map.put("D_marche_Soins_Status",getDeal.get("Stage"));
			if(getDeal.get("Stage") == "Active" || getDeal.get("Stage") == "En réflexion après la consultation (suivi en cours)/On hold after care consultation (follow up)" || getDeal.get("Stage") == "Entente de services envoyé/Service agreement sent" || getDeal.get("Stage") == "Réception de l'entente de services/Service agreement received" || getDeal.get("Stage") == "Dossier activé dans clearcare/File activated in clearcare" || getDeal.get("Stage") == "En attente - déménagement en résidence/On hold - moved to a retirement home")
			{
				tracking_map.put("Deal_Status","Opened");
			}
			if(getDeal.get("Stage") == "Location enregistrée/Registered renting")
			{
				tracking_map.put("Deal_Status","Closed Won");
			}
			else if(getDeal.get("Stage") == "Fermé - solution alternative/Closed-lost (alternative solution)" || getDeal.get("Stage") == "Fermé - décédé/Closed-lost (deceased)")
			{
				tracking_map.put("Deal_Status","Closed Lost");
			}
			if(getDeal.get("Client") != null)
			{
				tracking_map.put("client_1",getDeal.get("Client").get("id"));
			}
			else
			{
				tracking_map.put("client_1","");
			}
			if(getDeal.get("Client_2") != null)
			{
				tracking_map.put("client_2",getDeal.get("Client_2").get("id"));
			}
			else
			{
				tracking_map.put("client_2","");
			}
			tracking_map.put("Deal_Type","Home Care");
			tracking_map.put("Deal_Update_Date",zoho.currentdate.toString("yyyy-MM-dd"));
			/* contact subform*/
			subformInfo = getDeal.get("Contact_subform");
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
			/*Deal source*/
			tracking_map.put("Deal_Type_Deal_1",getDeal.get("Deal_type_Type_de_d_marche"));
			tracking_map.put("Deal_Source",getDeal.get("Lead_source"));
			tracking_map.put("RSSS",ifnull(getDeal.get("Health_care_network_RSSS"),""));
			tracking_map.put("Web",ifnull(getDeal.get("Web"),""));
			tracking_map.put("Partners",ifnull(getDeal.get("Partners_Partenaires"),""));
			tracking_map.put("Trad_marketing",ifnull(getDeal.get("Traditionnal_marketing"),""));
			tracking_map.put("Precision",ifnull(getDeal.get("Precision"),""));
			updateDeal = zoho.crm.updateRecord("Tracking",getDeal.get("Tracking_Id").toNumber(),tracking_map);
		}
		if(getDeal.get("Deal_IDS") != null && getDeal.get("Deal_IDS") == "Deal2")
		{
			/*updating 2nd deal */
			trackingMap_2 = Map();
			trackingMap_2.put("Personal_Reference_Deal_2",getDeal.get("Personal_referral"));
			trackingMap_2.put("D_marche_Soins_Status_1",getDeal.get("Stage"));
			if(getDeal.get("Stage") == "Active" || getDeal.get("Stage") == "En réflexion après la consultation (suivi en cours)/On hold after care consultation (follow up)" || getDeal.get("Stage") == "Entente de services envoyé/Service agreement sent" || getDeal.get("Stage") == "Réception de l'entente de services/Service agreement received" || getDeal.get("Stage") == "Dossier activé dans clearcare/File activated in clearcare" || getDeal.get("Stage") == "En attente - déménagement en résidence/On hold - moved to a retirement home")
			{
				trackingMap_2.put("Deal_Status_1","Opened");
			}
			if(getDeal.get("Stage") == "Location enregistrée/Registered renting")
			{
				trackingMap_2.put("Deal_Status_1","Closed Won");
			}
			else if(getDeal.get("Stage") == "Fermé - solution alternative/Closed-lost (alternative solution)" || getDeal.get("Stage") == "Fermé - décédé/Closed-lost (deceased)")
			{
				trackingMap_2.put("Deal_Status_1","Closed Lost");
			}
			if(getDeal.get("Client") != null)
			{
				trackingMap_2.put("Client",getDeal.get("Client").get("name"));
			}
			else
			{
				trackingMap_2.put("Client","");
			}
			trackingMap_2.put("Deal_Type_1","Home Care");
			trackingMap_2.put("Deal_Update_Date_1",zoho.currentdate.toString("yyyy-MM-dd"));
			/* contact subform*/
			subformInfo = getDeal.get("Contact_subform");
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
}
catch (e)
{
	dataMap = Map();
	dataMap.put("Module","Home Care Deal");
	dataMap.put("Process_Description","CRM: Update Home care Deal in Tracking Record");
	dataMap.put("In_Data",DealID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
