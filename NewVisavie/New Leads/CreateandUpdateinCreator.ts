try 
{
	getLead = zoho.crm.getRecordById("New_Leads",leadID);
	if(getLead.get("id") != null)
	{
		datamap = Map();
		ownerName = "lion_visavie";
		formName = "Leads";
		appName = "visavie";
		report_name = "All_New_Leads";
		getData = zoho.creator.getRecords(ownerName,appName,report_name,"Zoho_CRM_ID == \"" + leadID + "\"",1,200,"zoho_mail");
		if(getData.get("code") == 3000)
		{
			/*Lead Informations*/
			datamap.put("Lead_First_Name",getLead.get("Lead_First_Name"));
			datamap.put("Phone",getLead.get("Phone"));
			datamap.put("Mobile",getLead.get("Mobile"));
			datamap.put("Type_de_conversion",getLead.get("Type_de_conversion"));
			datamap.put("Lead_Last_Name",getLead.get("Lead_Last_Name"));
			datamap.put("Email",getLead.get("Email"));
			datamap.put("Lead_Type",getLead.get("Lead_Type"));
			/*Decision Section*/
			datamap.put("Available_Contact_Information",getLead.get("Available_Contact"));
			datamap.put("Select_Secondary_contact",getLead.get("Select_Secondary_contact"));
			datamap.put("Select_Healthcare_Contact",getLead.get("Select_Healthcare_Contact"));
			/*Gestion prospect/Lead management*/
			if(getLead.get("Counselor") != null)
			{
				datamap.put("Counselor",getLead.get("Counselor").get("name"));
			}
			else
			{
				datamap.put("Counselor","");
			}
			if(getLead.get("Temporary_counselor") != null)
			{
				datamap.put("Temporary_counselor",getLead.get("Temporary_counselor").get("name"));
			}
			else
			{
				datamap.put("Temporary_counselor","");
			}
			datamap.put("Status",getLead.get("Status"));
			datamap.put("Raison_recyclage_disqualification",getLead.get("Raison_recyclage_disqualification"));
			/*Prospect/Lead (1)*/
			datamap.put("First_name_1",getLead.get("First_name_1"));
			datamap.put("Maiden_name",getLead.get("Maiden_name"));
			datamap.put("Province_1",getLead.get("Province_1"));
			if(getLead.get("Date_of_birth") != null)
			{
				datamap.put("Date_of_birth",getLead.get("Date_of_birth").toString("dd-MMM-yyyy"));
			}
			else
			{
				datamap.put("Date_of_birth",null);
			}
			datamap.put("Work_phone",getLead.get("Work_phone"));
			datamap.put("Home_phone",getLead.get("Home_phone"));
			datamap.put("Budget_range",getLead.get("Budget_range"));
			datamap.put("Last_name",getLead.get("Last_name"));
			datamap.put("Sex",getLead.get("Sex"));
			datamap.put("Email_1",getLead.get("Email_1"));
			datamap.put("Cell_phone",getLead.get("Cell_phone"));
			datamap.put("Home_care_start_date",getLead.get("Home_care_start_date"));
			datamap.put("Desired_moving_date",getLead.get("Desired_moving_date"));
			/*Prospect/Lead (2)*/
			datamap.put("First_name_2",getLead.get("First_name_2"));
			datamap.put("Maiden_name_2",getLead.get("Maiden_name_2"));
			if(getLead.get("Date_of_birth_2") != null)
			{
				datamap.put("Date_of_birth_2",getLead.get("Date_of_birth_2").toString("dd-MMM-yyyy"));
			}
			else
			{
				datamap.put("Date_of_birth_2",null);
			}
			datamap.put("Province_2",getLead.get("Province_2"));
			datamap.put("Work_phone_2",getLead.get("Work_phone_2"));
			datamap.put("Cell_phone_2",getLead.get("Cell_phone_2"));
			datamap.put("Budget_range_2",getLead.get("Budget_range_2"));
			datamap.put("Last_name_2",getLead.get("Last_name_2"));
			datamap.put("Sex_2",getLead.get("Sex_2"));
			datamap.put("Email_2",getLead.get("Email_2"));
			datamap.put("Home_phone_2",getLead.get("Home_phone_2"));
			datamap.put("Home_care_start_date_2",getLead.get("Home_care_start_date_2"));
			datamap.put("Desired_moving_date_2",getLead.get("Desired_moving_date_2"));
			/*Contact primaire/Primary contact*/
			datamap.put("Add_primary_contact",getLead.get("Add_primary_contact"));
			datamap.put("First_name_P",getLead.get("First_name_P"));
			datamap.put("Work_phone_P",getLead.get("Work_phone_P"));
			datamap.put("Cell_phone_P",getLead.get("Cell_phone_P"));
			datamap.put("Last_name_P",getLead.get("Last_name_P"));
			datamap.put("Sex_P",getLead.get("Sex_P"));
			datamap.put("Home_phone_P",getLead.get("Home_phone_P"));
			/*Contact secondaire/Secondary contact*/
			datamap.put("Add_secondary_contact",getLead.get("Add_secondary_contact"));
			datamap.put("First_name_S",getLead.get("First_name_S"));
			datamap.put("Work_phone_S",getLead.get("Work_phone_S"));
			datamap.put("Cell_phone_S",getLead.get("Cell_phone_S"));
			datamap.put("Last_name_S",getLead.get("Last_name_S"));
			datamap.put("Sex_S",getLead.get("Sex_S"));
			datamap.put("Home_phone_S",getLead.get("Home_phone_S"));
			/*Contact RSSS/Healthcare network contact*/
			datamap.put("Add_healthcare_network_contact",getLead.get("Add_healthcare_network_contact"));
			datamap.put("First_name_R",getLead.get("First_name_R"));
			datamap.put("Work_phone_R",getLead.get("Work_phone_R"));
			datamap.put("Cell_phone_R",getLead.get("Cell_phone_R"));
			datamap.put("Last_name_R",getLead.get("Last_name_R"));
			datamap.put("Sex_R",getLead.get("Sex_R"));
			datamap.put("Home_phone_R",getLead.get("Home_phone_R"));
			/*Informations générales/General informations*/
			datamap.put("Lead_origin",getLead.get("Lead_origin"));
			datamap.put("Region_sought",getLead.get("Region_sought"));
			datamap.put("Lead_category",getLead.get("Lead_category"));
			datamap.put("Personal_reference",getLead.get("Personal_reference"));
			datamap.put("Service_s_recherch_s",getLead.get("Service_s_recherch_s"));
			datamap.put("Type_de_client",getLead.get("Type_de_client"));
			/*Description demande/Request description*/
			datamap.put("Comments",getLead.get("Comments"));
			datamap.put("Source",getLead.get("Source"));
			creatorId = getData.get("data").get(0).get("ID");
			updateCreator = zoho.creator.updateRecord(ownerName,appName,report_name,creatorId.toLong(),datamap,Map(),"zoho_mail");
		}
		else
		{
			datamap = Map();
			ownerName = "lion_visavie";
			formName = "New_Leads";
			appName = "visavie";
			/*Lead Informations*/
			datamap.put("Lead_First_Name",getLead.get("Lead_First_Name"));
			datamap.put("Phone",getLead.get("Phone"));
			datamap.put("Mobile",getLead.get("Mobile"));
			datamap.put("Type_de_conversion",getLead.get("Type_de_conversion"));
			datamap.put("Lead_Last_Name",getLead.get("Lead_Last_Name"));
			datamap.put("Email",getLead.get("Email"));
			datamap.put("Lead_Type",getLead.get("Lead_Type"));
			datamap.put("Zoho_CRM_ID",getLead.get("id"));
			/*Decision Section*/
			datamap.put("Available_Contact_Information",getLead.get("Available_Contact"));
			datamap.put("Select_Secondary_contact",getLead.get("Select_Secondary_contact"));
			datamap.put("Select_Healthcare_Contact",getLead.get("Select_Healthcare_Contact"));
			/*Gestion prospect/Lead management*/
			if(getLead.get("Counselor") != null)
			{
				datamap.put("Counselor",getLead.get("Counselor").get("name"));
			}
			if(getLead.get("Temporary_counselor") != null)
			{
				datamap.put("Temporary_counselor",getLead.get("Temporary_counselor").get("name"));
			}
			if(getLead.get("Creation_Date") != null)
			{
				datamap.put("Creation_Date",getLead.get("Creation_Date").toString("dd-MMM-yyyy"));
			}
			datamap.put("Status",getLead.get("Status"));
			datamap.put("Raison_recyclage_disqualification",getLead.get("Raison_recyclage_disqualification"));
			/*Prospect/Lead (1)*/
			datamap.put("First_name_1",getLead.get("First_name_1"));
			datamap.put("Maiden_name",getLead.get("Maiden_name"));
			datamap.put("Province_1",getLead.get("Province_1"));
			if(getLead.get("Date_of_birth") != null)
			{
				datamap.put("Date_of_birth",getLead.get("Date_of_birth").toString("dd-MMM-yyyy"));
			}
			datamap.put("Work_phone",getLead.get("Work_phone"));
			datamap.put("Home_phone",getLead.get("Home_phone"));
			datamap.put("Budget_range",getLead.get("Budget_range"));
			datamap.put("Last_name",getLead.get("Last_name"));
			datamap.put("Sex",getLead.get("Sex"));
			datamap.put("Email_1",getLead.get("Email_1"));
			datamap.put("Cell_phone",getLead.get("Cell_phone"));
			datamap.put("Home_care_start_date",getLead.get("Home_care_start_date"));
			datamap.put("Desired_moving_date",getLead.get("Desired_moving_date"));
			/*Prospect/Lead (2)*/
			datamap.put("First_name_2",getLead.get("First_name_2"));
			datamap.put("Maiden_name_2",getLead.get("Maiden_name_2"));
			if(getLead.get("Date_of_birth_2") != null)
			{
				datamap.put("Date_of_birth_2",getLead.get("Date_of_birth_2").toString("dd-MMM-yyyy"));
			}
			datamap.put("Province_2",getLead.get("Province_2"));
			datamap.put("Work_phone_2",getLead.get("Work_phone_2"));
			datamap.put("Cell_phone_2",getLead.get("Cell_phone_2"));
			datamap.put("Budget_range_2",getLead.get("Budget_range_2"));
			datamap.put("Last_name_2",getLead.get("Last_name_2"));
			datamap.put("Sex_2",getLead.get("Sex_2"));
			datamap.put("Email_2",getLead.get("Email_2"));
			datamap.put("Home_phone_2",getLead.get("Home_phone_2"));
			datamap.put("Home_care_start_date_2",getLead.get("Home_care_start_date_2"));
			datamap.put("Desired_moving_date_2",getLead.get("Desired_moving_date_2"));
			/*Contact primaire/Primary contact*/
			datamap.put("Add_primary_contact",getLead.get("Add_primary_contact"));
			datamap.put("First_name_P",getLead.get("First_name_P"));
			datamap.put("Work_phone_P",getLead.get("Work_phone_P"));
			datamap.put("Cell_phone_P",getLead.get("Cell_phone_P"));
			datamap.put("Last_name_P",getLead.get("Last_name_P"));
			datamap.put("Sex_P",getLead.get("Sex_P"));
			datamap.put("Home_phone_P",getLead.get("Home_phone_P"));
			/*Contact secondaire/Secondary contact*/
			datamap.put("Add_secondary_contact",getLead.get("Add_secondary_contact"));
			datamap.put("First_name_S",getLead.get("First_name_S"));
			datamap.put("Work_phone_S",getLead.get("Work_phone_S"));
			datamap.put("Cell_phone_S",getLead.get("Cell_phone_S"));
			datamap.put("Last_name_S",getLead.get("Last_name_S"));
			datamap.put("Sex_S",getLead.get("Sex_S"));
			datamap.put("Home_phone_S",getLead.get("Home_phone_S"));
			/*Contact RSSS/Healthcare network contact*/
			datamap.put("Add_healthcare_network_contact",getLead.get("Add_healthcare_network_contact"));
			datamap.put("First_name_R",getLead.get("First_name_R"));
			datamap.put("Work_phone_R",getLead.get("Work_phone_R"));
			datamap.put("Cell_phone_R",getLead.get("Cell_phone_R"));
			datamap.put("Last_name_R",getLead.get("Last_name_R"));
			datamap.put("Sex_R",getLead.get("Sex_R"));
			datamap.put("Home_phone_R",getLead.get("Home_phone_R"));
			/*Informations générales/General informations*/
			datamap.put("Lead_origin",getLead.get("Lead_origin"));
			datamap.put("Region_sought",getLead.get("Region_sought"));
			datamap.put("Lead_category",getLead.get("Lead_category"));
			datamap.put("Personal_reference",getLead.get("Personal_reference"));
			datamap.put("Service_s_recherch_s",getLead.get("Service_s_recherch_s"));
			datamap.put("Type_de_client",getLead.get("Type_de_client"));
			/*Description demande/Request description*/
			datamap.put("Comments",getLead.get("Comments"));
			datamap.put("Source",getLead.get("Source"));
			creatorLead = zoho.creator.createRecord(ownerName,appName,formName,datamap,Map(),"zoho_mail");
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
	dataMap.put("Process_Description","In CRM :Create and Update records in Creator");
	dataMap.put("In_Data",leadID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
