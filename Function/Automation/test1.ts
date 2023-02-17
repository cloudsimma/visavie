val = zoho.crm.getRecords("Residence",126,15);
for each  rec in val
{
	re_map = rec.toMap();
	info re_map.get("id");
	if(re_map.containKey("Qubec_Books_ID") && re_map.get("Qubec_Books_ID") != "" && re_map.get("Qubec_Books_ID") != null)
	{
		//info re_map.get("Qubec_Books_ID");
		m_map = Map();
		m_map.put("is_taxable",true);
		m_map.put("tax_id",2658202000000249042);
		up_res = zoho.books.updateRecord("contacts","749385035",re_map.get("Qubec_Books_ID"),m_map,"books_connect");
		info up_res.get("code");
	}
	if(re_map.containKey("Ontario_Books_ID") && re_map.get("Ontario_Books_ID") != "" && re_map.get("Ontario_Books_ID") != null)
	{
		//info re_map.get("Ontario_Books_ID");
		m_map1 = Map();
		m_map1.put("is_taxable",true);
		m_map1.put("tax_id",3035265000000283029);
		up_res1 = zoho.books.updateRecord("contacts","770055462",re_map.get("Ontario_Books_ID"),m_map1,"books_connect");
		info up_res1.get("code");
	}
}