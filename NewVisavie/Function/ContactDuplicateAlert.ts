resp = "";
errorcontent = "";
getLeads = zoho.crm.getRecordById("Leads",LeadID.toLong());
if(getLeads.get("id") != null)
{
	finallist = list();
	contactavailable = false;
	/*propsect client1*/
	if(getLeads.get("First_Namee") != null)
	{
		matchingIDs = list();
		collectdata = list();
		if(getLeads.get("Courriel_Email") != null)
		{
			contact_duplicate_email = zoho.crm.searchRecords("Contacts","(E_mail_Courriel_1:equals:" + getLeads.get("Courriel_Email") + ")");
			if(contact_duplicate_email.size() > 0)
			{
				for each  error in contact_duplicate_email
				{
					datamap = Map();
					datamap.put("type","Prospect/Lead 1");
					datamap.put("Contact ID",error.get("id"));
					datamap.put("Email",error.get("E_mail_Courriel_1"));
					matchingIDs.add(error.get("id"));
					collectdata.add(datamap);
					finallist.add(datamap);
					contactavailable = true;
				}
			}
		}
		if(getLeads.get("T_l_phone_travail") != null)
		{
			contact_duplicate_work = zoho.crm.searchRecords("Contacts","(T_l_phone_maison:equals:" + getLeads.get("T_l_phone_travail") + ")");
			if(contact_duplicate_work.size() > 0)
			{
				for each  error in contact_duplicate_work
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Work phone",error.get("T_l_phone_maison"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect/Lead 1");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Work phone",error.get("T_l_phone_maison"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
		if(getLeads.get("T_l_phone_maison_Home_phone") != null)
		{
			contact_duplicate_home = zoho.crm.searchRecords("Contacts","(T_l_phone_travail:equals:" + getLeads.get("T_l_phone_maison_Home_phone") + ")");
			if(contact_duplicate_home.size() > 0)
			{
				for each  error in contact_duplicate_home
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Home phone",error.get("T_l_phone_travail"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect/Lead 1");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Home phone",error.get("T_l_phone_travail"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
		if(getLeads.get("Portable_Mobile") != null)
		{
			contact_duplicate_home = zoho.crm.searchRecords("Contacts","(Cellulaire:equals:" + getLeads.get("Portable_Mobile") + ")");
			if(contact_duplicate_home.size() > 0)
			{
				for each  error in contact_duplicate_home
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Cell phone",error.get("Cellulaire"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect/Lead 1");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Cell phone",error.get("Cellulaire"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
	}
	/*prospect client 2*/
	if(getLeads.get("Prospect_First_Name2") != null)
	{
		matchingIDs = list();
		collectdata = list();
		if(getLeads.get("Prospect_Email2") != null)
		{
			contact_duplicate_email_2 = zoho.crm.searchRecords("Contacts","(E_mail_Courriel_1:equals:" + getLeads.get("Prospect_Email2") + ")");
			if(contact_duplicate_email_2.size() > 0)
			{
				for each  error in contact_duplicate_email_2
				{
					datamap = Map();
					datamap.put("type","Prospect/Lead 2");
					datamap.put("Contact ID",error.get("id"));
					datamap.put("Email",error.get("E_mail_Courriel_1"));
					matchingIDs.add(error.get("id"));
					collectdata.add(datamap);
					finallist.add(datamap);
					contactavailable = true;
				}
			}
		}
		if(getLeads.get("T_l_phone_travail_P") != null)
		{
			contact_duplicate_work_2 = zoho.crm.searchRecords("Contacts","(T_l_phone_maison:equals:" + getLeads.get("T_l_phone_travail_P") + ")");
			if(contact_duplicate_work_2.size() > 0)
			{
				for each  error in contact_duplicate_work_2
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Work phone",error.get("T_l_phone_maison"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect/Lead 2");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Work phone",error.get("T_l_phone_maison"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
		if(getLeads.get("Prospect_T_l_phone_maison_Home_phone") != null)
		{
			contact_duplicate_home = zoho.crm.searchRecords("Contacts","(T_l_phone_travail:equals:" + getLeads.get("Prospect_T_l_phone_maison_Home_phone") + ")");
			if(contact_duplicate_home.size() > 0)
			{
				for each  error in contact_duplicate_home
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Home phone",error.get("T_l_phone_travail"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect/Lead 2");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Home phone",error.get("T_l_phone_travail"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
		if(getLeads.get("Prospect_Portable_Mobile") != null)
		{
			contact_duplicate_home = zoho.crm.searchRecords("Contacts","(Cellulaire:equals:" + getLeads.get("Prospect_Portable_Mobile") + ")");
			if(contact_duplicate_home.size() > 0)
			{
				for each  error in contact_duplicate_home
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Cell phone",error.get("Cellulaire"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect/Lead 2");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Cell phone",error.get("Cellulaire"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
	}
	/*primary contact*/
	if(getLeads.get("Prospect_Contact_1_First_Name") != null)
	{
		matchingIDs = list();
		collectdata = list();
		if(getLeads.get("Prospect_Contact_1_Email") != null)
		{
			contact_duplicate_email = zoho.crm.searchRecords("Contacts","(E_mail_Courriel_1:equals:" + getLeads.get("Prospect_Contact_1_Email") + ")");
			if(contact_duplicate_email.size() > 0)
			{
				for each  error in contact_duplicate_email
				{
					datamap = Map();
					datamap.put("type","Contact primaire/Primary contact");
					datamap.put("Contact ID",error.get("id"));
					datamap.put("Email",error.get("E_mail_Courriel_1"));
					matchingIDs.add(error.get("id"));
					collectdata.add(datamap);
					finallist.add(datamap);
					contactavailable = true;
				}
			}
		}
		if(getLeads.get("T_l_phone_travail_P1") != null)
		{
			contact_duplicate_work = zoho.crm.searchRecords("Contacts","(T_l_phone_maison:equals:" + getLeads.get("T_l_phone_travail_P1") + ")");
			if(contact_duplicate_work.size() > 0)
			{
				for each  error in contact_duplicate_work
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Work phone",error.get("T_l_phone_maison"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Contact primaire/Primary contact");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Work phone",error.get("T_l_phone_maison"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
		if(getLeads.get("Prospect_Contact_1_Home_Phone") != null)
		{
			contact_duplicate_home = zoho.crm.searchRecords("Contacts","(T_l_phone_travail:equals:" + getLeads.get("Prospect_Contact_1_Home_Phone") + ")");
			if(contact_duplicate_home.size() > 0)
			{
				for each  error in contact_duplicate_home
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Home phone",error.get("T_l_phone_travail"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Contact primaire/Primary contact");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Home phone",error.get("T_l_phone_travail"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
		if(getLeads.get("Prospect_Contact_1_Cellphone") != null)
		{
			contact_duplicate_home = zoho.crm.searchRecords("Contacts","(Cellulaire:equals:" + getLeads.get("Prospect_Contact_1_Cellphone") + ")");
			if(contact_duplicate_home.size() > 0)
			{
				for each  error in contact_duplicate_home
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Cell phone",error.get("Cellulaire"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Contact primaire/Primary contact");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Cell phone",error.get("Cellulaire"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
	}
	/*secondary*/
	if(getLeads.get("Secondary_First_Name") != null)
	{
		matchingIDs = list();
		collectdata = list();
		if(getLeads.get("Secondary_Con_Email") != null)
		{
			contact_duplicate_email = zoho.crm.searchRecords("Contacts","(E_mail_Courriel_1:equals:" + getLeads.get("Secondary_Con_Email") + ")");
			if(contact_duplicate_email.size() > 0)
			{
				for each  error in contact_duplicate_email
				{
					datamap = Map();
					datamap.put("type","Contact secondaire/Secondary contact");
					datamap.put("Contact ID",error.get("id"));
					datamap.put("Email",error.get("E_mail_Courriel_1"));
					matchingIDs.add(error.get("id"));
					collectdata.add(datamap);
					finallist.add(datamap);
					contactavailable = true;
				}
			}
		}
		if(getLeads.get("T_l_phone_travail_S") != null)
		{
			contact_duplicate_work = zoho.crm.searchRecords("Contacts","(T_l_phone_maison:equals:" + getLeads.get("T_l_phone_travail_S") + ")");
			if(contact_duplicate_work.size() > 0)
			{
				for each  error in contact_duplicate_work
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Work phone",error.get("T_l_phone_maison"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Contact secondaire/Secondary contact");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Work phone",error.get("T_l_phone_maison"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
		if(getLeads.get("Secondary_Home_Phone") != null)
		{
			contact_duplicate_home = zoho.crm.searchRecords("Contacts","(T_l_phone_travail:equals:" + getLeads.get("Secondary_Home_Phone") + ")");
			if(contact_duplicate_home.size() > 0)
			{
				for each  error in contact_duplicate_home
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Home phone",error.get("T_l_phone_travail"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Contact secondaire/Secondary contact");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Home phone",error.get("T_l_phone_travail"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
		if(getLeads.get("Secondary_Cellphone") != null)
		{
			contact_duplicate_home = zoho.crm.searchRecords("Contacts","(Cellulaire:equals:" + getLeads.get("Secondary_Cellphone") + ")");
			if(contact_duplicate_home.size() > 0)
			{
				for each  error in contact_duplicate_home
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Cell phone",error.get("Cellulaire"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Contact secondaire/Secondary contact");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Cell phone",error.get("Cellulaire"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
	}
	/*Health*/
	if(getLeads.get("Healthcare_First_Name") != null)
	{
		matchingIDs = list();
		collectdata = list();
		if(getLeads.get("Healthcare_Email") != null)
		{
			contact_duplicate_email = zoho.crm.searchRecords("Contacts","(E_mail_Courriel_1:equals:" + getLeads.get("Healthcare_Email") + ")");
			if(contact_duplicate_email.size() > 0)
			{
				for each  error in contact_duplicate_email
				{
					datamap = Map();
					datamap.put("type","Contact RSSS/Healthcare network contact");
					datamap.put("Contact ID",error.get("id"));
					datamap.put("Email",error.get("E_mail_Courriel_1"));
					matchingIDs.add(error.get("id"));
					collectdata.add(datamap);
					finallist.add(datamap);
					contactavailable = true;
				}
			}
		}
		if(getLeads.get("T_l_phone_travail_R") != null)
		{
			contact_duplicate_work = zoho.crm.searchRecords("Contacts","(T_l_phone_maison:equals:" + getLeads.get("T_l_phone_travail_R") + ")");
			if(contact_duplicate_work.size() > 0)
			{
				for each  error in contact_duplicate_work
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Work phone",error.get("T_l_phone_maison"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Contact RSSS/Healthcare network contact");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Work phone",error.get("T_l_phone_maison"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
		if(getLeads.get("Healthcare_Home_Phone") != null)
		{
			contact_duplicate_home = zoho.crm.searchRecords("Contacts","(T_l_phone_travail:equals:" + getLeads.get("Healthcare_Home_Phone") + ")");
			if(contact_duplicate_home.size() > 0)
			{
				for each  error in contact_duplicate_home
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Home phone",error.get("T_l_phone_travail"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Contact RSSS/Healthcare network contact");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Home phone",error.get("T_l_phone_travail"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
		if(getLeads.get("Healthcare_contact_Cellphone") != null)
		{
			contact_duplicate_home = zoho.crm.searchRecords("Contacts","(Cellulaire:equals:" + getLeads.get("Healthcare_contact_Cellphone") + ")");
			if(contact_duplicate_home.size() > 0)
			{
				for each  error in contact_duplicate_home
				{
					if(collectdata.size() > 0 && matchingIDs.contains(error.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("Contact ID") == error.get("id"))
							{
								datalist.put("Cell phone",error.get("Cellulaire"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Contact RSSS/Healthcare network contact");
						datamap.put("Contact ID",error.get("id"));
						datamap.put("Cell phone",error.get("Cellulaire"));
						matchingIDs.add(error.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
						contactavailable = true;
					}
				}
			}
		}
	}
}
if(contactavailable = true)
{
	for each  error in finallist
	{
		errorcontent = errorcontent + error.get("Contact ID") + "-";
		errorcontent = errorcontent + error.get("type") + "-";
		if(error.get("Email") != null)
		{
			errorcontent = errorcontent + " " + "E-" + " " + error.get("Email") + " ";
		}
		if(error.get("Work phone") != null)
		{
			errorcontent = errorcontent + " " + "W-" + " " + error.get("Work phone") + " ";
		}
		if(error.get("Home phone") != null)
		{
			errorcontent = errorcontent + " " + "H-" + " " + error.get("Home phone") + " ";
		}
		if(error.get("Cell phone") != null)
		{
			errorcontent = errorcontent + " " + "C-" + " " + error.get("Cell phone") + " ";
		}
		errorcontent = errorcontent + " " + "<br>";
	}
	resp = "Le/les contact(s) sont déjà disponible dans la base de données/The contact(s) are already available in the data base" + "<br>" + errorcontent;
}
return resp;
