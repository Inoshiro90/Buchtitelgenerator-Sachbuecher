//Generiert Vornamen für weibliche Gnome
function generateVornameWeiblichGnom() {
    const nm1 = ["Aba", "Bimp", "Bree", "Buv", "Cal", "Ca", "Car", "Cum", "Da", "Do", "Du", "El", "Elly", "Eni", "Lil", "Loop", "Lor", "Luth", "Mard", "Mee", "Men", "Mum", "Nis", "Num", "Ny", "O", "Op", "Or", "Pa", "Pyn", "Qui", "Ra", "Rot", "Roy", "Sa", "Sha", "Siff", "Sym", "Ta", "Te", "Terv", "Tip", "Ul", "Un", "Vel", "Vir", "Way", "Ye", "Zan"];
    const nm2 = ["not", "ly", "ra", "la", "ne", "va", "joy", "meo", "na", "dle", "ple", "ve", "opti", "wo", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    const nm3 = ["laba", "tin", "na", "vie", "bon", "mip", "lin", "pen", "ba", "lla", "mil", "la", "bell", "wick", "dda", "li", "ttin", "illa", "ra", "nab", "ny", "pena", "sa", "x", "da", "pah", "tle", "pop", "wyn", "nop", "ress", "ma", "around", "zeh", "cket", "be"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name3 = nm3[Math.floor(Math.random() * nm3.length)];
    const name = name1 + name2 + name3;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Gnome hinzu
   const vornameWeiblichGnom = [];
   for (let i = 0; i < 1000; i++) {
    vornameWeiblichGnom.push(generateVornameWeiblichGnom());
   }