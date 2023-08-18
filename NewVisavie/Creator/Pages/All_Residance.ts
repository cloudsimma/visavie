<%{
	DealID = ID.toList();
	%>
<style>
.zc-live-adminbar
{
display: none;
}
.pane_nav
{
display: none;	
}
.column-container
{
	width: 100%;
    height: 70px;
}
</style>
<%
	itm = Visavie_Profile[ID == 4252979000000135003];
	if(itm.Image != null)
	{
		var = itm.Image.getSuffix("downqual = \"").getSuffix("image/").getPrefix("\"");
		if(!var.isEmpty())
		{
			img = "<img height=60px width=185px src='https://creatorapp.zohopublic.com/file/lion_visavie/visavie/All_Visavie_Profiles/" + itm.ID + "/Image/image-download/djbSN6PSp8wJVbHUy7bHYOTO2Y0rS6MwZB0a012FfdxSRXJTCAKGDVvaZR5qrM4UnQSbXAJCBNgsYGTThNVtnBSu1nfgtYZ0GgHC?filepath=/" + var + "'></img>";
		}
	}
	%>
<p style="text-align:center;"><a href="https://visavie.com/"><%=img%></a></p>
 
<div elName='zc-component' viewLinkName='All_Deal_Residences?ID=[<%=DealID%>]' params='zc_Header=true&zc_AddRec=false&zc_Search=false'></div>
<%
	//<div elName='zc-component' viewLinkName='All_Deal_Residences?ID=[<%=DealID%>]' params='zc_Header=true&ID=<%=DealID%>'>Loading View...</div>

}%>
