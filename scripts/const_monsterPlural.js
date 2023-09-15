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