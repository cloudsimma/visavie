res_data = zoho.crm.getRecords("Residence",2,100);
if(res_data.size() > 0)
{
	for each  res_info in res_data
	{
		getResidence = zoho.crm.searchRecords("Residence","(Name:equals:" + res_info.get("Name") + ")");
		if(getResidence.size() > 0 && getResidence.size() >= 2)
		{
			for each  residence in getResidence
			{
				info residence;
			}
			// 			 info "Residence Id" + getResidence.get("id");
			// 			 info "Residence Name" + getResidence.get("Name");
		}
	}
}
// res_data = zoho.crm.getRecords("Residence",39,50);
// if(res_data.size() > 0)
// {
// 	for each  res_info in res_data
// 	{
// 		subform_list = list();
// 		res_data = Map();
// 		res_ID = res_info.get("id");
// 		res_info = zoho.crm.getRecordById("Residence",res_ID);
// 		for each  Residence_info in res_info.get("Contac")
// 		{
// 			datamap = Map();
// 			Main_contact = Residence_info.get("Contact");
// 			Contact_ID = Residence_info.get("id");
// 			if(Main_contact != null)
// 			{
// 				Main_ID = Main_contact.get("id");
// 				Contact_info = zoho.crm.getRecordById("Contacts",Main_ID);
// 				if(Contact_info != null)
// 				{
// 					datamap.put("Type_of_contact",Contact_info.get("Type_de_contact"));
// 					datamap.put("Email",Contact_info.get("E_mail_Courriel_1"));
// 					datamap.put("Cell_phone",Contact_info.get("Cellulaire"));
// 					datamap.put("Work_Phone",Contact_info.get("T_l_phone_maison"));
// 					datamap.put("Home_Phone",Contact_info.get("T_l_phone_travail"));
// 					datamap.put("id",Residence_info.get("id"));
// 					subform_list.add(datamap);
// 				}
// 			}
// 		}
// 		if(subform_list.size() > 0)
// 		{
// 			res_data.put("Contac",subform_list);
// 			update_res = zoho.crm.updateRecord("Residence",res_ID,res_data);
// 			info update_res;
// 		}
// 	}
// }