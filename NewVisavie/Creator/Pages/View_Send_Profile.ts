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
<div>
	<h5 class="text-left">Send Profile</h5>
<table class="table table-bordered">
<tbody>
<tr>
<th>Profile sent by</th>
<th>Deal Number</th>
<th>Residence Number</th>
<th>Sent Profile Date</th>
<th>Email</th>
<th>CC</th>
<th>Counselor</th>
<th>View Residence</th>
<th>Name of group </th>
<th> Province </th>
</tr>
<%
	for each  getData in Data_extraction[Residence_CRMID == input.resID]
	{
		if(getData.count() > 0)
		{
			residence_from_CRM = zoho.crm.getRecordById("Residence",getData.Residence_CRMID.tolong(),Map(),"zoho_one");
			link = "https://crm.zoho.com/crm/org746753262/tab/CustomModule3/" + residence_from_CRM.get("id");
			%>
<tr>
<td><%=getData.User%></td>
<td><%=getData.Deal_Number%></td>
<td><%=getData.Residence_number%></td>
<td><%=getData.Date_profile_sent%></td>
<td><%=getData.Email%></td>
<td><%=getData.CC%></td>
<td><%=getData.Counselor%></td>
<td><a href="<%=link%>">View Residence</a></td>
<td><%=getData.Name_of_Group%></td>
<td><%=getData.Province%></td>
</tr>
<%
		}
	}
	%>
</tbody>
</table>
</div>
<%

}%>
