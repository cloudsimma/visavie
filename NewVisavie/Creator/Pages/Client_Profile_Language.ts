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
	//if ( <variable> <opr> <expression> , <success_value> , <failure_value> ); 
	// 	deal = Deals[CRM_Deal_ID == DealCRMId];
	// 	Language == "English";
	// 	{
	deal = Deals[CRM_Deal_ID == "4846491000072354612"];
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

<!--<div class="aligncenter page-alignment" style="font-size:14px;">Profil Client/Client profile</div>-->
<div class="aligncenter page-alignment" style="font-size:14px;"><%=if(Language == "English",Translation_Master[Actual_Content == "Profil Client/Client profile"].English,Translation_Master[Actual_Content == "Profil Client/Client profile"].French)%></div>
<%
			if(deal.Counselor != null)
			{
				%>
<!--<div class="bgclr">CONSEILL(ÈRE)/COUNSELOR</div>-->
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
<ul><li style="font-weight:bold;">
<%=if(Language == "English",Translation_Master[Actual_Content == "Nom client(e)/Name of client"].English,Translation_Master[Actual_Content == "Nom client(e)/Name of client"].French)%></li>
<li><%=fet_deal.Full_Name%></li></ul>
<%
				}
				if(fet_deal.Name.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold;">
<%=if(Language == "English",Translation_Master[Actual_Content == "Nom de jeune fille/Maiden Name"].English,Translation_Master[Actual_Content == "Nom de jeune fille/Maiden Name"].French)%></li>
<li><%=fet_deal.Name%></li></ul>
<%
				}
				if(fet_deal.Date_of_Birth.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Date de naissance/Date of birth"].English,Translation_Master[Actual_Content == "Date de naissance/Date of birth"].French)%></li>
<li><%=fet_deal.Name%></li></ul>
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
<ul><li style="font-weight:bold;">
<%=if(Language == "English",Translation_Master[Actual_Content == "Demeure présentement/Currently living"].English,Translation_Master[Actual_Content == "Demeure présentement/Currently living"].French)%></li>
<li><%=fet_deal.Ville_City%></li></ul>
<%
				}
				%>
</div>
<div class="alignright">
<ul><li style="font-weight:bold;">
<%=if(Language == "English",Translation_Master[Actual_Content == "Date réception du profil/Date profile received"].English,Translation_Master[Actual_Content == "Date réception du profil/Date profile received"].French)%></li>
<li><%=zoho.currentdate%></li></ul>

</div>
  </div>
<%
			}
			if(fet_deal.Budget_range.isEmpty() != true || fet_deal.Preference_on_the_size_of_the_residence.isEmpty() != true || fet_deal.Type_s_of_accommodation_sought.isEmpty() != true || fet_deal.Client_type_s.isEmpty() != true || fet_deal.Notes_Accomodation.isEmpty() != true)
			{
				%>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "HÉBERGEMENT RECHERCHÉ/ACCOMODATION SOUGHT"].English,Translation_Master[Actual_Content == "HÉBERGEMENT RECHERCHÉ/ACCOMODATION SOUGHT"].French)%></div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(fet_deal.Client_type_s.isEmpty() == true && fet_deal.Type_s_of_accommodation_sought.isEmpty() == true)
				{
					%>
<div class="alignleft" style="width: 100%;">
<%
					if(fet_deal.Budget_range != null)
					{
						budget_list = List();
						for each  budget in fet_deal.Budget_range
						{
							budget_list.add(budget);
						}
						if(!budget_list.isEmpty() == true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Fourchette budgétaire/Budget range"].English,Translation_Master[Actual_Content == "Fourchette budgétaire/Budget range"].French)%></li>
<%
							for each  range in budget_list
							{
								%>
<li><%=range%></li>
<%
							}
							%>
</ul>
<%
						}
					}
					if(fet_deal.Preference_on_the_size_of_the_residence != null)
					{
						res_list = List();
						for each  res in fet_deal.Preference_on_the_size_of_the_residence
						{
							res_list.add(res);
						}
						if(!res_list.isEmpty() == true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Préférence sur la taille de la résidence/Preference on the size of the residence"].English,Translation_Master[Actual_Content == "Préférence sur la taille de la résidence/Preference on the size of the residence"].French)%></li>
<%
							for each  residence in res_list
							{
								%>
<li><%=residence%></li>
<%
							}
							%>
</ul>
<%
						}
					}
					if(fet_deal.Notes_Accomodation.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;">Notes – <%=if(Language == "English",Translation_Master[Actual_Content == "Notes – Hébergement/Accomodations"].English,Translation_Master[Actual_Content == "Notes – Hébergement/Accomodations"].French)%> </li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Accomodation%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(fet_deal.Budget_range.isEmpty() != true || fet_deal.Preference_on_the_size_of_the_residence.isEmpty() != true || fet_deal.Notes_Accomodation.isEmpty() != true)
					{
						%>
<div class="alignleft">
<%
						if(fet_deal.Budget_range != null)
						{
							budget_list = List();
							for each  budget in fet_deal.Budget_range
							{
								budget_list.add(budget);
							}
							if(!budget_list.isEmpty() == true)
							{
								%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Fourchette budgétaire/Budget range"].English,Translation_Master[Actual_Content == "Fourchette budgétaire/Budget range"].French)%></li>
<%
								for each  range in budget_list
								{
									%>
<li><%=range%></li>
<%
								}
								%>
</ul>
<%
							}
						}
						if(fet_deal.Preference_on_the_size_of_the_residence != null)
						{
							res_list = List();
							for each  res in fet_deal.Preference_on_the_size_of_the_residence
							{
								res_list.add(res);
							}
							if(!res_list.isEmpty() == true)
							{
								%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Préférence sur la taille de la résidence/Preference on the size of the residence"].English,Translation_Master[Actual_Content == "Préférence sur la taille de la résidence/Preference on the size of the residence"].French)%></li>
<%
								for each  residence in res_list
								{
									%>
<li><%=residence%></li>
<%
								}
								%>
</ul>
<%
							}
						}
						if(fet_deal.Notes_Accomodation.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Notes - <%=if(Language == "English",Translation_Master[Actual_Content == "Notes – Hébergement/Accomodations"].English,Translation_Master[Actual_Content == "Notes – Hébergement/Accomodations"].French)%></li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Accomodation%></li></ul>
<%
						}
						%>
</div>	
 <div class="alignright">
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
<li><%=accom%></li>
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
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Type(s) de client/Client type(s)"].English,Translation_Master[Actual_Content == "Type(s) de client/Client type(s)"].French)%></li>
<%
								for each  Client in client_list
								{
									%>
<li><%=Client%></li>
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
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Hygiène/Hygiene"].English,Translation_Master[Actual_Content == "Hygiène/Hygiene"].French)%>
<li><%=fet_deal.Hygiene%></li>
</li></ul>
<%
					}
					if(fet_deal.Dressing.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Habillement/Dressing"].English,Translation_Master[Actual_Content == "Habillement/Dressing"].French)%></li>
  <li><%=fet_deal.Dressing%></li></ul>
<%
					}
					if(fet_deal.Nutrition.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Alimentation/Nutrition"].English,Translation_Master[Actual_Content == "Alimentation/Nutrition"].French)%>
</li>
  <li><%=fet_deal.Nutrition%></li></ul>
<%
					}
					if(fet_deal.Urinary_incontinence.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Incontinence urinaire/Urinary incontinence"].English,Translation_Master[Actual_Content == "Incontinence urinaire/Urinary incontinence"].French)%></li>
  <li><%=fet_deal.Urinary_incontinence%></li></ul>
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
<li><%=fet_deal.Hygiene%></li></ul>
<%
						}
						if(fet_deal.Dressing.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Habillement/Dressing"].English,Translation_Master[Actual_Content == "Habillement/Dressing"].French)%></li>
  <li><%=fet_deal.Dressing%></li></ul>
<%
						}
						if(fet_deal.Nutrition.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Alimentation/Nutrition"].English,Translation_Master[Actual_Content == "Alimentation/Nutrition"].French)%></li>
  <li><%=fet_deal.Nutrition%></li></ul>
<%
						}
						if(fet_deal.Urinary_incontinence.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Incontinence urinaire/Urinary incontinence"].English,Translation_Master[Actual_Content == "Incontinence urinaire/Urinary incontinence"].French)%></li>
  <li><%=fet_deal.Urinary_incontinence%></li></ul>
<%
						}
						if(fet_deal.Notes_Autonomy_Assessment.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Notes – <%=if(Language == "English",Translation_Master[Actual_Content == "Notes – AVQ/ADLs"].English,Translation_Master[Actual_Content == "Notes – AVQ/ADLs"].French)%></li>
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
  <li><%=fet_deal.Use_of_toilets%></li></ul>
<%
						}
						if(fet_deal.Vision.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Vision"].English,Translation_Master[Actual_Content == "Vision"].French)%></li>
  <li><%=fet_deal.Vision%></li></ul>
<%
						}
						if(fet_deal.Hearing.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Audition/Hearing"].English,Translation_Master[Actual_Content == "Audition/Hearing"].French)%></li>
  <li><%=fet_deal.Hearing%></li></ul>
<%
						}
						if(fet_deal.Communication1.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Communication"].English,Translation_Master[Actual_Content == "Communication"].French)%></li>
  <li><%=fet_deal.Communication1%></li></ul>
<%
						}
						if(fet_deal.Faecal_incontinence.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Incontinence fécale/Faecal incontinence"].English,Translation_Master[Actual_Content == "Incontinence fécale/Faecal incontinence"].French)%></li>
  <li><%=fet_deal.Faecal_incontinence%></li></ul>
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
  <li><%=fet_deal.Use_of_toilets%></li></ul>
<%
						}
						if(fet_deal.Vision.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Vision"].English,Translation_Master[Actual_Content == "Vision"].French)%></li>
  <li><%=fet_deal.Vision%></li></ul>
<%
						}
						if(fet_deal.Hearing.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Audition/Hearing"].English,Translation_Master[Actual_Content == "Audition/Hearing"].French)%></li>
  <li><%=fet_deal.Hearing%></li></ul>
<%
						}
						if(fet_deal.Communication1.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Communication"].English,Translation_Master[Actual_Content == "Communication"].French)%></li>
  <li><%=fet_deal.Communication1%></li></ul>
<%
						}
						if(fet_deal.Faecal_incontinence.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Incontinence fécale/Faecal incontinence"].English,Translation_Master[Actual_Content == "Incontinence fécale/Faecal incontinence"].French)%></li>
  <li><%=fet_deal.Faecal_incontinence%></li></ul>
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
<li><%=fet_deal.Mobility_equipment%></li></ul>
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
<li><%=fet_deal.Mobility_equipment%></li></ul>
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
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Mobilité à l'intérieur/Indoor mobility"].English,Translation_Master[Actual_Content == "Mobilité à l'intérieur/Indoor mobility"].French)%>
</li>
  <li><%=fet_deal.Indoor_mobility%></li></ul>
<%
						}
						if(fet_deal.Transfer_assistance.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Assistance aux transferts/Transfer assistance"].English,Translation_Master[Actual_Content == "Assistance aux transferts/Transfer assistance"].French)%></li>
  <li><%=fet_deal.Transfer_assistance%></ul>
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
  <li><%=fet_deal.Indoor_mobility%></li></ul>
<%
						}
						if(fet_deal.Transfer_assistance.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Assistance aux transferts/Transfer assistance"].English,Translation_Master[Actual_Content == "Assistance aux transferts/Transfer assistance"].French)%></li>
  <li><%=fet_deal.Transfer_assistance%></ul>
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
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Distribution/Distribution"].English,Translation_Master[Actual_Content == "Distribution/Distribution"].French)%></li>
<li><%=fet_deal.Medication_management%></li></ul>
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
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Distribution/Distribution"].English,Translation_Master[Actual_Content == "Distribution/Distribution"].French)%></li>
<li><%=fet_deal.Medication_management%></li></ul>
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
  <li><%=fet_deal.Oxygene%></li></ul>
<%
						}
						if(fet_deal.Insulin_injection.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Injection insuline/Insulin injection"].English,Translation_Master[Actual_Content == "Injection insuline/Insulin injection"].French)%></li>
  <li><%=fet_deal.Insulin_injection%></ul>
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
  <li><%=fet_deal.Oxygene%></li></ul>
<%
						}
						if(fet_deal.Insulin_injection.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Injection insuline/Insulin injection"].English,Translation_Master[Actual_Content == "Injection insuline/Insulin injection"].French)%></li>
  <li><%=fet_deal.Insulin_injection%></ul>
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
<li><%=fet_deal.Memory_impairment%></li></ul>
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
<li><%=orie%></li>
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
<li><%=fet_deal.Memory_impairment%></li></ul>
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
<li><%=orie%></li>
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
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Type(s) troubles neuro./neuro. disorder"].English,Translation_Master[Actual_Content == "Type(s) troubles neuro./neuro. disorder"].French)%></li>
  <li><%=fet_deal.Type_s_of_neurocognitive_disorder%></li></ul>
<%
						}
						if(fet_deal.Aggressiveness.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Aggressiveness"].English,Translation_Master[Actual_Content == "Aggressiveness"].French)%></li>
  <li><%=fet_deal.Aggressiveness%></ul>
<%
						}
						if(fet_deal.Wandering.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Errance/Wandering"].English,Translation_Master[Actual_Content == "Errance/Wandering"].French)%></li>
  <li><%=fet_deal.Wandering%></ul>
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
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Type(s) troubles neuro./neuro. disorder"].English,Translation_Master[Actual_Content == "Type(s) troubles neuro./neuro. disorder"].French)%></li>
  <li><%=fet_deal.Type_s_of_neurocognitive_disorder%></li></ul>
<%
						}
						if(fet_deal.Aggressiveness.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Aggressiveness"].English,Translation_Master[Actual_Content == "Aggressiveness"].French)%></li>
  <li><%=fet_deal.Aggressiveness%></ul>
<%
						}
						if(fet_deal.Wandering.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Errance/Wandering"].English,Translation_Master[Actual_Content == "Errance/Wandering"].French)%></li>
  <li><%=fet_deal.Wandering%></ul>
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
<li><%=fet_deal.Meals%></li></ul>
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
<li><%=fet_deal.Meals%></li></ul>
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
<li><%=laun%></li>
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
				<li><%=fet_deal.Housekeeping%></li></ul>
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
<li><%=laun%></li>
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
				<li><%=fet_deal.Housekeeping%></li></ul>
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
			if(fet_deal.Smoker.isEmpty() != true || fet_deal.Pet_Animal.isEmpty() != true || fet_deal.Protection_mandate.isEmpty() != true || fet_deal.Evaluation_s_available_Avail_rating_s.isEmpty() != true || fet_deal.Benefit_from_the_help_of_the_CLSC.isEmpty() != true || fet_deal.Notes_Other.isEmpty() != true)
			{
				%>
<div class="bgclr"><%=if(Language == "English",Translation_Master[Actual_Content == "AUTRE/OTHER"].English,Translation_Master[Actual_Content == "AUTRE/OTHER"].French)%>/div>
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
<li><%=fet_deal.Smoker%></li></ul>
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
<li><%=eval%></li>
<%
							}
							%>
</ul>
<%
						}
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
					if(fet_deal.Smoker.isEmpty() != true || fet_deal.Evaluation_s_available_Avail_rating_s != null || fet_deal.Notes_Other.isEmpty() != true)
					{
						%>
<div class="alignleft">
<%
						if(fet_deal.Smoker.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Fumeur/Smoker"].English,Translation_Master[Actual_Content == "Fumeur/Smoker"].French)%></li>
<li><%=fet_deal.Smoker%></li></ul>
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
<li><%=eval%></li>
<%
								}
								%>
</ul>
<%
							}
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
  <li><%=fet_deal.Pet_Animal%></li></ul>
<%
						}
						if(fet_deal.Protection_mandate.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Mandat de protection du statut/Status protection mandate"].English,Translation_Master[Actual_Content == "Mandat de protection du statut/Status protection mandate"].French)%></li>
  <li><%=fet_deal.Protection_mandate%></li></ul>
<%
						}
						if(fet_deal.Benefit_from_the_help_of_the_CLSC.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Aide du CLSC/Help from CLSC"].English,Translation_Master[Actual_Content == "Aide du CLSC/Help from CLSC"].French)%></li>
  <li><%=fet_deal.Benefit_from_the_help_of_the_CLSC%></ul>
<%
						}
						%>
</div>
<%
					}
					if(fet_deal.Smoker.isEmpty() == true && fet_deal.Evaluation_s_available_Avail_rating_s == null && fet_deal.Notes_Other.isEmpty() == true)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(fet_deal.Pet_Animal.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Animal de compagnie/Pet"].English,Translation_Master[Actual_Content == "Animal de compagnie/Pet"].French)%></li>
  <li><%=fet_deal.Pet_Animal%></li></ul>
<%
						}
						if(fet_deal.Protection_mandate.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Mandat de protection du statut/Status protection mandate"].English,Translation_Master[Actual_Content == "Mandat de protection du statut/Status protection mandate"].French)%></li>
  <li><%=fet_deal.Protection_mandate%></li></ul>
<%
						}
						if(fet_deal.Benefit_from_the_help_of_the_CLSC.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;"><%=if(Language == "English",Translation_Master[Actual_Content == "Aide du CLSC/Help from CLSC"].English,Translation_Master[Actual_Content == "Aide du CLSC/Help from CLSC"].French)%></li>
  <li><%=fet_deal.Benefit_from_the_help_of_the_CLSC%></ul>
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
<div style="text-align: justify;"><span>En recevant ce profil de la part de Visavie, comme stipulé dans la convention de services, la 
résidence s'engage à respecter la priorité de référencement. La date du courriel sera considérée 
comme la date de référence et aura préséance sur tout autre courriel reçu d'une autre entreprise 
de référencement. </span></div>
<br>
<div style="text-align: justify;"><span>By receiving this profile from Visavie, as stipulated in the service agreement, the residence 
undertakes to respect the priority of referral. The date of the email will be considered the 
reference date and will take precedence over any email received from another referral company. 
 </span></div>
 </div>
<!--</div>-->
</div>
</div>
<%
		}
		if(deal.Client_2 != null)
		{
			%>
<br>
<div class="pagebreak"></div>
<br>
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

<div class="aligncenter page-alignment" style="font-size:14px;">Profil Client/Client profile</div>
<%
			if(deal.Counselor != null)
			{
				%>
<div class="bgclr">CONSEILL(ÈRE)/COUNSELOR</div>
<div style="display: inline-block; width:100%;">
<%
				if(deal.Counselor.Advisor_Name.isEmpty() != true)
				{
					%>
<div class="column"><ul><li style="font-weight:bold;">
Nom/Name</li>
<li><%=deal.Counselor.Advisor_Name%></li></ul></div>
<%
				}
				if(deal.Counselor.Mobile_phone_num.isEmpty() != true)
				{
					%>
<div class="column">
<ul><li style="font-weight:bold;">Téléphone cellulaire/Cell phone</li>
  <li><%=deal.Counselor.Mobile_phone_num%></li></ul></div>
<%
				}
				if(deal.Counselor.Email.isEmpty() != true)
				{
					%>
<div class="column">
<ul><li style="font-weight:bold;">Courriel/Email</li>
  <li><%=deal.Counselor.Email%></li></ul></div>
<%
				}
				%>
</div>
<%
			}
			if(deal.Client_2.Full_Name.isEmpty() != true || deal.Client_2.Date_of_Birth.isEmpty() != true || deal.Deal_Contacts.isEmpty() != true || deal.Client_2.Ville_City.isEmpty() != true)
			{
				%>
<div class="bgclr">CLIENT(E) 2/CLIENT 2</div>
<%
				fet_deal = Contacts[ID == deal.Client_2];
				%>
<div style="display: inline-block; width:100%;" class="pad">
<div class="alignleft">
<%
				if(fet_deal.Full_Name.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold;">
Nom client(e)/Name of client</li>
<li><%=fet_deal.Full_Name%></li></ul>
<%
				}
				if(fet_deal.Name.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold;">
Nom de jeune fille/Maiden Name</li>
<li><%=fet_deal.Name%></li></ul>
<%
				}
				if(fet_deal.Date_of_Birth.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold;">Date de naissance/Date of birth</li>
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
	Personne(s) ressource(s)/Contact person(s)</li>
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
<ul><li style="font-weight:bold;">
Demeure présentement/Currently living</li>
<li><%=fet_deal.Ville_City%></li></ul>
<%
				}
				%>
</div>
<div class="alignright">

<ul><li style="font-weight:bold;">
Date réception du profil/Date profile received</li>
<li><%=zoho.currentdate%></li></ul>

</div>
  </div>
<%
			}
			if(fet_deal.Budget_range.isEmpty() != true || fet_deal.Preference_on_the_size_of_the_residence.isEmpty() != true || fet_deal.Type_s_of_accommodation_sought.isEmpty() != true || fet_deal.Client_type_s.isEmpty() != true || fet_deal.Notes_Accomodation.isEmpty() != true)
			{
				%>
<div class="bgclr">HÉBERGEMENT RECHERCHÉ/ACCOMODATION SOUGHT</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(fet_deal.Client_type_s.isEmpty() == true && fet_deal.Type_s_of_accommodation_sought.isEmpty() == true)
				{
					%>
<div class="alignleft" style="width: 100%;">
<%
					if(fet_deal.Budget_range != null)
					{
						budget_list = List();
						for each  budget in fet_deal.Budget_range
						{
							budget_list.add(budget);
						}
						if(!budget_list.isEmpty() == true)
						{
							%>
<ul><li style="font-weight:bold;">Fourchette budgétaire/Budget range</li>
<%
							for each  range in budget_list
							{
								%>
<li><%=range%></li>
<%
							}
							%>
</ul>
<%
						}
					}
					if(fet_deal.Preference_on_the_size_of_the_residence != null)
					{
						res_list = List();
						for each  res in fet_deal.Preference_on_the_size_of_the_residence
						{
							res_list.add(res);
						}
						if(!res_list.isEmpty() == true)
						{
							%>
<ul><li style="font-weight:bold;">Préférence sur la taille de la résidence/Preference on the size of the residence</li>
<%
							for each  residence in res_list
							{
								%>
<li><%=residence%></li>
<%
							}
							%>
</ul>
<%
						}
					}
					if(fet_deal.Notes_Accomodation.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;">Notes – Hébergement/Accomodations </li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Accomodation%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(fet_deal.Budget_range.isEmpty() != true || fet_deal.Preference_on_the_size_of_the_residence.isEmpty() != true || fet_deal.Notes_Accomodation.isEmpty() != true)
					{
						%>
<div class="alignleft">
<%
						if(fet_deal.Budget_range != null)
						{
							budget_list = List();
							for each  budget in fet_deal.Budget_range
							{
								budget_list.add(budget);
							}
							if(!budget_list.isEmpty() == true)
							{
								%>
<ul><li style="font-weight:bold;">Fourchette budgétaire/Budget range</li>
<%
								for each  range in budget_list
								{
									%>
<li><%=range%></li>
<%
								}
								%>
</ul>
<%
							}
						}
						if(fet_deal.Preference_on_the_size_of_the_residence != null)
						{
							res_list = List();
							for each  res in fet_deal.Preference_on_the_size_of_the_residence
							{
								res_list.add(res);
							}
							if(!res_list.isEmpty() == true)
							{
								%>
<ul><li style="font-weight:bold;">Préférence sur la taille de la résidence/Preference on the size of the residence</li>
<%
								for each  residence in res_list
								{
									%>
<li><%=residence%></li>
<%
								}
								%>
</ul>
<%
							}
						}
						if(fet_deal.Notes_Accomodation.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Notes – Hébergement/Accomodations </li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Accomodation%></li></ul>
<%
						}
						%>
</div>	
 <div class="alignright">
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
<ul><li style="font-weight:bold;">Type(s) de logement/Accomodation type</li>
<%
								for each  accom in accomadation_list
								{
									%>
<li><%=accom%></li>
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
<ul><li style="font-weight:bold;">Type(s) de client/Client type(s)</li>
<%
								for each  Client in client_list
								{
									%>
<li><%=Client%></li>
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
<div class="bgclr">ACTIVITÉS DE LA VIE QUOTIDIENNE/ACTIVITY OF DAILY LIVING</div>
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
<ul><li style="font-weight:bold;">Hygiène/Hygiene</li>
<li><%=fet_deal.Hygiene%></li></ul>
<%
					}
					if(fet_deal.Dressing.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;">Habillement/Dressing</li>
  <li><%=fet_deal.Dressing%></li></ul>
<%
					}
					if(fet_deal.Nutrition.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;">Alimentation/Nutrition</li>
  <li><%=fet_deal.Nutrition%></li></ul>
<%
					}
					if(fet_deal.Urinary_incontinence.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;">Incontinence urinaire/Urinary incontinence</li>
  <li><%=fet_deal.Urinary_incontinence%></li></ul>
<%
					}
					if(fet_deal.Notes_Autonomy_Assessment.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;">Notes – AVQ/ADLs</li>
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
<ul><li style="font-weight:bold;">Hygiène/Hygiene</li>
<li><%=fet_deal.Hygiene%></li></ul>
<%
						}
						if(fet_deal.Dressing.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Habillement/Dressing</li>
  <li><%=fet_deal.Dressing%></li></ul>
<%
						}
						if(fet_deal.Nutrition.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Alimentation/Nutrition</li>
  <li><%=fet_deal.Nutrition%></li></ul>
<%
						}
						if(fet_deal.Urinary_incontinence.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Incontinence urinaire/Urinary incontinence</li>
  <li><%=fet_deal.Urinary_incontinence%></li></ul>
<%
						}
						if(fet_deal.Notes_Autonomy_Assessment.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Notes – AVQ/ADLs</li>
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
<ul><li style="font-weight:bold;">Utilisation des toilettes/Use of toilets</li>
  <li><%=fet_deal.Use_of_toilets%></li></ul>
<%
						}
						if(fet_deal.Vision.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Vision</li>
  <li><%=fet_deal.Vision%></li></ul>
<%
						}
						if(fet_deal.Hearing.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Audition/Hearing</li>
  <li><%=fet_deal.Hearing%></li></ul>
<%
						}
						if(fet_deal.Communication1.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Communication</li>
  <li><%=fet_deal.Communication1%></li></ul>
<%
						}
						if(fet_deal.Faecal_incontinence.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Incontinence fécale/Faecal incontinence</li>
  <li><%=fet_deal.Faecal_incontinence%></li></ul>
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
<ul><li style="font-weight:bold;">Utilisation des toilettes/Use of toilets</li>
  <li><%=fet_deal.Use_of_toilets%></li></ul>
<%
						}
						if(fet_deal.Vision.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Vision</li>
  <li><%=fet_deal.Vision%></li></ul>
<%
						}
						if(fet_deal.Hearing.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Audition/Hearing</li>
  <li><%=fet_deal.Hearing%></li></ul>
<%
						}
						if(fet_deal.Communication1.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Communication</li>
  <li><%=fet_deal.Communication1%></li></ul>
<%
						}
						if(fet_deal.Faecal_incontinence.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Incontinence fécale/Faecal incontinence</li>
  <li><%=fet_deal.Faecal_incontinence%></li></ul>
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
<div class="bgclr">MOBILITÉ/MOBILITY</div>
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
<ul><li style="font-weight:bold;">Équipement pour mobilité/Mobility equipment</li>
<li><%=fet_deal.Mobility_equipment%></li></ul>
<%
					}
					if(fet_deal.Notes_Mobility.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;">Notes – Mobilité/Mobility</li>
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
<ul><li style="font-weight:bold;">Équipement pour mobilité/Mobility equipment</li>
<li><%=fet_deal.Mobility_equipment%></li></ul>
<%
						}
						if(fet_deal.Notes_Mobility.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Notes – Mobilité/Mobility</li>
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
<ul><li style="font-weight:bold;">Mobilité à l'intérieur/Indoor mobility</li>
  <li><%=fet_deal.Indoor_mobility%></li></ul>
<%
						}
						if(fet_deal.Transfer_assistance.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Assistance aux transferts/Transfer assistance</li>
  <li><%=fet_deal.Transfer_assistance%></ul>
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
<ul><li style="font-weight:bold;">Mobilité à l'intérieur/Indoor mobility</li>
  <li><%=fet_deal.Indoor_mobility%></li></ul>
<%
						}
						if(fet_deal.Transfer_assistance.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Assistance aux transferts/Transfer assistance</li>
  <li><%=fet_deal.Transfer_assistance%></ul>
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
<div class="bgclr">MÉDICATION/MÉDICATION</div>
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
<ul><li style="font-weight:bold;">Distribution/Distribution</li>
<li><%=fet_deal.Medication_management%></li></ul>
<%
					}
					if(fet_deal.Notes_Medication.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;">Notes – Médication/Medication</li>
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
<ul><li style="font-weight:bold;">Distribution/Distribution</li>
<li><%=fet_deal.Medication_management%></li></ul>
<%
						}
						if(fet_deal.Notes_Medication.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Notes – Médication/Medication</li>
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
<ul><li style="font-weight:bold;">Oxygène/Oxygene</li>
  <li><%=fet_deal.Oxygene%></li></ul>
<%
						}
						if(fet_deal.Insulin_injection.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Injection insuline/Insulin injection</li>
  <li><%=fet_deal.Insulin_injection%></ul>
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
<ul><li style="font-weight:bold;">Oxygène/Oxygene</li>
  <li><%=fet_deal.Oxygene%></li></ul>
<%
						}
						if(fet_deal.Insulin_injection.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Injection insuline/Insulin injection</li>
  <li><%=fet_deal.Insulin_injection%></ul>
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
			if(fet_deal.Memory_impairment.isEmpty() != true || fet_deal.Orientation_disorder.isEmpty() != true || fet_deal.Type_s_of_neurocognitive_disorder.isEmpty() != true || fet_deal.Aggressiveness.isEmpty() != true || fet_deal.Wandering.isEmpty() != true && fet_deal.Notes_Neurocognitive_State.isEmpty() != true)
			{
				%>
<div style= "page-break-after:auto;"></div>
<div class="bgclr">ÉTAT NEUROCOGNITIF/NEUROCOGNITIVE STATE</div>
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
<ul><li style="font-weight:bold;">Trouble de la mémoire/Memory impairment</li>
<li><%=fet_deal.Memory_impairment%></li></ul>
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
<ul><li style="font-weight:bold;">Trouble de l'orientation/Orientation disorder</li>
<%
							for each  orie in orientation_list
							{
								%>
<li><%=orie%></li>
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
<ul><li style="font-weight:bold;">Notes - État neurocognitif/Neurocognitive state</li>
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
<ul><li style="font-weight:bold;">Trouble de la mémoire/Memory impairment</li>
<li><%=fet_deal.Memory_impairment%></li></ul>
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
<ul><li style="font-weight:bold;">Trouble de l'orientation/Orientation disorder</li>
<%
								for each  orie in orientation_list
								{
									%>
<li><%=orie%></li>
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
<ul><li style="font-weight:bold;">Notes - État neurocognitif/Neurocognitive state</li>
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
<ul><li style="font-weight:bold;">Type(s) troubles neuro./neuro. disorder</li>
  <li><%=fet_deal.Type_s_of_neurocognitive_disorder%></li></ul>
<%
						}
						if(fet_deal.Aggressiveness.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Aggressiveness</li>
  <li><%=fet_deal.Aggressiveness%></ul>
<%
						}
						if(fet_deal.Wandering.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Errance/Wandering</li>
  <li><%=fet_deal.Wandering%></ul>
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
<ul><li style="font-weight:bold;">Type(s) troubles neuro./neuro. disorder</li>
  <li><%=fet_deal.Type_s_of_neurocognitive_disorder%></li></ul>
<%
						}
						if(fet_deal.Aggressiveness.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Aggressiveness</li>
  <li><%=fet_deal.Aggressiveness%></ul>
<%
						}
						if(fet_deal.Wandering.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Errance/Wandering</li>
  <li><%=fet_deal.Wandering%></ul>
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
<div class="bgclr">ACTIVITÉS DE LA VIE DOMESTIQUE/INSTRUMENTAL ACTIVITIES OF DAILY LIVING</div>
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
<ul><li style="font-weight:bold;">Repas/Meals</li>
<li><%=fet_deal.Meals%></li></ul>
<%
					}
					if(fet_deal.Notes_IADLs.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;">Notes – AVD/IADLs</li>
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
<ul><li style="font-weight:bold;">Repas/Meals</li>
<li><%=fet_deal.Meals%></li></ul>
<%
						}
						if(fet_deal.Notes_IADLs.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Notes – AVD/IADLs</li>
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
<ul><li style="font-weight:bold;">Buanderie/Laundry</li>
<%
								for each  laun in laundry_list
								{
									%>
<li><%=laun%></li>
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
<ul><li style="font-weight:bold;">Entretien ménager/Housekeeping</li>
				<li><%=fet_deal.Housekeeping%></li></ul>
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
<ul><li style="font-weight:bold;">Buanderie/Laundry</li>
<%
								for each  laun in laundry_list
								{
									%>
<li><%=laun%></li>
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
<ul><li style="font-weight:bold;">Entretien ménager/Housekeeping</li>
				<li><%=fet_deal.Housekeeping%></li></ul>
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
			if(fet_deal.Smoker.isEmpty() != true || fet_deal.Pet_Animal.isEmpty() != true || fet_deal.Protection_mandate.isEmpty() != true || fet_deal.Evaluation_s_available_Avail_rating_s.isEmpty() != true || fet_deal.Benefit_from_the_help_of_the_CLSC.isEmpty() != true || fet_deal.Notes_Other.isEmpty() != true)
			{
				%>
<div class="bgclr">AUTRE/OTHER</div>
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
<ul><li style="font-weight:bold;">Fumeur/Smoker</li>
<li><%=fet_deal.Smoker%></li></ul>
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
<ul><li style="font-weight:bold;">Évaluation(s) disponible(s)/Available evaluation(s)</li>
<%
							for each  eval in evaluation_list
							{
								%>
<li><%=eval%></li>
<%
							}
							%>
</ul>
<%
						}
					}
					if(fet_deal.Notes_Other.isEmpty() != true)
					{
						%>
<ul><li style="font-weight:bold;">Notes – Autre/Other</li>
  <li style="text-align:justify;"><%=fet_deal.Notes_Other%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(fet_deal.Smoker.isEmpty() != true || fet_deal.Evaluation_s_available_Avail_rating_s != null || fet_deal.Notes_Other.isEmpty() != true)
					{
						%>
<div class="alignleft">
<%
						if(fet_deal.Smoker.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Fumeur/Smoker</li>
<li><%=fet_deal.Smoker%></li></ul>
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
<ul><li style="font-weight:bold;">Évaluation(s) disponible(s)/Available evaluation(s)</li>
<%
								for each  eval in evaluation_list
								{
									%>
<li><%=eval%></li>
<%
								}
								%>
</ul>
<%
							}
						}
						if(fet_deal.Notes_Other.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Notes – Autre/Other</li>
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
<ul><li style="font-weight:bold;">Animal de compagnie/Pet</li>
  <li><%=fet_deal.Pet_Animal%></li></ul>
<%
						}
						if(fet_deal.Protection_mandate.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Mandat de protection du statut/Status protection mandate</li>
  <li><%=fet_deal.Protection_mandate%></li></ul>
<%
						}
						if(fet_deal.Benefit_from_the_help_of_the_CLSC.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Aide du CLSC/Help from CLSC</li>
  <li><%=fet_deal.Benefit_from_the_help_of_the_CLSC%></ul>
<%
						}
						%>
</div>
<%
					}
					if(fet_deal.Smoker.isEmpty() == true && fet_deal.Evaluation_s_available_Avail_rating_s == null && fet_deal.Notes_Other.isEmpty() == true)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(fet_deal.Pet_Animal.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Animal de compagnie/Pet</li>
  <li><%=fet_deal.Pet_Animal%></li></ul>
<%
						}
						if(fet_deal.Protection_mandate.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Mandat de protection du statut/Status protection mandate</li>
  <li><%=fet_deal.Protection_mandate%></li></ul>
<%
						}
						if(fet_deal.Benefit_from_the_help_of_the_CLSC.isEmpty() != true)
						{
							%>
<ul><li style="font-weight:bold;">Aide du CLSC/Help from CLSC</li>
  <li><%=fet_deal.Benefit_from_the_help_of_the_CLSC%></ul>
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
<div class="bgclr">COMMENTAIRES/COMMENTS</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(fet_deal.Interests_specifics.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold; ">Intérêts, particularités/Interests, specifics</li>
<li  style="text-align: justify;"><%=fet_deal.Interests_specifics%></li></ul>
<%
				}
				%>
</div>
<%
			}
			%>
<div style= "page-break-before:auto;"></div>
<div class="bgclrorg">ENGAGEMENT DE RÉFÉRENCEMENT/REFERRAL COMMITMENT</div>
<div style= "page-break-before:avoid;"></div>
<div style="display: inline-block; padding:10px;10px;">	
<div style="text-align: justify;"><span>En recevant ce profil de la part de Visavie, comme stipulé dans la convention de services, la 
résidence s'engage à respecter la priorité de référencement. La date du courriel sera considérée 
comme la date de référence et aura préséance sur tout autre courriel reçu d'une autre entreprise 
de référencement. </span></div>
<br>
<div style="text-align: justify;"><span>By receiving this profile from Visavie, as stipulated in the service agreement, the residence 
undertakes to respect the priority of referral. The date of the email will be considered the 
reference date and will take precedence over any email received from another referral company. 
 </span></div>
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
