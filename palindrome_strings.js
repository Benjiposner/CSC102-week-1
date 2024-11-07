function strings()
{
    var string1 = document.getElementById("firstStr").value
    var string2 = document.getElementById("secondStr").value
    
    var splitStr = string1.split("");
    document.getElementById("string info").innerHTML = splitStr
    var reverseStr = splitStr.reverse();
    document.getElementById("string info").innerHTML = reverseStr
    var joinStr = reverseStr.join("");
    document.getElementById("string info").innerHTML = joinStr

    if (string1 == joinStr)
    {
        // instead of alert//
        document.getElementById("string info").innerHTML = "PLAINDROME";
    }
    else 
    {
        // instead of alert//
        document.getElementById("string info").innerHTML = "NOT A PALINDROME";
    }
    
}
