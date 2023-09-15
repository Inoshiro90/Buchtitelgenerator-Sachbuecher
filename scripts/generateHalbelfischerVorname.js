 //Generiert halbelfische Vornamen
 function generateHalbelfischerVorname(geschlecht) {
    let vorname;
   
    //Zufällig wählen, ob der Halbelf in einer elfischen oder menschlichen Gesellschaft aufgewachsen ist
    const elfAufgewachsen = Math.random() < 0.25; //25% Wahrscheinlichkeit für elfisch
    const gesellschaft = elfAufgewachsen ? "elfisch" : "menschlich";
   
    if (gesellschaft === "menschlich") {
     if (geschlecht === "männlich") {
      vorname = vornameMaennlichMensch[Math.floor(Math.random() * vornameMaennlichMensch.length)];
     } else if (geschlecht === "weiblich") {
      vorname = vornameWeiblichMensch[Math.floor(Math.random() * vornameWeiblichMensch.length)];
     } else {
      vorname = vornameNichtbinaerMensch[Math.floor(Math.random() * vornameNichtbinaerMensch.length)];
     }
    } else {
     if (geschlecht === "männlich") {
      vorname = vornameMaennlichElf[Math.floor(Math.random() * vornameMaennlichElf.length)];
     } else if (geschlecht === "weiblich") {
      vorname = vornameWeiblichElf[Math.floor(Math.random() * vornameWeiblichElf.length)];
     } else {
      vorname = vornameNichtbinaerElf[Math.floor(Math.random() * vornameNichtbinaerElf.length)];
     }
    }		
    return {
     vorname,
     gesellschaft
    };
   }