 //Generiert Vornamen für weibliche Tieflinge
 function generateVornameWeiblichTiefling() {
    const nm1 = ["Ak", "Ana", "Ar", "Asta", "Ay", "Az", "Bel", "Bry", "Bu", "Cri", "Dama", "Deca", "E", "Ga", "Go", "He", "Ish", "Jeze", "Ka", "Kalli", "Kas", "Ler", "Lil", "Maka", "Ma", "Marko", "Mas", "Naa", "Neme", "Ni", "Ori", "Os", "Phela", "Prosper", "Pu", "Py", "Ri", "Ron", "Sed", "Se", "Sekh", "Semy", "Sha", "Sor", "Uz", "Va", "Ve"];
    const nm2 = ["ta", "kis", "mara", "ro", "ym", "za", "eth", "seis", "ne", "ella", "ia", "rabia", "a", "dreel", "mory", "cat", "te", "beth", "li", "sta", "deya", "issa", "ith", "ria", "nea", "sian", "tema", "mah", "ja", "anna", "ah", "ine", "rah", "ra", "eta", "obe", "we", "dit", "ere", "met", "aza", "va", "ax", "ath", "pula", "par", "rin"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Tieflinge hinzu
   const vornameWeiblichTiefling = [];
   for (let i = 0; i < 1000; i++) {
    vornameWeiblichTiefling.push(generateVornameWeiblichTiefling());
   }