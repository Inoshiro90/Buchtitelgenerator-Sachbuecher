<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="styles/soft_scrolling.css"/>
		<link rel="stylesheet" href ="styles/body.css">
		<link rel="stylesheet" href ="styles/collapsible.css">
		<link rel="stylesheet" href ="styles/style.css">
		<script src="scripts/collapsible.js"></script>
	</head>
	<body>
		<h1>Buchtitelgenerator</h1>
		<p>Dieser Generator generiert Titel für Bücher</p>
		<button class="collapsible">
		<b>Filter: Setting</b>
		</button>
		<div id="setting" class="content">
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxDrachenlanze" class="setting-checkbox" unchecked> Drachenlanze</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxEberron" class="setting-checkbox" unchecked> Eberron</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxExandria" class="setting-checkbox" unchecked> Exandria</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxGreyhawk" class="setting-checkbox" unchecked> Greyhawk</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxRavenloft" class="setting-checkbox" unchecked> Ravenloft</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxRavnica" class="setting-checkbox" unchecked> Ravnica</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxSpelljammer" class="setting-checkbox" unchecked> Spelljammer</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxStrixhaven" class="setting-checkbox" unchecked> Strixhaven</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxTheros" class="setting-checkbox" unchecked> Theros</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxVergesseneReiche" class="setting-checkbox" checked> Vergessene Reiche</label><br>
			<button class="inCollapsible" id="btnSelectAllSetting">Alle auswählen</button>
			<button class="inCollapsible" id="btnDeselectAllSetting">Alle abwählen</button>
		</div>
		<button class="collapsible">
		<b>Filter: Genre</b>
		</button>
		<div id="genre" class="content">
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxAllgemeines" class="genre-checkbox" checked> Allgemeines</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxBelletristik" class="genre-checkbox" checked> Belletristik</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxBiographie" class="genre-checkbox" checked> Biographie</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxGeographie" class="genre-checkbox" checked> Geographie</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxGeschichte" class="genre-checkbox" checked> Geschichte</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxHandwerk" class="genre-checkbox" checked> Handwerk</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxHeilkunde" class="genre-checkbox" checked> Heilkunde</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxKinderbuch" class="genre-checkbox" checked> Kinderbuch</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxKochkunst" class="genre-checkbox" checked> Kochkunst</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxKunst" class="genre-checkbox" checked> Kunst</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxMagie" class="genre-checkbox" checked> Magie</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxMusikTanzTheater" class="genre-checkbox" checked> Musik, Tanz und Theater</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxNaturkunde" class="genre-checkbox" checked> Naturkunde</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxPhilosophie" class="genre-checkbox" checked> Philosophie</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxPsychologie" class="genre-checkbox" checked> Psychologie</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxRecht" class="genre-checkbox" checked> Recht</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxReligion" class="genre-checkbox" checked> Religion</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxSportFreizeit" class="genre-checkbox" checked> Sport und Freizeit</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxSprache" class="genre-checkbox" checked> Sprache</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxVölkerkunde" class="genre-checkbox" checked> Völkerkunde</label><br>
			<button class="inCollapsible" id="btnSelectAllGenre">Alle auswählen</button>
			<button class="inCollapsible" id="btnDeselectAllGenre">Alle abwählen</button>
		</div>
		<button class="collapsible">
		<b>Filter: Beschreibung</b>
		</button>
		<div  id=beschreibung class="content">
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxAutor" checked> Autor</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxAuflage" checked> Auflage</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxSeitenzahl" checked> Seitenzahl</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxAlter" checked> Alter</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxGröße" checked> Größe</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxZustand" checked> Zustand</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxBindung" checked> Bindung</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxEinbandMaterial" checked> Material des Einbandes</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxEinbandDetail" checked> Details auf dem Einband</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxTextQualität" checked> Qualität des Textes</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxTextProduktion" checked> Produktionsart des Textes</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxBilderAnzahl" checked> Anzahl der Bilder</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxBilderFarbe" checked> Farbe der Bilder</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxBilderGröße" checked> Größe der Bilder</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxBilderStil" checked> Stil der Bilder</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxBilderQualität" checked> Qualität der Bilder</label><br>
			<label style="white-space: nowrap;"><input type="checkbox" id="checkboxLesezeichen" checked> Lesezeichen </label><br>
			<button class = inCollapsible id="btnSelectAllBeschreibung">Alle auswählen</button><button class = inCollapsible id="btnDeselectAllBeschreibung">Alle abwählen</button>
		</div>
		<div class="buttons">
			<label style="margin-top: 10px; margin-bottom: 10px; margin-left: 10px;" for="numAnzahlField">Anzahl:</label>
			<input type="number" id="numAnzahlField">
			<button id="btnGenerate">Generieren</button>
			<button id="btnCopy">In Zwischenablage kopieren</button>
			<button id="btnClear">Löschen</button>
		</div>
		<button onclick="topFunction()" id="scrollTop" title="Go to top">▲</button>
		<script src="scripts/scrollBackToTop.js"></script>
		<script src="scripts/collapsible.js"></script>
		<script src="scripts/script.js"></script>
		<!-- 
		<script src="scripts/getRandomText.js"></script>
		<script src="scripts/getRandomElementFromArray.js"></script>
		<script src="scripts/setting.js"></script>
		<script src="scripts/genre.js"></script>
		<script src="scripts/beschreibung.js"></script>
		<script src="scripts/generateBookTitle.js"></script>
		<script src="scripts/generateAuthorName.js"></script>
		<script src="scripts/generateAutorVornameForAutorGeschlechtAndAutorVolk.js"></script>
		<script src="scripts/generateAutorNachnameForAutorVolk.js"></script>
		<script src="scripts/const_namenMensch.js"></script>
		<script src="scripts/generateVornameMaennlichZwerg.js"></script>
		<script src="scripts/generateVornameWeiblichZwerg.js"></script>
		<script src="scripts/generateVornameNichtbinaerZwerg.js"></script>
		<script src="scripts/generateNachnameZwerg.js"></script>
		<script src="scripts/generateVornameMaennlichElf.js"></script>
		<script src="scripts/generateVornameWeiblichElf.js"></script>
		<script src="scripts/generateVornameNichtbinaerElf.js"></script>
		<script src="scripts/generateNachnameElf.js"></script>
		<script src="scripts/generateVornameMaennlichHalbling.js"></script>
		<script src="scripts/generateVornameWeiblichHalbling.js"></script>
		<script src="scripts/generateVornameNichtbinaerHalbling.js"></script>
		<script src="scripts/generateNachnameHalbling.js"></script>
		<script src="scripts/generateVornameMaennlichGnom.js"></script>
		<script src="scripts/generateVornameWeiblichGnom.js"></script>
		<script src="scripts/generateVornameNichtbinaerGnom.js"></script>
		<script src="scripts/generateNachnameGnom.js"></script>
		<script src="scripts/generateHalbelfischerVorname.js"></script>
		<script src="scripts/generateHalbelfischerNachname.js"></script>
		<script src="scripts/generateVornameMaennlichHalbelf.js"></script>
		<script src="scripts/generateVornameWeiblichHalbelf.js"></script>
		<script src="scripts/generateVornameNichtbinaerHalbelf.js"></script>
		<script src="scripts/generateNachnameHalbelf.js"></script>
		<script src="scripts/const_namenHalbelf.js"></script>
		<script src="scripts/generateVornameMaennlichHalbork.js"></script>
		<script src="scripts/generateVornameWeiblichHalbork.js"></script>
		<script src="scripts/generateVornameNichtbinaerHalbork.js"></script>
		<script src="scripts/generateNachnameHalbork.js"></script>
		<script src="scripts/generateVornameMaennlichDrachenbluetiger.js"></script>
		<script src="scripts/generateVornameWeiblichDrachenbluetiger.js"></script>
		<script src="scripts/generateVornameNichtbinaerDrachenbluetiger.js"></script>
		<script src="scripts/generateNachnameDrachenbluetiger.js"></script>
		<script src="scripts/generateVornameMaennlichTiefling.js"></script>
		<script src="scripts/generateVornameWeiblichTiefling.js"></script>
		<script src="scripts/generateVornameNichtbinaerTiefling.js"></script>
		<script src="scripts/const_nachnameTiefling.js"></script>
		<script src="scripts/buchbeschreibung.js"></script>
		<script src="scripts/generateBookAge.js"></script>
		<script src="scripts/generateBookEdition.js"></script>
		<script src="scripts/generateBookPageNumber.js"></script>
		<script src="scripts/generateBookHeight.js"></script>
		<script src="scripts/generateBookWidth.js"></script>
		<script src="scripts/generateBookCondition.js"></script>
		<script src="scripts/generateBookBinding.js"></script>
		<script src="scripts/generateBookCoverMaterial.js"></script>
		<script src="scripts/generateBookCoverDetails.js"></script>
		<script src="scripts/generateBookCoverColor.js"></script>
		<script src="scripts/generateTextQuality.js"></script>
		<script src="scripts/generateTextProduction.js"></script>
		<script src="scripts/generateImageQuantity.js"></script>
		<script src="scripts/numToWords.js"></script>
		<script src="scripts/generateImageColor.js"></script>
		<script src="scripts/generateImageSize.js"></script>
		<script src="scripts/generateImageStyle.js"></script>
		<script src="scripts/generateUniqueRandomStyles.js"></script>
		<script src="scripts/generateImageQuality.js"></script>
		<script src="scripts/generateBookmark.js"></script>
		<script src="scripts/btnGenerate.js"></script>
		<script src="scripts/copyToClipboard.js"></script>
		<script src="scripts/btnCopy.js"></script>
		<script src="scripts/btnClear.js"></script>
		<script src="scripts/container.js"></script>
		<script src="scripts/const_praefixe.js"></script>
		<script src="scripts/const_handwerkSingular.js"></script>
		<script src="scripts/const_handwerkPlural.js"></script>
		<script src="scripts/const_voelkerSingular.js"></script>
		<script src="scripts/const_voelkerPlural.js"></script>
		<script src="scripts/const_monsterSingular.js"></script>
		<script src="scripts/const_monsterPlural.js"></script>
		<script src="scripts/const_klassenSingular.js"></script>
		<script src="scripts/const_klassenPlural.js"></script>
		<script src="scripts/const_gegenstaendeSingular.js"></script>
		<script src="scripts/const_gegenstaendePlural.js"></script>
		<script src="scripts/const_domaene.js"></script>
		<script src="scripts/const_schulenDerMagie.js"></script>
		<script src="scripts/const_religionSingular.js"></script>
		<script src="scripts/const_windrichtungen.js"></script>
		<script src="scripts/const_waffenSingular.js"></script>
		<script src="scripts/const_waffenPlural.js"></script>
		<script src="scripts/const_kleidungsstueckeSingular.js"></script>
		<script src="scripts/const_kleidungsstueckePlural.js"></script>
		<script src="scripts/const_gottheit.js"></script>
		<script src="scripts/const_ereignisSingular.js"></script>
		<script src="scripts/const_ereignisPlural.js"></script>
		<script src="scripts/const_kontinent.js"></script>
		<script src="scripts/const_land.js"></script>
		<script src="scripts/const_region.js"></script>
		<script src="scripts/const_gebiet.js"></script>
		<script src="scripts/const_siedlung.js"></script>
		<script src="scripts/const_fluss.js"></script>
		<script src="scripts/const_berg.js"></script>
		<script src="scripts/const_wahrzeichen.js"></script>
		<script src="scripts/const_gewaesser.js"></script>
		<script src="scripts/const_strasse.js"></script>
		<script src="scripts/const_wald.js"></script>
		<script src="scripts/const_geschichtsereignis.js"></script>		
		<script src="scripts/const_nomenSchwacheDeklination.js"></script>
		<script src="scripts/const_nomenAdjektivSubstantiviert.js"></script>
		<script src="scripts/deklination.js"></script>
		<script src="scripts/const_declinedNouns.js"></script> -->
		<!--<script src="scripts/generatedTitles.js"></script>
		<script src="scripts/const_begriffe.js"></script>
		<script src="scripts/const_bookTitleIdeas.js"></script> -->
	</body>
</html>
