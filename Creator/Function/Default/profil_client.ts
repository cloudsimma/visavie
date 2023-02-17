void profile_client()
{
	itm = Visavie_Profile[ID == 4252979000000135003];
	if(itm.Profile_Client != null)
	{
		var2 = itm.Profile_Client.getSuffix("downqual = \"").getSuffix("image/").getPrefix("\"");
		if(!var2.isEmpty())
		{
			img2 = "<img height=20% width=100% src='https://creator.zohopublic.com/file/lion_visavie/visavie/All_Visavie_Profiles/" + itm.ID + "/Profile_Client/image-download/djbSN6PSp8wJVbHUy7bHYOTO2Y0rS6MwZB0a012FfdxSRXJTCAKGDVvaZR5qrM4UnQSbXAJCBNgsYGTThNVtnBSu1nfgtYZ0GgHC?filepath=/" + var2 + "'></img>";
			info var2;
		}
	}
}