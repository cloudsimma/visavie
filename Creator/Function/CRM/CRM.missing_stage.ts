string CRM.missing_stage()
{
	try 
	{
		det = Map();
		val = zoho.crm.searchRecords("Deals","(Stage:equals:Location enregistrée/Registered renting)",1,1,det,"zoho_one");
		for each  rec in val
		{
			re_map = rec.toMap();
			deal_id = re_map.get("id");
			CRM_stage = re_map.get("Stage");
			info CRM_stage;
			// 			if(deal_id != null)
			// 			{
			// 				getCreatorDeal = Deals[CRM_Deal_ID == deal_id];
			// 				if(getCreatorDeal.count() > 0)
			// 				{
			// 					info "yes";
			// 					if ( <variable> <opr> <expression> ) 
			//                     {
			//                     }
			// 				}
			// 				else
			// 				{
			// 					info "Missing deal Records in Creator" + deal_id;
			// 				}
			// 			}
		}
	}
	catch (e)
	{
		info "alert";
		thisapp.addDeveloperLog("In Creator :Stage-Location ","Deal",deal_id,e);
	}
	return "";
}