void DefaultViewLanguage(Deal_Residences id)
{
	try 
	{
		getDealRes = Deal_Residences[ID == input.id];
		mail_list = List();
		defaultLang = "";
		if(getDealRes.count() > 0)
		{
			getDeal = Deals[CRM_Deal_ID == getDealRes.Deal_ID].ID;
			getRes = Residences[ID == getDealRes.Residences];
			if(getRes.count() > 0)
			{
				get_crm_deal = zoho.crm.getRecordById("Residence",getRes.CRM_ID.toLong(),Map(),"zoho_one");
				// 				info get_crm_deal;
				// 				info "Sub form:" + get_crm_deal.get("Contac");
				LoopCount = 0;
				for each  subform_contcat in get_crm_deal.get("Contac")
				{
					LoopCount = LoopCount + 1;
					if(subform_contcat.get("Contact") != null)
					{
						// get lang detail
						if(LoopCount == 1)
						{
							crmContact = zoho.crm.getRecordById("Contacts",subform_contcat.get("Contact").get("id").toLong(),Map(),"zoho_one");
							//info "crmContact :" + crmContact;
							defaultLang = crmContact.get("Languages");
							//info "Language :" + defaultLang;
						}
						// get mail list
						if(subform_contcat.get("Send_profile_confirmation") == true)
						{
							if(subform_contcat.get("Email") != "" && subform_contcat.get("Email") != null)
							{
								mail_list.add(subform_contcat.get("Email"));
							}
						}
					}
				}
				openUrl("#Form:View_Profile?Default_View_Language=" + defaultLang + "&Deal_ID=" + getDeal + "&Residence_Number=" + getDealRes.Residences + "&Deal_Resp_ID=" + getDealRes.ID + "&From_CRM=false" + "&Contact_Email=" + mail_list,"popup window","height=300,width=500");
			}
			else
			{
				thisapp.addDeveloperLog("Creator : View Profile","Pop Up form",input.id.toString(),"Deal Residences Not Available");
			}
		}
	}
	catch (e)
	{
		thisapp.addDeveloperLog("Creator : View Profile","Pop Up form",input.id.toString(),e);
	}
}
