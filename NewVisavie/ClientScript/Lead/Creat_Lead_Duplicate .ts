
ZDK.Client.showMessage("Le système recherche la base de données pour éviter des doublons/The system is looking in the data base to avoid duplicates");
var name1 = ZDK.Page.getField("First_Namee").getValue();
console.log(name1);
// if (name1.toLowerCase() == "test") {
    console.log("Start running");
 // Prospect/Lead (1)
    var name1 = ZDK.Page.getField("First_Namee").getValue();
    var mailid1 = ZDK.Page.getField("Courriel_Email").getValue();
    var wphone1 = ZDK.Page.getField("T_l_phone_travail").getValue();
    var wphoneExt1 = ZDK.Page.getField("Work_phone_Extension").getValue();
    var hphone1 = ZDK.Page.getField("T_l_phone_maison_Home_phone").getValue();
    var cphone1 = ZDK.Page.getField("Portable_Mobile").getValue();

    
// Contact primaire/Primary contact
   var name2  = ZDK.Page.getField("Prospect_Contact_1_First_Name").getValue();
   var mailid2 = ZDK.Page.getField("Prospect_Contact_1_Email").getValue();
   var wphone2 = ZDK.Page.getField("T_l_phone_travail_P1").getValue();
   var wphoneExt2 = ZDK.Page.getField("Work_phone_Extension_p").getValue();
   var hphone2 = ZDK.Page.getField("Prospect_Contact_1_Home_Phone").getValue();
   var cphone2 = ZDK.Page.getField("Prospect_Contact_1_Cellphone").getValue();
    
// // Prospect/Lead (2)
//    var name3  = ZDK.Page.getField("Prospect_First_Name2").getValue();
//    var mailid3 = ZDK.Page.getField("Prospect_Email2").getValue();
//    var wphone3 = ZDK.Page.getField("T_l_phone_travail_P").getValue();
//    var wphoneExt3 = ZDK.Page.getField("Work_phone_Extension_2").getValue();
//    var hphone3 = ZDK.Page.getField("Prospect_T_l_phone_maison_Home_phone").getValue();
//    var cphone3 = ZDK.Page.getField("Prospect_Portable_Mobile").getValue();


// // Contact secondaire/Secondary contact
//    var name4  = ZDK.Page.getField("Secondary_First_Name").getValue();
//    var mailid4 = ZDK.Page.getField("Secondary_Con_Email").getValue();
//    var wphone4 = ZDK.Page.getField("T_l_phone_travail_S").getValue();
//    var wphoneExt4 = ZDK.Page.getField("Work_phone_Extension_s").getValue();
//    var hphone4 = ZDK.Page.getField("Secondary_Home_Phone").getValue();
//    var cphone4 = ZDK.Page.getField("Secondary_Cellphone").getValue();

// // Contact RSSS/Healthcare network contact 
//    var name5  = ZDK.Page.getField("Healthcare_First_Name").getValue();
//    var mailid5 = ZDK.Page.getField("Healthcare_Email").getValue();
//    var wphone5 = ZDK.Page.getField("T_l_phone_travail_R").getValue();
//    var wphoneExt5 = ZDK.Page.getField("Work_phone_Extension_R").getValue();
//    var hphone5 = ZDK.Page.getField("Healthcare_Home_Phone").getValue();
//    var cphone5 = ZDK.Page.getField("Healthcare_contact_Cellphone").getValue()

   // paramlist = { "name1": name1, "mailid1": mailid1, "wphone1": wphone1, "Wextention1": wphoneExt1, "Hhone1": hphone1, "Cphone1": cphone1, "name2": name2, "mailid2": mailid2, "wphone2": wphone2, "Wextention2": wphoneExt2, "Hhone2": hphone2, "Cphone2": cphone2, "name3": name3, "mailid3": mailid3, "wphone3": wphone3, "Wextention3": wphoneExt3, "Hhone3": hphone3, "Cphone3": cphone3, "name4": name4, "mailid4": mailid4, "wphone4": wphone4, "Wextention4": wphoneExt4, "Hhone4": hphone4, "Cphone4": cphone4, "name5": name5, "mailid5": mailid5, "wphone5": wphone5, "Wextention5": wphoneExt5, "Hhone5": hphone5, "Cphone5": cphone5 };
    paramlist = { "name1": name1, "mailid1": mailid1, "wphone1": wphone1, "Wextention1": wphoneExt1, "Hhone1": hphone1, "Cphone1": cphone1, "name2": name2, "mailid2": mailid2, "wphone2": wphone2, "Wextention2": wphoneExt2, "Hhone2": hphone2, "Cphone2": cphone2 };
    console.log("param :" + JSON.stringify(paramlist) );
    console.log("CRM function - CheckDuplicateProspect1 - called ");

    var response = ZDK.Apps.CRM.Functions.execute("CheckDuplicateProspect1", paramlist);

   log("function execution completed");
    log("response ", response);
    var result_value = response.details.output;
    log("Result Value :", result_value);
       if(result_value != "" )
    {
       // ZDK.Client.showMessage(result_value);
           ZDK.Client.showAlert(result_value);
        return false;
        
   }
    
// }

























// //---------Prospect 1 - Mail ID-----------//
// var name1 = ZDK.Page.getField("First_Namee").getValue();
// var seprator = ",";
// var nxtLine = "<br>";
// var errorMsg = "";
// if (name1 != "")
// {
//     //----------Email validation Starts hear-------------//
//     var S_Mailid1 = ZDK.Page.getField("Courriel_Email").getValue();
//     if(S_Mailid1 != null && S_Mailid1 != "" ){
//         var dup_cont_mail = ZDK.Apps.CRM.Leads.searchByCriteria("((Courriel_Email:equals:" + S_Mailid1 + "))");
//         console.log("res :" + JSON.stringify(dup_cont_mail));
//         console.log(typeof dup_cont_mail);
//         pros1str = "";
//         for (i = 0; i < dup_cont_mail.length; i++)
//         {
//             console.log(dup_cont_mail[i]._id);
//             if (i == 0)
//             {
//                 var pros1str = "Prospect1 with this (" + dup_cont_mail[i]._Courriel_Email+") mail id already exist in below record :"+ dup_cont_mail[i]._id;
//             }
//             else
//             {
//                 var pros1str = pros1str + seprator + dup_cont_mail[i]._id;
//             }
//         }
//         errorMsg = errorMsg + pros1str;
//     }
//     //----------Email validation Ends Hear-------------//

//     //----------Wphone validation Starts hear-------------//
//     var S_Phone1 = ZDK.Page.getField("T_l_phone_travail").getValue();
//     if(S_Phone1 != null && S_Phone1 != "" ){
//         var dup_cont_Wphone = ZDK.Apps.CRM.Leads.searchByCriteria("((T_l_phone_travail:equals:" + S_Phone1 + "))");
//         pros1str = "";
//         for (i = 0; i < dup_cont_Wphone.length; i++)
//         {
//             if (i == 0)
//             {
//                 var pros1str = "Prospect1 with this (" + dup_cont_Wphone[i]._T_l_phone_travail_R+") mail id already exist in below record :"+ dup_cont_Wphone[i]._id;
//             }
//             else
//             {
//                 var pros1str = pros1str + seprator + dup_cont_Wphone[i]._id;
//             }
//         }
//         errorMsg = errorMsg + pros1str;
//     }
//     //----------Wphone validation Ends Hear-------------//

// }

 
