try 
{
	Deal_response = invokeurl
	[
		url :"https://www.zohoapis.com/crm/v2.1/Deals/" + input.CRM_Deal_ID
		type :GET
		connection:"zoho_one"
	];
	for each  deal_crm_info in Deal_response.get("data")
	{
		// 		contact
		deal_contact_subform = deal_crm_info.get("Contact_persons");
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
					row1 = Deals.Deal_Contacts();
					row1.Contacts=get_contact_info.ID;
					row1.CRM_ID=Contact_ID;
					row1.Cell_Phone=contact_subform.get("Cell_Phone");
					row1.Work_Phone=contact_subform.get("Work_Phone");
					row1.Work_Phone_Extension=contact_subform.get("Work_Phone_Extension");
					row1.Home_Phone=contact_subform.get("Home_Phone");
					row1.Email=contact_subform.get("Email");
					// 					row1.Type_de_contact_Type_of_contact=contact_subform.get("Type_of_Contact_s");
					row1.Sorte_de_contact_Kind_of_contact=contact_subform.get("Kind_of_Contact");
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
						Work_phone_Extension=contact_subform.get("Work_Phone_Extension")
						Home_Phone=contact_subform.get("Home_Phone")
						Kind_of_contact=contact_subform.get("Kind_of_Contact")
						Type_of_contact1=contact_subform.get("Type_of_Contact_s")
						Email=contact_subform.get("Email")
						Deal_ID=deal_crm_info.get("id")
					];
					get_new_contact_ID = add_new;
					row1 = Deals.Deal_Contacts();
					row1.Contacts=add_new;
					row1.CRM_ID=Contact_ID;
					row1.Cell_Phone=contact_subform.get("Cell_Phone");
					row1.Work_Phone=contact_subform.get("Work_Phone");
					row1.Work_Phone_Extension=contact_subform.get("Work_Phone_Extension");
					row1.Home_Phone=contact_subform.get("Home_Phone");
					row1.Email=contact_subform.get("Email");
					// 					row1.Type_de_contact_Type_of_contact=contact_subform.get("Type_of_Contact_s");
					row1.Sorte_de_contact_Kind_of_contact=contact_subform.get("Kind_of_Contact");
					row1.Deal_ID=deal_crm_info.get("id");
					row1.Line_CRMID=contact_subform.get("id");
					rows.insert(row1);
				}
				// 				// 				input.Deal_Created_through_CRM = false;
			}
		}
		add_deal = Deals[CRM_Deal_ID == deal_crm_info.get("id")];
		if(add_deal.count() > 0)
		{
			add_deal.Deal_Contacts.insert(rows);
		}
		client1 = deal_crm_info.get("Contact");
		if(client1 != null)
		{
			clientCRMID = client1.get("id");
			creatorClient1 = Contacts[ZohoCRM_ID == clientCRMID];
			if(creatorClient1.ID != null)
			{
				input.Client_ID = creatorClient1.ID;
			}
		}
		client2 = deal_crm_info.get("Contacts");
		if(client2 != null)
		{
			clientCRMID2 = client2.get("id");
			creatorClient2 = Contacts[ZohoCRM_ID == clientCRMID2];
			if(creatorClient2.ID != null)
			{
				input.Client_2 = creatorClient2.ID;
			}
		}
		/*updating counselor name*/
		if(input.Advisor_ID != null && input.Advisor_ID != "")
		{
			Advisor_info = Advisor[CRM_AdvisorID == input.Advisor_ID];
			if(Advisor_info.count() > 0)
			{
				input.Counselor = Advisor_info.ID;
			}
		}
		if(input.Counseiller_ID != "" && input.Counseiller_ID != null)
		{
			Temp_advisor_info = Advisor[CRM_AdvisorID == input.Counseiller_ID];
			if(Temp_advisor_info.count() > 0)
			{
				input.Temporary_counselor = Temp_advisor_info.ID;
			}
		}
		/* Residence*/
		deal_residence_subform = deal_crm_info.get("Subform_3");
		residence_rows = Collection();
		for each  residence_subform in deal_residence_subform
		{
			residence_info = residence_subform.get("Residence");
			residence_ID = "";
			if(residence_info != null)
			{
				residence_ID = residence_info.get("id");
			}
			if(residence_ID != null && residence_ID != "")
			{
				// 				/*Residence*/
				get_residence_info = Residences[CRM_ID == residence_ID];
				if(get_residence_info.ID != null)
				{
					row2 = Deals.Deal_Residence();
					row2.Residences=get_residence_info.ID;
					row2.Deal_ID=deal_crm_info.get("id");
					row2.CRM_ID=residence_subform.get("id");
					// 					row2.Status=residence_subform.get("Residence").get("Status");
					row2.Email=residence_subform.get("Email");
					row2.Residence_Line_Item_ID=residence_subform.get("id");
					row2.Url="https://crm.zoho.com/crm/org746753262/tab/Potentials/" + deal_crm_info.get("id");
					// 					row2.Login_ID="lion@visavie.com";
					residence_rows.insert(row2);
				}
				else
				{
					add_residence_new = insert into Residences
					[
						Added_User=zoho.loginuser
						Deal_ID=deal_crm_info.get("id")
						CRM_ID=residence_ID
						Status=residence_subform.get("Status")
						Email1=residence_subform.get("Email")
						Usual_name=residence_subform.get("Residence").get("name")
					];
					get_new_residence_ID = add_residence_new;
					row2 = Deals.Deal_Residence();
					row2.Residence_Line_Item_ID=residence_subform.get("id");
					row2.Residences=add_residence_new;
					row2.Deal_ID=deal_crm_info.get("id");
					row2.CRM_ID=residence_subform.get("id");
					// 					row2.Status=residence_subform.get("Residence").get("Status");
					row2.Email=residence_subform.get("Email");
					row2.Url="https://crm.zoho.com/crm/org746753262/tab/Potentials/" + deal_crm_info.get("id");
					// 					row2.Login_ID="lion@visavie.com";
					residence_rows.insert(row2);
				}
				// 				// 				input.Deal_Created_through_CRM = false;
			}
		}
		add_residence_deal = Deals[CRM_Deal_ID == deal_crm_info.get("id")];
		if(add_residence_deal.count() > 0)
		{
			add_residence_deal.Deal_Residence.insert(residence_rows);
		}
	}
	if(input.Contact1_CRM_ID != "")
	{
		creatorClient1 = Contacts[ZohoCRM_ID == input.Contact1_CRM_ID];
		input.Client_ID = creatorClient1.ID;
	}
	else
	{
		input.Client_ID = null;
	}
	if(input.Contact2_CRM_ID != "")
	{
		creatorClient2 = Contacts[ZohoCRM_ID == input.Contact2_CRM_ID];
		input.Client_2 = creatorClient2.ID;
	}
	else
	{
		input.Client_2 = null;
	}
}
catch (e)
{
	thisapp.addDeveloperLog("Creator : Deals-subform","Creating subform From CRM",input.ID.toString(),e);
}
