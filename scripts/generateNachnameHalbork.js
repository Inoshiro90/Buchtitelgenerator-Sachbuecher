 //Generiert Nachnamen für Halborks
 function generateNachnameHalbork() {
    const nm1 = ["Adern", "Axt", "Bestien", "Blank", "Blut", "Dämonen", "Dornen", "Dunkel", "Eisen", "Eiter", "Esel", "Faust", "Fels", "Feuer", "Frosch", "Frost", "Fuß", "Grimm", "Groll", "Hasen", "Hirn", "Höll", "Ketten", "Kinn", "Klingen", "Knack", "Knochen", "Krall", "Maden", "Qual", "Rache", "Riesen", "Rost", "Schädel", "Schatten", "Schlacht", "Schlamm", "Schmerz", "Schrei", "Spott", "Stark", "Stein", "Stink", "Sturm", "Teufels", "Unheils", "Venen", "Wolfs", "Zorn", "Zwei"];
    const nm2 = ["atem", "augen", "bann", "beißer", "blut", "bog", "bringer", "brüller", "darm", "donner", "faust", "fuß", "groll", "hand", "hauer", "haut", "heul", "kling", "knochen", "knurr", "kopf", "kratzer", "magen", "peitscher", "reißer", "rücken", "schädel", "schaffer", "schild", "schinder", "schlächter", "schlau", "schlitzer", "schmetter", "schmiss", "schrei", "schwinger", "speer", "spucker", "sprung", "stampfer", "stecher", "stürmer", "trampler", "tret", "verfolger", "wasch", "werf", "würger", "zorn"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Halborks hinzu
   const nachnameHalbork = [];
   for (let i = 0; i < 1000; i++) {
    nachnameHalbork.push(generateNachnameHalbork());
   }