void test_residence()
{
	get_residence1 = Residences[ID == 4252979000000809003];
	get_residence2 = Residences[ID == 4252979000000810003];
	get_residence3 = Residences[ID == 4252979000000811003];
	get_residence4 = Residences[ID == 4252979000000812003];
	mapa = Map();
	mapa.put(get_residence1.ID,get_residence1.Status);
	mapa.put(get_residence2.ID,get_residence2.Status);
	mapa.put(get_residence3.ID,get_residence3.Status);
	mapa.put(get_residence4.ID,get_residence4.Status);
	map_keys = mapa.keys();
	lst = List();
	status_list = List();
	for each  key_val in map_keys
	{
		info "key_val" + key_val;
		vals = mapa.get(key_val);
		if(vals == "Active" || vals == "Prospect" || vals == "Active - Entente particulière/Active - Special agreement")
		{
			lst.add(key_val);
			status_list.add(vals);
		}
	}
	info "status_list" + status_list;
	if(lst.isEmpty() != true)
	{
		info "redirect to send mail";
	}
	else
	{
		info "not contains";
	}
}