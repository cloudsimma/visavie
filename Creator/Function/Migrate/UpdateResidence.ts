void migrate.UpdateResidenceContact()
{
	getResidence = zoho.crm.getRecords("Residence",1,1);
	for each  resi in getResidence
	{
		customerID = null;
		// 					resi = zoho.crm.getRecordById("Residence",resi_map.get("id"));	
		if(resi.get("Provinces") == "Québec/Quebec")
		{
			org_id = "749385035";
		}
		else if(resi.get("Provinces") == "Ontario")
		{
			org_id = "770055462";
		}
		if(resi.get("Provinces") == "Ontario")
		{
			if(resi.containKey("Ontario_Books_ID") && resi.get("Ontario_Books_ID") != null && resi.get("Ontario_Books_ID") != "")
			{
				ontarioBooksID = resi.get("Ontario_Books_ID");
				customerID = ontarioBooksID;
			}
		}
		if(resi.get("Provinces") == "Québec/Quebec")
		{
			if(resi.containKey("Qubec_Books_ID") && resi.get("Qubec_Books_ID") != null && resi.get("Qubec_Books_ID") != "")
			{
				quebecBooksID = resi.get("Qubec_Books_ID");
				customerID = quebecBooksID;
			}
		}
	}
}