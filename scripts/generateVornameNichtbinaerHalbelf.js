 //Funktion zur Generierung von halbelfischen Vornamen (nicht-binär)
 function generateVornameNichtbinaerHalbelf() {
    const vornameListe = [];
    for (let i = 0; i < 1000; i++) {
     const halbelf = generateHalbelfischerVorname("nicht-binär");
     vornameListe.push(halbelf.vorname);
    }
    return vornameListe;
   }
   