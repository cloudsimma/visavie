
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/
// var user = ZDK.Page.getField("Owner").getValue();
// if (user.id != null)
// {
//     console.log("raja1 : "+ user.id);
//     var counselor = ZDK.Apps.CRM.Advisor.searchByCriteria("(Name:equals:Lion Test)");
// console.log("raja34456 : " + counselor[0]);
//     var field_obj = ZDK.Page.getField('Advisors');
//     field_obj.setValue(4846491000007333191);
//     console.log("raja : " + field_obj);
//     var tes = ZDK.Page.getField('General_comments').setValue("test");
//      console.log("raja : " + tes);
 
//}
var jio = ZDK.Apps.CRM.Users.fetch();
console.log(jio);
var hat = $Crm.user;
console.log("ff"+hat.id);
for (let i = 0; i < jio.length; i++) {
    if (jio[i].id == hat.id)
    {
       
        if (jio[i].profile.id == 4846491000001226349)
        {
            console.log("raja");
            
        }
        else
        {
            console.log("no");
           var field_obj = ZDK.Page.getField('Advisors');
field_obj.setReadOnly(true);
       }
  }
}
