try 
{
	if(DemarchesoinsID != null && trackID != null)
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
			datamap.put("Home_care_Deal_Creation_Date","");
			datamap.put("Deal_Type","");
			datamap.put("Deal_Update_Date","");
			datamap.put("client_2","");
			datamap.put("secondary_contact","");
			datamap.put("Health_care_contact","");
			datamap.put("Personal_Reference_Deal_1","");
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
	dataMap.put("Module","Home_Care_Deal");
	dataMap.put("Process_Description","Homecare Deal:Delete Record in Tracking when LeadID is present");
	dataMap.put("In_Data",DemarchesoinsID);
	dataMap.put("Out_Response",e);
	deleteResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
