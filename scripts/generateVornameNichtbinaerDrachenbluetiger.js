 //Generiert Vornamen für nicht-binäre Drachenblütige
 function generateVornameNichtbinaerDrachenbluetiger() {
    const nm1 = ["A", "Ar", "Azz", "Bala", "Bara", "Bha", "Bidre", "Dada", "Dazz", "Dire", "Do", "Fa", "Gar", "Ghe", "Gor", "Gree", "Hes", "Hirra", "Il", "Kala", "Ker", "Kii", "Kri", "Maa", "Me", "Me", "Mo", "Mre", "Mugrun", "Na", "Nith", "Nork", "Nyk", "Pand", "Pa", "Pijj", "Quare", "Rath", "Rho", "Riva", "Sethre", "Sha", "She", "Sror", "Tar", "To", "Tryn", "Valo", "Vron", "Ze", "Ak", "Aasa", "An", "Ara", "Bi", "Blen", "Bu", "Chass", "Da", "Den", "Dou", "Driin", "Egg", "Fari", "Fin", "Fur", "Ges", "Gil", "Ha", "Havi", "Heth", "Hilla", "Ja", "Je", "Jhe", "Ka", "Ko", "Me", "Mi", "Na", "Nuth", "Per", "Pogra", "Pyx", "Que", "Rai", "Re", "Ru", "Sa", "So", "Su", "Syn", "Tat", "Tha", "Ua", "Ve", "Zy"];
    const nm2 = ["drex", "jhan", "akh", "sar", "dad", "rash", "ked", "lan", "azn", "cris", "naar", "ax", "gax", "sh", "bundus", "then", "kann", "thak", "dan", "kad", "rith", "iv", "gog", "drash", "hen", "zikth", "ksh", "den", "darr", "ther", "ruuth", "jed", "trin", "rik", "thon", "kran", "gar", "an", "kar", "mash", "dinn", "hun", "rinn", "nicus", "rean", "diss", "daar", "ra", "thra", "trara", "va", "ri", "daeth", "rana", "ath", "ar", "tratha", "dra", "dar", "ren", "deh", "dex", "rele", "rethe", "kass", "rann", "lar", "ress", "not", "xi", "zean", "dana", "rinn", "gren", "jira", "shann", "la", "nix", "rin", "spa", "ann", "zena", "loth", "phara", "varan", "rina", "thrin", "yan", "djit", "zera", "kroff"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Drachenblütige hinzu
   const vornameNichtbinaerDrachenbluetiger = [];
   for (let i = 0; i < 1000; i++) {
    vornameNichtbinaerDrachenbluetiger.push(generateVornameNichtbinaerDrachenbluetiger());
   }