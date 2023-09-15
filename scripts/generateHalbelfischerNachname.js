//Funktion zur Generierung von halbelfischen Nachnamen
function generateHalbelfischerNachname() {
    let nachname;
   
    //Zufällig wählen, ob der Halbelf in einer elfischen oder menschlichen Gesellschaft aufgewachsen ist
    const elfAufgewachsen = Math.random() < 0.5;
   
    if (elfAufgewachsen) {
     nachname = nachnameElf[Math.floor(Math.random() * nachnameElf.length)];
    } else {
     nachname = nachnameMensch[Math.floor(Math.random() * nachnameMensch.length)];
    }
   
    return {
     nachname,
     gesellschaft: elfAufgewachsen ? "elfisch" : "menschlich"
    };
   }