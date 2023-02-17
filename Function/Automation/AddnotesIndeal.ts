getTask = zoho.crm.getRelatedRecords("Tasks","Leads",4846491000009637756);
for each  task in getTask
{
	owner_info = task.get("Owner");
	task_owner = if(owner_info.get("name") != "" || owner_info.get("name") != null,owner_info.get("name"),"");
	datamaps = Map();
	dataList = List();
	mp = Map();
	mp.put("Task Owner",task_owner);
	mp.put("Created By",zoho.adminuserid);
	mp.put("Modified By",zoho.adminuserid);
	mp.put("Subject",task.get("Subject"));
	mp.put("Due Date",task.get("Due_Date"));
	mp.put("Status",task.get("Status"));
	mp.put("Priority",task.get("Priority"));
	mp.put("Send Notification Email",true);
	mp.put("$se_module","Deals");
	mp.put("What_Id",4846491000009637802);
	dataList.add(mp);
	datamaps.put("data",dataList);
	taskcreate = zoho.crm.createRecord("Tasks",mp);
	info taskcreate;
}
getNotes = zoho.crm.getRelatedRecords("Notes","Leads",4846491000009637756);
for each  notes in getNotes
{
	datamaps = Map();
	dataList = List();
	notes_map = Map();
	content = notes.get("Note_Content");
	notesTitle = if(notes.get("Note_Title") != "" || notes.get("Note_Title") != null,notes.get("Note_Title"),"");
	notes_map.put("Note_Title",notesTitle);
	notes_map.put("Note_Content",content);
	notes_map.put("Parent_Id",4846491000009637802);
	notes_map.put("se_module","Deals");
	dataList.add(notes_map);
	datamaps.put("data",dataList);
	notecreate = zoho.crm.createRecord("Notes",notes_map);
	info notecreate;
}