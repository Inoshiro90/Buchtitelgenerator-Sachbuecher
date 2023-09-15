  //Bestimmt den Qualität des Textes
  function generateTextQuality() {
    const randomNumber = Math.random() * 100 + 1;
    let textQualität;
   
    if (randomNumber <= 5) {
     textQualität = "wertlos";
    } else if (randomNumber <= 10) {
     textQualität = "unbrauchbar";
    } else if (randomNumber <= 20) {
     textQualität = "schlecht";
    } else if (randomNumber <= 30) {
     textQualität = "mäßig";
    } else if (randomNumber <= 40) {
     textQualität = "unterdurchschnittlich";
    } else if (randomNumber <= 60) {
     textQualität = "durchschnittlich";
    } else if (randomNumber <= 75) {
     textQualität = "überdurchschnittlich";
    } else if (randomNumber <= 85) {
     textQualität = "sehr gut";
    } else if (randomNumber <= 90) {
     textQualität = "ausgezeichnet";
    } else if (randomNumber <= 95) {
     textQualität = "unglaublich";
    } else {
     textQualität = "unübertrefflich";
    }
    return textQualität;
   }