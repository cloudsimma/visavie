if (ZDK.Page.getField('Deal_Name').getValue() == null)
{
    var field_obj = ZDK.Page.getField('Deal_Name');
    field_obj.setValue('Deal name auto updated');
}

var field_obj = ZDK.Page.getSubform("Subform_3").getField('Date_profile_sent');
//console.log("field_obj :" + field_obj);
field_obj.setReadOnly(true);

