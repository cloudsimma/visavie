try 
{
	Res_info = zoho.crm.getRecords("Residence",1,2);
	for each  rec in Res_info
	{
		res_ID = rec.get("id");
		// 	org_id ="";
		if(res_ID != null)
		{
			resi = zoho.crm.getRecordById("Residence",res_ID);
			// 		if(org_id != null && org_id != "")
			// 		{
			cont_map = Map();
			cont_map.put("contact_name",resi.get("Name"));
			cont_map.put("phone",ifnull(resi.get("Primary_phone"),""));
			cont_per_map = Map();
			cont_per_map.put("last_name",resi.get("Name"));
			cont_per_map.put("phone",ifnull(resi.get("Primary_phone"),""));
			cont_per_map.put("is_primary_contact",true);
			cont_per_list = List();
			cont_per_list.add(cont_per_map);
			address_map = Map();
			address_map.put("address",ifnull(resi.get("Line_1"),""));
			address_map.put("city",ifnull(resi.get("City"),""));
			address_map.put("state",ifnull(resi.get("Province"),""));
			address_map.put("zip",ifnull(resi.get("Postal_code"),""));
			address_map.put("country",ifnull(resi.get("Region"),""));
			address_map.put("phone",ifnull(resi.get("Primary_phone"),""));
			cont_map.put("shipping_address",address_map);
			bill_address_map = Map();
			bill_address_map.put("address",ifnull(resi.get("Adress_Adresse_1"),""));
			bill_address_map.put("city",ifnull(resi.get("City_Ville"),""));
			bill_address_map.put("state",ifnull(resi.get("Provinces"),""));
			bill_address_map.put("zip",ifnull(resi.get("Postal_codes_Code_postal"),""));
			bill_address_map.put("country",ifnull(resi.get("Regions_R_gion"),""));
			bill_address_map.put("phone",ifnull(resi.get("Primary_phones_T_l_phone_principal"),""));
			cont_map.put("billing_address",bill_address_map);
			ontarioBooksID = "";
			quebecBooksID = "";
			/*Create nd update records-Ontario*/
			if(resi.get("Provinces") == "Québec/Quebec" || resi.get("Provinces") == "Ontario" || resi.get("Province") == "Québec/Quebec" || resi.get("Province") == "Ontario")
			{
				/*ontario*/
				if(resi.containKey("Ontario_Books_ID") && resi.get("Ontario_Books_ID") != null && resi.get("Ontario_Books_ID") != "")
				{
					/*update Ontario*/
					info "Update Ontario";
					contactMap = Map();
					// Associated contacts
					getContact = zoho.books.getRecordsByID("contacts",770055462,resi.get("Ontario_Books_ID").toLong(),"books_connect");
					if(getContact.get("code") == 0 && getContact.get("contact") != null && getContact.get("contact").get("contact_persons") != null && getContact.get("contact").get("contact_persons").size() > 0)
					{
						info "1";
						booksContacts = getContact.get("contact").get("contact_persons");
						for each  item in booksContacts
						{
							if(item.get("email") != null && item.get("email") != "")
							{
								contactMap.put(item.get("email"),item.get("contact_person_id"));
							}
						}
					}
					// 									info "contactMap" + contactMap;
					getContacts = resi.get("Contac");
					for each  contact_rec in getContacts
					{
						assoicate_contact = Map();
						if(contact_rec.get("Billing_Confirmation") == true && contact_rec.get("Email") != null)
						{
							info "2";
							if(contact_rec.get("Contact") != null && contactMap.containKey(contact_rec.get("Email")))
							{
								info "3";
								name = contact_rec.get("Contact").get("name");
								assoicate_contact.put("contact_person_id",contactMap.get(contact_rec.get("Email")));
								assoicate_contact.put("zcrm_contact_id",contact_rec.get("id"));
								assoicate_contact.put("last_name",name);
								assoicate_contact.put("phone",ifnull(contact_rec.get("Work_phone"),""));
								assoicate_contact.put("email",ifnull(contact_rec.get("Email"),""));
								cont_per_list.add(assoicate_contact);
							}
							else
							{
								info "4";
								name = contact_rec.get("Contact").get("name");
								assoicate_contact.put("zcrm_contact_id",contact_rec.get("id"));
								assoicate_contact.put("last_name",name);
								assoicate_contact.put("phone",ifnull(contact_rec.get("Work_phone"),""));
								assoicate_contact.put("email",ifnull(contact_rec.get("Email"),""));
								cont_per_list.add(assoicate_contact);
							}
						}
					}
					cont_map.put("contact_persons",cont_per_list);
					book_contact_id = resi.get("Ontario_Books_ID").toNumber();
					ontarioBooksID = resi.get("Ontario_Books_ID");
					update_con = zoho.books.updateRecord("contacts",770055462,book_contact_id,cont_map,"books_connect");
					// 			info "Update Ontario Data Success" + update_con;
				}
				/*Quebec*/
				if(resi.containKey("Qubec_Books_ID") && resi.get("Qubec_Books_ID") != null && resi.get("Qubec_Books_ID") != "")
				{
					info "Update Quebec";
					contactMap = Map();
					// Associated contacts
					getContact = zoho.books.getRecordsByID("contacts",749385035,resi.get("Qubec_Books_ID").toLong(),"books_connect");
					if(getContact.get("code") == 0 && getContact.get("contact") != null && getContact.get("contact").get("contact_persons") != null && getContact.get("contact").get("contact_persons").size() > 0)
					{
						info "5";
						booksContacts = getContact.get("contact").get("contact_persons");
						for each  item in booksContacts
						{
							if(item.get("email") != null && item.get("email") != "")
							{
								contactMap.put(item.get("email"),item.get("contact_person_id"));
							}
						}
					}
					getContacts = resi.get("Contac");
					for each  contact_rec in getContacts
					{
						assoicate_contact = Map();
						if(contact_rec.get("Billing_Confirmation") == true && contact_rec.get("Email") != null)
						{
							info "6";
							if(contact_rec.get("Contact") != null && contactMap.containKey(contact_rec.get("Email")))
							{
								info "7";
								name = contact_rec.get("Contact").get("name");
								assoicate_contact.put("contact_person_id",contactMap.get(contact_rec.get("Email")));
								assoicate_contact.put("zcrm_contact_id",contact_rec.get("id"));
								assoicate_contact.put("last_name",name);
								assoicate_contact.put("phone",ifnull(contact_rec.get("Work_phone"),""));
								assoicate_contact.put("email",ifnull(contact_rec.get("Email"),""));
								cont_per_list.add(assoicate_contact);
							}
							else
							{
								info "8";
								name = contact_rec.get("Contact").get("name");
								assoicate_contact.put("zcrm_contact_id",contact_rec.get("id"));
								assoicate_contact.put("last_name",name);
								assoicate_contact.put("phone",ifnull(contact_rec.get("Work_phone"),""));
								assoicate_contact.put("email",ifnull(contact_rec.get("Email"),""));
								cont_per_list.add(assoicate_contact);
							}
						}
					}
					cont_map.put("contact_persons",cont_per_list);
					book_contact_id = resi.get("Qubec_Books_ID").toNumber();
					quebecBooksID = resi.get("Qubec_Books_ID");
					update_con = zoho.books.updateRecord("contacts",749385035,book_contact_id,cont_map,"books_connect");
				}
				else
				{
					/* Create Subform*/
					info "Create subform";
					getContacts = resi.get("Contac");
					for each  contact_rec in getContacts
					{
						assoicate_contact1 = Map();
						if(contact_rec.get("Billing_Confirmation") == true && contact_rec.get("Email") != null)
						{
							name = contact_rec.get("Contact").get("name");
							assoicate_contact1.put("zcrm_contact_id",contact_rec.get("id"));
							assoicate_contact1.put("last_name",name);
							assoicate_contact1.put("phone",ifnull(contact_rec.get("Work_phone"),""));
							assoicate_contact1.put("email",ifnull(contact_rec.get("Email"),""));
							cont_per_list.add(assoicate_contact1);
						}
					}
					cont_map.put("contact_persons",cont_per_list);
					// 				/*ontario*/
					crea_cont = zoho.books.createRecord("contacts",770055462,cont_map,"books_connect");
					info "Create Ontario Data Success" + crea_cont;
					if(crea_cont.containKey("code") && crea_cont.get("code") == "0")
					{
						new_cont_map = crea_cont.get("contact").toMap();
						if(new_cont_map.containKey("contact_id"))
						{
							book_contact_id = new_cont_map.get("contact_id");
							ontarioBooksID = new_cont_map.get("contact_id");
							up_map = Map();
							up_map.put("Ontario_Books_ID",book_contact_id.toString());
							opt_map = Map();
							update = zoho.crm.updateRecord("Residence",res_ID,up_map);
						}
					}
					/*Quebec*/
					crea_cont_2 = zoho.books.createRecord("contacts",749385035,cont_map,"books_connect");
					info "Create Qubec Data Success" + crea_cont_2;
					if(crea_cont_2.containKey("code") && crea_cont_2.get("code") == "0")
					{
						new_cont_map_2 = crea_cont_2.get("contact").toMap();
						if(new_cont_map_2.containKey("contact_id"))
						{
							book_contact_id_2 = new_cont_map_2.get("contact_id");
							quebecBooksID = new_cont_map_2.get("contact_id");
							up_map_2 = Map();
							up_map_2.put("Qubec_Books_ID",book_contact_id_2.toString());
							opt_map_2 = Map();
							update_Que = zoho.crm.updateRecord("Residence",res_ID,up_map_2);
						}
					}
				}
			}
			else
			{
				info "Other Provinces";
			}
		}
	}
}
catch (e)
{
	// 	appName = "visavie";
	// 	ownerName = "lion_visavie";
	// 	formName = "Developer_Log";
	// 	dataMap = Map();
	// 	dataMap.put("Module","Comptabilité");
	// 	dataMap.put("Process_Description","Create Invoice");
	// 	dataMap.put("In_Data",res_ID);
	// 	dataMap.put("Out_Response",e);
	// 	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}