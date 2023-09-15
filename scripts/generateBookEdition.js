//Bestimmt die Auflage des Buches
function generateBookEdition() {
    const randomNumber = Math.random() * 100 + 1;
    let buchAuflage;
   
    if (randomNumber <= 5) {
     buchAuflage = "Entwurf";
    } else if (randomNumber <= 15) {
     buchAuflage = "1. Auflage";
    } else if (randomNumber <= 30) {
     buchAuflage = "2. Auflage";
    } else if (randomNumber <= 55) {
     buchAuflage = "3. Auflage";
    } else if (randomNumber <= 75) {
     buchAuflage = "4. Auflage";
    } else if (randomNumber <= 85) {
     buchAuflage = "5. Auflage";
    } else if (randomNumber <= 95) {
     buchAuflage = "6. Auflage";
    } else if (randomNumber <= 99) {
     buchAuflage = `${Math.floor(Math.random() * 11) + 2}. Auflage`;
    } else {
     buchAuflage = "Unbekannte Auflage";
    }		
    return buchAuflage;
   }
   