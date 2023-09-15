 //Bestimmt das Lesezeichen des Buches
 function generateBookmark() {
    const randomNumber = Math.random() * 100 + 1;
    let lesezeichen;
   
    if (randomNumber <= 5) {
     lesezeichen = "ein Eselsohr";
    } else if (randomNumber <= 10) {
     lesezeichen = "eine kleiner Riss in der Seite";
    } else if (randomNumber <= 15) {
     lesezeichen = "ein Stück Schnur";
    } else if (randomNumber <= 20) {
     lesezeichen = "eine Buchklammer";
    } else if (randomNumber <= 25) {
     lesezeichen = "ein Ecklesezeichen";
    } else if (randomNumber <= 30) {
     lesezeichen = "der Schutzumschlag des Buches";
    } else if (randomNumber <= 35) {
     lesezeichen = "ein Stück Papier";
    } else if (randomNumber <= 40) {
     lesezeichen = "eine dehnbare Schnur";
    } else if (randomNumber <= 50) {
     lesezeichen = "ein Streifen aus Stoff";
    } else if (randomNumber <= 55) {
     lesezeichen = "ein dünnes Stück Metall";
    } else if (randomNumber <= 85) {
     lesezeichen = "ein Streifen aus lederähnlichem Material";
    } else if (randomNumber <= 95) {
     lesezeichen = "ein klebender Notizzettel";
    } else {
     lesezeichen = "eine Ansammlung unterschiedlicher, kleiner, dünner Gegenstände";
    }
    return lesezeichen;
   }