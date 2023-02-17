void TestFunction()
{
	sendmail
	[
		from :zoho.loginuserid
		to :"sharmila@cloudlion.org"
		subject :"Test"
		message :"TEST mail"
	]
	info "Mail Sent";
}