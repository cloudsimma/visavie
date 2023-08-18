//leads = zoho.crm.searchRecords("Contacts", "((First_Name:equals:"+Fname+")or(Last_Name:equals:"+Lname+")or(E_mail_Courriel_1:equals:"+mail+")or(Cellulaire:equals:"+Phone+"))");
//response = zoho.crm.searchRecords("Contacts","((First_Name:equals:" + Fname + ")AND(Last_Name:equals:" + Lname + ")OR(E_mail_Courriel_1:equals:" + mail + ")OR(DOB:equals:" + Phone + "))");
//response = zoho.crm.searchRecords("Contacts","(First_Name:equals:" + Fname + ")");
query = "";
no_of_cond = 0;
conditionList = Map();
if(Fname != "" && Fname != null)
{
	QFname = "(First_Name like '%" + Fname + "%')";
	no_of_cond = no_of_cond + 1;
	conditionList.put(no_of_cond,QFname);
}
if(Lname != "" && Lname != null)
{
	QLname = "(Last_Name like '%" + Lname + "%')";
	no_of_cond = no_of_cond + 1;
	conditionList.put(no_of_cond,QLname);
}
if(mail != "" && mail != null)
{
	Qmail = "(E_mail_Courriel_1 like '%" + mail + "%')";
	no_of_cond = no_of_cond + 1;
	conditionList.put(no_of_cond,Qmail);
}
if(Phone != "" && Phone != null)
{
	Qphone1 = "(Cellulaire like '%" + Phone + "%')";
	Qphone2 = "(T_l_phone_travail like '%" + Phone + "%')";
	Qphone3 = "(T_l_phone_maison like '%" + Phone + "%')";
	Qphone = "(" + Qphone1 + "or(" + Qphone2 + "or" + Qphone3 + "))";
	no_of_cond = no_of_cond + 1;
	conditionList.put(no_of_cond,Qphone);
}
//info "conditionList :" + conditionList;
final_query = "select First_Name,Last_Name,E_mail_Courriel_1,Cellulaire,T_l_phone_maison,T_l_phone_travail,Date_of_Birth,Type_de_contact,id FROM Contacts WHERE ";
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
// info no_of_cond;
// info FQuery;
if(FQuery != "")
{
	end_srting = "";
	FQuery = FQuery + " ORDER BY First_Name ASC ";
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
	info "response : " + response;
	//data for widget Pagination - starts here
	hasMoreRecords = true;
	totalRecordCount = 0;
	totalLoopCount = 0;
	//getCountList = {2,3,4,5,6,7,8};
	getCountList = {2,3,4};
	if(response.get("info").get("more_records") == true)
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
		totalRecordCount = response.get("info").get("count");
		hasMoreRecords = false;
		totalLoopCount = 1;
	}
	//data for widget Pagination - ends here
	data = list();
	final_data = list();
	for each  rec in response.get("data")
	{
		EachData = Map();
		EachData.put("Fname",rec.get("First_Name"));
		EachData.put("Lname",if(rec.get("Last_Name") != null,rec.get("Last_Name"),"-"));
		EachData.put("Email",if(rec.get("E_mail_Courriel_1") != null,rec.get("E_mail_Courriel_1"),"-"));
		EachData.put("Phone",if(rec.get("Cellulaire") != null,rec.get("Cellulaire"),"-"));
		EachData.put("Work_Phone",if(rec.get("T_l_phone_maison") != null,rec.get("T_l_phone_maison"),"-"));
		EachData.put("Home_Phone",if(rec.get("T_l_phone_travail") != null,rec.get("T_l_phone_travail"),"-"));
		EachData.put("DOB",if(rec.get("Date_of_Birth") != null,rec.get("Date_of_Birth"),"-"));
		EachData.put("Type",if(rec.get("Type_de_contact") != null,rec.get("Type_de_contact"),"-"));
		EachData.put("recId",rec.get("id"));
		EachData.put("totalLoopCount",totalLoopCount);
		EachData.put("totalRecordCount",totalRecordCount);
		data.add(EachData);
	}
	final_data.add(data);
	// 	count_datamap = Map();
	// 	count_datamap.put("totalRecordCount",totalRecordCount);
	// 	count_datamap.put("totalLoopCount",totalLoopCount);
	//final_data.add(count_datamap);
	return final_data;
}
else
{
	return "Empty Query";
}
//--------------------v1 starts here-----------------------//
// //leads = zoho.crm.searchRecords("Contacts", "((First_Name:equals:"+Fname+")or(Last_Name:equals:"+Lname+")or(E_mail_Courriel_1:equals:"+mail+")or(Cellulaire:equals:"+Phone+"))");
// //response = zoho.crm.searchRecords("Contacts","((First_Name:equals:" + Fname + ")AND(Last_Name:equals:" + Lname + ")OR(E_mail_Courriel_1:equals:" + mail + ")OR(DOB:equals:" + Phone + "))");
// //response = zoho.crm.searchRecords("Contacts","(First_Name:equals:" + Fname + ")");
// query = "";
// if(Fname != "" && Fname != null)
// {
// 	query = "(First_Name:equals:" + Fname + ")";
// }
// if(Lname != "" && Lname != null)
// {
// 	if(query != "")
// 	{
// 		query = query + "AND" + "(Last_Name:equals:" + Lname + ")";
// 	}
// 	else
// 	{
// 		query = "(Last_Name:equals:" + Lname + ")";
// 	}
// }
// if(mail != "" && mail != null)
// {
// 	if(query != "")
// 	{
// 		query = query + "AND" + "(E_mail_Courriel_1:equals:" + mail + ")";
// 	}
// 	else
// 	{
// 		query = "(E_mail_Courriel_1:equals:" + mail + ")";
// 	}
// }
// if(Phone != "" && Phone != null)
// {
// 	if(query != "")
// 	{
// 		query = query + "AND" + "(Cellulaire:equals:" + Phone + ")";
// 	}
// 	else
// 	{
// 		query = "(Cellulaire:equals:" + Phone + ")";
// 	}
// }
// info query;
// response = zoho.crm.searchRecords("Contacts",query);
// info "Matching Rec :" + response.size();
// //info response;
// data = list();
// final_data = list();
// for each  rec in response
// {
// 	EachData = Map();
// 	EachData.put("Fname",rec.get("First_Name"));
// 	EachData.put("Lname",if(rec.get("Last_Name") != null,rec.get("Last_Name"),"-"));
// 	EachData.put("Email",if(rec.get("E_mail_Courriel_1") != null,rec.get("E_mail_Courriel_1"),"-"));
// 	EachData.put("Phone",if(rec.get("Cellulaire") != null,rec.get("Cellulaire"),"-"));
// 	EachData.put("Work_Phone",if(rec.get("T_l_phone_maison") != null,rec.get("T_l_phone_maison"),"-"));
// 	EachData.put("Home_Phone",if(rec.get("T_l_phone_travail") != null,rec.get("T_l_phone_travail"),"-"));
// 	EachData.put("DOB",if(rec.get("Date_of_Birth") != null,rec.get("Date_of_Birth"),"-"));
// 	EachData.put("Type",if(rec.get("Type_de_contact") != null,rec.get("Type_de_contact"),"-"));
// 	EachData.put("recId",rec.get("id"));
// 	data.add(EachData);
// }
// final_data.add(data);
// //info final_data;
// return final_data;
