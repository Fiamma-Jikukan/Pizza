let recepie = {
    flour: 1000,
    water: 630,
    salt: 28,
    yist: 3,
}

function yistCheck() {
    if (document.getElementById("timePoof").value === "poof1") {
        recepie.yist = 3;
    } else if (document.getElementById("timePoof").value === "poof2") {
        recepie.yist = 2;
    } else if (document.getElementById("timePoof").value === "poof3") {
        recepie.yist = 1.5;
    }
}

function byFlour(flour) {
    yistCheck();

    if (flour == 1000) {
        document.getElementById("fff").innerHTML = "1 קילו קמח";
    } else {
        document.getElementById("fff").innerHTML = `${flour} גרם קמח`;
    }

    document.getElementById("dWater").innerHTML = `${recepie.water * (flour / 1000)} גרם מים `;
    document.getElementById("dSalt").innerHTML = `${recepie.salt * (flour / 1000)} גרם מלח `;
    document.getElementById("dyist").innerHTML = `${recepie.yist * (flour / 1000)} גרם שמרים טריים `;
};

function oneFlour() {
    yistCheck();

    document.getElementById("fff").innerHTML = "1 קילו קמח";
    document.getElementById("dWater").innerHTML = `${recepie.water} גרם מים`;
    document.getElementById("dSalt").innerHTML = `${recepie.salt} גרם מלח`;
    document.getElementById("dyist").innerHTML = `${recepie.yist} גרם שמרים טריים`;
}











