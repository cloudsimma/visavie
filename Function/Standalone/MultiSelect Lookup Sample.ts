clientList = list();
// ---- First Data ---
mp = Map();
mp.put("id","4846491000002794013");
clientMap = Map();
clientMap.put("Clients",mp);
clientList.add(clientMap);
// --- Second Data ---- 
mp = Map();
mp.put("id","4846491000001305089");
clientMap = Map();
clientMap.put("Clients",mp);
clientList.add(clientMap);
//////////////
info clientList;
dataMap = Map();
dataMap.put("Clients",clientList);
dataMap.put("Name","TestCase");
finalMap = Map();
datalList = list();
datalList.add(dataMap);
finalMap.put("data",datalList);
response = invokeurl
[
	url :"https://www.zohoapis.com/crm/v2.1/Request_invoice"
	type :POST
	parameters:finalMap.toString()
	connection:"crm_visavie"
];
info response;
return "";