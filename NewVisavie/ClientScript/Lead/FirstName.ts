
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/
var field_obj = ZDK.Page.getField('First_Namee');
field_obj.getValue();
var field_obj1 = ZDK.Page.getField('Last_Name');
field_obj1.getValue();
if (field_obj.getValue() != null && field_obj.getValue() != "" && field_obj1.getValue() != null && field_obj1.getValue() != "") {
    var contacts1 = ZDK.Apps.CRM.Contacts.searchByCriteria("((First_Name:equals:" + field_obj.getValue() + ")and(Last_Name:equals:" + field_obj1.getValue() + "))");
    // var str = "Already found the leads with this same name \n";
    if (contacts1.length > 0)
    {
        var str = "";
        for (var j = 0; j < contacts1.length; j++)
        
        {
            
            var count = j + 1;
            count = count + ". ";

            if (contacts1[j]._Layout.name == "Contact - Client")
            {  str = str + count +  contacts1[j]._Layout.name + "\n" + contacts1[j]._Client_Number + "\n"  + "\n" + contacts1[j]._First_Name +" "+ contacts1[j]._Last_Name + "               ";

            }
            else if (contacts1[j]._Layout.name == "Contact - Others")
            {
                str = str + count + contacts1[j]._Layout.name + "\n" + contacts1[j]._id + "\n" + contacts1[j]._First_Name + " " + contacts1[j]._Last_Name + "          ";
                
            }
            }
       ZDK.Client.showAlert(str);
    }
         
            
            //    console.log(contacts1[0]);
       
    }

