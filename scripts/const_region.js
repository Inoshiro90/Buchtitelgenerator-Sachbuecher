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