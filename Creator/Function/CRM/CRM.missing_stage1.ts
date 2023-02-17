string CRM.missing_stage1()
{
	try 
	{
		// 		getCRM_ID = 4846491000006058291;
		// 		deal_response = invokeurl
		// 			[
		// 				url :"https://www.zohoapis.com/crm/v2.1/Deals?ids=" + getCRM_ID 
		// 				type :GET
		// 				connection:"zoho_one"
		// 			];
		// 			info deal_response ;
		det = Map();
		val = zoho.crm.searchRecords("Deals","(Stage:equals:Fermé/Closed (ancien CRM))",1,1,det,"zoho_one");
		info val;
		// 	for each  rec in val
		// 	{
		// 			re_map = rec.toMap();
		// 			deal_id = re_map.get("id");
		// 			info deal_id ;
		// 	 if(deal_id != null)
		// 			{
		// 				getCreatorDeal = Deals[CRM_Deal_ID == deal_id];
		// 				if(getCreatorDeal.count() > 0)
		// 				{
		// 					info "yes";
		// 			    }
		// 				else 
		//                 {
		// 					info "Missing deal Records in Creator" +deal_id;
		//                 }
		// 		   }
		// 	 }
	}
	catch (e)
	{
		// 		info "alert";
		// 		thisapp.addDeveloperLog("In Creator :Stage-Location ","Deal",deal_id,e);
	}
	return "";
}