openUrl("https://creatorapp.zoho.com/lion_visavie/visavie/#Page:Demarches?contactID=" + contactID,"new window");
// response_residence = zoho.creator.getRecords("lion_visavie","visavie","All_Residence_Contacts","Contact_CRM_ID == \"" + contactID + "\"",1,200,"zohocreator");
// // info response;
// response_deals = zoho.creator.getRecords("lion_visavie","visavie","All_Deal_Contacts","CRM_ID == \"" + contactID + "\"",1,200,"zohocreator");
// // info response_deals;
// response_homecare = zoho.creator.getRecords("lion_visavie","visavie","All_Homecare_Deal_Contacts","CRM_ID == \"" + contactID + "\"",1,200,"zohocreator");
// // info response_homecare ;
// if(response_residence.get("code") == 3000)
// {
// 	openUrl("https://creatorapp.zoho.com/lion_visavie/visavie/#Page:Demarches?contactID=" + contactID,"new window");
// }
// else if(response_deals.get("code") == 3000)
// {
// 	openUrl("https://creatorapp.zoho.com/lion_visavie/visavie/#Page:Demarches?contactID=" + contactID,"new window");
// }
// else if(response_homecare.get("code") == 3000)
// {
// 	openUrl("https://creatorapp.zoho.com/lion_visavie/visavie/#Page:Demarches?contactID=" + contactID,"new window");
// }
// else
// {
// 	return "The contact is not associated with any Démarches or Résidences";
// }
return "";
