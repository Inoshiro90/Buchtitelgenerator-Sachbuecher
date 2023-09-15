 //Funktion zur Generierung von halbelfischen Vornamen (männlich)
 function generateVornameMaennlichHalbelf() {
    const vornameListe = [];
    for (let i = 0; i < 1000; i++) {
     const halbelf = generateHalbelfischerVorname("männlich");
     vornameListe.push(halbelf.vorname);
    }
    return vornameListe;
   }