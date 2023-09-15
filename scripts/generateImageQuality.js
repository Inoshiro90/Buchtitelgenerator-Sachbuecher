 //Bestimmt den Qualität der Bilder
 function generateImageQuality() {
    const randomNumber = Math.random() * 100 + 1;
    let bildQualität;
   
    if (randomNumber <= 5) {
     bildQualität = "wertlos";
    } else if (randomNumber <= 10) {
     bildQualität = "unbrauchbar";
    } else if (randomNumber <= 20) {
     bildQualität = "schlecht";
    } else if (randomNumber <= 30) {
     bildQualität = "mäßig";
    } else if (randomNumber <= 40) {
     bildQualität = "unterdurchschnittlich";
    } else if (randomNumber <= 60) {
     bildQualität = "durchschnittlich";
    } else if (randomNumber <= 75) {
     bildQualität = "überdurchschnittlich";
    } else if (randomNumber <= 85) {
     bildQualität = "sehr gut";
    } else if (randomNumber <= 90) {
     bildQualität = "ausgezeichnet";
    } else if (randomNumber <= 95) {
     bildQualität = "unglaublich";
    } else {
     bildQualität = "unübertrefflich";
    }		
    return bildQualität;
   }