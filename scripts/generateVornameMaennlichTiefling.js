//Generiert Vornamen für männliche Tieflinge
function generateVornameMaennlichTiefling() {
    const nm1 = ["Ab", "Ahr", "Ak", "Am", "An", "As", "Bal", "Bara", "Bath", "Ca", "Che", "Cim", "Cress", "Dama", "Eke", "Eu", "Fen", "For", "Ha", "Ia", "Kai", "Leu", "Mam", "Man", "Mar", "Mel", "Meri", "Mo", "Mor", "Ni", "Nir", "Ori", "Pay", "Pelai", "Pur", "Qe", "Ra", "Rim", "Sam", "Ska", "Teth", "Tha", "The", "Vala", "Vassa", "Xap", "Ze"];
    const nm2 = ["ad", "im", "men", "non", "dram", "tar", "am", "kas", "in", "em", "er", "el", "kos", "mon", "ron", "riz", "cas", "bor", "dos", "cis", "nen", "tus", "bas", "ech", "him", "dean", "dai", "thos", "cor", "gel", "ax", "os", "son", "muel", "mal", "mos", "ren", "muz", "rai", "far", "go", "pan", "par", "phan"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Tieflinge hinzu
   const vornameMaennlichTiefling = [];
   for (let i = 0; i < 1000; i++) {
    vornameMaennlichTiefling.push(generateVornameMaennlichTiefling());
   }