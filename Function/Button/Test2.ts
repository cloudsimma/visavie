getDeal = zoho.crm.getRecordById("Deals",4846491000010858001);
info getDeal.get("Subform_3");
// getInvoice = zoho.books.getRecordsByID("invoices","770055462","3035265000000328621","books_connect");
// // info getInvoice;
// getNotes = zoho.crm.getRelatedRecords("Notes","Leads",4846491000009312599);
// for each  notes in getNotes
// {
// 	info notes;
// 	datamaps = Map();
// 	dataList = List();
// 	notes_map = Map();
// 	content = notes.get("Note_Content");
// 	notesTitle = if(notes.get("Note_Title") != "" || notes.get("Note_Title") != null,notes.get("Note_Title"),"");
// 	notes_map.put("Note_Title",notesTitle);
// 	notes_map.put("Note_Content",content);
// 	notes_map.put("Parent_Id",4846491000009547004);
// 	notes_map.put("se_module","Deals");
// 	dataList.add(notes_map);
// 	datamaps.put("data",dataList);
// 	notecreate = zoho.crm.createRecord("Notes",notes_map);
// 	info notecreate;
// }
// getUser = zoho.crm.getRecordById("users", <NUMBER>)
// req_inv = zoho.crm.getRecordById("Request_invoice",4846491000006425175);
// info req_inv;
// req_inv = zoho.crm.getRecordById("Request_invoice",4846491000006425175);
// // info getInvoice;
// info req_inv.get("Books_invoice_Id");
// info req_inv.get("Organization_Id");
// if(req_inv.get("Books_invoice_Id") != null && req_inv.get("Books_invoice_Id") != "" && req_inv.get("Organization_Id") != null && req_inv.get("Organization_Id") != "")
// {
// 	info "Hi";
// 	inv_map = Map();
// 	item_list = List();
// 	line_item_trigg = false;
// 	v_deal = zoho.crm.searchRecords("Deals","(Deal_Number:equals:" + req_inv.get("Deal_Number") + ")");
// 	if(v_deal.size() > 0)
// 	{
// 		v_frst_deal = v_deal.get(0).toMap();
// 		line_item_trigg = false;
// 		if(v_frst_deal.containKey("Contact"))
// 		{
// 			crm_cont1_id = v_frst_deal.get("Contact").get("id");
// 			if(crm_cont1_id != null)
// 			{
// 				v_crm_cont1 = zoho.crm.getRecordById("Contacts",crm_cont1_id);
// 				if(v_crm_cont1.containKey("Client_Number"))
// 				{
// 					line_item_map = Map();
// 					line_item_map.put("name","Customer : " + ifnull(v_crm_cont1.get("Client_Number"),"") + " " + v_crm_cont1.get("Full_Name"));
// 					line_item_map.put("quantity",1);
// 					line_item_map.put("rate",ifnull(req_inv.get("Total_bill"),0.0));
// 					item_list.add(line_item_map);
// 					line_item_trigg = true;
// 				}
// 			}
// 		}
// 		if(v_frst_deal.get("Contacts") != null)
// 		{
// 			crm_cont2_id = v_frst_deal.get("Contacts").get("id");
// 			if(crm_cont2_id != null)
// 			{
// 				v_crm_cont2 = zoho.crm.getRecordById("Contacts",crm_cont2_id);
// 				if(v_crm_cont2.containKey("Client_Number"))
// 				{
// 					line_item_map2 = Map();
// 					line_item_map2.put("name","Customer : " + ifnull(v_crm_cont2.get("Client_Number"),"") + " " + v_crm_cont2.get("Full_Name"));
// 					line_item_map2.put("quantity",1);
// 					if(line_item_trigg == false)
// 					{
// 						line_item_map2.put("rate",ifnull(req_inv.get("Total_bill"),0.0));
// 					}
// 					else
// 					{
// 						line_item_map2.put("rate",0.0);
// 					}
// 					item_list.add(line_item_map2);
// 				}
// 			}
// 		}
// 	}
// // 	inv_map.put("customer_id",req_inv.get("Customer_Id").toNumber());
// 	cust_list = List();
// 	if(req_inv.get("Apartment_number") != null && req_inv.get("Apartment_number") != "")
// 	{
// 		cust_map1 = Map();
// 		cust_map1.put("label","No d'appartement");
// 		cust_map1.put("value",ifnull(req_inv.get("Apartment_number"),""));
// 		cust_list.add(cust_map1);
// 	}
// 	if(req_inv.get("Lease_Signature_Date") != null && req_inv.get("Lease_Signature_Date") != "")
// 	{
// 		cust_map2 = Map();
// 		cust_map2.put("label","Date de signature du bail");
// 		cust_map2.put("value",ifnull(req_inv.get("Lease_Signature_Date"),""));
// 		cust_list.add(cust_map2);
// 	}
// 	if(req_inv.get("Lease_Start_Date") != null && req_inv.get("Lease_Start_Date") != "")
// 	{
// 		cust_map3 = Map();
// 		cust_map3.put("label","Date de début de bail");
// 		cust_map3.put("value",ifnull(req_inv.get("Lease_Start_Date"),""));
// 		cust_list.add(cust_map3);
// 	}
// 	if(cust_list.size() > 0)
// 	{
// 		inv_map.put("custom_fields",cust_list);
// 	}
// 	inv_map.put("line_items",item_list);
// 	info inv_map;
// // 	zoho.books.updateRecord(<module>, <TEXT>, <TEXT>, <KEY-VALUE>)
// 	resp = zoho.books.updateRecord("invoices",req_inv.get("Organization_Id"),req_inv.get("Books_invoice_Id"),inv_map,"books_connect");
// 	info resp;
// }
return "";