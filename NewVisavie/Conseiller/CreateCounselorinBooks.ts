try 
{
	Advisor_info = zoho.crm.getRecordById("Advisor",AdviseID);
	if(Advisor_info.get("id") != null)
	{
		record_id = Advisor_info.get("id");
		sales_person_map = Map();
		sales_person_map.put("salesperson_name",Advisor_info.get("Name"));
		sales_person_map.put("salesperson_email",ifnull(Advisor_info.get("Advisor_Email"),""));
		sales_person_map.put("is_active",Advisor_info.get("Active_Status"));
		/* Quebec books*/
		getSalesPerson = invokeurl
		[
			url :"https://books.zoho.com/api/v3/salespersons?organization_id=749385035"
			type :POST
			parameters:sales_person_map.toString()
			connection:"books_connect"
		];
		if(getSalesPerson != null && getSalesPerson.get("code") == 0)
		{
			if(getSalesPerson.get("salespersons") != null)
			{
				counselor_map = Map();
				counselor_map.put("Quebec_Sales_Person_Id",getSalesPerson.get("salespersons").get("salesperson_id"));
				updateCounselor = zoho.crm.updateRecord("Advisor",record_id,counselor_map);
			}
		}
		/*Ontario books*/
		getSalesPersonInfo = invokeurl
		[
			url :"https://books.zoho.com/api/v3/salespersons?organization_id=770055462"
			type :POST
			parameters:sales_person_map.toString()
			connection:"books_connect"
		];
		if(getSalesPersonInfo != null && getSalesPersonInfo.get("code") == 0)
		{
			if(getSalesPersonInfo.get("salespersons") != null)
			{
				counselor_maps = Map();
				counselor_maps.put("Ontario_Sales_Person_Id",getSalesPersonInfo.get("salespersons").get("salesperson_id"));
				updateCounselor_1 = zoho.crm.updateRecord("Advisor",record_id,counselor_maps);
			}
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Advisor");
	dataMap.put("Process_Description","In CRM:Create salesperson records in Books");
	dataMap.put("In_Data",AdviseID);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
