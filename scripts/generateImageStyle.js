//Bestimmt den Stil der Bilder
function generateImageStyle() {
    const randomNumber = Math.random() * 100 + 1;
    let bildStil;
   
    if (randomNumber <= 5) {
     bildStil = "dreidimensional";
    } else if (randomNumber <= 10) {
     bildStil = "abstrakt";
    } else if (randomNumber <= 15) {
     bildStil = "antik";
    } else if (randomNumber <= 20) {
     bildStil = "jugendstilistisch";
    } else if (randomNumber <= 25) {
     bildStil = "karikaturistisch";
    } else if (randomNumber <= 30) {
     bildStil = "konstruktivistisch";
    } else if (randomNumber <= 35) {
     bildStil = "kubistisch";
    } else if (randomNumber <= 40) {
     bildStil = "überzeichnet";
    } else if (randomNumber <= 45) {
     bildStil = "expressionistisch";
    } else if (randomNumber <= 50) {
     bildStil = "impressionistisch";
    } else if (randomNumber <= 55) {
     bildStil = "strichartig";
    } else if (randomNumber <= 60) {
     bildStil = "minimalistisch";
    } else if (randomNumber <= 65) {
     bildStil = "petroglyphisch";
    } else if (randomNumber <= 70) {
     bildStil = "punktartig";
    } else if (randomNumber <= 75) {
     bildStil = "urtümlich";
    } else if (randomNumber <= 80) {
     bildStil = "realistisch";
    } else if (randomNumber <= 85) {
     bildStil = "simplistisch";
    } else if (randomNumber <= 90) {
     bildStil = "surrealistisch";
    } else if (randomNumber <= 95) {
     bildStil = "symbolistisch";
    } else {
     const randomStyles = generateUniqueRandomStyles(2);
     bildStil = `${randomStyles[0]} und ${randomStyles[1]}`;
    }		
    return bildStil;
   }
    
 //Hilfsfunktion zur Generierung von einzigartigen zufälligen Stilen
 function generateUniqueRandomStyles(count) {
    const availableStyles = [
     "dreidimensional", "abstrakt", "antik", "jugendstilistisch", "karikaturistisch", "konstruktivistisch",
     "kubistisch", "überzeichnet", "expressionistisch", "impressionistisch", "strichartig", "minimalistisch",
     "petroglyphisch", "punktartig", "urtümlich", "realistisch", "simplistisch", "surrealistisch", "symbolistisch"
    ];
   
    const selectedStyles = [];
    while (selectedStyles.length < count) {
     const randomIndex = Math.floor(Math.random() * availableStyles.length);
     const selectedStyle = availableStyles.splice(randomIndex, 1)[0];
     selectedStyles.push(selectedStyle);
    }		
    return selectedStyles;
   }
   