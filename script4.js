var mybutton = document.getElementById("my-button")
mybutton.addEventListener('click', clickMe)

function clickMe() {
    var nameEl = document.getElementById("name");
    var ageEl = document.getElementById("age");
    var genderEl = document.getElementById("gender");
    var DOBEl = document.getElementById("DOB")
    alert(nameEl.value + "\n" + ageEl.value + "\n"  + DOBEl.value)
}
