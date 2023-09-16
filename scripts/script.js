//JavaScript zum Ein- und Ausklappen des Inhalts
		var coll = document.getElementsByClassName("collapsible");
		var i;
		
		for (i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var content = this.nextElementSibling;
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				}
			});
		}

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
		
		function generateBookTitle() {
		
			//Funktion, um einen zufälligen Text aus einem Array auszuwählen
			function getRandomText(arr) {
				const index = Math.floor(Math.random() * arr.length);
				return arr[index];
			}
		
			//Funktion, um einen zufälligen Text aus einem Array in einem Array auszuwählen
			function getRandomElementFromArray(arr) {
				return arr[Math.floor(Math.random() * arr.length)];
			}
			//Begriffe und Abschnitte für den Buchtitelgenerator
			const präfixe = ["", "", "", "aberrante", "abgewandelte", "abnormale", "abstrakte", "abwechslungsreiche", "abwegige", "abweichende", "achtlose", "affektive", "akroamatische", "aktive", "aktuelle", "allegorische", "allgemeine", "allseits bekannte", "alltägliche", "allumfassende", "ältere", "alternative", "althergebrachte", "ambivalente", "amouröse", "analysierte", "andere", "anerkannte", "animierte", "anonyme", "ansprechende", "anspruchsvolle", "antike", "apokalyptische", "archaische", "aufgedeckte", "ausdruckslose", "ausdrucksstarke", "ausgefallene", "ausgeklügelte", "außergewöhnliche", "außerkörperliche", "authentische", "autonome", "banale", "befreiende", "beliebte", "berüchtigte", "berühmt-berüchtigte", "berühmte", "besondere", "betörende", "beunruhigende", "bezaubernde", "bittersüße", "bizarre", "bombastische", "brillante", "chaotische", "charakteristische", "dadaistische", "dilettantische", "dissonante", "divergente", "durchschnittliche", "düstere", "effektive", "eigenartige", "einfache", "eingeschränkte", "einsame", "einzigartige", "eklektische", "ekstatische", "elegante", "elektrisierende", "emotionale", "endlose", "energetische", "entfesselte", "ephemere", "erhabene", "erlesene", "erotische", "erschütternde", "erwähnenswerte", "esoterische", "euphorische", "exotische", "facettenreiche", "falsche", "fantastische", "faszinierende", "feierliche", "feinsinnige", "finstere", "flammende", "flüchtige", "fragile", "fragmentierte", "freudige", "frühe", "futuristische", "gefährliche", "gefeierte", "gegensätzliche", "gegenwärtige", "geistreiche", "gemischte", "generelle", "geringe", "gespenstische", "glanzvolle", "glühende", "grenzenlose", "große", "größere", "groteske", "harmonische", "heilende", "heitere", "herausragende", "heroische", "hervorragende", "heterogene", "hoffnungslose", "hoffnungsvolle", "hypnotische", "illusionäre", "imaginäre", "impulsive", "individuelle", "infantile", "innerliche", "inspirierende", "inspirierte", "intellektuelle", "intensive", "intrigierende", "intuitive", "ironische", "jenseitige", "jugendliche", "kaleidoskopische", "kämpferische", "klare", "klassische", "kleinere", "knappe", "komische", "komplexe", "kühne", "labile", "lebendige", "lebensfrohe", "legendäre", "leidenschaftliche", "lichtdurchflutete", "lodernde", "lucidische", "mächtige", "magische", "märchenhafte", "mäßige", "melancholische", "metaphorische", "minimalistische", "moderne", "modische", "monotone", "mystische", "nachdenkliche", "narrative", "natürliche", "nebulöse", "neoterische", "neuste", "neuzeitliche", "normale", "nostalgische", "obsessive", "obskure", "optimistische", "orphische", "orthodoxe", "paradoxe", "pathetische", "philosophische", "plastische", "poetische", "präzise", "provokative", "prunkvolle", "psychedelische", "quälende", "quintessenzielle", "radikale", "rätselhafte", "reale", "rebellische", "reflektierte", "reguläre", "revolutionäre", "romantische", "rückblickende", "sarkastische", "scharfsinnige", "schillernde", "schlichte", "schmerzhafte", "schöpferische", "schwebende", "seidenweiche", "selbstreflektierende", "seltene", "seltsame", "sentimentale", "skurrile", "sonstige", "soziale", "späte", "spezielle", "spirituelle", "stille", "stimmungsvolle", "strahlende", "symbolische", "temporäre", "tiefe", "tiefgründige", "tragische", "transitorische", "transzendente", "traumhafte", "traumverlorene", "trennende", "triviale", "typische", "überlegene", "ultimative", "umständliche", "unauffällige", "unbedeutende", "unbekannte", "unentdeckte", "ungeordnete", "ungewöhnliche", "unheimliche", "unikale", "unkonventionelle", "unpopuläre", "unstimmige", "unvergessliche", "unverzichtbare", "unwirkliche", "utopische", "vage", "verfeinerte", "verheißungsvolle", "verklärende", "verletzende", "verlorene", "verschiedene", "verschleierte", "verspielte", "versteckte", "verträumte", "vertraute", "verzerrte", "verzückte", "verzweifelte", "vibrante", "vielfältige", "virtuose", "visionäre", "vitale", "vulnerable", "wahre", "wandelbare", "wandelnde", "wankelmütige", "warmherzige", "wehmütige", "weise", "widersprüchliche", "widerständige", "wiedergefundene", "wildwuchernde", "wirkungsvolle", "wissbegierige", "wogende", "wunderbare", "zarte", "zeitgenössische", "zeitlose", "zersplitterte", "zukunftsweisende", "zweckentfremdete", "zweideutige", "zweifelnde", "zwielichtige", "zynische", ];
		
			const handwerkSingular = [
				{"name":"Alchemist","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Apotheker","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Architekt","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Auftragsmörder","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bäcker","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bandit","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bankier","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Barbar","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Barde","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bauer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bettler","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bischof","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bogenmacher","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bogenschütze","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bote","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Brauer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bürgermeister","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Butler","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Diener","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Diplomat","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Edelsteinschneider","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fallensteller","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fischer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Forstwirt","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fremdenführer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gärtner","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gelehrter","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"General","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gerber","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gladiator","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Glasbläser","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Goldschmied","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Graveur","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hebamme","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heiler","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hellseher","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Herold","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hufschmied","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hundedresseur","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ingenieur","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Inquisitor","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Jagdaufseher","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Jäger","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Juwelier","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kapitän","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kartograph","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kerzenmacher","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kleriker","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Knecht","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Koch","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kräuterkundler","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Krieger","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Künstler","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kurier","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kürschner","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kutscher","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Laternenanzünder","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lederarbeiter","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lehrer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magier","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Metzger","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mönch","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Orakel","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gendarme","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Priester","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rechtsanwalt","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Runenschmied","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rüstungsschmied","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sattler","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schäfer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schauspieler","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schmied","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schmuggler","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schneider","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schreiber","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schreiner","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schurke","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Seemann","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Seher","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sekretär","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Silberschmied","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Soldat","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Steinmetz","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Theaterautor","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tierdresseur","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Töpferer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Torwächter","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Totengräber","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Unterhaltungskünstler","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wachmann","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wächter","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waffenschmied","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wagenbauer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waldläufer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Weber","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Weiser","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wirt","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wissenshüter","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zimmermann","genus":"maskulinum","numerus":"singular"}
			];
			
			const handwerkSingularData = getRandomText(handwerkSingular);
			const handwerkSingularName = handwerkSingularData.name;
			const handwerkSingularGeschlecht = handwerkSingularData.genus;
			const handwerkSingularAnzahl = handwerkSingularData.numerus;
			const handwerkSingularAdjektiv = handwerkSingularData.adjektiv;
			const handwerkSingularPräfix = handwerkSingularData.präfix;
			const handwerkSingularSuffix = handwerkSingularData.suffix;
		
			const handwerkPlural = [
				{"name":"Alchemisten","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Apotheker","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Architekten","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Auftragsmörder","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bäcker","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Banditen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bankiers","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Barbaren","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Barden","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bauern","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bettler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bischöfe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bogenmacher","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bogenschützen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Boten","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Brauer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bürgermeister","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Butler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Diener","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Diplomaten","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Edelsteinschneider","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fallensteller","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fischer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Forstwirte","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fremdenführer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gärtner","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gelehrten","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Generäle","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gerber","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gladiatoren","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Glasbläser","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Goldschmiede","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Graveure","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hebammen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heiler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hellseher","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Herolde","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hufschmiede","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hundedresseure","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ingenieure","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Inquisitoren","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Jagdaufseher","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Jäger","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Juweliere","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kapitäne","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kartographen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kerzenmacher","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kleriker","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Knechte","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Köche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kräuterkundler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Krieger","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Künstler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kuriere","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kürschner","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kutscher","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Laternenanzünder","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lederarbeiter","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lehrer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magier","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Metzger","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mönche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Orakel","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gendarmen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Priester","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rechtsanwälte","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Runenschmiede","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rüstungsschmiede","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sattler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schäfer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schauspieler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schmiede","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schmuggler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schneider","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schreiber","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schreiner","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schurken","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Seeleute","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Seher","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sekretäre","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Silberschmiede","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Soldaten","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Steinmetze","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Theaterautoren","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tierdresseure","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Töpfer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Torwächter","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Totengräber","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Unterhaltungskünstler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wachleute","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wächter","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waffenschmiede","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wagenbauer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waldläufer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Weber","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Weise","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wirte","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wissenshüter","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zimmermänner","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""}
			];
		
			const handwerkPluralData = getRandomText(handwerkPlural);
			const handwerkPluralName = handwerkPluralData.name;
			const handwerkPluralGeschlecht = handwerkPluralData.genus;
			const handwerkPluralAnzahl = handwerkPluralData.numerus;
			const handwerkPluralAdjektiv = handwerkPluralData.adjektiv;
			const handwerkPluralPräfix = handwerkPluralData.präfix;
			const handwerkPluralSuffix = handwerkPluralData.suffix;
		
			const völkerSingular = [
			...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),	
				//...(document.getElementById("checkboxVergesseneReiche").checked ? [
				//] : []),
				{"name":"Aarakocra","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Astralelf","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Autognom","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beschützer-Aasimar","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blasself","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bullywug","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Drachgenblütige","genus":"maskulinum","numerus":"Singular","adjektiv":"chromatische","präfix":"","suffix":""},
				{"name":"Dämmerungself","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Derros","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dhampir","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":" Drachenblütige","genus":"maskulinum","numerus":"Singular","adjektiv":"drachlingsblütige","präfix":"","suffix":""},
				{"name":"Dunkelelf","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dunkelzwerg","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Echsenmensch","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Edelstein-Drachenblütige","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eladrin","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erd-Genasi","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fee","genus":"femininum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Felsengnom","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Feuer-Genasi","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Feuermolch","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Firbolg","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Flinkläufer-Wandler","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gebirgszwerg","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gefallene Aasimar","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Geißel-Aasimar","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Geisterwaisen-Halbling","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Giff","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Githyanki","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Githzerai","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gnoll","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Goblin","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Goliath","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Grimlock","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Grottenschrat","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Grung","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hadozee","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Halbdrache","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Halbelf","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Halbork","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Harengon","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hexenblütige","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hobgoblin","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hochelf","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hügelzwerg","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kalashtar","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kender","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kenku","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kobold","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kraul","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kriegsgeschmiedete","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kua-Toa","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Langzahn-Wandler","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lavakind","genus":"neutrum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Leichtfuß-Halbling","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Leonid","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Locathah","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lotusden-Halbling","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Loxodon","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Luft-Genasi","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lykanthrop","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mazer","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Meereself","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Meervolk","genus":"neutrum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mensch","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Drachenblütige","genus":"maskulinum","numerus":"Singular","adjektiv":"metallische","präfix":"","suffix":""},
				{"name":"Minotaur","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mischlingsvolk","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Nagpa","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Nilbog","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ork","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Orog","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Plasmoid","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Quaggoth","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ravenit-Drachenblütige","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sahuagin","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Satyr","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Saurianer","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Shadar-Kai","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Simic-Hybrid","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Halbling","genus":"maskulinum","numerus":"Singular","adjektiv":"stämmige","präfix":"","suffix":""},
				{"name":"Tabaxi","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Thri-Kreen","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tiefengnom","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tiefling","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tierhaut-Wandler","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tortle","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Triton","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Troglodyt","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Uhle","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Vedalken","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verdan","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waldelf","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waldgnom","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wasser-Genasi","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wechselbalg","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiedergeborene","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wildläufer-Wandler","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Yuan-Ti","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zentaur","genus":"maskulinum","numerus":"Singular","adjektiv":"","präfix":"","suffix":""}
			];
		
			const völkerSingularData = getRandomText(völkerSingular);
			const völkerSingularName = völkerSingularData.name;
			const völkerSingularGeschlecht = völkerSingularData.genus;
			const völkerSingularAnzahl = völkerSingularData.numerus;
			const völkerSingularAdjektiv = völkerSingularData.adjektiv;
			const völkerSingularPräfix = völkerSingularData.präfix;
			const völkerSingularSuffix = völkerSingularData.suffix;
		
			const völkerPlural = [
				...(document.getElementById("checkboxDrachenlanze").checked ? [
					{"name":"Kender","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [					
					{"name":"Flinkläufer-Wandler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Kalashtar","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Kriegsgeschmiedete","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Langzahn-Wandler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Tierhaut-Wandler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Wechselbälger","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Wildläufer-Wandler","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},					
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
					{"name":"Blasselfen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Lotusden-Halblinge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Ravenit-Drachenblütige","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Drachenblütige","genus":"maskulinum","numerus":"plural","adjektiv":"drachlingsblütige","präfix":"","suffix":""},
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
					{"name":"Dämmerungselfen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Dhampire","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Hexenblütige","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Mischlingsvölker","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Wiedergeborenen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
					{"name":"Simic-Hybride","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Vedalken","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
					{"name":"Astralelfen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Autognome","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Giff","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Hadozee","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Plasmoide","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
					{"name":"Thri-Kreen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
					{"name":"Uhlen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
					{"name":"Leonide","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				] : []),	
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				] : []),
				{"name":"Aarakocra","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Beschützer-Aasimar","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bullywugs","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Drachgenblütige","genus":"maskulinum","numerus":"plural","adjektiv":"chromatische","präfix":"","suffix":""},				
				{"name":"Derros","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},	
				{"name":"Dunkelelfen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dunkelzwerge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Echsenmenschen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Edelstein-Drachenblütige","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eladrin","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erd-Genasi","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Feen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Felsengnome","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Feuer-Genasi","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Feuermolche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Firbolg","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Gebirgszwerge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Aasimar","genus":"maskulinum","numerus":"plural","adjektiv":"gefallene","präfix":"","suffix":""},
				{"name":"Geißel-Aasimar","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Geisterwaisen-Halblinge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Githyanki","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Githzerai","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gnolle","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Goblins","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Goliaths","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Grimlocks","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Grottenschrate","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Grung","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Halbdrachen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Halbelfen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Halborks","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Harengon","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hobgoblins","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hochelfen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hügelzwerge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Kenkus","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kobolde","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kraul","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kua-Toas","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lavakinder","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Halblinge","genus":"maskulinum","numerus":"plural","adjektiv":"leichtfüßige","präfix":"","suffix":""},				
				{"name":"Locathah","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Luft-Genasi","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lykanthrope","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mazer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Meereselfen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Meervölker","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Menschen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Drachenblütige","genus":"maskulinum","numerus":"plural","adjektiv":"metallischen","präfix":"","suffix":""},
				{"name":"Minotauren","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Nagpa","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Nilbogs","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Orks","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Orog","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Quaggoth","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Sahuagine","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Satyren","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Saurianer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Shadar-Kai","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Halblinge","genus":"maskulinum","numerus":"plural","adjektiv":"stämmige","präfix":"","suffix":""},
				{"name":"Tabaxi","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Tiefengnome","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tieflinge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Tortle","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tritons","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Troglodyten","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},		
				{"name":"Verdan","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waldelfen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waldgnome","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wasser-Genasi","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},				
				{"name":"Yuan-Ti","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zentauren","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""}
			];
		
			const völkerPluralData = getRandomText(völkerPlural);
			const völkerPluralName = völkerPluralData.name;
			const völkerPluralGeschlecht = völkerPluralData.genus;
			const völkerPluralAnzahl = völkerPluralData.numerus;
			const völkerPluralAdjektiv = völkerPluralData.adjektiv;
			const völkerPluralPräfix = völkerPluralData.präfix;
			const völkerPluralSuffix = völkerPluralData.suffix;
		
			const monsterSingular = [
				{"name":"Abberation","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tier","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Himmlische","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Konstrukt","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Drache","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Elementar","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Feenwesen","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Unhold","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Riese","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Humanoide","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Monstrosität","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schlick","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pflanze","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Untote","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""}
			];
			
			const monsterSingularData = getRandomText(monsterSingular);
			const monsterSingularName = monsterSingularData.name;
			const monsterSingularGeschlecht = monsterSingularData.genus;
			const monsterSingularAnzahl = monsterSingularData.numerus;
			const monsterSingularAdjektiv = monsterSingularData.adjektiv;
			const monsterSingularPräfix = monsterSingularData.präfix;
			const monsterSingularSuffix = monsterSingularData.suffix;
		
			const monsterPlural = [
				{"name":"Abberationen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tiere","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Himmlische","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Konstrukte","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Drachen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Elementare","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Feenwesen","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Unholde","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Riesen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Humanoide","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Monstrositäten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schlicke","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pflanzen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Untoten","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""}
			];
			
			const monsterPluralData = getRandomText(monsterPlural);
			const monsterPluralName = monsterPluralData.name;
			const monsterPluralGeschlecht = monsterPluralData.genus;
			const monsterPluralAnzahl = monsterPluralData.numerus;
			const monsterPluralAdjektiv = monsterPluralData.adjektiv;
			const monsterPluralPräfix = monsterPluralData.präfix;
			const monsterPluralSuffix = monsterPluralData.suffix;
		
			const klassenSingular = [
				{"name":"Barbar","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Barde","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Druide","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hexenmeister","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kämpfer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kleriker","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magier","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mönch","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Paladin","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schurke","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waldläufer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magieschmied","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blutjäger","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""}
			];
		
			const klassenSingularData = getRandomText(klassenSingular);
			const klassenSingularName = klassenSingularData.name;
			const klassenSingularGeschlecht = klassenSingularData.genus;
			const klassenSingularAnzahl = klassenSingularData.numerus;
			const klassenSingularAdjektiv = klassenSingularData.adjektiv;
			const klassenSingularPräfix = klassenSingularData.präfix;
			const klassenSingularSuffix = klassenSingularData.suffix;
		
			const klassenPlural = [
				{"name":"Barbaren","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Barden","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Druiden","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hexenmeister","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kämpfer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kleriker","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magier","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mönche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Paladine","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schurken","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waldläufer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magieschmiede","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blutjäger","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""}
			];
		
			const klassenPluralData = getRandomText(klassenPlural);
			const klassenPluralName = klassenPluralData.name;
			const klassenPluralGeschlecht = klassenPluralData.genus;
			const klassenPluralAnzahl = klassenPluralData.numerus;
			const klassenPluralAdjektiv = klassenPluralData.adjektiv;
			const klassenPluralPräfix = klassenPluralData.präfix;
			const klassenPluralSuffix = klassenPluralData.suffix;
			
			const gegenständeSingular = [
				{"name":"Abakus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Laterne","genus":"femininum","numerus":"singular","adjektiv":"abdeckbare","präfix":"","suffix":""},
				{"name":"Amulett","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Angelausrüstung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Armbrustbolzen","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Armbrustbolzenbehälter","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blasrohrpfeile","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blattpapier","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blendlaterne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Brechstange","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Buch","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Decke","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Drei-Schritt-Stange","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eibenzauberstab","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eimer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eisenkeile","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eisentopf","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Emblem","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Enterhaken","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fackel","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fangeisen","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fass","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kleidung","genus":"femininum","numerus":"singular","adjektiv":"feine","präfix":"","suffix":""},
				{"name":"Fernglas","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tintenfläschchen","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Alchemistenfeuerflasche","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ölflasche","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Flaschenzug","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gegengiftphiole","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kleidung","genus":"femininum","numerus":"singular","adjektiv":"gewöhnliche","präfix":"","suffix":""},
				{"name":"Giftphiole","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Glasflasche","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Glocke","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hammer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Handschellen","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hanfseil","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heilerausrüstung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heiltrank","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Holzstab","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kaufmannswage","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kerze","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kette","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kiste","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kletterausrüstung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kletterhaken","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Köcher","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Korb","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kostüm","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Krähenfuß","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kreide","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kristall","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kugel","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lampe","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Leiter","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Materialkomponentenbeutel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Metallkügelchen","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mistelzweigsprößling","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pergamentblatt","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pfeile","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Phiole","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Parfümphiole","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Säurephiole","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Reisegeschirr","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Reisekleidung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Reliquie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Roben","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rucksack","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rute","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sack","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sanduhr","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schaufel","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schlafsack","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schleuderkugeln","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schloss","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schneeschuhe","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schreibfeder","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schriftrollenbehälter","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Seidenseil","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Seife","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Siegelring","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Siegelwachs","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Signalpfeife","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Spitzhacke","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stab","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stahlspiegel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tagesrationen","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tasche","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tonhumpen","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tonkrug","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Totem","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rammbock","genus":"maskulinum","numerus":"singular","adjektiv":"tragbare","präfix":"","suffix":""},
				{"name":"Trinkschlauch","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Vergrößerungsglas","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Vorschlaghammer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Weihwasser","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wetzstein","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberbuch","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberstab","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zelt","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zunderkästchen","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""}
			];
		
			const gegenständeSingularData = getRandomText(gegenständeSingular);
			const gegenständeSingularName = gegenständeSingularData.name;
			const gegenständeSingularGeschlecht = gegenständeSingularData.genus;
			const gegenständeSingularAnzahl = gegenständeSingularData.numerus;
			const gegenständeSingularAdjektiv = gegenständeSingularData.adjektiv;
			const gegenständeSingularPräfix = gegenständeSingularData.präfix;
			const gegenständeSingularSuffix = gegenständeSingularData.suffix;
		
			const gegenständePlural = [
				{"name":"Abakusse","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"abdeckbare Laternen","genus":"femininum","numerus":"plural","adjektiv":"abdeckbare","präfix":"","suffix":""},
				{"name":"Amulette","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Angelausrüstungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Armbrustbolzen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Armbrustbolzenbehälter","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blasrohrpfeile","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blattpapiere","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blendlaternen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Brechstangen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bücher","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Decken","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Drei-Schritt-Stangen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eibenzauberstäbe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eimer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eisenkeile","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eisentöpfe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Embleme","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Enterhaken","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fackeln","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fangeisen","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fässer","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kleidung","genus":"femininum","numerus":"plural","adjektiv":"feine","präfix":"","suffix":""},
				{"name":"Ferngläser","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tintenfläschchen","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Alchemistenfeuerflaschen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ölflaschen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Flaschenzüge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gegengiftphiolen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kleidung","genus":"femininum","numerus":"plural","adjektiv":"gewöhnliche","präfix":"","suffix":""},
				{"name":"Giftphiolen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Glasflaschen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Glocken","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hämmer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Handschellen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hanfseile","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heilerausrüstungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heiltränke","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Holzstäbe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kaufmannswagen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kerzen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ketten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kisten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kletterausrüstungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kletterhaken","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Köcher","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Körbe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kostüme","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Krähenfüße","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kreiden","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kristalle","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kugeln","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lampen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Leitern","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Materialkomponentenbeutel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Metallkügelchen","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mistelzweigsprösslinge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pergamentblätter","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pfeile","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Phiolen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Parfümphiolen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Säurephiolen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Reisegeschirr","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Reisekleidungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Reliquien","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Roben","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rucksäcke","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ruten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Säcke","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sanduhren","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schaufeln","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schlafsäcke","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schleuderkugeln","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schlösser","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schneeschuhe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schreibfedern","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schriftrollenbehälter","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Seidenseile","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Seifen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Siegelringe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Siegelwachse","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Signalpfeifen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Spitzhacken","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stäbe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stahlspiegel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tagesrationen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Taschen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tonhumpen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tonkrüge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Totems","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rammböcke","genus":"maskulinum","numerus":"plural","adjektiv":"tragbaren","präfix":"","suffix":""},
				{"name":"Trinkschläuche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Vergrößerungsgläser","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Vorschlaghämmer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Weihwasser","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wetzsteine","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberbücher","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberstäbe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zelte","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zunderkästchen","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""}
			];
		
			const gegenständePluralData = getRandomText(gegenständePlural);
			const gegenständePluralName = gegenständePluralData.name;
			const gegenständePluralGeschlecht = gegenständePluralData.genus;
			const gegenständePluralAnzahl = gegenständePluralData.numerus;
			const gegenständePluralAdjektiv = gegenständePluralData.adjektiv;
			const gegenständePluralPräfix = gegenständePluralData.präfix;
			const gegenständePluralSuffix = gegenständePluralData.suffix;
		
			const domäne = [
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Adeligen"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Arkana"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Ausdauer"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Dämmerung"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Dämonen"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Demut"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Dunkelheit"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Erde"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Erneuerung"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Familie"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Feen"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Fertigkeiten"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Freiheit"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Freude"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Geduld"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Gemeinschaft"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Gerechtigkeit"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Gier"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Großzügigkeit"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Habgier"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Handwerkskunst"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Heilung"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Hoffnung"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Illusion"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Jagd"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Kälte"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Keuschheit"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Korruption"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Liebe"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Luft"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Lust"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Magie"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Mäßigung"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Nächstenliebe"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Natur"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Ordnung"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Pflanzen"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Planung"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Qual"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Rache"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Reise"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Runen"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Schmiedekunst"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Schöpfung"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Sonne"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Stärke"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Tiere"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Trägheit"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Tyrannei"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Vergeltung"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Verwöhnung"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Völlerei"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Wildnis"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Zeit"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Zerstörung"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Zivilisation"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Bestialischen"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Betrugs"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Chaos"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Charmes"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Diabolischen"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Eifers"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Feuers"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Friedens"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Geistes"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Gesetzes"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Gleichgewichts"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Gleißens"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Glücks"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Grabes"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Handels"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Hasses"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Krieges"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Lebens"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Leidens"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Lichts"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Meeres"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Mentalismus"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Metalls"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Mondes"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Neids"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Ozeans"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Portals"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Ruhms"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Schicksals"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Schmerzes"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Schutzes"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Stolzes"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Sturms"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Todes"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Traums"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Untodes"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Unwetters"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Wahnsinns"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Wandels"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Wassers"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Winters"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Wissens"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Zaubers"},
				{"name":"Domäne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":"des Zorns"}
			];
		
			const domäneData = getRandomText(domäne);
			const domäneName = domäneData.name;
			const domäneGeschlecht = domäneData.genus;
			const domäneAnzahl = domäneData.numerus;
			const domäneAdjektiv = domäneData.adjektiv;
			const domänePräfix = domäneData.präfix;
			const domäneSuffix = domäneData.suffix;
		
			const schulenDerMagie = [
				{"name":"Schutzmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Alchemie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Betörungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"außergewöhnliche","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"arkane","präfix":"","suffix":""},
				{"name":"Wissenschaft","genus":"femininum","numerus":"singular","adjektiv":"arkane","präfix":"","suffix":""},
				{"name":"Magieschmiedung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Astrologie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Voraussagungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kampfmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verwünschungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verheißungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bindungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gesangsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verzauberungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Chemie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beschwörungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beugungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heilmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fluchmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dämoniasmus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Teufelsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Betrugsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erkenntnismagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verführungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Esoterik","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hervorrufungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"experimentelle","präfix":"","suffix":""},
				{"name":"Glamourmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Scheinmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"hermetische","präfix":"","suffix":""},
				{"name":"Hexhandwerk","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verhexungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Illusionismus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Illusionsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Immateriuem","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Anrufungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"unbeschreibliche","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"ungreifbare","präfix":"","suffix":""},
				{"name":"Hexenmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magnetismus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Malediktion","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wunder","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"metaphysische","präfix":"","suffix":""},
				{"name":"Mojo","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mummenschanz","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mysterium","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kunst","genus":"femininum","numerus":"singular","adjektiv":"mystische","präfix":"","suffix":""},
				{"name":"Naturphilosophie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Nekromantie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"irrationalen","präfix":"","suffix":""},
				{"name":"Okkultismus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Orakel","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"paranormale","präfix":"","suffix":""},
				{"name":"Phänomen","genus":"neutrum","numerus":"singular","adjektiv":"magische","präfix":"","suffix":""},
				{"name":"Philosophie","genus":"femininum","numerus":"singular","adjektiv":"magische","präfix":"","suffix":""},
				{"name":"Platonik","genus":"femininum","numerus":"singular","adjektiv":"magische","präfix":"","suffix":""},
				{"name":"Macht","genus":"femininum","numerus":"singular","adjektiv":"magische","präfix":"","suffix":""},
				{"name":"Vorahnungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Taschenspielerei","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"überirdische","präfix":"","suffix":""},
				{"name":"Auge","genus":"neutrum","numerus":"singular","adjektiv":"zweite","präfix":"","suffix":""},
				{"name":"Schattenmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberei","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Weissagungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberwirken","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberhandwerk","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberei","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberweben","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zauberkunst","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kunst","genus":"femininum","numerus":"singular","adjektiv":"spirituelle","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"fremde","präfix":"","suffix":""},
				{"name":"Herbeirufungsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Reich","genus":"neutrum","numerus":"singular","adjektiv":"supernale","präfix":"","suffix":""},
				{"name":"Übernatürliche","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kunst","genus":"femininum","numerus":"singular","adjektiv":"übernatürliche","präfix":"","suffix":""},
				{"name":"Übernatürlichkeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"sympathisierende","präfix":"","suffix":""},
				{"name":"Technomantie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Telestik","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Thaumaturgie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Theurgie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"transzendente","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"transzendentale","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"transmundanische","präfix":"","suffix":""},
				{"name":"Transmutationsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Trickserei","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Übersinnlichkeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kriegsmagie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hexenmeisterei","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"gewebte","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"komische","präfix":"","suffix":""},
				{"name":"Hexenwerk","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hexerei","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magierkunst","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"göttliche","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"urtümliche","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"okkulte","präfix":"","suffix":""},
				{"name":"Magie","genus":"femininum","numerus":"singular","adjektiv":"wirrsche","präfix":"","suffix":""}
			];
		
			const schulenDerMagieData = getRandomText(schulenDerMagie);
			const schulenDerMagieName = schulenDerMagieData.name;
			const schulenDerMagieGeschlecht = schulenDerMagieData.genus;
			const schulenDerMagieAnzahl = schulenDerMagieData.numerus;
			const schulenDerMagieAdjektiv = schulenDerMagieData.adjektiv;
			const schulenDerMagiePräfix = schulenDerMagieData.präfix;
			const schulenDerMagieSuffix = schulenDerMagieData.suffix;
		
			const religionSingular = [
				{"name":"Abgesandte","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Absolution","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Affinität","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Animismus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Antwort","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Apostel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Äquilibrium","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Armageddon","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Aspekt","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Aufseher","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bekehrung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bekenntnis","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blasphemie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bruderschaft","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Buße","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Chaos","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Demiurg","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dienst","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dogma","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dreieinigkeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dualität","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eifer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Einigkeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Einmischung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erlöser","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erlösung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erzengel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ewigkeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Exodus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fromme","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fundamentalismus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Furcht","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gebet","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Geist","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Geist","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Glückseligkeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gnade","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gnostizismus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gottheit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Göttlichkeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gral","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heilige","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heiligkeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heiligkeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Herold","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hingabe","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hirte","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hüter","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ideologie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ikone","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Inquisition","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Jenseits","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Klarheit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lästerung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Leuchtfeuer","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":"der Hoffnung"},
				{"name":"Licht","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Märtyrer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Matriarchin","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Messias","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mond","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Morgendämmerung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ökumene","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Orakel","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pakt","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pantheon","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Paragon","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Passion","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Patriarch","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pilger","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rechtschaffenheit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Reinheit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rettung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ritus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sanktion","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schrift","genus":"femininum","numerus":"singular","adjektiv":"heilige","präfix":"","suffix":""},
				{"name":"Schwesternschaft","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Seele","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Segnung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sonne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sonnenwende","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stern","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sünde","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sünde","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Symbol","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tabu","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Taufe","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Testament","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Theologie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tod","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tugend","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Unendlichkeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verbundenheit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verdammnis","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Vergessen","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Vision","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wächter","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wahrheit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiederkunft","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wunder","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zeichen","genus":"neutrum","numerus":"singular","präfix":"","suffix":""}
			];
		
			const religionSingularData = getRandomText(religionSingular);
			const religionSingularName = religionSingularData.name;
			const religionSingularGeschlecht = religionSingularData.genus;
			const religionSingularAnzahl = religionSingularData.numerus;
			const religionSingularAdjektiv = religionSingularData.adjektiv;
			const religionSingularPräfix = religionSingularData.präfix;
			const religionSingularSuffix = religionSingularData.suffix;
		
			const windrichtungen = ['nördlich', 'nordöstlich', 'nordwestlich', "südlich", "südöstlich", "südöstlich", 'östlich', 'westlich'];
			
			const waffenSingular = [
				{"name":"Anderthalbhänder","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beil","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blasrohr","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Boomerang","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dolch","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dreizack","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Flegel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gleve","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kurzspeer","genus":"maskulinum","numerus":"singular","adjektiv":"hakenförmige","präfix":"","suffix":""},
				{"name":"Handarbrust","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hellebarde","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hoopak","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waffe","genus":"femininum","numerus":"singular","adjektiv":"improvisierte","präfix":"","suffix":""},
				{"name":"Kampfstab","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Knüppel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kriegshacke","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kriegshammer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Krummsäbel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kurzbogen","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kurzschwert","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Langbogen","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Langschwert","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lanze","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Armbrust","genus":"femininum","numerus":"singular","adjektiv":"leichte","präfix":"","suffix":""},
				{"name":"Repetierarmbrust","genus":"femininum","numerus":"singular","adjektiv":"leichte","präfix":"","suffix":""},
				{"name":"Hammer","genus":"maskulinum","numerus":"singular","adjektiv":"leichte","präfix":"","suffix":""},
				{"name":"Morgenstern","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Netz","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Peitsche","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pike","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rapier","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schlagring","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schleuder","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Armbrust","genus":"femininum","numerus":"singular","adjektiv":"schwere","präfix":"","suffix":""},
				{"name":"Sense","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sichel","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Speer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stachelkette","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Streitaxt","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Streitkolben","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tonfa","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Langbogen","genus":"maskulinum","numerus":"singular","adjektiv":"übergroße","präfix":"","suffix":""},
				{"name":"Wurfpfeil","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wurfspeer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ylkwa","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zweihandaxt","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zweihandhammer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zweihandknüppel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zweihandschwert","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Krummsäbel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""}
			]
		
			const waffenSingularData = getRandomText(waffenSingular);
			const waffenSingularName = waffenSingularData.name;
			const waffenSingularGeschlecht = waffenSingularData.genus;
			const waffenSingularAnzahl = waffenSingularData.numerus;
			const waffenSingularAdjektiv = waffenSingularData.adjektiv;
			const waffenSingularPräfix = waffenSingularData.präfix;
			const waffenSingularSuffix = waffenSingularData.suffix;
		
			const waffenPlural = [
				{"name":"Anderthalbhänder","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beile","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Blasrohre","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Boomerangs","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dolche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Dreizacke","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Flegel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gleven","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kurzspeere","genus":"maskulinum","numerus":"plural","adjektiv":"hakenförmige","präfix":"","suffix":""},
				{"name":"Handarmbrüste","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hellebarden","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hoopaks","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Waffen","genus":"femininum","numerus":"plural","adjektiv":"improvisierte","präfix":"","suffix":""},
				{"name":"Kampfstäbe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Knüppel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kriegshacken","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kriegshämmer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Krummsäbel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kurzbogen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kurzschwerter","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Langbogen","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Langschwerter","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lanzen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Armbrüste","genus":"femininum","numerus":"plural","adjektiv":"leichte","präfix":"","suffix":""},
				{"name":"Repetierarmbrüste","genus":"femininum","numerus":"plural","adjektiv":"leichte","präfix":"","suffix":""},
				{"name":"Hämmer","genus":"maskulinum","numerus":"plural","adjektiv":"leichte","präfix":"","suffix":""},
				{"name":"Morgensterne","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Netze","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Peitschen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Piken","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rapiere","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schlagringe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schleudern","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Armbrüste","genus":"femininum","numerus":"plural","adjektiv":"schwere","präfix":"","suffix":""},
				{"name":"Sensen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sicheln","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Speere","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stachelketten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Streitäxte","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Streitkolben","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tonfas","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Langbögen","genus":"maskulinum","numerus":"plural","adjektiv":"übergroße","präfix":"","suffix":""},
				{"name":"Wurfpfeile","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wurfspeere","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ylkwae","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zweihandäxte","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zweihandhämmer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zweihandknüppel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zweihandschwerter","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Krummsäbel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""}
			]
		
			const waffenPluralData = getRandomText(waffenPlural);
			const waffenPluralName = waffenPluralData.name;
			const waffenPluralGeschlecht = waffenPluralData.genus;
			const waffenPluralAnzahl = waffenPluralData.numerus;
			const waffenPluralAdjektiv = waffenPluralData.adjektiv;
			const waffenPluralPräfix = waffenPluralData.präfix;
			const waffenPluralSuffix = waffenPluralData.suffix;
		
			const kleidungsstückeSingular = [
				{"name":"Armschutz","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Badeanzug","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Balaclava","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beckenhaube","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beinkleid","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beinschiene","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beinwickel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beutel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bolero","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Brustpanzer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Brustplatte","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Buchse","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bunthaube","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Büstenhalter","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ellenbogenpanzer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Faltrock","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fausthandschuh","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fäustling","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gambeson","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Geschlechtsteil-Schutz","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gewand","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gürtel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Handschuh","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hauberk","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Helm","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Helmbusch","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hemd","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hose","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hüftschutz","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hut","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kappe","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kehlkopfschutz","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kilt","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kleid","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Knieschoner","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Korsett","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Krawatte","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Jacke","genus":"femininum","numerus":"singular","adjektiv":"kurze","präfix":"","suffix":""},
				{"name":"Kutte","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Jacke","genus":"femininum","numerus":"singular","adjektiv":"lange","präfix":"","suffix":""},
				{"name":"Stiefel","genus":"maskulinum","numerus":"singular","adjektiv":"lange","präfix":"","suffix":""},
				{"name":"Lendenschurz","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Leotard","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mantel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Maske","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Jacke","genus":"femininum","numerus":"singular","adjektiv":"mittellange","präfix":"","suffix":""},
				{"name":"Morgenmantel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Oberschenkelschutz","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Overall","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Parka","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pelerine","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Poncho","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pullover","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Robe","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schal","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schleppe","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schlips","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schuh","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schulterpanzer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schulterstück","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schürze","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Socke","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stiefel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stirnband","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Strickjacke","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Strumpfhose","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Toga","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Topfhelm","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Trenchcoat","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tuch","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tunika","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Umhang","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Unterarmschutz","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Unterrock","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wams","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Weste","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zwangsjacke","genus":"femininum","numerus":"singular","präfix":"","suffix":""}
			];
			const kleidungsstückeSingularData = getRandomText(kleidungsstückeSingular);
			const kleidungsstückeSingularName = kleidungsstückeSingularData.name;
			const kleidungsstückeSingularGeschlecht = kleidungsstückeSingularData.genus;
			const kleidungsstückeSingularAnzahl = kleidungsstückeSingularData.numerus;
			const kleidungsstückeSingularAdjektiv = kleidungsstückeSingularData.adjektiv;
			const kleidungsstückeSingularPräfix = kleidungsstückeSingularData.präfix;
			const kleidungsstückeSingularSuffix = kleidungsstückeSingularData.suffix;
		
			const kleidungsstückePlural = [
				{"name":"Armschützer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Badeanzüge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Balaclavas","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beckenhauben","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beinkleider","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beinschienen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beinwickel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Beutel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Boleros","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Brustpanzer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Brustplatten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Buchsen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Bunthauben","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Büstenhalter","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ellenbogenpanzer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Faltröcke","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fausthandschuhe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fäustlinge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gambesons","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Geschlechtsteil-Schutze","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gewänder","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gürtel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Handschuhe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hauberke","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Helme","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Helmbüsche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hemden","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hosen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hüftschutze","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hüte","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kappen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kehlkopfschutze","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kilts","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kleider","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Knieschoner","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Korsette","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Krawatten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Jacken","genus":"femininum","numerus":"plural","adjektiv":"kurze","präfix":"","suffix":""},
				{"name":"Kutten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Jacken","genus":"femininum","numerus":"plural","adjektiv":"lange","präfix":"","suffix":""},
				{"name":"Stiefel","genus":"maskulinum","numerus":"plural","adjektiv":"lange","präfix":"","suffix":""},
				{"name":"Lendenschurze","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Leotards","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mäntel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Masken","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Jacken","genus":"femininum","numerus":"plural","adjektiv":"mittellange","präfix":"","suffix":""},
				{"name":"Morgenmäntel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Oberschenkelschutze","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Overalls","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Parkas","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pelerinen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ponchos","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Pullover","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Roben","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schals","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schleppen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schlipse","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schuhe","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schulterpanzer","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schulterstücke","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schürzen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Socken","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stiefel","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stirnbänder","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Strickjacken","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Strumpfhosen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Togas","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Topfhelme","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Trenchcoats","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tücher","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tuniken","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Umhänge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Unterarmschutze","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Unterröcke","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wämser","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Westen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zwangsjacken","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""}
			];
			
			const kleidungsstückePluralData = getRandomText(kleidungsstückePlural);
			const kleidungsstückePluralName = kleidungsstückePluralData.name;
			const kleidungsstückePluralGeschlecht = kleidungsstückePluralData.genus;
			const kleidungsstückePluralAnzahl = kleidungsstückePluralData.numerus;
			const kleidungsstückePluralAdjektiv = kleidungsstückePluralData.adjektiv;
			const kleidungsstückePluralPräfix = kleidungsstückePluralData.präfix;
			const kleidungsstückePluralSuffix = kleidungsstückePluralData.suffix;
			
			const gottheit = [
				{"name":"Abbathor","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott der Habgier"},
				{"name":"Aerdrie Faenya","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfische Göttin des Himmels"},
				{"name":"Akadi","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin der Luft"},
				{"name":"Alathrien Druanna","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfische Göttin der Runen, des Schreibens und des Zauberns"},
				{"name":"Alobal Lorfiril","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Ausgelassenheit und der Fröhlichkeit"},
				{"name":"Amaunator","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Sonne"},
				{"name":"Angharradh","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfische Göttin der Weisheit und des Schutzes"},
				{"name":"Araleth Letheranil","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott des Lichts, der Sterne und der Offenbarung"},
				{"name":"Arvoreen","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", halblingischer Gott der Wachsamkeit und des Krieges"},
				{"name":"Asmodeus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott des Genusses"},
				{"name":"Auril","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin des Winters"},
				{"name":"Azuth","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Magie"},
				{"name":"Baervan Wildwanderer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", gnomischer Gott der Wälder"},
				{"name":"Bahgtru","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", orkischer Gott der Stärke"},
				{"name":"Tyrannos","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Tyrannei"},
				{"name":"Baravar Mantelschatten","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", gnomischer Gott der Illusion und der Täuschung"},
				{"name":"Berronar Wahrsilber","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergische Göttin von Herd und Heimat"},
				{"name":"Beshaba","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin des Unglücks"},
				{"name":"Bhaal","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott des Mordes"},
				{"name":"Bleredd","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Arbeit und des Handwerks"},
				{"name":"Brandobaris","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", halblingischer Gott des Diebstahls und der Abenteuer"},
				{"name":"Callarduran Sanfthände","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", gnomischer Gott des Bergbaus und der Steinbearbeitung"},
				{"name":"Charmalaine","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", halblingische Göttin der scharfen Sinne und des Glücks"},
				{"name":"Chauntea","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin der Landwirtschaft"},
				{"name":"Corellon Larethian","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Kunst und der Magie"},
				{"name":"Cyric","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Lügen"},
				{"name":"Cyrrollalee","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", halblingische Göttin von Herd und Heimat"},
				{"name":"Darahl Tilvenar","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott des Feuers, der Erde und der Metallarbeit"},
				{"name":"Deneir","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Schrift"},
				{"name":"Ritterin","genus":"femininum","numerus":"singular","adjektiv":"rote","präfix":"","suffix":", Göttin der Strategie"},
				{"name":"Dugmaren Leuchtmantel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott der Entdeckung"},
				{"name":"Dumathoin","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott der begrabenen Geheimnisse"},
				{"name":"Eilistraee","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Drow-Göttin der Lieder und des Mondlichts"},
				{"name":"Eldath","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin des Friedens"},
				{"name":"Elebrin Liothiel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Fülle, der Gärten und der Ernte"},
				{"name":"Erevan Ilesere","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott des Unfugs"},
				{"name":"Fenmarel Mestarine","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Ausgestoßenen"},
				{"name":"Flandal Stahlhaut","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", gnomischer Gott der Metallarbeit"},
				{"name":"Gadhelyn","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Unabhängigkeit und der Ächtung"},
				{"name":"Gaerdal Eisenhand","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", gnomische Göttin des Schutzes"},
				{"name":"Garl Glitzergold","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", gnomischer Gott der List und der Juwelen"},
				{"name":"Gelf Dunkelherd","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", gnomischer Gott der Frustration und der Zerstörung"},
				{"name":"Ghaunadaur","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Drow-Gott der Schlicke, des Schleims und der Ausgestoßenen"},
				{"name":"Gond","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott des Handwerks"},
				{"name":"Gorm Gulthyn","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott der Wachsamkeit"},
				{"name":"Grumbar","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Erde"},
				{"name":"Gwaeron Windstrom","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott des Spurenlesens"},
				{"name":"Haela Leuchtaxt","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergische Göttin des Schlachtenglücks"},
				{"name":"Hanali Celanil","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfische Göttin der Liebe und der Schönheit"},
				{"name":"Hanseath","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott der Festlichkeiten, des Brauens und der Lieder"},
				{"name":"Helm","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott des Schutzes"},
				{"name":"Hoar","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Rache und der Bestrafung"},
				{"name":"Ilmater","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Ausdauer"},
				{"name":"Istishia","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin des Wassers"},
				{"name":"Jergal","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Schreiber der Toten"},
				{"name":"Kelemvor","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Toten"},
				{"name":"Keptolo","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Drow-Gott der Schönheit, der Lebenskunst und der Fruchtbarkeit"},
				{"name":"Kiaransalee","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Drow-Göttin der Nekromantie"},
				{"name":"Kirith Sotheril","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Erkenntnis und der Illusion"},
				{"name":"Clangeddin Silberbart","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott des Krieges und der Strategie"},
				{"name":"Kossuth","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott des Feuers"},
				{"name":"Labelas Enoreth","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Zeit, der Geschichte und der Philosophie"},
				{"name":"Laduguer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Duergar-Gott der Magie und der Sklaverei"},
				{"name":"Lathander","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Morgendämmerung und Erneuerung"},
				{"name":"Leira","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin der Illusion"},
				{"name":"Lliira","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin der Freude"},
				{"name":"Lolth","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin der Spinnen"},
				{"name":"Loviatar","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin der Schmerzen"},
				{"name":"Luthic","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", orkische Muttergöttin der Fruchtbarkeit und der Heilung"},
				{"name":"Malar","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Jagd"},
				{"name":"Malyk","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Drow-Gott des Chaos, der Rebellion und der wilden Magie"},
				{"name":"Marthammor Duin","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott der Wanderer"},
				{"name":"Mask","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Diebe"},
				{"name":"Melira Taralen","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfische Göttin der Poesie und der Lieder"},
				{"name":"Mielikki","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin der Wälder"},
				{"name":"Milil","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Dichtung und der Lieder"},
				{"name":"Moradin","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott der Schöpfung"},
				{"name":"Muamman Duathal","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott der Stürme und der Reisen"},
				{"name":"Mya","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergische Göttin der Klane, der Familie und der Weisheit"},
				{"name":"Myrkul","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott des Todes"},
				{"name":"Mystra","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin der Magie"},
				{"name":"Mythrien Sarath","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Entsagung und der Mythale"},
				{"name":"Naralis Analor","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Heilung, des Leidens und des Todes"},
				{"name":"Nebelun","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", gnomischer Gott der Erfindung und des Glücks"},
				{"name":"Oghma","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott des Wissens"},
				{"name":"Rellavar Danuvien","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott des Winters und des rauen Wetters"},
				{"name":"Rill Schlaudrossel","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", gnomischer Gott der Gesetze und der Gedanken"},
				{"name":"Rillifane Rallathil","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Natur"},
				{"name":"Roknar","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott der Lügen und Intrigen"},
				{"name":"Sarula Iliene","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfische Göttin der Seen und der Ströme"},
				{"name":"Savras","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Weissagung und des Schicksals"},
				{"name":"Segojan Erdrufer","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", gnomischer Gott der Erde und der Toten"},
				{"name":"Sehanine Mondbogen","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfische Göttin der Weissagung, der Träume, des Todes und der Reise"},
				{"name":"Selûne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin des Mondes"},
				{"name":"Selvetarm","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Drow-Gott der Krieger"},
				{"name":"Shar","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin der Dunkelheit und des Verlustes"},
				{"name":"Shargaas","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", orkischer Gott der Heimlichkeit und der Dunkelheit"},
				{"name":"Sharindlar","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergische Göttin der Heilung und der Liebe"},
				{"name":"Sheela Peryroyl","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", halblingische Göttin der Landwirtschaft und des Wetters"},
				{"name":"Shevaresh","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Rache"},
				{"name":"Sheyanna Flachssträhne","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin der Liebe, der Schönheit und der Leidenschaft"},
				{"name":"Silvanus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Wilden Natur"},
				{"name":"Solonor Thelandira","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott des Bogenschießens"},
				{"name":"Sune","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin der Liebe und der Schönheit"},
				{"name":"Talona","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin von Gift und Krankheit"},
				{"name":"Talos","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Stürme"},
				{"name":"Tarsellis Meunniduin","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Berge, der Flüsse und der wilden Orte"},
				{"name":"Tempus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott des Krieges"},
				{"name":"Tethrin Veraldé","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott des Kampfes und des Schwertkampfes"},
				{"name":"Thard Harr","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott der Wildnis und der Jagd"},
				{"name":"Tharmekhûl","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott des Feuers, des Schmiedens und des geschmolzenen Gesteins"},
				{"name":"Thautam","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott der Geheimnisse, der Dunkelheit und der verlorenen Schätze"},
				{"name":"Duerra","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"Tiefe","suffix":", Duergar-Göttin der Eroberung und der Psionik"},
				{"name":"Sashelas","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"Tiefe","suffix":", elfischer Gott des Meeres"},
				{"name":"Torm","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Tapferkeit und Selbstaufopferung"},
				{"name":"Tymora","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin des Glücks"},
				{"name":"Tyr","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Gott der Gerechtigkeit"},
				{"name":"Ulaa","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergische Göttin des Bergbaus und der Steinbrüche"},
				{"name":"Umberlee","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin des Meeres"},
				{"name":"Urdlen","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", gnomischer Gott der Gier und des Mordes"},
				{"name":"Urogalan","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", halblingischer Gott der Erde und des Todes"},
				{"name":"Valkauna","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergische Göttin der Schwüre, der Geburt, der Alterung und des Todes"},
				{"name":"Valkur","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", nordländischer Gott der Seeleute"},
				{"name":"Vandria Gilmadrith","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfische Göttin des Krieges, des Kummers, der Gerechtigkeit und der Wachsamkeit"},
				{"name":"Vergadain","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", zwergischer Gott des Glücks und des Wohlstands"},
				{"name":"Vhaeraun","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Drow-Gott der Diebe"},
				{"name":"Waukeen","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Göttin des Handelns"},
				{"name":"Ye'Cind","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfischer Gott der Musik und der Verzauberung"},
				{"name":"Yondalla","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", halblingische Göttin der Fruchtbarkeit und des Schutzes"},
				{"name":"Yurtrus","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", orkischer Gott des Todes und der Krankheit"},
				{"name":"Zandilar","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", elfische Göttin der Romantik, der Begierde und des Tanzes"},
				{"name":"Zinzerena","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":", Drow-Göttin des Mordes, der Illusion und der Lügen"},
				{"name":"Gruumsh","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", orkischer Gott der Stürme und des Krieges"},
				{"name":"Ilneval","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":", orkischer Gott der Strategie und der Horden"}
			];
		
			const gottheitData = getRandomText(gottheit);
			const gottheitName = gottheitData.name;
			const gottheitGeschlecht = gottheitData.genus;
			const gottheitAnzahl = gottheitData.numerus;
			const gottheitAdjektiv = gottheitData.adjektiv;
			const gottheitPräfix = gottheitData.präfix;
			const gottheitSuffix = gottheitData.suffix;
		
			const ereignisSingular = [
				{"name":"Abenteuer","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Abstieg","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Aufbruch","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Aufgabe","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Aufstand","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Aufstieg","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ausbruch","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Auslöschung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Auslöser","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Befreiung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Belagerung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Einigung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Entdeckung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Entfremdung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Enthüllung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Entscheidung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Entwurzelung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erbauung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erkundung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erlösung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ernte","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eroberung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erwachen","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Existenz","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Explosion","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Flammen","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fluch","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Flucht","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Geburt","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gefangennahme","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Geheimnis","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Grenzüberschreitung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gründung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heilung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heimkehrung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Herausforderung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hinterhalt","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hochzeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Intrige","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Konflikt","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Konfrontation","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Krieg","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lüge","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Mord","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Niederlage","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Offenbarung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Opfer","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Plage","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Prophezeiung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rachenahme","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rebellion","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rückkehr","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ruhe","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schicksal","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schicksalsschlag","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schicksalswende","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sieg","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sonnenfinsternis","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Spaltung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sturm","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Täuschung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tod","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Überraschung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Umkehrung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Untreue","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Veränderung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verbannung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verbindung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verbündung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verdammnis","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verdrängung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verfluchung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verführung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Vergebung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Vergeltung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verhandlung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verirrung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verleumdung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verlockung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verlust","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verrat","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verstoß","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verstrickung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Versuchung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verwandlung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verwundung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verzauberung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wandlung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wendepunkt","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Widerstand","genus":"maskulinum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiedergeburt","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiedergutmachung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiederherstellung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiedersehen","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiedervereinigung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wunder","genus":"neutrum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zeremonie","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zerstörung","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zusammenarbeit","genus":"femininum","numerus":"singular","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zusammenbruch","genus":"maskulinum","numerus":"singular","präfix":"","suffix":""}
			]
		
			const ereignisSingularData = getRandomText(ereignisSingular);
			const ereignisSingularName = ereignisSingularData.name;
			const ereignisSingularGeschlecht = ereignisSingularData.genus;
			const ereignisSingularAnzahl = ereignisSingularData.numerus;
			const ereignisSingularAdjektiv = ereignisSingularData.adjektiv;
			const ereignisSingularPräfix = ereignisSingularData.präfix;
			const ereignisSingularSuffix = ereignisSingularData.suffix;
		
			const ereignisPlural = [
				{"name":"Abenteuer","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Abstiege","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Aufbrüche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Aufgaben","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Aufstände","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Aufstiege","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ausbrüche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Auslöschungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Auslöser","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Befreiungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Belagerungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Einigungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Entdeckungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Entfremdungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Enthüllungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Entscheidungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Entwurzelungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erbauungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erkundungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erlösungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ernten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Eroberungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Erwachen","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Existenzen","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Explosionen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Flammen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Flüche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Fluchten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Geburten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gefangennahmen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Geheimnisse","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Grenzüberschreitungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Gründungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heilungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Heimkehrungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Herausforderungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hinterhalte","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Hochzeiten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Intrigen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Konflikte","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Konfrontationen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Kriege","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Lügen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Morde","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Niederlagen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Offenbarungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Opfer","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Plagen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Prophezeiungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rachenahmen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rebellionen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Rückkehrungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Ruhen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schicksale","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schicksalsschläge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Schicksalswenden","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Siege","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Sonnenfinsternisse","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Spaltungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Stürme","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Täuschungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Tode","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Überraschungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Umkehrungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Untreuen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Veränderungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verbannungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verbindungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verbündungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verdammnisse","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verdrängungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verfluchungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verführungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Vergebungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Vergeltungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verhandlungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verirrungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verleumdungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verlockungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verluste","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verrate","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verstoße","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verstrickungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Versuchungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verwandlungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verwundungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Verzauberungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wandlungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wendepunkte","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Widerstände","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiedergeburten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiedergutmachungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiederherstellungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiedersehungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wiedervereinigungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Wunder","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zeremonien","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zerstörungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zusammenarbeiten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
				{"name":"Zusammenbrüche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""}
			];
		
			const ereignisPluralData = getRandomText(ereignisPlural);
			const ereignisPluralName = ereignisPluralData.name;
			const ereignisPluralGeschlecht = ereignisPluralData.genus;
			const ereignisPluralAnzahl = ereignisPluralData.numerus;
			const ereignisPluralAdjektiv = ereignisPluralData.adjektiv;
			const ereignisPluralPräfix = ereignisPluralData.präfix;
			const ereignisPluralSuffix = ereignisPluralData.suffix;
			
			const kontinent = [
				...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),	
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				"Faerûn", "Zakhara", "Kara-Tur", "Maztica", "Anchorome", "Katashaka", "Laerakond", "Osee"
				] : [])

			]

			const land = [
				...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),	
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				"Aglarond", "Akanûl", "Akota", "Aleaxtis", "Aloushe", "Altumbel", "Ammarindar", "Amn", "Amra", "Anauria", "Anok-Imaskar", "Artief", "Argissthilliax", "Aryandaar", "Asram", "Athalanatar", "Caesinmalsvir", "Calimshan", "Chalsembyr", "Chessenta", "Chondath", "Chu'ta Te", "Coramshan", "Cormyr", "Daerimathlor", "Damara", "Dambrath", "Darastriverthicha", "Darastrixhurthi", "Delimbiyran", "Delzoun", "Doegan", "Drupar", , "Eiellûr", "Elturgard", "Erlkazar", "Esparin", "Estagund", "Immertreff", "Fraaszummdin", "Gharraghaur", "Gontal", "Gundarlun", "Halruaa", "Haunghdannar", "Hlondath", "Hlundadim", "Horreb", "Illiyanbruen", "Illefarn", "Ilythiir", "Impiltur", "Keltormir", "Khazari", "Khuur", "Koguryo", "Konigheim", "Koryo", "Kozakura", "Kultaakarr", "Kultaka", "Langdarma", "Lantan", "Lapaliiya", "Luiren", "Luruar", "Meritin", "Memnonnar", "Miyeritar", "Mulhorand", "Muranndin", "Murghôm", "Najara", "Narfell", "Nathlan", "Netheril", "Nexal", "Nimbral", "Nmalk", "Norheim", "Oghrann", "Olleth", "Oman", "Orishaar", "Ostoria", "P'karnis", "Payit", "Peleveria", "Petan", "Pezelac", "Phalorm", "Phutan", "Ra-Khati", "Rangfjell", "Rashemen", "Raumathar", "Relmaur", "Roldilar", "Samarach", "Sarphil", "Scarbarla", "Selmalyr", "Sembia", "Semphar", "Sespech", "Sessrendale", "Shanatar", "Shantel Othreier", "Shavinar", "Shou Lung", "Shyr", "Silla", "Sossal", "Syòpiir", "T'u Lung", "Tabot", "Tashalar", "Tathar", "Tethyr", "Thaeravel", "Therkrixghontix", "Thay", "Thearnytaar", "Thesk", "Thindol", "Threskel", "Tuern", "Turmish", "Tymanchebar", "Tymanther", "Ulgarth", "Utheraal", "Vaasa", "Valashar", "Var", "Vastar", "Vesperin", "Wa", "Yothaerin", "Yaïmmunahar", "Zakhara"
				] : []),	
			];
		
			const region = [
				...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),	
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				"Frostweite", "Hoher Wald", "Wildes Grenzland", "Silbermarschen", "Nördliche Schwertküste", "Äußerster Norden", "Anauroch", "Östliche Herzlande", "Nördliche Mondsee", "Kalte Lande", "Großes Tal", "Unnahbarer Osten", "Hordenlande", "Pelvuria", "Land der Intrigen", "Westliche Herzlande", "Mondscheininseln", "Inselkönigreiche", "Nelanther", "Strahlende Ebenen", "Vilhongriff", "Alte Reiche", "Chult", "Lapaliiya", "Samarach", "Tashalar", "Thindol", "Grenzkönigreiche", "Strahlender Süden", "Östliches Shaar", "Äußerster Osten"
				] : []),	
			];

			const gebiet = [
			...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				] : []),	
			]
		
			const siedlung = [
				...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),	
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				"Amphail", "Ascore", "Baldurs Tor", "Berdusk", "Berg Hotenow", "Boareskyr Brücke", "Burg Drachenspeer", "Burg Hartwick", "Caer Corwell", "Caer Moray", "Caer Westphal", "Dolchfurt", "Dreieber", "Dunkelfeste", "Dynnegall", "Eisenfeste", "Elturel", "Everaska", "Fernblick", "Feuerschere", "Feuersteinfels", "Fort Morgenfürst", "Fort Tamal", "Gauntlgrym", "Großvaterbaum", "Hartbuckler", "Helms Feste", "Immerdar", "Kerzeburg", "Langsattel", "Menzoberrazan", "Mirabar", "Mithralhalle", "Morgurs Hügel", "Niewinter", "Orogoth", "Phandalin", "Rabenfels", "Rogarsheim", "Scornubel", "Secomber", "Siedelstein", "Silbrigmond", "Soubar", "Ss´thart´tissssun", "Tiefwasser", "Triel", "Trollklauenfurt", "Yartar", "Zitadelle Adbar"
				] : []),			
			];
			
			const fluss = [
			...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				] : []),	
			]
			
			const berg = [
			...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				] : []),	
			]

			const wahrzeichen = [
			...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				] : []),	
			]

			const gewässer = [
			...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				] : []),	
			]

			const straße = [
			...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				] : []),	
			]
			
			const wald = [
			...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				] : []),	
			]

			const geschichtsereignis = [
			...(document.getElementById("checkboxDrachenlanze").checked ? [
				] : []),
				...(document.getElementById("checkboxEberron").checked ? [
				] : []),
				...(document.getElementById("checkboxExandria").checked ? [
				] : []),
				...(document.getElementById("checkboxGreyhawk").checked ? [
				] : []),
				...(document.getElementById("checkboxRavenloft").checked ? [
				] : []),
				...(document.getElementById("checkboxRavnica").checked ? [
				] : []),
				...(document.getElementById("checkboxSpelljammer").checked ? [
				] : []),
				...(document.getElementById("checkboxStrixhaven").checked ? [
				] : []),
				...(document.getElementById("checkboxTheros").checked ? [
				] : []),
				...(document.getElementById("checkboxVergesseneReiche").checked ? [
				] : []),	
			]

			const nomenSchwacheDeklination = [""]
			const nomenAdjektivSubstantiviert = [""]
		
			function declineNoun(noun, gender, genus, adjectiv, prefix, suffix) {
				const endsWithE = noun.endsWith('e');
				const endsWithT = noun.endsWith('t');
				const endsWithD = noun.endsWith('d');
				const endsWithS = noun.endsWith('s');
				const endsWithZ = noun.endsWith('z');
				const endsWithCh = noun.endsWith('ch');
				
		
				//Überprüfe, ob das Nomen eine schwache Deklination hat
				if (nomenSchwacheDeklination.includes(noun)) {
		
					//Deklinationsregeln für Adjektive und Nomen mit schwacher Deklination
					const nounCases = {
						maskulinum: {
							singular: {
								nominativ: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								genitiv: 
								endsWithE ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') :
								endsWithT ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithS ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithZ ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 's' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativ: 
								endsWithE ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								akkusativ: 
								endsWithE ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativDer: 
											'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								genitivDer: 
								endsWithE ? 'des ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithT ? 'des ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithS ? 'des ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithZ ? 'des ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'des ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 's' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								dativDer: 
								endsWithE ? 'dem ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'dem ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								akkusativDer: 
								endsWithE ? 'den ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'den ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativEin: 
								endsWithE ? 'ein ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'r ' : '') + noun + 'r' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'ein ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'r ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								genitivEin: 
								endsWithE ? 'eines ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'eines ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'en' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								dativEin: 
								endsWithE ? 'einem ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'einem ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'en' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								akkusativEin: 
								endsWithE ? 'einen ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'einen ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'en' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativBestimmterArtikel: 'der',
								genitivBestimmterArtikel: 'des',
								dativBestimmterArtikel: 'dem',
								akkusativBestimmterArtikel: 'den',
		
								nominativPersonalpronomen: 'er',
								genitivPersonalpronomen: 'seiner',
								dativPersonalpronomen: 'ihm',
								akkusativPersonalpronomen: 'ihn',
		
								nominativWelcher: 'welcher',
								genitivWelcher: 'welches',
								dativWelcher: 'welchem',
								akkusativWelcher: 'welchen',
		
								nominativPossesivpronomenMaskulinum: 'sein',
								genitivPossesivpronomenMaskulinum: 'seines',
								dativPossesivpronomenMaskulinum: 'seinem',
								akkusativPossesivpronomenMaskulinum: 'seinen',
		
								nominativPossesivpronomenFemininum: 'seine',
								genitivPossesivpronomenFemininum: 'seiner',
								dativPossesivpronomenFemininum: 'seiner',
								akkusativPossesivpronomenFemininum: 'seine',
		
								nominativPossesivpronomenNeutrum: 'sein',
								genitivPossesivpronomenNeutrum: 'seines',
								dativPossesivpronomenNeutrum: 'seinem',
								akkusativPossesivpronomenNeutrum: 'sein',
		
								nominativPossesivpronomenPlural: 'seine',
								genitivPossesivpronomenPlural: 'seiner',
								dativPossesivpronomenPlural: 'seinen',
								akkusativPossesivpronomenPlural: 'seine',
							}
						}
					};
					return nounCases[gender];
				} else {
					//Normale Deklinationsregeln für Adjektive und Nomen ohne schwache Deklination
					const nounCases = {
						maskulinum: {
							singular: {
								nominativ: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								genitiv: 
								endsWithE ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithT ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') :
								endsWithS ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithZ ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 's' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								dativ: 
								endsWithE ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								akkusativ: 
								endsWithE ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativDer: 
											'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								genitivDer: 
								endsWithE ? 'des ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithT ? 'des ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithS ? 'des ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithZ ? 'des ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'des ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 's' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								dativDer: 
								endsWithE ? 'dem ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'dem ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								akkusativDer: 
								endsWithE ? 'den ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'den ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativEin: 
											'ein ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'r ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								genitivEin: 
								endsWithE ? 'eines ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithT ? 'eines ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'es' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'eines ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 's' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								dativEin: 
								endsWithE ? 'einem ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'einem ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								akkusativEin: 
								endsWithE ? 'einen ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'einen ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativBestimmterArtikel: 'der',
								genitivBestimmterArtikel: 'des',
								dativBestimmterArtikel: 'dem',
								akkusativBestimmterArtikel: 'den',
		
								nominativPersonalpronomen: 'er',
								genitivPersonalpronomen: 'seiner',
								dativPersonalpronomen: 'ihm',
								akkusativPersonalpronomen: 'ihn',
		
								nominativWelcher: 'welcher',
								genitivWelcher: 'welches',
								dativWelcher: 'welchem',
								akkusativWelcher: 'welchen',
		
								nominativPossesivpronomenMaskulinum: 'sein',
								genitivPossesivpronomenMaskulinum: 'seines',
								dativPossesivpronomenMaskulinum: 'seinem',
								akkusativPossesivpronomenMaskulinum: 'seinen',
		
								nominativPossesivpronomenFemininum: 'seine',
								genitivPossesivpronomenFemininum: 'seiner',
								dativPossesivpronomenFemininum: 'seiner',
								akkusativPossesivpronomenFemininum: 'seine',
		
								nominativPossesivpronomenNeutrum: 'sein',
								genitivPossesivpronomenNeutrum: 'seines',
								dativPossesivpronomenNeutrum: 'seinem',
								akkusativPossesivpronomenNeutrum: 'sein',
		
								nominativPossesivpronomenPlural: 'seine',
								genitivPossesivpronomenPlural: 'seiner',
								dativPossesivpronomenPlural: 'seinen',
								akkusativPossesivpronomenPlural: 'seine',
							},
							plural: {
								nominativ: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								genitiv: 
								endsWithE ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithT ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'en' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithS ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithZ ?			(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								dativ: 
								endsWithE ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								akkusativ: 
								endsWithE ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun  + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativDer: 
											'die ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								genitivDer: 
								endsWithE ? 'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun  + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithT ? 'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'en' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithS ? 'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
								endsWithZ ? 'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativDer: 
								endsWithE ? 'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'den ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								akkusativDer: 
								endsWithE ? 'den ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 'n' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : '') : 
											'die ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativBestimmterArtikel: 'die',
								genitivBestimmterArtikel: 'der',
								dativBestimmterArtikel: 'den',
								akkusativBestimmterArtikel: 'die',
							}
						},
						femininum: {
							singular: {
								nominativ: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								genitiv: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativ: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),									
								akkusativ: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativDer: 
											'die ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								genitivDer: 
											'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativDer: 
											'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								akkusativDer: 
											'die ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativEin: 
											'eine ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								genitivEin: 
											'einer ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativEin: 
											'einer ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								akkusativEin: 
											'eine ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativBestimmterArtikel: 'die',
								genitivBestimmterArtikel: 'der',
								dativBestimmterArtikel: 'der',
								akkusativBestimmterArtikel: 'die',
		
								nominativPersonalpronomen: 'sie',
								genitivPersonalpronomen: 'ihrer',
								dativPersonalpronomen: 'ihr',
								akkusativPersonalpronomen: 'sie',
		
								nominativWelcher: 'welche',
								genitivWelcher: 'welcher',
								dativWelcher: 'welcher',
								akkusativWelcher: 'welche',
		
								nominativPossesivpronomenMaskulinum: 'ihr',
								genitivPossesivpronomenMaskulinum: 'ihres',
								dativPossesivpronomenMaskulinum: 'ihrem',
								akkusativPossesivpronomenMaskulinum: 'ihren',
		
								nominativPossesivpronomenFemininum: 'ihre',
								genitivPossesivpronomenFemininum: 'ihrer',
								dativPossesivpronomenFemininum: 'ihrer',
								akkusativPossesivpronomenFemininum: 'ihre',
		
								nominativPossesivpronomenNeutrum: 'ihr',
								genitivPossesivpronomenNeutrum: 'ihres',
								dativPossesivpronomenNeutrum: 'ihrem',
								akkusativPossesivpronomenNeutrum: 'ihr',
		
								nominativPossesivpronomenPlural: 'ihre',
								genitivPossesivpronomenPlural: 'ihrer',
								dativPossesivpronomenPlural: 'ihren',
								akkusativPossesivpronomenPlural: 'ihre',
							},
							plural: {
								nominativ: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								
								genitiv: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								
								dativ: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								
								akkusativ: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativDer: 
											'die ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								genitivDer: 
											'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativDer: 
											'den ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								akkusativDer: 
											'die ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativBestimmterArtikel: 'die',
								genitivBestimmterArtikel: 'der',
								dativBestimmterArtikel: 'den',
								akkusativBestimmterArtikel: 'die',
		
							}
						},
						neutrum: {
							singular: {
								nominativ: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								genitiv: 			(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 's' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativ: 				(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								akkusativ: 			(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativDer: 
											'das ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								genitivDer: 
											'des ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 's' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativDer: 
											'dem ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								akkusativDer: 
											'das ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativEin: 
											'ein ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 's ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								genitivEin: 
											'eines ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 's' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativEin: 
											'einem ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								akkusativEin: 
											'ein ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 's ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativBestimmterArtikel: 'das',
								genitivBestimmterArtikel: 'des',
								dativBestimmterArtikel: 'dem',
								akkusativBestimmterArtikel: 'das',
		
								nominativPersonalpronomen: 'es',
								genitivPersonalpronomen: 'seiner',
								dativPersonalpronomen: 'ihm',
								akkusativPersonalpronomen: 'es',
		
								nominativWelcher: 'welches',
								genitivWelcher: 'welchen',
								dativWelcher: 'welchem',
								akkusativWelcher: 'welches',
		
								nominativPossesivpronomenMaskulinum: 'sein',
								genitivPossesivpronomenMaskulinum: 'seines',
								dativPossesivpronomenMaskulinum: 'seinem',
								akkusativPossesivpronomenMaskulinum: 'seinen',
		
								nominativPossesivpronomenFemininum: 'seine',
								genitivPossesivpronomenFemininum: 'seiner',
								dativPossesivpronomenFemininum: 'seiner',
								akkusativPossesivpronomenFemininum: 'seine',
		
								nominativPossesivpronomenNeutrum: 'sein',
								genitivPossesivpronomenNeutrum: 'seines',
								dativPossesivpronomenNeutrum: 'seinem',
								akkusativPossesivpronomenNeutrum: 'sein',
		
								nominativPossesivpronomenPlural: 'seine',
								genitivPossesivpronomenPlural: 'seiner',
								dativPossesivpronomenPlural: 'seinen',
								akkusativPossesivpronomenPlural: 'seine',
							},
							plural: {
								nominativ: 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								genitiv: 			(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativ: 
								endsWithE ? 		(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n' : '') + noun + 'n ' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''): 
													(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								akkusativ: 			(prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + ' ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativDer: 
											'die ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								genitivDer: 
											'der ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 's' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativDer: 
											'den ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								akkusativDer: 
											'die ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativEin: 
											'ein ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 's ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								genitivEin: 
											'eines ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + 's' + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								dativEin: 
											'einem ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 'n ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
								akkusativEin: 
											'ein ' + (prefix ? prefix + ' ' : '') + (adjectiv ? adjectiv + 's ' : '') + noun + (suffix ? (suffix.startsWith(',') ? suffix : ' ' + suffix) : ''),
		
								nominativBestimmterArtikel: 'die',
								genitivBestimmterArtikel: 'der',
								dativBestimmterArtikel: 'den',
								akkusativBestimmterArtikel: 'die',
							}
						}
					};
					return nounCases[gender];
				}
			}
		
			//Funktion, um einen zufälligen Text aus einem Array auszuwählen
			function getRandomText(arr) {
				const index = Math.floor(Math.random() * arr.length);
				return arr[index];
			}
		
			//Funktion, um einen zufälligen Text aus einem Array in einem Array auszuwählen
			function getRandomElementFromArray(arr) {
				return arr[Math.floor(Math.random() * arr.length)];
			}
		
			//Array, um die generierten Buchtitel zu speichern
			let generatedTitles = [];
		
			//Funktion zum Generieren eines einzigartigen Buchtitels
			const beliebiges = [
				getRandomElementFromArray(handwerkPlural),
				getRandomElementFromArray(völkerPlural),
				getRandomElementFromArray(klassenPlural),
				getRandomElementFromArray(region),
				getRandomElementFromArray(gegenständePlural),
				getRandomElementFromArray(schulenDerMagie),
				getRandomElementFromArray(religionSingular),
				getRandomElementFromArray(monsterPlural),
				getRandomElementFromArray(waffenPlural),
				getRandomElementFromArray(siedlung),
				getRandomElementFromArray(ereignisPlural),
				getRandomElementFromArray(land),
				getRandomElementFromArray(domäne),
				getRandomElementFromArray(kleidungsstückePlural)
			];
			const Handwerk = getRandomText(handwerkPlural);
			const Volk = getRandomText(völkerPlural);
			const Monster = getRandomText(monsterPlural);
			const Präfix = getRandomText(präfixe);
			const Klasse = getRandomText(klassenPlural);
			const Region = getRandomText(region);
			const Gegenstand = getRandomText(gegenständePlural);
			const SchuleDerMagie = getRandomText(schulenDerMagie);
			const Windrichtung = getRandomText(windrichtungen);
			const Beliebiges = getRandomText(beliebiges);
			const Religion = getRandomText(religionSingular);
			const Siedlung = getRandomText(siedlung);
			const Kontinent = getRandomText(kontinent);
			const Gottheit = getRandomText(gottheit);
			const Waffe = getRandomText(waffenPlural);
			const Ereignis = getRandomText(ereignisPlural);
			const Land = getRandomText(land);
			const Domäne = getRandomText(domäne);
			const Rüstung = getRandomText(kleidungsstückePlural);
		
			//Erstellt die Konstante für deklinierte Nomen
			
			//const declined Präfixe
		
			const declinedHandwerkSingular = declineNoun(handwerkSingularName, handwerkSingularGeschlecht, handwerkSingularAnzahl, handwerkSingularAdjektiv, handwerkSingularPräfix, handwerkSingularSuffix);
			const declinedHandwerkPlural = declineNoun(handwerkPluralName, handwerkPluralGeschlecht, handwerkPluralAnzahl, handwerkPluralAdjektiv, handwerkPluralPräfix, handwerkPluralSuffix);
			
			const declinedGegenständeSingular = declineNoun(gegenständeSingularName, gegenständeSingularGeschlecht, gegenständeSingularAnzahl, gegenständeSingularAdjektiv, gegenständeSingularPräfix, gegenständeSingularSuffix);
			const declinedGegenständePlural = declineNoun(gegenständePluralName, gegenständePluralGeschlecht, gegenständePluralAnzahl,gegenständePluralAdjektiv, gegenständePluralPräfix, gegenständePluralSuffix);
			
			const declinedVölkerSingular = declineNoun(völkerSingularName, völkerSingularGeschlecht, völkerSingularAnzahl, völkerSingularAdjektiv, völkerSingularPräfix, völkerSingularSuffix);
			const declinedVölkerPlural = declineNoun(völkerPluralName, völkerPluralGeschlecht, völkerPluralAnzahl, völkerPluralAdjektiv, völkerPluralPräfix, völkerPluralSuffix);
		
			const declinedMonsterSingular = declineNoun(monsterSingularName, monsterSingularGeschlecht, monsterSingularAnzahl, monsterSingularAdjektiv, monsterSingularPräfix, monsterSingularSuffix);
			const declinedMonsterPlural = declineNoun(monsterPluralName, monsterPluralGeschlecht, monsterPluralAnzahl,monsterPluralAdjektiv, monsterPluralPräfix, monsterPluralSuffix);
		
			const declinedKlassenSingular = declineNoun(klassenSingularName, klassenSingularGeschlecht, klassenSingularAnzahl, klassenSingularAdjektiv, klassenSingularPräfix, klassenSingularSuffix);
			const declinedKlassenPlural = declineNoun(klassenPluralName, klassenPluralGeschlecht, klassenPluralAnzahl, klassenPluralAdjektiv, klassenPluralPräfix, klassenPluralSuffix);
		
			const declinedDomäne = declineNoun(domäneName, domäneGeschlecht, domäneAnzahl, domäneAdjektiv, domänePräfix, domäneSuffix);
		
			const declinedSchuleDerMagie = declineNoun(schulenDerMagieName, schulenDerMagieGeschlecht, schulenDerMagieAnzahl, schulenDerMagieAdjektiv, schulenDerMagiePräfix, schulenDerMagieSuffix);
			
			const declinedGottheit = declineNoun(gottheitName, gottheitGeschlecht, gottheitAnzahl, gottheitAdjektiv, gottheitPräfix, gottheitSuffix);
		
			const declinedEreignisSingular = declineNoun(ereignisSingularName, ereignisSingularGeschlecht, ereignisSingularAnzahl, ereignisSingularAdjektiv, ereignisSingularPräfix, ereignisSingularSuffix);
			const declinedEreignisPlural = declineNoun(ereignisPluralName, ereignisPluralGeschlecht, ereignisPluralAnzahl, ereignisPluralAdjektiv, ereignisPluralPräfix, ereignisPluralSuffix);
		
			const declinedReligionSingular = declineNoun(religionSingularName, religionSingularGeschlecht, religionSingularAnzahl, religionSingularAdjektiv, religionSingularPräfix, religionSingularSuffix);
			
			const declinedWaffenSingular = declineNoun(waffenSingularName, waffenSingularGeschlecht, waffenSingularAnzahl, waffenSingularAdjektiv, waffenSingularPräfix, waffenSingularSuffix);
			const declinedWaffenPlural = declineNoun(waffenPluralName, waffenPluralGeschlecht, waffenPluralAnzahl, waffenPluralAdjektiv, waffenPluralPräfix, waffenPluralSuffix);
			
			const declinedKleidungsstückeSingular = declineNoun(kleidungsstückeSingularName, kleidungsstückeSingularGeschlecht, kleidungsstückeSingularAnzahl, kleidungsstückeSingularAdjektiv, kleidungsstückeSingularPräfix, kleidungsstückeSingularSuffix);
			const declinedKleidungsstückePlural = declineNoun(kleidungsstückePluralName, kleidungsstückePluralGeschlecht, kleidungsstückePluralAnzahl, kleidungsstückePluralAdjektiv, kleidungsstückePluralPräfix, kleidungsstückePluralSuffix);
		
			const bookTitleIdeas = [
			//Array für das Genre Allgemeines
			...(document.getElementById("checkboxAllgemeines").checked ? [
				`${Präfix ? Präfix + ' ' : ''}${declinedGegenständePlural.plural.nominativ}`,	
				`${Präfix ? Präfix + ' ' : ''}Varianten ${declinedWaffenPlural.plural.genitivDer}`,
				`${Präfix ? Präfix + ' ' : ''}Verwendungen für ${declinedGegenständePlural.plural.akkusativ} im Kampf`,
				`Eine ${Präfix ? Präfix + ' ' : ''}Begutachtung von ${declinedWaffenPlural.plural.dativ}`, 
				`Der ${Präfix ? Präfix + ' ' : ''}Katalog der ${declinedGegenständePlural.plural.genitiv}`,
				`Die ${Präfix ? Präfix + ' ' : ''}Entwicklung der ${declinedGegenständePlural.plural.genitiv}`,
				`Die ${Präfix ? Präfix + ' ' : ''}Entstehungsgeschichte ${declinedGegenständeSingular.singular.genitivDer}`,
				`${Präfix ? Präfix + ' ' : ''}Anleitungen zur Verwendung von ${declinedGegenständePlural.plural.dativ}`,
				`${Präfix ? Präfix + ' ' : ''}Verwendungszwecke für ${declinedWaffenPlural.plural.nominativ} im Einsatz gegen ${declinedKleidungsstückePlural.plural.akkusativ}`,
				`Der ${Präfix ? Präfix + ' ' : ''}Ratgeber für ${declinedKlassenSingular.singular.akkusativ}\-Begriffe`,

				//`${Präfix ? Präfix + ' ' : ''}${Beliebiges}: Eine Geschichte`, 
				//`${Präfix ? Präfix + ' ' : ''}Fakten über ${Beliebiges}`, 
				//`${Präfix ? Präfix + ' ' : ''}Legenden von ${Beliebiges}`, 
				//`${Präfix ? Präfix + ' ' : ''}Nutzen für ${Beliebiges}`, 
				//`${Beliebiges}: Die unerzählte Wahrheit`, 
				//`${Beliebiges} für Kinder`, 
				//`Ein Anfängerhandbuch über ${Beliebiges}`, 
				//`Ein Leitfaden zu ${Beliebiges}`, 
				//`Eine Abhandlung über ${Beliebiges}`, 
				//`Über ${Beliebiges}`,
				//`Eine kurze Geschichte über ${Beliebiges}`,
				//`Eine Enzyklopädie über ${Beliebiges}`,
				//`Eine Analyse von ${Beliebiges}`,
				//`Ein Expose über ${Präfix ? Präfix + ' ' : ''}${Beliebiges}`,
				//`Eigenschaften von ${Beliebiges}`,
				//`Buch der ${Beliebiges}`, 
				//`Sammelband mit Fakten über ${Beliebiges}`,
				//`Kodex der ${Beliebiges}`,
				//`Kompendium der ${Beliebiges}`,
				//`Zusammengestellte Geschichte von ${Beliebiges}`,
				//`In Bezug auf ${Beliebiges}`,
				//`Berühmte ${Beliebiges} von ${Region}`,
				//`Glossar der ${Beliebiges}\-Begriffe`,
				//`Lexikon über ${Beliebiges}`,
				//`Handbuch der ${Beliebiges}`,
				//`Sammelwerk über ${Beliebiges}`,
				//`Muster in der Geschichte von ${Beliebiges}`,
				//`${Beliebiges} betreffend`,
				//`Geheimnisse von ${Beliebiges}`,
				//`Die vollständige Geschichte von ${Beliebiges}`,
				//`Die kompakte Geschichte von ${Beliebiges}`,
				//`Wahrheiten und Lügen über ${Beliebiges}`,
				//`Foliant der ${Präfix ? Präfix + ' ' : ''}${Beliebiges}`,
				//`Schriften über ${Beliebiges}`,
			] : []),

			//Array für das Genre Völkerkunde
			...(document.getElementById("checkboxVölkerkunde").checked ? [
				`${declinedHandwerkPlural.plural.nominativ} ${declinedVölkerPlural.plural.genitivDer}`,
				`${Präfix ? Präfix + ' ' : ''}${declinedKlassenPlural.plural.nominativ} aus der Region ${Region}`, 
				`${Präfix ? Präfix + ' ' : ''}${declinedKlassenPlural.plural.nominativ} der ${declinedVölkerPlural.plural.genitiv}`,
				`${Präfix ? Präfix + ' ' : ''}${declinedGegenständePlural.plural.nominativ} aus Legenden`,
				`${Präfix ? Präfix + ' ' : ''}${declinedGegenständePlural.plural.nominativ} der ${declinedVölkerPlural.plural.genitiv}`,
				`${Präfix ? Präfix + ' ' : ''}Fähigkeiten der ${declinedKlassenPlural.plural.genitiv}`,
				`${Präfix ? Präfix + ' ' : ''}Artefakte der ${declinedVölkerPlural.plural.genitiv}`,
				`${Präfix ? Präfix + ' ' : ''}Helden der ${declinedVölkerPlural.plural.genitiv}`, 
				`${Präfix ? Präfix + ' ' : ''}Helden aus ${Siedlung}`, 
				`${Präfix ? Präfix + ' ' : ''}Sprachen der ${declinedMonsterPlural.plural.genitiv}`,
				`${Präfix ? Präfix + ' ' : ''}Herrscher von ${Land}`, 
				`${Präfix ? Präfix + ' ' : ''}Herrscher aus der Region ${Region}`, 
				`${Präfix ? Präfix + ' ' : ''}Herrscher der ${declinedVölkerPlural.plural.genitiv}`, 
				`${declinedVölkerPlural.plural.nominativ} \-\ ${declinedVölkerPlural.plural.nominativ} Wörterbuch`, 
				`${Präfix ? Präfix + ' ' : ''}Lieder der ${declinedVölkerPlural.plural.genitiv}`, 
				`${Präfix ? Präfix + ' ' : ''}Geschichten aus der Region ${Region}`, 
				`${Präfix ? Präfix + ' ' : ''}Erzählungen der ${declinedVölkerPlural.plural.genitiv}`,
				`${Präfix ? Präfix + ' ' : ''}Riten für ${declinedKlassenPlural.plural.akkusativ}`, 
				`${Präfix ? Präfix + ' ' : ''}Riten der ${Windrichtung}en ${declinedVölkerPlural.plural.genitiv}`, 
				`${Präfix ? Präfix + ' ' : ''}Gerüchte aus ${Siedlung}`, 
				`${Präfix ? Präfix + ' ' : ''}Lieder aus der Region ${Region}`, 
				`Eine ${Präfix ? Präfix + ' ' : ''}Berichterstattung über ${declinedEreignisPlural.plural.akkusativ}`,
				`${Präfix ? Präfix + ' ' : ''}Traditionen der ${declinedVölkerPlural.plural.genitiv}`,
				`${Präfix ? Präfix + ' ' : ''}Traditionen der ${declinedKlassenPlural.plural.genitiv}`,
				`Berühmte Familien aus der Region ${Region}`,
				`Wappenkunde aus der Region ${Region}`,
				`${Präfix ? Präfix + ' ' : ''}Hybride der ${declinedVölkerPlural.plural.genitiv}`,
				`${Präfix ? Präfix + ' ' : ''}Hymnen der ${declinedVölkerPlural.plural.genitiv}`,
				`${Präfix ? Präfix + ' ' : ''}Anführer aus der Region ${Region}`,
				`${Präfix ? Präfix + ' ' : ''}Lebensräume von ${declinedVölkerPlural.plural.dativ}`,
				`${Präfix ? Präfix + ' ' : ''}Mysterien aus der Region ${Region}`,
				`${Präfix ? Präfix + ' ' : ''}Rituale der ${declinedVölkerPlural.plural.genitiv}`,
				`Der erste ${declinedKlassenSingular.singular.nominativ}`,
			] : []),		
			
			//Array für das Genre Belletristik
			...(document.getElementById("checkboxBelletristik").checked ? [
				`Titel für Belletristik Buch`,
			] : []),
		
			//Array für das Genre Biographie
			...(document.getElementById("checkboxBiographie").checked ? [
				`Titel für Biographie Buch`,
			] : []),
		
			//Array für das Genre Geographie
			...(document.getElementById("checkboxGeographie").checked ? [
				`Der ${Präfix ? Präfix + ' ' : ''}Atlas über die Region ${Region}`,
				`${Präfix ? Präfix + ' ' : ''}Reisen in ${Siedlung}`,
			] : []),
		
			//Array für das Genre Geschichte
			...(document.getElementById("checkboxGeschichte").checked ? [
				`Titel für Geschichte Buch`,
			] : []),

			//Array für das Genre SportFreizeit
			...(document.getElementById("checkboxSportFreizeit").checked ? [
				`Titel für SportFreizeit Buch`,
			] : []),
		
			//Array für das Genre Handwerk
			...(document.getElementById("checkboxHandwerk").checked ? [
				`Titel für Handwerk Buch`,
			] : []),
		
			//Array für das Genre Heilkunde
			...(document.getElementById("checkboxHeilkunde").checked ? [
				`Titel für Heilkunde Buch`,
			] : []),
			
			//Array für das Genre Kinderbuch
			...(document.getElementById("checkboxKinderbuch").checked ? [
				`Titel für Kinderbuch Buch`,
			] : []),
		
			//Array für das Genre Kochkunst
			...(document.getElementById("checkboxKochkunst").checked ? [
				`Titel für Kochkunst Buch`,
			] : []),
		
			//Array für das Genre Kunst
			...(document.getElementById("checkboxKunst").checked ? [
				`Titel für Kunst Buch`,
			] : []),

			//Array für das Genre Magie
			...(document.getElementById("checkboxMagie").checked ? [
				`${declinedSchuleDerMagie.singular.nominativDer} der ${declinedVölkerPlural.plural.genitiv}`,
				`${Präfix ? Präfix + ' ' : ''}Zauber ${declinedSchuleDerMagie.singular.genitivDer}`, 
				`Verteidigung gegen ${declinedSchuleDerMagie.singular.akkusativDer}`,
				`Grundlegendes über ${declinedSchuleDerMagie.singular.akkusativDer}`,
				`${Präfix ? Präfix + ' ' : ''}Mythen über ${declinedSchuleDerMagie.singular.akkusativDer}`,
				`Praktische Anwendungen für ${declinedSchuleDerMagie.singular.akkusativDer}`, 
				`Heilende Anwendungen ${declinedSchuleDerMagie.singular.genitivDer}`,
				`${Präfix ? Präfix + ' ' : ''}Verwendungszwecke für ${declinedSchuleDerMagie.singular.akkusativDer} in Zeiten des Friedens`,
			] : []),
		
			//Array für das Genre Musik
			...(document.getElementById("checkboxMusikTanzTheater").checked ? [
				`Titel für MusikTanzTheater Buch`,
			] : []),
			
			//Array für das Genre Naturkunde
			...(document.getElementById("checkboxNaturkunde").checked ? [
				`${Präfix ? Präfix + ' ' : ''}Verwendungszwecke für Teile von ${declinedMonsterPlural.plural.dativ}`,
				`${declinedMonsterPlural.plural.nominativ} seziert`,
				`${Präfix ? Präfix + ' ' : ''}${declinedMonsterPlural.plural.nominativ}`,
				`${declinedMonsterPlural.plural.akkusativ} züchten`,
				`${Präfix ? Präfix + ' ' : ''}Kreuzzüchtungen von ${declinedMonsterPlural.plural.dativ}`,
				`Die ${Präfix ? Präfix + ' ' : ''}Ökologie der ${declinedMonsterPlural.plural.genitiv}`,
				`${Präfix ? Präfix + ' ' : ''}Lebensräume von ${declinedMonsterPlural.plural.dativ}`,
				`Das ${Präfix ? Präfix + ' ' : ''}Paarungsverhalten der ${declinedMonsterPlural.plural.genitiv}`,
			] : []),
		
			//Array für das Genre Philosophie
			...(document.getElementById("checkboxPhilosophie").checked ? [
				`Titel für Philosophie Buch`,
			] : []),
		
			//Array für das Genre Psychologie
			...(document.getElementById("checkboxPsychologie").checked ? [
				`Titel für Psychologie Buch`,
			] : []),
		
			//Array für das Genre Recht
			...(document.getElementById("checkboxRecht").checked ? [
				`Titel für Recht Buch`,
			] : []),
		
			//Array für das Genre Religion
			...(document.getElementById("checkboxReligion").checked ? [
				`${Präfix ? Präfix + ' ' : ''}Gottheiten der ${declinedVölkerPlural.plural.genitiv}`, 
				`${Präfix ? Präfix + ' ' : ''}Wunder von ${declinedGottheit.singular.nominativ}`, 
				`${Präfix ? Präfix + ' ' : ''}Gebete an ${declinedGottheit.singular.nominativ}`, 
				`${declinedReligionSingular.singular.nominativDer} ${declinedVölkerPlural.plural.genitivDer}`,
				`Die ${Präfix ? Präfix + ' ' : ''}Ökonomie ${declinedReligionSingular.singular.genitivDer} in ${Land}`,
				`${Präfix ? Präfix + ' ' : ''}Symbole von ${declinedGottheit.singular.nominativ}`,
				`${Präfix ? Präfix + ' ' : ''}Verwendungszwecke für ${declinedDomäne.singular.akkusativDer} in Zeiten des Krieges`,
			] : []),
			
			//Array für das Genre Sprache
			...(document.getElementById("checkboxSprache").checked ? [
				`Titel für Sprache Buch`,
			] : []),
		]
		
			return getRandomText(bookTitleIdeas);
		}
		
		//Funktion zum Generieren des Namens basierend auf Geschlecht und Volk
		let autorGeschlecht = '';
		let autorVolk = '';
		let autorVorname = '';
		let autorNachname = '';
		
		function generateAuthorName(autorGeschlechtRoll, autorVolkRoll) {
			autorGeschlecht = autorGeschlechtRoll <= 49 ? 'männlich' : (autorGeschlechtRoll <= 98 ? 'weiblich' : 'nicht-binär');
			autorVolk = autorVolkRoll <= 49 ? 'Mensch' : autorVolkRoll <= 59 ? 'Zwerg' : autorVolkRoll <= 69 ? 'Elf' : autorVolkRoll <= 74 ? 'Halbling' : autorVolkRoll <= 79 ? 'Gnom' : autorVolkRoll <= 84 ? 'Halbelf' : autorVolkRoll <= 89 ? 'Halbork' : autorVolkRoll <= 94 ? 'Drachenblütiger' : 'Tiefling';
			autorVorname = generateAutorVornameForAutorGeschlechtAndAutorVolk(autorGeschlecht, autorVolk);
			autorNachname = generateAutorNachnameForAutorVolk(autorVolk);
			return `${autorVorname} ${autorNachname}`;
		}
		//Funktion, um einen zufälligen Text aus einem Array auszuwählen
		function getRandomText(arr) {
			const index = Math.floor(Math.random() * arr.length);
			return arr[index];
		}
		
		//Funktion, um einen Vornamen für den Autor basierend auf dem Geschlecht und dem Volk auszuwählen
		function generateAutorVornameForAutorGeschlechtAndAutorVolk(autorGeschlecht, autorVolk) {
			if (autorGeschlecht === 'männlich') {
				switch (autorVolk) {
					case 'Mensch':
						return getRandomText(vornameMaennlichMensch);
					case 'Zwerg':
						return getRandomText(vornameMaennlichZwerg);
					case 'Elf':
						return getRandomText(vornameMaennlichElf);
					case 'Halbling':
						return getRandomText(vornameMaennlichHalbling);
					case 'Gnom':
						return getRandomText(vornameMaennlichGnom);
					case 'Halbelf':
						return getRandomText(vornameMaennlichHalbelf);
					case 'Halbork':
						return getRandomText(vornameMaennlichHalbork);
					case 'Drachenblütiger':
						return getRandomText(vornameMaennlichDrachenbluetiger);
					case 'Tiefling':
						return getRandomText(vornameMaennlichTiefling);
				}
			} else if (autorGeschlecht === 'weiblich') {
				switch (autorVolk) {
					case 'Mensch':
						return getRandomText(vornameWeiblichMensch);
					case 'Zwerg':
						return getRandomText(vornameWeiblichZwerg);
					case 'Elf':
						return getRandomText(vornameWeiblichElf);
					case 'Halbling':
						return getRandomText(vornameWeiblichHalbling);
					case 'Gnom':
						return getRandomText(vornameWeiblichGnom);
					case 'Halbelf':
						return getRandomText(vornameWeiblichHalbelf);
					case 'Halbork':
						return getRandomText(vornameWeiblichHalbork);
					case 'Drachenblütiger':
						return getRandomText(vornameWeiblichDrachenbluetiger);
					case 'Tiefling':
						return getRandomText(vornameWeiblichTiefling);
				}
			} else if (autorGeschlecht === 'nicht-binär') {
				switch (autorVolk) {
					case 'Mensch':
						return getRandomText(vornameNichtbinaerMensch);
					case 'Zwerg':
						return getRandomText(vornameNichtbinaerZwerg);
					case 'Elf':
						return getRandomText(vornameNichtbinaerElf);
					case 'Halbling':
						return getRandomText(vornameNichtbinaerHalbling);
					case 'Gnom':
						return getRandomText(vornameNichtbinaerGnom);
					case 'Halbelf':
						return getRandomText(vornameNichtbinaerHalbelf);
					case 'Halbork':
						return getRandomText(vornameNichtbinaerHalbork);
					case 'Drachenblütiger':
						return getRandomText(vornameNichtbinaerDrachenbluetiger);
					case 'Tiefling':
						return getRandomText(vornameNichtbinaerTiefling);
				}
			}
		}
		//Funktion, um einen Nachnamen für den Autor basierend auf dem Geschlecht und dem Volk auszuwählen
		function generateAutorNachnameForAutorVolk(autorVolk) {
			switch (autorVolk) {
				case 'Mensch':
					return getRandomText(nachnameMensch);
				case 'Zwerg':
					return getRandomText(nachnameZwerg);
				case 'Elf':
					return getRandomText(nachnameElf);
				case 'Halbling':
					return getRandomText(nachnameHalbling);
				case 'Gnom':
					return getRandomText(nachnameGnom);
				case 'Halbelf':
					return getRandomText(nachnameHalbelf);
				case 'Halbork':
					return getRandomText(nachnameHalbork);
				case 'Drachenblütiger':
					return getRandomText(nachnameDrachenbluetiger);
				case 'Tiefling':
					return getRandomText(nachnameTiefling);
			}
		}
		
		//Generiert Vornamen und Nachnamen für verschiedene Geschlechter und Völker
		
		//Array mit Vornamen für männliche Menschen
		const vornameMaennlichMensch = ["Adam", "Adelard", "Aelius", "Aetius", "Agni", "Agrippa", "Airell", "Airic", "Alan", "Alaric", "Albanus", "Albrecht", "Albus", "Aldous", "Alexandre", "Alfonso", "Allexander", "Alonso", "Ambroys", "Ame", "Andri", "Andriet", "Anghus", "Anselm", "Anthoine", "Anthon", "Antonius", "Anvindr", "Aodh", "Appius", "Aquilinus", "Arcos", "Arnaut", "Arnold", "Arturo", "Arvid", "Asger", "Asmund", "Atilus", "Augustus", "Aurelius", "Avitus", "Balbus", "Baltasar", "Bardon", "Bartoleme", "Bearacb", "Benedick", "Benito", "Berhart", "Bernard", "Bernat", "Bertram", "Bevyn", "Bjarte", "Bjorg", "Bjorn", "Blandus", "Blasco", "Blasius", "Boden", "Bran", "Brandr", "Brandt", "Brasil", "Bredon", "Brian", "Bricriu", "Brutus", "Bryant", "Brynjar", "Cadman", "Caelius", "Caius", "Calder", "Caradoc", "Carlos", "Casian", "Caspar", "Cassius", "Cato", "Cedric", "Celsus", "Charles", "Charlot", "Clas", "Claudius", "Clerebold", "Cloelius", "Cnaeus", "Colborn", "Colin", "Conalt", "Conchobar", "Condon", "Conrad", "Crispus", "Cristin", "Cristoff", "Cuyler", "Cyprianus", "Damian", "Darcy", "Denis", "Devin", "Diego", "Dieterich", "Diggory", "Dillion", "Diocletianus", "Domingo", "Donaghy", "Donall", "Drogo", "Duer", "Durant", "Edouart", "Eghan", "Egil", "Egnatius", "Einar", "Engelhart", "Ennius", "Enrique", "Eremon", "Erhart", "Eric", "Erland", "Ernault", "Escobar", "Ethor", "Ettor", "Everard", "Ewyn", "Fabricius", "Faustus", "Felix", "Ferghus", "Fernando", "Fiske", "Floquart", "Folkvar", "Franciso", "Frantz", "Frederick", "Fritjof", "Fritz", "Frode", "Gabriel", "Gaius", "Galleren", "Galvyn", "Garcia", "Gaspar", "Gaultier", "Geir", "Geoffrey", "Gerald", "Gerhart", "Germanus", "Gil", "Gilbert", "Gildas", "Gilles", "Gnaeus", "Godfrey", "Gomes", "Goncalo", "Gostantin", "Gotleib", "Gunter", "Guy", "Halvar", "Hans", "Hartmann", "Harvey", "Heintz", "Hemming", "Henry", "Herman", "Heward", "Hjalmar", "Hjortr", "Horatius", "Hubert", "Hugh", "Hugo", "Iden", "Imbert", "Ingimarr", "Iovianus", "Irven", "Iulius", "Ivar", "Jacob", "Jacques", "Jacquot", "Jayme", "Jean", "Jehannin", "Jeremias", "Joan", "Jocelyn", "John", "Jorg", "Jorge", "Jose", "Juan", "Karll", "Karney", "Kayne", "Kelvyn", "Kilian", "Knud", "Kunsgnos", "Lance", "Leif", "Leigh", "Linhart", "Liufr", "Lorentz", "Louis", "Louys", "Loys", "Lucilius", "Ludwig", "Maccus", "Machin", "Manfred", "Manius", "Manning", "Marcus", "Marius", "Martin", "Marx", "Mateu", "Maximus", "Melchor", "Mertin", "Michel", "Miguel", "Miles", "Mille", "Morelet", "Moritz", "Moryn", "Neale", "Nicholas", "Nicolas", "Nicolle", "Norman", "Octavius", "Oddr", "Odo", "Olin", "Ormr", "Osswald", "Ott", "Oudart", "Ove", "Owyn", "Pascual", "Paulus", "Pedro", "Percival", "Perrin", "Peter", "Phillippe", "Pierre", "Porico", "Pryderi", "Quintilian", "Ralf", "Ramiro", "Ramon", "Randal", "Rannulfr", "Raymond", "Reaghan", "Regnault", "Regulus", "Reynard", "Richard", "Richart", "Robert", "Robinet", "Rodrigo", "Roger", "Roland", "Rolf", "Rudolff", "Ruprecht", "Sabastian", "Salvador", "Sauvage", "Servius", "Sewastian", "Sigmund", "Sigurd", "Simon", "Skari", "Snorri", "Steffan", "Sten", "Stigandr", "Stigr", "Sven", "Symon", "Tacitus", "Talbot", "Taliesin", "Tanguy", "Theobald", "Theodoric", "Thoman", "Thomas", "Tiernay", "Timm", "Tomas", "Tristan", "Trygve", "Turi", "Ulf", "Ulrich", "Valeriano", "Vali", "Vallentin", "Varius", "Vidar", "Vincent", "Wendel", "Wilhelm", "William", "Wolff", "Wolfgang", "Wymar", "Ynigo", "Aarwin", "Abbo", "Abelmir", "Ablasion", "Adalhard", "Adalric", "Adaon", "Adario", "Adelhelm", "Adhelm", "Adoran", "Adran", "Aedan", "Aedin", "Aeldereth", "Aelfwin", "Agribert", "Agusto", "Aidan", "Ailfir", "Ailgrimm", "Alarwin", "Alatheio", "Alatheion", "Albin", "Albinus", "Alborn", "Alboron", "Albuin", "Aldebaran", "Aldec", "Aldemar", "Aldewein", "Aldo", "Alerich", "Alessandro", "Almadeo", "Almanzo", "Alold", "Alondro", "Alonju", "Aloran", "Alphak", "Alricilian", "Alricio", "Alrico", "Alriego", "Alrik", "Alriklas", "Alverigo", "Alveron", "Alvin", "Amaldo", "Amaldus", "Amando", "Amato", "Ambros", "Amiel", "Amir", "Amirato", "Andaryn", "Andraus", "Andronicus", "Aneirin", "Angbart", "Angfold", "Angilbert", "Angildbert", "Angold", "Angrimmo", "Angrist", "Angroban", "Angrond", "Angwart", "Anjun", "Annlir", "Anselmo", "Anselt", "Anshag", "Anshold", "Answin", "Apreno", "Aranol", "Arbas", "Arbel", "Arbolf", "Ardach", "Ardan", "Ardin", "Ardo", "Ardor", "Areus", "Argelione", "Argon", "Argos", "Ariano", "Ariosto", "Arlan", "Armado", "Arn", "Arnbold", "Arngrim", "Arngrimm", "Arno", "Arnod", "Arnulf", "Arnwulf", "Arras", "Arsan", "Arso", "Arvin", "Ascanio", "Asmodeus", "Assanto", "Assavo", "Astagius", "Astratus", "Aurentian", "Aureus", "Avenus", "Avessandro", "Avon", "Avus", "Azulejo", "Baduar", "Baerjan", "Baeromar", "Baerow", "Balbiano", "Baldomir", "Baldos", "Balinor", "Balphemor", "Baltram", "Banthoch", "Bardo", "Bardojoz", "Bärfried", "Barjed", "Barnabas", "Barnhelm", "Barno", "Basilio", "Basilius", "Basin", "Bastan", "Batholo", "Belamir", "Belch", "Beldenor", "Belen", "Belenus", "Belfionn", "Belhalmar", "Belhamid", "Belharion", "Bellermin", "Belshiran", "Belshirasmus", "Belshirion", "Belshiron", "Bembo", "Bennwir", "Benvenuto", "Beolf", "Beowein", "Beppo", "Berfried", "Berman", "Berndrich", "Bernfried", "Bernhelm", "Bernhold", "Berschin", "Berwin", "Berynn", "Beylhardt", "Binsbart", "Birjew", "Biscarat", "Blakhador", "Blakhamed", "Blakharion", "Blakharon", "Blakkharazi", "Blako", "Bobar", "Bodar", "Bodariel", "Bogumil", "Bogumislaus", "Boldrino", "Bolzer", "Bomil", "Bonnaro", "Bor", "Borckhardt", "Bork", "Borkfried", "Bornjeff", "Borodariel", "Boromar", "Boromeo", "Boronathan", "Borondino", "Boronian", "Boronslob", "Boronus", "Borotin", "Borso", "Bosjew", "Bosper", "Boutsen", "Brajanius", "Brajanus", "Bram", "Branabas", "Branibart", "Branidahl", "Brano", "Branwin", "Branwyn", "Brauwin", "Brazirakus", "Bredo", "Brendan", "Brigon", "Brigonius", "Brin", "Brondan", "Bronfried", "Brun", "Brunhold", "Buchlieb", "Bundinus", "Bunsenhold", "Burgol", "Burian", "Cadron", "Cahusac", "Caio", "Caldaio", "Caldaios", "Caldor", "Callan", "Calman", "Calmano", "Calmanus", "Cambados", "Cangrande", "Carolan", "Cascado", "Cascador", "Cassus", "Cathal", "Caye", "Cazorlenyo", "Celio", "Cereborn", "Cessus", "Cet", "Cethem", "Charyb", "Charydion", "Charyptho", "Charyptian", "Charyptianus", "Charyptodemos", "Chiranor", "Chryptor", "Cian", "Cidris", "Ciro", "Claridor", "Colgan", "Conlai", "Conn", "Connar", "Coragon", "Coran", "Cordo", "Cordovan", "Cormac", "Cornaro", "Corvin", "Corvinius", "Corvo", "Crisirius", "Croenar", "Cuanu", "Cuil", "Cuilyn", "Curathan", "Curon", "Curthan", "Cusimo", "Cyberian", "Cynwal", "Daanje", "Dabbert", "Daerec", "Daimoniko", "Dalek", "Damiano", "Damion", "Damon", "Danilo", "Dankrath", "Dankward", "Danos", "Danow", "Dappert", "Dardulan", "Darian", "Darion", "Darpatio", "Dartan", "Darwolf", "Debrek", "Degenmar", "Delgado", "Delo", "Depold", "Deredan", "Derling", "Derosus", "Desiderio", "Detter", "Dettmar", "Dexter", "Dharayan", "Dhargon", "Dhuachall", "Diago", "Diamantes", "Diarmaiit", "Dietrad", "Dignatius", "Dingel", "Dirial", "Dirion", "Dolferius", "Dolgon", "Donewald", "Dorcas", "Dorgando", "Dorio", "Dozman", "Drachwill", "Draco", "Drego", "Dreufang", "Droderon", "Drugon", "Duchjo", "Dulgjew", "Dunarth", "Dunjew", "Dunjoscha", "Ealdawin", "Ealgar", "Eberhalm", "Eberhardt", "Eberhelm", "Eberrecht", "Eberwulf", "Ebruiel", "Eddo", "Edelbrecht", "Edelward", "Edil", "Edo", "Edorian", "Effardeon", "Effardianus", "Efferdan", "Efferdfrid", "Efferdin", "Efferdito", "Efferdo", "Efferdwin", "Effraen", "Effwyn", "Egiliano", "Egilmar", "Eglamo", "Egtor", "Eichbald", "Eichbart", "Eichert", "Eichward", "Elbrecht", "Elfert", "Elfwin", "Elgor", "Elkjow", "Elko", "Elkwin", "Ellio", "Elon", "Emano", "Emiglio", "Emilio", "Emmeran", "Emmeranus", "Enarch", "Enno", "Enolf", "Enrisco", "Eochaid", "Eolan", "Eran", "Eremalrik", "Erlan", "Erlmann", "Erlwulf", "Ernbrecht", "Erresto", "Ertzel", "Erzian", "Escalio", "Esidion", "Esindio", "Eslam", "Eslamo", "Espejo", "Etheo", "Etheon", "Ettel", "Eudo", "Eugenius", "Eulrich", "Ezzelino", "Faedred", "Faerwyn", "Faidon", "Falber", "Faldor", "Falgund", "Falk", "Falkris", "Fallonius", "Fangol", "Faralan", "Fardenin", "Farnion", "Farugo", "Federigo", "Feenwardt", "Feenwart", "Felian", "Ferdo", "Fergal", "Fergold", "Ferk", "Ferling", "Festo", "Feyderich", "Finglan", "Fingorn", "Finn", "Finnian", "Fiorenzo", "Firl", "Firndal", "Firnjan", "Firnmar", "Firnwulf", "Firunando", "Firundal", "Firunhard", "Firunian", "Firunislaus", "Firunjan", "Firunjef", "Firunjew", "Firunwin", "Firunz", "Firutin", "Flaminio", "Floro", "Florus", "Fluvianus", "Folnor", "Fork", "Fortius", "Fran", "Franio", "Frankwart", "Fredo", "Frenglion", "Friedbert", "Friedebald", "Friedebrecht", "Friedeman", "Friedensreich", "Frieder", "Fringlas", "Fronhardt", "Fulger", "Fürchtepraios", "Gabrino", "Gaftaro", "Gaiomo", "Galbo", "Galdur", "Galdurion", "Galjan", "Galvin", "Gansbert", "Gänsebald", "Gänsebrecht", "Gansefred", "Gansel", "Gansrik", "Garamold", "Gardelan", "Gareno", "Garian", "Garmwart", "Gartwald", "Garubald", "Gasparyn", "Gebbert", "Geldor", "Gelphart", "Geppert", "Gerbald", "Gerding", "Gerfrid", "Gerindor", "Gerio", "Gerion", "Gerlin", "Gernot", "Gero", "Geron", "Gerrik", "Gerwulf", "Gheam", "Ghonzo", "Ghorio", "Gial", "Gilborn", "Gildor", "Gileach", "Gille", "Gilm", "Gilmon", "Girolamo", "Giselhold", "Gishelm", "Gismondo", "Glacer", "Glacerian", "Glarik", "Glennir", "Globoman", "Gobrom", "Godehard", "Golbur", "Goldwart", "Golgarik", "Golgarion", "Golgor", "Golgoran", "Goljew", "Gonzalo", "Gorbal", "Gordo", "Gorge", "Gorwin", "Gosthelm", "Grabuter", "Grambold", "Grantel", "Greiffried", "Greifmuth", "Greifwin", "Griff", "Griffan", "Griffon", "Grifo", "Grifone", "Grimjan", "Grimm", "Grimmfold", "Grimmwulf", "Grimo", "Groben", "Grordan", "Grorthin", "Growin", "Grumo", "Gryffor", "Gualdo", "Gujadal", "Güldman", "Gumbald", "Gun", "Gundra", "Gunifred", "Gurvan", "Gwinnling", "Gwyn", "Gwyndan", "Gyldus", "Hadrik", "Hagen", "Hagenbert", "Hagrian", "Hagunald", "Hakaan", "Hal", "Haldan", "Haldoryn", "Haldur", "Halman", "Halmar", "Halmdahl", "Halvorion", "Halwart", "Hane", "Hanko", "Hargord", "Harmwulf", "Hartuwal", "Hartuwald", "Hasmut", "Hasrolf", "Havel", "Hazanyo", "Hechard", "Helborn", "Helburt", "Heldar", "Heleon", "Helkor", "Helmar", "Helmbrecht", "Helme", "Helmjew", "Helus", "Herdalf", "Herdan", "Herdfried", "Herdin", "Herdmann", "Heridan", "Hernando", "Herodan", "Hesindagoras", "Hesindian", "Hesindiego", "Hesindio", "Hesindior", "Hexander", "Hilberian", "Hilbert", "Hilgert", "Hillero", "Hjalbin", "Hlothar", "Hluthar", "Hluthard", "Holdec", "Holdwin", "Holmar", "Horasio", "Horathio", "Hraban", "Hrabanus", "Huldrich", "Humban", "Hummel", "Hurdo", "Hydronius", "Iago", "Iain", "Ianaro", "Iber", "Ibrom", "Idamil", "Ifirnion", "Igalf", "Igan", "Igeno", "Iglorio", "Illaen", "Ilmar", "Ilmbold", "Ilmin", "Imaculo", "Imion", "Imperio", "Imperioso", "Inaro", "Ingarin", "Ingeras", "Ingerman", "Ingmar", "Ingrad", "Ingram", "Ingramm", "Ingrawin", "Ingrimo", "Ingvalion", "Innion", "Innon", "Ioric", "Ippolito", "Iradon", "Irato", "Iriadh", "Irian", "Irion", "Irjan", "Irschan", "Ischtan", "Isegrein", "Isenbard", "Ishayador", "Isidorius", "Isonzo", "Jaakon", "Jacopo", "Jaemesh", "Jagoslaus", "Jakus", "Jallik", "Jalosch", "Jaltek", "Jandolf", "Jargold", "Jariel", "jarlak", "Jarlan", "Jarlow", "Jasper", "Jast", "Jel", "Jelianus", "Jendar", "Jesidoro", "Jindrich", "Jobdan", "Jolen", "Joost", "Jorgast", "Jorinen", "Joschin", "Joselito", "Josold", "Jost", "Jucho", "Justo", "Kaiman", "Kalman", "Kalmun", "Kalver", "Kamillio", "Karfang", "Karloff", "Karmo", "Karon", "Karyd", "Kasimir", "Kasparbald", "Kathay", "Kazanyo", "Kedor", "Kerling", "Khadan", "Khalid", "Khorenio", "Khorennio", "Knorrhold", "Knurrbold", "Kolkja", "Koradin", "Korbrandt", "Kordan", "Korgrimm", "Korobar", "Kromold", "Krusold", "Kunhag", "Kunibald", "Kunibrand", "Kunjo", "Kuno", "Lancorian", "Landor", "Lanthir", "Lanval", "Lanvolo", "Lanzelund", "Lares", "Larjan", "Larric", "Laurenzio", "Lechdan", "Lein", "Leodegar", "Leoderich", "Leomar", "Leon", "Leonello", "Lerico", "Lessandero", "Lessandro", "Lettal", "Leubold", "Leubrand", "Leueman", "Leuenhard", "Leuerich", "Leufried", "Leumar", "Leurik", "Leuward", "Liam", "Lidhwaen", "Lienn", "Lindebrecht", "Lingmar", "Linjan", "Linnerian", "Linnert", "Linneweber", "Lirobal", "Litprand", "Littjew", "Ljasew", "Ljubow", "Lodovico", "Lolgram", "Lolgramor", "Lolgrimm", "Lomoch", "Lorcan", "Lorion", "Losan", "Losian", "Lothur", "Luca", "Lucan", "Lucano", "Lucardus", "Lucian", "Luciano", "Lucianus", "Lucio", "Lucrann", "Ludeger", "Ludewich", "Ludolfo", "Ludor", "Ludovigo", "Luidor", "Luiz", "Lumino", "Lysander", "Madanus", "Madrano", "Maedard", "Magnus", "Malugin", "Malvolio", "Malzan", "Mandolo", "Manegold", "Manti", "Maquedar", "Marbert", "Marbido", "Marbio", "Marborad", "Marboriano", "Marboso", "Marcian", "Marduk", "Marik", "Maris", "Markward", "Markwill", "Marlo", "Marmwulf", "Marnion", "Marno", "Marukh", "Marvelon", "Masaniello", "Massino", "Matajew", "Meinhardt", "Meinwerk", "Melcher", "Meljow", "Melkom", "Memnus", "Menzel", "Meredin", "Merkan", "Mew", "Micirio", "Midor", "Mieshka", "Miljan", "Miro", "Miron", "Mishkarael", "Mispert", "Mjesko", "Mondino", "Monik", "Moralo", "Moran", "Morand", "Morcas", "Morgan", "Moribert", "Morisys", "Moritatio", "Movert", "Muir", "Muracio", "Murak", "Murro", "Myrdin", "Nagarion", "Nagrachfried", "Nagrachius", "Nagri", "Nandel", "Narbod", "Nardes", "Narres", "Nasildir", "Nasjan", "Nassing", "Nasul", "Nazir", "Neerjan", "Neesdan", "Nekromantio", "Nekromold", "Nephazzo", "Nepolemo", "Nerek", "Nestario", "Niall", "Niamad", "Nibelwulf", "Nigor", "Niobald", "Nirwulf", "Nitor", "Nocturno", "Nolle", "Noralec", "Norsold", "Nostromo", "Nottel", "Nöttel", "Novacius", "Nuncio", "Nurian", "Obidos", "Occam", "Odilbert", "Odilon", "Odoring", "Odumir", "Ogdan", "Ogilmar", "Ogman", "Ogo", "Oisin", "Olderich", "Oldewin", "Olean", "Olger", "Olko", "Olorand", "Olruk", "Oltan", "Olvis", "Ontho", "Orasilas", "Ordhan", "Ordonyo", "Orelan", "Orelio", "Orgil", "Orlan", "Orman", "Ormanus", "Ornibian", "Orschin", "Orsino", "Ortwin", "Osgar", "Ossian", "Ostilio", "Oswald", "Oswin", "Owilmar", "Padir", "Pagol", "Palinor", "Pallo", "Pandolfo", "Panek", "Panfilo", "Parainor", "Parinor", "Pasquino", "Patril", "Pedder", "Pedresco", "Pelayo", "Pentagor", "Peradan", "Peraenjow", "Perainian", "Perainio", "Perainor", "Peranwyn", "Perdan", "Pergrin", "Perinyo", "Perval", "Pettar", "Peziano", "Phazo", "Phederino", "Phedro", "Pher", "Phewin", "Phexlieb", "Philopraios", "Pipo", "Pirtho", "Pisidian", "Pitjow", "Pjerow", "Plebus", "Polinaro", "Polter", "Praan", "Praias", "Praineryn", "Praiobert", "Praiobold", "Praiobur", "Praiodan", "Praiodar", "Praioden", "Praiodor", "Praiofold", "Praiogalm", "Praiogriff", "Praiogrim", "Praiohilm", "Praiolan", "Praionor", "Praiopha", "Praiophan", "Praiophantius", "Praiophatius", "Praiopio", "Praiopold", "Praioslob", "Praiosmar", "Praiosmund", "Praiostan", "Praiotin", "Praiowar", "Praioward", "Praiowulf", "Prosperus", "Pulpio", "Punino", "Quadan", "Quanion", "Quendan", "Quin", "Quintus", "Rabanus", "Radbod", "Radulf", "Radumar", "Rafik", "Rafim", "Rahiano", "Rahjacomo", "Rahjadan", "Rahjan", "Rahjian", "Rahjiano", "Rahyodan", "Raianus", "Raidri", "Rakolus", "Rakulus", "Ralhion", "Ralman", "Ramin", "Randolph", "Rank", "Rasmus", "Rassuan", "Rateral", "Rauert", "Raul", "Raulbrin", "Raulo", "Raulwin", "Rayo", "Rotenhardt", "Refardeon", "Reginbald", "Regolan", "Reo", "Reochaid", "Reon", "Reto", "Reutus", "Rhazzazorion", "Rhonwian", "Rhys", "Rimaldo", "Roban", "Rodegar", "Rodunk", "Rohaphanus", "Romero", "Rondarius", "Rondradan", "Rondragabund", "Rondragoras", "Rondrajev", "Rondralf", "Rondred", "Rondreich", "Rondrian", "Rondric", "Rondricus", "Rondrigan", "Rondrigo", "Rondril", "Rondrogad", "Rondwig", "Ronwulf", "Roryc", "Rowin", "Ruadh", "Rubellus", "Rude", "Rudegar", "Rudjew", "Rufus", "Rukus", "Rumpel", "Rumpo", "Runkel", "Rupo", "Rustam", "Rustamo", "Rypto", "Sadelhold", "Sahinus", "Sal", "Salarino", "Salix", "Salm", "Salpico", "Salquirio", "Salvestro", "Salvus", "Salvyron", "Sandrad", "Sandro", "Sansovino", "Sapertyn", "Sarastro", "Satuarnus", "Saturius", "Saturo", "Savertin", "Schweigfried", "Scranian", "Seffel", "Seffl", "Selinan", "Selindian", "Selindiano", "Selindio", "Semkin", "Senach", "Seneb", "Septimus", "Sequin", "Servando", "Shien", "Shinxirius", "Sidhric", "Siegmann", "Sigerain", "Sighelm", "Sigman", "Sigrain", "Sigred", "Silbahardt", "Sildor", "Sildroyan", "Sileach", "Silem", "Silentius", "Siltja", "Simodo", "Sindar", "Sindarion", "Sirin", "Skelettalrik", "Skelettarius", "Solrik", "Sonnward", "Sordulbert", "Stane", "Steinrich", "Stewain", "Stipen", "Stitus", "Stordan", "Stordian", "Storko", "Strammgert", "Sulman", "Sulvodan", "Sumerich", "Suminius", "Sumudan", "Sumudor", "Superbo", "Suschin", "Tairona", "Talfan", "Talor", "Tanglan", "Tann", "Tannfried", "Tannjew", "Targuin", "Tarius", "Tarosch", "Tarquinio", "Tasfarion", "Tassilo", "Tennetto", "Terdin", "Terkol", "Tessano", "Thalion", "Thallian", "Thargo", "Thargunifred", "Thargunison", "Thargurd", "Theodicus", "Thezmar", "Thezzaro", "Thezzaron", "Thiago", "Thimorn", "Thiomar", "Thisdan", "Thordenin", "Thorolf", "Throndwig", "Throndwin", "Thuan", "Tibraid", "Timor", "Timshal", "Timus", "Tirato", "Tiro", "Tirulf", "Tito", "Tobor", "Tolak", "Tolman", "Toran", "Toras", "Torben", "Torjin", "Torm", "Torvon", "Tradan", "Traudemar", "Trautmann", "Trautmund", "Traviadan", "Traviahold", "Traviard", "Travidan", "Travidor", "Travien", "Travin", "Travinius", "Travino", "Travinor", "Trest", "Treubert", "Trienco", "Trogar", "Tsadan", "Tsael", "Tsafried", "Tsamar", "Tsatuaricus", "Tsatuarius", "Tsayano", "Tuljew", "Turno", "Tuuram", "U!fried", "Uachdan", "Uallach", "Ucurian", "Ucuriard", "Ucurius", "Udalbert", "Udalf", "Udildor", "Ugalf", "Ugdalf", "Ugdan", "Ugo", "Ulan", "Uldreich", "Ulfbert", "Ulfert", "Ulfing", "Ulfried", "Ulmew", "Ulmfried", "Ulmjan", "Ulmjew", "Umbario", "Umme", "Ungolf", "Unnio", "Urfaran", "Urichslaus", "Uriel", "Uriens", "Urnislaw", "Urras", "Urrito", "Usim", "uthariel", "Valdemoro", "Valerius", "Valman", "Valpo", "Valto", "Valtoron", "Vareno", "Varsinian", "Vascal", "Vencelao", "Venetus", "Vermis", "Vessario", "Viburn", "Vicino", "Viento", "Vigo", "Vinio", "Vino", "Viscio", "Vitale", "Vitario", "Vito", "Vitold", "Vittel", "Vittorio", "Vitus", "Vladuran", "Volapio", "Voltan", "Wahrfried", "Waidhart", "Waldemar", "Waldmiryn", "Walram", "Wando", "Wandregisil", "Wassjew", "Weldmar", "Welferich", "Welfert", "Wendehold", "Wendelmir", "Wendemar", "Wendolyn", "Wengel", "Wengelyn", "Wenzeslaus", "Werion", "Wilbur", "Wilciano", "Wildgrim", "Wilfing", "Wilmerich", "Win", "Winfrid", "Wolfbrandt", "Wolfhardt", "Wolfhelm", "Wolforn", "Wolpje", "Wulf", "Wulfbert", "Wulfen", "Wulfgrimm", "Wulfhart", "Wulfjew", "Wulfram", "Wunnemar", "Xarfaidon", "Xavierus", "Xebbert", "Xenofero", "Xeppert", "Xeranio", "Xeranion", "Xerber", "Xindan", "Yaberto", "Yalach", "Yann", "Yantur", "Yanturio", "Yarindar", "Yarum", "Yaryndarius", "Yelador", "Yelnan", "Yendan", "Yendar", "Yendor", "Yerno", "Yerodin", "Yeto", "Yorge", "Yptor", "Yptorr", "Yuan", "Yulag", "Yulio", "Yurris", "Ywain", "Zadalon", "Zahir", "Zandor", "Zayano", "Zelonso", "Zholvan", "Zholvard", "Zholvardt", "Zholvarion", "Zirrakion", "Zoltan", "Zolthan", "Zondan", "Zordan", "Zorion", "Zurbaran"];
		
		//Array mit Vornamen für weibliche Menschen
		const vornameWeiblichMensch = ["Aaraloth", "Aartrude", "Ada", "Adamante", "Adaque", "Adelgund", "Adelgunde", "Adilgunde", "Adlanga", "Adula", "Aedha", "Aedith", "Aedre", "Aemilia", "Agrimothea", "Ahumeda", "Aife", "Aifingla", "Ailgrid", "Ailill", "Alara", "Alatheia", "Albhe", "Alda", "Aldare", "Aldea", "Aldonaza", "Alena", "Alene", "Alessandra", "Alfianna", "Algarte", "Algrid", "Aliana", "Alinde", "Alinja", "Alissa", "Alma", "Almadea", "Alrike", "Alruna", "Alueh", "Alvene", "Alvide", "Alwen", "Alwene", "Alwenwid", "Alwide", "Alwinje", "Amadis", "Amara", "Amaria", "Amazelde", "Amaziella", "Amelthona", "Amene", "Amira", "Ammas", "Ammazeronike", "Amri", "Amselgunde", "Andariane", "Andela", "Andra", "Anglinde", "Angrina", "Angunde", "Angwen", "Antara", "Antigia", "Anwen", "Aphasmaia", "Arba", "Arcadia", "Arda", "Ardare", "Ardariel", "Argoldia", "Arissa", "Arline", "Arnhild", "Arnwulfe", "Artema", "Arva", "Arvedua", "Arvilla", "Asdemona", "Asfa", "Asfalotte", "Asma", "Asmodena", "Asmodette", "Asumudette", "Aumara", "Aurelia", "Aureliana", "Auxilia", "Avelia", "Avesa", "Avessa", "Avessandra", "Avia", "Azaril", "Azila", "Azine", "Bachede", "Baerhild", "Baernja", "Baerwen", "Balatravie", "Balatravis", "Balbine", "Bana", "Baniatella", "Baraya", "Barine", "Bärlind", "Bärlinde", "Bärtraut", "Basilissa", "Belena", "Belenoleth", "Belgrifa", "Belharia", "Belharika", "Belisa", "Belke", "Belkelelia", "Belkhira", "Bellameria", "Bellarahja", "Bellarita", "Bellatrix", "Belona", "Belshira", "Belshirella", "Beregis", "Berga", "Bernischa", "Bethana", "Betir", "Beylfrid", "Bilhild", "Bilhildis", "Binya", "Birkhild", "Birsel", "Bishdalia", "Blanca", "Boltsa", "Bonaventa", "Borana", "Borbaradiane", "Boriane", "Bormunde", "Boromada", "Boromee", "Boronaya", "Borondria", "Boronlin", "Boronlinde", "Boronya", "Bospara", "Braggine", "Braggund", "Braggunde", "Brangolda", "Branibora", "Branigolde", "Branike", "Branwen", "Brazira", "Brealetha", "Brianna", "Brindora", "Bronhilda", "Burglinde", "Cailin", "Caillinnis", "Caldaya", "Calderine", "Caldja", "Cali", "Calijida", "Calmora", "Caneya", "Carimina", "Carissima", "Caristhea", "Cavarya", "Caya", "Celara", "Celda", "Celestia", "Celissa", "Cell", "Cella", "Ceridwen", "Cervilia", "Cessandra", "Cessaria", "Charine", "Charissia", "Charys", "Ciana", "Cirina", "Cita", "Clarita", "Clarizia", "Clodicea", "Concabella", "Consuela", "Cordaella", "Coris", "Cortessa", "Coruna", "Corvara", "Corvinia", "Corvinida", "Crabroda", "Cuanna", "Cuib", "Cusmara", "Cusmina", "Daene", "Daire", "Dalida", "Dalkeshja", "Damaris", "Danja", "Danje", "Danu", "Dara", "Daradia", "Daria", "Dariä", "Daroca", "Darpatia", "Davina", "Debona", "Deirdre", "Dela", "Delusia", "Deregrein", "Derlinde", "Derya", "Desaya", "Desiderya", "Desmonda", "Dhana", "Dhuoda", "Diantha", "Diarw", "Diarwen", "Diethlinde", "Dilga", "Dimiona", "Dimione", "Diomara", "Dirione", "Doloresa", "Dolorita", "Domela", "Dominga", "Dorell", "Doriana", "Doride", "Dorlen", "Dorlena", "Dorlin", "Dorota", "Dragontina", "Drahomira", "Dralina", "Dramina", "Duglena", "Dulcinea", "Duna", "Dunjascha", "Dunyaca", "Duria", "Duridanya", "Durinja", "Dylga", "Dyrada", "Dythlind", "Dythlinde", "Earwen", "Edala", "Efferdane", "Efferdia", "Efferlill", "Efferys", "Effraine", "Ehrgard", "Eilada", "Eillyn", "Eiria", "Ela", "Elanor", "Elara", "Elea", "Elene", "Elftraut", "Elftraute", "Elfwid", "Elfwidde", "Elfwyn", "Elida", "Elissa", "Eljascha", "Elkwine", "Ellmholda", "Elmjescha", "Elodia", "Elslin", "Elvene", "Elwene", "Elysia", "Elysmine", "Elysthea", "Emer", "Emerencia", "Emiglia", "Emilia", "Endilia", "Enid", "Enn", "Epha", "Erlgard", "Erlinde", "Ermelind", "Eronia", "Escalada", "Esfera", "Eshilya", "Eslamida", "Eslamidia", "Esmeralda", "Esribeda", "Estrella", "Eswen", "Etilie", "Ewaine", "Faduhenne", "Faelinn", "Faida", "Falkwina", "Fann", "Fara", "Farfanya", "Farlgard", "Farline", "Fastrada", "Feengund", "Feengunde", "Felicita", "Fenia", "Feodora", "Feyenholde", "Fhadime", "Fiaga", "Fiagarete", "Fiall", "Fiammetta", "Fiara", "Finandenia", "Findualia", "Finnabir", "Finnla", "Finris", "Fiona", "Fiorella", "Fira", "Firella", "Firisa", "Firnia", "Firnwild", "Firre", "Firuna", "Firunette", "Firunie", "Firunja", "Fiya", "Fluvia", "Folsina", "Franella", "Franiane", "Fredegard", "Fredegunde", "Frederun", "Freilinde", "Freugern", "Friedegard", "Friedegunde", "Friedhilde", "Friedrieke", "Frinja", "Frohlinde", "Frohmute", "Fromute", "Furgund", "Gala", "Galeana", "Galena", "Galindia", "Gänsegard", "Gansela", "Ganselda", "Gänselind", "Gänselinde", "Gansje", "Garethia", "Garetia", "Gari", "Gea", "Geala", "Geertja", "Gelda", "Geldana", "Gennofaer", "Gerja", "Gerlin", "Gerlita", "Gernlind", "Gerone", "Gerswide", "Gertraudis", "Geselwen", "Gezelin", "Ghazalita", "Ghislaine", "Ghulinai", "Gidiane", "Gilamund", "Gilia", "Ginaya", "Gindel", "Gine", "Ginta", "Girte", "Gitta", "Gladys", "Glenna", "Globomona", "Gloriana", "Godera", "Goldane", "Goldara", "Goldfrede", "Golgarita", "Golgrita", "Gonzaga", "Gorrada", "Grakhvalia", "Gratfride", "Gratfriede", "Greifgard", "Greifwina", "Griffa", "Griffane", "Griffberga", "Grimje", "Grimma", "Grimmhel", "Grimwulfe", "Gringuld", "Griseldis", "Gritten", "Gryphonia", "Guda", "Gudwinja", "Gujadanya", "Gun", "Gunde", "Gundel", "Gundelin", "Gunelde", "Guni", "Gurnhild", "Gurva", "Gusella", "Gwen", "Gwiduhenna", "Gwynna", "Gylda", "Gylduria", "Gylvana", "Hadelin", "Hadwiga", "Haldana", "Hamme", "Hamwiede", "Hannafrid", "Haricia", "Harika", "Harlindis", "Heidgrein", "Heike", "Heilbrun", "Heiltraudis", "Heiltrud", "Heiltrude", "Hektabe", "Hela", "Helaria", "Helasine", "Helchtrut", "Helchtruta", "Heleona", "Helia", "Heliantha", "Helmtrud", "Helvja", "Hemma", "Hennya", "Herda", "Herdfrieda", "Herdfriede", "Herdgard", "Herdine", "Herdlind", "Herdlinde", "Herdtraut", "Herdwiga", "Herdwinja", "Hergriffa", "Hermenegilda", "Heronda", "Herzlinde", "Hesindana", "Hesindia", "Hesindiaga", "Hesindiane", "Hesindigund", "Hesindora", "Hesine", "Hesinja", "Hevane", "Hexandra", "Hilda", "Hildegund", "Hildelind", "Hilmtrud", "Hilmtrude", "Hitta", "Holdtraude", "Horanthe", "Horasianne", "Horathia", "Hule", "Hylgwen", "Idra", "Ifirngund", "Ifirnia", "Ifirnja", "Igraine", "Ila", "Ildaria", "Ildha", "Ilfwid", "Ilke", "Illa", "Illail", "Ilma", "Ilme", "Ilmice", "Ilmicea", "Ilmjescha", "Ilsebra", "Ilumina", "Imacula", "Imelda", "Imelde", "Imeria", "Imola", "Imperia", "Inares", "Ingmara", "Ingrimiane", "Ingrimma", "Ingrimmanda", "Ingvaline", "Invher", "Ioraine", "Ira", "Iralda", "Iribaaria", "Irinja", "Irionya", "Irlgunde", "Irmela", "Irmenella", "Irmfriede", "Irmgrein", "Isavena", "Isewein", "Isewen", "Isfrid", "Ishaya", "Isida", "Isidra", "Isiz", "Islavia", "Ismena", "Ismeralda", "Isora", "Isundra", "Iswein", "Iswen", "Iswene", "Itta", "Ituberga", "Iunivera", "Iusterna", "Ivarena", "Ivetta", "Jadvige", "Jadwiga", "Jadwine", "Jalinde", "Jandara", "Jandora", "Jandra", "Jane", "Janne", "Jarwen", "Jascham", "Jasina", "Jassia", "Jatane", "Jazemina", "Jedwinja", "Jelia", "Jeliana", "Jella", "Jelspeth", "Jesabela", "Jessande", "Jette", "Jocasta", "Jolantha", "Jolenta", "Joseda", "Joselle", "Josmene", "Josmine", "Junivera", "Kajandra", "Kajani", "Karianna", "Karima", "Karinja", "Karneola", "Kascha", "Kasmyra", "Katalinya", "Keira", "Kendra", "Kerry", "Khorena", "Kladdis", "Kora", "Korisande", "Kornwige", "Korrasson", "Kramunde", "Kundra", "Kunhuta", "Kunn", "Kupunda", "Kusmara", "Kysira", "Laaranide", "Laaranya", "Laille", "Lamea", "Lana", "Lann", "Lanzelind", "Larinu", "Larissa", "Larja", "Larona", "Lavinia", "Leanne", "Lechmin", "Leleth", "Lelia", "Leomara", "Leona", "Leonore", "Leta", "Leudara", "Leugrit", "Leuhild", "Levita", "Libussa", "Lidda", "Lidwina", "Linai", "Lindegard", "Lindwin", "Linje", "Linnea", "Lioba", "Liphia", "Lisetta", "Lissa", "Liudbirg", "Llean", "Logistilla", "Lolgra", "Lolgramothilde", "Lolgrima", "Lorietta", "Lorine", "Losiane", "Lovisa", "Luassa", "Lucara", "Lucasta", "Luciana", "Lucietta", "Ludilla", "Ludmila", "Luidtbirg", "Luisina", "Luitgard", "Luitperga", "Lumina", "Luminella", "Luta", "Lutisana", "Luzia", "Lyn", "Lyncordia", "Lynia", "Lynn", "Lysminja", "Lyssandra", "Macca", "Macha", "Mactalena", "Mactana", "Madagund", "Madalberta", "Madalea", "Madalena", "Mada-lin", "Madane", "Maerthe", "Maeve", "Mafalda", "Maidholde", "Maila", "Maingolda", "Maire", "Maline", "Mandlin", "Maqueda", "Marba", "Marbirga", "Marbis", "Marbogard", "Marbolena", "Marbolene", "Marchesca", "Marcilia", "Margoris", "Marissja", "Marja", "Marlinde", "Marmelunde", "Marsilia", "Maryan", "Maryarita", "Matissa", "Maula", "Maura", "May", "Mechte", "Mechtessa", "Meingard", "Meingarde", "Melisande", "Melwina", "Memnia", "Mengard", "Mengarde", "Mercara", "Merida", "Merishja", "Metella", "Mika", "Mina", "Minnegard", "Mirandola", "Mirhaneba", "Miril", "Mirnhild", "Mirnhilde", "Mirona", "Mirvana", "Mirya", "Mirys", "Mishkella", "Misira", "Modesta", "Mona", "Mora", "Morcana", "Morena", "Morgwyn", "Morisca", "Morlenja", "Moschane", "Mothild", "Myriana", "Myrva", "Mythraela", "Nadjescha", "Nadschenka", "Naena", "Nagrachtraut", "Nale", "Nalle", "Nanda", "Nandine", "Nandora", "Nane", "Nanna", "Nantwina", "Neetha", "Neidhild", "Neila", "Nekramunde", "Nelda", "Neowen", "Nepharia", "Nephazza", "Nephazzine", "Neralda", "Nessa", "Nette!", "Neunhild", "Neva", "Nevinia", "Nia", "Niam", "Niamh", "Nicolasina", "Nifgunde", "Niotha", "Niothia", "Nira", "Nirka", "Nirravena", "Nisha", "Nissa", "Nissara", "Nita", "Noina", "Noiona", "Noitburg", "Noraletha", "Norgard", "Norike", "Nostriane", "Novara", "Nurdania", "Nurinai", "Nuschinja", "Oarwen", "Obarana", "Obra", "Oceana", "Octara", "Oda", "Odelinde", "Odewinse", "Odina", "Odrud", "Ola", "Olea", "Oleana", "Olenga", "Olginai", "Olgrima", "Olivenaca", "Olja", "Olorande", "Oloranthe", "Olwen", "Omelda", "Omwid", "Omwidda", "Ondinai", "Ondi-nai", "Ondwina", "Orelia", "Ostrud", "Oswina", "Paale", "Padora", "Padraigin", "Palina", "Palinai", "Pamina", "Pasqua", "Peliria", "Peraenja", "Perainella", "Perainhuld", "Perainhulda", "Perainiane", "Perainje", "Peranjasca", "Peranka", "Perdia", "Perdita", "Periana", "Perihel", "Perinja", "Perjascha", "Pernilia", "Phecalynn", "Phedora", "Phedre", "Pheguda", "Phegunda", "Phelicitas", "Phelippa", "Phexla", "Phexlind", "Phexline", "Phranya", "Phrosina", "Polissena", "Pomona", "Praiadne", "Prai-afine", "Praialda", "Praida", "Praiholde", "Prainabirg", "Prainike", "Praioberga", "Praiobierga", "Praiobura", "Praiociose", "Praiodai", "Praiodain", "Praiodana", "Praiodane", "Praiogolde", "Praiogund", "Praiolil", "Praiolynna", "Praiora", "Praiosholde", "Praiosmin", "Praiosmine", "Praiotina", "Praiowara", "Praitrud", "Prajosmin", "Praosmin", "Praosmina", "Premodia", "Prianna", "Prishya", "Quelda", "Quelina", "Quenia", "Querinia", "Quinta", "Quisira", "Rabanna", "Rabena", "Rabescha", "Racalla", "Radane", "Radegund", "Ragunde", "Rahiatia", "Rahjada", "Rahjades", "Rahjalina", "Rahjalyn", "Rahjamande", "Rahjane", "Rahjanes", "Rahjania", "Rahjatia", "Raike", "Rajassa", "Ramira", "Raneola", "Rantalla", "Rassia", "Raugunde", "Ravena", "Raxa", "Rayades", "Rechhilde", "Regintrud", "Regola", "Reingard", "Remira", "Rena", "Renja", "Rhajineza", "Rhazzazora", "Rhodena", "Rhondara", "Riana", "Riane", "Rianna", "Rianod", "Richeza", "Richild", "Rifada", "Riganna", "Rihinja", "Rimiona", "Rinaya", "Rinnfolde", "Roana", "Rodegard", "Rohaja", "Ronaya", "Rondane", "Rondara", "Rondaria", "Rondirai", "Rondperga", "Rondragabund", "Rondraine", "Rondrala", "Rondralda", "Rondraleude", "Rondralia", "Rondravia", "Rondria", "Rondriane", "Rondrianje", "Rondriga", "Rondrige", "Rondrine", "Rondwige", "Rosinia", "Rothmara", "Rotrud", "Rotrude", "Rovena", "Rowena", "Rowinja", "Ruada", "Rudane", "Rudraighe", "Rudwischa", "Rusena", "Ruthe", "Saari", "Sabea", "Sabela", "Sabella", "Sabetta", "Saendren", "Saingla", "Salaberga", "Salabierga", "Salbarga", "Salina", "Salkya", "Salva", "Santilia", "Saranya", "Saria", "Sariya", "Saturia", "Satuwina", "Satyana", "Savinya", "Saya", "Scanlail", "Sefira", "Selin", "Selind", "Selinde", "Selissa", "Selma", "Selwine", "Senebiane", "Senola", "Seola", "Sepha", "Sephira", "Septima", "Sewjescha", "Shaewen", "Shahane", "Shinksara", "Sibille", "Siegwaldis", "Siegwilde", "Siguenza", "Silvana", "Simanca", "Simiena", "Simiona", "Sindaja", "Sinistra", "Sinjer", "Siona", "Siric", "Solivai", "Solsona", "Sonnentraud", "Steingard", "Sukra", "Sulja", "Sumiana", "Suminella", "Svea", "Svelinya", "Swafne", "Swangard", "Swantje", "Sylvette", "Synella", "Tal via", "Talina", "Talvia", "Tannfriede", "Tasfaralia", "Tasfarella", "Tasfera", "Tasferane", "Tertia", "Tesbinja", "Thalania", "Thalessia", "Thalia", "Thalionmel", "Thardunidia", "Thargindel", "Thargine", "Thargrl'n", "Thargunfriede", "Thargunia", "Thargunida", "Thargunitholde", "Theris", "Therisa", "Thesia", "Thespia", "Thezzia", "Thila", "Tholde", "Thornia", "Tibraide", "Tija", "Tijakoolia", "Tijalie", "Tilia", "Tiliana", "Tilliane", "Tineke", "Tjasa", "Tjeika", "Tomassina", "Tommeliane", "Traute", "Trautgold", "Trautgund", "Trautgunde", "Trautlinde", "Trautmin", "Travanca", "Trave", "Travialin", "Traviana", "Traviane", "Traviata", "Travide", "Travienne", "Travietta", "Travilea", "Travileah", "Travine", "Traviniana", "Traviynla", "Travjescha", "Trawina", "Trawinja", "Treshka", "Treugunde", "Treuleude", "Triumfina", "Tsaala", "Tsaalda", "Tsabella", "Tsaia", "Tsaida", "Tsaine", "Tsalind", "Tsalinda", "Tsalinde", "Tsanja", "Tsasala", "Tsasalda", "Tsaya", "Tuadh", "Turike", "Turiken", "Tya", "Tyakradane", "Tyakrane", "Ucuriana", "Ucurieke", "Udora", "Ugolines", "Uinin", "Ulana", "Ulembina", "Ulfhild", "Ulide", "Ulinai", "Ullgre!N", "Ulmia", "Ulmjescha", "Ulzedona", "Unata", "Unicornia", "Uripurga", "Urjelke", "Urmeline", "Ursania", "Usanza", "Usvina", "Usvine", "Utsinde", "Utsine", "Vadoria", "Valariel", "Valborga", "Valdara", "Valerfa", "Valeria", "Valiana", "Vallusa", "Valposella", "Vana", "Vandra", "Vanjescha", "Vanossa", "Vanoza", "Varena", "Varinella", "Vea", "Vearne", "Velvenya", "Verilia", "Verisja", "Veriya", "Vestissja", "Vi", "Vibora", "Vida", "Viera", "Vieska", "Vilmja", "Viminyoza", "Vinyaza", "Violanda", "Viridia", "Vistella", "Viviona", "Waidgunde", "Walbirg", "Waldegund", "Walderia", "Waldrada", "Waldtraute", "Waliburia", "Walla", "Walpurga", "Warja", "Wendeline", "Wendholde", "Widogard", "Wiede", "Wildgrimja", "Wilimai", "Wiltrud", "Wina", "Winelda", "Winfirune", "Winifred", "Winja", "Wisgard", "Witta", "Wolfrida", "Wolpjane", "Wulfe", "Wulfgrima", "Wulfgrimja", "Wulfhild", "Wulfjascha", "Wulfriede", "Wulfrun", "Xaida", "Xaira", "Xantilia", "Xarfaida", "Xarfide", "Xarfira", "Xari", "Xaviera", "Xeerania", "Xerane", "Ximena", "Xinda", "Xindra", "Xinja", "Xyleste", "Yadwiga", "Yadwinja", "Yalma", "Yandebirg", "Yanis", "Yanna", "Yaquiria", "Yasha", "Yasinde", "Yasinth", "Yasinthe", "Yasmina", "Yassia", "Yedra", "Yegua", "Yesabella", "Yesaria", "Ygolde", "Yindra", "Ynlais", "Yola", "Yolande", "Yolde", "Yolina", "Yosmina", "Yppolita", "Yrme", "Ysilda", "Ysilie", "Ysilt", "Yvonya", "Zaberga", "Zafira", "Zalamea", "Zalgolda", "Zalines", "Zanya", "Zaraffa", "Zarpa", "Zarpada", "Zarya", "Zaya", "Zefira", "Zekla", "Zelda", "Zephirina", "Zeradia", "Zerline", "Zholvarie", "Zholveigh", "Zidane", "Zidonje", "Zita", "Zora", "Zorilla", "Zuula", "Zylva", "Zyrasia", "Aalis", "Abella", "Adalina", "Adelaide", "Adelhayt", "Adora", "Adriana", "Aelia", "Affra", "Agatha", "Agnes", "Agnez", "Agripina", "Agrippina", "Aina", "Alane", "Alba", "Alberea", "Alfhild", "Alice", "Aline", "Alips", "Allet", "Amée", "Amelot", "Ana", "Anastasiya", "Angnes", "Anna", "Anne", "Antonia", "Apell", "Applonia", "Aquila", "Ardena", "Arienh", "Arnbjorg", "Ase", "Aslog", "Astrid", "Auda", "Audhid", "Augusta", "Avelina", "Avice", "Balbina", "Barbara", "Basilia", "Beatha", "Beatrice", "Beatriz", "Bergljot", "Birghild", "Birgit", "Blancha", "Blandina", "Bodil", "Bogdana", "Boleslava", "Bonita", "Bozhena", "Brenna", "Briann", "Brida", "Brigita", "Brynhild", "Caelia", "Camila", "Camilla", "Cande", "Caomh", "Cara", "Carmen", "Casia", "Cateline", "Catlina", "Cecilia", "Cecily", "Cinnia", "Clara", "Claricia", "Claudia", "Cloelia", "Collette", "Cordelia", "Cristina", "Dagmar", "Danica", "Darya", "Deheune", "Denisete", "Desislava", "Divone", "Dolores", "Domitia", "Donia", "Doreena", "Dorian", "Dorotea", "Dorothea", "Dragoslava", "Drusa", "Dunja", "Duretta", "Edelina", "Eerika", "Efrosinia", "Egelina", "Eira", "Ekaterina", "Eleanor", "Elena", "Elicia", "Elizabeth", "Ella", "Eloise", "Els", "Elsbeth", "Elsha", "Elysande", "Emelina", "Emeny", "Emma", "Emmeline", "Emmelot", "Engel", "Enlein", "Enndlin", "Ermentrudis", "Ermina", "Esmerelda", "Ethne", "Eva", "Evelina", "Fabia", "Fabricia", "Faina", "Fausta", "Fela", "Felipina", "Fianna", "Flavia", "Floriana", "Francisca", "Fronicka", "Fulvia", "Gabriela", "Galiena", "Galina", "Genefe", "Genevieve", "Geras", "Gerhauss", "Germana", "Gertrudt", "Geva", "Gibelina", "Gila", "Gilda", "Gillette", "Giselle", "Glaucia", "Grania", "Gratiana", "Griselda", "Gudrun", "Guiburgis", "Guillemette", "Gunborg", "Gunhild", "Gunvor", "Guoite", "Guttel", "Gwyndolin", "Hadriana", "Hadwisa", "Hecelina", "Helen", "Helena", "Helga", "Heloysis", "Helyoudis", "Herleva", "Hermina", "Hertha", "Hilde", "Hillevi", "Hodeardis", "Horatia", "Hortensia", "Hugolina", "Ida", "Idelisa", "Ines", "Ingrid", "Iona", "Iovita", "Irina", "Irmel", "Isabel", "Isabella", "Isabellis", "Iskra", "Isolde", "Iulia", "Jacoba", "Jaquette", "Jasna", "Jehan", "Joan", "Johanna", "Jonata", "Jorunn", "Juana", "Juliana", "Juliote", "Kari", "Katarina", "Katerina", "Katerine", "Katherine", "Katya", "Keelin", "Kenna", "Kennocha", "Kresimira", "Kuen", "Kungund", "Laelia", "Laurentia", "Lavena", "Leocadia", "Leonor", "Lesley", "Linnette", "Livia", "Longina", "Lucia", "Lucilla", "Lucinda", "Lucretia", "Lyonesse", "Lyudmila", "Mabina", "Magda", "Magdalen", "Magnhild", "Marcella", "Marcia", "Maresol", "Margery", "Margot", "Margret", "Marguerite", "Maria", "Maricela", "Marie", "Mariya", "Marlein", "Martha", "Marvina", "Mary", "Matilda", "Matilde", "Mavis", "Maxima", "Maynild", "Melania", "Melisende", "Militsa", "Millicent", "Miloslava", "Mira", "Mirna", "Miroslava", "Mokosh", "Monica", "Morana", "Morgan", "Muriel", "Nareena", "Natasha", "Nika", "Nilda", "Nona", "Octavia", "Odelina", "Olga", "Oriana", "Oriel", "Otilia", "Ottilg", "Paulina", "Perrette", "Peternella", "Petrona", "Petronia", "Petronilla", "Porcia", "Rada", "Radoslava", "Rafaela", "Ragna", "Ragnhild", "Raisa", "Ranveig", "Regan", "Reusin", "Rohesia", "Ronat", "Rosalind", "Rosamund", "Rosario", "Runa", "Saga", "Sarah", "Sedilia", "Sibilla", "Sigfrid", "Signe", "Sigrid", "Sigrunn", "Slavitsa", "Sofia", "Sofiya", "Solveg", "Stanislava", "Stephana", "Suelo", "Susannah", "Svanhild", "Svetlana", "Sybil", "Sybilla", "Tacita", "Tatyana", "Teresa", "Thora", "Tomasa", "Tomislava", "Torborg", "Torunn", "Tove", "Tullia", "Ula", "Unn", "Ursel", "Valentia", "Venetia", "Verginia", "Veronica", "Veronika", "Vesna", "Vigdis", "Vita", "Vladimira", "Vrsula", "Walpurg", "Williamina", "Wynne", "Yaroslava", "Yelena", "Ylva", "Ynes", "Yngvild", "Ysabeau", "Ysabel", "Yseult", "Yvonne", "Zaria", "Zoria"];
		
		//Array mit Vornamen für nicht-binäre Menschen
		const vornameNichtbinaerMensch = ["Aaren", "Addison", "Alex", "Alexis", "Amar", "Anouk", "Anuk", "Aria", "Ashley", "Ashton", "Aydin", "Bailey", "Bene", "Benja", "Bent", "Bente", "Beverly", "Blair", "Blake", "Bo", "Bozan", "Brook", "Cameron", "Camille", "Carol", "Carter", "Celeste", "Charlie", "Chaska", "Chris", "Conny", "Corey", "Dakota", "Darcy", "Darian", "Deniz", "Derya", "Devin", "Dominique", "Dylan", "Eike", "Elis", "Elliot", "Elvin", "Elya", "Enid", "Esin", "Eske", "Eslem", "Esra", "Evin", "Farina", "Felice", "Feng", "Fidan", "Finn", "Fiore", "Flo", "Florin", "Francis", "Friedel", "Gale", "Gates", "Gerrit", "Ghazal", "Gia", "Gin", "Glenn", "Günes", "Güven", "Gwenaël", "Hadar", "Hadir", "Hadley", "Haik", "Harley", "Helge", "Hemke", "Henny", "Hilal", "Hunter", "Ihsan", "Ilter", "Ilya", "Immi", "Indiana", "Indigo", "Indra", "Ino", "Ira", "Isa", "Islay", "Jade", "Jaime", "Jamal", "Jamie", "Janne", "Jantje", "Jayce", "Jayden", "Jean", "Jesse", "Jody", "Jona", "Jorah", "Joyce", "Junis", "Kelsey", "Kendall", "Kennedy", "Kerry", "Kim", "Kiran", "Kirsten", "Kourtney", "Kris", "Kristan", "Kyler", "Lesley", "Leslie", "Lian", "Lilian", "Lindsay", "Logan", "Loki", "Lorin", "Lou", "Lovis", "Luca", "Malu", "Marian", "Maris", "Marley", "Marlin", "Marlo", "Maxime", "Meredith", "Merle", "Mian", "Mika", "Milou", "Mio", "Nika", "Nikita", "Nikky", "Nino", "Noah", "Nova", "Oakley", "Ola", "Ora", "Orly", "Oyama", "Özbek", "Pahul", "Paris", "Parker", "Pat", "Patrice", "Paulin", "Payden", "Phoenix", "Pim", "Pleun", "Qian", "Quincy", "Quinn", "Raja", "Raven", "Rayan", "Regis", "Reign", "Rey", "Riley", "Robin", "Rory", "Ryan", "Sam", "Sandy", "Sanja", "Sascha", "Scout", "Shannon", "Shanti", "Shay", "Simone", "Siro", "Skyler", "Spencer", "Taylor", "Teagan", "Terry", "Theodore", "Tiam", "Tjade", "Tomke", "Toni", "Tracy", "Tyler", "Ude", "Ulli", "Umut", "Uzay", "Vada", "Val", "Valea", "Valentine", "Valera", "Valo", "Vanja", "Vesa", "Vildan", "Wally", "Wanja", "Wisal", "Wissam", "Wynne", "Yael", "Yuki", "Yuri", "Zero", "Zia", "Zisan", "Zohar"];
		
		//Array mit Nachnamen für Menschen
		const nachnameMensch = ["Aarburg", "Abbauer", "Abundil", "Ackerer", "Ackerknecht", "Ackermann", "Acostez", "Adelbuhler", "Adersin", "Aemilier", "Aendruw", "Agricola", "Agum", "Ahlert", "Ahorning", "Ährengatter", "Ährenstein", "Aichhain", "Alatzer", "Albahir", "Albenbluth", "Alcorta", "Aldewen", "Aldubhor", "Alforan", "Algerein", "Alkasim", "Almanzar", "Alrauninger", "Alrikshuber", "Alshirasgan", "Alst", "Alstersen", "Altenauer", "Altenfurt", "Altgewander", "Altnardesfeld", "Altpranger", "Altrovis", "Altschuh", "Altschulz", "Alttdorfer", "Altzoller", "Alvarez", "Alwinnen", "Amazetti", "Amselsprung", "Andersin", "Andronier", "Angenforst", "Angenfurt", "Angerling", "Angstmann", "Anguissola", "Angwartshof", "Anjuhal", "Ansfinion", "Anthos", "Anzani", "Apfelbrandt", "Appelauen", "Appelstrunk", "Aranol", "Arauken", "Arbalista", "Arberdan", "Aringen", "Arkenser", "Arlin", "Arlovan", "Armiger", "Armshaus", "Arodon", "Arponia", "Arragenos", "Arrelfinger", "Arres", "Arresta", "Arsago", "Arsinger", "Arsteener", "Artesa", "Aschenfeld", "Assiref", "Auenfels", "Auensen", "Auerbach", "Auerfelde", "Auermund", "Auersbrück", "Auersfurt", "Augstein", "Babek", "Bachenbrecht", "Bachental", "Bächerle", "Baderer", "Baerensen", "Baernfarn", "Baernhold", "Baerow", "Ballenbinder", "Ballurat", "Bänder", "Barbek", "Barberigo", "Bardostein", "Bärenau", "Bärenklamm", "Bärental", "Barrera", "Barschengrund", "Bauernschäfer", "Baumbach", "Beater", "Bebendorf", "Bedofeld", "Beilbergen", "Beilunker", "Beinhauer", "Belafloros", "Beldenhag", "Belketal", "Bellentor", "Bennain", "Beratas", "Berg", "Bergenhang", "Bergenhus", "Berghusen", "Bergner", "Bergwacht", "Berlind", "Berlinghan", "Bernigandh", "Bertenschlag", "Berylli", "Beschleger", "Bibbiena", "Bibergau", "Bienenbusch", "Bierbrodt", "Billingen", "Binsböckel", "Binsen", "Binsenbeck", "Birgelbaum", "Birkenbach", "Birkenhain", "Birkenoff", "Birnbrosch", "Birselburg", "Bitterwein", "Bjaldorn", "Blabudao", "Blaemendal", "Blatner", "Blaubinge", "Blauenburg", "Bleichenwang", "Blütenfeld", "Blutfelden", "Boccalino", "Bock", "Bockfold", "Bocksweiler", "Bodiak", "Bogner", "Bolongaro", "Bomarzo", "Borgrun", "Borkenquell", "Borking", "Borkmeister", "Bornski", "Boronez", "Boronsruh", "Bösbold", "Bosvani", "Botero", "Botta", "Braast", "Brabaker", "Brachental", "Brachfelder", "Brachinger", "Braelghan", "Braken", "Bramhusen", "Brannofend", "Brannthagen", "Branugion", "Bregelsaum", "Breitenauer", "Breitner", "Bresefinck", "Brinbaum", "Brinnske", "Bronzino", "Broock", "Bruadhir", "Bruchau", "Bruchklinger", "Buchenhain", "Buchenschlag", "Buffarsis", "Bugenbühl", "Bugenhog", "Burkherdall", "Burmisch", "Buthner", "Caelman", "Caeroda", "Caervinus", "Cairano", "Calavanti", "Calmo", "Caranda", "Casarez", "Casella", "Castanyeda", "Castellani", "Castellus", "Castesius", "Castracane", "Cavalcanti", "Cavazaro", "Celarier", "Cerrano", "Cervilier", "Charazzar", "Collen", "Comitez", "Conchobair", "Contador", "Corfaia", "Cornamusa", "Cornio", "Corodovan", "Corsini", "Cortak", "Cosentino", "Crassac", "Cronbiegler", "Crumold", "Cuifinn", "Culming", "da Vanya", "Dallenstein", "Damme", "Damotil", "Danckert", "Dappersjen", "Darben", "Darbhork", "Darbonia", "Darbonius", "Dargel", "Darneel", "Darpater", "Darpatstrom", "Daske", "Daubenmacher", "Debreker", "Degenhardt", "Deichbauer", "Deickmoler", "Delazar", "Dergelbauer", "Dergelbrück", "Dergeler", "Dergelquell", "Dergelstein", "Dernheim", "di Lacara", "di Madjani", "di Rastino", "Diegeler", "Dinckel", "Dinkelkorn", "Dobelsteen", "Dogulsfurt", "Dohlfelder", "Dolvarn", "Dominez", "Dominguez", "Donnerbach", "Donnerbacher", "Donnersin", "Donsemkin", "Dorcken", "Doredan", "Dornensee", "Dotzen", "Drachenschlag", "Drachenwacht", "Drachenwehr", "Draustein", "Dreuber", "Dreyschwerdt", "Droste", "Drulgosch", "Drusus", "Dschadirez", "Dübelsen", "Dumpfbrodt", "Dunkelfähr", "Dunkelfelde", "Dunkelforst", "Dunkelschlund", "Dunkelsfarn", "Dunkelsinn", "Dunkelstein", "Durazzo", "Durenald", "Ebelsen", "Ebering", "Ebersdorf", "Ebersen", "Ebersfeld", "Eberstamm", "Eelkinnen", "Egeling", "Egelsen", "Ehrenstein", "Ehrwald", "Eichenschlag", "Eicherich", "Eichinger", "Eichmoor", "Eichmoorer", "Einsäckler", "Eisenblatt", "Eisenhuett", "Eisenrath", "Eisenstein", "Eisensteyn", "Eisenwacht", "Eisenwald", "Eisinger", "Eisner", "Eisslingern", "Eldenpart", "Elenvina", "Elgeryn", "Elkauen", "Elkensen", "Ellenforst", "Elmsjen", "Emmersen", "Engstrand", "Erabenas", "Erbarmen", "Erlbach", "Erlbrück", "Erlenfang", "Erlenfold", "Erlengrund", "Erlenseer", "Erlenstamm", "Erlingsen", "Ernathesa", "Eryn", "Eschberg", "Eschenfurt", "Eschgeier", "Eslamsrodener", "Eslebon", "Esthenar", "Fahrenholz", "Faic", "Falconier", "Falconieri", "Faldahon", "Falkenhag", "Falkenstein", "Fälklin", "Fangeysen", "Farfara", "Farnwart", "Fassbender", "Fassmacher", "Fatzmann", "Faulhaber", "Fegentritt", "Feldharsch", "Fellner", "Femel", "Fennling", "Fenwasian", "Fetthennen", "Fiammingo", "Fidian", "Findeis", "Findeisen", "Fingorn", "Finsterbach", "Finsterbacher", "Finsterbinge", "Finsterforst", "Finsterkamm", "Finsterried", "Finsterrode", "Finstertann", "Fiovarez", "Firnberger", "Firnholz", "Firnske", "Firunkis", "Firunslicht", "Firunsschilfen", "Fischbach", "Fischle", "Flegelschinder", "Fleischhauer", "Floridan", "Flösser", "Flößler", "Flusswieser", "Fluvier", "Föhrenkuppe", "Föhrenschild", "Folango", "Fondolo", "Fontanez", "Fontanoya", "Forca", "Foscani", "Franfeld", "Frantischek", "Fredor", "Freidank", "Freienstetter", "Freudenberg", "Fronforst", "Frostwein", "Fuchsen", "Fuchshag", "Funkenschein", "Funkensen", "Furbesca", "Furlani", "Fuxfell", "Gabbura", "Gabelweyhe", "Gaere", "Galahan", "Galandi", "Galdifei", "Galdurier", "Galener", "Galletta", "Gantenstein", "Ganzert", "Garan", "Gareth", "Garether", "Garnelhaun", "Garnelsaum", "Garsinger", "Gartimpski", "Gathris", "Gaucher", "Gebeinfeld", "Geltor", "Gemiol", "Gerbensen", "Gerber", "Gerberow", "Gerdenwald", "Gerfin", "Gernatfurten", "Gernotsborn", "Gerrholt", "Gerrich", "Gerstenbauer", "Gerstenschröter", "Gesse", "Ghislieri", "Gilindor", "Gischtreyter", "Gliependiek", "Glimmerdiek", "Glockenschlag", "Glotzenmacher", "Gnitzenspleiß", "Goldenbacher", "Goldweiler", "Golgarez", "Gorbas", "Gorbensen", "Gorodez", "Gorralas", "Gozzi", "Grabensalb", "Gradnochsjepengurken", "Gral", "Granelfels", "Grangorer", "Grauenfels", "Graufurt", "Gravura", "Graziani", "Gredo", "Greifax", "Greifenau", "Greifenberg", "Greifenfeldt", "Greifenfurter", "Greifenhorst", "Greifenklamm", "Greifentreu", "Greven", "Greyfenstein", "Griff", "Grimani", "Gringelbaum", "Grobbinder", "Groterian", "Grötz", "Grubrech", "Grumpen", "Grünau", "Grünauen", "Grunder", "Grünfelde", "Gscheidtner", "Güldenhang", "Gutheis", "Gutmund", "Gwenlian", "Haberle", "Hainsate", "Halbach", "Halliger", "Halwartshof", "Hammerfaust", "Harbener", "Hardenfels", "Harlburg", "Harmamund", "Harnischmacher", "Hartsteen", "Hartsteener", "Hasenfeld", "Hasenfuß", "Häsler", "Haubeiler", "Haverdan", "Heimbürger", "Heisinger", "Hellron", "Helman", "Helmisch", "Henningsen", "Herbonia", "Herlogan", "Herrenwalde", "Heuhufer", "Hexenhain", "Hiligon", "Hinske", "Hintersass", "Hinzk", "Hirschfurten", "Hohenholz", "Hohenstein", "Hohenwald", "Hollbeerer", "Hollerheider", "Hollerow", "Holzer", "Holzgut", "Holzhauer", "Honorald", "Horger", "Horigan", "Hornstetter", "Horrad", "Hortulani", "Hufener", "Hugendam", "Hugendubel", "Huisdorn", "Hullheimer", "Hyttenhau", "Ibenburg", "Ibendorn", "Ilmensen", "Ilmenstein", "Ilsand", "IlsUrer", "Ilumkis", "Immenstatt", "Inezano", "Ingvaler", "Ingvalsrohden", "Inke", "Inken", "Inveric", "Isenborn", "Isenbruckner", "Issefura", "Jacobella", "Jannerloff", "Jannske", "Jelling", "Joborner", "Jochmeier", "Jolen", "Juchski", "Jurios", "Kalamal", "Kalando", "Kaldenberg", "Kaltenalrik", "Kaltenstein", "Kammergrad", "Kannenbäcker", "Karden", "Karenkis", "Karensen", "Karjensen", "Karolus", "Karsidian", "Kasmyrin", "Kasmyrion", "Kathenberg", "Kätner", "Katorz", "Keilholtz", "Keres", "Kerkill", "Kessler", "Kevendoch", "Kieselburg", "Kirschhausen", "Kirschner", "Kleibock", "Kleinbrück", "Klingenbruch", "Klinghammer", "Klippstein", "Knochenhacker", "Knochenhain", "Knochenklauer", "Knurrpfütz", "Kohlbauer", "Kolburg", "Kolding", "Kolenbrander", "Köpenvind", "Korber", "Korigez", "Koriguez", "Kormin", "Korninger", "Korswandt", "Koschfurt", "Koschtal", "Koyner", "Krähenklamm", "Kranick", "Kratosmann", "Krempelow", "Krennelsiek", "Krück", "Kruschin", "Krytzdorfer", "Küferhilf", "Kuhbauer", "Kunzke", "Kupferfeld", "Kureon", "Kurfeld", "Kurstan", "Kyndocher", "Lafierei", "Laikis", "Lammersen", "Lamperez", "Landsknecht", "Langfurt", "Lanistos", "Lanzendorf", "Larinow", "Larsach", "Lasca", "Lassan", "Lausinger", "Lautenschläger", "Lederer", "Ledersen", "Leerscheun", "Leitgeb", "Leuenberg", "Leuenfeld", "Leuenfelde", "Leuenfeste", "Leuengrund", "Lewenstein", "Lichtblick", "Lichtenberg", "Lichtenfelde", "Lichthagen", "Liekenstek", "Liepenstein", "Liliengrund", "Lindenbauer", "Lindenhain", "Linnenschneider", "Linnentreu", "Linneweber", "Liphesier", "Llud", "Lonnert", "Loreter", "Lorvai", "Löwenhaupt", "Löwental", "Löwenthal", "Luminoff", "Lupinez", "Luring", "Machalich", "Madarez", "Malagreia", "Malagro", "Malter", "Maltichio", "Mandelaug", "Manzanares", "Marag", "Markwardt", "Marmotte", "Marnion", "Marquez", "Matarazzo", "Maurenbrecher", "Mazarin", "Meeltheuer", "Meiling", "Meilingen", "Melber", "Melior", "Melkom", "Memnusier", "Menderath", "Mercator", "Meridiana", "Mersingen", "Merzari", "Meskinske", "Miljes", "Mirador", "Mittelleydingen", "Mohnsack", "Möhrfelden", "Monesta", "Montazzi", "Monte", "Monterey", "Montez", "Monzon", "Moorstein", "Moorweiden", "Morales", "Morcalino", "Morgenroth", "Muckenschlag", "Mudejar", "Mühlenfels", "Mührensen", "Muratori", "Muselken", "Musker", "Muwallar", "Nabersin", "Nablafurt", "Nablafurten", "Nadoret", "Nagragski", "Narveer", "Nattel", "Natternfurt", "Natterngras", "Natterwacht", "Nebelstein", "Neethling", "Nestefan", "Netzknüpfer", "Neustädter", "Neuwirt", "Neuwirth", "Niamad", "Niederauen", "Niederborking", "Niederweyhe", "Nietendeeler", "Niriansee", "Nirrano", "Nivelar", "Nordfalk", "Nordweide", "Notfink", "Notjes", "Notmark", "Novara", "Obernhofer", "Ochs", "Ochsenbrecht", "Ochsenherder", "Ochsenwasser", "Ockenheld", "Offantas", "Ogerbusch", "Okenheld", "Olben", "Oldenport", "Olhantur", "Olibantin", "Onderbruk", "Ongswin", "Oppstein", "Orkendräu", "Orkenhau", "Orkenhauer", "Orkenschild", "Orkenwall", "Orkschläger", "Ornibian", "Oskin", "Ossentani", "Osthagen", "Ostlander", "Otternpfot", "Ottresker", "Outerich", "Ouvensen", "Pamphili", "Pandlaril", "Parenkis", "Pausbäcker", "Peddersen", "Peddersjepen", "Pelargon", "Perainlober", "Perainslober", "Peresen", "Pering", "Pernstyn", "Perschoff", "Peruzzi", "Peukin", "Peutler", "Pfeifenbold", "Pheligonde", "Phelipez", "Phexhilf", "Piccinino", "Pichelstein", "Pipote", "Piriones", "Pitanza", "Plötzbogen", "Plötzingen", "Pontre", "Ponziani", "Praiosau", "Praiosberger", "Praiostreu", "Prefudi", "Prosperi", "Protzinger", "Pulether", "Puschinske", "Puspersen", "Quakenbrück", "Quandt", "Quarzen", "Quelldunkel", "Quendillion", "Quent", "Queseda", "Quintian", "Quintone", "Rabenfeld", "Rabenmund", "Rabenstein", "Rabenthal", "Rabentreu", "Rabrunati", "Rädle", "Radostai", "Radrombrücken", "Radromfelde", "Radromsauer", "Radromtaler", "Raffacani", "Ragather", "Ragathsquell", "Ragaza", "Rallersin", "Ramirez", "Ranerer", "Rantiguus", "Rappenstein", "Rastburger", "Rathilsteiner", "Rattel", "Rauerding", "Rauleu", "Rebenthal", "Rechenmacher", "Rechthag", "Regalado", "Regotis", "Reichenstieg", "Reichsweg", "Reiffenberg", "Rennetal", "Rheideryan", "Riedenburg", "Riedenbusch", "Riedenschäfer", "Riedner", "Riemenschneider", "Riethard", "Rijßen", "Rikvard", "Rindsherder", "Riswulf", "Rivito", "Rivitoz", "Rocambole", "Rochas", "Rodensen", "Rodiak", "Rogel", "Rohleder", "Rohtkop", "Rondriguez", "Roskop", "Rosshagen", "Rotbaum", "Rotenwasser", "Rothair", "Rotwasser", "Rubini", "Ruderow", "Rüdwein", "Ruffo", "Rundarek", "Rundling", "Runhager", "Runkler", "Rüsterbach", "Rutella", "Ruttel", "Salderkeim", "Salderken", "Saldersand", "Salis", "Salmfang", "Salmingen", "Salmoranes", "Salmorantes", "Salvian", "Salzbruck", "Salzerin", "Samudo", "Sandoval", "Sandoz", "Sandström", "Sanin", "Santana", "Sappenstiel", "Sardubh", "Sarostes", "Sattelhuber", "Saueringer", "Sbasiti", "Scacabarozzi", "Scala", "Scardeoni", "Schäfchenbauer", "Schafensen", "Schäfer", "Schafweide", "Schattengrund", "Schattenstein", "Schauer", "Scheffelstein", "Schildmacher", "Schilfsend", "Schilfweih", "Schinder", "Schlachtrössler", "Schladromir", "Schlehwein", "Schleiffenröchte", "Schlunder", "Schlüsselburg", "Schmied", "Schnakensee", "Schnattermoor", "Schneehag", "Schnewlin", "Schollbrecher", "Schönburg", "Schönredner", "Schönwald", "Schorkin", "Schossko", "Schotterbier", "Schotterfels", "Schrauffenfels", "Schreyenfels", "Schroffenstein", "Schwarzforst", "Schwarzsicheln", "Schwarztannen", "Schweinsfold", "Schwertdegen", "Schwertleihe", "Scossavalli", "Scribani", "Sculptor", "Sebelgarn", "Seehoff", "Seffelgruber", "Seggenmund", "Sehweinwirt", "Sembelquaster", "Sensendengler", "Sensenhöh", "Serpoleth", "Sewerin", "Sewerski", "Sfalia", "Sfandini", "Sfapano", "Sforigan", "Sgirra", "Sichelbruch", "Sichelgrab", "Siebenackern", "Silbergießer", "Silkwies", "Simener", "Simis", "Sindelsaum", "Sismondi", "Siveling", "Sjepengurken", "Sjepensen", "Sonnenschauer", "Sonnfelder", "Soranzo", "Soveranus", "Spada", "Spichbrecher", "Spillatori", "Spilman", "Spogelsen", "Starkenfall", "Starkentrutz", "Steineichenwacht", "Steinfels", "Steinhag", "Steinhauer", "Steinschläger", "Stellmach", "Stellmacher", "Stepahan", "Stewir", "Stiewick", "Stipenbrink", "Stipkow", "Stippwitz", "Stoerrebrandt", "Straub", "Streitzig", "Sturmfels", "Sturmtrutzer", "Sturzbach", "Styper", "Surjeloff", "Sylvaron", "Sylvatica", "Taladan", "Taladur", "Tandosch", "Tannhaus", "Tannhauser", "Tannspitz", "Tannwirk", "Tatzenhain", "Taubentanz", "Tauron", "Tebaldeo", "Tefoso", "Teichenberger", "Terumaris", "Tharedion", "Theuermeel", "Tiamartin", "Tiefenbach", "Tiefenklamm", "Tiefenthal", "Timpski", "Tirandur", "Tlarun", "Tobelberg", "Toberen", "Tobrier", "Tommelfurt", "Torese", "Torre", "Tortona", "Trabbacantes", "Trallo", "Trapani", "Trappdorf", "Travinger", "Treie", "Trequona", "Treublatt", "Treufreund", "Triffon", "Tripalda", "Trollsburg", "Trollstädt", "Trollzacker", "Trübsinn", "Trutzbacher", "Trutzburg", "Tryming", "Tsafelde", "Tucher", "Tuchner", "Tuchschneider", "Tuljow", "Tulop", "Turjeleff", "Turmer", "Twergengrund", "Udaman", "Uhl", "Ulaman", "Ulfaran", "Ulmenburg", "Ulmenhain", "Ulmenschläger", "Ulmensen", "Ulmski", "Uludaz", "Unfreund", "Unterbauer", "Uztrutz", "Vairningen", "Valdepenya", "Valerier", "Vansanti", "Vardeen", "Varener", "Vargurd", "Vascagni", "Veneter", "Vestwind", "Vialigh", "Viehtreiber", "Viereicher", "Vildromtaler", "Villani", "Viryamun", "Viskoppen", "Visserad", "vom Berg", "vom See", "Waidmann", "Waischenroth", "Waldeck", "Waldereck", "Waldner", "Walroder", "Walsareff", "Walsjakow", "Waltich", "Wangelwilder", "Warftburg", "Warunker", "Webner", "Wehrlau", "Weiden", "Weiseprein", "Weißbleichner", "Weissenberg", "Weißenstein", "Wengenholm", "Wenzelin", "Werckenfels", "Werthag", "Wertlingen", "Westerfolden", "Westwind", "Widdernhall", "Willant", "Willbergen", "Wilmhold", "Windisch", "Windock", "Windrufer", "Winkelhauser", "Winterkalt", "Wirth", "Witzeney", "Wolfenhain", "Wolfhein", "Wolfshag", "Wolfsruf", "Wolfsstein", "Wollmacher", "Wollweber", "Wolpjes", "Wolter", "Wosna", "Wulfen", "Wulfenfels", "Wulfenforst", "Wulfenried", "Wulfenthurm", "Wulfing", "Wulfsen", "Wulfski", "Wyrmbluth", "Xerber", "Yaquira", "Ysilier", "Yyoffrynn-Thama", "Zalahan", "Zaldahan", "Zalfor", "Zampante", "Zandor", "Zeel", "Zehntner", "Zerte", "Zertoba", "Zibbelgruber", "Zitterfels", "Zoppino", "Zornbold", "Zubertin", "Zulhamidez", "Zurriaga", "Zweifelfels", "Zweischwert", "Zweiseen", "Zwerchinger", "Zweyfeldt", "Zwirnbusch"];
		
		//Generiert Vornamen für männliche Zwerge
		function generateVornameMaennlichZwerg() {
			const nm1 = ["Ad", "Alb", "Ba", "Bar", "Belo", "Brot", "Da", "Dal", "Dar", "Del", "Duer", "Dwo", "Eb", "Ein", "Ela", "Eri", "Fall", "Far", "Gar", "Gil", "Gim", "Har", "Kil", "Mor", "Nal", "Nor", "Nura", "Olo", "Ol", "Or", "Os", "Ran", "Rei", "Ru", "Tak", "Thor", "Thra", "Tor", "Trau", "Tra", "Ulf", "Ur", "Ve", "Von", "Whur"];
			const nm2 = ["rik", "erich", "ern", "endd", "ril", "tor", "in", "gal", "rak", "elg", "gath", "ric", "erk", "kil", "im", "as", "ond", "grim", "dain", "thur", "gen", "urt", "bek", "drak", "var", "gran", "kral", "ral", "dak", "val", "unt", "sik", "kar", "linn", "adin", "dal", "dek", "bon", "vok", "gar", "aim", "it", "bin"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Zwerge hinzu
		const vornameMaennlichZwerg = [];
		for (let i = 0; i < 1000; i++) {
			vornameMaennlichZwerg.push(generateVornameMaennlichZwerg());
		}
		
		//Generiert Vornamen für weibliche Zwerge
		function generateVornameWeiblichZwerg() {
			const nm1 = ["An", "Ar", "Aud", "Bali", "Bar", "Bol", "Dag", "Da", "Del", "Die", "El", "Eri", "Falk", "Fall", "Fi", "Gil", "Gunn", "Gur", "Hel", "Hli", "Il", "Ja", "Kath", "Ki", "Kris", "Lif", "Mara", "Mar", "Mora", "Nala", "Nor", "Nur", "Or", "Ov", "Ris", "Sa", "Ther", "Tho", "Tor", "Torg", "Ursh", "Vali", "Vis", "Vona", "Wer", "Whur", "Yur"];
			const nm2 = ["bera", "tin", "hild", "fra", "bena", "dryn", "nal", "riff", "re", "sa", "deth", "dred", "runn", "thra", "nellen", "lyd", "loda", "dis", "gret", "ja", "n", "de", "rana", "ra", "lia", "tryd", "trasa", "styr", "na", "ed", "a", "kara", "iff", "ina", "wynn", "nnl", "lin", "dris", "drid", "ga", "ar", "da", "tra", "ydd", "gunn"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Zwerge hinzu
		const vornameWeiblichZwerg = [];
		for (let i = 0; i < 1000; i++) {
			vornameWeiblichZwerg.push(generateVornameWeiblichZwerg());
		}
		
		//Generiert Vornamen für nicht-binäre Zwerge
		function generateVornameNichtbinaerZwerg() {
			const nm1 = ["Ad", "Alb", "Ba", "Bar", "Belo", "Brot", "Da", "Dal", "Dar", "Del", "Duer", "Dwo", "Eb", "Ein", "Ela", "Eri", "Fall", "Far", "Gar", "Gil", "Gim", "Har", "Kil", "Mor", "Nal", "Nor", "Nura", "Olo", "Ol", "Or", "Os", "Ran", "Rei", "Ru", "Tak", "Thor", "Thra", "Tor", "Trau", "Tra", "Ulf", "Ur", "Ve", "Von", "Whur", "An", "Ar", "Aud", "Bali", "Bar", "Bol", "Dag", "Da", "Del", "Die", "El", "Eri", "Falk", "Fall", "Fi", "Gil", "Gunn", "Gur", "Hel", "Hli", "Il", "Ja", "Kath", "Ki", "Kris", "Lif", "Mara", "Mar", "Mora", "Nala", "Nor", "Nur", "Or", "Ov", "Ris", "Sa", "Ther", "Tho", "Tor", "Torg", "Ursh", "Vali", "Vis", "Vona", "Wer", "Whur", "Yur"];
			const nm2 = ["rik", "erich", "ern", "endd", "ril", "tor", "in", "gal", "rak", "elg", "gath", "ric", "erk", "kil", "im", "as", "ond", "grim", "dain", "thur", "gen", "urt", "bek", "drak", "var", "gran", "kral", "ral", "dak", "val", "unt", "sik", "kar", "linn", "adin", "dal", "dek", "bon", "vok", "gar", "aim", "it", "bin", "bera", "tin", "hild", "fra", "bena", "dryn", "nal", "riff", "re", "sa", "deth", "dred", "runn", "thra", "nellen", "lyd", "loda", "dis", "gret", "ja", "n", "de", "rana", "ra", "lia", "tryd", "trasa", "styr", "na", "ed", "a", "kara", "iff", "ina", "wynn", "nnl", "lin", "dris", "drid", "ga", "ar", "da", "tra", "ydd", "gunn"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Zwerge hinzu
		const vornameNichtbinaerZwerg = [];
		for (let i = 0; i < 1000; i++) {
			vornameNichtbinaerZwerg.push(generateVornameNichtbinaerZwerg());
		}
		
		//Generiert Nachnamen für Zwerge
		function generateNachnameZwerg() {
			const nm1 = ["Ara", "Bal", "Blut", "Bof", "Bördig", "Braz", "Brut", "Cae", "Daer", "Dan", "Dar", "Durth", "Eisen", "Fall", "Feuer", "Frost", "Glan", "Goblin", "Gold", "Gor", "Grau", "Groß", "Halter", "Hammer", "Höl", "Immer", "Kraft", "Lod", "Lut", "Mori", "Ork", "Rakan", "Rubin", "Rumna", "Schaum", "Schlacht", "Silber", "Stahl", "Stark", "Stra", "Thra", "Tief", "Tor", "Tore", "Troll", "Un", "Wahr"];
			const nm2 = ["aln", "amboss", "ane", "aug", "axt", "bart", "bier", "blut", "bluter", "brek", "dahk", "dann", "derk", "err", "faust", "feind", "finder", "fund", "gak", "gart", "gehr", "gräber", "hak", "hammer", "heim", "hek", "herz", "hig", "humpen", "keln", "kil", "kith", "krak", "kral", "lack", "nor", "scharf", "schmied", "schreck", "stein", "unn", "vir", "zeh", "zik"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Zwerge hinzu
		const nachnameZwerg = [];
		for (let i = 0; i < 1000; i++) {
			nachnameZwerg.push(generateNachnameZwerg());
		}
		
		//Generiert Vornamen für männliche Elfen
		function generateVornameMaennlichElf() {
			const nm1 = ["Adr", "Ael", "Ahv", "Ara", "Aran", "Aus", "Aza", "Beir", "Cael", "Car", "Day", "Drea", "Eferr", "Eira", "Enia", "Er", "Ere", "Fiv", "Gallinn", "Genn", "Hada", "Hali", "Hei", "Hi", "Immer", "Ivell", "Kor", "Lam", "Lau", "Lu", "Mindar", "Na", "Nut", "Pael", "Per", "Quar", "Riar", "Rol", "Sovel", "Suhn", "Tham", "Thar", "Ther", "Uthem", "Vanu", "Var"];
			const nm2 = ["an", "ar", "ain", "mil", "nis", "t", "ki", "o", "drim", "ric", "ereth", "li", "il", "vel", "lis", "dan", "van", "in", "al", "rai", "math", "mo", "ios", "fel", "cian", "can", "tis", "ae", "ias", "en", "ion", "don", "iss", "ior", "ivol", "iatis", "ath", "is"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Elfen hinzu
		const vornameMaennlichElf = [];
		for (let i = 0; i < 1000; i++) {
			vornameMaennlichElf.push(generateVornameMaennlichElf());
		}
		
		//Generiert Vornamen für weibliche Elfen
		function generateVornameWeiblichElf() {
			const nm1 = ["Ad", "Ahi", "Altha", "Anas", "An", "Ar", "Bae", "Beth", "Bir", "Cae", "Chae", "Clai", "Da", "Dru", "El", "En", "Fa", "Felo", "Ha", "Ie", "Il", "Ir", "Jar", "Jelen", "Key", "Lesh", "Li", "Mai", "Mal", "Mer", "Mya", "Nai", "Quel", "Quill", "Ri", "Sa", "Shan", "Sha", "Sil", "Sum", "Thei", "Thia", "Tiaath", "Trau", "Va", "Val", "Xan"];
			const nm2 = ["rie", "nar", "ea", "trianna", "draste", "tinua", "ara", "litae", "rynna", "el", "lynn", "di", "ra", "silia", "ama", "na", "ral", "sial", "tae", "lenia", "anis", "ann", "sali", "neth", "leth", "anna", "a", "athah", "quis", "iele", "lee", "thethil", "vara", "enna", "athe", "daro", "riel", "airla", "va", "aqui", "nes", "rastra", "la", "que", "lam", "dania", "lanthe", "aphia"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Elfen hinzu
		const vornameWeiblichElf = [];
		for (let i = 0; i < 1000; i++) {
			vornameWeiblichElf.push(generateVornameWeiblichElf());
		}
		
		//Generiert Vornamen für nicht-binäre Elfen
		function generateVornameNichtbinaerElf() {
			const nm1 = ["Adr", "Ael", "Ahv", "Ara", "Aran", "Aus", "Aza", "Beir", "Cael", "Car", "Day", "Drea", "Eferr", "Eira", "Enia", "Er", "Ere", "Fiv", "Gallinn", "Genn", "Hada", "Hali", "Hei", "Hi", "Immer", "Ivell", "Kor", "Lam", "Lau", "Lu", "Mindar", "Na", "Nut", "Pael", "Per", "Quar", "Riar", "Rol", "Sovel", "Suhn", "Tham", "Thar", "Ther", "Uthem", "Vanu", "Var", "Ad", "Ahi", "Altha", "Anas", "An", "Ar", "Bae", "Beth", "Bir", "Cae", "Chae", "Clai", "Da", "Dru", "El", "En", "Fa", "Felo", "Ha", "Ie", "Il", "Ir", "Jar", "Jelen", "Key", "Lesh", "Li", "Mai", "Mal", "Mer", "Mya", "Nai", "Quel", "Quill", "Ri", "Sa", "Shan", "Sha", "Sil", "Sum", "Thei", "Thia", "Tiaath", "Trau", "Va", "Val", "Xan"];
			const nm2 = ["an", "ar", "ain", "mil", "nis", "t", "ki", "o", "drim", "ric", "ereth", "li", "il", "vel", "lis", "dan", "van", "in", "al", "rai", "math", "mo", "ios", "fel", "cian", "can", "tis", "ae", "ias", "en", "ion", "don", "iss", "ior", "ivol", "iatis", "ath", "is", "rie", "nar", "ea", "trianna", "draste", "tinua", "ara", "litae", "rynna", "el", "lynn", "di", "ra", "silia", "ama", "na", "ral", "sial", "tae", "lenia", "anis", "ann", "sali", "neth", "leth", "anna", "a", "athah", "quis", "iele", "lee", "thethil", "vara", "enna", "athe", "daro", "riel", "airla", "va", "aqui", "nes", "rastra", "la", "que", "lam", "dania", "lanthe", "aphia"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Elfen hinzu
		const vornameNichtbinaerElf = [];
		for (let i = 0; i < 1000; i++) {
			vornameNichtbinaerElf.push(generateVornameNichtbinaerElf());
		}
		
		//Generiert Nachnamen für Elfen
		function generateNachnameElf() {
			const nm1 = ["Alo", "Ama", "Ari", "Arnu", "Ber", "Caer", "Ca", "Casill", "Ci", "Dal", "Eatha", "Ere", "Etha", "Fash", "Fir", "Flo", "Gala", "Gol", "Ha", "Ho", "Ia", "Ill", "Ira", "Koeh", "Lath", "Lia", "Me", "My", "Nar", "Net", "Of", "Os", "O", "Qua", "Rae", "Ro", "Sel", "Sian", "Sui", "Syl", "Tei", "Til", "Wa", "With", "Xi", "Xist", "Ya"];
			const nm2 = ["ro", "kiir", "stacia", "essus", "anna", "evan", "donel", "phaxath", "tenirra", "threth", "anathan", "lena", "naeth", "nasath", "arash", "ahel", "shem", "nodel", "torah", "nali", "limion", "rineth", "thrana", "phelkiir", "napha", "lanna", "alas", "don", "liamne", "llerelel", "stralath", "lo", "yoive", "fandrus", "toroth", "thronus", "lanthri", "thran", "thenel", "evarun", "thrasas", "varanth", "nithra", "tathana", "santhi", "rethin", "loscient", "srith", "eldrin"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Elfen hinzu
		const nachnameElf = [];
		for (let i = 0; i < 1000; i++) {
			nachnameElf.push(generateNachnameElf());
		}
		
		//Generiert Vornamen für männliche Halblinge
		function generateVornameMaennlichHalbling() {
			const nm1 = ["Al", "An", "Ber", "Bob", "Ca", "Call", "Corr", "Dan", "Ed", "Eg", "El", "Er", "Fil", "Fin", "Fran", "Gar", "Gil", "Go", "Har", "Ig", "Jas", "Ke", "Kev", "Laz", "Ler", "Lind", "Ly", "Merr", "Mi", "Mor", "Ne", "Nev", "Os", "Per", "Pop", "Re", "Ros", "Sa", "Shar", "Ty", "Ul", "We", "Well", "Wen"];
			const nm2 = ["al", "am", "art", "bert", "bin", "born", "by", "can", "coe", "de", "del", "der", "die", "don", "e", "ed", "es", "ic", "il", "in", "ith", "klin", "le", "lo", "mo", "nad", "nan", "ner", "nie", "niel", "ob", "ol", "or", "per", "py", "ret", "rich", "rin", "ry", "th", "ton", "tran", "us", "walt"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Halblinge hinzu
		const vornameMaennlichHalbling = [];
		for (let i = 0; i < 1000; i++) {
			vornameMaennlichHalbling.push(generateVornameMaennlichHalbling());
		}
		
		//Generiert Vornamen für weibliche Halblinge
		function generateVornameWeiblichHalbling() {
			const nm1 = ["Al", "An", "Bel", "Blos", "Bre", "Call", "Chen", "Cor", "De", "Dell", "Ei", "Er", "Euph", "Geor", "Gyn", "Harr", "Jas", "Jill", "Jo", "Kith", "Lavi", "Lid", "Mae", "Mari", "Mer", "My", "Ned", "Nik", "No", "Oli", "Pae", "Pe", "Pen", "Philo", "Por", "Ro", "Rob", "Sar", "Sera", "Shae", "Sta", "Taw", "The", "Try", "Ty", "Va", "Ver", "Wel", "Will"];
			const nm2 = ["a", "ain", "al", "an", "arl", "bie", "cee", "da", "dry", "e", "ea", "ee", "ell", "emia", "gan", "gina", "gold", "ian", "ie", "iet", "ki", "la", "mena", "mine", "na", "ne", "ni", "nia", "nie", "o", "ow", "phina", "ra", "ri", "ria", "se", "som", "tia", "via", "ym"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Halblinge hinzu
		const vornameWeiblichHalbling = [];
		for (let i = 0; i < 1000; i++) {
			vornameWeiblichHalbling.push(generateVornameWeiblichHalbling());
		}
		
		//Generiert Vornamen für nicht-binäre Halblinge
		function generateVornameNichtbinaerHalbling() {
			const nm1 = ["Al", "An", "Ber", "Bob", "Ca", "Call", "Corr", "Dan", "Ed", "Eg", "El", "Er", "Fil", "Fin", "Fran", "Gar", "Gil", "Go", "Har", "Ig", "Jas", "Ke", "Kev", "Laz", "Ler", "Lind", "Ly", "Merr", "Mi", "Mor", "Ne", "Nev", "Os", "Per", "Pop", "Re", "Ros", "Sa", "Shar", "Ty", "Ul", "We", "Well", "Wen", "Al", "An", "Bel", "Blos", "Bre", "Call", "Chen", "Cor", "De", "Dell", "Ei", "Er", "Euph", "Geor", "Gyn", "Harr", "Jas", "Jill", "Jo", "Kith", "Lavi", "Lid", "Mae", "Mari", "Mer", "My", "Ned", "Nik", "No", "Oli", "Pae", "Pe", "Pen", "Philo", "Por", "Ro", "Rob", "Sar", "Sera", "Shae", "Sta", "Taw", "The", "Try", "Ty", "Va", "Ver", "Wel", "Will"];
			const nm2 = ["al", "am", "art", "bert", "bin", "born", "by", "can", "coe", "de", "del", "der", "die", "don", "e", "ed", "es", "ic", "il", "in", "ith", "klin", "le", "lo", "mo", "nad", "nan", "ner", "nie", "niel", "ob", "ol", "or", "per", "py", "ret", "rich", "rin", "ry", "th", "ton", "tran", "us", "walt", "a", "ain", "al", "an", "arl", "bie", "cee", "da", "dry", "e", "ea", "ee", "ell", "emia", "gan", "gina", "gold", "ian", "ie", "iet", "ki", "la", "mena", "mine", "na", "ne", "ni", "nia", "nie", "o", "ow", "phina", "ra", "ri", "ria", "se", "som", "tia", "via", "ym"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Halblinge hinzu
		const vornameNichtbinaerHalbling = [];
		for (let i = 0; i < 1000; i++) {
			vornameNichtbinaerHalbling.push(generateVornameNichtbinaerHalbling());
		}
		
		//Generiert Nachnamen für Halblinge
		function generateNachnameHalbling() {
			const nm1 = ["Älter", "Apfel", "Auf", "Brei", "Dick", "Distel", "Dorn", "Feg", "Flüster", "Frucht", "Gold", "Gras", "Groß", "Grün", "Gut", "Hell", "Honig", "Hügel", "Kessel", "Klein", "Kupfer", "Leis", "Ried", "Rot", "Sanft", "Sau", "Schatten", "Schilf", "Schnell", "Silber", "Sonn", "Stark", "Stein", "Tal", "Tee", "Tief", "Unter", "Warm", "Weis", "Wild", "Wurf", "Zehn"];
			const nm2 = ["acker", "aug", "band", "beere", "bein", "blatt", "blüte", "brück", "erd", "fass", "finger", "flasch", "freund", "fund", "fuß", "glas", "grund", "hand", "has", "herz", "hügel", "kessel", "kopf", "kupfer", "laub", "mann", "mantel", "maß", "maus", "mond", "pfiff", "sammler", "schnell", "schritt", "spitz", "stein", "topf", "wang", "wasser", "wies", "zweig"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Halblinge hinzu
		const nachnameHalbling = [];
		for (let i = 0; i < 1000; i++) {
			nachnameHalbling.push(generateNachnameHalbling());
		}
		
		//Generiert Vornamen für männliche Gnome
		function generateVornameMaennlichGnom() {
			const nm1 = ["Al", "An", "Aru", "Bil", "Bod", "Bro", "Bur", "Co", "Cram", "Dab", "De", "Dim", "Eber", "El", "Er", "Fab", "Fib", "Fon", "Frou", "Fru", "Ger", "Gim", "Gli", "Ig", "Jab", "Je", "Kel", "Kip", "Nam", "Opp", "Or", "Pag", "Pal", "Po", "Qua", "Rib", "Rim", "Ro", "Sap", "See", "Sen", "Sin", "Um", "War", "Wig", "Wob", "Wre", "Zaff", "Zo"];
			const nm2 = ["", "ma", "dy", "cka", "per", "ble", "le", "bed", "foo", "la", "on", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
			const nm3 = ["ston", "vyn", "verth", "wann", "bron", "nock", "occ", "gell", "by", "nap", "dob", "bean", "ble", "deb", "don", "ky", "len", "stib", "kin", "se", "ug", "bo", "ble", "im", "den", "ble", "do", "len", "per", "dle", "by", "ryn", "gen", "bar", "og", "len", "bles", "ple", "dar", "ply", "bo", "teq", "dri", "pen", "ryn", "gens", "bles", "enn", "rab", "ok"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name3 = nm3[Math.floor(Math.random() * nm3.length)];
			const name = name1 + name2 + name3;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Gnome hinzu
		const vornameMaennlichGnom = [];
		for (let i = 0; i < 1000; i++) {
			vornameMaennlichGnom.push(generateVornameMaennlichGnom());
		}
		
		//Generiert Vornamen für weibliche Gnome
		function generateVornameWeiblichGnom() {
			const nm1 = ["Aba", "Bimp", "Bree", "Buv", "Cal", "Ca", "Car", "Cum", "Da", "Do", "Du", "El", "Elly", "Eni", "Lil", "Loop", "Lor", "Luth", "Mard", "Mee", "Men", "Mum", "Nis", "Num", "Ny", "O", "Op", "Or", "Pa", "Pyn", "Qui", "Ra", "Rot", "Roy", "Sa", "Sha", "Siff", "Sym", "Ta", "Te", "Terv", "Tip", "Ul", "Un", "Vel", "Vir", "Way", "Ye", "Zan"];
			const nm2 = ["not", "ly", "ra", "la", "ne", "va", "joy", "meo", "na", "dle", "ple", "ve", "opti", "wo", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
			const nm3 = ["laba", "tin", "na", "vie", "bon", "mip", "lin", "pen", "ba", "lla", "mil", "la", "bell", "wick", "dda", "li", "ttin", "illa", "ra", "nab", "ny", "pena", "sa", "x", "da", "pah", "tle", "pop", "wyn", "nop", "ress", "ma", "around", "zeh", "cket", "be"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name3 = nm3[Math.floor(Math.random() * nm3.length)];
			const name = name1 + name2 + name3;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Gnome hinzu
		const vornameWeiblichGnom = [];
		for (let i = 0; i < 1000; i++) {
			vornameWeiblichGnom.push(generateVornameWeiblichGnom());
		}
		
		//Generiert Vornamen für nicht-binäre Gnome
		function generateVornameNichtbinaerGnom() {
			const nm1 = ["Al", "An", "Aru", "Bil", "Bod", "Bro", "Bur", "Co", "Cram", "Dab", "De", "Dim", "Eber", "El", "Er", "Fab", "Fib", "Fon", "Frou", "Fru", "Ger", "Gim", "Gli", "Ig", "Jab", "Je", "Kel", "Kip", "Nam", "Opp", "Or", "Pag", "Pal", "Po", "Qua", "Rib", "Rim", "Ro", "Sap", "See", "Sen", "Sin", "Um", "War", "Wig", "Wob", "Wre", "Zaff", "Zo", "Aba", "Bimp", "Bree", "Buv", "Cal", "Ca", "Car", "Cum", "Da", "Do", "Du", "El", "Elly", "Eni", "Lil", "Loop", "Lor", "Luth", "Mard", "Mee", "Men", "Mum", "Nis", "Num", "Ny", "O", "Op", "Or", "Pa", "Pyn", "Qui", "Ra", "Rot", "Roy", "Sa", "Sha", "Siff", "Sym", "Ta", "Te", "Terv", "Tip", "Ul", "Un", "Vel", "Vir", "Way", "Ye", "Zan"];
			const nm2 = ["", "ma", "dy", "cka", "per", "ble", "le", "bed", "foo", "la", "on", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "not", "ly", "ra", "la", "ne", "va", "joy", "meo", "na", "dle", "ple", "ve", "opti", "wo", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
			const nm3 = ["ston", "vyn", "verth", "wann", "bron", "nock", "occ", "gell", "by", "nap", "dob", "bean", "ble", "deb", "don", "ky", "len", "stib", "kin", "se", "ug", "bo", "ble", "im", "den", "ble", "do", "len", "per", "dle", "by", "ryn", "gen", "bar", "og", "len", "bles", "ple", "dar", "ply", "bo", "teq", "dri", "pen", "ryn", "gens", "bles", "enn", "rab", "ok", "laba", "tin", "na", "vie", "bon", "mip", "lin", "pen", "ba", "lla", "mil", "la", "bell", "wick", "dda", "li", "ttin", "illa", "ra", "nab", "ny", "pena", "sa", "x", "da", "pah", "tle", "pop", "wyn", "nop", "ress", "ma", "around", "zeh", "cket", "be"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name3 = nm3[Math.floor(Math.random() * nm3.length)];
			const name = name1 + name2 + name3;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Gnome hinzu
		const vornameNichtbinaerGnom = [];
		for (let i = 0; i < 1000; i++) {
			vornameNichtbinaerGnom.push(generateVornameNichtbinaerGnom());
		}
		
		//Generiert Nachnamen für Gnome
		function generateNachnameGnom() {
			const nm1 = ["Alba", "Wirr", "Be", "Boon", "Kobbe", "Daer", "Dun", "Fabbel", "Fappel", "Fiedel", "Fol", "Gar", "Gim", "Funkel", "Gobbel", "Gum", "Horcus", "Hampel", "Eisen", "Lef", "Lingen", "Loo", "Mäkkel", "Miggel", "Mung", "Mur", "Mus", "Na", "Nin", "Nopen", "Nuckel", "Off", "Oom", "Pil", "Pin", "Kiel", "Raul", "Rie", "Roffer", "Schep", "Schatten", "Silber", "Sym", "Tarkel", "Tim", "Tu", "Umbo", "Waggel", "Wel", "Wild"];
			const nm2 = ["ra", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "fol", "", "gel", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ];
			const nm3 = ["tie", "stein", "ren", "diggel", "lobb", "gel", "ben", "stabbel", "stamp", "fenn", "kor", "rick", "len", "firn", "men", "porcus", "bampel", "fell", "fery", "hall", "lue", "ferß", "dy", "gen", "nig", "graben", "ckel", "stallen", "stemp", "und", "traul", "wicken", "gun", "schärfer", "nor", "ieß", "ton", "pen", "mantel", "garn", "pony", "by", "bers", "doben", "top", "ber", "wander"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name3 = nm3[Math.floor(Math.random() * nm3.length)];
			const name = name1 + name2 + name3;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Gnome hinzu
		const nachnameGnom = [];
		for (let i = 0; i < 1000; i++) {
			nachnameGnom.push(generateNachnameGnom());
		}
		
		//Generiert halbelfische Vornamen
		function generateHalbelfischerVorname(geschlecht) {
			let vorname;
		
			//Zufällig wählen, ob der Halbelf in einer elfischen oder menschlichen Gesellschaft aufgewachsen ist
			const elfAufgewachsen = Math.random() < 0.25; //25% Wahrscheinlichkeit für elfisch
			const gesellschaft = elfAufgewachsen ? "elfisch" : "menschlich";
		
			if (gesellschaft === "menschlich") {
				if (geschlecht === "männlich") {
					vorname = vornameMaennlichMensch[Math.floor(Math.random() * vornameMaennlichMensch.length)];
				} else if (geschlecht === "weiblich") {
					vorname = vornameWeiblichMensch[Math.floor(Math.random() * vornameWeiblichMensch.length)];
				} else {
					vorname = vornameNichtbinaerMensch[Math.floor(Math.random() * vornameNichtbinaerMensch.length)];
				}
			} else {
				if (geschlecht === "männlich") {
					vorname = vornameMaennlichElf[Math.floor(Math.random() * vornameMaennlichElf.length)];
				} else if (geschlecht === "weiblich") {
					vorname = vornameWeiblichElf[Math.floor(Math.random() * vornameWeiblichElf.length)];
				} else {
					vorname = vornameNichtbinaerElf[Math.floor(Math.random() * vornameNichtbinaerElf.length)];
				}
			}		
			return {
				vorname,
				gesellschaft
			};
		}
		
		//Funktion zur Generierung von halbelfischen Nachnamen
		function generateHalbelfischerNachname() {
			let nachname;
		
			//Zufällig wählen, ob der Halbelf in einer elfischen oder menschlichen Gesellschaft aufgewachsen ist
			const elfAufgewachsen = Math.random() < 0.5;
		
			if (elfAufgewachsen) {
				nachname = nachnameElf[Math.floor(Math.random() * nachnameElf.length)];
			} else {
				nachname = nachnameMensch[Math.floor(Math.random() * nachnameMensch.length)];
			}
		
			return {
				nachname,
				gesellschaft: elfAufgewachsen ? "elfisch" : "menschlich"
			};
		}
		
		//Funktion zur Generierung von halbelfischen Vornamen (männlich)
		function generateVornameMaennlichHalbelf() {
			const vornameListe = [];
			for (let i = 0; i < 1000; i++) {
				const halbelf = generateHalbelfischerVorname("männlich");
				vornameListe.push(halbelf.vorname);
			}
			return vornameListe;
		}
		
		//Funktion zur Generierung von halbelfischen Vornamen (weiblich)
		function generateVornameWeiblichHalbelf() {
			const vornameListe = [];
			for (let i = 0; i < 1000; i++) {
				const halbelf = generateHalbelfischerVorname("weiblich");
				vornameListe.push(halbelf.vorname);
			}
			return vornameListe;
		}
		
		//Funktion zur Generierung von halbelfischen Vornamen (nicht-binär)
		function generateVornameNichtbinaerHalbelf() {
			const vornameListe = [];
			for (let i = 0; i < 1000; i++) {
				const halbelf = generateHalbelfischerVorname("nicht-binär");
				vornameListe.push(halbelf.vorname);
			}
			return vornameListe;
		}
		
		//Funktion zur Generierung von halbelfischen Nachnamen
		function generateNachnameHalbelf() {
			const nachnameListe = [];
			for (let i = 0; i < 1000; i++) {
				const nachname = generateHalbelfischerNachname().nachname;
				nachnameListe.push(nachname);
			}
			return nachnameListe;
		}
				
		//Generiere Listen von halbelfischen Vornamen und Nachnamen
		const vornameMaennlichHalbelf = generateVornameMaennlichHalbelf();
		const vornameWeiblichHalbelf = generateVornameWeiblichHalbelf();
		const vornameNichtbinaerHalbelf = generateVornameNichtbinaerHalbelf();
		const nachnameHalbelf = generateNachnameHalbelf();
		
		//Generiert Vornamen für männliche Halborks
		function generateVornameMaennlichHalbork() {
			const nm1 = ["Ar", "Bra", "Bru", "Cag", "De", "Do", "Der", "Dru", "Fe", "Ge", "Gna", "Grum", "Gub", "Hag", "He", "Ho", "Hol", "Im", "Kar", "Ke", "Kor", "Kru", "Lub", "Meg", "Mhur", "Mor", "Ni", "Ny", "Od", "Oh", "Ren", "Re", "Ro", "Rra", "Sa", "Scra", "Sheg", "Shu", "Tang", "Tar", "Tha", "Tho", "Tra", "Ug", "Va", "Vil", "Yur", "Ze"];
			const nm2 = ["gran", "ak", "ug", "nch", "rn", "en", "uk", "eng", "ell", "arsh", "bar", "rash", "ren", "enk", "gar", "olg", "sh", "ash", "arg", "eth", "ag", "usk", "ged", "ord", "org", "il", "barg", "orr", "ohr", "dar", "esh", "ont", "ath", "ark", "gen", "ump", "lar", "ar", "okk", "arth", "berg", "urk", "ed"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Halborks hinzu
		const vornameMaennlichHalbork = [];
		for (let i = 0; i < 1000; i++) {
			vornameMaennlichHalbork.push(generateVornameMaennlichHalbork());
		}
		
		//Generiert Vornamen für weibliche Halborks
		function generateVornameWeiblichHalbork() {
			const nm1 = ["Ar", "Bag", "Ben", "Bil", "Brak", "Cree", "Dren", "Ekk", "Em", "En", "Fist", "Ga", "Gor", "Gra", "Gree", "Gri", "Gy", "Hra", "Hu", "Il", "Kab", "Kan", "Lag", "Lez", "Mur", "Mu", "My", "Nag", "Nee", "Ne", "No", "Oo", "Ov", "Own", "Pu", "Re", "Shau", "Sil", "Su", "Tag", "Taw", "To", "Ub", "Van", "Vo", "Vol", "Vor", "Yev", "Zag"];
			const nm2 = ["ha", "gi", "doo", "ga", "ka", "na", "ek", "en", "gong", "ula", "aki", "ai", "ba", "nk", "thy", "ru", "barg", "sif", "azi", "re", "gen", "rook", "ev", "rette", "lla", "gu", "lah", "tah", "ak", "yet", "eza", "tha", "gre", "ar", "omph", "ada", "chu", "la", "elda"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Halborks hinzu
		const vornameWeiblichHalbork = [];
		for (let i = 0; i < 1000; i++) {
			vornameWeiblichHalbork.push(generateVornameWeiblichHalbork());
		}
		
		//Generiert Vornamen für nicht-binäre Halborks
		function generateVornameNichtbinaerHalbork() {
			const nm1 = ["Ar", "Bra", "Bru", "Cag", "De", "Do", "Der", "Dru", "Fe", "Ge", "Gna", "Grum", "Gub", "Hag", "He", "Ho", "Hol", "Im", "Kar", "Ke", "Kor", "Kru", "Lub", "Meg", "Mhur", "Mor", "Ni", "Ny", "Od", "Oh", "Ren", "Re", "Ro", "Rra", "Sa", "Scra", "Sheg", "Shu", "Tang", "Tar", "Tha", "Tho", "Tra", "Ug", "Va", "Vil", "Yur", "Ze", "Ar", "Bag", "Ben", "Bil", "Brak", "Cree", "Dren", "Ekk", "Em", "En", "Fist", "Ga", "Gor", "Gra", "Gree", "Gri", "Gy", "Hra", "Hu", "Il", "Kab", "Kan", "Lag", "Lez", "Mur", "Mu", "My", "Nag", "Nee", "Ne", "No", "Oo", "Ov", "Own", "Pu", "Re", "Shau", "Sil", "Su", "Tag", "Taw", "To", "Ub", "Van", "Vo", "Vol", "Vor", "Yev", "Zag"];
			const nm2 = ["gran", "ak", "ug", "nch", "rn", "en", "uk", "eng", "ell", "arsh", "bar", "rash", "ren", "enk", "gar", "olg", "sh", "ash", "arg", "eth", "ag", "usk", "ged", "ord", "org", "il", "barg", "orr", "ohr", "dar", "esh", "ont", "ath", "ark", "gen", "ump", "lar", "ar", "okk", "arth", "berg", "urk", "ed", "ha", "gi", "doo", "ga", "ka", "na", "ek", "en", "gong", "ula", "aki", "ai", "ba", "nk", "thy", "ru", "barg", "sif", "azi", "re", "gen", "rook", "ev", "rette", "lla", "gu", "lah", "tah", "ak", "yet", "eza", "tha", "gre", "ar", "omph", "ada", "chu", "la", "elda"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Halborks hinzu
		const vornameNichtbinaerHalbork = [];
		for (let i = 0; i < 1000; i++) {
			vornameNichtbinaerHalbork.push(generateVornameNichtbinaerHalbork());
		}
		
		//Generiert Nachnamen für Halborks
		function generateNachnameHalbork() {
			const nm1 = ["Adern", "Axt", "Bestien", "Blank", "Blut", "Dämonen", "Dornen", "Dunkel", "Eisen", "Eiter", "Esel", "Faust", "Fels", "Feuer", "Frosch", "Frost", "Fuß", "Grimm", "Groll", "Hasen", "Hirn", "Höll", "Ketten", "Kinn", "Klingen", "Knack", "Knochen", "Krall", "Maden", "Qual", "Rache", "Riesen", "Rost", "Schädel", "Schatten", "Schlacht", "Schlamm", "Schmerz", "Schrei", "Spott", "Stark", "Stein", "Stink", "Sturm", "Teufels", "Unheils", "Venen", "Wolfs", "Zorn", "Zwei"];
			const nm2 = ["atem", "augen", "bann", "beißer", "blut", "bog", "bringer", "brüller", "darm", "donner", "faust", "fuß", "groll", "hand", "hauer", "haut", "heul", "kling", "knochen", "knurr", "kopf", "kratzer", "magen", "peitscher", "reißer", "rücken", "schädel", "schaffer", "schild", "schinder", "schlächter", "schlau", "schlitzer", "schmetter", "schmiss", "schrei", "schwinger", "speer", "spucker", "sprung", "stampfer", "stecher", "stürmer", "trampler", "tret", "verfolger", "wasch", "werf", "würger", "zorn"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Halborks hinzu
		const nachnameHalbork = [];
		for (let i = 0; i < 1000; i++) {
			nachnameHalbork.push(generateNachnameHalbork());
		}
		
		//Generiert Vornamen für männliche Drachenblütige
		function generateVornameMaennlichDrachenbluetiger() {
			const nm1 = ["A", "Ar", "Azz", "Bala", "Bara", "Bha", "Bidre", "Dada", "Dazz", "Dire", "Do", "Fa", "Gar", "Ghe", "Gor", "Gree", "Hes", "Hirra", "Il", "Kala", "Ker", "Kii", "Kri", "Maa", "Me", "Me", "Mo", "Mre", "Mugrun", "Na", "Nith", "Nork", "Nyk", "Pand", "Pa", "Pijj", "Quare", "Rath", "Rho", "Riva", "Sethre", "Sha", "She", "Sror", "Tar", "To", "Tryn", "Valo", "Vron", "Ze"];
			const nm2 = ["drex", "jhan", "akh", "sar", "dad", "rash", "ked", "lan", "azn", "cris", "naar", "ax", "gax", "sh", "bundus", "then", "kann", "thak", "dan", "kad", "rith", "iv", "gog", "drash", "hen", "zikth", "ksh", "den", "darr", "ther", "ruuth", "jed", "trin", "rik", "thon", "kran", "gar", "an", "kar", "mash", "dinn", "hun", "rinn", "nicus", "rean", "diss", "daar"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Drachenblütige hinzu
		const vornameMaennlichDrachenbluetiger = [];
		for (let i = 0; i < 1000; i++) {
			vornameMaennlichDrachenbluetiger.push(generateVornameMaennlichDrachenbluetiger());
		}
		
		//Generiert Vornamen für weibliche Drachenblütige
		function generateVornameWeiblichDrachenbluetiger() {
			const nm1 = ["Ak", "Aasa", "An", "Ara", "Bi", "Blen", "Bu", "Chass", "Da", "Den", "Dou", "Driin", "Egg", "Fari", "Fin", "Fur", "Ges", "Gil", "Ha", "Havi", "Heth", "Hilla", "Ja", "Je", "Jhe", "Ka", "Ko", "Me", "Mi", "Na", "Nuth", "Per", "Pogra", "Pyx", "Que", "Rai", "Re", "Ru", "Sa", "So", "Su", "Syn", "Tat", "Tha", "Ua", "Ve", "Zy"];
			const nm2 = ["ra", "thra", "trara", "va", "ri", "daeth", "rana", "ath", "ar", "tratha", "dra", "dar", "ren", "deh", "dex", "rele", "rethe", "kass", "rann", "lar", "ress", "not", "xi", "zean", "dana", "rinn", "gren", "jira", "shann", "la", "nix", "rin", "spa", "ann", "zena", "loth", "phara", "varan", "rina", "thrin", "yan", "djit", "zera", "kroff"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Drachenblütige hinzu
		const vornameWeiblichDrachenbluetiger = [];
		for (let i = 0; i < 1000; i++) {
			vornameWeiblichDrachenbluetiger.push(generateVornameWeiblichDrachenbluetiger());
		}
		
		//Generiert Vornamen für nicht-binäre Drachenblütige
		function generateVornameNichtbinaerDrachenbluetiger() {
			const nm1 = ["A", "Ar", "Azz", "Bala", "Bara", "Bha", "Bidre", "Dada", "Dazz", "Dire", "Do", "Fa", "Gar", "Ghe", "Gor", "Gree", "Hes", "Hirra", "Il", "Kala", "Ker", "Kii", "Kri", "Maa", "Me", "Me", "Mo", "Mre", "Mugrun", "Na", "Nith", "Nork", "Nyk", "Pand", "Pa", "Pijj", "Quare", "Rath", "Rho", "Riva", "Sethre", "Sha", "She", "Sror", "Tar", "To", "Tryn", "Valo", "Vron", "Ze", "Ak", "Aasa", "An", "Ara", "Bi", "Blen", "Bu", "Chass", "Da", "Den", "Dou", "Driin", "Egg", "Fari", "Fin", "Fur", "Ges", "Gil", "Ha", "Havi", "Heth", "Hilla", "Ja", "Je", "Jhe", "Ka", "Ko", "Me", "Mi", "Na", "Nuth", "Per", "Pogra", "Pyx", "Que", "Rai", "Re", "Ru", "Sa", "So", "Su", "Syn", "Tat", "Tha", "Ua", "Ve", "Zy"];
			const nm2 = ["drex", "jhan", "akh", "sar", "dad", "rash", "ked", "lan", "azn", "cris", "naar", "ax", "gax", "sh", "bundus", "then", "kann", "thak", "dan", "kad", "rith", "iv", "gog", "drash", "hen", "zikth", "ksh", "den", "darr", "ther", "ruuth", "jed", "trin", "rik", "thon", "kran", "gar", "an", "kar", "mash", "dinn", "hun", "rinn", "nicus", "rean", "diss", "daar", "ra", "thra", "trara", "va", "ri", "daeth", "rana", "ath", "ar", "tratha", "dra", "dar", "ren", "deh", "dex", "rele", "rethe", "kass", "rann", "lar", "ress", "not", "xi", "zean", "dana", "rinn", "gren", "jira", "shann", "la", "nix", "rin", "spa", "ann", "zena", "loth", "phara", "varan", "rina", "thrin", "yan", "djit", "zera", "kroff"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Drachenblütige hinzu
		const vornameNichtbinaerDrachenbluetiger = [];
		for (let i = 0; i < 1000; i++) {
			vornameNichtbinaerDrachenbluetiger.push(generateVornameNichtbinaerDrachenbluetiger());
		}
		
		//Generiert Nachnamen für Drachenblütige
		function generateNachnameDrachenbluetiger() {
			const nm1 = ["Akam", "Argen", "Ba", "Beryn", "Bhenk", "Caavyl", "Chumby", "Clenth", "Daar", "Del", "Dhyr", "Eby", "Ess", "Fharn", "Gha", "Grrrmm", "Gygaz", "Hash", "Hshh", "Imbix", "Jery", "Jhar", "Ker", "Kim", "Lham", "Linxa", "Mohr", "My", "Nem", "Nor", "Ophin", "Ore", "Pfaph", "Phrah", "Pyrax", "Qyx", "Ragh", "Shes", "Skaarz", "Sum", "Tiam", "Tur", "Um", "Vang", "Verthi", "Wivvyr", "Wys", "Xephyr", "Yar", "Zzxa"];
			const nm2 = ["bheryll", "thrix", "haro", "tolthro", "kumbyrz", "tera", "xirin", "tinthi", "den", "mi", "ktel", "nichto", "tyr", "gnarth", "alli", "ball", "zyly", "phrony", "ssto", "tellr", "nomo", "thra", "rhy", "ba", "bol", "kasen", "stan", "monis", "ixi", "shtala", "xijan", "nyrren", "dran", "talli", "pahr", "throk", "tende", "borro", "nargh", "", "", "", "", "", "", "", "", "", "", ""];
			const nm3 = ["iax", "us", "osh", "pal", "naax", "dyn", "nish", "allor", "drian", "rev", "onis", "monis", "lynn", "nost", "xirn", "hyst", "shrift", "xadyn", "roth", "nis", "xyn", "lon", "tuul", "dennish", "dalor", "ion", "adyll", "jiir", "dilin", "don", "gh", "naar", "liath", "thrysh", "lish", "phrael", "giesh", "phiax", "nor", "it", "manthyl", "nu", "byr", "don", "sathur", "holdal", "tong", "bah", "jer", "axth"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name3 = nm3[Math.floor(Math.random() * nm3.length)];
			const name = name1 + name2 + name3;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Nachnamen für Drachenblütige hinzu
		const nachnameDrachenbluetiger = [];
		for (let i = 0; i < 1000; i++) {
			nachnameDrachenbluetiger.push(generateNachnameDrachenbluetiger());
		}
		
		//Generiert Vornamen für männliche Tieflinge
		function generateVornameMaennlichTiefling() {
			const nm1 = ["Ab", "Ahr", "Ak", "Am", "An", "As", "Bal", "Bara", "Bath", "Ca", "Che", "Cim", "Cress", "Dama", "Eke", "Eu", "Fen", "For", "Ha", "Ia", "Kai", "Leu", "Mam", "Man", "Mar", "Mel", "Meri", "Mo", "Mor", "Ni", "Nir", "Ori", "Pay", "Pelai", "Pur", "Qe", "Ra", "Rim", "Sam", "Ska", "Teth", "Tha", "The", "Vala", "Vassa", "Xap", "Ze"];
			const nm2 = ["ad", "im", "men", "non", "dram", "tar", "am", "kas", "in", "em", "er", "el", "kos", "mon", "ron", "riz", "cas", "bor", "dos", "cis", "nen", "tus", "bas", "ech", "him", "dean", "dai", "thos", "cor", "gel", "ax", "os", "son", "muel", "mal", "mos", "ren", "muz", "rai", "far", "go", "pan", "par", "phan"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für männliche Tieflinge hinzu
		const vornameMaennlichTiefling = [];
		for (let i = 0; i < 1000; i++) {
			vornameMaennlichTiefling.push(generateVornameMaennlichTiefling());
		}
		
		//Generiert Vornamen für weibliche Tieflinge
		function generateVornameWeiblichTiefling() {
			const nm1 = ["Ak", "Ana", "Ar", "Asta", "Ay", "Az", "Bel", "Bry", "Bu", "Cri", "Dama", "Deca", "E", "Ga", "Go", "He", "Ish", "Jeze", "Ka", "Kalli", "Kas", "Ler", "Lil", "Maka", "Ma", "Marko", "Mas", "Naa", "Neme", "Ni", "Ori", "Os", "Phela", "Prosper", "Pu", "Py", "Ri", "Ron", "Sed", "Se", "Sekh", "Semy", "Sha", "Sor", "Uz", "Va", "Ve"];
			const nm2 = ["ta", "kis", "mara", "ro", "ym", "za", "eth", "seis", "ne", "ella", "ia", "rabia", "a", "dreel", "mory", "cat", "te", "beth", "li", "sta", "deya", "issa", "ith", "ria", "nea", "sian", "tema", "mah", "ja", "anna", "ah", "ine", "rah", "ra", "eta", "obe", "we", "dit", "ere", "met", "aza", "va", "ax", "ath", "pula", "par", "rin"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für weibliche Tieflinge hinzu
		const vornameWeiblichTiefling = [];
		for (let i = 0; i < 1000; i++) {
			vornameWeiblichTiefling.push(generateVornameWeiblichTiefling());
		}
		
		//Generiert Vornamen für nicht-binäre Tieflinge
		function generateVornameNichtbinaerTiefling() {
			const nm1 = ["Ab", "Ahr", "Ak", "Am", "An", "As", "Bal", "Bara", "Bath", "Ca", "Che", "Cim", "Cress", "Dama", "Eke", "Eu", "Fen", "For", "Ha", "Ia", "Kai", "Leu", "Mam", "Man", "Mar", "Mel", "Meri", "Mo", "Mor", "Ni", "Nir", "Ori", "Pay", "Pelai", "Pur", "Qe", "Ra", "Rim", "Sam", "Ska", "Teth", "Tha", "The", "Vala", "Vassa", "Xap", "Ze", "Ak", "Ana", "Ar", "Asta", "Ay", "Az", "Bel", "Bry", "Bu", "Cri", "Dama", "Deca", "E", "Ga", "Go", "He", "Ish", "Jeze", "Ka", "Kalli", "Kas", "Ler", "Lil", "Maka", "Ma", "Marko", "Mas", "Naa", "Neme", "Ni", "Ori", "Os", "Phela", "Prosper", "Pu", "Py", "Ri", "Ron", "Sed", "Se", "Sekh", "Semy", "Sha", "Sor", "Uz", "Va", "Ve"];
			const nm2 = ["ad", "im", "men", "non", "dram", "tar", "am", "kas", "in", "em", "er", "el", "kos", "mon", "ron", "riz", "cas", "bor", "dos", "cis", "nen", "tus", "bas", "ech", "him", "dean", "dai", "thos", "cor", "gel", "ax", "os", "son", "muel", "mal", "mos", "ren", "muz", "rai", "far", "go", "pan", "par", "phan", "ta", "kis", "mara", "ro", "ym", "za", "eth", "seis", "ne", "ella", "ia", "rabia", "a", "dreel", "mory", "cat", "te", "beth", "li", "sta", "deya", "issa", "ith", "ria", "nea", "sian", "tema", "mah", "ja", "anna", "ah", "ine", "rah", "ra", "eta", "obe", "we", "dit", "ere", "met", "aza", "va", "ax", "ath", "pula", "par", "rin"];
			const name1 = nm1[Math.floor(Math.random() * nm1.length)];
			const name2 = nm2[Math.floor(Math.random() * nm2.length)];
			const name = name1 + name2;
			return name.charAt(0).toUpperCase() + name.slice(1);
		}
		
		//Erstellt leeres Array und fügt eine Anzahl an Vornamen für nicht-binäre Tieflinge hinzu
		const vornameNichtbinaerTiefling = [];
		for (let i = 0; i < 1000; i++) {
			vornameNichtbinaerTiefling.push(generateVornameNichtbinaerTiefling());
		}
		
		const nachnameTiefling = nachnameMensch
		
		//Bereich der Buchbeschreibung
		
		let buchAlter = '';
		let buchZeiteinheit = '';
		let buchAuflage = '';
		let seitenZahl = '';
		let buchHöhe = '';
		let buchBreite = '';
		
		//Bestimmt das Alter des Buches
		function generateBookAge() {
			const randomNumber = Math.random() * 100;
			let buchAlter;
			let buchZeiteinheit;
		
			if (randomNumber >= 1 && randomNumber <= 2) {
				buchAlter = Math.floor(Math.random() * 4) + 1;
				buchZeiteinheit = buchAlter === 1 ? "Woche" : "Wochen";
			} else if (randomNumber >= 3 && randomNumber <= 5) {
				buchAlter = Math.floor(Math.random() * 4) + 1;
				buchZeiteinheit = buchAlter === 1 ? "Monat" : "Monate";
			} else if (randomNumber >= 6 && randomNumber <= 9) {
				buchAlter = Math.floor(Math.random() * 7) + 2;
				buchZeiteinheit = "Monate";
			} else if (randomNumber >= 10 && randomNumber <= 30) {
				buchAlter = Math.floor(Math.random() * 10) + 3;
				buchZeiteinheit = "Monate";
			} else if (randomNumber >= 31 && randomNumber <= 45) {
				buchAlter = Math.floor(Math.random() * 10) + 1;
				buchZeiteinheit = buchAlter === 1 ? "Jahr" : "Jahre";
			} else if (randomNumber >= 46 && randomNumber <= 50) {
				buchAlter = Math.floor(Math.random() * 19) + 2;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 51 && randomNumber <= 57) {
				buchAlter = Math.floor(Math.random() * 28) + 3;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 58 && randomNumber <= 62) {
				buchAlter = Math.floor(Math.random() * 37) + 4;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 63 && randomNumber <= 68) {
				buchAlter = Math.floor(Math.random() * 46) + 5;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 69 && randomNumber <= 73) {
				buchAlter = Math.floor(Math.random() * 55) + 6;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 74 && randomNumber <= 77) {
				buchAlter = Math.floor(Math.random() * 64) + 7;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 78 && randomNumber <= 81) {
				buchAlter = Math.floor(Math.random() * 73) + 8;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 82 && randomNumber <= 85) {
				buchAlter = Math.floor(Math.random() * 82) + 9;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 86 && randomNumber <= 88) {
				buchAlter = Math.floor(Math.random() * 91) + 10;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 89 && randomNumber <= 91) {
				buchAlter = Math.floor(Math.random() * 20) + 101;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 92 && randomNumber <= 94) {
				buchAlter = Math.floor(Math.random() * 39) + 102;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 95 && randomNumber <= 96) {
				buchAlter = Math.floor(Math.random() * 58) + 103;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber >= 97 && randomNumber <= 98) {
				buchAlter = Math.floor(Math.random() * 77) + 104;
				buchZeiteinheit = "Jahre";
			} else if (randomNumber === 99) {
				buchAlter = Math.floor(Math.random() * 96) + 105;
				buchZeiteinheit = "Jahre";
			} else {
				buchAlter = Math.floor(Math.random() * 200) + 201;
				buchZeiteinheit = "Jahre";
			}		
			return `${buchAlter} ${buchZeiteinheit}`;
		}
		
		//Bestimmt die Auflage des Buches
		function generateBookEdition() {
			const randomNumber = Math.random() * 100 + 1;
			let buchAuflage;
		
			if (randomNumber <= 5) {
				buchAuflage = "Entwurf";
			} else if (randomNumber <= 15) {
				buchAuflage = "1. Auflage";
			} else if (randomNumber <= 30) {
				buchAuflage = "2. Auflage";
			} else if (randomNumber <= 55) {
				buchAuflage = "3. Auflage";
			} else if (randomNumber <= 75) {
				buchAuflage = "4. Auflage";
			} else if (randomNumber <= 85) {
				buchAuflage = "5. Auflage";
			} else if (randomNumber <= 95) {
				buchAuflage = "6. Auflage";
			} else if (randomNumber <= 99) {
				buchAuflage = `${Math.floor(Math.random() * 11) + 2}. Auflage`;
			} else {
				buchAuflage = "Unbekannte Auflage";
			}		
			return buchAuflage;
		}
		
		//Bestimmt die Seitenanzahl
		function generateBookPageNumber() {
			const randomNumber = Math.random() * 100 + 1;
			let seitenZahl;
		
			if (randomNumber <= 5) {
				seitenZahl = `${Math.floor(Math.random() * (40 - 22 + 1)) + 22}`;
			} else if (randomNumber <= 10) {
				seitenZahl = `${Math.floor(Math.random() * (60 - 41 + 1)) + 41}`;
			} else if (randomNumber <= 20) {
				seitenZahl = `${Math.floor(Math.random() * (70 - 61 + 1)) + 61}`;
			} else if (randomNumber <= 35) {
				seitenZahl = `${Math.floor(Math.random() * (90 - 72 + 1)) + 72}`;
			} else if (randomNumber <= 60) {
				seitenZahl = `${Math.floor(Math.random() * (120 - 91 + 1)) + 91}`;
			} else if (randomNumber <= 90) {
				seitenZahl = `${Math.floor(Math.random() * (220 - 121 + 1)) + 121}`;
			} else if (randomNumber <= 80) {
				seitenZahl = `${Math.floor(Math.random() * (320 - 221 + 1)) + 221}`;
			} else if (randomNumber <= 90) {
				seitenZahl = `${Math.floor(Math.random() * (420 - 321 + 1)) + 321}`;
			} else {
				seitenZahl = `${Math.floor(Math.random() * (520 - 421 + 1)) + 421}`;
			}		
			return seitenZahl;
		}
		
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
		
		//Bestimmt den Zustands des Buches
		function generateBookCondition() {
			const randomNumber = Math.random() * 100 + 1;
			let buchZustand;
		
			if (randomNumber <= 5) {
				buchZustand = "zerfallend";
			} else if (randomNumber <= 10) {
				buchZustand = "schrecklich";
			} else if (randomNumber <= 20) {
				buchZustand = "mangelhaft";
			} else if (randomNumber <= 30) {
				buchZustand = "unterdurchschnittlich";
			} else if (randomNumber <= 50) {
				buchZustand = "durchschnittlich";
			} else if (randomNumber <= 70) {
				buchZustand = "überdurchschnittlich";
			} else if (randomNumber <= 80) {
				buchZustand = "sehr gut";
			} else if (randomNumber <= 90) {
				buchZustand = "ausgezeichnet";
			} else if (randomNumber <= 95) {
				buchZustand = "fast neuwertig";
			} else {
				buchZustand = "neuwertig";
			}		
			return buchZustand;
		}
		
		//Bestimmt die Bindung des Buches
		function generateBookBinding() {
			const randomNumber = Math.random() * 100 + 1;
			let buchBindung;
		
			if (randomNumber <= 5) {
				buchBindung = "gebunden mit Bolzen";
			} else if (randomNumber <= 10) {
				buchBindung = "gebunden mit Lederschlaufen";
			} else if (randomNumber <= 15) {
				buchBindung = "gebunden mit Metallschlaufen";
			} else if (randomNumber <= 35) {
				buchBindung = "geklebt";
			} else if (randomNumber <= 40) {
				buchBindung = "lose";
			} else if (randomNumber <= 45) {
				buchBindung = "lose in einem Behälter";
			} else if (randomNumber <= 50) {
				buchBindung = "lose in Stoff eingewickelt";
			} else if (randomNumber <= 55) {
				buchBindung = "lose in Leder eingewickelt";
			} else if (randomNumber <= 65) {
				buchBindung = "aufgerollt";
			} else if (randomNumber <= 80) {
				buchBindung = "zusammengenäht";
			} else if (randomNumber <= 90) {
				buchBindung = "spiralgebunden";
			} else if (randomNumber <= 95) {
				buchBindung = "geklammert";
			} else {
				buchBindung = "umwickelt mit Schnüren";
			}		
			return buchBindung;
		}
		
		//Bestimmt das Material des Einbands
		function generateBookCoverMaterial() {
			const randomNumber = Math.random() * 100 + 1;
			let buchEinbandMaterial;
		
			if (randomNumber <= 25) {
				buchEinbandMaterial = "Kartonpapier";
			} else if (randomNumber <= 50) {
				buchEinbandMaterial = "Hartpapier";
			} else if (randomNumber <= 65) {
				buchEinbandMaterial = "Leder";
			} else if (randomNumber <= 68) {
				buchEinbandMaterial = "unbehandelter Stoff";
			} else if (randomNumber <= 70) {
				buchEinbandMaterial = "behandelter Stoff";
			} else if (randomNumber <= 72) {
				buchEinbandMaterial = "Bambus";
			} else if (randomNumber <= 74) {
				buchEinbandMaterial = "glattes Metall";
			} else if (randomNumber <= 75) {
				buchEinbandMaterial = "glattes Edelmetall";
			} else if (randomNumber <= 77) {
				buchEinbandMaterial = "gepolstertes Metall";
			} else if (randomNumber <= 78) {
				buchEinbandMaterial = "gepolstertes Edelmetall";
			} else if (randomNumber <= 80) {
				buchEinbandMaterial = "glatter Schiefer";
			} else if (randomNumber <= 82) {
				buchEinbandMaterial = "rauer Schiefer";
			} else if (randomNumber <= 86) {
				buchEinbandMaterial = "gepolstertes Holz";
			} else if (randomNumber <= 90) {
				buchEinbandMaterial = "glattes Holz";
			} else if (randomNumber <= 92) {
				buchEinbandMaterial = "gepolstertes Edelholz";
			} else if (randomNumber <= 94) {
				buchEinbandMaterial = "glattes Edelholz";
			} else if (randomNumber <= 95) {
				buchEinbandMaterial = "Hülle einer Kreatur";
			} else if (randomNumber <= 97) {
				buchEinbandMaterial = "Tierfell";
			} else if (randomNumber <= 99) {
				buchEinbandMaterial = "Monsterfell";
			} else {
				buchEinbandMaterial = "Humanoidenhaut";
			}		
			return buchEinbandMaterial;
		}
		
		//Bestimmt die Details des Einbands
		function generateBookCoverDetails() {
			const randomNumber = Math.random() * 100 + 1;
			let buchEinbandDetail;
		
			const details = [
				"geprägter Rand",
				"abgeflachter Rand",
				"Auflagennummer",
				"Bild",
				"hochgeprägtes Bild",
				"Bild des Autors",
				"Zitat aus dem Buch",
				"Verlagssymbol",
				"Signatur des Autors",
				"geometrisches Symbol",
				"Schlagwort",
				"hochgeprägter Buchtitel",
				"Buchtitel",
				"Autorenname"
			];
		
			if (randomNumber <= 7) {
				buchEinbandDetail = "geprägter Rand";
			} else if (randomNumber <= 14) {
				buchEinbandDetail = "abgeflachter Rand";
			} else if (randomNumber <= 21) {
				buchEinbandDetail = "Auflagennummer";
			} else if (randomNumber <= 28) {
				buchEinbandDetail = "Bild";
			} else if (randomNumber <= 35) {
				buchEinbandDetail = "hochgeprägtes Bild";
			} else if (randomNumber <= 42) {
				buchEinbandDetail = "Bild des Autors";
			} else if (randomNumber <= 49) {
				buchEinbandDetail = "Zitat aus dem Buch";
			} else if (randomNumber <= 56) {
				buchEinbandDetail = "Verlagssymbol";
			} else if (randomNumber <= 63) {
				buchEinbandDetail = "Signatur des Autors";
			} else if (randomNumber <= 70) {
				buchEinbandDetail = "geometrisches Symbol";
			} else if (randomNumber <= 77) {
				buchEinbandDetail = "Schlagwort";
			} else if (randomNumber <= 85) {
				buchEinbandDetail = "hochgeprägter Buchtitel";
			} else if (randomNumber <= 91) {
				buchEinbandDetail = "Buchtitel";
			} else if (randomNumber <= 98) {
				buchEinbandDetail = "Autorenname";
			} else {
				const numDetails = Math.floor(Math.random() * 2) + 2; //Zwei bis drei Details auswählen
				const selectedDetails = [];
		
				for (let i = 0; i < numDetails; i++) {
					const randomIndex = Math.floor(Math.random() * details.length);
					const selectedDetail = details.splice(randomIndex, 1)[0]; //Detail aus der Liste entfernen
					selectedDetails.push(selectedDetail);
				}
		
				buchEinbandDetail = selectedDetails.join(', '); //Details mit einem Komma und Leerzeichen trennen
			}		
			return buchEinbandDetail;
		}
		
		
		//Bestimmt die Farbe des Einbandes
		function generateBookCoverColor() {
			const buchEinbandFarbe = ["achatgrau", "altrosa", "anthrazitgrau", "azurblau", "basaltgrau", "beige", "beigebraun", "beigegrau", "beigerot", "blassbraun", "blassgrün", "blau", "blaugrau", "blaugrün", "blaulila", "blutorange", "bordeauxviolett", "braungrau", "braungrün", "braunoliv", "braunrot", "brillantblau", "capriblau", "cremeweiß", "currygelb", "cyan", "dahliengelb", "dunkelblau", "dunkelcyan", "dunkelgelb", "dunkelgrün", "dunkelmagenta", "dunkelrot", "eisengrau", "elfenbein", "enzianblau", "erdbeerrot", "farngrün", "feuerrot", "flaschengrün", "gelb", "gelbgrau", "gelbgrün", "gelboliv", "gelborange", "ginstergelb", "goldgelb", "granitgrau", "graphitgrau", "graphitschwarz", "grasgrün", "grau", "graubeige", "graublau", "graubraun", "grauoliv", "grauweiß", "grün", "grünbeige", "grünblau", "grüngrau", "hellelfenbein", "hellrosa", "hellrotorange", "himbeerrot", "himmelblau", "honiggelb", "karminrot", "kastanienbraun", "khakigrau", "kieferngrün", "kieselgrau", "kobaltblau", "korallenrot", "kupferbraun", "lachsorange", "lachsrot", "laubgrün", "lehmbraun", "leuchtgelb", "leuchtgrün", "leuchthellorange", "leuchthellrot", "leuchtorange", "leuchtrot", "lichtblau", "lichtgrau", "lichtgrün", "magenta", "mahagonibraun", "maigrün", "maisgelb", "mausgrau", "melonengelb", "minttürkis", "minzgrün", "moosgrau", "moosgrün", "nachtblau", "narzissengelb", "nussbraun", "ockerbraun", "ockergelb", "olivbraun", "olivgelb", "olivgrau", "olivgrün", "opalgrün", "orange", "orangebraun", "orientrot", "ozeanblau", "papyrusweiß", "pastellblau", "pastellgelb", "pastellorange", "pastelltürkis", "pastellviolett", "perlbeige", "perlbrombeer", "perldunkelgrau", "perlenzian", "perlgold", "perlgrün", "perlhellgrau", "perlkupfer", "perlmausgrau", "perlnachtblau", "perlopalgrün", "perlorange", "perlrosa", "perlrubinrot", "perlviolett", "perlweiß", "platingrau", "purpurrot", "purpurviolett", "quarzgrau", "rapsgelb", "rehbraun", "reingrün", "reinorange", "reinrot", "reinweiß", "rosé", "rot", "rotbraun", "rotlila", "rotorange", "rotviolett", "rubinrot", "safrangelb", "sandgelb", "saphirblau", "schiefergrau", "schilfgrün", "schokoladenbraun", "schwarz", "schwarzblau", "schwarzbraun", "schwarzgrau", "schwarzgrün", "schwarzoliv", "schwarzrot", "schwefelgelb", "seidengrau", "sepiabraun", "silbergrau", "smaragdgrün", "sonnengelb", "stahlblau", "staubgrau", "steingrau", "tannengrün", "taubenblau", "tieforange", "tiefschwarz", "tomatenrot", "türkisblau", "türkisgrün", "ultramarinblau", "umbragrau", "violett", "violettblau", "wasserblau", "weinrot", "weiß", "weißgrün", "zinkgelb", "zitronengelb"];
		
			const randomIndex = Math.floor(Math.random() * buchEinbandFarbe.length);
			const selectedBuchEinbandFarbe = buchEinbandFarbe[randomIndex];
		
			return selectedBuchEinbandFarbe;
		}
		
		//Bestimmt den Qualität des Textes
		function generateTextQuality() {
			const randomNumber = Math.random() * 100 + 1;
			let textQualität;
		
			if (randomNumber <= 5) {
				textQualität = "wertlos";
			} else if (randomNumber <= 10) {
				textQualität = "unbrauchbar";
			} else if (randomNumber <= 20) {
				textQualität = "schlecht";
			} else if (randomNumber <= 30) {
				textQualität = "mäßig";
			} else if (randomNumber <= 40) {
				textQualität = "unterdurchschnittlich";
			} else if (randomNumber <= 60) {
				textQualität = "durchschnittlich";
			} else if (randomNumber <= 75) {
				textQualität = "überdurchschnittlich";
			} else if (randomNumber <= 85) {
				textQualität = "sehr gut";
			} else if (randomNumber <= 90) {
				textQualität = "ausgezeichnet";
			} else if (randomNumber <= 95) {
				textQualität = "unglaublich";
			} else {
				textQualität = "unübertrefflich";
			}
			return textQualität;
		}
		
		//Bestimmt die Produktionsart des Textes
		function generateTextProduction() {
			const randomNumber = Math.random() * 100 + 1;
			let textProduktion;
		
			const tinteFarbe = ["achatgrau", "altrosa", "anthrazitgrau", "azurblau", "basaltgrau", "beige", "beigebraun", "beigegrau", "beigerot", "blassbraun", "blassgrün", "blau", "blaugrau", "blaugrün", "blaulila", "blutorange", "bordeauxviolett", "braungrau", "braungrün", "braunoliv", "braunrot", "brillantblau", "capriblau", "cremeweiß", "currygelb", "cyan", "dahliengelb", "dunkelblau", "dunkelcyan", "dunkelgelb", "dunkelgrün", "dunkelmagenta", "dunkelrot", "eisengrau", "elfenbein", "enzianblau", "erdbeerrot", "farngrün", "feuerrot", "flaschengrün", "gelb", "gelbgrau", "gelbgrün", "gelboliv", "gelborange", "ginstergelb", "goldgelb", "granitgrau", "graphitgrau", "graphitschwarz", "grasgrün", "grau", "graubeige", "graublau", "graubraun", "grauoliv", "grauweiß", "grün", "grünbeige", "grünblau", "grüngrau", "hellelfenbein", "hellrosa", "hellrotorange", "himbeerrot", "himmelblau", "honiggelb", "karminrot", "kastanienbraun", "khakigrau", "kieferngrün", "kieselgrau", "kobaltblau", "korallenrot", "kupferbraun", "lachsorange", "lachsrot", "laubgrün", "lehmbraun", "leuchtgelb", "leuchtgrün", "leuchthellorange", "leuchthellrot", "leuchtorange", "leuchtrot", "lichtblau", "lichtgrau", "lichtgrün", "magenta", "mahagonibraun", "maigrün", "maisgelb", "mausgrau", "melonengelb", "minttürkis", "minzgrün", "moosgrau", "moosgrün", "nachtblau", "narzissengelb", "nussbraun", "ockerbraun", "ockergelb", "olivbraun", "olivgelb", "olivgrau", "olivgrün", "opalgrün", "orange", "orangebraun", "orientrot", "ozeanblau", "papyrusweiß", "pastellblau", "pastellgelb", "pastellorange", "pastelltürkis", "pastellviolett", "perlbeige", "perlbrombeer", "perldunkelgrau", "perlenzian", "perlgold", "perlgrün", "perlhellgrau", "perlkupfer", "perlmausgrau", "perlnachtblau", "perlopalgrün", "perlorange", "perlrosa", "perlrubinrot", "perlviolett", "perlweiß", "platingrau", "purpurrot", "purpurviolett", "quarzgrau", "rapsgelb", "rehbraun", "reingrün", "reinorange", "reinrot", "reinweiß", "rosé", "rot", "rotbraun", "rotlila", "rotorange", "rotviolett", "rubinrot", "safrangelb", "sandgelb", "saphirblau", "schiefergrau", "schilfgrün", "schokoladenbraun", "schwarz", "schwarzblau", "schwarzbraun", "schwarzgrau", "schwarzgrün", "schwarzoliv", "schwarzrot", "schwefelgelb", "seidengrau", "sepiabraun", "silbergrau", "smaragdgrün", "sonnengelb", "stahlblau", "staubgrau", "steingrau", "tannengrün", "taubenblau", "tieforange", "tiefschwarz", "tomatenrot", "türkisblau", "türkisgrün", "ultramarinblau", "umbragrau", "violett", "violettblau", "wasserblau", "weinrot", "weiß", "weißgrün", "zinkgelb", "zitronengelb"];
		
			if (randomNumber <= 45) {
				textProduktion = "hangeschrieben mit gewöhnlicher Tinte, schwarz";
			} else if (randomNumber <= 60) {
				textProduktion = "hangeschrieben mit gewöhnlicher Tinte, blau";
			} else if (randomNumber <= 65) {
				const zufaelligeTintenfarbe = tinteFarbe[Math.floor(Math.random() * tinteFarbe.length)];
				textProduktion = `handgeschrieben mit gewöhnlicher Tinte, ${zufaelligeTintenfarbe}`;
			} else if (randomNumber <= 70) {
				textProduktion = "handgeschrieben mit Humanoidenblut";
			} else if (randomNumber <= 80) {
				textProduktion = "handgeschrieben mit Tierblut";
			} else if (randomNumber <= 85) {
				textProduktion = "handgeschrieben mit Monsterblut";
			} else if (randomNumber <= 90) {
				textProduktion = "handgeschrieben mit magischer Tinte";
			} else if (randomNumber <= 95) {
				textProduktion = "gemalt";
			} else {
				textProduktion = "gedruckt";
			}		
			return textProduktion;
		}
		
		//Bestimmt die Anzahl der Bilder
		function generateImageQuantity() {
			const randomNumber = Math.random() * 100 + 1;
			let bildAnzahl;
		
			if (randomNumber <= 5) {
				bildAnzahl = "keine Bilder";
			} else if (randomNumber <= 15) {
				bildAnzahl = "ein Bild, das sich auf dem Buchdeckel befindet";
			} else if (randomNumber <= 25) {
				bildAnzahl = "ein Bild, das sich auf der Titelseite befindet";
			} else if (randomNumber <= 45) {
				bildAnzahl = "ein Bild am Beginn jedes Kapitels";
			} else if (randomNumber <= 60) {
				const numBilder = Math.floor(Math.random() * 2) + 1;
				bildAnzahl = `${numBilder <= 12 ? (numBilder === 1 ? "ein Bild" : numToWords(numBilder) + " Bilder") : numBilder + " Bilder"} pro Kapitel`;
			} else if (randomNumber <= 70) {
				const numBilder = Math.floor(Math.random() * 3) + 1;
				bildAnzahl = `${numBilder <= 12 ? (numBilder === 1 ? "ein Bild" : numToWords(numBilder) + " Bilder") : numBilder + " Bilder"} pro Kapitel`;
			} else if (randomNumber <= 80) {
				const numBilder = Math.floor(Math.random() * 6) + 1;
				bildAnzahl = `${numBilder <= 12 ? (numBilder === 1 ? "ein Bild" : numToWords(numBilder) + " Bilder") : numBilder + " Bilder"} im gesamten Buch`;
			} else if (randomNumber <= 90) {
				const numBilder = Math.floor(Math.random() * 11) + 2;
				bildAnzahl = `${numBilder <= 12 ? (numBilder === 1 ? "ein Bild" : numToWords(numBilder) + " Bilder") : numBilder + " Bilder"} im gesamten Buch`;
			} else if (randomNumber <= 95) {
				const numBilder = Math.floor(Math.random() * 16) + 3;
				bildAnzahl = `${numBilder <= 12 ? (numToWords(numBilder) + " Bilder") : numBilder + " Bilder"} im gesamten Buch`;
			} else {
				bildAnzahl = "Bilder auf jeder Seite";
			}		
			return bildAnzahl;
		}
		
		//Hilfsfunktion zur Umwandlung von Zahlen in Wörter bis zur Zahl 12
		function numToWords(number) {
			const words = ["null", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf"];
			return words[number];
		}
		
		//Bestimmt die Farbe der Bilder
		function generateImageColor() {
			const randomNumber = Math.random() * 100 + 1;
			let bildFarbe;
		
			const bildFarbeTon = ["achatgrau", "altrosa", "anthrazitgrau", "azurblau", "basaltgrau", "beige", "beigebraun", "beigegrau", "beigerot", "blassbraun", "blassgrün", "blau", "blaugrau", "blaugrün", "blaulila", "blutorange", "bordeauxviolett", "braungrau", "braungrün", "braunoliv", "braunrot", "brillantblau", "capriblau", "cremeweiß", "currygelb", "cyan", "dahliengelb", "dunkelblau", "dunkelcyan", "dunkelgelb", "dunkelgrün", "dunkelmagenta", "dunkelrot", "eisengrau", "elfenbein", "enzianblau", "erdbeerrot", "farngrün", "feuerrot", "flaschengrün", "gelb", "gelbgrau", "gelbgrün", "gelboliv", "gelborange", "ginstergelb", "goldgelb", "granitgrau", "graphitgrau", "graphitschwarz", "grasgrün", "grau", "graubeige", "graublau", "graubraun", "grauoliv", "grauweiß", "grün", "grünbeige", "grünblau", "grüngrau", "hellelfenbein", "hellrosa", "hellrotorange", "himbeerrot", "himmelblau", "honiggelb", "karminrot", "kastanienbraun", "khakigrau", "kieferngrün", "kieselgrau", "kobaltblau", "korallenrot", "kupferbraun", "lachsorange", "lachsrot", "laubgrün", "lehmbraun", "leuchtgelb", "leuchtgrün", "leuchthellorange", "leuchthellrot", "leuchtorange", "leuchtrot", "lichtblau", "lichtgrau", "lichtgrün", "magenta", "mahagonibraun", "maigrün", "maisgelb", "mausgrau", "melonengelb", "minttürkis", "minzgrün", "moosgrau", "moosgrün", "nachtblau", "narzissengelb", "nussbraun", "ockerbraun", "ockergelb", "olivbraun", "olivgelb", "olivgrau", "olivgrün", "opalgrün", "orange", "orangebraun", "orientrot", "ozeanblau", "papyrusweiß", "pastellblau", "pastellgelb", "pastellorange", "pastelltürkis", "pastellviolett", "perlbeige", "perlbrombeer", "perldunkelgrau", "perlenzian", "perlgold", "perlgrün", "perlhellgrau", "perlkupfer", "perlmausgrau", "perlnachtblau", "perlopalgrün", "perlorange", "perlrosa", "perlrubinrot", "perlviolett", "perlweiß", "platingrau", "purpurrot", "purpurviolett", "quarzgrau", "rapsgelb", "rehbraun", "reingrün", "reinorange", "reinrot", "reinweiß", "rosé", "rot", "rotbraun", "rotlila", "rotorange", "rotviolett", "rubinrot", "safrangelb", "sandgelb", "saphirblau", "schiefergrau", "schilfgrün", "schokoladenbraun", "schwarz", "schwarzblau", "schwarzbraun", "schwarzgrau", "schwarzgrün", "schwarzoliv", "schwarzrot", "schwefelgelb", "seidengrau", "sepiabraun", "silbergrau", "smaragdgrün", "sonnengelb", "stahlblau", "staubgrau", "steingrau", "tannengrün", "taubenblau", "tieforange", "tiefschwarz", "tomatenrot", "türkisblau", "türkisgrün", "ultramarinblau", "umbragrau", "violett", "violettblau", "wasserblau", "weinrot", "weiß", "weißgrün", "zinkgelb", "zitronengelb"];
		
			if (randomNumber <= 55) {
				bildFarbe = "einfarbig in schwarz und weiß";
			} else if (randomNumber <= 80) {
				const zufaelligeBildfarbe = bildFarbeTon[Math.floor(Math.random() * bildFarbeTon.length)];
				bildFarbe = `einfarbig in ${zufaelligeBildfarbe}`;
			} else if (randomNumber <= 90) {
				const zufaelligeFarbe1 = bildFarbeTon[Math.floor(Math.random() * bildFarbeTon.length)];
				let zufaelligeFarbe2 = zufaelligeFarbe1;
				while (zufaelligeFarbe2 === zufaelligeFarbe1) {
					zufaelligeFarbe2 = bildFarbeTon[Math.floor(Math.random() * bildFarbeTon.length)];
				}
				bildFarbe = `zweifarbig in ${zufaelligeFarbe1} und ${zufaelligeFarbe2}`;
			} else if (randomNumber <= 95) {
				bildFarbe = "Halbton";
			} else {
				bildFarbe = "Vollton";
			}		
			return bildFarbe;
		}
		
		//Bestimmt die Größe der Bilder
		function generateImageSize() {
			const randomNumber = Math.random() * 100 + 1;
			let bildGroesse;
		
			if (randomNumber <= 5) {
				bildGroesse = "gesamte Seite bis zum Rand";
			} else if (randomNumber <= 15) {
				bildGroesse = "fast die gesamte Seite";
			} else if (randomNumber <= 35) {
				bildGroesse = "ein Viertel der Seite";
			} else if (randomNumber <= 55) {
				bildGroesse = "die Hälfte der Seite";
			} else if (randomNumber <= 75) {
				bildGroesse = "zwei Drittel der Seite";
			} else {
				bildGroesse = "weniger als ein Viertel der Seite";
			}		
			return bildGroesse;
		}
		
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
		
		//Bestimmt den Qualität der Bilder
		function generateImageQuality() {
			const randomNumber = Math.random() * 100 + 1;
			let bildQualität;
		
			if (randomNumber <= 5) {
				bildQualität = "wertlos";
			} else if (randomNumber <= 10) {
				bildQualität = "unbrauchbar";
			} else if (randomNumber <= 20) {
				bildQualität = "schlecht";
			} else if (randomNumber <= 30) {
				bildQualität = "mäßig";
			} else if (randomNumber <= 40) {
				bildQualität = "unterdurchschnittlich";
			} else if (randomNumber <= 60) {
				bildQualität = "durchschnittlich";
			} else if (randomNumber <= 75) {
				bildQualität = "überdurchschnittlich";
			} else if (randomNumber <= 85) {
				bildQualität = "sehr gut";
			} else if (randomNumber <= 90) {
				bildQualität = "ausgezeichnet";
			} else if (randomNumber <= 95) {
				bildQualität = "unglaublich";
			} else {
				bildQualität = "unübertrefflich";
			}		
			return bildQualität;
		}
		
		//Bestimmt das Lesezeichen des Buches
		function generateBookmark() {
			const randomNumber = Math.random() * 100 + 1;
			let lesezeichen;
		
			if (randomNumber <= 5) {
				lesezeichen = "ein Eselsohr";
			} else if (randomNumber <= 10) {
				lesezeichen = "eine kleiner Riss in der Seite";
			} else if (randomNumber <= 15) {
				lesezeichen = "ein Stück Schnur";
			} else if (randomNumber <= 20) {
				lesezeichen = "eine Buchklammer";
			} else if (randomNumber <= 25) {
				lesezeichen = "ein Ecklesezeichen";
			} else if (randomNumber <= 30) {
				lesezeichen = "der Schutzumschlag des Buches";
			} else if (randomNumber <= 35) {
				lesezeichen = "ein Stück Papier";
			} else if (randomNumber <= 40) {
				lesezeichen = "eine dehnbare Schnur";
			} else if (randomNumber <= 50) {
				lesezeichen = "ein Streifen aus Stoff";
			} else if (randomNumber <= 55) {
				lesezeichen = "ein dünnes Stück Metall";
			} else if (randomNumber <= 85) {
				lesezeichen = "ein Streifen aus lederähnlichem Material";
			} else if (randomNumber <= 95) {
				lesezeichen = "ein klebender Notizzettel";
			} else {
				lesezeichen = "eine Ansammlung unterschiedlicher, kleiner, dünner Gegenstände";
			}
			return lesezeichen;
		}
				
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
		
		//Entfernt bisher generierte Resulate
		btnClear.addEventListener('click', (event) => {
			event.preventDefault();
			const container = document.getElementById('container');
			container.querySelectorAll('li').forEach((li) => li.remove());
		});
		
		//Fügt einen Container für die Ergebnisse hinzu
		const container = document.createElement('ul');
		container.id = 'container';
		document.body.appendChild(container);
		
		
	</script>
	<script>
		//Get the button:
		let mybutton = document.getElementById("scrollTop");
		
		//When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function() {scrollFunction()};
		
		function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
		} else {
		mybutton.style.display = "none";
		}
		}
		
		//When the user clicks on the button, scroll to the top of the document
		function topFunction() {
		document.body.scrollTop = 0; //For Safari
		document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
		}
