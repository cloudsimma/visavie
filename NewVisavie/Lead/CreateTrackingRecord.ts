try 
{
	getLead = zoho.crm.getRecordById("Leads",leadID.toNumber());
	if(getLead.get("id") != null)
	{
		/*update hospital contact*/
		updatemap = Map();
		if(getLead.get("Hospital") == null)
		{
			if(getLead.get("Choose_Healthcare_Contact") == "Choisir contact existant/Select existing contact")
			{
				Existing_Health_info = getLead.get("Healthcare_Contact1");
				if(Existing_Health_info != null)
				{
					Existing_Health_ID = Existing_Health_info.get("id");
					getexisting_H_contact = zoho.crm.getRecordById("Contacts",Existing_Health_ID);
					if(getexisting_H_contact.get("id") != null)
					{
						/*updating Hospital Contact in Deal*/
						gethospitalContact = zoho.crm.searchRecords("Hospital_Contacts","(Contact_ID:equals:" + getexisting_H_contact.get("id") + ")");
						if(gethospitalContact.size() > 0)
						{
							for each  rec in gethospitalContact
							{
								if(rec.get("id") != null)
								{
									/*update Hospital contact in Lead*/
									updatemap = Map();
									updatemap.put("Hospital",rec.get("id"));
									updatemap.put("Hospital_contact",getLead.get("id"));
									createres = zoho.crm.createRecord("LeadXHospitalContact",updatemap);
								}
							}
						}
						else
						{
							/*create Hospital contact*/
							hsptlContact = Map();
							hsptlContact.put("Name",getexisting_H_contact.get("First_Name") + " " + getexisting_H_contact.get("Last_Name"));
							hsptlContact.put("Email",getexisting_H_contact.get("E_mail_Courriel_1"));
							hsptlContact.put("Phone",getexisting_H_contact.get("Cellulaire"));
							hsptlContact.put("Contact_Sex",getexisting_H_contact.get("Sexe"));
							hsptlContact.put("Work_Phone",getexisting_H_contact.get("T_l_phone_maison"));
							hsptlContact.put("Contact_ID",getexisting_H_contact.get("id"));
							createHospitalcontact = zoho.crm.createRecord("Hospital_Contacts",hsptlContact);
							if(createHospitalcontact.get("id") != null)
							{
								/*update Hospital contact in Lead*/
								updatemap = Map();
								updatemap.put("Hospital",createHospitalcontact.get("id"));
								updatemap.put("Hospital_contact",getLead.get("id"));
								createres = zoho.crm.createRecord("LeadXHospitalContact",updatemap);
							}
						}
					}
				}
			}
		}
	}
	getLead = zoho.crm.getRecordById("Leads",leadID.toNumber());
	if(getLead.get("id") != null)
	{
		appName = "visavie";
		ownerName = "lion_visavie";
		formName = "Developer_Log";
		dataMap = Map();
		dataMap.put("Lead_Name",getLead.get("First_Namee") + " " + getLead.get("Last_Name"));
		dataMap.put("Name",getLead.get("First_Namee") + " " + getLead.get("Last_Name"));
		dataMap.put("Email",getLead.get("Courriel_Email"));
		dataMap.put("Province",getLead.get("Province"));
		dataMap.put("Initial_Stage","Leads");
		dataMap.put("Lead_Stage","Lead Created");
		if(getLead.get("Advisors") != null)
		{
			dataMap.put("Counselor_name",getLead.get("Advisors").get("name"));
			dataMap.put("Counselor_ID",getLead.get("Advisors").get("id"));
			/*user*/
			getCounselor = zoho.crm.getRecordById("Advisor",getLead.get("Advisors").get("id").toLong());
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
		if(getLead.get("Conseiller_Counselor") != null)
		{
			dataMap.put("Temporary_Counselor_name",getLead.get("Conseiller_Counselor").get("name"));
			dataMap.put("Temporary_Counselor_ID",getLead.get("Conseiller_Counselor").get("id"));
			/*user*/
			getCounselor = zoho.crm.getRecordById("Advisor",getLead.get("Conseiller_Counselor").get("id").toLong());
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
		/* Lead Information*/
		dataMap.put("Lead_Status",getLead.get("Lead_Status_s"));
		dataMap.put("Lead_origin",getLead.get("Lead_type"));
		dataMap.put("Lead_source_1",getLead.get("Source_du_prospect"));
		dataMap.put("Lead_Creation_Date",zoho.currentdate.toString("yyyy-MM-dd"));
		dataMap.put("Type_de_conversion1",getLead.get("Test"));
		// 		dataMap.put("Type_de_conversion",getLead.get("Deal_Conversion"));
		dataMap.put("Personal_reference",getLead.get("Personal_referral"));
		dataMap.put("Lead_ID",getLead.get("id"));
		dataMap.put("Reason",getLead.get("Reason"));
		/*updating User*/
		userID = zoho.loginuserid;
		if(userID != null)
		{
			getUser = zoho.crm.searchRecords("users","(email:equals:" + userID + ")");
			if(getUser.size() > 0)
			{
				for each  userInfo in getUser.get("users")
				{
					dataMap.put("Login_User",userInfo.get("full_name"));
					dataMap.put("Login_User_Email",userInfo.get("email"));
					if(userInfo.get("role") != null)
					{
						dataMap.put("Login_User_Role",userInfo.get("role").get("name"));
					}
				}
			}
		}
		/*hospital Contact*/
		if(getLead.get("Hospital") != null)
		{
			hsptlcontactID = null;
			hsptlbranchID = null;
			contactIDList = List();
			contactNameList = List();
			/*Contact lookup-starts*/
			contactInfo = zoho.crm.getRelatedRecords("Hospital_Contacts22","Leads",getLead.get("id"));
			for each  rec in contactInfo
			{
				if(rec.get("Hospital") != null)
				{
					recID = rec.get("Hospital").get("id");
					recName = rec.get("Hospital").get("name");
					contactIDList.add(recID);
					contactNameList.add(recName);
				}
				hsptlcontactID = contactIDList.getasstring(0);
				hsptlcontactName = contactNameList.getasstring(0);
			}
			dataMap.put("Lead_Hospital",hsptlcontactName);
			dataMap.put("Lead_Hospital_ID",hsptlcontactID);
			/*Branch lookup-starts*/
			if(hsptlcontactID != null)
			{
				hsptContactlInfo = zoho.crm.getRecordById("Hospital_Contacts",hsptlcontactID);
				if(hsptContactlInfo.get("id") != null)
				{
					/*lookup-starts*/
					branchInfo = zoho.crm.getRelatedRecords("Hospital_Branches21","Hospital_Contacts",hsptContactlInfo.get("id"));
					for each  rec in branchInfo
					{
						if(rec.get("Hospital_Branches") != null)
						{
							hsptlbranchID = rec.get("Hospital_Branches").get("id");
							hsptlbranchName = rec.get("Hospital_Branches").get("name");
						}
					}
					dataMap.put("Lead_Hospital_Branch",hsptlbranchName);
				}
			}
			/*hospital lookup-starts*/
			if(hsptlbranchID != null)
			{
				hsptlbranchInfo = zoho.crm.getRecordById("Branches",hsptlbranchID);
				if(hsptlbranchInfo.get("id") != null && hsptlbranchInfo.get("Hospital_Branches") != null)
				{
					dataMap.put("Lead_Hospital1",hsptlbranchInfo.get("Hospital_Branches"));
				}
			}
		}
		createTracking = zoho.crm.createRecord("Tracking",dataMap);
		if(createTracking.get("id") != null)
		{
			updateLeadMap = Map();
			updateLeadMap.put("Tracking_Id",createTracking.get("id"));
			updateLead = zoho.crm.updateRecord("Leads",leadID.toNumber(),updateLeadMap);
		}
		else
		{
			dataMap = Map();
			dataMap.put("Module","Lead");
			dataMap.put("Process_Description","CRM: Create Lead in Tracking Record");
			dataMap.put("In_Data",leadID);
			dataMap.put("Out_Response",createTracking);
			ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
		}
	}
}
catch (e)
{
	dataMap = Map();
	dataMap.put("Module","Lead");
	dataMap.put("Process_Description","CRM: Create Lead in Tracking Record");
	dataMap.put("In_Data",leadID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
