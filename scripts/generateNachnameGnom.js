//Generiert Nachnamen für Gnome
function generateNachnameGnom() {
    const nm1 = ["Alba", "Wirr", "Be", "Boon", "Kobbe", "Daer", "Dun", "Fabbel", "Fappel", "Fiedel", "Fol", "Gar", "Gim", "Funkel", "Gobbel", "Gum", "Horcus", "Hampel", "Eisen", "Lef", "Lingen", "Loo", "Mäkkel", "Miggel", "Mung", "Mur", "Mus", "Na", "Nin", "Nopen", "Nuckel", "Off", "Oom", "Pil", "Pin", "Kiel", "Raul", "Rie", "Roffer", "Schep", "Schatten", "Silber", "Sym", "Tarkel", "Tim", "Tu", "Umbo", "Waggel", "Wel", "Wild"];
    const nm2 = ["ra", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "fol", "", "gel", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ];
    const nm3 = ["tie", "stein", "ren", "diggel", "lobb", "gel", "ben", "stabbel", "stamp", "fenn", "kor", "rick", "len", "firn", "men", "porcus", "bampel", "fell", "fery", "hall", "lue", "ferß", "dy", "gen", "nig", "graben", "ckel", "stallen", "stemp", "und", "traul", "wicken", "gun", "schärfer", "nor", "ieß", "ton", "pen", "mantel", "garn", "pony", "by", "bers", "doben", "top", "ber", "wander"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name3 = nm3[Math.floor(Math.random() * nm3.length)];
    const name = name1 + name2 + name3;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Gnome hinzu
   const nachnameGnom = [];
   for (let i = 0; i < 1000; i++) {
    nachnameGnom.push(generateNachnameGnom());
   }