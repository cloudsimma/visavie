
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

error = 0;
var avalContacts = ZDK.Page.getField("Available_Contact").getValue();
console.log("avalContacts :" + avalContacts);
var avalLeadType = ZDK.Page.getField("Lead_Type").getValue();
console.log("avalLeadType :" + avalLeadType);
    //----------------Primary------------------//
    if (avalContacts == "Primary" || avalLeadType == "Primary") {
    var avalDetails = ZDK.Page.getField("Preferred_communication_P").getValue();
    console.log("avalDetails :" + avalDetails.length);
    console.log("avalDetails :" + avalDetails[0]);
    //Courriel/Email,Téléphone cellulaire/Cell phone,Téléphone maison/Home phone,Téléphone travail/Work phone
    for (var i = 0; i < avalDetails.length; i++) {
        if (avalDetails[i] == "Courriel/Email") {
            var email_P = ZDK.Page.getField("Email_P").getValue();
            console.log("email_P :" + email_P);
            if (email_P == null || email_P == "") {
                var email_P_err = ZDK.Page.getField('Email_P');
                console.log("email_P_err :" + email_P_err);
                email_P_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }
        else if (avalDetails[i] == "Téléphone cellulaire/Cell phone") {
            var cell_phone_P = ZDK.Page.getField("Cell_phone_P").getValue();
            console.log("cell_phone_P :" + cell_phone_P);
            if (cell_phone_P == null || cell_phone_P == "") {
                var cell_phone_P_err = ZDK.Page.getField('Cell_phone_P');
                console.log("cell_phone_P_err :" + cell_phone_P_err);
                cell_phone_P_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }
        else if (avalDetails[i] == "Téléphone maison/Home phone") {
            var home_phone_P = ZDK.Page.getField("Home_phone_P").getValue();
            console.log("home_phone_P :" + home_phone_P);
            if (home_phone_P == null || home_phone_P == "") {
                var home_phone_P_err = ZDK.Page.getField('Home_phone_P');
                home_phone_P_err.showError('This field can not be empty');
                error = error + 1;
                // return false
            }

        }
        else if (avalDetails[i] == "Téléphone travail/Work phone") {
            var work_phone_P = ZDK.Page.getField("Work_phone_P").getValue();
            console.log("work_phone_P :" + work_phone_P);
            if (work_phone_P == null || work_phone_P == "") {
                var work_phone_P_err = ZDK.Page.getField('Work_phone_P');
                work_phone_P_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }
    }
    }
if (avalContacts == "Senior 1" || avalContacts == "Senior 1 and  2" || avalContacts == "Senior 1 and Primary" || avalContacts == "Senior 1 , 2 and Primary" || avalLeadType == "Self") {
    //-----------------Self-------------//
    var selfDetails = ZDK.Page.getField("Preferred_communication").getValue();
    console.log("selfDetails :" + selfDetails.length);
    console.log("selfDetails :" + selfDetails[0]);
    //Courriel/Email,Téléphone cellulaire/Cell phone,Téléphone maison/Home phone,Téléphone travail/Work phone
    for (var j = 0; j < selfDetails.length; j++) {
        if (selfDetails[j] == "Courriel/Email") {
            var email_1 = ZDK.Page.getField("Email_1").getValue();
            console.log("email_1 :" + email_1);
            if (email_1 == null || email_1 == "") {
                var email_1_err = ZDK.Page.getField('Email_1');
                console.log("email_1_err :" + email_1_err);
                email_1_err.showError('This field can not be empty');
                error = error + 1;
                //return false;
            }

        }
        else if (selfDetails[j] == "Téléphone cellulaire/Cell phone") {
            var cell_phone = ZDK.Page.getField("Cell_phone").getValue();
            console.log("Cell_phone :" + cell_phone);
            if (cell_phone == null || cell_phone == "") {
                var cell_phone_err = ZDK.Page.getField('Cell_phone');
                console.log("cell_phone_err :" + cell_phone_err);
                cell_phone_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }
        else if (selfDetails[j] == "Téléphone maison/Home phone") {
            var home_phone = ZDK.Page.getField("Home_phone").getValue();
            console.log("home_phone :" + home_phone);
            if (home_phone == null || home_phone == "") {
                var home_phone_err = ZDK.Page.getField('Home_phone');
                home_phone_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }
        else if (selfDetails[j] == "Téléphone travail/Work phone") {
            var work_phone = ZDK.Page.getField("Work_phone").getValue();
            console.log("work_phone :" + work_phone);
            if (work_phone == null || work_phone == "") {
                var work_phone_err = ZDK.Page.getField('Work_phone');
                work_phone_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }

    }
}
if (avalContacts == "Senior 1 and  2"  || avalContacts == "Senior 1 , 2 and Primary" ) {
    //-----------------senior 2-------------//
    var seniorDetails = ZDK.Page.getField("Preferred_communication_2").getValue();
    console.log("seniorDetails :" + seniorDetails.length);
    console.log("seniorDetails :" + seniorDetails[0]);
    //Courriel/Email,Téléphone cellulaire/Cell phone,Téléphone maison/Home phone,Téléphone travail/Work phone
    for (var k = 0; k < seniorDetails.length; k++) {
        if (seniorDetails[k] == "Courriel/Email") {
            var email_2 = ZDK.Page.getField("Email_2").getValue();
            console.log("email_2 :" + email_2);
            if (email_2 == null || email_2 == "") {
                var email_2_err = ZDK.Page.getField('Email_2');
                console.log("email_2_err :" + email_2_err);
                email_2_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }
        else if (seniorDetails[k] == "Téléphone cellulaire/Cell phone") {
            var cell_phone_2 = ZDK.Page.getField("Cell_phone_2").getValue();
            console.log("cell_phone_2 :" + cell_phone_2);
            if (cell_phone_2 == null || cell_phone_2 == "") {
                var cell_phone_2_err = ZDK.Page.getField('Cell_phone_2');
                console.log("cell_phone_2_err :" + cell_phone_2_err);
                cell_phone_2_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }
        else if (seniorDetails[k] == "Téléphone maison/Home phone") {
            var home_phone_2 = ZDK.Page.getField("Home_phone_2").getValue();
            console.log("home_phone_2 :" + home_phone_2);
            if (home_phone_2 == null || home_phone_2 == "") {
                var home_phone_2_err = ZDK.Page.getField('Home_phone_2');
                home_phone_2_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }
        else if (seniorDetails[k] == "Téléphone travail/Work phone") {
            var work_phone_2 = ZDK.Page.getField("Work_phone_2").getValue();
            console.log("work_phone_2 :" + work_phone_2);
            if (work_phone_2 == null || work_phone_2 == "") {
                var work_phone_2_err = ZDK.Page.getField('Work_phone_2');
                work_phone_2_err.showError('This field can not be empty');
                error = error + 1;
                // return false
            }

        }

    }
}
if (avalLeadType == "Healthcare/Social worker") {
    //-------------------Healthcare-------------------//
    var healthcareDetails = ZDK.Page.getField("Preferred_communication_R").getValue();
    console.log("healthcareDetails :" + healthcareDetails.length);
    console.log("healthcareDetails :" + healthcareDetails[0]);
    //Courriel/Email,Téléphone cellulaire/Cell phone,Téléphone maison/Home phone,Téléphone travail/Work phone
    for (var l = 0; l < healthcareDetails.length; l++) {
        if (healthcareDetails[l] == "Courriel/Email") {
            var email_R = ZDK.Page.getField("Email_R").getValue();
            console.log("email_R :" + email_R);
            if (email_R == null || email_R == "") {
                var email_R_err = ZDK.Page.getField('Email_R');
                console.log("email_R_err :" + email_R_err);
                email_R_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }
        else if (healthcareDetails[l] == "Téléphone cellulaire/Cell phone") {
            var cell_phone_R = ZDK.Page.getField("Cell_phone_R").getValue();
            console.log("cell_phone_R :" + cell_phone_R);
            if (cell_phone_R == null || cell_phone_R == "") {
                var cell_phone_R_err = ZDK.Page.getField('Cell_phone_R');
                console.log("cell_phone_R_err :" + cell_phone_R_err);
                cell_phone_R_err.showError('This field can not be empty');
                error = error + 1;
                // return false
            }

        }
        else if (healthcareDetails[l] == "Téléphone maison/Home phone") {
            var home_phone_R = ZDK.Page.getField("Home_phone_R").getValue();
            console.log("home_phone_R :" + home_phone_R);
            if (home_phone_R == null || home_phone_R == "") {
                var home_phone_R_err = ZDK.Page.getField('Home_phone_R');
                home_phone_R_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }
        else if (healthcareDetails[l] == "Téléphone travail/Work phone") {
            var work_phone_R = ZDK.Page.getField("Work_phone_R").getValue();
            console.log("work_phone_R :" + work_phone_R);
            if (work_phone_R == null || work_phone_R == "") {
                var work_phone_R_err = ZDK.Page.getField('Work_phone_R');
                work_phone_R_err.showError('This field can not be empty');
                error = error + 1;
                //return false
            }

        }

    }
}
var avalSecContacts = ZDK.Page.getField("Select_Secondary_contact").getValue();
console.log("avalSecContacts :" + avalSecContacts);
if (avalSecContacts == "Oui/Yes") {
    var addContact = ZDK.Page.getField("Add_secondary_contact").getValue();
    console.log("addContact :" + addContact);
    if (addContact == "Créer nouveau contact/Create new contact") {
        //-------------------Seconday Contact-------------------//
        var secondaryContactDetails = ZDK.Page.getField("Preferred_communication_S").getValue();
        console.log("secondaryContactDetails :" + secondaryContactDetails.length);
        console.log("secondaryContactDetails :" + secondaryContactDetails[0]);
        //Courriel/Email,Téléphone cellulaire/Cell phone,Téléphone maison/Home phone,Téléphone travail/Work phone
        for (var m = 0; m < secondaryContactDetails.length; m++) {
            if (secondaryContactDetails[m] == "Courriel/Email") {
                var email_S = ZDK.Page.getField("Email_S").getValue();
                console.log("email_S :" + email_S);
                if (email_S == null || email_S == "") {
                    var email_S_err = ZDK.Page.getField('Email_S');
                    console.log("email_S_err :" + email_S_err);
                    email_S_err.showError('This field can not be empty');
                    error = error + 1;
                    //return false
                }

            }
            else if (secondaryContactDetails[m] == "Téléphone cellulaire/Cell phone") {
                var cell_phone_S = ZDK.Page.getField("Cell_phone_S").getValue();
                console.log("cell_phone_S :" + cell_phone_S);
                if (cell_phone_S == null || cell_phone_S == "") {
                    var cell_phone_S_err = ZDK.Page.getField('Cell_phone_S');
                    console.log("cell_phone_S_err :" + cell_phone_S_err);
                    cell_phone_S_err.showError('This field can not be empty');
                    error = error + 1;
                    //return false
                }

            }
            else if (secondaryContactDetails[m] == "Téléphone maison/Home phone") {
                var home_phone_S = ZDK.Page.getField("Home_phone_S").getValue();
                console.log("home_phone_S :" + home_phone_S);
                if (home_phone_S == null || home_phone_S == "") {
                    var home_phone_S_err = ZDK.Page.getField('Home_phone_S');
                    home_phone_S_err.showError('This field can not be empty');
                    error = error + 1;
                    //return false
                }

            }
            else if (secondaryContactDetails[m] == "Téléphone travail/Work phone") {
                var work_phone_S = ZDK.Page.getField("Work_phone_S").getValue();
                console.log("work_phone_S :" + work_phone_S);
                if (work_phone_S == null || work_phone_S == "") {
                    var work_phone_S_err = ZDK.Page.getField('Work_phone_S');
                    work_phone_S_err.showError('This field can not be empty');
                    error = error + 1;
                    //return false
                }

            }
        }
    }
}
console.log("error -" + error);
if (error != 0) {
     return false
 }
