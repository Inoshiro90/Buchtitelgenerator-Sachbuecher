  //Bestimmt die Seitenanzahl
  function generateBookPageNumber() {
    const randomNumber = Math.random() * 100 + 1;
    let seitenZahl;
   
    if (randomNumber <= 5) {
     seitenZahl = `${Math.floor(Math.random() * (40 - 22 + 1)) + 22}`;
    } else if (randomNumber <= 10) {
     seitenZahl = `${Math.floor(Math.random() * (60 - 41 + 1)) + 41}`;
    } else if (randomNumber <= 20) {
     seitenZahl = `${Math.floor(Math.random() * (70 - 61 + 1)) + 61}`;
    } else if (randomNumber <= 35) {
     seitenZahl = `${Math.floor(Math.random() * (90 - 72 + 1)) + 72}`;
    } else if (randomNumber <= 60) {
     seitenZahl = `${Math.floor(Math.random() * (120 - 91 + 1)) + 91}`;
    } else if (randomNumber <= 90) {
     seitenZahl = `${Math.floor(Math.random() * (220 - 121 + 1)) + 121}`;
    } else if (randomNumber <= 80) {
     seitenZahl = `${Math.floor(Math.random() * (320 - 221 + 1)) + 221}`;
    } else if (randomNumber <= 90) {
     seitenZahl = `${Math.floor(Math.random() * (420 - 321 + 1)) + 321}`;
    } else {
     seitenZahl = `${Math.floor(Math.random() * (520 - 421 + 1)) + 421}`;
    }		
    return seitenZahl;
   }