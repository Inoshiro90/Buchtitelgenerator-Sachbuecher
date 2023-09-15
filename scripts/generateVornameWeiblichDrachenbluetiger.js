 //Generiert Vornamen für weibliche Drachenblütige
 function generateVornameWeiblichDrachenbluetiger() {
    const nm1 = ["Ak", "Aasa", "An", "Ara", "Bi", "Blen", "Bu", "Chass", "Da", "Den", "Dou", "Driin", "Egg", "Fari", "Fin", "Fur", "Ges", "Gil", "Ha", "Havi", "Heth", "Hilla", "Ja", "Je", "Jhe", "Ka", "Ko", "Me", "Mi", "Na", "Nuth", "Per", "Pogra", "Pyx", "Que", "Rai", "Re", "Ru", "Sa", "So", "Su", "Syn", "Tat", "Tha", "Ua", "Ve", "Zy"];
    const nm2 = ["ra", "thra", "trara", "va", "ri", "daeth", "rana", "ath", "ar", "tratha", "dra", "dar", "ren", "deh", "dex", "rele", "rethe", "kass", "rann", "lar", "ress", "not", "xi", "zean", "dana", "rinn", "gren", "jira", "shann", "la", "nix", "rin", "spa", "ann", "zena", "loth", "phara", "varan", "rina", "thrin", "yan", "djit", "zera", "kroff"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Drachenblütige hinzu
   const vornameWeiblichDrachenbluetiger = [];
   for (let i = 0; i < 1000; i++) {
    vornameWeiblichDrachenbluetiger.push(generateVornameWeiblichDrachenbluetiger());
   }