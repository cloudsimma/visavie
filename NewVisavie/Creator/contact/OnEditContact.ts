try 
{
	getContact = Contacts[ID == input.ID];
	if(getContact.count() > 0 && getContact.ZohoCRM_ID != null)
	{
		/*Residence -starts*/
		getResidence = Residence_Contact[Contact_CRM_ID == getContact.ZohoCRM_ID];
		if(getResidence.count() > 0 && getResidence.Residence_CRM_ID != null)
		{
			getResidenceCRM = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v2.1/Residence/" + getResidence.Residence_CRM_ID
				type :GET
				connection:"zoho_one"
			];
			for each  resInfo in getResidenceCRM.get("data")
			{
				subform_list = List();
				for each  Rcontact_row in resInfo.get("Contac")
				{
					subformmap = Map();
					subformmap.put("id",Rcontact_row.get("id"));
					if(Rcontact_row.get("Contact") != null)
					{
						if(Rcontact_row.get("Contact").get("id") == getContact.ZohoCRM_ID)
						{
							subformmap.put("Email",getContact.Email);
							subformmap.put("Cell_phone",getContact.Cell_Phone);
							subformmap.put("Work_Phone",getContact.Work_Phone);
							subformmap.put("Work_Phone_Extension",getContact.Work_phone_Extension);
						}
					}
					subform_list.add(subformmap);
				}
				updatemap = Map();
				updatemap.put("Contac",subform_list);
				updateRes = zoho.crm.updateRecord("Residence",resInfo.get("id").tolong(),updatemap,Map(),"zoho_one");
			}
			// 			input.From_CRM = false;
		}
		/*Deal -starts*/
		getDeal = Deal_Contacts[CRM_ID == getContact.ZohoCRM_ID];
		if(getDeal.count() > 0 && getDeal.Deal_ID != null)
		{
			getDealCRM = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v2.1/Deals/" + getDeal.Deal_ID
				type :GET
				connection:"zoho_one"
			];
			for each  dealInfo in getDealCRM.get("data")
			{
				subform_list = List();
				for each  Dcontact_row in dealInfo.get("Contact_persons")
				{
					subformmap = Map();
					subformmap.put("id",Dcontact_row.get("id"));
					if(Dcontact_row.get("contact") != null)
					{
						if(Dcontact_row.get("contact").get("id") == getContact.ZohoCRM_ID)
						{
							subformmap.put("Email",getContact.Email);
							subformmap.put("Work_Phone",getContact.Work_Phone);
							subformmap.put("Work_Phone_Extension",getContact.Work_phone_Extension);
							subformmap.put("Cell_Phone",getContact.Cell_Phone);
							subformmap.put("Home_Phone",getContact.Home_Phone);
						}
					}
					subform_list.add(subformmap);
				}
				updatemap = Map();
				updatemap.put("Contact_persons",subform_list);
				updateDeal = zoho.crm.updateRecord("Deals",dealInfo.get("id").tolong(),updatemap,Map(),"zoho_one");
			}
		}
		/*homecare -starts*/
		getHomeDeal = Homecare_Deal_Contacts[CRM_ID == getContact.ZohoCRM_ID];
		if(getHomeDeal.count() > 0 && getHomeDeal.Deal_ID != null)
		{
			getHomeDealCRM = invokeurl
			[
				url :"https://www.zohoapis.com/crm/v2.1/Home_Care_Deal/" + getHomeDeal.Deal_ID
				type :GET
				connection:"zoho_one"
			];
			for each  homedealInfo in getHomeDealCRM.get("data")
			{
				subform_list = List();
				for each  contact_row in homedealInfo.get("Contact_subform")
				{
					subformmap = Map();
					subformmap.put("id",contact_row.get("id"));
					if(contact_row.get("contact") != null)
					{
						if(contact_row.get("contact").get("id") == getContact.ZohoCRM_ID)
						{
							subformmap.put("Email",getContact.Email);
							subformmap.put("Work_Phone",getContact.Work_Phone);
							subformmap.put("Work_Phone_Extension",getContact.Work_phone_Extension);
							subformmap.put("Cell_Phone",getContact.Cell_Phone);
							subformmap.put("Home_Phone",getContact.Home_Phone);
						}
					}
					subform_list.add(subformmap);
				}
				updatemap = Map();
				updatemap.put("Contact_subform",subform_list);
				updateHomeDeal = zoho.crm.updateRecord("Home_Care_Deal",homedealInfo.get("id").tolong(),updatemap,Map(),"zoho_one");
			}
		}
	}
	input.From_CRM = false;
}
catch (e)
{
	thisapp.addDeveloperLog("Creator: Contact","Editing -Update of From CRM field",input.ID.toString(),e);
}
