 //Generiert Vornamen für männliche Halborks
 function generateVornameMaennlichHalbork() {
    const nm1 = ["Ar", "Bra", "Bru", "Cag", "De", "Do", "Der", "Dru", "Fe", "Ge", "Gna", "Grum", "Gub", "Hag", "He", "Ho", "Hol", "Im", "Kar", "Ke", "Kor", "Kru", "Lub", "Meg", "Mhur", "Mor", "Ni", "Ny", "Od", "Oh", "Ren", "Re", "Ro", "Rra", "Sa", "Scra", "Sheg", "Shu", "Tang", "Tar", "Tha", "Tho", "Tra", "Ug", "Va", "Vil", "Yur", "Ze"];
    const nm2 = ["gran", "ak", "ug", "nch", "rn", "en", "uk", "eng", "ell", "arsh", "bar", "rash", "ren", "enk", "gar", "olg", "sh", "ash", "arg", "eth", "ag", "usk", "ged", "ord", "org", "il", "barg", "orr", "ohr", "dar", "esh", "ont", "ath", "ark", "gen", "ump", "lar", "ar", "okk", "arth", "berg", "urk", "ed"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Halborks hinzu
   const vornameMaennlichHalbork = [];
   for (let i = 0; i < 1000; i++) {
    vornameMaennlichHalbork.push(generateVornameMaennlichHalbork());
   }