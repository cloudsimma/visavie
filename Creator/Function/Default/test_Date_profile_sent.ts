void test_date_profile_sent()
{
	try 
	{
		getCRMDealInfo = zoho.crm.getRecordById("Deals",4846491000008627004,Map(),"zoho_one");
		getCRMContact = getCRMDealInfo.get("Contact_persons");
		for each  new_contact in getCRMContact
		{
			Contact_ID = "";
			rows = Collection();
			contactIten = Deal_Contacts[Line_CRMID == new_contact.get("id")];
			contactInfo = Contacts[ZohoCRM_ID == new_contact.get("contact").get("id")].ID;
			if(!contactIten.count() > 0)
			{
				row1 = Deals.Deal_Contacts();
				row1.Contacts=contactInfo;
				row1.Cell_Phone=new_contact.get("Cell_Phone");
				row1.Work_Phone=new_contact.get("Work_Phone");
				row1.Home_Phone=new_contact.get("Home_Phone");
				row1.Email=new_contact.get("Email");
				row1.Type_de_contact_Type_of_contact=new_contact.get("Type_of_Contact_s");
				row1.Sorte_de_contact_Kind_of_contact=new_contact.get("Kind_of_Contact");
				row1.Deal_ID=getCRMDealInfo.get("id");
				row1.Line_CRMID=new_contact.get("id");
				rows.insert(row1);
			}
			//          id = 4846491000003446007;
			info "getCRMDealInfo id......" + getCRMDealInfo.get("id");
			add_deal_contact = Deals[CRM_Deal_ID == getCRMDealInfo.get("id")];
			if(add_deal_contact.count() > 0)
			{
				add_deal_contact.Deal_Contacts.insert(rows);
			}
		}
		getCRMContact = getCRMDealInfo.get("Contact_persons");
		deal_contact = Deal_Contacts[Deals_bidirectional == 4252979000001441031];
		for each  contact in deal_contact
		{
			for each  var_contact in getCRMContact
			{
				if(contact.Line_CRMID == var_contact.get("id") && var_contact.get("contact") != null)
				{
					info "Test";
					get_contact = Contacts[ZohoCRM_ID == var_contact.get("contact").get("id")];
					contact.Contacts=get_contact.ID;
				}
			}
			if(getCRMContact.notContains(contact.Line_CRMID))
			{
				deletedContacts = Deal_Contacts[ID == contact.ID];
				deletedContacts.Deals_bidirectional=null;
				delete from Deal_Contacts[Deals_bidirectional == null];
			}
		}
		//  getCRMDealInfo = zoho.crm.getRecordById("Deals",input.CRM_Deal_ID.toLong(),Map(),"zoho_one");
		getCRMMContact = getCRMDealInfo.get("Contact_persons");
		deal_contact_subform = Deal_Contacts[Deals_bidirectional == 4252979000001441031];
		for each  rec_contact in deal_contact_subform
		{
			for each  crm_contact in getCRMMContact
			{
				if(crm_contact.get("contact") != null && rec_contact.Line_CRMID == crm_contact.get("id"))
				{
					rec_contact.Contacts=Contacts[ZohoCRM_ID == crm_contact.get("contact").get("id")].ID;
					rec_contact.CRM_ID=crm_contact.get("contact").get("id");
					rec_contact.Line_CRMID=crm_contact.get("id");
				}
			}
		}
		//  Residences
		getCRMResidence = getCRMDealInfo.get("Subform_3");
		for each  new_residence in getCRMResidence
		{
			Residence_ID = "";
			residence_rows = Collection();
			recidenceIten = Deal_Residences[Residence_Line_Item_ID == new_residence.get("id")];
			residenceInfo = Residences[CRM_ID == new_residence.get("Residence").get("id")].ID;
			if(!recidenceIten.count() > 0)
			{
				row2 = Deals.Deal_Residence();
				row2.CRM_ID=new_residence.get("Residence").get("id");
				row2.Residences=residenceInfo;
				row2.Deal_ID=getCRMDealInfo.get("id");
				row2.Status=new_residence.get("Residence").get("id");
				row2.Email=new_residence.get("Email");
				row2.Residence_Line_Item_ID=new_residence.get("id");
				residence_rows.insert(row2);
				info "rows" + residence_rows;
			}
			//          id = 4846491000003446007;
			info "getCRMDealInfo id......" + getCRMDealInfo.get("id");
			add_deal_residence = Deals[CRM_Deal_ID == getCRMDealInfo.get("id")];
			if(add_deal_residence.count() > 0)
			{
				add_deal_residence.Deal_Residence.insert(residence_rows);
			}
		}
		getCRMResidence = getCRMDealInfo.get("Subform_3");
		deal_residence = Deal_Residences[Deals_bidirectional_lookup == 4252979000001441031];
		for each  residence in deal_residence
		{
			for each  var_residence in getCRMResidence
			{
				if(var_residence.get("Residence") != null && residence.Residence_Line_Item_ID == var_residence.get("id"))
				{
					info "Test";
					get_residence = Residences[CRM_ID == var_residence.get("Residence").get("id")];
					residence.Residences=get_residence.ID;
				}
			}
			if(getCRMResidence.notContains(residence.Residence_Line_Item_ID))
			{
				deletedResidence = Deal_Residences[ID == residence.ID];
				deletedResidence.Deals_bidirectional_lookup=null;
				delete from Deal_Residences[Deals_bidirectional_lookup == null];
			}
		}
		//  getCRMDealInfo = zoho.crm.getRecordById("Deals",input.CRM_Deal_ID.toLong(),Map(),"zoho_one");
		getCRMMResidence = getCRMDealInfo.get("Subform_3");
		deal_residence_subform = Deal_Residences[Deals_bidirectional_lookup == 4252979000001441031];
		for each  rec_residence in deal_residence_subform
		{
			for each  crm_residence in getCRMMResidence
			{
				if(crm_residence.get("Residence") != null && rec_residence.Residence_Line_Item_ID == crm_residence.get("id"))
				{
					rec_residence.Residences=Residences[CRM_ID == crm_residence.get("Residence").get("id")].ID;
					rec_residence.CRM_ID=crm_residence.get("Residence").get("id");
					rec_residence.Residence_Line_Item_ID=crm_residence.get("id");
				}
			}
		}
		//     if(input.Contact1_CRM_ID != "")
		//     {
		//         input.Client_ID = Contacts[ZohoCRM_ID == input.Contact1_CRM_ID].ID;
		//     }
		//     else
		//     {
		//         input.Client_ID = null;
		//     }
		//     if(input.Contact2_CRM_ID != "")
		//     {
		//         input.Client_2 = Contacts[ZohoCRM_ID == input.Contact2_CRM_ID].ID;
		//     }
		//     else
		//     {
		//         input.Client_2 = null;
		//     }
		//     if(input.Advisor_ID != "")
		//     {
		//         input.Counselor = Advisor[CRM_AdvisorID == input.Advisor_ID].ID;
		//     }
		//     else
		//     {
		//         input.Counselor = null;
		//     }
		//     if(input.Counseiller_ID != "")
		//     {
		//         input.Temporary_counselor = Advisor[CRM_AdvisorID == input.Counseiller_ID].ID;
		//     }
		//     else
		//     {
		//         input.Temporary_counselor = null;
		//     }
	}
	catch (e)
	{
		//     thisapp.addDeveloperLog("Creator : Deals-subform","Editing Subform records of deal from CRM ",input.ID.toString(),e);
	}
}