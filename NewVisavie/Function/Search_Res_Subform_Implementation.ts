//rec = zoho.crm.getRecordById("Residence",4846491000043910325);
//info rec;
queryMap = Map();
query_list = List();
if(input.TypeRes.size() > 0)
{
	residence = "";
	open_string = "";
	count = 1;
	for each  rec in TypeRes
	{
		if(count == 1)
		{
			residence = residence + "(Parent_Id.Type_of_residence like '%" + rec + "%')";
		}
		else
		{
			residence = residence + " or (Parent_Id.Type_of_residence like '%" + rec + "%'))";
			open_string = open_string + "(";
		}
		count = count + 1;
	}
	residence = open_string + residence + "";
	query_list.add(residence);
}
if(input.Lang.size() > 0)
{
	language = "(";
	count1 = 1;
	for each  rec1 in Lang
	{
		if(count1 == 1)
		{
			language = language + "(Parent_Id.Language_s_spoken_by_the_personnel like '%" + rec1 + "%')";
		}
		else
		{
			language = language + " or (Parent_Id.Language_s_spoken_by_the_personnel like '%" + rec1 + "%')";
		}
		count1 = count1 + 1;
	}
	language = language + ")";
	query_list.add(language);
}
// info query_list ; error
if(input.clientType.size() > 0)
{
	clientType_query = "(";
	count2 = 1;
	for each  rec2 in clientType
	{
		if(count2 == 1)
		{
			clientType_query = clientType_query + "(Parent_Id.Client_Type like '%" + rec2 + "%')";
		}
		else
		{
			clientType_query = clientType_query + " or (Parent_Id.Client_Type like '%" + rec2 + "%')";
		}
		count2 = count2 + 1;
	}
	clientType_query = clientType_query + ")";
	query_list.add(clientType_query);
}
// info query_list ; error
if(input.building.size() > 0)
{
	building_query = "(";
	count3 = 1;
	for each  rec3 in building
	{
		if(count3 == 1)
		{
			building_query = building_query + "(Parent_Id.Building like '%" + rec3 + "%')";
		}
		else
		{
			building_query = building_query + " or (Parent_Id.Building like '%" + rec3 + "%')";
		}
		count3 = count3 + 1;
	}
	building_query = building_query + ")";
	query_list.add(building_query);
}
// info query_list ;  
if(input.Commonareas.size() > 0)
{
	Commonareas_query = "(";
	count4 = 1;
	for each  rec4 in Commonareas
	{
		if(count4 == 1)
		{
			Commonareas_query = Commonareas_query + "(Parent_Id.Common_areas like '%" + rec4 + "%')";
		}
		else
		{
			Commonareas_query = Commonareas_query + " or (Parent_Id.Common_areas like '%" + rec4 + "%')";
		}
		count4 = count4 + 1;
	}
	Commonareas_query = Commonareas_query + ")";
	query_list.add(Commonareas_query);
}
if(input.ResidenceServices.size() > 0)
{
	ResidenceServices_query = "(";
	count5 = 1;
	for each  rec5 in ResidenceServices
	{
		if(count5 == 1)
		{
			ResidenceServices_query = ResidenceServices_query + "(Parent_Id.Services_de_la_r_sidence_Residence_services like '%" + rec5 + "%')";
		}
		else
		{
			ResidenceServices_query = ResidenceServices_query + " or (Parent_Id.Services_de_la_r_sidence_Residence_services like '" + rec5 + "')";
		}
		count5 = count5 + 1;
	}
	ResidenceServices_query = ResidenceServices_query + ")";
	query_list.add(ResidenceServices_query);
}
if(input.AssistanceServices.size() > 0)
{
	AssistanceServices_query = "(";
	count6 = 1;
	for each  rec6 in AssistanceServices
	{
		if(count6 == 1)
		{
			AssistanceServices_query = AssistanceServices_query + "(Parent_Id.Nurse like '%" + rec6 + "%')";
		}
		else
		{
			AssistanceServices_query = AssistanceServices_query + " or (Parent_Id.Nurse like '%" + rec6 + "%')";
		}
		count6 = count6 + 1;
	}
	AssistanceServices_query = AssistanceServices_query + ")";
	query_list.add(AssistanceServices_query);
}
if(input.HousingUnits.size() > 0)
{
	HousingUnits_query = "(";
	count7 = 1;
	for each  rec7 in HousingUnits
	{
		if(count7 == 1)
		{
			HousingUnits_query = HousingUnits_query + "(Parent_Id.Housing_units like '%" + rec7 + "%')";
		}
		else
		{
			HousingUnits_query = HousingUnits_query + " or (Parent_Id.Housing_units like '%" + rec7 + "%')";
		}
		count7 = count7 + 1;
	}
	HousingUnits_query = HousingUnits_query + ")";
	query_list.add(HousingUnits_query);
}
if(input.InternalServices.size() > 0)
{
	InternalServices_query = "(";
	count8 = 1;
	for each  rec8 in InternalServices
	{
		if(count8 == 1)
		{
			InternalServices_query = InternalServices_query + "(Parent_Id.Accepts_personal_help like '%" + rec8 + "%')";
		}
		else
		{
			InternalServices_query = InternalServices_query + " or (Parent_Id.Accepts_personal_help like '%" + rec8 + "%')";
		}
		count8 = count8 + 1;
	}
	InternalServices_query = InternalServices_query + ")";
	query_list.add(InternalServices_query);
}
if(input.ServicesNearby.size() > 0)
{
	ServicesNearby_query = "(";
	count9 = 1;
	for each  rec9 in ServicesNearby
	{
		if(count9 == 1)
		{
			ServicesNearby_query = ServicesNearby_query + "(Parent_Id.Service_nearby like '%" + rec9 + "%')";
		}
		else
		{
			ServicesNearby_query = ServicesNearby_query + " or (Parent_Id.Service_nearby like '%" + rec9 + "%')";
		}
		count9 = count9 + 1;
	}
	ServicesNearby_query = ServicesNearby_query + ")";
	query_list.add(ServicesNearby_query);
}
if(input.Activites.size() > 0)
{
	Activites_query = "(";
	count10 = 1;
	for each  rec10 in Activites
	{
		if(count10 == 1)
		{
			Activites_query = Activites_query + "(Parent_Id.Physiotherapist like '%" + rec10 + "%')";
		}
		else
		{
			Activites_query = Activites_query + " or (Parent_Id.Physiotherapist like '%" + rec10 + "%')";
		}
		count10 = count10 + 1;
	}
	Activites_query = Activites_query + ")";
	query_list.add(Activites_query);
}
if(input.Status.size() > 0)
{
	Status_query = "(";
	count20 = 1;
	for each  rec20 in Status
	{
		if(count20 == 1)
		{
			Status_query = Status_query + "(Parent_Id.Status = '" + rec20 + "')";
		}
		else
		{
			Status_query = Status_query + " or (Parent_Id.Status = '" + rec20 + "')";
		}
		count20 = count20 + 1;
	}
	Status_query = Status_query + ")";
	query_list.add(Status_query);
}
if(input.Ville.size() > 0)
{
	city_query = "(";
	count21 = 1;
	for each  rec21 in Ville
	{
		if(count21 == 1)
		{
			city_query = city_query + "(Parent_Id.City = '" + rec21 + "')";
		}
		else
		{
			city_query = city_query + " or (Parent_Id.City = '" + rec21 + "')";
		}
		count21 = count21 + 1;
	}
	city_query = city_query + ")";
	query_list.add(city_query);
}
if(input.Region.size() > 0)
{
	region_query = "(";
	count22 = 1;
	for each  rec22 in Region
	{
		if(count22 == 1)
		{
			region_query = region_query + "(Parent_Id.Region = '" + rec22 + "')";
		}
		else
		{
			region_query = region_query + " or (Parent_Id.Region = '" + rec22 + "')";
		}
		count22 = count22 + 1;
	}
	region_query = region_query + ")";
	query_list.add(region_query);
}
if(input.Province.size() > 0)
{
	province_query = "(";
	count23 = 1;
	for each  rec23 in Province
	{
		if(count23 == 1)
		{
			province_query = province_query + "(Parent_Id.Province = '" + rec23 + "')";
		}
		else
		{
			province_query = province_query + " or (Parent_Id.Province = '" + rec23 + "')";
		}
		count23 = count23 + 1;
	}
	province_query = province_query + ")";
	query_list.add(province_query);
}
if(input.nameofgroup.size() > 0)
{
	nameofgroup_query = "(";
	count25 = 1;
	for each  rec25 in nameofgroup
	{
		if(count25 == 1)
		{
			nameofgroup_query = nameofgroup_query + "(Parent_Id.Nom_du_groupe = '" + rec25 + "')";
		}
		else
		{
			nameofgroup_query = nameofgroup_query + " or (Parent_Id.Nom_du_groupe = '" + rec25 + "')";
		}
		count25 = count25 + 1;
	}
	nameofgroup_query = nameofgroup_query + ")";
	query_list.add(nameofgroup_query);
}
if(input.Apartment_pick.size() > 0)
{
	Apartment_pick_query = "(";
	count24 = 1;
	for each  rec24 in Apartment_pick
	{
		if(count24 == 1)
		{
			Apartment_pick_query = Apartment_pick_query + "(Pick_List_1 = '" + rec24 + "')";
		}
		else
		{
			Apartment_pick_query = Apartment_pick_query + " or (Pick_List_1 = '" + rec24 + "')";
		}
		count24 = count24 + 1;
	}
	Apartment_pick_query = Apartment_pick_query + ")";
	query_list.add(Apartment_pick_query);
}
if(usualname != "" && usualname != null)
{
	Qusualname = "(";
	count30 = 1;
	if(count30 == 1)
	{
		Qusualname = Qusualname + "(Parent_Id.Name like '%" + usualname + "%')";
	}
	count30 = count30 + 1;
	Qusualname = Qusualname + ")";
	query_list.add(Qusualname);
}
if(input.Min_rate.size() > 0)
{
	Min_rate_query = "(";
	count25 = 1;
	for each  rec25 in Min_rate
	{
		if(input.Min_rate != "5000+")
		{
			num_suffix = input.Min_rate.getSuffix("-").toNumber();
			num_prefix = input.Min_rate.getPrefix("-").toNumber();
			Min_rate_query = Min_rate_query + "(Minimum_rate_1 >= " + num_prefix + " and Minimum_rate_1 <=" + num_suffix + ")";
		}
		else if(input.Min_rate == "5000+")
		{
			Min_rate_query = Min_rate_query + "(Minimum_rate_1 >= 5000)";
		}
	}
	Min_rate_query = Min_rate_query + ")";
	query_list.add(Min_rate_query);
}
if(input.Max_rate.size() > 0)
{
	Max_rate_query = "(";
	count26 = 1;
	for each  rec26 in Max_rate
	{
		if(input.Max_rate != "5000+")
		{
			num_suffix1 = input.Max_rate.getSuffix("-").toNumber();
			num_prefix1 = input.Max_rate.getPrefix("-").toNumber();
			Max_rate_query = Max_rate_query + "(Maximum_rate_2 >= " + num_prefix1 + " and Maximum_rate_2 <= " + num_suffix1 + ")";
		}
		else if(input.Max_rate == "5000+")
		{
			Max_rate_query = Max_rate_query + "(Maximum_rate_2 >= 5000)";
		}
	}
	Max_rate_query = Max_rate_query + ")";
	query_list.add(Max_rate_query);
	// 	info Max_rate_query;
}
/* if(input.Min_rate.size() > 0)
{
	Min_rate_query = "(";
	count25 = 1;
	for each  rec25 in Min_rate
	{
		rec25 = rec25.toNumber();
		if(count25 == 1)
		{
			Min_rate_query = Min_rate_query + "(Tarif_minimum_Minimum_rate = '" + rec25 + "')";
		}
		else
		{
			Min_rate_query = Min_rate_query + " or (Tarif_minimum_Minimum_rate = '" + rec25 + "')";
		}
		count25 = count25 + 1;
	}
	Min_rate_query = Min_rate_query + ")";
	query_list.add(Min_rate_query);
}
if(input.Max_rate.size() > 0)
{
	Max_rate_query = "(";
	count26 = 1;
	for each  rec26 in Max_rate
	{
		rec26 = rec26.toNumber();
		if(count26 == 1)
		{
			Max_rate_query = Max_rate_query + "(Tarif_maximum_Maximum_rate = '" + rec26 + "')";
		}
		else
		{
			Max_rate_query = Max_rate_query + " or (Tarif_maximum_Maximum_rate = '" + rec26 + "')";
		}
		count26 = count26 + 1;
	}
	Max_rate_query = Max_rate_query + ")";
	query_list.add(Max_rate_query);
}  */
// if(input.Status != "")
// {
// 	status_query = "";
// 	// 	StatusCount = 1;
// 	status_query = status_query + "(Status = '" + input.Status + "')";
// 	status_query = status_query + "";
// 	query_list.add(status_query);
// }
// if(input.Ville != "")
// {
// 	City_query = "";
// 	// 		CityCount = 1;
// 	City_query = City_query + "(City = '" + input.Ville + "')";
// 	City_query = City_query + "";
// 	query_list.add(City_query);
// }
// if(input.Region != "")
// {
// 	Region_query = "";
// 	Region_query = Region_query + "(Region = '" + input.Region + "')";
// 	Region_query = Region_query + "";
// 	query_list.add(Region_query);
// }
// if(Status != "Select Status")
// {
// 	if(input.Status != null && input.Status != "")
// 	{
// 		status_query = "(Status = " + input.Status + ")";
// 		query_list.add(status_query);
// 	}
// }
if(query_list.size() > 0)
{
	query = "Select Parent_Id.Residence_number ,Parent_Id.Name  ,Parent_Id.Nom_du_groupe ,Parent_Id.Type_of_residence ,Parent_Id.Status ,Parent_Id.Region ,Parent_Id.City ,Parent_Id.id  FROM  Subform_21  WHERE ";
	//queryMap1.put("select_query","select Pick_List_1,Parent_Id.id from Subform_21 where Pick_List_1 = '" + Apartment_pick + "'");
	end_srting = "";
	count11 = 1;
	for each  rec11 in query_list
	{
		if(count11 == 1)
		{
			query = query + rec11;
		}
		else if(count11 == query_list.size())
		{
			query = query + " and " + rec11;
		}
		else
		{
			query = query + " and (" + rec11;
			end_srting = end_srting + ")";
		}
		count11 = count11 + 1;
	}
	// 	
	if(PageNo == 1)
	{
		query = query + end_srting + "";
		QueryCount = query;
	}
	else
	{
		limitValue = (PageNo - 1) * 200;
		searchFilter = "LIMIT " + limitValue + ", 200";
		query = query + end_srting + searchFilter + "";
		QueryCount = query + end_srting;
	}
}
queryMap.put("select_query",query);
//info query;
//info query ;
// data = "Select Residence_number,Name,Nom_du_groupe,Type_of_residence,Status,Region,City FROM Residence WHERE (Type_of_residence like '%Appartements avec services%') and (((Language_s_spoken_by_the_personnel like '%Français/French%')) and (Status = '[\"Active\"]') and (Region = '[\"Capitale-Nationale\"]'))";
// queryMap.put("select_query",data);
// sendmail
// [
// 	from :zoho.adminuserid
// 	to :"arun@cloudlion.org"
// 	subject :"queryMap222"
// 	message :queryMap
// ]
// **********************************
info queryMap;
response = invokeurl
[
	url :"https://www.zohoapis.com/crm/v3/coql"
	type :POST
	parameters:queryMap.toString()
	connection:"crm_connect"
];
info response;
//
//
totalRecordCount = if(totalRecordCount != null,totalRecordCount,0);
hasMoreRecords = true;
totalLoopCount = 0;
if(PageNo == 1 && response.isEmpty() == False && response != null)
{
	getCountList = {2,3,4,5,6};
	if(response.isEmpty() == False && response != null && response.get("info").get("more_records") == true)
	{
		hasMoreRecords = true;
		for each  recCount in getCountList
		{
			//info "recCount " + recCount;
			if(hasMoreRecords == true)
			{
				limitValueCount = (recCount - 1) * 200;
				searchFilterCount = "LIMIT " + limitValueCount + ", 200";
				QueryCountTemp = QueryCount + searchFilterCount + "";
				queryMapCount = Map();
				queryMapCount.put("select_query",QueryCountTemp);
				Countresponse = invokeurl
				[
					url :"https://www.zohoapis.com/crm/v3/coql"
					type :POST
					parameters:queryMapCount.toString()
					connection:"crm_connect"
				];
				//info "Countresponse " + Countresponse;
				info " ----------------";
				if(Countresponse.get("info").get("more_records") == true)
				{
					hasMoreRecords = true;
					if(recCount == 6)
					{
						hasMoreRecords = false;
						totalLoopCount = 7;
						totalRecordCount = "More than 1200";
					}
				}
				else
				{
					totalRecordCount = (recCount - 1) * 200 + Countresponse.get("info").get("count");
					totalCount = totalRecordCount;
					info totalCount;
					hasMoreRecords = false;
				}
				totalLoopCount = recCount;
			}
		}
	}
	else
	{
		totalRecordCount = response.get("info").get("count");
		totalLoopCount = 1;
		hasMoreRecords = false;
	}
}
returnMap = Map();
returnMap.put("residenseList",response);
// returnMap.put("has_More_Records",response.get("info").get("more_records"));
returnMap.put("totalRecordCount",totalRecordCount);
returnMap.put("totalLoopCount",totalLoopCount);
// info "response : " + response;
// respcount = response.get("data").toJSONList().size();
// return respcount;
return returnMap;
// catch (e)
// {
// 	// 	info e ;
// 	// 	sendmail
// 	// 	[
// 	// 		from :zoho.adminuserid
// 	// 		to :"arun@cloudlion.org"
// 	// 		subject :"error msg"
// 	// 		message :e
// 	// 	]
// }
