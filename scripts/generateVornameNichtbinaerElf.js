//Generiert Vornamen für nicht-binäre Elfen
function generateVornameNichtbinaerElf() {
    const nm1 = ["Adr", "Ael", "Ahv", "Ara", "Aran", "Aus", "Aza", "Beir", "Cael", "Car", "Day", "Drea", "Eferr", "Eira", "Enia", "Er", "Ere", "Fiv", "Gallinn", "Genn", "Hada", "Hali", "Hei", "Hi", "Immer", "Ivell", "Kor", "Lam", "Lau", "Lu", "Mindar", "Na", "Nut", "Pael", "Per", "Quar", "Riar", "Rol", "Sovel", "Suhn", "Tham", "Thar", "Ther", "Uthem", "Vanu", "Var", "Ad", "Ahi", "Altha", "Anas", "An", "Ar", "Bae", "Beth", "Bir", "Cae", "Chae", "Clai", "Da", "Dru", "El", "En", "Fa", "Felo", "Ha", "Ie", "Il", "Ir", "Jar", "Jelen", "Key", "Lesh", "Li", "Mai", "Mal", "Mer", "Mya", "Nai", "Quel", "Quill", "Ri", "Sa", "Shan", "Sha", "Sil", "Sum", "Thei", "Thia", "Tiaath", "Trau", "Va", "Val", "Xan"];
    const nm2 = ["an", "ar", "ain", "mil", "nis", "t", "ki", "o", "drim", "ric", "ereth", "li", "il", "vel", "lis", "dan", "van", "in", "al", "rai", "math", "mo", "ios", "fel", "cian", "can", "tis", "ae", "ias", "en", "ion", "don", "iss", "ior", "ivol", "iatis", "ath", "is", "rie", "nar", "ea", "trianna", "draste", "tinua", "ara", "litae", "rynna", "el", "lynn", "di", "ra", "silia", "ama", "na", "ral", "sial", "tae", "lenia", "anis", "ann", "sali", "neth", "leth", "anna", "a", "athah", "quis", "iele", "lee", "thethil", "vara", "enna", "athe", "daro", "riel", "airla", "va", "aqui", "nes", "rastra", "la", "que", "lam", "dania", "lanthe", "aphia"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Elfen hinzu
   const vornameNichtbinaerElf = [];
   for (let i = 0; i < 1000; i++) {
    vornameNichtbinaerElf.push(generateVornameNichtbinaerElf());
   }