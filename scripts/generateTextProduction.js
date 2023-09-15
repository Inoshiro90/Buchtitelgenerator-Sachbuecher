//Bestimmt die Produktionsart des Textes
function generateTextProduction() {
    const randomNumber = Math.random() * 100 + 1;
    let textProduktion;
   
    const tinteFarbe = ["achatgrau", "altrosa", "anthrazitgrau", "azurblau", "basaltgrau", "beige", "beigebraun", "beigegrau", "beigerot", "blassbraun", "blassgrün", "blau", "blaugrau", "blaugrün", "blaulila", "blutorange", "bordeauxviolett", "braungrau", "braungrün", "braunoliv", "braunrot", "brillantblau", "capriblau", "cremeweiß", "currygelb", "cyan", "dahliengelb", "dunkelblau", "dunkelcyan", "dunkelgelb", "dunkelgrün", "dunkelmagenta", "dunkelrot", "eisengrau", "elfenbein", "enzianblau", "erdbeerrot", "farngrün", "feuerrot", "flaschengrün", "gelb", "gelbgrau", "gelbgrün", "gelboliv", "gelborange", "ginstergelb", "goldgelb", "granitgrau", "graphitgrau", "graphitschwarz", "grasgrün", "grau", "graubeige", "graublau", "graubraun", "grauoliv", "grauweiß", "grün", "grünbeige", "grünblau", "grüngrau", "hellelfenbein", "hellrosa", "hellrotorange", "himbeerrot", "himmelblau", "honiggelb", "karminrot", "kastanienbraun", "khakigrau", "kieferngrün", "kieselgrau", "kobaltblau", "korallenrot", "kupferbraun", "lachsorange", "lachsrot", "laubgrün", "lehmbraun", "leuchtgelb", "leuchtgrün", "leuchthellorange", "leuchthellrot", "leuchtorange", "leuchtrot", "lichtblau", "lichtgrau", "lichtgrün", "magenta", "mahagonibraun", "maigrün", "maisgelb", "mausgrau", "melonengelb", "minttürkis", "minzgrün", "moosgrau", "moosgrün", "nachtblau", "narzissengelb", "nussbraun", "ockerbraun", "ockergelb", "olivbraun", "olivgelb", "olivgrau", "olivgrün", "opalgrün", "orange", "orangebraun", "orientrot", "ozeanblau", "papyrusweiß", "pastellblau", "pastellgelb", "pastellorange", "pastelltürkis", "pastellviolett", "perlbeige", "perlbrombeer", "perldunkelgrau", "perlenzian", "perlgold", "perlgrün", "perlhellgrau", "perlkupfer", "perlmausgrau", "perlnachtblau", "perlopalgrün", "perlorange", "perlrosa", "perlrubinrot", "perlviolett", "perlweiß", "platingrau", "purpurrot", "purpurviolett", "quarzgrau", "rapsgelb", "rehbraun", "reingrün", "reinorange", "reinrot", "reinweiß", "rosé", "rot", "rotbraun", "rotlila", "rotorange", "rotviolett", "rubinrot", "safrangelb", "sandgelb", "saphirblau", "schiefergrau", "schilfgrün", "schokoladenbraun", "schwarz", "schwarzblau", "schwarzbraun", "schwarzgrau", "schwarzgrün", "schwarzoliv", "schwarzrot", "schwefelgelb", "seidengrau", "sepiabraun", "silbergrau", "smaragdgrün", "sonnengelb", "stahlblau", "staubgrau", "steingrau", "tannengrün", "taubenblau", "tieforange", "tiefschwarz", "tomatenrot", "türkisblau", "türkisgrün", "ultramarinblau", "umbragrau", "violett", "violettblau", "wasserblau", "weinrot", "weiß", "weißgrün", "zinkgelb", "zitronengelb"];
   
    if (randomNumber <= 45) {
     textProduktion = "hangeschrieben mit gewöhnlicher Tinte, schwarz";
    } else if (randomNumber <= 60) {
     textProduktion = "hangeschrieben mit gewöhnlicher Tinte, blau";
    } else if (randomNumber <= 65) {
     const zufaelligeTintenfarbe = tinteFarbe[Math.floor(Math.random() * tinteFarbe.length)];
     textProduktion = `handgeschrieben mit gewöhnlicher Tinte, ${zufaelligeTintenfarbe}`;
    } else if (randomNumber <= 70) {
     textProduktion = "handgeschrieben mit Humanoidenblut";
    } else if (randomNumber <= 80) {
     textProduktion = "handgeschrieben mit Tierblut";
    } else if (randomNumber <= 85) {
     textProduktion = "handgeschrieben mit Monsterblut";
    } else if (randomNumber <= 90) {
     textProduktion = "handgeschrieben mit magischer Tinte";
    } else if (randomNumber <= 95) {
     textProduktion = "gemalt";
    } else {
     textProduktion = "gedruckt";
    }		
    return textProduktion;
   }