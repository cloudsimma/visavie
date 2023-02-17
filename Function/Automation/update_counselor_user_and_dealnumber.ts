try 
{
	if(id != null)
	{
		data_map = Map();
		get_request_invoice = zoho.crm.getRecordById("Request_invoice",id);
		info get_request_invoice;
		if(get_request_invoice.containKey("Advisor"))
		{
			advisor_id = get_request_invoice.get("Advisor").get("id");
			info "advisor_id" + advisor_id;
			get_advisor = zoho.crm.getRecordById("Advisor",advisor_id);
			info "get_advisor" + get_advisor;
			info "get_advisor" + get_advisor.get("Counselor_user").get("id");
			if(get_advisor.containKey("Counselor_user"))
			{
				data_map.put("Counselor_User",get_advisor.get("Counselor_user").get("id"));
			}
		}
		else
		{
			data_map.put("Counselor_User",null);
		}
		if(get_request_invoice.get("Deal_Number") != "")
		{
			get_deal = zoho.crm.searchRecords("Deals","(Deal_Number:equals:" + get_request_invoice.get("Deal_Number") + ")");
			for each  val in get_deal
			{
				if(val.get("id") != null)
				{
					data_map.put("Housing_Deal",val.get("id"));
				}
				else
				{
					data_map.put("Housing_Deal","");
				}
			}
		}
		else
		{
			data_map.put("Housing_Deal","");
		}
		info "data_map" + data_map;
		update_request_invoice = zoho.crm.updateRecord("Request_invoice",id,data_map);
		info "update_request_invoice" + update_request_invoice;
	}
}
catch (e)
{
}