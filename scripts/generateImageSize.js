//Bestimmt die Größe der Bilder
function generateImageSize() {
    const randomNumber = Math.random() * 100 + 1;
    let bildGroesse;
   
    if (randomNumber <= 5) {
     bildGroesse = "gesamte Seite bis zum Rand";
    } else if (randomNumber <= 15) {
     bildGroesse = "fast die gesamte Seite";
    } else if (randomNumber <= 35) {
     bildGroesse = "ein Viertel der Seite";
    } else if (randomNumber <= 55) {
     bildGroesse = "die Hälfte der Seite";
    } else if (randomNumber <= 75) {
     bildGroesse = "zwei Drittel der Seite";
    } else {
     bildGroesse = "weniger als ein Viertel der Seite";
    }		
    return bildGroesse;
   }