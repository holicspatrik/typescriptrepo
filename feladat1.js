function vanenegativ(szamok) {
    var i = 0;
    while (i < szamok.length && !(szamok[i] < 0)) {
        i++;
    }
    if (i < szamok.length) {
        return true;
    }
    else {
        return false;
    }
}
function korkerter(r) {
    var ker = 2 * r * Math.PI;
    var ter = r * r * Math.PI;
    return [ker, ter];
}
console.log(vanenegativ([5, 12, 3, -56]));
console.log(vanenegativ([5, 12, 3, 56]));
console.log(korkerter(5));
function minauto(autok) {
    var min = autok[0];
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].hengerurtartalom < min.hengerurtartalom) {
            min = autok[i];
        }
    }
    return min;
}
function benzinesdb(autok) {
    var db = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinese == true) {
            db++;
        }
    }
    return db;
}
function atlagccm(autok) {
    var atlag = 0;
    for (var i = 0; i < autok.length; i++) {
        atlag += autok[i].hengerurtartalom;
    }
    atlag /= autok.length;
    return atlag;
}
function vanebenzines(autok) {
    var i = 0;
    while (i < autok.length && !(autok[i].benzinese == true)) {
        i++;
    }
    if (i < autok.length) {
        return true;
    }
    else {
        return false;
    }
}
function szetvalogato(autok) {
    var benzinesek = [];
    var nembenzinesek = [];
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinese == true) {
            benzinesek.push(autok[i]);
        }
        else {
            nembenzinesek.push(autok[i]);
        }
    }
    return [benzinesek, nembenzinesek];
}
var a1 = {
    gyarto: "Audi",
    tipus: "A4",
    hengerurtartalom: 1890,
    benzinese: false,
};
var a2 = {
    gyarto: "Opel",
    tipus: "Astra",
    hengerurtartalom: 1600,
    benzinese: true
};
var a3 = {
    gyarto: "Volkswagen",
    tipus: "Polo",
    hengerurtartalom: 1390,
    benzinese: true,
};
var a4 = {
    gyarto: "BMW",
    tipus: "i3",
    hengerurtartalom: 0,
    benzinese: false,
};
var autok = [a1, a2, a3, a4];
console.log(minauto(autok));
console.log(benzinesdb(autok));
console.log(atlagccm(autok));
console.log(vanebenzines(autok));
console.log(szetvalogato(autok));
