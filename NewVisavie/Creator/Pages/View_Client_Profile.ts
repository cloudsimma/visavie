<%{
	%>
<html>
<head>
<zc_mobileviewport width="1080px" />
<style>
.page-border
{
	border: 1px solid black;
}
div
{
	font-family: sans-serif;
	font-size: 12px;
}
span
{
	font-family: sans-serif;
	font-weight: normal;
	font-size: 12px;
}
.aligncenter {
    text-align: center;
	font-size:12px;
	font-weight:bold;
}
.pad{
	padding: -1px 20px;
} 
.bgclr
{
	background-color: #5B8C64;
    color:white;
    font-size:12px;
	 min-height: 8px;
   padding:6px 10px 13px 8px;
    margin: 0;
    font-weight:bold;
    font-family: sans-serif;
}
.bgclrorg
{
	background-color: #EE834E ;
    color:white;
    font-size:12px;
   min-height: 8px;
   padding:6px 10px 13px 8px;
    margin: 0;
    font-weight:bold;
    font-family: sans-serif;
}
.main_div_center
{
	margin: auto;
	width: 50% !important;
}
.page-alignment{
	width: 100% !important;
}
@media print {
    @page { 
		size: auto;
		margin: 8mm 8mm 8mm 8mm;
		border: 2px solid black;

    }
	.pagebreak { page-break-before: always; } /* page-break-after works, as well */
	.main_div_center
    {
       margin: 0;
       width: 100% !important;
    }
	
}
@media only screen and (max-width: 600px) {
  /* For mobile phones: */
	.main_div_center
	{
	   margin: auto;
	   width: 100% !important;
	}
}
.alignleft {
  float: left; width:50%;
}

.alignright {
  float: right;width:50%;
}
ul{
list-style-type:none;
margin: 5px;
min-height: 30px;
padding-left:10px;
}
li{
min-height: 10px;
}
.column {
  float: left;
  width: 33.33%;
 	padding: 0.25%;
  box-sizing: border-box;
}
</style>
</head>
<body>
<%
	deal = Deals[CRM_Deal_ID == input.dealCRMID];
	if(deal.ID > 0)
	{
		if(deal.Client_ID != null)
		{
			%>
<div class="main_div_center">
<!--<div class="w3-container">-->
<div class="page-border" >
<%
			itm = Visavie_Profile[ID == 4252979000000135003];
			if(itm.Image != null)
			{
				var = itm.Image.getSuffix("downqual = \"").getSuffix("image/").getPrefix("\"");
				if(!var.isEmpty())
				{
					img = "<img height=20% width=40% src='https://creatorapp.zohopublic.com/file/lion_visavie/visavie/All_Visavie_Profiles/" + itm.ID + "/Image/image-download/djbSN6PSp8wJVbHUy7bHYOTO2Y0rS6MwZB0a012FfdxSRXJTCAKGDVvaZR5qrM4UnQSbXAJCBNgsYGTThNVtnBSu1nfgtYZ0GgHC?filepath=/" + var + "'></img>";
				}
			}
			%>
<p class="aligncenter" style="margin-top: 5px;"><a href="https://visavie.com/"><%=img%></a></p>

<div class="aligncenter page-alignment" style="font-size:14px;"><%=if(Language == "English",Translation_Master[Actual_Content == "Profil Client/Client profile"].English,Translation_Master[Actual_Content == "Profil Client/Client profile"].French)%></div>
<%
			if(deal.Counselor != null)
			{
				%>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "CONSEILL(ÈRE)/COUNSELOR"].English,Translation_Master[Actual_Content == "CONSEILL(ÈRE)/COUNSELOR"].French)%></div>
<div style="display: inline-block; width:100%;">
<%
				if(deal.Counselor.Advisor_Name.isEmpty() != true)
				{
					%>
<div class="column"><ul><li style="font-weight:bold;">
<%=if(Language == "English",Translation_Master[Actual_Content == "Nom/Name"].English,Translation_Master[Actual_Content == "Nom/Name"].French)%></li>
<li><%=deal.Counselor.Advisor_Name%></li></ul></div>
<%
				}
				if(deal.Counselor.Mobile_phone_num.isEmpty() != true)
				{
					%>
<div class="column">
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Téléphone cellulaire/Cell phone"].English,Translation_Master[Actual_Content == "Téléphone cellulaire/Cell phone"].French)%></li>
  <li><%=deal.Counselor.Mobile_phone_num%></li></ul></div>
<%
				}
				if(deal.Counselor.Email.isEmpty() != true)
				{
					%>
<div class="column">
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Courriel/Email"].English,Translation_Master[Actual_Content == "Courriel/Email"].French)%></li>
  <li><%=deal.Counselor.Email%></li></ul></div>
<%
				}
				%>
</div>
<%
			}
			if(deal.Client_ID.Full_Name.isEmpty() != true || deal.Client_ID.Date_of_Birth.isEmpty() != true || deal.Deal_Contacts.isEmpty() != true || deal.Client_ID.Ville_City.isEmpty() != true)
			{
				%>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "CLIENT(E) 1/CLIENT 1"].English,Translation_Master[Actual_Content == "CLIENT(E) 1/CLIENT 1"].French)%></div>
<%
				fet_deal = Contacts[ID == deal.Client_ID];
				%>
<div style="display: inline-block; width:100%;" class="pad">
<div class="alignleft">
<%
				if(fet_deal.Full_Name.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Nom client(e)/Name of client"].English,Translation_Master[Actual_Content == "Nom client(e)/Name of client"].French)%></li>
<li><%=fet_deal.Full_Name%></li></ul>
<%
				}
				if(fet_deal.Name.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Nom de jeune fille/Maiden Name"].English,Translation_Master[Actual_Content == "Nom de jeune fille/Maiden Name"].French)%></li>
<li><%=fet_deal.Name%></li></ul>
<%
				}
				if(fet_deal.Date_of_Birth.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Date de naissance/Date of birth"].English,Translation_Master[Actual_Content == "Date de naissance/Date of birth"].French)%></li>
<li><%=fet_deal.Date_of_Birth%></li></ul>
<%
				}
				if(deal.Deal_Contacts.isEmpty() != true)
				{
					datamap = Map();
					for each  subform_contcat in deal.Deal_Contacts
					{
						fet_contcat = Contacts[ID == subform_contcat.Contacts];
						if(fet_contcat.Kind_of_contact != "Client" && fet_contcat.Kind_of_contact.isEmpty() != true)
						{
							datamap.put(fet_contcat.Full_Name,fet_contcat.Type_of_contact1);
						}
					}
					if(datamap.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;">
<%=if(Language == "English",Translation_Master[Actual_Content == "Personne(s) ressource(s)/Contact person(s)"].English,Translation_Master[Actual_Content == "Personne(s) ressource(s)/Contact person(s)"].French)%></li>
<%
						key_vals = datamap.keys();
						for each  key_val in key_vals
						{
							vals = datamap.get(key_val);
							if(vals != null)
							{
								%>
<li><%=key_val%>&nbsp;&nbsp;<%=vals%></li>
<%
							}
							else
							{
								%>
<li><%=key_val%></li>
<%
							}
						}
						%>
</ul>
<%
					}
				}
				if(fet_deal.Ville_City.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Demeure présentement/Currently living"].English,Translation_Master[Actual_Content == "Demeure présentement/Currently living"].French)%></li>
<li><%=fet_deal.Ville_City%></li></ul>
<%
				}
				%>
</div>
<div class="alignright">

<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Date réception du profil/Date profile received"].English,Translation_Master[Actual_Content == "Date réception du profil/Date profile received"].French)%></li>
<li><%=zoho.currentdate%></li></ul>

</div>
  </div>
<%
			}
			if(fet_deal.Type_s_of_accommodation_sought.isEmpty() != true || fet_deal.Client_type_s.isEmpty() != true || fet_deal.Notes_Accomodation.isEmpty() != true)
			{
				%>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "HÉBERGEMENT RECHERCHÉ/ACCOMODATION SOUGHT"].English,Translation_Master[Actual_Content == "HÉBERGEMENT RECHERCHÉ/ACCOMODATION SOUGHT"].French)%></div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(fet_deal.Client_type_s.isEmpty() == true && fet_deal.Type_s_of_accommodation_sought.isEmpty() == true)
				{
					%>
<div class="alignright" style="width: 100%;">
<%
					if(fet_deal.Notes_Accomodation.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes d’hébergement/Accomodation notes"].English,Translation_Master[Actual_Content == "Notes d’hébergement/Accomodation notes"].French)%></li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Accomodation%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(fet_deal.Notes_Accomodation.isEmpty() != true)
					{
						%>
<div class="alignright">
<%
						if(fet_deal.Notes_Accomodation.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes d’hébergement/Accomodation notes"].English,Translation_Master[Actual_Content == "Notes d’hébergement/Accomodation notes"].French)%> </li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Accomodation%></li></ul>
<%
						}
						%>
</div>	
 <div class="alignleft">
<%
						if(fet_deal.Type_s_of_accommodation_sought != null)
						{
							accomadation_list = List();
							for each  accomadation in fet_deal.Type_s_of_accommodation_sought
							{
								accomadation_list.add(accomadation);
							}
							if(!accomadation_list.isEmpty() == true)
							{
								%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Type(s) de logement/Accomodation type"].English,Translation_Master[Actual_Content == "Type(s) de logement/Accomodation type"].French)%></li>
<%
								for each  accom in accomadation_list
								{
									%>
<li><%=if(Language == "English",Translation_Master[Actual_Content == accom].English,Translation_Master[Actual_Content == accom].French)%></li>
<%
								}
								%>
</ul>
<%
							}
						}
						if(fet_deal.Client_type_s != null)
						{
							client_list = List();
							for each  client in fet_deal.Client_type_s
							{
								client_list.add(client);
							}
							if(!client_list.isEmpty() == true)
							{
								%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Type(s) de clients/Type(s) of client"].English,Translation_Master[Actual_Content == "Type(s) de clients/Type(s) of client"].French)%></li>
<%
								for each  Client in client_list
								{
									%>
<li><%=if(Language == "English",Translation_Master[Actual_Content == Client].English,Translation_Master[Actual_Content == Client].French)%></li>
<%
								}
								%>
</ul>
<%
							}
						}
						%>
</div>
<%
					}
				}
				%>
</div>
<%
			}
			if(fet_deal.Hygiene.isEmpty() != true || fet_deal.Dressing.isEmpty() != true || fet_deal.Nutrition.isEmpty() != true || fet_deal.Urinary_incontinence.isEmpty() != true || fet_deal.Faecal_incontinence.isEmpty() != true || fet_deal.Use_of_toilets.isEmpty() != true || fet_deal.Vision.isEmpty() != true || fet_deal.Hearing.isEmpty() != true || fet_deal.Communication1.isEmpty() != true || fet_deal.Notes_Autonomy_Assessment.isEmpty() != true)
			{
				%>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "ACTIVITÉS DE LA VIE QUOTIDIENNE/ACTIVITY OF DAILY LIVING"].English,Translation_Master[Actual_Content == "ACTIVITÉS DE LA VIE QUOTIDIENNE/ACTIVITY OF DAILY LIVING"].French)%></div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(fet_deal.Use_of_toilets.isEmpty() == true && fet_deal.Vision.isEmpty() == true && fet_deal.Hearing.isEmpty() == true && fet_deal.Communication1.isEmpty() == true && fet_deal.Faecal_incontinence.isEmpty() == true)
				{
					%>
<div class="alignleft" style="width: 100%;">
<%
					if(fet_deal.Hygiene.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Hygiène/Hygiene"].English,Translation_Master[Actual_Content == "Hygiène/Hygiene"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Hygiene].English,Translation_Master[Actual_Content == fet_deal.Hygiene].French)%></li></ul>
<%
					}
					if(fet_deal.Dressing.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Habillement/Dressing"].English,Translation_Master[Actual_Content == "Habillement/Dressing"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Dressing].English,Translation_Master[Actual_Content == fet_deal.Dressing].French)%></li></ul>
<%
					}
					if(fet_deal.Nutrition.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Alimentation/Nutrition"].English,Translation_Master[Actual_Content == "Alimentation/Nutrition"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Nutrition].English,Translation_Master[Actual_Content == fet_deal.Nutrition].French)%></li></ul>
<%
					}
					if(fet_deal.Urinary_incontinence.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Incontinence urinaire/Urinary incontinence"].English,Translation_Master[Actual_Content == "Incontinence urinaire/Urinary incontinence"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Urinary_incontinence].English,Translation_Master[Actual_Content == fet_deal.Urinary_incontinence].French)%></li></ul>
<%
					}
					if(fet_deal.Notes_Autonomy_Assessment.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes – AVQ/ADLs"].English,Translation_Master[Actual_Content == "Notes – AVQ/ADLs"].French)%></li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Autonomy_Assessment%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(fet_deal.Hygiene.isEmpty() != true || fet_deal.Dressing.isEmpty() != true || fet_deal.Nutrition.isEmpty() != true || fet_deal.Urinary_incontinence.isEmpty() != true || fet_deal.Notes_Autonomy_Assessment.isEmpty() != true)
					{
						%>
<div class="alignleft">
<%
						if(fet_deal.Hygiene.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Hygiène/Hygiene"].English,Translation_Master[Actual_Content == "Hygiène/Hygiene"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Hygiene].English,Translation_Master[Actual_Content == fet_deal.Hygiene].French)%></li></ul>
<%
						}
						if(fet_deal.Dressing.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Habillement/Dressing"].English,Translation_Master[Actual_Content == "Habillement/Dressing"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Dressing].English,Translation_Master[Actual_Content == fet_deal.Dressing].French)%></li></ul>
<%
						}
						if(fet_deal.Nutrition.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Alimentation/Nutrition"].English,Translation_Master[Actual_Content == "Alimentation/Nutrition"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Nutrition].English,Translation_Master[Actual_Content == fet_deal.Nutrition].French)%></li></ul>
<%
						}
						if(fet_deal.Urinary_incontinence.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Incontinence urinaire/Urinary incontinence"].English,Translation_Master[Actual_Content == "Incontinence urinaire/Urinary incontinence"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Urinary_incontinence].English,Translation_Master[Actual_Content == fet_deal.Urinary_incontinence].French)%></li></ul>
<%
						}
						if(fet_deal.Notes_Autonomy_Assessment.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes – AVQ/ADLs"].English,Translation_Master[Actual_Content == "Notes – AVQ/ADLs"].French)%></li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Autonomy_Assessment%></li></ul>
<%
						}
						%>
</div>	
 <div class="alignright">
<%
						if(fet_deal.Use_of_toilets.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Utilisation des toilettes/Use of toilets"].English,Translation_Master[Actual_Content == "Utilisation des toilettes/Use of toilets"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Use_of_toilets].English,Translation_Master[Actual_Content == fet_deal.Use_of_toilets].French)%></li></ul>
<%
						}
						if(fet_deal.Vision.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Vision"].English,Translation_Master[Actual_Content == "Vision"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Vision].English,Translation_Master[Actual_Content == fet_deal.Vision].French)%></li></ul>
<%
						}
						if(fet_deal.Hearing.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Audition/Hearing"].English,Translation_Master[Actual_Content == "Audition/Hearing"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Hearing].English,Translation_Master[Actual_Content == fet_deal.Hearing].French)%></li></ul>
<%
						}
						if(fet_deal.Communication1.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Communication"].English,Translation_Master[Actual_Content == "Communication"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Communication1].English,Translation_Master[Actual_Content == fet_deal.Communication1].French)%></li></ul>
<%
						}
						if(fet_deal.Faecal_incontinence.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Incontinence fécale/Faecal incontinence"].English,Translation_Master[Actual_Content == "Incontinence fécale/Faecal incontinence"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Faecal_incontinence].English,Translation_Master[Actual_Content == fet_deal.Faecal_incontinence].French)%></li></ul>
<%
						}
						%>
</div>
<%
					}
					if(fet_deal.Hygiene.isEmpty() == true && fet_deal.Dressing.isEmpty() == true && fet_deal.Nutrition.isEmpty() == true && fet_deal.Urinary_incontinence.isEmpty() == true && fet_deal.Notes_Autonomy_Assessment.isEmpty() == true)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(fet_deal.Use_of_toilets.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Utilisation des toilettes/Use of toilets"].English,Translation_Master[Actual_Content == "Utilisation des toilettes/Use of toilets"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Use_of_toilets].English,Translation_Master[Actual_Content == fet_deal.Use_of_toilets].French)%></li></ul>
<%
						}
						if(fet_deal.Vision.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Vision"].English,Translation_Master[Actual_Content == "Vision"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Vision].English,Translation_Master[Actual_Content == fet_deal.Vision].French)%></li></ul>
<%
						}
						if(fet_deal.Hearing.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Audition/Hearing"].English,Translation_Master[Actual_Content == "Audition/Hearing"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Hearing].English,Translation_Master[Actual_Content == fet_deal.Hearing].French)%></li></ul>
<%
						}
						if(fet_deal.Communication1.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Communication"].English,Translation_Master[Actual_Content == "Communication"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Communication1].English,Translation_Master[Actual_Content == fet_deal.Communication1].French)%></li></ul>
<%
						}
						if(fet_deal.Faecal_incontinence.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Incontinence fécale/Faecal incontinence"].English,Translation_Master[Actual_Content == "Incontinence fécale/Faecal incontinence"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Faecal_incontinence].English,Translation_Master[Actual_Content == fet_deal.Faecal_incontinence].French)%></li></ul>
<%
						}
						%>
</div>
<%
					}
				}
				%>
</div>
<%
			}
			if(fet_deal.Mobility_equipment.isEmpty() != true || fet_deal.Indoor_mobility.isEmpty() != true || fet_deal.Transfer_assistance.isEmpty() != true || fet_deal.Notes_Mobility.isEmpty() != true)
			{
				%>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "MOBILITÉ/MOBILITY"].English,Translation_Master[Actual_Content == "MOBILITÉ/MOBILITY"].French)%></div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(fet_deal.Indoor_mobility.isEmpty() == true && fet_deal.Transfer_assistance.isEmpty() == true)
				{
					%>
<div class="alignleft" style="width: 100%;">
<%
					if(fet_deal.Mobility_equipment.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Équipement de mobilité/Mobility equipment"].English,Translation_Master[Actual_Content == "Équipement de mobilité/Mobility equipment"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Mobility_equipment].English,Translation_Master[Actual_Content == fet_deal.Mobility_equipment].French)%></li></ul>
<%
					}
					if(fet_deal.Notes_Mobility.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes – Mobilité/Mobility"].English,Translation_Master[Actual_Content == "Notes – Mobilité/Mobility"].French)%></li>
 <li style="text-align:justify;"><%=fet_deal.Notes_Mobility%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(fet_deal.Mobility_equipment.isEmpty() != true || fet_deal.Notes_Mobility.isEmpty() != true)
					{
						%>
<div class="alignleft">
<%
						if(fet_deal.Mobility_equipment.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Équipement de mobilité/Mobility equipment"].English,Translation_Master[Actual_Content == "Équipement de mobilité/Mobility equipment"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Mobility_equipment].English,Translation_Master[Actual_Content == fet_deal.Mobility_equipment].French)%></li></ul>
<%
						}
						if(fet_deal.Notes_Mobility.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes – Mobilité/Mobility"].English,Translation_Master[Actual_Content == "Notes – Mobilité/Mobility"].French)%></li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Mobility%></li></ul>
<%
						}
						%>
</div>
  <div class="alignright">
<%
						if(fet_deal.Indoor_mobility.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Mobilité à l'intérieur/Indoor mobility"].English,Translation_Master[Actual_Content == "Mobilité à l'intérieur/Indoor mobility"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Indoor_mobility].English,Translation_Master[Actual_Content == fet_deal.Indoor_mobility].French)%></li></ul>
<%
						}
						if(fet_deal.Transfer_assistance.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Assistance aux transferts/Transfer assistance"].English,Translation_Master[Actual_Content == "Assistance aux transferts/Transfer assistance"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Transfer_assistance].English,Translation_Master[Actual_Content == fet_deal.Transfer_assistance].French)%></li></ul>
<%
						}
						%>
</div>
<%
					}
					if(fet_deal.Mobility_equipment.isEmpty() == true && fet_deal.Notes_Mobility.isEmpty() == true)
					{
						%>
<div class="alignleft" style= "width: 100%;">
<%
						if(fet_deal.Indoor_mobility.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Mobilité à l'intérieur/Indoor mobility"].English,Translation_Master[Actual_Content == "Mobilité à l'intérieur/Indoor mobility"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Indoor_mobility].English,Translation_Master[Actual_Content == fet_deal.Indoor_mobility].French)%></li></ul>
<%
						}
						if(fet_deal.Transfer_assistance.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Assistance aux transferts/Transfer assistance"].English,Translation_Master[Actual_Content == "Assistance aux transferts/Transfer assistance"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Transfer_assistance].English,Translation_Master[Actual_Content == fet_deal.Transfer_assistance].French)%></li></ul>
<%
						}
						%>
</div>
<%
					}
				}
				%>
</div>
<%
			}
			if(fet_deal.Medication_management.isEmpty() != true || fet_deal.Oxygene.isEmpty() != true || fet_deal.Insulin_injection.isEmpty() != true || fet_deal.Notes_Medication.isEmpty() != true)
			{
				%>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "MÉDICATION/MÉDICATION"].English,Translation_Master[Actual_Content == "MÉDICATION/MÉDICATION"].French)%></div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(fet_deal.Oxygene.isEmpty() == true && fet_deal.Insulin_injection.isEmpty() == true)
				{
					%>
<div class="alignleft" style= "width: 100%;">
<%
					if(fet_deal.Medication_management.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Distribution"].English,Translation_Master[Actual_Content == "Distribution"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Medication_management].English,Translation_Master[Actual_Content == fet_deal.Medication_management].French)%></li></ul>
<%
					}
					if(fet_deal.Notes_Medication.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes – Médication/Medication"].English,Translation_Master[Actual_Content == "Notes – Médication/Medication"].French)%></li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Medication%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(fet_deal.Medication_management.isEmpty() != true || fet_deal.Notes_Medication.isEmpty() != true)
					{
						%>
<div class="alignleft">
<%
						if(fet_deal.Medication_management.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Distribution"].English,Translation_Master[Actual_Content == "Distribution"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Medication_management].English,Translation_Master[Actual_Content == fet_deal.Medication_management].French)%></li></ul>
<%
						}
						if(fet_deal.Notes_Medication.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes – Médication/Medication"].English,Translation_Master[Actual_Content == "Notes – Médication/Medication"].French)%></li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Medication%></li></ul>
<%
						}
						%>
</div>
  <div class="alignright">
<%
						if(fet_deal.Oxygene.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Oxygène/Oxygene"].English,Translation_Master[Actual_Content == "Oxygène/Oxygene"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Oxygene].English,Translation_Master[Actual_Content == fet_deal.Oxygene].French)%></li></ul>
<%
						}
						if(fet_deal.Insulin_injection.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Injection insuline/Insulin injection"].English,Translation_Master[Actual_Content == "Injection insuline/Insulin injection"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Insulin_injection].English,Translation_Master[Actual_Content == fet_deal.Insulin_injection].French)%></li></ul>
<%
						}
						%>
</div>
<%
					}
					if(fet_deal.Medication_management.isEmpty() == true && fet_deal.Notes_Medication.isEmpty() == true)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(fet_deal.Oxygene.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Oxygène/Oxygene"].English,Translation_Master[Actual_Content == "Oxygène/Oxygene"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Oxygene].English,Translation_Master[Actual_Content == fet_deal.Oxygene].French)%></li></ul>
<%
						}
						if(fet_deal.Insulin_injection.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Injection insuline/Insulin injection"].English,Translation_Master[Actual_Content == "Injection insuline/Insulin injection"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Insulin_injection].English,Translation_Master[Actual_Content == fet_deal.Insulin_injection].French)%></li></ul>
<%
						}
						%>
</div>
<%
					}
				}
				%>
</div>
<%
			}
			if(fet_deal.Memory_impairment.isEmpty() != true || fet_deal.Orientation_disorder.isEmpty() != true || fet_deal.Type_s_of_neurocognitive_disorder.isEmpty() != true || fet_deal.Aggressiveness.isEmpty() != true || fet_deal.Wandering.isEmpty() != true || fet_deal.Notes_Neurocognitive_State.isEmpty() != true)
			{
				%>
<div style= "page-break-after:auto;"></div>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "ÉTAT NEUROCOGNITIF/NEUROCOGNITIVE STATE"].English,Translation_Master[Actual_Content == "ÉTAT NEUROCOGNITIF/NEUROCOGNITIVE STATE"].French)%></div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(fet_deal.Type_s_of_neurocognitive_disorder.isEmpty() == true && fet_deal.Aggressiveness.isEmpty() == true && fet_deal.Wandering.isEmpty() == true)
				{
					%>
<div class="alignleft" style= "width:100%;">
<%
					if(fet_deal.Memory_impairment.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Trouble de la mémoire/Memory impairment"].English,Translation_Master[Actual_Content == "Trouble de la mémoire/Memory impairment"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Memory_impairment].English,Translation_Master[Actual_Content == fet_deal.Memory_impairment].French)%></li></ul>
<%
					}
					if(fet_deal.Orientation_disorder.isEmpty() != true)
					{
						orientation_list = List();
						for each  orient in fet_deal.Orientation_disorder
						{
							orientation_list.add(orient);
						}
						if(!orientation_list.isEmpty() == true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Trouble de l'orientation/Orientation disorder"].English,Translation_Master[Actual_Content == "Trouble de l'orientation/Orientation disorder"].French)%></li>
<%
							for each  orie in orientation_list
							{
								%>
<li><%=if(Language == "English",Translation_Master[Actual_Content == orie].English,Translation_Master[Actual_Content == orie].French)%></li>
<%
							}
							%>
</ul>
<%
						}
					}
					if(fet_deal.Notes_Neurocognitive_State.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes - État neurocognitif/Neurocognitive state"].English,Translation_Master[Actual_Content == "Notes - État neurocognitif/Neurocognitive state"].French)%></li>
 <li style="text-align:justify;"><%=fet_deal.Notes_Neurocognitive_State%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(fet_deal.Memory_impairment.isEmpty() != true || fet_deal.Orientation_disorder.isEmpty() != true || fet_deal.Notes_Neurocognitive_State.isEmpty() != true)
					{
						%>
<div class="alignleft" >
<%
						if(fet_deal.Memory_impairment.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Trouble de la mémoire/Memory impairment"].English,Translation_Master[Actual_Content == "Trouble de la mémoire/Memory impairment"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Memory_impairment].English,Translation_Master[Actual_Content == fet_deal.Memory_impairment].French)%></li></ul>
<%
						}
						if(fet_deal.Orientation_disorder.isEmpty() != true)
						{
							orientation_list = List();
							for each  orient in fet_deal.Orientation_disorder
							{
								orientation_list.add(orient);
							}
							if(!orientation_list.isEmpty() == true)
							{
								%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Trouble de l'orientation/Orientation disorder"].English,Translation_Master[Actual_Content == "Trouble de l'orientation/Orientation disorder"].French)%></li>
<%
								for each  orie in orientation_list
								{
									%>
<li><%=if(Language == "English",Translation_Master[Actual_Content == orie].English,Translation_Master[Actual_Content == orie].French)%></li>
<%
								}
								%>
</ul>
<%
							}
						}
						if(fet_deal.Notes_Neurocognitive_State.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes - État neurocognitif/Neurocognitive state"].English,Translation_Master[Actual_Content == "Notes - État neurocognitif/Neurocognitive state"].French)%></li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Neurocognitive_State%></li></ul>
<%
						}
						%>
</div>
<div class="alignright">
<%
						if(fet_deal.Type_s_of_neurocognitive_disorder.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Type(s) de trouble neurocognitif/Type(s) of neurocognitive disorder"].English,Translation_Master[Actual_Content == "Type(s) de trouble neurocognitif/Type(s) of neurocognitive disorder"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Type_s_of_neurocognitive_disorder].English,Translation_Master[Actual_Content == fet_deal.Type_s_of_neurocognitive_disorder].French)%></li></ul>
<%
						}
						if(fet_deal.Aggressiveness.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Agressivité/Aggressiveness"].English,Translation_Master[Actual_Content == "Agressivité/Aggressiveness"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Aggressiveness].English,Translation_Master[Actual_Content == fet_deal.Aggressiveness].French)%></li></ul>
<%
						}
						if(fet_deal.Wandering.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Errance/Wandering"].English,Translation_Master[Actual_Content == "Errance/Wandering"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Wandering].English,Translation_Master[Actual_Content == fet_deal.Wandering].French)%></li></ul>
<%
						}
						%>
</div>
<%
					}
					if(fet_deal.Memory_impairment.isEmpty() == true && fet_deal.Orientation_disorder.isEmpty() == true && fet_deal.Notes_Neurocognitive_State.isEmpty() == true)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(fet_deal.Type_s_of_neurocognitive_disorder.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Type(s) de trouble neurocognitif/Type(s) of neurocognitive disorder"].English,Translation_Master[Actual_Content == "Type(s) de trouble neurocognitif/Type(s) of neurocognitive disorder"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Type_s_of_neurocognitive_disorder].English,Translation_Master[Actual_Content == fet_deal.Type_s_of_neurocognitive_disorder].French)%></li></ul>
<%
						}
						if(fet_deal.Aggressiveness.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Agressivité/Aggressiveness"].English,Translation_Master[Actual_Content == "Agressivité/Aggressiveness"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Aggressiveness].English,Translation_Master[Actual_Content == fet_deal.Aggressiveness].French)%></li></ul>
<%
						}
						if(fet_deal.Wandering.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Errance/Wandering"].English,Translation_Master[Actual_Content == "Errance/Wandering"].French)%></li></ul>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Wandering].English,Translation_Master[Actual_Content == fet_deal.Wandering].French)%></li>
<%
						}
						%>
</div>
<%
					}
				}
				%>
</div>
<%
			}
			if(fet_deal.Meals.isEmpty() != true || fet_deal.Laundry.isEmpty() != true || fet_deal.Housekeeping.isEmpty() != true || fet_deal.Notes_IADLs.isEmpty() != true)
			{
				%>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "ACTIVITÉS DE LA VIE DOMESTIQUE/INSTRUMENTAL ACTIVITIES OF DAILY LIVING"].English,Translation_Master[Actual_Content == "ACTIVITÉS DE LA VIE DOMESTIQUE/INSTRUMENTAL ACTIVITIES OF DAILY LIVING"].French)%></div>
<div style= "page-break-after:avoid;"></div>
				<div style="display: inline-block; width:100%;" class="pad">
<%
				if(fet_deal.Laundry.isEmpty() == true && fet_deal.Housekeeping.isEmpty() == true)
				{
					%>
<div class="alignleft" style="width:100%;">
<%
					if(fet_deal.Meals.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Repas/Meals"].English,Translation_Master[Actual_Content == "Repas/Meals"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Meals].English,Translation_Master[Actual_Content == fet_deal.Meals].French)%></li></ul>
<%
					}
					if(fet_deal.Notes_IADLs.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes – AVD/IADLs"].English,Translation_Master[Actual_Content == "Notes – AVD/IADLs"].French)%></li>
<li style="text-align:justify;"><%=fet_deal.Notes_IADLs%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(fet_deal.Meals.isEmpty() != true || fet_deal.Notes_IADLs.isEmpty() != true)
					{
						%>
<div class="alignleft" >
<%
						if(fet_deal.Meals.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Repas/Meals"].English,Translation_Master[Actual_Content == "Repas/Meals"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Meals].English,Translation_Master[Actual_Content == fet_deal.Meals].French)%></li></ul>
<%
						}
						if(fet_deal.Notes_IADLs.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes – AVD/IADLs"].English,Translation_Master[Actual_Content == "Notes – AVD/IADLs"].French)%></li>
<li style="text-align:justify;"><%=fet_deal.Notes_IADLs%></li></ul>
<%
						}
						%>
</div>
				<div class="alignright" >
<%
						if(fet_deal.Laundry != null)
						{
							laundry_list = List();
							for each  laundry in fet_deal.Laundry
							{
								laundry_list.add(laundry);
							}
							if(!laundry_list.isEmpty() == true)
							{
								%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Buanderie/Laundry"].English,Translation_Master[Actual_Content == "Buanderie/Laundry"].French)%></li>
<%
								for each  laun in laundry_list
								{
									%>
<li><%=if(Language == "English",Translation_Master[Actual_Content == laun].English,Translation_Master[Actual_Content == laun].French)%></li>
<%
								}
								%>
</ul>
<%
							}
						}
						if(fet_deal.Housekeeping.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Entretien ménager/Housekeeping"].English,Translation_Master[Actual_Content == "Entretien ménager/Housekeeping"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Housekeeping].English,Translation_Master[Actual_Content == fet_deal.Housekeeping].French)%></li></ul>
<%
						}
						%>
</div>
<%
					}
					if(fet_deal.Meals.isEmpty() == true && fet_deal.Notes_IADLs.isEmpty() == true)
					{
						%>
<div class="alignleft" style="width: 100%;" >
<%
						if(fet_deal.Laundry != null)
						{
							laundry_list = List();
							for each  laundry in fet_deal.Laundry
							{
								laundry_list.add(laundry);
							}
							if(!laundry_list.isEmpty() == true)
							{
								%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Buanderie/Laundry"].English,Translation_Master[Actual_Content == "Buanderie/Laundry"].French)%></li>
<%
								for each  laun in laundry_list
								{
									%>
<li><%=if(Language == "English",Translation_Master[Actual_Content == laun].English,Translation_Master[Actual_Content == laun].French)%></li>
<%
								}
								%>
</ul>
<%
							}
						}
						if(fet_deal.Housekeeping.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Entretien ménager/Housekeeping"].English,Translation_Master[Actual_Content == "Entretien ménager/Housekeeping"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Housekeeping].English,Translation_Master[Actual_Content == fet_deal.Housekeeping].French)%></li></ul>
<%
						}
						%>
</div>
<%
					}
				}
				%>
</div>
<%
			}
			if(fet_deal.Smoker.isEmpty() != true || fet_deal.Pet_Animal.isEmpty() != true || fet_deal.Protection_mandate.isEmpty() != true || fet_deal.Evaluation_s_available_Avail_rating_s.isEmpty() != true || fet_deal.Benefit_from_the_help_of_the_CLSC.isEmpty() != true || fet_deal.Notes_Other.isEmpty() != true || fet_deal.Procuration_disponible.isEmpty() != true)
			{
				%>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "AUTRE/OTHER"].English,Translation_Master[Actual_Content == "AUTRE/OTHER"].French)%></div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(fet_deal.Pet_Animal.isEmpty() == true && fet_deal.Protection_mandate.isEmpty() == true && fet_deal.Benefit_from_the_help_of_the_CLSC.isEmpty() == true)
				{
					%>
<div class="alignleft" style = "width:100%;">
<%
					if(fet_deal.Smoker.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Fumeur/Smoker"].English,Translation_Master[Actual_Content == "Fumeur/Smoker"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Smoker].English,Translation_Master[Actual_Content == fet_deal.Smoker].French)%></li></ul>
<%
					}
					if(fet_deal.Evaluation_s_available_Avail_rating_s != null)
					{
						evaluation_list = List();
						for each  avaluation in fet_deal.Evaluation_s_available_Avail_rating_s
						{
							evaluation_list.add(avaluation);
						}
						if(!evaluation_list.isEmpty() == true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Évaluation(s) disponible(s)/Available evaluation(s)"].English,Translation_Master[Actual_Content == "Évaluation(s) disponible(s)/Available evaluation(s)"].French)%></li>
<%
							for each  eval in evaluation_list
							{
								%>
<li><%=if(Language == "English",Translation_Master[Actual_Content == eval].English,Translation_Master[Actual_Content == eval].French)%></li>
<%
							}
							%>
</ul>
<%
						}
					}
					if(fet_deal.Procuration_disponible.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Mandat disponible/Mandate available"].English,Translation_Master[Actual_Content == "Mandat disponible/Mandate available"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Procuration_disponible].English,Translation_Master[Actual_Content == fet_deal.Procuration_disponible].French)%></li></ul>
<%
					}
					if(fet_deal.Notes_Other.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes – Autre/Other"].English,Translation_Master[Actual_Content == "Notes – Autre/Other"].French)%></li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Other%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(fet_deal.Smoker.isEmpty() != true || fet_deal.Evaluation_s_available_Avail_rating_s != null || fet_deal.Notes_Other.isEmpty() != true || fet_deal.Procuration_disponible.isEmpty() != true)
					{
						%>
<div class="alignleft">
<%
						if(fet_deal.Smoker.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Fumeur/Smoker"].English,Translation_Master[Actual_Content == "Fumeur/Smoker"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Smoker].English,Translation_Master[Actual_Content == fet_deal.Smoker].French)%></li></ul>
<%
						}
						if(fet_deal.Evaluation_s_available_Avail_rating_s != null)
						{
							evaluation_list = List();
							for each  avaluation in fet_deal.Evaluation_s_available_Avail_rating_s
							{
								evaluation_list.add(avaluation);
							}
							if(!evaluation_list.isEmpty() == true)
							{
								%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Évaluation(s) disponible(s)/Available evaluation(s)"].English,Translation_Master[Actual_Content == "Évaluation(s) disponible(s)/Available evaluation(s)"].French)%></li>
<%
								for each  eval in evaluation_list
								{
									%>
<li><%=if(Language == "English",Translation_Master[Actual_Content == eval].English,Translation_Master[Actual_Content == eval].French)%></li>
<%
								}
								%>
</ul>
<%
							}
						}
						if(fet_deal.Procuration_disponible.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Mandat disponible/Mandate available"].English,Translation_Master[Actual_Content == "Mandat disponible/Mandate available"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Procuration_disponible].English,Translation_Master[Actual_Content == fet_deal.Procuration_disponible].French)%></li></ul>
<%
						}
						if(fet_deal.Notes_Other.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Notes – Autre/Other"].English,Translation_Master[Actual_Content == "Notes – Autre/Other"].French)%></li>
<li style="text-align:justify;"><%=fet_deal.Notes_Other%></li></ul>
<%
						}
						%>
</div>
<div class="alignright">
<%
						if(fet_deal.Pet_Animal.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Animal de compagnie/Pet"].English,Translation_Master[Actual_Content == "Animal de compagnie/Pet"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Pet_Animal].English,Translation_Master[Actual_Content == fet_deal.Pet_Animal].French)%></li></ul>
<%
						}
						if(fet_deal.Protection_mandate.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Mandat de protection du statut/Status protection mandate"].English,Translation_Master[Actual_Content == "Mandat de protection du statut/Status protection mandate"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Protection_mandate].English,Translation_Master[Actual_Content == fet_deal.Protection_mandate].French)%></li></ul>
<%
						}
						if(fet_deal.Benefit_from_the_help_of_the_CLSC.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Aide du CLSC/HCCSS/Help from CLSC/HCCSS"].English,Translation_Master[Actual_Content == "Aide du CLSC/HCCSS/Help from CLSC/HCCSS"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Benefit_from_the_help_of_the_CLSC].English,Translation_Master[Actual_Content == fet_deal.Benefit_from_the_help_of_the_CLSC].French)%></li></ul>
<%
						}
						%>
</div>
<%
					}
					if(fet_deal.Smoker.isEmpty() == true && fet_deal.Evaluation_s_available_Avail_rating_s == null && fet_deal.Notes_Other.isEmpty() == true || fet_deal.Procuration_disponible.isEmpty() != true)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(fet_deal.Pet_Animal.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Animal de compagnie/Pet"].English,Translation_Master[Actual_Content == "Animal de compagnie/Pet"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Pet_Animal].English,Translation_Master[Actual_Content == fet_deal.Pet_Animal].French)%></li></ul>
<%
						}
						if(fet_deal.Protection_mandate.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Mandat de protection du statut/Status protection mandate"].English,Translation_Master[Actual_Content == "Mandat de protection du statut/Status protection mandate"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Protection_mandate].English,Translation_Master[Actual_Content == fet_deal.Protection_mandate].French)%></li></ul>
<%
						}
						if(fet_deal.Benefit_from_the_help_of_the_CLSC.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Aide du CLSC/HCCSS/Help from CLSC/HCCSS"].English,Translation_Master[Actual_Content == "Aide du CLSC/HCCSS/Help from CLSC/HCCSS"].French)%></li>
<li><%=if(Language == "English",Translation_Master[Actual_Content == fet_deal.Benefit_from_the_help_of_the_CLSC].English,Translation_Master[Actual_Content == fet_deal.Benefit_from_the_help_of_the_CLSC].French)%></li></ul>
<%
						}
						%>
</div>
<%
					}
				}
				%>
</div>
<%
			}
			if(fet_deal.Interests_specifics.isEmpty() != true)
			{
				%>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "COMMENTAIRES/COMMENTS"].English,Translation_Master[Actual_Content == "COMMENTAIRES/COMMENTS"].French)%></div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(fet_deal.Interests_specifics.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold; "><%=if(Language == "English",Translation_Master[Actual_Content == "Intérêts, particularités/Interests, specifics"].English,Translation_Master[Actual_Content == "Intérêts, particularités/Interests, specifics"].French)%></li>
<li  style="text-align: justify;"><%=fet_deal.Interests_specifics%></li></ul>
<%
				}
				%>
</div>
<%
			}
			%>
<div style= "page-break-before:auto;"></div>
<div class="bgclrorg"><%=if(Language == "English",Translation_Master[Actual_Content == "ENGAGEMENT DE RÉFÉRENCEMENT/REFERRAL COMMITMENT"].English,Translation_Master[Actual_Content == "ENGAGEMENT DE RÉFÉRENCEMENT/REFERRAL COMMITMENT"].French)%></div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; padding:10px;10px;">
<%
			if(Language == "French")
			{
				%>
<div style="text-align: justify;"><span>En recevant ce profil de la part de Visavie, comme stipulé dans la convention de services, la 
résidence s'engage à respecter la priorité de référencement. La date du courriel sera considérée 
comme la date de référence et aura préséance sur tout autre courriel reçu d'une autre entreprise 
de référencement. </span></div>
<br>
<%
			}
			else
			{
				%>
<div style="text-align: justify;"><span>By receiving this profile from Visavie, as stipulated in the service agreement, the residence 
undertakes to respect the priority of referral. The date of the email will be considered the 
reference date and will take precedence over any email received from another referral company. 
 </span></div>
<%
			}
			%>
</div>
<!--</div>-->
</div>
</div>
<%
		}
		%>
</body>
</html>
<%
	}

}%>
