window.onload = function () {
    console.log("Oldal betöltve...");
    letöltés();
}

var kérdések;
var kérdéssorszám;
var k = 0;

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
    kérdésMegjelenítés(0);
}

function kérdésMegjelenítés(kérdés) {

    var elem = document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    document.getElementById("kép1").src ="https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;

}

window.onload = function () {
    letöltés();
}
document.getElementById("vissza").click = function () {
        cconsole.log = (kérdéssorszám)
        kérdéssorszám--;
        kérdésMegjelenítés(kérdéssorszám);
    }

    document.getElementById("előre").click = () => {
        kérdéssorszám++;
        kérdésMegjelenítés(kérdéssorszám)
    }

    document.getElementById("válasz1").onclick = () => {
        if (kérdések[kérdéssorszám].correctAnswer == 1) {
            document.getElementById("válasz1").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz1").style.background = "lightcoral";
        }
    }

    document.getElementById("válasz2").onclick = () => {
        if (kérdések[kérdéssorszám].correctAnswer == 2) {
            document.getElementById("válasz2").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz2").style.background = "lightcoral";
        }
    }

    document.getElementById("válasz3").onclick = () => {
        if (kérdések[kérdéssorszám].correctAnswer == 3) {
            document.getElementById("válasz3").style.background = "darkgreen";
        }
        else {
            document.getElementById("válasz3").style.background = "lightcoral";
        }
    }



  