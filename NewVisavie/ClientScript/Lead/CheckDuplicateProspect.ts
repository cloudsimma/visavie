//Prospect 1 validation//
data = Map();
finaldata = Map();
seprator = "<br>";
conStr = "";
finalsrt = "Below Details are Alread Exist";
if(name1 != "")
{
	//email validation
	if(mailid1 != "")
	{
		dup_cont_mail1 = zoho.crm.searchRecords("Leads","(Courriel_Email:equals:" + mailid1 + ")");
		//fo dup_cont_mail1;
		if(dup_cont_mail1.size() > 0)
		{
			pros1str = "";
			idlist = list();
			for each  Mailid1_rec in dup_cont_mail1
			{
				idlist.add(Mailid1_rec.get("id"));
			}
			//listname = "Prospect1 with this (" + Mailid1_rec.get("Courriel_Email") + ")  mail id already exist in below record";
			listname = "E:" + Mailid1_rec.get("Courriel_Email") + "ID:";
			info pros1str;
			data.put(listname,idlist);
			conStr = conStr + listname + idlist + seprator;
		}
	}
	//Work Phone Validation
	if(wphone1 != "")
	{
		dup_cont_wphone1 = zoho.crm.searchRecords("Leads","(T_l_phone_travail:equals:" + wphone1 + ")");
		//fo dup_cont_mail1;
		if(dup_cont_wphone1.size() > 0)
		{
			pros1str = "";
			idlist = list();
			for each  Wphone1_rec in dup_cont_wphone1
			{
				idlist.add(Wphone1_rec.get("id"));
			}
			//listname = "Prospect1 with this (" + Wphone1_rec.get("T_l_phone_travail") + ") Work Phone already exist in below record";
			listname = "W:" + Wphone1_rec.get("T_l_phone_travail") + "ID:";
			data.put(listname,idlist);
			conStr = conStr + listname + idlist + seprator;
		}
	}
	//Work Phone extention Validation
	if(Wextention1 != "")
	{
		dup_cont_wphoneExten1 = zoho.crm.searchRecords("Leads","(Work_phone_Extension:equals:" + Wextention1 + ")");
		//fo dup_cont_mail1;
		if(dup_cont_wphoneExten1.size() > 0)
		{
			pros1str = "";
			idlist = list();
			for each  Wphoneex1_rec in dup_cont_wphoneExten1
			{
				idlist.add(Wphoneex1_rec.get("id"));
			}
			//listname = "Prospect1 with this (" + Wphoneex1_rec.get("Work_phone_Extension") + ") Work Phone Extention already exist in below record";
			listname = "WE:" + Wphoneex1_rec.get("Work_phone_Extension") + "ID:";
			data.put(listname,idlist);
			conStr = conStr + listname + idlist + seprator;
		}
	}
	//Home Phone Validation
	if(Hhone1 != "")
	{
		dup_cont_Hphone1 = zoho.crm.searchRecords("Leads","(T_l_phone_maison_Home_phone:equals:" + Hhone1 + ")");
		//fo dup_cont_mail1;
		if(dup_cont_Hphone1.size() > 0)
		{
			pros1str = "";
			idlist = list();
			for each  Hphone1_rec in dup_cont_Hphone1
			{
				idlist.add(Hphone1_rec.get("id"));
			}
			//listname = "Prospect1 with this (" + Hphone1_rec.get("T_l_phone_maison_Home_phone") + ") Home Phone already exist in below record";
			listname = "H:" + Hphone1_rec.get("T_l_phone_maison_Home_phone") + "ID:";
			data.put(listname,idlist);
			conStr = conStr + listname + idlist + seprator;
		}
	}
	//Cell phone Validation
	if(Cphone1 != "")
	{
		dup_cont_Cphone1 = zoho.crm.searchRecords("Leads","(Portable_Mobile:equals:" + Cphone1 + ")");
		//fo dup_cont_mail1;
		if(dup_cont_Cphone1.size() > 0)
		{
			pros1str = "";
			idlist = list();
			for each  Cphone1_rec in dup_cont_Cphone1
			{
				idlist.add(Cphone1_rec.get("id"));
			}
			//listname = "Prospect1 with this (" + Cphone1_rec.get("Portable_Mobile") + ") Cell Phone already exist in below record";
			listname = "H:" + Hphone1_rec.get("T_l_phone_maison_Home_phone") + "ID:";
			data.put(listname,idlist);
			conStr = conStr + listname + idlist + seprator;
		}
	}
	info "conStr : " + conStr;
	finaldata.put("Prospect1",data);
}
//Prospect 2 validation
if(name2 != "")
{
	//email validation
	if(mailid2 != "")
	{
		dup_cont_mail2 = zoho.crm.searchRecords("Leads","(Prospect_Email2:equals:" + mailid2 + ")");
		//fo dup_cont_mail2;
		if(dup_cont_mail2.size() > 0)
		{
			pros2str = "";
			idlist = list();
			for each  Mailid2_rec in dup_cont_mail2
			{
				idlist.add(Mailid2_rec.get("id"));
			}
			listname = "Prospect2 with this (" + Mailid2_rec.get("Prospect_Email2") + ") mail id already exist in below record";
			data.put(listname,idlist);
		}
	}
	//Work Phone Validation
	if(wphone2 != "")
	{
		dup_cont_wphone2 = zoho.crm.searchRecords("Leads","(T_l_phone_travail_P:equals:" + wphone2 + ")");
		if(dup_cont_wphone2.size() > 0)
		{
			pros2str = "";
			idlist = list();
			for each  Wphone2_rec in dup_cont_wphone2
			{
				idlist.add(Wphone2_rec.get("id"));
			}
			listname = "Prospect2 with this (" + Wphone2_rec.get("T_l_phone_travail_P") + ") Work Phone already exist in below record";
			data.put(listname,idlist);
		}
	}
	//Work Phone extention Validation
	if(Wextention2 != "")
	{
		dup_cont_wphoneExten2 = zoho.crm.searchRecords("Leads","(Work_phone_Extension_2:equals:" + Wextention2 + ")");
		if(dup_cont_wphoneExten2.size() > 0)
		{
			pros1str = "";
			idlist = list();
			for each  Wphoneex2_rec in dup_cont_wphoneExten2
			{
				idlist.add(Wphoneex2_rec.get("id"));
			}
			listname = "Prospect2 with this (" + Wphoneex2_rec.get("Work_phone_Extension_2") + ") Work Phone Extention already exist in below record";
			info pros2str;
			data.put(listname,idlist);
		}
	}
	//Home Phone Validation
	if(Hhone2 != "")
	{
		dup_cont_Hphone2 = zoho.crm.searchRecords("Leads","(Prospect_T_l_phone_maison_Home_phone:equals:" + Hhone2 + ")");
		//fo dup_cont_mail1;
		if(dup_cont_Hphone2.size() > 0)
		{
			pros1str = "";
			idlist = list();
			for each  Hphone2_rec in dup_cont_Hphone2
			{
				idlist.add(Hphone2_rec.get("id"));
			}
			listname = "Prospect1 with this (" + Hphone2_rec.get("Prospect_T_l_phone_maison_Home_phone") + ") Home Phone already exist in below record";
			data.put(listname,idlist);
		}
	}
	//Cell phone Validation
	if(Cphone2 != "")
	{
		dup_cont_Cphone2 = zoho.crm.searchRecords("Leads","(Prospect_Portable_Mobile:equals:" + Cphone2 + ")");
		//fo dup_cont_mail1;
		if(dup_cont_Cphone2.size() > 0)
		{
			pros1str = "";
			idlist = list();
			for each  Cphone2_rec in dup_cont_Cphone2
			{
				idlist.add(Cphone2_rec.get("id"));
			}
			listname = "Prospect1 with this (" + Cphone2_rec.get("Prospect_Portable_Mobile") + ") Home Phone already exist in below record";
			data.put(listname,idlist);
		}
	}
	finaldata.put("Prospect1",data);
}
//Prospect 3 validation
if(name3 != "")
{
	//email validation
	if(mailid3 != "")
	{
		dup_cont_mail3 = zoho.crm.searchRecords("Leads","(Prospect_Contact_1_Email:equals:" + mailid3 + ")");
		//fo dup_cont_mail2;
		if(dup_cont_mail3.size() > 0)
		{
			pros3str = "";
			idlist = list();
			for each  Mailid3_rec in dup_cont_mail3
			{
				idlist.add(Mailid3_rec.get("id"));
			}
			listname = "Prospect3 with this (" + Mailid3_rec.get("Prospect_Contact_1_Email") + ") mail id already exist in below record";
			data.put(listname,idlist);
		}
	}
	//Work Phone Validation
	if(wphone3 != "")
	{
		dup_cont_wphone3 = zoho.crm.searchRecords("Leads","(T_l_phone_travail_P1:equals:" + wphone3 + ")");
		if(dup_cont_wphone3.size() > 0)
		{
			pros3str = "";
			idlist = list();
			for each  Wphone3_rec in dup_cont_wphone3
			{
				idlist.add(Wphone3_rec.get("id"));
			}
			listname = "Prospect3 with this (" + Wphone3_rec.get("T_l_phone_travail_P1") + ") Work Phone already exist in below record";
			data.put(listname,idlist);
		}
	}
	//Work Phone extention Validation
	if(Wextention3 != "")
	{
		dup_cont_wphoneExten3 = zoho.crm.searchRecords("Leads","(Work_phone_Extension_p:equals:" + Wextention3 + ")");
		if(dup_cont_wphoneExten3.size() > 0)
		{
			pros3str = "";
			idlist = list();
			for each  Wphoneex3_rec in dup_cont_wphoneExten3
			{
				idlist.add(Wphoneex3_rec.get("id"));
			}
			listname = "Prospect2 with this (" + Wphoneex3_rec.get("Work_phone_Extension_p") + ") Work Phone Extention already exist in below record";
			data.put(listname,idlist);
		}
	}
	//Home Phone Validation
	if(Hhone3 != "")
	{
		dup_cont_Hphone3 = zoho.crm.searchRecords("Leads","(Work_phone_Extension_p:equals:" + Hhone3 + ")");
		//fo dup_cont_mail1;
		if(dup_cont_Hphone3.size() > 0)
		{
			pros3str = "";
			idlist = list();
			for each  Hphone3_rec in dup_cont_Hphone3
			{
				idlist.add(Hphone3_rec.get("id"));
			}
			listname = "Prospect1 with this (" + Hphone3_rec.get("Work_phone_Extension_p") + ") Home Phone already exist in below record";
			data.put(listname,idlist);
		}
	}
	//Cell phone Validation
	if(Cphone2 != "")
	{
		dup_cont_Cphone2 = zoho.crm.searchRecords("Leads","(Prospect_Portable_Mobile:equals:" + Cphone2 + ")");
		//fo dup_cont_mail1;
		if(dup_cont_Cphone2.size() > 0)
		{
			pros1str = "";
			idlist = list();
			for each  Cphone2_rec in dup_cont_Cphone2
			{
				idlist.add(Cphone2_rec.get("id"));
			}
			listname = "Prospect1 with this (" + Cphone2_rec.get("Prospect_Portable_Mobile") + ") Home Phone already exist in below record";
			data.put(listname,idlist);
		}
	}
	finaldata.put("Prospect1",data);
}
return finaldata;
