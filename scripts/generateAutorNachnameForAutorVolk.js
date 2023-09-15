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