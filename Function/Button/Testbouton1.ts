//get associated accounts to deal
idlist = multid.toList("|||");
info multid;
info idlist;
mail_list = List();
name_list = List();
for each  ele in idlist
{
	multinfo = zoho.crm.getRecordById("Accounts",ele);
	email = multinfo.get("Email");
	mail_list.add(email);
	name = multinfo.get("Account_Name");
	name_list.add(name);
}
data = Map();
data.put("toEmail",mail_list.toString());
data.put("toName",name_list.toString());
data.put("entityid",dealid);
data.put("fromEmail",user);
triggerFlow = invokeurl
[
	url :"https://flow.zoho.com/747757746/flow/webhook/incoming?zapikey=1001.82cb4787674048b0a7a8e976afee3393.bc04f2b7f522c051e9e712e7768035ab&isdebug=false"
	type :POST
	parameters:data
];
info triggerFlow;
return "Profil Email sent successfully";