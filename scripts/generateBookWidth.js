//Bestimmt die Buchbreite
function generateBookWidth() {
    const randomNumber = Math.random() * 100 + 1;
    let buchBreite;
   
    if (randomNumber <= 15) {
     buchBreite = `2,5`;
    } else if (randomNumber <= 40) {
     const randomMultiplier = Math.floor(Math.random() * (8 - 2 + 1)) + 2;
     const height = randomMultiplier * 2.5;
     buchBreite = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
    } else if (randomNumber <= 60) {
     const randomMultiplier = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
     const height = randomMultiplier * 2.5;
     buchBreite = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
    } else if (randomNumber <= 80) {
     const randomMultiplier = Math.floor(Math.random() * (16 - 2 + 1)) + 2;
     const height = randomMultiplier * 2.5;
     buchBreite = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
    } else {
     const randomMultiplier = Math.floor(Math.random() * (20 - 2 + 1)) + 2;
     const height = randomMultiplier * 2.5;
     buchBreite = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
    }		
    return buchBreite;
   }