void deal_residence_edit()
{
	getCRMResidenceInfo = zoho.crm.getRecordById("Residence",4846491000003631379,Map(),"zoho_one");
	info getCRMResidenceInfo;
	getCRMContact = getCRMResidenceInfo.get("Contac");
	info getCRMContact;
	for each  new_contact in getCRMContact
	{
		Contact_ID = "";
		rows = Collection();
		contactIten = Residence_Contact[Contact_Line_Item_ID == new_contact.get("id")];
		contactInfo = Contacts[ZohoCRM_ID == new_contact.get("Contact").get("id")].ID;
		info "contactInfo" + contactInfo;
		if(!contactIten.count() > 0)
		{
			info "new item";
			info "new_contact" + new_contact.get("id");
			get_crm_contact = zoho.crm.getRecordById("Contacts",new_contact.get("Contact").get("id").toLong(),Map(),"zoho_one");
			info "Email" + get_crm_contact.get("E_mail_Courriel_1");
			add_contact = insert into Contacts
			[
				Ville_City=get_crm_contact.get("Ville_City")
				Email=get_crm_contact.get("E_mail_Courriel_1")
				First_Name=get_crm_contact.get("First_Name")
				Last_Name1=new_contact.get("Contact").get("name")
				Added_User=zoho.loginuser
				ZohoCRM_ID=new_contact.get("Contact").get("id")
				Residence_CRM_ID=getCRMResidenceInfo.get("id")
			];
			info "new cont" + new_contact.get("Contact").get("id");
			info "add_deal_contcat" + add_contact;
			get_new_contact_ID = add_contact;
			row1 = Residences.Residence_Contact();
			row1.Contacts=add_contact;
			row1.Residence_CRM_ID=getCRMResidenceInfo.get("id");
			row1.Contact_Line_Item_ID=new_contact.get("id");
			rows.insert(row1);
			info "rows" + rows;
		}
		// 			id = 4846491000003446007;
		info "getCRMResidenceInfo id......" + getCRMResidenceInfo.get("id");
		add_deal = Residences[CRM_ID == getCRMResidenceInfo.get("id")];
		if(add_deal.count() > 0)
		{
			add_deal.Residence_Contact.insert(rows);
		}
	}
	getCRMContact = getCRMResidenceInfo.get("Contac");
	deal_contact = Residence_Contact[Residences_ID == 4252979000000277002];
	for each  contact in deal_contact
	{
		for each  contact_residence in getCRMContact
		{
			if(contact.Contact_Line_Item_ID == contact_residence.get("id"))
			{
				info "Test";
				get_contacts = Contacts[ZohoCRM_ID == contact_residence.get("Contact").get("id")];
				contact.Contacts=get_contacts.ID;
			}
		}
		if(getCRMContact.notContains(contact.Contact_Line_Item_ID))
		{
			deletedContact = Deal_Contacts[ID == contact.ID];
			deletedContact.Deals_bidirectional=null;
			delete from Deal_Contacts[Deals_bidirectional == null];
		}
	}
	getCRMDealInfo = zoho.crm.getRecordById("Residence",4846491000003631379,Map(),"zoho_one");
	getCRMMContacts = getCRMDealInfo.get("Contac");
	deal_contact_subform = Residence_Contact[Residences_ID == 4252979000000277002];
	for each  rec_contact in deal_contact_subform
	{
		for each  crm_contact in getCRMContact
		{
			if(rec_contact.Contact_Line_Item_ID == crm_contact.get("id"))
			{
				rec_contact.Contacts=Contacts[ZohoCRM_ID == crm_contact.get("Contact").get("id")].ID;
			}
		}
	}
}