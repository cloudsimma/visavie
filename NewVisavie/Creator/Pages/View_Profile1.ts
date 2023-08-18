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
<div elName='zc-component' formLinkName='View_Profile' params='zc_Header=false&amp;Deal_ID=<%=input.dealID%>&amp;Default_View_Language=<%=input.ViewLanguage%>&amp;From_CRM=<%=input.fromCRM%>&amp;privateLink=SbX8edY6Ufvv394K1XjEdjWftBKUppRhxPmZdnfsU8JgzVCVHAx0fwxnfO0NtqNgSSOA0e8saFr6TfhYDOe97hH2ZhNUeq9hs2Yw'>Loading Form...</div>
</div>
</body> 
</html>
<%

}%>
