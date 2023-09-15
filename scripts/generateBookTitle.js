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
     //`${declinedVölkerPlural.plural.nominativ} \-\ ${declinedVölker2Plural.plural.nominativ} Wörterbuch`, 
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
