if(id != null)
{
	response = zoho.crm.getRecordById("Deals",id);
	info response;
	dl_name = response.get("Deal_Name");
	info dl_name;
	m_map = Map();
	m_map.put("Demarche_Name",dl_name);
	info m_map;
	key_param = Map();
	resp = zoho.creator.createRecord("lion_visavie","visavie","Deals",m_map,key_param,"zohocreator");
	info resp;
	id1 = resp.get("ID");
	info id1;
	// 	resp_get = zoho.creator.getRecords("lion_visavie", "visavie", "All_Deals", "ID == \"\"", <NUMBER>, <NUMBER>, "zohocreator")
}