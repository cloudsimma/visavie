void CRM.testContactUpdate()
{
	try 
	{
		det = Map();
		val = zoho.crm.getRecords("Contacts",329,200,det,"zoho_one");
		for each  rec in val
		{
			re_map = rec.toMap();
			contact_id = re_map.get("id");
			if(contact_id != null)
			{
				// 				info "deal_id----------" + deal_id;
				v_fet = Contacts[ZohoCRM_ID == contact_id.toString()];
				if(v_fet.count() > 0)
				{
					if(rec.get("Layout") != null && rec.get("Layout").get("name") == "Contact - Others")
					{
						getContact = Contacts[ZohoCRM_ID == contact_id.toString()];
						if(getContact.count() > 0)
						{
							getContact.Type_of_contact1=ifnull(rec.get("Type_de_contact"),"");
							getContact.Address_Line=ifnull(rec.get("Line_1"),"");
							info "Success Contact" + contact_id;
						}
						else
						{
							info "No Contact-------" + contact_id;
						}
					}
				}
				else
				{
					info "No Contact---" + contact_id;
				}
			}
		}
	}
	catch (e)
	{
		info "alert" + e;
		thisapp.addDeveloperLog("Creator : Contact","Missing type of contact update",contact_id,e);
	}
}