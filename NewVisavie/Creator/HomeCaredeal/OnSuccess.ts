try 
{
	Homecare_Deal_response = invokeurl
	[
		url :"https://www.zohoapis.com/crm/v2.1/Home_Care_Deal/" + input.CRM_HomeCareDealId
		type :GET
		connection:"zoho_one"
	];
	for each  deal_crm_info in Homecare_Deal_response.get("data")
	{
		deal_contact_subform = deal_crm_info.get("Contact_subform");
		rows = Collection();
		for each  contact_subform in deal_contact_subform
		{
			Contact_info = contact_subform.get("contact");
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
					row1 = Home_Care_Deal.Homecare_Deal_Contacts();
					row1.Contacts=get_contact_info.ID;
					row1.CRM_ID=Contact_ID;
					row1.Cell_Phone=contact_subform.get("Cell_Phone");
					row1.Work_Phone=contact_subform.get("Work_Phone");
					row1.Home_Phone=contact_subform.get("Home_Phone");
					row1.Work_phone_Extension=contact_subform.get("Work_Phone_Extension");
					row1.Email=contact_subform.get("Email");
					row1.Type_de_cType_of_contact=contact_subform.get("Type_of_contact");
					row1.Kind_of_contact=contact_subform.get("Kind_of_Contact");
					row1.Deal_ID=deal_crm_info.get("id");
					row1.Line_CRMID=contact_subform.get("id");
					rows.insert(row1);
				}
				else
				{
					add_new = insert into Contacts
					[
						Added_User=zoho.loginuser
						Full_Name=contact_subform.get("contact").get("name")
						ZohoCRM_ID=Contact_ID
						Cell_Phone=contact_subform.get("Cell_Phone")
						Work_Phone=contact_subform.get("Work_Phone")
						Home_Phone=contact_subform.get("Home_Phone")
						Work_phone_Extension=contact_subform.get("Work_Phone_Extension")
						Kind_of_contact=contact_subform.get("Kind_of_Contact")
						Type_of_contact1=contact_subform.get("Type_of_contact")
						Email=contact_subform.get("Email")
						Deal_ID=deal_crm_info.get("id")
					];
					get_new_contact_ID = add_new;
					row1 = Home_Care_Deal.Homecare_Deal_Contacts();
					row1.Contacts=add_new;
					row1.CRM_ID=Contact_ID;
					row1.Cell_Phone=contact_subform.get("Cell_Phone");
					row1.Work_Phone=contact_subform.get("Work_Phone");
					row1.Home_Phone=contact_subform.get("Home_Phone");
					row1.Work_phone_Extension=contact_subform.get("Work_Phone_Extension");
					row1.Email=contact_subform.get("Email");
					row1.Type_de_cType_of_contact=contact_subform.get("Type_of_contact");
					row1.Kind_of_contact=contact_subform.get("Kind_of_Contact");
					row1.Deal_ID=deal_crm_info.get("id");
					row1.Line_CRMID=contact_subform.get("id");
					rows.insert(row1);
				}
			}
		}
		add_deal = Home_Care_Deal[CRM_HomeCareDealId == deal_crm_info.get("id")];
		if(add_deal.count() > 0)
		{
			add_deal.Homecare_Deal_Contacts.insert(rows);
		}
		client1 = deal_crm_info.get("Client");
		if(client1 != null)
		{
			clientCRMID = client1.get("id");
			creatorClient1 = Contacts[ZohoCRM_ID == clientCRMID];
			if(creatorClient1.ID != null)
			{
				input.Client = creatorClient1.ID;
			}
		}
		client2 = deal_crm_info.get("Client_2");
		if(client2 != null)
		{
			clientCRMID2 = client2.get("id");
			creatorClient2 = Contacts[ZohoCRM_ID == clientCRMID2];
			if(creatorClient2.ID != null)
			{
				input.Client_2 = creatorClient2.ID;
			}
		}
	}
}
catch (e)
{
	thisapp.addDeveloperLog("Creator : Home Care Deal-subform","Creating subform Records from CRM",input.ID.toString(),e);
}
