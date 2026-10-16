/* Science - Unit 1: Human body and health (Grade 5, IB/Cambridge). Source: teacher slides + Revision Pack, Oct 2026. */
(function(){
const HP=[
 {n:'Superior vena cava',x:140,y:60},{n:'Right atrium',x:145,y:140},{n:'Right ventricle',x:145,y:270},{n:'Pulmonary artery',x:55,y:258},
 {n:'Pulmonary vein',x:300,y:60},{n:'Left atrium',x:295,y:140},{n:'Left ventricle',x:295,y:270},{n:'Aorta',x:385,y:258}];
const HEART_SVG={vb:'0 0 440 370',body:`
 <rect x="120" y="24" width="40" height="70" fill="#4c8bf5"/><rect x="280" y="24" width="40" height="70" fill="#ef5350"/>
 <rect x="90" y="90" width="110" height="105" rx="30" fill="#7aa7ff" stroke="#26224a" stroke-width="3"/><rect x="240" y="90" width="110" height="105" rx="30" fill="#ff8a86" stroke="#26224a" stroke-width="3"/>
 <rect x="90" y="203" width="110" height="140" rx="38" fill="#4c8bf5" stroke="#26224a" stroke-width="3"/><rect x="240" y="203" width="110" height="140" rx="38" fill="#ef5350" stroke="#26224a" stroke-width="3"/>
 <rect x="10" y="238" width="82" height="38" fill="#4c8bf5" stroke="#26224a" stroke-width="3"/><rect x="348" y="238" width="82" height="38" fill="#ef5350" stroke="#26224a" stroke-width="3"/>
 <text x="220" y="12" font-size="13" text-anchor="middle" fill="#6b6890">from body ↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓ from lungs</text>
 <text x="48" y="300" font-size="12" text-anchor="middle" fill="#6b6890">to lungs</text><text x="392" y="300" font-size="12" text-anchor="middle" fill="#6b6890">to body</text>
 <text x="145" y="362" font-size="13" text-anchor="middle" fill="#4c8bf5" font-weight="700">oxygen-poor</text><text x="295" y="362" font-size="13" text-anchor="middle" fill="#ef5350" font-weight="700">oxygen-rich</text>`};
const heartQ=(e,s)=>label('Label the heart! Choose the correct name for each number.',HEART_SVG,HP,e,s);
/* ---------- topics ---------- */
const TOPICS = [
{id:'heart', ico:'❤️', name:'Heart, Blood & Blood Vessels', blurb:'Heart chambers, arteries, veins, capillaries, blood cells', col:'#ef5350', Q:[
 mc('What is the heart?','A muscular organ that pumps blood around your body',['A tube that carries air to the lungs','A liquid made of plasma and cells','A sheet of muscle under the lungs'],'The heart is a muscular organ that pumps blood. The blood carries oxygen and nutrients and helps remove waste such as carbon dioxide.','Heart slides'),
 heartQ('Right side of the heart (blue) = oxygen-POOR blood. Left side (red) = oxygen-RICH blood. In the picture, the heart is shown as if you are looking at someone: their right side is on YOUR left.','Heart slides'),
 order('Follow the blood around the body! Put the journey in order, starting with blood coming back from the body.',[
   'Superior vena cava brings oxygen-poor blood from the head, chest and arms',
   'Right atrium receives it and pumps it into the right ventricle',
   'Right ventricle pumps it to the lungs through the pulmonary arteries',
   'Pulmonary veins bring oxygen-rich blood back from the lungs',
   'Left atrium receives it and pumps it into the left ventricle',
   'Left ventricle pumps it to the whole body through the aorta'],
   'Right side = body to lungs. Left side = lungs to body. The heart and lungs work together as a team!','Heart slides'),
 mc('Which part of the heart pumps oxygen-rich blood to the rest of the body through the aorta?','Left ventricle',['Right ventricle','Left atrium','Right atrium'],'The left ventricle pumps oxygen-rich blood out through the aorta, the main artery.','Heart slides'),
 mc('Which blood vessels carry oxygen-poor blood from the heart to the lungs?','Pulmonary arteries',['Pulmonary veins','Aorta','Superior vena cava'],'Pulmonary arteries leave the right ventricle and go to the lungs. Pulmonary veins bring oxygen-rich blood back.','Heart slides'),
 tf('The pulmonary veins carry oxygen-rich blood from the lungs to the heart.',true,'Yes! Pulmonary veins: lungs → left atrium, full of fresh oxygen.','Heart slides'),
 mc('What happens to the blood in the lungs?','It loses carbon dioxide and gains oxygen',['It loses oxygen and gains carbon dioxide','It loses plasma and gains platelets','Nothing - blood only passes through'],'In the lungs the blood loses carbon dioxide (you breathe it out) and gains fresh oxygen (from the air you breathe in).','Heart slides'),
 sort('Sort & Review (from your worksheet): artery, vein or capillary?',['Artery','Vein','Capillary'],[
   ['Carries blood AWAY from the heart',0],
   ['Has valves to stop blood flowing backwards',1],
   ['Microscopic, walls only one cell thick',2],
   ['Has thick, muscular walls',0],
   ['Carries blood TO the heart',1],
   ['Example: the aorta',0],
   ['Example: the vena cava',1],
   ['Surrounds the alveoli in the lungs',2],
   ['Gas exchange happens through its thin walls',2]],
   'Arteries: away from heart, high pressure, thick walls. Veins: to the heart, low pressure, valves. Capillaries: tiny, thin walls, exchange.','Blood vessels slides + worksheet'),
 mc('Why do veins have valves?','To stop blood flowing backwards',['To make blood move faster','To add oxygen to the blood','To fight germs'],'Blood in veins is at low pressure, so valves prevent backflow.','Blood vessels slides'),
 mc('Why do arteries have thick, muscular walls?','Blood leaves the heart at high pressure',['They carry blood slowly','They need to exchange gases','They carry air'],'Arteries carry blood at HIGH pressure (e.g. the aorta), so they have thick, strong, muscular walls.','Blood vessels slides + Revision pack'),
 match('Match each part of blood to its job.',[
   ['Red blood cells','Transport oxygen around the body'],
   ['White blood cells','Fight infections (the body\'s soldiers)'],
   ['Platelets','Help the blood clot and form a scab'],
   ['Plasma','Yellowish liquid that carries everything else']],
   'Red = oxygen. White = soldiers. Platelets = plug the cut. Plasma = the highway.','Blood slides'),
 mc('About how much of your blood is plasma?','About 55%',['About 5%','About 20%','About 99%'],'Plasma makes up about 55% of blood. White blood cells are less than 1%.','Blood slides'),
 mc('You scrape your knee and a scab forms. Which part of the blood helped?','Platelets',['Red blood cells','Plasma only','White blood cells'],'Platelets are small sticky cell fragments. They stick together to form a plug and help the blood clot into a scab.','Blood slides'),
 multi('Tick ALL the jobs of blood.',['Brings oxygen and nutrients to cells','Removes carbon dioxide and waste','Delivers hormones to organs','Fights infection'],['Makes air for the lungs','Digests food in the stomach'],'Blood: brings oxygen + nutrients, removes CO2 + waste, delivers hormones, fights infection, helps wounds heal.','Blood slides'),
 fill('Blood leaves the heart in large ___, passes through tiny ___ where oxygen and nutrients move into the cells, and returns to the heart in ___.',['arteries','capillaries','veins'],['arteries','capillaries','veins','alveoli','plasma'],'Arteries → capillaries → veins → heart.','Revision pack'),
 mc('Which foods help your body make red blood cells?','Iron-rich foods: spinach, beans and meat',['Sweets and fizzy drinks','Only water','Salt and sugar'],'Iron-rich foods help make red blood cells. Exercise and water keep your heart and vessels healthy.','Blood slides')
]},

{id:'lungs', ico:'🫁', name:'Lungs & Breathing', blurb:'Trachea, bronchi, alveoli, diaphragm, gas exchange', col:'#06b6d4', Q:[
 order('Follow the air! Put the journey of a breath in order.',[
   'Air enters through the nose or mouth (and is warmed)',
   'Air travels down the trachea',
   'The trachea splits into two bronchi, one for each lung',
   'Each bronchus divides into smaller bronchioles',
   'Air reaches the alveoli at the end of the bronchioles'],
   'Nasal cavity/mouth → trachea → bronchi → bronchioles → alveoli.','Respiratory System slides'),
 mc('What is the role of the respiratory system?','To move air into the body and remove waste products',['To pump blood around the body','To digest food','To fight germs'],'Cells need oxygen for respiration. The respiratory system gets oxygen in and carbon dioxide out.','Respiratory System slides'),
 match('Match each part of the respiratory system to its job.',[
   ['Trachea','Long tube (windpipe) from the nose and mouth to the lungs'],
   ['Bronchus','Branch of the trachea that enters each lung'],
   ['Bronchioles','Smaller tubes that each bronchus divides into'],
   ['Alveoli','Tiny air sacs where gas exchange happens'],
   ['Diaphragm','Sheet of muscle that helps you breathe in and out']],
   'Trachea → two bronchi → bronchioles → alveoli. The diaphragm moves the air.','Respiratory System slides'),
 mc('What happens to the air in your nasal cavity and mouth?','It is warmed up',['It is turned into carbon dioxide','It is filled with blood','It is made colder'],'Air is warmed as it enters through the mouth and nasal cavity.','Respiratory System slides'),
 mc('How many bronchi does the trachea split into?','Two - one for each lung',['One','Three','Millions'],'The trachea branches into two bronchi. One bronchus enters each lung. There are MILLIONS of alveoli, though!','Respiratory System slides'),
 multi('Which features make the alveoli perfect for gas exchange? Tick ALL.',['Walls only one cell thick','Large, moist surface area','Surrounded by capillaries (rich blood supply)'],['Thick muscular walls','Filled with plasma'],'Thin walls = short distance for diffusion. Large moist surface = gases dissolve. Capillaries = blood supply.','Respiratory System slides'),
 fill('Oxygen moves from the ___ into the blood. Carbon dioxide moves from the blood into the lungs so it can be ___.',['alveoli','exhaled'],['alveoli','exhaled','trachea','digested'],'Gas exchange: oxygen in (alveoli → blood), carbon dioxide out (blood → alveoli → exhaled).','Respiratory System slides + Revision pack'),
 mc('Which vessels surround the alveoli and absorb the oxygen?','Capillaries',['Arteries','Veins','Bronchioles'],'Capillaries around the alveoli have very thin walls so oxygen can pass into the blood.','Blood vessels slides'),
 sort('Breathing in or breathing out?',['Inhale (in)','Exhale (out)'],[
   ['The diaphragm contracts and moves DOWN',0],
   ['The diaphragm relaxes and moves UP',1],
   ['The ribcage moves up and out',0],
   ['The chest cavity gets bigger',0],
   ['Carbon dioxide leaves the body',1],
   ['Air full of oxygen comes in',0]],
   'Inhale: diaphragm contracts and moves down, chest expands. Exhale: diaphragm relaxes and moves up.','Respiratory System slides + Revision pack'),
 tf('When you breathe in, the diaphragm contracts and moves downwards.',true,'Correct. It relaxes and moves upwards when you breathe out.','Respiratory System slides'),
 mc('Why do your body cells need oxygen?','For respiration, to release energy',['To make carbon dioxide only','To make bones grow','To warm the air'],'Body cells require oxygen for respiration - releasing energy.','Respiratory System slides'),
 mc('A runner is in a race. What happens to their breathing and why?','Faster and deeper, because the muscle cells need much more energy, so more oxygen',['Slower, because they are tired','No change','Faster, because the trachea gets wider'],'During exercise muscle cells need much more energy, so you breathe faster and deeper to bring in more oxygen (and breathe out the carbon dioxide).','Revision pack challenge'),
 mc('Heart + lungs teamwork: how does oxygen from the air reach the cells in your legs?','Alveoli → capillaries → blood → heart pumps it round the body',['Trachea → stomach → legs','Diaphragm → veins → legs','Bronchi → plasma → skin'],'Oxygen diffuses into the blood in the alveoli, returns to the heart (left side), and the left ventricle pumps it out through the aorta.','Revision pack quick questions'),
 mc('Another name for the trachea is...','The windpipe',['The air sac','The food pipe','The lung muscle'],'The trachea is the windpipe, a long tube with cartilage rings.','Revision pack')
]},

{id:'repro', ico:'🌱', name:'Puberty & Reproductive System', blurb:'Hormones, changes, male & female organs, egg to baby', col:'#17b26a', Q:[
 mc('What is puberty?','The changes in boys and girls as they mature into adults',['An illness caused by germs','A part of the heart','A type of vitamin'],'Puberty describes the changes as boys and girls mature into adults, including changes in the reproductive system.','Puberty slides'),
 mc('Girls usually begin puberty between...','8 and 14 years old (average 11)',['3 and 5 years old','15 and 18 years old','20 and 25 years old'],'Girls: 8-14 (average 11), usually finish in about 4 years. Boys: 9-14 (average 12), usually finish after about 6 years.','Puberty slides'),
 mc('Which is true about when puberty finishes?','Girls usually finish sooner (about 4 years) than boys (about 6 years)',['Boys always finish before girls','Everyone finishes at exactly 15','Puberty never finishes'],'Girls develop more quickly than boys and finish in about 4 years. Most boys finish after about six years.','Puberty slides'),
 tf('Everyone starts puberty at exactly the same age and changes at exactly the same speed.',false,'No! Changes happen at different times and rates for each person - that is normal.','Revision pack'),
 mc('What are hormones?','Chemical messengers made in glands and carried by the blood',['Tiny living germs','Parts of the heart','Foods rich in iron'],'Hormones are chemical messengers produced in glands. They bring about puberty and regulate the reproductive system.','Puberty slides'),
 match('Match the hormone / word to its description.',[
   ['Estrogen','Made by the ovaries - controls female development'],
   ['Testosterone','Made by the testes - controls male development'],
   ['Hormones','Chemical messengers carried in the blood']],
   'Estrogen = ovaries. Testosterone = testes.','Puberty slides'),
 sort('Boys, girls or both? Sort the puberty changes.',['Boys','Girls','Both'],[
   ['Voice breaks (gets deeper)',0],
   ['Hair grows on the face and chest',0],
   ['Testes begin to produce sperm',0],
   ['Breasts begin to develop',1],
   ['Hips widen',1],
   ['Ovaries release egg cells (periods begin)',1],
   ['Growth rate increases',2],
   ['Underarm hair grows',2],
   ['Body smell gets stronger',2],
   ['Pimples and acne',2]],
   'Both: growth spurt, hair under arms and pubic hair, body smell, pimples. Boys: voice, testes, face hair. Girls: breasts, hips, periods.','Puberty slides'),
 mc('Why is washing regularly and wearing clean clothes important during puberty?','Bodies sweat more and body smell gets stronger',['It makes you taller','It stops puberty','Germs make your voice deeper'],'More sweat and stronger body odour - good hygiene helps manage this.','Revision pack'),
 match('Match each reproductive organ to its role.',[
   ['Ovary','Produces egg cells'],
   ['Oviduct','Carries an egg from the ovary towards the uterus'],
   ['Uterus','Where a baby can grow before birth'],
   ['Birth canal (vagina)','Muscular tube where the baby exits the body'],
   ['Testes','Produce sperm cells (and hormones)'],
   ['Sperm duct','Carries sperm away from the testes'],
   ['Penis','Passes urine and sperm out of the body']],
   'Female: ovary, oviduct, uterus, birth canal. Male: testes, sperm duct, penis.','Reproductive System slides + Revision pack'),
 order('From egg to baby: put the steps in order.',[
   'An ovary releases a mature egg',
   'The egg is moved along the oviduct towards the uterus',
   'If a sperm cell fertilises it, an embryo forms',
   'The embryo implants in the wall of the uterus',
   'The embryo develops into a baby during pregnancy'],
   'Egg released → moves along the oviduct → fertilised by a sperm → embryo implants in the uterus → baby.','Reproductive System slides'),
 mc('What are cilia in the oviduct?','Hair-like cells that help move the egg to the uterus',['Tiny sperm cells','Muscles that make a period','A type of hormone'],'The oviducts are lined with cilia (hair-like cells) to move the egg from the ovary to the uterus.','Reproductive System slides'),
 mc('If an egg is NOT fertilised, what happens to the lining of the uterus?','It comes away as a period',['It turns into a baby','It stays forever','It travels to the ovary'],'The lining of the uterus wall comes away as a period if the egg is not fertilised.','Reproductive System slides'),
 mc('What are the two key jobs of the testes?','Making sperm cells and hormones',['Carrying urine and making eggs','Pumping blood and breathing','Digesting food'],'The testes make millions of sperm and hormones that affect how the male body develops in puberty.','Reproductive System slides'),
 mc('Which tube inside the penis do both sperm and urine pass through?','The urethra',['The oviduct','The trachea','The sperm duct only'],'The penis contains the urethra, which sperm and urine pass through to leave the body.','Reproductive System slides'),
 tf('The ovaries contain undeveloped egg cells that are present from birth.',true,'Yes - the two ovaries hold undeveloped eggs (ova) from birth and also make hormones.','Reproductive System slides'),
 mc('A change in puberty worries you. What should you do?','Speak with a trusted adult or health professional',['Hide it and say nothing','Ask a stranger online','Ignore it forever'],'Puberty is a normal part of growing up. If a change or question worries you, talk to a trusted adult.','Revision pack')
]},

{id:'bugs', ico:'🦟', name:'Insect Bites & Insect-borne Diseases', blurb:'Malaria, sleeping sickness, yellow fever, bite-proof tips', col:'#f59e0b', Q:[
 mc('What is an insect-borne disease?','A disease spread when an infected insect bites someone',['A disease caused by eating insects','A disease that only insects get','A disease caused by cold weather'],'An infected insect can carry harmful microorganisms and pass them into a person when it bites. This is an insect-borne disease.','Insect Bites slides'),
 order('How an insect-borne disease spreads: put the steps in order.',[
   'An infected insect carries a harmful microorganism',
   'The infected insect bites a person',
   'The microorganism enters the person and the disease spreads'],
   'Step 1 infected insect - Step 2 it bites - Step 3 disease spreads.','Insect Bites slides'),
 sort('Who spreads what? Mosquito or tsetse fly?',['Mosquito','Tsetse fly'],[
   ['Malaria',0],['Yellow fever',0],['Sleeping sickness',1],
   ['Only the females bite (they need blood for their eggs)',0],
   ['Both males and females drink blood',1]],
   'Malaria (female Anopheles) and yellow fever: mosquitoes. Sleeping sickness: tsetse fly. Only female mosquitoes bite; both male and female tsetse flies drink blood.','Insect Bites slides + Revision pack'),
 match('What causes each disease?',[
   ['Malaria','A parasite called Plasmodium'],
   ['Sleeping sickness','A parasite called Trypanosoma'],
   ['Yellow fever','A virus (not a parasite)']],
   'Malaria and sleeping sickness: parasites. Yellow fever: a virus.','Insect Bites slides'),
 multi('Bite-proof your day! Tick ALL the things that help prevent insect bites.',['Use insect repellent as directed','Wear long sleeves, long trousers and socks','Sleep under a mosquito net','Keep doors and windows screened','Use a mosquito coil only as directed, with an adult','Stay away from places with many biting insects'],['Wear shorts and short sleeves where insects are common','Leave doors and windows open without screens'],'5 ways to stay bite-free: repellent, cover up, mosquito nets, screens, stay away.','Insect Bites slides + Revision pack'),
 mc('Which insect spreads malaria?','The female Anopheles mosquito',['The tsetse fly','The head louse','The housefly'],'Malaria is spread by the infected female Anopheles mosquito.','Insect Bites slides'),
 mc('Only female mosquitoes bite. Why?','They need blood to make their eggs',['Males are too small','Males are asleep','Females eat insects'],'Only female mosquitoes bite because they need blood to make their eggs.','Insect Bites slides'),
 tf('Both male and female tsetse flies drink blood.',true,'Yes - unlike mosquitoes, both male and female tsetse flies drink blood. Tsetse flies live in parts of Africa.','Insect Bites slides'),
 mc('Which symptoms can malaria cause?','Fever, chills and headache, sometimes sweating, tiredness and vomiting',['Only a broken bone','A green tongue','Loss of hair only'],'Malaria: fever, chills, headache, sometimes sweating, tiredness and vomiting.','Insect Bites slides'),
 mc('If left untreated, sleeping sickness affects the...','Nervous system and sleep patterns (people feel sleepy in the day)',['Bones','Skin colour only','Eyesight only'],'It affects the nervous system and sleep patterns. Doctors can treat it, especially if found early.','Insect Bites slides'),
 mc('According to your lesson, which of these diseases can be prevented by vaccination?','Yellow fever',['Malaria','Sleeping sickness','All insect bites'],'Vaccination is an important way to prevent yellow fever. Avoiding mosquito bites helps too.','Insect Bites slides'),
 mc('When do malaria mosquitoes bite the most?','From dusk to dawn',['At noon only','Only in winter','Only on rainy mornings'],'Malaria mosquitoes bite most from dusk to dawn, mostly in warm, tropical places.','Insect Bites slides'),
 mc('Why is yellow fever called "yellow"?','Some patients\' skin and eyes turn yellow (jaundice)',['The mosquito is yellow','It happens only in yellow houses','The virus is yellow'],'The name comes from jaundice - skin and eyes turn yellow.','Insect Bites slides'),
 tf('Every insect bite causes a disease.',false,'Good news: not every insect bite causes disease!','Insect Bites slides'),
 fill('Malaria and sleeping sickness are caused by ___, but yellow fever is caused by a ___.',['parasites','virus'],['parasites','virus','bacteria','fungus'],'Malaria and sleeping sickness: parasites (Unit 1.4 calls this group protists). Yellow fever: a virus.','Insect Bites slides'),
 mc('When should you use a mosquito net?','When sleeping in places where mosquitoes may carry disease',['Only in the daytime at school','Never - nets do not work','Only after you are ill'],'Use mosquito nets when sleeping in areas where mosquitoes may carry disease.','Insect Bites slides'),
 mc('You feel ill after being in a place with many mosquitoes. What should you do?','Tell an adult',['Say nothing','Take medicine from a friend','Go swimming'],'If you feel ill, tell an adult.','Insect Bites slides')
]},

{id:'germs', ico:'🦠', name:'Bonus: Germs & Body Defence', blurb:'Pathogen types (Unit 1.4), natural defences, hygiene', col:'#8b5cf6', bonus:true, Q:[
 mc('What is a pathogen?','A microorganism that causes disease',['A type of blood vessel','A hormone','A healthy cell'],'A pathogen is a microorganism that causes disease (often called germs).','Unit 1.4 slides'),
 mc('Which list shows the four types of pathogen from Unit 1.4?','Bacteria, viruses, fungi, protists',['Arteries, veins, capillaries, hearts','Estrogen, testosterone, plasma, platelets','Mosquitoes, tsetse flies, lice, ticks'],'Unit 1.4: bacteria, viruses, fungi and protists.','Unit 1.4 slides'),
 sort('Which type of pathogen causes each disease?',['Bacteria','Virus','Fungi','Protist / parasite'],[
   ['Tuberculosis',0],['Cholera',0],['Pneumonia',0],
   ['COVID-19',1],['Influenza (flu)',1],['Foot-and-mouth disease',1],
   ['Athlete\'s foot',2],['Thrush',2],['Ringworm',2],
   ['Malaria',3],['African sleeping sickness',3],
   ['Strep throat',0],['Chickenpox',1],['Head lice',3],['Tapeworm',3]],
   'Bacteria: TB, pneumonia, cholera. Viruses: COVID-19, foot-and-mouth, flu. Fungi: athlete\'s foot, thrush, ringworm (a fungus, not a worm!). Protists / parasites: malaria, sleeping sickness, head lice, tapeworm (Unit 1.4 says protists, the Revision Pack says parasites - same idea).','Unit 1.4 slides'),
 match('Match the pathogen to its usual treatment.',[
   ['Bacteria','A course of antibiotics'],
   ['Viruses','Anti-viral medicines'],
   ['Fungi','Anti-fungal medication'],
   ['Protists / parasites','Preventative measures and targeted medicines']],
   'Treatment depends on the pathogen type.','Unit 1.4 slides'),
 mc('Doctors give antibiotics for a serious bacterial infection, but they do NOT work against colds and flu. Why?','Colds and flu are caused by viruses, and antibiotics only work on bacteria',['Colds are not real illnesses','Antibiotics are too small','Flu is caused by fungi'],'Antibiotics work against bacteria. Viruses need anti-viral medicines.','Revision pack challenge'),
 match('How are pathogens transmitted? Match the way to the example.',[
   ['Air','Sneezing without covering your mouth'],
   ['Contact','Shaking hands with someone who has unwashed skin'],
   ['Water','Drinking untreated pond water'],
   ['Food','Eating food that was left out in a warm room'],
   ['Vector','A mosquito passing on malaria']],
   'Pathogens spread by contact, air, water, food or a vector (an insect or animal that carries them).','Unit 1.4 slides + Revision pack'),
 tf('All bacteria are harmful.',false,'Some bacteria can be useful! But some cause diseases like TB, pneumonia and cholera.','Unit 1.4 slides'),
 fill('Bacteria harm us by multiplying and making poisonous ___. A virus invades a living ___ cell and forces it to ___ new copies of the virus.',['toxins','host','replicate'],['toxins','host','replicate','plasma','alveoli'],'Bacteria produce toxins. Viruses hijack host cells and replicate inside them.','Revision pack'),
 multi('Which are the body\'s natural defence barriers against microorganisms? Tick ALL.',['Skin','Cleansing tears','Sticky mucus','Stomach acid'],['Red blood cells','Bones'],'Skin, tears, sticky mucus and stomach acid.','Body Defence slides'),
 match('Match each defence to what it does.',[
   ['Skin barrier','Waterproof shield that blocks pathogens'],
   ['Tears','Wash the eyes; enzymes destroy bacterial cell walls'],
   ['Sticky mucus','Traps microbes in the nose and breathing tubes'],
   ['Stomach acid','Hydrochloric acid dissolves microbes swallowed with food']],
   'Skin = shield, tears = wash + enzymes, mucus = trap, stomach acid = dissolve.','Body Defence slides'),
 mc('You get a graze on your knee. What should you do?','Wash it with clean water and cover it with a plaster',['Leave it open to the dirt','Cover it without washing','Scratch it'],'A graze is a doorway for microbes. Wash it and cover it to rebuild the barrier while platelets form a scab.','Body Defence slides'),
 mc('Raw chicken was cut on a board, then apples were cut on the same board. What went wrong?','Cross-contamination: bacteria moved from the chicken to the apples',['Nothing - apples are always clean','The knife was too sharp','The chicken was too cold'],'Never mix raw meat with ready-to-eat foods; disinfect knives and boards after use.','Body Defence slides'),
 mc('Cooked food was left on the table in a warm room. Why is this risky?','Bacteria can double rapidly in warm conditions',['Food gets lighter','Bacteria cannot live in warm rooms','Viruses turn into bacteria'],'Warm conditions let bacteria multiply quickly. Refrigerate cooked meals promptly.','Body Defence slides'),
 mc('Which defence physically traps dust and microorganisms in the airways before they reach the lungs?','Sticky mucus',['Cleansing tears','Stomach acid','Red blood cells'],'Mucus lines the nose and airways and traps invaders.','Body Defence slides')
]}
];

const VOCAB = [
 ['Heart','сердце','Muscular organ that pumps blood'],['Artery','артерия','Blood away from the heart, high pressure'],['Vein','вена','Blood to the heart, valves'],['Capillary','капилляр','Tiny, one cell thick, exchange'],
 ['Atrium / ventricle','предсердие / желудочек','Upper / lower chambers of the heart'],['Aorta','аорта','Main artery, oxygen-rich blood to the body'],['Vena cava','полая вена','Main vein, oxygen-poor blood to the heart'],
 ['Plasma','плазма','Liquid part of blood (about 55%)'],['Platelets','тромбоциты','Help blood clot'],['Red / white blood cells','эритроциты / лейкоциты','Carry oxygen / fight germs'],
 ['Trachea','трахея','Windpipe'],['Bronchus / bronchioles','бронх / бронхиолы','Branches of the airway'],['Alveoli','альвеолы','Air sacs, gas exchange'],['Diaphragm','диафрагма','Muscle for breathing'],['Oxygen / carbon dioxide','кислород / углекислый газ',''],
 ['Puberty','половое созревание','Changes from child to adult body'],['Hormone','гормон','Chemical messenger in the blood'],['Ovary / oviduct / uterus','яичник / яйцевод / матка',''],['Testes / sperm duct','яички / семявыносящий проток',''],['Sperm / egg cell','сперматозоид / яйцеклетка',''],['Fertilise / embryo','оплодотворить / зародыш',''],
 ['Insect-borne disease','болезнь, переносимая насекомыми',''],['Mosquito / tsetse fly','комар / муха цеце',''],['Parasite','паразит',''],['Vaccination','прививка',''],['Repellent','репеллент (средство от насекомых)',''],
 ['Pathogen','возбудитель (микроб)',''],['Bacteria / virus / fungi / protist','бактерии / вирус / грибы / простейшие',''],['Antibiotic','антибиотик','Works on bacteria only'],['Mucus','слизь','']
];

const SHEETS = {
heart:`<h3>Heart</h3><ul><li>Muscular organ that <b>pumps blood</b>; 4 chambers: right/left <b>atrium</b> (top), right/left <b>ventricle</b> (bottom).</li>
<li>Right side: <b>oxygen-poor</b> blood from the body → lungs. Left side: <b>oxygen-rich</b> blood from the lungs → body.</li>
<li>Route: superior vena cava → right atrium → right ventricle → pulmonary arteries → LUNGS → pulmonary veins → left atrium → left ventricle → aorta → body.</li></ul>
<h3>Blood vessels</h3><table><tr><th></th><th>Artery</th><th>Vein</th><th>Capillary</th></tr>
<tr><td>Direction</td><td>Away from heart</td><td>To the heart</td><td>Connects the two</td></tr>
<tr><td>Pressure</td><td>High</td><td>Low</td><td>Low</td></tr>
<tr><td>Structure</td><td>Thick muscular walls</td><td>Valves (stop backflow)</td><td>Microscopic, 1 cell thick</td></tr>
<tr><td>Example</td><td>Aorta</td><td>Vena cava</td><td>Around the alveoli</td></tr></table>
<h3>Blood</h3><ul><li><b>Red cells</b> carry oxygen. <b>White cells</b> fight infection (&lt;1%). <b>Platelets</b> clot blood / scab. <b>Plasma</b> (~55%) is the liquid that carries everything.</li>
<li>Blood: brings oxygen + nutrients, removes CO2 + waste, delivers hormones, fights infection, heals wounds. Iron-rich food helps make red blood cells.</li></ul>`,
lungs:`<h3>Route of air</h3><p>Nose/mouth (warmed) → <b>trachea</b> (windpipe) → two <b>bronchi</b> → <b>bronchioles</b> → <b>alveoli</b>.</p>
<h3>Alveoli</h3><ul><li>Millions of air sacs; walls <b>one cell thick</b>; large <b>moist</b> surface; surrounded by <b>capillaries</b>.</li>
<li>Gas exchange: <b>oxygen</b> diffuses into the blood, <b>carbon dioxide</b> diffuses out into the alveoli to be <b>exhaled</b>.</li></ul>
<h3>Diaphragm</h3><ul><li>Breathe IN: diaphragm <b>contracts, moves down</b>, ribcage up and out.</li><li>Breathe OUT: diaphragm <b>relaxes, moves up</b>.</li><li>Exercise → faster and deeper breathing (more oxygen needed, more CO2 made).</li></ul>`,
repro:`<h3>Puberty</h3><ul><li>Girls start 8-14 (avg 11), finish in ~4 years. Boys start 9-14 (avg 12), finish in ~6 years.</li>
<li><b>Hormones</b> (chemical messengers in the blood): estrogen (ovaries), testosterone (testes).</li>
<li>Boys: voice breaks, testes/penis grow, sperm made, wider shoulders, face/chest hair. Girls: ovaries release eggs (periods), hips widen, breasts develop.</li>
<li>Both: growth spurt, underarm + pubic hair, body smell, pimples. Hygiene matters. Everyone is different - and worried? Talk to a trusted adult.</li></ul>
<h3>Female</h3><ul><li><b>Ovary</b> - eggs + hormones. <b>Oviduct</b> - carries egg (cilia). <b>Uterus</b> - baby grows; lining leaves as a period if egg not fertilised. <b>Birth canal</b> - baby exits.</li></ul>
<h3>Male</h3><ul><li><b>Testes</b> - sperm + hormones. <b>Sperm duct</b> - carries sperm away. <b>Penis</b> - urethra for urine and sperm.</li></ul>
<p>Egg released → oviduct → fertilised by sperm → embryo implants in uterus → baby.</p>`,
bugs:`<h3>Insect-borne disease</h3><p>Infected insect → it bites → disease spreads. Not every bite causes disease!</p>
<table><tr><th>Disease</th><th>Cause</th><th>Spread by</th><th>Key facts</th></tr>
<tr><td>Malaria</td><td>Parasite (Plasmodium)</td><td>Infected female Anopheles mosquito</td><td>Fever, chills, headache; dusk to dawn; tropics</td></tr>
<tr><td>Sleeping sickness</td><td>Parasite (Trypanosoma)</td><td>Infected tsetse fly (Africa)</td><td>Affects nervous system and sleep; males and females bite</td></tr>
<tr><td>Yellow fever</td><td>Virus</td><td>Infected mosquito</td><td>Jaundice (yellow skin/eyes); vaccine exists</td></tr></table>
<h3>5 ways to stay bite-free</h3><ul><li>Repellent as directed - cover up (long sleeves, trousers, socks) - mosquito nets - screens on doors/windows - stay away from places with many biting insects.</li><li>Only female mosquitoes bite (they need blood for eggs). Feel ill? Tell an adult.</li></ul>`,
germs:`<h3>Pathogens (Unit 1.4)</h3><table><tr><th>Type</th><th>Examples</th><th>Treatment</th></tr>
<tr><td>Bacteria</td><td>TB, pneumonia, cholera</td><td>Antibiotics</td></tr>
<tr><td>Viruses</td><td>COVID-19, foot-and-mouth, flu</td><td>Anti-viral medicines</td></tr>
<tr><td>Fungi</td><td>Athlete's foot, thrush, ringworm</td><td>Anti-fungal medication</td></tr>
<tr><td>Protists</td><td>Malaria, sleeping sickness</td><td>Prevention + targeted medicines</td></tr></table>
<p>Spread: contact, air, water, food, vector. Bacteria make <b>toxins</b>; viruses <b>replicate</b> inside host cells.</p>
<h3>Body defences</h3><ul><li>Skin, tears, sticky mucus, stomach acid. Graze: wash + plaster.</li><li>Food hygiene: wash produce, separate boards (raw meat!), chill cooked food quickly.</li></ul>`
};


/* ---- additions from the audit (coverage of the Revision Pack tasks) ---- */
const SV=(id)=>TOPICS.find(t=>t.id===id).Q;
const RESP_SVG={vb:'0 0 400 400',body:`
 <ellipse cx="200" cy="40" rx="48" ry="22" fill="#f9c9a8" stroke="#26224a" stroke-width="3"/>
 <ellipse cx="112" cy="232" rx="82" ry="112" fill="#ffd1d1" stroke="#26224a" stroke-width="3"/><ellipse cx="288" cy="232" rx="82" ry="112" fill="#ffd1d1" stroke="#26224a" stroke-width="3"/>
 <rect x="188" y="62" width="24" height="104" fill="#9ecbff" stroke="#26224a" stroke-width="3"/>
 <path d="M200 166 L150 210 M200 166 L250 210" stroke="#5fa0ee" stroke-width="14" stroke-linecap="round" fill="none"/>
 <path d="M150 210 L108 250 M150 210 L150 262 M150 210 L112 215 M250 210 L292 250 M250 210 L250 262 M250 210 L288 215" stroke="#5fa0ee" stroke-width="6" stroke-linecap="round" fill="none"/>
 <g fill="#ff8f8f" stroke="#a02a2a" stroke-width="1.5"><circle cx="100" cy="268" r="10"/><circle cx="116" cy="276" r="10"/><circle cx="92" cy="286" r="10"/><circle cx="150" cy="280" r="10"/><circle cx="166" cy="288" r="10"/><circle cx="300" cy="268" r="10"/><circle cx="284" cy="276" r="10"/><circle cx="308" cy="286" r="10"/><circle cx="250" cy="280" r="10"/><circle cx="234" cy="288" r="10"/></g>
 <rect x="30" y="352" width="340" height="28" rx="14" fill="#c084fc" stroke="#26224a" stroke-width="3"/>`};
const RESP_PTS=[{n:'Nasal cavity',x:262,y:40},{n:'Trachea',x:240,y:112},{n:'Bronchus',x:232,y:178},{n:'Bronchioles',x:132,y:236},{n:'Alveoli',x:72,y:296},{n:'Diaphragm',x:200,y:366}];
SV('lungs').push(label('Label the respiratory system! Choose the correct name for each number.',RESP_SVG,RESP_PTS,'Air: nasal cavity → trachea → two bronchi → bronchioles → alveoli. The diaphragm (muscle) sits under the lungs.','Respiratory System slides'));

const FEM_SVG={vb:'0 0 400 340',body:`
 <path d="M175 120 Q118 62 92 96" stroke="#e57399" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M225 120 Q282 62 308 96" stroke="#e57399" stroke-width="9" fill="none" stroke-linecap="round"/>
 <ellipse cx="82" cy="100" rx="36" ry="26" fill="#f9d57a" stroke="#26224a" stroke-width="3"/><ellipse cx="318" cy="100" rx="36" ry="26" fill="#f9d57a" stroke="#26224a" stroke-width="3"/>
 <path d="M158 112 L242 112 L228 214 Q200 238 172 214 Z" fill="#f4a6b8" stroke="#26224a" stroke-width="3" stroke-linejoin="round"/>
 <rect x="184" y="224" width="32" height="96" rx="12" fill="#e68aa1" stroke="#26224a" stroke-width="3"/>`};
const FEM_PTS=[{n:'Ovary',x:82,y:100},{n:'Oviduct',x:130,y:90},{n:'Uterus',x:200,y:165},{n:'Birth canal',x:200,y:278}];
const MAL_SVG={vb:'0 0 400 340',body:`
 <path d="M150 250 C150 190 192 200 192 150 M250 250 C250 190 208 200 208 150" stroke="#d98c3a" stroke-width="9" fill="none" stroke-linecap="round"/>
 <rect x="184" y="40" width="32" height="150" rx="16" fill="#f0b79a" stroke="#26224a" stroke-width="3"/>
 <ellipse cx="150" cy="275" rx="38" ry="30" fill="#f4c27a" stroke="#26224a" stroke-width="3"/><ellipse cx="250" cy="275" rx="38" ry="30" fill="#f4c27a" stroke="#26224a" stroke-width="3"/>`};
const MAL_PTS=[{n:'Penis',x:200,y:95},{n:'Sperm duct',x:164,y:205},{n:'Testes',x:150,y:278}];
SV('repro').push(label('Label the FEMALE reproductive system (a simple diagram).',FEM_SVG,FEM_PTS,'Ovary makes eggs; oviduct carries the egg to the uterus; the uterus is where a baby can grow; the birth canal is where a baby leaves the body.','Reproductive System slides'),
 label('Label the MALE reproductive system (a simple diagram).',MAL_SVG,MAL_PTS,'Testes make sperm and hormones; the sperm duct carries sperm away; the penis lets urine and sperm leave the body (through the urethra).','Reproductive System slides'),
 mc('What is a period (menstruation)?','Blood and tissue from the lining of the uterus leaving the body through the birth canal',['A baby growing in the uterus','An egg cell leaving the testes','A change in the voice'],'If an egg is not fertilised, the lining of the uterus comes away as a period. It usually begins during puberty.','Revision pack + Reproductive System slides'),
 mc('Which organs make the female hormone estrogen?','The ovaries',['The testes','The oviducts','The lungs'],'Estrogen is produced by the ovaries; testosterone by the testes.','Puberty slides'),
 write('Describe two physical changes that take place during puberty and explain why hygiene is important.',['growth|hair|pimple|acne|voice|breast|hips|shoulder|sweat','wash|clean|hygien','sweat|smell|odour|odor'],'Two changes: the growth rate increases and pimples or body hair appear (boys: voice breaks; girls: hips widen). Hygiene matters because the body sweats more and the body smell gets stronger, so we wash regularly and wear clean clothes.','Puberty is a normal part of growing up. Washing and clean clothes help with sweat and body odour.','Revision pack quick questions'));

SV('heart').push(
 mc('How many chambers does the heart have?','Four: two atria (top) and two ventricles (bottom)',['Two','Three','Six'],'The heart has 4 chambers. Atria receive blood and ventricles pump it out.','Revision pack + Heart slides'),
 mc('What is circulation?','The continuous movement of blood around the body through the heart and blood vessels',['Breathing air in and out','The liquid part of blood','Blood clotting in a cut'],'The circulatory system is the body\'s transport network of the heart, blood and blood vessels.','Revision pack'),
 sort('Artery, vein or capillary? (round 2)',['Artery','Vein','Capillary'],[
   ['Blood at HIGH pressure',0],['Blood at LOW pressure, with valves',1],['Connects arteries and veins',2],
   ['Blood is usually oxygen-rich',0],['Blood is usually oxygen-poor',1],['Microscopic: swaps substances with body cells',2]],
   'Artery: high pressure, oxygen-rich, away from the heart. Vein: low pressure, valves, oxygen-poor, to the heart. Capillary: connects them and exchanges substances.','Blood vessels slides + Revision pack'),
 mc('Some white blood cells make antibodies. What do antibodies do?','Help the body remember and fight future infections',['Carry oxygen','Form a scab','Carry the nutrients'],'White blood cells are the body\'s soldiers: some surround and "eat" invaders, others make antibodies.','Blood slides'),
 write('Explain how oxygen from the air you breathe reaches the cells in your arms and legs.',['alveoli','blood','heart','capillar'],'Oxygen passes through the thin walls of the alveoli in the lungs into the blood. The blood returns to the heart, and the left ventricle pumps it through the aorta and arteries to the capillaries, where oxygen moves into the cells of the arms and legs.','Lungs → blood → heart → arteries → capillaries → cells.','Revision pack quick questions'));

SV('bugs').push(
 mc('Where does yellow fever occur?','In warm parts of Africa and South America, where infected mosquitoes live',['Only in cold countries','Only in Europe','Only in the sea'],'Yellow fever occurs in warm parts of Africa and South America.','Insect Bites slides'),
 mc('Which symptoms can sleeping sickness cause?','Fever, headaches and tiredness, sometimes sore joints and itchy skin',['A broken bone','Only a green tongue','Only a runny nose'],'It also affects the nervous system and sleep patterns if untreated.','Insect Bites slides'),
 write('Describe three practical actions you can take to protect yourself from insect bites.',['repellent','long sleeve|trouser|cover|socks|clothes','net|screen|window|door|coil|stay away'],'Use insect repellent as directed; cover up with long sleeves, long trousers and socks; sleep under a mosquito net or keep doors and windows screened.','Repellent, covering up, nets and screens, staying away from biting insects.','Revision pack quick questions'));

SV('germs').push(
 match('Match each pathogen type to its description.',[
   ['Bacteria','Single-celled living organisms - most are harmless, some make toxins'],
   ['Viruses','Extremely tiny non-living particles that replicate inside host cells'],
   ['Fungi','Yeasts, moulds and mushrooms that like damp places'],
   ['Protists / parasites','Mostly single-celled; some live in or on a host and take its nutrients']],
   'Bacteria are alive and single-celled; viruses are tiny and non-living; fungi include yeasts and moulds; parasites take nutrients from their host.','Revision pack + Unit 1.4 slides'),
 mc('What is a communicable disease?','A disease caused by pathogens that are passed between organisms',['A disease you are born with','A broken bone','A disease only plants get'],'Communicable (infectious) diseases spread when pathogens are transmitted between organisms.','Unit 1.4 slides'),
 order('The life cycle of a pathogen: put the steps in order.',['The pathogen infects a host','It reproduces (viruses replicate) inside the host','It spreads from the host to infect another organism'],'All pathogens infect a host, reproduce, then spread to another organism.','Unit 1.4 slides'),
 mc('Head lice live on a person and take nutrients from them. What type of pathogen is this?','A parasite',['A virus','A fungus','A bacterium'],'A parasite lives in or on a host and takes nutrients at the host\'s expense (e.g. head lice, tapeworms).','Revision pack'),
 mc('What does hygiene mean?','Keeping your body, food and living spaces clean to prevent sickness',['Eating only fruit','Taking antibiotics every day','Staying inside'],'Good hygiene stops microbes multiplying and entering the body.','Body Defence slides'),
 write('Compare how bacteria and viruses cause illness inside the human body.',['toxin','host|cell','replicat|copies|multipl'],'Bacteria multiply quickly and make poisonous toxins that damage the tissues. Viruses invade a living host cell and force it to replicate (make new copies) until the cell bursts.','Bacteria: multiply and make toxins. Viruses: invade host cells and replicate.','Revision pack quick questions'));

TOPICS.push({id:'words', ico:'🔤', name:'Key Words Round', blurb:'Definitions and gap-fills from the Revision Pack', bonus:true, Q:[
 match('Vocabulary practice: match each key term to its definition.',[
   ['pathogen','Any microscopic organism that can cause disease'],
   ['artery','Thick-walled vessel carrying oxygen-rich blood away from the heart'],
   ['alveoli','Microscopic air sacs where oxygen and carbon dioxide are exchanged'],
   ['diaphragm','Sheet of muscle beneath the lungs that moves down to pull air in'],
   ['trachea','The main windpipe from the throat towards the lungs'],
   ['circulation','The continuous movement of blood around the body'],
   ['capillary','Tiny vessel with walls one cell thick'],
   ['virus','Extremely small non-living particle that replicates inside a host cell']],
   'These are the 8 vocabulary items from the Revision Pack.','Revision pack - Vocabulary Practice'),
 fill('Red blood cells absorb ___ in the lungs and transport it to cells throughout the body.',['oxygen'],['oxygen','capillaries','trachea','pathogens','puberty','mosquitoes'],'Red blood cells carry oxygen.','Revision pack - Gap fills'),
 fill('Microscopic blood vessels called ___ allow nutrients and gases to pass directly into tissues.',['capillaries'],['oxygen','capillaries','trachea','pathogens','puberty','mosquitoes'],'Capillaries have walls one cell thick.','Revision pack - Gap fills'),
 fill('Inhaled air travels from the mouth and nose down the ___ before reaching the bronchi and lungs.',['trachea'],['oxygen','capillaries','trachea','pathogens','puberty','mosquitoes'],'The trachea is the windpipe.','Revision pack - Gap fills'),
 fill('Microscopic organisms such as bacteria, viruses and fungi that cause disease are known as ___.',['pathogens'],['oxygen','capillaries','trachea','pathogens','puberty','mosquitoes'],'Pathogens = germs that cause disease.','Revision pack - Gap fills'),
 fill('During ___, a young person\'s body undergoes emotional and physical changes as their reproductive system matures.',['puberty'],['oxygen','capillaries','trachea','pathogens','puberty','mosquitoes'],'Puberty brings emotional and physical changes.','Revision pack - Gap fills'),
 fill('Using insect repellent and bed nets helps protect people from insect vectors such as ___.',['mosquitoes'],['oxygen','capillaries','trachea','pathogens','puberty','mosquitoes'],'Mosquitoes spread malaria and yellow fever.','Revision pack - Gap fills')
]});
SHEETS.words='<h3>Key words</h3><ul><li><b>pathogen</b> - microorganism that causes disease</li><li><b>artery</b> - blood away from the heart, high pressure</li><li><b>alveoli</b> - air sacs, gas exchange</li><li><b>diaphragm</b> - muscle under the lungs</li><li><b>trachea</b> - windpipe</li><li><b>circulation</b> - blood moving around the body</li><li><b>capillary</b> - tiny vessel, one cell thick</li><li><b>virus</b> - tiny non-living particle that replicates inside host cells</li></ul>';

TOPICS.forEach(t=>{t.sheet=SHEETS[t.id]});
QuizEngine.run({id:'science-unit1',lang:'en',logo:'🔬 Science Quest',title:'Unit 1: Human Body & Health',bossSize:25,topics:TOPICS,vocab:VOCAB});
})();
