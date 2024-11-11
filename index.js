var change = 100;
var intervalidID = 0;

function intervalStart()
{
    document.getElementById("stopButton").disabled = false;
    document.getElementById("startButton").disabled = true;
    var image = document.getElementById("imgMeme");
    intervalidID = setInterval(function() 
    {
       image.style.left = change + "px";
       
        

        change +=0.5;  // change = change + 2;


    },1);  // 1 ms delay until repeat

}

function intervalStop()
{
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    clearInterval(intervalidID);
}
