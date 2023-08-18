
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

var client1 = ZDK.Page.getField("Contact").getValue();
if (client1 != null) {
    console.log(client1);
    check = "id:equals:" + client1.id;
    contactRec = ZDK.Apps.CRM.Contacts.searchByCriteria(check);
    console.log("rec:" + JSON.stringify(contactRec));
    var contactRows = ZDK.Page.getField("Contact_persons").getValue();
    console.log("contactRows :" + contactRows);
    let lineItemsPayload = [];
    console.log("client1 :" + client1);
    lineItem =
    {

        "Home_Phone": 99887744
    };
    lineItemsPayload.push(lineItem);
    console.log("list values :" + JSON.stringify(lineItemsPayload));
    ZDK.Page.getField('Contact_persons').setValue(lineItemsPayload);
    // "contact": client1,
    //     "Kind_of_Contact": contactRec[0]._Contact_Type,
    //     "Type_of_Contact_s": contactRec[0]._Type_de_client,
    //     "Email": contactRec[0]._E_mail_Courriel_1,
    //     "Work_Phone": contactRec[0]._T_l_phone_maison,
    //     "Work_Phone_Extension": contactRec[0]._Work_Phone_Extension,
    //     "Cell_Phone": contactRec[0]._Cellulaire,
}
