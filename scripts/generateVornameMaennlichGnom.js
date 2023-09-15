//Generiert Vornamen für männliche Gnome
function generateVornameMaennlichGnom() {
    const nm1 = ["Al", "An", "Aru", "Bil", "Bod", "Bro", "Bur", "Co", "Cram", "Dab", "De", "Dim", "Eber", "El", "Er", "Fab", "Fib", "Fon", "Frou", "Fru", "Ger", "Gim", "Gli", "Ig", "Jab", "Je", "Kel", "Kip", "Nam", "Opp", "Or", "Pag", "Pal", "Po", "Qua", "Rib", "Rim", "Ro", "Sap", "See", "Sen", "Sin", "Um", "War", "Wig", "Wob", "Wre", "Zaff", "Zo"];
    const nm2 = ["", "ma", "dy", "cka", "per", "ble", "le", "bed", "foo", "la", "on", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    const nm3 = ["ston", "vyn", "verth", "wann", "bron", "nock", "occ", "gell", "by", "nap", "dob", "bean", "ble", "deb", "don", "ky", "len", "stib", "kin", "se", "ug", "bo", "ble", "im", "den", "ble", "do", "len", "per", "dle", "by", "ryn", "gen", "bar", "og", "len", "bles", "ple", "dar", "ply", "bo", "teq", "dri", "pen", "ryn", "gens", "bles", "enn", "rab", "ok"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name3 = nm3[Math.floor(Math.random() * nm3.length)];
    const name = name1 + name2 + name3;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Gnome hinzu
   const vornameMaennlichGnom = [];
   for (let i = 0; i < 1000; i++) {
    vornameMaennlichGnom.push(generateVornameMaennlichGnom());
   }