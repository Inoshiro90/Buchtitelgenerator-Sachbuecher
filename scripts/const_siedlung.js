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