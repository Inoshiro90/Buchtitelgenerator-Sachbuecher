 //Bestimmt die Anzahl der Bilder
 function generateImageQuantity() {
    const randomNumber = Math.random() * 100 + 1;
    let bildAnzahl;
   
    if (randomNumber <= 5) {
     bildAnzahl = "keine Bilder";
    } else if (randomNumber <= 15) {
     bildAnzahl = "ein Bild, das sich auf dem Buchdeckel befindet";
    } else if (randomNumber <= 25) {
     bildAnzahl = "ein Bild, das sich auf der Titelseite befindet";
    } else if (randomNumber <= 45) {
     bildAnzahl = "ein Bild am Beginn jedes Kapitels";
    } else if (randomNumber <= 60) {
     const numBilder = Math.floor(Math.random() * 2) + 1;
     bildAnzahl = `${numBilder <= 12 ? (numBilder === 1 ? "ein Bild" : numToWords(numBilder) + " Bilder") : numBilder + " Bilder"} pro Kapitel`;
    } else if (randomNumber <= 70) {
     const numBilder = Math.floor(Math.random() * 3) + 1;
     bildAnzahl = `${numBilder <= 12 ? (numBilder === 1 ? "ein Bild" : numToWords(numBilder) + " Bilder") : numBilder + " Bilder"} pro Kapitel`;
    } else if (randomNumber <= 80) {
     const numBilder = Math.floor(Math.random() * 6) + 1;
     bildAnzahl = `${numBilder <= 12 ? (numBilder === 1 ? "ein Bild" : numToWords(numBilder) + " Bilder") : numBilder + " Bilder"} im gesamten Buch`;
    } else if (randomNumber <= 90) {
     const numBilder = Math.floor(Math.random() * 11) + 2;
     bildAnzahl = `${numBilder <= 12 ? (numBilder === 1 ? "ein Bild" : numToWords(numBilder) + " Bilder") : numBilder + " Bilder"} im gesamten Buch`;
    } else if (randomNumber <= 95) {
     const numBilder = Math.floor(Math.random() * 16) + 3;
     bildAnzahl = `${numBilder <= 12 ? (numToWords(numBilder) + " Bilder") : numBilder + " Bilder"} im gesamten Buch`;
    } else {
     bildAnzahl = "Bilder auf jeder Seite";
    }		
    return bildAnzahl;
   }