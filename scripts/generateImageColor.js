//Bestimmt die Farbe der Bilder
function generateImageColor() {
    const randomNumber = Math.random() * 100 + 1;
    let bildFarbe;
   
    const bildFarbeTon = ["achatgrau", "altrosa", "anthrazitgrau", "azurblau", "basaltgrau", "beige", "beigebraun", "beigegrau", "beigerot", "blassbraun", "blassgrün", "blau", "blaugrau", "blaugrün", "blaulila", "blutorange", "bordeauxviolett", "braungrau", "braungrün", "braunoliv", "braunrot", "brillantblau", "capriblau", "cremeweiß", "currygelb", "cyan", "dahliengelb", "dunkelblau", "dunkelcyan", "dunkelgelb", "dunkelgrün", "dunkelmagenta", "dunkelrot", "eisengrau", "elfenbein", "enzianblau", "erdbeerrot", "farngrün", "feuerrot", "flaschengrün", "gelb", "gelbgrau", "gelbgrün", "gelboliv", "gelborange", "ginstergelb", "goldgelb", "granitgrau", "graphitgrau", "graphitschwarz", "grasgrün", "grau", "graubeige", "graublau", "graubraun", "grauoliv", "grauweiß", "grün", "grünbeige", "grünblau", "grüngrau", "hellelfenbein", "hellrosa", "hellrotorange", "himbeerrot", "himmelblau", "honiggelb", "karminrot", "kastanienbraun", "khakigrau", "kieferngrün", "kieselgrau", "kobaltblau", "korallenrot", "kupferbraun", "lachsorange", "lachsrot", "laubgrün", "lehmbraun", "leuchtgelb", "leuchtgrün", "leuchthellorange", "leuchthellrot", "leuchtorange", "leuchtrot", "lichtblau", "lichtgrau", "lichtgrün", "magenta", "mahagonibraun", "maigrün", "maisgelb", "mausgrau", "melonengelb", "minttürkis", "minzgrün", "moosgrau", "moosgrün", "nachtblau", "narzissengelb", "nussbraun", "ockerbraun", "ockergelb", "olivbraun", "olivgelb", "olivgrau", "olivgrün", "opalgrün", "orange", "orangebraun", "orientrot", "ozeanblau", "papyrusweiß", "pastellblau", "pastellgelb", "pastellorange", "pastelltürkis", "pastellviolett", "perlbeige", "perlbrombeer", "perldunkelgrau", "perlenzian", "perlgold", "perlgrün", "perlhellgrau", "perlkupfer", "perlmausgrau", "perlnachtblau", "perlopalgrün", "perlorange", "perlrosa", "perlrubinrot", "perlviolett", "perlweiß", "platingrau", "purpurrot", "purpurviolett", "quarzgrau", "rapsgelb", "rehbraun", "reingrün", "reinorange", "reinrot", "reinweiß", "rosé", "rot", "rotbraun", "rotlila", "rotorange", "rotviolett", "rubinrot", "safrangelb", "sandgelb", "saphirblau", "schiefergrau", "schilfgrün", "schokoladenbraun", "schwarz", "schwarzblau", "schwarzbraun", "schwarzgrau", "schwarzgrün", "schwarzoliv", "schwarzrot", "schwefelgelb", "seidengrau", "sepiabraun", "silbergrau", "smaragdgrün", "sonnengelb", "stahlblau", "staubgrau", "steingrau", "tannengrün", "taubenblau", "tieforange", "tiefschwarz", "tomatenrot", "türkisblau", "türkisgrün", "ultramarinblau", "umbragrau", "violett", "violettblau", "wasserblau", "weinrot", "weiß", "weißgrün", "zinkgelb", "zitronengelb"];
   
    if (randomNumber <= 55) {
     bildFarbe = "einfarbig in schwarz und weiß";
    } else if (randomNumber <= 80) {
     const zufaelligeBildfarbe = bildFarbeTon[Math.floor(Math.random() * bildFarbeTon.length)];
     bildFarbe = `einfarbig in ${zufaelligeBildfarbe}`;
    } else if (randomNumber <= 90) {
     const zufaelligeFarbe1 = bildFarbeTon[Math.floor(Math.random() * bildFarbeTon.length)];
     let zufaelligeFarbe2 = zufaelligeFarbe1;
     while (zufaelligeFarbe2 === zufaelligeFarbe1) {
      zufaelligeFarbe2 = bildFarbeTon[Math.floor(Math.random() * bildFarbeTon.length)];
     }
     bildFarbe = `zweifarbig in ${zufaelligeFarbe1} und ${zufaelligeFarbe2}`;
    } else if (randomNumber <= 95) {
     bildFarbe = "Halbton";
    } else {
     bildFarbe = "Vollton";
    }		
    return bildFarbe;
   }