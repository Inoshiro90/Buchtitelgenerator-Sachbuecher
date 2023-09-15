 //Event Listener für den "Alle auswählen"-Button bei Genre
 document.getElementById("btnSelectAllGenre").addEventListener("click", function() {
    //Alle Checkboxen auswählen
    const checkboxes = document.querySelectorAll("#genre input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
     checkbox.checked = true;
     toggleGenre(checkbox.id, checkbox.dataset.details); 
    });
   });
   
   //Event Listener für den "Alle abwählen"-Button bei Genre
   document.getElementById("btnDeselectAllGenre").addEventListener("click", function() {
    //Alle Checkboxen bei Genre abwählen
    const checkboxes = document.querySelectorAll("#genre input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
     checkbox.checked = false;
     toggleGenre(checkbox.id, checkbox.dataset.details);
    });
   });
   
   //Funktion zum Anzeigen oder Ausblenden von Details basierend auf Checkbox-Zustand bei Genre
   function toggleGenre(checkboxId, genreText) {
    const checkbox = document.getElementById(checkboxId);
    const genre = document.createElement('li');
   
    if (checkbox.checked) {
     genre.textContent = "";
     container.appendChild(genre);
    } else {
     genre.remove();
    }
   }
   
   document.getElementById("checkboxAllgemeines").addEventListener("change", function() {
    toggleGenre("checkboxAllgemeines", "allgemeinesGenre");
   });
   document.getElementById("checkboxVölkerkunde").addEventListener("change", function() {
    toggleGenre("checkboxVölkerkunde", "völkerkundeGenre");
   });
   document.getElementById("checkboxMagie").addEventListener("change", function() {
    toggleGenre("checkboxMagie", "magieGenre");
   });
   document.getElementById("checkboxBelletristik").addEventListener("change", function() {
    toggleGenre("checkboxBelletristik", "belletristikGenre");
   });
   document.getElementById("checkboxBiographie").addEventListener("change", function() {
    toggleGenre("checkboxBiographie", "biographieGenre");
   });
   document.getElementById("checkboxSportFreizeit").addEventListener("change", function() {
    toggleGenre("checkboxSportFreizeit", "sportFreizeitGenre");
   });
   document.getElementById("checkboxGeographie").addEventListener("change", function() {
    toggleGenre("checkboxGeographie", "geographieGenre");
   });
   document.getElementById("checkboxGeschichte").addEventListener("change", function() {
    toggleGenre("checkboxGeschichte", "geschichteGenre");
   });
   document.getElementById("checkboxHandwerk").addEventListener("change", function() {
    toggleGenre("checkboxHandwerk", "handwerkGenre");
   });
   document.getElementById("checkboxHeilkunde").addEventListener("change", function() {
    toggleGenre("checkboxHeilkunde", "heilkundeGenre");
   });
   document.getElementById("checkboxKinderbuch").addEventListener("change", function() {
    toggleGenre("checkboxKinderbuch", "kinderbuchGenre");
   });
   document.getElementById("checkboxKochkunst").addEventListener("change", function() {
    toggleGenre("checkboxKochkunst", "kochkunstGenre");
   });
   document.getElementById("checkboxKunst").addEventListener("change", function() {
    toggleGenre("checkboxKunst", "kunstGenre");
   });
   document.getElementById("checkboxMusikTanzTheater").addEventListener("change", function() {
    toggleGenre("checkboxMusikTanzTheater", "musikTanzTheaterGenre");
   });
   document.getElementById("checkboxNaturkunde").addEventListener("change", function() {
    toggleGenre("checkboxNaturkunde", "naturkundeGenre");
   });
   document.getElementById("checkboxPhilosophie").addEventListener("change", function() {
    toggleGenre("checkboxPhilosophie", "philosophieGenre");
   });
   document.getElementById("checkboxPsychologie").addEventListener("change", function() {
    toggleGenre("checkboxPsychologie", "psychologieGenre");
   });
   document.getElementById("checkboxRecht").addEventListener("change", function() {
    toggleGenre("checkboxRecht", "rechtGenre");
   });
   document.getElementById("checkboxReligion").addEventListener("change", function() {
    toggleGenre("checkboxReligion", "religionGenre");
   });
   document.getElementById("checkboxSprache").addEventListener("change", function() {
    toggleGenre("checkboxSprache", "spracheGenre");
   });