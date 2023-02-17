void deal_residence_create()
{
	Deal_response = invokeurl
	[
		url :"https://www.zohoapis.com/crm/v2.1/Residence/" + 4846491000003631379
		type :GET
		connection:"zoho_one"
	];
	for each  deal_crm_info in Deal_response.get("data")
	{
		// 		contact
		deal_contact_subform = deal_crm_info.get("Contac");
		rows = Collection();
		for each  contact_subform in deal_contact_subform
		{
			Contact_info = contact_subform.get("Contact");
			Contact_ID = "";
			if(Contact_info != null)
			{
				Contact_ID = Contact_info.get("id");
			}
			if(Contact_ID != null && Contact_ID != "")
			{
				/*Contact*/
				get_contact_info = Contacts[ZohoCRM_ID == Contact_ID];
				if(get_contact_info.ID != null)
				{
					row1 = Residences.Residence_Contact();
					row1.Contacts=get_contact_info.ID;
					row1.Residence_CRM_ID=deal_crm_info.get("id");
					row1.Contact_Line_Item_ID=contact_subform.get("id");
					rows.insert(row1);
				}
				else
				{
					add_new = insert into Contacts
					[
						Added_User=zoho.loginuser
						Last_Name1=contact_subform.get("Contact").get("name")
						ZohoCRM_ID=Contact_ID
						Deal_ID=deal_crm_info.get("id")
					];
					get_new_contact_ID = add_new;
					row1 = Residences.Residence_Contact();
					row1.Contacts=add_new;
					row1.Residence_CRM_ID=deal_crm_info.get("id");
					row1.Contact_Line_Item_ID=contact_subform.get("id");
					rows.insert(row1);
				}
				// 				input.Deal_Created_through_CRM = false;
			}
		}
		add_deal = Residences[CRM_ID == deal_crm_info.get("id")];
		if(add_deal.count() > 0)
		{
			add_deal.Residence_Contact.insert(rows);
		}
	}
}