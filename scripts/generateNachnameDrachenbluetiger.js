 //Generiert Nachnamen für Drachenblütige
 function generateNachnameDrachenbluetiger() {
    const nm1 = ["Akam", "Argen", "Ba", "Beryn", "Bhenk", "Caavyl", "Chumby", "Clenth", "Daar", "Del", "Dhyr", "Eby", "Ess", "Fharn", "Gha", "Grrrmm", "Gygaz", "Hash", "Hshh", "Imbix", "Jery", "Jhar", "Ker", "Kim", "Lham", "Linxa", "Mohr", "My", "Nem", "Nor", "Ophin", "Ore", "Pfaph", "Phrah", "Pyrax", "Qyx", "Ragh", "Shes", "Skaarz", "Sum", "Tiam", "Tur", "Um", "Vang", "Verthi", "Wivvyr", "Wys", "Xephyr", "Yar", "Zzxa"];
    const nm2 = ["bheryll", "thrix", "haro", "tolthro", "kumbyrz", "tera", "xirin", "tinthi", "den", "mi", "ktel", "nichto", "tyr", "gnarth", "alli", "ball", "zyly", "phrony", "ssto", "tellr", "nomo", "thra", "rhy", "ba", "bol", "kasen", "stan", "monis", "ixi", "shtala", "xijan", "nyrren", "dran", "talli", "pahr", "throk", "tende", "borro", "nargh", "", "", "", "", "", "", "", "", "", "", ""];
    const nm3 = ["iax", "us", "osh", "pal", "naax", "dyn", "nish", "allor", "drian", "rev", "onis", "monis", "lynn", "nost", "xirn", "hyst", "shrift", "xadyn", "roth", "nis", "xyn", "lon", "tuul", "dennish", "dalor", "ion", "adyll", "jiir", "dilin", "don", "gh", "naar", "liath", "thrysh", "lish", "phrael", "giesh", "phiax", "nor", "it", "manthyl", "nu", "byr", "don", "sathur", "holdal", "tong", "bah", "jer", "axth"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name3 = nm3[Math.floor(Math.random() * nm3.length)];
    const name = name1 + name2 + name3;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Drachenblütige hinzu
   const nachnameDrachenbluetiger = [];
   for (let i = 0; i < 1000; i++) {
    nachnameDrachenbluetiger.push(generateNachnameDrachenbluetiger());
   }