void homecaredeal_contacts()
{
	getCRMDealInfo = zoho.crm.getRecordById("Home_Care_Deal",4846491000004099001,Map(),"zoho_one");
	getCRMContact = getCRMDealInfo.get("Contact_subform");
	for each  new_contact in getCRMContact
	{
		Contact_ID = "";
		rows = Collection();
		contactIten = Homecare_Deal_Contacts[Line_CRMID == new_contact.get("id")];
		contactInfo = Contacts[ZohoCRM_ID == new_contact.get("contact").get("id")].ID;
		if(!contactIten.count() > 0)
		{
			row1 = Home_Care_Deal.Homecare_Deal_Contacts();
			row1.Contacts=contactInfo;
			row1.Cell_Phone=new_contact.get("Cell_Phone");
			row1.Work_Phone=new_contact.get("Work_Phone");
			row1.Home_Phone=new_contact.get("Home_Phone");
			row1.Email=new_contact.get("Email");
			row1.Type_de_cType_of_contact=new_contact.get("Type_of_Contact_s");
			row1.Kind_of_contact=new_contact.get("Kind_of_Contact");
			row1.Deal_ID=getCRMDealInfo.get("id");
			row1.Line_CRMID=new_contact.get("id");
			rows.insert(row1);
			info "rows" + rows;
		}
		// 			id = 4846491000003446007;
		info "getCRMDealInfo id......" + getCRMDealInfo.get("id");
		add_deal = Home_Care_Deal[CRM_HomeCareDealId == getCRMDealInfo.get("id")];
		if(add_deal.count() > 0)
		{
			add_deal.Homecare_Deal_Contacts.insert(rows);
		}
	}
	getCRMContact = getCRMDealInfo.get("Contact_subform");
	deal_contact = Homecare_Deal_Contacts[Home_Care_Deal_ID == 4252979000000318003];
	for each  contact in deal_contact
	{
		for each  contact_residence in getCRMContact
		{
			if(contact.Line_CRMID == contact_residence.get("id"))
			{
				info "Test";
				get_contacts = Contacts[ZohoCRM_ID == contact_residence.get("contact").get("id")];
				contact.Contacts=get_contacts.ID;
			}
		}
		if(getCRMContact.notContains(contact.Line_CRMID))
		{
			deletedContact = Homecare_Deal_Contacts[ID == contact.ID];
			deletedContact.Home_Care_Deal_ID=null;
			delete from Homecare_Deal_Contacts[Home_Care_Deal_ID == null];
		}
	}
	getCRMHomecareDealInfo = zoho.crm.getRecordById("Home_Care_Deal",4846491000004099001,Map(),"zoho_one");
	getCRMMContact = getCRMHomecareDealInfo.get("Contact_subform");
	deal_contact_subform = Homecare_Deal_Contacts[Home_Care_Deal_ID == 4252979000000318003];
	for each  creator_contact in deal_contact_subform
	{
		for each  crm_contact in getCRMMContact
		{
			if(creator_contact.Line_CRMID == crm_contact.get("id"))
			{
				creator_contact.Contacts=Contacts[ZohoCRM_ID == crm_contact.get("contact").get("id")].ID;
				creator_contact.CRM_ID=crm_contact.get("contact").get("id");
				creator_contact.Line_CRMID=crm_contact.get("id");
			}
		}
	}
}