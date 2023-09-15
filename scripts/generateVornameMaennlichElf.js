  //Generiert Vornamen für männliche Elfen
  function generateVornameMaennlichElf() {
    const nm1 = ["Adr", "Ael", "Ahv", "Ara", "Aran", "Aus", "Aza", "Beir", "Cael", "Car", "Day", "Drea", "Eferr", "Eira", "Enia", "Er", "Ere", "Fiv", "Gallinn", "Genn", "Hada", "Hali", "Hei", "Hi", "Immer", "Ivell", "Kor", "Lam", "Lau", "Lu", "Mindar", "Na", "Nut", "Pael", "Per", "Quar", "Riar", "Rol", "Sovel", "Suhn", "Tham", "Thar", "Ther", "Uthem", "Vanu", "Var"];
    const nm2 = ["an", "ar", "ain", "mil", "nis", "t", "ki", "o", "drim", "ric", "ereth", "li", "il", "vel", "lis", "dan", "van", "in", "al", "rai", "math", "mo", "ios", "fel", "cian", "can", "tis", "ae", "ias", "en", "ion", "don", "iss", "ior", "ivol", "iatis", "ath", "is"];
    const name1 = nm1[Math.floor(Math.random() * nm1.length)];
    const name2 = nm2[Math.floor(Math.random() * nm2.length)];
    const name = name1 + name2;
    return name.charAt(0).toUpperCase() + name.slice(1);
   }
   
   //Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Elfen hinzu
   const vornameMaennlichElf = [];
   for (let i = 0; i < 1000; i++) {
    vornameMaennlichElf.push(generateVornameMaennlichElf());
   }