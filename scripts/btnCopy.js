 //Erstellt die Funktion zum Kopieren der generierten Ergebnisse in die Zwischenablage
 function copyToClipboard(text) {
    const tempElement = document.createElement('textarea');
    tempElement.value = text;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
   }
   
   //Fügt einen Event Listener hinzu, um die generierten Ergebnisse in die Zwischenablage zu kopieren
   btnCopy.addEventListener('click', (event) => {
    event.preventDefault();
    const container = document.getElementById('container');
    const generatedBooktitles = container.querySelectorAll('li');
   
    if (generatedBooktitles.length > 0) {
     const namesList = Array.from(generatedBooktitles).map((li) => li.textContent).join('\n');
     copyToClipboard(namesList);
     alert('Die Liste wurde in die Zwischenablage kopiert.');
    } else {
     alert('Die Liste ist leer.');
    }
   });