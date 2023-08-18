<%{
	%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.zc_live_adminbar div#liveHeader {
// 	display:none;
}

.form_content
{
	width: 50%;
	margin:auto;
}
.zcform_Send_Email, form[name="Send_Email"].label-left{
	width: 100% !important;
}

img {
  margin: 5% 0 6% 33%;
  
}

.zc-footer-wrapper{
	border-top: none;
}
#zc_inner_nav_menu{
    display: none;
}
.GotoResidence
{
// 	text-align: right;
// 	margin-right:20px;
}
.residenceLink span {
	display: inline-block;
// 	padding-left: 15px;
}
.residenceName
{
	margin-left:15px;
}
.content-right
{
	float: right;
    padding-top: 20px;
    padding-right: 15px;
}
@media screen and (min-width: 300px) {
  .form_content {
    width: 100%;
	margin:0;
	}
}
@media screen and (min-width: 600px) {
  .form_content {
    width: 50%;
	margin:auto;
	}
}	
.zc-form-fullheight .form-outer-wrapper .formContainer {
	padding-left:0px;
}
</style>
</head>
<body>
<div class="form_content">
<div class="heading"><img src="https://i.ibb.co/r709sfx/Visavie.png" alt="" width="250px"></div>
<br>
<div class = "residenceName">
<%
	deal_list = Deal_Residences[Deals_bidirectional_lookup == Deal_ID.toLong()];
	newrec = Deal_Residences[ID == DealResID.toLong()];
	url = "";
	deal_id_list = list();
	for each  resRec in deal_list
	{
		if(resRec.Residences.Status == "Active" || resRec.Residences.Status == "Active - Entente particulière/Active - Special agreement")
		{
			deal_id_list.add(resRec.ID);
		}
	}
	if(deal_id_list.size() > 0)
	{
		url = "https://creatorapp.zoho.com/lion_visavie/visavie/#Page:All_Residance?ID=" + deal_id_list + "&UserID=lion@visavie.com";
		//  ----- Old code --------//
		// 	if(newrec.count() > 0)
		// 	{
		// 		url = "https://creatorapp.zohopublic.com/lion_visavie/visavie/report-perma/All_Deal_Residences/0XJfCqJtkqGQSh7rCPepFbu1prwGHywAO1SObXQEEnCPdTaqytzFY9YO9qBEXxnS0GHSTdg9ETuMUVdnTHDBpaSwfBpf0W6tO0Q2?Deal_ID=" + newrec.Deal_ID;
		// 		url1 = "https://crm.zoho.com/crm/org746753262/tab/CustomModule3/" + newrec.Residences.CRM_ID;
		//  ----- Old code --------//
		%>
</div>
<div class="residenceLink">
<span><h2><%=newrec.Residences.Usual_name%></h2></span>
<span class="content-right"><a href=<%=url%>>Go to Residence List</a></span>
</div>
<div elName='zc-component' formLinkName='Send_Email' params='zc_Header=false&amp;Deal_ID=<%=input.Deal_ID%>&Language=<%=input.Language%>&Test_Send=<%=input.Test_Send%>&Residence_Number=<%=input.Residence_Number%>&amp;Contact_Email=<%=input.Contact_Email%>&amp;privateLink=R2p8nYRsud3Rv4n0hqNQD72742GaFWrY5uEOx8sAOaQ4wWGafE8DOzKPq6Fu76vz4RfgAPFWA1z7zMHQCFUThM1sJmgq8CJOeAbG'>Loading Form...</div>
</div>
<%
	}
	%>
</body> 
</html>
<%

}%>
