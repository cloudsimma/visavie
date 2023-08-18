
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/
var emailval = ZDK.Page.getField('Courriel_Email').getValue();
console.log("Email val ", emailval);
li = ["~", "!", "#", "$", "%", "^", "&", "*", "(", ")", "+", "`", "-", "=", "{", "}", "[", "]", "\"", "|", ":", ";", "?", "/", ">", "<", ",", "'","_"];
for (var i = 0; i < li.length; i++)
{
if (emailval.includes(li[i]))
{
var val = true;
}
}
console.log(val);
if (val == true)
{
ZDK.Client.showAlert("Email should not contains any special characters");
return false;
}

