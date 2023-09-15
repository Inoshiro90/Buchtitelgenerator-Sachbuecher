//Generiert Vornamen für weibliche Halblinge
function generateVornameWeiblichHalbling() {
    const nm1 = ["Al", "An", "Bel", "Blos", "Bre", "Call", "Chen", "Cor", "De", "Dell", "Ei", "Er", "Euph", "Geor", "Gyn", "Harr", "Jas", "Jill", "Jo", "Kith", "Lavi", "Lid", "Mae", "Mari", "Mer", "My", "Ned", "Nik", "No", "Oli", "Pae", "Pe", "Pen", "Philo", "Por", "Ro", "Rob", "Sar", "Sera", "Shae", "Sta", "Taw", "The", "Try", "Ty", "Va", "Ver", "Wel", "Will"];
    const nm2 = ["a", "ain", "al", "an", "arl", "bie", "cee", "da", "dry", "e", "ea", "ee", "ell", "emia", "gan", "gina", "gold", "ian", "ie", "iet", "ki", "la", "mena", "mine", "na", "ne", "ni", "nia", "nie", "o", "ow", "phina", "ra", "ri", "ria", "se", "som", "tia", "via", "ym"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Halblinge hinzu
   const vornameWeiblichHalbling = [];
   for (let i = 0; i < 1000; i++) {
    vornameWeiblichHalbling.push(generateVornameWeiblichHalbling());
   }
   