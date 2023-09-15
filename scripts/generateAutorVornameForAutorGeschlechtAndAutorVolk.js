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