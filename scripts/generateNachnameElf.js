//Generiert Nachnamen für Elfen
function generateNachnameElf() {
    const nm1 = ["Alo", "Ama", "Ari", "Arnu", "Ber", "Caer", "Ca", "Casill", "Ci", "Dal", "Eatha", "Ere", "Etha", "Fash", "Fir", "Flo", "Gala", "Gol", "Ha", "Ho", "Ia", "Ill", "Ira", "Koeh", "Lath", "Lia", "Me", "My", "Nar", "Net", "Of", "Os", "O", "Qua", "Rae", "Ro", "Sel", "Sian", "Sui", "Syl", "Tei", "Til", "Wa", "With", "Xi", "Xist", "Ya"];
    const nm2 = ["ro", "kiir", "stacia", "essus", "anna", "evan", "donel", "phaxath", "tenirra", "threth", "anathan", "lena", "naeth", "nasath", "arash", "ahel", "shem", "nodel", "torah", "nali", "limion", "rineth", "thrana", "phelkiir", "napha", "lanna", "alas", "don", "liamne", "llerelel", "stralath", "lo", "yoive", "fandrus", "toroth", "thronus", "lanthri", "thran", "thenel", "evarun", "thrasas", "varanth", "nithra", "tathana", "santhi", "rethin", "loscient", "srith", "eldrin"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Elfen hinzu
   const nachnameElf = [];
   for (let i = 0; i < 1000; i++) {
    nachnameElf.push(generateNachnameElf());
   }