resp = "";
try 
{
	if(input.id != null)
	{
		v_deal = zoho.crm.getRecordById("Deals",id);
		m_map = Map();
		m_map.put("Name",v_deal.get("Deal_Name"));
		m_map.put("Deal_Number",id);
		if(v_deal.containKey("Contact"))
		{
			con = v_deal.get("Contact").toMap();
			if(con.containKey("id"))
			{
				m_map.put("Client_s",con.get("id"));
			}
		}
		if(v_deal.containKey("Advisors"))
		{
			advisor = v_deal.get("Advisors").toMap();
			if(advisor.containKey("id"))
			{
				m_map.put("Advisor",advisor.get("id"));
			}
		}
		createrequest = zoho.crm.createRecord("Deals",m_map);
		if(createrequest.get("id") != null)
		{
			resp = "Deal has been created successfully";
			openUrl("https://crm.zoho.com/crm/org746753262/tab/CustomModule4/" + createrequest.get("id"),"new window");
		}
	}
}
catch (e)
{
}
//return resp;