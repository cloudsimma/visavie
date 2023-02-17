acc_data = zoho.crm.getRecords("Request_invoice",3,70);
for each  acc_info in acc_data
{
	acc_ID = acc_info.get("id");
	if(acc_ID != null)
	{
		old_num = acc_info.get("Apartment_number111");
		if(old_num != null)
		{
			upd_map = Map();
			upd_map.put("Apartment_number",old_num.toString());
			update_res = zoho.crm.updateRecord("Request_invoice",acc_ID,upd_map);
			info update_res;
		}
	}
}
return "";