var mybutton = document.getElementById("my-button")
mybutton.addEventListener('click', clickMe)

function clickMe() {
    var firstNumberEl = document.getElementById("first-number");
    var secondNumberEl = document.getElementById("second-number");
    var result;
    result = Number(firstNumberEl.value) + Number(secondNumberEl.value);
    alert(result)
}
alert()