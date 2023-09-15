 //Event Listener für den "Alle auswählen"-Button bei Setting
 document.getElementById("btnSelectAllSetting").addEventListener("click", function() {
    //Alle Checkboxen bei Setting auswählen
    const checkboxes = document.querySelectorAll("#setting input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
     checkbox.checked = true;
     toggleSetting(checkbox.id, checkbox.dataset.details);
    });
   });
   
   //Event Listener für den "Alle abwählen"-Button bei Setting
   document.getElementById("btnDeselectAllSetting").addEventListener("click", function() {
    //Alle Checkboxen für Setting abwählen
    const checkboxes = document.querySelectorAll("#setting input[type='checkbox']");
    checkboxes.forEach(function(checkbox) {
     checkbox.checked = false;
     toggleSetting(checkbox.id, checkbox.dataset.details); 
    });
   });
   
   //Funktion zum Anzeigen oder Ausblenden basierend auf Checkbox-Zustand bei Setting
   function toggleSetting(checkboxId, settingText) {
    const checkbox = document.getElementById(checkboxId);
    const setting = document.createElement('li');
   
    if (checkbox.checked) {
     setting.textContent = "";
     container.appendChild(setting);
    } else {
     setting.remove();
    }
   }
  
   document.getElementById("checkboxDrachenlanze").addEventListener("change", function() {
    toggleSetting("checkboxDrachenlanze", "drachenlanzeSetting");
   });
   document.getElementById("checkboxEberron").addEventListener("change", function() {
    toggleSetting("checkboxEberron", "eberronSetting");
   });
   document.getElementById("checkboxExandria").addEventListener("change", function() {
    toggleSetting("checkboxExandria", "exandriaSetting");
   });
   document.getElementById("checkboxGreyhawk").addEventListener("change", function() {
    toggleSetting("checkboxGreyhawk", "greyhawkSetting");
   });
   document.getElementById("checkboxRavenloft").addEventListener("change", function() {
    toggleSetting("checkboxRavenloft", "ravenloftSetting");
   });
   document.getElementById("checkboxRavnica").addEventListener("change", function() {
    toggleSetting("checkboxRavnica", "ravnicaSetting");
   });
   document.getElementById("checkboxSpelljammer").addEventListener("change", function() {
    toggleSetting("checkboxSpelljammer", "spelljammerSetting");
   });
   document.getElementById("checkboxStrixhaven").addEventListener("change", function() {
    toggleSetting("checkboxStrixhaven", "strixhavenSetting");
   });
   document.getElementById("checkboxTheros").addEventListener("change", function() {
    toggleSetting("checkboxTheros", "therosSetting");
   });
   document.getElementById("checkboxVergesseneReiche").addEventListener("change", function() {
    toggleSetting("checkboxVergesseneReiche", "vergesseneReicheSetting");
   });