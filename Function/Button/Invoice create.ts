response = "";
try 
{
	if(input.id != null)
	{
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
			inv_map = Map();
			if(req_inv.containKey("Residence"))
			{
				resi_map = req_inv.get("Residence");
				if(resi_map.containKey("id"))
				{
					book_contact_id = null;
					customerID = null;
					resi = zoho.crm.getRecordById("Residence",resi_map.get("id"));
					if(resi.containKey("Provinces") && resi.get("Provinces") != null && resi.get("Provinces") != "")
					{
						if(resi.get("Provinces") == "Québec/Quebec")
						{
							org_id = "749385035";
						}
						else if(resi.get("Provinces") == "Ontario")
						{
							org_id = "770055462";
						}
						if(org_id != null && org_id != "")
						{
							ontarioBooksID = "";
							quebecBooksID = "";
							if(resi.get("Provinces") == "Ontario")
							{
								if(resi.containKey("Ontario_Books_ID") && resi.get("Ontario_Books_ID") != null && resi.get("Ontario_Books_ID") != "")
								{
									ontarioBooksID = resi.get("Ontario_Books_ID");
									customerID = ontarioBooksID;
								}
							}
							if(resi.get("Provinces") == "Québec/Quebec")
							{
								if(resi.containKey("Qubec_Books_ID") && resi.get("Qubec_Books_ID") != null && resi.get("Qubec_Books_ID") != "")
								{
									quebecBooksID = resi.get("Qubec_Books_ID");
									customerID = quebecBooksID;
								}
							}
							if(req_inv.containKey("Deal_Number") && req_inv.get("Deal_Number") != null && req_inv.get("Deal_Number") != "")
							{
								// 								info "Deal";
								search_map = Map();
								v_deal = zoho.crm.searchRecords("Deals","(Deal_Number:equals:" + req_inv.get("Deal_Number") + ")");
								if(v_deal.size() > 0)
								{
									inv_map.put("customer_id",customerID);
									inv_map.put("date",zoho.currentdate);
									item_list = List();
									v_frst_deal = v_deal.get(0).toMap();
									line_item_trigg = false;
									if(v_frst_deal.containKey("Contact") && v_frst_deal.get("Contact") != null)
									{
										crm_cont1_id = v_frst_deal.get("Contact").get("id");
										if(crm_cont1_id != null)
										{
											v_crm_cont1 = zoho.crm.getRecordById("Contacts",crm_cont1_id);
											if(v_crm_cont1.containKey("Client_Number"))
											{
												line_item_map = Map();
												if(resi.get("Provinces") == "Ontario")
												{
													line_item_map.put("name","Customer : " + ifnull(v_crm_cont1.get("Client_Number"),"") + " " + v_crm_cont1.get("Full_Name"));
												}
												if(resi.get("Provinces") == "Québec/Quebec")
												{
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
										crm_cont2_id = v_frst_deal.get("Contacts").get("id");
										if(crm_cont2_id != null)
										{
											v_crm_cont2 = zoho.crm.getRecordById("Contacts",crm_cont2_id);
											if(v_crm_cont2.containKey("Client_Number"))
											{
												line_item_map2 = Map();
												if(resi.get("Provinces") == "Ontario")
												{
													line_item_map2.put("name","Customer : " + ifnull(v_crm_cont2.get("Client_Number"),"") + " " + v_crm_cont2.get("Full_Name"));
												}
												if(resi.get("Provinces") == "Québec/Quebec")
												{
													line_item_map2.put("name","Client : " + ifnull(v_crm_cont2.get("Client_Number"),"") + " " + v_crm_cont2.get("Full_Name"));
												}
												line_item_map2.put("quantity",1);
												if(line_item_trigg == false)
												{
													line_item_map2.put("rate",ifnull(req_inv.get("Total_bill"),0.0));
												}
												else
												{
													line_item_map2.put("rate",0.0);
												}
												item_list.add(line_item_map2);
											}
										}
									}
									cust_list = List();
									if(resi.get("Provinces") == "Québec/Quebec")
									{
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
										if(req_inv.get("Advisor") != null)
										{
											getCounselorName = req_inv.get("Advisor").get("name");
											cust_map3 = Map();
											cust_map3.put("customfield_id","2658202000001152034");
											cust_map3.put("value",ifnull(getCounselorName,""));
											cust_list.add(cust_map3);
										}
										if(resi.get("Residence_number") != null && resi.get("Residence_number") != "")
										{
											cust_map3 = Map();
											cust_map3.put("customfield_id","2658202000001152056");
											cust_map3.put("value",ifnull(resi.get("Residence_number"),""));
											cust_list.add(cust_map3);
										}
									}
									if(resi.get("Provinces") == "Ontario")
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
										if(req_inv.get("Advisor") != null)
										{
											getCounselorName = req_inv.get("Advisor").get("name");
											cust_map3 = Map();
											cust_map3.put("customfield_id","3035265000000283015");
											cust_map3.put("value",ifnull(getCounselorName,""));
											cust_list.add(cust_map3);
										}
										if(resi.get("Residence_number") != null && resi.get("Residence_number") != "")
										{
											cust_map3 = Map();
											cust_map3.put("customfield_id","3035265000000283019");
											cust_map3.put("value",ifnull(resi.get("Residence_number"),""));
											cust_list.add(cust_map3);
										}
									}
									if(cust_list.size() > 0)
									{
										inv_map.put("custom_fields",cust_list);
									}
									if(req_inv.get("P_O_number") != null && req_inv.get("P_O_number") != "")
									{
										inv_map.put("reference_number",req_inv.get("P_O_number"));
									}
									inv_map.put("payment_terms",30);
									inv_map.put("payment_terms_label","Net 30");
									info "Item List ----------" + item_list;
									if(item_list.size() > 0)
									{
										inv_map.put("line_items",item_list);
										// 										info "inv_map--------------" + inv_map;
										resp = zoho.books.createRecord("invoices",org_id,inv_map,"books_connect");
										info "Books data created -------------" + resp;
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
											info updateRequest;
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
											info notecreate;
											response = "La facture a été créée avec succès/Invoice has been created successfully";
										}
										else
										{
											response = "There was issue in invoice creation";
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