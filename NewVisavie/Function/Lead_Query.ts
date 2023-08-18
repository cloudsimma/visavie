query = "";
no_of_cond = 0;
conditionList = Map();
if(Firstname != "" && Firstname != null)
{
	QFname = "(First_Namee like '%" + Firstname + "%')";
	no_of_cond = no_of_cond + 1;
	conditionList.put(no_of_cond,QFname);
}
if(Lastname != "" && Lastname != null)
{
	QLname = "(Last_Name like '%" + Lastname + "%')";
	no_of_cond = no_of_cond + 1;
	conditionList.put(no_of_cond,QLname);
}
if(mail != "" && mail != null)
{
	Qmail = "(Courriel_Email like '%" + mail + "%')";
	no_of_cond = no_of_cond + 1;
	conditionList.put(no_of_cond,Qmail);
}
if(Phone != "" && Phone != null)
{
	Qphone1 = "(Portable_Mobile	 like '%" + Phone + "%')";
	Qphone2 = "(T_l_phone_travail like '%" + Phone + "%')";
	Qphone3 = "(T_l_phone_maison_Home_phone like '%" + Phone + "%')";
	Qphone = "(" + Qphone1 + "or(" + Qphone2 + "or" + Qphone3 + "))";
	no_of_cond = no_of_cond + 1;
	conditionList.put(no_of_cond,Qphone);
}
// info "conditionList :" + conditionList;
final_query = "select First_Namee,Last_Name,Courriel_Email,Portable_Mobile,T_l_phone_maison_Home_phone,T_l_phone_travail,Date_de_naissance_Birth_date,Prospect_Type_de_contact_Type_of_Contact,id FROM Leads WHERE ";
FQuery = "";
if(no_of_cond == 1)
{
	FQuery = final_query + conditionList.get(1);
}
if(no_of_cond == 2)
{
	FQuery = final_query + "(" + conditionList.get(1) + " and " + conditionList.get(2) + ")";
}
if(no_of_cond == 3)
{
	FQuery = final_query + "(" + conditionList.get(1) + " and (" + conditionList.get(2) + " and " + conditionList.get(3) + "))";
}
if(no_of_cond == 4)
{
	FQuery = final_query + "(" + QFname + "and(" + QLname + " and(" + Qmail + " and " + Qphone + ")))";
}
//info no_of_cond;
//info FQuery;
if(FQuery != "")
{
	end_srting = "";
	FQuery = FQuery + " ORDER BY First_Namee ASC ";
	if(PageNo == 1)
	{
		FQuery = FQuery + end_srting + "";
		QueryCount = FQuery;
	}
	else
	{
		info "else page";
		limitValue = (PageNo - 1) * 200;
		searchFilter = "LIMIT " + limitValue + ", 200";
		query = FQuery + end_srting + searchFilter + "";
		QueryCount = FQuery + end_srting;
	}
	queryMap = Map();
	queryMap.put("select_query",FQuery);
	response = invokeurl
	[
		url :"https://www.zohoapis.com/crm/v3/coql"
		type :POST
		parameters:queryMap.toString()
		connection:"crm_connect"
	];
	// 	info response.get("data").size();
	info response;
	//data for widget Pagination - starts here
	hasMoreRecords = true;
	totalRecordCount = 0;
	totalLoopCount = 0;
	//getCountList = {2,3,4,5,6,7,8};
	getCountList = {2,3};
	if(response.get("info") != null && response.get("info").get("more_records") == true)
	{
		if(PageNo == 1)
		{
			hasMoreRecords = true;
			for each  recCount in getCountList
			{
				if(hasMoreRecords == true)
				{
					limitValueCount = (recCount - 1) * 200;
					searchFilterCount = "LIMIT " + limitValueCount + ", 200";
					QueryCountTemp = QueryCount + searchFilterCount + "";
					queryMapCount = Map();
					queryMapCount.put("select_query",QueryCountTemp);
					//info "queryMapCount" + queryMapCount;
					Countresponse = invokeurl
					[
						url :"https://www.zohoapis.com/crm/v3/coql"
						type :POST
						parameters:queryMapCount.toString()
						connection:"crm_connect"
					];
					//info "Next_response Count " + Countresponse.size();
					if(Countresponse.get("info").get("more_records") == true)
					{
						hasMoreRecords = true;
					}
					else
					{
						totalRecordCount = (recCount - 1) * 200 + Countresponse.get("info").get("count");
						hasMoreRecords = false;
					}
					totalLoopCount = recCount;
				}
			}
		}
		else
		{
			limitValueCount = (PageNo - 1) * 200;
			searchFilterCount = "LIMIT " + limitValueCount + ", 200";
			QueryCountTemp = QueryCount + searchFilterCount + "";
			queryMapCount = Map();
			queryMapCount.put("select_query",QueryCountTemp);
			//info queryMapCount;
			Countresponse = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v3/coql"
				type :POST
				parameters:queryMapCount.toString()
				connection:"crm_connect"
			];
			//info Countresponse;
			response = Countresponse;
		}
	}
	else
	{
		if(response.get("info") != null)
		{
			totalRecordCount = response.get("info").get("count");
		}
		else
		{
			totalRecordCount = 0;
		}
		hasMoreRecords = false;
		totalLoopCount = 1;
	}
	//data for widget Pagination - ends here
	data = list();
	final_data = list();
	for each  rec in response.get("data")
	{
		EachData = Map();
		EachData.put("Firstname",rec.get("First_Namee"));
		EachData.put("Lastname",if(rec.get("Last_Name") != null,rec.get("Last_Name"),"-"));
		EachData.put("Email",if(rec.get("Courriel_Email") != null,rec.get("Courriel_Email"),"-"));
		EachData.put("Phone",if(rec.get("Portable_Mobile") != null,rec.get("Portable_Mobile"),"-"));
		EachData.put("Work_Phone",if(rec.get("T_l_phone_travail") != null,rec.get("T_l_phone_travail"),"-"));
		EachData.put("Home_Phone",if(rec.get("T_l_phone_maison_Home_phone") != null,rec.get("T_l_phone_maison_Home_phone"),"-"));
		EachData.put("DOB",if(rec.get("Date_de_naissance_Birth_date") != null,rec.get("Date_de_naissance_Birth_date"),"-"));
		EachData.put("Type",if(rec.get("Prospect_Type_de_contact_Type_of_Contact") != null,rec.get("Prospect_Type_de_contact_Type_of_Contact"),"-"));
		EachData.put("recId",rec.get("id"));
		EachData.put("totalLoopCount",totalLoopCount);
		EachData.put("totalRecordCount",totalRecordCount);
		data.add(EachData);
	}
	final_data.add(data);
	return final_data;
}
// return query;
else
{
	return "Empty Query";
}
