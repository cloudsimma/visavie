
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/
var Phoneval13 = ZDK.Page.getField('T_l_phone_travail').getValue();

console.log("Phone length", Phoneval13.length);

if(Phoneval13.length != 10)

{

    count = count + 1;

ZDK.Client.showAlert("Workphone should be of 10 numbers");

}

