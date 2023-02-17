try 
{
	getLead = zoho.crm.getRecordById("Leads",id);
	info getLead;
	lead_map = Map();
	counselorUserFlag = false;
	if(getLead.get("id") != null)
	{
		if(getLead.get("Owner") != null)
		{
			getOwner = zoho.crm.getRecordById("users",getLead.get("Owner").get("id").toLong());
			if(getOwner.containKey("users") && getOwner.containKey("users") != null)
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
		if(counselorUserFlag == true && getLead.get("Advisors") == null)
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
						lead_map.put("Advisors",fet_counselor_id);
						lead_map.put("Counselor_User",owner_id);
					}
				}
			}
		}
		if(getLead.get("Advisors") != null)
		{
			counselorId = getLead.get("Advisors").get("id");
			info counselorId;
			getCounselor = zoho.crm.getRecordById("Advisor",counselorId.toLong());
			info getCounselor;
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
		if(getLead.get("Conseiller_Counselor") != null)
		{
			tempCounselorId = getLead.get("Conseiller_Counselor").get("id");
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
			updateLead = zoho.crm.updateRecord("Leads",id,lead_map);
			info updateLead;
			v_lead = zoho.crm.getRecordById("Leads",id);
			// Counselor
			if(v_lead.containKey("Advisors") && v_lead.get("Advisors") != null)
			{
				adv_map = v_lead.get("Advisors");
				if(adv_map.containKey("id") && adv_map.get("id") != null)
				{
					v_adv = zoho.crm.getRecordById("Advisor",adv_map.get("id"));
					if(v_adv.containKey("Advisor_Email") && v_adv.containKey("Advisor_Email") != null)
					{
						url = "https://crm.zoho.com/crm/org746753262/tab/Leads/" + id;
						lead_name = ifnull(v_lead.get("First_Namee"),"") + "" + ifnull(v_lead.get("Last_Name"),"");
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
						notes_map.put("Note_Title","Conseiller Mail Notification");
						notes_map.put("Note_Content",content);
						notes_map.put("Parent_Id",id);
						notes_map.put("se_module","Leads");
						dataList.add(notes_map);
						datamaps.put("data",dataList);
						notecreate = zoho.crm.createRecord("Notes",notes_map);
						info notecreate;
					}
				}
			}
			//Temporary Counselor
			if(v_lead.containKey("Conseiller_Counselor") && v_lead.get("Conseiller_Counselor") != null)
			{
				adv_map = v_lead.get("Conseiller_Counselor");
				if(adv_map.containKey("id"))
				{
					if(adv_map.get("id") != null)
					{
						v_adv = zoho.crm.getRecordById("Advisor",adv_map.get("id"));
						if(v_adv.containKey("Advisor_Email"))
						{
							url = "https://crm.zoho.com/crm/org746753262/tab/Leads/" + id;
							lead_name = ifnull(v_lead.get("First_Namee"),"") + "" + ifnull(v_lead.get("Last_Name"),"");
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
							notes_map.put("se_module","Leads");
							dataList.add(notes_map);
							datamaps.put("data",dataList);
							notecreate = zoho.crm.createRecord("Notes",notes_map);
							info notecreate;
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
	dataMap.put("Module","Lead");
	dataMap.put("Process_Description","In CRM - Update Counselor and Temporary Counselor user");
	dataMap.put("In_Data",id.toString());
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}