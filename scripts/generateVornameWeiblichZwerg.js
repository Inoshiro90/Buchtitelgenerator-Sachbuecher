//Generiert Vornamen für weibliche Zwerge
function generateVornameWeiblichZwerg() {
    const nm1 = ["An", "Ar", "Aud", "Bali", "Bar", "Bol", "Dag", "Da", "Del", "Die", "El", "Eri", "Falk", "Fall", "Fi", "Gil", "Gunn", "Gur", "Hel", "Hli", "Il", "Ja", "Kath", "Ki", "Kris", "Lif", "Mara", "Mar", "Mora", "Nala", "Nor", "Nur", "Or", "Ov", "Ris", "Sa", "Ther", "Tho", "Tor", "Torg", "Ursh", "Vali", "Vis", "Vona", "Wer", "Whur", "Yur"];
    const nm2 = ["bera", "tin", "hild", "fra", "bena", "dryn", "nal", "riff", "re", "sa", "deth", "dred", "runn", "thra", "nellen", "lyd", "loda", "dis", "gret", "ja", "n", "de", "rana", "ra", "lia", "tryd", "trasa", "styr", "na", "ed", "a", "kara", "iff", "ina", "wynn", "nnl", "lin", "dris", "drid", "ga", "ar", "da", "tra", "ydd", "gunn"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Zwerge hinzu
   const vornameWeiblichZwerg = [];
   for (let i = 0; i < 1000; i++) {
    vornameWeiblichZwerg.push(generateVornameWeiblichZwerg());
   }