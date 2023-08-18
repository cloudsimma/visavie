//Prospect 1 validation//
matchingIDs = list();
matchingIDs1 = list();
matchingIDs2 = list();
data = Map();
collectdata = list();
finaldata = list();
finaldata1 = list();
conStr = "";
fdataList = Map();
finallist = List();
resp = "";
errorcontent = "";
finalsrt = "Below Details are Alread Exist";
if(name1 != "")
{
	//email validation
	if(mailid1 != "")
	{
		dup_cont_mail1 = zoho.crm.searchRecords("Leads","(Courriel_Email:equals:" + mailid1 + ")");
		if(dup_cont_mail1.size() > 0)
		{
			for each  Mailid1_rec in dup_cont_mail1
			{
				p1str = "";
				if(Mailid1_rec.get("id") != id)
				{
					datamap = Map();
					datamap.put("type","Prospect1");
					datamap.put("id",Mailid1_rec.get("id"));
					datamap.put("E",Mailid1_rec.get("Courriel_Email"));
					matchingIDs.add(Mailid1_rec.get("id"));
					collectdata.add(datamap);
					finallist.add(datamap);
				}
			}
		}
	}
	//Work Phone Validation
	if(wphone1 != "")
	{
		dup_cont_wphone1 = zoho.crm.searchRecords("Leads","(T_l_phone_travail:equals:" + wphone1 + ")");
		if(dup_cont_wphone1.size() > 0)
		{
			for each  Wphone1_rec in dup_cont_wphone1
			{
				if(Wphone1_rec.get("id") != id)
				{
					if(collectdata.size() > 0 && matchingIDs.contains(Wphone1_rec.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("id") == Wphone1_rec.get("id"))
							{
								datalist.put("W",Wphone1_rec.get("T_l_phone_travail"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect1");
						datamap.put("id",Wphone1_rec.get("id"));
						datamap.put("W",Wphone1_rec.get("T_l_phone_travail"));
						matchingIDs.add(Wphone1_rec.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
					}
				}
			}
		}
	}
	//Work Phone extention Validation
	if(Wextention1 != "")
	{
		dup_cont_wphoneExten1 = zoho.crm.searchRecords("Leads","(Work_phone_Extension:equals:" + Wextention1 + ")");
		if(dup_cont_wphoneExten1.size() > 0)
		{
			for each  Wphoneex1_rec in dup_cont_wphoneExten1
			{
				if(Wphoneex1_rec.get("id") != id)
				{
					if(collectdata.size() > 0 && matchingIDs.contains(Wphoneex1_rec.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("id") == Wphoneex1_rec.get("id"))
							{
								datalist.put("WE",Wphoneex1_rec.get("Work_phone_Extension"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect1");
						datamap.put("id",Wphoneex1_rec.get("id"));
						datamap.put("WE",Wphoneex1_rec.get("Work_phone_Extension"));
						matchingIDs.add(Wphoneex1_rec.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
					}
				}
			}
		}
	}
	//Home Phone Validation
	if(Hhone1 != "")
	{
		dup_cont_Hphone1 = zoho.crm.searchRecords("Leads","(T_l_phone_maison_Home_phone:equals:" + Hhone1 + ")");
		//info "dup_cont_Hphone1 :"+dup_cont_Hphone1;
		if(dup_cont_Hphone1.size() > 0)
		{
			for each  Hphone1_rec in dup_cont_Hphone1
			{
				if(Hphone1_rec.get("id") != id)
				{
					if(collectdata.size() > 0 && matchingIDs.contains(Hphone1_rec.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("id") == Hphone1_rec.get("id"))
							{
								datalist.put("H",Hphone1_rec.get("T_l_phone_maison_Home_phone"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect1");
						datamap.put("id",Hphone1_rec.get("id"));
						datamap.put("H",Hphone1_rec.get("T_l_phone_maison_Home_phone"));
						matchingIDs.add(Hphone1_rec.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
					}
				}
			}
		}
	}
	//Cell phone Validation
	if(Cphone1 != "")
	{
		dup_cont_Cphone1 = zoho.crm.searchRecords("Leads","(Portable_Mobile:equals:" + Cphone1 + ")");
		if(dup_cont_Cphone1.size() > 0)
		{
			for each  Cphone1_rec in dup_cont_Cphone1
			{
				if(Cphone1_rec.get("id") != id)
				{
					if(collectdata.size() > 0 && matchingIDs.contains(Cphone1_rec.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("id") == Cphone1_rec.get("id"))
							{
								datalist.put("C",Cphone1_rec.get("Portable_Mobile"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect1");
						datamap.put("id",Cphone1_rec.get("id"));
						datamap.put("C",Cphone1_rec.get("Portable_Mobile"));
						matchingIDs.add(Cphone1_rec.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
					}
				}
			}
		}
	}
}
//info "Prospect1 :" + matchingIDs;
info "collect data :p1" + collectdata;
fdataList.put("P1",collectdata);
if(matchingIDs.size() > 0)
{
	matchingIDs1.add(matchingIDs);
}
//info "matching id" + matchingIDs1;
//Prospect 2 validation
matchingIDs = list();
collectdata = list();
info "name2 :" + name2;
if(name2 != "")
{
	//email validation
	if(mailid2 != "")
	{
		dup_cont_mail2 = zoho.crm.searchRecords("Leads","(Prospect_Contact_1_Email:equals:" + mailid2 + ")");
		info dup_cont_mail2;
		if(dup_cont_mail2.size() > 0)
		{
			for each  Mailid2_rec in dup_cont_mail2
			{
				if(Mailid2_rec.get("id") != id)
				{
					datamap = Map();
					datamap.put("type","Prospect2");
					datamap.put("id",Mailid2_rec.get("id"));
					datamap.put("E",Mailid2_rec.get("Prospect_Contact_1_Email"));
					matchingIDs.add(Mailid2_rec.get("id"));
					collectdata.add(datamap);
					finallist.add(datamap);
				}
			}
		}
	}
	//Work Phone Validation
	if(wphone2 != "")
	{
		dup_cont_wphone2 = zoho.crm.searchRecords("Leads","(T_l_phone_travail_P1:equals:" + wphone2 + ")");
		if(dup_cont_wphone2.size() > 0)
		{
			for each  Wphone2_rec in dup_cont_wphone2
			{
				if(Wphone2_rec.get("id") != id)
				{
					if(collectdata.size() > 0 && matchingIDs.contains(Wphone2_rec.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("id") == Wphone2_rec.get("id"))
							{
								datalist.put("W",Wphone2_rec.get("T_l_phone_travail_P1"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect2");
						datamap.put("id",Wphone2_rec.get("id"));
						datamap.put("W",Wphone2_rec.get("T_l_phone_travail_P1"));
						matchingIDs.add(Wphone2_rec.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
					}
				}
			}
		}
	}
	//Work Phone extention Validation
	if(Wextention2 != "")
	{
		dup_cont_wphoneExten2 = zoho.crm.searchRecords("Leads","(Work_phone_Extension_p:equals:" + Wextention2 + ")");
		if(dup_cont_wphoneExten2.size() > 0)
		{
			for each  Wphoneex2_rec in dup_cont_wphoneExten2
			{
				if(Wphoneex2_rec.get("id") != id)
				{
					if(collectdata.size() > 0 && matchingIDs.contains(Wphoneex2_rec.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("id") == Wphoneex2_rec.get("id"))
							{
								datalist.put("WE",Wphoneex2_rec.get("Work_phone_Extension_p"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect2");
						datamap.put("id",Wphoneex2_rec.get("id"));
						datamap.put("WE",Wphoneex2_rec.get("Work_phone_Extension_p"));
						matchingIDs.add(Wphoneex2_rec.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
					}
				}
			}
		}
	}
	//Home Phone Validation
	if(Hhone2 != "")
	{
		dup_cont_Hphone2 = zoho.crm.searchRecords("Leads","(Prospect_Contact_1_Home_Phone:equals:" + Hhone2 + ")");
		if(dup_cont_Hphone2.size() > 0)
		{
			for each  Hphone2_rec in dup_cont_Hphone2
			{
				if(Hphone2_rec.get("id") != id)
				{
					if(collectdata.size() > 0 && matchingIDs.contains(Hphone2_rec.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("id") == Hphone2_rec.get("id"))
							{
								datalist.put("H",Hphone2_rec.get("Prospect_Contact_1_Home_Phone"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect2");
						datamap.put("id",Hphone2_rec.get("id"));
						datamap.put("H",Hphone2_rec.get("Prospect_Contact_1_Home_Phone"));
						matchingIDs.add(Hphone2_rec.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
					}
				}
			}
		}
	}
	//Cell phone Validation
	if(Cphone2 != "")
	{
		dup_cont_Cphone2 = zoho.crm.searchRecords("Leads","(Prospect_Contact_1_Cellphone:equals:" + Cphone2 + ")");
		if(dup_cont_Cphone2.size() > 0)
		{
			for each  Cphone2_rec in dup_cont_Cphone2
			{
				if(Cphone2_rec.get("id") != id)
				{
					if(collectdata.size() > 0 && matchingIDs.contains(Cphone2_rec.get("id")))
					{
						for each  datalist in collectdata
						{
							if(datalist.get("id") == Cphone2_rec.get("id"))
							{
								datalist.put("C",Cphone2_rec.get("Prospect_Contact_1_Cellphone"));
							}
						}
					}
					else
					{
						datamap = Map();
						datamap.put("type","Prospect2");
						datamap.put("id",Cphone2_rec.get("id"));
						datamap.put("C",Cphone2_rec.get("Prospect_Contact_1_Cellphone"));
						matchingIDs.add(Cphone2_rec.get("id"));
						collectdata.add(datamap);
						finallist.add(datamap);
					}
				}
			}
		}
	}
}
//info "Prospect2 :" + collectdata;
fdataList.put("P2",collectdata);
if(matchingIDs.size() > 0)
{
	matchingIDs2.add(matchingIDs);
}
finaldata1.add(collectdata);
if(matchingIDs1.size() > 0 || matchingIDs2.size() > 0)
{
	for each  error in finallist
	{
		errorcontent = errorcontent + "ID :" + error.get("id") + "-";
		errorcontent = errorcontent + error.get("type") + "-";
		if(error.get("E") != null)
		{
			errorcontent = errorcontent + " " + "E-" + " " + error.get("E") + " ";
		}
		if(error.get("W") != null)
		{
			errorcontent = errorcontent + " " + "W-" + " " + error.get("W") + " ";
		}
		if(error.get("H") != null)
		{
			errorcontent = errorcontent + " " + "H-" + " " + error.get("H") + " ";
		}
		if(error.get("C") != null)
		{
			errorcontent = errorcontent + " " + "C-" + " " + error.get("C") + " ";
		}
		errorcontent = errorcontent + " " + " | ";
	}
	resp = "Le/les contact(s) sont déjà disponible dans la base de données/The contact(s) are already available in the data base" + "/" + errorcontent;
}
return resp;
