void update_Couselor()
{
	getAD_ID = 4846491000010432501;
	for each  adv_res in Advisor[CRM_AdvisorID == getAD_ID.toString()]
	{
		CRM_ID = adv_res.CRM_AdvisorID;
		for each  deal_res in Deals[Advisor_ID == CRM_ID]
		{
			deal_res.Counselor=adv_res.ID;
		}
	}
}