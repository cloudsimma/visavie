val = zoho.crm.getRecords("Residence",186,10);
for each  rec in val
{
	re_map = rec.toMap();
	res_id = re_map.get("id");
	province = false;
	if(res_id != null)
	{
		resi = zoho.crm.getRecordById("Residence",res_id);
		up_map = Map();
		if(resi.get("Adress_Adresse_1") == null || resi.get("Adress_Adresse_1") == "")
		{
			up_map.put("Adress_Adresse_1",ifnull(resi.get("Line_1"),""));
		}
		if(resi.get("City_Ville") == null || resi.get("City_Ville") == "")
		{
			up_map.put("City_Ville",ifnull(resi.get("City"),""));
		}
		if(resi.get("Primary_phones_T_l_phone_principal") == null || resi.get("Primary_phones_T_l_phone_principal") == "")
		{
			up_map.put("Primary_phones_T_l_phone_principal",ifnull(resi.get("Primary_phone"),""));
		}
		if(resi.get("Postal_codes_Code_postal") == null || resi.get("Postal_codes_Code_postal") == "")
		{
			up_map.put("Postal_codes_Code_postal",ifnull(resi.get("Postal_code"),""));
		}
		if(resi.get("Provinces") == null || resi.get("Provinces") == "")
		{
			up_map.put("Provinces",ifnull(resi.get("Province"),""));
		}
		if(resi.get("Regions_R_gion") == null || resi.get("Regions_R_gion") == "")
		{
			up_map.put("Regions_R_gion",ifnull(resi.get("Region"),""));
		}
		info "Residence ID----" + res_id;
		org_id = null;
		if(resi.get("Provinces") == "Québec/Quebec" || resi.get("Provinces") == "Ontario" || resi.get("Province") == "Québec/Quebec" || resi.get("Province") == "Ontario")
		{
			cont_map = Map();
			cont_map.put("contact_name",resi.get("Name"));
			cont_map.put("phone",ifnull(resi.get("Primary_phone"),""));
			cont_per_map = Map();
			cont_per_map.put("last_name",resi.get("Name"));
			cont_per_map.put("phone",ifnull(resi.get("Primary_phone"),""));
			cont_per_map.put("is_primary_contact",true);
			cont_per_list = List();
			cont_per_list.add(cont_per_map);
			cont_map.put("contact_persons",cont_per_list);
			address_map = Map();
			address_map.put("address",ifnull(resi.get("Line_1"),""));
			address_map.put("city",ifnull(resi.get("City"),""));
			address_map.put("state",ifnull(resi.get("Province"),""));
			address_map.put("zip",ifnull(resi.get("Postal_code"),""));
			address_map.put("country",ifnull(resi.get("Region"),""));
			address_map.put("phone",ifnull(resi.get("Primary_phone"),""));
			cont_map.put("shipping_address",address_map);
			cont_map.put("billing_address",address_map);
			crea_cont1 = zoho.books.createRecord("contacts",749385035,cont_map,"books_connect");
			if(crea_cont1.containKey("code") && crea_cont1.get("code") == 0)
			{
				book_id1 = crea_cont1.get("contact").get("contact_id");
				up_map.put("Qubec_Books_ID",book_id1);
				info "Quebec - true";
			}
			crea_cont2 = zoho.books.createRecord("contacts",770055462,cont_map,"books_connect");
			if(crea_cont2.containKey("code") && crea_cont2.get("code") == 0)
			{
				book_id2 = crea_cont2.get("contact").get("contact_id");
				up_map.put("Ontario_Books_ID",book_id2);
				info "Ontario - true";
			}
		}
		else
		{
			info "Different Province";
		}
		up_res = zoho.crm.updateRecord("Residence",res_id,up_map);
		// 		info up_res;
	}
}