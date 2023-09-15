 //Generiert Vornamen für männliche Drachenblütige
 function generateVornameMaennlichDrachenbluetiger() {
    const nm1 = ["A", "Ar", "Azz", "Bala", "Bara", "Bha", "Bidre", "Dada", "Dazz", "Dire", "Do", "Fa", "Gar", "Ghe", "Gor", "Gree", "Hes", "Hirra", "Il", "Kala", "Ker", "Kii", "Kri", "Maa", "Me", "Me", "Mo", "Mre", "Mugrun", "Na", "Nith", "Nork", "Nyk", "Pand", "Pa", "Pijj", "Quare", "Rath", "Rho", "Riva", "Sethre", "Sha", "She", "Sror", "Tar", "To", "Tryn", "Valo", "Vron", "Ze"];
    const nm2 = ["drex", "jhan", "akh", "sar", "dad", "rash", "ked", "lan", "azn", "cris", "naar", "ax", "gax", "sh", "bundus", "then", "kann", "thak", "dan", "kad", "rith", "iv", "gog", "drash", "hen", "zikth", "ksh", "den", "darr", "ther", "ruuth", "jed", "trin", "rik", "thon", "kran", "gar", "an", "kar", "mash", "dinn", "hun", "rinn", "nicus", "rean", "diss", "daar"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Drachenblütige hinzu
   const vornameMaennlichDrachenbluetiger = [];
   for (let i = 0; i < 1000; i++) {
    vornameMaennlichDrachenbluetiger.push(generateVornameMaennlichDrachenbluetiger());
   }