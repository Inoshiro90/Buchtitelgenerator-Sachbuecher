//Generiert Nachnamen für Zwerge
function generateNachnameZwerg() {
    const nm1 = ["Ara", "Bal", "Blut", "Bof", "Bördig", "Braz", "Brut", "Cae", "Daer", "Dan", "Dar", "Durth", "Eisen", "Fall", "Feuer", "Frost", "Glan", "Goblin", "Gold", "Gor", "Grau", "Groß", "Halter", "Hammer", "Höl", "Immer", "Kraft", "Lod", "Lut", "Mori", "Ork", "Rakan", "Rubin", "Rumna", "Schaum", "Schlacht", "Silber", "Stahl", "Stark", "Stra", "Thra", "Tief", "Tor", "Tore", "Troll", "Un", "Wahr"];
    const nm2 = ["aln", "amboss", "ane", "aug", "axt", "bart", "bier", "blut", "bluter", "brek", "dahk", "dann", "derk", "err", "faust", "feind", "finder", "fund", "gak", "gart", "gehr", "gräber", "hak", "hammer", "heim", "hek", "herz", "hig", "humpen", "keln", "kil", "kith", "krak", "kral", "lack", "nor", "scharf", "schmied", "schreck", "stein", "unn", "vir", "zeh", "zik"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Zwerge hinzu
   const nachnameZwerg = [];
   for (let i = 0; i < 1000; i++) {
    nachnameZwerg.push(generateNachnameZwerg());
   }