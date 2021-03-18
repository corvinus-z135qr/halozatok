window.onload = function () {

    let hova = document.getElementById("ide")
    hova.innerHTML = ""
    let szam = 1;

    for (var s = 0; s < 9; s++) {

        let seged = s + 1;
        let sor = document.createElement("div");
        hova.appendChild(sor)
        sor.classList.add("egymas_melle");

        for (var o = 0; o <= s; o++) {
            if (o > 0) {

                let szám = document.createElement("div")
                sor.appendChild(szám)
                szám.innerText = szam * (seged - o) * o;
                szám.classList.add("doboz");
                szám.style.background = `rgb(${60 * 12 / s},0,${110 * 5 * o})`;
            }



        }
    }
}