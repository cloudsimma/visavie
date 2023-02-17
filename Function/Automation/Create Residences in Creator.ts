if(id != null)
{
	get_rec = zoho.crm.getRecordById("Residence",id);
	info get_rec;
	m_map = Map();
	m_map.put("Residence_number",get_rec.get("Residence_number"));
	m_map.put("Usual_name",get_rec.get("Name"));
	m_map.put("Legal_name",get_rec.get("Legal_name"));
	m_map.put("Status",get_rec.get("Status"));
	m_map.put("Referral_agreement",get_rec.get("Referral_payment_agreement_Entente_de_paiement_de"));
	m_map.put("Language_s_spoken_by_the_personnel",get_rec.get("Language_s_spoken_by_the_pers onnel"));
	m_map.put("Signed_agreement",get_rec.get("Signed_agreement"));
	m_map.put("Name_of_the_group",get_rec.get("Name_of_the_group"));
	m_map.put("Number_of_units",get_rec.get("Number_of_units"));
	m_map.put("Size_of_the_residence",get_rec.get("Size_of_the_residence"));
	m_map.put("Notes",get_rec.get("Notes"));
	datamap = Map();
	create_record = zoho.creator.createRecord("lion_visavie","visavie","Residences",m_map,datamap,"zohocreator");
	info create_record;
}