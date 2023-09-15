//Bestimmt das Alter des Buches
function generateBookAge() {
    const randomNumber = Math.random() * 100;
    let buchAlter;
    let buchZeiteinheit;
   
    if (randomNumber >= 1 && randomNumber <= 2) {
     buchAlter = Math.floor(Math.random() * 4) + 1;
     buchZeiteinheit = buchAlter === 1 ? "Woche" : "Wochen";
    } else if (randomNumber >= 3 && randomNumber <= 5) {
     buchAlter = Math.floor(Math.random() * 4) + 1;
     buchZeiteinheit = buchAlter === 1 ? "Monat" : "Monate";
    } else if (randomNumber >= 6 && randomNumber <= 9) {
     buchAlter = Math.floor(Math.random() * 7) + 2;
     buchZeiteinheit = "Monate";
    } else if (randomNumber >= 10 && randomNumber <= 30) {
     buchAlter = Math.floor(Math.random() * 10) + 3;
     buchZeiteinheit = "Monate";
    } else if (randomNumber >= 31 && randomNumber <= 45) {
     buchAlter = Math.floor(Math.random() * 10) + 1;
     buchZeiteinheit = buchAlter === 1 ? "Jahr" : "Jahre";
    } else if (randomNumber >= 46 && randomNumber <= 50) {
     buchAlter = Math.floor(Math.random() * 19) + 2;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 51 && randomNumber <= 57) {
     buchAlter = Math.floor(Math.random() * 28) + 3;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 58 && randomNumber <= 62) {
     buchAlter = Math.floor(Math.random() * 37) + 4;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 63 && randomNumber <= 68) {
     buchAlter = Math.floor(Math.random() * 46) + 5;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 69 && randomNumber <= 73) {
     buchAlter = Math.floor(Math.random() * 55) + 6;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 74 && randomNumber <= 77) {
     buchAlter = Math.floor(Math.random() * 64) + 7;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 78 && randomNumber <= 81) {
     buchAlter = Math.floor(Math.random() * 73) + 8;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 82 && randomNumber <= 85) {
     buchAlter = Math.floor(Math.random() * 82) + 9;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 86 && randomNumber <= 88) {
     buchAlter = Math.floor(Math.random() * 91) + 10;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 89 && randomNumber <= 91) {
     buchAlter = Math.floor(Math.random() * 20) + 101;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 92 && randomNumber <= 94) {
     buchAlter = Math.floor(Math.random() * 39) + 102;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 95 && randomNumber <= 96) {
     buchAlter = Math.floor(Math.random() * 58) + 103;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber >= 97 && randomNumber <= 98) {
     buchAlter = Math.floor(Math.random() * 77) + 104;
     buchZeiteinheit = "Jahre";
    } else if (randomNumber === 99) {
     buchAlter = Math.floor(Math.random() * 96) + 105;
     buchZeiteinheit = "Jahre";
    } else {
     buchAlter = Math.floor(Math.random() * 200) + 201;
     buchZeiteinheit = "Jahre";
    }		
    return `${buchAlter} ${buchZeiteinheit}`;
   }