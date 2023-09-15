//Generiert Vornamen für nicht-binäre Halblinge
function generateVornameNichtbinaerHalbling() {
    const nm1 = ["Al", "An", "Ber", "Bob", "Ca", "Call", "Corr", "Dan", "Ed", "Eg", "El", "Er", "Fil", "Fin", "Fran", "Gar", "Gil", "Go", "Har", "Ig", "Jas", "Ke", "Kev", "Laz", "Ler", "Lind", "Ly", "Merr", "Mi", "Mor", "Ne", "Nev", "Os", "Per", "Pop", "Re", "Ros", "Sa", "Shar", "Ty", "Ul", "We", "Well", "Wen", "Al", "An", "Bel", "Blos", "Bre", "Call", "Chen", "Cor", "De", "Dell", "Ei", "Er", "Euph", "Geor", "Gyn", "Harr", "Jas", "Jill", "Jo", "Kith", "Lavi", "Lid", "Mae", "Mari", "Mer", "My", "Ned", "Nik", "No", "Oli", "Pae", "Pe", "Pen", "Philo", "Por", "Ro", "Rob", "Sar", "Sera", "Shae", "Sta", "Taw", "The", "Try", "Ty", "Va", "Ver", "Wel", "Will"];
    const nm2 = ["al", "am", "art", "bert", "bin", "born", "by", "can", "coe", "de", "del", "der", "die", "don", "e", "ed", "es", "ic", "il", "in", "ith", "klin", "le", "lo", "mo", "nad", "nan", "ner", "nie", "niel", "ob", "ol", "or", "per", "py", "ret", "rich", "rin", "ry", "th", "ton", "tran", "us", "walt", "a", "ain", "al", "an", "arl", "bie", "cee", "da", "dry", "e", "ea", "ee", "ell", "emia", "gan", "gina", "gold", "ian", "ie", "iet", "ki", "la", "mena", "mine", "na", "ne", "ni", "nia", "nie", "o", "ow", "phina", "ra", "ri", "ria", "se", "som", "tia", "via", "ym"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Halblinge hinzu
   const vornameNichtbinaerHalbling = [];
   for (let i = 0; i < 1000; i++) {
    vornameNichtbinaerHalbling.push(generateVornameNichtbinaerHalbling());
   }