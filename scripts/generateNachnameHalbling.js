//Generiert Nachnamen für Halblinge
function generateNachnameHalbling() {
    const nm1 = ["Älter", "Apfel", "Auf", "Brei", "Dick", "Distel", "Dorn", "Feg", "Flüster", "Frucht", "Gold", "Gras", "Groß", "Grün", "Gut", "Hell", "Honig", "Hügel", "Kessel", "Klein", "Kupfer", "Leis", "Ried", "Rot", "Sanft", "Sau", "Schatten", "Schilf", "Schnell", "Silber", "Sonn", "Stark", "Stein", "Tal", "Tee", "Tief", "Unter", "Warm", "Weis", "Wild", "Wurf", "Zehn"];
    const nm2 = ["acker", "aug", "band", "beere", "bein", "blatt", "blüte", "brück", "erd", "fass", "finger", "flasch", "freund", "fund", "fuß", "glas", "grund", "hand", "has", "herz", "hügel", "kessel", "kopf", "kupfer", "laub", "mann", "mantel", "maß", "maus", "mond", "pfiff", "sammler", "schnell", "schritt", "spitz", "stein", "topf", "wang", "wasser", "wies", "zweig"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Halblinge hinzu
   const nachnameHalbling = [];
   for (let i = 0; i < 1000; i++) {
    nachnameHalbling.push(generateNachnameHalbling());
   }