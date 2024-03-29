resp = "";
try 
{
	if(id != null)
	{
		lst = List();
		deal_id_list = List();
		get_deal = zoho.crm.getRecordById("Deals",id.toLong());
		if(get_deal.get("id") != null)
		{
			residence_subform = get_deal.get("Subform_3");
			// 			info "-----------" + get_deal.get("Subform_3").isEmpty();
			if(get_deal.get("Subform_3").isEmpty() == true)
			{
				resp = "Veuillez sélectionner au moins une résidence avec le statut 'Active' ou 'Prospect' ou 'Active - Entente particulière/Active - Special agreement' pour envoyer le profil / Please Select atleast One Residence with status as 'Active' or 'Prospect' or 'Active - Entente particulière/Active - Special agreement' for send profile";
			}
			else
			{
				// 				info residence_subform;
				get_deal_residence = zoho.creator.getRecords("lion_visavie","visavie","All_Deal_Residences","Deal_ID==\"" + id + "\"",1,200,"zoho_mail");
				// 				info "get_deal_residence" + get_deal_residence;
				if(get_deal_residence.get("code") == 3000)
				{
					get_deal_residence_data = get_deal_residence.get("data");
					// 					info "get_deal_residence_data" + get_deal_residence_data;
					for each  rec_residence in get_deal_residence_data
					{
						rec_residence_id = rec_residence.get("Residences").get("ID");
						// 						info "rec_residence_id" + rec_residence_id;
						get_residence = zoho.creator.getRecordById("lion_visavie","visavie","All_Residences",rec_residence_id,"zoho_mail");
						// 						info get_residence;
						if(get_residence.get("code") == 3000)
						{
							get_get_residence_data = get_residence.get("data").toMap();
							if(get_get_residence_data.get("Status") != null || get_get_residence_data.get("Status") != "")
							{
								get_get_residence_status = get_get_residence_data.get("Status");
								if(get_get_residence_status == "Active" || get_get_residence_status == "Active - Entente particulière/Active - Special agreement")
								{
									deal_residence_id = rec_residence.get("ID");
									info "deal_residence_id" + deal_residence_id;
									deal_id_list.add(deal_residence_id);
								}
							}
						}
					}
				}
				// 				info "deal_id_list" + deal_id_list;
				if(deal_id_list.size() > 0)
				{
					resp = "";
					// 										openUrl("https://creatorapp.zoho.com/lion_visavie/visavie/#Report:All_Deal_Residences?ID=[" + deal_id_list + "]","new window");
					//openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/report-perma/All_Deal_Residences/0XJfCqJtkqGQSh7rCPepFbu1prwGHywAO1SObXQEEnCPdTaqytzFY9YO9qBEXxnS0GHSTdg9ETuMUVdnTHDBpaSwfBpf0W6tO0Q2?ID=[" + deal_id_list + "]","new window");
					// 					openUrl("https://creatorapp.zohopublic.com/lion_visavie/visavie/report-perma/All_Deal_Residences/0XJfCqJtkqGQSh7rCPepFbu1prwGHywAO1SObXQEEnCPdTaqytzFY9YO9qBEXxnS0GHSTdg9ETuMUVdnTHDBpaSwfBpf0W6tO0Q2?ID=[" + deal_id_list + "]" + "&UserID=lion@visavie.com","new window");
					openUrl("https://creatorapp.zoho.com/lion_visavie/visavie/#Page:All_Residance?ID=" + deal_id_list + "&UserID=lion@visavie.com","new window");
				}
				else
				{
					info "last if";
					resp = "Le profil client peut être envoyé si le statut de la résidence est ‘Active’ ou ‘Active – Entente particulière'/The client profile can be sent if the residence status is ‘Active’ or ‘Active – Special agreement’";
				}
			}
		}
		else
		{
			resp = "Issue with API call";
			appName = "visavie";
			ownerName = "lion_visavie";
			formName = "Developer_Log";
			dataMap = Map();
			dataMap.put("Module","Deal");
			dataMap.put("Process_Description","Open Creator Residence - Send Profile Button action");
			dataMap.put("In_Data",id.toLong());
			dataMap.put("Out_Response",get_deal);
			ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
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
	dataMap.put("Process_Description","Open Creator Residence - Send Profile Button action");
	dataMap.put("In_Data",id.toLong());
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
return resp;
