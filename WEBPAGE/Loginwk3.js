function checkCreds() {
    // place to store first name
    var firstName = document.getElementById("fName").value;
    // place to store last name
    var lastName = document.getElementById("lName").value;
    //place to store badge id
    var badgeNumb = document.getElementById("badgeID").value;

    var fullName = firstName + " " + lastName;

    if (fullName.length > 20 || fullName == 1) {

        document.getElementById("loginStatus").innerHTML = "Invalid full name!";
    }

    if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!";

    }

    if(fullName.length<21 && fullName.length > 1 && badgeNumb < 1000 && badgeNumb > 0 ){
alert("Access Granted! Welcome! " + fullName);
location.replace("HTMLW2.html")
    }


}