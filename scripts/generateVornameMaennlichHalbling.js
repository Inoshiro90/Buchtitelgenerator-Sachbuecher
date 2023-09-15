 //Generiert Vornamen für männliche Halblinge
 function generateVornameMaennlichHalbling() {
    const nm1 = ["Al", "An", "Ber", "Bob", "Ca", "Call", "Corr", "Dan", "Ed", "Eg", "El", "Er", "Fil", "Fin", "Fran", "Gar", "Gil", "Go", "Har", "Ig", "Jas", "Ke", "Kev", "Laz", "Ler", "Lind", "Ly", "Merr", "Mi", "Mor", "Ne", "Nev", "Os", "Per", "Pop", "Re", "Ros", "Sa", "Shar", "Ty", "Ul", "We", "Well", "Wen"];
    const nm2 = ["al", "am", "art", "bert", "bin", "born", "by", "can", "coe", "de", "del", "der", "die", "don", "e", "ed", "es", "ic", "il", "in", "ith", "klin", "le", "lo", "mo", "nad", "nan", "ner", "nie", "niel", "ob", "ol", "or", "per", "py", "ret", "rich", "rin", "ry", "th", "ton", "tran", "us", "walt"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Halblinge hinzu
   const vornameMaennlichHalbling = [];
   for (let i = 0; i < 1000; i++) {
    vornameMaennlichHalbling.push(generateVornameMaennlichHalbling());
   }