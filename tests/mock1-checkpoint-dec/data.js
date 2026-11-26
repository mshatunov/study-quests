/* Mock Exams 1 - revision mix for the 1-4 December mock exams (Cambridge Primary Checkpoint format, Grade 5).
   Science: Unit 1 (heart, blood, lungs; puberty, insect bites, germs) and Unit 2 (states of matter, phase changes, dissolving),
   from the teacher slides and Revision Pack, plus the audited earlier tests. Maths: the topics named in the November homework
   pack (decimals, order of operations, factors and multiples, square and cube numbers, mean and mode, angles, quadrilaterals).
   The ex-* topics (English, ESL, Science, Maths) are original exam-style practice written on the pattern of Cambridge Primary
   Checkpoint sample papers; no question or text is copied from a real paper. */
(function(){
/* ===== fragment u1 ===== */
/* Fragment u1: Science Unit 1 revision mix (heart, blood, lungs; puberty, insect-borne diseases, germs). */
const u1_HP=[
 {n:'Superior vena cava',x:140,y:60},{n:'Right atrium',x:145,y:140},{n:'Right ventricle',x:145,y:270},{n:'Pulmonary artery',x:55,y:258},
 {n:'Pulmonary vein',x:300,y:60},{n:'Left atrium',x:295,y:140},{n:'Left ventricle',x:295,y:270},{n:'Aorta',x:385,y:258}];
const u1_HEART_SVG={vb:'0 0 440 370',body:`
 <rect x="120" y="24" width="40" height="70" fill="#4c8bf5"/><rect x="280" y="24" width="40" height="70" fill="#ef5350"/>
 <rect x="90" y="90" width="110" height="105" rx="30" fill="#7aa7ff" stroke="#26224a" stroke-width="3"/><rect x="240" y="90" width="110" height="105" rx="30" fill="#ff8a86" stroke="#26224a" stroke-width="3"/>
 <rect x="90" y="203" width="110" height="140" rx="38" fill="#4c8bf5" stroke="#26224a" stroke-width="3"/><rect x="240" y="203" width="110" height="140" rx="38" fill="#ef5350" stroke="#26224a" stroke-width="3"/>
 <rect x="10" y="238" width="82" height="38" fill="#4c8bf5" stroke="#26224a" stroke-width="3"/><rect x="348" y="238" width="82" height="38" fill="#ef5350" stroke="#26224a" stroke-width="3"/>
 <text x="220" y="12" font-size="14" text-anchor="middle" fill="#6b6890">from body ↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓ from lungs</text>
 <text x="48" y="300" font-size="14" text-anchor="middle" fill="#6b6890">to lungs</text><text x="392" y="300" font-size="14" text-anchor="middle" fill="#6b6890">to body</text>
 <text x="145" y="362" font-size="14" text-anchor="middle" fill="#4c8bf5" font-weight="700">oxygen-poor</text><text x="295" y="362" font-size="14" text-anchor="middle" fill="#ef5350" font-weight="700">oxygen-rich</text>`};
const u1_RESP_SVG={vb:'0 0 400 400',body:`
 <ellipse cx="200" cy="40" rx="48" ry="22" fill="#f9c9a8" stroke="#26224a" stroke-width="3"/>
 <ellipse cx="112" cy="232" rx="82" ry="112" fill="#ffd1d1" stroke="#26224a" stroke-width="3"/><ellipse cx="288" cy="232" rx="82" ry="112" fill="#ffd1d1" stroke="#26224a" stroke-width="3"/>
 <rect x="188" y="62" width="24" height="104" fill="#9ecbff" stroke="#26224a" stroke-width="3"/>
 <path d="M200 166 L150 210 M200 166 L250 210" stroke="#5fa0ee" stroke-width="14" stroke-linecap="round" fill="none"/>
 <path d="M150 210 L108 250 M150 210 L150 262 M150 210 L112 215 M250 210 L292 250 M250 210 L250 262 M250 210 L288 215" stroke="#5fa0ee" stroke-width="6" stroke-linecap="round" fill="none"/>
 <g fill="#ff8f8f" stroke="#a02a2a" stroke-width="1.5"><circle cx="100" cy="268" r="10"/><circle cx="116" cy="276" r="10"/><circle cx="92" cy="286" r="10"/><circle cx="150" cy="280" r="10"/><circle cx="166" cy="288" r="10"/><circle cx="300" cy="268" r="10"/><circle cx="284" cy="276" r="10"/><circle cx="308" cy="286" r="10"/><circle cx="250" cy="280" r="10"/><circle cx="234" cy="288" r="10"/></g>
 <rect x="30" y="352" width="340" height="28" rx="14" fill="#c084fc" stroke="#26224a" stroke-width="3"/>`};
const u1_RESP_PTS=[{n:'Nasal cavity',x:262,y:40},{n:'Trachea',x:240,y:112},{n:'Bronchus',x:232,y:178},{n:'Bronchioles',x:132,y:236},{n:'Alveoli',x:72,y:296},{n:'Diaphragm',x:200,y:366}];
const u1_noGloss=(q,...terms)=>Object.assign(q,{ng:terms});

const TOP_u1=[
{id:'s-body', ico:'❤️', name:'Heart, Blood & Lungs', blurb:'Heart chambers, blood vessels, blood cells, breathing and gas exchange', col:'#ef5350', Q:[
 label('Label the heart! Choose the correct name for each number. (The picture is drawn as if you look at a person: their right side is on YOUR left.)',u1_HEART_SVG,u1_HP,'Right side (blue): oxygen-poor blood, from the body to the lungs. Left side (red): oxygen-rich blood, from the lungs to the body. Atria are the top chambers, ventricles the bottom ones.','Heart slides'),
 hotspot('Oxygen-poor blood comes back from the body through the vena cava. Tap the chamber that receives it first.',u1_HEART_SVG,u1_HP,'Right atrium','The superior vena cava empties into the right atrium. Then the blood goes down into the right ventricle, which pumps it to the lungs.','Heart slides'),
 u1_noGloss(mc('Blood described as deoxygenated is blood that has...','Little oxygen',['A lot of oxygen','No plasma','Extra white blood cells'],'The prefix "de-" means taking away. Deoxygenated blood is oxygen-poor blood: it has given its oxygen to the cells. It is on the right side of the heart.','Workbook Section 1'),'deoxygenated'),
 sort('Right side or left side of the heart?',['Right side','Left side'],[
   ['Receives blood from the body through the vena cava',0],
   ['Pumps blood to the lungs',0],
   ['Joined to the pulmonary arteries',0],
   ['Receives blood back from the lungs',1],
   ['Pumps blood out through the aorta',1],
   ['Joined to the pulmonary veins',1]],
   'Right side: body to lungs (oxygen-poor blood). Left side: lungs to body (oxygen-rich blood). The left side pumps at high pressure through the aorta.','Heart slides'),
 tf('In the lungs, blood unloads oxygen and absorbs carbon dioxide.',false,'It is the other way round: in the lungs blood absorbs fresh oxygen and unloads carbon dioxide, which you breathe out.','Workbook Section 1 + Respiratory System slides'),
 write('Arteries carry blood straight from the pumping ventricles of the heart. Why do arteries need thicker, more muscular walls than veins?',['pressure|force|pushed','high|thick|muscular|strong|withstand|cope|burst'],'Blood leaves the heart at high pressure, so artery walls must be thick and muscular to cope with it. Veins carry blood at low pressure, so they have thinner walls and valves to stop backflow.','Arteries: high pressure, thick muscular walls. Veins: low pressure, valves.','Workbook Section 1 challenge'),
 fill('Blood leaves the heart through large ___, travels into microscopic ___ where tissues absorb ___, and returns to the heart through ___.',['arteries','capillaries','oxygen','veins'],['arteries','capillaries','oxygen','veins','alveoli'],'Arteries (away from the heart), then capillaries (walls one cell thick, where substances are exchanged), then veins (back to the heart).','Workbook Section 1'),
 slider('Plasma is the yellowish liquid part of blood. About what percent of your blood is plasma?',{min:0,max:100,step:5,unit:'%'},55,5,'Plasma is about 55% of blood. The rest is red cells, white cells and platelets.','Blood slides'),
 scramble('Tiny sticky bits of blood that clump together to block a cut and help a scab form.','platelets','Platelets stick together to plug a cut. Then the blood clots and forms a scab.','Blood slides'),
 order('Put the journey of oxygen from the air into your blood in order.',[
   'Air enters through the nose or mouth',
   'Air moves down the trachea (windpipe)',
   'Air branches through the bronchi into smaller bronchioles',
   'Air reaches the alveoli at the end of the bronchioles',
   'Oxygen diffuses across the thin walls of the alveoli into the blood'],
   'Nose or mouth, then trachea, bronchi, bronchioles, alveoli. Oxygen moves into the blood in the alveoli.','Respiratory System slides + Workbook Section 2'),
 odd('Odd one out! Three are parts of the airways, one is not.','Aorta',['Trachea','Bronchus','Bronchioles'],'The trachea, bronchi and bronchioles carry air to the lungs. The aorta is a blood vessel, the main artery from the heart.','Respiratory System slides + Heart slides'),
 hotspot('Tap the place where oxygen passes from the air into the blood.',u1_RESP_SVG,u1_RESP_PTS,'Alveoli','Oxygen moves from the alveoli through their thin walls into the capillaries around them.','Respiratory System slides'),
 match('Match each structure to its job.',[
   ['Alveoli','Microscopic air sacs where gas exchange occurs'],
   ['Diaphragm','Large sheet of muscle beneath the lungs'],
   ['Trachea','Main windpipe, held open by cartilage rings'],
   ['Capillaries around the alveoli','Tiny vessels that absorb the oxygen']],
   'Alveoli = gas exchange. Diaphragm = muscle for breathing. Trachea = windpipe. Capillaries = tiny vessels with thin walls.','Workbook Section 2'),
 spot('Find the mistake and tap it.','During inhalation the diaphragm contracts and moves [[upwards|downwards]], so the chest cavity gets bigger.','When you breathe in, the diaphragm contracts and moves downwards. When you breathe out, it relaxes and moves upwards.','Respiratory System slides'),
 typed('Which gas moves from the blood into the alveoli so that it can be breathed out?',['carbon dioxide','co2','carbon-dioxide','carbon dioxide gas','carbondioxide','co₂','co 2'],'Carbon dioxide is a waste gas made by the body cells. It moves from the blood into the alveoli and you breathe it out.','Respiratory System slides','') ,
 write("Describe how and why a runner's breathing rate and depth change during a race.",['faster|quick|rapid|increase','deep|heav|bigger|larger','energy|muscle|work|exercise','oxygen'],'The runner breathes faster and deeper. The muscle cells need much more energy, so they need more oxygen, and more carbon dioxide has to be breathed out.','Muscles need more energy, so more oxygen: faster and deeper breathing.','Workbook Section 2 challenge')
],
sheet:`<h3>Heart</h3><ul><li>Muscular pump with <b>4 chambers</b>: two <b>atria</b> (top, receive blood) and two <b>ventricles</b> (bottom, pump blood out).</li>
<li>Right side: <b>oxygen-poor</b> (deoxygenated) blood, body to lungs. Left side: <b>oxygen-rich</b> blood, lungs to body through the <b>aorta</b>.</li></ul>
<table><tr><th></th><th>Artery</th><th>Vein</th><th>Capillary</th></tr>
<tr><td>Blood flows</td><td>Away from the heart</td><td>To the heart</td><td>Joins the two</td></tr>
<tr><td>Pressure</td><td>High</td><td>Low</td><td>-</td></tr>
<tr><td>Wall</td><td>Thick, muscular</td><td>Thinner, with valves to stop backflow</td><td>One cell thick</td></tr></table>
<h3>Blood</h3><ul><li><b>Plasma</b> (about 55%): the liquid. <b>Red cells</b> carry oxygen. <b>White cells</b> fight infection. <b>Platelets</b> help blood clot and make a scab.</li></ul>
<h3>Breathing</h3><ul><li>Air: nose or mouth, <b>trachea</b>, two <b>bronchi</b>, <b>bronchioles</b>, <b>alveoli</b>.</li>
<li>Alveoli: walls one cell thick, large moist surface, many capillaries. <b>Oxygen</b> goes into the blood, <b>carbon dioxide</b> goes out to be exhaled.</li>
<li>In: diaphragm <b>contracts, moves down</b>. Out: it <b>relaxes, moves up</b>. Exercise: faster and deeper breathing, because muscle cells need more energy.</li></ul>`},

{id:'s-health', ico:'🦠', name:'Growing Up & Staying Healthy', blurb:'Puberty, the reproductive system, germs, insect bites and body defence', col:'#8b5cf6', Q:[
 tf('Girls usually finish puberty sooner than boys do.',true,'Girls develop more quickly and usually finish in about 4 years. Most boys finish after about 6 years.','Puberty slides'),
 sort('Boys, girls or both? Sort the changes of puberty.',['Boys','Girls','Both'],[
   ['Shoulders become wider',0],
   ['Testes and penis enlarge',0],
   ['Voice breaks (gets deeper)',0],
   ['Breasts start to develop',1],
   ['Hips start to widen',1],
   ['Ovaries start to release egg cells',1],
   ['Underarm hair grows',2],
   ['Pubic hair grows',2],
   ['Pimples and acne',2],
   ['Body smell gets stronger',2]],
   'Boys: wider shoulders, testes and penis grow, voice breaks. Girls: breasts develop, hips widen, ovaries release eggs. Both: growth spurt, body hair, pimples and acne, stronger body smell. Everyone changes at their own time and speed.','Puberty slides + Workbook Section 3'),
 odd('Odd one out! Three are parts of the male reproductive system.','Ovary',['Testes','Sperm duct','Penis'],'The testes make sperm cells, the sperm ducts carry them away and the penis lets sperm and urine leave the body. The ovary is part of the female system.','Reproductive System slides'),
 u1_noGloss(fill('A sperm cell can ___ an egg to form an ___. This can implant in the wall of the uterus and develop into a baby.',['fertilise','embryo'],['fertilise','embryo','hormone','ovary'],'Fertilisation happens when a sperm cell joins an egg. The result is an embryo. It implants in the uterus wall and grows into a baby during pregnancy.','Reproductive System slides'),'fertilise','fertilize','embryo'),
 spot('Find the mistake and tap it.','Estrogen is a hormone produced by the [[testes|ovaries]].','Estrogen is made by the ovaries and controls the development of females. Testosterone is made by the testes and controls the development of males.','Puberty slides'),
 typed('Which insect spreads sleeping sickness?',['tsetse fly','tsetse flies','the tsetse fly','a tsetse fly','tsetse','tse tse fly','tse-tse fly','tse tse','tse-tse','tsetse-fly','tse tse flies','tse-tse flies','tsetsefly'],'Sleeping sickness is spread by the infected tsetse fly, which lives in parts of Africa. Malaria and yellow fever are spread by mosquitoes.','Insect Bites slides (Quick Check)',''),
 multi('Tick the FOUR actions that help reduce insect bites.',['Wear long sleeves and trousers where biting insects are present','Use insect repellent as directed on the label, with an adult\'s help','Use a mosquito coil only as directed, with adult supervision','Keep doors and windows closed, or screened if they must be open'],['Wear shorts and short sleeves where biting insects are present','Leave doors and windows open with no screens'],'Cover up, use repellent, use a coil only as directed, and keep doors and windows closed or screened. Shorts and open windows let insects reach you.','Revision Pack Section 5 + Insect Bites slides'),
 match('Match each disease to one key fact about it.',[
   ['Malaria','Fever, chills and headache; mosquitoes bite most from dusk to dawn'],
   ['Sleeping sickness','If untreated, it affects the nervous system and sleep patterns'],
   ['Yellow fever','Skin and eyes may turn yellow; a vaccine can prevent it']],
   'Malaria: parasite Plasmodium, bites from dusk to dawn. Sleeping sickness: parasite Trypanosoma, sleepy in the day. Yellow fever: virus, jaundice, vaccine.','Insect Bites slides'),
 spot('Find the mistake and tap it.','Only [[male|female]] mosquitoes bite, because they need blood to make their eggs.','Only female mosquitoes bite. They need blood to make their eggs. (Both male and female tsetse flies drink blood.)','Insect Bites slides'),
 sort('Which type of pathogen causes each illness?',['Bacteria','Virus','Fungus','Parasite'],[
   ['Influenza (flu)',1],['Chickenpox',1],['COVID-19',1],
   ['Strep throat',0],['Cholera',0],['Tuberculosis',0],
   ['Athlete\'s foot',2],['Ringworm',2],
   ['Head lice',3],['Tapeworm',3]],
   'Viruses: flu, chickenpox, COVID-19. Bacteria: strep throat, cholera, TB. Fungi: athlete\'s foot and ringworm (a fungus, not a worm!). Parasites live in or on a host and take its nutrients: head lice, tapeworms.','Unit 1.4 slides + Workbook Section 4'),
 u1_noGloss(mc('Microbes that are swallowed with food are dissolved and neutralised by which natural defence?','Stomach acid',['Cleansing tears','Sticky mucus','Waterproof skin'],'Stomach acid dissolves and neutralises microbes that are swallowed with food.','Body Defence slides'),'stomach acid','hydrochloric acid'),
 tf('Tears wash the eyes and contain enzymes that destroy viruses.',false,'The enzymes in tears destroy the cell walls of bacteria. Tears also wash the eyes clean.','Body Defence slides'),
 scramble('Sticky stuff in the nose and breathing tubes. It catches dust and microbes before they reach the lungs.','mucus','Mucus is a protective sticky substance. It traps invading dust, particles and microbes in the airways.','Body Defence slides'),
 multi('Tick ALL the food safety rules.',['Rinse raw fruit and vegetables well','Use a different board for raw meat','Put cooked meals in the fridge promptly'],['Cut raw chicken and apples on the same board','Leave cooked food in a warm room for hours'],'Wash produce, keep raw meat apart from ready-to-eat food, and chill cooked food quickly. Warmth lets bacteria double rapidly, and the same board moves bacteria from chicken to apples (cross-contamination).','Body Defence slides'),
 write('Doctors give antibiotics for a severe bacterial infection, but antibiotics are useless against colds and flu. Explain why.',['bacteri','virus|viral'],'Antibiotics work only against bacteria. Colds and flu are caused by viruses, so antibiotics do not help. Viruses need anti-viral medicines.','Antibiotics: bacteria only. Colds and flu: viruses.','Workbook Section 4 challenge'),
 tf('If a change in your body worries you or you are not sure about it, it is fine to ask a trusted adult or a doctor.',true,'Puberty is a normal part of growing up, but everyone changes at their own time and speed. You can always ask a trusted adult or a health professional.','Workbook Section 3')
],
sheet:`<h3>Puberty</h3><ul><li>Girls start at 8-14 (average 11) and finish in about 4 years. Boys start at 9-14 (average 12) and finish in about 6 years.</li>
<li><b>Hormones</b> are chemical messengers made in glands and carried by the blood. <b>Estrogen</b>: ovaries. <b>Testosterone</b>: testes.</li>
<li>Boys: wider shoulders, voice breaks, testes and penis grow, face and chest hair. Girls: breasts, wider hips, ovaries release eggs. Both: growth spurt, body hair, body smell, pimples. Wash regularly and wear clean clothes.</li></ul>
<h3>Reproductive system</h3><ul><li><b>Female:</b> ovary (eggs), oviduct (carries the egg), uterus (a baby can grow), birth canal.</li>
<li><b>Male:</b> testes (sperm), sperm duct (carries sperm), penis (urethra: urine and sperm).</li>
<li>Sperm fertilises the egg, then embryo, implants in the uterus, baby. If the egg is not fertilised, the lining leaves as a period.</li>
<li>Questions or worries? Everyone is different. Talk to a trusted adult.</li></ul>
<h3>Insect-borne diseases</h3><table><tr><th>Disease</th><th>Cause</th><th>Spread by</th></tr>
<tr><td>Malaria</td><td>Parasite</td><td>Female Anopheles mosquito</td></tr>
<tr><td>Sleeping sickness</td><td>Parasite</td><td>Tsetse fly</td></tr>
<tr><td>Yellow fever</td><td>Virus</td><td>Mosquito</td></tr></table>
<p>Stay bite-free: repellent, cover up, mosquito nets, screens, stay away from biting insects.</p>
<h3>Germs and defence</h3><table><tr><th>Pathogen</th><th>Examples</th><th>Treatment</th></tr>
<tr><td>Bacteria</td><td>TB, cholera, strep throat</td><td>Antibiotics</td></tr>
<tr><td>Viruses</td><td>Flu, chickenpox, COVID-19</td><td>Anti-viral medicines</td></tr>
<tr><td>Fungi</td><td>Athlete's foot, ringworm</td><td>Anti-fungal medication</td></tr>
<tr><td>Parasites</td><td>Head lice, tapeworm</td><td>Targeted medicines</td></tr></table>
<p>Malaria and sleeping sickness are caused by single-celled parasites. Some books call this group <b>protists</b> (a fourth type of pathogen after bacteria, viruses and fungi).</p>
<ul><li>Body defences: skin, tears, sticky mucus, stomach acid. Graze: wash and cover it.</li><li>Food hygiene: wash produce, separate boards, chill cooked food.</li></ul>`}
];

const VOC_u1=[
 ['Heart','сердце','Muscular organ that pumps blood'],['Atrium / ventricle','предсердие / желудочек','Upper / lower chambers'],['Aorta','аорта','Main artery'],['Vena cava','полая вена','Main vein'],
 ['Artery / vein / capillary','артерия / вена / капилляр',''],['Plasma','плазма','Liquid part of blood'],['Platelets','тромбоциты','Help blood clot'],
 ['Trachea / bronchus / bronchioles','трахея / бронх / бронхиолы',''],['Alveoli','альвеолы','Air sacs, gas exchange'],['Diaphragm','диафрагма','Muscle for breathing'],
 ['Puberty','половое созревание',''],['Hormone','гормон',''],['Estrogen / testosterone','эстроген / тестостерон',''],['Embryo','зародыш',''],
 ['Parasite','паразит',''],['Pathogen','возбудитель (микроб)',''],['Antibiotic','антибиотик','Works on bacteria only'],['Mucus','слизь',''],['Tsetse fly','муха цеце','']
];

const GLO_u1=[
 /* body */
 ['tap','нажать'],['tick','отметить галочкой'],['choose','выбрать'],['sort','разложить по группам'],['match','соединить'],['describe','описать'],['explain','объяснить'],['why','почему'],['mistake','ошибка'],
 ['chamber','камера (сердца)'],['atrium|atria','предсердие'],['ventricle','желудочек'],['pumping','перекачивающий'],['pump','качать, перекачивать'],['muscular','мышечный'],['thick','толстый'],['thin|thinner','тонкий'],['wall','стенка'],
 ['oxygen-poor','бедный кислородом'],['oxygen-rich','богатый кислородом'],['deoxygenated','обедненный кислородом'],['unload','отдавать, разгружать'],['absorb','поглощать'],['vena cava','полая вена'],['receive','получать, принимать'],['empty','впадать (о сосуде)'],
 ['pressure','давление'],['valve','клапан'],['backflow','обратный ток'],['microscopic','микроскопический'],['vessel','сосуд'],['gas exchange','газообмен'],['exchange','обмен'],['substance','вещество'],
 ['cell','клетка'],['cell wall','клеточная стенка'],['tissue','ткань (организма)'],['clot','сворачиваться (о крови)'],['scab','корочка на ранке'],['sticky','липкий'],['clump','слипаться'],['block','закрывать, блокировать'],['plug','затыкать, закупоривать'],
 ['yellowish','желтоватый'],['liquid','жидкость'],['percent','процент'],['rest','остальное'],['infection','инфекция'],['waste','отходы'],['lung','легкое'],['airway','дыхательные пути'],
 ['inhalation','вдох'],['exhale|exhaled','выдыхать'],['contract','сокращаться (о мышце)'],['relax','расслабляться'],['upwards','вверх'],['downwards','вниз'],['chest cavity','грудная полость'],['sheet of muscle','мышечный пласт'],
 ['windpipe','дыхательное горло'],['cartilage','хрящ'],['diffuse','диффундировать (проникать)'],['branch','разветвляться; ветвь'],['air sac','воздушный мешочек'],['structure','структура, часть'],['job','задача, роль'],['microorganism','микроорганизм'],
 ['breathe','дышать'],['breathing','дыхание'],['rate','скорость, частота'],['depth','глубина'],['race','забег, гонка'],['runner','бегун'],['energy','энергия'],['journey','путь'],['beneath','под'],['bits','кусочки'],['cut','порез; резать, нарезать'],['gas','газ'],['pulmonary','легочный'],['superior','верхний'],['air','воздух'],['nose','нос'],['mouth','рот'],
 /* puberty & reproduction */
 ['mature','созревать'],['finish','заканчивать'],['develop|development','развиваться; развитие'],['hormone','гормон'],['gland','железа (орган)'],['produce|produced','производить, вырабатывать'],['sperm','сперматозоид'],['egg','яйцеклетка, яйцо'],['ovary|ovaries','яичник'],['testes','яички'],['sperm duct','семявыносящий проток'],['penis','половой член'],
 ['shoulder','плечо'],['voice','голос'],['breast','грудь (молочная железа)'],['hip','бедро'],['widen','расширяться'],['enlarge','увеличиваться'],['underarm hair','волосы под мышками'],['pubic hair','лобковые волосы'],['pimple','прыщ'],['acne','акне (прыщи)'],['body smell','запах тела'],['growth','рост'],
 ['uterus','матка'],['fertilise|fertilize','оплодотворять'],['embryo','зародыш'],['implant','прикрепляться (к стенке матки)'],['pregnancy','беременность'],['urine','моча'],['reproductive system','репродуктивная (половая) система'],['reproductive','репродуктивный (половой)'],['male','мужской; самец (у животных)'],['female','женский; самка (у животных)'],['estrogen','эстроген'],['testosterone','тестостерон'],['period','менструация'],['lining','внутренний слой (выстилка)'],
 ['trusted adult','взрослый, которому доверяешь'],['health professional','медицинский работник'],['doctor','врач'],['worry|worries','беспокоить'],['sure','уверенный'],['usually','обычно'],['average','в среднем'],['sooner','раньше'],['wash','мыть'],['hygiene','гигиена'],
 /* insects */
 ['insect','насекомое'],['bite','укус; кусать'],['biting','кусающий'],['mosquito','комар'],['tsetse fly','муха цеце'],['sleeping sickness','сонная болезнь'],['yellow fever','желтая лихорадка'],['malaria','малярия'],['repellent','репеллент (средство от насекомых)'],['trousers','брюки'],['sleeve','рукав'],
 ['coil','спираль (от комаров)'],['supervision','присмотр'],['screen|screened','защитная сетка; закрытый сеткой'],['adult','взрослый'],['reduce','уменьшать'],['present','присутствующий'],['label','этикетка; подписать'],['dusk','сумерки'],['dawn','рассвет'],['fever','жар'],['chills','озноб'],['headache','головная боль'],
 ['nervous system','нервная система'],['sleep pattern','режим сна'],['untreated','без лечения'],['vaccine','вакцина'],['jaundice','желтуха'],['spread','распространять(ся)'],['infected','зараженный'],['disease','болезнь'],['key fact','главный факт'],['prevent','предотвращать'],['parasite','паразит'],['virus','вирус'],
 /* germs */
 ['pathogen','возбудитель (микроб)'],['bacteria|bacterial|bacterium','бактерии'],['fungus|fungi','гриб, грибок'],['influenza','грипп'],['flu','грипп'],['chickenpox','ветрянка'],['strep throat','стрептококковая ангина'],['cholera','холера'],['tuberculosis','туберкулез'],
 ['athlete\'s foot','стопа атлета (болезнь кожи стоп)'],['ringworm','стригущий лишай'],['head lice','головные вши'],['tapeworm','ленточный червь'],['host','хозяин (организм-хозяин)'],['nutrient','питательное вещество'],['cold|colds','простуда'],['antibiotic','антибиотик'],['anti-viral','противовирусный'],['anti-fungal','противогрибковый'],
 ['medicine|medication','лекарство'],['severe','тяжелый'],['useless','бесполезный'],['infection','инфекция'],['defence','защита'],['natural','естественный'],['hydrochloric acid','соляная кислота'],['stomach acid','желудочный сок (кислота)'],['dissolve','растворять'],['neutralise','нейтрализовать'],['swallow','глотать'],
 ['tears','слезы'],['cleansing','очищающий'],['enzyme','фермент'],['destroy','разрушать'],['waterproof','водонепроницаемый'],['mucus','слизь'],['trap','задерживать, ловить'],['dust','пыль'],['particle','частица'],['microbe','микроб'],['protective','защитный'],['invading','вторгающийся'],
 ['rule','правило'],['rinse','промыть'],['raw','сырой'],['vegetable','овощ'],['fruit','фрукт'],['fridge','холодильник'],['promptly','быстро, сразу'],['cooked','приготовленный'],['board','доска (разделочная)'],['chicken','курица'],['apple','яблоко'],['safety','безопасность'],['double','удваиваться'],['rapidly','быстро'],['cross-contamination','перекрестное заражение'],['ready-to-eat','готовый к употреблению'],['warm','теплый'],['hours','часы'],['sticky stuff','липкая масса'],['catch','ловить'],['reach','достигать']
];

/* ===== fragment u2 ===== */
/* Fragment u2: Unit 2 States of matter (Science mock revision). Sources: teacher slides State Changes + Dissolving, Unit 2 word list. */
const u2_svg=function(s){return "data:image/svg+xml;utf8,"+encodeURIComponent(s)};
const u2_SC='State Changes slides', u2_DS='Dissolving slides', u2_PR='Unit 2 word list';
const u2_noGloss=function(q){var t=Array.prototype.slice.call(arguments,1);return Object.assign(q,{ng:t})};

/* ---------- picture 1: six phase changes ---------- */
const u2_PHASE_SVG={vb:'0 0 560 330',body:`
 <defs>
  <marker id="u2_mR" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.2" markerHeight="3.2" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e0533d"/></marker>
  <marker id="u2_mB" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.2" markerHeight="3.2" orient="auto"><path d="M0 0L10 5L0 10z" fill="#3b82f6"/></marker>
 </defs>
 <rect width="560" height="330" rx="16" fill="#fff8e7"/>
 <text x="280" y="24" text-anchor="middle" font-size="15" fill="#26224a"><tspan fill="#e0533d" font-weight="700">red arrow = heat added</tspan>   |   <tspan fill="#3b82f6" font-weight="700">blue arrow = heat taken away</tspan></text>
 <circle cx="80" cy="165" r="46" fill="#ffd9cc" stroke="#26224a" stroke-width="3"/>
 <g fill="#ff7043"><circle cx="58" cy="143" r="8"/><circle cx="80" cy="143" r="8"/><circle cx="102" cy="143" r="8"/><circle cx="58" cy="165" r="8"/><circle cx="80" cy="165" r="8"/><circle cx="102" cy="165" r="8"/><circle cx="58" cy="187" r="8"/><circle cx="80" cy="187" r="8"/><circle cx="102" cy="187" r="8"/></g>
 <circle cx="280" cy="165" r="46" fill="#d6edff" stroke="#26224a" stroke-width="3"/>
 <g fill="#42a5f5"><circle cx="258" cy="150" r="8"/><circle cx="284" cy="142" r="8"/><circle cx="304" cy="160" r="8"/><circle cx="266" cy="176" r="8"/><circle cx="292" cy="186" r="8"/><circle cx="251" cy="168" r="8"/></g>
 <rect x="440" y="115" width="100" height="100" rx="14" fill="#e8f0ff" stroke="#26224a" stroke-width="3"/>
 <g fill="#1e5fd0"><circle cx="462" cy="138" r="7"/><circle cx="515" cy="140" r="7"/><circle cx="530" cy="182" r="7"/><circle cx="468" cy="190" r="7"/><circle cx="498" cy="168" r="7"/><circle cx="500" cy="205" r="7"/></g>
 <g font-size="17" font-weight="800" fill="#26224a" text-anchor="middle"><text x="80" y="236">SOLID</text><text x="280" y="236">LIQUID</text><text x="490" y="240">GAS</text></g>
 <g stroke-width="7" fill="none" stroke-linejoin="round">
  <line x1="136" y1="188" x2="224" y2="188" stroke="#e0533d" marker-end="url(#u2_mR)"/>
  <line x1="224" y1="142" x2="136" y2="142" stroke="#3b82f6" marker-end="url(#u2_mB)"/>
  <line x1="336" y1="188" x2="430" y2="188" stroke="#e0533d" marker-end="url(#u2_mR)"/>
  <line x1="430" y1="142" x2="336" y2="142" stroke="#3b82f6" marker-end="url(#u2_mB)"/>
  <path d="M80 250 V274 H456 V222" stroke="#e0533d" marker-end="url(#u2_mR)"/>
  <path d="M456 108 V50 H80 V104" stroke="#3b82f6" marker-end="url(#u2_mB)"/>
 </g>`};
const u2_PHASE_PTS=[{n:'Melting',x:150,y:188},{n:'Freezing',x:210,y:142},{n:'Evaporation',x:352,y:188},{n:'Condensation',x:414,y:142},{n:'Sublimation',x:285,y:274},{n:'Deposition',x:285,y:50}];

/* ---------- picture 2: dissolving ---------- */
const u2_beaker=`<path d="M42 70 H198 V262 Q198 272 188 272 H52 Q42 272 42 262 Z" fill="#cfe9ff"/><path d="M40 38 V262 Q40 274 52 274 H188 Q200 274 200 262 V38" fill="none" stroke="#26224a" stroke-width="4"/>`;
const u2_DISS_SVG={vb:'0 0 560 300',body:`
 <rect width="560" height="300" rx="16" fill="#fff8e7"/>
 ${u2_beaker}
 <g fill="#3b9bf0"><circle cx="66" cy="96" r="7"/><circle cx="105" cy="88" r="7"/><circle cx="145" cy="98" r="7"/><circle cx="176" cy="90" r="7"/><circle cx="78" cy="130" r="7"/><circle cx="118" cy="124" r="7"/><circle cx="158" cy="134" r="7"/><circle cx="64" cy="164" r="7"/><circle cx="104" cy="168" r="7"/><circle cx="144" cy="172" r="7"/><circle cx="180" cy="158" r="7"/><circle cx="70" cy="204" r="7"/><circle cx="170" cy="204" r="7"/><circle cx="120" cy="206" r="7"/></g>
 <g fill="#e53935"><circle cx="92" cy="236" r="8"/><circle cx="108" cy="236" r="8"/><circle cx="124" cy="236" r="8"/><circle cx="140" cy="236" r="8"/><circle cx="156" cy="236" r="8"/><circle cx="92" cy="252" r="8"/><circle cx="108" cy="252" r="8"/><circle cx="124" cy="252" r="8"/><circle cx="140" cy="252" r="8"/><circle cx="156" cy="252" r="8"/></g>
 <line x1="228" y1="160" x2="312" y2="160" stroke="#26224a" stroke-width="7"/><path d="M308 144 L336 160 L308 176 Z" fill="#26224a"/>
 <g transform="translate(300,0)">
  ${u2_beaker}
  <g fill="#3b9bf0"><circle cx="66" cy="96" r="7"/><circle cx="122" cy="92" r="7"/><circle cx="150" cy="128" r="7"/><circle cx="82" cy="140" r="7"/><circle cx="112" cy="168" r="7"/><circle cx="176" cy="164" r="7"/><circle cx="64" cy="206" r="7"/><circle cx="140" cy="214" r="7"/><circle cx="180" cy="200" r="7"/><circle cx="110" cy="244" r="7"/><circle cx="168" cy="248" r="7"/><circle cx="60" cy="238" r="7"/><circle cx="100" cy="190" r="7"/><circle cx="152" cy="152" r="7"/></g>
  <g fill="#e53935"><circle cx="90" cy="112" r="8"/><circle cx="166" cy="106" r="8"/><circle cx="130" cy="146" r="8"/><circle cx="74" cy="180" r="8"/><circle cx="148" cy="186" r="8"/><circle cx="96" cy="212" r="8"/><circle cx="160" cy="228" r="8"/><circle cx="134" cy="252" r="8"/><circle cx="116" cy="124" r="8"/><circle cx="184" cy="224" r="8"/></g>
 </g>`};
const u2_DISS_PTS=[{n:'Water particles',x:105,y:88},{n:'Solute crystal',x:124,y:236},{n:'Dissolved solute particles',x:466,y:106}];

/* ---------- table pictures (scenario data) ---------- */
const u2_MELT_TABLE=u2_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 290"><rect width="460" height="290" rx="12" fill="#fff8e7"/><g font-family="sans-serif" font-size="16" fill="#26224a"><text x="20" y="32" font-weight="700">Time (min)</text><text x="140" y="32" font-weight="700">Temperature (°C)</text><text x="300" y="32" font-weight="700">What is in the cup</text><line x1="10" y1="44" x2="450" y2="44" stroke="#26224a" stroke-width="2"/><text x="40" y="72">0</text><text x="170" y="72">40</text><text x="300" y="72">solid</text><text x="40" y="106">2</text><text x="170" y="106">50</text><text x="300" y="106">solid</text><text x="40" y="140">4</text><text x="170" y="140">60</text><text x="300" y="140">solid and liquid</text><text x="40" y="174">6</text><text x="170" y="174">60</text><text x="300" y="174">solid and liquid</text><text x="40" y="208">8</text><text x="170" y="208">60</text><text x="300" y="208">solid and liquid</text><text x="40" y="242">10</text><text x="170" y="242">70</text><text x="300" y="242">liquid</text></g></svg>`);
const u2_DISS_TABLE=u2_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 220"><rect width="440" height="220" rx="12" fill="#fff8e7"/><g font-family="sans-serif" font-size="16" fill="#26224a"><text x="20" y="30" font-weight="700">Water temperature (°C)</text><text x="270" y="30" font-weight="700">Time to dissolve (s)</text><line x1="10" y1="42" x2="430" y2="42" stroke="#26224a" stroke-width="2"/><text x="80" y="76">10</text><text x="330" y="76">120</text><text x="80" y="116">30</text><text x="338" y="116">80</text><text x="80" y="156">50</text><text x="338" y="156">45</text><text x="80" y="196">70</text><text x="338" y="196">20</text></g></svg>`);

/* ---------- topics ---------- */
const TOP_u2=[

{id:'s-matter', ico:'🔄', name:'States of Matter & Phase Changes', blurb:'Solid, liquid, gas: the six phase changes, heat and particles, boiling vs evaporation', col:'#ff8a1a', Q:[
 u2_noGloss(label('Name every arrow on the map of state changes. Choose the correct name for each number. (Red arrow = heat added, blue arrow = heat taken away.)',u2_PHASE_SVG,u2_PHASE_PTS,'Heated: melting (solid to liquid), evaporation (liquid to gas), sublimation (solid straight to gas). Cooled: freezing (liquid to solid), condensation (gas to liquid), deposition (gas straight to solid).',u2_SC+', slide 3'),'melting','freezing','evaporation','condensation','sublimation','deposition'),
 sort('Is heat added or taken away? Sort the phase changes.',['Heat is added','Heat is taken away'],[
   ['Melting',0],['Evaporation',0],['Boiling',0],['Sublimation',0],
   ['Freezing',1],['Condensation',1],['Deposition',1]],
   'Melting, evaporation, boiling and sublimation happen through heating. Freezing, condensation and deposition happen through cooling.',u2_SC+', slides 7 and 12'),
 tf('A solid can only change into a gas by first becoming a liquid.',false,'Not always! In sublimation a solid changes directly into a gas without first becoming a liquid.',u2_SC+', slide 11'),
 tf('Condensation happens when a gas is cooled below its dew point.',true,'Yes. When a gas is cooled below its dew point, its molecules come closer together and form a liquid.',u2_SC+', slide 14'),
 order('Water is cooled until it turns into ice. Put the steps in order.',[
   'Water is cooled down',
   'The heat energy it absorbed before is released',
   'The molecules slow down and move less',
   'New bonds form between the molecules as they pack more tightly',
   'The molecules end up in a rigid structure: ice'],
   'Cooling is the opposite of heating: the energy is released, the molecules slow down, new bonds form and a rigid structure appears.',u2_SC+', slide 6'),
 odd('Odd one out! Three phase changes end with a GAS. Tap the one that does not.','Condensation',['Evaporation','Boiling','Sublimation'],'Evaporation, boiling and sublimation all end with a gas. Condensation ends with a liquid: a gas changes into a liquid.',u2_SC+', slides 9-11 and 14'),
 spot('Find the mistake and tap it.','Evaporation happens at a temperature [[above|below]] the boiling point of the liquid.','Evaporation is a liquid changing into a gas at a temperature BELOW its boiling point.',u2_SC+', slide 10'),
 scramble('A solid changes directly into a gas without first becoming a liquid.','sublimation','Sublimation: solid straight to gas, with no liquid stage. It can happen when heat is added, when pressure is reduced, or both.',u2_SC+', slide 11'),
 u2_noGloss(match('What are the molecules doing? Match each phase change to its description.',[
   ['Melting','The bonds break and the molecules become less tightly packed'],
   ['Freezing','The molecules are held in a fixed position relative to each other'],
   ['Condensation','The molecules come closer together and form a liquid'],
   ['Deposition','The molecules come closer together and form a solid, with no liquid stage']],
   'Melting loosens the molecules. Freezing, condensation and deposition happen when cooling makes the molecules come closer together.',u2_SC+', slides 8, 13-15'),'melting','freezing','condensation','deposition'),
 mc('A thermometer is placed in melting ice. The temperature stays the same while the ice melts. For how long does it stay the same?','Until all the ice has melted',['Until the first small piece of the ice has melted','Until the water begins to freeze again','Until the molecules stop moving completely'],'The heat is used to break the bonds between the molecules, so the temperature stays the same until all of the ice has melted.',u2_SC+', slide 5'),
 multi('Ice is being heated. Tick ALL the things that happen to its molecules.',['They move more rapidly','The bonds between them break','They become less tightly packed'],['They slow down','They form new bonds'],'Heat makes the molecules move more rapidly, breaks the bonds and leaves them less tightly packed. New bonds form when water is cooled.',u2_SC+', slides 5 and 8'),
 write('Explain what happens to the molecules of ice when it is heated and melts.',['bond','heat|energy','move|moving|vibrat|rapid|fast','free|less tightly|less packed|loose|spread out|further apart'],'Ice absorbs heat energy. The heat breaks the bonds between the molecules, so they move around more freely and are less tightly packed. The solid turns into a liquid.','The ice absorbs heat; the energy breaks the bonds; molecules move more freely and are less tightly packed, so the solid becomes a liquid.',u2_SC+', slides 5 and 8'),
 sort('Evaporation, boiling or both? Sort the descriptions.',['Evaporation','Boiling','Both'],[
   ['Happens at a temperature below the boiling point',0],
   ['Only the more energetic molecules near the surface escape',0],
   ['Happens at the boiling point of the liquid',1],
   ['Particles throughout the liquid become a gas',1],
   ['A liquid changes into a gas',2],
   ['Energy is needed',2]],
   'Both are liquid to gas and need energy. Evaporation is below the boiling point, with surface molecules escaping. Boiling happens at the boiling point, with particles throughout the liquid becoming a gas.',u2_SC+', slides 9 and 10; '+u2_PR),
 mc('Which sentence is correct?','Deposition skips the liquid state',['Melting happens when a liquid is cooled below its freezing point','Evaporation only happens when a liquid has reached its boiling point','Condensation turns a liquid into a gas when it is cooled'],'In deposition a gas changes into a solid without first passing through the liquid state. The other sentences mix up the changes.',u2_SC+', slides 8, 10, 14 and 15'),
 hotspot('Tap the arrow that shows condensation.',u2_PHASE_SVG,u2_PHASE_PTS,'Condensation','Condensation is the blue arrow from GAS to LIQUID. Blue means heat is taken away: the gas cools.',u2_SC+', slides 3 and 14'),
 mc('A solid is heated in a cup. Look at the table. At which times is the solid melting? (The temperature stays the same while a solid melts.)',
   'At 4, 6 and 8 minutes',['At 0, 2, 4 and 6 minutes','At 8 and 10 minutes','At 10 minutes only'],'At 4, 6 and 8 minutes the temperature stays at 60 and the cup holds solid and liquid: the solid is melting. At 0 and 2 minutes it is only heating up; at 10 minutes it is all liquid.',u2_SC+', slide 5 (table: scenario data)')
]},

{id:'s-dissolve', ico:'🧂', name:'Dissolving', blurb:'Solute, solvent, solution, and what makes things dissolve faster', col:'#17c1e8', Q:[
 mc('Sugar seems to vanish in hot tea. How can you tell the sugar is still in the tea?','The tea still tastes sweet',['You can see sugar grains at the bottom of the cup','The tea becomes much hotter','The tea becomes lighter'],'The sugar did not disappear into thin air. It is still in the tea, spread through the liquid, and you can taste the sweetness.',u2_DS+', slide 2'),
 u2_noGloss(match('Sugar water: match each word to its meaning.',[
   ['Solute','The sugar that dissolves'],
   ['Solvent','The water that does the dissolving'],
   ['Solution','The whole mixture, with the sugar evenly spread through the water'],
   ['Dissolving rate','How fast the sugar dissolves'],
   ['Uniform','The same throughout']],
   'Solute (dissolves) + solvent (does the dissolving) = solution. Dissolving rate is how fast it dissolves. A uniform mixture is the same throughout.',u2_DS+', slides 4 and 5; '+u2_PR),'solute','solvent','solution','dissolving rate','uniform'),
 sort('Soluble or insoluble in water? Sort the cards.',['Soluble','Insoluble'],[
   ['Sugar',0],['Table salt',0],['Makes a clear mixture with water',0],
   ['Sand',1],['Chalk',1],['Sinks or floats and leaves visible bits',1]],
   'Sugar and table salt dissolve to make a clear mixture. Sand and chalk are insoluble: they leave visible bits however long you stir.',u2_DS+', slide 4'),
 tf('In a solution, the solute is the liquid and the solvent is the solid that dissolves.',false,'It is the other way round: the SOLUTE is the solid that dissolves and the SOLVENT is the liquid that does the dissolving.',u2_DS+', slide 5'),
 tf('If you evaporate the water from a salt solution, solid crystals are left behind.',true,'Yes. Dissolving is a physical change, so it can be reversed: when the water evaporates, the solid crystals remain.',u2_DS+', slide 6'),
 typed('20 g of sugar dissolves in 100 g of water. What is the mass of the sugar solution in grams? Type the number.',['120','120 g','120g','120 gram','120 grams'],'Total mass is conserved: 20 g + 100 g = 120 g of solution.',u2_DS+', slide 6','g'),
 slider('In a test, 10 g of sugar took 120 s to dissolve in 10 °C water and 20 s in 70 °C water. How many seconds LONGER did the cold water take?',{min:0,max:150,step:5,unit:'s'},100,0,'The cold water took 120 s and the hot water 20 s, so 120 - 20 = 100 s longer. Heat makes dissolving faster.',u2_DS+', slide 8 (numbers: scenario data)'),
 order('Sugar is added to hot water. Put the steps in order.',[
   'Hot water gives the water particles more thermal energy',
   'The water particles move faster',
   'They collide with the sugar more often and harder',
   'Solute particles are pulled away much faster',
   'The dissolving rate increases'],
   'More thermal energy means faster particles and more collisions, so the solute is broken away faster.',u2_DS+', slide 8'),
 hotspot('Tap the solute crystal.',u2_DISS_SVG,u2_DISS_PTS,'Solute crystal','The crystal is the group of solute particles tightly packed in orderly rows at the bottom of the left beaker.',u2_DS+', slide 7'),
 mc('Two cups hold the same amount of sugar and water. One cup is hot and one is cold. Which sugar dissolves faster, and why?','The hot cup, because its water particles move faster and hit the sugar more often',['The cold cup, because slower water particles have more time to pull the sugar particles apart','Both cups the same, because dissolving only depends on how much sugar is added','The hot cup, because heat removes the gaps between the water particles'],'Heating gives the water particles more thermal energy. They move faster and collide with the sugar more often and harder.',u2_DS+', slides 8, 10 and 11'),
 odd('Odd one out! Three cards are true about dissolving. Tap the card that is not true.','The solute turns into a brand new substance',['No brand new substance is made','The solute particles spread out among the solvent particles','It can be reversed by evaporating the water'],'Dissolving is a physical change: no brand new substance is made, the particles spread out, and the solid returns when the water is evaporated.',u2_DS+', slide 6'),
 spot('Find the mistake and tap it.','Stirring sweeps the dissolved particles away and brings [[used|fresh]] solvent into contact with the solid.','Stirring sweeps the dissolved particles away and brings FRESH solvent into contact with the solid, so it dissolves faster.',u2_DS+', slide 9'),
 scramble('Describes a substance, such as chalk, that cannot dissolve in a liquid.','insoluble','Insoluble substances, such as sand and chalk, cannot dissolve in that liquid.',u2_DS+', slide 4'),
 label('Label the particle picture. Choose the correct name for each number.',u2_DISS_SVG,u2_DISS_PTS,'In the crystal the solute particles are packed together. The water particles pull them away and the solute particles spread out between the water particles.',u2_DS+', slide 7'),
 Object.assign(mc('Sugar was dissolved in water at four temperatures. Which sentence about the results is correct?','The hotter the water, the faster the sugar dissolves',['The hotter the water, the longer the sugar takes to dissolve','Cold water dissolves the sugar fastest','The sugar dissolves at the same speed at every temperature'],'The time gets shorter as the temperature rises (120 s, 80 s, 45 s, 20 s), so the dissolving rate gets faster.',u2_DS+', slide 8 (table: scenario data)'),{img:u2_DISS_TABLE}),
 write('Explain why stirring helps a solid dissolve faster.',['away|sweep|carr|move|push','fresh|new|clean|unused|more water','solvent|water'],'In still water the dissolved particles stay next to the crystal and block fresh water. Stirring sweeps the dissolved particles away and brings fresh solvent (water) to the solid.','Stirring sweeps dissolved particles away and brings fresh solvent to the solid.',u2_DS+', slide 9')
]}
];
/* attach table picture to the melting-table question */
TOP_u2[0].Q[15]=Object.assign(TOP_u2[0].Q[15],{img:u2_MELT_TABLE});

const u2_SHEETS={
's-matter':`<h3>Phase changes</h3><p><b>Solid, liquid, gas.</b> A phase change = matter changes from one state to another.</p>
<table><tr><th>Change</th><th>From - to</th><th>Heat</th></tr>
<tr><td>Melting</td><td>solid → liquid</td><td>added</td></tr>
<tr><td>Evaporation</td><td>liquid → gas (below the boiling point)</td><td>added</td></tr>
<tr><td>Boiling</td><td>liquid → gas</td><td>added</td></tr>
<tr><td>Sublimation</td><td>solid → gas (no liquid)</td><td>added</td></tr>
<tr><td>Freezing</td><td>liquid → solid</td><td>taken away</td></tr>
<tr><td>Condensation</td><td>gas → liquid</td><td>taken away</td></tr>
<tr><td>Deposition</td><td>gas → solid (no liquid)</td><td>taken away</td></tr></table>
<h3>Heat and molecules</h3><ul><li>Heated ice absorbs heat: the heat breaks the <b>bonds</b> (tiny invisible strings) between the molecules. The temperature stays the same until all the ice has melted.</li>
<li>Molecules move more rapidly, are less tightly packed and move more freely.</li>
<li>Cooled water releases heat: molecules slow down, form new bonds and make a rigid structure (ice).</li>
<li>Freezing point depends on pressure and impurities. Gas below its <b>dew point</b> condenses.</li></ul>
<h3>Evaporation or boiling?</h3><ul><li>Both: liquid → gas, energy needed.</li><li>Evaporation: below the boiling point; energetic molecules near the surface escape.</li><li>Boiling: added energy makes molecules move rapidly and collide more often.</li></ul>`,
's-dissolve':`<h3>Words</h3><ul><li><b>Solute</b> - the solid that dissolves (salt, sugar)</li><li><b>Solvent</b> - the liquid that does the dissolving (water)</li><li><b>Solution</b> - solute evenly spread through the solvent</li>
<li><b>Soluble</b> - dissolves to make a clear mixture (salt, sugar). <b>Insoluble</b> - cannot dissolve (sand, chalk).</li><li><b>Dissolving rate</b> - how fast it dissolves. <b>Stir</b> - mix to speed it up.</li></ul>
<h3>Physical change</h3><ul><li>No brand new substance is made. Evaporate the water and the crystals remain.</li><li>Mass is conserved: 10 g salt + 100 g water = 110 g solution.</li></ul>
<h3>Dissolving faster</h3><table><tr><th>Way</th><th>Why</th></tr>
<tr><td>Heat the solvent</td><td>more thermal energy, particles move faster, collide with the solute more often and harder</td></tr>
<tr><td>Stir</td><td>sweeps dissolved particles away and brings fresh solvent to the solid</td></tr></table>
<p>In a crystal the solute particles are tightly packed in orderly rows. Moving water particles pull them away and fit them into the gaps between water particles.</p>`
};
TOP_u2.forEach(function(t){t.sheet=u2_SHEETS[t.id]});

const VOC_u2=[
 ['Phase change','фазовый переход','Matter changes from one state to another'],['Solid / liquid / gas','твердое тело / жидкость / газ','The three common phases'],
 ['Melting','плавление','Solid to liquid'],['Freezing','замерзание','Liquid to solid'],['Evaporation','испарение','Liquid to gas below the boiling point'],['Boiling','кипение','Liquid to gas by heating'],
 ['Condensation','конденсация','Gas to liquid'],['Sublimation','сублимация','Solid straight to gas'],['Deposition','осаждение из газа (десублимация)','Gas straight to solid'],
 ['Molecule','молекула','Also called a particle'],['Bond (intermolecular)','связь между молекулами','Tiny invisible string holding molecules together'],
 ['Freezing point','температура замерзания',''],['Dew point','точка росы','Gas cools below it and condenses'],['Boiling point','температура кипения',''],['Melting point','температура плавления',''],
 ['Solute','растворяемое вещество','The solid that dissolves'],['Solvent','растворитель','The liquid that does the dissolving'],['Solution','раствор','Solute evenly spread through the solvent'],
 ['Soluble / insoluble','растворимый / нерастворимый',''],['Dissolve','растворяться',''],['Dissolving rate','скорость растворения','How fast it dissolves'],['Stir','перемешивать',''],
 ['Thermal energy','тепловая энергия',''],['Physical change','физическое изменение','No new substance is made'],['Uniform','однородный (одинаковый во всем объеме)','The same throughout']
];

const GLO_u2=[
 ['phase','фаза (состояние вещества)'],['physical state','агрегатное состояние'],['state','состояние (вещества)'],
 ['matter','вещество, материя'],['substance','вещество'],
 ['melting|melt','плавление (плавиться, таять)'],['freezing|freeze|froze|frozen','замерзание (замерзать)'],
 ['evaporation|evaporate','испарение (испаряться)'],['boiling|boil','кипение (кипеть)'],
 ['condensation|condense','конденсация (конденсироваться)'],['sublimation','сублимация (возгонка)'],['sublimation point','температура сублимации'],
 ['heated|heating|heat up','нагревать (нагревание)'],['cooled|cooling','охлаждать (охлаждение)'],
 ['heat energy','тепловая энергия'],['energy','энергия'],['energetic','с большой энергией'],['heat','тепло, нагрев'],
 ['temperature','температура'],['pressure','давление'],['thermometer','термометр'],
 ['increase','увеличение (увеличиваться)'],['reduce|reduction','уменьшать (уменьшение)'],['directly','напрямую, сразу'],['stage','стадия, этап'],
 ['pass through|passing through','проходить через'],['skip','пропускать'],['depend on|depends on|depends','зависеть от'],['opposite','противоположный'],['arrow','стрелка'],['odd one out','найди лишнее'],['tick','отметить галочкой'],
 ['mix up','путать'],['sentence','предложение'],['correct','правильный'],['all','все'],['table','таблица'],['scenario','ситуация'],
 ['bond','связь (между частицами)'],['particle','частица'],['particles','частицы'],
 ['rapidly|rapid','быстро (быстрый)'],['frequently','часто'],['freely','свободно'],['collide|collision','сталкиваться (столкновение)'],
 ['tightly packed|pack more tightly|packed','плотно упакованы'],['rigid','жесткий'],['structure','структура, строение'],['fixed position','неподвижное положение'],['relative to each other','относительно друг друга'],
 ['absorb','поглощать'],['release','выделять, отдавать'],['escape','вылетать, вырываться'],['surface','поверхность'],['loosen','ослаблять'],
 ['invisible','невидимый'],['tiny','крошечный'],['strings','нити, ниточки'],['hold','держать'],
 ['mixture','смесь'],['clear mixture','прозрачная смесь'],['table salt','поваренная соль'],['chalk','мел'],['sink','тонуть'],['float','плавать на поверхности'],['visible','видимый'],['bits','кусочки'],['however long','как бы долго (сколько бы ни)'],
 ['vanish','исчезать'],['thin air','в никуда (бесследно)'],['spread out|spread','распределяться'],['evenly','равномерно'],['grain','крупинка'],['taste','пробовать на вкус; вкус'],['sweetness','сладость'],['sweet','сладкий'],
 ['conserved|conserve','сохраняться (не меняться)'],['mass','масса'],['crystal','кристалл'],['orderly rows|orderly','ровными рядами'],['gaps','промежутки'],['fit into','помещаться (входить в)'],
 ['constantly','постоянно'],['transfer','передавать'],['harder','сильнее'],['stir|stirring|stirred','перемешивать'],['sweep','сметать, уносить'],['fresh','свежий, новый'],['speed up','ускорять'],
 ['brand new','совершенно новый'],['reverse','обратить (вернуть назад)'],['remain','оставаться'],['left behind','остаются'],['beaker','химический стакан'],
 ['cup','чашка, стакан'],['tea','чай'],['sugar','сахар'],['salt','соль'],['water','вода'],['whole','целый, весь'],['results','результаты'],['longer','дольше'],['faster','быстрее'],['hotter','горячее'],['cold','холодный'],['hot','горячий'],['seconds','секунды'],['time','время'],['pull|pulled','тянуть, оттягивать'],['block','блокировать'],['still','все еще; неподвижный (still water)'],['dissolved','растворенный'],['describes','описывает'],['true','верно'],['false','неверно'],
 ['powder','порошок'],['liquid','жидкость'],['solid','твердое вещество'],['gas','газ'],['ice','лед'],['molecule|molecules','молекула']
];

/* ===== fragment mA ===== */
/* Maths fragment mA: Decimals + Number Toolkit (Grade 5, Cambridge Primary Stage 5). */
const mA_SRC_D='Grade 5 Maths homework - ';
const mA_NG=function(q){const t=Array.prototype.slice.call(arguments,1);return Object.assign(q,{ng:t});};

const TOP_mA=[
{id:'m-decimals', ico:'🔢', name:'Decimals', blurb:'Place value, rounding, multiplying by 10 and 100, adding decimals (no calculator)', col:'#2dd4bf', Q:[
 mc('What is the value of the digit 7 in the number 5.738?','7 tenths',['7 hundredths','7 thousandths','7 ones'],'The first digit after the decimal point is the tenths place. So the 7 means 7 tenths, which is 0.7.',mA_SRC_D+'decimal place value'),
 typed('In the number 6.248, what is the value of the digit 4? Write it as a decimal.',['0.04'],'6.248 has 2 tenths, 4 hundredths and 8 thousandths. The 4 is in the hundredths place, so its value is 0.04.',mA_SRC_D+'decimal place value'),
 fill('In the number 0.358, the digit 3 is in the ___ place, the digit 5 is in the ___ place and the digit 8 is in the ___ place.',['tenths','hundredths','thousandths'],['tenths','hundredths','thousandths','ones'],'After the decimal point the places go tenths, hundredths, thousandths - each one ten times smaller than the one before.',mA_SRC_D+'decimal place value'),
 order('Put these decimals in order, from the smallest to the largest.',['0.053','0.305','0.35','0.5'],'Compare the tenths first: 0.053 has 0 tenths, 0.305 and 0.35 have 3 tenths, 0.5 has 5 tenths. Then 0.305 has 0 hundredths and 0.35 has 5 hundredths, so 0.305 is smaller than 0.35.',mA_SRC_D+'understanding decimals'),
 mc('Which of these decimals is the largest?','0.7',['0.699','0.69','0.07'],'A longer decimal is not always bigger. 0.7 is 7 tenths, but 0.699 is only 6 tenths and a bit, so 0.7 is larger.',mA_SRC_D+'understanding decimals'),
 tf('0.25 is greater than 0.3.',false,'0.25 has 2 tenths and 0.3 has 3 tenths. 3 tenths is more than 2 tenths, so 0.3 is the greater number.',mA_SRC_D+'understanding decimals'),
 tf('4.50 and 4.5 are equal.',true,'A zero at the end of a decimal does not change its value. 5 tenths and 50 hundredths are the same amount.',mA_SRC_D+'understanding decimals'),
 spot('Find the mistake and tap it.','Rounding 6.48 to the nearest tenth gives [[6.4|6.5]].','The digit after the tenths is 8, which is 5 or more, so the tenths digit goes up. 6.48 is closer to 6.5 than to 6.4.',mA_SRC_D+'rounding decimals'),
 typed('Round 3.746 to the nearest hundredth.',['3.75'],'Look at the thousandths digit. It is 6, which is 5 or more, so the hundredths digit goes up: 3.74 becomes 3.75.',mA_SRC_D+'rounding decimals'),
 slider('Slide to the whole number that 5.8 rounds to.',{min:0,max:10,step:1,unit:''},6,0,'The tenths digit is 8, which is 5 or more, so we round up to the next whole number: 6.',mA_SRC_D+'rounding decimals'),
 spot('Find the mistake and tap it.','0.5 × 10 = [[0.50|5]]','Multiplying by 10 moves the digits one place to the left, so 0.5 becomes 5. Putting a zero at the end (0.50) does not change the value at all.',mA_SRC_D+'multiply decimals by 10 and 100'),
 typed('Work out 0.45 × 100.',['45'],'Multiplying by 100 moves every digit two places to the left: 0.45 becomes 45.',mA_SRC_D+'multiply decimals by 10 and 100'),
 mc('Write 60/1000 as a decimal.','0.06',['0.6','0.006','6.0'],'1000 thousandths make one whole, and 10 thousandths make one hundredth. So 60 thousandths are 6 hundredths, which is 0.06.',mA_SRC_D+'adding decimals'),
 typed('Work out 32.723 + 60/1000.',['32.783'],'60/1000 is 0.06, which is 6 hundredths. Add it to the hundredths digit: 32.723 + 0.06 = 32.783.',mA_SRC_D+'adding decimals'),
 typed('Work out 4.65 + 2.7. Line up the decimal points.',['7.35'],'Write 2.7 as 2.70 and add column by column: 5 + 0 = 5, 6 + 7 = 13 (carry 1), 4 + 2 + 1 = 7. The answer is 7.35.',mA_SRC_D+'adding decimals'),
 scramble('The first place to the right of the decimal point.','tenths','Tenths: the first place after the decimal point. 0.1 is one tenth.',mA_SRC_D+'decimal place value')
]},

{id:'m-number', ico:'🧮', name:'Number Toolkit', blurb:'Order of operations, factors, multiples, square and cube numbers', col:'#60a5fa', Q:[
 spot('Find the mistake and tap it.','To work out 5 + 2 × 3, multiply first, so the answer is [[21|11]].','Multiplication comes before addition. First 2 × 3 = 6, then 5 + 6 = 11. Adding first would give 21, which is wrong.',mA_SRC_D+'order of operations'),
 slider('Slide to the answer of 4 + 6 × 3.',{min:0,max:40,step:1,unit:''},22,0,'Multiply first: 6 × 3 = 18. Then add: 4 + 18 = 22.',mA_SRC_D+'order of operations'),
 order('Order of operations: put the steps in the order you do them.',['Do the calculations in brackets','Do multiplication and division, from left to right','Do addition and subtraction, from left to right'],'Brackets first, then multiplication and division, then addition and subtraction.',mA_SRC_D+'order of operations'),
 mc('Work out 20 − (4 + 3) × 2.','6',['26','13','22'],'Brackets first: 4 + 3 = 7. Then multiply: 7 × 2 = 14. Last, subtract: 20 − 14 = 6.',mA_SRC_D+'order of operations'),
 typed('(calculator allowed) Work out 125 + 15 × 12.',['305'],'Multiply first: 15 × 12 = 180. Then add: 125 + 180 = 305.',mA_SRC_D+'order of operations'),
 mc('Which of these numbers is a factor of 30?','6',['4','7','9'],'A factor divides exactly into the number. 30 ÷ 6 = 5 with nothing left over. 4, 7 and 9 all leave a remainder.',mA_SRC_D+'identify factors'),
 multi('Tick ALL the factors of 12.',['1','2','3','4','6','12'],['5','8','9'],'Factors of 12 come in pairs that multiply to 12: 1 × 12, 2 × 6 and 3 × 4. So the factors are 1, 2, 3, 4, 6 and 12.',mA_SRC_D+'identify factors'),
 mc('Draw a ring around a common factor of 4 and 6. Which number in the list is it? 2, 4, 6, 22, 24, 26, 32, 34, 36','2',['4','6','24'],'The factors of 4 are 1, 2 and 4. The factors of 6 are 1, 2, 3 and 6. Only 2 is in both lists and in the list of numbers. 24 is a multiple of 4 and 6, not a factor.',mA_SRC_D+'identify factors'),
 mc('Draw a ring around a common multiple of 3 and 7. Which number in the list is it? 1, 3, 7, 11, 13, 17, 21, 23, 27','21',['27','7','13'],'21 is in the 3 times table (3 × 7) and in the 7 times table (7 × 3). 27 is only in the 3 times table, and 7 is only in the 7 times table.',mA_SRC_D+'common multiples'),
 odd('Odd one out! Three numbers are factors of 20. Tap the number that is not.','8',['2','4','5'],'2, 4 and 5 all divide exactly into 20. 20 ÷ 8 = 2 with 4 left over, so 8 is not a factor of 20.',mA_SRC_D+'identify factors'),
 sort('Venn diagram task: put each number in the correct group.',['Square number only','Cube number only','Both square and cube','Neither'],[
   ['16',0],['25',0],['8',1],['27',1],['1',2],['64',2],['5',3],['10',3]],
   'Square numbers: 1, 4, 9, 16, 25, 36, 49, 64. Cube numbers: 1, 8, 27, 64. 1 and 64 are in both lists. 5 and 10 are in neither list.',mA_SRC_D+'square numbers and cube numbers'),
 tf('The number 1 is both a square number and a cube number.',true,'1 × 1 = 1 and 1 × 1 × 1 = 1, so 1 is a square number and a cube number. 64 is another number that is both (8 × 8 and 4 × 4 × 4).',mA_SRC_D+'square numbers and cube numbers'),
 tf('16 is a cube number.',false,'16 is a square number (4 × 4), but no whole number multiplied by itself three times gives 16. 2 × 2 × 2 = 8 and 3 × 3 × 3 = 27.',mA_SRC_D+'square numbers and cube numbers'),
 typed('Work out 4 × 4 × 4.',['64'],'4 × 4 = 16 and 16 × 4 = 64. So 64 is the cube number of 4.',mA_SRC_D+'square numbers and cube numbers'),
 mA_NG(match('Match each word to its meaning.',[
   ['Factor','A number that divides exactly into another number'],
   ['Multiple','A number you land on when you count in steps of another number'],
   ['Square number','A whole number multiplied by itself, for example 5 × 5'],
   ['Cube number','A whole number multiplied by itself and then by itself again, for example 2 × 2 × 2']],
   'Factors divide into a number. Multiples are in its times table. A square is a number times itself; a cube is a number times itself, then times itself again.',mA_SRC_D+'factors, multiples, square and cube numbers'),'factor','multiple','square number','cube number'),
 scramble('A number you land on when you count in steps of 7: 7, 14, 21, 28...','multiple','Multiples of 7 are the numbers in the 7 times table: 7, 14, 21, 28 and so on.',mA_SRC_D+'common multiples')
]}
];

const VOC_mA=[
 ['Decimal','десятичная дробь','A number with a decimal point, like 3.75'],['Decimal point','десятичная запятая (точка)','Separates whole numbers from parts of one'],
 ['Place value','разряд (значение цифры по ее месту)','The value of a digit depends on its place'],['Digit','цифра','0 to 9'],
 ['Tenths','десятые доли','0.1 is one tenth'],['Hundredths','сотые доли','0.01 is one hundredth'],['Thousandths','тысячные доли','0.001 is one thousandth'],
 ['Round','округлять','To the nearest whole, tenth or hundredth'],['Nearest','ближайший',''],
 ['Order of operations','порядок действий','Brackets, then multiply and divide, then add and subtract'],['Brackets','скобки',''],
 ['Factor','делитель (множитель)','Divides exactly into a number'],['Multiple','кратное','A number in the times table'],
 ['Common factor','общий делитель','A factor of both numbers'],['Common multiple','общее кратное','A multiple of both numbers'],
 ['Square number','квадрат числа','A number times itself, like 5 × 5 = 25'],['Cube number','куб числа','2 × 2 × 2 = 8'],
 ['Quotient','частное','The answer to a division']
];

const GLO_mA=[
 ['number','число'],['whole number','целое число'],['whole','целое'],['digit','цифра'],['value','значение (величина)'],['place','разряд (место)'],['decimal|decimals','десятичная дробь'],['decimal point','десятичная запятая (точка)'],
 ['tenth|tenths','десятые доли'],['hundredth|hundredths','сотые доли'],['thousandth|thousandths','тысячные доли'],['ones','единицы'],
 ['write it as','запиши в виде'],['work out|calculate','вычисли'],['answer','ответ'],['correct','правильный'],
 ['round|rounded|rounding|rounds','округлять'],['nearest','ближайший'],['gives','дает'],
 ['smallest','наименьший'],['largest|greatest','наибольший'],['greater','больше'],['equal','равны (равный)'],['put','расположи (положи)'],['order','порядок (расположить по порядку)'],['these','эти'],
 ['multiply|multiplied|multiplying|multiplication','умножать (умножение)'],['divide|divides|division','делить (деление)'],['add|addition|adding','складывать (сложение)'],['subtract|subtraction','вычитать (вычитание)'],
 ['exactly','нацело (точно)'],['itself','само на себя'],['brackets','скобки'],['operations','действия'],['calculations','вычисления'],['steps','шаги'],['left to right','слева направо'],['first','сначала (первый)'],['then','затем'],['last','в конце (последний)'],
 ['line up','выровняй (расположи в столбик)'],['column','столбик'],['carry','переносить (в уме)'],
 ['find','найди'],['mistake','ошибка'],['tap','нажми'],['odd one out','найди лишнее'],['tick','отметь галочкой'],['group','группа'],['draw a ring around','обведи кружком'],['list','список'],
 ['slide','передвинь ползунок'],['match','соедини'],['meaning','значение (смысл)'],['example','пример'],['count','считай'],['land on','попадать на'],
 ['factor|factors','делитель (множитель)'],['multiple|multiples','кратное'],['common factor','общий делитель'],['common multiple','общее кратное'],['common','общий'],
 ['square number|square numbers','квадрат числа'],['cube number|cube numbers','куб числа'],['square','квадрат'],['cube','куб'],
 ['only','только'],['both','оба'],['neither','ни то, ни другое'],['diagram','схема (диаграмма)'],['venn','диаграмма Венна'],['task','задание'],
 ['calculator allowed','можно калькулятор'],['calculator','калькулятор'],['each','каждый'],['another','другой'],['times table','таблица умножения'],
 ['first place','первый разряд'],['right','справа'],['point','точка (запятая)'],['pair','пара'],['whole numbers','целые числа']
];

TOP_mA[0].sheet='<h3>Place value</h3><table><tr><th>Digit</th><th>Place</th><th>Value</th></tr><tr><td>3</td><td>ones</td><td>3</td></tr><tr><td>9</td><td>tenths</td><td>0.9</td></tr><tr><td>1</td><td>hundredths</td><td>0.01</td></tr><tr><td>7</td><td>thousandths</td><td>0.007</td></tr></table><p>The number 3.917 = 3 + 0.9 + 0.01 + 0.007. Each place is 10 times smaller than the one on its left.</p><h3>Comparing</h3><ul><li>Compare digit by digit from the left: ones, then tenths, then hundredths.</li><li>0.8 &gt; 0.79 because 8 tenths is more than 7 tenths and a bit.</li><li>A zero at the end does not change the value: 2.30 = 2.3.</li></ul><h3>Rounding</h3><ul><li>Look at the digit to the right of the place you are rounding to.</li><li>5 or more: round up. 4 or less: leave it.</li><li>2.37 to the nearest tenth = 2.4. 8.142 to the nearest hundredth = 8.14. 7.6 to the nearest whole = 8.</li></ul><h3>&times; 10 and &times; 100</h3><ul><li>&times; 10: every digit moves 1 place left. 3.7 &times; 10 = 37.</li><li>&times; 100: every digit moves 2 places left. 0.28 &times; 100 = 28.</li></ul><h3>Adding decimals</h3><ul><li>Line up the decimal points. 3.45 + 1.8 = 3.45 + 1.80 = 5.25.</li><li>70/1000 = 0.07, so 12.514 + 70/1000 = 12.584.</li></ul>';
TOP_mA[1].sheet='<h3>Order of operations</h3><ol><li>Brackets</li><li>Multiply and divide (left to right)</li><li>Add and subtract (left to right)</li></ol><p>7 + 2 &times; 5 = 7 + 10 = 17. 30 - (2 + 3) &times; 4 = 30 - 20 = 10.</p><h3>Factors and multiples</h3><ul><li><b>Factor:</b> divides exactly into the number. Factors of 18: 1, 2, 3, 6, 9, 18.</li><li><b>Multiple:</b> in the times table. Multiples of 6: 6, 12, 18, 24...</li><li><b>Common factor</b> of 8 and 12: 4 (and 1, 2). <b>Common multiple</b> of 2 and 5: 10.</li></ul><h3>Square and cube numbers</h3><table><tr><th>Square (n &times; n)</th><td>1, 4, 9, 16, 25, 36, 49, 64</td></tr><tr><th>Cube (n &times; n &times; n)</th><td>1, 8, 27, 64</td></tr></table><p>In both lists: 1 and 64. Example: 36 is a square number (6 &times; 6) but not a cube number.</p>';

/* ===== fragment mB ===== */
/* Fragment mB: Maths - Mean & Mode, Angles & Quadrilaterals (Grade 5 / Cambridge Primary Stage 5).
   Source: Grade 5 Maths homework pack (named topics only); no slide set exists for Maths. */

const mB_S1="Grade 5 Maths homework - Mean and mode";
const mB_S2="Grade 5 Maths homework - Mean: find the missing number";
const mB_S3="Grade 5 Maths homework - missing angle in a triangle";
const mB_S4="Grade 5 Maths homework - Draw quadrilaterals";
const mB_S5="Grade 5 Maths homework - two equilateral triangles joined";

/* ---------- pictures ---------- */
const mB_svg=function(s){return "data:image/svg+xml;utf8,"+encodeURIComponent(s)};
const mB_img=function(q,i){return Object.assign(q,{img:i})};

/* table: goals scored in 7 games (2,3,2,0,2,1,3 -> mode 2) */
const mB_GOALS=[2,3,2,0,2,1,3];
const mB_goalsFig=function(){
  var o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 112" font-family="Arial,Helvetica,sans-serif" font-size="18" text-anchor="middle">';
  o+='<rect width="600" height="112" rx="12" fill="#fff8e7"/>';
  for(var r=0;r<2;r++){
    var y=10+r*46;
    o+='<rect x="10" y="'+y+'" width="90" height="46" fill="'+(r?"#ffe3a8":"#cfe3ff")+'" stroke="#26224a" stroke-width="2"/>';
    o+='<text x="55" y="'+(y+29)+'" font-weight="700" fill="#26224a">'+(r?"Goals":"Game")+'</text>';
    for(var c=0;c<7;c++){
      var x=100+c*70;
      o+='<rect x="'+x+'" y="'+y+'" width="70" height="46" fill="'+(r?"#fffdf5":"#eaf2ff")+'" stroke="#26224a" stroke-width="2"/>';
      o+='<text x="'+(x+35)+'" y="'+(y+29)+'" font-weight="'+(r?"700":"400")+'" fill="#26224a">'+(r?mB_GOALS[c]:(c+1))+'</text>';
    }
  }
  return o+'</svg>';
};

/* triangle with two known base angles; labels [left, right, top]; "?" is the missing one */
const mB_triFig=function(a,b,L){
  var D=Math.PI/180,base=260,AC=base*Math.sin(b*D)/Math.sin((a+b)*D);
  var P=[[0,0],[base,0],[AC*Math.cos(a*D),-AC*Math.sin(a*D)]];
  var minX=Math.min(P[0][0],P[1][0],P[2][0]),maxX=Math.max(P[0][0],P[1][0],P[2][0]),minY=P[2][1];
  var padX=64,top=62,bot=78;
  P=P.map(function(p){return [p[0]-minX+padX,p[1]-minY+top]});
  var W=Math.round(maxX-minX+2*padX),H=Math.round(-minY+top+bot);
  var g=[(P[0][0]+P[1][0]+P[2][0])/3,(P[0][1]+P[1][1]+P[2][1])/3];
  var o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+W+' '+H+'" font-family="Arial,Helvetica,sans-serif" text-anchor="middle">';
  o+='<rect width="'+W+'" height="'+H+'" rx="12" fill="#fff8e7"/>';
  o+='<polygon points="'+P.map(function(p){return p[0].toFixed(1)+","+p[1].toFixed(1)}).join(" ")+'" fill="#e8f0ff" stroke="#26224a" stroke-width="3" stroke-linejoin="round"/>';
  for(var i=0;i<3;i++){
    var V=P[i],A=P[(i+1)%3],B=P[(i+2)%3],ux=A[0]-V[0],uy=A[1]-V[1],ul=Math.hypot(ux,uy),vx=B[0]-V[0],vy=B[1]-V[1],vl=Math.hypot(vx,vy);
    ux/=ul;uy/=ul;vx/=vl;vy/=vl;
    var r=30,sw=(ux*vy-uy*vx)>0?1:0,q=(L[i]==="?");
    o+='<path d="M'+(V[0]+r*ux).toFixed(1)+' '+(V[1]+r*uy).toFixed(1)+' A'+r+' '+r+' 0 0 '+sw+' '+(V[0]+r*vx).toFixed(1)+' '+(V[1]+r*vy).toFixed(1)+'" fill="none" stroke="'+(q?"#e0533d":"#26224a")+'" stroke-width="3"/>';
    var dx=V[0]-g[0],dy=V[1]-g[1],dl=Math.hypot(dx,dy);
    o+='<text x="'+(V[0]+dx/dl*40).toFixed(1)+'" y="'+(V[1]+dy/dl*40+7).toFixed(1)+'" font-size="22" font-weight="700" fill="'+(q?"#e0533d":"#26224a")+'">'+L[i]+'</text>';
  }
  o+='<text x="'+(W/2)+'" y="'+(H-12)+'" font-size="16" fill="#555">Not drawn to scale</text>';
  return o+'</svg>';
};
const mB_TRI1=mB_svg(mB_triFig(76,22,["76°","22°","?"]));
const mB_TRI2=mB_svg(mB_triFig(48,67,["48°","67°","?"]));

/* two equilateral triangles joined along a side (dashed line = the join) */
const mB_RHOMB=mB_svg('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 280">'
 +'<rect width="260" height="280" rx="12" fill="#fff8e7"/>'
 +'<polygon points="130,19 200,140 60,140" fill="#cfe3ff" stroke="#26224a" stroke-width="3" stroke-linejoin="round"/>'
 +'<polygon points="60,140 200,140 130,261" fill="#ffe3a8" stroke="#26224a" stroke-width="3" stroke-linejoin="round"/>'
 +'<line x1="60" y1="140" x2="200" y2="140" stroke="#26224a" stroke-width="3" stroke-dasharray="8 6"/></svg>');

/* the six quadrilaterals (no names drawn) */
const mB_QUAD_SVG={vb:"0 0 600 340",body:'<rect width="600" height="340" rx="16" fill="#fff8e7"/>'
 +'<g stroke="#26224a" stroke-width="3" stroke-linejoin="round">'
 +'<rect x="60" y="45" width="90" height="90" fill="#ffd9cc"/>'
 +'<rect x="225" y="60" width="160" height="60" fill="#d6edff"/>'
 +'<polygon points="430,130 550,130 590,60 470,60" fill="#e3d9ff"/>'
 +'<polygon points="105,190 185,250 105,310 25,250" fill="#d4f5d0"/>'
 +'<polygon points="235,305 375,305 345,195 265,195" fill="#ffe9a8"/>'
 +'<polygon points="510,185 550,235 510,320 470,235" fill="#ffd0e6"/></g>'};
const mB_QUAD_PTS=[{n:"Square",x:105,y:90},{n:"Rectangle",x:305,y:90},{n:"Parallelogram",x:510,y:95},{n:"Rhombus",x:105,y:250},{n:"Trapezium",x:305,y:250},{n:"Kite",x:510,y:240}];

/* ---------- topics ---------- */
const TOP_mB=[

{id:"m-data",ico:"📊",name:"Mean & Mode",blurb:"Mean, mode and finding a missing number (calculator allowed)",col:"#f59e0b",Q:[
 mc("What does the mode of a list of numbers tell you?","The most frequent value",["The biggest value in the whole list","All the values added together","The number of values in the list"],"The mode is the value that appears most often. The mean is different: you add up the values and divide by how many there are.",mB_S1),
 mB_img(mc("Look at the table. What is the mode of the goals scored?","2",["3","13","1"],"Read the table as a list: 2, 3, 2, 0, 2, 1, 3. The number 2 appears three times, 3 appears twice, and 0 and 1 once each. So the mode is 2 (13 is only the total).",mB_S1),mB_svg(mB_goalsFig())),
 mc("Which list has TWO modes?","3, 3, 5, 8, 8, 9",["2, 4, 4, 7, 9, 10","1, 2, 3, 4, 5, 6","6, 6, 6, 8, 8, 9"],"In 3, 3, 5, 8, 8, 9 the values 3 and 8 both appear twice, more than any other value, so there are two modes. The list 2, 4, 4, 7, 9, 10 has one mode (4), 1, 2, 3, 4, 5, 6 has none, and 6, 6, 6, 8, 8, 9 has one mode (6).",mB_S1),
 tf("To find the mean of a list, you add up all the values and divide the total by how many values there are.",true,"Yes. For example, the mean of 4, 6 and 8: 4 + 6 + 8 = 18, and 18 ÷ 3 = 6.",mB_S1),
 tf("Five numbers have a total of 40, so their mean is 5.",false,"No. The mean is the total divided by how many numbers there are: 40 ÷ 5 = 8, not 5.",mB_S1),
 tf("A list of numbers can only ever have one mode.",false,"No. In 2, 2, 5, 5 both 2 and 5 appear twice, so there are two modes. A list can also have no mode at all.",mB_S1),
 tf("In the list 3, 6, 8, 9 every value appears just once, so the list has no mode.",true,"Right. No value appears more often than the others, so there is no mode.",mB_S1),
 typed("Find the mean of 4, 6, 9 and 13.",["8"],"4 + 6 + 9 + 13 = 32. There are 4 numbers, so 32 ÷ 4 = 8.",mB_S1),
 typed("Five ribbons are 4.2 m, 5.8 m, 3.5 m, 6.1 m and 4.4 m long. Find the mean length in metres. (calculator allowed)",["4.8","4.80","4.8 m","4.8m","4.8 metres","4.8 metre","4.8 meters"],"Add the lengths: 4.2 + 5.8 + 3.5 + 6.1 + 4.4 = 24.0 m. There are 5 ribbons, so 24 ÷ 5 = 4.8 m.",mB_S1,"m"),
 typed("The mean of four numbers is 9. Three of the numbers are 5, 8 and 12. What is the fourth number?",["11"],"Four numbers with a mean of 9 have a total of 4 × 9 = 36. The three known numbers add up to 5 + 8 + 12 = 25. The missing number is 36 - 25 = 11.",mB_S2),
 mc("The mean of three numbers is 10. Two of them are 4 and 9. What is the third number?","17",["13","21","10"],"Three numbers with a mean of 10 have a total of 3 × 10 = 30. The two known numbers add up to 4 + 9 = 13. The third number is 30 - 13 = 17.",mB_S2),
 slider("Five numbers have a mean of 6. What is the total of the five numbers?",{min:10,max:60,step:5,unit:""},30,0,"The mean is the total divided by how many numbers there are, so the total is the mean times how many: 6 × 5 = 30. This is the first step when you look for a missing number.",mB_S2),
 order("Find the mode of a list: put the steps in order.",["Write down all the values in the list","Count how many times each value appears","Find the value that appears most often","That value is the mode"],"First collect the values, then count each one, then pick the value with the biggest count. That value is the mode.",mB_S1),
 fill("To find the mean, add up all the values to get the ___ and then ___ it by how many values there are.",["total","divide"],["total","divide","multiply","subtract"],"The mean is the total divided by how many values there are. Multiplying is used the other way round, to get a total from a mean.",mB_S1),
 spot("Find the mistake and tap it.","The mean of 4, 6 and 8 is [[18|6]].","4 + 6 + 8 = 18 is only the total. The mean is the total divided by 3: 18 ÷ 3 = 6.",mB_S1),
 odd("Odd one out! Three pairs of numbers have a mean of 10. Tap the pair with a different mean.","7 and 12",["8 and 12","5 and 15","9 and 11"],"The pairs 8 and 12, 5 and 15, and 9 and 11 all add up to 20, and 20 ÷ 2 = 10. But 7 + 12 = 19, and 19 ÷ 2 = 9.5.",mB_S1)
],sheet:`<h3>Mode</h3><ul><li>The <b>mode</b> is the value that appears <b>most often</b>.</li><li>A list can have <b>two modes</b> (2, 2, 5, 5) or <b>no mode</b> (3, 6, 8, 9: every value appears once).</li><li>Reading a table: write the values as a list first, then count.</li></ul>
<h3>Mean</h3><ul><li>Add up all the values to get the <b>total</b>.</li><li><b>Divide</b> the total by how many values there are.</li><li>Example: 4, 6, 8 → 4 + 6 + 8 = 18 → 18 ÷ 3 = <b>6</b>.</li><li>Money and lengths work the same way: 24.0 m ÷ 5 = 4.8 m.</li></ul>
<h3>Mean: find the missing number</h3><table><tr><th>Step</th><th>Example: mean 10, three numbers, two are 4 and 9</th></tr>
<tr><td>1. Total = mean × how many</td><td>3 × 10 = 30</td></tr>
<tr><td>2. Add the numbers you know</td><td>4 + 9 = 13</td></tr>
<tr><td>3. Missing = total - known</td><td>30 - 13 = <b>17</b></td></tr></table>`},

{id:"m-shapes",ico:"📐",name:"Angles & Quadrilaterals",blurb:"Angles in a triangle, quadrilateral types, shapes made from triangles",col:"#a78bfa",Q:[
 mB_img(typed("Calculate the size of the missing angle.",["82","82°","82 °","82 degrees"],"The three angles of a triangle add up to 180°. 76° + 22° = 98°, and 180° - 98° = 82°.",mB_S3,"°"),mB_TRI1),
 mB_img(typed("Calculate the size of the missing angle.",["65","65°","65 °","65 degrees"],"The three angles of a triangle add up to 180°. 48° + 67° = 115°, and 180° - 115° = 65°.",mB_S3,"°"),mB_TRI2),
 mc("The three angles of any triangle add up to...","180°",["90°","270°","360° (a full turn)"],"In every triangle the three angles add up to 180°. That is why you can find a missing angle: take the two known angles away from 180°.",mB_S3),
 tf("A triangle has one angle of 90° and one angle of 35°, so its third angle is 55°.",true,"90° + 35° = 125°, and 180° - 125° = 55°.",mB_S3),
 tf("Each angle of an equilateral triangle is 90°.",false,"No. Three angles of 90° would add up to 270°, but a triangle has only 180°. The three equal angles are 180° ÷ 3 = 60° each.",mB_S5),
 slider("All three angles of an equilateral triangle are equal. How big is one angle?",{min:0,max:120,step:10,unit:"°"},60,0,"The three angles add up to 180° and they are equal, so each is 180° ÷ 3 = 60°.",mB_S5),
 mB_img(typed("Two equilateral triangles are joined along a side to make a quadrilateral. Write the most exact name of the shape (not just quadrilateral or parallelogram).",["rhombus","a rhombus","the rhombus"],"Two equilateral triangles joined along a side make a rhombus: all four sides are equal, but the corners are not right angles. (A rhombus is a special parallelogram, so give the most exact name.)",mB_S5),mB_RHOMB),
 label("Name each quadrilateral! Choose the most exact name for each number (each name is used once).",mB_QUAD_SVG,mB_QUAD_PTS,"Square: four equal sides and four right angles. Rectangle: four right angles, long and short sides. Parallelogram: two pairs of parallel sides, slanted. Rhombus: four equal sides, no right angles. Trapezium: one pair of parallel sides. Kite: two pairs of equal sides next to each other.",mB_S4),
 hotspot("Tap the quadrilateral that has exactly one pair of parallel sides.",mB_QUAD_SVG,mB_QUAD_PTS,"Trapezium","The trapezium has just one pair of parallel sides (its top and bottom). The square, rectangle, parallelogram and rhombus have two pairs, and the kite has none.",mB_S4),
 sort("Sort the quadrilaterals by their parallel sides.",["No pair of parallel sides","One pair of parallel sides","Two pairs of parallel sides"],[["Kite",0],["Trapezium",1],["Square",2],["Rectangle",2],["Parallelogram",2],["Rhombus",2]],"The kite has no parallel sides, the trapezium has exactly one pair, and the square, rectangle, parallelogram and rhombus have two pairs (opposite sides are parallel).",mB_S4),
 match("Match each quadrilateral to its description.",[["Square","Four equal sides and four right angles"],["Rhombus","Four equal sides, but no right angles"],["Trapezium","Exactly one pair of parallel sides"],["Kite","Two pairs of equal sides that sit next to each other"],["Parallelogram","Opposite sides are parallel and equal, but the four sides are not all equal"]],"Square and rhombus both have four equal sides, but only the square has right angles. The trapezium has one pair of parallel sides, the kite has two pairs of equal sides next to each other, and the parallelogram has parallel, equal opposite sides.",mB_S4),
 multi("Tick ALL the quadrilaterals that have two pairs of parallel sides.",["Square","Rectangle","Parallelogram","Rhombus"],["Trapezium","Kite"],"The square, rectangle, parallelogram and rhombus all have two pairs of parallel sides. The trapezium has only one pair and the kite has none.",mB_S4),
 odd("Odd one out! Three of these quadrilaterals have two pairs of parallel sides. Tap the one that does not.","Kite",["Rectangle","Parallelogram","Rhombus"],"A kite has no parallel sides. The rectangle, parallelogram and rhombus each have two pairs of parallel sides.",mB_S4),
 odd("Odd one out! Three sets of angles can make a triangle (they add up to 180°). Tap the set that cannot.","80°, 70°, 40°",["60°, 60°, 60°","90°, 45°, 45°","100°, 50°, 30°"],"60 + 60 + 60 = 180, 90 + 45 + 45 = 180 and 100 + 50 + 30 = 180. But 80 + 70 + 40 = 190, so those three angles cannot make a triangle.",mB_S3),
 spot("Find the mistake and tap it.","A [[trapezium|kite]] has two pairs of equal sides that sit next to each other.","A kite has two pairs of equal sides next to each other and no parallel sides. A trapezium is the quadrilateral with one pair of parallel sides.",mB_S4),
 scramble("A triangle with three sides of the same length and three angles of 60°.","equilateral","Equilateral: all three sides are equal, and all three angles are 60°.",mB_S5)
],sheet:`<h3>Angles in a triangle</h3><ul><li>The three angles of a triangle add up to <b>180°</b>.</li><li>Missing angle = 180° - the two angles you know. Example: 39° + 84° = 123°, so 180° - 123° = <b>57°</b>.</li><li><b>Equilateral</b> triangle: three equal sides and three equal angles of <b>60°</b> (180° ÷ 3).</li><li>Two equilateral triangles joined along a side make a <b>rhombus</b>.</li></ul>
<h3>Quadrilaterals (four straight sides)</h3><table><tr><th>Shape</th><th>Equal sides</th><th>Parallel sides</th><th>Four right angles?</th></tr>
<tr><td>Square</td><td>all 4</td><td>2 pairs</td><td>yes</td></tr>
<tr><td>Rectangle</td><td>opposite sides</td><td>2 pairs</td><td>yes</td></tr>
<tr><td>Parallelogram</td><td>opposite sides</td><td>2 pairs</td><td>no</td></tr>
<tr><td>Rhombus</td><td>all 4</td><td>2 pairs</td><td>no</td></tr>
<tr><td>Trapezium</td><td>-</td><td>1 pair</td><td>no</td></tr>
<tr><td>Kite</td><td>2 pairs next to each other</td><td>none</td><td>no</td></tr></table>`}
];

/* ---------- vocabulary (en / ru / note) ---------- */
const VOC_mB=[
 ["Mean","среднее арифметическое","Total divided by how many values"],
 ["Mode","мода","The value that appears most often"],
 ["Total","сумма (общий итог)","All the values added together"],
 ["Value","значение","One number in a list or a table"],
 ["Quadrilateral","четырехугольник","A flat shape with four straight sides"],
 ["Square","квадрат","Four equal sides and four right angles"],
 ["Rectangle","прямоугольник","Four right angles"],
 ["Parallelogram","параллелограмм","Opposite sides are parallel and equal"],
 ["Rhombus","ромб","Four equal sides"],
 ["Trapezium","трапеция","One pair of parallel sides"],
 ["Kite","дельтоид","Two pairs of equal sides next to each other"],
 ["Equilateral triangle","равносторонний треугольник","Three equal sides, three angles of 60°"],
 ["Parallel","параллельный","Always the same distance apart"],
 ["Right angle","прямой угол","An angle of 90°"],
 ["Angle / Degree","угол / градус","Angles are measured in degrees (°)"]
];

/* ---------- glossary (en|forms -> ru) ---------- */
const GLO_mB=[
 ["equilateral","равносторонний"],["triangle","треугольник"],["angle","угол"],["degree","градус"],
 ["list","список"],["number","число"],["data","данные"],["table","таблица"],["game","игра, матч"],["score","забивать (гол)"],["goal","гол"],
 ["add","складывать"],["add up|adds up|adding up|added up","складывать, давать в сумме"],["added together|add together","сложить вместе"],["together","вместе"],
 ["divide","делить"],["multiply","умножать"],["subtract","вычитать"],["take away","вычитать, отнимать"],
 ["appear","встречаться (появляться)"],["often","часто"],["frequent","частый (часто встречающийся)"],["biggest","самый большой"],["whole","весь, целый"],
 ["only","только"],["ever","когда-либо"],["every","каждый"],["just once","только один раз"],["twice","два раза"],
 ["look at","посмотри на"],["read","читать"],["count","считать"],["collect","собрать"],
 ["missing","пропущенный, недостающий"],["known","известный"],["third","третий"],["fourth","четвертый"],["first","сначала, первый"],["step","шаг"],
 ["calculator","калькулятор"],["allowed","разрешен"],["calculate","вычислить"],["find","найти"],["size","размер, величина"],
 ["ribbon","лента"],["length","длина"],["metre|meter","метр"],["long","длинный (длиной)"],
 ["not drawn to scale","чертеж не в масштабе"],["scale","масштаб"],
 ["pair","пара"],["set","набор"],["different","разный, другой"],["same","одинаковый"],["equal","равный"],["opposite","противоположный"],
 ["side","сторона"],["corner","угол (вершина)"],["shape","фигура"],["straight","прямой (ровный)"],["flat","плоский"],["slanted","наклонный"],
 ["exactly","ровно"],["next to each other","рядом друг с другом"],["next to","рядом с"],["sit","находиться"],
 ["join","соединять"],["make|made","образовывать, получать"],["name","название, назвать"],["write","написать"],["choose","выбрать"],
 ["correct","правильный"],["mistake","ошибка"],["tap","нажми"],["tick","отметить галочкой"],["odd one out","найди лишнее"],["sort","разложить по группам"],["match","сопоставить"],
 ["put the steps in order","расставь шаги по порядку"],["order","порядок"],["tell","сказать, показать"]
];


/* ===== exam practice: english ===== */
const en_s=k=>'Exam style: '+k+' (Cambridge Primary Stage 6)';
const en_ng=(q,...t)=>Object.assign(q,{ng:(q.ng||[]).concat(t)});
const en_TECH=['simile','metaphor','personification','alliteration','onomatopoeia','rhetorical question'];
const en_LINK=['however','therefore','for example','in addition','meanwhile'];

const en_T1={title:"Behind the Green Gate", text:`The ball sailed over the wall in a long, lazy curve. For a moment it seemed to hang there, as if it were making up its mind, and then it dropped into Mrs Abara's garden.

'You kicked it,' said Priya at once. 'So you fetch it.'

Owen stared at the green gate. Everyone on Cobble Lane had a story about the woman who lived behind it. She shouted at pigeons. She never opened her curtains. The twins at number six said that she kept every ball that landed on her side, and sliced them up with a bread knife.

He pushed the gate. It groaned like an old man getting out of a chair.

The garden was not what he had expected. Tomato plants stood in neat rows, each one tied to a cane with a strip of blue cloth. Among them knelt Mrs Abara, so still that he almost walked into her.

'Stop!' she snapped. 'Your foot.'

Owen froze, one trainer in the air. Beneath it, a tiny seedling trembled.

'I'm sorry,' he mumbled. 'I only came for the ball.'

She looked at him for a long time. Then she reached under a bench and dragged out a wooden crate. It was crammed with balls: red ones, striped ones, an old leather one that had turned grey. Not one of them had been cut.

'People throw them over,' she said quietly. 'Nobody knocks.'`};

const en_T2={title:"The Tapping", text:`At a quarter to midnight, the tapping began.

Tap. Tap-tap. Tap.

I lay as stiff as a plank and listened. The storm had cut the power an hour earlier, and the house was drowned in darkness. Dad was still at the harbour, helping to tie down the boats. Gran was asleep downstairs, and Gran could sleep through a brass band.

Tap-tap.

It was coming from the kitchen door.

I told myself it was a branch. I told myself this very firmly, twice. The trouble was that we did not have a tree.

I picked up the torch and crept down the stairs, missing out the third step because it squeals. The torch beam wobbled over the coats, which hung in a silent row like people waiting for a bus. The kitchen smelled of wet dog, although we did not have a dog either.

Something scraped against the wood.

'Who's there?' My voice came out thin and high. No answer. There was only the howling wind, and then three more taps, slower this time, as if our visitor was growing tired.

My fingers were useless. It took me three attempts to turn the key. I dragged the door open, and the rain flung itself at my face.

On the step stood a goat. A chewed rope trailed behind her, and she looked at me as though I had kept her waiting.`};

const en_T3={title:"From Old Paper to New", text:`<b>Collecting and sorting</b>
Every day, huge amounts of used paper are collected from homes, shops and offices. The paper is taken to a recycling centre, where it is sorted into types. Cardboard, newspaper and white office paper are kept apart because they are used to make different products.

<b>Making pulp</b>
Next, the paper is chopped up and mixed with warm water in an enormous tank. This turns it into a grey, soupy mixture called pulp. The pulp is passed through screens, which catch staples, plastic and other rubbish. Ink is then removed. In many paper mills, air is bubbled through the mixture so that the ink sticks to the bubbles and floats to the top.

<b>Pressing and drying</b>
After that, the clean pulp is sprayed onto a wide, moving net. Water drains away through the holes, leaving a thin, damp sheet. Heated rollers press and dry the sheet. Finally, it is wound onto giant reels.

<b>Not for ever</b>
Paper is made of tiny threads called fibres. Each time it is recycled, these fibres become shorter and weaker. For this reason, fresh fibres from trees are often added to the mix.`};

const en_T4={title:"Don't Bin It - Bring It!", text:`Is your favourite toy broken? Has your bike chain given up? Come to the Brookside Repair Cafe and give your things a second life!

Our friendly volunteers are the best fixers in town. While you sip a creamy hot chocolate, they will show you how to patch, glue and tighten. Last year, our team repaired 340 items. That is 340 things saved from the rubbish heap!

Why throw away a perfectly good lamp? Why spend your pocket money on a new one? Repairing is cheaper, cleverer and far more fun.

'I thought my radio was dead,' says Mrs Lund, aged 72. 'Now it sings to me every morning!'

You will find us in the Old Library on Mill Road on the first Saturday of each month, from 10 am to 1 pm. Entry is free. Please bring only items that you can carry. Children under 12 must come with an adult.

Hurry along - your broken treasures are waiting!`};

/* ---------- Fiction 1 ---------- */
const en_F1=[
psg(en_T1,mc("Why did Priya say that Owen should fetch the ball?","He had kicked it",["He was the fastest runner of the two","Mrs Abara had asked for him by name","It was his turn to knock on doors"],"Look just after the ball lands: 'You kicked it ... So you fetch it.' For a 'why' question, find the reason next to the event.",en_s('finding a stated fact'))),
psg(en_T1,en_ng(mc("'For a moment it seemed to hang there, as if it were making up its mind.' Which technique gives the ball human thoughts?","personification",["alliteration","onomatopoeia","rhetorical question"],"A ball cannot make up its mind. Giving a thing human thoughts or actions is personification.",en_s('naming a language technique')),...en_TECH)),
psg(en_T1,multi("Tick the TWO things that people on Cobble Lane said about Mrs Abara.",["She shouted at pigeons","She cut up balls with a knife"],["She grew blue tomatoes","She chased the twins down the lane","She locked her gate every night"],"Find the part about the stories, then check each box against the words. Tick only what the text really says.",en_s('retrieving two details'))),
psg(en_T1,mc("'It groaned like an old man getting out of a chair.' What does this suggest about the gate?","It was old and creaked as it moved",["It had just been painted a bright new colour","It swung open quickly without making any sound","Someone hiding behind it was feeling very ill"],"In a comparison, ask what the two things share. A groan is a long, tired noise, so the gate creaks.",en_s('explaining the effect of a comparison'))),
psg(en_T1,mc("What do the neat rows and the strips of cloth suggest about Mrs Abara?","She takes great care of her plants",["She has not worked in the garden for years","She is getting ready to move to a new house","She wants the garden to look wild and untidy"],"The writer does not say it directly. Tidy rows and carefully tied plants are clues that she looks after them well.",en_s('making an inference from details'))),
psg(en_T1,mc("Why did Mrs Abara shout 'Stop!'?","Owen was about to tread on a seedling",["Owen had opened the gate without her permission","Owen was trying to pick one of the red tomatoes","Owen had spotted the crate that was under the bench"],"Read the lines after the shout. His trainer was in the air above a tiny plant.",en_s('inferring a reason'))),
psg(en_T1,typed("Find ONE word in the story that shows Owen said sorry in a quiet, unclear way.",['mumbled'],"'Mumbled' means spoke softly and not clearly. Look at the verb that comes after the speech.",en_s('finding a word with a given meaning'))),
psg(en_T1,typed("Find ONE word near the end of the story that means 'filled very full'.",['crammed'],"The word 'crammed' tells us there was hardly any space left in the box.",en_s('vocabulary in context'))),
psg(en_T1,tf("Mrs Abara had cut up some of the balls in the crate.",false,"The text says 'Not one of them had been cut'. Check rumours against what the narrator actually shows.",en_s('true or false from the text'))),
psg(en_T1,order("Put the events of the story in order.",["The ball drops into the garden","Priya tells Owen to fetch it","Owen pushes the gate","Mrs Abara tells him to stop","She drags out a wooden crate"],"Run through the story from the top and number each event as you meet it.",en_s('sequencing events'))),
psg(en_T1,mc("The twins' story about the bread knife is in the text mainly to...","make the reader expect someone frightening",["prove that Mrs Abara is a dangerous person","explain how the tomato plants are looked after","show that Owen and the twins are close friends"],"A rumour is not proof. The writer uses it to build up a picture, which the ending then turns upside down.",en_s('writer\'s purpose'))),
psg(en_T1,tf("The story is told by a narrator who is not one of the characters.",true,"The narrator says 'Owen', 'he' and 'she', never 'I' for themselves. This is the third person.",en_s('narrative viewpoint'))),
psg(en_T1,mc("When Mrs Abara says 'Nobody knocks', what does she most likely mean?","She wishes people would come to see her",["Her front door is too thick for anyone to knock on","She is delighted that all her visitors stay far away","The balls hit her wall without making any noise at all"],"She says it quietly, just after showing all the balls she has saved. People throw things over, but they do not come to visit.",en_s('implicit meaning'))),
psg(en_T1,write("How does your opinion of Mrs Abara change from the start of the story to the end? Use evidence from the text.",['first|before|start|beginning|rumour|stor|earlier','kind|lonely|alone|gentle|nice|friendly|generous|not scary|not frightening|not cruel|not mean|harmless|sad|caring|good person','crate|cut|knock|quiet|ball'],"At first the stories make her seem frightening. By the end she seems kind and lonely, because none of the balls in the crate has been cut and she says quietly that nobody knocks.","Write three things: what you thought first, what you think now, and the proof from the text.",en_s('explaining a change with evidence')))
];

/* ---------- Fiction 2 ---------- */
const en_F2=[
psg(en_T2,mc("How can you tell that this story is written in the first person?","The narrator uses 'I' and 'my'",["The writer describes the stormy weather","The story begins by giving the exact time","Other people in the family are mentioned"],"First person means a character tells the story using I, me and my.",en_s('narrative viewpoint'))),
psg(en_T2,en_ng(mc("'The house was drowned in darkness.' What is this an example of?","a metaphor",["a simile","onomatopoeia","a rhetorical question"],"The house is not really under water. A metaphor describes something as if it were something else, without 'like' or 'as'.",en_s('naming a language technique')),...en_TECH)),
psg(en_T2,en_ng(typed("Where was Dad when the tapping began?",['harbour','the harbour','at the harbour','at harbour','still at the harbour','he was at the harbour','dad was at the harbour','harbor','the harbor','at the harbor'],"Scan the text for the word 'Dad' and read the whole sentence.",en_s('finding a stated fact')),'harbour')),
psg(en_T2,mc("Why did the narrator say 'it was a branch' very firmly, twice?","To try not to feel so scared",["To practise what to say to Dad later on","To wake Gran up without having to shout","To warn the visitor to go away at once"],"People repeat a comforting idea when they are trying to make themselves believe it.",en_s('inferring a feeling'))),
psg(en_T2,mc("Why is it important that the family did not have a tree?","It rules out the harmless explanation",["It shows that their garden is always very tidy","It explains why the electric power was cut off","It proves that Dad has already come back home"],"If there is no tree, there is no branch to tap on the door. So something else must be making the noise.",en_s('explaining why a detail matters'))),
psg(en_T2,typed("Which ONE word shows that the narrator went down the stairs slowly and quietly?",['crept'],"'Crept' is the past tense of 'creep': to move carefully so that nobody hears you.",en_s('vocabulary in context'))),
psg(en_T2,mc("What is the effect of saying the coats hung 'like people waiting for a bus'?","The dark hall seems full of silent figures",["We learn that the family has guests staying overnight","We understand that a bus stops just outside the house","It shows that every coat is soaking wet and very heavy"],"Think about what the reader pictures. In shaky torchlight, ordinary coats look like people standing still.",en_s('explaining the effect of a comparison'))),
psg(en_T2,tf("The kitchen smelled of wet dog because the family's dog had come indoors.",false,"The narrator says they 'did not have a dog either'. The smell is a clue about the visitor outside.",en_s('true or false from the text'))),
psg(en_T2,tf("The last three taps came more slowly than the earlier ones.",true,"The text says 'three more taps, slower this time'. Find the exact words before you decide.",en_s('true or false from the text'))),
psg(en_T2,multi("Tick THREE ways the writer builds tension before the door is opened.",["Repeating the tapping sound","A short, sudden line about a scraping noise","Making us wait to find out who is outside"],["Saying at the very start that it is a goat","Describing a calm and sunny morning"],"Tension grows when sounds repeat, sentences turn short and the answer is held back.",en_s('how a writer builds tension'))),
psg(en_T2,en_ng(match("Match each phrase to the technique it uses.",[["'Tap. Tap-tap.'","onomatopoeia"],["'the rain flung itself at my face'","personification"],["'as stiff as a plank'","simile"]],"Onomatopoeia copies a sound. Personification gives a thing human actions. A simile compares using 'like' or 'as'.",en_s('naming language techniques')),...en_TECH)),
psg(en_T2,order("Put these events in the order they happen.",["The tapping begins","The narrator picks up the torch","The narrator calls out 'Who's there?'","The narrator turns the key","A goat is seen on the step"],"Use the text to check which action comes before which.",en_s('sequencing events'))),
psg(en_T2,mc("How does the mood change at the very end of the extract?","From frightening to funny",["From peaceful to extremely frightening","From cheerful to very sad and gloomy","From boring to angry and full of arguing"],"All the fear leads to a goat that seems annoyed at being kept waiting. The surprise makes us smile.",en_s('mood and how it changes'))),
psg(en_T2,write("How does the narrator feel while going to open the door? Name the feeling and give evidence from the text.",['scared|afraid|frightened|nervous|terrified|anxious|fear|worried|panic','thin|high|voice|finger|three attempts|three tries|useless|stiff|told myself|wobbl|crept|key|shak'],"The narrator feels scared. The evidence is that the narrator's voice came out thin and high, and it took three attempts to turn the key.","Give the feeling first, then proof: something the narrator does or how the voice sounds.",en_s('feeling plus evidence')))
];

/* ---------- Non-fiction: two texts ---------- */
const en_NF=[
psg(en_T3,mc("What is the main purpose of 'From Old Paper to New'?","To explain a process",["To persuade readers to buy more paper","To tell an exciting adventure story","To share the writer's personal feelings"],"It goes through stages in order and gives facts. That is what an explanation text does.",en_s('identifying purpose'))),
psg(en_T3,typed("Which ONE word in the text is the name of the grey, soupy mixture?",['pulp'],"Look for the word 'called'. It often introduces the name of something.",en_s('finding a technical word'))),
psg(en_T3,multi("Tick the TWO things that the text says the screens catch.",["staples","plastic"],["ink","water","fibres"],"Read the sentence about screens carefully. Ink is taken out at a different step.",en_s('retrieving two details'))),
psg(en_T3,mc("Which sentence best sums up the section 'Making pulp'?","Paper becomes a wet mix and is cleaned",["Staples are caught by screens as the mixture goes through","Used paper is collected from homes, shops and offices every day","Air bubbles are the most interesting thing inside a paper mill"],"A summary gives the main idea of the whole section. One small detail, an opinion or a fact from another section will not do.",en_s('summarising a section'))),
psg(en_T3,order("Put the stages of paper recycling in order.",["The paper is sorted into types","It is chopped up and mixed with water","Screens catch the rubbish","The clean pulp is sprayed onto a net","Heated rollers dry the sheet"],"Follow the time words: next, then, after that, finally.",en_s('ordering the stages of a process'))),
psg(en_T3,mc("Why has the writer used subheadings?","To help readers find information fast",["To make the writer's own opinion sound much stronger","To show the exact words that a worker has said aloud","To create suspense before something surprising happens"],"A subheading tells you what a section is about, so you can jump to the part you need.",en_s('purpose of text features'))),
psg(en_T3,multi("Tick THREE words or phrases that show the order of the stages.",["Next","After that","Finally"],["enormous","damp","huge"],"Time connectives tell you when things happen. The other words only describe things.",en_s('time connectives'))),
psg(en_T3,mc("'The pulp is passed through screens.' Why does a text like this often use the passive voice?","The process matters more than who does it",["It shows that every step happened very long ago","It makes the writing sound like two friends chatting","It tells the reader exactly which worker did the job"],"The passive puts the thing being changed first. We often do not need to know who is doing the work.",en_s('why the passive is used'))),
psg(en_T3,tf("Paper can be recycled again and again without any change to its fibres.",false,"The last section says the fibres become shorter and weaker each time.",en_s('true or false from the text'))),
psg(en_T3,write("In your own words, explain why new fibres from trees are often added.",['short|smaller|break|broke|damag|worn','weak|strong|strength|tear|fall apart'],"Each time paper is recycled, its fibres get shorter and weaker, so new ones are added to keep the paper strong.","Say what happens to the old fibres, then why that is a problem for the new paper.",en_s('explaining in your own words'))),
psg(en_T4,mc("What is the main purpose of this leaflet?","To persuade people to visit",["To explain how the first radio was invented","To report an accident that happened on Mill Road","To warn readers never to repair things themselves"],"Words such as 'Come' and 'Hurry along' urge the reader to do something. That is persuasion.",en_s('identifying purpose'))),
psg(en_T4,en_ng(mc("In the title, 'Bin' and 'Bring' start with the same sound. What is this technique called?","alliteration",["personification","onomatopoeia","a comparison"],"Alliteration repeats the same starting sound in words that are close together. It makes a title easy to remember.",en_s('persuasive language')),...en_TECH)),
psg(en_T4,en_ng(mc("'Why throw away a perfectly good lamp?' What is the writer using here?","a rhetorical question",["a quotation from a happy visitor","a subheading for the next section","a simile that compares two lamps"],"A rhetorical question does not need a reply. It nudges the reader to agree with the writer.",en_s('persuasive techniques')),...en_TECH)),
psg(en_T4,sort("Fact or opinion? Sort the statements from the leaflet.",["Fact","Opinion"],[["The team repaired 340 items last year",0],["The volunteers are the best fixers in town",1],["Entry is free",0],["Repairing is cleverer than buying new",1],["It opens on the first Saturday of each month",0],["Repairing is far more fun",1]],"A fact can be checked. An opinion is what someone thinks, often with words like best, cleverer or fun.",en_s('fact and opinion'))),
psg(en_T4,mc("Why has the writer included the words of Mrs Lund?","A real visitor's praise builds trust",["They explain each step of mending an old radio","They warn readers that radios often break again","They show that only older people may come along"],"A quotation from a happy customer is like proof that the service works.",en_s('effect of a quotation'))),
psg(en_T4,multi("Tick the TWO rules that visitors must follow.",["Bring only items you can carry","Under-12s need an adult with them"],["Pay a small fee at the door","Bring your own tools and glue","Book a visit by phone"],"Look for 'Please' and 'must'. These words signal rules.",en_s('retrieving two details'))),
psg(en_T4,mc("How is the paragraph beginning 'You will find us' different from the ones before it?","It mainly gives plain facts and rules",["It uses many questions to excite the reader","It praises the volunteers again and again","It tells a story about something in the past"],"The style changes: place, day, time, price and rules, with calm and clear sentences.",en_s('comparing the style of paragraphs'))),
psg(en_T4,write("How do the number 340 and the words of Mrs Lund help to persuade the reader?",['340|number|many|lots|amount','lund|quot|visitor|customer|radio|real person|someone','trust|believe|proof|prove|success|work|true|good at|can fix|reliable'],"The number 340 shows that lots of things have been mended. Mrs Lund is a real visitor who says her radio now works, so readers trust the cafe.","Take the two pieces one at a time, then say what they make the reader think.",en_s('explaining persuasion')))
];
en_F1.forEach(q=>en_ng(q,'mumble','mumbled','cram','crammed'));
en_F2.forEach(q=>en_ng(q,'creep','crept'));
en_NF.forEach(q=>en_ng(q,'pulp'));
/* hide base-glossary senses that are wrong in these sentences */
en_F2.forEach(q=>en_ng(q,'tap','itself'));
[].concat(en_F1,en_F2,en_NF).forEach(q=>en_ng(q,'make'));
en_NF.forEach(q=>en_ng(q,'add'));
[].concat(en_F1,en_F2,en_NF).forEach(q=>en_ng(q,'ones'));
en_ng(en_NF[7],'matter');
en_NF.slice(10).forEach(q=>en_ng(q,'mill','carry'));

/* ---------- Grammar, punctuation, spelling ---------- */
const en_GPS=[
en_ng(sort("'The tired climbers rested quietly beside a frozen lake.' Sort the words into word classes.",["Noun","Adjective","Adverb","Preposition"],[["climbers",0],["tired",1],["quietly",2],["beside",3],["lake",0],["frozen",1]],"A noun names a thing, an adjective describes a noun, an adverb describes how something is done, and a preposition shows position.",en_s('word classes')),'tired','quietly','quiet','beside','frozen','freeze','freezing','climber','climbers','lake'),
mc("'Although it was raining hard, the match went on.' Which part is the main clause?","the match went on",["Although it was raining hard","raining hard, the match","Although it was"],"The main clause makes sense on its own. A part starting with 'although' needs the rest of the sentence.",en_s('main and subordinate clauses')),
sort("What kind of sentence is each one?",["Simple","Compound","Complex"],[["The old bus rattled down the steep hill.",0],["I knocked twice, but nobody came.",1],["When the bell rang, everyone lined up.",2],["After lunch, we walked to the park.",0],["Zara plays chess and her brother plays cards.",1],["We stayed indoors because it was snowing.",2]],"Simple: one clause. Compound: two main clauses joined by and, but, or. Complex: a main clause plus a clause starting with a word like when or because.",en_s('simple, compound and complex sentences')),
en_ng(spot("Find the mistake and tap it.","Omar tied the rope [[careful|carefully]] before he began to climb.","The word tells us how he tied the rope, so we need an adverb. Many adverbs end in -ly.",en_s('adjective or adverb')),'careful','carefully'),
mc("Which sentence uses apostrophes correctly?","The children's boots weren't dry.",["The childrens' boots were'nt dry.","The childrens boots weren't dry.","The children's boot's weren't dry."],"'Children' is already plural, so add 's. In 'weren't' the apostrophe replaces the missing o. A simple plural gets no apostrophe.",en_s('apostrophes')),
typed("A nest is shared by several birds. Type the word <b>birds</b> with its apostrophe in the right place: 'the ___ nest'.",["birds'","birds’","the birds' nest","the birds’ nest","birds' nest","birds’ nest"],"For a plural owner that already ends in s, put the apostrophe after the s.",en_s('possessive apostrophe with plurals')),
mc("Which line of speech is punctuated correctly?","'Where are you going?' asked Dad.",["'Where are you going'? asked Dad.","'Where are you going?', asked Dad.","'where are you going?' Asked Dad."],"Start speech with a capital, keep the question mark inside the speech marks, add no extra comma, and use a small letter for 'asked'.",en_s('punctuating direct speech')),
fill("___ it was freezing, Ben would not wear a coat. Soon he was shivering, ___ he went back indoors.",['Although','so'],['Although','so','or','whose'],"'Although' shows a surprising contrast. 'So' shows a result.",en_s('joining clauses')),
mc("Which sentence uses a colon correctly?","Pack three things: a torch, a map and a drink.",["Pack: three things a torch, a map and a drink.","Pack three things a torch: a map and a drink.","Pack three things a torch, a map: and also a drink."],"A colon comes after a complete statement and introduces what is coming, such as a set of items.",en_s('using a colon')),
mc("Which choice best fills the gap? 'The sun set ___ the bats came out.'","a semicolon",["a comma","an apostrophe","a question mark"],"A semicolon joins two complete, closely linked sentences. A comma alone is too weak for that job.",en_s('using a semicolon')),
multi("Tick the TWO sentences that mark off extra information correctly.",["Our neighbour, a retired pilot, loves maps.","The blue whale (a mammal) breathes air."],["Our neighbour, a retired pilot loves maps.","The blue (whale a mammal) breathes air.","Our, neighbour a retired pilot, loves maps."],"Put a pair of commas or brackets round the extra part. If you take it out, a good sentence must be left.",en_s('parenthetical commas and brackets')),
mc("Which sentence is in the passive voice?","The window was broken by a stone.",["A stone broke the kitchen window.","The window frame needs some paint.","A stone was flying towards the window."],"In the passive, the subject has the action done to it: a form of 'to be' plus a past participle.",en_s('active and passive voice')),
typed("'A fox chased the hens.' Use one form of the verb <b>to be</b> to finish the passive sentence in the past tense: 'The hens ___ chased by a fox.'",['were'],"'The hens' is plural and the action is in the past, so use 'were' plus the past participle.",en_s('forming the passive')),
en_ng(mc("Which word is spelt correctly?","necessary",["neccessary","necesary","neccesary"],"Remember: one collar and two sleeves - one c, then two s's.",en_s('spelling')),'necessary'),
match("Match each prefix to its meaning.",[["re-","again"],["mis-","wrongly"],["pre-","before"],["sub-","under"]],"Think of a word you know with each prefix: rewrite, mislead, preview, submarine.",en_s('prefixes')),
en_ng(spot("Find the mistake and tap it.","The old tree dropped [[it's|its]] leaves all over the path.","'It's' means 'it is' or 'it has'. To show that something belongs to it, write 'its' with no apostrophe.",en_s('its and it\'s')),'its')
];

/* ---------- Writing skills ---------- */
const en_W=[
order("Plan a story: put the five parts in the best order.",["Opening: meet the character and place","Build-up: something starts to go wrong","Problem: the most dramatic moment","Resolution: the trouble is sorted out","Ending: show what has changed"],"Plan all five parts before you write, so the ending is not rushed.",en_s('story planning')),
mc("Which opening would best hook the reader of a mystery story?","The key turned before I had touched it.",["This story is about a day when something strange happened.","I woke up, got dressed and ate my breakfast just as usual.","My name is Sam, I am ten years old and I like playing games."],"A strong opening drops the reader into something puzzling, so they want to know more.",en_s('openings')),
sort("Formal or informal? Sort the sentences.",["Formal","Informal"],[["I am writing to request further details.",0],["Can't wait to see you!",1],["We would be grateful for your reply.",0],["Drop me a line soon.",1],["Please accept our sincere apologies.",0],["Sorry I messed up!",1]],"Formal writing uses full forms and polite phrases. Informal writing uses contractions and chatty expressions.",en_s('formal and informal register')),
en_ng(mc("Choose the best link: 'We wanted to sit down in the new park. ___, it had no benches at all.'","However",["Therefore","For example","In addition"],"The second sentence goes against the first, so you need a contrast word.",en_s('connectives')),...en_LINK),
en_ng(match("Match each connective to its job.",[["however","shows a contrast"],["therefore","shows a result"],["for example","introduces a sample case"],["in addition","adds another point"],["meanwhile","shows two things at one time"]],"Try each connective in a sentence of your own and ask what it does to the meaning.",en_s('connectives')),...en_LINK),
multi("Tick THREE features that belong in a newspaper report.",["A short, eye-catching headline","Facts about who, what, when and where","A quotation from someone who saw it"],["A rhyming verse to finish","Numbered steps telling readers what to cook"],"A report gives real facts clearly, with a headline and the words of witnesses.",en_s('features of a report')),
mc("Which sentence shows that Maya is nervous without saying so?","Maya's hands shook as she lifted the latch.",["Maya was feeling very nervous at the gate that day.","Maya lifted the latch and then walked up to the house.","The latch on the old wooden gate was brown and rusty."],"'Show, don't tell': describe what the body does and let the reader work out the feeling.",en_s('showing a feeling')),
tf("In a story, you start a new line when a different person begins to speak.",true,"A new speaker gets a new line. It helps the reader follow who is talking.",en_s('setting out dialogue')),
tf("A newspaper report about yesterday's event is written mainly in the future tense.",false,"The event has already happened, so a report uses mostly the past tense.",en_s('tense in reports')),
write("Improve this dull sentence so the reader can picture it: 'The dog went across the garden.' Use a stronger verb, a describing word for the dog or garden, and one more detail.",['dashed|dashes|dashing|bounded|bounds|bounding|raced|races|racing|sprint|charged|charges|charging|crept|creep|trot|scamper|leaped|leapt|leaps|leaping|bolted|bolts|tore across|tore through|zoom|rushed|rushes|rushing|stagger|limped|limps|limping|prowl|slink|slunk|darted|darts|darting|scurr|scuttl|hurtl|padded|gallop|skipped|skips|jumped|jumps|jumping|wander|stroll|crawl|sneak|snuck|stumbl|waddl|march|flew|ran across|ran through|ran around|ran over|ran into|ran down|ran past|dog ran|puppy ran|it ran|ran quickly|ran fast|ran wildly|ran happily|ran excitedly|running','muddy|scruffy|small|tiny|huge|big|an old|the old|elderly|young|excit|fluffy|shaggy|wet|nervous|playful|black|brown|white|golden|enormous|hungry|happy|tired|frightened|little|large|green|overgrown|soggy|dirty|furry|cheeky|wild|messy|sleepy|clumsy|beautiful|lively|energetic|scared|angry|fierce|brave|lazy|eager|spotted|colourful|sunny|grassy|leafy|damp|tidy|lovely|cute|friendly','quickly|slowly|wildly|happily|excitedly|quietly|suddenly|carefully|swiftly|madly|eagerly|joyfully|noisily|lazily|playfully|clumsily|angrily|nervously|proudly|gently|like|as if|past|through|between|with|under|over|toward|after|chasing|while|until|because|near|behind|beside|bark|wag|,'],"The scruffy puppy dashed wildly across the overgrown garden, scattering leaves like confetti.","Swap 'went' for a verb that shows how it moved, then add a precise adjective and an extra detail.",en_s('improving a sentence')),
write("Write two sentences to persuade your town to build a skate park. Include a rhetorical question and give a reason.",['skat','?','because|so that|since|so we|as it|it would|it will|reason|help|keep|stay|safe|healthy|exercise|somewhere'],"Wouldn't you love to see young people practising somewhere safe? Our town needs a skate park because it would help us to stay fit.","Ask a question that makes the reader agree, then back your idea with 'because'.",en_s('persuasive writing')),
write("Rewrite this in formal English for a letter: 'Hey, can you send me stuff about the chess club ASAP?'",['could you|would you|i would|please|grateful|kindly|i am writing','information|detail|leaflet|material|brochure|facts','soon|convenien|earliest|possible|prompt|quick|delay'],"Dear Sir or Madam, could you please send me information about the chess club at your earliest convenience?","Change the greeting, make the request polite, and replace slang and short forms with precise words.",en_s('changing to a formal register')),
write("Continue this story in two or three sentences: 'The map was blank, until Nia held it near the lamp.' Say what appears, show how Nia feels and use a simile.",['line|word|letter|the ink|black ink|picture|mark|appear|path|a cross|red cross|black cross|shape|drawing|symbol|writing|island|treasure|river|mountain|arrow|name|message|number|face','excit|amaz|nervous|scared|afraid|surpris|shock|curious|happy|worried|heart|gasp|trembl|shiver|astonish|fear|delight|puzzl|shak|shook|stare|breath|jump|thrill|frighten|confus|smil|grin|wonder','like|as if|as though|as quiet as|as bright as|as fast as|as big as|as small as|as black as|as thin as|as white as|as cold as|as dark as|as red as|as still as|as pale as|as tiny as|as fine as|as slow as|as quick as|as soft as|as light as|as blue as|as green as|as gold|as silver'],"Thin brown lines crept across the paper like tiny roots. Nia gasped, and her hands began to tremble with excitement.","Answer all three parts: something new on the map, a reaction from Nia, and a comparison with 'like' or 'as'.",en_s('continuing a story'))
];

en_ng(en_GPS[0],'rest');en_ng(en_GPS[1],'match');en_ng(en_GPS[5],'right','place');
en_ng(en_F1[0],'name');en_ng(en_F1[12],'mean');en_ng(en_F2[0],'tell');
en_ng(en_NF[6],'finally','enormous','damp');en_ng(en_NF[15],'book');
en_ng(en_GPS[2],'card');en_ng(en_GPS[9],'set');
en_ng(en_W[3],'sit');en_ng(en_NF[7],'exactly');
en_ng(en_W[0],'sort');en_ng(en_W[1],'name');en_ng(en_W[2],'drop');en_ng(en_W[5],'catch','eye');
en_ng(en_W[0],'place');en_ng(en_W[3],'add');en_ng(en_W[4],'add','point');

en_W.forEach(q=>en_ng(q,'make'));

const PART_ENGLISH={
topics:[
{id:'ex-en-gate',group:'en',ico:'📖',name:'Fiction: Behind the Green Gate',blurb:'Read a story: facts, clues, word meanings and the effect of language.',col:'#7a4fd6',keepOrder:true,Q:en_F1,
sheet:`<h3>Reading a story</h3><ul>
<li><b>Read the command:</b> 'Tick TWO' means exactly two. 'ONE word' means one word, copied from the text.</li>
<li><b>Retrieval:</b> the answer is stated. Scan for a name or key word.</li>
<li><b>Inference:</b> the answer is hidden in clues. What does a character do, say or notice? <i>Slammed the door</i> suggests anger.</li>
<li><b>Own words:</b> do not just copy the phrase. Say what it means.</li>
<li><b>Evidence:</b> idea first, then a short quotation or detail that proves it.</li></ul>
<h3>Language effects</h3><ul>
<li><b>Simile:</b> uses like or as - <i>the moon was like a coin</i>.</li>
<li><b>Personification:</b> a thing acts like a person - <i>the kettle complained</i>.</li>
<li><b>Effect:</b> say what the reader sees, hears or feels, not just the name.</li></ul>
<h3>Viewpoint</h3><ul><li>I, me, my = first person. Names with he, she, they = third person.</li></ul>`},
{id:'ex-en-tap',group:'en',ico:'🔦',name:'Fiction: The Tapping',blurb:'A night-time story: mood, tension, narrator and techniques.',col:'#3d3f8f',keepOrder:true,Q:en_F2,
sheet:`<h3>Techniques</h3><ul>
<li><b>Simile:</b> <i>as quick as a fox</i></li>
<li><b>Metaphor:</b> says it IS something else - <i>the road was a ribbon</i></li>
<li><b>Personification:</b> <i>the leaves whispered</i></li>
<li><b>Onomatopoeia:</b> a sound word - <i>crash, fizz</i></li></ul>
<h3>How writers build tension</h3><ul>
<li>short sentences</li><li>a sound or word that comes back again and again</li><li>holding back the answer</li><li>darkness, silence, a character's body reacting</li></ul>
<h3>Feeling + evidence</h3><ul><li>'He is proud, because he holds the cup up high and grins.'</li><li>Choose a precise feeling word: nervous, relieved, jealous - not just 'bad'.</li></ul>`},
{id:'ex-en-info',group:'en',ico:'♻️',name:'Non-fiction: Explain and Persuade',blurb:'Two texts: an explanation and a leaflet. Purpose, facts, opinions and features.',col:'#1f8a5f',keepOrder:true,Q:en_NF,
sheet:`<h3>Purpose</h3><ul>
<li><b>Explain:</b> how or why something happens - stages, time words, facts.</li>
<li><b>Persuade:</b> makes you want to do something - opinions, 'you', commands.</li></ul>
<h3>Features</h3><ul>
<li><b>Subheadings</b> guide the reader to each part.</li>
<li><b>Time connectives:</b> firstly, later, meanwhile.</li>
<li><b>Passive:</b> <i>The grapes are picked.</i> The action matters more than the person.</li></ul>
<h3>Persuasive tools</h3><ul>
<li>Rhetorical question: <i>Who doesn't love a picnic?</i></li>
<li>Group of three, alliteration (<i>super summer savings</i>), numbers, quotations.</li></ul>
<h3>Fact or opinion?</h3><ul><li>Fact: can be checked (<i>The pool is 25 m long</i>). Opinion: a view (<i>It is the nicest pool</i>).</li></ul>`},
{id:'ex-en-gps',group:'en',ico:'✏️',name:'Grammar, Punctuation & Spelling',blurb:'Word classes, clauses, apostrophes, speech, colons, passive and prefixes.',col:'#c2571a',Q:en_GPS,
sheet:`<h3>Clauses</h3><ul><li>Main clause: makes sense alone.</li><li>Complex: <i>If it snows, we will build a fort.</i></li><li>Compound: <i>I sang and she danced.</i></li></ul>
<h3>Apostrophes</h3><ul><li>Missing letters: <i>didn't, we're</i></li><li>One owner: <i>the cat's bowl</i>. Many owners: <i>the cats' bowls</i></li><li>No apostrophe for a plain plural.</li></ul>
<h3>Speech</h3><ul><li><i>'Can we start now?' said Eva.</i></li></ul>
<h3>Bigger marks</h3><ul><li><b>:</b> introduces what comes next.</li><li><b>;</b> links two full sentences.</li><li>Pairs of commas or brackets hold extra information.</li></ul>
<h3>Passive</h3><ul><li><i>The cook burnt the toast.</i> becomes <i>The toast was burnt by the cook.</i></li></ul>`},
{id:'ex-en-writing',group:'en',ico:'📝',name:'Writing Skills',blurb:'Plan, hook the reader, link ideas, choose the right style and improve sentences.',col:'#c0306a',Q:en_W,
sheet:`<h3>Exam writing plan</h3><ul><li>Plan for 5 minutes, write, then leave time to check.</li><li>Paragraphs: new time, place, topic or speaker = new line.</li><li>Check capitals, full stops, speech marks and spellings.</li></ul>
<h3>Stories</h3><ul><li>Start with action, speech or a puzzle.</li><li>Show feelings: <i>He chewed his lip.</i></li><li>Use one or two fresh comparisons.</li></ul>
<h3>Reports and letters</h3><ul><li>Report: headline, who, what, when, where, why, witness words, past tense.</li><li>Formal: <i>I would be pleased to...</i> No slang, no short forms.</li></ul>
<h3>Connectives</h3><ul><li>Contrast: but, on the other hand. Result: so, as a result. Adding: also, furthermore. Time: later, at the same time.</li></ul>
<h3>Longer written answers</h3><ul><li>Do every part the task asks for, then compare with the model.</li></ul>`}
],
vocab:[
['simile','сравнение (с like / as)','compares two things using like or as'],
['metaphor','метафора','says one thing is another'],
['personification','олицетворение','a thing acts like a person'],
['alliteration','аллитерация (повтор первого звука)','big blue balloon'],
['onomatopoeia','звукоподражание','bang, splash, buzz'],
['rhetorical question','риторический вопрос','a question that needs no answer'],
['narrator','рассказчик','the voice that tells the story'],
['first person','первое лицо','I, me, my'],
['evidence','доказательство из текста','proof taken from the text'],
['quotation','цитата','the exact words, inside speech marks'],
['tension','напряжение','the feeling that something is about to happen'],
['purpose','цель (текста)','why the text was written'],
['persuade','убеждать','make the reader agree or act'],
['opinion','мнение','what someone thinks'],
['subheading','подзаголовок','title of one part of a text'],
['headline','заголовок газетной статьи','the big title of a news story'],
['connective','связующее слово','joins ideas'],
['main clause','главное предложение (часть)','makes sense on its own'],
['passive voice','страдательный залог','The cake was eaten.'],
['noun','существительное','names a person, place or thing'],
['adjective','прилагательное','describes a noun'],
['adverb','наречие','tells how, when or where'],
['preposition','предлог','under, beside, between'],
['apostrophe','апостроф','shows missing letters or belonging'],
['colon','двоеточие',':'],
['semicolon','точка с запятой',';'],
['prefix','приставка','added to the start of a word'],
['formal','официальный (стиль)','polite, full forms'],
['informal','неофициальный, разговорный','chatty style']
],
glossary:[
['persuasive|persuasion','убеждающий; убеждение'],['technique','прием'],['effect','эффект, впечатление'],['suggest','наводить на мысль, подсказывать'],['narrative','повествование'],['character','персонаж'],['extract','отрывок'],['story|stories','история, рассказ'],['event','событие'],['phrase','фраза, словосочетание'],['mood','настроение, атмосфера'],['likely','вероятно'],['mainly','в основном'],['opinion','мнение'],
['fetch','сходить и принести'],['pigeon','голубь'],['curtain','занавеска'],['twins','близнецы'],['sliced|slice','резать ломтями'],['groan','стонать, кряхтеть'],['gate','калитка'],['cane','палочка-подпорка'],['strip','полоска'],['cloth','ткань, тряпочка'],['knelt|kneel','стоять на коленях'],['snap','рявкнуть, резко сказать'],['trainer','кроссовка'],['seedling','росток, рассада'],['trembled|tremble','дрожать'],['bench','скамейка'],['crate','деревянный ящик'],['striped','полосатый'],['leather','кожаный; кожа'],['permission','разрешение'],['tread','наступать'],['rumour','слух'],['frightening','пугающий'],['delighted','очень рад'],['wish|wishes','хотеть, желать'],['wooden','деревянный'],
['midnight','полночь'],['stiff','неподвижный, одеревеневший'],['plank','доска'],['storm','буря, шторм'],['cut the power','отключить электричество'],['power was cut off','электричество отключилось'],['harbour','гавань, порт'],['reached under','потянулась под'],['often added','часто добавляют'],['sums up|sum up|summary','подводить итог; краткое содержание'],['rules out','исключает'],['making up its mind','решая, как поступить'],['Owen froze','Оуэн замер'],['drowned|drown','тонуть; утопать'],['darkness','темнота'],['brass band','духовой оркестр'],['firmly','твердо, решительно'],['branch','ветка'],['torch','фонарик'],['squeal','скрипеть, визжать'],['torch beam','луч фонарика'],['wobble','дрожать, шататься'],['scrape','скрести; царапать'],['howling|howl','выть'],['useless','бесполезный, непослушный'],['attempt','попытка'],['flung|fling','швырять, бросать'],['goat','коза'],['chewed|chew','жевать'],['rope','веревка'],['trail','волочиться'],['visitor','гость, посетитель'],['harmless','безобидный'],['guest','гость'],['soaking wet','насквозь мокрый'],['gloomy','мрачный'],['tapping|tap tap','постукивание'],
['recycling|recycle','переработка (перерабатывать)'],['amount','количество'],['cardboard','картон'],['different products','разные изделия'],['chopped|chop','рубить, измельчать'],['enormous','огромный'],['tank','бак, резервуар'],['soupy','похожий на суп'],['through screens','через сита'],['screens catch','сита задерживают'],['staple','скрепка (от степлера)'],['rubbish','мусор'],['ink','чернила, краска'],['mill','фабрика (бумажная)'],['bubble','пузырек'],['sprayed|spray','распылять, разбрызгивать'],['moving net','движущаяся сетка'],['drain','стекать'],['damp','влажный'],['roller','валик'],['wound onto','намотан на'],['reel','рулон, катушка'],['thread','нить'],['fibre','волокно'],['process','процесс'],['can carry','можешь унести'],['adventure','приключение'],['suspense','напряженное ожидание'],
['leaflet','листовка'],['volunteer','доброволец'],['fixer','мастер по ремонту'],['sip','пить маленькими глотками'],['creamy','сливочный'],['patch','ставить заплатку'],['tighten','подтягивать'],['repair','чинить; ремонт'],['item','вещь, предмет'],['heap','куча'],['pocket money','карманные деньги'],['cheaper','дешевле'],['cleverer','умнее'],['entry','вход'],['treasure','сокровище'],['praise','похвала; хвалить'],['trust','доверие; доверять'],['fee','плата'],['warn','предупреждать'],['accident','несчастный случай'],['invent','изобретать'],['section','раздел'],['statement','утверждение'],
['clause','часть предложения (с глаголом)'],['Simple Compound Complex','простое / сложносочиненное / сложноподчиненное'],['plural','множественное число'],['speech marks','кавычки прямой речи'],['speech','речь'],['punctuated|punctuate|punctuation','расставить знаки препинания'],['gap','пропуск, промежуток'],['comma','запятая'],['brackets','скобки'],['tense','время глагола'],['spelt|spell|spelling','писать по буквам; орфография'],['choice','вариант'],['owner','владелец'],['shivering|shiver','дрожать от холода'],['neighbour','сосед'],['retired','вышедший на пенсию'],['whale','кит'],['mammal','млекопитающее'],['stone','камень'],['window frame','оконная рама'],['hens','куры'],['chased|chase','гнаться'],['puppy','щенок'],['tail','хвост'],['knocked|knock','стучать'],['rattle','дребезжать'],['everyone lined up','все построились в ряд'],['missing out','пропуская, перешагивая'],
['plan','план; планировать'],['opening','начало, вступление'],['hook','зацепить, увлечь'],['mystery','тайна, загадка'],['strange','странный'],['request','просить; запрос'],['reply','ответ; отвечать'],['grateful','благодарный'],['apology|apologies','извинение'],['sincere','искренний'],['link','связь; связующее слово'],['feature','особенность, признак'],['report','репортаж, отчет'],['verse','стихотворная строфа'],['witness','свидетель'],['latch','щеколда'],['rusty','ржавый'],['dialogue','диалог'],['future','будущее'],['dull','скучный'],['improve','улучшать'],['detail','деталь, подробность'],['verb','глагол'],['town','город'],['skate park','скейт-парк'],['reason','причина'],['rewrite','переписать'],['letter','письмо; буква'],['chess','шахматы'],['continue','продолжить'],['blank','пустой, чистый'],['lamp','лампа'],['map','карта'],['appears|appear','появляться'],['feels|feel','чувствовать']
]
};

/* ===== exam practice: esl ===== */
/* ENGLISH AS A SECOND LANGUAGE - Reading and Usage + Writing. All texts and items are original. */
const esl_ng=(q,...t)=>Object.assign(q,{ng:t});
const esl_R='Exam style: reading (Cambridge Primary Stage 6)';
const esl_U='Exam style: use of English (Cambridge Primary Stage 6)';
const esl_V='Exam style: vocabulary in context (Cambridge Primary Stage 6)';
const esl_W='Exam style: writing (Cambridge Primary Stage 6)';

/* ---------- reading texts ---------- */
const esl_Tnotes={title:'Notices at the sports centre', text:`<b>A - Swimming</b>
The small pool will be shut on Friday for cleaning. Friday lessons will move to the large pool and will start at the usual time. The changing rooms will stay open all day.

<b>B - Lost and found</b>
We have a big box of water bottles at the front desk. Please collect yours before the end of this month. After that, we will give them to a charity shop. Some of them have been waiting there since the summer.

<b>C - Climbing wall</b>
Children under 12 may use the wall only if an adult stays in the room. Everyone must wear trainers. Never leave bags on the mats. Please be patient, because only a few people can climb at one time.

<b>D - Café</b>
Buy any sandwich after 4 p.m. and get a free juice. This offer does not include hot meals. The café is next to the main door and now sells fresh fruit too.`};

const esl_Tclubs={title:'Weekend clubs at Greenfield Centre', text:`Would you like to try something new this term?

<b>Robot Lab</b>
Saturdays, 10 a.m. to 12 noon. Ages 9-12. Work in pairs to build small robots and make them move. We provide all the tools. At the end of term, each pair shows its robot to the group. £5 a week.

<b>Paint Pot</b>
Saturdays, 2 p.m. to 4 p.m. Ages 6-11. Try painting, printing and clay work. Bring an old shirt to protect your clothes. The best pictures go up on the café wall. Free.

<b>Trail Team</b>
Sundays, 9 a.m. to 11 a.m. Ages 10-14. Walk in the hills, learn to read maps and look for wild birds. Strong boots are needed. Free.

<b>Stage Door</b>
Saturdays, 10 a.m. to 12 noon. Ages 8-13. Act, sing and prepare a show for families in June. £4 a week.

Places are limited, so sign up at the front desk before the first meeting.`};

const esl_Temail={title:'An email from Nadia', text:`Hi Sam,

Guess what? We finally moved into our new flat last Saturday! It is smaller than our old house, but I like it a lot because my bedroom window looks over the harbour. In the mornings I can watch the fishing boats come in.

I started at my new school on Monday. I was really nervous at first. However, a girl called Priya showed me round and asked me to sit with her friends at lunch, so I felt much better by the afternoon. The only thing I don't enjoy is the bus ride. It takes forty minutes, which is twice as long as my old walk to school!

Mum says you can stay with us during the spring holiday. If the weather is good, we could take the ferry to the island and look for seals. Pack a warm jacket, because it is windy on the water. You don't need a sleeping bag - we have a spare bed.

Please write soon and tell me whether you can come.

Love,
Nadia`};

const esl_Tbooks={title:'Books on Two Wheels', text:`Every Wednesday afternoon, the ring of a bell tells the children of Hillside that Rosa Marin has arrived. Rosa does not sell ice cream. She lends books, and she carries them in a wooden box on the front of her bicycle.

Rosa had the idea four years ago. She was working in the town library, and she noticed that hardly any families from Hillside came in. The problem was not that they disliked reading. The library was on the other side of the river, and the bus there was slow and expensive.

At first, Rosa took only thirty books, and most of them came from her own shelves. Today the box holds about a hundred, many of them given by neighbours. Anyone may borrow up to three books at a time. There are no fines for late books. Rosa simply asks people to bring them back when they have finished.

The job is not always easy. The road up the hill is steep, and on rainy days Rosa has to cover the box with a plastic sheet and push the bicycle. Still, she has no plans to stop. "When a child runs up the street to tell me how a story ended," she says, "I forget about my tired legs."`};

const esl_Tdrums={title:'A message to a cousin', text:`Hi Tom,

Thank you (1) ______ the postcard. You asked about my new hobby. I have been learning the drums (2) ______ September, and I am quite proud (3) ______ my progress. Our neighbour, (4) ______ used to play in a band, helps me on Fridays. Keeping a steady beat is not as easy (5) ______ it looks! My little sister says that I make the (6) ______ noise in the whole street.

See you soon,
Ravi`};

const esl_Tkite={title:'The runaway kite', text:`Yesterday it was so windy that my kite (1) ______ away from me. I ran after it, but it got (2) ______ at the top of a tall tree. I was too short to reach it, so I asked a man in the park to give me a (3) ______. He (4) ______ a long pole from his van and gently pushed the kite free. There was a small tear in it, but luckily it was easy to (5) ______.`};

/* ---------- 1. reading ---------- */
const esl_read=[
 psg(esl_Tnotes, mc('Which sentence about Notice A is true?','Friday lessons will happen, but in a different pool.',['There are no swimming lessons of any kind on Friday.','Friday lessons will begin later than they normally do.','The large pool will be closed for cleaning on Friday.'],'Only the <b>small</b> pool is shut. The lessons move to the large pool and keep the usual time.',esl_R)),
 psg(esl_Tnotes, esl_ng(tf('A ten-year-old may use the climbing wall without any adult there, as long as she wears trainers.',false,'Children under 12 need an adult in the room. Trainers are a second rule, not a replacement for the first one.',esl_R),'long')),
 psg(esl_Tnotes, multi('Read all the notices again. Tick ALL the people who can do what they want.',['Zara buys a cheese sandwich at 5 p.m. and wants a free juice.','Ben, 9, wants to climb in trainers while his dad stays in the room.','Omar wants to collect his bottle at the front desk before the month ends.'],['Ali buys hot soup at 6 p.m. and wants a free juice.','Nora wants to leave her school bag on the climbing mats.','Kim buys a sandwich at 1 p.m. and wants a free juice.'],'Check every condition: what you buy, the time, who is in the room and where bags go.',esl_R)),
 psg(esl_Tclubs, match('Match each child to the club that suits them.',[['Dina, 10: free only on Saturday afternoons','Paint Pot'],['Omar, 11: wants to build machines with a partner','Robot Lab'],['Jia, 14: loves being out in nature','Trail Team'],['Kareem, 13: loves singing for an audience','Stage Door']],'Check the age, the day, the time and the hobby. All of them must fit.',esl_R)),
 psg(esl_Tclubs, multi('Tick ALL the clubs that a 9-year-old can join on Saturday mornings.',['Robot Lab','Stage Door'],['Paint Pot','Trail Team'],'Paint Pot meets in the afternoon. Trail Team meets on Sunday and starts at age 10.',esl_R)),
 psg(esl_Temail, mc('Why does Nadia like her new flat?','Her room looks out over the water.',['It is bigger than her old house.','It is very near to her new school.','Her new friend lives next door to it.'],'The email says her window looks over the <b>harbour</b>, a place by the sea where boats stay.',esl_R)),
 psg(esl_Temail, esl_ng(typed('How long did Nadia\'s old walk to school take?',['20','twenty','20 minutes','twenty minutes','20 min','20 mins','20minutes','twenty mins','about 20 minutes','about 20'],'The bus takes 40 minutes, which is <b>twice as long</b> as the walk. So the walk took 40 ÷ 2 = 20 minutes.',esl_R,'minutes'),'long')),
 psg(esl_Temail, mc('How did Nadia\'s feelings change during her first day at the new school?','From worried to much happier',['From very excited to rather bored','From calm and relaxed to nervous','From cheerful to very lonely'],'She was "nervous at first" but "felt much better by the afternoon". The word <b>However</b> signals the change.',esl_R)),
 psg(esl_Temail, tf('Sam can leave his sleeping bag at home.',true,'Nadia writes that he does not need one because they have a spare bed.',esl_R)),
 psg(esl_Temail, mc('What does Nadia want Sam to do next?','Reply and say if a visit is possible',['Send her a photo of his own new school','Buy two tickets for the island ferry','Post her a warm jacket for the boat trip'],'The last lines of an email often show what the writer wants: "write soon and tell me whether you can come".',esl_R)),
 psg(esl_Tbooks, mc('Why did so few Hillside families use the town library?','Getting there was slow and cost a lot.',['They did not enjoy reading books.','The building was shut on Wednesdays.','They had been asked to pay large fines.'],'Paragraph 2 says the problem was <b>not</b> dislike of reading. It was the river and the slow, expensive bus.',esl_R)),
 psg(esl_Tbooks, tf('When Rosa began, most of the books she took were her own.',true,'"Most of them came from her own shelves" means most of the first thirty books belonged to her.',esl_R)),
 psg(esl_Tbooks, order('Put these events in the order in which they happened.',['Rosa has a job at the town library','She sees that Hillside families seldom come in','She sets out with about thirty books','Her box holds around a hundred books'],'Follow the time words in the text: four years ago, at first, today.',esl_R)),
 psg(esl_Tbooks, esl_ng(mc('In paragraph 2, what does <b>hardly any</b> mean?','very few',['a great many','nearly all of the','exactly half of the'],'"Hardly any" means almost none. The next sentences explain why those families stayed away.',esl_R),'hardly any','hardly','few')),
 psg(esl_Tbooks, mc('What do Rosa\'s words at the end show?','She thinks the effort is worth it.',['She never gets tired on the steep hill.','She wants children to push the bicycle.','She would like the stories to be shorter.'],'Her legs <b>are</b> tired, but the children\'s excitement makes her forget it. So the hard work is worth doing.',esl_R)),
 psg(esl_Tbooks, match('Match each paragraph to what it is mainly about.',[['Paragraph 1','Who arrives and what she brings'],['Paragraph 2','How the idea began'],['Paragraph 3','The box and the rules for borrowing'],['Paragraph 4','Difficulties, and why she carries on']],'Find the main point of each paragraph. The first sentence is often a good clue.',esl_R)),
 psg(esl_Tbooks, mc('Why did the writer write this article?','to tell us about a travelling library',['to persuade readers to buy a new bicycle','to give instructions for mending old books','to complain about the local bus service'],'Ask what most of the text does. A detail such as the bus is only one small part.',esl_R))
];

/* ---------- 2. use of English ---------- */
const esl_use=[
 psg(esl_Tdrums, typed('Gap (1): write ONE word.',['for'],'We thank someone <b>for</b> a thing: thank you for + noun.',esl_U)),
 psg(esl_Tdrums, mc('Gap (2): choose the correct word.','since',['for','from','between'],'With "have been learning", use <b>since</b> + a starting point and <b>for</b> + a length of time.',esl_U)),
 psg(esl_Tdrums, typed('Gap (3): write ONE word.',['of'],'Some adjectives take a fixed preposition: proud <b>of</b> something.',esl_U)),
 psg(esl_Tdrums, mc('Gap (4): choose the correct word.','who',['which','whose','where'],'<b>Who</b> refers to a person. "Which" is for things, "whose" shows belonging and "where" is for places.',esl_U)),
 psg(esl_Tdrums, typed('Gap (5): write ONE word.',['as'],'To compare, use <b>not as</b> + adjective + <b>as</b>.',esl_U)),
 psg(esl_Tdrums, typed('Gap (6): write the correct form of the word <b>LOUD</b>.',['loudest'],'"The ... in the whole street" compares one thing with all the others, so use the superlative: adjective + <b>-est</b>.',esl_U)),
 fill('Yesterday evening, while we ___ dinner, the lights suddenly ___ out.',['were having','went'],['were having','went','are having','go','have had'],'Use the past continuous for the longer action and the past simple for the short action that interrupts it.',esl_U),
 typed('Use the correct form of the words in brackets:<br><i>I (never / ride) a camel, but I would love to try one day.</i><br>Write only the missing words.',['have never ridden',"i have never ridden","i've never ridden",'i’ve never ridden',"'ve never ridden",'’ve never ridden','ive never ridden','never have ridden'],'Experience up to now = present perfect: <b>have + never + past participle</b>. Ride, rode, ridden.',esl_U),
 mc('Complete the sentence: <i>If it ___ tomorrow, we will stay indoors.</i>','rains',['will rain','rained','would rain'],'First conditional: <b>If + present simple</b>, then <b>will + verb</b>.',esl_U),
 match('Match each sentence to its meaning.',[['You should see a dentist.','This is good advice'],['You mustn\'t touch that.','This is forbidden'],['You needn\'t wait.','This is not necessary'],['It might snow.','This is possible, not certain']],'Modal verbs change the meaning: <b>mustn\'t</b> forbids, but <b>needn\'t</b> only says there is no need.',esl_U),
 sort('Which word can go in front: <b>much</b> or <b>many</b>?',['much','many'],[['homework',0],['children',1],['information',0],['chairs',1],['furniture',0],['minutes',1],['mistakes',1]],'<b>Many</b> goes with things you can count (plurals). <b>Much</b> goes with uncountable nouns, which have no plural -s.',esl_U),
 esl_ng(mc('Complete: <i>There are two paths to the lake. You can take ___ one, because both are safe.</i>','either',['neither','both','all'],'<b>Either</b> means one or the other of two. "Neither" means not this one and not that one.',esl_U),'either','neither','both','all'),
 mc('Choose the correct pair: <i>My aunt is ___ engineer, and she works on ___ island.</i>','an ... an',['a ... an','an ... a','a ... the'],'Use <b>an</b> before a vowel sound. A job takes "a" or "an", and both words here begin with a vowel sound.',esl_U),
 mc('Complete: <i>Dad ___ us that the museum was closed.</i>','told',['said','spoke','talked'],'<b>Tell</b> is followed by a person: told us. "Say" does not take the person directly: said that.',esl_U),
 spot('Find the mistake and tap it.','The long journey made everyone feel very [[tiring.|tired.]]','<b>-ed</b> describes how someone feels. <b>-ing</b> describes the thing that causes the feeling.',esl_U),
 order('Put the parts in order to make a question.',['Have','you','ever','tried','to bake','bread?'],'Present perfect question: <b>Have + subject + ever + past participle</b>. Then verb + to + verb.',esl_U),
 esl_ng(multi('Tick ALL the sentences that use the correct preposition.',['She is interested in space.','We arrived at the station early.','They are waiting for the bus.'],['He is afraid from spiders.','I am good in drawing.','It depends of the weather.'],'Learn the pairs: afraid <b>of</b>, good <b>at</b>, depend <b>on</b>.',esl_U),'depend on','depends on','depends','depend')
];

/* ---------- 3. vocabulary in context ---------- */
const esl_voc=[
 psg(esl_Tkite, esl_ng(mc('Gap (1): choose the best word.','flew',['sank','drove','swam'],'A kite moves through the air, so it <b>flew</b> away. Think about how the thing really moves.',esl_V),'flew','fly','sank','sink','drove','swam')),
 psg(esl_Tkite, esl_ng(mc('Gap (2): choose the best word.','stuck',['stayed','sticky','stick'],'<b>Get stuck</b> means you are caught and cannot move.',esl_V),'stuck','stayed','sticky','stick','stay')),
 psg(esl_Tkite, esl_ng(mc('Gap (3): choose the best word.','hand',['foot','favour','support'],'<b>Give someone a hand</b> is a fixed phrase that means help them.',esl_V),'hand','foot','favour','support')),
 psg(esl_Tkite, esl_ng(mc('Gap (4): choose the best word.','fetched',['went','arrived','looked'],'<b>Fetch</b> means go to get something and bring it back. The other verbs cannot take "a long pole" straight after them.',esl_V),'fetched','fetch','went','arrived','arrive','looked')),
 psg(esl_Tkite, esl_ng(mc('Gap (5): choose the best word.','mend',['heal','cure','solve'],'We <b>mend</b> broken or torn things. Wounds heal, illnesses are cured and problems are solved.',esl_V),'mend','heal','cure','solve')),
 esl_ng(typed('Complete with a noun made from <b>DECIDE</b>:<br><i>Choosing which puppy to take home was a hard ______.</i>',['decision'],'Many verbs make nouns ending in <b>-sion</b> or <b>-tion</b>. After "a hard" you need a noun.',esl_V),'decide','decision'),
 esl_ng(typed('Add a prefix to <b>possible</b> to make ONE word that means "cannot be done".',['impossible'],'Before words beginning with <b>p</b>, the prefix that means "not" is often <b>im-</b>.',esl_V),'possible','impossible'),
 esl_ng(match('Match each word to its meaning.',[['careless','not paying enough attention'],['harmless','not able to hurt anyone'],['thankful','feeling grateful'],['endless','seeming to have no finish']],'Split the word: root + suffix. <b>-less</b> means without; <b>-ful</b> means full of.',esl_V),'careless','harmless','thankful','endless','care','harm','thank','end'),
 esl_ng(odd('Odd one out! Three of these travel on water.','glider',['ferry','canoe','yacht'],'A <b>glider</b> is a plane with no engine, so it travels through the air.',esl_V),'glider','ferry','canoe','yacht'),
 esl_ng(match('Match each group phrase to the word that usually follows it.',[['a flock of','sheep'],['a swarm of','bees'],['a pack of','wolves'],['a bunch of','bananas']],'These are collective nouns: each kind of group has its own usual word.',esl_V),'flock','swarm','pack','bunch','sheep','bees','bee','wolves','wolf','bananas','banana'),
 esl_ng(sort('Do we use <b>make</b> or <b>do</b> with these words?',['make','do'],[['a mistake',0],['homework',1],['a noise',0],['the washing-up',1],['friends',0],['exercise',1],['a promise',0],['your best',1]],'<b>Make</b> often means produce or create something. <b>Do</b> is used for work, tasks and activities.',esl_V),'make','do'),
 fill('Please look ___ my rabbit while I am away: she needs food and fresh water every day. I cannot find my other shoe, so I have been looking ___ it everywhere. We are all looking ___ to the holiday.',['after','for','forward'],['after','for','forward','into','like'],'Look <b>after</b> = take care of. Look <b>for</b> = try to find. Look <b>forward</b> to = feel excited about something coming.',esl_V),
 esl_ng(scramble('A person who rides in a bus, train or plane but does not drive or fly it.','passenger','Say it in parts to spell it: <b>pas - sen - ger</b>, with a double s.',esl_V),'passenger'),
 esl_ng(mc('<i>The queue was enormous, so we decided to come back later.</i><br>Which word is closest in meaning to <b>enormous</b>?','huge',['tiny','noisy','narrow'],'The clue is "come back later": the queue must have been very big.',esl_V),'enormous','huge','tiny','noisy','narrow','enormously'),
 esl_ng(mc('Complete: <i>Can I ___ your ruler, please? I have left mine at home.</i>','borrow',['lend','owe','provide'],'<b>Borrow</b> = take and give back later. <b>Lend</b> = give to someone for a time. I borrow from you; you lend to me.',esl_V),'borrow','lend','owe','provide')
];

/* ---------- 4. writing ---------- */
const esl_write=[
 multi('Task: <i>Email a friend about your school trip. Say where you went and what you liked best, and ask your friend one question. Write 35-45 words.</i><br>Tick ALL the things your email must include.',['the place you visited','your favourite part of the day','a question for your friend'],['the price of the bus tickets','a full list of who went','a headline like in a newspaper'],'Underline each point in the task. Every one of them must appear in your answer.',esl_W),
 tf('In an email task with three points to cover, excellent English makes up for leaving one point out.',false,'Content is marked too. A missing point loses marks even when the grammar is perfect.',esl_W),
 sort('Sort the phrases: formal or informal?',['Formal','Informal'],[['Dear Sir or Madam,',0],['Hiya!',1],['I am writing to ask about your course.',0],['Guess what?',1],['Yours faithfully,',0],['Can\'t wait!',1],['I look forward to your reply.',0],['See you soon!',1]],'Formal writing is polite, uses full forms and no slang. Informal writing sounds like talking to a friend.',esl_W),
 esl_ng(mc('Your letter to a museum director begins <i>Dear Sir or Madam</i>. Which ending suits it?','Yours faithfully,',['Bye for now, speak soon!','Lots of love from me!','Catch you later!'],'A letter to someone you do not know needs a formal ending. After "Dear Sir or Madam", write <b>Yours faithfully</b>.',esl_W),'catch'),
 fill('I wanted to play outside, ___ it was pouring with rain. ___, we built a den in the living room. We stayed inside it ___ dinner was ready.',['but','Instead','until'],['but','Instead','until','or','Unless'],'<b>But</b> shows a contrast, <b>instead</b> introduces another choice, <b>until</b> shows when something stops.',esl_W),
 esl_ng(mc('Choose the linking word: <i>The museum was very crowded. ___, we managed to see everything.</i>','However',['Because','For example','As a result'],'The second idea is surprising after the first one, so use a contrast word.',esl_W),'however','result'),
 order('Put the parts of this email in order.',['Hi Ben,','Thanks for your message - it was great to hear from you.','You asked about the concert: it was brilliant, especially the drummers!','The same band is playing again in May. Would you like to come with me?','Write back soon, Aisha'],'Greeting, friendly opening, answer, new idea, sign-off. Phrases like "the same band" point back to something said earlier.',esl_W),
 spot('Proofread: find the mistake and tap it.','[[Their|They\'re]] going to bring the tent on Friday.','<b>They\'re</b> = they are. <b>Their</b> means belonging to them.',esl_W),
 spot('Proofread: find the mistake and tap it.','The museum has changed [[it\'s|its]] opening times.','<b>It\'s</b> always means "it is" or "it has". The belonging word <b>its</b> has no apostrophe.',esl_W),
 mc('Which sentence is punctuated correctly?','"Where are you going?" asked Mum.',['"Where are you going," asked Mum?','"Where are you going"? asked Mum.','Where are you going? "asked Mum."'],'Only the spoken words go inside speech marks, and their question mark stays inside with them.',esl_W),
 write('Write an email of 35-45 words to invite your friend Alex to your birthday. Say <b>which day</b>, <b>where</b> it is and <b>what to bring</b>. Begin and end like a friendly email.',['hi alex|hi, alex|hello|dear|hiya|hey alex|hey,|hi,|hi!','come|invite|join','saturday|sunday|monday|tuesday|wednesday|thursday|friday|weekend|tomorrow|today|january|february|march|april|june|july|august|september|october|november|december|th may|st may|nd may|rd may|of may','house|flat|home|garden|park|centre|pool|cafe|café|restaurant|my place|beach|cinema|school|bowling|museum|zoo|club|hall','bring|take your|take a','see you|love|bye|wishes|cheers|regards|your friend|hope to see'],'Hi Alex,<br>It is my birthday soon! Would you like to come to my party on Saturday? It is at my house at three o\'clock. Please bring your swimming things, because we have a pool.<br>See you,<br>Sara','Check: greeting, invitation, day, place, thing to bring, goodbye. Then count your words.',esl_W),
 write('Your friend Priya lent you a book. Write her an email of 35-45 words. <b>Thank</b> her, say <b>what you liked</b> and <b>why</b>, and say <b>when you will give it back</b>.',['thank','liked|loved|enjoyed|i like|i love|enjoy|favourite|really like|was great|was funny|amazing','because|since|as it|as the|it was so','back|return|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday|next week','see you|love|bye|soon|wishes|cheers|regards|your friend'],'Hi Priya,<br>Thank you for lending me the book. I really liked the ending because I did not guess who the thief was! I will give it back to you on Monday.<br>See you soon,<br>Dan','Cover every point in order, give a reason with "because", and finish with a short goodbye.',esl_W),
 write('Continue this story in 3-4 sentences, in the past tense:<br><i>When I opened the old suitcase, I could not believe my eyes.</i><br>Say <b>what was inside</b>, <b>how you felt</b> and <b>what you did next</b>. Use a linking word such as <i>suddenly</i> or <i>because</i>.',['inside|there was|there were|i saw|found|lay a|lay the|there lay|lying','felt|feel|surpris|excited|scared|nervous|amazed|happy|curious|shocked|afraid|frightened|worried','decided|next|so i|i ran|i took|i picked|i called|i opened|i showed|i shouted|i closed|i shut|i put|i went|i read|i started|i tried|i began|i grabbed|i touched|i looked|i asked|i told|i pulled|i lifted','because|suddenly|while|although|however|as soon as|then|after|before|until|but|when'],'Inside there was a tiny silver key and a map of our garden. I felt so excited that my hands began to shake. Then I decided to follow the map, because a black cross was marked under the apple tree.','A good story answers: what did you see, how did you feel, what happened next? Add exact details.',esl_W),
 write('Describe your favourite room in 3-4 sentences. Say <b>where two things are</b> and <b>why you like</b> the room.',['room|kitchen|my den|the den|attic|library|bathroom|my study|lounge','next to|under|beside|behind|between|opposite|near|above|in front of|on the|in the corner|by the','like|love|enjoy|favourite','because|since|so that|as it|as i can'],'My favourite room is my bedroom. My bed is under the window, and a tall bookshelf stands next to the door. I love this room because it is quiet and I can read there in peace.','Use place phrases (next to, behind, between) and adjectives so the reader can picture the room.',esl_W),
 write('Should every child learn to cook? Write 50-80 words. Give <b>your opinion</b>, <b>two reasons</b> (First, ... Also, ...) and a short <b>ending</b> (Overall, ...).',['i think|i believe|in my opinion|my view|i feel|i agree|i disagree','first|one reason|to begin','also|second|another|moreover|in addition|what is more|furthermore','because|since|so that|helps','overall|in conclusion|to sum up|all in all|that is why|finally|in short|to conclude'],'In my opinion, every child should learn to cook. First, it is useful, because one day we will all have to make our own meals. Also, cooking helps us to understand which foods are healthy, and it can be great fun. Overall, I think it is a skill that everyone needs.','Plan: opinion, reason 1, reason 2, ending. Linking words show the reader where each part begins.',esl_W)
];

/* senses from other parts that are wrong in these sentences */
[[esl_read[12],'around'],[esl_read[13],'mean']].forEach(([q,t])=>{q.ng=(q.ng||[]).concat(t)});

const PART_ESL={
topics:[
{id:'ex-esl-read',group:'esl',ico:'📰',name:'ESL Reading: notices, emails, articles',blurb:'Short notices, club adverts, an email and an article',col:'#2f6fed',keepOrder:true,Q:esl_read,
 sheet:`<h3>Reading tips</h3><ul>
<li>Read the question first, then find the part of the text that answers it.</li>
<li>The answer often uses <b>different words</b>: "The shop is shut on Sunday" = "You cannot buy anything there on Sunday".</li>
<li>An option that copies words from the text is not always true.</li>
<li>Watch small words: <b>not, only, before, after, unless, most</b>.</li>
<li><b>Tick ALL</b>: judge each option on its own.</li>
<li><b>Matching</b>: check every condition (age, day, time, price, hobby).</li>
<li><b>Number clues</b>: if a film is 90 minutes and that is twice as long as a play, the play is 45 minutes.</li>
<li><b>Purpose</b>: to inform, describe, persuade, instruct or complain.</li>
<li>Meaning of a phrase: read the sentences before and after it.</li></ul>`},
{id:'ex-esl-use',group:'esl',ico:'🧩',name:'ESL Use of English',blurb:'Gap fill, tenses, modals, quantifiers, prepositions',col:'#7a4fd6',keepOrder:true,Q:esl_use,
 sheet:`<h3>Tenses</h3><ul>
<li>Past continuous + past simple: <i>I was reading when the phone rang.</i></li>
<li>Present perfect (up to now): <i>She has never seen snow. He has lived here since 2020 / for three years.</i></li>
<li>First conditional: <i>If we hurry, we will catch the train.</i></li></ul>
<h3>Words that go together</h3><ul>
<li><b>should</b> advice, <b>mustn't</b> not allowed, <b>needn't</b> not necessary, <b>might</b> possible.</li>
<li><b>many</b> books (countable), <b>much</b> milk (uncountable).</li>
<li>Two things: <b>both</b>, <b>either</b> (one or the other), <b>neither</b> (not one, not the other).</li>
<li><b>who</b> people, <b>which</b> things, <b>whose</b> belonging, <b>where</b> places.</li>
<li><i>She said that...</i> but <i>She told me that...</i></li>
<li><i>I was bored. The film was boring.</i></li>
<li>Prepositions: keen <b>on</b>, famous <b>for</b>, angry <b>with</b>, listen <b>to</b>.</li>
<li>Compare: <i>as tall as, taller than, the tallest</i>.</li>
<li><b>a / an</b>: listen to the first sound (a uniform, an hour).</li></ul>
<h3>Gap fill</h3><p>Read the whole sentence, decide what kind of word is missing, then read it again with your word.</p>`},
{id:'ex-esl-voc',group:'esl',ico:'🔤',name:'ESL Vocabulary in context',blurb:'Story gaps, word building, word partners',col:'#1c9a6c',keepOrder:true,Q:esl_voc,
 sheet:`<h3>Choosing a word</h3><ul>
<li>Try every option in the gap and read the whole sentence.</li>
<li>Look at the words next to the gap: some words only live in pairs (<i>catch a cold, take a photo</i>).</li></ul>
<h3>Word building</h3><ul>
<li>"Not": <b>un-</b>kind, <b>dis-</b>honest, <b>im-</b>polite.</li>
<li><b>-ful</b> full of (joyful), <b>-less</b> without (hopeless).</li>
<li>Nouns: invite - invita<b>tion</b>, discuss - discus<b>sion</b>, paint - paint<b>er</b>.</li></ul>
<h3>Partners</h3><ul>
<li><b>make</b> a cake, make a plan; <b>do</b> the shopping, do sport.</li>
<li><b>borrow</b> = take for a time; <b>lend</b> = give for a time.</li>
<li><b>give up</b> stop trying, <b>find out</b> discover, <b>turn down</b> make quieter.</li>
<li>Groups: <i>a herd of cows, a team of players</i>.</li></ul>`},
{id:'ex-esl-write',group:'esl',ico:'✍️',name:'ESL Writing: emails, stories, opinions',blurb:'Task reading, register, linking words, proofreading, your own writing',col:'#d9622b',Q:esl_write,
 sheet:`<h3>Before you write</h3><ul>
<li>Underline every point in the task and note the word limit.</li>
<li>Plan for a few minutes, write, then check capitals, full stops, tenses and spelling.</li></ul>
<h3>Formal or informal?</h3><ul>
<li>Friend: <i>Hi Jo, ... Bye for now</i>.</li>
<li><i>Dear Sir or Madam</i> ends with <i>Yours faithfully</i>; <i>Dear Mrs Khan</i> ends with <i>Yours sincerely</i>.</li></ul>
<h3>Linking words</h3><ul>
<li>Contrast: although, however. Reason: because, since. Result: so, as a result.</li>
<li>Time: first, later, while, as soon as. Adding: also, what is more.</li></ul>
<h3>Text types</h3><ul>
<li><b>Story</b>: past tense, what you saw, how you felt, what happened, an ending.</li>
<li><b>Opinion</b>: view, reasons with examples, short ending.</li>
<li><b>Description</b>: adjectives and place phrases.</li></ul>
<h3>Proofread</h3><ul>
<li>your / you're, there / their / they're, its / it's.</li>
<li><i>"Wait for me!" shouted Jo.</i></li></ul>`}
],
vocab:[
 ['linking word','слово-связка','joins ideas: because, however, until'],
 ['formal','официальный','polite style for people you do not know'],
 ['informal','неофициальный, дружеский','style for friends and family'],
 ['paragraph','абзац','a group of sentences about one idea'],
 ['article','статья','a text in a magazine or website'],
 ['notice','объявление; замечать','a short public message, or: to see something'],
 ['prefix','приставка','letters added before a word'],
 ['punctuated','с расставленными знаками препинания','with full stops, commas and speech marks'],
 ['opinion','мнение','what you think about something'],
 ['proofread','проверить текст на ошибки','read again to find mistakes']
],
glossary:[
 ['swimming','плавание'],['pool','бассейн'],['shut','закрытый; закрывать'],['cleaning','уборка, чистка'],['lesson','урок, занятие'],['usual','обычный'],['lost and found','бюро находок'],['water bottle|bottle','бутылка (для воды)'],['front desk','стойка администратора'],['collect','забрать; собирать'],['charity shop|charity','благотворительный магазин; благотворительность'],['climbing wall','скалодром'],['climbing|climb','лазание; лазить'],['trainers','кроссовки'],['bag','сумка, рюкзак'],['mat','мат, коврик'],['free','бесплатный; свободный'],['offer','специальное предложение; предлагать'],['include','включать'],['meal','блюдо, прием пищи'],['sandwich','бутерброд, сэндвич'],['allow','разрешать'],
 ['weekend','выходные'],['club','кружок, клуб'],['partner','напарник'],['pair','пара'],['provide','предоставлять'],['tool','инструмент'],['clay','глина'],['protect','защищать'],['clothes','одежда'],['hill','холм'],['wild','дикий'],['boot','ботинок'],['prepare','готовить'],['show','спектакль; показывать'],['places are limited','количество мест ограничено'],['sign up','записаться'],['suit','подходить (кому-то)'],['machine','машина, механизм'],['nature','природа'],['audience','зрители, публика'],['join','вступить, присоединиться'],['meeting','встреча, занятие'],
 ['guess what','угадай что'],['new flat','новая квартира'],['last saturday','в прошлую субботу'],['sit with','сидеть вместе с'],['stage door','название кружка'],['trail team','название кружка'],['paint pot','название кружка'],['prepare a show','подготовить спектакль'],['make them move','заставить их двигаться'],
 ['carries them','возит их'],['the job is not','эта работа не'],['ice cream','мороженое'],['still, she','и все же она'],['box holds','в коробке (ящике) помещается'],['i make the','я издаю'],['made everyone feel','из-за этого все почувствовали себя'],['dentist','зубной врач'],['changing room','раздевалка'],['be patient','будьте терпеливы'],['summer','лето'],['main door','главный вход'],['at the end of term','в конце четверти'],['this term','в этой четверти'],['make a question','составить вопрос'],['makes up for','компенсирует'],['a job at','работа в'],['exactly half','ровно половина'],['kite free','освободил змея'],['yesterday evening','вчера вечером'],['add a prefix','добавь приставку'],['washing-up','мытье посуды'],['place you visited','место, где ты побывал'],['points to cover','пункты, которые надо раскрыть'],['can join','могут записаться'],['finally','наконец'],['flat','квартира; плоский'],['harbour','гавань, порт'],['bedroom','спальня'],['fishing boat','рыбацкая лодка'],['nervous','взволнованный, тревожный'],['however','однако'],['showed me round','показала мне все вокруг'],['bus ride','поездка на автобусе'],['twice as long','в два раза длиннее (дольше)'],['holiday','каникулы, отпуск'],['weather','погода'],['ferry','паром'],['island','остров'],['for seals','тюленей (искать)'],['pack a warm','возьми с собой теплую'],['jacket','куртка'],['windy','ветреный'],['sleeping bag','спальный мешок'],['spare','запасной, свободный'],['whether','ли; ... или нет'],['feelings','чувства'],['reply','ответить; ответ'],['visit','визит; навестить'],['possible','возможный'],
 ['bell','колокольчик, звонок'],['arrive','прибывать, приезжать'],['lend|lends|lent|lending','давать на время'],['wooden','деревянный'],['bicycle','велосипед'],['library','библиотека'],['disliked','не любили'],['river','река'],['expensive','дорогой'],['shelf|shelves','полка'],['hold','вмещать; держать'],['neighbour','сосед'],['borrow','брать на время'],['fines','штрафы'],['simply','просто'],['steep','крутой (о подъеме)'],['rainy','дождливый'],['plastic sheet','пластиковая пленка'],['push','толкать'],['tired','уставший'],['seldom','редко'],['sets out','отправляется в путь'],['effort','усилие, старание'],['worth','стоящий (того)'],['travelling','передвижной'],['persuade','убеждать'],['instructions','инструкции'],['mending|mend','чинить'],['complain','жаловаться'],['difficulty|difficulties','трудность'],['carries on','продолжает'],['happened','произошли'],['event','событие'],['mainly','в основном'],
 ['postcard','открытка'],['hobby','увлечение'],['drum','барабан'],['proud','гордый'],['progress','успехи, прогресс'],['band','музыкальная группа'],['steady beat','ровный ритм'],['noise','шум'],['choose the correct word','выбери правильное слово'],['dinner','ужин'],['lights','свет, лампы'],['brackets','скобки'],['camel','верблюд'],['tomorrow','завтра'],['indoors','в помещении, дома'],['meaning','значение'],['advice','совет'],['forbidden','запрещено'],['necessary','необходимый'],['certain','точно, наверняка'],['touch','трогать'],['wait','ждать'],['snow','снег; идти (о снеге)'],['homework','домашняя работа'],['information','информация'],['furniture','мебель'],['chair','стул'],['path','тропинка, дорожка'],['lake','озеро'],['safe','безопасный'],['aunt','тетя'],['engineer','инженер'],['museum','музей'],['closed','закрыт'],['everyone','все, каждый'],['question','вопрос'],['preposition','предлог'],['spider','паук'],['drawing','рисование; рисунок'],['early','рано'],['station','станция'],['space','космос; пространство'],['bake','печь (в духовке)'],['bread','хлеб'],
 ['runaway kite|my kite','воздушный змей'],['to reach it','чтобы дотянуться'],['windy','ветреный'],['reach','дотянуться'],['long pole','длинный шест'],['van','фургон'],['gently','осторожно'],['small tear','маленькая дырка'],['luckily','к счастью'],['noun','существительное'],['puppy','щенок'],['choosing|choose','выбирать'],['add','добавить'],['cannot be done','нельзя сделать'],['phrase','выражение'],['follows','следует за'],['travel','путешествовать, передвигаться'],['holiday','каникулы'],['rabbit','кролик'],['while I am away','пока меня нет'],['shoe','туфля, ботинок'],['everywhere','везде'],['person','человек'],['drive','водить (машину)'],['plane','самолет'],['queue','очередь'],['closest in meaning','ближе всего по значению'],['decided','решили'],['ruler','линейка'],['left mine at home','оставил свою дома'],
 ['school trip','школьная поездка'],['trip','поездка'],['favourite','любимый'],['price','цена'],['ticket','билет'],['headline','заголовок'],['newspaper','газета'],['include','включать'],['excellent','отличный'],['leaving one point out','пропуск одного пункта'],['phrases','фразы'],['letter','письмо; буква'],['director','директор'],['ending','концовка'],['pouring with rain','льет как из ведра'],['den','домик-укрытие, шалаш'],['living room','гостиная'],['crowded','переполненный людьми'],['managed|manage','суметь, справиться'],['message','сообщение'],['concert','концерт'],['brilliant','великолепный'],['especially','особенно'],['drummer','барабанщик'],['tent','палатка'],['puppy wagged','щенок вилял'],['wagged|wag','вилять'],['tail','хвост'],['speech marks','кавычки прямой речи'],
 ['invite','приглашать'],['birthday','день рождения'],['bring','принести с собой'],['friendly','дружеский'],['book','книга'],['give it back','вернуть это'],['continue','продолжить'],['story','история, рассказ'],['past tense','прошедшее время'],['suitcase','чемодан'],['believe','верить'],['inside','внутри'],['suddenly','вдруг'],['describe','опиши'],['things','вещи'],['room','комната'],['learn to cook','учиться готовить'],['cook','готовить еду'],['reason','причина, довод'],['overall','в целом']
]
};

/* ===== exam practice: science ===== */
/* Science exam practice, group "sci" (Cambridge Primary Checkpoint style, Stage 6). All items original. */
const sci_img=(w,h,b)=>'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'" font-family="Arial, sans-serif" font-size="13"><rect width="'+w+'" height="'+h+'" fill="#fffdf5"/>'+b+'</svg>');
const sci_pic=(q,img)=>Object.assign(q,{img:img});
const sci_ng=(q,...t)=>Object.assign(q,{ng:t});
const sci_s=skill=>'Exam style: '+skill+' (Cambridge Primary Stage 6)';
const sci_t=(x,y,s,a,extra)=>'<text x="'+x+'" y="'+y+'" text-anchor="'+(a||'middle')+'" fill="#1f1d36" '+(extra||'')+'>'+s+'</text>';
const sci_l=(x1,y1,x2,y2,w,c,extra)=>'<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+(c||'#1f1d36')+'" stroke-width="'+(w||2)+'" '+(extra||'')+'/>';
/* arrow with a solid head at the (x2,y2) end */
const sci_arrow=(x1,y1,x2,y2,c,w)=>{const a=Math.atan2(y2-y1,x2-x1),h=10,p=d=>(x2-h*Math.cos(a+d)).toFixed(1)+','+(y2-h*Math.sin(a+d)).toFixed(1);
  return sci_l(x1,y1,(x2-6*Math.cos(a)).toFixed(1),(y2-6*Math.sin(a)).toFixed(1),w||2.5,c)+'<polygon points="'+x2+','+y2+' '+p(0.45)+' '+p(-0.45)+'" fill="'+(c||'#1f1d36')+'"/>'};
/* table: widths of columns, rows of cells; the first row is the header; a cell 'a|b' is printed on two lines */
const sci_table=(widths,rows)=>{const W=widths.reduce((a,b)=>a+b,0)+8;let y=4,b='';
  rows.forEach((r,i)=>{const two=r.some(c=>String(c).includes('|')),h=two?40:27;let x=4;
    r.forEach((c,k)=>{b+='<rect x="'+x+'" y="'+y+'" width="'+widths[k]+'" height="'+h+'" fill="'+(i?'#ffffff':'#dbe9ff')+'" stroke="#1f1d36" stroke-width="1.5"/>';
      const p=String(c).split('|');p.forEach((s,j)=>{b+=sci_t(x+widths[k]/2,y+(p.length>1?17+j*16:h/2+5),s,'middle',i?'':'font-weight="700"')});x+=widths[k]});y+=h});
  return sci_img(W,y+4,b)};
/* line graph or scatter graph */
const sci_graph=o=>{const L=52,R=338,Tp=18,B=232,px=v=>L+(v-o.x0)/(o.x1-o.x0)*(R-L),py=v=>B-(v-o.y0)/(o.y1-o.y0)*(B-Tp);let b='';
  for(let v=o.y0;v<=o.y1+1e-9;v+=o.yg){b+=sci_l(L,py(v),R,py(v),1,'#c9c6dd');if(Math.abs((v-o.y0)/o.yl-Math.round((v-o.y0)/o.yl))<1e-9)b+=sci_t(L-7,py(v)+4,v,'end')}
  for(let v=o.x0;v<=o.x1+1e-9;v+=o.xg){b+=sci_l(px(v),Tp,px(v),B,1,'#c9c6dd')+sci_t(px(v),B+17,v)}
  b+=sci_l(L,Tp,L,B,2)+sci_l(L,B,R,B,2);
  if(o.line)b+='<polyline fill="none" stroke="#1d5fd1" stroke-width="2.5" points="'+o.pts.map(p=>px(p[0])+','+py(p[1])).join(' ')+'"/>';
  o.pts.forEach(p=>{b+='<circle cx="'+px(p[0])+'" cy="'+py(p[1])+'" r="4" fill="#b3261e"/>'});
  b+=sci_t((L+R)/2,B+36,o.xlab)+sci_t(14,(Tp+B)/2,o.ylab,'middle','transform="rotate(-90 14 '+(Tp+B)/2+')"');
  return sci_img(350,276,b)};

/* ---- pictures for Thinking and Working Scientifically ---- */
const sci_COOL=sci_graph({x0:0,x1:20,xg:5,y0:0,y1:90,yg:5,yl:10,line:true,pts:[[0,80],[5,60],[10,45],[15,35],[20,30]],xlab:'Time (minutes)',ylab:'Temperature (°C)'});
const sci_CYL=(()=>{const y=v=>270-(v-50)*8;let b='<path d="M110 148 Q180 168 250 148 L250 290 L110 290 Z" fill="#bfe0ff"/><path d="M110 148 Q180 168 250 148" fill="none" stroke="#1d5fd1" stroke-width="2.5"/>';
  for(let v=50;v<=80;v+=2){const big=v%10===0;b+=sci_l(110,y(v),big?182:170,y(v),big?2:1.2);if(big)b+=sci_t(100,y(v)+5,v,'end','font-size="15"')}
  b+=sci_l(110,10,110,290,3)+sci_l(250,10,250,290,3)+sci_l(110,290,250,290,3)+sci_t(290,30,'ml','middle','font-size="16" font-weight="700"');
  return sci_img(340,300,b)})();
const sci_THERM=(()=>{const y=v=>40+(30-v)*5;let b='<rect x="86" y="22" width="28" height="290" rx="14" fill="#ffffff" stroke="#1f1d36" stroke-width="2.5"/><rect x="94" y="'+y(-6)+'" width="12" height="'+(312-y(-6))+'" fill="#d93025"/><circle cx="100" cy="316" r="20" fill="#d93025" stroke="#1f1d36" stroke-width="2.5"/>';
  for(let v=-20;v<=30;v+=2){const big=v%10===0;b+=sci_l(114,y(v),big?134:124,y(v),big?2:1.2);if(big)b+=sci_t(142,y(v)+5,v,'start','font-size="15"')}
  b+=sci_t(142,20,'°C','start','font-size="16" font-weight="700"');
  return sci_img(210,345,b)})();
const sci_BOUNCE=sci_table([110,200],[['Drop','Bounce height (cm)'],['1','62'],['2','64'],['3','41'],['4','63']]);
const sci_SCAT=sci_graph({x0:120,x1:160,xg:5,y0:12,y1:20,yg:1,yl:2,line:false,pts:[[122,13.5],[126,14],[128,13],[132,15],[136,14.5],[140,16],[143,15.5],[147,17],[150,16.5],[155,18.5],[158,18]],xlab:'Height of child (cm)',ylab:'Hand span (cm)'});

/* ---- pictures for the body and matter mix ---- */
const sci_PULSE=sci_graph({x0:0,x1:10,xg:2,y0:60,y1:160,yg:10,yl:20,line:true,pts:[[0,80],[2,120],[4,150],[6,110],[8,90],[10,80]],xlab:'Time (minutes)',ylab:'Pulse (beats per minute)'});
const sci_GASES=sci_table([80,135,135],[['Gas','Air breathed|in','Air breathed|out'],['A','78%','78%'],['B','21%','16%'],['C','0.04%','4%']]);
const sci_LUNG=sci_img(340,270,
  '<path d="M85 60 Q85 40 120 40 L180 40 Q215 40 215 60 L215 215 L85 215 Z" fill="#e8f4ff" stroke="#1f1d36" stroke-width="3"/>'+
  '<rect x="143" y="14" width="14" height="86" fill="#ffffff" stroke="#1f1d36" stroke-width="2"/><rect x="128" y="32" width="44" height="16" fill="#8a6d4b"/><rect x="146" y="28" width="8" height="24" fill="#ffffff"/>'+
  '<path d="M143 98 C105 115 105 170 150 172 C195 170 195 115 157 98 Z" fill="#ffb3c1" stroke="#1f1d36" stroke-width="2"/>'+
  '<path d="M85 215 Q150 235 215 215" fill="none" stroke="#7b3fb3" stroke-width="6"/><circle cx="150" cy="233" r="7" fill="#7b3fb3"/>'+
  sci_l(157,22,240,22,1)+sci_t(246,26,'tube','start')+sci_l(180,135,240,135,1)+sci_t(246,139,'balloon','start')+sci_l(200,222,240,240,1)+sci_t(246,244,'rubber sheet','start')+sci_t(150,262,'pull here'));
const sci_BREAD=sci_table([200,150],[['How the slice was touched','Mould spots|after 6 days'],['Clean tongs only','1'],['Washed hands','3'],['Unwashed hands','14']]);
const sci_SUBS=sci_table([110,120,120],[['Substance','Melting point|(°C)','Boiling point|(°C)'],['U','-78','-33'],['V','801','1413'],['W','-210','-196'],['X','-39','357'],['Y','63','759'],['Z','-114','78']]);

/* ---- food web (hotspot + picture) ---- */
const sci_WEB_PTS=[{n:'Grass',x:180,y:274},{n:'Grasshopper',x:75,y:204},{n:'Rabbit',x:260,y:204},{n:'Frog',x:60,y:128},{n:'Fox',x:305,y:128},{n:'Snake',x:95,y:52},{n:'Hawk',x:250,y:52}];
const sci_WEB_BODY=
  sci_arrow(150,242,102,224)+sci_arrow(210,242,244,224)+sci_arrow(70,172,64,148)+sci_arrow(68,96,81,72)+sci_arrow(145,45,198,45)+sci_arrow(250,172,250,72)+sci_arrow(278,172,295,148)+
  sci_WEB_PTS.map(p=>'<rect x="'+(p.x-50)+'" y="'+(p.y-38)+'" width="100" height="58" rx="10" fill="#e4f6dc" stroke="#1f1d36" stroke-width="2"/>'+sci_t(p.x,p.y-23,p.n,'middle','font-size="14" font-weight="700"')).join('');
const sci_WEB={vb:'0 0 360 300',body:'<rect width="360" height="300" fill="#fffdf5"/>'+sci_WEB_BODY};
const sci_WEB_IMG=sci_img(360,300,sci_WEB_BODY);
const sci_KEY=(()=>{const box=(x,y,w,a,b)=>'<rect x="'+(x-w/2)+'" y="'+y+'" width="'+w+'" height="40" rx="8" fill="#fff1c9" stroke="#1f1d36" stroke-width="2"/>'+(b?sci_t(x,y+17,a)+sci_t(x,y+32,b):sci_t(x,y+25,a));
  const end=(x,n)=>'<circle cx="'+x+'" cy="205" r="20" fill="#dbe9ff" stroke="#1f1d36" stroke-width="2"/>'+sci_t(x,211,n,'middle','font-size="18" font-weight="700"');
  return sci_img(360,235,box(180,10,160,'Does it have legs?')+sci_arrow(140,50,92,92)+sci_arrow(220,50,268,92)+sci_t(100,66,'yes')+sci_t(260,66,'no')+
    box(90,94,160,'Does it have','exactly six legs?')+box(270,94,160,'Does it have','a shell?')+
    sci_arrow(65,134,48,183)+sci_arrow(115,134,132,183)+sci_arrow(245,134,228,183)+sci_arrow(295,134,312,183)+
    sci_t(38,160,'yes')+sci_t(142,160,'no')+sci_t(218,160,'yes')+sci_t(322,160,'no')+end(45,'A')+end(135,'B')+end(225,'C')+end(315,'D'))})();

/* ---- physics pictures ---- */
const sci_METER=(()=>{const y=v=>46+v*22;let b=sci_l(150,2,150,20,3)+'<rect x="112" y="20" width="76" height="262" rx="12" fill="#ffffff" stroke="#1f1d36" stroke-width="2.5"/>';
  for(let v=0;v<=10;v++){const big=v%2===0;b+=sci_l(122,y(v),big?148:138,y(v),big?2:1.2);if(big)b+=sci_t(168,y(v)+5,v,'middle','font-size="15"')}
  b+='<polygon points="104,'+y(7)+' 86,'+(y(7)-9)+' 86,'+(y(7)+9)+'" fill="#b3261e"/>'+sci_l(104,y(7),150,y(7),3,'#b3261e')+sci_l(150,282,150,305,3)+'<rect x="128" y="305" width="44" height="30" fill="#8d93a8" stroke="#1f1d36" stroke-width="2"/>'+sci_t(215,26,'N','middle','font-size="18" font-weight="700"')+sci_t(60,y(7)+5,'pointer');
  return sci_img(300,342,b)})();
const sci_FLOAT=sci_img(340,230,'<rect x="20" y="105" width="300" height="115" fill="#bfe0ff"/>'+sci_l(20,105,320,105,2,'#1d5fd1')+'<rect x="120" y="82" width="100" height="52" fill="#c89b6d" stroke="#1f1d36" stroke-width="2.5"/>'+
  sci_arrow(150,108,150,200,'#1d5fd1',4)+sci_arrow(190,108,190,16,'#b3261e',4)+'<circle cx="150" cy="108" r="4" fill="#1d5fd1"/><circle cx="190" cy="108" r="4" fill="#b3261e"/>'+sci_t(142,214,'weight = 4 N','end','font-weight="700"')+sci_t(200,34,'push of the water','start','font-weight="700"')+sci_t(200,52,'= ? N','start','font-weight="700"'));
const sci_PUSH=sci_img(340,170,sci_l(10,130,330,130,3)+'<rect x="140" y="70" width="70" height="60" fill="#c89b6d" stroke="#1f1d36" stroke-width="2.5"/>'+
  sci_arrow(210,96,306,96,'#b3261e',5)+sci_arrow(140,122,100,122,'#1d5fd1',5)+sci_t(268,80,'push 12 N','middle','font-weight="700"')+sci_t(80,108,'friction 5 N','middle','font-weight="700"')+sci_t(170,155,'box at rest on a table'));
const sci_MIRROR={vb:'0 0 360 230',body:'<rect width="360" height="230" fill="#fffdf5"/>'+sci_l(30,196,330,196,5,'#1d5fd1')+
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13].map(i=>sci_l(50+i*20,210,64+i*20,199,1.5,'#6b6890')).join('')+sci_l(180,196,180,24,1.5,'#6b6890','stroke-dasharray="3 5"')+
  sci_l(64,58,180,196,3,'#b3261e')+sci_arrow(64,58,126,132,'#b3261e',3)+
  sci_l(180,196,224,32,2.5,'#b3261e','stroke-dasharray="9 5"')+sci_l(180,196,296,58,2.5,'#b3261e','stroke-dasharray="9 5"')+sci_l(180,196,333,134,2.5,'#b3261e','stroke-dasharray="9 5"')+
  sci_t(54,44,'light in','middle','font-size="14"')+sci_t(132,16,'line at 90° to mirror','middle','font-size="12"')+sci_t(180,226,'mirror','middle','font-size="14"')};
const sci_MIRROR_PTS=[{n:'Ray P',x:224,y:32},{n:'Ray Q',x:296,y:58},{n:'Ray R',x:333,y:134}];
const sci_CIRC={vb:'0 0 360 250',body:'<rect width="360" height="250" fill="#fffdf5"/>'+
  sci_l(30,55,82,55,3)+sci_l(82,28,82,82,2.5)+sci_l(98,42,98,68,7)+sci_l(98,55,150,55,3)+
  sci_l(210,55,248,55,3)+'<circle cx="270" cy="55" r="22" fill="none" stroke="#1f1d36" stroke-width="3"/>'+sci_l(254,39,286,71,3)+sci_l(286,39,254,71,3)+sci_l(292,55,330,55,3)+
  sci_l(30,175,68,175,3)+'<circle cx="72" cy="175" r="5" fill="#1f1d36"/><circle cx="112" cy="175" r="5" fill="#1f1d36"/>'+sci_l(72,175,107,148,3)+sci_l(112,175,150,175,3)+
  '<path d="M244 165 A26 26 0 0 1 296 165 Z" fill="none" stroke="#1f1d36" stroke-width="3"/><path d="M258 165 L258 180 L210 180 M282 165 L282 180 L330 180" fill="none" stroke="#1f1d36" stroke-width="3"/>'};
const sci_CIRC_PTS=[{n:'Cell',x:90,y:108},{n:'Lamp',x:270,y:108},{n:'Open switch',x:90,y:218},{n:'Buzzer',x:270,y:218}];
const sci_lamp=(x,y)=>'<circle cx="'+x+'" cy="'+y+'" r="18" fill="#fff7b0" stroke="#1f1d36" stroke-width="2.5"/>'+sci_l(x-13,y-13,x+13,y+13,2)+sci_l(x+13,y-13,x-13,y+13,2);
const sci_cellTop=(x,y)=>'<rect x="'+(x-9)+'" y="'+(y-4)+'" width="18" height="8" fill="#fffdf5"/>'+sci_l(x-8,y-20,x-8,y+20,2.5)+sci_l(x+8,y-10,x+8,y+10,6);
const sci_SERIES=sci_img(340,170,'<rect x="40" y="35" width="260" height="100" fill="none" stroke="#1f1d36" stroke-width="3"/>'+sci_cellTop(170,35)+sci_lamp(115,135)+sci_lamp(225,135)+sci_t(170,166,'two lamps in series'));
const sci_PARA=sci_img(340,210,'<path d="M50 40 L290 40 L290 105 L50 105 Z M50 105 L50 170 L290 170 L290 105" fill="none" stroke="#1f1d36" stroke-width="3"/>'+sci_cellTop(170,40)+sci_lamp(170,105)+sci_lamp(170,170)+sci_t(122,96,'lamp 1')+sci_t(122,161,'lamp 2')+sci_t(170,205,'two lamps in parallel'));

/* ---- space picture ---- */
const sci_PLANETS=sci_table([76,100,92,94],[['Planet','From Sun|(million km)','One orbit|(Earth days)','Average|temp. (°C)'],['Mercury','58','88','167'],['Venus','108','225','464'],['Earth','150','365','15'],['Mars','228','687','-65'],['Jupiter','778','4333','-110']]);

const PART_SCIENCE={
topics:[
/* ================= 1. Thinking and working scientifically ================= */
{id:'ex-sci-enquiry', group:'sci', ico:'🔬', name:'Think Like a Scientist', blurb:'Variables, fair tests, scales, tables, graphs and conclusions - useful on every paper', col:'#7c5cff',
sheet:`<h3>Variables in a fair test</h3><table><tr><th>Name</th><th>What you do</th></tr>
<tr><td>Independent</td><td><b>change</b> it (only one!)</td></tr><tr><td>Dependent</td><td><b>measure</b> it</td></tr><tr><td>Control</td><td><b>keep it the same</b></td></tr></table>
<p>"Why keep it the same?" Answer: <b>to make it a fair test</b>.</p>
<h3>Reading scales</h3><ul><li>First find what <b>one small step</b> is worth: from 0 to 100 in 4 gaps means 25 each.</li><li>Liquid: eye level, read the <b>bottom of the curve</b>.</li><li>Below zero, count carefully down from 0.</li></ul>
<h3>Results</h3><ul><li>An <b>anomalous</b> result does not fit: check it and repeat. Leave it out of the mean.</li><li>Mean = total ÷ how many.</li><li><b>Bar chart</b> for separate groups. <b>Line graph</b> for a change that is measured on a scale, such as over time. <b>Scatter graph</b> to look for a link between two measurements.</li></ul>
<h3>Conclusions</h3><ul><li>Compare: "The <b>longer</b> the ramp, the <b>further</b> it goes."</li><li>Say what the results show, not what you hoped.</li><li>"Tends to" allows some exceptions.</li></ul>
<h3>Types of enquiry</h3><p>Fair test, observing over time, pattern seeking, identifying and classifying, research. A <b>model</b> shows how something hard to see works, but it is not a perfect copy.</p>`,
Q:[
 sort('Zara asks: does the size of a parachute change the time it takes to fall? Sort the variables for her test.',['Change','Measure','Keep the same'],[
  ['Area of the parachute',0],['Time taken to reach the floor',1],['Height of the drop',2],['Mass hanging under the parachute',2],['Material of the parachute',2],['Shape of the parachute',2]],
  'Change ONE thing (the size), measure the result (the time) and keep everything else the same. That makes it a fair test.',sci_s('identifying variables')),
 sci_pic(typed('The graph shows hot water cooling. How many degrees did the temperature fall between 5 minutes and 15 minutes?',['25','25 °C','25°C','25 C','25C','25 degrees','25 degrees C','25 degrees Celsius'],'Read both points: 60 °C at 5 minutes and 35 °C at 15 minutes. 60 - 35 = 25 °C.',sci_s('reading a line graph'),'°C'),sci_COOL),
 sci_pic(mc('Which conclusion matches the cooling graph?','The water cooled more slowly as time went on',['The water cooled by the same amount every 5 minutes','The water became warmer again after 15 minutes','The water cooled most slowly right at the start'],'The falls every 5 minutes are 20, 15, 10 and 5 degrees. They get smaller, so the cooling slows down.',sci_s('drawing a conclusion from a graph')),sci_COOL),
 sci_pic(slider('Read the volume of water in this close-up of a measuring cylinder.',{min:50,max:80,step:1,unit:'ml'},64,0,'Each small step is 2 ml. The bottom of the curve is two steps above 60, so the volume is 64 ml.',sci_s('reading a measuring cylinder')),sci_CYL),
 mc('Where should your eye be when you read the water level in a measuring cylinder?','Level with the bottom of the curve',['Well above it, looking down into the cylinder','Well below it, looking up through the water','Level with the top rim of the cylinder'],'Look straight at the water surface, at eye level, and read the bottom of the curve. Looking from above or below gives a wrong reading.',sci_s('taking accurate measurements')),
 sci_pic(typed('What temperature does this thermometer show? Take care with the sign.',['-6','-6 °C','-6°C','- 6','−6','−6 °C','−6°C','-6 C','-6 degrees','minus 6','-6 degrees C','-6C','-6 degrees Celsius','minus 6 degrees'],'Each small step is 2 degrees. The liquid ends three steps below 0, so it shows -6 °C.',sci_s('reading a thermometer'),'°C'),sci_THERM),
 sci_pic(typed('Ava drops the same ball from the same height four times. One bounce height is anomalous (it does not fit). Type that height.',['41','41 cm','41cm','41 centimetres'],'62, 64 and 63 are close together. 41 is far away from them, so it is the anomalous result.',sci_s('spotting an anomalous result'),'cm'),sci_BOUNCE),
 sci_pic(typed('Look at the bounce results. Leave out the anomalous one. What is the mean of the other three heights?',['63','63 cm','63cm','63 centimetres'],'Add the three good results: 62 + 64 + 63 = 189. Then 189 ÷ 3 = 63 cm.',sci_s('calculating a mean from repeats'),'cm'),sci_BOUNCE),
 tf('Repeating a measurement helps you to notice a result that does not fit with the others.',true,'With several results you can compare them. A strange one stands out and can be checked.',sci_s('reliability')),
 mc('Priya tests which of three kinds of paper towel soaks up the most water. Why must every piece be the same size?','To make it a fair test',['To make the water soak in more slowly','To make the water easier to pour out','So that only one towel needs testing'],'The size is a control variable. If the sizes were different, you could not tell whether the kind of paper or the size caused the result.',sci_s('control variables')),
 match('Match each type of enquiry to an example of it.',[
  ['Fair test','Change the slope of a ramp and time the same toy car'],
  ['Observing over time','Measure one bean plant every day for three weeks'],
  ['Pattern seeking','Survey 60 people to see whether taller people have longer feet'],
  ['Identifying and classifying','Use a key to name the leaves collected in a park'],
  ['Research','Use books to find out how far away Mars is']],
  'Fair test: you change one variable. Over time: you keep watching. Pattern seeking: you look for a link in many examples. Classifying: you name and group. Research: you use what others found.',sci_s('types of scientific enquiry')),
 sort('Which graph is the better choice for each set of results?',['Bar chart','Line graph'],[
  ['Favourite fruit of 30 children',0],['Height of one sunflower, week by week',1],['Number of each kind of bird at a feeder',0],['Temperature of soup, minute by minute',1],['Mass of four different kinds of ball',0],['Temperature of a room, hour by hour',1]],
  'Separate groups (kinds of fruit, birds, balls) go on a bar chart. A measurement that changes over time goes on a line graph.',sci_s('choosing a graph')),
 sci_pic(mc('What pattern does this scatter graph show?','Taller children tend to have wider hand spans',['Taller children tend to have narrower hand spans','All the children have the same hand span','Hand span has no link at all with height'],'The points generally go up from left to right: as height increases, hand span tends to increase.',sci_s('finding a pattern in a scatter graph')),sci_SCAT),
 sci_pic(tf('This graph shows that EVERY taller child has a wider hand span than EVERY shorter child.',false,'There are exceptions. For example, the child who is 128 cm tall has a smaller hand span than the child who is 122 cm. It is only a general pattern.',sci_s('judging a claim with data')),sci_SCAT),
 write('Omar wants to find out whether the kind of surface changes how far a toy car rolls after it leaves a ramp. Describe how he can make this a fair test.',['surface|carpet|floor|material','same|identical|constant|unchanged|not change|n\'t change','distance|how far|measure|metre|ruler|tape'],'Change only the surface. Use the same car, let it go from the same height on the same ramp, and measure how far it rolls with a tape measure.','Name the thing you change (the surface), what you keep the same (car, ramp, starting point) and what you measure (the distance).',sci_s('planning a fair test')),
 multi('Tick ALL the sensible ways to stay safe when an investigation uses hot water.',['Tie back long hair','Place the beaker in the middle of the table','Tell an adult at once if water spills','Let an adult pour the very hot water'],['Lean right over the beaker to see better','Touch the glass to check how hot it is','Carry the beaker round a busy room'],'Think about the risk (burns and spills) and how to make it smaller: keep your body away, keep the beaker steady and ask for help.',sci_s('identifying risks')),
 mc('Doctors often use a plastic model of the heart. What is the best reason for using a model?','It helps to show how a hidden thing is built',['It is a copy that matches a real heart in every single way','It means that nobody ever needs to test anything again','It is mainly there to make the room look more interesting'],'A model helps us to see and explain something that is hidden, very big or very small. It is simpler than the real thing.',sci_s('using models'))
]},

/* ================= 2. Body, health, matter, dissolving: new applications ================= */
{id:'ex-sci-mix', group:'sci', ico:'🩺', name:'Body & Matter: Exam Mix', blurb:'Use what you know about the body, germs, states of matter and dissolving in new situations', col:'#e5484d',
sheet:`<h3>Exam tips</h3><ul><li><b>Explain</b> = say what happens AND why, using "because" or "so".</li><li>Use numbers from the graph or table in your answer.</li></ul>
<h3>Body</h3><ul><li>Hard-working muscles need more oxygen and sugar for energy and make more carbon dioxide.</li><li>Blood is pumped <b>heart - lungs - heart - body - heart</b> (a double circuit).</li><li>Arteries carry blood away from the heart and have a pulse. Veins bring it back.</li><li>Pulmonary vessels go to and from the lungs, so their oxygen levels are the "other way round".</li><li>Breathing in: the diaphragm moves down, the chest gets bigger, air flows in.</li></ul>
<h3>Matter</h3><ul><li>Below the melting point: solid. Between melting and boiling point: liquid. Above the boiling point: gas. Example: melts at 30, boils at 200, so at 100 it is liquid.</li><li>Gases have mass. Their particles move around and spread out.</li><li>Cooling water vapour condenses into drops.</li></ul>
<h3>Mixtures</h3><ul><li><b>Filter</b>: catches an insoluble solid.</li><li><b>Evaporate</b>: gets a dissolved solid back.</li><li>Mass of solution = mass of liquid + mass of solid.</li></ul>`,
Q:[
 sci_pic(typed('Sam starts to run at 0 minutes and stops running at 4 minutes. How many minutes after he stops does his pulse get back to the value it had at the start?',['6','6 minutes','6 min','6 mins','six'],'The starting pulse is 80. The line is back at 80 at 10 minutes. He stopped at 4 minutes, so 10 - 4 = 6 minutes.',sci_s('reading pulse data'),'minutes'),sci_PULSE),
 write('Explain why your heart beats faster when you are skipping with a rope than when you are sitting still.',['muscle','oxygen','energy|respir','blood'],'The muscles need more energy, so they need more oxygen and sugar. The heart beats faster to pump blood to the muscles more quickly and to carry carbon dioxide away.','Build a chain: muscles work harder, need more oxygen, so the heart pumps more blood to them each minute.',sci_s('explaining the effect of exercise')),
 mc('A nurse presses two fingers on your wrist and feels your pulse. Which kind of blood vessel is under her fingers?','An artery',['A vein','A capillary','A bronchiole'],'The pulse is the push of blood from each heartbeat travelling through an artery. A bronchiole carries air, not blood.',sci_s('applying knowledge of blood vessels')),
 mc('Kai says, "Every artery carries oxygen-rich blood." Which blood vessel shows that he is wrong?','The pulmonary artery',['The aorta, the main artery','The vena cava','The pulmonary vein'],'The pulmonary artery is an artery (blood leaves the heart in it), but it carries oxygen-poor blood to the lungs.',sci_s('testing a claim about circulation')),
 typed('A drop of blood leaves the heart, goes to the lungs once and to the rest of the body once, and ends where it began. How many times does the heart pump it on this journey?',['2','two','twice','2 times','two times','2 time'],'The right side pumps it to the lungs and the left side pumps it to the body: 2 times. That is why it is called a double circulation.',sci_s('describing the double circulation')),
 sci_pic(match('The table compares air breathed in with air breathed out. Match each letter to its gas.',[
  ['Gas A','Nitrogen: the body does not use it'],['Gas B','Oxygen: some of it moves into the blood'],['Gas C','Carbon dioxide: it leaves the blood']],
  'The amount that goes down is oxygen (used by the body). The amount that goes up is carbon dioxide (given out). The one that stays the same is nitrogen.',sci_s('interpreting gas data')),sci_GASES),
 sci_pic(mc('This model shows how breathing works. Which part of the body does the rubber sheet stand for?','The diaphragm',['A lung','The windpipe','The ribs and chest'],'The sheet at the bottom moves down and up like the diaphragm. The balloon stands for a lung and the tube for the windpipe.',sci_s('interpreting a model of the lungs')),sci_LUNG),
 sci_pic(mc('Three slices of bread were sealed in bags and kept in the same place. Which conclusion do the results support?','Washing hands means fewer microbes reach food',['Washing hands makes mould grow much faster on bread','Clean tongs pass the most microbes to bread','Hands do not carry any microbes after washing'],'Unwashed hands gave 14 spots and washed hands only 3, so washing removes many microbes. There were still some spots, so washed hands are not completely free of them.',sci_s('conclusion from a hygiene test')),sci_BREAD),
 sci_pic(sort('Room temperature is 20 °C. Is each substance a solid, a liquid or a gas at room temperature?',['Solid','Liquid','Gas'],[
  ['Substance U',2],['Substance V',0],['Substance W',2],['Substance X',1],['Substance Y',0],['Substance Z',1]],
  'Compare 20 °C with both numbers. Below the melting point: solid. Between the two: liquid. Above the boiling point: gas.',sci_s('using melting and boiling points')),sci_SUBS),
 sci_ng(mc('Drops of water appear on the outside of a cold glass of juice. Where did this water come from?','Water vapour in the air condensed on it',['Juice leaked out through the sides of the glass','Melted ice passed through the walls of the glass','Part of the glass itself slowly turned into water'],'The air contains invisible water vapour. When it touches the cold glass it cools and turns into liquid drops.',sci_s('explaining condensation')),'condensation'),
 write('A bottle of perfume is opened in one corner of a room. A few minutes later you can smell it on the other side. Use the idea of particles to explain how.',['evaporat','particle','gas|vapour|air','move|moving|spread|travel|mix|diffus'],'Some of the liquid perfume evaporates and becomes a gas. Its particles move around and spread out among the air particles until some reach your nose.','Say the change of state first (evaporation), then what the particles do (move and spread out).',sci_s('particle explanation')),
 mc('A flat football has a mass of 410 g. After air is pumped into it, the mass is 416 g. What does this show?','Air, which is a gas, has mass',['Air has no mass until it becomes a liquid','Pumping turns the air into a solid inside the ball','The pump takes some rubber away from the ball'],'The only thing added was air, and the mass went up by 6 g. So the gas has mass.',sci_s('evidence that gases have mass')),
 typed('Salt is stirred into 200 g of water until it has all dissolved. The solution has a mass of 218 g. How much salt was added?',['18','18 g','18g','18 gram','18 grams'],'Mass of solution = mass of water + mass of salt. So the salt is 218 - 200 = 18 g.',sci_s('conservation of mass, working backwards'),'g'),
 order('Lina has a mixture of sand and salt. Put the steps in order to get both of them back separately.',[
  'Add water to the mixture and stir','Pour it through filter paper, which holds back the sand','Collect the salty water that drips through','Leave the salty water somewhere warm','Find salt crystals left in the dish'],
  'First dissolve the salt, then filter out the insoluble sand, then evaporate the water to get the salt back.',sci_s('separating a mixture')),
 tf('Filter paper can separate dissolved salt from water.',false,'Dissolved salt passes through the paper together with the water. To get the salt back, evaporate the water.',sci_s('choosing a separation method'))
]},

/* ================= 3. Living things and ecosystems (bonus) ================= */
{id:'ex-sci-living', group:'sci', ico:'🦊', name:'Living Things & Food Webs', blurb:'Exam practice - some of this may be new: food webs, toxins, keys and plants', col:'#30a46c', bonus:true,
sheet:`<h3>Food chains and webs</h3><ul><li>The arrow means <b>"is eaten by"</b> and shows where the energy goes: leaf → snail → thrush.</li><li><b>Producer</b>: a living thing that makes its own food, such as a green plant. It uses light energy (photosynthesis).</li><li><b>Consumer</b>: eats other living things. <b>Herbivore</b> eats plants, <b>carnivore</b> eats animals.</li><li><b>Predator</b> hunts, <b>prey</b> is hunted. <b>Habitat</b>: where something lives.</li><li>The energy starts with the Sun.</li></ul>
<h3>What if one kind disappears?</h3><p>Ask two things: what did it <b>eat</b> (those may increase) and what <b>ate it</b> (those get less food).</p>
<h3>Toxins</h3><p>Some poisons do not break down. They stay in bodies. Each animal eats many of the ones below, so the poison <b>builds up</b> along the chain.</p>
<h3>Keys</h3><p>Start at the top. Answer one yes / no question at a time and follow the arrow.</p>`,
Q:[
 hotspot('Tap the producer in this food web.',sci_WEB,sci_WEB_PTS,'Grass','A producer makes its own food. Grass is a green plant; all the others eat something.',sci_s('naming producers and consumers')),
 sci_pic(mc('What do the arrows in a food web show?','Which way the energy passes as food',['Which way each animal walks to hunt','Which living thing is bigger than the other','Which animal is hiding from which'],'An arrow goes from the food to the eater. It shows the energy moving from one living thing to the next.',sci_s('reading a food web')),sci_WEB_IMG),
 sci_pic(typed('In this food web, how many different kinds of living thing does the hawk eat?',['2','two','2 kinds','two kinds','2 animals','two animals'],'Follow the arrows that point TO the hawk: one from the snake and one from the rabbit.',sci_s('reading a food web')),sci_WEB_IMG),
 sci_pic(mc('A disease kills most of the frogs. What is most likely to happen soon afterwards?','Grasshopper numbers go up',['Grasshopper numbers drop to zero','The snakes find much more food','The grass grows thicker than before'],'Fewer frogs are eating grasshoppers, so more grasshoppers survive. They eat more grass, and the snakes have less food.',sci_s('predicting changes in a food web')),sci_WEB_IMG),
 sort('Sort the living things into groups.',['Producer','Herbivore','Carnivore'],[
  ['Oak tree',0],['Seaweed',0],['Grass',0],['Caterpillar',1],['Rabbit',1],['Giraffe',1],['Shark',2],['Eagle',2],['Frog',2]],
  'Producers make their own food. Herbivores eat only plants. Carnivores eat other animals.',sci_s('classifying by feeding')),
 order('Put this pond food chain in order, starting with the producer.',['Algae','Tadpole','Small fish','Heron'],'Algae make their own food. A young tadpole eats algae, a small fish eats the tadpole and the heron eats the fish.',sci_s('building a food chain')),
 tf('The energy in a meadow food chain comes from the Sun in the first place.',true,'Plants capture light energy from the Sun to make food. Animals get that energy by eating plants or other animals.',sci_s('energy in food chains')),
 write('A poisonous chemical that does not break down gets into a lake. Explain why the birds at the top of the food chain are harmed the most.',['eat|feed','many|lots|large number|a lot|more and more','build|accumulat|collect|adds up|add up|stor|increas|concentrat','poison|toxi|chemical'],'The poison stays inside living things. Each animal eats many of the ones below it, so the poison builds up along the chain. The birds at the top eat many fish and collect the most poison.','Follow the chain upwards: the poison is not lost, and each eater takes in the poison from many meals.',sci_s('toxins in food chains')),
 sci_pic(match('Use the key. Which letter does each animal reach?',[
  ['A ladybird','Letter A'],['A spider','Letter B'],['A snail','Letter C'],['An earthworm','Letter D']],
  'Ladybird: legs, six of them (A). Spider: legs, but eight (B). Snail: no legs, has a shell (C). Earthworm: no legs, no shell (D).',sci_s('using an identification key')),sci_KEY),
 spot('Find the mistake and tap it.','A green plant makes its own food in its leaves, using [[sound|light]] energy.','Plants make food by photosynthesis. The energy for this comes from light.',sci_s('how plants make food')),
 sci_ng(fill('An animal that is hunted and eaten is the ___. The animal that hunts it is the ___. The natural place where they live is their ___.',['prey','predator','habitat'],['prey','predator','habitat','producer','pollen'],'Prey is hunted, a predator hunts, and a habitat is the natural home of living things.',sci_s('ecosystem words')),'prey','predator','habitat','producer')
]},

/* ================= 4. Forces, light, sound, electricity (bonus) ================= */
{id:'ex-sci-physics', group:'sci', ico:'💡', name:'Forces, Light, Sound & Circuits', blurb:'Exam practice - some of this may be new: forces, mirrors, sound and electric circuits', col:'#f5a524', bonus:true,
sheet:`<h3>Mass and weight</h3><table><tr><th></th><th>Mass</th><th>Weight</th></tr><tr><td>What</td><td>amount of matter</td><td>force of gravity pulling</td></tr><tr><td>Unit</td><td>kg</td><td>N (newtons)</td></tr><tr><td>On the Moon</td><td>the same</td><td>smaller</td></tr></table>
<h3>Forces</h3><ul><li>Arrow length shows size, arrow head shows direction.</li><li><b>Balanced</b>: no change (a still object stays still). <b>Unbalanced</b>: speed or direction changes, towards the bigger force.</li><li>Floating: <b>upthrust</b> (water pushing up) = weight. A wide hollow shape pushes aside more water.</li></ul>
<h3>Light</h3><ul><li>Travels in straight lines. We see when light <b>enters our eyes</b>.</li><li><b>Reflection</b>: bounces off; angle in = angle out.</li><li><b>Refraction</b>: bends when it passes from one material into another.</li></ul>
<h3>Sound</h3><ul><li>Made by vibrations; needs a material to travel through.</li><li>Bigger vibrations: louder. Faster vibrations: higher pitch.</li></ul>
<h3>Circuits</h3><ul><li>Current needs a complete loop.</li><li><b>Series</b> (one loop): more lamps = dimmer; one break stops all.</li><li><b>Parallel</b> (branches): each lamp has its own path.</li></ul>`,
Q:[
 sci_pic(slider('Read the force meter. What is the weight of the object hanging on it?',{min:0,max:10,step:0.5,unit:'N'},7,0,'Each small step is 1 N. The pointer is one step below 6, so it reads 7 N.',sci_s('reading a force meter')),sci_METER),
 sort('Mass or weight? Sort the facts.',['Mass','Weight'],[
  ['Measured in kilograms',0],['Measured in newtons',1],['It is a force',1],['Amount of matter in an object',0],['Becomes smaller on the Moon',1],['Stays the same on the Moon',0]],
  'Mass is how much matter there is (kg). Weight is the pull of gravity on that matter (N), so it changes when gravity changes.',sci_s('mass and weight')),
 mc('An astronaut has a mass of 90 kg on Earth. What happens when she stands on the Moon?','Her mass stays 90 kg but her weight falls',['Her mass and her weight both stay the same','Her mass becomes smaller but her weight does not','Her mass and her weight both become zero'],'She is made of the same amount of matter, so the mass is still 90 kg. The Moon\'s gravity is weaker, so she weighs less.',sci_s('gravity and weight')),
 sci_pic(typed('This wooden block floats and stays still. What is the size of the upward push of the water?',['4','4 N','4N','4 newtons','4 newton','four','four newtons'],'The block is still, so the forces are balanced. The upthrust equals the weight: 4 N.',sci_s('balanced forces in floating'),'N'),sci_FLOAT),
 sci_pic(mc('These two forces act on the box. What will happen to the box?','It starts to move to the right',['It starts to move towards the left side','It stays exactly where it is','It lifts straight up off the table'],'12 N to the right is bigger than 5 N to the left. The forces are unbalanced, so the box starts moving to the right.',sci_s('effect of unbalanced forces')),sci_PUSH),
 tf('If the forces on an object that is standing still are balanced, the object starts to move.',false,'Balanced forces cancel each other, so a still object stays still. It needs an unbalanced force to start moving.',sci_s('balanced forces')),
 write('A ball of modelling clay sinks in water, but the same clay shaped into a wide boat floats. Explain why.',['shape|wide|boat|spread|hollow','water','upthrust|push|upward force|displac','weight|heavy|mass|balance'],'The weight stays the same, but the wide boat shape pushes aside more water. So the upward push of the water (upthrust) is bigger and can balance the weight.','Compare the two shapes: same weight, but the boat pushes aside more water, so the water pushes up more.',sci_s('explaining floating and sinking')),
 hotspot('Light hits a flat mirror. Tap the dot on the ray that shows how the light is reflected.',sci_MIRROR,sci_MIRROR_PTS,'Ray Q','The light leaves the mirror at the same angle as it arrived, measured from the 90° line. Only ray Q matches the incoming ray like a mirror picture.',sci_s('completing a ray diagram')),
 order('A lamp is on in a dark room. Put the steps in order to explain how you see a book.',['The lamp gives out light','The light travels in a straight line to the book','The light reflects off the book','The reflected light enters your eye'],'Light goes from the source to the object and then into your eye. Your eyes do not send anything out.',sci_s('how we see objects')),
 mc('A straw standing in a glass of water looks bent at the surface. Why?','Light changes direction as it leaves the water',['The water makes the straw soft, so the straw really bends','Light completely stops moving when it is inside water','Your eyes send out rays that curve when they hit water'],'This is refraction: light bends when it passes from water into air, so the part under water seems to be in a different place.',sci_s('refraction')),
 sci_ng(label('Name each circuit symbol.',sci_CIRC,sci_CIRC_PTS,'Cell: one long thin line and one short thick line. Lamp: circle with a cross. Open switch: a gap with a lifted arm. Buzzer: a half circle with two wires.',sci_s('circuit symbols')),'cell','lamp','switch','buzzer','open switch'),
 sci_ng(sci_pic(mc('One lamp is joined to one cell (battery). A second lamp is then added in series, as in the diagram. What happens?','Both lamps are dimmer than the single lamp was',['Both lamps are much brighter than the single lamp was','Only the lamp nearest to the cell can light up','The first lamp stays as bright and the second stays off'],'In series the same cell has to push current through two lamps, one after the other, so each one glows less brightly.',sci_s('series circuits')),sci_SERIES),'cell'),
 sci_ng(sci_pic(mc('The two lamps are in parallel. Lamp 1 breaks. What happens to lamp 2?','It stays lit',['It goes out too','It flashes on and off','It slowly fades away'],'Lamp 2 is on its own branch, so it still has a complete loop to the cell.',sci_s('parallel circuits')),sci_PARA),'cell'),
 match('Match each sound word to its meaning.',[
  ['Loudness','Gets greater when the vibrations are bigger'],['Pitch','Gets higher when the vibrations are faster'],['Vibration','A quick movement backwards and forwards'],['Vacuum','Empty space that sound cannot cross']],
  'Big vibrations give a loud sound; fast vibrations give a high note. Sound needs particles to carry it.',sci_s('sound'))
]},

/* ================= 5. Materials, rocks and space (bonus) ================= */
{id:'ex-sci-earth', group:'sci', ico:'🪐', name:'Materials, Rocks & Space', blurb:'Exam practice - some of this may be new: conductors, reactions, rocks, planets and the Moon', col:'#0ea5a5', bonus:true,
sheet:`<h3>Materials</h3><ul><li><b>Conductor</b> lets electricity or heat pass easily (metals). <b>Insulator</b> does not (plastic, rubber, dry wood).</li><li><b>Physical change</b>: no new substance (melting, freezing, dissolving).</li><li><b>Chemical reaction</b>: <b>reactants</b> turn into new <b>products</b>. Clues: gas bubbles, new colour, temperature change, a new solid.</li></ul>
<h3>Rocks</h3><table><tr><th>Type</th><th>How it forms</th><th>Example</th></tr><tr><td>Igneous</td><td>melted rock cools</td><td>granite</td></tr><tr><td>Sedimentary</td><td>layers pressed together over a long time</td><td>sandstone</td></tr><tr><td>Metamorphic</td><td>changed by heat and pressure, without melting</td><td>slate</td></tr></table>
<p><b>Fossils</b> form when remains are buried in layers. <b>Soil</b> = bits of rock, dead living things, air and water.</p>
<h3>Space</h3><ul><li>Earth spins once in 24 hours (day and night) and goes round the Sun once in about 365 days.</li><li>The Moon gives no light of its own. It reflects sunlight.</li><li>Moon shapes grow from new to full, then shrink again.</li><li><b>Checking a claim</b>: say yes or no, then give numbers from the table. One exception is enough to break an "always" claim.</li></ul>`,
Q:[
 sort('Which of these let electricity pass through them easily?',['Conductor','Insulator'],[
  ['Copper wire',0],['Steel spoon',0],['Aluminium foil',0],['Rubber glove',1],['Plastic ruler',1],['Dry wooden stick',1],['Glass rod',1]],
  'Metals such as copper, steel and aluminium conduct electricity. Rubber, plastic, dry wood and glass are insulators.',sci_s('electrical conductivity')),
 mc('Four spoons of the same size stand in hot water. Which handle will feel warm first?','The metal one',['The wooden one','The plastic one','The china one'],'Metals are good thermal conductors, so heat travels along a metal spoon quickly.',sci_s('thermal conductivity')),
 multi('Two colourless liquids are mixed without any heating. Tick ALL the observations that suggest a chemical reaction.',['Bubbles of gas appear','The mixture turns bright pink','The cup becomes warm by itself'],['The level in the cup rises as you pour','The mixture takes the shape of the cup','The mixture stays colourless and nothing else changes'],'New gas, a new colour and a temperature change are clues that new substances are being made.',sci_s('evidence of a chemical reaction')),
 sort('Is each one a physical change or a chemical reaction?',['Physical change','Chemical reaction'],[
  ['Melting chocolate',0],['Freezing orange juice',0],['Dissolving sugar in water',0],['Burning wood',1],['Baking a cake',1],['An iron nail going rusty',1]],
  'In a physical change the substance is still the same. In a chemical reaction new substances are made, and it is usually very hard to undo.',sci_s('physical and chemical changes')),
 sci_ng(fill('In a chemical reaction, the substances you start with are called the ___ and the new substances that are made are called the ___.',['reactants','products'],['reactants','products','solvents','insulators'],'Reactants react with each other and turn into products.',sci_s('reactants and products')),'reactant','product'),
 sci_ng(mc('Which kind of rock forms when melted rock cools and becomes solid?','Igneous',['Sedimentary','Metamorphic','Chalky soil'],'Melted rock from inside the Earth cools and hardens into igneous rock, such as granite or basalt.',sci_s('types of rock')),'igneous','sedimentary','metamorphic'),
 order('Put the steps in order to show how sedimentary rock forms.',['Small pieces of rock are carried along by a river','The pieces settle in a layer at the bottom of a sea','More layers pile up on top and press down','After a very long time the lower layer is solid rock'],'Carried, settled, buried and pressed, then turned to rock over a very long time.',sci_s('how rocks form')),
 sci_ng(mc('Deep underground, heat and pressure slowly change limestone into marble without melting it. What type of rock is marble?','Metamorphic',['Sedimentary','Igneous','Molten'],'Rock that has been changed by heat and pressure is metamorphic.',sci_s('the rock cycle')),'igneous','sedimentary','metamorphic'),
 tf('Most fossils are found in sedimentary rock.',true,'Remains get buried under layers that slowly turn into sedimentary rock. Heat or melting would destroy them.',sci_s('fossils')),
 tf('We can see the Moon at night because it makes its own light.',false,'The Moon is not a light source. We see sunlight that reflects off its surface.',sci_s('the Moon')),
 sci_pic(write('Ola says, "The further a planet is from the Sun, the longer it takes to orbit the Sun." Does the table support her idea? Use data to explain.',['yes|supports|does support|agrees|she is right|she is correct|is true|idea is right|idea is true','further|farther|far|distance|close|near','longer|more days|more time|increas|goes up','88|225|365|687|4333|mercury|venus|earth|mars|jupiter'],'Yes, the table supports it. Mercury is closest and takes only 88 days. Jupiter is much further away and takes longer: 4333 days.','First say yes or no. Then quote the distance and time for at least two planets to show the pattern.',sci_s('using data to test a claim')),sci_PLANETS),
 sci_pic(mc('Ben says, "A planet further from the Sun is always colder." Which planet in the table shows he is wrong?','Venus',['Earth','Mars','Jupiter'],'Venus is further from the Sun than Mercury, but it is much hotter (464 °C compared with 167 °C).',sci_s('finding an exception in data')),sci_PLANETS),
 order('Start at the new Moon. Put the shapes we see over the next two weeks in order.',['No lit part can be seen','A thin curved sliver is lit','Half of the round face is lit','More than half of the face is lit','The whole round face is lit'],'The lit part we see grows a little each night: new, crescent, half, nearly full, full.',sci_s('phases of the Moon')),
 mc('Why do we have day and night on Earth?','The Earth spins on its axis',['The Sun travels round the Earth daily','Thick clouds cover the Sun each night','The Moon blocks the Sun every night'],'The Earth turns once every 24 hours. The side facing the Sun has day and the other side has night.',sci_s('day and night'))
]}
],
vocab:[
 ['Fair test','честный эксперимент','Change only one thing'],
 ['Independent variable','независимая переменная','The one you change'],
 ['Dependent variable','зависимая переменная','The one you measure'],
 ['Control variable','контролируемая переменная','The one you keep the same'],
 ['Anomalous result','выпадающий результат','It does not fit the others'],
 ['Prediction','предсказание','What you think will happen, and why'],
 ['Conclusion','вывод','What the results show'],
 ['Enquiry','исследование','A way of finding an answer'],
 ['Measuring cylinder','мерный цилиндр','Measures the volume of a liquid'],
 ['Filter','фильтровать','Catches an insoluble solid'],
 ['Producer','продуцент (производитель)','Makes its own food'],
 ['Consumer','консумент (потребитель)','Eats other living things'],
 ['Predator','хищник','Hunts other animals'],
 ['Prey','добыча','An animal that is hunted'],
 ['Habitat','среда обитания','Natural home'],
 ['Gravity','гравитация','Pulls objects together'],
 ['Upthrust','выталкивающая сила','Water pushes up'],
 ['Reflection','отражение','Light bounces off'],
 ['Refraction','преломление','Light bends'],
 ['Conductor','проводник','Lets heat or electricity pass'],
 ['Insulator','изолятор','Does not let it pass easily'],
 ['Chemical reaction','химическая реакция','New substances are made'],
 ['Igneous rock','магматическая порода','Granite is one'],
 ['Sedimentary rock','осадочная порода','Made from layers'],
 ['Metamorphic rock','метаморфическая порода','Changed by heat and pressure'],
 ['Orbit','орбита; обращаться по орбите','The path round the Sun']
],
glossary:[
 ['variable','переменная (то, что может меняться)'],['investigation','исследование, опыт'],['investigate','исследовать'],['test','проверять; опыт'],['fair test','честный эксперимент'],
 ['parachute','парашют'],['area','площадь'],['material','материал'],['hanging|hang','висящий (висеть)'],['drop|dropped|dropping','бросать, ронять; капля'],['floor','пол'],
 ['graph','график'],['line graph','линейный график'],['bar chart','столбчатая диаграмма'],['scatter graph','точечный график'],['pattern','закономерность'],['claim','утверждение'],
 ['conclusion','вывод'],['result','результат'],['measure|measuring|measurement','измерять (измерение)'],['measuring cylinder','мерный цилиндр'],['volume','объем'],['level','уровень; на уровне'],['eye','глаз'],['curve|curved','изгиб (изогнутый)'],['close-up','крупный план'],
 ['sign','знак (плюс или минус)'],['bounce','отскок, отскакивать'],['height','высота; рост'],['anomalous','выпадающий из ряда (необычный)'],['fit','подходить, вписываться'],['mean','среднее арифметическое'],['repeat|repeating','повторять'],['to notice','заметить'],
 ['paper towel','бумажное полотенце'],['towel','полотенце'],['soak|soaks up|soak up','впитывать'],['piece','кусок'],['kind','вид, тип'],
 ['enquiry','исследование'],['observing over time','наблюдение в течение времени'],['observing|observe|observation','наблюдать (наблюдение)'],['pattern seeking','поиск закономерностей'],['identifying|identify','определять (что это)'],['classifying|classify','распределять по группам'],['research','исследование'],['survey','опрос'],['slope','наклон'],['ramp','наклонная плоскость (горка)'],['bean plant','растение фасоли'],['use the key|a key to','определитель (таблица-ключ с вопросами)'],['leaf','лист'],['the leaves','листья'],['its leaves','в ее листьях'],['it leaves','он покидает (уходит из)'],
 ['feeder','кормушка'],['sunflower','подсолнух'],['hand span','размах кисти'],['wide|wider','широкий (шире)'],['narrow|narrower','узкий (уже)'],['link','связь'],['tend','обычно, как правило (tend to)'],['shows|show','показывать'],
 ['surface','поверхность'],['toy','игрушка'],['car','машина'],['roll','катиться'],['safe|safely','безопасный (безопасно)'],['spill','проливать(ся)'],['pour','наливать, лить'],['lean','наклоняться'],['busy','оживленный, полный людей'],['model','модель'],['hidden','скрытый'],['copy','копия'],['built','устроен; построен'],
 ['rest|rested|at rest','отдыхать; в покое'],['pulse','пульс'],['starting value','начальное значение'],['heartbeat','удар сердца'],['beat','биться; удар'],['muscle','мышца'],['wrist','запястье'],['nurse','медсестра'],['finger','палец'],['artery|arteries','артерия'],['vein','вена'],['capillary|capillaries','капилляр'],['bronchiole','бронхиола'],['aorta','аорта'],['complete circuit','полный круг'],['the rest of','остальная часть'],['carries|carry|carried','нести, переносить'],['fewer','меньше'],['same place','одно и то же место'],['natural place','естественное место'],['place the','поставить'],['middle of the table','середина стола'],['off the table','со стола'],['three slices','три ломтика'],['the slice','ломтик'],['in bags','в пакетах'],['bottle of perfume','флакон духов'],['was added','добавили'],['add water','добавь воды'],['then added','затем добавляют'],['glass itself','само стекло'],['numbers drop to','численность падает до'],['stays still','остается неподвижным'],['round a busy','по, вокруг (о комнате)'],['round the','вокруг'],['round face','круглый диск'],['right at|right over','прямо'],['matches','соответствует, совпадает'],['drop to','упасть до'],['thick clouds','густые облака'],['exactly where','точно там же, где'],['one corner','один угол (комнаты)'],['pumping turns','накачивание превращает'],['it visits','проходит через (посещает)'],['skipping|skip with a rope','прыгать через скакалку'],['rope','веревка, скакалка'],['heart','сердце'],['blood','кровь'],
 ['oxygen','кислород'],['carbon dioxide','углекислый газ'],['nitrogen','азот'],['compare','сравнивать'],['letter','буква'],['breathed in','вдыхаемый'],['breathed out','выдыхаемый'],['rubber','резина; резиновый'],['sheet','лист, пленка'],['balloon','воздушный шарик'],['tube','трубка'],['diaphragm','диафрагма'],['ribcage','грудная клетка (ребра)'],['stand for|stands for','обозначать, изображать'],
 ['slice','ломтик'],['bread','хлеб'],['sealed','запечатанный'],['mould','плесень'],['tongs','щипцы'],['support','подтверждать; поддерживать'],['room temperature','комнатная температура'],['melting point','температура плавления'],['boiling point','температура кипения'],
 ['cold glass','холодный стакан'],['glass','стакан; стекло'],['juice','сок'],['water vapour','водяной пар'],['vapour','пар'],['leak','протекать'],['perfume','духи'],['bottle','бутылка'],['corner','угол (комнаты)'],['smell','запах; чувствовать запах'],['football','футбольный мяч'],['pump|pumped|pumping','накачивать, перекачивать'],['air','воздух'],
 ['filter|filter paper','фильтровать; фильтровальная бумага'],['mixture','смесь'],['sand','песок'],['separate|separately','разделять; по отдельности'],['hold back|holds back','задерживать'],['drip','капать'],['dish','чашка, блюдце'],
 ['living thing','живое существо (организм)'],['food web','пищевая сеть'],['food chain','пищевая цепь'],['producer','продуцент (производитель)'],['herbivore','травоядное'],['carnivore','хищное (плотоядное) животное'],['hawk','ястреб'],['fox','лиса'],['snake','змея'],['frog','лягушка'],['rabbit','кролик'],['grasshopper','кузнечик'],['grass','трава'],['disease','болезнь'],['soon afterwards','вскоре после этого'],['numbers go up','численность растет'],
 ['oak','дуб'],['seaweed','морские водоросли'],['caterpillar','гусеница'],['giraffe','жираф'],['shark','акула'],['eagle','орел'],['pond','пруд'],['algae','водоросли'],['tadpole','головастик'],['heron','цапля'],['meadow','луг'],['in the first place','в самом начале, изначально'],['poisonous','ядовитый'],['chemical','химическое вещество; химический'],['break down','разлагаться, распадаться'],['lake','озеро'],['harmed|harm','вредить (пострадать)'],
 ['ladybird','божья коровка'],['spider','паук'],['snail','улитка'],['earthworm','дождевой червь'],['reach','доходить до'],['plant','растение'],['light','свет; легкий'],['hunted|hunt','охотиться'],['predator','хищник'],['prey','добыча'],['habitat','среда обитания'],
 ['force meter','динамометр (прибор для силы)'],['force','сила'],['weight','вес'],['object','предмет'],['pointer','стрелка-указатель'],['kilogram','килограмм'],['newton','ньютон'],['amount','количество'],['astronaut','космонавт'],['moon','Луна'],['gravity','гравитация'],['wooden block','деревянный брусок'],['upward','направленный вверх'],['push','толкать; толчок, сила'],['box','коробка, ящик'],['friction','трение'],['act on|acts on','действовать на'],['lift','поднимать(ся)'],['slide','скользить'],['balanced','уравновешенные'],['standing still','стоящий неподвижно'],
 ['modelling clay','пластилин, глина для лепки'],['clay','глина, пластилин'],['shaped','придать форму (стать формой)'],['boat','лодка'],['mirror','зеркало'],['ray','луч'],['reflected|reflect','отражать(ся)'],['lamp','лампа'],['dark','темный'],['straight line','прямая линия'],['straw','соломинка (для питья)'],['bent|bend','изогнутый (гнуть, изгибаться)'],['direction','направление'],
 ['circuit','электрическая цепь'],['circuit symbol','обозначение в электрической цепи'],['in series|series circuit','последовательно (последовательное соединение)'],['in parallel|parallel circuit','параллельно (параллельное соединение)'],['battery','батарейка'],['joined|join','присоединенный (соединять)'],['dimmer|dim','тусклее (тусклый)'],['bright|brighter','яркий (ярче)'],['lit','горит (о лампе)'],['lamp 1 breaks','лампа 1 перегорает'],['flash','мигать'],['fade','тускнеть, угасать'],
 ['sound','звук; звучать'],['loudness','громкость'],['loud','громкий'],['pitch','высота звука'],['vibration','колебание (вибрация)'],['vacuum','вакуум'],['backwards and forwards','туда-сюда'],['empty space','пустое пространство'],
 ['electricity','электричество'],['conductor','проводник'],['insulator','изолятор'],['copper','медь'],['steel','сталь'],['aluminium','алюминий'],['foil','фольга'],['glove','перчатка'],['ruler','линейка'],['wooden','деревянный'],['rod','палочка, стержень'],['spoon','ложка'],['handle','ручка (предмета)'],['metal','металл; металлический'],['china','фарфор'],
 ['colourless','бесцветный'],['liquid','жидкость'],['chemical reaction','химическая реакция'],['physical change','физическое изменение'],['observation','наблюдение'],['suggest','указывать на, говорить о'],['bubble','пузырек'],['pink','розовый'],['warm by itself','нагревается сам по себе'],['burning|burn','гореть, сжигать'],['wood','древесина'],['baking|bake','печь, выпекать'],['rusty','ржавый'],['iron nail','железный гвоздь'],['reactant','реагент (исходное вещество)'],['product','продукт реакции'],
 ['rock','горная порода, камень'],['melted rock','расплавленная порода'],['sedimentary','осадочная (порода)'],['igneous','магматическая (порода)'],['metamorphic','метаморфическая (порода)'],['river','река'],['settle','оседать'],['layer','слой'],['bottom','дно, низ'],['pile up','накапливаться'],['press','давить, прессовать'],['underground','под землей'],['limestone','известняк'],['marble','мрамор'],['fossil','окаменелость'],['soil','почва'],
 ['planet','планета'],['further','дальше; дополнительный'],['orbit','обращаться по орбите; орбита'],['Earth','Земля'],['colder','холоднее'],['new Moon','новолуние'],['the shapes we see','видимые формы'],['takes the shape of','принимает форму'],['shape of the','форма (чего-то)'],['sliver','тонкая полоска'],['face','лицо; видимая сторона (лик)'],['axis','ось'],['spins|spin','вращаться'],['day and night','день и ночь']
]
};

/* ===== exam practice: maths ===== */
/* PART maths: original exam practice, group "ma" (Cambridge Primary Stage 6 style). All numbers, contexts and pictures are our own. */

const maths_S=function(k){return 'Exam style: '+k+' (Cambridge Primary Stage 6)'};
const maths_INK='#26224a';
const maths_FONT='Arial,Helvetica,sans-serif';

/* ---------- picture helpers ---------- */
const maths_uri=function(w,h,body){
  return 'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'">'
    +'<rect width="'+w+'" height="'+h+'" rx="12" fill="#fff8e7"/>'+body+'</svg>');
};
const maths_img=function(q,i){return Object.assign(q,{img:i})};
const maths_ng=function(q,t){return Object.assign(q,{ng:t})};
const maths_T=function(x,y,s,o){
  o=o||{};
  return '<text x="'+x+'" y="'+y+'" font-family="'+maths_FONT+'" font-size="'+(o.size||16)+'" font-weight="'+(o.w||700)+'" text-anchor="'+(o.a||'middle')+'" fill="'+(o.fill||maths_INK)+'">'+s+'</text>';
};
const maths_L=function(x1,y1,x2,y2,o){
  o=o||{};
  return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" stroke="'+(o.c||maths_INK)+'" stroke-width="'+(o.w||2)+'"'+(o.dash?' stroke-dasharray="'+o.dash+'"':'')+' stroke-linecap="round"/>';
};
const maths_R=function(x,y,w,h,fill,sw){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+fill+'" stroke="'+maths_INK+'" stroke-width="'+(sw==null?2:sw)+'"/>'};
const maths_C=function(x,y,r,fill){return '<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+(fill||maths_INK)+'"/>'};

/* table: rows of cells, first row and first column are headers */
const maths_table=function(rows,widths){
  const rh=32,W=widths.reduce(function(a,b){return a+b},0)+20,H=rows.length*rh+20;
  let o='';
  rows.forEach(function(r,i){
    let x=10;
    r.forEach(function(c,j){
      o+=maths_R(x,10+i*rh,widths[j],rh,i===0?'#cfe3ff':(j===0?'#ffe3a8':'#fffdf5'),1.5);
      o+=maths_T(x+widths[j]/2,10+i*rh+22,c,{size:15,w:(i===0||j===0)?700:400});
      x+=widths[j];
    });
  });
  return maths_uri(W,H,o);
};

/* percentage grid: 3 full columns + 7 small squares are shaded (37 of 100) */
const maths_WAFFLE=(function(){
  let o='';
  for(let c=0;c<10;c++)for(let r=0;r<10;r++){
    const on=c<3||(c===3&&r>=3);
    o+=maths_R(20+c*24,20+r*24,24,24,on?'#5b8def':'#ffffff',1.5);
  }
  return maths_uri(280,280,o);
})();

/* number line 0..1 with ten equal steps; four dots above ticks 2, 4, 6 and 8 (hotspot) */
const maths_NL01=(function(){
  let b='<rect width="360" height="130" rx="12" fill="#fff8e7"/>'+maths_L(30,90,330,90,{w:3});
  for(let i=0;i<=10;i++){const x=30+i*30;b+=maths_L(x,(i===0||i===10)?76:80,x,(i===0||i===10)?104:100,{w:2})}
  [2,4,6,8].forEach(function(i){const x=30+i*30;b+=maths_L(x,48,x,76,{c:'#e0533d',w:3})+'<polygon points="'+(x-6)+',70 '+(x+6)+',70 '+x+',80" fill="#e0533d"/>'});
  b+=maths_T(30,122,'0')+maths_T(330,122,'1');
  return {vb:'0 0 360 130',body:b};
})();
const maths_NL01_PTS=[{n:'0.2',x:90,y:34},{n:'0.4',x:150,y:34},{n:'0.6',x:210,y:34},{n:'0.8',x:270,y:34}];

/* L-shape, sides in cm: top 6, step down 3, step right 4, right 5, bottom 10, left 8 */
const maths_LSHAPE=(function(){
  const u=22,x0=66,y0=36;
  const P=[[0,0],[6,0],[6,3],[10,3],[10,8],[0,8]].map(function(p){return (x0+p[0]*u)+','+(y0+p[1]*u)}).join(' ');
  let o='<polygon points="'+P+'" fill="#d6edff" stroke="'+maths_INK+'" stroke-width="3" stroke-linejoin="round"/>';
  o+=maths_T(x0+3*u,y0-12,'6 cm');
  o+=maths_T(x0+6*u+10,y0+1.5*u+6,'3 cm',{a:'start'});
  o+=maths_T(x0-10,y0+4*u+6,'8 cm',{a:'end'});
  o+=maths_T(x0+5*u,y0+8*u+24,'10 cm');
  o+=maths_T(180,y0+8*u+48,'Not drawn to scale',{size:13,w:400,fill:'#555'});
  return maths_uri(360,270,o);
})();

/* right-angled triangle: right angle bottom-left; b = base, h = height, c = sloping side */
const maths_rtri=function(b,h,c){
  const u=Math.min(230/b,150/h),w=b*u,t=h*u,x0=80,y0=30;
  let o='<polygon points="'+x0+','+y0+' '+x0+','+(y0+t)+' '+(x0+w)+','+(y0+t)+'" fill="#ffe3a8" stroke="'+maths_INK+'" stroke-width="3" stroke-linejoin="round"/>';
  o+='<polyline points="'+x0+','+(y0+t-14)+' '+(x0+14)+','+(y0+t-14)+' '+(x0+14)+','+(y0+t)+'" fill="none" stroke="'+maths_INK+'" stroke-width="2"/>';
  o+=maths_T(x0-10,y0+t/2+6,h+' cm',{a:'end'});
  o+=maths_T(x0+w/2,y0+t+24,b+' cm');
  o+=maths_T(x0+w/2+14,y0+t/2-8,c+' cm',{a:'start'});
  o+=maths_T(180,y0+t+48,'Not drawn to scale',{size:13,w:400,fill:'#555'});
  return maths_uri(360,Math.round(y0+t+60),o);
};

/* bus timetable */
const maths_BUS=maths_table([
  ['Stop','Bus A','Bus B','Bus C'],
  ['Station','08:15','08:47','09:20'],
  ['Park Road','08:27','08:59','09:32'],
  ['Library','08:39','09:12','09:44'],
  ['Museum','08:52','09:26','09:57']
],[110,75,75,75]);

/* measuring jug: 0 to 1000 ml, small marks every 50 ml, water at 650 ml */
const maths_JUG=(function(){
  const y=function(v){return 270-v*0.23};
  let o='<rect x="120" y="'+y(650)+'" width="110" height="'+(270-y(650))+'" fill="#8fc7ff"/>';
  o+='<polyline points="120,22 120,270 230,270 230,22" fill="none" stroke="'+maths_INK+'" stroke-width="3" stroke-linejoin="round"/>';
  for(let v=0;v<=1000;v+=50){
    const big=v%200===0;
    o+=maths_L(120,y(v),big?148:136,y(v),{w:big?2.5:1.5});
    if(big)o+=maths_T(110,y(v)+5,String(v),{a:'end',size:15});
  }
  o+=maths_T(244,y(1000)+5,'ml',{a:'start'});
  return maths_uri(320,290,o);
})();

/* coordinate grid from -5 to 5; one square = 30 units, origin at (170,170) */
const maths_X=function(x){return 170+30*x};
const maths_Y=function(y){return 170-30*y};
const maths_gridBody=function(){
  let o='<rect width="340" height="340" rx="12" fill="#fff8e7"/>';
  for(let i=-5;i<=5;i++)o+=maths_L(maths_X(i),20,maths_X(i),320,{c:'#c9c4de',w:1})+maths_L(20,maths_Y(i),320,maths_Y(i),{c:'#c9c4de',w:1});
  o+=maths_L(14,170,326,170,{w:2.5})+maths_L(170,14,170,326,{w:2.5});
  for(let i=-5;i<=5;i++){
    if(i===0)continue;
    o+=maths_T(maths_X(i),185,String(i),{size:12});
    o+=maths_T(163,maths_Y(i)+4,String(i),{size:12,a:'end'});
  }
  o+=maths_T(333,164,'x',{size:15})+maths_T(182,16,'y',{size:15})+maths_T(162,185,'0',{size:12,a:'end'});
  return o;
};
const maths_dot=function(x,y,name,dx,dy){return maths_C(maths_X(x),maths_Y(y),6,'#e0533d')+maths_T(maths_X(x)+(dx||0),maths_Y(y)+(dy||-10),name,{size:17,fill:'#b02a15'})};

const maths_GRID={vb:'0 0 340 340',body:maths_gridBody()};
const maths_GRID_PTS=[[-3,2],[2,-3],[3,2],[-3,-2],[-2,3]].map(function(p){return {n:'('+p[0]+', '+p[1]+')',x:maths_X(p[0]),y:maths_Y(p[1])}});

const maths_RECT=maths_uri(340,340,maths_gridBody()+maths_dot(-4,3,'A',-6)+maths_dot(3,3,'B',10)+maths_dot(-4,-2,'C',-8,22));
const maths_ROT=maths_uri(340,340,maths_gridBody()+maths_dot(3,1,'A',10)+maths_C(170,170,5)+maths_T(180,162,'O',{size:15}));

const maths_REFL={vb:'0 0 340 340',body:maths_gridBody()+maths_L(maths_X(-5),maths_Y(-5),maths_X(5),maths_Y(5),{c:'#2f6fed',w:3,dash:'9 7'})+maths_T(284,40,'mirror line',{size:14,fill:'#1d4fb8',a:'end'})+maths_dot(-3,1,'A',-16,-8)};
const maths_REFL_PTS=[[1,-3],[3,1],[-3,-1],[-1,3]].map(function(p){return {n:'('+p[0]+', '+p[1]+')',x:maths_X(p[0]),y:maths_Y(p[1])}});

/* circle with centre, radius and diameter */
const maths_CIRC={vb:'0 0 340 300',body:'<rect width="340" height="300" rx="12" fill="#fff8e7"/>'
  +'<circle cx="170" cy="150" r="118" fill="#e8f0ff" stroke="'+maths_INK+'" stroke-width="4"/>'
  +maths_L(52,150,288,150,{c:'#2f6fed',w:4})
  +maths_L(170,150,229,47.8,{c:'#e0533d',w:4})
  +maths_C(170,150,6)};
const maths_CIRC_PTS=[{n:'Radius',x:201,y:96},{n:'Circumference',x:253,y:233},{n:'Centre',x:170,y:150},{n:'Diameter',x:100,y:150}];

/* four nets: only C folds into a cube */
const maths_NETS=(function(){
  const s=26;
  const net=function(name,x0,y0,cells){
    let o=maths_T(x0-4,y0-8,name,{a:'start'});
    cells.forEach(function(c){o+=maths_R(x0+c[0]*s,y0+c[1]*s,s,s,'#ffd9cc',2)});
    return o;
  };
  return maths_uri(360,260,
    net('Net A',30,45,[[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]])
   +net('Net B',210,45,[[0,1],[1,1],[2,1],[3,1],[0,0],[2,0]])
   +net('Net C',30,160,[[0,1],[1,1],[2,1],[3,1],[1,0],[3,2]])
   +net('Net D',200,160,[[0,1],[1,1],[2,1],[3,1],[4,1],[2,0]]));
})();

/* rays from one point; a,b in degrees measured anticlockwise */
const maths_pol=function(cx,cy,r,deg){const t=deg*Math.PI/180;return [+(cx+r*Math.cos(t)).toFixed(1),+(cy-r*Math.sin(t)).toFixed(1)]};
const maths_arc=function(cx,cy,r,a,b,col){
  const p=maths_pol(cx,cy,r,a),q=maths_pol(cx,cy,r,b);
  return '<path d="M'+p[0]+' '+p[1]+' A'+r+' '+r+' 0 '+(b-a>180?1:0)+' 0 '+q[0]+' '+q[1]+'" fill="none" stroke="'+(col||maths_INK)+'" stroke-width="3"/>';
};
const maths_TURN=(function(){
  const cx=180,cy=130;let o='';
  [0,150,245].forEach(function(a){const p=maths_pol(cx,cy,115,a);o+=maths_L(cx,cy,p[0],p[1],{w:3})});
  o+=maths_arc(cx,cy,28,0,150)+maths_arc(cx,cy,38,150,245)+maths_arc(cx,cy,28,245,360,'#e0533d')+maths_C(cx,cy,5);
  let p=maths_pol(cx,cy,56,75);o+=maths_T(p[0],p[1]+6,'150°',{size:19});
  p=maths_pol(cx,cy,66,197);o+=maths_T(p[0],p[1]+6,'95°',{size:19});
  p=maths_pol(cx,cy,56,302);o+=maths_T(p[0],p[1]+6,'?',{size:24,fill:'#b02a15'});
  o+=maths_T(348,248,'Not drawn to scale',{size:13,w:400,fill:'#555',a:'end'});
  return maths_uri(360,260,o);
})();
const maths_LINE=(function(){
  const cx=180,cy=150;
  let o=maths_L(30,cy,330,cy,{w:3});
  const p=maths_pol(cx,cy,125,63);
  o+=maths_L(cx,cy,p[0],p[1],{w:3})+maths_arc(cx,cy,34,0,63)+maths_arc(cx,cy,26,63,180,'#e0533d')+maths_C(cx,cy,5);
  let t=maths_pol(cx,cy,62,31);o+=maths_T(t[0],t[1]+6,'63°',{size:19});
  t=maths_pol(cx,cy,52,122);o+=maths_T(t[0],t[1]+6,'?',{size:24,fill:'#b02a15'});
  o+=maths_T(180,182,'Not drawn to scale',{size:13,w:400,fill:'#555'});
  return maths_uri(360,196,o);
})();

/* bar chart: books read */
const maths_BARS=(function(){
  const y=function(v){return 230-v*16};
  let o='';
  for(let v=0;v<=12;v++){o+=maths_L(50,y(v),345,y(v),{c:v%2?'#e3dff0':'#b9b3d6',w:1});if(v%2===0)o+=maths_T(42,y(v)+5,String(v),{a:'end',size:14})}
  [['Ben',4],['Sara',9],['Omar',6],['Nina',12],['Ravi',7]].forEach(function(d,i){
    const x=64+i*56;o+=maths_R(x,y(d[1]),38,d[1]*16,'#5b8def',2)+maths_T(x+19,250,d[0],{size:14});
  });
  o+=maths_L(50,230,345,230,{w:2.5})+maths_L(50,26,50,230,{w:2.5});
  o+=maths_T(12,16,'Books read',{a:'start',size:14});
  return maths_uri(360,262,o);
})();

/* line graph: temperature during a day */
const maths_TEMP=(function(){
  const y=function(v){return 230-v*11},x=function(i){return 70+i*65};
  let o='';
  for(let v=0;v<=18;v+=2)o+=maths_L(50,y(v),345,y(v),{c:'#c9c4de',w:1})+maths_T(42,y(v)+5,String(v),{a:'end',size:14});
  const T=['06:00','09:00','12:00','15:00','18:00'],V=[4,8,14,16,10];
  T.forEach(function(t,i){o+=maths_L(x(i),30,x(i),230,{c:'#c9c4de',w:1})+maths_T(x(i),250,t,{size:13})});
  o+='<polyline points="'+V.map(function(v,i){return x(i)+','+y(v)}).join(' ')+'" fill="none" stroke="#e0533d" stroke-width="3"/>';
  V.forEach(function(v,i){o+=maths_C(x(i),y(v),5)});
  o+=maths_L(50,230,345,230,{w:2.5})+maths_L(50,26,50,230,{w:2.5});
  o+=maths_T(12,17,'Temperature (°C)',{a:'start',size:14});
  return maths_uri(360,262,o);
})();

/* pie chart: Apple 1/2, Banana 1/4, Mango 1/8, Grapes 1/8 */
const maths_PIE=(function(){
  const cx=180,cy=130,r=115;
  const sec=function(a,b,col){
    const p=maths_pol(cx,cy,r,a),q=maths_pol(cx,cy,r,b);
    return '<path d="M'+cx+' '+cy+' L'+p[0]+' '+p[1]+' A'+r+' '+r+' 0 '+(b-a>180?1:0)+' 0 '+q[0]+' '+q[1]+' Z" fill="'+col+'" stroke="'+maths_INK+'" stroke-width="2.5"/>';
  };
  let o=sec(90,270,'#ffd9cc')+sec(270,360,'#ffe3a8')+sec(0,45,'#d6edff')+sec(45,90,'#e3d9ff');
  o+='<polyline points="'+(cx+16)+','+cy+' '+(cx+16)+','+(cy+16)+' '+cx+','+(cy+16)+'" fill="none" stroke="'+maths_INK+'" stroke-width="2"/>';
  o+=maths_T(115,136,'Apple')+maths_T(236,192,'Banana');
  let p=maths_pol(cx,cy,74,22.5);o+=maths_T(p[0],p[1]+5,'Mango',{size:14});
  p=maths_pol(cx,cy,78,67.5);o+=maths_T(p[0],p[1]+5,'Grapes',{size:14});
  return maths_uri(360,260,o);
})();

/* scatter graph: practice and mistakes */
const maths_SCAT=(function(){
  const x=function(v){return 50+v*34},y=function(v){return 230-v*12.5};
  let o='';
  for(let v=0;v<=16;v+=2)o+=maths_L(50,y(v),340,y(v),{c:'#d8d3ea',w:1})+maths_T(42,y(v)+5,String(v),{a:'end',size:13});
  for(let v=0;v<=8;v++)o+=maths_L(x(v),30,x(v),230,{c:'#d8d3ea',w:1})+maths_T(x(v),247,String(v),{size:13});
  [[1,14],[2,12],[2,13],[3,10],[4,9],[5,8],[5,6],[6,5],[7,4],[8,2]].forEach(function(p){
    o+=maths_L(x(p[0])-5,y(p[1])-5,x(p[0])+5,y(p[1])+5,{c:'#e0533d',w:3})+maths_L(x(p[0])-5,y(p[1])+5,x(p[0])+5,y(p[1])-5,{c:'#e0533d',w:3});
  });
  o+=maths_L(50,230,340,230,{w:2.5})+maths_L(50,26,50,230,{w:2.5});
  o+=maths_T(12,17,'Mistakes in the test',{a:'start',size:14})+maths_T(195,268,'Hours of practice',{size:14});
  return maths_uri(360,278,o);
})();

/* four spinners with equal parts (hotspot) */
const maths_SPIN=(function(){
  const one=function(cx,cy,n,dark,name){
    const r=55;let o='';
    for(let i=0;i<n;i++){
      const a=90+i*360/n,b=90+(i+1)*360/n,p=maths_pol(cx,cy,r,a),q=maths_pol(cx,cy,r,b);
      o+='<path d="M'+cx+' '+cy+' L'+p[0]+' '+p[1]+' A'+r+' '+r+' 0 0 0 '+q[0]+' '+q[1]+' Z" fill="'+(dark.indexOf(i)>=0?'#4a4580':'#ffffff')+'" stroke="'+maths_INK+'" stroke-width="2.5"/>';
    }
    return o+maths_T(cx-68,cy-40,name,{size:20});
  };
  return {vb:'0 0 360 330',body:'<rect width="360" height="330" rx="12" fill="#fff8e7"/>'
    +one(100,70,4,[1],'A')+one(272,70,8,[0,3,5],'B')+one(100,234,8,[0,1,2,4,5,6],'C')+one(272,234,6,[0,1,3,4],'D')};
})();
const maths_SPIN_PTS=[{n:'Spinner A',x:100,y:144},{n:'Spinner B',x:272,y:144},{n:'Spinner C',x:100,y:308},{n:'Spinner D',x:272,y:308}];

/* number line from -10 to 10 with points P and Q */
const maths_NLNEG=(function(){
  const x=function(v){return 180+v*16};
  let o=maths_L(12,60,348,60,{w:3});
  for(let v=-10;v<=10;v++){
    const big=v%5===0;
    o+=maths_L(x(v),big?50:54,x(v),big?70:66,{w:big?2.5:1.5});
    if(big)o+=maths_T(x(v),90,String(v),{size:15});
  }
  [[-6,'P'],[8,'Q']].forEach(function(p){o+=maths_C(x(p[0]),60,7,'#e0533d')+maths_T(x(p[0]),36,p[1],{size:20,fill:'#b02a15'})});
  return maths_uri(360,104,o);
})();

const maths_PACKS=maths_table([
  ['Pack','Juice boxes','Price'],
  ['Pack A','6','$4.50'],
  ['Pack B','10','$7.20'],
  ['Pack C','4','$3.20']
],[100,130,100]);

const maths_PRICES=maths_table([
  ['Food','Price'],
  ['Cake','$2.40'],
  ['Juice','$1.35'],
  ['Sandwich','$3.65'],
  ['Fruit cup','$2.60'],
  ['Soup','$2.80']
],[180,120]);

/* ================= topics ================= */
const maths_TOPICS=[

{id:'ex-ma-fdp', group:'ma', ico:'🍕', name:'Fractions, % and Ratio', blurb:'Exam practice: fractions, decimals, percentages, ratio and recipes', col:'#f97316', Q:[
 sort('Sort the cards. Compare each one with one half.',['Less than 1/2','Equal to 1/2','More than 1/2'],[
   ['0.45',0],['6/12',1],['5/9',2],['3/8',0],['50%',1],['0.6',2],['49%',0],['0.50',1],['51%',2]],
   'Half is 0.5, which is 50%. Change each card into a decimal: 3/8 = 0.375 and 5/9 is about 0.56. For a fraction you can also check whether the top is less than half of the bottom.',maths_S('compare fractions, decimals and percentages')),
 match('Match each fraction or decimal to the equal percentage.',[
   ['3/4','75%'],['2/5','40%'],['1/20','5%'],['9/10','90%'],['0.09','9%']],
   'Percent means "out of 100". Make the bottom of the fraction 100: 2/5 = 40/100 = 40%. For a decimal, multiply by 100: 0.09 = 9%.',maths_S('fraction, decimal and percentage equivalents')),
 typed('Work out 3/4 - 1/6. Give your answer as a fraction in its simplest form.',['7/12','7 / 12','7/ 12','7 /12'],
   'Use a common denominator, 12. 3/4 = 9/12 and 1/6 = 2/12. Then 9/12 - 2/12 = 7/12.',maths_S('subtract fractions with different denominators')),
 mc('Work out 3/5 × 4.','2 2/5',['3/20','12/20','4 3/5'],
   'Multiply only the top number: 3 × 4 = 12, so you have 12/5. 12 fifths = 2 wholes and 2 fifths.',maths_S('multiply a fraction by a whole number')),
 typed('A ribbon is 3/4 of a metre long. It is cut into 6 equal pieces. What fraction of a metre is each piece?',['1/8','3/24','1/8 m','1/8m','1/8 metre','1/8 metres','1/8 of a metre','3/24 m','3/24m','3/24 metre','3/24 of a metre','1 / 8','one eighth','an eighth'],
   'Divide the fraction by 6: 3/4 ÷ 6 = 3/24, which simplifies to 1/8. Check: 3 quarters = 6 eighths, shared into 6 pieces gives 1 eighth each.',maths_S('divide a fraction by a whole number'),'metre'),
 typed('A box holds 240 books. 15% of the books are comics. How many comics are in the box?',['36','36 comics','36 books'],
   'Build the percentage from easy parts: 10% of 240 = 24 and 5% = 12. So 15% = 24 + 12 = 36.',maths_S('percentage of an amount')),
 mc('A plant was 60 cm tall. Its height then increased by 20%. How tall is the plant now?','72 cm',['80 cm','12 cm','60.2 cm'],
   '20% of 60 cm is 12 cm. That is only the increase, so add it on: 60 + 12 = 72 cm.',maths_S('percentage increase')),
 tf('10% of 90 is more than 50% of 20.',false,'10% of 90 = 9, but 50% of 20 = 10. A bigger percentage of a smaller number can give more.',maths_S('compare percentages of amounts')),
 spot('Find the mistake and tap it.','A box has 4 red pens and 6 blue pens, so the ratio of red pens to blue pens in its simplest form is [[3:2|2:3]].',
   'The order matters: red comes first. Red : blue = 4:6, and dividing both numbers by 2 gives 2:3.',maths_S('simplify a ratio')),
 slider('Orange paint is made from red and yellow paint in the ratio 2 : 5. You use 15 litres of yellow paint. How many litres of red paint do you need?',{min:0,max:40,step:1,unit:'litres'},6,0,
   'The 5 yellow parts are 15 litres, so 1 part is 3 litres. Red is 2 parts: 2 × 3 = 6 litres.',maths_S('use a ratio')),
 typed('Omar and Nina share 35 sweets in the ratio 3 : 4. Omar gets the 3 parts. How many sweets does Nina get?',['20','20 sweets'],
   'There are 3 + 4 = 7 equal parts. One part is 35 ÷ 7 = 5 sweets. Nina has 4 parts: 4 × 5 = 20.',maths_S('share an amount in a ratio'),'sweets'),
 fill('A recipe for 4 people uses 300 g of rice and 2 onions. For 10 people you need ___ g of rice and ___ onions.',['750','5'],['750','5','600','8','900'],
   '10 people is 2 and a half times as many as 4 people. 300 × 2.5 = 750 g and 2 × 2.5 = 5 onions.',maths_S('direct proportion in a recipe')),
 write('Kofi says that 3/5 is less than 0.55, because 3 and 5 are small digits. Is he right? Explain using numbers.',
   ['not right|no,|no.|no!|no he|no because|no since|no it|no 3|no 0|not correct|not true|wrong|incorrect|false|mistake|isn\'t|isnt|is not|not less','0.6|60%|60/100|6/10|60 hundredths|six tenths','0.55|55%|55/100|55 hundredths','greater|bigger|larger|higher|more|>|not less|not smaller'],
   'No, he is not right. 3/5 = 6/10 = 0.6. 0.6 is greater than 0.55, because 60 hundredths is more than 55 hundredths.','Change both numbers into the same form before you compare them. Then say which is greater and give the numbers.',maths_S('explain a comparison of a fraction and a decimal')),
 maths_img(typed('What percentage of the large square is NOT shaded?',['63','63%','63 %','63 percent','63 per cent'],
   'There are 100 small squares, so each one is 1%. Shaded: 3 full columns (30) plus 7 more = 37. Not shaded: 100 - 37 = 63%.',maths_S('read a percentage from a diagram'),'%'),maths_WAFFLE),
 hotspot('The number line goes from 0 to 1 in equal steps. Tap the dot whose arrow shows 3/5.',maths_NL01,maths_NL01_PTS,'0.6',
   'Each small step is 1 tenth. 3/5 = 6/10 = 0.6, so count 6 steps from 0.',maths_S('place a fraction on a number line'))
]},

{id:'ex-ma-measure', group:'ma', ico:'📏', name:'Measures and Time', blurb:'Exam practice: perimeter, area, units, time and timetables', col:'#0ea5e9', Q:[
 maths_img(typed('Work out the perimeter of this shape. All its sides meet at right angles.',['36','36 cm','36cm'],
   'First find the missing sides: 10 - 6 = 4 cm and 8 - 3 = 5 cm. Then add all six sides: 6 + 3 + 4 + 5 + 10 + 8 = 36 cm.',maths_S('perimeter of a compound shape'),'cm'),maths_LSHAPE),
 maths_img(typed('Work out the area inside this L-shaped figure. Its sides meet at right angles.',['68','68 cm2','68cm2','68 cm²','68cm²','68 cm^2','68 square cm','68 cm squared','68cm squared','68 sq cm','68 square centimetres'],
   'Think of a full 10 by 8 rectangle (80) and take away the missing corner, which is 4 by 3 (12). 80 - 12 = 68 cm<sup>2</sup>.',maths_S('area of a compound shape'),'cm<sup>2</sup>'),maths_LSHAPE),
 maths_img(typed('Work out the area of this right-angled triangle.',['30','30 cm2','30cm2','30 cm²','30cm²','30 cm^2','30 square cm','30 cm squared','30cm squared','30 sq cm','30 square centimetres'],
   'Use the two sides that meet at the right angle: 12 × 5 = 60, then halve it: 30 cm<sup>2</sup>. The 13 cm side is not needed.',maths_S('area of a right-angled triangle'),'cm<sup>2</sup>'),maths_rtri(12,5,13)),
 mc('A cube has edges that are 4 cm long. What is its total surface area?','96 cm<sup>2</sup>',['64 cm<sup>2</sup>','24 cm<sup>2</sup>','384 cm<sup>2</sup>'],
   'One face is 4 × 4 = 16 cm<sup>2</sup>. A cube has 6 equal faces, so 6 × 16 = 96 cm<sup>2</sup>.',maths_S('surface area of a cube')),
 maths_ng(tf('The capacity of a jug is the amount of liquid that the jug can hold.',true,
   'Capacity tells you how much a container can hold. It is often measured in millilitres or litres.',maths_S('meaning of capacity')),['capacity','can hold']),
 tf('If one rectangle has a greater perimeter than another rectangle, it must also have a larger area.',false,
   'Not always. A 1 by 9 rectangle has perimeter 20 and area 9. A 4 by 4 square has perimeter 16 but area 16.',maths_S('perimeter and area')),
 match('Match each measurement to an equal one.',[
   ['3.2 kg','3200 g'],['0.32 kg','320 g'],['4.5 litres','4500 ml'],['45 mm','4.5 cm'],['1.5 hours','90 minutes']],
   '1 kg = 1000 g, 1 litre = 1000 ml, 1 cm = 10 mm and 1 hour = 60 minutes.',maths_S('convert units')),
 mc('A film lasts 1.75 hours. How long is that?','1 hour 45 minutes',['1 hour 75 minutes','2 hours 15 minutes','1 hour 7 minutes'],
   '0.75 of an hour is three quarters of 60 minutes, which is 45 minutes. Time does not work in hundreds.',maths_S('change decimal hours into hours and minutes')),
 maths_img(typed('Nina arrives at the Park Road bus stop at 08:50 and takes the next bus to the Museum. How many minutes is her bus ride?',['27','27 minutes','27 min','27 mins'],
   'The next bus at Park Road after 08:50 is Bus B at 08:59. It reaches the Museum at 09:26. From 08:59 to 09:26 is 27 minutes.',maths_S('read a timetable'),'minutes'),maths_BUS),
 maths_img(typed('Look at the water in the jug. How many more millilitres are needed to make exactly 1 litre?',['350','350 ml','350ml','350 millilitres'],
   'Each small mark is 50 ml, so there is 650 ml in the jug. 1 litre = 1000 ml, and 1000 - 650 = 350 ml.',maths_S('read a measuring scale'),'ml'),maths_JUG),
 order('Put these lengths in order, from the shortest to the longest.',['0.9 cm','12 mm','0.1 m','105 mm','0.11 m'],
   'Change them all into millimetres: 9 mm, 12 mm, 100 mm, 105 mm, 110 mm.',maths_S('compare lengths in different units')),
 multi('A rectangle has an area of 24 cm<sup>2</sup>. Tick ALL the sizes it could have.',['8 cm by 3 cm','12 cm by 2 cm','4.8 cm by 5 cm'],['10 cm by 2 cm','7 cm by 5 cm','12 cm by 12 cm'],
   'Area = length × width, so the two numbers must multiply to 24. 4.8 × 5 = 24 works too: sides do not have to be whole numbers.',maths_S('area of a rectangle')),
 typed('A square has the same perimeter as a rectangle that is 9 cm long and 5 cm wide. What is the area of the square?',['49','49 cm2','49cm2','49 cm²','49cm²','49 cm^2','49 square cm','49 cm squared','49cm squared','49 sq cm','49 square centimetres'],
   'The rectangle has perimeter 9 + 5 + 9 + 5 = 28 cm. A square side is 28 ÷ 4 = 7 cm, so its area is 7 × 7 = 49 cm<sup>2</sup>.',maths_S('multi-step perimeter and area'),'cm<sup>2</sup>'),
 maths_img(write('Ben works out the area of this triangle as 15 × 17 ÷ 2. Explain his mistake and give the correct area.',
   ['right angle|right-angle|90|perpendicular|15 x 8|15x8|15 × 8|15×8|15*8|15 * 8|8 x 15|8x15|8 × 15|8×15|8*15|8 * 15|15 times 8|8 times 15|height is 8|height is the 8|use 8|used 8|use the 8|15 by 8|15 and 8|8 and 15','longest|slop|slant|diagonal|hypotenuse|not the height|not a height|not height|not the base|wrong side|wrong number|not 17|instead of 17|instead of 8|n\'t the height|isnt the height','60'],
   '17 cm is the longest, sloping side, so it is not the height. Use the two sides that meet at the right angle: 15 × 8 ÷ 2 = 60 cm<sup>2</sup>.','For a triangle area you need a base and its height, which meet at a right angle here. Multiply them and halve the result.',maths_S('explain a triangle area mistake')),maths_rtri(15,8,17)),
 odd('Odd one out! Three cards show the same length. Tap the one that is different.','0.06 km',['0.6 m','60 cm','600 mm'],
   '0.6 m = 60 cm = 600 mm. But 0.06 km is 60 metres, which is much longer.',maths_S('convert units of length'))
]},

{id:'ex-ma-geo', group:'ma', ico:'📐', name:'Shapes, Angles and Coordinates', blurb:'Exam practice - some of this may be new: coordinates, moving shapes, symmetry, circles, nets', col:'#8b5cf6', bonus:true, Q:[
 hotspot('Tap the point (-3, 2).',maths_GRID,maths_GRID_PTS,'(-3, 2)',
   'The first number goes along the x-axis: -3 means 3 squares left. The second number goes up or down: 2 means 2 squares up.',maths_S('coordinates in four quadrants')),
 maths_img(mc('A, B and C are three corners of a rectangle. What are the coordinates of the fourth corner, D?','(3, -2)',['(-2, 3)','(3, 2)','(-3, -2)'],
   'D must be straight below B, so it has the same x as B (3). It must be level with C, so it has the same y as C (-2).',maths_S('find a missing vertex')),maths_RECT),
 mc('Point P is at (2, 5). It is translated 6 squares to the left and 3 squares down. Where is it now?','(-4, 2)',['(8, 8)','(-4, 8)','(-1, -1)'],
   'Left changes the first number: 2 - 6 = -4. Down changes the second number: 5 - 3 = 2.',maths_S('translate a point')),
 maths_img(mc('Point A is at (3, 1). It is rotated 90° clockwise about the origin O. Where does it land?','(1, -3)',['(-1, 3)','(-3, -1)','(-1, -3)'],
   'A is 3 right and 1 up. A quarter turn clockwise makes "3 right" point down and "1 up" point right: 1 right and 3 down.',maths_S('rotate a point')),maths_ROT),
 hotspot('Point A is reflected in the dashed mirror line. Tap the point where its image is.',maths_REFL,maths_REFL_PTS,'(1, -3)',
   'The image is the same distance from the mirror line, on the other side, measured at a right angle to the line. For this diagonal line the two coordinates swap: (-3, 1) becomes (1, -3).',maths_S('reflect in a diagonal mirror line')),
 sort('Sort the shapes by their order of rotational symmetry.',['Order 1','Order 2','Order 3','Order 4'],[
   ['Square',3],['Scalene triangle',0],['Rectangle (not a square)',1],['Equilateral triangle',2],['Isosceles trapezium',0],['Parallelogram (not a rectangle or rhombus)',1],['Kite (not a rhombus)',0],['Rhombus (not a square)',1]],
   'The order is how many times a shape fits onto itself in one full turn. Order 1 means it only fits after the whole turn.',maths_S('rotational symmetry')),
 maths_ng(label('Choose the correct name for each number on the circle. A number on a line names the whole line.',maths_CIRC,maths_CIRC_PTS,
   'The centre is the middle point. A radius goes from the centre to the edge. A diameter goes right across through the centre. The circumference is the distance all the way round.',maths_S('parts of a circle')),['centre','radius','diameter','circumference','circle radius']),
 maths_img(mc('Which of these nets folds up to make a closed cube?','Net C',['Net A','Net B','Net D'],
   'In net C the row of four makes the sides, with one flap on each side of the row for the top and bottom. In the others, some faces land on top of each other.',maths_S('nets of a cube')),maths_NETS),
 multi('Tick ALL the shapes that have exactly one line of symmetry.',['Kite (not a rhombus)','Isosceles trapezium','Isosceles triangle (not equilateral)'],['Rectangle (not a square)','Equilateral triangle','Parallelogram (not a rectangle or rhombus)'],
   'Kite, isosceles trapezium and isosceles triangle have 1 line each. A rectangle has 2, an equilateral triangle has 3 and this parallelogram has none.',maths_S('line symmetry')),
 maths_img(slider('The three angles around this point make a full turn. How big is the missing angle?',{min:60,max:180,step:5,unit:'°'},115,0,
   'Angles around a point add up to 360°. 150 + 95 = 245, and 360 - 245 = 115°.',maths_S('angles around a point')),maths_TURN),
 maths_img(typed('Calculate the missing angle on the straight line.',['117','117°','117 °','117 degrees'],
   'Angles on a straight line add up to 180°. 180 - 63 = 117°.',maths_S('angles on a straight line'),'°'),maths_LINE),
 typed('An isosceles triangle has one angle of 100°. What is the size of each of the other two angles?',['40','40°','40 °','40 degrees'],
   'The other two angles are equal. 180 - 100 = 80, and 80 ÷ 2 = 40°.',maths_S('angles in an isosceles triangle'),'°'),
 maths_ng(tf('A reflex angle is bigger than 180° but smaller than 360°.',true,
   'Reflex angles are more than a half turn and less than a full turn.',maths_S('types of angle')),['reflex angle','reflex']),
 maths_ng(tf('When a shape is translated, it is flipped over to make a mirror image.',false,
   'A translation only moves a shape to a new place. It does not flip it or turn it. Flipping is a reflection.',maths_S('transformations')),['translate','translation']),
 spot('Find the mistake and tap it.','The net of a square-based pyramid is made of one square and [[three|four]] triangles.',
   'A square has four edges, and one triangle joins each edge. So the net needs four triangles.',maths_S('nets of 3D shapes'))
]},

{id:'ex-ma-stats', group:'ma', ico:'📊', name:'Graphs and Chance', blurb:'Exam practice - some of this may be new: charts, median, range, probability', col:'#10b981', bonus:true, Q:[
 maths_img(typed('The bar chart shows how many books five children read. What is the range of the numbers of books?',['8','8 books'],
   'Range = largest - smallest. The largest bar is 12 and the smallest is 4, so the range is 12 - 4 = 8.',maths_S('range from a bar chart')),maths_BARS),
 typed('Find the median of these numbers: 6, 11, 3, 15, 8, 12',['9.5','9 1/2'],
   'Put them in order: 3, 6, 8, 11, 12, 15. There are two middle numbers, 8 and 11. Halfway between them is (8 + 11) ÷ 2 = 9.5.',maths_S('median of an even number of values')),
 write('Explain how to find the median of 4, 10, 2 and 8. Give the answer.',
   ['order|sort|arrange|smallest|ascending|lowest','middle|halfway|half way|between|centre|center|mean of|average of','6|six'],
   'First put the numbers in order: 2, 4, 8, 10. There are two middle numbers, 4 and 8, so the median is halfway between them, which is 6.','A median answer needs three ideas: put in order, take the middle, and go halfway if there are two middle numbers.',maths_S('explain how to find a median')),
 maths_img(typed('By how many degrees did the temperature rise from 06:00 to 15:00?',['12','12°','12 degrees','12 °c','12°c'],
   'Read both points on the graph: 4 °C at 06:00 and 16 °C at 15:00. The rise is 16 - 4 = 12 degrees.',maths_S('read a line graph'),'degrees'),maths_TEMP),
 maths_img(typed('40 children each chose one fruit. The Mango and Grapes sectors are the same size. How many children chose mango?',['5','5 children'],
   'Banana is a quarter of the circle. Mango and grapes together make another quarter, so mango is 1 eighth. 40 ÷ 8 = 5.',maths_S('read a pie chart'),'children'),maths_PIE),
 tf('In a pie chart, a sector that fills half of the circle shows half of all the data.',true,
   'The whole circle is all the data, so each sector shows the same fraction of the data as it takes of the circle.',maths_S('meaning of a pie chart')),
 mc('Aisha wants to find out whether children with longer arms can also throw a ball further. Which graph is best?','Scatter graph',['Pie chart','Waffle diagram','Pictogram'],
   'A scatter graph shows two measurements for each child as one cross, so you can see whether they are linked.',maths_S('choose a graph')),
 maths_img(mc('Each cross shows one child. Which sentence describes the pattern?','More practice goes with fewer mistakes',['More practice goes with more mistakes','Every child makes the same number of mistakes','Practice and mistakes show no pattern at all'],
   'The crosses go down from left to right: children with more hours of practice made fewer mistakes.',maths_S('describe a scatter graph')),maths_SCAT),
 slider('A bag has 3 red counters and 7 blue counters. You take one without looking. What is the probability that it is red, as a percentage?',{min:0,max:100,step:5,unit:'%'},30,0,
   'There are 10 counters and 3 are red: 3/10 = 30%.',maths_S('probability as a percentage')),
 sort('How likely is each event? Sort the cards. A dice here has the numbers 1 to 6.',['Impossible','Even chance','Certain'],[
   ['Rolling a 7 on a dice',0],['Rolling an even number on a dice',1],['Rolling a number less than 7 on a dice',2],['A fair coin landing on heads',1],['Taking a red ball from a bag of only red balls',2],['Taking a blue ball from a bag of only red balls',0],['Rolling an odd number on a dice',1]],
   'Impossible means it can never happen (0%). Even chance means as likely to happen as not (50%). Certain means it must happen (100%).',maths_S('language of probability')),
 multi('A dice with the numbers 1 to 6 is rolled once. Each card shows two events. Tick ALL the cards where the two events are mutually exclusive: they cannot both happen on that roll.',
   ['An even number / the number 3','A number less than 3 / a number more than 4','A square number / a prime number'],
   ['An even number / a number more than 3','An odd number / the number 5','A square number / an even number'],
   'Look for a number that fits both events. 4 is even and more than 3, 5 is odd, and 4 is square and even. The other pairs share no number.',maths_S('mutually exclusive events')),
 tf('A fair coin has landed on heads 5 times in a row. On the next flip, tails is more likely than heads.',false,
   'The coin has no memory. Each flip is still an even chance: 50% heads and 50% tails.',maths_S('independent trials')),
 hotspot('The parts on each spinner are equal in size. Tap the dot under the spinner that has exactly a 75% chance of landing on a dark part.',maths_SPIN,maths_SPIN_PTS,'Spinner C',
   '75% means 3/4. Spinner C has 6 dark parts out of 8, and 6/8 = 3/4. A is 1/4, B is 3/8 and D is 4/6.',maths_S('compare probabilities'))
]},

{id:'ex-ma-p1', group:'ma', ico:'✏️', name:'Paper 1: No Calculator', blurb:'Exam practice with no calculator: negative numbers, sequences, mental and written methods', col:'#ef4444', Q:[
 typed('(No calculator) The temperature is -4 °C. It then falls by 9 degrees. What is the new temperature?',['-13','-13 °c','-13°c','- 13','−13','−13 °c','−13°c','-13c','-13 c','-13 degrees','-13 degrees c','-13 degrees celsius','minus 13','minus 13 degrees'],
   'Falling means going further down the number line. Start at -4 and count 9 more down: -13 °C.',maths_S('calculate with negative temperatures'),'°C'),
 maths_img(typed('What is the difference between the numbers at P and Q?',['14'],
   'P is at -6 and Q is at 8. From -6 up to 0 is 6, and from 0 up to 8 is 8. 6 + 8 = 14.',maths_S('difference across zero')),maths_NLNEG),
 order('Put these numbers in order, from the smallest to the largest.',['-12','-5','-0.5','0','0.3'],
   'On a number line, numbers further left are smaller. -12 is further below zero than -5, so it is smaller.',maths_S('order negative numbers')),
 typed('In a sequence, term = position × 4 + 3. What is the 25th term?',['103'],
   'Put the position into the rule: 25 × 4 = 100, then add 3. The 25th term is 103.',maths_S('position-to-term rule')),
 multi('A sequence starts 5, 11, 17, 23 and keeps going up in the same steps. Tick ALL the numbers that will be in the sequence.',['41','65','101'],['30','66','100'],
   'The step is 6, so every term is 5 plus a multiple of 6. Take away 5 and check whether the result divides by 6: 41 - 5 = 36 does.',maths_S('test terms of a sequence')),
 typed('(No calculator) Work out 36 × 47.',['1692','1 692','1,692'],
   'Split one number: 36 × 40 = 1440 and 36 × 7 = 252. Add them: 1440 + 252 = 1692.',maths_S('written multiplication')),
 typed('(No calculator) Work out 912 ÷ 24.',['38'],
   'Use multiples of 24: 30 × 24 = 720, leaving 192. 8 × 24 = 192. So the answer is 30 + 8 = 38.',maths_S('long division')),
 typed('(No calculator) Work out 25.2 ÷ 4.',['6.3'],
   'Halve it twice: 25.2 ÷ 2 = 12.6, and 12.6 ÷ 2 = 6.3.',maths_S('divide a decimal by a whole number')),
 match('Match each calculation to its answer.',[
   ['5.2 × 1000','5200'],['5200 ÷ 100','52'],['5.2 ÷ 10','0.52'],['0.052 × 100','5.2'],['52 ÷ 1000','0.052']],
   'Multiplying by 10, 100 or 1000 moves the digits 1, 2 or 3 places to the left. Dividing moves them to the right.',maths_S('multiply and divide by 10, 100 and 1000')),
 sort('Use divisibility rules. Sort the numbers.',['Divides by 3 but not by 9','Divides by 9','Does not divide by 3'],[
   ['405',1],['123',0],['514',2],['738',1],['852',0],['1001',2]],
   'Add the digits. If the total divides by 3, so does the number. If the total divides by 9, so does the number. For 123: 1 + 2 + 3 = 6.',maths_S('tests of divisibility')),
 tf('Every multiple of 6 is also a multiple of 3.',true,'6 is 2 × 3, so any group of sixes can be split into threes.',maths_S('multiples')),
 tf('Every multiple of 4 is also a multiple of 8.',false,'One example is enough to show it is wrong: 12 is a multiple of 4 but not a multiple of 8.',maths_S('multiples and counter-examples')),
 typed('A number has one decimal place. Rounded to the nearest whole number it is 8. Its two digits add up to 13. What is the number?',['7.6'],
   'Numbers from 7.5 to 8.4 round to 8. Check the digit totals: only 7.6 gives 7 + 6 = 13.',maths_S('rounding puzzle')),
 odd('Odd one out! Three are prime numbers. Tap the number that is not prime.','51',['41','43','47'],
   'A prime number has exactly two factors. 51 = 3 × 17, so it is not prime. Test with the digit rule: 5 + 1 = 6 divides by 3.',maths_S('prime numbers'))
]},

{id:'ex-ma-p2', group:'ma', ico:'🧠', name:'Paper 2: Problem Solving', blurb:'Exam practice with a calculator: money, word problems with several steps, simple formulas', col:'#eab308', Q:[
 typed('(Calculator) An adult ticket costs $12.50 and a child ticket costs $7.25. A family buys 2 adult tickets and 3 child tickets. How much change do they get from $50?',['3.25','$3.25','$ 3.25','3.25 dollars','3.25$'],
   'Adults: 2 × 12.50 = 25. Children: 3 × 7.25 = 21.75. Total 46.75. Change: 50 - 46.75 = $3.25.',maths_S('multi-step money problem'),'dollars'),
 typed('(Calculator) A minibus holds 14 passengers. 108 passengers need to travel at the same time. How many minibuses are needed?',['8','8 minibuses','8 buses'],
   '108 ÷ 14 is about 7.7. Seven minibuses would leave some people behind, so you need 8.',maths_S('round up in context'),'minibuses'),
 maths_img(mc('(Calculator) Which pack has the lowest price for one juice box?','Pack B',['Pack A','Pack C','All the same'],
   'Divide each price by the number of boxes: A = $0.75, B = $0.72, C = $0.80. B is the cheapest per box.',maths_S('compare unit prices')),maths_PACKS),
 write('Shop A sells 3 notebooks for $5.40. Shop B sells 5 notebooks for $8.50. Which shop is better value? Show your working.',
   ['1.8|1,8|180|27','1.7|1,7|170|25.5','shop b is|b is|b has|b gives|b costs less|b because|b, because|b since|choose b|choose shop b|pick b|pick shop b|buy from b|buy from shop b|better is b|better is shop b|cheaper is b|cheaper is shop b|value is b|value is shop b|so b|so shop b|then shop b|b wins|b offers|shop b.|shop b!'],
   'Shop A: 5.40 ÷ 3 = $1.80 for one notebook. Shop B: 8.50 ÷ 5 = $1.70 for one notebook. Shop B is better value because each notebook costs less.','To compare offers, find the price of one item in each shop, then say which is lower.',maths_S('best buy with working')),
 typed('Hiring a bike costs C dollars, where C = 5 + 3 × h and h is the number of hours. What is the cost for 4 hours?',['17','$17','$ 17','17 dollars','17$'],
   'Replace h with 4. Multiply first: 3 × 4 = 12, then add 5. The cost is $17.',maths_S('use a formula'),'dollars'),
 typed('Boat hire costs C dollars, where C = 8 + 6 × h and h is the number of hours. Sara pays $50. For how many hours did she hire the boat?',['7','7 hours'],
   'Work backwards: first take away the 8, which leaves 42. Then divide by 6: 42 ÷ 6 = 7 hours.',maths_S('use a formula backwards'),'hours'),
 fill('Two numbers add up to 50. The difference between them is 14. The larger number is ___ and the smaller number is ___.',['32','18'],['32','18','36','14','25'],
   'Take the difference away from the total: 50 - 14 = 36. Halve it to get the smaller number, 18. Add 14 to get the larger one, 32.',maths_S('sum and difference problem')),
 typed('(Calculator) 5 identical books cost $32.50. How much do 8 of these books cost?',['52','$52','$ 52','52.00','$52.00','52 dollars','52$'],
   'Find the price of one book first: 32.50 ÷ 5 = 6.50. Then 8 × 6.50 = $52.',maths_S('proportion with money'),'dollars'),
 typed('(Calculator) Elena saves $4.50 every week. She wants a game that costs $38. After how many weeks will she have enough money?',['9','9 weeks'],
   '38 ÷ 4.50 is about 8.4. After 8 weeks she has only $36, so she needs 9 weeks.',maths_S('interpret a division answer'),'weeks'),
 tf('A calculator shows 6.5 as the total cost in dollars. This means the cost is $6.50.',true,
   '6.5 means 6 dollars and 5 tenths of a dollar, which is 50 cents. Write money with two decimal places.',maths_S('read a calculator display')),
 mc('Check by estimating: which number is closest to 49 × 21?','1000',['100','500','10 000'],
   'Round the numbers: 50 × 20 = 1000. If your calculator shows something very different, check what you typed.',maths_S('estimate an answer')),
 maths_img(multi('(Calculator) Tick ALL the pairs that cost exactly $5 together.',['Cake and fruit cup','Juice and sandwich'],['Cake and soup','Juice and soup','Cake and juice'],
   'Cake + fruit cup = 2.40 + 2.60 = 5.00. Juice + sandwich = 1.35 + 3.65 = 5.00. The other totals are different.',maths_S('add money from a price list')),maths_PRICES),
 match('Match each story to the calculation that solves it.',[
   ['Buy 4 pens at $3 each and one bag for $9','4 × 3 + 9'],
   ['Share $36 between 4 children, then one child spends $3','36 ÷ 4 - 3'],
   ['3 friends share equally the cost of 4 tickets at $9 each','4 × 9 ÷ 3'],
   ['A $9 ticket is $4 cheaper today. Buy 3 tickets','(9 - 4) × 3']],
   'Say the story as steps and keep their order. Use brackets when a subtraction must happen before a multiplication.',maths_S('choose the calculation'))
]}
];

/* ================= cheat sheets ================= */
maths_TOPICS[0].sheet='<h3>Fraction, decimal, percentage</h3><table><tr><th>Fraction</th><th>Decimal</th><th>Percent</th></tr><tr><td>1/2</td><td>0.5</td><td>50%</td></tr><tr><td>1/4</td><td>0.25</td><td>25%</td></tr><tr><td>1/5</td><td>0.2</td><td>20%</td></tr><tr><td>1/10</td><td>0.1</td><td>10%</td></tr><tr><td>1/100</td><td>0.01</td><td>1%</td></tr></table><h3>Fractions</h3><ul><li>Add or subtract: make the denominators the same first. 1/3 + 1/5 = 5/15 + 3/15 = 8/15.</li><li>Times a whole number: multiply the top. 2/7 × 3 = 6/7.</li><li>Divided by a whole number: 4/5 ÷ 2 = 2/5, and 1/3 ÷ 2 = 1/6.</li></ul><h3>Percentages</h3><ul><li>10% = divide by 10. 5% = half of 10%. 1% = divide by 100.</li><li>"Increase by 30%": find 30%, then <b>add</b> it on.</li></ul><h3>Ratio and recipes</h3><ul><li>Add the parts, find one part, then multiply. Share 18 in the ratio 1:5 gives 3 and 15.</li><li>Keep the order: cats to dogs is not dogs to cats.</li><li>Recipes: find the amount for 1 (or 2) people first.</li></ul><p><b>Exam tip:</b> "Explain" needs numbers, not just yes or no.</p>';
maths_TOPICS[1].sheet='<h3>Perimeter and area</h3><ul><li><b>Perimeter:</b> distance all round. Find missing sides first.</li><li><b>Rectangle area:</b> length × width. 11 × 3 = 33 cm<sup>2</sup>.</li><li><b>Right-angled triangle:</b> half of base × height. Sides 4 and 7 at the right angle give 14 cm<sup>2</sup>.</li><li><b>Cube surface area:</b> 6 × area of one face.</li></ul><h3>Units</h3><table><tr><th>1 cm</th><td>10 mm</td></tr><tr><th>1 m</th><td>100 cm</td></tr><tr><th>1 km</th><td>1000 m</td></tr><tr><th>1 kg</th><td>1000 g</td></tr><tr><th>1 litre</th><td>1000 ml</td></tr><tr><th>1 hour</th><td>60 minutes</td></tr></table><h3>Time</h3><ul><li>2.5 hours = 2 hours 30 minutes (not 2 hours 50).</li><li>0.25 h = 15 min, 0.1 h = 6 min.</li><li>Timetables: read down one column for one bus. Count on to the next hour, then the extra minutes.</li></ul><h3>Reading a scale</h3><p>Count the gaps between two numbers to find what one small mark is worth.</p>';
maths_TOPICS[2].sheet='<h3>Coordinates (x, y)</h3><ul><li>Along first (x), then up or down (y).</li><li>Left and down are negative: (-1, -4) is 1 left, 4 down.</li></ul><h3>Moving shapes</h3><table><tr><th>Translation</th><td>move without turning, same way up</td></tr><tr><th>Reflection</th><td>flip over a mirror line</td></tr><tr><th>Rotation</th><td>turn about a point (clockwise goes like clock hands)</td></tr></table><p>The size and shape never change.</p><h3>Symmetry</h3><ul><li>Line symmetry: the two halves fold onto each other.</li><li>Rotational order: how many times it fits in one full turn. A regular pentagon has order 5.</li></ul><h3>Angles</h3><ul><li>Straight line = 180°. Around a point = 360°. Triangle = 180°.</li><li>Acute under 90°, obtuse 90° to 180°, reflex over 180°.</li></ul><h3>Circle and nets</h3><ul><li>Diameter = 2 × radius.</li><li>A net must fold with no faces overlapping.</li></ul>';
maths_TOPICS[3].sheet='<h3>Averages and spread</h3><ul><li><b>Median:</b> put in order, take the middle. Two middles: go halfway. 1, 5, 8, 20 gives 6.5.</li><li><b>Range:</b> largest - smallest.</li><li><b>Mode:</b> the most common value.</li></ul><h3>Graphs</h3><table><tr><th>Bar chart</th><td>compare groups</td></tr><tr><th>Line graph</th><td>change over time</td></tr><tr><th>Pie chart</th><td>parts of a whole</td></tr><tr><th>Scatter graph</th><td>is there a link between two measurements?</td></tr></table><p>Read the labels and work out what one grid line is worth.</p><h3>Probability</h3><ul><li>Impossible 0%, even chance 50%, certain 100%.</li><li>Chance = ways you want ÷ all equal ways. 1 winning card out of 5 = 20%.</li><li><b>Mutually exclusive:</b> the two events cannot happen at the same time.</li><li>A fair coin or dice does not remember earlier results.</li></ul>';
maths_TOPICS[4].sheet='<h3>No calculator tricks</h3><ul><li>Multiply by splitting: 23 × 31 = 23 × 30 + 23.</li><li>Divide by 4: halve, then halve again.</li><li>× 10, 100, 1000: digits move 1, 2, 3 places left. ÷ moves them right.</li></ul><h3>Negative numbers</h3><ul><li>Draw a number line. Colder means further below zero.</li><li>From -3 to 2 is a gap of 5.</li></ul><h3>Sequences</h3><ul><li>Find the step. A rule like "position × 2 + 7" lets you jump to any term.</li></ul><h3>Divisibility</h3><table><tr><th>by 3</th><td>digit total divides by 3</td></tr><tr><th>by 6</th><td>even and divides by 3</td></tr><tr><th>by 9</th><td>digit total divides by 9</td></tr></table><p><b>Prime:</b> exactly two factors (2, 3, 5, 7, 11, 13...). 1 is not prime.</p><p><b>Exam tip:</b> write your working. It can earn marks even if the answer is wrong.</p>';
maths_TOPICS[5].sheet='<h3>Word problems</h3><ol><li>Underline what you must find.</li><li>Write each step with its numbers.</li><li>Check: does the answer make sense? Is it the right unit?</li></ol><h3>Remainders</h3><ul><li>Need enough boxes for everything: round <b>up</b>.</li><li>How many full boxes can you fill: round <b>down</b>.</li></ul><h3>Money</h3><ul><li>Two decimal places: a screen showing 2.8 means $2.80.</li><li>Best value: find the price of <b>one</b> item in each offer.</li></ul><h3>Formulas</h3><ul><li>P = 2 + 4 × n with n = 3 gives 14.</li><li>Backwards: undo the steps in reverse order.</li></ul><h3>Estimate</h3><p>Round first to check the calculator: 31 × 19 is about 30 × 20 = 600.</p>';

/* ================= word list and glossary ================= */
const maths_VOCAB=[
 ['Percentage','процент (процентная доля)','Out of 100'],
 ['Ratio','отношение','Compares parts, like 1:4'],
 ['Simplest form','несократимый вид','Divide top and bottom by the same number'],
 ['Denominator','знаменатель','The bottom number of a fraction'],
 ['Perimeter','периметр','Distance all the way round'],
 ['Area','площадь','Space inside a flat shape'],
 ['Surface area','площадь поверхности','All the faces added together'],
 ['Capacity','вместимость','How much a container can hold'],
 ['Coordinates','координаты','(x, y)'],
 ['Reflection','отражение','A flip in a mirror line'],
 ['Rotation','поворот','A turn about a point'],
 ['Translation','параллельный перенос (сдвиг)','A shift'],
 ['Radius','радиус','Centre to edge'],
 ['Diameter','диаметр','Right across through the centre'],
 ['Circumference','длина окружности','All the way round a circle'],
 ['Median','медиана (середина упорядоченного ряда)','The middle value'],
 ['Range','размах','Largest take away smallest'],
 ['Probability','вероятность','How likely something is'],
 ['Mutually exclusive','несовместные (события)','Cannot both happen'],
 ['Sequence','последовательность','Numbers that follow a rule'],
 ['Prime number','простое число','Exactly two factors'],
 ['Estimate','оценить (прикинуть)','A sensible rough answer']
];

const maths_GLO=[
 ['fraction','дробь'],['percentage','процент (процентная доля)'],['ratio','отношение'],['simplest form','несократимый вид'],['simplify|simplifies','сокращать'],['denominator','знаменатель'],['compare|comparison','сравнить (сравнение)'],['one half|half|halve','половина (делить пополам)'],['less than','меньше чем'],['more than','больше чем'],['equal to','равно'],['card','карточка'],
 ['ribbon is','лента'],['piece','кусок'],['cut into','разрезан на'],['library','библиотека'],['book','книга'],['comic','комикс'],['box|boxes','коробка'],['holds','вмещает (держит)'],['made from','сделана из'],['a bag has','в мешочке лежат'],['bag of only red balls','мешочек только с красными шарами'],['times in a row','раз подряд'],['exactly one','ровно один'],['make exactly','получить ровно'],['cost exactly','стоят ровно'],['exactly a','ровно'],['kite (not a rhombus)','дельтоид (не ромб)'],['plant','растение'],['tall','высокий (высотой)'],['height','высота'],['increase by|increased by','увеличиться на'],['paint','краска'],['litre','литр'],['red','красный'],['blue','синий'],['yellow','желтый'],['orange','оранжевый'],['share|shared|sharing','делить, делиться (поделить)'],['sweets','конфеты'],['recipe','рецепт'],['rice','рис'],['onion','луковица'],['people','люди (человек)'],['pen','ручка'],
 ['digits','цифры'],['is he right','прав ли он'],['using','используя'],['large square','большой квадрат'],['shaded','закрашенный'],['number line','числовая прямая'],['dot','точка'],['arrow shows','стрелка показывает'],['equal steps','равные шаги'],
 ['perimeter','периметр'],['area','площадь'],['surface area','площадь поверхности'],['edge','ребро (край)'],['figure','фигура'],['fair coin','честная монета'],['floor plan','план пола'],['l-shaped','в форме буквы Г'],['corner','угол (вершина)'],['right angle|right angles','прямой угол'],['right-angled','прямоугольный (о треугольнике)'],['base','основание'],['rectangle','прямоугольник'],['wide|width','шириной (ширина)'],['size','размер'],['could','мог бы'],['capacity','вместимость'],['jug','кувшин'],['amount','количество'],['can hold','может вместить'],['longer','длиннее'],['larger','больше (крупнее)'],['must','обязательно должен'],
 ['measurement','измерение (величина)'],['film','фильм'],['lasts','длится'],['how long','сколько длится (какой длины)'],['arrive','прибывать'],['bus stop','автобусная остановка'],['bus ride','поездка на автобусе'],['next bus','следующий автобус'],['bus','автобус'],['museum','музей'],['millilitre','миллилитр'],['water','вода'],['needed','нужно'],['shortest','самый короткий'],['longest','самый длинный'],['length','длина'],['work out|works out','вычислить'],
 ['point','точка'],['coordinates','координаты'],['fourth corner','четвертая вершина'],['translate|translated','сдвинуть (параллельно перенести)'],['reflect|reflected','отразить'],['rotate|rotated','повернуть'],['clockwise','по часовой стрелке'],['origin','начало координат'],['mirror line','ось отражения (линия зеркала)'],['mirror image','зеркальное изображение'],['its image','ее образ (отражение)'],['dashed','пунктирный'],['flipped over','перевернут'],['does it land','она попадет (окажется)'],
 ['rotational symmetry','поворотная симметрия'],['line of symmetry|lines of symmetry','ось симметрии'],['symmetry','симметрия'],['order 1|order 2','порядок 1, 2 (симметрии)'],['scalene','разносторонний'],['isosceles','равнобедренный'],['trapezium','трапеция'],['parallelogram','параллелограмм'],['rhombus','ромб'],['kite','дельтоид'],['circle','круг (окружность)'],['radius','радиус'],['diameter','диаметр'],['circumference','длина окружности'],['centre','центр'],['whole line','вся линия'],['nets|net of|net a|net b|net c|net d','развертка'],['folds up|fold','складываться'],['closed cube','закрытый куб'],['full turn','полный оборот'],['around','вокруг'],['straight line','прямая линия'],['reflex angle','рефлексный угол'],['smaller','меньше'],['bigger','больше'],['pyramid','пирамида'],['square-based','с квадратным основанием'],['made of','состоит из'],
 ['bar chart','столбчатая диаграмма'],['children','дети'],['range','размах; диапазон'],['median','медиана'],['temperature','температура'],['rise','повышаться (подъем)'],['pie chart','круговая диаграмма'],['sector','сектор'],['fruit','фрукт'],['chose|choose','выбрать'],['grapes','виноград'],['mango','манго'],['data','данные'],['fills half','занимает половину'],['longer arms','более длинные руки'],['arms','руки'],['throw','бросать'],['further','дальше; дополнительный'],['graph','график (диаграмма)'],['scatter graph','точечная диаграмма'],['each cross','каждый крестик'],['pattern','закономерность'],['fewer','меньше (по количеству)'],['practice','тренировка (практика)'],
 ['counter','фишка'],['bag','мешок'],['without looking','не глядя'],['probability','вероятность'],['likely','вероятный'],['event','событие'],['dice','игральный кубик'],['rolling a|rolling an|is rolled|that roll','бросать кубик (бросок)'],['total surface area','полная площадь поверхности'],['impossible','невозможно'],['even chance','равные шансы'],['certain','обязательно произойдет; определенный'],['coin','монета'],['heads','орел (монеты); головы'],['tails','решка (монеты); хвосты'],['ball','шар (мяч)'],['mutually exclusive','несовместные'],['happen','произойти'],['even number','четное число'],['odd number','нечетное число'],['prime number|prime numbers','простое число'],['prime','простое (о числе)'],['in a row','подряд'],['flip','подбрасывание (монеты); перевернуть'],['spinner','вертушка (спиннер)'],['chance','шанс'],['dark part','темная часть'],['under the','под'],['in size','по размеру'],
 ['falls by','опускается на'],['new temperature','новая температура'],['difference','разность'],['sequence','последовательность'],['term','член последовательности; термин'],['position','номер места; положение'],['keeps going up','продолжает расти'],['divisibility','делимость'],['rules','правила'],['divides by','делится на'],['does not','не'],['every','каждый'],['decimal place','знак после запятой'],['rounded to','округленное до'],
 ['adult','взрослый'],['ticket','билет'],['cost','стоить (стоимость)'],['family','семья'],['buys|buy','покупать'],['how much change','сколько сдачи'],['minibus|minibuses','микроавтобус'],['passenger','пассажир'],['travel','ехать'],['at the same time','одновременно'],['pack a|pack b|pack c|which pack','упаковка'],['lowest','самый низкий'],['price','цена'],['juice','сок'],['shop','магазин'],['sell','продавать'],['notebook','тетрадь'],['better value','выгоднее'],['show your working','покажи решение'],['hiring|hire|hired','аренда (брать напрокат)'],['bike','велосипед'],['boat','лодка'],['hour','час'],['pays','платит'],['dollars','доллары'],['add up to','в сумме дают'],['between them','между ними'],['smaller number','меньшее число'],['larger number','большее число'],['identical','одинаковые'],['elena saves','Элена копит'],['week','неделя'],['wants','хочет'],['enough','достаточно'],['money','деньги'],['shows','показывает'],['total cost','общая стоимость'],['means','означает'],['estimating|estimate','прикидывать (оценивать)'],['closest to','ближе всего к'],['together','вместе'],['exactly','ровно (точно)'],['each story','каждую историю (задачу)'],['calculation','вычисление'],['solves','решает'],['friend','друг'],['spends','тратит'],['cheaper','дешевле'],['today','сегодня'],['sandwich','бутерброд'],['soup','суп'],['cake','пирожное'],['fruit cup','стаканчик с фруктами']
];

const PART_MATHS={topics:maths_TOPICS, vocab:maths_VOCAB, glossary:maths_GLO};

/* ---------- assemble ---------- */
const TOPICS=[].concat(PART_ENGLISH.topics,PART_ESL.topics,TOP_u1,TOP_u2,PART_SCIENCE.topics,TOP_mA,TOP_mB,PART_MATHS.topics);
TOPICS.forEach(function(t){if(!t.group)t.group=t.id.indexOf('s-')===0?'sci':'ma'});
const VOCAB=(function(){const seen={},out=[];[].concat(VOC_u1,VOC_u2,VOC_mA,VOC_mB,PART_ENGLISH.vocab||[],PART_ESL.vocab||[],PART_SCIENCE.vocab||[],PART_MATHS.vocab||[]).forEach(function(v){const k=v[0].toLowerCase();if(!seen[k]){seen[k]=1;out.push(v)}});return out})();
const GLOSSARY=(function(){const seen={},out=[];[].concat(GLO_u1,GLO_u2,GLO_mA,GLO_mB,PART_ENGLISH.glossary||[],PART_ESL.glossary||[],PART_SCIENCE.glossary||[],PART_MATHS.glossary||[]).forEach(function(g){const k=g[0].toLowerCase();if(!seen[k]){seen[k]=1;out.push(g)}});return out})();
QuizEngine.run({id:'mock1-checkpoint-dec',lang:'en',logo:'📝 Mock Quest',title:'Mock Exams 1: English, Science and Maths',bossSize:30,
  groups:[{"id": "en", "name": "📚 English", "when": "Tue 1 Dec", "paper": 20}, {"id": "esl", "name": "🌍 English as a Second Language", "when": "Wed 2 Dec", "paper": 20}, {"id": "sci", "name": "🔬 Science", "when": "Thu 3 Dec", "paper": 25}, {"id": "ma", "name": "🔢 Maths", "when": "Fri 4 Dec", "paper": 25}],
  games:[{"href": "game-listening/", "ico": "🎧", "name": "Listening Station", "desc": "ESL listening: hear each clip twice, then answer, like in the exam. Turn the sound on."}, {"href": "game-editor/", "ico": "✏️", "name": "Editor's Desk", "desc": "English proofreading: every sentence has one mistake. Find it and fix it."}, {"href": "game-maths/", "ico": "🐒", "name": "Mango Climb", "desc": "No-calculator maths: climb to the mango - decimals, fractions, percentages, order of operations and more."}, {"href": "game-lab/", "ico": "🔍", "name": "Science Lab Detective", "desc": "Investigation skills: read instruments, sort variables, plot graphs, catch the odd result."}],
  topics:TOPICS,vocab:VOCAB,glossary:GLOSSARY});
})();
