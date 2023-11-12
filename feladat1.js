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
