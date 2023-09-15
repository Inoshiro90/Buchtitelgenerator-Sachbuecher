//Generiert Vornamen für weibliche Elfen
function generateVornameWeiblichElf() {
    const nm1 = ["Ad", "Ahi", "Altha", "Anas", "An", "Ar", "Bae", "Beth", "Bir", "Cae", "Chae", "Clai", "Da", "Dru", "El", "En", "Fa", "Felo", "Ha", "Ie", "Il", "Ir", "Jar", "Jelen", "Key", "Lesh", "Li", "Mai", "Mal", "Mer", "Mya", "Nai", "Quel", "Quill", "Ri", "Sa", "Shan", "Sha", "Sil", "Sum", "Thei", "Thia", "Tiaath", "Trau", "Va", "Val", "Xan"];
    const nm2 = ["rie", "nar", "ea", "trianna", "draste", "tinua", "ara", "litae", "rynna", "el", "lynn", "di", "ra", "silia", "ama", "na", "ral", "sial", "tae", "lenia", "anis", "ann", "sali", "neth", "leth", "anna", "a", "athah", "quis", "iele", "lee", "thethil", "vara", "enna", "athe", "daro", "riel", "airla", "va", "aqui", "nes", "rastra", "la", "que", "lam", "dania", "lanthe", "aphia"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Elfen hinzu
   const vornameWeiblichElf = [];
   for (let i = 0; i < 1000; i++) {
    vornameWeiblichElf.push(generateVornameWeiblichElf());
   }