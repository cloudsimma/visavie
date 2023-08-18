try 
{
	getLead = zoho.crm.getRecordById("New_Leads",leadID.toNumber());
	if(getLead.get("id") != null && getLead.get("Tracking_Id") != null)
	{
		/*Tracking Update*/
		dataMap = Map();
		dataMap.put("Name",getLead.get("Lead_First_Name") + " " + getLead.get("Lead_Last_Name"));
		dataMap.put("Email",getLead.get("Email"));
		dataMap.put("Source",getLead.get("Source"));
		if(getLead.get("Counselor") != null)
		{
			dataMap.put("Counselor_name",getLead.get("Counselor").get("name"));
			dataMap.put("Counselor_ID",getLead.get("Counselor").get("id"));
			/*user*/
			getCounselor = zoho.crm.getRecordById("Advisor",getLead.get("Counselor").get("id").toLong());
			if(getCounselor.get("id") != null && getCounselor.get("Counselor_user") != null)
			{
				getOwner = zoho.crm.getRecordById("users",getCounselor.get("Counselor_user").get("id").toLong());
				if(getOwner.get("users") != null)
				{
					for each  rec in getOwner.get("users")
					{
						if(rec.get("status") == "active")
						{
							dataMap.put("Counselor_User",rec.get("id"));
						}
						else
						{
							dataMap.put("Counselor_User",null);
						}
					}
				}
			}
		}
		else
		{
			dataMap.put("Counselor_ID",null);
			dataMap.put("Counselor_name",null);
			dataMap.put("Counselor_name",null);
		}
		if(getLead.get("Temporary_counselor") != null)
		{
			var2 = "";
			dataMap.put("Temporary_Counselor_name",getLead.get("Temporary_counselor").get("name"));
			dataMap.put("Temporary_Counselor_ID",getLead.get("Temporary_counselor").get("id"));
			/*user*/
			getCounselor = zoho.crm.getRecordById("Advisor",getLead.get("Temporary_counselor").get("id").toLong());
			if(getCounselor.get("id") != null && getCounselor.get("Counselor_user") != null)
			{
				getOwner = zoho.crm.getRecordById("users",getCounselor.get("Counselor_user").get("id").toLong());
				if(getOwner.get("users") != null)
				{
					for each  rec in getOwner.get("users")
					{
						if(rec.get("status") == "active")
						{
							dataMap.put("Temporary_User",rec.get("id"));
						}
						else
						{
							dataMap.put("Temporary_User",null);
						}
					}
				}
			}
		}
		else
		{
			dataMap.put("Temporary_Counselor_ID",null);
			dataMap.put("Temporary_Counselor_name",null);
			dataMap.put("Temporary_User",null);
		}
		/*New Lead Information*/
		dataMap.put("Phone",getLead.get("Phone"));
		dataMap.put("Mobile",getLead.get("Mobile"));
		dataMap.put("Lead_origin_1",getLead.get("Lead_origin"));
		dataMap.put("Region_sought",getLead.get("Region_sought"));
		dataMap.put("Lead_category",getLead.get("Lead_category"));
		dataMap.put("Personal_reference_1",getLead.get("Personal_reference"));
		dataMap.put("Service_s_recherch_s",getLead.get("Service_s_recherch_s"));
		dataMap.put("Type_de_client",getLead.get("Type_de_client"));
		dataMap.put("Lead_Status_1",getLead.get("Status"));
		dataMap.put("Lead_Type",getLead.get("Lead_Type"));
		dataMap.put("Available_Contact_Information",getLead.get("Available_Contact"));
		/*Lead Information*/
		dataMap.put("Lead_Name",getLead.get("Lead_First_Name") + " " + getLead.get("Lead_Last_Name"));
		dataMap.put("Lead_Stage","Lead Created");
		dataMap.put("Lead_Creation_Date",getLead.get("Creation_Date"));
		dataMap.put("Type_de_conversion1",getLead.get("Type_de_conversion"));
		dataMap.put("Reason",getLead.get("Raison_recyclage_disqualification"));
		/*Login User Information*/
		userID = zoho.loginuserid;
		if(userID != null)
		{
			getUser = zoho.crm.searchRecords("users","(email:equals:" + userID + ")");
			if(getUser.size() > 0)
			{
				for each  userInfo in getUser.get("users")
				{
					dataMap.put("Login_User",ifnull(userInfo.get("full_name"),""));
					dataMap.put("Login_User_Email",ifnull(userInfo.get("email"),""));
					if(userInfo.get("role") != null)
					{
						dataMap.put("Login_User_Role",userInfo.get("role").get("name"));
					}
					else
					{
						dataMap.put("Login_User_Role",null);
					}
				}
			}
		}
		updateTracking = zoho.crm.updateRecord("Tracking",getLead.get("Tracking_Id").toNumber(),dataMap);
		/*Hospital Tracking Update*/
		if(getLead.get("Hospital_Branch") != null || getLead.get("Hospital_Branch") != "")
		{
			creatorHosptlTracking = zoho.creator.getRecords("lion_visavie","visavie","All_Hospital_Trackings","Lead_ID==\"" + getLead.get("id") + "\"",1,200,"zoho_mail");
			if(creatorHosptlTracking.get("code") == 3000)
			{
				hsptlmap = Map();
				hsptlmap.put("Branch",getLead.get("Hospital_Branch"));
				gethsptlBranch = zoho.crm.searchRecords("Branches","(Name:equals:" + getLead.get("Hospital_Branch") + ")");
				if(gethsptlBranch.size() > 0)
				{
					for each  hsptlrec in gethsptlBranch
					{
						gethsptl = zoho.crm.getRelatedRecords("Hospital19","Branches",hsptlrec.get("id"));
						for each  rec in gethsptl
						{
							if(rec.get("Hospital_Branches") != null)
							{
								hsptlmap.put("Hospital1",rec.get("Hospital_Branches").get("name"));
							}
						}
					}
				}
			}
		}
		else
		{
			hsptlmap.put("Branch","");
			hsptlmap.put("Hospital1","");
		}
		creatorID = creatorHosptlTracking.get("data").get(0).get("ID");
		updateHospitalTracking = zoho.creator.updateRecord("lion_visavie","visavie","All_Hospital_Trackings",creatorID.tolong(),hsptlmap,Map(),"zoho_mail");
	}
	else
	{
		/*Hospital Tracking Starts*/
		datamap = Map();
		datamap.put("Lead_ID",getLead.get("id"));
		datamap.put("Status",getLead.get("Status"));
		datamap.put("Lead_Creation_Date",zoho.currentdate.toString("dd-MMM-yyyy"));
		if(getLead.get("Hospital_Branch") != null)
		{
			datamap.put("Branch",getLead.get("Hospital_Branch"));
			gethsptlBranch = zoho.crm.searchRecords("Branches","(Name:equals:" + getLead.get("Hospital_Branch") + ")");
			if(gethsptlBranch.size() > 0)
			{
				for each  hsptlrec in gethsptlBranch
				{
					gethsptl = zoho.crm.getRelatedRecords("Hospital19","Branches",hsptlrec.get("id"));
					for each  rec in gethsptl
					{
						if(rec.get("Hospital_Branches") != null)
						{
							datamap.put("Hospital1",rec.get("Hospital_Branches").get("name"));
						}
					}
				}
			}
		}
		if(getLead.get("Add_healthcare_network_contact") == "Créer nouveau contact/Create new contact")
		{
			datamap.put("Contact_Name",getLead.get("First_name_R") + " " + getLead.get("Last_name_R"));
			datamap.put("Email",getLead.get("Email_R"));
			datamap.put("Work_Phone",getLead.get("Work_phone_R"));
			datamap.put("Province",getLead.get("Province_R"));
			datamap.put("City",getLead.get("City_R"));
			datamap.put("Cell_phone",getLead.get("Cell_phone_R"));
			datamap.put("Home_Phone",getLead.get("Home_phone_R"));
		}
		else if(getLead.get("Add_healthcare_network_contact") == "Choisir contact existant/Select existing contact")
		{
			Existing_Health_info = getLead.get("Existing_H_N_contact");
			if(Existing_Health_info != null)
			{
				Existing_Health_ID = Existing_Health_info.get("id");
				getexisting_H_contact = zoho.crm.getRecordById("Contacts",Existing_Health_ID);
				if(getexisting_H_contact.get("id") != null)
				{
					datamap.put("Contact_ID",getexisting_H_contact.get("id"));
					datamap.put("Contact_Name",getexisting_H_contact.get("First_Name") + " " + getexisting_H_contact.get("Last_Name"));
					datamap.put("Email",getexisting_H_contact.get("E_mail_Courriel_1"));
					datamap.put("Work_Phone",getexisting_H_contact.get("T_l_phone_maison"));
					datamap.put("Province",getexisting_H_contact.get("Provinces"));
					datamap.put("City",getexisting_H_contact.get("Ville_City"));
					datamap.put("Cell_phone",getexisting_H_contact.get("Cellulaire"));
					datamap.put("Home_Phone",getexisting_H_contact.get("T_l_phone_travail"));
				}
			}
		}
		createHospitalTracking = zoho.creator.createRecord("lion_visavie","visavie","Hospital_Tracking",datamap,Map(),"zoho_mail");
		if(createHospitalTracking.get("code") != 3000)
		{
			developMap = Map();
			developMap.put("Module","New Leads");
			developMap.put("Process_Description","CRM: Create Hospital Tracking in Creator");
			developMap.put("In_Data",leadID);
			developMap.put("Out_Response",createHospitalTracking);
			hospitalResponse = zoho.creator.createRecord("lion_visavie","visavie","Developer_Log",developMap,Map(),"zoho_mail");
		}
		/*Hospital Tracking ends*/
		/*Tracking starts -Create*/
		dataMap = Map();
		dataMap.put("Name",getLead.get("Lead_First_Name") + " " + getLead.get("Lead_Last_Name"));
		dataMap.put("Email",getLead.get("Email"));
		dataMap.put("Source",getLead.get("Source"));
		if(getLead.get("Counselor") != null)
		{
			dataMap.put("Counselor_name",getLead.get("Counselor").get("name"));
			dataMap.put("Counselor_ID",getLead.get("Counselor").get("id"));
			/*user*/
			getCounselor = zoho.crm.getRecordById("Advisor",getLead.get("Counselor").get("id").toLong());
			if(getCounselor.get("id") != null && getCounselor.get("Counselor_user") != null)
			{
				getOwner = zoho.crm.getRecordById("users",getCounselor.get("Counselor_user").get("id").toLong());
				if(getOwner.get("users") != null)
				{
					for each  rec in getOwner.get("users")
					{
						if(rec.get("status") == "active")
						{
							dataMap.put("Counselor_User",rec.get("id"));
						}
						else
						{
							dataMap.put("Counselor_User",null);
						}
					}
				}
			}
		}
		if(getLead.get("Temporary_counselor") != null)
		{
			var2 = "";
			dataMap.put("Temporary_Counselor_name",getLead.get("Temporary_counselor").get("name"));
			dataMap.put("Temporary_Counselor_ID",getLead.get("Temporary_counselor").get("id"));
			/*user*/
			getCounselor = zoho.crm.getRecordById("Advisor",getLead.get("Temporary_counselor").get("id").toLong());
			if(getCounselor.get("id") != null && getCounselor.get("Counselor_user") != null)
			{
				getOwner = zoho.crm.getRecordById("users",getCounselor.get("Counselor_user").get("id").toLong());
				if(getOwner.get("users") != null)
				{
					for each  rec in getOwner.get("users")
					{
						if(rec.get("status") == "active")
						{
							dataMap.put("Temporary_User",rec.get("id"));
						}
						else
						{
							dataMap.put("Temporary_User",null);
						}
					}
				}
			}
		}
		dataMap.put("Initial_Stage","Leads");
		/*New Lead Information*/
		dataMap.put("Phone",getLead.get("Phone"));
		dataMap.put("Mobile",getLead.get("Mobile"));
		dataMap.put("Lead_origin_1",getLead.get("Lead_origin"));
		dataMap.put("Region_sought",getLead.get("Region_sought"));
		dataMap.put("Lead_category",getLead.get("Lead_category"));
		dataMap.put("Personal_reference_1",getLead.get("Personal_reference"));
		dataMap.put("Service_s_recherch_s",getLead.get("Service_s_recherch_s"));
		dataMap.put("Type_de_client",getLead.get("Type_de_client"));
		dataMap.put("Lead_Status_1",getLead.get("Status"));
		dataMap.put("Lead_Type",getLead.get("Lead_Type"));
		dataMap.put("Available_Contact_Information",getLead.get("Available_Contact"));
		/*Lead Information*/
		dataMap.put("Lead_Name",getLead.get("Lead_First_Name") + " " + getLead.get("Lead_Last_Name"));
		dataMap.put("Lead_Stage","Lead Created");
		dataMap.put("Lead_Creation_Date",getLead.get("Creation_Date"));
		dataMap.put("Type_de_conversion1",getLead.get("Type_de_conversion"));
		dataMap.put("Reason",getLead.get("Raison_recyclage_disqualification"));
		dataMap.put("Lead_ID",getLead.get("id"));
		/*Login User Information*/
		userID = zoho.loginuserid;
		if(userID != null)
		{
			getUser = zoho.crm.searchRecords("users","(email:equals:" + userID + ")");
			if(getUser.size() > 0)
			{
				for each  userInfo in getUser.get("users")
				{
					dataMap.put("Login_User",ifnull(userInfo.get("full_name"),""));
					dataMap.put("Login_User_Email",ifnull(userInfo.get("email"),""));
					if(userInfo.get("role") != null)
					{
						dataMap.put("Login_User_Role",userInfo.get("role").get("name"));
					}
					else
					{
						dataMap.put("Login_User_Role",null);
					}
				}
			}
		}
		createTracking = zoho.crm.createRecord("Tracking",dataMap);
		if(createTracking.get("id") != null)
		{
			updateLeadMap = Map();
			updateLeadMap.put("Tracking_Id",createTracking.get("id"));
			updateLead = zoho.crm.updateRecord("New_Leads",leadID.toNumber(),updateLeadMap);
		}
		else
		{
			dataMap = Map();
			dataMap.put("Module","New Leads");
			dataMap.put("Process_Description","CRM: Create Lead in Tracking Record");
			dataMap.put("In_Data",leadID);
			dataMap.put("Out_Response",createTracking);
			createResponse = zoho.creator.createRecord("lion_visavie","visavie","Developer_Log",dataMap,Map(),"zoho_mail");
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","New Leads");
	dataMap.put("Process_Description","CRM: Update Lead in Tracking Record");
	dataMap.put("In_Data",leadID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord("lion_visavie","visavie","Developer_Log",dataMap,Map(),"zoho_mail");
}
