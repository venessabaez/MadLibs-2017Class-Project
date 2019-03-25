
	var libStudent = "",
		libSchool = "",
		libHobby = "",
		libPlatform = "",
		libEmotion = "",
		libUsers = 0,
		libHours = 0,
		libGrade = "",
		libColor = "",
		libNoun = "";


function displayError () {
	var errorM = document.getElementById("errorMessage");
	errorM.innerHTML = "Please fill out the form.";
}

function changeEntry() {
	var errorM = document.getElementById("errorMessage");

	if (document.title === "Welcome | MADeveloperLibs"){
		 document.getElementById("entry1").style.display = "none";
		 document.getElementById("entry2").style.display = "inline";
		 errorM.innerHTML = "";
		 document.title = "County - MADeveloperLibs";
		} else if (document.title === "County - MADeveloperLibs"){
				document.getElementById("entry2").style.display = "none";
				document.getElementById("entry3").style.display = "inline";
				errorM.innerHTML = "";
				document.title = "Hobby - MADeveloperLibs";
		} else if (document.title === "Hobby - MADeveloperLibs") {
				document.getElementById("entry3").style.display = "none";
				document.getElementById("entry4").style.display = "inline";
				errorM.innerHTML = "";
				document.title = "Social Media - MADeveloperLibs";
		} else if (document.title === "Social Media - MADeveloperLibs") {
				document.getElementById("entry4").style.display = "none";
				document.getElementById("entry5").style.display = "inline";
				errorM.innerHTML = "";
				document.title = "Emotion - MADeveloperLibs";
		} else if (document.title === "Emotion - MADeveloperLibs") {
				document.getElementById("entry5").style.display = "none";
				document.getElementById("entry6").style.display = "inline";
				errorM.innerHTML = "";
				document.title = "A number - MADeveloperLibs";
		} else if (document.title === "A number - MADeveloperLibs") {
				document.getElementById("entry6").style.display = "none";
				document.getElementById("entry7").style.display = "inline";
				errorM.innerHTML = "";
				document.title = "A letter - MADeveloperLibs";
		} else if (document.title === "A letter - MADeveloperLibs") {
				document.getElementById("entry7").style.display = "none";
				document.getElementById("entry8").style.display = "inline";
				errorM.innerHTML = "";
				document.title = "A color - MADeveloperLibs";
		} else if (document.title === "A color - MADeveloperLibs") {
				document.getElementById("entry8").style.display = "none";
				document.getElementById("entry9").style.display = "inline";
				errorM.innerHTML = "";
				document.title = "A noun - MADeveloperLibs";
		} else {
			document.title = "Another number - MADeveloperLibs";
			document.getElementById("entry9").style.display = "none";
			document.getElementById("entry10").style.display = "inline";
 		}//end if else
} //end forwardPage




function validateName() {
	if (document.getElementById("libStudent").value == "") {
		displayError();
	} else {
		changeEntry();
	}
} //end validateName

function validateSchool() {
	if (document.getElementById("libSchool").value == "") {
		displayError();
	} else {
		changeEntry();
	}
} //end validateSchool

function validateHobby() {
	if (document.getElementById("libHobby").value == "") {
		displayError();
	} else {
		changeEntry();
	}
} //end validateHobby

function validatePlatform() {
	if (document.getElementById("libPlatform").value == "") {
		displayError();
	} else {
		changeEntry();
	}
} //end validatePlatform

function validateHours() {
	if (document.getElementById("libHours").value == "") {
		displayError();
	} else {
		changeEntry();
	}
} //end validateHours

function validateEmotion() {
	if (document.getElementById("libEmotion").value == "") {
		displayError();
	} else {
		changeEntry();
	}
} //end validateEmotion

function validateUsers() {
	if (document.getElementById("libUsers").value == "") {
		displayError();
	} else {
		changeEntry();
	}
} //end validateUsers

function validateGrade() {
	if (document.getElementById("libGrade").value == "") {
		displayError();
	} else {
		changeEntry();
	}
} //end validateGrade

function validateColor() {
	if (document.getElementById("libColor").value == "") {
		displayError();
	} else {
		changeEntry();
	}
} //end validateColor

function validateNoun() {
	if (document.getElementById("libNoun").value == "") {
		displayError();
	} else {
		changeEntry();
	}
} //end validateNoun


function submitVariables(){
	 //Assign variables from form input
		libStudent = document.getElementById("libStudent").value;
		libSchool = document.getElementById("libSchool").value;
		libHobby = document.getElementById("libHobby").value;
		libPlatform = document.getElementById("libPlatform").value;
		libHours = document.getElementById("libHours").value;
		libEmotion = document.getElementById("libEmotion").value;
		libUsers = document.getElementById("libUsers").value;
		libGrade = document.getElementById("libGrade").value;
		libColor = document.getElementById("libColor").value;
		libNoun = document.getElementById("libNoun").value;

	//Change to second page
		document.getElementById("typewriter").style.display = "none";
		document.getElementById("pages").style.display = "inline";
		document.getElementById("spreadOne").style.display = "inline";

	//Place variables into story
		document.getElementById("storyStudent").innerHTML = libStudent;
	  document.getElementById("storyStudent2").innerHTML = libStudent;
		document.getElementById("storyStudent3").innerHTML = libStudent;
		document.getElementById("storyStudent4").innerHTML = libStudent;
		document.getElementById("storySchool").innerHTML = libSchool;

		document.getElementById("storyHobby").innerHTML = libHobby;
		document.getElementById("storyHobby2").innerHTML = libHobby;
		document.getElementById("storyPlatform").innerHTML = libPlatform;
		document.getElementById("storyPlatform2").innerHTML = libPlatform;
		document.getElementById("storyEmotion").innerHTML = libEmotion;
		document.getElementById("storyHours").innerHTML = libHours;
		document.getElementById("storyUsers").innerHTML = libUsers;
		document.getElementById("storyGrade").innerHTML = libGrade;
		document.getElementById("storyColor").innerHTML = libColor;
		document.getElementById("storyNoun").innerHTML = libNoun;

		document.title = "Page One - MADeveloperLibs";
} //end submitVariable

function forwardPage(){
  	if (document.title === "Page One - MADeveloperLibs"){
			 document.getElementById("spreadOne").style.display = "none";
			 document.getElementById("spreadTwo").style.display = "inline";
			 document.title = "Page Two - MADeveloperLibs";
		 	} else if (document.title === "Page Two - MADeveloperLibs"){
					document.getElementById("spreadTwo").style.display = "none";
					document.getElementById("spreadThree").style.display = "inline";
					document.title = "Page Three - MADeveloperLibs";
			} else if (document.title === "Page Three - MADeveloperLibs") {
					document.getElementById("spreadThree").style.display = "none";
					document.getElementById("spreadFour").style.display = "inline";
					document.title = "Page Four - MADeveloperLibs";
				} else {
					document.getElementById("spreadFour").style.display = "none";
					document.getElementById("closingPage").style.display = "inline";
					document.title = "Thanks for Playing | MADeveloperLibs";
				}//end if else
} //end forwardPage

function previousPage(){
	if (document.title === "Page Two - MADeveloperLibs"){
				document.getElementById("spreadTwo").style.display = "none";
				document.getElementById("spreadOne").style.display = "inline";
				document.title = "Page One - MADeveloperLibs";
		} else {
				document.getElementById("spreadThree").style.display = "none";
				document.getElementById("spreadTwo").style.display = "inline";
				document.title = "Page Two - MADeveloperLibs";
			}//end if else
} //end previousPage
