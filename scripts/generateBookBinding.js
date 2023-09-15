//Bestimmt die Bindung des Buches
function generateBookBinding() {
    const randomNumber = Math.random() * 100 + 1;
    let buchBindung;
   
    if (randomNumber <= 5) {
     buchBindung = "gebunden mit Bolzen";
    } else if (randomNumber <= 10) {
     buchBindung = "gebunden mit Lederschlaufen";
    } else if (randomNumber <= 15) {
     buchBindung = "gebunden mit Metallschlaufen";
    } else if (randomNumber <= 35) {
     buchBindung = "geklebt";
    } else if (randomNumber <= 40) {
     buchBindung = "lose";
    } else if (randomNumber <= 45) {
     buchBindung = "lose in einem Behälter";
    } else if (randomNumber <= 50) {
     buchBindung = "lose in Stoff eingewickelt";
    } else if (randomNumber <= 55) {
     buchBindung = "lose in Leder eingewickelt";
    } else if (randomNumber <= 65) {
     buchBindung = "aufgerollt";
    } else if (randomNumber <= 80) {
     buchBindung = "zusammengenäht";
    } else if (randomNumber <= 90) {
     buchBindung = "spiralgebunden";
    } else if (randomNumber <= 95) {
     buchBindung = "geklammert";
    } else {
     buchBindung = "umwickelt mit Schnüren";
    }		
    return buchBindung;
   }