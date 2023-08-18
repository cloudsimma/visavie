try 
{
	if(dealTypeID == "Deal1" && trackID != null)
	{
		trackInfo = zoho.crm.getRecordById("Tracking",trackID);
		if(trackInfo.get("id") != null)
		{
			datamap = Map();
			datamap.put("Deal_Status","");
			datamap.put("Deal_ID","");
			datamap.put("D_marches_Status","");
			datamap.put("D_marche_Soins_Status","");
			datamap.put("Lead_CRM_ID","");
			datamap.put("client_1","");
			datamap.put("Primary_Contacts","");
			datamap.put("Deal_status_update_date","");
			datamap.put("Deal_Creation_Date","");
			datamap.put("Deal_Type","");
			datamap.put("Deal_Update_Date","");
			datamap.put("client_2","");
			datamap.put("secondary_contact","");
			datamap.put("Health_care_contact","");
			datamap.put("Personal_Reference_Deal_1","");
			datamap.put("Provinces","");
			datamap.put("Client_2_Provinces","");
			updatetrack = zoho.crm.updateRecord("Tracking",trackInfo.get("id").toNumber(),datamap);
		}
	}
	else if(dealTypeID == "Deal2" && trackID != null)
	{
		trackInfo = zoho.crm.getRecordById("Tracking",trackID);
		if(trackInfo.get("id") != null)
		{
			datamap = Map();
			datamap.put("Deal_Status_1","");
			datamap.put("Deal_ID_1","");
			datamap.put("D_marches_Status_1","");
			datamap.put("D_marche_Soins_Status_1","");
			datamap.put("Lead_CRM_ID_1","");
			datamap.put("Client","");
			datamap.put("Primary_contact_1","");
			datamap.put("Deal_Creation_Date_1","");
			datamap.put("Deal_Type_1","");
			datamap.put("Deal_Update_Date_1","");
			datamap.put("Secondary_contact_1","");
			datamap.put("Health_care_contact_1","");
			datamap.put("Personal_Reference_Deal_2","");
			datamap.put("Deal_status_update_date_1","");
			datamap.put("Provinces_1","");
			datamap.put("Primary_Province_1","");
			updatetrack = zoho.crm.updateRecord("Tracking",trackInfo.get("id").toNumber(),datamap);
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Deal");
	dataMap.put("Process_Description","House Deal:Delete Record in Tracking when LeadID is present");
	dataMap.put("In_Data",dealID);
	dataMap.put("Out_Response",e);
	deleteResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
