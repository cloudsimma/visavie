try 
{
	deal = zoho.crm.getRecordById("Deals",DealID.tolong());
	if(deal.get("id") != null)
	{
		appName = "visavie";
		ownerName = "lion_visavie";
		formName = "Developer_Log";
		subform_list = List();
		datamap = Map();
		if(deal.get("Contact") != null)
		{
			getcontactrecord = zoho.crm.getRecordById("Contacts",deal.get("Contact").get("id"));
			if(getcontactrecord.get("id") != null)
			{
				subformmap = Map();
				subformmap.put("contact",getcontactrecord.get("id"));
				subformmap.put("Kind_of_Contact",ifnull(getcontactrecord.get("Contact_Type"),""));
				subformmap.put("Email",ifnull(getcontactrecord.get("E_mail_Courriel_1"),null));
				subformmap.put("Work_Phone",ifnull(getcontactrecord.get("T_l_phone_maison"),null));
				subformmap.put("Work_Phone_Extension",ifnull(getcontactrecord.get("Work_Phone_Extension"),""));
				subformmap.put("Cell_Phone",ifnull(getcontactrecord.get("Cellulaire"),null));
				subformmap.put("Home_Phone",ifnull(getcontactrecord.get("T_l_phone_travail"),null));
				subform_list.add(subformmap);
			}
		}
		if(deal.get("Contacts") != null)
		{
			getcontactrecord = zoho.crm.getRecordById("Contacts",deal.get("Contacts").get("id"));
			if(getcontactrecord.get("id") != null)
			{
				subformmap = Map();
				subformmap.put("contact",getcontactrecord.get("id"));
				subformmap.put("Kind_of_Contact",ifnull(getcontactrecord.get("Contact_Type"),""));
				subformmap.put("Email",ifnull(getcontactrecord.get("E_mail_Courriel_1"),null));
				subformmap.put("Work_Phone",ifnull(getcontactrecord.get("T_l_phone_maison"),null));
				subformmap.put("Work_Phone_Extension",ifnull(getcontactrecord.get("Work_Phone_Extension"),""));
				subformmap.put("Cell_Phone",ifnull(getcontactrecord.get("Cellulaire"),null));
				subformmap.put("Home_Phone",ifnull(getcontactrecord.get("T_l_phone_travail"),null));
				subform_list.add(subformmap);
			}
		}
		for each  subform in deal.get("Contact_persons")
		{
			if(subform.get("Kind_of_Contact") != "Client" && subform.get("contact") != null)
			{
				getcontactrecord = zoho.crm.getRecordById("Contacts",subform.get("contact").get("id"));
				if(getcontactrecord.get("id") != null)
				{
					subformmap = Map();
					subformmap.put("contact",getcontactrecord.get("id"));
					subformmap.put("Kind_of_Contact",ifnull(getcontactrecord.get("Contact_Type"),""));
					subformmap.put("Email",ifnull(getcontactrecord.get("E_mail_Courriel_1"),null));
					subformmap.put("Work_Phone",ifnull(getcontactrecord.get("T_l_phone_maison"),null));
					subformmap.put("Work_Phone_Extension",ifnull(getcontactrecord.get("Work_Phone_Extension"),""));
					subformmap.put("Cell_Phone",ifnull(getcontactrecord.get("Cellulaire"),null));
					subformmap.put("Home_Phone",ifnull(getcontactrecord.get("T_l_phone_travail"),null));
					subform_list.add(subformmap);
				}
			}
		}
		if(subform_list.size() > 0)
		{
			datamap.put("Contact_persons",subform_list);
			update_deal = zoho.crm.updateRecord("Deals",deal.get("id"),datamap);
		}
		/*creator update*/
		getdealrecord = zoho.crm.getRecordById("Deals",DealID.tolong());
		// 		if(getdealrecord.get("id") != null)
		// 		{
		// 			subformID = "";
		// 			datamap = Map();
		// 			subform_list = List();
		// 			/*cleared existing records*/
		// 			getdealcontact = zoho.creator.getRecords("lion_visavie","visavie","All_Deal_Contacts","Deal_ID == \"" + getdealrecord.get("id") + "\"",1,2000,"zohocreator");
		// 			if(getdealcontact.get("code") == 3000 && getdealcontact.get("data").size() > 0)
		// 			{
		// 				for each  subform in getdealcontact.get("data")
		// 				{
		// 					if(subform.get("From_CRM") == true && subform.get("ID") != null)
		// 					{
		// 						subformID = subform.get("ID");
		// 						updatemap = Map();
		// 						updatemap.put("Deals_bidirectional","");
		// 						updatemap.put("Deal_ID",null);
		// 						updatemap.put("Contacts",null);
		// 						updatemap.put("CRM_ID",null);
		// 						updatemap.put("Cell_Phone",null);
		// 						updatemap.put("Work_Phone",null);
		// 						// 												updatemap.put("Work_Phone_Extension",subform.get("Work_Phone_Extension"));
		// 						updatemap.put("Home_Phone",null);
		// 						updatemap.put("Email",null);
		// 						updatemap.put("Sorte_de_contact_Kind_of_contact",null);
		// 						updatemap.put("Line_CRMID",null);
		// 						updatedeal = zoho.creator.updateRecord("lion_visavie","visavie","All_Deal_Contacts",subform.get("ID").toNumber(),updatemap,Map(),"zohocreator");
		// 					}
		// 				}
		// 				if(updatedeal.get("code") == 3000)
		// 				{
		// 					/*create */
		// 					getdealCreator = zoho.creator.getRecords("lion_visavie","visavie","All_Deals","CRM_Deal_ID == \"" + getdealrecord.get("id") + "\"",1,2000,"zohocreator");
		// 					if(getdealCreator.get("code") == 3000)
		// 					{
		// 						for each  dealres in getdealCreator.get("data")
		// 						{
		// 							for each  subform in getdealrecord.get("Contact_persons")
		// 							{
		// 								if(subform.get("contact") != null)
		// 								{
		// 									getcontactCreator = zoho.creator.getRecords("lion_visavie","visavie","All_Contacts","ZohoCRM_ID == \"" + subform.get("contact").get("id") + "\"",1,2000,"zohocreator");
		// 									if(getcontactCreator.get("code") == 3000 && getcontactCreator.get("data").size() > 0)
		// 									{
		// 										for each  creatorres in getcontactCreator.get("data")
		// 										{
		// 											if(creatorres.get("ID") != null)
		// 											{
		// 												contactmap = Map();
		// 												contactmap.put("Contacts",creatorres.get("ID"));
		// 												contactmap.put("CRM_ID",subform.get("contact").get("id"));
		// 												contactmap.put("Cell_Phone",subform.get("Cell_Phone"));
		// 												contactmap.put("Work_Phone",subform.get("Work_Phone"));
		// 												contactmap.put("Work_Phone_Extension",subform.get("Work_Phone_Extension"));
		// 												contactmap.put("Home_Phone",subform.get("Home_Phone"));
		// 												contactmap.put("Email",subform.get("Email"));
		// 												contactmap.put("Sorte_de_contact_Kind_of_contact",subform.get("Kind_of_Contact"));
		// 												contactmap.put("Deal_ID",getdealrecord.get("id"));
		// 												contactmap.put("Line_CRMID",subform.get("id"));
		// 												contactmap.put("Deals_bidirectional",dealres.get("ID"));
		// 												contactmap.put("From_CRM",true);
		// 											}
		// 										}
		// 										createDealContact = zoho.creator.createRecord("lion_visavie","visavie","Deal_Contacts",contactmap,Map(),"zohocreator");
		// 										if(createDealContact.get("code") != 3000)
		// 										{
		// 											dataMap1 = Map();
		// 											dataMap1.put("Module","Deals");
		// 											dataMap1.put("Process_Description","In CRM Client :Create record in deal contact in creator");
		// 											dataMap1.put("In_Data",DealID);
		// 											dataMap1.put("Out_Response",createDealContact);
		// 											response = zoho.creator.createRecord(ownerName,appName,formName,dataMap1,Map(),"zoho_mail");
		// 										}
		// 									}
		// 								}
		// 							}
		// 						}
		// 					}
		// 				}
		// 				else
		// 				{
		// 					dataMap = Map();
		// 					dataMap.put("Module","Deals");
		// 					dataMap.put("Process_Description","In CRM : Issue in removing existing records in All deal contact in Creator");
		// 					dataMap.put("In_Data",subformID);
		// 					dataMap.put("Out_Response",updatedeal);
		// 					resCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
		// 				}
		// 			}
		// 			else
		// 			{
		// 				info "Create" ;
		// 				/*create*/
		// 				getdealCreator = zoho.creator.getRecords("lion_visavie","visavie","All_Deals","CRM_Deal_ID == \"" + getdealrecord.get("id") + "\"",1,2000,"zohocreator");
		// 				if(getdealCreator.get("code") == 3000 && getdealCreator.get("data").size() > 0)
		// 				{
		// 					for each  dealres in getdealCreator.get("data")
		// 					{
		// 						for each  subform in getdealrecord.get("Contact_persons")
		// 						{
		// 							if(subform.get("contact") != null)
		// 							{
		// 								getcontactCreator = zoho.creator.getRecords("lion_visavie","visavie","All_Contacts","ZohoCRM_ID == \"" + subform.get("contact").get("id") + "\"",1,2000,"zohocreator");
		// 								if(getcontactCreator.get("code") == 3000 && getcontactCreator.get("data").size() > 0)
		// 								{
		// 									for each  creatorres in getcontactCreator.get("data")
		// 									{
		// 										if(creatorres.get("ID") != null)
		// 										{
		// 											contactmap = Map();
		// 											contactmap.put("Contacts",creatorres.get("ID"));
		// 											contactmap.put("CRM_ID",subform.get("contact").get("id"));
		// 											contactmap.put("Cell_Phone",subform.get("Cell_Phone"));
		// 											contactmap.put("Work_Phone",subform.get("Work_Phone"));
		// 											contactmap.put("Work_Phone_Extension",subform.get("Work_Phone_Extension"));
		// 											contactmap.put("Home_Phone",subform.get("Home_Phone"));
		// 											contactmap.put("Email",subform.get("Email"));
		// 											contactmap.put("Sorte_de_contact_Kind_of_contact",subform.get("Kind_of_Contact"));
		// 											contactmap.put("Deal_ID",getdealrecord.get("id"));
		// 											contactmap.put("Line_CRMID",subform.get("id"));
		// 											contactmap.put("Deals_bidirectional",dealres.get("ID"));
		// 											contactmap.put("From_CRM",true);
		// 										}
		// 									}
		// 									createDealContact = zoho.creator.createRecord("lion_visavie","visavie","Deal_Contacts",contactmap,Map(),"zohocreator");
		// 									if(createDealContact.get("code") != 3000)
		// 									{
		// 										dataMap1 = Map();
		// 										dataMap1.put("Module","Deals");
		// 										dataMap1.put("Process_Description","In CRM Client :Issue-Create record in deal contact in creator");
		// 										dataMap1.put("In_Data",DealID);
		// 										dataMap1.put("Out_Response",createDealContact);
		// 										response = zoho.creator.createRecord(ownerName,appName,formName,dataMap1,Map(),"zoho_mail");
		// 									}
		// 								}
		// 							}
		// 						}
		// 					}
		// 				}
		// 			}
		// 		}
	}
}
catch (e)
{
	dataMap = Map();
	dataMap.put("Module","Deals");
	dataMap.put("Process_Description","In CRM : Update contact subform records in Deal CRM Based upon Client");
	dataMap.put("In_Data",DealID);
	dataMap.put("Out_Response",e);
	resCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
