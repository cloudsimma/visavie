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
	<h5 class="text-left">View Comptabilité</h5>
<table class="table table-bordered">
<tbody>
<tr>
<th>Deal Number</th>
<th>Status of invoice</th>
<th>Client Name</th>
<th>Counselor</th>
<th>Lease start date</th>
<th>Lease Signature Date</th>

</tr>
<%
	datamap = Map();
	residencedata = zoho.crm.getRecordById("Residence",ResidenceID.toLong(),Map(),"zoho_one");
	if(residencedata.get("id") != null)
	{
		dataresp = zoho.crm.getRelatedRecords("Related_List_Name_2","Residence",residencedata.get("id").toLong(),1,200,Map(),"zoho_one");
		for each  rec in dataresp
		{
			counselordata = rec.get("Advisor");
			if(counselordata != null)
			{
				counselorName = counselordata.get("name");
			}
			%>
<tr>
            <td><%=rec.get("Deal_Number")%></td>
			 <td><%=rec.get("Status")%></td>
            <td><%=rec.get("Name")%></td>
			<td><%=counselorName%></td>
            <td><%=rec.get("Lease_Start_Date")%>
			<td><%=rec.get("Lease_Signature_Date")%>
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
