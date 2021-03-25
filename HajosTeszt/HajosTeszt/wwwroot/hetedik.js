window.onload = function () {
    console.log("Oldal betöltve...");
    letöltés();
}


var k = 0;
var kérdések;
var kérdéssorszám = 0;

function letöltés() {

    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(1);
}

function kérdésMegjelenítés(kérdés) {

    var elem = document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;

}

window.onload = function () {
    letöltés();

}


function előrekatt() {
    kérdéssorszám++;
    if (kérdéssorszám == kérdések.length) {
        kérdéssorszám = 0;
    }
    kérdésMegjelenítés(kérdéssorszám);
}

function visszakatt() {
    kérdéssorszám--;
    if (kérdéssorszám == -1) {
        kérdés = kérdések.length;
    }
    console.log = (kérdéssorszám);
    kérdésMegjelenítés(kérdéssorszám);

}
function válasz1()
{
    if (kérdések[kérdéssorszám].correctAnswer == 1) {
        document.getElementById("válasz1").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz1").style.background = "lightcoral";
    }
}
function válasz2()  {
    if (kérdések[kérdéssorszám].correctAnswer == 2) {
        document.getElementById("válasz2").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz2").style.background = "lightcoral";
    }
}

function válasz3()  {
    if (kérdések[kérdéssorszám].correctAnswer == 3) {
        document.getElementById("válasz3").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz3").style.background = "lightcoral";
    }
}



