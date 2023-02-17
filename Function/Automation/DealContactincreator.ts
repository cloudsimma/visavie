getLeads = zoho.crm.getRecordById("Leads",4846491000006443001);
info getLeads;
// if(getLeads.get("id") != null)
// 	{
// 		primaryContactMap = Map();
// 				primaryContactMap.put("First_Name",getLeads.get("First_Namee"));
// 				primaryContactMap.put("Last_Name",getLeads.get("Last_Name"));
// 				primaryContactMap.put("Contact_Type","Client");
// 				primaryContactMap.put("Layout","4846491000000339001");
// 				primaryContactMap.put("Ville_City",getLeads.get("Ville_City"));
// 				createPrimaryContact = zoho.crm.createRecord("Contacts",primaryContactMap);
// 				info createPrimaryContact ;
//  }
//   primaryContactMap.put("Layout","4846491000000091033"); --other
//   primaryContactMap.put("Layout","4846491000000339001"); --client
// client
// "Layout": {
//     "name": "Contact - Client",
//     "id": "4846491000000339001"
//   },
// other
//  "Layout": {
//     "name": "Contact - Others",
//     "id": "4846491000000091033"
//   },