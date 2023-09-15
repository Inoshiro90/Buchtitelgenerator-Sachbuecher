 //Generiert Vornamen für nicht-binäre Zwerge
 function generateVornameNichtbinaerZwerg() {
    const nm1 = ["Ad", "Alb", "Ba", "Bar", "Belo", "Brot", "Da", "Dal", "Dar", "Del", "Duer", "Dwo", "Eb", "Ein", "Ela", "Eri", "Fall", "Far", "Gar", "Gil", "Gim", "Har", "Kil", "Mor", "Nal", "Nor", "Nura", "Olo", "Ol", "Or", "Os", "Ran", "Rei", "Ru", "Tak", "Thor", "Thra", "Tor", "Trau", "Tra", "Ulf", "Ur", "Ve", "Von", "Whur", "An", "Ar", "Aud", "Bali", "Bar", "Bol", "Dag", "Da", "Del", "Die", "El", "Eri", "Falk", "Fall", "Fi", "Gil", "Gunn", "Gur", "Hel", "Hli", "Il", "Ja", "Kath", "Ki", "Kris", "Lif", "Mara", "Mar", "Mora", "Nala", "Nor", "Nur", "Or", "Ov", "Ris", "Sa", "Ther", "Tho", "Tor", "Torg", "Ursh", "Vali", "Vis", "Vona", "Wer", "Whur", "Yur"];
    const nm2 = ["rik", "erich", "ern", "endd", "ril", "tor", "in", "gal", "rak", "elg", "gath", "ric", "erk", "kil", "im", "as", "ond", "grim", "dain", "thur", "gen", "urt", "bek", "drak", "var", "gran", "kral", "ral", "dak", "val", "unt", "sik", "kar", "linn", "adin", "dal", "dek", "bon", "vok", "gar", "aim", "it", "bin", "bera", "tin", "hild", "fra", "bena", "dryn", "nal", "riff", "re", "sa", "deth", "dred", "runn", "thra", "nellen", "lyd", "loda", "dis", "gret", "ja", "n", "de", "rana", "ra", "lia", "tryd", "trasa", "styr", "na", "ed", "a", "kara", "iff", "ina", "wynn", "nnl", "lin", "dris", "drid", "ga", "ar", "da", "tra", "ydd", "gunn"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Zwerge hinzu
   const vornameNichtbinaerZwerg = [];
   for (let i = 0; i < 1000; i++) {
    vornameNichtbinaerZwerg.push(generateVornameNichtbinaerZwerg());
   }