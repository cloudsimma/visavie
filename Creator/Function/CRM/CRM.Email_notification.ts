void CRM.Email_notification()
{
	lead_map = Map();
	det_map = Map();
	adv_map = Map();
	lead_map.put("First_Namee","Email Test");
	lead_map.put("Last_Name","Lead Notes");
	lead_map.put("Advisors",4846491000009438065);
	createLeadResponse = zoho.crm.createRecord("Leads",lead_map,Map(),"zoho_one");
	CRM_ID = createLeadResponse.get("id");
	v_lead = zoho.crm.getRecordById("Leads",CRM_ID.toLong(),det_map,"zoho_one");
	// Counselor
	if(v_lead.containKey("Advisors") && v_lead.containKey("Advisors") != null)
	{
		adv_map = v_lead.get("Advisors");
		if(adv_map.containKey("id") && adv_map.containKey("id") != null)
		{
			Advisor_response = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v2.1/Advisor/" + adv_map.get("id")
				type :GET
				connection:"zoho_one"
			];
			for each  v_adv in Advisor_response.get("data")
			{
				if(v_adv.containKey("Advisor_Email") && v_adv.containKey("Advisor_Email") != null)
				{
					url = "https://crm.zoho.com/crm/org746753262/tab/Leads/" + CRM_ID;
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
					content = "The mail notification has been sent to " + v_adv.get("Advisor_Email") + " " + zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-05:00");
					notes_map.put("Note_Title","Conseiller Mail Notification");
					notes_map.put("Note_Content",content);
					notes_map.put("Parent_Id",CRM_ID);
					notes_map.put("se_module","Leads");
					dataList.add(notes_map);
					datamaps.put("data",dataList);
					notecreate = zoho.crm.createRecord("Notes",notes_map,Map(),"zoho_one");
					info notecreate;
				}
			}
		}
	}
}