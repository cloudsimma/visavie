try 
{
	/* Advisor Info*/
	if(input.Counsleor_ID != null && input.Counsleor_ID != "")
	{
		Advisor_info = Advisor[CRM_AdvisorID == input.Counsleor_ID].ID;
		input.Counselor = Advisor_info;
	}
	if(input.Temporary_counselor_ID != null && input.Temporary_counselor_ID != "")
	{
		Temp_advisor_info = Advisor[CRM_AdvisorID == input.Temporary_counselor_ID].ID;
		input.Conseiller_temporaire = Temp_advisor_info;
	}
}
catch (e)
{
	thisapp.addDeveloperLog("Creator : Lead","Passing Values for Lookup fields -Advisor",input.ID.toString(),e);
}
