<%{
	%>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
<div class="container-fluid">
<div style= class="heading center-align"><img src="https://i.ibb.co/r709sfx/Visavie.png" class="mx-auto d-block" style="width:20%" ></div>
<br>
<%
	get_contact_from_crm = zoho.crm.getRecordById("Contacts",contactID.tolong(),Map(),"zoho_one");
	homecare_contacts = Homecare_Deal_Contacts[CRM_ID == contactID.toString()];
	deals_contacts = Deal_Contacts[CRM_ID == contactID.toString()];
	residence_contacts = Residence_Contact[Contact_CRM_ID == contactID.toString()];
	/*kind of contact is Not Residence */
	if(deals_contacts.count() > 0)
	{
		%>
<div>
	<h5 class="text-left">Demarches Contact</h5>
<table class="table table-bordered">
<tbody>
<tr>
<th>Deal Number</th>
<th>Deal Name</th>
<th>Stage</th>
<th>View Demarches</th>
</tr>
<%
		for each  rec in deals_contacts
		{
			if(rec.count() > 0)
			{
				deals_from_CRM = zoho.crm.getRecordById("Deals",rec.Deal_ID.tolong(),Map(),"zoho_one");
				deal_link = "https://crm.zoho.com/crm/org746753262/tab/Potentials/" + deals_from_CRM.get("id");
				%>
<tr>
            <td><%=deals_from_CRM.get("Deal_Number")%></td>
             <td><%=deals_from_CRM.get("Deal_Name")%></td>
            <td><%=deals_from_CRM.get("Stage")%></td>
            <td><a href="<%=deal_link%>">View Deal</a></td>
         </tr>
<%
			}
		}
		%>
</tbody>
</table>
</div>
<%
	}
	%>
<br><br>
<%
	if(homecare_contacts.count() > 0)
	{
		%>
<div>
	<h5 class="text-left">Demarches Soins Contact</h5>
<table class="table table-bordered">
<tbody>
<tr>
<th>Deal Number</th>
<th>Deal Name</th>
<th>HomeCare Deal Status</th>
<th>View Demarches Soins</th>
</tr>
<%
		for each  homerec in homecare_contacts
		{
			if(homerec.ID != null)
			{
				Homecare_from_CRM = zoho.crm.getRecordById("Home_Care_Deal",homerec.Deal_ID.tolong(),Map(),"zoho_one");
				homecare_deal = "https://crm.zoho.com/crm/org746753262/tab/CustomModule5/" + Homecare_from_CRM.get("id");
				%>
<tr>
<td><%=Homecare_from_CRM.get("Home_Care_Number")%></td>
<td><%=Homecare_from_CRM.get("Name")%></td>
<td><%=Homecare_from_CRM.get("Stage")%></td>
<td><a href="<%=homecare_deal%>">view Demarches Soins</a></td>
</tr>
<%
			}
		}
		%>
</tbody>
</table>
</div>
<%
	}
	// 	}
	/*kind of contact is Residence */
	// 	if(get_contact_from_crm.get("Contact_Type") != null && get_contact_from_crm.get("Contact_Type") == "Residence")
	if(residence_contacts.count() > 0)
	{
		// 		residence_contacts = Residence_Contact[Contact_CRM_ID == contactID.toString()];
		%>
<div>
	<h5 class="text-left">Residence Contact</h5>
<table class="table table-bordered">
<tbody>
<tr>
<th>Residence Number</th>
<th>Usual Name</th>
<th>Legal Name</th>
<th>Status</th>
<th>View Residence</th>
</tr>
<%
		for each  resrec in residence_contacts
		{
			if(resrec.ID != null)
			{
				residence_from_CRM = zoho.crm.getRecordById("Residence",resrec.Residence_CRM_ID.toLong(),Map(),"zoho_one");
				link = "https://crm.zoho.com/crm/org746753262/tab/CustomModule3/" + residence_from_CRM.get("id");
				%>
<tr>
<td><%=residence_from_CRM.get("Residence_number")%></td>
<td><%=residence_from_CRM.get("Name")%></td>
<td><%=residence_from_CRM.get("Legal_name")%></td>
<td><%=residence_from_CRM.get("Status")%></td>
<td><a href="<%=link%>">View Residence</a></td>
</tr>
<%
			}
		}
	}
	%>
</tbody>
</table>
</div>
<%

}%>
