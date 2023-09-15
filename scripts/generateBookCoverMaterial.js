//Bestimmt das Material des Einbands
function generateBookCoverMaterial() {
    const randomNumber = Math.random() * 100 + 1;
    let buchEinbandMaterial;
   
    if (randomNumber <= 25) {
     buchEinbandMaterial = "Kartonpapier";
    } else if (randomNumber <= 50) {
     buchEinbandMaterial = "Hartpapier";
    } else if (randomNumber <= 65) {
     buchEinbandMaterial = "Leder";
    } else if (randomNumber <= 68) {
     buchEinbandMaterial = "unbehandelter Stoff";
    } else if (randomNumber <= 70) {
     buchEinbandMaterial = "behandelter Stoff";
    } else if (randomNumber <= 72) {
     buchEinbandMaterial = "Bambus";
    } else if (randomNumber <= 74) {
     buchEinbandMaterial = "glattes Metall";
    } else if (randomNumber <= 75) {
     buchEinbandMaterial = "glattes Edelmetall";
    } else if (randomNumber <= 77) {
     buchEinbandMaterial = "gepolstertes Metall";
    } else if (randomNumber <= 78) {
     buchEinbandMaterial = "gepolstertes Edelmetall";
    } else if (randomNumber <= 80) {
     buchEinbandMaterial = "glatter Schiefer";
    } else if (randomNumber <= 82) {
     buchEinbandMaterial = "rauer Schiefer";
    } else if (randomNumber <= 86) {
     buchEinbandMaterial = "gepolstertes Holz";
    } else if (randomNumber <= 90) {
     buchEinbandMaterial = "glattes Holz";
    } else if (randomNumber <= 92) {
     buchEinbandMaterial = "gepolstertes Edelholz";
    } else if (randomNumber <= 94) {
     buchEinbandMaterial = "glattes Edelholz";
    } else if (randomNumber <= 95) {
     buchEinbandMaterial = "Hülle einer Kreatur";
    } else if (randomNumber <= 97) {
     buchEinbandMaterial = "Tierfell";
    } else if (randomNumber <= 99) {
     buchEinbandMaterial = "Monsterfell";
    } else {
     buchEinbandMaterial = "Humanoidenhaut";
    }		
    return buchEinbandMaterial;
   }