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
		margin: 0mm 0 0mm 0;
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
	deal = Home_Care_Deal[CRM_HomeCareDealId == HomeCareDealId];
	if(deal.ID > 0)
	{
		if(deal.Client != null)
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

<div class="aligncenter page-alignment" style="font-size:14px;">Profil Client/Client profile</div>
<%
			if(deal.Conseiller_Counselor != null)
			{
				%>
<div class="bgclr">CONSEILL(ÈRE)/COUNSELOR</div>
<div style="display: inline-block; width:100%;">
<%
				if(deal.Conseiller_Counselor.Advisor_Name.isEmpty() != true)
				{
					%>
<div class="column"><ul><li style="font-weight:bold;">
Nom/Name</li>
<li><%=deal.Conseiller_Counselor.Advisor_Name%></li></ul></div>
<%
				}
				if(deal.Conseiller_Counselor.Mobile_phone_num.isEmpty() != true)
				{
					%>
<div class="column">
<ul><li style="font-weight:bold;">Téléphone cellulaire/Cell phone</li>
  <li><%=deal.Conseiller_Counselor.Mobile_phone_num%></li></ul></div>
<%
				}
				if(deal.Conseiller_Counselor.Email.isEmpty() != true)
				{
					%>
<div class="column">
<ul><li style="font-weight:bold;">Courriel/Email</li>
  <li><%=deal.Conseiller_Counselor.Email%></li></ul></div>
<%
				}
				%>
</div>
<%
			}
			if(deal.Client.Full_Name.isEmpty() != true || deal.Client.Date_of_Birth.isEmpty() != true || deal.Homecare_Deal_Contacts.isEmpty() != true || deal.Client.Ville_City.isEmpty() != true)
			{
				%>
<div class="bgclr">CLIENT(E) 1/CLIENT 1</div>
<%
				fet_deal = Contacts[ID == deal.Client];
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
				if(fet_deal.Date_of_Birth.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold;">Date de naissance/Date of birth</li>
  <li><%=fet_deal.Date_of_Birth%></li></ul>
<%
				}
				if(deal.Homecare_Deal_Contacts.isEmpty() != true)
				{
					datamap = Map();
					for each  subform_contcat in deal.Homecare_Deal_Contacts
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
			if(fet_deal.Type_s_of_accommodation_sought.isEmpty() != true || fet_deal.Notes_Accomodation.isEmpty() != true)
			{
				%>
<div class="bgclr">HÉBERGEMENT RECHERCHÉ/ACCOMODATION SOUGHT</div>
<div style="display: inline-block; width:100%;" class="pad">
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
<div style= "page-break-before:always;">&nbsp;</div>
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
			if(deal.Conseiller_Counselor != null)
			{
				%>
<div class="bgclr">CONSEILL(ÈRE)/COUNSELOR</div>
<div style="display: inline-block; width:100%;">
<%
				if(deal.Conseiller_Counselor.Advisor_Name.isEmpty() != true)
				{
					%>
<div class="column"><ul><li style="font-weight:bold;">
Nom/Name</li>
<li><%=deal.Conseiller_Counselor.Advisor_Name%></li></ul></div>
<%
				}
				if(deal.Conseiller_Counselor.Mobile_phone_num.isEmpty() != true)
				{
					%>
<div class="column">
<ul><li style="font-weight:bold;">Téléphone cellulaire/Cell phone</li>
  <li><%=deal.Conseiller_Counselor.Mobile_phone_num%></li></ul></div>
<%
				}
				if(deal.Conseiller_Counselor.Email.isEmpty() != true)
				{
					%>
<div class="column">
<ul><li style="font-weight:bold;">Courriel/Email</li>
  <li><%=deal.Conseiller_Counselor.Email%></li></ul></div>
<%
				}
				%>
</div>
<%
			}
			if(deal.Client_2.Full_Name.isEmpty() != true || deal.Client_2.Date_of_Birth.isEmpty() != true || deal.Homecare_Deal_Contacts.isEmpty() != true || deal.Client_2.Ville_City.isEmpty() != true)
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
				if(fet_deal.Date_of_Birth.isEmpty() != true)
				{
					%>
<ul><li style="font-weight:bold;">Date de naissance/Date of birth</li>
  <li><%=fet_deal.Date_of_Birth%></li></ul>
<%
				}
				if(deal.Homecare_Deal_Contacts.isEmpty() != true)
				{
					datamap = Map();
					for each  subform_contcat in deal.Homecare_Deal_Contacts
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
			if(fet_deal.Type_s_of_accommodation_sought.isEmpty() != true || fet_deal.Notes_Accomodation.isEmpty() != true)
			{
				%>
<div class="bgclr">HÉBERGEMENT RECHERCHÉ/ACCOMODATION SOUGHT</div>
<div style="display: inline-block; width:100%;" class="pad">
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
		%>
</body>
</html>
<%
	}

}%>
