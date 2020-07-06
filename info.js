var errorList = [];
    errorList[0] = "must start with a capital letter";
    errorList[1] = "must contain only letters";
    errorList[2] = "must start with a letter";
    errorList[3] = "must have at least 6 characters";
    errorList[4] = "Password mismatch";
    errorList[5] = "must be 6 characters long";
    errorList[6] = "must start with a character";
    errorList[7] = "must have at least 1 digit";
    errorList[8] = "must have at least 1 uppercase";
    errorList[9] = "must select an option";

window.onload = function() {

    document.getElementById("erase_info").onclick = function () {
        eraseForm();
    };
};
    
function validation () {
    var valid = true;
    var errMessage = "";
    elemErrMessage = document.getElementById("Warnings");

    var valList = [];
    valList[0] = usernameValidation();
    valList[1] = passValidation();
    valList[2] = selectValidation();  

    if(valList[0] != " " || valList[1] != " " || valList[2] != " ")  {
        valid = false;
        for (var i = 0; i < valList.length; i++) {
            if(valList[i] != " ") {
                errMessage += valList[i] + "<br>" + "<br>";
            };
        };
        elemErrMessage.style.backgroundColor = "rgba(11, 60, 93, 0.1)";
        elemErrMessage.style.border = "2px solid #D9B310";
        elemErrMessage.style.borderRadius = "5px";
        elemErrMessage.style.boxShadow = "0px 5px 3px rgba(150,150,150,0.8)";
        elemErrMessage.style.marginBottom = "2px";
        elemErrMessage.innerHTML = errMessage;
    };
    if(valid) {
        alert("Form submitted successfully!!");
    };
    return valid;
};

function eraseForm() {
    var parent = document.getElementById("notifications");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
    var renewElem1 = document.createElement("div");
    renewElem1.setAttribute("id", "Warnings");
    parent.appendChild(renewElem1);
    var renewElem2 = document.createElement("div");
    renewElem2.setAttribute("id", "Warnings2");
    parent.appendChild(renewElem2);
};

function fnameValidation() {
    var valid = true;
    var error = "";
    var elemError =  document.getElementById("Warnings");
    var input = document.signup.first_name.value.trim();
    var patt =/^[A-Z]/
    var patt2=/^[a-zA-Z][a-z]{0,}$/;
    var status=patt.test(input);
    var status2=patt2.test(input);
    if(!status && status2) {
        error+= "First name: " + errorList[0];
        valid = false;
    } else if (status && !status2) {
        error+="First name: " + errorList[1];
        valid = false;
    } else if (!status && !status2) {
        error+= "First name: " + errorList[0] + ", " + errorList[1];
        valid = false;
    };
    if(!valid) {
        elemError.style.backgroundColor = "rgba(11, 60, 93, 0.1)";
        elemError.style.border = "2px solid #D9B310";
        elemError.style.borderRadius = "5px";
        elemError.style.boxShadow = "0px 5px 3px rgba(150,150,150,0.8)";
        elemError.style.marginBottom = "2px";
        elemError.innerHTML = error;
        document.signup.first_name.focus();
    } else if(valid) {
        var parent = document.getElementById("notifications");
        var throwawayNode = parent.removeChild(elemError);
        var renewElem = document.createElement("div");
        renewElem.setAttribute("id", "Warnings");
        parent.appendChild(renewElem);
    };
    return valid;
};

function lnameValidation() {
    var valid = true;
    var error = "";
    var elemError =  document.getElementById("Warnings2");
    var input = document.signup.last_name.value.trim();
    var patt =/^[A-Z]/
    var patt2=/^[a-zA-Z][a-z]{0,}$/;
    var status=patt.test(input);
    var status2=patt2.test(input);
    if(!status && status2) {
        error+= "Last name: " + errorList[0];
        valid = false;
    } else if (status && !status2) {
        error+="Last name: " + errorList[1];
        valid = false;
    } else if (!status && !status2) {
        error+= "Last name: " + errorList[0] + ", " + errorList[1];
        valid = false;
    };
    if(!valid) { 
        elemError.style.backgroundColor = "rgba(11, 60, 93, 0.1)";
        elemError.style.border = "2px solid #D9B310";
        elemError.style.borderRadius = "5px";
        elemError.style.boxShadow = "0px 5px 3px rgba(150,150,150,0.8)";
        elemError.style.marginBottom = "2px";
        elemError.innerHTML = error;
        document.signup.first_name.focus();
    } else if(valid) {
        var parent = document.getElementById("notifications");
        var throwawayNode = parent.removeChild(elemError);
        var renewElem = document.createElement("div");
        renewElem.setAttribute("id", "Warnings2");
        parent.appendChild(renewElem);
    };
    return valid;
};

function usernameValidation() {
    var error = " ";
    var input = document.signup.username.value;
    var patt = /^[A-Za-z]/;
    var status=patt.test(input);
    if(input.length < 6) {
        error+= "Username: " + errorList[3];
    } else if (input.length >= 6 && !status) {
        error+= "Username: " + errorList[2];
    } else if (input.length < 6 && !status) {
        error+= "Username: " + errorList[3] + errorList[2];
    };
    return error;
};


function selectValidation() {
    var error = " ";
    var input = document.signup.Ed_level.value;
    if(input === "0") {
        error+= "Education level: " + errorList[9];
    };
    return error;
};

function passValidation() {
    var error = " ";
    var input1 = document.querySelector("#pass1").value;
    var input2 = document.querySelector("#pass2").value;
    var patt = /^[^\s0-9]/;
    var patt1 = /.*[A-Z].*/;
    var patt2 =/.*[0-9].*/;
    var status = patt.test(input1);
    var status1 = patt1.test(input1);
    var status2 = patt2.test(input1);
    if(input1 === input2) {        
        if(!status && status1 && status2 && input1.length == 6) {
            error+= "Password: " + errorList[6];
        } else if(!status && status1 && status2 && input1.length != 6) {
            error+= "Password: " + errorList[5] + ", " + errorList[6];
        } else if (status && !status1 && status2 && input1.length == 6) {
            error+= "Password: " + errorList[7];
        } else if (status && !status1 && status2 && input1.length != 6) {
            error+= "Password: " + errorList[5] + ", "+ errorList[7]
        } else if (status && status1 && !status2 && input1.length == 6) {
            error+= "Password: " + errorList[8];
        } else if (status && status1 && !status2 && input1.length != 6) {
            error+= "Password: " + errorList[5] + ", "+ errorList[8];
        } else if (!status && !status1 && status2 && input1.length == 6) {
            error+= "Password: " + errorList[6] + ", " + errorList[7];
        } else if (!status && !status1 && status2 && input1.length != 6) {
            error+= "Password: " + errorList[5] + ", "+ errorList[6] + ", " + errorList[7];
        } else if (status && !status1 && !status2 && input1.length == 6) {
            error+= "Password: " + errorList[7] + ", " + errorList[8];
        } else if (status && !status1 && !status2 && input1.length != 6) {
            error+= "Password: " + errorList[5] + ", "+ errorList[7] + ", " + errorList[8];
        }  else if (!status && !status1 && !status2 && input1.length == 6) {
            error+= "Password: " + errorList[6] + ", " + errorList[7] + ", " + errorList[8];
        } else if (!status && !status1 && !status2 && input1.length != 6) {
            error+= "Password: " + errorList[5] + ", " + errorList[6] + ", " + errorList[7] + ", " + errorList[8];
        };
    } else {
        error+= "Password: " + errorList[4];
    };
    return error;
};