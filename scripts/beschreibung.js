 //Event Listener für den "Alle auswählen"-Button bei Beschreibung
 document.getElementById("btnSelectAllBeschreibung").addEventListener("click", function() {
    //Alle Checkboxen auswählen
    const checkboxes = document.querySelectorAll("#beschreibung input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
     checkbox.checked = true;
     toggleDetails(checkbox.id, checkbox.dataset.details); //Details anzeigen
    });
   });
   
   //Event Listener für den "Alle abwählen"-Button bei Beschreibung
   document.getElementById("btnDeselectAllBeschreibung").addEventListener("click", function() {
    //Alle Checkboxen abwählen und Details ausblenden
    const checkboxes = document.querySelectorAll("#beschreibung input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
     checkbox.checked = false;
     toggleDetails(checkbox.id, checkbox.dataset.details); //Details ausblenden
    });
   });
   
   //Funktion zum Anzeigen oder Ausblenden von Details basierend auf Checkbox-Zustand bei Beschreibung
   function toggleDetails(checkboxId, detailsText) {
    const checkbox = document.getElementById(checkboxId);
    const details = document.createElement('li');
   
    if (checkbox.checked) {
     details.textContent = "";
     container.appendChild(details);
    } else {
     details.remove();
    }
   }
   
   //Event Listener für die Checkboxen bei Beschreibung
   document.getElementById("checkboxAutor").addEventListener("change", function() {
    toggleDetails("checkboxAutor", "autorDetails");
   });
   document.getElementById("checkboxAuflage").addEventListener("change", function() {
    toggleDetails("checkboxAuflage", "auflageDetails");
   });
   document.getElementById("checkboxSeitenzahl").addEventListener("change", function() {
    toggleDetails("checkboxSeitenzahl", "seitenzahlDetails");
   });
   document.getElementById("checkboxAlter").addEventListener("change", function() {
    toggleDetails("checkboxAlter", "alterDetails");
   });
   document.getElementById("checkboxGröße").addEventListener("change", function() {
    toggleDetails("checkboxGröße", "größeDetails");
   });
   document.getElementById("checkboxZustand").addEventListener("change", function() {
    toggleDetails("checkboxZustand", "zustandDetails");
   });
   document.getElementById("checkboxBindung").addEventListener("change", function() {
    toggleDetails("checkboxBindung", "bindungDetails");
   });
   document.getElementById("checkboxEinbandMaterial").addEventListener("change", function() {
    toggleDetails("checkboxEinbandMaterial", "einbandMaterialDetails");
   });
   document.getElementById("checkboxEinbandDetail").addEventListener("change", function() {
    toggleDetails("checkboxEinbandDetail", "einbandDetailDetails");
   });
   document.getElementById("checkboxTextQualität").addEventListener("change", function() {
    toggleDetails("checkboxTextQualität", "textQualitätDetails");
   });
   document.getElementById("checkboxTextProduktion").addEventListener("change", function() {
    toggleDetails("checkboxTextProduktion", "textProduktionDetails");
   });
   document.getElementById("checkboxBilderAnzahl").addEventListener("change", function() {
    toggleDetails("checkboxBilder", "bilderAnzahlDetails");
   });
   document.getElementById("checkboxBilderGröße").addEventListener("change", function() {
    toggleDetails("checkboxBilderGröße", "bilderGrößeDetails");
   });
   document.getElementById("checkboxBilderStil").addEventListener("change", function() {
    toggleDetails("checkboxBilderStil", "bilderStilDetails");
   });
   document.getElementById("checkboxBilderQualität").addEventListener("change", function() {
    toggleDetails("checkboxBilderQualität", "bilderQualitätDetails");
   });
   document.getElementById("checkboxLesezeichen").addEventListener("change", function() {
    toggleDetails("checkboxLesezeichen", "lesezeichenDetails");
   });
   
   //Überprüfen, ob mindestens eine Checkbox bei Beschreibung ausgewählt wurde
   const checkboxesBeschreibung = document.querySelectorAll("#beschreibung input[type='checkbox']");
   let isAnyCheckboxSelectedBeschreibung = false;
   
   checkboxesBeschreibung.forEach(function(checkbox) {
    if (checkbox.checked) {
     isAnyCheckboxSelectedBeschreibung = true;
     return; //Wir können die Schleife vorzeitig verlassen, da mindestens eine Checkbox ausgewählt wurde
    }
   });
   
   //Füge einen Zeilenumbruch hinzu, wenn mindestens eine Checkbox ausgewählt wurde
   const lineBreak = isAnyCheckboxSelectedBeschreibung ? "\n" : "";
   
   //Prüft, ob das jeweilige Detail, das letzte Detail ist
   function isLastSelectedCheckbox(checkboxId) {
    const checkboxes = [
     "checkboxAutor", "checkboxAuflage", "checkboxSeitenzahl", "checkboxAlter", "checkboxGröße",
     "checkboxZustand", "checkboxBindung", "checkboxEinbandMaterial", "checkboxEinbandDetail",
     "checkboxTextQualität", "checkboxTextProduktion", "checkboxBilderAnzahl", "checkboxBilderGröße",
     "checkboxBilderStil", "checkboxBilderQualität"
    ];
   
    const lastSelectedIndex = checkboxes.findIndex(checkbox => checkbox === checkboxId);
    if (lastSelectedIndex === -1) {
     return false;
    }
   
    for (let i = lastSelectedIndex + 1; i < checkboxes.length; i++) {
     if (document.getElementById(checkboxes[i]).checked) {
      return false;
     }
    }
   
    return true;
   }