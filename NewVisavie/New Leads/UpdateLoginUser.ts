datamap = Map();
resp = zoho.crm.getRecords("users");
for each  user in resp.get("users")
{
	if(user.get("email") == zoho.loginuserid)
	{
		datamap.put("Owner",user.get("id"));
	}
}
res = zoho.crm.updateRecord("New_Leads",leadid,datamap);
info res;
