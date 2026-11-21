/* Mock Exams 1 - revision mix for the 1-4 December mock exams (Cambridge Primary Checkpoint format, Grade 5).
   Science: Unit 1 (heart, blood, lungs; puberty, insect bites, germs) and Unit 2 (states of matter, phase changes, dissolving),
   from the teacher slides and Revision Pack, plus the audited earlier tests. Maths: the topics named in the November homework
   pack (decimals, order of operations, factors and multiples, square and cube numbers, mean and mode, angles, quadrilaterals).
   Not covered: English papers (no materials), Maths units before November (no materials), Learner's Book text. */
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


/* ---------- assemble ---------- */
const TOPICS=[].concat(TOP_u1,TOP_u2,TOP_mA,TOP_mB);
const VOCAB=(function(){const seen={},out=[];[].concat(VOC_u1,VOC_u2,VOC_mA,VOC_mB).forEach(function(v){const k=v[0].toLowerCase();if(!seen[k]){seen[k]=1;out.push(v)}});return out})();
const GLOSSARY=(function(){const seen={},out=[];[].concat(GLO_u1,GLO_u2,GLO_mA,GLO_mB).forEach(function(g){const k=g[0].toLowerCase();if(!seen[k]){seen[k]=1;out.push(g)}});return out})();
QuizEngine.run({id:'mock1-checkpoint-dec',lang:'en',logo:'📝 Mock Quest',title:'Mock Exams 1: Science and Maths',bossSize:25,topics:TOPICS,vocab:VOCAB,glossary:GLOSSARY});
})();
