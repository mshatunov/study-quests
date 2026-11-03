/* History (Grade 5) - Early Azerbaijan: sources of history, Azikh and Gobustan, Manna / Atropatena / Albania, Babak, the Sajid state, the Eldiguzid state.
   Source: five teacher PDFs posted 3 Nov 2026 - "Sources, Homeland, Azikh, Gobustan, early states" (EN + AZ), Babak, Sajid State, Eldiguzid State (Atabeys).
   Not available when written: the e-MTK files and the textbook; nothing here comes from them. */
(function(){
const HS='History: sources, Azikh, Gobustan', ES='History: early states (Manna, Atropatena, Albania)', BB='History: Babak slides', SJ='History: Sajid State slides', EL='History: Eldiguzid State slides';

const TOPICS=[
/* ================= 1. SOURCES & FIRST PEOPLE ================= */
{id:'first', ico:'🏺', name:'Sources & first people', blurb:'archaeology, Homeland, Azikh Cave, Gobustan', Q:[
 mc('Which science studies ancient material and cultural remains?','Archaeology',['Geography','Astronomy','Chemistry'],'Archaeology studies what ancient people left behind: objects, tools, buildings.',HS),
 sort('Sort the sources of history into their groups.',['Material','Written','Oral','Visual'],[['Pottery',0],['Fortress',0],['Rock inscriptions',1],['Stone tablets',1],['Coins',1],['Epics',2],['Folk songs',2],['Fairy tales',2],['Photos',3],['Drawings',3],['Documentaries',3]],'Things people made = material; writing = written; stories and songs told aloud = oral; pictures and films = visual.',HS),
 mc('Epics, fairy tales and folk songs are which kind of source?','Oral sources',['Written sources','Material sources','Visual sources'],'Stories and songs that people tell and sing are oral sources.',HS),
 tf('History is studied only from books.',false,'History is studied from four groups of sources: material, written, oral and visual.',HS),
 typed('1 century = 100 years. So 3 centuries = ? years',['300'],'3 × 100 = 300.',HS,'years'),
 fill('The place where a person is born and grows up, their native land, is their ___.',['Homeland'],['Homeland','century','museum'],'Our Homeland is Azerbaijan - the common Homeland of all peoples living there.',HS),
 multi('Tick ALL the countries that border Azerbaijan.',['Russia','Georgia','Turkey','Armenia','Iran'],['Ukraine','Egypt','Uzbekistan'],'Azerbaijan borders Russia, Georgia, Turkey, Armenia and Iran.','History: map of neighbours (PDF p.1)'),
 multi('Why did ancient people settle in Azerbaijan? Tick ALL the reasons.',['Freshwater rivers','Caves','Rich plants and animals'],['Huge modern cities','Deserts without water'],'Rivers, caves and rich nature made it a good place to live.',HS),
 mc('What are caves?','Natural hollows in rocks',['Houses built of stone blocks','Tunnels dug by modern workers','Walls around cities'],'Caves are natural hollows that formed in rocks after earthquakes or volcanic eruptions - the first homes of humans.',HS),
 multi('Caves protected people from ... Tick ALL.',['Wild animals','Cold','Rain and storms'],['Rivers','Their families'],'A cave was shelter from animals, cold, rain and storms.',HS),
 mc('Which is the oldest cave in Azerbaijan where the first people lived?','Azikh Cave',['Gobustan Cave','Ardabil Cave','Derbent Cave'],'Azikh Cave is the oldest cave in Azerbaijan where first people lived.',HS),
 mc('Where is Azikh Cave?','Karabakh, in Khojavend district',['Near Baku','In Nakhchivan','In Shirvan'],'Azikh is in the Karabakh region, Khojavend district.',HS),
 mc('What is the most valuable find from Azikh Cave?','A human lower jawbone',['A stone drum','A gold coin','A rock painting'],'The lower jawbone gave the name "Azikh Man".',HS),
 slider('The Azikh jawbone is more than ___ thousand years old.',{min:100,max:500,step:50,unit:' thousand years'},350,0,'Scientists found it is more than 350 thousand years old.',HS),
 mc('Who led the excavations in which the jawbone was found?','Mammadali Huseynov',['Thor Heyerdahl','Iranzu','Atropat'],'The expedition was led by Mammadali Huseynov.',HS),
 mc('The jawbone belonged to ...','A woman about 18-22 years old',['An old man','A child of five','A man about 40'],'It was determined that it belonged to a woman of about 18-22.',HS),
 tf('The fossil was called "Azikh Man" after the cave where it was found.',true,'It is named after Azikh Cave.',HS),
 tf('The Azikh jawbone is displayed in a museum in Norway.',false,'It is displayed in the National Museum of History of Azerbaijan.',HS),
 spot('Find the mistake and tap it.','The first tools of the Azikh people were made of [[metal|stone and wood]].','The first tools were made of stone and wood.',HS),
 mc('Scientists called the discovery of fire ...','The first victory of humankind over nature',['The end of the Stone Age','The first written law','The first coin'],'Traces of fire were found in Azikh Cave.',HS),
 mc('Because of the Azikh find, Azerbaijan was added to the map of ...','Europe\'s earliest inhabitants',['The longest rivers','The biggest cities','The oldest ships'],'The find put Azerbaijan on the map of the earliest inhabitants of Europe.',HS),
 mc('Where is Gobustan?','Near Baku',['In Karabakh','In Nakhchivan','Near Derbent'],'Gobustan is near the city of Baku.',HS),
 mc('What do the Gobustan rock carvings tell us about?','Lives, jobs and skills of ancient people, and animals of that time',['Taxes of the Caliphate','Kings of Manna','Modern buildings'],'The carvings are a valuable source about people and the fauna of ancient Azerbaijan.',HS),
 match('Match the Gobustan item with what it is.',[['Yalli scenes','A symbol of unity and solidarity'],['Gaval Dash','A stone drum that rings when struck'],['Boat carvings','Sun symbols at the front'],['Thor Heyerdahl','Called Gobustan an open-air museum']],'These are the main Gobustan monuments and the scientist who studied the boats.',HS),
 odd('Odd one out! Three were found in Gobustan.','Azikh jawbone',['Gaval Dash','Boat carvings','Yalli dance scenes'],'The jawbone comes from Azikh Cave; the others are Gobustan monuments.',HS),
 mc('Thor Heyerdahl said the boat carvings are ...','The oldest ship drawings in the world',['The first map of Azerbaijan','Pictures of Egyptian kings','Copies of Norwegian boats'],'He thought the boats were reed boats and called the drawings the oldest ship pictures in the world.',HS),
 tf('Gobustan is on the UNESCO World Heritage List.',true,'Its rare finds got it a place on the list.',HS),
 scramble('The ringing stone drum of Gobustan (two words).','gaval dash','It is more than 10,000 years old.',HS),
]},

/* ================= 2. FIRST STATES ================= */
{id:'states', ico:'🏰', name:'First states', blurb:'Manna, Atropatena, Albania', Q:[
 fill('Every state has a ruler, a ___ for money, and an ___ to protect it.',['treasury','army'],['treasury','army','museum','harvest'],'A state has territory with borders, a capital, a ruler, law, treasury and army.',ES),
 multi('Tick ALL the main features of a state.',['Territory and borders','Capital city','Ruler','Law','Treasury','Army'],['Airport','Stadium'],'Six main features: territory, capital, ruler, law, treasury, army.',ES),
 mc('Which three were the earliest states of Azerbaijan?','Manna, Atropatena, Albania',['Manna, Urartu, Assyria','Sajid, Manna, Albania','Atropatena, Albania, Eldiguzids'],'Manna, Atropatena and Albania are the earliest states.',ES),
 mc('When was Manna founded?','9th century BC',['4th century BC','9th century AD','4th century AD'],'Manna appeared in the 9th century BC.',ES),
 slider('Manna existed for about ___ years.',{min:100,max:500,step:50,unit:' years'},300,0,'About 300 years.',ES),
 mc('What was the capital of Manna?','Izirtu',['Gazaka','Ardabil','Nakhchivan'],'Izirtu, called "the royal city".',ES),
 mc('Who was the most famous ruler of Manna?','Iranzu',['Atropat','Babak','Yusuf'],'Iranzu defended Manna against Urartu.',ES),
 mc('Why did Iranzu make an alliance with Assyria?','To protect Manna from the attacks of Urartu',['To fight the Caliphate','To attack Atropatena','To build Gobustan'],'Together with Assyria he protected the kingdom from Urartu.',ES),
 tf('Iranzu made an alliance with Urartu against Assyria.',false,'He made an alliance with Assyria against Urartu.',ES),
 mc('What was the result of the alliance with Assyria?','The occupied lands were returned and Manna became powerful',['Manna was conquered','Manna moved its capital','Manna lost its army'],'The occupied territories of Manna were reclaimed.',ES),
 order('Put the events in the right order.',['Manna is founded','Iranzu allies with Assyria','Manna falls','Atropatena and Albania are founded after Alexander the Great dies'],'First Manna, its alliance, its fall, and then the new states.',ES),
 spot('Find the mistake and tap it.','Atropatena was named after its founder, [[Iranzu|Atropat]].','The state took its name from its founder Atropat.',ES),
 match('Match the person or state with the fact.',[['Manna','Capital: Izirtu'],['Atropatena','Capital: Gazaka'],['Iranzu','Most famous ruler of Manna'],['Atropat','Founder of Atropatena']],'Manna had the capital Izirtu and ruler Iranzu; Atropatena had the capital Gazaka and the founder Atropat.',ES),
 mc('A new state appeared on the territory of ...','Manna, after it fell',['Urartu','Assyria','Albania'],'After Manna fell, Atropatena arose on its land.',ES),
 mc('Which event was followed by the founding of Atropatena (south) and Albania (north)?','The death of Alexander the Great',['The fall of Assyria','Babak\'s uprising','The Seljuk conquest'],'After Alexander the Great died (4th century BC), the two states were founded.',ES),
 tf('Atropatena was in the south and Albania in the north.',true,'Atropatena in the south, Albania in the north.',ES),
 odd('Odd one out! Three were among the earliest states of Azerbaijan.','Urartu',['Manna','Atropatena','Albania'],'Urartu attacked Manna; it is not one of the earliest states of Azerbaijan.',ES),
 scramble('The place where a state keeps its money.','treasury','Treasury is one of the six features of a state.',ES),
]},

/* ================= 3. BABAK ================= */
{id:'babak', ico:'⚔️', name:'Babak & the Khurramites', blurb:'the fighter who never accepted captivity', Q:[
 match('Match the word with its meaning.',[['Caliphate','An Arab state ruled by a caliph'],['Caliph','The ruler who led the Caliphate'],['Khurramites','A movement that resisted the rule of the Caliphate'],['Bazz Fortress','Babak\'s main stronghold']],'The Caliphate was an Arab state, its ruler was the caliph, Khurramites fought it and Bazz was Babak\'s stronghold.',BB),
 mc('Who were the Khurramites?','A movement against the rule of the Caliphate',['A state in the south','Coin makers','A family of rulers'],'The Khurramites fought against the Caliphate.',BB),
 multi('Tick the TWO main reasons the movement began.',['The people wanted freedom and to keep their traditions','Heavy, unfair taxes'],['Lack of rain','A war with Egypt','A wish to conquer Europe'],'People wanted freedom and traditions; heavy taxes made life hard.',BB),
 mc('Who had a very hard life because of the Caliphate\'s heavy taxes?','Farmers and craftsmen',['Caliphs','Soldiers only','Scientists'],'Heavy taxes made life difficult for farmers and craftsmen.',BB),
 mc('Against which power did Babak fight?','The Abbasid Caliphate',['The Seljuks','Urartu','Assyria'],'Babak led fighters against the powerful Abbasid Caliphate.',BB),
 mc('How long did Babak\'s struggle last?','Over 20 years',['About 2 years','Less than 5 years','Exactly 100 years'],'For more than 20 years Babak led brave fighters.',BB),
 mc('What was the Bazz Fortress?','Babak\'s main stronghold and an important Khurramite fortress',['A cave in Karabakh','A Gobustan carving','The capital of Manna'],'Bazz was Babak\'s main support base.',BB),
 mc('How did Babak use the geography of Azerbaijan?','He used the mountains to protect his people and outsmart the enemy',['He built ships','He hid in deserts','He fought only in the plains'],'He knew every mountain path.',BB),
 spot('Find the mistake and tap it.','Babak knew every [[river|mountain]] path, so his fighters moved quickly.','Mountain paths helped Babak\'s fighters to strike fast.',BB),
 tf('The caliph sent a huge army to stop Babak.',true,'The Abbasid Caliph sent a huge army.',BB),
 tf('Babak\'s quick attacks confused the large Abbasid army.',true,'Fast attacks confused the large army.',BB),
 multi('How did local people help Babak? Tick ALL.',['Shared food','Gave shelter','Gave information about the enemy'],['Paid taxes to the Caliph','Joined the Caliph\'s army'],'People helped with food, shelter and information.',BB),
 order('Put the story in order.',['The Caliphate puts heavy taxes on people','Babak leads the people\'s struggle for freedom','The caliph sends a huge army','Babak\'s quick mountain attacks confuse the army'],'Causes first, then the war.',BB),
 odd('Odd one out! Three helped Babak\'s struggle.','Paying heavy taxes',['Mountain paths','Quick attacks','Help from local people'],'Heavy taxes were a reason for the uprising, not a help to it.',BB),
 write('What made Babak a strong leader? Name two things.',['mountain','quick|fast|courage|local|people'],'Babak knew every mountain path, his fighters attacked quickly and bravely, and local people helped him with food, shelter and information.','Knowledge of the land, fast attacks and the support of the people.',BB),
 scramble('A movement that resisted the Caliphate.','khurramites','Their leader was Babak.',BB),
 write('Explain why the Khurramite movement began.',['freedom|free','tax'],'The people wanted freedom and wanted to keep their traditions, and the heavy taxes of the Caliphate made life hard for farmers and craftsmen.','Two causes: freedom and taxes.',BB),
]},

/* ================= 4. SAJIDS ================= */
{id:'sajid', ico:'👑', name:'The Sajid state', blurb:'Yusuf Sajid and his united state', Q:[
 match('Match the word with its meaning.',[['Dynasty','A family of rulers who govern a country for a long time'],['Conquest','Taking a country by another state\'s army'],['Minting coins','Making coins in the name of the state'],['Unified state','Separate lands united under one government']],'A dynasty is a ruling family; conquest is taking land by army; minting is making coins; a unified state joins lands under one government.',SJ),
 mc('Why did new states appear in Azerbaijan?','Rebellions weakened the Arab Caliphate and caliphs lost control of far lands',['The Caliphate grew stronger','Gobustan was found','Manna fell'],'A weak Caliphate could not control distant territories.',SJ),
 tf('The Sajids were a dynasty of Turkic origin.',true,'The Sajids were a dynasty of Turkic origin.',SJ),
 mc('When did the Sajid state emerge?','In the late 9th century',['In the 4th century BC','In the 12th century','In the 9th century BC'],'The Sajid state emerged in the late 9th century.',SJ),
 mc('Where was the Sajid state?','In southern Azerbaijan',['In the north of Azerbaijan','In Nakhchivan only','Near Derbent only'],'The Sajid state was in the south of Azerbaijan.',SJ),
 fill('The first capital was ___ and later it was ___.',['Maragha','Ardabil'],['Maragha','Ardabil','Derbent','Gazaka'],'The Sajid capital was first Maragha, and later Ardabil.',SJ),
 mc('Who was the most famous ruler of the Sajid state?','Yusuf Sajid',['Babak','Iranzu','Eldiguz'],'The most famous Sajid ruler was Yusuf Sajid (Yusuf ibn Abu Saj).',SJ),
 mc('What was Yusuf\'s main aim?','To unite Azerbaijani lands in one state',['To move to Baghdad','To fight Urartu','To pay more tribute'],'Yusuf wanted to unite Azerbaijani lands in one state.',SJ),
 multi('What did Yusuf do? Tick ALL.',['Stopped paying tribute to the caliph','Created a powerful army','Brought the Shirvanshahs under his authority','Captured Derbent','Minted coins in his own name'],['Moved the capital to the caliph\'s city','Gave Derbent to the caliph'],'He stopped paying tribute, made a powerful army, took the Shirvanshahs under his authority, captured Derbent and minted coins in his name.',SJ),
 spot('Find the mistake and tap it.','Yusuf [[kept paying|stopped paying]] tribute to the caliph.','He stopped paying tribute to the caliph - a step towards independence.',SJ),
 mc('What did minting coins in his own name show?','His independence',['His fear of the caliph','His wealth only','That he was a prisoner'],'Minting coins in his own name was an important sign of a ruler\'s independence.',SJ),
 order('Put the events in order.',['The caliph worries about Yusuf\'s power','The first army sent by the caliph is defeated','Yusuf is defeated and captured','Rebellions break out in Azerbaijan','The caliph frees Yusuf and sends him back','Yusuf restores order'],'The caliph was worried, his first army lost, Yusuf was captured, rebellions began, then the caliph freed him and Yusuf restored order.',SJ),
 mc('Why did the caliph send Yusuf back to Azerbaijan?','To suppress the rebellions',['To rule Baghdad','To pay tribute','To build a fortress'],'Rebellions began after Yusuf was captured, so the caliph sent him back to suppress them.',SJ),
 odd('Odd one out! Three places are linked to the Sajid state.','Gazaka',['Maragha','Ardabil','Derbent'],'Maragha and Ardabil were Sajid capitals and Yusuf captured Derbent; Gazaka was the capital of Atropatena.',SJ),
 scramble('A family of rulers who govern for a long time.','dynasty','The Sajids were a dynasty.',SJ),
 write('What is Yusuf remembered for in Azerbaijani history?',['unit|one state','independen|tribute|coin'],'Yusuf tried to unite Azerbaijani lands in one state and acted independently of the caliph: he stopped paying tribute and minted coins in his own name.','His main aim was unity and independence.',SJ),
]},

/* ================= 5. ELDIGUZIDS ================= */
{id:'eldiguz', ico:'🏯', name:'The Eldiguzid state', blurb:'Shams al-Din Eldiguz and the Atabeg state', Q:[
 match('Match the key word with its meaning.',[['Sultan','The supreme ruler of the state'],['Atabeg','The guardian and tutor of a prince'],['Iqta','A land grant in return for service'],['Tax','The main source of state income'],['Slave market','A place where people were sold as slaves'],['Court','The place where the sultan lived and ruled']],'These six words explain how the state was ruled: ruler, guardian, land, income, slaves and palace.',EL),
 fill('Eldiguz ruled from ___ to ___.',['1136','1175'],['1136','1175','1050','1200'],'He ruled the Eldiguzid state from 1136 to 1175.',EL),
 slider('Eldiguz ruled from 1136 to 1175. How many years is that?',{min:30,max:50,step:1,unit:' years'},39,0,'1175 − 1136 = 39.',EL),
 mc('What was the capital of the Eldiguzid state?','Nakhchivan',['Ardabil','Izirtu','Gazaka'],'The capital of the Eldiguzid state was Nakhchivan.',EL),
 mc('The supreme ruler of the state was called a ...','Sultan',['Atabeg','Iqta','Caliph'],'The supreme ruler of the state was the sultan; the atabeg was only a prince\'s guardian.',EL),
 mc('A prince\'s guardian and tutor was called an ...','Atabeg',['Sultan','Iqta','Court'],'An atabeg was the guardian and tutor of a prince.',EL),
 mc('Which word means a land grant given in return for service?','Iqta',['Tax','Court','Sultan'],'Iqta was a land grant: people got land income in return for service.',EL),
 mc('Which people did Shams al-Din Eldiguz come from?','Oghuz Turks',['Arabs','Assyrians','Vikings'],'Shams al-Din Eldiguz came from the Oghuz Turks.',EL),
 mc('What was Eldiguz\'s position?','Atabeg of the Seljuk sultans, later founder of an independent state',['A caliph','A slave only','A fisherman'],'He started as atabeg of the Seljuk sultans and later founded an independent state.',EL),
 order('Put the life of Eldiguz in order.',['Sold in a slave market in Derbent as a child','Taken to the Seljuk court','Gets education and military training','Becomes a skilled warrior and statesman','Founds the Eldiguzid (Atabeg) state'],'From the slave market to ruler.',EL),
 spot('Find the mistake and tap it.','As a child, Eldiguz was sold at a slave market in [[Baku|Derbent]].','As a child he was sold at a slave market in Derbent.',EL),
 mc('Where did Eldiguz receive education and military training?','At the Seljuk court',['In Gobustan','In Azikh Cave','At Bazz Fortress'],'Eldiguz was taken to the Seljuk court, where he got a good education and military training.',EL),
 multi('Tick ALL the main territories of the Eldiguzid state.',['Nakhchivan','Azerbaijan','Arran','Shirvan','Derbent'],['Egypt','Rome'],'The main territories were Nakhchivan, Azerbaijan, Arran, Shirvan and Derbent.',EL),
 tf('Shams al-Din Eldiguz died in 1175.',true,'Eldiguz died in 1175; he ruled from 1136 to 1175.',EL),
 mc('What did Eldiguz\'s rule do for Azerbaijan?','Strengthened political unity in Azerbaijan and the surrounding regions',['Ended the Seljuks','Moved the capital to Baku','Made Azerbaijan part of Rome'],'His rule strengthened political unity in Azerbaijan and the surrounding regions.',EL),
 odd('Odd one out! Three were main territories of the Eldiguzids.','Izirtu',['Nakhchivan','Arran','Shirvan'],'Izirtu was the capital of Manna.',EL),
 write('Why did the Eldiguzid state become powerful?',['educat|training|warrior','unity|unite|strength|statesman'],'Eldiguz got a good education and military training at the Seljuk court and became a skilled warrior and statesman; his rule strengthened political unity in Azerbaijan and the surrounding regions.','A strong, trained leader and political unity made the state powerful.',EL),
 tf('Eldiguz lived in the late 11th and the 12th century.',true,'He lived from the late 11th to the 12th century.',EL),
 scramble('A tutor and guardian of a young prince.','atabeg','The Eldiguzid state is also called the Atabeg state.',EL),
 write('Why was Eldiguz an important person in Azerbaijani history?',['found|state|independen','unity|unite|strength'],'Eldiguz rose from a slave market to the founder of a state; his rule strengthened political unity in Azerbaijan and the surrounding regions.','He overcame hard circumstances and founded a state.',EL),
]},

/* ================= BONUS: WHO IS WHO ================= */
{id:'who', ico:'🧭', bonus:true, name:'Who is who?', blurb:'rulers, states and capitals', Q:[
 match('Match the leader with their state or movement.',[['Iranzu','Manna'],['Atropat','Atropatena'],['Babak','Khurramites'],['Yusuf Sajid','Sajid state'],['Shams al-Din Eldiguz','Eldiguzid (Atabeg) state']],'Each leader is linked to a state or movement: Iranzu - Manna, Atropat - Atropatena, Babak - Khurramites, Yusuf - Sajids, Eldiguz - Eldiguzids.','History: all lessons'),
 match('Match the state with its capital.',[['Manna','Izirtu'],['Atropatena','Gazaka'],['Sajid state','Maragha, then Ardabil'],['Eldiguzid state','Nakhchivan']],'Izirtu was the capital of Manna, Gazaka of Atropatena, Maragha then Ardabil of the Sajids, Nakhchivan of the Eldiguzids.','History: all lessons'),
 mc('Which ruler stopped paying tribute to the caliph and minted his own coins?','Yusuf Sajid',['Babak','Iranzu','Eldiguz'],'Yusuf Sajid stopped paying tribute to the caliph and minted coins in his own name.',SJ),
 mc('Whose fighters used the mountains of Azerbaijan against the Abbasid Caliphate?','Babak\'s',['Iranzu\'s','Eldiguz\'s','Atropat\'s'],'Babak\'s fighters used the mountains of Azerbaijan against the Abbasid Caliphate.',BB),
 odd('Odd one out! Three were leaders of Azerbaijani states or movements.','Thor Heyerdahl',['Iranzu','Babak','Eldiguz'],'Heyerdahl was a Norwegian scientist.',HS),
]}
];

const VOCAB=[
 ['archaeology','археология','science of ancient remains'],
 ['homeland','родина','native land (az: Vətən)'],
 ['Azikh Cave','пещера Азых','az: Azıx mağarası'],
 ['Gobustan','Гобустан','az: Qobustan'],
 ['Gaval Dash','Гавалдаш (каменный бубен)','az: Qavaldaş'],
 ['yalli','яллы (танец)',''],
 ['Manna','Манна','state, 9th c. BC'],
 ['Atropatena','Атропатена','state'],
 ['Albania','Албания (Кавказская)','state in the north'],
 ['Khurramites','хуррамиты','movement of Babak (az: Xürrəmilər)'],
 ['Babak','Бабек','az: Babək'],
 ['Sajid state','государство Саджидов','az: Sacilər'],
 ['Eldiguzid state','государство Ильдегизидов (атабеков)','az: Eldənizlər (Atabəylər)'],
 ['atabeg','атабек','guardian of a prince'],
 ['iqta','икта','land grant for service'],
 ['sultan','султан',''],
 ['caliph','халиф',''],
 ['caliphate','халифат',''],
 ['dynasty','династия',''],
 ['tribute','дань',''],
];
const GLOSSARY=[
 ['history|historical','история, исторический'],['die|died','умер'],['important','важный'],['rule|ruled|rules','править'],['fact','факт'],
 ['ancient','древний'],['remains','останки, остатки'],['material|materials','материальный'],['source|sources','источник'],
 ['written','письменный'],['oral','устный'],['visual','визуальный, наглядный'],['epic|epics','эпос'],['fairy tale|fairy tales','сказка'],
 ['folk song|folk songs','народная песня'],['pottery','керамика, гончарные изделия'],['fortress','крепость'],['inscription|inscriptions','надпись'],
 ['tablet|tablets','табличка, плита'],['coin|coins','монета'],['documentary|documentaries','документальный фильм'],['century|centuries','век'],
 ['native','родной'],['border|borders|bordering','граница, граничить'],['cave|caves','пещера'],['hollow|hollows','полость'],
 ['volcanic','вулканический'],['earthquake|earthquakes','землетрясение'],['wild','дикий'],['storm|storms','буря'],['rich','богатый'],
 ['plants','растения'],['animals','животные'],['river|rivers','река'],['freshwater','пресная вода'],['excavation|excavations','раскопки'],
 ['jawbone','челюсть (кость)'],['lower','нижний'],['fossil','окаменелость'],['expedition','экспедиция'],['museum','музей'],
 ['display|displayed','выставлять'],['tool|tools','орудие, инструмент'],['fire','огонь'],['victory','победа'],['humankind','человечество'],
 ['nature','природа'],['inhabitant|inhabitants','житель'],['carving|carvings','рисунок на камне, резьба'],['rock|rocks','скала'],
 ['skill|skills','умение'],['fauna','животный мир'],['unity','единство'],['solidarity','сплоченность'],['drum','барабан'],
 ['ring|rings|ringing','звенеть'],['strike|struck','ударять'],['reed|reeds','камыш'],['scientist','ученый'],['Norwegian','норвежский'],
 ['UNESCO','ЮНЕСКО'],['heritage','наследие'],['state|states','государство'],['territory|territories','территория'],['capital','столица'],
 ['ruler|rulers','правитель'],['law','закон'],['treasury','казна'],['army','армия'],['alliance','союз'],['ally|allies','стать союзником'],
 ['Assyria','Ассирия'],['Urartu','Урарту'],['reclaim|reclaimed','вернуть'],['occupied','захваченный'],['founded|founder','основать, основатель'],['found|finds','найти (found - нашли, найден)'],
 ['royal','королевский, царский'],['fall|falls|fell','пасть, падение'],['powerful','могущественный'],['empire','империя'],
 ['uprising','восстание'],['movement','движение'],['resist|resisted|resistance','сопротивляться'],['stronghold','оплот'],['heavy','тяжелый'],
 ['tax|taxes','налог'],['craftsmen|craftsman','ремесленники'],['farmer|farmers','земледельцы'],['freedom','свобода'],['tradition|traditions','традиция'],
 ['unfair','несправедливый'],['captivity','плен'],['outsmart','перехитрить'],['path|paths','тропа'],['confuse|confused','запутать'],
 ['shelter','убежище'],['information','информация'],['enemy','враг'],['rebellion|rebellions','мятеж'],['suppress','подавить'],
 ['restore|restores','восстановить'],['order','порядок'],['stability','стабильность'],['conquest','завоевание'],['mint|minted|minting','чеканить'],
 ['unite|unified|unification','объединить'],['independence|independent','независимость'],['defeat|defeated','разбить, поражение'],['capture|captured','взять в плен, захватить'],
 ['release|released|frees','освободить'],['guardian','опекун'],['tutor','наставник'],['prince','принц'],['grant','пожалование'],['slave|slaves','раб'],
 ['market','рынок'],['court','двор'],['Seljuk|Seljuks','сельджуки'],['statesman','государственный деятель'],['warrior','воин'],['Oghuz','огузы'],
 ['military','военный'],['training','подготовка'],['education','образование'],['skilled','умелый'],['surrounding','окружающий'],['regions','регионы'],
 ['Turkic','тюркский'],['origin','происхождение'],['weaken|weakened|weaker','ослабить'],['distant','далекий'],['province|provinces','область']
];
TOPICS.forEach(t=>{ t.sheet=''; });
TOPICS[0].sheet='<h3>Sources of history</h3><ul><li><b>Archaeology</b> - the science of ancient material and cultural remains.</li><li><b>4 groups:</b> material (settlements, tools, weapons, pottery, fortresses), written (inscriptions, tablets, coins, books), oral (epics, fairy tales, folk songs), visual (drawings, photos, documentaries).</li><li>1 century = 100 years. Homeland = the land where you are born and grow up.</li></ul><h3>Azikh Cave</h3><ul><li>Karabakh, Khojavend district - the oldest cave of first people in Azerbaijan.</li><li>Lower jawbone: more than 350 000 years, woman 18-22; expedition led by Mammadali Huseynov; kept in the National Museum of History.</li><li>First tools: stone and wood; traces of fire = first victory over nature.</li></ul><h3>Gobustan (near Baku)</h3><ul><li>Rock carvings: life, jobs, animals; yalli scenes = unity.</li><li>Gaval Dash: stone drum, more than 10 000 years.</li><li>Boat carvings with sun symbols - Thor Heyerdahl: oldest ship drawings; "open-air museum"; UNESCO list.</li></ul>';
TOPICS[1].sheet='<h3>A state has</h3><p>territory and borders, capital, ruler, law, treasury, army.</p><table><tr><th>State</th><th>Facts</th></tr><tr><td>Manna</td><td>9th c. BC, ~300 years, capital Izirtu, ruler Iranzu (ally of Assyria against Urartu)</td></tr><tr><td>Atropatena</td><td>named after Atropat, south, capital Gazaka</td></tr><tr><td>Albania</td><td>north; both founded after Alexander the Great died (4th c. BC)</td></tr></table>';
TOPICS[2].sheet='<h3>Babak</h3><ul><li>Khurramites - movement against the Caliphate; stronghold: Bazz Fortress.</li><li>Causes: wish for freedom + traditions, heavy taxes.</li><li>Fought the Abbasid Caliphate over 20 years; used mountains; quick attacks; locals gave food, shelter, information.</li></ul>';
TOPICS[3].sheet='<h3>Sajid state</h3><ul><li>Late 9th c., south Azerbaijan, Turkic dynasty; capital Maragha then Ardabil.</li><li>Yusuf Sajid: stopped tribute, army, Shirvanshahs, Derbent, own coins; caliph - first army defeated; Yusuf captured; rebellions; freed and sent back; restored order.</li></ul>';
TOPICS[4].sheet='<h3>Eldiguzids</h3><ul><li>Shams al-Din Eldiguz (Oghuz Turk): sold at Derbent slave market, Seljuk court, atabeg, founder; ruled 1136-1175; capital Nakhchivan.</li><li>Territories: Nakhchivan, Azerbaijan, Arran, Shirvan, Derbent.</li><li>Sultan, atabeg, iqta, tax, slave market, court.</li></ul>';
TOPICS[5].sheet='<h3>Who is who</h3><ul><li>Iranzu - Manna; Atropat - Atropatena; Babak - Khurramites; Yusuf - Sajids; Eldiguz - Eldiguzids.</li></ul>';
QuizEngine.run({id:'history-grade5-early-states',lang:'en',logo:'🏛️ History Quest',title:'History: Early Azerbaijan - sources, first states, Babak, Sajids, Eldiguzids',bossSize:25,topics:TOPICS,vocab:VOCAB,glossary:GLOSSARY});
})();
