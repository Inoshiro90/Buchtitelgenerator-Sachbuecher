 //Generiert Vornamen für nicht-binäre Tieflinge
 function generateVornameNichtbinaerTiefling() {
    const nm1 = ["Ab", "Ahr", "Ak", "Am", "An", "As", "Bal", "Bara", "Bath", "Ca", "Che", "Cim", "Cress", "Dama", "Eke", "Eu", "Fen", "For", "Ha", "Ia", "Kai", "Leu", "Mam", "Man", "Mar", "Mel", "Meri", "Mo", "Mor", "Ni", "Nir", "Ori", "Pay", "Pelai", "Pur", "Qe", "Ra", "Rim", "Sam", "Ska", "Teth", "Tha", "The", "Vala", "Vassa", "Xap", "Ze", "Ak", "Ana", "Ar", "Asta", "Ay", "Az", "Bel", "Bry", "Bu", "Cri", "Dama", "Deca", "E", "Ga", "Go", "He", "Ish", "Jeze", "Ka", "Kalli", "Kas", "Ler", "Lil", "Maka", "Ma", "Marko", "Mas", "Naa", "Neme", "Ni", "Ori", "Os", "Phela", "Prosper", "Pu", "Py", "Ri", "Ron", "Sed", "Se", "Sekh", "Semy", "Sha", "Sor", "Uz", "Va", "Ve"];
    const nm2 = ["ad", "im", "men", "non", "dram", "tar", "am", "kas", "in", "em", "er", "el", "kos", "mon", "ron", "riz", "cas", "bor", "dos", "cis", "nen", "tus", "bas", "ech", "him", "dean", "dai", "thos", "cor", "gel", "ax", "os", "son", "muel", "mal", "mos", "ren", "muz", "rai", "far", "go", "pan", "par", "phan", "ta", "kis", "mara", "ro", "ym", "za", "eth", "seis", "ne", "ella", "ia", "rabia", "a", "dreel", "mory", "cat", "te", "beth", "li", "sta", "deya", "issa", "ith", "ria", "nea", "sian", "tema", "mah", "ja", "anna", "ah", "ine", "rah", "ra", "eta", "obe", "we", "dit", "ere", "met", "aza", "va", "ax", "ath", "pula", "par", "rin"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Tieflinge hinzu
   const vornameNichtbinaerTiefling = [];
   for (let i = 0; i < 1000; i++) {
    vornameNichtbinaerTiefling.push(generateVornameNichtbinaerTiefling());
   }