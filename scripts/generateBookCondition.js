//Bestimmt den Zustands des Buches
function generateBookCondition() {
    const randomNumber = Math.random() * 100 + 1;
    let buchZustand;
   
    if (randomNumber <= 5) {
     buchZustand = "zerfallend";
    } else if (randomNumber <= 10) {
     buchZustand = "schrecklich";
    } else if (randomNumber <= 20) {
     buchZustand = "mangelhaft";
    } else if (randomNumber <= 30) {
     buchZustand = "unterdurchschnittlich";
    } else if (randomNumber <= 50) {
     buchZustand = "durchschnittlich";
    } else if (randomNumber <= 70) {
     buchZustand = "überdurchschnittlich";
    } else if (randomNumber <= 80) {
     buchZustand = "sehr gut";
    } else if (randomNumber <= 90) {
     buchZustand = "ausgezeichnet";
    } else if (randomNumber <= 95) {
     buchZustand = "fast neuwertig";
    } else {
     buchZustand = "neuwertig";
    }		
    return buchZustand;
   }