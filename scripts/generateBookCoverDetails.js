//Bestimmt die Details des Einbands
function generateBookCoverDetails() {
    const randomNumber = Math.random() * 100 + 1;
    let buchEinbandDetail;
   
    const details = [
     "geprägter Rand",
     "abgeflachter Rand",
     "Auflagennummer",
     "Bild",
     "hochgeprägtes Bild",
     "Bild des Autors",
     "Zitat aus dem Buch",
     "Verlagssymbol",
     "Signatur des Autors",
     "geometrisches Symbol",
     "Schlagwort",
     "hochgeprägter Buchtitel",
     "Buchtitel",
     "Autorenname"
    ];
   
    if (randomNumber <= 7) {
     buchEinbandDetail = "geprägter Rand";
    } else if (randomNumber <= 14) {
     buchEinbandDetail = "abgeflachter Rand";
    } else if (randomNumber <= 21) {
     buchEinbandDetail = "Auflagennummer";
    } else if (randomNumber <= 28) {
     buchEinbandDetail = "Bild";
    } else if (randomNumber <= 35) {
     buchEinbandDetail = "hochgeprägtes Bild";
    } else if (randomNumber <= 42) {
     buchEinbandDetail = "Bild des Autors";
    } else if (randomNumber <= 49) {
     buchEinbandDetail = "Zitat aus dem Buch";
    } else if (randomNumber <= 56) {
     buchEinbandDetail = "Verlagssymbol";
    } else if (randomNumber <= 63) {
     buchEinbandDetail = "Signatur des Autors";
    } else if (randomNumber <= 70) {
     buchEinbandDetail = "geometrisches Symbol";
    } else if (randomNumber <= 77) {
     buchEinbandDetail = "Schlagwort";
    } else if (randomNumber <= 85) {
     buchEinbandDetail = "hochgeprägter Buchtitel";
    } else if (randomNumber <= 91) {
     buchEinbandDetail = "Buchtitel";
    } else if (randomNumber <= 98) {
     buchEinbandDetail = "Autorenname";
    } else {
     const numDetails = Math.floor(Math.random() * 2) + 2; //Zwei bis drei Details auswählen
     const selectedDetails = [];
   
     for (let i = 0; i < numDetails; i++) {
      const randomIndex = Math.floor(Math.random() * details.length);
      const selectedDetail = details.splice(randomIndex, 1)[0]; //Detail aus der Liste entfernen
      selectedDetails.push(selectedDetail);
     }
   
     buchEinbandDetail = selectedDetails.join(', '); //Details mit einem Komma und Leerzeichen trennen
    }		
    return buchEinbandDetail;
   }