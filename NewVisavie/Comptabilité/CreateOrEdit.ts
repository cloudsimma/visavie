try 
{
	getCompatible = zoho.crm.getRecordById("Request_invoice",id.toLong());
	// 	info getCompatible;
	if(getCompatible.get("Status") == "À vérifier/To be verified")
	{
		houseDealInfo = getCompatible.get("Housing_Deal");
		if(houseDealInfo != null)
		{
			update_deal_map = Map();
			update_deal_map.put("Stage","Location enregistrée/Registered renting");
			updateDealResp = zoho.crm.updateRecord("Deals",houseDealInfo.get("id").toLong(),update_deal_map);
			//Updating stage in Tracking--starts
			if(updateDealResp.get("id") != null)
			{
				if(getCompatible.get("Deal_ID1") != null && getCompatible.get("Tracking_Id") != null)
				{
					update_deal_map = Map();
					update_deal_map.put("Deal_Status","Closed Won");
					update_deal_map.put("D_marches_Status","Location enregistrée/Registered renting");
					update_deal_map.put("Deal_status_update_date",zoho.currentdate.toString("yyyy-MM-dd"));
					updateTrack = zoho.crm.updateRecord("Tracking",getCompatible.get("Tracking_Id").toLong(),update_deal_map);
				}
				else if(getCompatible.get("DealID2") != null && getCompatible.get("Tracking_Id") != null)
				{
					update_deal_map = Map();
					update_deal_map.put("Deal_Status_1","Closed Won");
					update_deal_map.put("D_marches_Status_1","Location enregistrée/Registered renting");
					update_deal_map.put("Deal_status_update_date_1",zoho.currentdate.toString("yyyy-MM-dd"));
					updateTrack = zoho.crm.updateRecord("Tracking",getCompatible.get("Tracking_Id").toLong(),update_deal_map);
				}
			}
			//Updating stage in Tracking--ends
		}
	}
	residence = getCompatible.get("Residence");
	residenceBillingProvince = "";
	// 	comptabilityGroup = "";
	if(residence != null && residence != "")
	{
		getResidence = zoho.crm.getRecordById("Residence",getCompatible.get("Residence").get("id"));
		if(getResidence.get("id") != null)
		{
			residenceBillingProvince = getResidence.get("Provinces");
			// 			comptabilityGroup = getResidence.get("Nom_du_groupe");
			// 			if(comptabilityGroup != null)
			// 			{
			// 				comp_map = Map();
			// 				comp_map.put("Name_of_the_group",comptabilityGroup);
			// 				updaterec = zoho.crm.updateRecord("Request_invoice",id.toLong(),comp_map);
			// 			}
		}
	}
	if(getCompatible.get("Province") == null)
	{
		accountableMap = Map();
		accountableMap.put("Province",residenceBillingProvince);
		updateAccountable = zoho.crm.updateRecord("Request_invoice",id.toLong(),accountableMap);
		info updateAccountable;
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Comptabilité");
	dataMap.put("Process_Description","CRM - Create - Update - Comptabilité");
	dataMap.put("In_Data",id);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
