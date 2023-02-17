void migrate.missingClientImport()
{
	try 
	{
		det = Map();
		val = zoho.crm.getRecords("Contacts",1,200,det,"zoho_one");
		for each  rec in val
		{
			re_map = rec.toMap();
			contact_id = re_map.get("id");
			if(contact_id != null && re_map.get("New_Client_Import") == true)
			{
				info "contact_id----" + contact_id;
			}
		}
	}
	catch (e)
	{
		info "alert" + e;
		thisapp.addDeveloperLog("Creator : Contact","Deal-Rework",contact_id,e);
	}
}