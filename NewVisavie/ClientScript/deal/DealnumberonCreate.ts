
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

var field_obj = ZDK.Page.getField('Deal_Number');
field_obj.setReadOnly(true);

var deal1 = ZDK.Page.getField('Client_1_number');
deal1.setReadOnly(true);

var deal2 = ZDK.Page.getField('Client_2_number');
deal2.setReadOnly(true);
