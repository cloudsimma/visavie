res_data = zoho.crm.getRecords("Residence",1,100);
for each  res_info in res_data
{
	res_ID = res_info.get("id");
	if(res_ID != null)
	{
		if(res_info.get("Provinces") == "Québec/Quebec" || res_info.get("Provinces") == "Ontario" || res_info.get("Province") == "Québec/Quebec" || res_info.get("Province") == "Ontario")
		{
			Name = res_info.get("Name");
			getContact = invokeurl
			[
				url :" https://books.zoho.com/api/v3/contacts?organization_id=749385035&contact_name=" + encodeurl(Name)
				type :GET
				connection:"books_connect"
			];
			if(getContact.containKey("code") && getContact.get("code") == "0")
			{
				info "yes";
			}
			else
			{
				info "CRM ID===" + res_ID;
				info "contact Name===" + Name;
			}
		}
	}
}