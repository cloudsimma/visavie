response = "";
try 
{
	residence = zoho.crm.getRecordById("Residence",residenceId.toLong());
	residence_map = Map();
	if(residence.get("Residence_number") == null)
	{
		residence_map.put("Residence_number",residence.get("Residence_Auto_number"));
	}
	updateResidence = zoho.crm.updateRecord("Residence",residenceId.toLong(),residence_map);
	resi = zoho.crm.getRecordById("Residence",residenceId);
	res_ID = resi.get("id");
	org_id = "";
	if(res_ID != null)
	{
		// 		if(org_id != null && org_id != "")
		// 		{
		cont_map = Map();
		// 		if(resi.get("Legal_name") != null)
		// 		{
		cont_map.put("contact_name",resi.get("Name"));
		cont_map.put("company_name",ifnull(resi.get("Name"),""));
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
		cust_list = List();
		res_list = List();
		if(resi.get("Residence_number") != null)
		{
			res_map = Map();
			res_map.put("label","Residence Number");
			res_map.put("value",resi.get("Residence_number"));
			res_list.add(res_map);
		}
		if(resi.get("Legal_name") != null)
		{
			legal_map = Map();
			legal_map.put("label","Legal Name");
			legal_map.put("value",resi.get("Legal_name"));
			res_list.add(legal_map);
		}
		else
		{
			legal_map = Map();
			legal_map.put("label","Legal Name");
			legal_map.put("value","");
			res_list.add(legal_map);
		}
		/*legal name -starts*/
		if(resi.get("Legal_name") != null)
		{
			cust_map = Map();
			cust_map.put("label","legal name");
			cust_map.put("value",resi.get("Legal_name"));
			res_list.add(cust_map);
		}
		else
		{
			cust_map = Map();
			cust_map.put("label","legal name");
			cust_map.put("value",resi.get("Name"));
			res_list.add(cust_map);
		}
		/*legal name -ends*/
		cust_list.addAll(res_list);
		cont_map.put("custom_fields",cust_list);
		ontarioBooksID = "";
		quebecBooksID = "";
		/*Create nd update records-Ontario*/
		if(resi.get("Provinces") == "Québec/Quebec" || resi.get("Provinces") == "Ontario" || resi.get("Province") == "Québec/Quebec" || resi.get("Province") == "Ontario")
		{
			/*ontario*/
			// 			info "1";
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
					books_map = Map();
					for each  item in booksContacts
					{
						info "item" + item;
						if(item.get("email") != null && item.get("email") != "")
						{
							if(item.get("department") != "CRM")
							{
								books_map.put(item.get("email"),item.get("contact_person_id"));
							}
							contactMap.put(item.get("email"),item.get("contact_person_id"));
						}
					}
				}
				//books_map = contactMap;
				info "hh" + books_map;
				ontarioList = List();
				getContacts = resi.get("Contac");
				for each  contact_rec in getContacts
				{
					assoicate_contact = Map();
					if(contact_rec.get("Billing_Confirmation") == true && contact_rec.get("Email") != null)
					{
						if(contact_rec.get("Contact") != null && contactMap.containKey(contact_rec.get("Email")))
						{
							assoicate_contact.put("contact_person_id",contactMap.get(contact_rec.get("Email")));
							assoicate_contact.put("zcrm_contact_id",contact_rec.get("id"));
							if(contact_rec.get("Contact") != null)
							{
								name = contact_rec.get("Contact").get("name");
								assoicate_contact.put("last_name",name);
							}
							assoicate_contact.put("phone",ifnull(contact_rec.get("Work_phone"),""));
							assoicate_contact.put("email",ifnull(contact_rec.get("Email"),""));
							assoicate_contact.put("department","CRM");
							ontarioList.add(assoicate_contact);
							books_map.remove(contact_rec.get("Email"));
						}
						else
						{
							assoicate_contact.put("zcrm_contact_id",contact_rec.get("id"));
							if(contact_rec.get("Contact") != null)
							{
								name = contact_rec.get("Contact").get("name");
								assoicate_contact.put("last_name",name);
							}
							assoicate_contact.put("phone",ifnull(contact_rec.get("Work_phone"),""));
							assoicate_contact.put("email",ifnull(contact_rec.get("Email"),""));
							assoicate_contact.put("department","CRM");
							ontarioList.add(assoicate_contact);
						}
					}
				}
				if(books_map.size() > 0)
				{
					for each  book_contact_map in books_map
					{
						assoicate_contact1 = Map();
						assoicate_contact1.put("contact_person_id",book_contact_map);
						ontarioList.add(assoicate_contact1);
					}
				}
				ontarioList.addAll(cont_per_list);
				cont_map.put("contact_persons",ontarioList);
				// 				info "update Ontario-->"+cont_map;
				book_contact_id = resi.get("Ontario_Books_ID").toNumber();
				ontarioBooksID = resi.get("Ontario_Books_ID");
				update_con = zoho.books.updateRecord("contacts",770055462,book_contact_id,cont_map,"books_connect");
				info "Update Ontario Data Success" + update_con;
			}
			else
			{
				getContacts = resi.get("Contac");
				ontarioList = List();
				for each  contact_rec in getContacts
				{
					assoicate_contact1 = Map();
					if(contact_rec.get("Billing_Confirmation") == true && contact_rec.get("Email") != null)
					{
						if(contact_rec.get("Contact") != null)
						{
							name = contact_rec.get("Contact").get("name");
							assoicate_contact1.put("last_name",name);
						}
						assoicate_contact1.put("zcrm_contact_id",contact_rec.get("id"));
						assoicate_contact1.put("phone",ifnull(contact_rec.get("Work_phone"),""));
						assoicate_contact1.put("email",ifnull(contact_rec.get("Email"),""));
						assoicate_contact1.put("department","CRM");
						ontarioList.add(assoicate_contact1);
					}
				}
				ontarioList.addAll(cont_per_list);
				cont_map.put("contact_persons",ontarioList);
				cont_map.put("language_code","en");
				cont_map.put("is_taxable",true);
				cont_map.put("tax_id",3035265000000283029);
				/*ontario*/
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
			}
			/*Quebec*/
			if(resi.containKey("Qubec_Books_ID") && resi.get("Qubec_Books_ID") != null && resi.get("Qubec_Books_ID") != "")
			{
				info "Update Quebec";
				contactMap2 = Map();
				books1_map = Map();
				// Associated contacts
				getContact = zoho.books.getRecordsByID("contacts",749385035,resi.get("Qubec_Books_ID").toLong(),"books_connect");
				if(getContact.get("code") == 0 && getContact.get("contact") != null && getContact.get("contact").get("contact_persons") != null && getContact.get("contact").get("contact_persons").size() > 0)
				{
					booksContacts = getContact.get("contact").get("contact_persons");
					for each  item in booksContacts
					{
						if(item.get("email") != null && item.get("email") != "")
						{
							if(item.get("department") != "CRM")
							{
								books1_map.put(item.get("email"),item.get("contact_person_id"));
							}
							contactMap2.put(item.get("email"),item.get("contact_person_id"));
						}
					}
				}
				//books1_map = contactMap2;
				getContacts = resi.get("Contac");
				quebecList = List();
				for each  contact_rec1 in getContacts
				{
					assoicate_contact = Map();
					if(contact_rec1.get("Billing_Confirmation") == true && contact_rec1.get("Email") != null)
					{
						if(contact_rec1.get("Contact") != null && contactMap2.containKey(contact_rec1.get("Email")))
						{
							info "7";
							assoicate_contact.put("contact_person_id",contactMap2.get(contact_rec1.get("Email")));
							assoicate_contact.put("zcrm_contact_id",contact_rec1.get("id"));
							if(contact_rec1.get("Contact") != null)
							{
								name = contact_rec1.get("Contact").get("name");
								assoicate_contact.put("last_name",name);
							}
							assoicate_contact.put("last_name",name);
							assoicate_contact.put("phone",ifnull(contact_rec1.get("Work_phone"),""));
							assoicate_contact.put("email",ifnull(contact_rec1.get("Email"),""));
							assoicate_contact.put("department","CRM");
							quebecList.add(assoicate_contact);
							books1_map.remove(contact_rec1.get("Email"));
						}
						else
						{
							info "8";
							assoicate_contact.put("zcrm_contact_id",contact_rec1.get("id"));
							if(contact_rec1.get("Contact") != null)
							{
								name = contact_rec1.get("Contact").get("name");
								assoicate_contact.put("last_name",name);
							}
							assoicate_contact.put("phone",ifnull(contact_rec1.get("Work_phone"),""));
							assoicate_contact.put("email",ifnull(contact_rec1.get("Email"),""));
							assoicate_contact.put("department","CRM");
							quebecList.add(assoicate_contact);
						}
					}
				}
				if(books1_map.size() > 0)
				{
					for each  book_contact_map1 in books1_map
					{
						assoicate_contact2 = Map();
						assoicate_contact2.put("contact_person_id",book_contact_map1);
						quebecList.add(assoicate_contact2);
					}
				}
				quebecList.addAll(cont_per_list);
				cont_map.put("contact_persons",quebecList);
				info "cont_per_list" + cont_per_list;
				book_contact_id = resi.get("Qubec_Books_ID").toNumber();
				quebecBooksID = resi.get("Qubec_Books_ID");
				update_con = zoho.books.updateRecord("contacts",749385035,book_contact_id,cont_map,"books_connect");
			}
			else
			{
				/* Create Subform*/
				info "Create Quebec record";
				info "GetContacts" + getContacts;
				quebecList = List();
				for each  contact_rec in getContacts
				{
					assoicate_contact1 = Map();
					if(contact_rec.get("Billing_Confirmation") == true && contact_rec.get("Email") != null)
					{
						assoicate_contact1.put("zcrm_contact_id",contact_rec.get("id"));
						if(contact_rec.get("Contact") != null)
						{
							name = contact_rec.get("Contact").get("name");
							assoicate_contact1.put("last_name",name);
						}
						assoicate_contact1.put("phone",ifnull(contact_rec.get("Work_phone"),""));
						assoicate_contact1.put("email",ifnull(contact_rec.get("Email"),""));
						assoicate_contact1.put("department","CRM");
						quebecList.add(assoicate_contact1);
					}
				}
				quebecList.addAll(cont_per_list);
				cont_map.put("contact_persons",quebecList);
				cont_map.put("is_taxable",true);
				cont_map.put("tax_id",2658202000000249042);
				info "cont_map" + cont_map;
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
			response = response + "Other Provinces";
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Residence");
	dataMap.put("Process_Description","Create and Update Residence in Books");
	dataMap.put("In_Data",res_ID);
	dataMap.put("Out_Response",e + response);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
