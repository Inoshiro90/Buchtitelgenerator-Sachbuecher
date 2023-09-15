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