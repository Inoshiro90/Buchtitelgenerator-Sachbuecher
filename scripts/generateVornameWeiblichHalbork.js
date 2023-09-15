 //Generiert Vornamen für weibliche Halborks
 function generateVornameWeiblichHalbork() {
    const nm1 = ["Ar", "Bag", "Ben", "Bil", "Brak", "Cree", "Dren", "Ekk", "Em", "En", "Fist", "Ga", "Gor", "Gra", "Gree", "Gri", "Gy", "Hra", "Hu", "Il", "Kab", "Kan", "Lag", "Lez", "Mur", "Mu", "My", "Nag", "Nee", "Ne", "No", "Oo", "Ov", "Own", "Pu", "Re", "Shau", "Sil", "Su", "Tag", "Taw", "To", "Ub", "Van", "Vo", "Vol", "Vor", "Yev", "Zag"];
    const nm2 = ["ha", "gi", "doo", "ga", "ka", "na", "ek", "en", "gong", "ula", "aki", "ai", "ba", "nk", "thy", "ru", "barg", "sif", "azi", "re", "gen", "rook", "ev", "rette", "lla", "gu", "lah", "tah", "ak", "yet", "eza", "tha", "gre", "ar", "omph", "ada", "chu", "la", "elda"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Halborks hinzu
   const vornameWeiblichHalbork = [];
   for (let i = 0; i < 1000; i++) {
    vornameWeiblichHalbork.push(generateVornameWeiblichHalbork());
   }