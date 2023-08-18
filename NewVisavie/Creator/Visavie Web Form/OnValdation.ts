// contactavailable = false;
// contactAvailable = false;
if(Language == "French")
{
	if(input.condition_fr == true || input.condition_fr == false)
	{
		if(Nom1.first_name1 == "")
		{
			alert "Veuillez saisir le prénom";
			cancel submit;
		}
		else if(Nom1.last_name1 == "")
		{
			alert "Veuillez entrer le nom de famille";
			cancel submit;
		}
		else if(condition_fr == false)
		{
			alert "S’il vous plaît accepter les termes et conditions";
			cancel submit;
		}
	}
	if(input.Preffered_fr == "Courriel/Email")
	{
		if(Email_fr.isEmpty() == true)
		{
			alert "Veuillez remplir Courriel";
			cancel submit;
		}
	}
	if(input.Preffered_fr == "Téléphone cellulaire/Cell phone")
	{
		if(T_l_phone_Cellulaire.isEmpty() == true)
		{
			alert "Veuillez remplir Téléphone Cellulaire";
			cancel submit;
		}
		else
		{
			count = input.T_l_phone_Cellulaire.toString();
			if(count.length() < 10)
			{
				alert "Veuillez entrer 10 chiffres dans Téléphone portable";
				cancel submit;
			}
		}
	}
	if(input.Preffered_fr == "Téléphone maison/Home phone")
	{
		if(T_l_phone_maison.isEmpty() == true)
		{
			alert "Veuillez remplir Téléphone maison";
			cancel submit;
		}
		else
		{
			count = input.T_l_phone_maison.toString();
			if(count.length() < 10)
			{
				alert "Veuillez entrer 10 chiffres dans le téléphone personnel";
				cancel submit;
			}
		}
	}
	if(input.Preffered_fr == "Téléphone travail/Work phone")
	{
		if(T_l_phone_travail.isEmpty() == true)
		{
			alert "Veuillez remplir Téléphone travail";
			cancel submit;
		}
		if(Poste_de_t_l_phone_professionnel.isEmpty() == true)
		{
			alert "Veuillez remplir l’extension de téléphone de travail";
			cancel submit;
		}
		else
		{
			count = input.T_l_phone_travail.toString();
			if(count.length() < 10)
			{
				alert "Veuillez saisir 10 chiffres dans téléphone professionnel";
				cancel submit;
			}
		}
	}
	if(type_service_fr == "Aide à domicile/Home help")
	{
		if(Date_de_debut_fr.isEmpty() == true)
		{
			alert "Veuillez remplir Aide à domicile";
			cancel submit;
		}
	}
	if(type_service_fr == "Trouver une résidence/Find a retirement home")
	{
		if(date_de_demen_fr.isEmpty() == true)
		{
			alert "Veuillez remplir Trouver une résidence";
			cancel submit;
		}
	}
	// 	contactAvailable = thisapp.CRM.visaviewebform_2(input.condition_fr,input.Email_fr,input.T_l_phone_travail.toString(),input.T_l_phone_maison.toString(),input.T_l_phone_Cellulaire.toString());
	// 	if(contactAvailable = true)
	// 	{
	// 		alert "Déjà le plomb est disponible avec les entrées similaires. Veuillez donc saisir des données différentes";
	// 		cancel submit;
	// 	}
}
else if(Language == "English")
{
	if(input.decision == true || input.decision == false)
	{
		if(Name.first_name2 == "")
		{
			alert "Please fill the First Name";
			cancel submit;
		}
		else if(Name.last_name2 == "")
		{
			alert "Please fill the Last Name";
			cancel submit;
		}
		else if(terms == false)
		{
			alert "Please accept terms and condition";
			cancel submit;
		}
	}
	if(input.preffered == "Courriel/Email")
	{
		if(Email.isEmpty() == true)
		{
			alert "Please fill the Email";
			cancel submit;
		}
	}
	if(input.preffered == "Téléphone cellulaire/Cell phone")
	{
		if(Cell_phone.isEmpty() == true)
		{
			alert "Please fill the Cell phone";
			cancel submit;
		}
		else
		{
			count = input.Cell_phone.toString();
			if(count.length() < 10)
			{
				alert "Please enter 10 digits in Cell phone";
				cancel submit;
			}
		}
	}
	if(input.preffered == "Téléphone maison/Home phone")
	{
		if(Home_phone.isEmpty() == true)
		{
			alert "Please fill the Home phone";
			cancel submit;
		}
		else
		{
			count = input.Home_phone.toString();
			if(count.length() < 10)
			{
				alert "Please enter 10 digits in Home phone";
				cancel submit;
			}
		}
	}
	if(input.preffered == "Téléphone travail/Work phone")
	{
		if(Work_phone.isEmpty() == true)
		{
			alert "Please fill the Work phone";
			cancel submit;
		}
		if(Work_phone_Extension.isEmpty() == true)
		{
			alert "Please fill the Work Phone Extension";
			cancel submit;
		}
		else
		{
			count = input.Work_phone.toString();
			if(count.length() < 10)
			{
				alert "Please enter 10 digits in Work phone";
				cancel submit;
			}
		}
	}
	if(Types_of_service_you_are_looking_for == "Aide à domicile/Home help")
	{
		if(Home_help_start_date.isEmpty() == true)
		{
			alert "Please fill the Home help";
			cancel submit;
		}
	}
	if(Types_of_service_you_are_looking_for == "Trouver une résidence/Find a retirement home")
	{
		if(Desired_moving_date.isEmpty() == true)
		{
			alert "Please fill the Find a retirement home";
			cancel submit;
		}
	}
	// 	contactavailable = thisapp.CRM.visavie_webForm(input.decision,input.Email,input.Work_phone.toString(),input.Home_phone.toString(),input.Cell_phone.toString());
	// 	if(contactavailable = true)
	// 	{
	// 		alert "Already lead is avaialable with the similar entries. So please enter different data";
	// 		cancel submit;
	// 	}
}
