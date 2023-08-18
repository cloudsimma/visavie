try 
{
	datamap = Map();
	returm_map = Map();
	if(Fname != "")
	{
		Full_Name = Fname;
		if(Lname != "")
		{
			Full_Name = Full_Name + " " + Lname;
			datamap.put("Lead_Last_Name",Lname);
			datamap.put("Lead_First_Name",Fname);
			datamap.put("Name",Full_Name);
			if(Ph1 != "")
			{
				regex = "^(?:\+?\d{1,3}[\s-])?(?:\(\d{1,4}\)|\d{1,4})[\s-]?\d{3,4}[\s-]?\d{3,4}(?:[\s-]?[e]?x?t?\d{1,5})?$";
				phone_validate = Ph1.matches(regex);
				if(phone_validate == true)
				{
					datamap.put("Phone",Ph1);
					if(Ph2 != "")
					{
						regex = "^(?:\+?\d{1,3}[\s-])?(?:\(\d{1,4}\)|\d{1,4})[\s-]?\d{3,4}[\s-]?\d{3,4}(?:[\s-]?[e]?x?t?\d{1,5})?$";
						phone_validate = Ph2.matches(regex);
						if(phone_validate == true)
						{
							datamap.put("Mobile",Ph2);
						}
						else
						{
							returm_map = Map();
							returm_map.put("status","error");
							returm_map.put("Field","Mobile");
							returm_map.put("content","Mobile is not Valid");
						}
					}
				}
				else
				{
					returm_map = Map();
					returm_map.put("status","error");
					returm_map.put("Field","Phone");
					returm_map.put("content","Phone is not Valid");
				}
			}
			if(!returm_map.contains("error"))
			{
				if(Mail != "")
				{
					emailregex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
					emailvalidate = Mail.matches(emailregex);
					if(emailvalidate == true)
					{
						datamap.put("Email",Mail);
					}
					else
					{
						returm_map = Map();
						returm_map.put("status","error");
						returm_map.put("Field","Mail");
						returm_map.put("content","Email is not Valid");
					}
				}
			}
			if(!returm_map.contains("error"))
			{
				datamap.put("Status","Non-qualifiable/Disqualified");
				datamap.put("Comments",Comments);
				datamap.put("Creation_Date",zoho.currentdate);
				datamap.put("Source","Widget");
				res = zoho.crm.createRecord("New_Leads",datamap,{"trigger":{"workflow"}});
				if(res.contains("id"))
				{
					returm_map = Map();
					returm_map.put("status","Sucess");
					returm_map.put("content",res.get("id"));
					returm_map.put("data",datamap);
				}
				else
				{
					returm_map = Map();
					returm_map.put("status","error");
					returm_map.put("content","Contact Application Owner Something went wrong...!");
					returm_map.put("log",res);
					returm_map.put("data",datamap);
					//developer log here with response
					appName = "visavie";
					ownerName = "lion_visavie";
					formName = "Developer_Log";
					dataMap = Map();
					dataMap.put("Module","New Lead");
					dataMap.put("Process_Description","CRM:Quick Lead Creation from Widget");
					dataMap.put("In_Data",datamap);
					dataMap.put("Out_Response",res);
					ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
				}
			}
		}
		// 		else
		// 		{
		// 			returm_map = Map();
		// 			returm_map.put("status","error");
		// 			returm_map.put("Field","Lname");
		// 			returm_map.put("content","Enter Last name");
		// 		}
	}
	// 	else
	// 	{
	// 		returm_map = Map();
	// 		returm_map.put("status","error");
	// 		returm_map.put("Field","Fname");
	// 		returm_map.put("content","Enter First name");
	// 	}
}
catch (e)
{
	returm_map = Map();
	returm_map.put("status","error");
	returm_map.put("content","Contact Application Owner Something went wrong...!");
	returm_map.put("log",e);
	// add developer log here with response
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","New Lead");
	dataMap.put("Process_Description","CRM:Quick Lead Creation from Widget");
	dataMap.put("In_Data",datamap);
	dataMap.put("Out_Response",e);
	res = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
return returm_map;
