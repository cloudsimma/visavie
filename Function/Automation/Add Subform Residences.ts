if(id != null)
{
	get_deal = zoho.crm.getRecordById("Deals",id);
	info get_deal;
	// 	if(get_deal.containKey("Residence"))
	// 	{
	// 		get_residence = get_deal.get("Residence");
	// // 		info get_residence;
	// 		for each residence in get_residence
	// 		{
	// 			 query_map = Map(); 
	// 			 query_map.put("Residence_number", residence); 
	// 			 response = zoho.crm.getRecords("Residence", 1, 10, query_map);
	// 			 info "response"+response;
	// 			 for each resp in response
	// 			 {
	// 				 res_id = resp.get("id");
	// 			 info res_id; 
	// 			 }
	// 		}
	// 	}
}