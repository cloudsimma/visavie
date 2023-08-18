try 
{
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
				residence = residence + "(Type_of_residence like '%" + rec + "%')";
			}
			else
			{
				residence = residence + " or (Type_of_residence like '%" + rec + "%'))";
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
				language = language + "(Language_s_spoken_by_the_personnel like '%" + rec1 + "%')";
			}
			else
			{
				language = language + " or (Language_s_spoken_by_the_personnel like '%" + rec1 + "%')";
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
				clientType_query = clientType_query + "(Client_Type like '%" + rec2 + "%')";
			}
			else
			{
				clientType_query = clientType_query + " or (Client_Type like '%" + rec2 + "%')";
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
				building_query = building_query + "(Building like '%" + rec3 + "%')";
			}
			else
			{
				building_query = building_query + " or (Building like '%" + rec3 + "%')";
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
				Commonareas_query = Commonareas_query + "(Common_areas like '%" + rec4 + "%')";
			}
			else
			{
				Commonareas_query = Commonareas_query + " or (Common_areas like '%" + rec4 + "%')";
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
				ResidenceServices_query = ResidenceServices_query + "(Services_de_la_r_sidence_Residence_services like '%" + rec5 + "%')";
			}
			else
			{
				ResidenceServices_query = ResidenceServices_query + " or (Services_de_la_r_sidence_Residence_services like '" + rec5 + "')";
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
				AssistanceServices_query = AssistanceServices_query + "(Nurse like '%" + rec6 + "%')";
			}
			else
			{
				AssistanceServices_query = AssistanceServices_query + " or (Nurse like '%" + rec6 + "%')";
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
				HousingUnits_query = HousingUnits_query + "(Housing_units like '%" + rec7 + "%')";
			}
			else
			{
				HousingUnits_query = HousingUnits_query + " or (Housing_units like '%" + rec7 + "%')";
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
				InternalServices_query = InternalServices_query + "(Accepts_personal_help like '%" + rec8 + "%')";
			}
			else
			{
				InternalServices_query = InternalServices_query + " or (Accepts_personal_help like '%" + rec8 + "%')";
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
				ServicesNearby_query = ServicesNearby_query + "(Service_nearby like '%" + rec9 + "%')";
			}
			else
			{
				ServicesNearby_query = ServicesNearby_query + " or (Service_nearby like '%" + rec9 + "%')";
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
				Activites_query = Activites_query + "(Physiotherapist like '%" + rec10 + "%')";
			}
			else
			{
				Activites_query = Activites_query + " or (Physiotherapist like '%" + rec10 + "%')";
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
				Status_query = Status_query + "(Status = '" + rec20 + "')";
			}
			else
			{
				Status_query = Status_query + " or (Status = '" + rec20 + "')";
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
				city_query = city_query + "(City = '" + rec21 + "')";
			}
			else
			{
				city_query = city_query + " or (City = '" + rec21 + "')";
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
				region_query = region_query + "(Region = '" + rec22 + "')";
			}
			else
			{
				region_query = region_query + " or (Region = '" + rec22 + "')";
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
				province_query = province_query + "(Province = '" + rec23 + "')";
			}
			else
			{
				province_query = province_query + " or (Province = '" + rec23 + "')";
			}
			count23 = count23 + 1;
		}
		province_query = province_query + ")";
		query_list.add(province_query);
	}
	if(input.nameofgroup.size() > 0)
	{
		nameofgroup_query = "(";
		count24 = 1;
		for each  rec24 in nameofgroup
		{
			if(count24 == 1)
			{
				nameofgroup_query = nameofgroup_query + "(Nom_du_groupe = '" + rec24 + "')";
			}
			else
			{
				nameofgroup_query = nameofgroup_query + " or (Nom_du_groupe = '" + rec24 + "')";
			}
			count24 = count24 + 1;
		}
		nameofgroup_query = nameofgroup_query + ")";
		query_list.add(nameofgroup_query);
	}
	if(usualname != "" && usualname != null)
	{
		Qusualname = "(";
		count30 = 1;
		if(count30 == 1)
		{
			Qusualname = Qusualname + "(Name like '%" + usualname + "%')";
		}
		count30 = count30 + 1;
		Qusualname = Qusualname + ")";
		query_list.add(Qusualname);
	}
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
		query = "Select Residence_number,Name,Nom_du_groupe,Type_of_residence,Status,Region,City FROM Residence WHERE ";
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
	info query;
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
	response = invokeurl
	[
		url :"https://www.zohoapis.com/crm/v3/coql"
		type :POST
		parameters:queryMap.toString()
		connection:"crm_connect"
	];
	// 	info response;
	if(response.containsKey("data") == True)
	{
		totalRecordCount = if(totalRecordCount != null,totalRecordCount,0);
		hasMoreRecords = true;
		totalLoopCount = 0;
		if(PageNo == 1)
		{
			getCountList = {2,3,4,5,6};
			if(response.get("info").get("more_records") == true)
			{
				hasMoreRecords = true;
				for each  recCount in getCountList
				{
					info "recCount " + recCount;
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
						info "Countresponse " + Countresponse;
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
	}
	else
	{
		returnMap = "There is no Record";
	}
	// info "response : " + response;
	// respcount = response.get("data").toJSONList().size();
	// return respcount;
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Residence");
	dataMap.put("Process_Description","Search Residence Widget");
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
return returnMap;
