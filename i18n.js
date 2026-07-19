(() => {
  'use strict';

  const rows = [
    // Navigation, global actions and shared labels
    ['Home','Tuis','Ikhaya'],
    ['About','Oor ons','Ngathi'],
    ['Services','Dienste','Izinsizakalo'],
    ['Compliance','Nakoming','Ukuthobela'],
    ['Job Process','Werkproses','Inqubo'],
    ['Areas','Gebiede','Izindawo'],
    ['Partners','Vennote','Ozakwethu'],
    ['Contact','Kontak','Xhumana'],
    ['Pages','Bladsye','Amakhasi'],
    ['Request','Versoek','Isicelo'],
    ['Request transport','Versoek vervoer','Cela ukuthuthwa'],
    ['Request Transport','Versoek vervoer','Cela ukuthuthwa'],
    ['Submit request','Dien versoek in','Thumela isicelo'],
    ['Submit a request','Dien ’n versoek in','Thumela isicelo'],
    ['Submit a transport request','Dien ’n vervoerversoek in','Thumela isicelo sokuthuthwa'],
    ['Discuss a transport request','Bespreek ’n vervoerversoek','Xoxa ngesicelo sokuthuthwa'],
    ['Call / WhatsApp now','Bel / WhatsApp nou','Shayela / WhatsApp manje'],
    ['Call now','Bel nou','Shayela manje'],
    ['WhatsApp us','WhatsApp ons','Sithumele i-WhatsApp'],
    ['WhatsApp us now','WhatsApp ons nou','Sithumele i-WhatsApp manje'],
    ['WhatsApp now','WhatsApp nou','WhatsApp manje'],
    ['Phone','Telefoon','Ucingo'],
    ['Email','E-pos','I-imeyili'],
    ['Name','Naam','Igama'],
    ['Company','Maatskappy','Inkampani'],
    ['Message','Boodskap','Umlayezo'],
    ['Service','Diens','Inkonzo'],
    ['Vehicle','Voertuig','Imoto'],
    ['Base','Basis','Isizinda'],
    ['English','Engels','IsiNgisi'],
    ['Website language','Webwerftaal','Ulimi lwewebhusayithi'],
    ['Main navigation','Hoofnavigasie','Ukuzulazula okuyinhloko'],
    ['Body Transport Solutions — home','Body Transport Solutions — tuis','Body Transport Solutions — ikhaya'],
    ['Call Body Transport Solutions now','Bel Body Transport Solutions nou','Shayela i-Body Transport Solutions manje'],

    // Hero and homepage
    ['Available 24/7','Beskikbaar 24/7','Siyatholakala 24/7'],
    ['Proudly South African','Trots Suid-Afrikaans','Siyaziqhenya ngokuba abaseNingizimu Afrika'],
    ['We move the deceased.','Ons vervoer afgestorwenes.','Sithutha abashonile.'],
    ['Across KZN and surrounding provinces.','Regdeur KZN en omliggende provinsies.','Kulo lonke elaseKZN nasezifundazweni eziseduze.'],
    ['One dedicated refrigerated vehicle. A trained team. The right paperwork.','Een toegewyde verkoelde voertuig. ’n Opgeleide span. Die regte dokumentasie.','Imoto eyodwa enesiqandisi ezinikele. Ithimba eliqeqeshiwe. Imibhalo efanele.'],
    ['You call — we collect — we deliver.','U bel — ons haal af — ons lewer af.','Uyashayela — siyalanda — siyahambisa.'],
    ['Respectfully, every time.','Met respek, elke keer.','Ngenhlonipho, ngaso sonke isikhathi.'],
    ['Registered (Pty) Ltd','Geregistreerde (Edms.) Bpk.','Inkampani ebhalisiwe (Pty) Ltd'],
    ['Based in KwaZulu-Natal','Gebaseer in KwaZulu-Natal','Sizinze KwaZulu-Natal'],
    ['Dedicated refrigerated vehicle','Toegewyde verkoelde voertuig','Imoto enesiqandisi ezinikele'],
    ['KwaZulu-Natal daily','KwaZulu-Natal daagliks','KwaZulu-Natal nsuku zonke'],
    ['Surrounding provinces · by arrangement','Omliggende provinsies · volgens reëling','Izifundazwe eziseduze · ngokuhlelwa'],
    ['Simple as','So eenvoudig soos','Kulula njengo'],
    ['No complicated process. No hidden steps.','Geen ingewikkelde proses nie. Geen versteekte stappe nie.','Ayikho inqubo eyinkimbinkimbi. Azikho izinyathelo ezifihliwe.'],
    ['You call or WhatsApp','U bel of WhatsApp','Uyashayela noma uthumele i-WhatsApp'],
    ['Tell us where to collect, where to deliver, and when. We confirm the price and paperwork straight away.','Sê vir ons waar en wanneer ons moet afhaal en aflewer. Ons bevestig die prys en dokumentasie dadelik.','Sitshele ukuthi silande kuphi, sihambise kuphi, futhi nini. Siqinisekisa intengo nemibhalo ngokushesha.'],
    ['We collect','Ons haal af','Siyalanda'],
    ['Our driver collects from the hospital, mortuary or funeral parlour — respectfully, in a refrigerated vehicle, with signed records.','Ons bestuurder haal met respek by die hospitaal, lykshuis of begrafnisonderneming af, in ’n verkoelde voertuig en met getekende rekords.','Umshayeli wethu ulanda ngenhlonipho esibhedlela, emakhazeni noma ekhaya labangcwabi, ngemoto enesiqandisi nangamarekhodi asayiniwe.'],
    ['We deliver, signed for','Ons lewer af, met ondertekening','Siyahambisa, kusayinwe'],
    ['The receiving party signs the handover note. You get proper chain-of-custody paperwork on every job.','Die ontvanger teken die oorhandigingsnota. U kry behoorlike bewaringsketting-dokumentasie vir elke werk.','Owemukelayo usayina incwadi yokudlulisa. Uthola imibhalo efanele yochungechunge lokugcinwa kuwo wonke umsebenzi.'],
    ['Why','Waarom','Kungani'],
    ['choose us','ons kies','ukhethe thina'],
    ['What the industry expects from a transport partner — done properly.','Wat die bedryf van ’n vervoervennoot verwag — behoorlik gedoen.','Okulindelwe yimboni kumlingani wezokuthutha — kwenziwa ngendlela efanele.'],
    ['What we do','Wat ons doen','Esikwenzayo'],
    ['Who we work with','Met wie ons werk','Esisebenza nabo'],
    ['A dedicated refrigeration system —','’n Toegewyde verkoelingstelsel —','Uhlelo lwesiqandisi oluzinikele —'],
    ['built for direct transport.','gebou vir direkte vervoer.','olwakhelwe ukuthutha ngqo.'],
    ['Paperwork done properly,','Dokumentasie behoorlik gedoen,','Imibhalo yenziwa ngendlela efanele,'],
    ['every single job','met elke werk','kuwo wonke umsebenzi'],
    ['Cato Ridge based.','Gebaseer in Cato Ridge.','Sizinze eCato Ridge.'],
    ['KZN focused.','Gefokus op KZN.','Sigxile eKZN.'],
    ['Common questions','Algemene vrae','Imibuzo evamile'],
    ['Need urgent transport right now?','Benodig u nou dringende vervoer?','Udinga ukuthuthwa okuphuthumayo manje?'],
    ['Available 24/7 for urgent transport','24/7 beskikbaar vir dringende vervoer','Siyatholakala 24/7 kwezokuthutha eziphuthumayo'],

    // Shared service and vehicle terms
    ['Local collection & transfer','Plaaslike afhaal en oorplasing','Ukulanda nokudlulisa endaweni'],
    ['Long-distance transport','Langafstandvervoer','Ukuthutha amabanga amade'],
    ['Funeral parlour overflow support','Bykomende ondersteuning vir begrafnisondernemings','Ukusekela ikhaya labangcwabi lapho limatasa'],
    ['Repatriation support','Repatriasie-ondersteuning','Ukusekela ukubuyiselwa ekhaya'],
    ['After-hours & urgent collections','Na-ure en dringende afhalings','Ukulanda ngemva kwamahora nokuphuthumayo'],
    ['Chain-of-custody job packs','Bewaringsketting-werkspakkette','Amaphakethe omsebenzi ochungechunge lokugcinwa'],
    ['Funeral parlours','Begrafnisondernemings','Amakhaya abangcwabi'],
    ['Mortuaries','Lykshuise','Amakhaza'],
    ['Hospitals','Hospitale','Izibhedlela'],
    ['Insurance providers','Versekeringsverskaffers','Abahlinzeki bomshwalense'],
    ['Repatriation companies','Repatriasiemaatskappye','Izinkampani zokubuyisela ekhaya'],
    ['Families working through authorised providers','Gesinne wat deur gemagtigde verskaffers werk','Imindeni esebenza ngabahlinzeki abagunyaziwe'],
    ['Refrigerated compartment','Verkoelde kompartement','Igumbi elinesiqandisi'],
    ['Separate transport area','Afsonderlike vervoerarea','Indawo yokuthutha ehlukile'],
    ['Washable non-porous interior','Wasbare, nie-poreuse binnekant','Ingaphakathi eligezekayo elingenazo izimbobo'],
    ['Dedicated loading system','Toegewyde laaistelsel','Uhlelo lokulayisha oluzinikele'],
    ['Designed for cleaning and disinfection','Ontwerp vir skoonmaak en ontsmetting','Kwakhelwe ukuhlanzwa nokubulala amagciwane'],
    ['Suitable for long-distance transport','Geskik vir langafstandvervoer','Kufanele ukuthutha amabanga amade'],
    ['Flexible cold control','Buigsame kouebeheer','Ukulawula amakhaza okuguquguqukayo'],
    ['Flexible forced-air refrigeration','Buigsame gedwonge-lugverkoeling','Isiqandisi somoya ophoqiwe esiguquguqukayo'],
    ['Evaporator cooling system','Verdamper-verkoelingstelsel','Uhlelo lokupholisa lwe-evaporator'],
    ['Forced-air circulation','Gedwonge lugsirkulasie','Ukujikeleza komoya ophoqiwe'],
    ['Drainage pipe','Dreineringspyp','Ipayipi lokukhipha amanzi'],
    ['Non-porous stainless steel','Nie-poreuse vlekvrye staal','Insimbi engagqwali engenazo izimbobo'],
    ['Secure transport platform','Veilige vervoerplatform','Isiteji sokuthutha esivikelekile'],
    ['Flexible refrigeration, controlled door to door.','Buigsame verkoeling, van deur tot deur beheer.','Isiqandisi esiguquguqukayo, silawulwa kusukela emnyango kuya emnyango.'],
    ['Stable refrigerated control up to 3 °C, set for the transfer.','Stabiele verkoeling tot 3 °C, ingestel vir die vervoer.','Ukulawulwa kwesiqandisi okuzinzile kuze kufike ku-3 °C, kusethwe ngokohambo.'],
    ['After every transport','Ná elke vervoer','Ngemva kwakho konke ukuthuthwa'],
    ['Collect & deliver — no storage','Haal af en lewer af — geen berging','Landa futhi uhambise — akukho kugcinwa'],
    ['Handover records, every job','Oorhandigingsrekords vir elke werk','Amarekhodi okudlulisa kuwo wonke umsebenzi'],

    // About and community
    ['Precision logistics with quiet dignity.','Presisielogistiek met stille waardigheid.','Ukuhlelwa okunembile ngenhlonipho ethule.'],
    ['Our role','Ons rol','Indima yethu'],
    ['In plain language','In eenvoudige taal','Ngamazwi alula'],
    ['We are not a funeral parlour. We are not a mortuary. We do not prepare, embalm, store, cremate, bury or arrange funerals. We transport — that is our whole job, and we do it properly.','Ons is nie ’n begrafnisonderneming of lykshuis nie. Ons berei, balsem, berg, veras of begrawe nie en reël nie begrafnisse nie. Ons vervoer — dit is ons hele werk, en ons doen dit behoorlik.','Asilona ikhaya labangcwabi noma amakhaza. Asilungisi, asigqumisi, asigcini, asishisi, asingcwabi futhi asihleli imingcwabo. Siyathutha — yilowo wonke umsebenzi wethu, futhi siwenza kahle.'],
    ['Company details','Maatskappybesonderhede','Imininingwane yenkampani'],
    ['How we operate','Hoe ons werk','Indlela esisebenza ngayo'],
    ['A direct process built on dignity, documentation and control.','’n Direkte proses gebou op waardigheid, dokumentasie en beheer.','Inqubo eqondile eyakhelwe isithunzi, imibhalo nokulawula.'],
    ['Direct collection','Direkte afhaal','Ukulanda ngqo'],
    ['We collect on instruction from an authorised facility, provider or responsible party.','Ons haal af op instruksie van ’n gemagtigde fasiliteit, verskaffer of verantwoordelike party.','Silanda ngokuyalelwa yisikhungo esigunyaziwe, umhlinzeki noma umuntu obhekele.'],
    ['Refrigerated transfer','Verkoelde oorplasing','Ukudlulisa ngesiqandisi'],
    ['The compartment is pre-cooled and held at a steady cold temperature up to 3 °C, set for the transfer.','Die kompartement word vooraf verkoel en op ’n bestendige koue temperatuur tot 3 °C gehou, ingestel vir die vervoer.','Igumbi lipholiswa kusengaphambili futhi ligcinwa ezingeni lokushisa elibandayo elizinzile kuze kufike ku-3 °C, ngokohambo.'],
    ['Signed handover','Getekende oorhandiging','Ukudlulisa okusayinwe'],
    ['Collection and delivery are recorded, with signed handover documentation.','Afhaal en aflewering word aangeteken, met getekende oorhandigingsdokumentasie.','Ukulanda nokuhambisa kuyarekhodwa, kube nemibhalo yokudlulisa esayinwe.'],
    ['Cleaning log','Skoonmaaklogboek','Irekhodi lokuhlanza'],
    ['The transport compartment is cleaned and the cleaning record is completed after the job.','Die vervoerkompartement word skoongemaak en die skoonmaakrekord word ná die werk voltooi.','Igumbi lokuthutha liyahlanzwa futhi irekhodi lokuhlanza ligcwaliswa ngemva komsebenzi.'],
    ['KZN, in all its diversity','KZN, in al sy diversiteit','IKZN, kukho konke ukuhlukahluka kwayo'],
    ['Every community, treated with dignity.','Elke gemeenskap, met waardigheid behandel.','Wonke umphakathi, uphathwa ngesithunzi.'],
    ['We work respectfully with isiZulu- and Afrikaans-speaking families and providers, and with Indian South African, Hindu, Muslim, Christian and other communities. We follow the cultural or religious instructions supplied by the authorised family or provider while keeping transport, refrigeration and chain-of-custody standards consistent.','Ons werk met respek met isiZulu- en Afrikaanssprekende gesinne en verskaffers, en met Indiër-Suid-Afrikaanse, Hindoe-, Moslem-, Christen- en ander gemeenskappe. Ons volg die kulturele of geloofsinstruksies van die gemagtigde gesin of verskaffer, terwyl vervoer-, verkoelings- en bewaringskettingstandaarde konsekwent bly.','Sisebenza ngenhlonipho nemindeni nabahlinzeki abakhuluma isiZulu nesiBhunu, kanye nemiphakathi yamaNdiya aseNingizimu Afrika, amaHindu, amaSulumane, amaKrestu neminye. Silandela imiyalelo yamasiko noma yenkolo enikezwa umndeni noma umhlinzeki ogunyaziwe, kuyilapho sigcina amazinga okuthutha, isiqandisi nochungechunge lokugcinwa efana.'],
    ['Communities and languages we respectfully support','Gemeenskappe en tale wat ons met respek ondersteun','Imiphakathi nezilimi esizisekela ngenhlonipho'],
    ['Indian South African','Indiër-Suid-Afrikaans','AmaNdiya aseNingizimu Afrika'],
    ['Every KZN community','Elke KZN-gemeenskap','Wonke umphakathi waseKZN'],
    ['Need to arrange a transport?','Moet u vervoer reël?','Udinga ukuhlela ukuthuthwa?'],
    ['We are ready to discuss the collection point, destination, documentation and timing.','Ons is gereed om die afhaalpunt, bestemming, dokumentasie en tydsberekening te bespreek.','Sikulungele ukuxoxa ngendawo yokulanda, indawo okuyiwa kuyo, imibhalo nesikhathi.'],

    // Services
    ['Human remains','Menslike oorskot','Abashonile'],
    ['transport services','vervoerdienste','izinsizakalo zokuthutha'],
    ['For hospitals, mortuaries and funeral parlours requiring local movement of human remains.','Vir hospitale, lykshuise en begrafnisondernemings wat plaaslike vervoer van menslike oorskot benodig.','Ezibhedlela, emakhazeni nasemakhaya abangcwabi adinga ukuthuthwa kwabashonile endaweni.'],
    ['Transfers to surrounding provinces — Gauteng, Free State, Eastern Cape and Mpumalanga — quoted and scheduled in advance.','Oorplasings na omliggende provinsies — Gauteng, Vrystaat, Oos-Kaap en Mpumalanga — word vooraf gekwoteer en geskeduleer.','Ukudluliselwa ezifundazweni eziseduze — eGauteng, Free State, Eastern Cape naseMpumalanga — kunikezwa intengo futhi kuhlelwe kusengaphambili.'],
    ['For funeral homes that do not have a suitable vehicle available or need additional transport capacity.','Vir begrafnisondernemings sonder ’n geskikte beskikbare voertuig of wat bykomende vervoerkapasiteit benodig.','Emakhaya abangcwabi angenayo imoto efanele noma adinga amandla engeziwe okuthutha.'],
    ['Transport support for inter-provincial or cross-border processes where authorised parties provide required documentation and permits.','Vervoerondersteuning vir interprovinsiale of oorgrensprosesse waar gemagtigde partye die vereiste dokumentasie en permitte verskaf.','Ukusekela ukuthutha phakathi kwezifundazwe noma kweqa umngcele lapho izinhlangothi ezigunyaziwe zinikeza imibhalo nezimvume ezidingekayo.'],
    ['Subject to availability and documentation.','Onderhewig aan beskikbaarheid en dokumentasie.','Kuncike ekutholakaleni nasemibhalweni.'],
    ['Structured transport documentation to support professional handling, collection, delivery and cleaning records.','Gestruktureerde vervoerdokumentasie ter ondersteuning van professionele hantering, afhaal-, aflewerings- en skoonmaakrekords.','Imibhalo yokuthutha ehlelekile yokusekela ukuphathwa ngobungcweti, ukulanda, ukuhambisa namarekhodi okuhlanza.'],
    ['Support for','Ondersteuning vir','Ukusekela'],
    ['Long-distance repatriation support','Langafstand-repatriasieondersteuning','Ukusekela ukubuyiselwa ekhaya amabanga amade'],
    ['After-hours collection support','Na-ure-afhaalondersteuning','Ukusekela ukulanda ngemva kwamahora'],
    ['Temperature-controlled refrigeration','Temperatuurbeheerde verkoeling','Isiqandisi esilawulwa izinga lokushisa'],
    ['Signed chain-of-custody, every job','Getekende bewaringsketting vir elke werk','Uchungechunge lokugcinwa olusayinwe kuwo wonke umsebenzi'],
    ['Updates from collection to delivery','Opdaterings van afhaal tot aflewering','Izibuyekezo kusukela ekulandeni kuya ekuhambiseni'],
    ['Dedicated vehicle, never shared loads','Toegewyde voertuig, vragte word nooit gedeel nie','Imoto ezinikele, imithwalo ayihlanganiswa'],
    ['Available around the clock — after-hours, weekend and public-holiday collections.','Deurgaans beskikbaar — afhalings na ure, oor naweke en op openbare vakansiedae.','Sitholakala ubusuku nemini — ukulanda ngemva kwamahora, ngezimpelasonto nangamaholide omphakathi.'],
    ['What we do','Wat ons doen','Esikwenzayo'],
    ['Dedicated refrigerated transport of human remains between approved facilities — hospitals, mortuaries, funeral parlours, crematoria, burial destinations and long-distance repatriation routes. Transport support only: no funeral arrangement, storage, preparation or embalming.','Toegewyde verkoelde vervoer van menslike oorskot tussen goedgekeurde fasiliteite — hospitale, lykshuise, begrafnisondernemings, krematoriums, begrafnisbestemmings en langafstand-repatriasieroetes. Slegs vervoerondersteuning: geen begrafnisreëlings, berging, voorbereiding of balseming nie.','Ukuthuthwa kwabashonile ngesiqandisi phakathi kwezikhungo ezigunyaziwe — izibhedlela, amakhaza, amakhaya abangcwabi, izindawo zokushisa izidumbu, izindawo zokungcwaba nemizila emide yokubuyiselwa ekhaya. Ukusekela ukuthutha kuphela: akukho ukuhlela umngcwabo, ukugcina, ukulungisa noma ukugqumisa.'],

    // Compliance and documentation
    ['Compliance &','Nakoming en','Ukuthobela kanye'],
    ['documentation','dokumentasie','nemibhalo'],
    ['Proudly South African · Transport-only operator','Trots Suid-Afrikaans · Slegs-vervoer-operateur','Siyaziqhenya ngeNingizimu Afrika · Umhlinzeki wezokuthutha kuphela'],
    ['Compliance themes','Nakomingstemas','Izihloko zokuthobela'],
    ['Transport-only operation','Slegs-vervoer-bedryf','Umsebenzi wokuthutha kuphela'],
    ['Refrigerated vehicle','Verkoelde voertuig','Imoto enesiqandisi'],
    ['Vehicle cleaning and disinfection','Voertuigskoonmaak en ontsmetting','Ukuhlanzwa nokubulawa kwamagciwane emotweni'],
    ['Chain-of-custody records','Bewaringskettingrekords','Amarekhodi ochungechunge lokugcinwa'],
    ['Collection and receiving documentation','Afhaal- en ontvangsdokumentasie','Imibhalo yokulanda nokwamukela'],
    ['Environmental Health / municipal guidance','Omgewingsgesondheid / munisipale riglyne','Imihlahlandlela Yezempilo Yezemvelo / kamasipala'],
    ['R363 Management of Human Remains awareness','Bewustheid van R363-bestuur van menslike oorskot','Ukuqwashisa nge-R363 yokuphathwa kwabashonile'],
    ['Client-provided authorisations and permits where required','Magtigings en permitte deur die kliënt verskaf waar nodig','Ukugunyazwa nezimvume ezinikezwa iklayenti lapho kudingeka'],
    ['Documents usually required or requested','Dokumente wat gewoonlik vereis of versoek word','Imibhalo evame ukudingeka noma ukucelwa'],
    ['Collection instruction','Afhaalinstruksie','Umyalelo wokulanda'],
    ['Collection instruction from authorised client','Afhaalinstruksie van gemagtigde kliënt','Umyalelo wokulanda ovela kwiklayenti eligunyaziwe'],
    ['Death documentation','Sterftedokumentasie','Imibhalo yokushona'],
    ['Burial order where already issued','Begrafnisbevel waar reeds uitgereik','Incwadi yokungcwaba lapho isivele ikhishiwe'],
    ['SAPS transport certificate or movement authority where required','SAPD-vervoersertifikaat of bewegingsmagtiging waar nodig','Isitifiketi sokuthutha se-SAPS noma igunya lokunyakaza lapho kudingeka'],
    ['Release note','Vrystellingsnota','Incwadi yokukhulula'],
    ['Release note from hospital / mortuary / funeral parlour','Vrystellingsnota van hospitaal / lykshuis / begrafnisonderneming','Incwadi yokukhulula evela esibhedlela / emakhazeni / ekhaya labangcwabi'],
    ['Receiving note','Ontvangsnota','Incwadi yokwamukela'],
    ['Receiving note signed by destination','Ontvangsnota deur die bestemming onderteken','Incwadi yokwamukela esayinwe endaweni okuyiwa kuyo'],
    ['ID or passport copy of deceased if available','ID- of paspoortafskrif van die oorledene indien beskikbaar','Ikhophi kamazisi noma iphasiphothi yomufi uma ikhona'],
    ['Special handling declaration where needed','Spesiale hanteringsverklaring waar nodig','Isimemezelo sokuphathwa okukhethekile lapho kudingeka'],
    ['Cleaning and disinfection log','Skoonmaak- en ontsmettingslogboek','Irekhodi lokuhlanza nokubulala amagciwane'],
    ['Incident report if abnormal event occurs','Voorvalverslag indien ’n buitengewone gebeurtenis plaasvind','Umbiko wesigameko uma kwenzeka okungajwayelekile'],
    ['Please note','Neem asseblief kennis','Sicela uqaphele'],
    ['Requirements may vary depending on location, cause of death, disease risk, destination, inter-provincial movement, cross-border movement, and the authorised parties involved. Clients must confirm official requirements with the relevant authorities where needed.','Vereistes kan wissel volgens ligging, oorsaak van dood, siekterisiko, bestemming, interprovinsiale of oorgrensbeweging en die betrokke gemagtigde partye. Kliënte moet amptelike vereistes waar nodig met die toepaslike owerhede bevestig.','Izidingo zingahluka ngokuya ngendawo, imbangela yokufa, ingozi yezifo, indawo okuyiwa kuyo, ukunyakaza phakathi kwezifundazwe noma kweqa umngcele, kanye nezinhlangothi ezigunyaziwe. Amaklayenti kufanele aqinisekise izidingo ezisemthethweni neziphathimandla ezifanele lapho kudingeka.'],
    ['Controlled refrigeration','Verkoeling onder beheer','Isiqandisi esilawulwayo'],
    ['Secure enclosed transport','Veilige, geslote vervoer','Ukuthutha okuvaliwe nokuvikelekile'],
    ['Easy-clean surfaces','Maklik-skoonmaakbare oppervlaktes','Izindawo ezihlanzeka kalula'],
    ['Designed for cleaning and disinfection, with suitable tray and drainage','Ontwerp vir skoonmaak en ontsmetting, met ’n geskikte laaibak en dreinering','Kwakhelwe ukuhlanzwa nokubulala amagciwane, kunethreyi nokukhipha amanzi okufanele'],
    ['Dignified conveyance that does not endanger public health','Waardige vervoer wat nie openbare gesondheid in gevaar stel nie','Ukuthutha ngesithunzi okungabeki impilo yomphakathi engcupheni'],
    ['Flexible refrigeration, controlled door to door.','Buigsame verkoeling, van deur tot deur beheer.','Isiqandisi esiguquguqukayo, silawulwa kusukela emnyango kuya emnyango.'],
    ['Transport-only — no storage premises.','Slegs vervoer — geen bergingsperseel nie.','Ukuthutha kuphela — azikho izakhiwo zokugcina.'],

    // Process
    ['How a','Hoe ’n','Indlela'],
    ['transport job','vervoerwerk','umsebenzi wokuthutha'],
    ['works','werk','osebenza ngayo'],
    ['Transport request','Vervoerversoek','Isicelo sokuthuthwa'],
    ['You contact us with the collection point, destination, deceased details and urgency.','U kontak ons met die afhaalpunt, bestemming, besonderhede van die oorledene en dringendheid.','Usithinta ngendawo yokulanda, indawo okuyiwa kuyo, imininingwane yomufi nokuphuthuma.'],
    ['Documentation check','Dokumentasiekontrole','Ukuhlolwa kwemibhalo'],
    ['We confirm available documentation and any special handling requirements.','Ons bevestig beskikbare dokumentasie en enige spesiale hanteringsvereistes.','Siqinisekisa imibhalo etholakalayo nanoma yiziphi izidingo zokuphathwa okukhethekile.'],
    ['Route confirmation','Roetebevestiging','Ukuqinisekiswa komzila'],
    ['We confirm distance, timing, driver, vehicle availability and estimated cost.','Ons bevestig afstand, tydsberekening, bestuurder, voertuigbeskikbaarheid en beraamde koste.','Siqinisekisa ibanga, isikhathi, umshayeli, ukutholakala kwemoto nezindleko ezilinganisiwe.'],
    ['Collection','Afhaal','Ukulanda'],
    ['Our driver collects from the authorised facility or responsible party and records collection details.','Ons bestuurder haal by die gemagtigde fasiliteit of verantwoordelike party af en teken die afhaalbesonderhede aan.','Umshayeli wethu ulanda esikhungweni esigunyaziwe noma kumuntu obhekele futhi aqophe imininingwane yokulanda.'],
    ['Transport','Vervoer','Ukuthutha'],
    ['Human remains are transported respectfully in the refrigerated vehicle.','Menslike oorskot word met respek in die verkoelde voertuig vervoer.','Abashonile bathuthwa ngenhlonipho ngemoto enesiqandisi.'],
    ['Delivery & sign-off','Aflewering en aftekening','Ukuhambisa nokusayina'],
    ['The receiving party signs the receiving note and confirms handover.','Die ontvanger teken die ontvangsnota en bevestig oorhandiging.','Owemukelayo usayina incwadi yokwamukela futhi aqinisekise ukudluliswa.'],
    ['The vehicle compartment is cleaned and disinfected after transport.','Die voertuigkompartement word ná vervoer skoongemaak en ontsmet.','Igumbi lemoto liyahlanzwa futhi libulawe amagciwane ngemva kokuthutha.'],
    ['Job complete · records closed','Werk voltooi · rekords afgehandel','Umsebenzi uphelile · amarekhodi avaliwe'],

    // Areas and route coverage
    ['KZN-focused','KZN-gefokusde','Okugxile eKZN'],
    ['transport support','vervoerondersteuning','ukusekela ukuthutha'],
    ['Based in Cato Ridge on the N3. We are transport-only and do not store human remains — so we prioritise routes closest to our base and schedule longer transfers by arrangement.','Ons is in Cato Ridge aan die N3 gebaseer. Ons verskaf slegs vervoer en berg nie menslike oorskot nie — daarom prioritiseer ons roetes naaste aan ons basis en skeduleer langer vervoer volgens reëling.','Sizinze eCato Ridge ku-N3. Sithutha kuphela futhi asigcini abashonile — ngakho sibeka phambili imizila eseduze nesizinda sethu bese sihlela uhambo olude ngokuvumelana.'],
    ['KZN route network','KZN-roetenetwerk','Inethiwekhi yemizila yaseKZN'],
    ['Daily refrigerated transfers · surrounding provinces by arrangement','Daaglikse verkoelde oorplasings · omliggende provinsies volgens reëling','Ukudlulisa ngesiqandisi nsuku zonke · izifundazwe eziseduze ngokuhlelwa'],
    ['Core area — within ±1 hour of Cato Ridge','Kerngebied — binne ±1 uur van Cato Ridge','Indawo eyinhloko — ngaphakathi kwehora eli-±1 ukusuka eCato Ridge'],
    ['Wider KZN & surrounding provinces — by arrangement','Wyer KZN en omliggende provinsies — volgens reëling','IKZN ebanzi nezifundazwe eziseduze — ngokuhlelwa'],
    ['Surrounding provinces','Omliggende provinsies','Izifundazwe eziseduze'],
    ['By arrangement','Volgens reëling','Ngokuhlelwa'],
    ['KwaZulu-Natal daily; surrounding provinces by arrangement','KwaZulu-Natal daagliks; omliggende provinsies volgens reëling','KwaZulu-Natal nsuku zonke; izifundazwe eziseduze ngokuhlelwa'],
    ['View all areas covered','Bekyk alle bedieningsgebiede','Buka zonke izindawo esizisebenzelayo'],
    ['Which areas do you cover?','Watter gebiede bedien julle?','Yiziphi izindawo enizisebenzelayo?'],
    ['Our core focus is KwaZulu-Natal — we are based in Cato Ridge on the N3, under an hour from Durban and Pietermaritzburg. Because we are transport-only and do not store human remains, longer routes to surrounding provinces are run by prior arrangement so collection and delivery line up on one trip.','Ons kernfokus is KwaZulu-Natal — ons is in Cato Ridge aan die N3, minder as ’n uur van Durban en Pietermaritzburg. Omdat ons slegs vervoer en nie menslike oorskot berg nie, word langer roetes na omliggende provinsies vooraf gereël sodat afhaal en aflewering in een rit aansluit.','Sigxile kakhulu eKwaZulu-Natal — sizinze eCato Ridge ku-N3, ngaphansi kwehora ukusuka eDurban nasePietermaritzburg. Ngenxa yokuthi sithutha kuphela futhi asigcini abashonile, imizila emide eya ezifundazweni eziseduze ihlelwa kusengaphambili ukuze ukulanda nokuhambisa kuhambisane ohambweni olulodwa.'],
    ['We do not store human remains — every job is a direct collect-and-deliver run. Routes to surrounding provinces and beyond are quoted and scheduled in advance so collection and delivery line up on one trip. Availability depends on scheduling, distance, documentation and vehicle readiness.','Ons berg nie menslike oorskot nie — elke werk is ’n direkte afhaal-en-afleweringsrit. Roetes na omliggende provinsies en verder word vooraf gekwoteer en geskeduleer sodat afhaal en aflewering in een rit aansluit. Beskikbaarheid hang af van skedulering, afstand, dokumentasie en voertuiggereedheid.','Asigcini abashonile — wonke umsebenzi uwuhambo oluqondile lokulanda nokuhambisa. Imizila eya ezifundazweni eziseduze nangaphezulu inikezwa intengo futhi ihlelwe kusengaphambili ukuze ukulanda nokuhambisa kuhambisane ohambweni olulodwa. Ukutholakala kuncike ekuhleleni, ebangeni, emibhalweni nasekulungeleni kwemoto.'],
    ['Animated map of KwaZulu-Natal showing refrigerated transport routes from the Cato Ridge hub','Geanimeerde kaart van KwaZulu-Natal wat verkoelde vervoerroetes vanaf die Cato Ridge-spilpunt wys','Imephu enyakazayo yaseKwaZulu-Natal ekhombisa imizila yokuthutha ngesiqandisi esuka esikhungweni saseCato Ridge'],
    ['INDIAN OCEAN','INDIESE OSEAAN','ULWANDLEKAZI INDIYA'],
    ['HUB · N3 corridor','SPILPUNT · N3-korridor','ISIKHUNGO · Umhubhe we-N3'],

    // Funeral-industry partnerships
    ['Reliable backup capacity — without owning a long-distance refrigerated vehicle.','Betroubare rugsteunkapasiteit — sonder om ’n langafstand-verkoelde voertuig te besit.','Amandla okusekela athembekile — ngaphandle kokuba nemoto yesiqandisi yamabanga amade.'],
    ['When your vehicles are unavailable, unsuitable for long-distance work, or already booked — we provide discreet, professional overflow transport support. Invoice-based, no complications.','Wanneer u voertuie nie beskikbaar is nie, nie vir langafstandwerk geskik is nie of reeds bespreek is — verskaf ons diskrete, professionele bykomende vervoerondersteuning. Faktuurgebaseer, sonder komplikasies.','Lapho izimoto zenu zingatholakali, zingafanele umsebenzi webanga elide noma sezibhukhiwe — sinikeza ukusekela okunesizotha nokunobungcweti. Kusebenza nge-invoyisi, ngaphandle kwezinkinga.'],
    ['Partner benefits','Voordele vir vennote','Izinzuzo zozakwethu'],
    ['No need to own long-distance refrigerated transport','Geen behoefte om langafstand-verkoelde vervoer te besit nie','Asikho isidingo sokuba nemoto yesiqandisi yamabanga amade'],
    ['Reliable backup vehicle','Betroubare rugsteunvoertuig','Imoto yokusekela ethembekile'],
    ['Professional documentation','Professionele dokumentasie','Imibhalo yobungcweti'],
    ['Province-to-province transfer support','Ondersteuning vir oorplasings tussen provinsies','Ukusekela ukudlulisa phakathi kwezifundazwe'],
    ['After-hours support','Na-ure-ondersteuning','Ukusekela ngemva kwamahora'],
    ['Respectful handling','Respekvolle hantering','Ukuphatha ngenhlonipho'],
    ['Clean, dedicated vehicle','Skoon, toegewyde voertuig','Imoto ehlanzekile nezinikele'],
    ['Invoice-based business relationship','Faktuurgebaseerde sakeverhouding','Ubudlelwano bebhizinisi obususelwe ku-invoyisi'],
    ['Set up an invoice-based transport relationship','Stel ’n faktuurgebaseerde vervoerverhouding op','Misa ubudlelwano bokuthutha obususelwe ku-invoyisi'],
    ['Partner with us','Word ons vennoot','Bambisana nathi'],
    ['Straightforward business relationship — a confirmed quote per job, invoiced properly.','’n Eenvoudige sakeverhouding — ’n bevestigde kwotasie per werk, behoorlik gefaktureer.','Ubudlelwano bebhizinisi obuqondile — intengo eqinisekisiwe ngomsebenzi ngamunye, kufakwe i-invoyisi ngendlela efanele.'],
    ['Invoice-based, no complications','Faktuurgebaseer, sonder komplikasies','Nge-invoyisi, ngaphandle kwezinkinga'],

    // Request form and contact
    ['Need to arrange a transport?','Moet u vervoer reël?','Udinga ukuhlela ukuthuthwa?'],
    ['Fastest response for urgent jobs: call or WhatsApp','Vinnigste reaksie vir dringende werk: bel of WhatsApp','Impendulo esheshayo yomsebenzi ophuthumayo: shayela noma WhatsApp'],
    ['Company / Funeral parlour','Maatskappy / Begrafnisonderneming','Inkampani / Ikhaya labangcwabi'],
    ['WhatsApp number','WhatsApp-nommer','Inombolo ye-WhatsApp'],
    ['Collection point','Afhaalpunt','Indawo yokulanda'],
    ['Destination','Bestemming','Indawo okuyiwa kuyo'],
    ['Date and time required','Datum en tyd benodig','Usuku nesikhathi okudingekayo'],
    ['Is this urgent?','Is dit dringend?','Ingabe kuyaphuthuma?'],
    ['Deceased name','Naam van oorledene','Igama lomufi'],
    ['Documentation available?','Dokumentasie beskikbaar?','Ingabe imibhalo iyatholakala?'],
    ['Special handling required?','Spesiale hantering nodig?','Kudingeka ukuphathwa okukhethekile?'],
    ['Information submitted is treated confidentially and used only to respond to the transport request.','Inligting wat ingedien word, word vertroulik hanteer en slegs gebruik om op die vervoerversoek te reageer.','Ulwazi oluthunyelwe lugcinwa luyimfihlo futhi lusetshenziselwa kuphela ukuphendula isicelo sokuthuthwa.'],
    ['For urgent transport requests, WhatsApp or call directly.','Vir dringende vervoerversoeke, WhatsApp of bel direk.','Ngezicelo zokuthuthwa eziphuthumayo, thumela i-WhatsApp noma ushayele ngqo.'],
    ['Online — replies 24/7','Aanlyn — antwoorde 24/7','Ku-inthanethi — siphendula 24/7'],
    ['Available 24/7 for urgent transport','24/7 beskikbaar vir dringende vervoer','Siyatholakala 24/7 kwezokuthutha eziphuthumayo'],
    ['Submit a request','Dien ’n versoek in','Thumela isicelo'],
    ['Any additional details','Enige bykomende besonderhede','Noma yimiphi imininingwane eyengeziwe'],
    ['Facility name, town / suburb','Fasiliteit se naam, dorp / voorstad','Igama lesikhungo, idolobha / indawo'],
    ['e.g. 12 July, 08:00','bv. 12 Julie, 08:00','isb. 12 Julayi, 08:00'],
    ['The request could not be sent right now. Please WhatsApp or call us directly — or try again in a moment.','Die versoek kon nie nou gestuur word nie. WhatsApp of bel ons asseblief direk — of probeer oor ’n oomblik weer.','Isicelo asikwazanga ukuthunyelwa manje. Sicela usithumele i-WhatsApp noma usishayele ngqo — noma uzame futhi emva kwesikhashana.'],
    ['Please fill in at least your name and phone number so we can reach you.','Vul asseblief ten minste u naam en telefoonnommer in sodat ons u kan bereik.','Sicela ugcwalise okungenani igama nenombolo yocingo ukuze sikwazi ukukuthinta.'],
    ['Transport-only service provider.','Slegs-vervoer-diensverskaffer.','Umhlinzeki wezokuthutha kuphela.'],
    ['We provide transport-only human remains logistics.','Ons verskaf slegs-vervoer-logistiek vir menslike oorskot.','Sinikeza kuphela ukuhlelwa kokuthuthwa kwabashonile.'],

    // Questions and reassurance
    ['Asked the way parlours actually ask them — straight answers.','Gevra soos begrafnisondernemings dit werklik vra — reguit antwoorde.','Kubuzwa ngendlela amakhaya abangcwabi abuza ngayo — izimpendulo eziqondile.'],
    ['Are you a funeral parlour?','Is julle ’n begrafnisonderneming?','Ingabe niyikhaya labangcwabi?'],
    ['No. We are a transport-only company. We do not arrange funerals, store, prepare, embalm, cremate or bury. We move human remains between approved facilities — that\'s our whole job.','Nee. Ons is ’n maatskappy wat slegs vervoer. Ons reël nie begrafnisse nie en berg, berei, balsem, veras of begrawe nie. Ons vervoer menslike oorskot tussen goedgekeurde fasiliteite — dit is ons hele werk.','Cha. Siyinkampani yokuthutha kuphela. Asihleli imingcwabo, asigcini, asilungisi, asigqumisi, asishisi futhi asingcwabi. Sithutha abashonile phakathi kwezikhungo ezigunyaziwe — yilowo wonke umsebenzi wethu.'],
    ['Can a family contact you directly?','Kan ’n gesin julle direk kontak?','Ingabe umndeni ungaxhumana nani ngqo?'],
    ['Yes — we\'ll gladly take your call and guide you, but transport is carried out in support of an authorised funeral parlour, mortuary, hospital or insurer, with the correct documentation in place.','Ja — ons neem graag u oproep en gee leiding, maar vervoer word ter ondersteuning van ’n gemagtigde begrafnisonderneming, lykshuis, hospitaal of versekeraar uitgevoer, met die korrekte dokumentasie in plek.','Yebo — sizokwamukela ucingo lwakho futhi sikuqondise, kodwa ukuthutha kwenziwa ngokusekela ikhaya labangcwabi, amakhaza, isibhedlela noma umshwalense ogunyaziwe, kube nemibhalo efanele.'],
    ['How quickly can you collect?','Hoe vinnig kan julle afhaal?','Ningalanda ngokushesha kangakanani?'],
    ['We operate 24/7, including after-hours and weekends. Once the paperwork and route are confirmed, we dispatch — availability depends on scheduling, distance and vehicle readiness.','Ons werk 24/7, insluitend na ure en oor naweke. Sodra die dokumentasie en roete bevestig is, vertrek ons — beskikbaarheid hang af van skedulering, afstand en voertuiggereedheid.','Sisebenza 24/7, kuhlanganise ngemva kwamahora nangezimpelasonto. Uma imibhalo nomzila sekuqinisekisiwe, siyathumela — ukutholakala kuncike ekuhleleni, ebangeni nasekulungeleni kwemoto.'],
    ['What paperwork is needed?','Watter dokumentasie is nodig?','Yimiphi imibhalo edingekayo?'],
    ['Typically a collection instruction, death documentation, a release note from the facility and a receiving note at the destination. We confirm exactly what\'s needed for your route when you contact us — see our','Gewoonlik ’n afhaalinstruksie, sterftedokumentasie, ’n vrystellingsnota van die fasiliteit en ’n ontvangsnota by die bestemming. Ons bevestig presies wat vir u roete nodig is wanneer u ons kontak — sien ons','Ngokuvamile kudingeka umyalelo wokulanda, imibhalo yokushona, incwadi yokukhulula evela esikhungweni nencwadi yokwamukela endaweni okuyiwa kuyo. Siqinisekisa ngqo okudingekayo kumzila wakho uma usithinta — bheka'],
    ['Have a different question? Message us — we reply around the clock.','Het u ’n ander vraag? Stuur vir ons ’n boodskap — ons antwoord deurgaans.','Unombuzo ohlukile? Sithumele umlayezo — siphendula ubusuku nemini.'],

    // Footer and legal reassurance
    ['Human remains transport & repatriation support across KwaZulu-Natal and surrounding provinces. Based in Cato Ridge on the N3, KwaZulu-Natal.','Vervoer van menslike oorskot en repatriasieondersteuning regdeur KwaZulu-Natal en omliggende provinsies. Gebaseer in Cato Ridge aan die N3, KwaZulu-Natal.','Ukuthuthwa kwabashonile nokusekelwa kokubuyiselwa ekhaya kulo lonke elaseKwaZulu-Natal nasezifundazweni eziseduze. Sizinze eCato Ridge ku-N3, KwaZulu-Natal.'],
    ['BODY TRANSPORT SOLUTIONS (PTY) LTD is a transport-only service provider. We do not operate as a funeral parlour, mortuary, embalming facility, crematorium, burial service or funeral policy provider. All services are subject to applicable documentation, legal, municipal, health and transport requirements.','BODY TRANSPORT SOLUTIONS (PTY) LTD is ’n diensverskaffer wat slegs vervoer. Ons bedryf nie ’n begrafnisonderneming, lykshuis, balsemfasiliteit, krematorium, begrafnisdiens of begrafnispolisverskaffer nie. Alle dienste is onderhewig aan toepaslike dokumentasie-, regs-, munisipale, gesondheids- en vervoervereistes.','I-BODY TRANSPORT SOLUTIONS (PTY) LTD ingumhlinzeki wezokuthutha kuphela. Asisebenzi njengekhaya labangcwabi, amakhaza, indawo yokugqumisa, indawo yokushisa izidumbu, inkonzo yokungcwaba noma umhlinzeki womshwalense womngcwabo. Zonke izinsizakalo zincike emibhalweni, emthethweni, kumasipala, kwezempilo nasezidingweni zokuthutha.'],

    // Image and interface accessibility
    ['White refrigerated Body Transport Solutions vehicle','Wit verkoelde Body Transport Solutions-voertuig','Imoto emhlophe ye-Body Transport Solutions enesiqandisi'],
    ['Stainless steel refrigerated compartment with dedicated loading tray','Verkoelde vlekvryestaal-kompartement met toegewyde laaibak','Igumbi lesiqandisi lensimbi engagqwali elinethreyi lokulayisha elizinikele'],
    ['Annotated view of the refrigerated compartment: evaporator cooling system, forced-air circulation, drainage pipe, non-porous stainless steel and secure transport platform','Geannoteerde aansig van die verkoelde kompartement: verdamper-verkoelingstelsel, gedwonge lugsirkulasie, dreineringspyp, nie-poreuse vlekvrye staal en veilige vervoerplatform','Ukubuka okunamazwana kwegumbi lesiqandisi: uhlelo lokupholisa lwe-evaporator, ukujikeleza komoya ophoqiwe, ipayipi lokukhipha amanzi, insimbi engagqwali engenazo izimbobo nesiteji sokuthutha esivikelekile'],

    // Remaining form states and operational details
    ['Request received','Versoek ontvang','Isicelo samukelwe'],
    ['Thank you. We will contact you shortly to confirm collection point, destination, documentation and availability. For urgent jobs, please also call or WhatsApp directly.','Dankie. Ons sal u binnekort kontak om die afhaalpunt, bestemming, dokumentasie en beskikbaarheid te bevestig. Vir dringende werk, bel of WhatsApp ons asseblief ook direk.','Siyabonga. Sizokuthinta maduze ukuze siqinisekise indawo yokulanda, indawo okuyiwa kuyo, imibhalo nokutholakala. Ngomsebenzi ophuthumayo, sicela futhi ushayele noma uthumele i-WhatsApp ngqo.'],
    ['Not urgent — scheduled','Nie dringend nie — geskeduleer','Akuphuthumi — kuhleliwe'],
    ['Urgent — within 24 hours','Dringend — binne 24 uur','Kuyaphuthuma — kungakapheli amahora angu-24'],
    ['Emergency — immediate','Noodgeval — onmiddellik','Isimo esiphuthumayo — ngokushesha'],
    ['Yes — all documentation available','Ja — alle dokumentasie beskikbaar','Yebo — yonke imibhalo iyatholakala'],
    ['Partially — some documents pending','Gedeeltelik — sommige dokumente uitstaande','Kancane — eminye imibhalo isalindile'],
    ['Not yet — need guidance','Nog nie — leiding benodig','Hhayi okwamanje — sidinga ukuqondiswa'],
    ['No','Nee','Cha'],
    ['Yes — will explain in message','Ja — sal in die boodskap verduidelik','Yebo — ngizochaza emlayezweni'],
    ['Unsure','Onseker','Angiqiniseki'],
    ['(optional)','(opsioneel)','(akuphoqelekile)'],
    ['Sending…','Word gestuur…','Kuyathunyelwa…'],
    ['transport assistance','vervoerhulp','usizo lokuthutha'],
    ['. Otherwise use the form below.','. Gebruik andersins die vorm hieronder.','. Uma kungenjalo sebenzisa ifomu elingezansi.'],
    ['We confirm the collection point, destination, documentation requirements, vehicle availability and route in one conversation.','Ons bevestig die afhaalpunt, bestemming, dokumentasievereistes, voertuigbeskikbaarheid en roete in een gesprek.','Siqinisekisa indawo yokulanda, indawo okuyiwa kuyo, izidingo zemibhalo, ukutholakala kwemoto nomzila engxoxweni eyodwa.'],
    ['Contact','Kontak','Xhumana'],
    ['Body Transport Solutions','Body Transport Solutions','Body Transport Solutions'],
    ['Company / Funeral parlour','Maatskappy / Begrafnisonderneming','Inkampani / Ikhaya labangcwabi'],
    ['Company details','Maatskappybesonderhede','Imininingwane yenkampani'],
    ['Cato Ridge / Camperdown / Durban corridor, KwaZulu-Natal','Cato Ridge / Camperdown / Durban-korridor, KwaZulu-Natal','Umhubhe waseCato Ridge / Camperdown / Durban, KwaZulu-Natal'],
    ['Refrigerated Volkswagen Transporter','Verkoelde Volkswagen Transporter','I-Volkswagen Transporter enesiqandisi'],
    ['Transport-only human remains logistics','Slegs-vervoer-logistiek vir menslike oorskot','Ukuhlelwa kokuthuthwa kwabashonile kuphela'],
    ['Reg No.','Reg.nr.','Inombolo yokubhalisa'],
    ['Tax No.','Belastingnr.','Inombolo yentela'],
    ['Reg No. 2026/464849/07 · Tax No. 9001928366','Reg.nr. 2026/464849/07 · Belastingnr. 9001928366','Inombolo yokubhalisa 2026/464849/07 · Inombolo yentela 9001928366'],
    ['Chain of custody','Bewaringsketting','Uchungechunge lokugcinwa'],
    ['Vehicle cleaning log','Voertuigskoonmaaklogboek','Irekhodi lokuhlanza imoto'],
    ['Separate transport area','Afsonderlike vervoerarea','Indawo yokuthutha ehlukile'],
    ['Moisture-resistant compartment surfaces','Vogbestande kompartementoppervlaktes','Izindawo zegumbi ezimelana nomswakama'],
    ['Non-absorbent stainless steel','Nie-absorberende vlekvrye staal','Insimbi engagqwali engamunci'],
    ['Stable cold control up to 3 °C, set for each transfer','Stabiele kouebeheer tot 3 °C, ingestel vir elke vervoer','Ukulawula amakhaza okuzinzile kuze kufike ku-3 °C, kusethwe ngohambo ngalunye'],
    ['The compartment can be pre-cooled and maintained at a stable cold temperature up to 3 °C, according to the transfer requirements.','Die kompartement kan vooraf verkoel en op ’n stabiele koue temperatuur tot 3 °C gehou word, volgens die vervoervereistes.','Igumbi lingapholiswa kusengaphambili futhi ligcinwe ezingeni lokushisa elibandayo elizinzile kuze kufike ku-3 °C, ngokwezidingo zohambo.'],
    ['The stainless-steel compartment of our Volkswagen Transporter combines forced-air cooling, an easy-clean transport platform and a dedicated condensate drainage line — designed for respectful, hygienic conveyance of human remains.','Die vlekvryestaal-kompartement van ons Volkswagen Transporter kombineer gedwonge-lugverkoeling, ’n maklik-skoonmaakbare vervoerplatform en ’n toegewyde kondensaatdreineringslyn — ontwerp vir respekvolle, higiëniese vervoer van menslike oorskot.','Igumbi lensimbi engagqwali le-Volkswagen Transporter yethu lihlanganisa ukupholisa ngomoya ophoqiwe, isiteji sokuthutha esihlanzeka kalula kanye nepayipi elizinikele lokukhipha amanzi — kwakhelwe ukuthutha abashonile ngenhlonipho nangokuhlanzeka.'],
    ['Understand the R363 context','Qonda die R363-konteks','Qonda umongo we-R363'],
    ['SA Management of Human Remains Regulations','SA-regulasies oor bestuur van menslike oorskot','Imithethonqubo yaseNingizimu Afrika yokuphathwa kwabashonile'],
    ['South African human-remains regulations — Regulation R363, National Health Act 61 of 2003.','Suid-Afrikaanse regulasies oor menslike oorskot — Regulasie R363, Nasionale Gesondheidswet 61 van 2003.','Imithethonqubo yaseNingizimu Afrika yabashonile — Umthethonqubo R363, uMthetho Wezempilo Kazwelonke 61 ka-2003.'],
    ['24/7, 365 days','24/7, 365 dae','24/7, izinsuku ezingu-365'],
    ['Direct','Direk','Ngqo'],
    ['Signed','Geteken','Kusayiniwe'],
    ['Human remains are transported respectfully in the refrigerated vehicle.','Menslike oorskot word met respek in die verkoelde voertuig vervoer.','Abashonile bathuthwa ngenhlonipho ngemoto enesiqandisi.'],
    ['You know where the vehicle is — status updates by WhatsApp along the route.','U weet waar die voertuig is — statusopdaterings via WhatsApp langs die roete.','Uyazi ukuthi imoto ikuphi — izibuyekezo zesimo nge-WhatsApp endleleni.'],
    ['Refrigerated compartment maintained and monitored on every route, short or long.','Verkoelde kompartement word op elke roete, kort of lank, onderhou en gemonitor.','Igumbi lesiqandisi liyagcinwa futhi liqashwe kuwo wonke umzila, omfushane noma omude.'],
    ['Collection and receiving notes signed at both ends — your paper trail is always complete.','Afhaal- en ontvangsnotas word aan albei kante onderteken — u dokumentasiespoor is altyd volledig.','Izincwadi zokulanda nokwamukela zisayinwa nhlangothi zombili — umlando wemibhalo uhlale uphelele.'],

    // Company and legal descriptions
    ['BODY TRANSPORT SOLUTIONS (PTY) LTD is a South African transport-only company focused on refrigerated human-remains transport and repatriation support. We support funeral parlours, mortuaries, hospitals, insurers and approved service providers that require reliable, respectful and professional transport capacity.','BODY TRANSPORT SOLUTIONS (PTY) LTD is ’n Suid-Afrikaanse maatskappy wat slegs vervoer en fokus op verkoelde vervoer van menslike oorskot en repatriasieondersteuning. Ons ondersteun begrafnisondernemings, lykshuise, hospitale, versekeraars en goedgekeurde diensverskaffers wat betroubare, respekvolle en professionele vervoerkapasiteit benodig.','I-BODY TRANSPORT SOLUTIONS (PTY) LTD iyinkampani yaseNingizimu Afrika yokuthutha kuphela egxile ekuthuthweni kwabashonile ngesiqandisi nasekusekeleni ukubuyiselwa ekhaya. Sisekela amakhaya abangcwabi, amakhaza, izibhedlela, abomshwalense nabahlinzeki bezinsizakalo abagunyaziwe abadinga amandla okuthutha athembekile, anenhlonipho nanobungcweti.'],
    ['BODY TRANSPORT SOLUTIONS operates as a transport-only service provider. All transport is subject to applicable South African legal, municipal, health and documentation requirements. The company does not replace official documents issued by the Department of Home Affairs, SAPS, hospitals, mortuaries, funeral parlours, municipalities or the Department of Health.','BODY TRANSPORT SOLUTIONS funksioneer as ’n diensverskaffer wat slegs vervoer. Alle vervoer is onderhewig aan toepaslike Suid-Afrikaanse regs-, munisipale, gesondheids- en dokumentasievereistes. Die maatskappy vervang nie amptelike dokumente wat deur Binnelandse Sake, SAPD, hospitale, lykshuise, begrafnisondernemings, munisipaliteite of die Departement van Gesondheid uitgereik word nie.','I-BODY TRANSPORT SOLUTIONS isebenza njengomhlinzeki wezokuthutha kuphela. Konke ukuthutha kuncike ezidingweni zomthetho, zikamasipala, zezempilo nezemibhalo zaseNingizimu Afrika. Inkampani ayithathi indawo yemibhalo esemthethweni ekhishwa uMnyango Wezasekhaya, i-SAPS, izibhedlela, amakhaza, amakhaya abangcwabi, omasipala noma uMnyango Wezempilo.'],
    ['We do not operate as a funeral parlour, mortuary, embalming facility, crematorium, burial service or funeral policy provider. All transportation is conducted in support of authorised funeral parlours, mortuaries, hospitals, insurers or approved responsible parties, subject to applicable documentation and legal requirements.','Ons bedryf nie ’n begrafnisonderneming, lykshuis, balsemfasiliteit, krematorium, begrafnisdiens of begrafnispolisverskaffer nie. Alle vervoer word ter ondersteuning van gemagtigde begrafnisondernemings, lykshuise, hospitale, versekeraars of goedgekeurde verantwoordelike partye uitgevoer, onderhewig aan toepaslike dokumentasie en regsvereistes.','Asisebenzi njengekhaya labangcwabi, amakhaza, indawo yokugqumisa, indawo yokushisa izidumbu, inkonzo yokungcwaba noma umhlinzeki womshwalense womngcwabo. Konke ukuthutha kwenziwa ngokusekela amakhaya abangcwabi, amakhaza, izibhedlela, abomshwalense noma izinhlangothi ezibhekele ezigunyaziwe, kuncike emibhalweni nasezidingweni zomthetho.'],
    ['We do not store human remains; every job is a direct, refrigerated collect-and-deliver run. Where a municipal application applies (for example eThekwini), it discloses our transportation methods and vehicle registration details.','Ons berg nie menslike oorskot nie; elke werk is ’n direkte, verkoelde afhaal-en-afleweringsrit. Waar ’n munisipale aansoek van toepassing is (byvoorbeeld eThekwini), verklaar dit ons vervoermetodes en voertuigregistrasiebesonderhede.','Asigcini abashonile; wonke umsebenzi uwuhambo oluqondile lokulanda nokuhambisa ngesiqandisi. Lapho isicelo sikamasipala sisebenza khona (isibonelo eThekwini), siveza izindlela zethu zokuthutha nemininingwane yokubhaliswa kwemoto.'],

    // Final homepage and map coverage
    ['funeral parlours','begrafnisondernemings','amakhaya abangcwabi'],
    ['A purpose-built refrigerated transporter used for human remains transport only.','’n Doelgeboude verkoelde vervoerder wat slegs vir die vervoer van menslike oorskot gebruik word.','Imoto yesiqandisi eyakhelwe ngokukhethekile ukuthuthwa kwabashonile kuphela.'],
    ['Hospital to funeral parlour','Hospitaal na begrafnisonderneming','Isibhedlela kuya ekhaya labangcwabi'],
    ['Mortuary to funeral parlour','Lykshuis na begrafnisonderneming','Amakhaza kuya ekhaya labangcwabi'],
    ['Funeral parlour to funeral parlour','Begrafnisonderneming na begrafnisonderneming','Ikhaya labangcwabi kuya kwelinye ikhaya labangcwabi'],
    ['Province-to-province transfers','Oorplasings tussen provinsies','Ukudlulisa phakathi kwezifundazwe'],
    ['Every transport job is backed by the correct documentation from the authorised parties: collection instructions, release notes, receiving notes, route sheets, chain-of-custody records, cleaning logs and incident reporting where required.','Elke vervoerwerk word deur die korrekte dokumentasie van die gemagtigde partye ondersteun: afhaalinstruksies, vrystellingsnotas, ontvangsnotas, roetestate, bewaringskettingrekords, skoonmaaklogboeke en voorvalverslae waar nodig.','Wonke umsebenzi wokuthutha usekelwa yimibhalo efanele evela ezinhlangothini ezigunyaziwe: imiyalelo yokulanda, izincwadi zokukhulula, izincwadi zokwamukela, amashidi omzila, amarekhodi ochungechunge lokugcinwa, amarekhodi okuhlanza nemibiko yezigameko lapho kudingeka.'],
    ['Our base in Cato Ridge sits right on the N3 — ±10 minutes from Camperdown, ±30 from Pietermaritzburg and ±45 from Durban. We are transport-only and do not store human remains, so we focus on routes we can collect and deliver quickly, with surrounding provinces by prior arrangement.','Ons basis in Cato Ridge is direk aan die N3 — ±10 minute van Camperdown, ±30 van Pietermaritzburg en ±45 van Durban. Ons verskaf slegs vervoer en berg nie menslike oorskot nie, daarom fokus ons op roetes waar ons vinnig kan afhaal en aflewer, met omliggende provinsies volgens voorafreëling.','Isizinda sethu eCato Ridge siku-N3 — imizuzu engu-±10 ukusuka eCamperdown, engu-±30 ePietermaritzburg nengu-±45 eDurban. Sithutha kuphela futhi asigcini abashonile, ngakho sigxila emizileni esingalanda futhi sihambise ngokushesha, izifundazwe eziseduze zihlelwe kusengaphambili.'],
    ['Call or WhatsApp — we confirm the collection point, destination, paperwork, availability and route in one conversation.','Bel of WhatsApp — ons bevestig die afhaalpunt, bestemming, dokumentasie, beskikbaarheid en roete in een gesprek.','Shayela noma uthumele i-WhatsApp — siqinisekisa indawo yokulanda, indawo okuyiwa kuyo, imibhalo, ukutholakala nomzila engxoxweni eyodwa.'],
    ['Compliance page','Nakomingsblad','Ikhasi lokuthobela'],
    ['Features aligned with','Kenmerke in ooreenstemming met','Izici ezihambisana ne'],
    ['Up to 3 °C','Tot 3 °C','Kuze kufike ku-3 °C'],
    ['Gauteng · by arrangement','Gauteng · volgens reëling','IGauteng · ngokuhlelwa'],
    ['Eastern Cape · by arrangement','Oos-Kaap · volgens reëling','IEastern Cape · ngokuhlelwa'],
    ['Note:','Nota:','Qaphela:'],
    ['Hindu','Hindoe','AmaHindu'],
    ['Muslim','Moslem','AmaSulumane'],
    ['Christian','Christen','AmaKrestu'],
    ['No. We are a transport-only company. We do not arrange funerals, store, prepare, embalm, cremate or bury. We move human remains between approved facilities — that’s our whole job.','Nee. Ons is ’n maatskappy wat slegs vervoer. Ons reël nie begrafnisse nie en berg, berei, balsem, veras of begrawe nie. Ons vervoer menslike oorskot tussen goedgekeurde fasiliteite — dit is ons hele werk.','Cha. Siyinkampani yokuthutha kuphela. Asihleli imingcwabo, asigcini, asilungisi, asigqumisi, asishisi futhi asingcwabi. Sithutha abashonile phakathi kwezikhungo ezigunyaziwe — yilowo wonke umsebenzi wethu.'],
    ['Yes — we’ll gladly take your call and guide you, but transport is carried out in support of an authorised funeral parlour, mortuary, hospital or insurer, with the correct documentation in place.','Ja — ons neem graag u oproep en gee leiding, maar vervoer word ter ondersteuning van ’n gemagtigde begrafnisonderneming, lykshuis, hospitaal of versekeraar uitgevoer, met die korrekte dokumentasie in plek.','Yebo — sizokwamukela ucingo lwakho futhi sikuqondise, kodwa ukuthutha kwenziwa ngokusekela ikhaya labangcwabi, amakhaza, isibhedlela noma umshwalense ogunyaziwe, kube nemibhalo efanele.'],
    ['Typically a collection instruction, death documentation, a release note from the facility and a receiving note at the destination. We confirm exactly what’s needed for your route when you contact us — see our','Gewoonlik ’n afhaalinstruksie, sterftedokumentasie, ’n vrystellingsnota van die fasiliteit en ’n ontvangsnota by die bestemming. Ons bevestig presies wat vir u roete nodig is wanneer u ons kontak — sien ons','Ngokuvamile kudingeka umyalelo wokulanda, imibhalo yokushona, incwadi yokukhulula evela esikhungweni nencwadi yokwamukela endaweni okuyiwa kuyo. Siqinisekisa ngqo okudingekayo kumzila wakho uma usithinta — bheka'],

    // MORE_ROWS
  ];

  const dictionaries = { af: new Map(), zu: new Map() };
  rows.forEach(([en, af, zu]) => { dictionaries.af.set(en, af); dictionaries.zu.set(en, zu); });

  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  let current = 'en';
  let applying = false;

  const languageNames = { en: 'English', af: 'Afrikaans', zu: 'isiZulu' };
  const allowed = new Set(['en','af','zu']);

  function translate(source) {
    if (current === 'en') return source;
    return dictionaries[current].get(source) || source;
  }

  function translateTextNode(node) {
    const parent = node.parentElement;
    if (!parent || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(parent.tagName)) return;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const match = source.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!match || !match[2]) return;
    const next = match[1] + translate(match[2]) + match[3];
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function translateElementAttrs(el) {
    const names = ['placeholder','aria-label','title','alt'];
    let saved = originalAttrs.get(el);
    if (!saved) { saved = {}; originalAttrs.set(el, saved); }
    names.forEach(name => {
      if (!el.hasAttribute || !el.hasAttribute(name)) return;
      if (!(name in saved)) saved[name] = el.getAttribute(name);
      const next = translate(saved[name]);
      if (el.getAttribute(name) !== next) el.setAttribute(name, next);
    });
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) { translateTextNode(root); return; }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateElementAttrs(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
      else translateElementAttrs(node);
    }
  }

  function updateChrome() {
    document.documentElement.lang = current;
    document.querySelectorAll('.bts-lang-switch').forEach(group => {
      group.dataset.active = current;
      group.querySelectorAll('[data-bts-lang]').forEach(button => {
        const active = button.dataset.btsLang === current;
        button.setAttribute('aria-pressed', String(active));
      });
    });
    const page = (location.hash || '#home').slice(1);
    const pageLabels = {
      en: { home:'', about:'About', services:'Services', compliance:'Compliance', process:'Job Process', areas:'Areas', partners:'Partners', request:'Request Transport', contact:'Contact' },
      af: { home:'', about:'Oor ons', services:'Dienste', compliance:'Nakoming', process:'Werkproses', areas:'Gebiede', partners:'Vennote', request:'Versoek vervoer', contact:'Kontak' },
      zu: { home:'', about:'Mayelana nathi', services:'Izinsizakalo', compliance:'Ukuthobela', process:'Inqubo yomsebenzi', areas:'Izindawo', partners:'Ozakwethu', request:'Cela ukuthuthwa', contact:'Xhumana' }
    };
    const label = pageLabels[current][page] || '';
    document.title = label ? `${label} | Body Transport Solutions` : 'BODY TRANSPORT SOLUTIONS | Refrigerated Human Remains Transport KwaZulu-Natal';
  }

  function applyLanguage(lang, persist = true) {
    if (!allowed.has(lang)) lang = 'en';
    current = lang;
    applying = true;
    translateTree(document.documentElement);
    updateChrome();
    applying = false;
    if (persist) {
      try { localStorage.setItem('bts-language', lang); } catch (_) {}
    }
    document.dispatchEvent(new CustomEvent('bts:languagechange', { detail: { language: lang, name: languageNames[lang] } }));
  }

  document.addEventListener('click', event => {
    const button = event.target.closest && event.target.closest('[data-bts-lang]');
    if (!button) return;
    event.preventDefault();
    applyLanguage(button.dataset.btsLang);
  });

  window.addEventListener('hashchange', () => setTimeout(() => { applying = true; translateTree(document.body); updateChrome(); applying = false; }, 60));

  const observer = new MutationObserver(records => {
    if (applying) return;
    applying = true;
    records.forEach(record => {
      if (record.type === 'characterData') translateTextNode(record.target);
      record.addedNodes.forEach(translateTree);
    });
    updateChrome();
    applying = false;
  });

  function start() {
    let saved = 'en';
    try { saved = localStorage.getItem('bts-language') || 'en'; } catch (_) {}
    applyLanguage(saved, false);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();

  window.BodyTransportLanguage = {
    set: applyLanguage,
    get: () => current,
    has: (text, lang = current) => lang === 'en' || !!(dictionaries[lang] && dictionaries[lang].has(text)),
    translate: (text, lang = current) => lang === 'en' ? text : ((dictionaries[lang] && dictionaries[lang].get(text)) || text)
  };
})();
