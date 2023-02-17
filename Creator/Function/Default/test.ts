void test()
{
	// 	advisor = Advisor[CRM_AdvisorID == "4846491000002215605"];
	// 	info advisor.ID;
	// 	getDeal = Deals[ID == 4252979000000062115];
	// 	getDeal.Conseiller_Counselor=advisor.ID;
	getCRMDealInfo = zoho.crm.getRecordById("Deals",4846491000003446007,Map(),"zoho_one");
	getCRMResidence = getCRMDealInfo.get("Subform_3");
	deal_subform = Deal_Residences[Deals_bidirectional_lookup == 4252979000000216035];
	for each  item in deal_subform
	{
		for each  product in getCRMResidence
		{
			info "item.Residence_Line_Item_ID" + item.Residence_Line_Item_ID;
			info "productid" + product.get("id");
			if(item.Residence_Line_Item_ID == product.get("id"))
			{
				info "Test";
				productDetailsInfo = Residences[CRM_ID == product.get("Residence").get("id")].ID;
				item.Status=Residences[CRM_ID == product.get("Residence").get("id")].Status;
				// 				item.Residence_Number=Residences[CRM_ID == product.get("Residence").get("id")].Residence_number;
				item.Email=Residences[CRM_ID == product.get("Residence").get("id")].Email1;
			}
			else
			{
				delete from Deal_Residences[Deals_bidirectional_lookup == null];
			}
		}
	}
	getCRMContact = getCRMDealInfo.get("Contact_persons");
	deal_contact = Deal_Contacts[Deals_bidirectional == 4252979000000216035];
	for each  contact in deal_contact
	{
		for each  contact_residence in getCRMContact
		{
			if(contact.Line_CRMID == contact_residence.get("id"))
			{
				info "Test";
				productDetailsInfo = Contacts[ZohoCRM_ID == contact_residence.get("contact").get("id")].ID;
				// 				contact.Provinces=Contacts[ZohoCRM_ID == contact_residence.get("contact").get("id")].Provinces;
			}
			// 			else
			// 			{
			// 				delete from Deal_Contacts[Deals_bidirectional == null];
			// 			}
		}
		if(getCRMContact.notContains(contact.Line_CRMID))
		{
			deletedContact = Deal_Contacts[ID == contact.ID];
			deletedContact.Deals_bidirectional=null;
			delete from Deal_Contacts[Deals_bidirectional == null];
		}
	}
	for each  new_contact in getCRMContact
	{
		// check if the new contact is created in creator
		contactIten = Deal_Contacts[Line_CRMID == new_contact.get("id")];
		if(!contactIten.count() > 0)
		{
			info "new item";
			// 			<variable> = insert into Deal_Contacts
			//             [
			//             	<field> = <expression>
			//             	<field> = <expression>
			//             	<field> = <expression>
			//             ];
		}
	}
}