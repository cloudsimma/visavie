resp = "";
try 
{
	if(input.id != null)
	{
		v_deal = zoho.crm.getRecordById("Deals",id.toNumber());
		getResideceList = v_deal.get("Subform_3");
		invoicePreferenceList = List();
		for each  residence in getResideceList
		{
			if(residence.get("Invoice_Preference") == true)
			{
				invoicePreferenceList.add(residence.get("Residence").get("id"));
			}
		}
		info "invoicePreferenceList" + invoicePreferenceList;
		getInvoiceRecord = zoho.crm.searchRecords("Request_invoice","(Deal_Number:equals:" + v_deal.get("Deal_Number") + ")");
		if(getInvoiceRecord.size() == 0)
		{
			if(invoicePreferenceList.size() == 1)
			{
				get_residence = zoho.crm.getRecordById("Residence",invoicePreferenceList.get(0));
				if(get_residence.get("id") != null)
				{
					if(get_residence.get("Status") != null)
					{
						if(get_residence.get("Status") == "Active - Entente particulière/Active - Special agreement" || get_residence.get("Status") == "Active")
						{
							info "status" + get_residence.get("Status");
							m_map = Map();
							m_map.put("Name",v_deal.get("Deal_Name"));
							m_map.put("Deal_Number",v_deal.get("Deal_Number").toString());
							m_map.put("Deal_Type1",v_deal.get("Deal_type_Type_de_d_marche"));
							m_map.put("Deal_Source1",v_deal.get("Lead_source_1"));
							m_map.put("RSSS1",ifnull(v_deal.get("Health_care_network_RSSS"),""));
							m_map.put("Web1",ifnull(v_deal.get("Web"),""));
							m_map.put("Partners1",ifnull(v_deal.get("Partners_Partenaires"),""));
							m_map.put("Trade_Marketing",ifnull(v_deal.get("Trade_marketing_1"),""));
							m_map.put("Precision",ifnull(v_deal.get("Precision"),""));
							/*owner starts*/
							getUsers = zoho.crm.searchRecords("users","(email:equals:" + zoho.loginuserid + ")");
							if(getUsers.get("users") != null && getUsers.get("users").size() > 0)
							{
								userInfo = getUsers.get("users").get(0);
								userID = userInfo.get("id");
								m_map.put("Owner",userID);
							}
							/*owner ends*/
							hospitalInfo = v_deal.get("Hospital");
							if(hospitalInfo != null)
							{
								m_map.put("Hospital",hospitalInfo.get("id"));
							}
							m_map.put("Tracking_Id",v_deal.get("Tracking_Id"));
							m_map.put("Personal_reference",v_deal.get("Personal_referral"));
							/* update deal ID --starts*/
							if(v_deal.get("Deal_IDS") != null && v_deal.get("Deal_IDS") == "Deal1")
							{
								m_map.put("Deal_ID1",v_deal.get("id"));
							}
							if(v_deal.get("Deal_IDS") != null && v_deal.get("Deal_IDS") == "Deal2")
							{
								m_map.put("DealID2",v_deal.get("id"));
							}
							/* update deal ID --ends*/
							m_map.put("Housing_Deal",id.toNumber());
							clientList = List();
							clientNumber = "";
							if(v_deal.get("Contact") != null)
							{
								con = v_deal.get("Contact").toMap();
								if(v_deal.get("Contact") != null)
								{
									// 					m_map.put("Client_s",con.get("id"));
									multiselect_map = Map();
									clientMap = Map();
									multiselect_map.put("id",con.get("id"));
									clientMap.put("Clients",multiselect_map);
									clientList.add(clientMap);
									getClient1Info = zoho.crm.getRecordById("Contacts",con.get("id").toLong());
									if(getClient1Info.get("id") != null)
									{
										if(getClient1Info.get("Client_Number") != null && getClient1Info.get("Client_Number") != "")
										{
											clientNumber = getClient1Info.get("Client_Number");
										}
										if(getClient1Info.get("Full_Name") != null && getClient1Info.get("Full_Name") != "")
										{
											clientNumber = clientNumber + "-" + getClient1Info.get("Full_Name");
										}
									}
								}
								info "client 1";
							}
							if(v_deal.get("Contacts") != null)
							{
								con2 = v_deal.get("Contacts").toMap();
								if(v_deal.get("Contacts") != null)
								{
									multiselect_map = Map();
									clientMap = Map();
									multiselect_map.put("id",con2.get("id"));
									clientMap.put("Clients",multiselect_map);
									clientList.add(clientMap);
									getClient2Info = zoho.crm.getRecordById("Contacts",con2.get("id").toLong());
									if(getClient2Info.get("id") != null)
									{
										if(getClient2Info.get("Client_Number") != null && getClient2Info.get("Client_Number") != "")
										{
											clientNumber = clientNumber + "," + getClient2Info.get("Client_Number");
										}
										if(getClient2Info.get("Full_Name") != null && getClient2Info.get("Full_Name") != "")
										{
											clientNumber = clientNumber + "-" + getClient2Info.get("Full_Name");
										}
									}
								}
								info "client 2";
							}
							m_map.put("Clients",clientList);
							if(clientNumber != "")
							{
								m_map.put("Client_Number",clientNumber);
							}
							// 				info "clientList" + clientList;
							//Contacts
							if(v_deal.get("Counselor_Conseiller") != null)
							{
								advisor = v_deal.get("Counselor_Conseiller");
								m_map.put("Advisor",advisor.get("id"));
							}
							if(v_deal.get("Conseiller_temporaire_Temporary_counselor") != null)
							{
								tempCounselor = v_deal.get("Conseiller_temporaire_Temporary_counselor");
								m_map.put("Temporary_counselor",tempCounselor.get("id"));
							}
							if(v_deal.get("Subform_3") != null)
							{
								resi_list = v_deal.get("Subform_3");
								for each  resident in resi_list
								{
									residenceNumber = "";
									resident_map = resident.toMap();
									if(resident_map.containKey("Invoice_Preference") && resident_map.get("Invoice_Preference") == true)
									{
										if(resident_map.containKey("Residence") && resident_map.get("Residence") != null)
										{
											m_map.put("Residence",resident_map.get("Residence").get("id"));
											residenceInfo = zoho.crm.getRecordById("Residence",resident_map.get("Residence").get("id"));
											if(residenceInfo.get("id") != null)
											{
												m_map.put("Province",residenceInfo.get("Provinces"));
											}
										}
									}
								}
								info "m_map" + m_map;
							}
							finalMap = Map();
							datalList = list();
							datalList.add(m_map);
							finalMap.put("data",datalList);
							createrequest = invokeurl
							[
								url :"https://www.zohoapis.com/crm/v2.1/Request_invoice"
								type :POST
								parameters:finalMap.toString()
								connection:"crm_visavie"
							];
							info "createrequest" + createrequest;
							if(createrequest.get("data") != null && createrequest.get("data").size() > 0)
							{
								info "create request to invoice";
								if(createrequest.get("data").get(0).get("code") == "SUCCESS" && createrequest.get("data").get(0).get("details") != null)
								{
									info "create request to invoice success";
									requestId = createrequest.get("data").get(0).get("details").get("id");
									// 					update_deal_map = Map();
									// 					update_deal_map.put("Stage","Location enregistrée/Registered renting");
									// 					updateDealResp = zoho.crm.updateRecord("Deals",id.toLong(),update_deal_map);
									// 					info updateDealResp;
									/*tracking-- starts*/
									getaccountsInfo = zoho.crm.getRecordById("Request_invoice",requestId);
									/*update 1st comptabilite*/
									if(getaccountsInfo.get("id") != null && getaccountsInfo.get("Tracking_Id") != null && getaccountsInfo.get("Deal_ID1") != null)
									{
										trackerInfo = zoho.crm.searchRecords("Tracking","(id:equals:" + getaccountsInfo.get("Tracking_Id").toNumber() + ")");
										if(trackerInfo.size() > 0)
										{
											for each  rec in trackerInfo
											{
												if(rec.get("id") != null && rec.get("Deal_ID") != null)
												{
													d_map = Map();
													d_map.put("Comptabilit_Status",getaccountsInfo.get("Status"));
													d_map.put("Comptabilit_Province",getaccountsInfo.get("Province"));
													d_map.put("Comptabilit_ID",getaccountsInfo.get("id"));
													updateleadTrack = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),d_map);
												}
											}
										}
									}
									/*update 2 comptabilite*/
									if(getaccountsInfo.get("id") != null && getaccountsInfo.get("Tracking_Id") != null && getaccountsInfo.get("DealID2") != null)
									{
										trackerInfo = zoho.crm.searchRecords("Tracking","(id:equals:" + getaccountsInfo.get("Tracking_Id").toNumber() + ")");
										if(trackerInfo.size() > 0)
										{
											for each  rec in trackerInfo
											{
												if(rec.get("id") != null && rec.get("Deal_ID_1") != null)
												{
													d_map_2 = Map();
													d_map_2.put("Comptabilit_Status_1",getaccountsInfo.get("Status"));
													d_map_2.put("Comptabilit_Province_1",getaccountsInfo.get("Province"));
													d_map_2.put("Comptabilit_ID_1",getaccountsInfo.get("id"));
													updateleadTrack_2 = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),d_map_2);
												}
											}
										}
									}
									/*tracking --ends*/
									getOwnerName = "";
									if(v_deal.get("Owner") != null)
									{
										getOwnerName = v_deal.get("Owner").get("name");
									}
									datamaps = Map();
									dataList = List();
									notes_map = Map();
									content = "Request Invoice record has been created " + "by: " + getOwnerName + " " + zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-04:00");
									notes_map.put("Note_Title","Request Invoice");
									notes_map.put("Note_Content",content);
									notes_map.put("Parent_Id",id.toNumber());
									notes_map.put("se_module","Deals");
									dataList.add(notes_map);
									datamaps.put("data",dataList);
									notecreate = zoho.crm.createRecord("Notes",notes_map);
									resp = "Votre demande de facture a bien été créée/Your invoice request was created successfully";
									openUrl("https://crm.zoho.com/crm/org746753262/tab/CustomModule4/" + requestId,"new window");
								}
							}
						}
						else
						{
							resp = "Le statut de résidence sélectionné doit être ‘Active’ ou ‘Active – Entente particulière’/The selected Residence Status must be ‘Active’ or ‘Active – Special agreement’";
						}
					}
				}
			}
			else
			{
				resp = "Veuillez sélectionner une seule résidence pour demander une facture/Please select only one residence to request invoice";
			}
		}
		else
		{
			resp = "Enregistrement de Compatibilité déjà créé/Compatibilité record already created";
		}
		info resp;
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Deal");
	dataMap.put("Process_Description","Create and Update Request Invoice");
	dataMap.put("In_Data",id.toNumber());
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
return resp;
