string DEAL()
{
	// 		getCRMAdvisor_Info = zoho.crm.getRecordById("Advisor",4846491000004857624,Map(),"zoho_one");
	// 		info getCRMAdvisor_Info ;
	getCRMID = "4846491000004857624";
	Advisor_response = invokeurl
	[
		url :"https://www.zohoapis.com/crm/v2.1/Advisor/" + getCRMID
		type :GET
		connection:"zoho_one"
	];
	for each  advisor_info in Advisor_response.get("data")
	{
		User = advisor_info.get("Counselor_user");
		if(User != null)
		{
			User_info = User.get("id");
			user_name = User.get("name");
			info user_name;
			info User_info;
		}
	}
	// 		// 		contact
	// 		deal_contact_subform = deal_crm_info.get("Contact_persons");
	// 		rows = Collection();
	// 		for each  contact_subform in deal_contact_subform
	// 		{
	// 			Contact_info = contact_subform.get("contact");
	// 			Contact_ID = "";
	// 			if(Contact_info != null)
	// 			{
	// 				Contact_ID = Contact_info.get("id");
	// 			}
	// 			if(Contact_ID != null && Contact_ID != "")
	// 			{
	// 				/*Contact*/
	// 				get_contact_info = Contacts[ZohoCRM_ID == Contact_ID];
	// 				if(get_contact_info.ID != null)
	// 				{
	// 					info get_contact_info ;
	// 				    row1 = Deals.Deal_Contacts();
	// 					row1.Contacts=get_contact_info.ID;
	// // 					row1.Cell_Phone=contact_subform.get("T_l_phone_maison_Home_phone_1");
	// 					row1.Type_de_contact_Type_of_contact=contact_subform.get("Type_of_Contact_s");
	// 					row1.Sorte_de_contact_Kind_of_contact=contact_subform.get("Kind_of_Contact");
	// 					row1.Deal_ID=deal_crm_info.get("id");
	// 					row1.Line_CRMID=contact_subform.get("id");
	// 					rows.insert(row1);
	// 				}
	// 				else
	// 				{
	// 					add_new = insert into Contacts
	// 					[
	// 						Added_User=zoho.loginuser
	// 						Full_Name = contact_subform.get("contact").get("name")
	// 						ZohoCRM_ID = Contact_ID
	// 						Kind_of_contact = contact_subform.get("Kind_of_Contact")
	// 						Type_of_contact1 = contact_subform.get("Type_of_Contact_s")
	// 						Email = contact_subform.get("Email")
	// 						Work_Phone = contact_subform.get("Work_Phone")
	// 						Home_Phone = contact_subform.get("Home_Phone")
	// 						Cell_Phone = contact_subform.get("Cell_Phone")
	// 						Deal_ID=deal_crm_info.get("id")
	// 					];
	// 					get_new_contact_ID = add_new;
	// 					info  "new" + get_new_contact_ID ;
	// // 					row1 = Deals.Deal_Contacts();
	// // 					row1.Contacts = add_new;
	// // 					row1.Cell_Phone = contact_subform.get("Cell_Phone");
	// // 					row1.Work_Phone = contact_subform.get("Work_Phone");
	// // 					row1.Home_Phone = contact_subform.get("Home_Phone");
	// // 					row1.Type_de_contact_Type_of_contact = contact_subform.get("Type_of_Contact_s");
	// // 					row1.Sorte_de_contact_Kind_of_contact = contact_subform.get("Kind_of_Contact");
	// // 					row1.Email = contact_subform.get("Email");
	// // 					row1.Deal_ID=deal_crm_info.get("id");
	// // 					row1.Line_CRMID=contact_subform.get("id");
	// // 					rows.insert(row1);
	// 				}
	// // 				// 				input.Deal_Created_through_CRM = false;
	// 			}
	// 		}
	// 		}
	// // 		add_deal = Deals[CRM_Deal_ID == deal_crm_info.get("id")];
	// // 		if(add_deal.count() > 0)
	// // 		{
	// // 			add_deal.Deal_Contacts.insert(rows);
	// // 		}
	// // 		client1 = deal_crm_info.get("Contact");
	// // 		if(client1 != null)
	// // 		{
	// // 			clientCRMID = client1.get("id");
	// // 			creatorClient1 = Contacts[ZohoCRM_ID == clientCRMID];
	// // 			if(creatorClient1.ID != null)
	// // 			{
	// // 				input.Client_ID = creatorClient1.ID;
	// // 			}
	// // 		}
	// // 		client2 = deal_crm_info.get("Contacts");
	// // 		if(client2 != null)
	// // 		{
	// // 			clientCRMID2 = client2.get("id");
	// // 			creatorClient2 = Contacts[ZohoCRM_ID == clientCRMID2];
	// // 			if(creatorClient2.ID != null)
	// // 			{
	// // 				input.Client_2 = creatorClient2.ID;
	// // 			}
	// // 		}
	// 	getCRMID = "4846491000004524001";
	// 	Homecare_Deal_response = invokeurl
	// 	[
	// 		url :"https://www.zohoapis.com/crm/v2.1/Home_Care_Deal/" + getCRMID
	// 		type :GET
	// 		connection:"zoho_one"
	// 	];
	// 	for each  deal_crm_info in Homecare_Deal_response.get("data")
	// 	{
	// 		deal_contact_subform = deal_crm_info.get("Contact_subform");
	// 		rows = Collection();
	// 		for each  contact_subform in deal_contact_subform
	// 		{
	// 			Contact_info = contact_subform.get("contact");
	// 			Contact_ID = "";
	// 			if(Contact_info != null)
	// 			{
	// 				Contact_ID = Contact_info.get("id");
	// 			}
	// 			if(Contact_ID != null && Contact_ID != "")
	// 			{
	// 				// 				/*Contact*/
	// 				get_contact_info = Contacts[ZohoCRM_ID == Contact_ID];
	// 				if(get_contact_info.ID != null)
	// 				{
	// 					info "old";
	// 					row1 = Home_Care_Deal.Homecare_Deal_Contacts();
	// 					row1.Contacts=get_contact_info.ID;
	// 					// 					row1.Cell_Phone=contact_subform.get("Cell_Phone");
	// 					// 					row1.Work_Phone=contact_subform.get("Work_Phone");
	// 					// 					row1.Home_Phone=contact_subform.get("Home_Phone");
	// 					// 					row1.Email=contact_subform.get("Email");
	// 					// 					row1.Type_de_cType_of_contact=contact_subform.get("Type_of_Contact_s");
	// 					// 					row1.Kind_of_contact=contact_subform.get("Kind_of_Contact");
	// 					// 					row1.Deal_ID=deal_crm_info.get("id");
	// 					// 					row1.Line_CRMID=contact_subform.get("id");
	// 					rows.insert(row1);
	// 				}
	// 				else
	// 				{
	// 					info "New";
	// 					add_new = insert into Contacts
	// 					[
	// 						Added_User=zoho.loginuser
	// 						Full_Name=contact_subform.get("contact").get("name")
	// 						ZohoCRM_ID=Contact_ID
	// 						Cell_Phone=contact_subform.get("Cell_Phone")
	// 						Work_Phone=contact_subform.get("Work_Phone")
	// 						Home_Phone=contact_subform.get("Home_Phone")
	// 						Kind_of_contact=contact_subform.get("Kind_of_Contact")
	// 						Type_of_contact1=contact_subform.get("Type_of_Contact_s")
	// 						Email=contact_subform.get("Email")
	// 						Deal_ID=deal_crm_info.get("id")
	// 					];
	// 					get_new_contact_ID = add_new;
	// 					// 					row1 = Home_Care_Deal.Homecare_Deal_Contacts();
	// 					// 					row1.Contacts = add_new;
	// 					// 					row1.Cell_Phone=contact_subform.get("Cell_Phone");
	// 					// 					row1.Work_Phone=contact_subform.get("Work_Phone");
	// 					// 					row1.Home_Phone=contact_subform.get("Home_Phone");
	// 					// 					row1.Email=contact_subform.get("Email");
	// 					// 					row1.Type_de_cType_of_contact=contact_subform.get("Type_of_Contact_s");
	// 					// 					row1.Kind_of_contact=contact_subform.get("Kind_of_Contact");
	// 					// 					row1.Deal_ID=deal_crm_info.get("id");
	// 					// 					row1.Line_CRMID=contact_subform.get("id");
	// 					// 					rows.insert(row1);
	// 				}
	// 			}
	// 		}
	// 		add_deal = Home_Care_Deal[CRM_HomeCareDealId == deal_crm_info.get("id")];
	// 		if(add_deal.count() > 0)
	// 		{
	// 			add_deal.Homecare_Deal_Contacts.insert(rows);
	// 		}
	// 		client1 = deal_crm_info.get("Client");
	// 		if(client1 != null)
	// 		{
	// 			clientCRMID = client1.get("id");
	// 			creatorClient1 = Contacts[ZohoCRM_ID == clientCRMID];
	// 			if(creatorClient1.ID != null)
	// 			{
	// 				input.Client = creatorClient1.ID;
	// 			}
	// 		}
	// 		client2 = deal_crm_info.get("Client_2");
	// 		if(client2 != null)
	// 		{
	// 			clientCRMID2 = client2.get("id");
	// 			creatorClient2 = Contacts[ZohoCRM_ID == clientCRMID2];
	// 			if(creatorClient2.ID != null)
	// 			{
	// 				input.Client_2 = creatorClient2.ID;
	// 			}
	// 		}
	// 	}
	return "";
}