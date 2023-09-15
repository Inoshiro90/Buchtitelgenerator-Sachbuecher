 //Funktion zur Generierung von halbelfischen Nachnamen
 function generateNachnameHalbelf() {
    const nachnameListe = [];
    for (let i = 0; i < 1000; i++) {
     const nachname = generateHalbelfischerNachname().nachname;
     nachnameListe.push(nachname);
    }
    return nachnameListe;
   }