 //Bestimmt die Buchhöhe
 function generateBookHeight() {
    const randomNumber = Math.random() * 100 + 1;
    let buchHöhe;
   
    if (randomNumber <= 15) {
     buchHöhe = `2,5`;
    } else if (randomNumber <= 40) {
     const randomMultiplier = Math.floor(Math.random() * (8 - 2 + 1)) + 2;
     const height = randomMultiplier * 2.5;
     buchHöhe = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
    } else if (randomNumber <= 60) {
     const randomMultiplier = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
     const height = randomMultiplier * 2.5;
     buchHöhe = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
    } else if (randomNumber <= 80) {
     const randomMultiplier = Math.floor(Math.random() * (16 - 2 + 1)) + 2;
     const height = randomMultiplier * 2.5;
     buchHöhe = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
    } else {
     const randomMultiplier = Math.floor(Math.random() * (20 - 2 + 1)) + 2;
     const height = randomMultiplier * 2.5;
     buchHöhe = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
    }		
    return buchHöhe;
   }