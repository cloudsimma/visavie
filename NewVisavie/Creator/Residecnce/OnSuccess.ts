try 
{
	/*updating residence number-starts*/
	getcreatorRes = Residences[Residence_number == ""];
	if(getcreatorRes.ID != null)
	{
		getCRMResidence = zoho.crm.getRecordById("Residence",input.CRM_ID.toLong(),Map(),"zoho_one");
		if(getCRMResidence.get("id") != null)
		{
			getcreatorRes.Residence_number=getCRMResidence.get("Residence_number");
		}
	}
	/*updating residence number-ends*/
	getCRMResidenceInfo = zoho.crm.getRecordById("Residence",input.CRM_ID.toLong(),Map(),"zoho_one");
	/*contact subfom starts*/
	getCRMContact = getCRMResidenceInfo.get("Contac");
	if(getCRMContact != null)
	{
		for each  new_contact in getCRMContact
		{
			rows = Collection();
			contactIten = Residence_Contact[Contact_Line_Item_ID == new_contact.get("id")];
			/*contact lookup-starts*/
			if(new_contact.get("Contact") != null)
			{
				getcontactInfo = Contacts[ZohoCRM_ID == new_contact.get("Contact").get("id")];
				if(getcontactInfo.count() > 0)
				{
					contactInfo = getcontactInfo.ID;
				}
				else
				{
					contactInfo = null;
				}
			}
			else
			{
				contactInfo = null;
			}
			/*contact lookup-ends*/
			/*creating record in residence contact-starts*/
			if(!contactIten.count() > 0)
			{
				row1 = Residences.Residence_Contact();
				row1.Contacts=contactInfo;
				row1.Type_of_contact=new_contact.get("Type_of_contact");
				row1.Residence_CRM_ID=getCRMResidenceInfo.get("id");
				row1.Contact_Line_Item_ID=new_contact.get("id");
				row1.Email=new_contact.get("Email");
				row1.Cell_phone=new_contact.get("Cell_phone");
				row1.Work_Phone=new_contact.get("Work_Phone");
				row1.Work_Phone_Extension=new_contact.get("Work_Phone_Extension");
				row1.Send_invoice=new_contact.get("Billing_Confirmation");
				row1.Send_client_profile=new_contact.get("Send_profile_confirmation");
				row1.Contact_CRM_ID=new_contact.get("Contact").get("id");
				rows.insert(row1);
			}
			add_deal = Residences[CRM_ID == getCRMResidenceInfo.get("id")];
			if(add_deal.count() > 0)
			{
				add_deal.Residence_Contact.insert(rows);
			}
			/*creating record in residence contact-ends*/
		}
	}
	/*contact subfom ends*/
	/*logement subform starts*/
	if(getCRMResidenceInfo.get("id") != null)
	{
		getCRMSubform = getCRMResidenceInfo.get("Subform_21");
		if(getCRMSubform != null)
		{
			getresiInfo = Residences[CRM_ID == getCRMResidenceInfo.get("id")];
			if(getresiInfo.ID != null)
			{
				for each  new_residence in getCRMSubform
				{
					add_new = insert into Residence_Logement1
					[
						Added_User=zoho.loginuser
						Accomodation_Type_unit1=new_residence.get("Pick_List_1")
						Availibility=new_residence.get("Pick_List_2")
						Count_field=new_residence.get("Count_Nombre")
						Dimensions_ft=new_residence.get("Dimensions_square_foot_Dimen")
						Minimum_1=new_residence.get("Minimum_rate_1")
						Maximum_1=new_residence.get("Maximum_rate_2")
						Notes=new_residence.get("Notes")
						Residence_Line_Item_ID=new_residence.get("id")
						Last_update=new_residence.get("Last_update_date_Date_de_la_de")
						Residence_CRM_ID=getCRMResidenceInfo.get("id")
						Residences=getresiInfo.ID
					];
				}
			}
		}
	}
}
catch (e)
{
	thisapp.addDeveloperLog("Creator : Residences-subform","Creating subform records in CRM",input.ID.toString(),e);
}
