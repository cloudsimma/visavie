try 
{
	if(input.id != null)
	{
		//Counselor edit mail notification
		v_lead = zoho.crm.getRecordById("New_Leads",id);
		if(v_lead.containKey("Counselor") && v_lead.get("Counselor") != null)
		{
			adv_map = v_lead.get("Counselor");
			if(adv_map.containKey("id") && adv_map.get("id") != null)
			{
				v_adv = zoho.crm.getRecordById("Advisor",adv_map.get("id"));
				if(v_adv.containKey("Advisor_Email") && v_adv.get("Advisor_Email") != null)
				{
					url = "https://crm.zoho.com/crm/org746753262/tab/Leads/" + id;
					lead_name = ifnull(v_lead.get("First_Namee"),"") + "" + ifnull(v_lead.get("Last_Name"),"");
					card = "<html><body>Bonjour " + v_adv.get("Name") + "!<br><br>Le prospect " + lead_name + " a été qualifié et a vous a été assigné par " + zoho.loginuser + ".<br><br>Merci<br><br>Hello " + v_adv.get("Name") + "!<br><br>The Lead has been qualified and assigned to you by " + zoho.loginuser + ".<br><br>Thank You</body><br><a href='" + url + "'>Voir prospect/View lead</a><br></html>";
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
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","New Lead");
	dataMap.put("Process_Description","In CRM : On Edit Counselor Assignment");
	dataMap.put("In_Data",id);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
