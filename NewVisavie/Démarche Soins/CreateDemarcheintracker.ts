try 
{
	getDeal = zoho.crm.getRecordById("Home_Care_Deal",DealID.toNumber());
	if(getDeal.get("id") != null)
	{
		appName = "visavie";
		ownerName = "lion_visavie";
		formName = "Developer_Log";
		/*Hospital Tracking-starts*/
		hsptlmap = Map();
		hsptlmap.put("Deal_Name",getDeal.get("Deal_Name"));
		hsptlmap.put("Deal_Creation_Date",zoho.currentdate.toString("dd-MMM-yyyy"));
		hsptlmap.put("Deal_ID",getDeal.get("id").toString());
		hsptlmap.put("Status1",getDeal.get("Stage"));
		hsptlmap.put("Deal_Type","Home Care Deal");
		/*Hospital Tracking-ends*/
		tracking_map = Map();
		tracking_map.put("Name",getDeal.get("Name"));
		tracking_map.put("Personal_Reference_Deal_1",getDeal.get("Personal_referral"));
		tracking_map.put("Home_care_Deal_Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
		tracking_map.put("Initial_Stage","Démarche Soins");
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
		// 		if(getDeal.get("Counselor_user") != null)
		// 		{
		// 			tracking_map.put("Counselor_User",getDeal.get("Counselor_user").get("id"));
		// 		}
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
		if(getDeal.get("Client_2") != null)
		{
			tracking_map.put("client_2",getDeal.get("Client_2").get("id"));
		}
		tracking_map.put("Deal_Type","Home Care");
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
			}
			if(contactSubform.get("Kind_of_Contact") == "Secondaire/Secondary")
			{
				if(contactSubform.get("contact") != null)
				{
					tracking_map.put("secondary_contact",contactSubform.get("contact").get("id"));
				}
			}
			if(contactSubform.get("Kind_of_Contact") == "Soins de santé/Health Care")
			{
				if(contactSubform.get("contact") != null)
				{
					tracking_map.put("Health_care_contact",contactSubform.get("contact").get("id"));
				}
			}
		}
		/*Deal source*/
		tracking_map.put("Deal_Type_Deal_1",getDeal.get("Deal_type_Type_de_d_marche"));
		tracking_map.put("Deal_Source",getDeal.get("Lead_source"));
		tracking_map.put("RSSS",ifnull(getDeal.get("Health_care_network_RSSS"),""));
		tracking_map.put("Web",ifnull(getDeal.get("Web"),""));
		tracking_map.put("Partners",ifnull(getDeal.get("Partners_Partenaires"),""));
		tracking_map.put("Trad_marketing",ifnull(getDeal.get("Traditionnal_marketing"),""));
		tracking_map.put("Precision",ifnull(getDeal.get("Precision"),""));
		createTrackingRecord = zoho.crm.createRecord("Tracking",tracking_map);
		if(createTrackingRecord.get("id") != null)
		{
			updateDealMap = Map();
			updateDealMap.put("Tracking_Id",createTrackingRecord.get("id"));
			updateDealMap.put("Deal_IDS","Deal1");
			updateDeal = zoho.crm.updateRecord("Home_Care_Deal",DealID.toNumber(),updateDealMap);
			/*Hospital tracking*/
			hospitalTracking = zoho.creator.createRecord("lion_visavie","visavie","Hospital_Tracking",hsptlmap,Map(),"zoho_mail");
			if(hospitalTracking.get("code") != 3000)
			{
				dataMap = Map();
				dataMap.put("Module","Home Care Deal");
				dataMap.put("Process_Description","CRM: Create Home Care Deal in Hospital Tracking Creator");
				dataMap.put("In_Data",DealID);
				dataMap.put("Out_Response",hospitalTracking);
				createHospitalResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
			}
		}
		else
		{
			dataMap = Map();
			dataMap.put("Module","Home Care Deal");
			dataMap.put("Process_Description","CRM: Create Home care Deal in Traking Record");
			dataMap.put("In_Data",DealID);
			dataMap.put("Out_Response",createTrackingRecord);
			ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
		}
	}
}
catch (e)
{
	dataMap = Map();
	dataMap.put("Module","Home Care Deal");
	dataMap.put("Process_Description","CRM: Create Home care Deal in Traking Record");
	dataMap.put("In_Data",DealID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
