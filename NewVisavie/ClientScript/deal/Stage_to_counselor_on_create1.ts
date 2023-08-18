
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/
var field_stage = ZDK.Page.getField("Stage").getValue();

var user_id = $Crm.user.id;
console.log("user_id ", user_id);
var user_info = ZDK.Apps.CRM.Users.fetchById(user_id).role.name;
console.log("user_info ", user_info);
if (user_info == 'Conseillères') {
    if (field_stage == "Location enregistrée/Registered renting") {
        ZDK.Client.showAlert("Counselor doesn't have access to update the registered rental value");
        return false;
    }
}
