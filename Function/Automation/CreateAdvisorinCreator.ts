try 
{
	get_Advisor = zoho.crm.getRecordById("Advisor",advisorId);
	advisor_map = Map();
	if(get_Advisor.get("Advisor_Number") == null)
	{
		advisor_map.put("Advisor_Number",get_Advisor.get("Advisor_Auto_number").toString());
		updateAdvisor = zoho.crm.updateRecord("Advisor",advisorId.toNumber(),advisor_map);
		info updateAdvisor;
	}
	Advisor_info = zoho.crm.getRecordById("Advisor",advisorId);
	if(Advisor_info.get("id") != null)
	{
		Advisor_ID = Advisor_info.get("id");
		data_map = Map();
		Owner_name = "lion_visavie";
		report_name = "All_Advisors";
		app_name = "visavie";
		getData = zoho.creator.getRecords(Owner_name,app_name,report_name,"CRM_AdvisorID == \"" + Advisor_ID + "\"",1,200,"zoho_mail");
		if(getData.get("code") == 3000)
		{
			data_map.put("Advisor_Name",Advisor_info.get("Name"));
			data_map.put("Ancien_CRM_ID",Advisor_info.get("Ancien_CRM_ID"));
			data_map.put("CRM_AdvisorID",Advisor_info.get("id"));
			data_map.put("English_Web_Profile",Advisor_info.get("English_Web_Profile"));
			data_map.put("Description",Advisor_info.get("Description"));
			data_map.put("French_Web_Profile",Advisor_info.get("French_Web_Profile"));
			data_map.put("Mentor",Advisor_info.get("Mentor"));
			data_map.put("Sex",Advisor_info.get("Sex"));
			data_map.put("Language",Advisor_info.get("Languages"));
			if(Advisor_info.get("Birth_date") != null)
			{
				data_map.put("Birth_date",Advisor_info.get("Birth_date").toString("dd-MMM-yyyy"));
			}
			else
			{
				data_map.put("Birth_date","");
			}
			data_map.put("Company_name_If_applicable",Advisor_info.get("Company_name_If_applicable"));
			data_map.put("TPS_Number",Advisor_info.get("TPS_Number"));
			data_map.put("TVQ_Number",Advisor_info.get("TVQ_Number"));
			data_map.put("Line_1",Advisor_info.get("Line_1"));
			data_map.put("Line_2",Advisor_info.get("Line_2"));
			data_map.put("Postal_code",Advisor_info.get("Postal_code"));
			data_map.put("Province",Advisor_info.get("Province"));
			data_map.put("City",Advisor_info.get("City"));
			data_map.put("Home_phone_num",Advisor_info.get("Home_phone_number"));
			data_map.put("Mobile_phone_num",Advisor_info.get("Work_phone_number"));
			data_map.put("Work_phone_num",Advisor_info.get("Mobile_phone_number"));
			data_map.put("Email_1",Advisor_info.get("Personal_email"));
			data_map.put("Email",Advisor_info.get("Advisor_Email"));
			creatorAdvisorId = getData.get("data").get(0).get("ID");
			updateAdvisor = zoho.creator.updateRecord(Owner_name,app_name,report_name,creatorAdvisorId,data_map,Map(),"zoho_mail");
			info "update Advisor in Creator" + updateAdvisor;
		}
		else
		{
			data_map = Map();
			ownerName = "lion_visavie";
			formName = "Advisor";
			appName = "visavie";
			baseUrl = "creatorapp.zoho.com";
			data_map.put("Advisor_Name",Advisor_info.get("Name"));
			data_map.put("Advisor_Number",Advisor_info.get("Advisor_Number"));
			data_map.put("CRM_AdvisorID",Advisor_info.get("id"));
			data_map.put("Ancien_CRM_ID",Advisor_info.get("Ancien_CRM_ID"));
			data_map.put("English_Web_Profile",Advisor_info.get("English_Web_Profile"));
			data_map.put("Description",Advisor_info.get("Description"));
			data_map.put("French_Web_Profile",Advisor_info.get("French_Web_Profile"));
			data_map.put("Mentor",Advisor_info.get("Mentor"));
			data_map.put("Sex",Advisor_info.get("Sex"));
			data_map.put("Language",Advisor_info.get("Languages"));
			if(Advisor_info.get("Birth_date") != null)
			{
				data_map.put("Birth_date",Advisor_info.get("Birth_date").toString("dd-MMM-yyyy"));
			}
			else
			{
				data_map.put("Birth_date","");
			}
			data_map.put("Company_name_If_applicable",Advisor_info.get("Company_name_If_applicable"));
			data_map.put("TPS_Number",Advisor_info.get("TPS_Number"));
			data_map.put("TVQ_Number",Advisor_info.get("TVQ_Number"));
			data_map.put("Line_1",Advisor_info.get("Line_1"));
			data_map.put("Line_2",Advisor_info.get("Line_2"));
			data_map.put("Postal_code",Advisor_info.get("Postal_code"));
			data_map.put("Province",Advisor_info.get("Province"));
			data_map.put("City",Advisor_info.get("City"));
			data_map.put("Home_phone_num",Advisor_info.get("Home_phone_number"));
			data_map.put("Mobile_phone_num",Advisor_info.get("Work_phone_number"));
			data_map.put("Work_phone_num",Advisor_info.get("Mobile_phone_number"));
			data_map.put("Email_1",Advisor_info.get("Personal_email"));
			data_map.put("Email",Advisor_info.get("Advisor_Email"));
			creatoradvisorResponse = zoho.creator.createRecord(ownerName,appName,formName,data_map,Map(),"zoho_mail");
			info "Create Advisor in Creator" + creatoradvisorResponse;
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
	dataMap.put("Process_Description","In CRM:Create and Update records in Creator");
	dataMap.put("In_Data",advisorId);
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}