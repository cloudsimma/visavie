if(id != null)
{
	get_record = zoho.crm.getRecordById("Residence",id);
	info get_record;
	status = get_record.get("Status");
	info status;
}