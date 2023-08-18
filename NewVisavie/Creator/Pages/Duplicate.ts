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
	response = zoho.crm.getRecordById("Home_Care_Deal",DealCRMId.toLong(),Map(),"zoho_one");
	if(response.get("id").toList().size() > 0)
	{
		if(response.get("Client") != null)
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
			if(response.get("Advisors") != null)
			{
				get_counselor = Advisor[CRM_AdvisorID == response.get("Advisors").get("id")];
				if(get_counselor.count() > 0)
				{
					%>
<div class="bgclr">CONSEILL(ÈRE)/COUNSELOR</div>
	<div style="display: inline-block; width:100%;">
<%
					if(get_counselor.Advisor_Name.isEmpty() != true)
					{
						%>
<div class="column"><ul><li style="font-weight:bold;">
	Nom/Name</li>
	<li><%=get_counselor.Advisor_Name%></li></ul></div>
<%
					}
					if(get_counselor.Mobile_phone_num.isEmpty() != true)
					{
						%>
<div class="column">
	<ul><li style="font-weight:bold;">Téléphone cellulaire/Cell phone</li>
	  <li><%=get_counselor.Mobile_phone_num%></li></ul></div>
<%
					}
					if(get_counselor.Email.isEmpty() != true)
					{
						%>
<div class="column">
	<ul><li style="font-weight:bold;">Courriel/Email</li>
	  <li><%=get_counselor.Email%></li></ul></div>
<%
					}
					%>
</div>
<%
				}
			}
			get_contact = zoho.crm.getRecordById("Contacts",response.get("Client").get("id").toLong(),Map(),"zoho_one");
			if(get_contact.get("Full_Name") != null || get_contact.get("Date_of_Birth") != null || response.get("Contact_persons").size() > 0 || get_contact.get("Ville_City") != null)
			{
				%>
<div class="bgclr">CLIENT(E) 1/CLIENT 1</div>
<div style="display: inline-block; width:100%;" class="pad">
<div class="alignleft">
<%
				if(get_contact.get("Full_Name") != null)
				{
					%>
<ul><li style="font-weight:bold;">
Nom client(e)/Name of client</li>
<li><%=get_contact.get("Full_Name")%></li></ul>
<%
				}
				if(get_contact.get("Date_of_Birth") != null)
				{
					%>
<ul><li style="font-weight:bold;">Date de naissance/Date of birth</li>
  <li><%=get_contact.get("Date_of_Birth")%></li></ul>
<%
				}
				if(response.get("Contact_subform").size() > 0)
				{
					datamap = Map();
					for each  subform_contcat in response.get("Contact_subform")
					{
						info "subform_contcat" + subform_contcat;
						// 						fet_contcat = Contacts[ID == subform_contcat.Contacts];
						if(subform_contcat.get("Kind_of_Contact") != "Client" && subform_contcat.get("Kind_of_Contact") != null)
						{
							datamap.put(subform_contcat.get("contact").get("name"),subform_contcat.get("Type_of_Contact_s"));
							info "datamap" + datamap;
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
				if(get_contact.get("Ville_City") != null)
				{
					%>
<ul><li style="font-weight:bold;">
Demeure présentement/Currently living</li>
<li><%=get_contact.get("Ville_City")%></li></ul>
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
			if(get_contact.get("Type_de_logement") != null || get_contact.get("Notes_h_bergement") != null)
			{
				%>
<div class="bgclr">HÉBERGEMENT RECHERCHÉ/ACCOMODATION SOUGHT</div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Type_de_logement") != null)
				{
					accomadation_list = List();
					for each  accomadation in get_contact.get("Type_de_logement")
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
				if(get_contact.get("Notes_h_bergement") != null)
				{
					%>
<ul><li style="font-weight:bold;">Notes – Hébergement/Accomodations </li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_h_bergement")%></li></ul>
<%
				}
				%>
</div>
<%
			}
			if(get_contact.get("Hygiene") != null || get_contact.get("Habillement") != null || get_contact.get("Alimentation") != null || get_contact.get("Incontinence") != null || get_contact.get("Incontinence_f_cale") != null || get_contact.get("Utilisation_des_toilettes") != null || get_contact.get("Vision") != null || get_contact.get("Audition") != null || get_contact.get("Communication1") != null || get_contact.get("Note_valuation") != null)
			{
				%>
<div class="bgclr">ACTIVITÉS DE LA VIE QUOTIDIENNE/ACTIVITY OF DAILY LIVING</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Utilisation_des_toilettes") == null && get_contact.get("Vision") == null && get_contact.get("Audition") == null && get_contact.get("Communication1") == null && get_contact.get("Incontinence_f_cale") == null)
				{
					%>
<div class="alignleft" style="width: 100%;">
<%
					if(get_contact.get("Hygiene") != null)
					{
						%>
<ul><li style="font-weight:bold;">Hygiène/Hygiene</li>
<li><%=get_contact.get("Hygiene")%></li></ul>
<%
					}
					if(get_contact.get("Habillement") != null)
					{
						%>
<ul><li style="font-weight:bold;">Habillement/Dressing</li>
  <li><%=get_contact.get("Habillement")%></li></ul>
<%
					}
					if(get_contact.get("Alimentation") != null)
					{
						%>
<ul><li style="font-weight:bold;">Alimentation/Nutrition</li>
  <li><%=get_contact.get("Alimentation")%></li></ul>
<%
					}
					if(get_contact.get("Incontinence") != null)
					{
						%>
<ul><li style="font-weight:bold;">Incontinence urinaire/Urinary incontinence</li>
  <li><%=get_contact.get("Incontinence")%></li></ul>
<%
					}
					if(get_contact.get("Note_valuation") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes – AVQ/ADLs</li>
  <li style="text-align:justify;"><%=get_contact.get("Note_valuation")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("Hygiene") != null || get_contact.get("Habillement") != null || get_contact.get("Alimentation") != null || get_contact.get("Incontinence") != null || get_contact.get("Note_valuation") != null)
					{
						%>
<div class="alignleft">
<%
						if(get_contact.get("Hygiene") != null)
						{
							%>
<ul><li style="font-weight:bold;">Hygiène/Hygiene</li>
<li><%=get_contact.get("Hygiene")%></li></ul>
<%
						}
						if(get_contact.get("Habillement") != null)
						{
							%>
<ul><li style="font-weight:bold;">Habillement/Dressing</li>
  <li><%=get_contact.get("Habillement")%></li></ul>
<%
						}
						if(get_contact.get("Alimentation") != null)
						{
							%>
<ul><li style="font-weight:bold;">Alimentation/Nutrition</li>
  <li><%=get_contact.get("Alimentation")%></li></ul>
<%
						}
						if(get_contact.get("Incontinence") != null)
						{
							%>
<ul><li style="font-weight:bold;">Incontinence urinaire/Urinary incontinence</li>
  <li><%=get_contact.get("Incontinence")%></li></ul>
<%
						}
						if(get_contact.get("Note_valuation") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes – AVQ/ADLs</li>
  <li style="text-align:justify;"><%=get_contact.get("Note_valuation")%></li></ul>
<%
						}
						%>
</div>	
 <div class="alignright">
<%
						if(get_contact.get("Utilisation_des_toilettes") != null)
						{
							%>
<ul><li style="font-weight:bold;">Utilisation des toilettes/Use of toilets</li>
  <li><%=get_contact.get("Utilisation_des_toilettes")%></li></ul>
<%
						}
						if(get_contact.get("Vision") != null)
						{
							%>
<ul><li style="font-weight:bold;">Vision</li>
  <li><%=get_contact.get("Vision")%></li></ul>
<%
						}
						if(get_contact.get("Audition") != null)
						{
							%>
<ul><li style="font-weight:bold;">Audition/Hearing</li>
  <li><%=get_contact.get("Audition")%></li></ul>
<%
						}
						if(get_contact.get("Communication1") != null)
						{
							%>
<ul><li style="font-weight:bold;">Communication</li>
  <li><%=get_contact.get("Communication1")%></li></ul>
<%
						}
						if(get_contact.get("Incontinence_f_cale") != null)
						{
							%>
<ul><li style="font-weight:bold;">Incontinence fécale/Faecal incontinence</li>
  <li><%=get_contact.get("Incontinence_f_cale")%></li></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("Hygiene") == null && get_contact.get("Habillement") == null && get_contact.get("Alimentation") == true && get_contact.get("Incontinence") == null && get_contact.get("Note_valuation") == null)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(get_contact.get("Utilisation_des_toilettes") != null)
						{
							%>
<ul><li style="font-weight:bold;">Utilisation des toilettes/Use of toilets</li>
  <li><%=get_contact.get("Utilisation_des_toilettes")%></li></ul>
<%
						}
						if(get_contact.get("Vision") != null)
						{
							%>
<ul><li style="font-weight:bold;">Vision</li>
  <li><%=get_contact.get("Vision")%></li></ul>
<%
						}
						if(get_contact.get("Audition") != null)
						{
							%>
<ul><li style="font-weight:bold;">Audition/Hearing</li>
  <li><%=get_contact.get("Audition")%></li></ul>
<%
						}
						if(get_contact.get("Communication1") != null)
						{
							%>
<ul><li style="font-weight:bold;">Communication</li>
  <li><%=get_contact.get("Communication1")%></li></ul>
<%
						}
						if(get_contact.get("Incontinence_f_cale") != null)
						{
							%>
<ul><li style="font-weight:bold;">Incontinence fécale/Faecal incontinence</li>
  <li><%=get_contact.get("Incontinence_f_cale")%></li></ul>
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
			if(get_contact.get("quipement_pour_mobilit") != null || get_contact.get("D_placements_l_int_rieur") != null || get_contact.get("Transferts") != null || get_contact.get("Notes_Mobility") != null)
			{
				%>
<div class="bgclr">MOBILITÉ/MOBILITY</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("D_placements_l_int_rieur") == null && get_contact.get("Transferts") == null)
				{
					%>
<div class="alignleft" style="width: 100%;">
<%
					if(get_contact.get("quipement_pour_mobilit") != null)
					{
						%>
<ul><li style="font-weight:bold;">Équipement pour mobilité/Mobility equipment</li>
<li><%=get_contact.get("quipement_pour_mobilit")%></li></ul>
<%
					}
					if(get_contact.get("Notes_Mobility") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes – Mobilité/Mobility</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_Mobility")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("quipement_pour_mobilit") != null || get_contact.get("Notes_Mobility") != null)
					{
						%>
<div class="alignleft">
<%
						if(get_contact.get("quipement_pour_mobilit") != null)
						{
							%>
<ul><li style="font-weight:bold;">Équipement pour mobilité/Mobility equipment</li>
<li><%=get_contact.get("quipement_pour_mobilit")%></li></ul>
<%
						}
						if(get_contact.get("Notes_Mobility") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes – Mobilité/Mobility</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_Mobility")%></li></ul>
<%
						}
						%>
</div>
  <div class="alignright">
<%
						if(get_contact.get("D_placements_l_int_rieur") != null)
						{
							%>
<ul><li style="font-weight:bold;">Mobilité à l'intérieur/Indoor mobility</li>
  <li><%=get_contact.get("D_placements_l_int_rieur")%></li></ul>
<%
						}
						if(get_contact.get("Transferts") != null)
						{
							%>
<ul><li style="font-weight:bold;">Assistance aux transferts/Transfer assistance</li>
  <li><%=get_contact.get("Transferts")%></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("quipement_pour_mobilit") == null && get_contact.get("Notes_Mobility") == null)
					{
						%>
<div class="alignleft" style= "width: 100%;">
<%
						if(get_contact.get("D_placements_l_int_rieur") != null)
						{
							%>
<ul><li style="font-weight:bold;">Mobilité à l'intérieur/Indoor mobility</li>
  <li><%=get_contact.get("D_placements_l_int_rieur")%></li></ul>
<%
						}
						if(get_contact.get("Transferts") != null)
						{
							%>
<ul><li style="font-weight:bold;">Assistance aux transferts/Transfer assistance</li>
  <li><%=get_contact.get("Transferts")%></ul>
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
			if(get_contact.get("Distribution") != null || get_contact.get("Oxig_ne") != null || get_contact.get("Insulin_injection") != null || get_contact.get("Notes_4") != null)
			{
				%>
<div class="bgclr">MÉDICATION/MÉDICATION</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Oxig_ne") == null && get_contact.get("Insulin_injection") == null)
				{
					%>
<div class="alignleft" style= "width: 100%;">
<%
					if(get_contact.get("Distribution") != null)
					{
						%>
<ul><li style="font-weight:bold;">Distribution/Distribution</li>
<li><%=get_contact.get("Distribution")%></li></ul>
<%
					}
					if(get_contact.get("Notes_4") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes – Médication/Medication</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_4")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("Distribution") != null || get_contact.get("Notes_4") != null)
					{
						%>
<div class="alignleft">
<%
						if(get_contact.get("Distribution") != null)
						{
							%>
<ul><li style="font-weight:bold;">Distribution/Distribution</li>
<li><%=get_contact.get("Distribution")%></li></ul>
<%
						}
						if(get_contact.get("Notes_4") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes – Médication/Medication</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_4")%></li></ul>
<%
						}
						%>
</div>
  <div class="alignright">
<%
						if(get_contact.get("Oxig_ne") != null)
						{
							%>
<ul><li style="font-weight:bold;">Oxygène/Oxygene</li>
  <li><%=get_contact.get("Oxig_ne")%></li></ul>
<%
						}
						if(get_contact.get("Insulin_injection") != null)
						{
							%>
<ul><li style="font-weight:bold;">Injection insuline/Insulin injection</li>
  <li><%=get_contact.get("Insulin_injection")%></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("Distribution") == null && get_contact.get("Notes_4") == null)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(get_contact.get("Oxig_ne") != null)
						{
							%>
<ul><li style="font-weight:bold;">Oxygène/Oxygene</li>
  <li><%=get_contact.get("Oxig_ne")%></li></ul>
<%
						}
						if(get_contact.get("Insulin_injection") != null)
						{
							%>
<ul><li style="font-weight:bold;">Injection insuline/Insulin injection</li>
  <li><%=get_contact.get("Insulin_injection")%></ul>
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
			if(get_contact.get("Memoiry") != null || get_contact.get("Orientation_disorder").size() > 0 || get_contact.get("Dementia") != null || get_contact.get("Agressivit") != null || get_contact.get("Wandering") != null && get_contact.get("Notes_5") != null)
			{
				%>
<div style= "page-break-after:auto;"></div>
<div class="bgclr">ÉTAT NEUROCOGNITIF/NEUROCOGNITIVE STATE</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Dementia") == null && get_contact.get("Agressivit") == null && get_contact.get("Wandering") == null)
				{
					%>
<div class="alignleft" style= "width:100%;">
<%
					if(get_contact.get("Memoiry") != null)
					{
						%>
<ul><li style="font-weight:bold;">Trouble de la mémoire/Memory impairment</li>
<li><%=get_contact.get("Memoiry")%></li></ul>
<%
					}
					if(get_contact.get("Orientation_disorder").size() > 0)
					{
						orientation_list = List();
						for each  orient in get_contact.get("Orientation_disorder")
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
					if(get_contact.get("Notes_5") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes - État neurocognitif/Neurocognitive state</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_5")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("Memoiry") != null || get_contact.get("Orientation_disorder").size() > 0 || get_contact.get("Notes_5") != null)
					{
						%>
<div class="alignleft" >
<%
						if(get_contact.get("Memoiry") != null)
						{
							%>
<ul><li style="font-weight:bold;">Trouble de la mémoire/Memory impairment</li>
<li><%=get_contact.get("Memoiry")%></li></ul>
<%
						}
						if(get_contact.get("Orientation_disorder").size() > 0)
						{
							orientation_list = List();
							for each  orient in get_contact.get("Orientation_disorder")
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
						if(get_contact.get("Notes_5") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes - État neurocognitif/Neurocognitive state</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_5")%></li></ul>
<%
						}
						%>
</div>
<div class="alignright">
<%
						if(get_contact.get("Dementia") != null)
						{
							%>
<ul><li style="font-weight:bold;">Type(s) troubles neuro./neuro. disorder</li>
  <li><%=get_contact.get("Dementia")%></li></ul>
<%
						}
						if(get_contact.get("Agressivit") != null)
						{
							%>
<ul><li style="font-weight:bold;">Aggressiveness</li>
  <li><%=get_contact.get("Agressivit")%></ul>
<%
						}
						if(get_contact.get("Wandering") != null)
						{
							%>
<ul><li style="font-weight:bold;">Errance/Wandering</li>
  <li><%=get_contact.get("Wandering")%></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("Memoiry") == null && get_contact.get("Orientation_disorder").size() == 0 && get_contact.get("Notes_5") == null)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(get_contact.get("Dementia") != null)
						{
							%>
<ul><li style="font-weight:bold;">Type(s) troubles neuro./neuro. disorder</li>
  <li><%=get_contact.get("Dementia")%></li></ul>
<%
						}
						if(get_contact.get("Agressivit") != null)
						{
							%>
<ul><li style="font-weight:bold;">Aggressiveness</li>
  <li><%=get_contact.get("Agressivit")%></ul>
<%
						}
						if(get_contact.get("Wandering") != null)
						{
							%>
<ul><li style="font-weight:bold;">Errance/Wandering</li>
  <li><%=get_contact.get("Wandering")%></ul>
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
			if(get_contact.get("Repas") != null || get_contact.get("Laundry").size() > 0 || get_contact.get("Housekeeping_frequency") != null || get_contact.get("Notes_6") != null)
			{
				%>
<div class="bgclr">ACTIVITÉS DE LA VIE DOMESTIQUE/INSTRUMENTAL ACTIVITIES OF DAILY LIVING</div>
<div style= "page-break-after:avoid;"></div>
				<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Laundry").size() == 0 && get_contact.get("Housekeeping_frequency") == null)
				{
					%>
<div class="alignleft" style="width:100%;">
<%
					if(get_contact.get("Repas") != null)
					{
						%>
<ul><li style="font-weight:bold;">Repas/Meals</li>
<li><%=get_contact.get("Repas")%></li></ul>
<%
					}
					if(get_contact.get("Notes_6") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes – AVD/IADLs</li>
				<li style="text-align:justify;"><%=get_contact.get("Notes_6")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("Repas") != null || get_contact.get("Notes_6") != null)
					{
						%>
<div class="alignleft" >
<%
						if(get_contact.get("Repas") != null)
						{
							%>
<ul><li style="font-weight:bold;">Repas/Meals</li>
<li><%=get_contact.get("Repas")%></li></ul>
<%
						}
						if(get_contact.get("Notes_6") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes – AVD/IADLs</li>
				<li style="text-align:justify;"><%=get_contact.get("Notes_6")%></li></ul>
<%
						}
						%>
</div>
				<div class="alignright" >
<%
						if(get_contact.get("Laundry").size() > 0)
						{
							laundry_list = List();
							for each  laundry in get_contact.get("Laundry")
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
						if(get_contact.get("Housekeeping_frequency") != null)
						{
							%>
<ul><li style="font-weight:bold;">Entretien ménager/Housekeeping</li>
				<li><%=get_contact.get("Housekeeping_frequency")%></li></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("Repas") == null && get_contact.get("Notes_6") == null)
					{
						%>
<div class="alignleft" style="width: 100%;" >
<%
						if(get_contact.get("Laundry").size() > 0)
						{
							laundry_list = List();
							for each  laundry in get_contact.get("Laundry")
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
						if(get_contact.get("Housekeeping_frequency") != null)
						{
							%>
<ul><li style="font-weight:bold;">Entretien ménager/Housekeeping</li>
				<li><%=get_contact.get("Housekeeping_frequency")%></li></ul>
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
			if(get_contact.get("Fumeur") != null || get_contact.get("Pet") != null || get_contact.get("Protection_mandate") != null || get_contact.get("Available_evaluation_s").size() > 0 || get_contact.get("Benefit_from_the_help_of_the_CLSC") != null || get_contact.get("Notes_3") != null)
			{
				%>
<div class="bgclr">AUTRE/OTHER</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Pet") == null && get_contact.get("Protection_mandate") == null && get_contact.get("Benefit_from_the_help_of_the_CLSC") == null)
				{
					%>
<div class="alignleft" style = "width:100%;">
<%
					if(get_contact.get("Fumeur") != null)
					{
						%>
<ul><li style="font-weight:bold;">Fumeur/Smoker</li>
<li><%=get_contact.get("Fumeur")%></li></ul>
<%
					}
					if(get_contact.get("Available_evaluation_s").size() > 0)
					{
						evaluation_list = List();
						for each  avaluation in get_contact.get("Available_evaluation_s")
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
					if(get_contact.get("Notes_3") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes – Autre/Other</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_3")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("Fumeur") != null || get_contact.get("Available_evaluation_s").size() > 0 || get_contact.get("Notes_3") != null)
					{
						%>
<div class="alignleft">
<%
						if(get_contact.get("Fumeur") != null)
						{
							%>
<ul><li style="font-weight:bold;">Fumeur/Smoker</li>
<li><%=get_contact.get("Fumeur")%></li></ul>
<%
						}
						if(get_contact.get("Available_evaluation_s").size() > 0)
						{
							evaluation_list = List();
							for each  avaluation in get_contact.get("Available_evaluation_s")
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
						if(get_contact.get("Notes_3") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes – Autre/Other</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_3")%></li></ul>
<%
						}
						%>
</div>
<div class="alignright">
<%
						if(get_contact.get("Pet") != null)
						{
							%>
<ul><li style="font-weight:bold;">Animal de compagnie/Pet</li>
  <li><%=get_contact.get("Pet")%></li></ul>
<%
						}
						if(get_contact.get("Protection_mandate") != null)
						{
							%>
<ul><li style="font-weight:bold;">Mandat de protection du statut/Status protection mandate</li>
  <li><%=get_contact.get("Protection_mandate")%></li></ul>
<%
						}
						if(get_contact.get("Benefit_from_the_help_of_the_CLSC") != null)
						{
							%>
<ul><li style="font-weight:bold;">Aide du CLSC/Help from CLSC</li>
  <li><%=get_contact.get("Benefit_from_the_help_of_the_CLSC")%></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("Fumeur") == null && get_contact.get("Available_evaluation_s").size() == 0 && get_contact.get("Notes_3") == null)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(get_contact.get("Pet") != null)
						{
							%>
<ul><li style="font-weight:bold;">Animal de compagnie/Pet</li>
  <li><%=get_contact.get("Pet")%></li></ul>
<%
						}
						if(get_contact.get("Protection_mandate") != null)
						{
							%>
<ul><li style="font-weight:bold;">Mandat de protection du statut/Status protection mandate</li>
  <li><%=get_contact.get("Protection_mandate")%></li></ul>
<%
						}
						if(get_contact.get("Benefit_from_the_help_of_the_CLSC") != null)
						{
							%>
<ul><li style="font-weight:bold;">Aide du CLSC/Help from CLSC</li>
  <li><%=get_contact.get("Benefit_from_the_help_of_the_CLSC")%></ul>
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
			if(get_contact.get("Comments_Activities_Interests_particularities") != null)
			{
				%>
<div class="bgclr">COMMENTAIRES/COMMENTS</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Comments_Activities_Interests_particularities") != null)
				{
					%>
<ul><li style="font-weight:bold; ">Intérêts, particularités/Interests, specifics</li>
<li  style="text-align: justify;"><%=get_contact.get("Comments_Activities_Interests_particularities")%></li></ul>
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
		if(response.get("Client_2") != null)
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
			if(response.get("Advisors") != null)
			{
				get_counselor = Advisor[CRM_AdvisorID == response.get("Advisors").get("id")];
				if(get_counselor.count() > 0)
				{
					%>
<div class="bgclr">CONSEILL(ÈRE)/COUNSELOR</div>
	<div style="display: inline-block; width:100%;">
<%
					if(get_counselor.Advisor_Name.isEmpty() != true)
					{
						%>
<div class="column"><ul><li style="font-weight:bold;">
	Nom/Name</li>
	<li><%=get_counselor.Advisor_Name%></li></ul></div>
<%
					}
					if(get_counselor.Mobile_phone_num.isEmpty() != true)
					{
						%>
<div class="column">
	<ul><li style="font-weight:bold;">Téléphone cellulaire/Cell phone</li>
	  <li><%=get_counselor.Mobile_phone_num%></li></ul></div>
<%
					}
					if(get_counselor.Email.isEmpty() != true)
					{
						%>
<div class="column">
	<ul><li style="font-weight:bold;">Courriel/Email</li>
	  <li><%=get_counselor.Email%></li></ul></div>
<%
					}
					%>
</div>
<%
				}
			}
			get_contact = zoho.crm.getRecordById("Contacts",response.get("Client_2").get("id").toLong(),Map(),"zoho_one");
			if(get_contact.get("Full_Name") != null || get_contact.get("Date_of_Birth") != null || response.get("Contact_persons").size() > 0 || get_contact.get("Ville_City") != null)
			{
				%>
<div class="bgclr">CLIENT(E) 1/CLIENT 1</div>
<div style="display: inline-block; width:100%;" class="pad">
<div class="alignleft">
<%
				if(get_contact.get("Full_Name") != null)
				{
					%>
<ul><li style="font-weight:bold;">
Nom client(e)/Name of client</li>
<li><%=get_contact.get("Full_Name")%></li></ul>
<%
				}
				if(get_contact.get("Date_of_Birth") != null)
				{
					%>
<ul><li style="font-weight:bold;">Date de naissance/Date of birth</li>
  <li><%=get_contact.get("Date_of_Birth")%></li></ul>
<%
				}
				if(response.get("Contact_persons").size() > 0)
				{
					datamap = Map();
					for each  subform_contcat in response.get("Contact_persons")
					{
						info "subform_contcat" + subform_contcat;
						// 						fet_contcat = Contacts[ID == subform_contcat.Contacts];
						if(subform_contcat.get("Kind_of_Contact") != "Client" && subform_contcat.get("Kind_of_Contact") != null)
						{
							datamap.put(subform_contcat.get("contact").get("name"),subform_contcat.get("Type_of_Contact_s"));
							info "datamap" + datamap;
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
				if(get_contact.get("Ville_City") != null)
				{
					%>
<ul><li style="font-weight:bold;">
Demeure présentement/Currently living</li>
<li><%=get_contact.get("Ville_City")%></li></ul>
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
			if(get_contact.get("Type_de_logement") != null || get_contact.get("Notes_h_bergement") != null)
			{
				%>
<div class="bgclr">HÉBERGEMENT RECHERCHÉ/ACCOMODATION SOUGHT</div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Type_de_logement") != null)
				{
					accomadation_list = List();
					for each  accomadation in get_contact.get("Type_de_logement")
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
				if(get_contact.get("Notes_h_bergement") != null)
				{
					%>
<ul><li style="font-weight:bold;">Notes – Hébergement/Accomodations </li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_h_bergement")%></li></ul>
<%
				}
				%>
</div>
<%
			}
			if(get_contact.get("Hygiene") != null || get_contact.get("Habillement") != null || get_contact.get("Alimentation") != null || get_contact.get("Incontinence") != null || get_contact.get("Incontinence_f_cale") != null || get_contact.get("Utilisation_des_toilettes") != null || get_contact.get("Vision") != null || get_contact.get("Audition") != null || get_contact.get("Communication1") != null || get_contact.get("Note_valuation") != null)
			{
				%>
<div class="bgclr">ACTIVITÉS DE LA VIE QUOTIDIENNE/ACTIVITY OF DAILY LIVING</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Utilisation_des_toilettes") == null && get_contact.get("Vision") == null && get_contact.get("Audition") == null && get_contact.get("Communication1") == null && get_contact.get("Incontinence_f_cale") == null)
				{
					%>
<div class="alignleft" style="width: 100%;">
<%
					if(get_contact.get("Hygiene") != null)
					{
						%>
<ul><li style="font-weight:bold;">Hygiène/Hygiene</li>
<li><%=get_contact.get("Hygiene")%></li></ul>
<%
					}
					if(get_contact.get("Habillement") != null)
					{
						%>
<ul><li style="font-weight:bold;">Habillement/Dressing</li>
  <li><%=get_contact.get("Habillement")%></li></ul>
<%
					}
					if(get_contact.get("Alimentation") != null)
					{
						%>
<ul><li style="font-weight:bold;">Alimentation/Nutrition</li>
  <li><%=get_contact.get("Alimentation")%></li></ul>
<%
					}
					if(get_contact.get("Incontinence") != null)
					{
						%>
<ul><li style="font-weight:bold;">Incontinence urinaire/Urinary incontinence</li>
  <li><%=get_contact.get("Incontinence")%></li></ul>
<%
					}
					if(get_contact.get("Note_valuation") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes – AVQ/ADLs</li>
  <li style="text-align:justify;"><%=get_contact.get("Note_valuation")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("Hygiene") != null || get_contact.get("Habillement") != null || get_contact.get("Alimentation") != null || get_contact.get("Incontinence") != null || get_contact.get("Note_valuation") != null)
					{
						%>
<div class="alignleft">
<%
						if(get_contact.get("Hygiene") != null)
						{
							%>
<ul><li style="font-weight:bold;">Hygiène/Hygiene</li>
<li><%=get_contact.get("Hygiene")%></li></ul>
<%
						}
						if(get_contact.get("Habillement") != null)
						{
							%>
<ul><li style="font-weight:bold;">Habillement/Dressing</li>
  <li><%=get_contact.get("Habillement")%></li></ul>
<%
						}
						if(get_contact.get("Alimentation") != null)
						{
							%>
<ul><li style="font-weight:bold;">Alimentation/Nutrition</li>
  <li><%=get_contact.get("Alimentation")%></li></ul>
<%
						}
						if(get_contact.get("Incontinence") != null)
						{
							%>
<ul><li style="font-weight:bold;">Incontinence urinaire/Urinary incontinence</li>
  <li><%=get_contact.get("Incontinence")%></li></ul>
<%
						}
						if(get_contact.get("Note_valuation") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes – AVQ/ADLs</li>
  <li style="text-align:justify;"><%=get_contact.get("Note_valuation")%></li></ul>
<%
						}
						%>
</div>	
 <div class="alignright">
<%
						if(get_contact.get("Utilisation_des_toilettes") != null)
						{
							%>
<ul><li style="font-weight:bold;">Utilisation des toilettes/Use of toilets</li>
  <li><%=get_contact.get("Utilisation_des_toilettes")%></li></ul>
<%
						}
						if(get_contact.get("Vision") != null)
						{
							%>
<ul><li style="font-weight:bold;">Vision</li>
  <li><%=get_contact.get("Vision")%></li></ul>
<%
						}
						if(get_contact.get("Audition") != null)
						{
							%>
<ul><li style="font-weight:bold;">Audition/Hearing</li>
  <li><%=get_contact.get("Audition")%></li></ul>
<%
						}
						if(get_contact.get("Communication1") != null)
						{
							%>
<ul><li style="font-weight:bold;">Communication</li>
  <li><%=get_contact.get("Communication1")%></li></ul>
<%
						}
						if(get_contact.get("Incontinence_f_cale") != null)
						{
							%>
<ul><li style="font-weight:bold;">Incontinence fécale/Faecal incontinence</li>
  <li><%=get_contact.get("Incontinence_f_cale")%></li></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("Hygiene") == null && get_contact.get("Habillement") == null && get_contact.get("Alimentation") == true && get_contact.get("Incontinence") == null && get_contact.get("Note_valuation") == null)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(get_contact.get("Utilisation_des_toilettes") != null)
						{
							%>
<ul><li style="font-weight:bold;">Utilisation des toilettes/Use of toilets</li>
  <li><%=get_contact.get("Utilisation_des_toilettes")%></li></ul>
<%
						}
						if(get_contact.get("Vision") != null)
						{
							%>
<ul><li style="font-weight:bold;">Vision</li>
  <li><%=get_contact.get("Vision")%></li></ul>
<%
						}
						if(get_contact.get("Audition") != null)
						{
							%>
<ul><li style="font-weight:bold;">Audition/Hearing</li>
  <li><%=get_contact.get("Audition")%></li></ul>
<%
						}
						if(get_contact.get("Communication1") != null)
						{
							%>
<ul><li style="font-weight:bold;">Communication</li>
  <li><%=get_contact.get("Communication1")%></li></ul>
<%
						}
						if(get_contact.get("Incontinence_f_cale") != null)
						{
							%>
<ul><li style="font-weight:bold;">Incontinence fécale/Faecal incontinence</li>
  <li><%=get_contact.get("Incontinence_f_cale")%></li></ul>
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
			if(get_contact.get("quipement_pour_mobilit") != null || get_contact.get("D_placements_l_int_rieur") != null || get_contact.get("Transferts") != null || get_contact.get("Notes_Mobility") != null)
			{
				%>
<div class="bgclr">MOBILITÉ/MOBILITY</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("D_placements_l_int_rieur") == null && get_contact.get("Transferts") == null)
				{
					%>
<div class="alignleft" style="width: 100%;">
<%
					if(get_contact.get("quipement_pour_mobilit") != null)
					{
						%>
<ul><li style="font-weight:bold;">Équipement pour mobilité/Mobility equipment</li>
<li><%=get_contact.get("quipement_pour_mobilit")%></li></ul>
<%
					}
					if(get_contact.get("Notes_Mobility") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes – Mobilité/Mobility</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_Mobility")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("quipement_pour_mobilit") != null || get_contact.get("Notes_Mobility") != null)
					{
						%>
<div class="alignleft">
<%
						if(get_contact.get("quipement_pour_mobilit") != null)
						{
							%>
<ul><li style="font-weight:bold;">Équipement pour mobilité/Mobility equipment</li>
<li><%=get_contact.get("quipement_pour_mobilit")%></li></ul>
<%
						}
						if(get_contact.get("Notes_Mobility") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes – Mobilité/Mobility</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_Mobility")%></li></ul>
<%
						}
						%>
</div>
  <div class="alignright">
<%
						if(get_contact.get("D_placements_l_int_rieur") != null)
						{
							%>
<ul><li style="font-weight:bold;">Mobilité à l'intérieur/Indoor mobility</li>
  <li><%=get_contact.get("D_placements_l_int_rieur")%></li></ul>
<%
						}
						if(get_contact.get("Transferts") != null)
						{
							%>
<ul><li style="font-weight:bold;">Assistance aux transferts/Transfer assistance</li>
  <li><%=get_contact.get("Transferts")%></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("quipement_pour_mobilit") == null && get_contact.get("Notes_Mobility") == null)
					{
						%>
<div class="alignleft" style= "width: 100%;">
<%
						if(get_contact.get("D_placements_l_int_rieur") != null)
						{
							%>
<ul><li style="font-weight:bold;">Mobilité à l'intérieur/Indoor mobility</li>
  <li><%=get_contact.get("D_placements_l_int_rieur")%></li></ul>
<%
						}
						if(get_contact.get("Transferts") != null)
						{
							%>
<ul><li style="font-weight:bold;">Assistance aux transferts/Transfer assistance</li>
  <li><%=get_contact.get("Transferts")%></ul>
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
			if(get_contact.get("Distribution") != null || get_contact.get("Oxig_ne") != null || get_contact.get("Insulin_injection") != null || get_contact.get("Notes_4") != null)
			{
				%>
<div class="bgclr">MÉDICATION/MÉDICATION</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Oxig_ne") == null && get_contact.get("Insulin_injection") == null)
				{
					%>
<div class="alignleft" style= "width: 100%;">
<%
					if(get_contact.get("Distribution") != null)
					{
						%>
<ul><li style="font-weight:bold;">Distribution/Distribution</li>
<li><%=get_contact.get("Distribution")%></li></ul>
<%
					}
					if(get_contact.get("Notes_4") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes – Médication/Medication</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_4")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("Distribution") != null || get_contact.get("Notes_4") != null)
					{
						%>
<div class="alignleft">
<%
						if(get_contact.get("Distribution") != null)
						{
							%>
<ul><li style="font-weight:bold;">Distribution/Distribution</li>
<li><%=get_contact.get("Distribution")%></li></ul>
<%
						}
						if(get_contact.get("Notes_4") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes – Médication/Medication</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_4")%></li></ul>
<%
						}
						%>
</div>
  <div class="alignright">
<%
						if(get_contact.get("Oxig_ne") != null)
						{
							%>
<ul><li style="font-weight:bold;">Oxygène/Oxygene</li>
  <li><%=get_contact.get("Oxig_ne")%></li></ul>
<%
						}
						if(get_contact.get("Insulin_injection") != null)
						{
							%>
<ul><li style="font-weight:bold;">Injection insuline/Insulin injection</li>
  <li><%=get_contact.get("Insulin_injection")%></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("Distribution") == null && get_contact.get("Notes_4") == null)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(get_contact.get("Oxig_ne") != null)
						{
							%>
<ul><li style="font-weight:bold;">Oxygène/Oxygene</li>
  <li><%=get_contact.get("Oxig_ne")%></li></ul>
<%
						}
						if(get_contact.get("Insulin_injection") != null)
						{
							%>
<ul><li style="font-weight:bold;">Injection insuline/Insulin injection</li>
  <li><%=get_contact.get("Insulin_injection")%></ul>
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
			if(get_contact.get("Memoiry") != null || get_contact.get("Orientation_disorder").size() > 0 || get_contact.get("Dementia") != null || get_contact.get("Agressivit") != null || get_contact.get("Wandering") != null && get_contact.get("Notes_5") != null)
			{
				%>
<div style= "page-break-after:auto;"></div>
<div class="bgclr">ÉTAT NEUROCOGNITIF/NEUROCOGNITIVE STATE</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Dementia") == null && get_contact.get("Agressivit") == null && get_contact.get("Wandering") == null)
				{
					%>
<div class="alignleft" style= "width:100%;">
<%
					if(get_contact.get("Memoiry") != null)
					{
						%>
<ul><li style="font-weight:bold;">Trouble de la mémoire/Memory impairment</li>
<li><%=get_contact.get("Memoiry")%></li></ul>
<%
					}
					if(get_contact.get("Orientation_disorder").size() > 0)
					{
						orientation_list = List();
						for each  orient in get_contact.get("Orientation_disorder")
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
					if(get_contact.get("Notes_5") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes - État neurocognitif/Neurocognitive state</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_5")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("Memoiry") != null || get_contact.get("Orientation_disorder").size() > 0 || get_contact.get("Notes_5") != null)
					{
						%>
<div class="alignleft" >
<%
						if(get_contact.get("Memoiry") != null)
						{
							%>
<ul><li style="font-weight:bold;">Trouble de la mémoire/Memory impairment</li>
<li><%=get_contact.get("Memoiry")%></li></ul>
<%
						}
						if(get_contact.get("Orientation_disorder").size() > 0)
						{
							orientation_list = List();
							for each  orient in get_contact.get("Orientation_disorder")
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
						if(get_contact.get("Notes_5") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes - État neurocognitif/Neurocognitive state</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_5")%></li></ul>
<%
						}
						%>
</div>
<div class="alignright">
<%
						if(get_contact.get("Dementia") != null)
						{
							%>
<ul><li style="font-weight:bold;">Type(s) troubles neuro./neuro. disorder</li>
  <li><%=get_contact.get("Dementia")%></li></ul>
<%
						}
						if(get_contact.get("Agressivit") != null)
						{
							%>
<ul><li style="font-weight:bold;">Aggressiveness</li>
  <li><%=get_contact.get("Agressivit")%></ul>
<%
						}
						if(get_contact.get("Wandering") != null)
						{
							%>
<ul><li style="font-weight:bold;">Errance/Wandering</li>
  <li><%=get_contact.get("Wandering")%></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("Memoiry") == null && get_contact.get("Orientation_disorder").size() == 0 && get_contact.get("Notes_5") == null)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(get_contact.get("Dementia") != null)
						{
							%>
<ul><li style="font-weight:bold;">Type(s) troubles neuro./neuro. disorder</li>
  <li><%=get_contact.get("Dementia")%></li></ul>
<%
						}
						if(get_contact.get("Agressivit") != null)
						{
							%>
<ul><li style="font-weight:bold;">Aggressiveness</li>
  <li><%=get_contact.get("Agressivit")%></ul>
<%
						}
						if(get_contact.get("Wandering") != null)
						{
							%>
<ul><li style="font-weight:bold;">Errance/Wandering</li>
  <li><%=get_contact.get("Wandering")%></ul>
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
			if(get_contact.get("Repas") != null || get_contact.get("Laundry").size() > 0 || get_contact.get("Housekeeping_frequency") != null || get_contact.get("Notes_6") != null)
			{
				%>
<div class="bgclr">ACTIVITÉS DE LA VIE DOMESTIQUE/INSTRUMENTAL ACTIVITIES OF DAILY LIVING</div>
<div style= "page-break-after:avoid;"></div>
				<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Laundry").size() == 0 && get_contact.get("Housekeeping_frequency") == null)
				{
					%>
<div class="alignleft" style="width:100%;">
<%
					if(get_contact.get("Repas") != null)
					{
						%>
<ul><li style="font-weight:bold;">Repas/Meals</li>
<li><%=get_contact.get("Repas")%></li></ul>
<%
					}
					if(get_contact.get("Notes_6") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes – AVD/IADLs</li>
				<li style="text-align:justify;"><%=get_contact.get("Notes_6")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("Repas") != null || get_contact.get("Notes_6") != null)
					{
						%>
<div class="alignleft" >
<%
						if(get_contact.get("Repas") != null)
						{
							%>
<ul><li style="font-weight:bold;">Repas/Meals</li>
<li><%=get_contact.get("Repas")%></li></ul>
<%
						}
						if(get_contact.get("Notes_6") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes – AVD/IADLs</li>
				<li style="text-align:justify;"><%=get_contact.get("Notes_6")%></li></ul>
<%
						}
						%>
</div>
				<div class="alignright" >
<%
						if(get_contact.get("Laundry").size() > 0)
						{
							laundry_list = List();
							for each  laundry in get_contact.get("Laundry")
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
						if(get_contact.get("Housekeeping_frequency") != null)
						{
							%>
<ul><li style="font-weight:bold;">Entretien ménager/Housekeeping</li>
				<li><%=get_contact.get("Housekeeping_frequency")%></li></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("Repas") == null && get_contact.get("Notes_6") == null)
					{
						%>
<div class="alignleft" style="width: 100%;" >
<%
						if(get_contact.get("Laundry").size() > 0)
						{
							laundry_list = List();
							for each  laundry in get_contact.get("Laundry")
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
						if(get_contact.get("Housekeeping_frequency") != null)
						{
							%>
<ul><li style="font-weight:bold;">Entretien ménager/Housekeeping</li>
				<li><%=get_contact.get("Housekeeping_frequency")%></li></ul>
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
			if(get_contact.get("Fumeur") != null || get_contact.get("Pet") != null || get_contact.get("Protection_mandate") != null || get_contact.get("Available_evaluation_s").size() > 0 || get_contact.get("Benefit_from_the_help_of_the_CLSC") != null || get_contact.get("Notes_3") != null)
			{
				%>
<div class="bgclr">AUTRE/OTHER</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Pet") == null && get_contact.get("Protection_mandate") == null && get_contact.get("Benefit_from_the_help_of_the_CLSC") == null)
				{
					%>
<div class="alignleft" style = "width:100%;">
<%
					if(get_contact.get("Fumeur") != null)
					{
						%>
<ul><li style="font-weight:bold;">Fumeur/Smoker</li>
<li><%=get_contact.get("Fumeur")%></li></ul>
<%
					}
					if(get_contact.get("Available_evaluation_s").size() > 0)
					{
						evaluation_list = List();
						for each  avaluation in get_contact.get("Available_evaluation_s")
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
					if(get_contact.get("Notes_3") != null)
					{
						%>
<ul><li style="font-weight:bold;">Notes – Autre/Other</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_3")%></li></ul>
<%
					}
					%>
</div>
<%
				}
				else
				{
					if(get_contact.get("Fumeur") != null || get_contact.get("Available_evaluation_s").size() > 0 || get_contact.get("Notes_3") != null)
					{
						%>
<div class="alignleft">
<%
						if(get_contact.get("Fumeur") != null)
						{
							%>
<ul><li style="font-weight:bold;">Fumeur/Smoker</li>
<li><%=get_contact.get("Fumeur")%></li></ul>
<%
						}
						if(get_contact.get("Available_evaluation_s").size() > 0)
						{
							evaluation_list = List();
							for each  avaluation in get_contact.get("Available_evaluation_s")
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
						if(get_contact.get("Notes_3") != null)
						{
							%>
<ul><li style="font-weight:bold;">Notes – Autre/Other</li>
  <li style="text-align:justify;"><%=get_contact.get("Notes_3")%></li></ul>
<%
						}
						%>
</div>
<div class="alignright">
<%
						if(get_contact.get("Pet") != null)
						{
							%>
<ul><li style="font-weight:bold;">Animal de compagnie/Pet</li>
  <li><%=get_contact.get("Pet")%></li></ul>
<%
						}
						if(get_contact.get("Protection_mandate") != null)
						{
							%>
<ul><li style="font-weight:bold;">Mandat de protection du statut/Status protection mandate</li>
  <li><%=get_contact.get("Protection_mandate")%></li></ul>
<%
						}
						if(get_contact.get("Benefit_from_the_help_of_the_CLSC") != null)
						{
							%>
<ul><li style="font-weight:bold;">Aide du CLSC/Help from CLSC</li>
  <li><%=get_contact.get("Benefit_from_the_help_of_the_CLSC")%></ul>
<%
						}
						%>
</div>
<%
					}
					if(get_contact.get("Fumeur") == null && get_contact.get("Available_evaluation_s").size() == 0 && get_contact.get("Notes_3") == null)
					{
						%>
<div class="alignleft" style="width: 100%;">
<%
						if(get_contact.get("Pet") != null)
						{
							%>
<ul><li style="font-weight:bold;">Animal de compagnie/Pet</li>
  <li><%=get_contact.get("Pet")%></li></ul>
<%
						}
						if(get_contact.get("Protection_mandate") != null)
						{
							%>
<ul><li style="font-weight:bold;">Mandat de protection du statut/Status protection mandate</li>
  <li><%=get_contact.get("Protection_mandate")%></li></ul>
<%
						}
						if(get_contact.get("Benefit_from_the_help_of_the_CLSC") != null)
						{
							%>
<ul><li style="font-weight:bold;">Aide du CLSC/Help from CLSC</li>
  <li><%=get_contact.get("Benefit_from_the_help_of_the_CLSC")%></ul>
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
			if(get_contact.get("Comments_Activities_Interests_particularities") != null)
			{
				%>
<div class="bgclr">COMMENTAIRES/COMMENTS</div>
<div style= "page-break-after:avoid;"></div>
<div style="display: inline-block; width:100%;" class="pad">
<%
				if(get_contact.get("Comments_Activities_Interests_particularities") != null)
				{
					%>
<ul><li style="font-weight:bold; ">Intérêts, particularités/Interests, specifics</li>
<li  style="text-align: justify;"><%=get_contact.get("Comments_Activities_Interests_particularities")%></li></ul>
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
