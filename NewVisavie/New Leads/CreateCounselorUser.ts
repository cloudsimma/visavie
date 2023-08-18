try 
{
	getLead = zoho.crm.getRecordById("New_Leads",id);
	lead_map = Map();
	counselorUserFlag = false;
	if(getLead.get("id") != null)
	{
		if(getLead.get("Owner") != null)
		{
			getOwner = zoho.crm.getRecordById("users",getLead.get("Owner").get("id").toLong());
			if(getOwner.containKey("users") && getOwner.get("users") != null)
			{
				userMap = getOwner.get("users").toMap();
				if(userMap.containKey("role") && userMap.containKey("role") != null && userMap.get("role").get("name") != null)
				{
					if(userMap.get("role").get("name") == "Conseillères")
					{
						counselorUserFlag = true;
					}
				}
			}
		}
		if(counselorUserFlag == true && getLead.get("Counselor") == null)
		{
			if(getLead.get("Owner") != null && getLead.get("Owner").get("id") != null)
			{
				owner_id = getLead.get("Owner").get("id");
				fet_counselor = zoho.crm.searchRecords("Advisor","(Counselor_user:equals:" + owner_id + ")");
				if(fet_counselor.size() > 0)
				{
					fet_counselor_id = fet_counselor.get(0).get("id");
					if(fet_counselor_id != null)
					{
						lead_map.put("Counselor",fet_counselor_id);
						lead_map.put("Counselor_User",owner_id);
					}
				}
			}
		}
		if(getLead.get("Counselor") != null)
		{
			counselorId = getLead.get("Counselor").get("id");
			getCounselor = zoho.crm.getRecordById("Advisor",counselorId.toLong());
			if(getCounselor.get("id") != null)
			{
				getUser = getCounselor.get("Counselor_user");
				if(getUser != null)
				{
					lead_map.put("Counselor_User",getUser.get("id"));
				}
			}
			else
			{
				lead_map.put("Counselor_User",null);
			}
		}
		if(getLead.get("Temporary_counselor") != null)
		{
			tempCounselorId = getLead.get("Temporary_counselor").get("id");
			getTempCounselor = zoho.crm.getRecordById("Advisor",tempCounselorId.toLong());
			if(getTempCounselor.get("id") != null)
			{
				getTempUser = getTempCounselor.get("Counselor_user");
				if(getTempUser != null)
				{
					lead_map.put("Temporary_Counselor_User",getTempUser.get("id"));
				}
			}
			else
			{
				lead_map.put("Temporary_Counselor_User",null);
			}
		}
		else
		{
			lead_map.put("Temporary_Counselor_User",null);
		}
		if(lead_map.size() > 0)
		{
			updateLead = zoho.crm.updateRecord("New_Leads",id,lead_map);
			v_lead = zoho.crm.getRecordById("New_Leads",id);
			// Counselor
			if(v_lead.containKey("Counselor") && v_lead.get("Counselor") != null)
			{
				adv_map = v_lead.get("Counselor");
				if(adv_map.containKey("id") && adv_map.get("id") != null)
				{
					v_adv = zoho.crm.getRecordById("Advisor",adv_map.get("id"));
					if(v_adv.containKey("Advisor_Email") && v_adv.containKey("Advisor_Email") != null)
					{
						url = "https://crm.zoho.com/crm/org746753262/tab/Leads/" + id;
						lead_name = ifnull(v_lead.get("Lead_First_Name"),"") + "" + ifnull(v_lead.get("Lead_Last_Name"),"");
						card = "<html><body>Bonjour " + v_adv.get("Name") + "!<br><br>Le prospect " + lead_name + " a été qualifié et a vous a été assigné par " + zoho.loginuser + ".<br><br>Merci<br><br>Hello " + v_adv.get("Name") + "!<br><br>The Lead has been qualified and assigned to you by " + zoho.loginuser + ".<br><br>Thank You</body><br><a href='" + url + "'>Voir prospect/View lead</a><br></html>";
						if(counselorUserFlag == false)
						{
							sendmail
							[
								from :zoho.loginuserid
								to :v_adv.get("Advisor_Email")
								subject :"Nouvelle alerte prospect/Lead assigned notification - " + lead_name
								message :card
							]
							datamaps = Map();
							dataList = List();
							notes_map = Map();
							content = "The mail notification has been sent to " + v_adv.get("Advisor_Email") + " " + zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-04:00");
							notes_map.put("Note_Title","Conseiller Mail Notification");
							notes_map.put("Note_Content",content);
							notes_map.put("Parent_Id",id);
							notes_map.put("se_module","New_Leads");
							dataList.add(notes_map);
							datamaps.put("data",dataList);
							notecreate = zoho.crm.createRecord("Notes",notes_map);
						}
					}
				}
			}
			//Temporary Counselor
			if(v_lead.containKey("Temporary_counselor") && v_lead.get("Temporary_counselor") != null)
			{
				adv_map = v_lead.get("Temporary_counselor");
				if(adv_map.containKey("id"))
				{
					if(adv_map.get("id") != null)
					{
						v_adv = zoho.crm.getRecordById("Advisor",adv_map.get("id"));
						if(v_adv.containKey("Advisor_Email"))
						{
							url = "https://crm.zoho.com/crm/org746753262/tab/Leads/" + id;
							lead_name = ifnull(v_lead.get("Lead_First_Name"),"") + "" + ifnull(v_lead.get("Lead_Last_Name"),"");
							card = "<html><body>Bonjour " + v_adv.get("Name") + "!<br><br>Le prospect " + lead_name + " a été qualifié et a vous a été assigné par " + zoho.loginuser + ".<br><br>Hello " + v_adv.get("Name") + "!<br><br>The Lead has been qualified and assigned to you by " + zoho.loginuser + ".<br><br></body><a href='" + url + "'>View Lead</a><br><br>Thank You<br></html>";
							sendmail
							[
								from :zoho.loginuserid
								to :v_adv.get("Advisor_Email")
								subject :"Lead Assigned Notification - " + lead_name + "/Nouvelle alerte prospect – " + lead_name
								message :card
							]
							datamaps = Map();
							dataList = List();
							notes_map = Map();
							content = "The mail notification has been sent to " + v_adv.get("Advisor_Email") + " " + zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-04:00");
							notes_map.put("Note_Title","Temporary Conseiller Mail Notification");
							notes_map.put("Note_Content",content);
							notes_map.put("Parent_Id",id);
							notes_map.put("se_module","New_Leads");
							dataList.add(notes_map);
							datamaps.put("data",dataList);
							notecreate = zoho.crm.createRecord("Notes",notes_map);
						}
					}
				}
			}
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","New Lead");
	dataMap.put("Process_Description","In CRM - Create Counselor and Temporary Counselor user");
	dataMap.put("In_Data",id.toString());
	dataMap.put("Out_Response",e);
	leadResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
