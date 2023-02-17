val = zoho.crm.getRecords("Residence",39,50);
for each  rec in val
{
	re_map = rec.toMap();
	rec_id = re_map.get("id");
	info rec_id;
	vet = zoho.crm.getRecordById("Residence",rec_id);
	if(vet.containKey("Contac"))
	{
		llist = vet.get("Contac");
		det_map = Map();
		sublist = List();
		for each  tec in llist
		{
			tec_map = tec.toMap();
			if(tec_map.containKey("Ancien_Contact_Id"))
			{
				anc_id = tec_map.get("Ancien_Contact_Id");
				con_fet = zoho.crm.searchRecords("Contacts","(Ancien_CRM_ID:equals:" + anc_id + ")");
				if(con_fet.size() <= 0)
				{
					info "missing - " + anc_id + "Deal ID - " + rec_id;
				}
				else
				{
					con_map = con_fet.get(0);
					crm_con_id = con_map.get("id");
					up_map = Map();
					up_map.put("Contact",crm_con_id);
					up_map.put("id",tec_map.get("id"));
					up_map.put("Type_de_contact",ifnull(con_map.get("Type_de_contact"),""));
					up_map.put("Email",ifnull(con_map.get("E_mail_Courriel_1"),""));
					up_map.put("Cell_phone",con_map.get("Cellulaire"));
					up_map.put("Home_Phone",con_map.get("T_l_phone_maison"));
					up_map.put("Work_Phone",con_map.get("T_l_phone_travail"));
					sublist.add(up_map);
					info "true";
				}
			}
		}
		det_map.put("Contac",sublist);
		up_res = zoho.crm.updateRecord("Residence",rec_id,det_map);
	}
}