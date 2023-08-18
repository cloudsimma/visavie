try 
{
	queryMap = Map();
	query_list = List();
	if(input.TypeRes.size() > 0)
	{
		TypeResCriteria = "";
		for each  ele in TypeRes
		{
			info ele;
			TypeResCriteria = "(" + TypeResCriteria + "Parent_Id.Type_of_residence like '%" + ele + "%')" + " or ";
		}
		TypeResCriteria = TypeResCriteria.removeLastOccurence("or").trim();
		query_list.add(TypeResCriteria);
	}
	if(input.Lang.size() > 0)
	{
		LangResCriteria = "";
		for each  ele1 in Lang
		{
			info ele1;
			LangResCriteria = "(" + LangResCriteria + "Parent_Id.Language_s_spoken_by_the_personnel like '%" + ele1 + "%')" + " or ";
		}
		LangResCriteria = LangResCriteria.removeLastOccurence("or").trim();
		query_list.add(LangResCriteria);
	}
	// info query_list ; error
	if(input.clientType.size() > 0)
	{
		clientTypeCriteria = "";
		for each  ele2 in clientType
		{
			info ele2;
			clientTypeCriteria = "(" + clientTypeCriteria + "Parent_Id.Client_Type like '%" + ele2 + "%')" + " or ";
		}
		clientTypeCriteria = clientTypeCriteria.removeLastOccurence("or").trim();
		query_list.add(clientTypeCriteria);
	}
	// info query_list ; error
	if(input.building.size() > 0)
	{
		buildingCriteria = "";
		for each  ele3 in building
		{
			info ele3;
			buildingCriteria = "(" + buildingCriteria + "Parent_Id.Building like '%" + ele3 + "%')" + " or ";
		}
		buildingCriteria = buildingCriteria.removeLastOccurence("or").trim();
		query_list.add(buildingCriteria);
	}
	// info query_list ;  
	if(input.Commonareas.size() > 0)
	{
		CommonareasCriteria = "";
		for each  ele4 in Commonareas
		{
			info ele4;
			CommonareasCriteria = "(" + CommonareasCriteria + "Parent_Id.Common_areas like '%" + ele4 + "%')" + " or ";
		}
		CommonareasCriteria = CommonareasCriteria.removeLastOccurence("or").trim();
		query_list.add(CommonareasCriteria);
	}
	if(input.ResidenceServices.size() > 0)
	{
		ResidenceServicesCriteria = "";
		for each  ele5 in ResidenceServices
		{
			info ele5;
			ResidenceServicesCriteria = "(" + ResidenceServicesCriteria + "Parent_Id.Services_de_la_r_sidence_Residence_services like '%" + ele5 + "%')" + " or ";
		}
		ResidenceServicesCriteria = ResidenceServicesCriteria.removeLastOccurence("or").trim();
		query_list.add(ResidenceServicesCriteria);
	}
	if(input.AssistanceServices.size() > 0)
	{
		AssistanceServicesCriteria = "";
		for each  ele6 in AssistanceServices
		{
			info ele6;
			AssistanceServicesCriteria = "(" + AssistanceServicesCriteria + "Parent_Id.Nurse like '%" + ele6 + "%')" + " or ";
		}
		AssistanceServicesCriteria = AssistanceServicesCriteria.removeLastOccurence("or").trim();
		query_list.add(AssistanceServicesCriteria);
	}
	if(input.HousingUnits.size() > 0)
	{
		HousingUnitsCriteria = "";
		for each  ele7 in HousingUnits
		{
			info ele7;
			HousingUnitsCriteria = "(" + HousingUnitsCriteria + "Parent_Id.Housing_units like '%" + ele7 + "%')" + " or ";
		}
		HousingUnitsCriteria = HousingUnitsCriteria.removeLastOccurence("or").trim();
		query_list.add(HousingUnitsCriteria);
	}
	if(input.InternalServices.size() > 0)
	{
		InternalServicesCriteria = "";
		for each  ele8 in InternalServices
		{
			info ele8;
			InternalServicesCriteria = "(" + InternalServicesCriteria + "Parent_Id.Accepts_personal_help like '%" + ele8 + "%')" + " or ";
		}
		InternalServicesCriteria = InternalServicesCriteria.removeLastOccurence("or").trim();
		query_list.add(InternalServicesCriteria);
	}
	if(input.ServicesNearby.size() > 0)
	{
		ServicesNearbyCriteria = "";
		for each  ele9 in ServicesNearby
		{
			info ele9;
			ServicesNearbyCriteria = "(" + ServicesNearbyCriteria + "Parent_Id.Service_nearby like '%" + ele9 + "%')" + " or ";
		}
		ServicesNearbyCriteria = ServicesNearbyCriteria.removeLastOccurence("or").trim();
		query_list.add(ServicesNearbyCriteria);
	}
	if(input.Activites.size() > 0)
	{
		ActivitesCriteria = "";
		for each  ele10 in Activites
		{
			info ele10;
			ActivitesCriteria = "(" + ActivitesCriteria + "Parent_Id.Physiotherapist like '%" + ele10 + "%')" + " or ";
		}
		ActivitesCriteria = ActivitesCriteria.removeLastOccurence("or").trim();
		query_list.add(ActivitesCriteria);
	}
	if(input.Status.size() > 0)
	{
		StatusCriteria = "";
		for each  ele11 in Status
		{
			info ele11;
			StatusCriteria = "(" + StatusCriteria + "Parent_Id.Status = '" + ele11 + "')" + " or ";
		}
		StatusCriteria = StatusCriteria.removeLastOccurence("or").trim();
		query_list.add(StatusCriteria);
	}
	if(input.Ville.size() > 0)
	{
		VilleCriteria = "";
		for each  ele12 in Ville
		{
			info ele12;
			VilleCriteria = "(" + VilleCriteria + "Parent_Id.City = '" + ele12 + "')" + " or ";
		}
		VilleCriteria = VilleCriteria.removeLastOccurence("or").trim();
		query_list.add(VilleCriteria);
	}
	if(input.Region.size() > 0)
	{
		RegionCriteria = "";
		for each  ele13 in Region
		{
			info ele13;
			RegionCriteria = "(" + RegionCriteria + "Parent_Id.Region = '" + ele13 + "')" + " or ";
		}
		RegionCriteria = RegionCriteria.removeLastOccurence("or").trim();
		query_list.add(RegionCriteria);
	}
	if(input.Province.size() > 0)
	{
		ProvinceCriteria = "";
		for each  ele14 in Province
		{
			info ele14;
			ProvinceCriteria = "(" + ProvinceCriteria + "Parent_Id.Province = '" + ele14 + "')" + " or ";
		}
		ProvinceCriteria = ProvinceCriteria.removeLastOccurence("or").trim();
		query_list.add(ProvinceCriteria);
	}
	if(input.nameofgroup.size() > 0)
	{
		nameofgroupCriteria = "";
		for each  ele15 in nameofgroup
		{
			info ele15;
			nameofgroupCriteria = "(" + nameofgroupCriteria + "Parent_Id.Nom_du_groupe = '" + ele15 + "')" + " or ";
		}
		nameofgroupCriteria = nameofgroupCriteria.removeLastOccurence("or").trim();
		query_list.add(nameofgroupCriteria);
	}
	if(usualname != "" && usualname != null)
	{
		usualnameCriteria = "";
		for each  ele16 in usualname
		{
			info ele16;
			usualnameCriteria = "(" + usualnameCriteria + "Parent_Id.Name like '%" + ele16 + "%')" + " or ";
		}
		usualnameCriteria = usualnameCriteria.removeLastOccurence("or").trim();
		query_list.add(usualnameCriteria);
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
	if(query_list.size() > 0)
	{
		query = "Select Parent_Id.Residence_number ,Parent_Id.Name  ,Parent_Id.Nom_du_groupe ,Parent_Id.Type_of_residence ,Parent_Id.Status ,Parent_Id.Region ,Parent_Id.City ,Parent_Id.id  FROM  Subform_21  WHERE ";
		//query = "";
		end_srting = "";
		open_bracket_final = "";
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
	info queryMap;
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
	dataMap.put("Process_Description","Search Residence Subform");
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
return returnMap;
