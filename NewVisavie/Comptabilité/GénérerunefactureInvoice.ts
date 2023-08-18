response = "";
try 
{
	if(input.id != null)
	{
		info "1";
		req_inv = zoho.crm.getRecordById("Request_invoice",id.toNumber());
		if(req_inv.get("Status") == null || req_inv.get("Status") == "")
		{
			response = "Please select the status";
		}
		if(req_inv.get("Status") == "À vérifier/To be verified")
		{
			response = "Le statut doit être mis à jour sur Prêt à être facturé/Status should be updated to Ready to invoice";
		}
		else if(req_inv.get("Signed_Certificate") == null)
		{
			response = "Veuillez télécharger le document de certificat signé/Please upload the signed certificate document";
		}
		else if(req_inv.get("Books_invoice_url") != null)
		{
			response = "La facture a déjà été créée/Invoice has been already created";
		}
		else if(req_inv.get("Status") == "Prêt à facturer/Ready to invoice")
		{
			info "2";
			inv_map = Map();
			if(req_inv.containKey("Residence") && req_inv.get("Residence") != null)
			{
				info "3";
				resi_map = req_inv.get("Residence");
				if(resi_map.containKey("id") && resi_map.get("id") != null)
				{
					info "4";
					book_contact_id = null;
					customerID = null;
					resi = zoho.crm.getRecordById("Residence",resi_map.get("id"));
					if(req_inv.containKey("Province") && req_inv.get("Province") != null && req_inv.get("Province") != "")
					{
						info "5";
						if(req_inv.get("Province") == "Québec/Quebec")
						{
							org_id = "749385035";
						}
						else if(req_inv.get("Province") == "Ontario")
						{
							org_id = "770055462";
						}
						info "org_id" + org_id;
						clientinfo = "";
						client_num = "";
						if(org_id != null && org_id != "")
						{
							info "6";
							ontarioBooksID = "";
							quebecBooksID = "";
							if(req_inv.get("Province") == "Ontario")
							{
								if(resi.containKey("Ontario_Books_ID") && resi.get("Ontario_Books_ID") != null && resi.get("Ontario_Books_ID") != "")
								{
									ontarioBooksID = resi.get("Ontario_Books_ID");
									customerID = ontarioBooksID;
								}
							}
							if(req_inv.get("Province") == "Québec/Quebec")
							{
								// 																								info "7";
								if(resi.containKey("Qubec_Books_ID") && resi.get("Qubec_Books_ID") != null && resi.get("Qubec_Books_ID") != "")
								{
									// 									info "122";
									quebecBooksID = resi.get("Qubec_Books_ID");
									customerID = quebecBooksID;
								}
							}
							info "customerID" + customerID;
							if(req_inv.containKey("Deal_Number") && req_inv.get("Deal_Number") != null && req_inv.get("Deal_Number") != "")
							{
								info "8";
								info "Deal";
								search_map = Map();
								v_deal = zoho.crm.searchRecords("Deals","(Deal_Number:equals:" + req_inv.get("Deal_Number") + ")");
								info "v_deal" + v_deal;
								if(v_deal.size() > 0)
								{
									info "deal";
									info "9";
									inv_map.put("customer_id",customerID);
									inv_map.put("date",zoho.currentdate);
									item_list = List();
									v_frst_deal = v_deal.get(0).toMap();
									line_item_trigg = false;
									if(v_frst_deal.containKey("Contact") && v_frst_deal.get("Contact") != null)
									{
										info "10";
										crm_cont1_id = v_frst_deal.get("Contact").get("id");
										if(crm_cont1_id != null)
										{
											v_crm_cont1 = zoho.crm.getRecordById("Contacts",crm_cont1_id);
											clientinfo = ifnull(v_crm_cont1.get("Full_Name"),"");
											client_num = ifnull(v_crm_cont1.get("Client_Number"),"");
											if(v_crm_cont1.containKey("Client_Number"))
											{
												line_item_map = Map();
												if(req_inv.get("Province") == "Ontario")
												{
													line_item_map.put("name","Customer : " + ifnull(v_crm_cont1.get("Client_Number"),"") + " " + v_crm_cont1.get("Full_Name"));
													line_item_map.put("tax_id","3035265000001125007");
												}
												if(req_inv.get("Province") == "Québec/Quebec")
												{
													// 																										info "11";
													line_item_map.put("name","Client : " + ifnull(v_crm_cont1.get("Client_Number"),"") + " " + v_crm_cont1.get("Full_Name"));
												}
												line_item_map.put("quantity",1);
												line_item_map.put("rate",ifnull(req_inv.get("Total_bill"),0.0));
												item_list.add(line_item_map);
												line_item_trigg = true;
											}
										}
									}
									if(v_frst_deal.get("Contacts") != null)
									{
										info "11";
										crm_cont2_id = v_frst_deal.get("Contacts").get("id");
										if(crm_cont2_id != null)
										{
											v_crm_cont2 = zoho.crm.getRecordById("Contacts",crm_cont2_id);
											if(clientinfo == "")
											{
												clientinfo = ifnull(v_crm_cont2.get("Full_Name"),"");
											}
											if(client_num == "")
											{
												client_num = ifnull(v_crm_cont2.get("Client_Number"),"");
											}
											if(v_crm_cont2.containKey("Client_Number"))
											{
												line_item_map2 = Map();
												if(req_inv.get("Province") == "Ontario")
												{
													line_item_map2.put("name","Customer : " + ifnull(v_crm_cont2.get("Client_Number"),"") + " " + v_crm_cont2.get("Full_Name"));
													line_item_map2.put("tax_id","3035265000001125007");
												}
												if(req_inv.get("Province") == "Québec/Quebec")
												{
													line_item_map2.put("name","Client : " + ifnull(v_crm_cont2.get("Client_Number"),"") + " " + v_crm_cont2.get("Full_Name"));
												}
												line_item_map2.put("quantity",1);
												if(line_item_trigg == false && req_inv.get("Total_bill") != null)
												{
													line_item_map2.put("rate",ifnull(req_inv.get("Total_bill"),0.0));
												}
												else
												{
													line_item_map2.put("rate",0.0);
												}
												item_list.add(line_item_map2);
												info "item_list" + item_list;
											}
										}
									}
									cust_list = List();
									if(req_inv.get("Province") == "Québec/Quebec")
									{
										// 										info "Quebec";
										if(req_inv.get("Apartment_number") != null && req_inv.get("Apartment_number") != "")
										{
											cust_map1 = Map();
											cust_map1.put("customfield_id","2658202000001200527");
											cust_map1.put("value",ifnull(req_inv.get("Apartment_number"),""));
											cust_list.add(cust_map1);
										}
										if(req_inv.get("Lease_Signature_Date") != null && req_inv.get("Lease_Signature_Date") != "")
										{
											cust_map2 = Map();
											cust_map2.put("customfield_id","2658202000000425164");
											cust_map2.put("value",ifnull(req_inv.get("Lease_Signature_Date"),""));
											cust_list.add(cust_map2);
										}
										if(req_inv.get("Lease_Start_Date") != null && req_inv.get("Lease_Start_Date") != "")
										{
											cust_map3 = Map();
											cust_map3.put("customfield_id","2658202000000425158");
											cust_map3.put("value",ifnull(req_inv.get("Lease_Start_Date"),""));
											cust_list.add(cust_map3);
										}
										if(resi.get("Residence_number") != null && resi.get("Residence_number") != "")
										{
											cust_map3 = Map();
											cust_map3.put("customfield_id","2658202000001152056");
											cust_map3.put("value",ifnull(resi.get("Residence_number"),""));
											cust_list.add(cust_map3);
										}
										if(resi.get("Nom_du_groupe") != null && resi.get("Nom_du_groupe") != "")
										{
											new_map1 = Map();
											new_map1.put("customfield_id","2658202000003233009");
											new_map1.put("value",ifnull(resi.get("Nom_du_groupe"),""));
											cust_list.add(new_map1);
										}
										if(req_inv.get("Personal_reference") != null && req_inv.get("Personal_reference") != "")
										{
											new_map2 = Map();
											new_map2.put("customfield_id","2658202000003233001");
											new_map2.put("value",ifnull(req_inv.get("Personal_reference"),""));
											cust_list.add(new_map2);
										}
										/*deal source-starts*/
										if(req_inv.get("Deal_Type1") != null && req_inv.get("Deal_Type1") != "")
										{
											deal_map1 = Map();
											deal_map1.put("customfield_id","2658202000004758247");
											deal_map1.put("value",ifnull(req_inv.get("Deal_Type1"),""));
											cust_list.add(deal_map1);
										}
										if(req_inv.get("Deal_Source1") != null && req_inv.get("Deal_Source1") != "")
										{
											deal_map2 = Map();
											deal_map2.put("customfield_id","2658202000004758251");
											deal_map2.put("value",ifnull(req_inv.get("Deal_Source1"),""));
											cust_list.add(deal_map2);
										}
										if(req_inv.get("RSSS1") != null && req_inv.get("RSSS1") != "")
										{
											deal_map3 = Map();
											deal_map3.put("customfield_id","2658202000004758255");
											deal_map3.put("value",ifnull(req_inv.get("RSSS1"),""));
											cust_list.add(deal_map3);
										}
										if(req_inv.get("Precision") != null && req_inv.get("Precision") != "")
										{
											deal_map4 = Map();
											deal_map4.put("customfield_id","2658202000004758259");
											deal_map4.put("value",ifnull(req_inv.get("Precision"),""));
											cust_list.add(deal_map4);
										}
										if(req_inv.get("Web1") != null && req_inv.get("Web1") != "")
										{
											deal_map5 = Map();
											deal_map5.put("customfield_id","2658202000004758263");
											deal_map5.put("value",ifnull(req_inv.get("Web1"),""));
											cust_list.add(deal_map5);
										}
										if(req_inv.get("Partners1") != null && req_inv.get("Partners1") != "")
										{
											deal_map6 = Map();
											deal_map6.put("customfield_id","2658202000004758267");
											deal_map6.put("value",ifnull(req_inv.get("Partners1"),""));
											cust_list.add(deal_map6);
										}
										if(req_inv.get("Trade_Marketing") != null && req_inv.get("Trade_Marketing") != "")
										{
											deal_map7 = Map();
											deal_map7.put("customfield_id","2658202000004758271");
											deal_map7.put("value",ifnull(req_inv.get("Trade_Marketing"),""));
											cust_list.add(deal_map7);
										}
										/*deal source-ends*/
										if(clientinfo != "")
										{
											client_map = Map();
											client_map.put("customfield_id","2658202000001416001");
											client_map.put("value",ifnull(clientinfo,""));
											cust_list.add(client_map);
										}
										if(client_num != "")
										{
											cust_num = Map();
											cust_num.put("customfield_id","2658202000001416042");
											cust_num.put("value",ifnull(client_num,""));
											cust_list.add(cust_num);
										}
										if(resi.get("Province") != null && resi.get("Province") != "")
										{
											provinceMap = Map();
											provinceMap.put("customfield_id","2658202000001443027");
											provinceMap.put("value","Quebec");
											cust_list.add(provinceMap);
										}
										info "cust_list" + cust_list;
										if(req_inv.get("Advisor") != null)
										{
											getAdvisor = zoho.crm.getRecordById("Advisor",req_inv.get("Advisor").get("id").toLong());
											if(getAdvisor.get("id") != null)
											{
												if(getAdvisor.get("Quebec_Sales_Person_Id") != null && getAdvisor.get("Quebec_Sales_Person_Id") != "")
												{
													inv_map.put("salesperson_id",getAdvisor.get("Quebec_Sales_Person_Id"));
												}
												else
												{
													inv_map.put("salesperson_name",req_inv.get("Advisor").get("name"));
												}
											}
										}
									}
									info "inv_map" + inv_map;
									if(req_inv.get("Province") == "Ontario")
									{
										info "Ontario----";
										if(req_inv.get("Apartment_number") != null && req_inv.get("Apartment_number") != "")
										{
											cust_map1 = Map();
											cust_map1.put("customfield_id","3035265000000328615");
											cust_map1.put("value",ifnull(req_inv.get("Apartment_number"),""));
											cust_list.add(cust_map1);
										}
										if(req_inv.get("Lease_Signature_Date") != null && req_inv.get("Lease_Signature_Date") != "")
										{
											cust_map2 = Map();
											cust_map2.put("customfield_id","3035265000000074571");
											cust_map2.put("value",ifnull(req_inv.get("Lease_Signature_Date"),""));
											cust_list.add(cust_map2);
										}
										if(req_inv.get("Lease_Start_Date") != null && req_inv.get("Lease_Start_Date") != "")
										{
											cust_map3 = Map();
											cust_map3.put("customfield_id","3035265000000074569");
											cust_map3.put("value",ifnull(req_inv.get("Lease_Start_Date"),""));
											cust_list.add(cust_map3);
										}
										if(resi.get("Residence_number") != null && resi.get("Residence_number") != "")
										{
											cust_map3 = Map();
											cust_map3.put("customfield_id","3035265000000283019");
											cust_map3.put("value",ifnull(resi.get("Residence_number"),""));
											cust_list.add(cust_map3);
										}
										if(resi.get("Nom_du_groupe") != null && resi.get("Nom_du_groupe") != "")
										{
											new_map1 = Map();
											new_map1.put("customfield_id","3035265000001375011");
											new_map1.put("value",ifnull(resi.get("Nom_du_groupe"),""));
											cust_list.add(new_map1);
										}
										if(req_inv.get("Personal_reference") != null && req_inv.get("Personal_reference") != "")
										{
											new_map2 = Map();
											new_map2.put("customfield_id","3035265000001375001");
											new_map2.put("value",ifnull(req_inv.get("Personal_reference"),""));
											cust_list.add(new_map2);
										}
										/*deal source-starts*/
										if(req_inv.get("Deal_Type1") != null && req_inv.get("Deal_Type1") != "")
										{
											deal_map1 = Map();
											deal_map1.put("customfield_id","3035265000002006001");
											deal_map1.put("value",ifnull(req_inv.get("Deal_Type1"),""));
											cust_list.add(deal_map1);
										}
										if(req_inv.get("Deal_Source1") != null && req_inv.get("Deal_Source1") != "")
										{
											deal_map2 = Map();
											deal_map2.put("customfield_id","3035265000002006005");
											deal_map2.put("value",ifnull(req_inv.get("Deal_Source1"),""));
											cust_list.add(deal_map2);
										}
										if(req_inv.get("RSSS1") != null && req_inv.get("RSSS1") != "")
										{
											deal_map3 = Map();
											deal_map3.put("customfield_id","3035265000002006009");
											deal_map3.put("value",ifnull(req_inv.get("RSSS1"),""));
											cust_list.add(deal_map3);
										}
										if(req_inv.get("Precision") != null && req_inv.get("Precision") != "")
										{
											deal_map4 = Map();
											deal_map4.put("customfield_id","3035265000002006013");
											deal_map4.put("value",ifnull(req_inv.get("Precision"),""));
											cust_list.add(deal_map4);
										}
										if(req_inv.get("Web1") != null && req_inv.get("Web1") != "")
										{
											deal_map5 = Map();
											deal_map5.put("customfield_id","3035265000002006017");
											deal_map5.put("value",ifnull(req_inv.get("Web1"),""));
											cust_list.add(deal_map5);
										}
										if(req_inv.get("Partners1") != null && req_inv.get("Partners1") != "")
										{
											deal_map6 = Map();
											deal_map6.put("customfield_id","3035265000002006021");
											deal_map6.put("value",ifnull(req_inv.get("Partners1"),""));
											cust_list.add(deal_map6);
										}
										if(req_inv.get("Trade_Marketing") != null && req_inv.get("Trade_Marketing") != "")
										{
											deal_map7 = Map();
											deal_map7.put("customfield_id","3035265000002006025");
											deal_map7.put("value",ifnull(req_inv.get("Trade_Marketing"),""));
											cust_list.add(deal_map7);
										}
										/*deal source-ends*/
										if(clientinfo != "")
										{
											client_map_1 = Map();
											client_map_1.put("customfield_id","3035265000000467001");
											client_map_1.put("value",ifnull(clientinfo,""));
											cust_list.add(client_map_1);
										}
										if(client_num != "")
										{
											cust_num_1 = Map();
											cust_num_1.put("customfield_id","3035265000000556057");
											cust_num_1.put("value",ifnull(client_num,""));
											cust_list.add(cust_num_1);
										}
										if(resi.get("Province") != null && resi.get("Province") != "")
										{
											provinceMap = Map();
											provinceMap.put("customfield_id","3035265000000479003");
											provinceMap.put("value","Ontario");
											cust_list.add(provinceMap);
										}
										if(req_inv.get("Advisor") != null)
										{
											getAdvisor = zoho.crm.getRecordById("Advisor",req_inv.get("Advisor").get("id").toLong());
											if(getAdvisor.get("id") != null)
											{
												if(getAdvisor.get("Ontario_Sales_Person_Id") != null && getAdvisor.get("Ontario_Sales_Person_Id") != "")
												{
													inv_map.put("salesperson_id",getAdvisor.get("Ontario_Sales_Person_Id"));
												}
												else
												{
													inv_map.put("salesperson_name",req_inv.get("Advisor").get("name"));
												}
											}
										}
										inv_map.put("tax_id","3035265000001125007");
									}
									info "cust_list" + cust_list;
									if(cust_list.size() > 0)
									{
										info "cutom list" + cust_list;
										inv_map.put("custom_fields",cust_list);
									}
									if(req_inv.get("P_O_number") != null && req_inv.get("P_O_number") != "")
									{
										inv_map.put("reference_number",req_inv.get("P_O_number"));
									}
									inv_map.put("payment_terms",30);
									inv_map.put("payment_terms_label","Net 30");
									// 																											info "Item List ----------" + item_list;
									info "item_list size" + item_list.size();
									if(item_list.size() > 0)
									{
										info "yes";
										inv_map.put("line_items",item_list);
										// 																														info "inv_map--------------" + inv_map;
										resp = zoho.books.createRecord("invoices",org_id,inv_map,"books_connect");
										info "resp" + resp;
										// 																														info "Books data created -------------" + resp;
										requestId = "";
										if(resp.get("code") == 0 && resp.get("invoice") != null)
										{
											invoiceURL = "https://books.zoho.com/app#/invoices/" + resp.get("invoice").get("invoice_id");
											request_map = Map();
											request_map.put("Books_invoice_url",invoiceURL);
											request_map.put("Books_invoice_Id",resp.get("invoice").get("invoice_id"));
											request_map.put("Organization_Id",org_id);
											request_map.put("Customer_Id",customerID);
											request_map.put("Status","Facturé/Invoiced");
											updateRequest = zoho.crm.updateRecord("Request_invoice",id.toNumber(),request_map);
											/*tracking status update --start*/
											requestId = updateRequest.get("id");
											if(requestId != null)
											{
												getaccountsInfo = zoho.crm.getRecordById("Request_invoice",requestId);
												if(getaccountsInfo.get("id") != null && getaccountsInfo.get("Tracking_Id") != null && getaccountsInfo.get("Deal_ID1") != null)
												{
													trackerInfo = zoho.crm.searchRecords("Tracking","(id:equals:" + getaccountsInfo.get("Tracking_Id").toNumber() + ")");
													if(trackerInfo.size() > 0)
													{
														for each  rec in trackerInfo
														{
															if(rec.get("id") != null && rec.get("Comptabilit_ID") != null)
															{
																/* update 1st comptabilite*/
																tracking_map = Map();
																tracking_map.put("Comptabilit_Status",getaccountsInfo.get("Status"));
																tracking_map.put("Invoice_Generation_Date",zoho.currentdate);
																update_tracking = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),tracking_map);
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
															if(rec.get("id") != null && rec.get("Comptabilit_ID_1") != null)
															{
																tracking_map = Map();
																tracking_map.put("Comptabilit_Status_1",getaccountsInfo.get("Status"));
																tracking_map.put("Invoice_Generation_Date_1",zoho.currentdate);
																update_tracking = zoho.crm.updateRecord("Tracking",rec.get("id").toNumber(),tracking_map);
															}
														}
													}
												}
											}
											/*tracking status update --ends*/
											datamaps = Map();
											dataList = List();
											notes_map = Map();
											content = "Invoice has been created successfully!" + " " + zoho.currenttime.toString("MM/dd/yyyy hh:mm:ss","GMT-04:00");
											notes_map.put("Note_Title","Invoice Creation");
											notes_map.put("Note_Content",content);
											notes_map.put("Parent_Id",id.toNumber());
											notes_map.put("se_module","Request_invoice");
											dataList.add(notes_map);
											datamaps.put("data",dataList);
											notecreate = zoho.crm.createRecord("Notes",notes_map);
											response = "La facture a été créée avec succès/Invoice has been created successfully";
										}
										else
										{
											response = "There was issue in invoice creation";
											appName = "visavie";
											ownerName = "lion_visavie";
											formName = "Developer_Log";
											dataMap = Map();
											dataMap.put("Module","Comptabilité");
											dataMap.put("Process_Description","Create Invoice");
											dataMap.put("In_Data",id.toNumber());
											dataMap.put("Out_Response",resp);
											ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
										}
									}
									else
									{
										response = "Le client n'est pas associé à la transaction/The client is not associated with the deal";
									}
								}
							}
						}
					}
					else
					{
						response = "Veuillez remplir la province de facturation pour la résidence/Please fill the billing province for Residence";
					}
				}
			}
		}
		else
		{
			response = "Le statut doit être mis à jour sur Prêt à être facturé/Status should be updated to Ready to be invoice";
		}
	}
}
catch (e)
{
	appName = "visavie";
	ownerName = "lion_visavie";
	formName = "Developer_Log";
	dataMap = Map();
	dataMap.put("Module","Comptabilité");
	dataMap.put("Process_Description","Create Invoice");
	dataMap.put("In_Data",id.toNumber());
	dataMap.put("Out_Response",e);
	ContactCreateResponse = zoho.creator.createRecord(ownerName,appName,formName,dataMap,Map(),"zoho_mail");
}
return response;
