function validate()
 {
//    get variables from form
    var name = document.getElementById("initString").value;
    var lname = document.getElementById("str2").value;
    var empNum = document.getElementById("firstNum").value;
    var empNum2 = document.getElementById("secondNum").value;
//jc added these
const button1 = document.getElementById("play");
const button2 = document.getElementById("stop");
    // Concatenate the first and last names with space in between 
    var fullName = name + " " + lname;
    document.getElementById("inputStatus").innerHTML = fullName;

    // Check if the full name is too long
    if (fullName.length >= 20) {
        document.getElementById("inputStatus").innerHTML = "name too long";
        return; // Exit the function if this validation fails
    }

    // Check if empNum is exactly 3 digits
    else if (empNum < 100 || empNum >= 1000) {
        document.getElementById("inputStatus").innerHTML = "number is not 3 digits";
        return; // Exit the function if this validation fails
    }

    
    // Display empNum2 and check if it has more than 5 digits
    else if (empNum2.length > 5 ) {
        document.getElementById("inputStatus").innerHTML = "More than 5 digits: Not valid";
        return;
    }
    else if (empNum2.length < 5 ) {
        document.getElementById("inputStatus").innerHTML = "less than 5 digits: Not valid";
        return;
    }
    else if (empNum2.length = 5) { // Using length to check digit count
        document.getElementById("secretMessage").innerHTML = "Yo/u have unlocked the secret useless code 12345";
        //jc added these 2 lines to turn on the buttons
        button1.style.display = "block";
     
        button2.style.display= "block";
        play();
         return;
    }
    
}
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play();
    }
}

function play()
{
    const button = document.getElementById("play");
    {
//jc b1 = play
        button.style.display = "none";
        button.style.display = "block";
    }
    mySound = new sound("sounds for class/venom.mp3");
    mySound.play();
}

function stop()
{
    const button = document.getElementById("stop");
    {
       button.style.display = "block";
       button.style.display = "none";
    }
    window.location.reload();
}

}
