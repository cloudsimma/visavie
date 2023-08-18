<%{
	%>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.page-border
{
    border: 1px solid black;
}
div
{
    line-height:30px;
    font-weight: bold;
    font-size: 18px;
    padding:0px;
}
span
{
    font-weight: normal;
    font-size: 16px;
}
.aligncenter {
    text-align: center;
    font-size:20px;
    font-weight:bold;
}
.txt{
  background-color: lightgrey;
  width: 100%;
 
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.pad{
   padding: 10px 20px;
    text-align: justify;
    
} 
.left{
    text-align:left;
    float:left;
    font-size:16px;
    padding:14px;
    font-weight:bold;
    width: 50%;
}
.right{
    text-align:left;
    float:right;
    
}
.bgclr
{
    background-color: #1A8C3A;
    color:white;
    font-size:22px;
    height: 23px;
    padding:10px 15px;
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
		border: 2px solid;
    }
	.main_div_center
    {
       margin: 0;
       width: 100% !important;
    }
	.bgclr
	{
		background-color: lightgrey !important;
	}	
}
.hgt{
    line-height:12px;
}
</style>
</head>
<body>
<%
	deal = Home_Care_Deal[CRM_HomeCareDealId == HomeCareDealId];
	if(deal.ID > 0)
	{
		%>
<div class="main_div_center">
<!--<div class="w3-container">
<div class="page-border">-->
<%
		itm = Visavie_Profile[ID == 4252979000000135003];
		if(itm.Image != null)
		{
			var = itm.Image.getSuffix("downqual = \"").getSuffix("image/").getPrefix("\"");
			if(!var.isEmpty())
			{
				img = "<img height=70px width=120px src='https://creator.zohopublic.com/file/lion_visavie/visavie/All_Visavie_Profiles/" + itm.ID + "/Image/image-download/djbSN6PSp8wJVbHUy7bHYOTO2Y0rS6MwZB0a012FfdxSRXJTCAKGDVvaZR5qrM4UnQSbXAJCBNgsYGTThNVtnBSu1nfgtYZ0GgHC?filepath=/" + var + "'></img>";
			}
		}
		%>
<p class="aligncenter"><a href="https://visavie.com/"><%=img%></a></p>
<%
		if(deal.Languages == "Français/French")
		{
			%>
<div class="aligncenter page-alignment" style="font-size:40px;>Profil client</div>
<%
		}
		else if(deal.Languages == "Anglais/English")
		{
			%>
<div class="aligncenter page-alignment" style="font-size:40px;>Client Profile</div>
<%
		}
		if(itm.Profile_Client != null)
		{
			var2 = itm.Profile_Client.getSuffix("downqual = \"").getSuffix("image/").getPrefix("\"");
			if(!var2.isEmpty())
			{
				img2 = "<img height=125px width=25% src='https://creatorapp.zohopublic.com/file/lion_visavie/visavie/All_Visavie_Profiles/" + itm.ID + "/Profile_Client/image-download/djbSN6PSp8wJVbHUy7bHYOTO2Y0rS6MwZB0a012FfdxSRXJTCAKGDVvaZR5qrM4UnQSbXAJCBNgsYGTThNVtnBSu1nfgtYZ0GgHC?filepath=/" + var2 + "'></img>";
			}
		}
		%>
<p class="aligncenter"></p>
<%
		if(deal.Languages == "Français/French")
		{
			%>
<div class="bgclr">Client(e)</div>
<%
		}
		else if(deal.Languages == "Anglais/English")
		{
			%>
<div class="bgclr">Client(e)</div>
<%
		}
		%>
<div class="pad">
<%
		fet_deal = Contacts[ID == deal.Client];
		fet_deal2 = Contacts[ID == deal.Client_2];
		if(fet_deal.Full_Name.isEmpty() != true)
		{
			if(deal.Languages == "Français/French")
			{
				%>
<div>Client 1:&nbsp;<span><%=deal.Client.Full_Name%></span></div>
<%
			}
			else if(deal.Languages == "Anglais/English")
			{
				%>
<div>Customer 1:&nbsp;<span><%=deal.Client.Full_Name%></span></div>
<%
			}
		}
		if(fet_deal2.Full_Name.isEmpty() != true)
		{
			if(deal.Languages == "Français/French")
			{
				%>
<div>Client 2:&nbsp;<span><%=deal.Client_2.Full_Name%></span></div>
<%
			}
			else if(deal.Languages == "Anglais/English")
			{
				%>
<div>Customer 2:&nbsp;<span><%=deal.Client_2.Full_Name%></span></div>
<%
			}
		}
		%>
</div>
<%
		if(deal.Conseiller_Counselor != null)
		{
			if(deal.Languages == "Français/French")
			{
				%>
<div class="bgclr">CONSEILL(ÈRE)</div>
<%
			}
			else if(deal.Languages == "Anglais/English")
			{
				%>
<div class="bgclr">ADVISOR</div>
<%
			}
			%>
<div class="pad">
<%
			if(deal.Conseiller_Counselor.Advisor_Name != null)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div>Nom:&nbsp;<span><%=deal.Conseiller_Counselor.Advisor_Name%></span></div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div>Name:&nbsp;<span><%=deal.Conseiller_Counselor.Advisor_Name%></span></div>
<%
				}
			}
			if(deal.Conseiller_Counselor.Mobile_phone_num.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div>Téléphone:&nbsp;<span><%=deal.Conseiller_Counselor.Mobile_phone_num%></span></div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div>Phone:&nbsp;<span><%=deal.Conseiller_Counselor.Mobile_phone_num%></span></div>
<%
				}
			}
			if(deal.Conseiller_Counselor.Email != null)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div>Courriel:&nbsp;<span><%=deal.Conseiller_Counselor.Email%></span></div>
<%
				}
				if(deal.Languages == "Français/French")
				{
					%>
<div>Email:&nbsp;<span><%=deal.Conseiller_Counselor.Email%></span></div>
<%
				}
			}
			%>
</div>
<%
		}
		if(deal.Client != null)
		{
			if(deal.Languages == "Français/French")
			{
				%>
<div class="bgclr">Client 1</div>
<%
			}
			else if(deal.Languages == "Anglais/English")
			{
				%>
<div class="bgclr">Customer 1</div>
<%
			}
			%>
<div class="pad">
<%
			if(fet_deal.Date_of_Birth.isEmpty() != true)
			{
				age = (((zoho.currentdate - deal.Client.Date_of_Birth)) / (1000 * 3600 * 24 * 365)).round(0);
			}
			if(fet_deal.Full_Name.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div>Nom du client:&nbsp;<span><%=fet_deal.Full_Name%></span></div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div>Client name:&nbsp;<span><%=deal.Client.Full_Name%></span></div>
<%
				}
			}
			if(fet_deal.Date_of_Birth.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div>Date de naissance:&nbsp;<span><%=fet_deal.Date_of_Birth%></span></div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div>Date of Birth:&nbsp;<span><%=fet_deal.Date_of_Birth%></span></div>
<%
				}
			}
			if(fet_deal.Ville_City.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div>Demeure présentement:&nbsp;<span><%=deal.Client.Ville_City%></span></div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div>Currently living:&nbsp;<span><%=deal.Client.Ville_City%></span></div>
<%
				}
			}
			if(deal.Languages == "Français/French")
			{
				%>
<div>Personne(s) ressource(s) et lien</div>
<%
				for each  subform_contcat in deal.Homecare_Deal_Contacts
				{
					fet_contcat = Contacts[ID == subform_contcat.Contacts];
					if(fet_contcat.Kind_of_contact != "Client")
					{
						if(fet_contcat.Type_of_contact1.isEmpty() != true)
						{
							%>
<div style= 'font-weight:normal;'><span><%=fet_contcat.Full_Name%>&nbsp;-&nbsp;<%=fet_contcat.Type_of_contact1%></span></div>
<%
						}
						else
						{
							%>
<div style= 'font-weight:normal;'><span><%=fet_contcat.Full_Name%>&nbsp;&nbsp;</span></div>
<%
						}
					}
				}
			}
			else if(deal.Languages == "Anglais/English")
			{
				%>
<div>Contact person(s) and link:</div>
<%
				for each  subform_contcat in deal.Homecare_Deal_Contacts
				{
					fet_contcat = Contacts[ID == subform_contcat.Contacts];
					if(fet_contcat.Kind_of_contact != "Client")
					{
						if(fet_contcat.Type_of_contact1.isEmpty() != true)
						{
							%>
<div style= 'font-weight:normal;'><span><%=fet_contcat.Full_Name%>&nbsp;-&nbsp;<%=fet_contcat.Type_of_contact1%></span></div>
<%
						}
						else
						{
							%>
<div style= 'font-weight:normal;'><span><%=fet_contcat.Full_Name%>&nbsp;&nbsp;</span></div>
<%
						}
					}
				}
			}
			if(deal.Languages == "Français/French")
			{
				%>
<div>Date d’envoi du profil:&nbsp;<span><%=deal.Client.Added_Time.toDate()%></span></div>
<%
			}
			else if(deal.Languages == "Anglais/English")
			{
				%>
<div>Date profile sent:&nbsp;<span><%=deal.Client.Added_Time.toDate()%></span></div>
<%
			}
			%>
</div>
<%
			if(fet_deal.Budget_range.isEmpty() != true || fet_deal.Preference_on_the_size_of_the_residence.isEmpty() != true || fet_deal.Type_s_of_accommodation_sought.isEmpty() != true || fet_deal.Client_type_s.isEmpty() != true || fet_deal.Notes_Accomodation.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">LOGEMENT RECHERCHÉ</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">ACCOMODATION SOUGHT</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client.Budget_range != null)
				{
					budget_list = List();
					for each  budget in deal.Client.Budget_range
					{
						budget_list.add(budget);
					}
					if(!budget_list.isEmpty() == true)
					{
						if(deal.Languages == "Français/French")
						{
							%>
<div>Gamme budgétaire&nbsp;</div>
<%
						}
						else if(deal.Languages == "Anglais/English")
						{
							%>
<div>Budget range&nbsp;</div>
<%
						}
						for each  bud in budget_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=bud%></span></div>
<%
						}
					}
				}
				if(deal.Client.Preference_on_the_size_of_the_residence != null)
				{
					preference_list = List();
					for each  preference in deal.Client.Preference_on_the_size_of_the_residence
					{
						preference_list.add(preference);
					}
					if(!preference_list.isEmpty() == true)
					{
						if(deal.Languages == "Français/French")
						{
							%>
<div>Préférence sur la taille de la résidence:&nbsp;</div>
<%
						}
						else if(deal.Languages == "Anglais/English")
						{
							%>
<div>Preference on the size of the residence:&nbsp;</div>
<%
						}
						for each  pref in preference_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=pref%></span></div>
<%
						}
					}
				}
				if(deal.Client.Type_s_of_accommodation_sought != null)
				{
					accomadation_list = List();
					for each  accomadation in deal.Client.Type_s_of_accommodation_sought
					{
						accomadation_list.add(accomadation);
					}
					if(!accomadation_list.isEmpty() == true)
					{
						if(deal.Languages == "Français/French")
						{
							%>
<div>Type de logement:&nbsp;</div>
<%
						}
						else if(deal.Languages == "Anglais/English")
						{
							%>
<div>Housing type:&nbsp;</div>
<%
						}
						for each  accom in accomadation_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=accom%></span></div>
<%
						}
					}
				}
				if(deal.Client.Client_type_s != null)
				{
					client_type_list = List();
					for each  client_types in deal.Client.Client_type_s
					{
						client_type_list.add(client_types);
					}
					if(!client_type_list.isEmpty() == true)
					{
						if(deal.Languages == "Français/French")
						{
							%>
<div>Customer type(s)/Customer type(s)&nbsp;</div>
<%
						}
						else if(deal.Languages == "Anglais/English")
						{
							%>
<div>Type(s) de client/Client type(s)&nbsp;</div>
<%
						}
						for each  clie_typ in client_type_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=clie_typ%></span></div>
<%
						}
					}
				}
				if(deal.Client.Notes_Accomodation.isEmpty() != true)
				{
					%>
<div>Remarques - Hébergement/Notes - Accomodation</div>
<div><span><%=deal.Client.Notes_Accomodation%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal.Hygiene.isEmpty() != true || fet_deal.Dressing.isEmpty() != true || fet_deal.Nutrition.isEmpty() != true || fet_deal.Urinary_incontinence.isEmpty() != true || fet_deal.Faecal_incontinence.isEmpty() != true || fet_deal.Use_of_toilets.isEmpty() != true || fet_deal.Vision.isEmpty() != true || fet_deal.Hearing.isEmpty() != true || fet_deal.Communication1.isEmpty() != true || fet_deal.Notes_Autonomy_Assessment.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">ÉVALUATION AUTONOMIE</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">AUTONOMY ASSESSMENT</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client.Hygiene != null)
				{
					%>
<div>Hygiène/Hygiene</div>
<div><span><%=deal.Client.Hygiene%></span></div>
<%
				}
				if(deal.Client.Dressing != null)
				{
					%>
<div>Habillement/Dressing</div>
<div><span><%=deal.Client.Dressing%></span></div>
<%
				}
				if(deal.Client.Nutrition != null)
				{
					%>
<div>Alimentation/Nutrition</div>
<div><span><%=deal.Client.Nutrition%></span></div>
<%
				}
				if(deal.Client.Urinary_incontinence != null)
				{
					%>
<div>Incontinence urinaire/Urinary incontinence</div>
<div><span><%=deal.Client.Urinary_incontinence%></span></div>
<%
				}
				if(deal.Client.Faecal_incontinence != null)
				{
					%>
<div>Incontinence fécale/Faecal incontinence</div>
<div><span><%=deal.Client.Faecal_incontinence%></span></div>
<%
				}
				if(deal.Client.Use_of_toilets != null)
				{
					%>
<div>Utilisation des toilettes/Use of toilets</div>
<div><span><%=deal.Client.Use_of_toilets%></span></div>
<%
				}
				if(deal.Client.Vision != null)
				{
					%>
<div>Vision</div>
<div><span><%=deal.Client.Vision%></span></div>
<%
				}
				if(deal.Client.Hearing != null)
				{
					%>
<div>Audition/Hearing</div>
<div><span><%=deal.Client.Hearing%></span></div>
<%
				}
				if(deal.Client.Communication1 != null)
				{
					%>
<div>Communication</div>
<div><span><%=deal.Client.Communication1%></span></div>
<%
				}
				if(deal.Client.Notes_Autonomy_Assessment != null)
				{
					%>
<div>Remarques - Évaluation de l'autonomie/Notes - Autonomy Assessment</div>
<div><span><%=deal.Client.Notes_Autonomy_Assessment%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal.Mobility_equipment.isEmpty() != true || fet_deal.Indoor_mobility.isEmpty() != true || fet_deal.Transfer_assistance.isEmpty() != true || fet_deal.Notes_Mobility.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">MOBILITÉ</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">MOBILITY</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client.Mobility_equipment != null)
				{
					%>
<div>Équipement pour mobilité/Mobility equipment</div>
<div><span><%=deal.Client.Mobility_equipment%></span></div>
<%
				}
				if(deal.Client.Indoor_mobility != null)
				{
					%>
<div>Mobilité à l'intérieur/Indoor mobility</div>
<div><span><%=deal.Client.Indoor_mobility%></span></div>
<%
				}
				if(deal.Client.Transfer_assistance != null)
				{
					%>
<div>Assistance aux transferts/Transfer assistance</div>
<div><span><%=deal.Client.Transfer_assistance%></span></div>
<%
				}
				if(deal.Client.Notes_Mobility != "")
				{
					%>
<div>Remarques - Mobilité/Notes - Mobility</div><div><span><%=deal.Client.Notes_Mobility%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal.Medication_management.isEmpty() != true || fet_deal.Oxygene.isEmpty() != true || fet_deal.Insulin_injection.isEmpty() != true || fet_deal.Notes_Medication.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">MÉDICATION</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">MEDICATION</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client.Medication_management != null)
				{
					%>
<div>Distribution/Distribution</div>
<div><span><%=deal.Client.Medication_management%></span></div>
<%
				}
				if(deal.Client.Oxygene != null)
				{
					%>
<div>Oxygène/Oxygene</div>
<div><span><%=deal.Client.Oxygene%></span></div>
<%
				}
				if(deal.Client.Insulin_injection != null)
				{
					%>
<div>Injection insuline/Insulin injection</div>
<div><span><%=deal.Client.Insulin_injection%></span></div>
<%
				}
				if(deal.Client.Notes_Medication.isEmpty() != true)
				{
					%>
<div>Remarques - Médicaments/Notes - Medication</div><div><span><%=deal.Client.Notes_Medication%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal.Memory_impairment.isEmpty() != true || fet_deal.Orientation_disorder.isEmpty() != true || fet_deal.Type_s_of_neurocognitive_disorder.isEmpty() != true || fet_deal.Aggressiveness.isEmpty() != true || fet_deal.Wandering.isEmpty() != true && fet_deal.Notes_Neurocognitive_State.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">ÉTAT NEUROCOGNITIF</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">NEUROCOGNITIVE STATE</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client.Memory_impairment != null)
				{
					%>
<div>Trouble de la mémoire/Memory impairment</div>
<div><span><%=deal.Client.Memory_impairment%></span></div>
<%
				}
				if(deal.Client.Orientation_disorder != null)
				{
					orientation_list = List();
					for each  orient in deal.Client.Orientation_disorder
					{
						orientation_list.add(orient);
					}
					if(!orientation_list.isEmpty() == true)
					{
						%>
<div>Trouble de l'orientation/Orientation disorder</div>
<%
						for each  orie in orientation_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=orie%></span></div>
<%
						}
					}
				}
				if(deal.Client.Type_s_of_neurocognitive_disorder != null)
				{
					%>
<div>Type(s) troubles neuro./neuro. disorder</div>
<div><span><%=deal.Client.Type_s_of_neurocognitive_disorder%></span></div>
<%
				}
				if(deal.Client.Aggressiveness != null)
				{
					%>
<div>Aggressiveness</div>
<div><span><%=deal.Client.Aggressiveness%></span></div>
<%
				}
				if(deal.Client.Wandering != null)
				{
					%>
<div>Errance/Wandering</div>
<div><span><%=deal.Client.Wandering%></span></div>
<%
				}
				if(deal.Client.Notes_Neurocognitive_State != "")
				{
					%>
<div>Remarques - État neurocognitif/Notes - Neurocognitive State</div><div><span><%=deal.Client.Notes_Neurocognitive_State%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal.Meals.isEmpty() != true || fet_deal.Laundry.isEmpty() != true || fet_deal.Housekeeping.isEmpty() != true || fet_deal.Notes_IADLs.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">ACTIVITÉS VIE DOMESTIQUE</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">DOMESTIC LIFE ACTIVITIES</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client.Meals != null)
				{
					%>
<div>Repas/Meals</div>
<div><span><%=deal.Client.Meals%></span></div>
<%
				}
				if(deal.Client.Laundry != null)
				{
					laundry_list = List();
					for each  laundry in deal.Client.Laundry
					{
						laundry_list.add(laundry);
					}
					if(!laundry_list.isEmpty() == true)
					{
						%>
<div>Buanderie/Laundry</div>
<%
						for each  laun in laundry_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=laun%></span></div>
<%
						}
					}
				}
				if(deal.Client.Housekeeping != null)
				{
					%>
<div>Entretien ménager/Housekeeping</div>
<div><span><%=deal.Client.Housekeeping%></span></div>
<%
				}
				if(deal.Client.Notes_IADLs != "")
				{
					%>
<div>Remarques - (IADL)/Notes - (IADLs)</div><div><span><%=deal.Client.Notes_IADLs%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal.Smoker.isEmpty() != true || fet_deal.Pet_Animal.isEmpty() != true || fet_deal.Protection_mandate.isEmpty() != true || fet_deal.Evaluation_s_available_Avail_rating_s.isEmpty() != true || fet_deal.Benefit_from_the_help_of_the_CLSC.isEmpty() != true || fet_deal.Notes_Other.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">AUTRE</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">OTHER</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client.Smoker != null)
				{
					%>
<div>Fumeur/Smoker</div>
<div><span><%=deal.Client.Smoker%></span></div>
<%
				}
				if(deal.Client.Pet_Animal != null)
				{
					%>
<div>Animal de compagnie/Pet</div>
<div><span><%=deal.Client.Pet_Animal%></span></div>
<%
				}
				if(deal.Client.Protection_mandate != null)
				{
					%>
<div>Mandat de protection/Protection mandate</div>
<div><span><%=deal.Client.Protection_mandate%></span></div>
<%
				}
				if(deal.Client.Evaluation_s_available_Avail_rating_s != null)
				{
					evaluation_list = List();
					for each  avaluation in deal.Client.Evaluation_s_available_Avail_rating_s
					{
						evaluation_list.add(avaluation);
					}
					if(!evaluation_list.isEmpty() == true)
					{
						%>
<div>Évaluation(s) disponible(s)/Available evaluation(s)</div>
<%
						for each  eval in evaluation_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=eval%></span></div>
<%
						}
					}
				}
				if(deal.Client.Benefit_from_the_help_of_the_CLSC != null)
				{
					%>
<div>Aide du CLSC/Help from CLSC</div>
<div><span><%=deal.Client.Benefit_from_the_help_of_the_CLSC%></span></div>
<%
				}
				if(deal.Client.Notes_Other.isEmpty() != true)
				{
					%>
<div>Remarques - Autre/Notes - Other</div>
<div><span><%=deal.Client.Notes_Other%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal.Interests_specifics.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">COMMENTAIRES</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">COMMENTS</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client.Interests_specifics != "")
				{
					%>
<div>Intérêts, Particularités/Interests, specifics</div>
<div><span><%=deal.Client.Interests_specifics%></span></div>
<%
				}
				%>
</div>
<%
			}
		}
		if(deal.Client_2 != null)
		{
			if(deal.Languages == "Français/French")
			{
				%>
<div class="bgclr">Client 2</div>
<%
			}
			else if(deal.Languages == "Anglais/English")
			{
				%>
<div class="bgclr">Customer 2</div>
<%
			}
			%>
<div class="pad">
<%
			if(fet_deal2.Date_of_Birth.isEmpty() != true)
			{
				age = (((zoho.currentdate - deal.Client_2.Date_of_Birth)) / (1000 * 3600 * 24 * 365)).round(0);
			}
			if(fet_deal2.Full_Name.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div>Nom du client:&nbsp;<span><%=fet_deal2.Full_Name%></span></div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div>Client name:&nbsp;<span><%=deal.Client_2.Full_Name%></span></div>
<%
				}
			}
			if(fet_deal.Date_of_Birth.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div>Date de naissance:&nbsp;<span><%=fet_deal.Date_of_Birth%></span></div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div>Date of Birth:&nbsp;<span><%=fet_deal.Date_of_Birth%></span></div>
<%
				}
			}
			if(fet_deal2.Ville_City.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div>Demeure présentement:&nbsp;<span><%=deal.Client_2.Ville_City%></span></div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div>Currently living:&nbsp;<span><%=deal.Client_2.Ville_City%></span></div>
<%
				}
			}
			if(deal.Languages == "Français/French")
			{
				%>
<div>Personne(s) ressource(s) et lien</div>
<%
				for each  subform_contcat in deal.Homecare_Deal_Contacts
				{
					fet_contcat = Contacts[ID == subform_contcat.Contacts];
					if(fet_contcat.Kind_of_contact != "Client")
					{
						if(fet_contcat.Type_of_contact1.isEmpty() != true)
						{
							%>
<div style= 'font-weight:normal;'><span><%=fet_contcat.Full_Name%>&nbsp;-&nbsp;<%=fet_contcat.Type_of_contact1%></span></div>
<%
						}
						else
						{
							%>
<div style= 'font-weight:normal;'><span><%=fet_contcat.Full_Name%>&nbsp;&nbsp;</span></div>
<%
						}
					}
				}
			}
			else if(deal.Languages == "Anglais/English")
			{
				%>
<div>Contact person(s) and link:</div>
<%
				for each  subform_contcat in deal.Homecare_Deal_Contacts
				{
					fet_contcat = Contacts[ID == subform_contcat.Contacts];
					if(fet_contcat.Kind_of_contact != "Client")
					{
						if(fet_contcat.Type_of_contact1.isEmpty() != true)
						{
							%>
<div style= 'font-weight:normal;'><span><%=fet_contcat.Full_Name%>&nbsp;-&nbsp;<%=fet_contcat.Type_of_contact1%></span></div>
<%
						}
						else
						{
							%>
<div style= 'font-weight:normal;'><span><%=fet_contcat.Full_Name%>&nbsp;&nbsp;</span></div>
<%
						}
					}
				}
			}
			if(deal.Languages == "Français/French")
			{
				%>
<div>Date d’envoi du profil:&nbsp;<span><%=deal.Client_2.Added_Time.toDate()%></span></div>
<%
			}
			else if(deal.Languages == "Anglais/English")
			{
				%>
<div>Date profile sent:&nbsp;<span><%=deal.Client_2.Added_Time.toDate()%></span></div>
<%
			}
			%>
</div>
<%
			if(fet_deal2.Budget_range.isEmpty() != true || fet_deal2.Preference_on_the_size_of_the_residence.isEmpty() != true || fet_deal2.Type_s_of_accommodation_sought.isEmpty() != true || fet_deal2.Client_type_s.isEmpty() != true || fet_deal2.Notes_Accomodation.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">LOGEMENT RECHERCHÉ</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">ACCOMODATION SOUGHT</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client_2.Budget_range != null)
				{
					budget_list = List();
					for each  budget in deal.Client_2.Budget_range
					{
						budget_list.add(budget);
					}
					if(!budget_list.isEmpty() == true)
					{
						if(deal.Languages == "Français/French")
						{
							%>
<div>Gamme budgétaire&nbsp;</div>
<%
						}
						else if(deal.Languages == "Anglais/English")
						{
							%>
<div>Budget range&nbsp;</div>
<%
						}
						for each  bud in budget_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=bud%></span></div>
<%
						}
					}
				}
				if(deal.Client.Preference_on_the_size_of_the_residence != null)
				{
					preference_list = List();
					for each  preference in deal.Client.Preference_on_the_size_of_the_residence
					{
						preference_list.add(preference);
					}
					if(!preference_list.isEmpty() == true)
					{
						if(deal.Languages == "Français/French")
						{
							%>
<div>Préférence sur la taille de la résidence&nbsp;</div>
<%
						}
						else if(deal.Languages == "Anglais/English")
						{
							%>
<div>Preference on the size of the residence&nbsp;</div>
<%
						}
						for each  pref in preference_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=pref%></span></div>
<%
						}
					}
				}
				if(deal.Client_2.Type_s_of_accommodation_sought != null)
				{
					accomadation_list = List();
					for each  accomadation in deal.Client_2.Type_s_of_accommodation_sought
					{
						accomadation_list.add(accomadation);
					}
					if(!accomadation_list.isEmpty() == true)
					{
						if(deal.Languages == "Français/French")
						{
							%>
<div>Type de logement&nbsp;</div>
<%
						}
						else if(deal.Languages == "Anglais/English")
						{
							%>
<div>Housing type&nbsp;</div>
<%
						}
						for each  accom in accomadation_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=accom%></span></div>
<%
						}
					}
				}
				if(deal.Client_2.Client_type_s != null)
				{
					client_type_list = List();
					for each  client_types in deal.Client_2.Client_type_s
					{
						client_type_list.add(client_types);
					}
					if(!client_type_list.isEmpty() == true)
					{
						if(deal.Languages == "Français/French")
						{
							%>
<div>Customer type(s)/Customer type(s)&nbsp;</div>
<%
						}
						else if(deal.Languages == "Anglais/English")
						{
							%>
<div>Type(s) de client/Client type(s)&nbsp;</div>
<%
						}
						for each  clie_typ in client_type_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=clie_typ%></span></div>
<%
						}
					}
				}
				%>
</div>
<%
			}
			if(fet_deal2.Hygiene.isEmpty() != true || fet_deal2.Dressing.isEmpty() != true || fet_deal2.Nutrition.isEmpty() != true || fet_deal2.Urinary_incontinence.isEmpty() != true || fet_deal2.Faecal_incontinence.isEmpty() != true || fet_deal2.Use_of_toilets.isEmpty() != true || fet_deal2.Vision.isEmpty() != true || fet_deal2.Hearing.isEmpty() != true || fet_deal2.Communication1.isEmpty() != true || fet_deal2.Notes_Autonomy_Assessment.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">ÉVALUATION AUTONOMIE</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">AUTONOMY ASSESSMENT</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client_2.Hygiene != null)
				{
					%>
<div>Hygiène/Hygiene</div>
<div><span><%=deal.Client_2.Hygiene%></span></div>
<%
				}
				if(deal.Client_2.Dressing != null)
				{
					%>
<div>Habillement/Dressing</div>
<div><span><%=deal.Client_2.Dressing%></span></div>
<%
				}
				if(deal.Client_2.Nutrition != null)
				{
					%>
<div>Alimentation/Nutrition</div>
<div><span><%=deal.Client_2.Nutrition%></span></div>
<%
				}
				if(deal.Client_2.Urinary_incontinence != null)
				{
					%>
<div>Incontinence urinaire/Urinary incontinence</div>
<div><span><%=deal.Client_2.Urinary_incontinence%></span></div>
<%
				}
				if(deal.Client_2.Faecal_incontinence != null)
				{
					%>
<div>Incontinence fécale/Faecal incontinence</div>
<div><span><%=deal.Client_2.Faecal_incontinence%></span></div>
<%
				}
				if(deal.Client_2.Use_of_toilets != null)
				{
					%>
<div>Utilisation des toilettes/Use of toilets</div>
<div><span><%=deal.Client_2.Use_of_toilets%></span></div>
<%
				}
				if(deal.Client_2.Vision != null)
				{
					%>
<div>Vision</div>
<div><span><%=deal.Client_2.Vision%></span></div>
<%
				}
				if(deal.Client_2.Hearing != null)
				{
					%>
<div>Audition/Hearing</div>
<div><span><%=deal.Client_2.Hearing%></span></div>
<%
				}
				if(deal.Client_2.Communication1 != null)
				{
					%>
<div>Communication</div>
<div><span><%=deal.Client_2.Communication1%></span></div>
<%
				}
				if(deal.Client_2.Notes_Autonomy_Assessment != null)
				{
					%>
<div>Remarques - Évaluation de l'autonomie/Notes - Autonomy Assessment</div>
<div><span><%=deal.Client_2.Notes_Autonomy_Assessment%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal2.Mobility_equipment.isEmpty() != true || fet_deal2.Indoor_mobility.isEmpty() != true || fet_deal2.Transfer_assistance.isEmpty() != true || fet_deal2.Notes_Mobility.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">MOBILITÉ</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">MOBILITY</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client_2.Mobility_equipment != null)
				{
					%>
<div>Équipement pour mobilité/Mobility equipment</div>
<div><span><%=deal.Client_2.Mobility_equipment%></span></div>
<%
				}
				if(deal.Client_2.Indoor_mobility != null)
				{
					%>
<div>Mobilité à l'intérieur/Indoor mobility</div>
<div><span><%=deal.Client_2.Indoor_mobility%></span></div>
<%
				}
				if(deal.Client_2.Transfer_assistance != null)
				{
					%>
<div>Assistance aux transferts/Transfer assistance</div>
<div><span><%=deal.Client_2.Transfer_assistance%></span></div>
<%
				}
				if(deal.Client_2.Notes_Mobility != "")
				{
					%>
<div>Remarques - Mobilité/Notes - Mobility</div><div><span><%=deal.Client_2.Notes_Mobility%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal2.Medication_management.isEmpty() != true || fet_deal2.Oxygene.isEmpty() != true || fet_deal2.Insulin_injection.isEmpty() != true || fet_deal2.Notes_Medication.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">MÉDICATION</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">MEDICATION</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client_2.Medication_management != null)
				{
					%>
<div>Distribution/Distribution</div>
<div><span><%=deal.Client_2.Medication_management%></span></div>
<%
				}
				if(deal.Client_2.Oxygene != null)
				{
					%>
<div>Oxygène/Oxygene</div>
<div><span><%=deal.Client_2.Oxygene%></span></div>
<%
				}
				if(deal.Client_2.Insulin_injection != null)
				{
					%>
<div>Injection insuline/Insulin injection</div>
<div><span><%=deal.Client_2.Insulin_injection%></span></div>
<%
				}
				if(deal.Client_2.Notes_Medication != "")
				{
					%>
<div>Remarques - Médicaments/Notes - Medication</div><div><span><%=deal.Client_2.Notes_Medication%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal2.Memory_impairment.isEmpty() != true || fet_deal2.Orientation_disorder.isEmpty() != true || fet_deal2.Type_s_of_neurocognitive_disorder.isEmpty() != true || fet_deal2.Aggressiveness.isEmpty() != true || fet_deal2.Wandering.isEmpty() != true && fet_deal2.Notes_Neurocognitive_State.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">ÉTAT NEUROCOGNITIF</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">NEUROCOGNITIVE STATE</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client_2.Memory_impairment != null)
				{
					%>
<div>Trouble de la mémoire/Memory impairment</div>
<div><span><%=deal.Client_2.Memory_impairment%></span></div>
<%
				}
				if(deal.Client_2.Orientation_disorder != null)
				{
					orientation_list = List();
					for each  orient in deal.Client_2.Orientation_disorder
					{
						orientation_list.add(orient);
					}
					if(!orientation_list.isEmpty() == true)
					{
						%>
<div>Trouble de l'orientation/Orientation disorder</div>
<%
						for each  orie in orientation_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=orie%></span></div>
<%
						}
					}
				}
				if(deal.Client_2.Type_s_of_neurocognitive_disorder != null)
				{
					%>
<div>Type(s) troubles neuro./neuro. disorder</div>
<div><span><%=deal.Client_2.Type_s_of_neurocognitive_disorder%></span></div>
<%
				}
				if(deal.Client_2.Aggressiveness != null)
				{
					%>
<div>Aggressiveness</div>
<div><span><%=deal.Client_2.Aggressiveness%></span></div>
<%
				}
				if(deal.Client_2.Wandering != null)
				{
					%>
<div>Errance/Wandering</div>
<div><span><%=deal.Client_2.Wandering%></span></div>
<%
				}
				if(deal.Client_2.Notes_Neurocognitive_State != "")
				{
					%>
<div>Remarques - État neurocognitif/Notes - Neurocognitive State</div><div><span><%=deal.Client.Notes_Neurocognitive_State%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal2.Meals.isEmpty() != true || fet_deal2.Laundry.isEmpty() != true || fet_deal2.Housekeeping.isEmpty() != true || fet_deal2.Notes_IADLs.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">ACTIVITÉS VIE DOMESTIQUE</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">DOMESTIC LIFE ACTIVITIES</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client_2.Meals != null)
				{
					%>
<div>Repas/Meals</div>
<div><span><%=deal.Client_2.Meals%></span></div>
<%
				}
				if(deal.Client_2.Laundry != null)
				{
					laundry_list = List();
					for each  laundry in deal.Client_2.Laundry
					{
						laundry_list.add(laundry);
					}
					if(!laundry_list.isEmpty() == true)
					{
						%>
<div>Buanderie/Laundry</div>
<%
						for each  laun in laundry_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=laun%></span></div>
<%
						}
					}
				}
				if(deal.Client_2.Housekeeping != null)
				{
					%>
<div>Entretien ménager/Housekeeping</div>
<div><span><%=deal.Client_2.Housekeeping%></span></div>
<%
				}
				if(deal.Client_2.Notes_IADLs != "")
				{
					%>
<div>Remarques - (IADL)/Notes - (IADLs)</div><div><span><%=deal.Client_2.Notes_IADLs%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal2.Smoker.isEmpty() != true || fet_deal2.Pet_Animal.isEmpty() != true || fet_deal2.Protection_mandate.isEmpty() != true || fet_deal2.Evaluation_s_available_Avail_rating_s.isEmpty() != true || fet_deal2.Benefit_from_the_help_of_the_CLSC.isEmpty() != true || fet_deal2.Notes_Other.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">AUTRE</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">OTHER</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client_2.Smoker != null)
				{
					%>
<div>Fumeur/Smoker</div>
<div><span><%=deal.Client_2.Smoker%></span></div>
<%
				}
				if(deal.Client_2.Pet_Animal != null)
				{
					%>
<div>Animal de compagnie/Pet</div>
<div><span><%=deal.Client_2.Pet_Animal%></span></div>
<%
				}
				if(deal.Client_2.Protection_mandate != null)
				{
					%>
<div>Mandat de protection/Protection mandate</div>
<div><span><%=deal.Client_2.Protection_mandate%></span></div>
<%
				}
				if(deal.Client_2.Evaluation_s_available_Avail_rating_s != null)
				{
					evaluation_list = List();
					for each  avaluation in deal.Client_2.Evaluation_s_available_Avail_rating_s
					{
						evaluation_list.add(avaluation);
					}
					if(!evaluation_list.isEmpty() == true)
					{
						%>
<div>Évaluation(s) disponible(s)/Available evaluation(s)</div>
<%
						for each  eval in evaluation_list
						{
							%>
<div style= 'font-weight:normal;'><span><%=eval%></span></div>
<%
						}
					}
				}
				if(deal.Client_2.Benefit_from_the_help_of_the_CLSC != null)
				{
					%>
<div>Aide du CLSC/Help from CLSC</div>
<div><span><%=deal.Client_2.Benefit_from_the_help_of_the_CLSC%></span></div>
<%
				}
				if(deal.Client_2.Notes_Other.isEmpty() != true)
				{
					%>
<div>Remarques - Autre/Notes - Other</div>
<div><span><%=deal.Client.Notes_Other%></span></div>
<%
				}
				%>
</div>
<%
			}
			if(fet_deal2.Interests_specifics.isEmpty() != true)
			{
				if(deal.Languages == "Français/French")
				{
					%>
<div class="bgclr">COMMENTAIRES</div>
<%
				}
				else if(deal.Languages == "Anglais/English")
				{
					%>
<div class="bgclr">COMMENTS</div>
<%
				}
				%>
<div class="pad">
<%
				if(deal.Client_2.Interests_specifics != "")
				{
					%>
<div>Intérêts, Particularités/Interests, specifics</div>
<div><span><%=deal.Client_2.Interests_specifics%></span></div>
<%
				}
				%>
</div>
<%
			}
		}
		%>
<!--</div>
</div>-->
</div>
</body>
</html>
<%
	}

}%>
