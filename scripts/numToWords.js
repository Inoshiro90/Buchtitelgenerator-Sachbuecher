//Hilfsfunktion zur Umwandlung von Zahlen in Wörter bis zur Zahl 12
function numToWords(number) {
    const words = ["null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf"];
    return words[number];
   }