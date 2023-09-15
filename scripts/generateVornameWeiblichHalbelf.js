 //Funktion zur Generierung von halbelfischen Vornamen (weiblich)
 function generateVornameWeiblichHalbelf() {
    const vornameListe = [];
    for (let i = 0; i < 1000; i++) {
     const halbelf = generateHalbelfischerVorname("weiblich");
     vornameListe.push(halbelf.vorname);
    }
    return vornameListe;
   }