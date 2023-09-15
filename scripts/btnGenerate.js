//Funktion zum Generieren und Anzeigen der Sätze
btnGenerate.addEventListener('click', (event) => {
    event.preventDefault();
     //Überprüfen, ob mindestens ein Genre ausgewählt ist
     const selectedSetting = document.querySelectorAll("input[type='checkbox'][class='setting-checkbox']:checked");
    
    if (selectedSetting.length === 0) {
     alert("Bitte wähle mindestens ein Setting aus, bevor du generierst.");
     return;
    }
    event.preventDefault();
     //Überprüfen, ob mindestens ein Genre ausgewählt ist
     const selectedGenres = document.querySelectorAll("input[type='checkbox'][class='genre-checkbox']:checked");
    
    if (selectedGenres.length === 0) {
     alert("Bitte wähle mindestens ein Genre aus, bevor du generierst.");
     return;
    }
    //Funktion, die überprüft, ob der Buchtitel einzigartig ist und gegebenenfalls einen neuen generiert
    function generateUniqueBookTitle(generatedTitlesArray, generateFunction) {
     let generatedTitle = generateFunction();
     while (generatedTitlesArray.includes(generatedTitle)) {
      generatedTitle = generateFunction();
     }
     generatedTitlesArray.push(generatedTitle);
     return generatedTitle;
    }
    const generatedBookTitles = [];
    const container = document.getElementById('container');
    container.querySelectorAll('li').forEach((li) => li.remove());
    const numAnzahl = parseInt(numAnzahlField.value);
   
    for (let i = 0; i < numAnzahl; i++) {
     const bookTitle = generateUniqueBookTitle(generatedBookTitles, generateBookTitle);
     const autorGeschlechtRoll = Math.floor(Math.random() * 100) + 1;
     const autorVolkRoll = Math.floor(Math.random() * 100) + 1;
     const author = generateAuthorName(autorGeschlechtRoll, autorVolkRoll);
     const buchAlter = generateBookAge();
     const buchAuflage = generateBookEdition();
     const seitenZahl = generateBookPageNumber();
     const buchHöhe = generateBookHeight();
     const buchBreite = generateBookWidth();
     const buchZustand = generateBookCondition();
     const buchBindung = generateBookBinding();
     const buchEinbandMaterial = generateBookCoverMaterial();
     const buchEinbandDetail = generateBookCoverDetails();
     const buchEinbandFarbe = generateBookCoverColor();
     const textQualität = generateTextQuality();
     const textProduktion = generateTextProduction();
     const bildAnzahl = generateImageQuantity();
     const bildFarbe = generateImageColor();
     const bildGroesse = generateImageSize();
     const bildStil = generateImageStyle();
     const bildQualität = generateImageQuality();
     const lesezeichen = generateBookmark();
     const li = document.createElement('li');
   
     //Funktion zum Großschreiben des ersten Buchstabens
     function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
     }
   
     const output = isAnyCheckboxSelectedBeschreibung ? `<b>${capitalizeFirstLetter(bookTitle)}</b>\n${document.getElementById("checkboxAutor").checked ? "von " + author + ", " + autorGeschlecht + "er " + autorVolk + "\n" : ""}${document.getElementById("checkboxAuflage").checked ? "Auflage: " + buchAuflage + "\n" : ""}${document.getElementById("checkboxSeitenzahl").checked ? "Seitenzahl: " + seitenZahl + " Seiten\n" : ""}${document.getElementById("checkboxAlter").checked ? "Alter: " + buchAlter + " " + buchZeiteinheit + "\n" : ""}${document.getElementById("checkboxGröße").checked ? "Größe: " + buchHöhe + " x " + buchBreite + " cm\n" : ""}${document.getElementById("checkboxZustand").checked ? "Zustand: " + buchZustand + "\n" : ""}${document.getElementById("checkboxBindung").checked ? "Bindung: " + buchBindung + "\n" : ""}${document.getElementById("checkboxEinbandMaterial").checked ? "Einbandmaterial: " + buchEinbandMaterial + ", " + buchEinbandFarbe + "\n" : ""}${document.getElementById("checkboxEinbandDetail").checked ? "Einbanddetail: " + buchEinbandDetail + "\n" : ""}${document.getElementById("checkboxTextQualität").checked ? "Textqualität: " + textQualität + "\n" : ""}${document.getElementById("checkboxTextProduktion").checked ? "Textproduktion: " + textProduktion + "\n" : ""}${document.getElementById("checkboxBilderAnzahl").checked ? "Bildanzahl: " + bildAnzahl + "\n": ""}${document.getElementById("checkboxBilderFarbe").checked ? "Bildfarbe: " + bildFarbe + "\n" : ""}${document.getElementById("checkboxBilderGröße").checked ? "Bildgröße: " + bildGroesse + "\n" : ""}${document.getElementById("checkboxBilderStil").checked ? "Bildstil: " + bildStil + "\n" : ""}${document.getElementById("checkboxBilderQualität").checked ? "Bildqualität: " + bildQualität + "\n" : ""}${document.getElementById("checkboxLesezeichen").checked ? "Lesezeichen: " + lesezeichen + "\n" : ""}` : `<b>${capitalizeFirstLetter(bookTitle)}</b>`;
     li.innerHTML = output;
     container.appendChild(li);
    }
   });