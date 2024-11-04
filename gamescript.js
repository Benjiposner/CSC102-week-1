function flipcoin() {
    const randomNum = Math.random();
    let result;

    if (randomNum < 0.5) {
        result = "heads";
    } else {
        result = "tails";
    }

    // Display the result in the HTML element with id "finalResult"
    document.getElementById("finalResult").innerHTML = result;
    console.log("Coin flip result:", result);
}
