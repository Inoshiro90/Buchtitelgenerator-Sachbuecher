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