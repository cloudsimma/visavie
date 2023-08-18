try 
{
	deal = Deals[ID == input.Deal_ID];
	if(deal.count() > 0)
	{
		/*Data Extraction -starts*/
		// 	if(deal.count() > 0)
		// 	{
		// 		dealUser = ifnull(deal.Deal_CRM_Login,"");
		// 		dealNumber = ifnull(deal.Deal_Number,"");
		// 		sendEmail = input.Contact_Email;
		// 		getCounselor = Advisor[ID == deal.Counselor];
		// 		if(getCounselor.count() > 0 && getCounselor.Advisor_Name != null)
		// 		{
		// 			advisorName = getCounselor.Advisor_Name;
		// 		}
		// 		else
		// 		{
		// 			advisorName = null;
		// 		}
		// 		getRes = Residences[ID == input.Residence_Number];
		// 		if(getRes.ID != null)
		// 		{
		// 			nameofGroup = ifnull(getRes.Name_of_the_group,"");
		// 			billingProvince = ifnull(getRes.Billing_province,"");
		// 			getDealRes = Deal_Residences[Residences == input.Residence_Number];
		// 			if(getDealRes.count() > 0)
		// 			{
		// 				addData = insert into Data_extraction
		// 				[
		// 					Added_User=zoho.loginuser
		// 					User=dealUser
		// 					Residence_number=getRes.Residence_number
		// 					Residences=getRes.Usual_name
		// 					Deal_Number=dealNumber
		// 					Deal_CRM_ID=deal.CRM_Deal_ID
		// 					Date_profile_sent=zoho.currentdate
		// 					Residence_CRMID=getDealRes.CRM_ID
		// 					Counselor=advisorName
		// 					Name_of_Group=nameofGroup
		// 					Email=sendEmail
		// 					Province=billingProvince
		// 				];
		// 				if(addData == null)
		// 				{
		// 					thisapp.addDeveloperLog("Creator : Send Email","Insert record in Data Extraction",input.Deal_ID.toString(),addData.toString());
		// 				}
		// 			}
		// 		}
		// 	}
		/*Data Extraction -Ends*/
		field_attachment = input.Attachment;
		input.Message_Body = input.Message_Body;
		if(input.Language == "French")
		{
			if(deal.Client_ID != null)
			{
				link = "https://creatorapp.zohopublic.com/lion_visavie/visavie/page-perma/View_Client_Profile/ZKCqDjJ0XeFZDetsyfY8XUkfKKqxAu3hDjm1S9XJbgsBkxQeykGe1MZdAz6PeAzXnbCgHbBNF5K9R10VxPtRR2gwumj1M5w7Jqt4?dealCRMID=" + input.Deal_ID.CRM_Deal_ID + "&Language=" + input.Language;
				pageUrl1 = "https://creatorapp.zohopublic.com/lion_visavie/visavie/pdf/View_Client_Profile/ZKCqDjJ0XeFZDetsyfY8XUkfKKqxAu3hDjm1S9XJbgsBkxQeykGe1MZdAz6PeAzXnbCgHbBNF5K9R10VxPtRR2gwumj1M5w7Jqt4?dealCRMID=" + input.Deal_ID.CRM_Deal_ID.toLong() + "&Language=" + input.Language + "&isc5page=true&zc_FileName=" + input.Deal_ID.Client_ID.Full_Name;
				getPageUrl1 = invokeurl
				[
					url :pageUrl1
					type :GET
				];
			}
			if(deal.Client_2 != null)
			{
				link = "https://creatorapp.zohopublic.com/lion_visavie/visavie/page-perma/View_Client_Profile_1/MeFASOf350z5adw4DytbMDw90UO49CE4bGb5qjzWy5fO9nZQeEYwnJRpMHFEaqBKOYGzQuX70gRhnp9fpkqyOzsNTpXJTrZJT3RV?dealCRMID=" + input.Deal_ID.CRM_Deal_ID + "&Language=" + input.Language;
				pageUrl2 = "https://creatorapp.zohopublic.com/lion_visavie/visavie/pdf/View_Client_Profile_1/MeFASOf350z5adw4DytbMDw90UO49CE4bGb5qjzWy5fO9nZQeEYwnJRpMHFEaqBKOYGzQuX70gRhnp9fpkqyOzsNTpXJTrZJT3RV?dealCRMID=" + input.Deal_ID.CRM_Deal_ID.toLong() + "&Language=" + input.Language + "&isc5page=true&zc_FileName=" + input.Deal_ID.Client_2.Full_Name;
				getPageUrl2 = invokeurl
				[
					url :pageUrl2
					type :GET
				];
			}
		}
		else
		{
			if(deal.Client_ID != null)
			{
				link = "https://creatorapp.zohopublic.com/lion_visavie/visavie/page-perma/View_Client_Profile/ZKCqDjJ0XeFZDetsyfY8XUkfKKqxAu3hDjm1S9XJbgsBkxQeykGe1MZdAz6PeAzXnbCgHbBNF5K9R10VxPtRR2gwumj1M5w7Jqt4?dealCRMID=" + input.Deal_ID.CRM_Deal_ID + "&Language=" + input.Language;
				pageUrl1 = "https://creatorapp.zohopublic.com/lion_visavie/visavie/pdf/View_Client_Profile/ZKCqDjJ0XeFZDetsyfY8XUkfKKqxAu3hDjm1S9XJbgsBkxQeykGe1MZdAz6PeAzXnbCgHbBNF5K9R10VxPtRR2gwumj1M5w7Jqt4?dealCRMID=" + input.Deal_ID.CRM_Deal_ID.toLong() + "&Language=" + input.Language + "&isc5page=true&zc_FileName=" + input.Deal_ID.Client_ID.Full_Name;
				getPageUrl1 = invokeurl
				[
					url :pageUrl1
					type :GET
				];
			}
			if(deal.Client_2 != null)
			{
				link = "https://creatorapp.zohopublic.com/lion_visavie/visavie/page-perma/View_Client_Profile_1/MeFASOf350z5adw4DytbMDw90UO49CE4bGb5qjzWy5fO9nZQeEYwnJRpMHFEaqBKOYGzQuX70gRhnp9fpkqyOzsNTpXJTrZJT3RV?dealCRMID=" + input.Deal_ID.CRM_Deal_ID + "&Language=" + input.Language;
				pageUrl2 = "https://creatorapp.zohopublic.com/lion_visavie/visavie/pdf/View_Client_Profile_1/MeFASOf350z5adw4DytbMDw90UO49CE4bGb5qjzWy5fO9nZQeEYwnJRpMHFEaqBKOYGzQuX70gRhnp9fpkqyOzsNTpXJTrZJT3RV?dealCRMID=" + input.Deal_ID.CRM_Deal_ID.toLong() + "&Language=" + input.Language + "&isc5page=true&zc_FileName=" + input.Deal_ID.Client_2.Full_Name;
				getPageUrl2 = invokeurl
				[
					url :pageUrl2
					type :GET
				];
			}
		}
		if(input.Contact_Email != null)
		{
			contact_lst = input.Contact_Email.toList();
			if(contact_lst.size() > 0)
			{
				for each  rec in contact_lst
				{
					if(getPageUrl1 != "" && getPageUrl2 != "")
					{
						if(field_attachment != "")
						{
							sendmail
							[
								from :zoho.adminuserid
								to :rec
								subject :"Visavie " + "Démarche " + input.Deal_ID.Deal_Number + ":" + input.Deal_ID.Subject_field
								message :input.Message_Body
								Attachments :file:getPageUrl1,file:getPageUrl2,file:field_attachment
							]
						}
						else
						{
							sendmail
							[
								from :zoho.adminuserid
								to :rec
								subject :"Visavie " + "Démarche " + input.Deal_ID.Deal_Number + ":" + input.Deal_ID.Subject_field
								message :input.Message_Body
								Attachments :file:getPageUrl1,file:getPageUrl2
							]
						}
					}
					else if(getPageUrl1 != "")
					{
						if(field_attachment != "")
						{
							sendmail
							[
								from :zoho.adminuserid
								to :rec
								subject :"Visavie " + "Démarche " + input.Deal_ID.Deal_Number + ":" + input.Deal_ID.Subject_field
								message :input.Message_Body
								Attachments :file:getPageUrl1,file:field_attachment
							]
						}
						else
						{
							sendmail
							[
								from :zoho.adminuserid
								to :rec
								subject :"Visavie " + "Démarche " + input.Deal_ID.Deal_Number + ":" + input.Deal_ID.Subject_field
								message :input.Message_Body
								Attachments :file:getPageUrl1
							]
						}
					}
				}
				if(input.Deal_ID != null)
				{
					openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/report-perma/All_Deal_Residences/0XJfCqJtkqGQSh7rCPepFbu1prwGHywAO1SObXQEEnCPdTaqytzFY9YO9qBEXxnS0GHSTdg9ETuMUVdnTHDBpaSwfBpf0W6tO0Q2?Deal_ID=" + input.Deal_ID.CRM_Deal_ID,"same window");
				}
			}
		}
		// 	if(input.Deal_ID != null)
		// 	{
		// 		deal_crm = Deals[ID == input.Deal_ID].CRM_Deal_ID;
		// 		get_crm_deal = zoho.crm.getRecordById("Deals",deal_crm.toLong(),Map(),"zoho_one");
		// 		content = "";
		// 		lst = List();
		// 		main_map = Map();
		// 		residence = Residences[ID == input.Residence_Number].CRM_ID;
		// 		get_deal = Deals[ID == input.Deal_ID].Deal_Residence;
		// 		for each  subform in get_deal
		// 		{
		// 			if(subform.Residences == input.Residence_Number)
		// 			{
		// 				profileDate = zoho.currentdate;
		// 				subform.Date_Profile_Sent1=profileDate.toString("dd/MM/yyyy");
		// 			}
		// 		}
		// 		for each  rec in get_crm_deal.get("Subform_3")
		// 		{
		// 			if(rec.get("Residence").get("id") == residence)
		// 			{
		// 				subform_map = Map();
		// 				subform_map.put("Date_profile_sent",zoho.currentdate);
		// 				subform_map.put("Residence_Number",rec.get("Residence_Number"));
		// 				subform_map.put("Residence",rec.get("Residence"));
		// 				subform_map.put("Invoice_Preference",rec.get("Invoice_Preference"));
		// 				subform_map.put("Statut",rec.get("Statut"));
		// 				subform_map.put("Ancien_Residence_Id",rec.get("Ancien_Residence_Id"));
		// 				lst.add(subform_map);
		// 				content = "The profile sent date was updated to the residence" + " " + rec.get("Residence_Number") + " " + "on" + " " + zoho.currentdate;
		// 			}
		// 			else
		// 			{
		// 				subform_map = Map();
		// 				subform_map.put("Date_profile_sent",rec.get("Date_profile_sent"));
		// 				subform_map.put("Residence_Number",rec.get("Residence_Number"));
		// 				subform_map.put("Residence",rec.get("Residence"));
		// 				subform_map.put("Invoice_Preference",rec.get("Invoice_Preference"));
		// 				subform_map.put("Statut",rec.get("Statut"));
		// 				subform_map.put("Ancien_Residence_Id",rec.get("Ancien_Residence_Id"));
		// 				lst.add(subform_map);
		// 			}
		// 		}
		// 		main_map.put("Subform_3",lst);
		// 		update_crm_deal = zoho.crm.updateRecord("Deals",deal_crm.toLong(),main_map,Map(),"zoho_one");
		// 		deal = Deals[ID == input.Deal_ID];
		// 		deal.Date_Profile_Sent=zoho.currentdate;
		// 		/*creating notes -starts*/
		// 		if(update_crm_deal.get("id") != null)
		// 		{
		// 			if(content != "")
		// 			{
		// 				note_map = Map();
		// 				datamaps = Map();
		// 				dataList = List();
		// 				note1 = Map();
		// 				note1.put("Note_Title","Profile sent date update");
		// 				note1.put("Note_Content",content);
		// 				note1.put("Parent_Id",update_crm_deal.get("id"));
		// 				note1.put("se_module","Deals");
		// 				dataList.add(note1);
		// 				datamaps.put("data",dataList);
		// 				notecreate = invokeurl
		// 				[
		// 					url :"https://www.zohoapis.com/crm/v2/Deals/" + update_crm_deal.get("id") + "/Notes"
		// 					type :POST
		// 					parameters:datamaps.toString()
		// 					connection:"zoho_one"
		// 				];
		// 			}
		// 		}
		// 		/*creating notes -ends*/
		// 	}
	}
}
catch (e)
{
	thisapp.addDeveloperLog("Creator : Send mail language","Update records to Deal CRM",input.Deal_ID.toString(),e);
}
