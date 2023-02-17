try 
{
	// 	getResidence = zoho.crm.getRecords("Residence",94,20);
	// 	for each  resi_map in getResidence
	// 	{
	resi = zoho.crm.getRecordById("Residence",4846491000004756074);
	customerID = null;
	if(resi.get("Provinces") == "Québec/Quebec")
	{
		org_id = "749385035";
	}
	else if(resi.get("Provinces") == "Ontario")
	{
		org_id = "770055462";
	}
	info "Residence Id----------" + resi.get("id");
	Res_ID = resi.get("id");
	info "Books ID-----------" + resi.containKey("Ontario_Books_ID");
	if(resi.containKey("Qubec_Books_ID") && resi.get("Qubec_Books_ID") != null && resi.get("Qubec_Books_ID") != "")
	{
		cont_per_list = List();
		cont_map = Map();
		cont_map.put("contact_name",resi.get("Name"));
		cont_map.put("phone",ifnull(resi.get("Primary_phone"),""));
		cont_per_map = Map();
		cont_per_map.put("last_name",resi.get("Name"));
		cont_per_map.put("phone",ifnull(resi.get("Primary_phone"),""));
		cont_per_map.put("is_primary_contact",true);
		cont_per_list = List();
		cont_per_list.add(cont_per_map);
		contactMap = Map();
		// Associated contacts
		getContact = zoho.books.getRecordsByID("contacts",org_id,resi.get("Qubec_Books_ID").toLong(),"books_connect");
		if(getContact.get("code") == 0 && getContact.get("contact") != null && getContact.get("contact").get("contact_persons") != null && getContact.get("contact").get("contact_persons").size() > 0)
		{
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
		info "getContacts--------" + getContacts;
		for each  contact_rec in getContacts
		{
			assoicate_contact = Map();
			if(contact_rec.get("Billing_Confirmation") == true && contact_rec.get("Email") != null)
			{
				if(contact_rec.get("Contact") != null && contactMap.containKey(contact_rec.get("Email")))
				{
					C_name = contact_rec.get("Contact");
					if(C_name != null)
					{
						name = C_name.get("name");
					}
					assoicate_contact.put("contact_person_id",contactMap.get(contact_rec.get("Email")));
					assoicate_contact.put("zcrm_contact_id",contact_rec.get("id"));
					assoicate_contact.put("last_name",name);
					assoicate_contact.put("phone",ifnull(contact_rec.get("Work_phone"),""));
					assoicate_contact.put("email",ifnull(contact_rec.get("Email"),""));
					cont_per_list.add(assoicate_contact);
				}
				else
				{
					C_name = contact_rec.get("Contact");
					if(C_name != null)
					{
						name = C_name.get("name");
					}
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
		info "Updated---------------";
		org_id = "749385035";
		update_con = zoho.books.updateRecord("contacts",org_id,book_contact_id,cont_map,"books_connect");
		info "Update Qubec Data Success" + update_con;
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Deal-UpdateResidenceContact");
	dataMap.put("Process_Description","Updating Contact in Ontario Books");
	dataMap.put("In_Data",Res_ID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
	//info ContactCreateResponse;
}
return "";