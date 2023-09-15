  //Funktion, um einen zufälligen Text aus einem Array auszuwählen
  function getRandomText(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
   }