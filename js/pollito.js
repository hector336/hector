
var valorDia = document.getElementById("valorDia");
var dia = document.getElementById("dia");
var mes = document.getElementById("mes");
var signo = document.getElementById("signo");
var fecha = document.getElementById("fecha");

const verSigno = () => {
    let d = parseInt(dia.value);
    let m = mes.value;

    valorDia.innerHTML = "DÍA " + d;
    fecha.textContent = d + " de " + m;

    var imgSigno = "";

    switch (m) {
        case "ENERO": imgSigno = (d >= 20) ? "AQUARIUS" : "CAPRICORNIIO"; break;
        case "FEBRERO": imgSigno = (d >= 19) ? "PISIS" : "AQUARIUS"; break;
        case "MARZO": imgSigno = (d >= 21) ? "ARIES" : "PISIS"; break;
        case "ABRIL": imgSigno = (d >= 20) ? "TAURUS" : "ARIES"; break;
        case "MAYO": imgSigno = (d >= 21) ? "GEMINIS" : "TAURUS"; break;
        case "JUNIO": imgSigno = (d >= 21) ? "CANCER" : "GEMINIS"; break;
        case "JULIO": imgSigno = (d >= 23) ? "LEO" : "CANCER"; break;
        case "AGOSTO": imgSigno = (d >= 23) ? "VIRGO" : "LEO"; break;
        case "SEPTIEMBRE": imgSigno = (d >= 23) ? "LIBRA" : "VIRGO"; break;
        case "OCTUBRE": imgSigno = (d >= 23) ? "SCORPIO" : "LIBRA"; break;
        case "NOVIEMBRE": imgSigno = (d >= 22) ? "SAGITARIUS" : "SCORPIO"; break;
        case "DICIEMBRE": imgSigno = (d >= 22) ? "CAPRICORNIIO" : "SAGITARIUS"; break;
    }

    // 5
    signo.src = "img/SIGNOS/" + imgSigno + ".jpg";
};

document.getElementById("reset").onclick = () => {
   
    dia.value = 1;
    mes.value = "ENERO";
    valorDia.innerHTML = "DÍA 1";
    fecha.textContent = "FECHA";

    // 5
    signo.src = "img/SIGNOS/WIN_20260731_15_57_18_Pro.jpg";
};

dia.oninput = () => {
    verSigno();
};

mes.onchange = () => {
    verSigno();
};

// 5

