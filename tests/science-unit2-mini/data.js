/* Science - Unit 2 mini quiz: phase changes, boiling vs evaporation, dissolving (Grade 5, Cambridge).
   Source: teacher slides "State Changes in matter" (16 p.) + "Dissolving" (11 p.), 30 Oct 2026.
   Not available when written: Learner's Book 2.1 / 2.3 text and Workbook p.28, 30 - nothing here comes from them. */
(function(){
const SC='State Changes slides', DS='Dissolving slides';

/* ---------- picture 1: the six phase changes (slide 3) ---------- */
const PHASE_SVG={vb:'0 0 560 330',body:`
 <defs>
  <marker id="mR" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.2" markerHeight="3.2" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e0533d"/></marker>
  <marker id="mB" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="3.2" markerHeight="3.2" orient="auto"><path d="M0 0L10 5L0 10z" fill="#3b82f6"/></marker>
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
  <line x1="136" y1="188" x2="224" y2="188" stroke="#e0533d" marker-end="url(#mR)"/>
  <line x1="224" y1="142" x2="136" y2="142" stroke="#3b82f6" marker-end="url(#mB)"/>
  <line x1="336" y1="188" x2="430" y2="188" stroke="#e0533d" marker-end="url(#mR)"/>
  <line x1="430" y1="142" x2="336" y2="142" stroke="#3b82f6" marker-end="url(#mB)"/>
  <path d="M80 250 V274 H456 V222" stroke="#e0533d" marker-end="url(#mR)"/>
  <path d="M456 108 V50 H80 V104" stroke="#3b82f6" marker-end="url(#mB)"/>
 </g>`};
/* paired arrows: points staggered towards each arrow's tail so hotspot buttons (36px) do not overlap on a phone and the arrowheads stay visible */
const PHASE_PTS=[{n:'Melting',x:150,y:188},{n:'Freezing',x:210,y:142},{n:'Evaporation',x:352,y:188},{n:'Condensation',x:414,y:142},{n:'Sublimation',x:285,y:274},{n:'Deposition',x:285,y:50}];

/* ---------- picture 2: sugar / salt dissolving in water (Dissolving slide 7) ---------- */
const beaker=`<path d="M42 70 H198 V262 Q198 272 188 272 H52 Q42 272 42 262 Z" fill="#cfe9ff"/><path d="M40 38 V262 Q40 274 52 274 H188 Q200 274 200 262 V38" fill="none" stroke="#26224a" stroke-width="4"/>`;
const DISS_SVG={vb:'0 0 560 300',body:`
 <rect width="560" height="300" rx="16" fill="#fff8e7"/>
 ${beaker}
 <g fill="#3b9bf0"><circle cx="66" cy="96" r="7"/><circle cx="105" cy="88" r="7"/><circle cx="145" cy="98" r="7"/><circle cx="176" cy="90" r="7"/><circle cx="78" cy="130" r="7"/><circle cx="118" cy="124" r="7"/><circle cx="158" cy="134" r="7"/><circle cx="64" cy="164" r="7"/><circle cx="104" cy="168" r="7"/><circle cx="144" cy="172" r="7"/><circle cx="180" cy="158" r="7"/><circle cx="70" cy="204" r="7"/><circle cx="170" cy="204" r="7"/><circle cx="120" cy="206" r="7"/></g>
 <g fill="#e53935"><circle cx="92" cy="236" r="8"/><circle cx="108" cy="236" r="8"/><circle cx="124" cy="236" r="8"/><circle cx="140" cy="236" r="8"/><circle cx="156" cy="236" r="8"/><circle cx="92" cy="252" r="8"/><circle cx="108" cy="252" r="8"/><circle cx="124" cy="252" r="8"/><circle cx="140" cy="252" r="8"/><circle cx="156" cy="252" r="8"/></g>
 <line x1="228" y1="160" x2="312" y2="160" stroke="#26224a" stroke-width="7"/><path d="M308 144 L336 160 L308 176 Z" fill="#26224a"/>
 <g transform="translate(300,0)">
  ${beaker}
  <g fill="#3b9bf0"><circle cx="66" cy="96" r="7"/><circle cx="122" cy="92" r="7"/><circle cx="150" cy="128" r="7"/><circle cx="82" cy="140" r="7"/><circle cx="112" cy="168" r="7"/><circle cx="176" cy="164" r="7"/><circle cx="64" cy="206" r="7"/><circle cx="140" cy="214" r="7"/><circle cx="180" cy="200" r="7"/><circle cx="110" cy="244" r="7"/><circle cx="168" cy="248" r="7"/><circle cx="60" cy="238" r="7"/><circle cx="100" cy="190" r="7"/><circle cx="152" cy="152" r="7"/></g>
  <g fill="#e53935"><circle cx="90" cy="112" r="8"/><circle cx="166" cy="106" r="8"/><circle cx="130" cy="146" r="8"/><circle cx="74" cy="180" r="8"/><circle cx="148" cy="186" r="8"/><circle cx="96" cy="212" r="8"/><circle cx="160" cy="228" r="8"/><circle cx="134" cy="252" r="8"/><circle cx="116" cy="124" r="8"/><circle cx="184" cy="224" r="8"/></g>
 </g>`};
const DISS_PTS=[{n:'Water particles',x:105,y:88},{n:'Solute crystal',x:180,y:243},{n:'Dissolved solute particles',x:466,y:106}];

/* ---------- topics ---------- */
const TOPICS=[

{id:'phases', ico:'🔄', name:'The Six Phase Changes', blurb:'Solid, liquid, gas - melting, freezing, evaporation, condensation, sublimation, deposition', col:'#ff2d95', Q:[
 mc('What is a phase change?','Matter changing from one physical state to another',['A new substance being made from old ones','Matter getting heavier when it is heated','A liquid changing its colour when it is heated'],'A phase change is the process by which matter changes from one physical state (phase) to another.',SC+', slide 2'),
 mc('Which are the three most common phases (states) of matter?','Solid, liquid and gas',['Solid, liquid and powder','Hot, warm and cold','Ice, water and snow'],'The three most common phases of matter are solid, liquid and gas.',SC+', slide 2'),
 label('Label the phase-change map! Choose the correct name for each number. (Red arrow = heat added, blue arrow = heat taken away.)',PHASE_SVG,PHASE_PTS,'Heated: melting (solid to liquid), evaporation (liquid to gas), sublimation (solid straight to gas). Cooled: freezing (liquid to solid), condensation (gas to liquid), deposition (gas straight to solid).',SC+', slide 3'),
 match('Match each phase change to what happens to the matter.',[
   ['Melting','Solid to liquid'],
   ['Freezing','Liquid to solid'],
   ['Evaporation','Liquid to gas'],
   ['Condensation','Gas to liquid'],
   ['Sublimation','Solid to gas, with no liquid stage'],
   ['Deposition','Gas to solid, with no liquid stage']],
   'Melting and freezing are opposites, so are evaporation and condensation, and so are sublimation and deposition.',SC+', slides 3, 8-15'),
 sort('Heated or cooled? Which phase changes happen through heating and which through cooling?',['Through heating','Through cooling'],[
   ['Melting',0],['Boiling',0],['Evaporation',0],['Sublimation',0],
   ['Freezing',1],['Condensation',1],['Deposition',1]],
   'Melting, boiling, evaporation and sublimation are phase changes through HEATING. Freezing, condensation and deposition are phase changes through COOLING.',SC+', slides 7 and 12'),
 odd('Odd one out! Three cards are pairs of OPPOSITE phase changes. Tap the card that does not belong.','Melting and evaporation',['Melting and freezing','Evaporation and condensation','Sublimation and deposition'],'The other three cards are pairs of OPPOSITE phase changes: one happens through heating, the other through cooling, and their arrows on the phase-change map go opposite ways. Melting and evaporation both happen when heat is added, so they are not opposites.',SC+', slides 3, 7 and 12'),
 order('Heat an ice cube until it becomes a gas. Put the steps in order.',[
   'The ice cube is a solid',
   'Heat is added and the ice melts',
   'The ice has become liquid water',
   'More heat is added and the water changes into a gas',
   'The water is now a gas'],
   'Solid ice melts into liquid water. When the liquid water is heated more, it changes into a gas.',SC+', slides 2 and 4'),
 scramble('A gas changes into a solid without first passing through the liquid state.','deposition','Deposition: a gas changes straight into a solid, with no liquid stage. Frost and snowflakes can form this way.',SC+', slide 15'),
 match('Match each everyday example to its phase change.',[
   ['A popsicle turns into a liquid','Melting'],
   ['Water turns into ice cubes','Freezing'],
   ['Dry ice turns straight into a gas, with no liquid stage','Sublimation'],
   ['Frost and snowflakes form from a gas','Deposition'],
   ['Water exposed to the air turns into a gas','Evaporation']],
   'Examples: melting popsicles, freezing ice cubes, sublimation of dry ice, snowflakes from deposition, evaporation of water.',SC+', slides 8-15'),
 tf('Sublimation can happen when heat is added, when the pressure is reduced, or both.',true,'Yes! A solid can go straight to a gas through the addition of heat, the reduction of pressure, or both.',SC+', slide 11'),
 hotspot('Tap the arrow that shows sublimation.',PHASE_SVG,PHASE_PTS,'Sublimation','Sublimation is the red arrow along the bottom: SOLID straight to GAS, with no liquid stage. Red means heat is added.',SC+', slides 3 and 11'),
 tf('In deposition, a gas first turns into a liquid and then freezes into a solid.',false,'No - in deposition a gas changes into a solid WITHOUT passing through the liquid state (frost, snowflakes).',SC+', slide 15'),
 multi('Tick ALL the phase changes that skip the liquid state completely.',['Sublimation','Deposition'],['Melting','Freezing','Evaporation','Condensation'],'Sublimation (solid to gas) and deposition (gas to solid) go straight between solid and gas.',SC+', slides 11 and 15'),
 mc('Frost and snowflakes can form when a gas turns directly into ice. Which phase change is this?','Deposition',['Condensation','Freezing','Sublimation'],'Deposition: a gas changes into a solid without passing through the liquid state. This can form frost, snowflakes and other ice crystals.',SC+', slide 15'),
 typed('Type the name of the phase change in which a GAS becomes a LIQUID.',['condensation'],'Condensation: a gas is cooled and its molecules come closer together to form a liquid.',SC+', slide 14'),
 typed('Type the name of the phase change in which a SOLID becomes a GAS without becoming a liquid.',['sublimation'],'Sublimation: solid straight to gas, for example dry ice.',SC+', slide 11')
]},

{id:'heat', ico:'🔥', name:'Heat & Particles', blurb:'What heat does to molecules when matter melts, boils and freezes', col:'#ff8a1a', Q:[
 mc('What happens to the molecules of a solid when it is heated?','They gain kinetic energy and move more rapidly',['They stop moving and lose energy','They get smaller and smaller','They disappear completely'],'Heating a solid increases the kinetic energy of its molecules, so they vibrate and move more rapidly.',SC+', slide 8'),
 mc('You can think of the bonds between the molecules of ice as...','Tiny invisible strings holding them together',['Little magnets that push the molecules far apart','A thin layer of ice wrapped around every molecule','Glue that melts at room temperature'],'You can think of the bonds as tiny invisible strings that hold the molecules of the ice together.',SC+', slide 5'),
 mc('When ice is being heated and melts, what is the heat energy used for?','Breaking the bonds between the molecules',['Making the ice colder','Making new molecules','Making the ice heavier'],'The heat energy is used to break the bonds between the molecules of the ice.',SC+', slide 5'),
 odd('Odd one out! Three cards describe what happens when ice is heated. Tap the card that does not belong.','The molecules form new bonds',['The molecules move more rapidly','The bonds between the molecules break','The molecules become less tightly packed'],'When ice is heated, the molecules move more rapidly, the bonds between them break and they become less tightly packed. New bonds form the other way round - when water is cooled and turns into ice.',SC+', slides 5, 6 and 8'),
 tf('While ice is melting, its temperature stays the same until all of the ice has melted.',true,'Right! The heat goes into breaking bonds, so the temperature does not change until all of the ice is water.',SC+', slide 5'),
 order('Heating ice: put what happens in order.',[
   'Heat is added and the ice absorbs it',
   'The heat energy breaks the bonds between the molecules',
   'The molecules move around more freely and are less tightly packed',
   'The solid turns into a liquid'],
   'The ice absorbs heat, the bonds break, the molecules move more freely and the solid becomes a liquid.',SC+', slides 5 and 8'),
 order('Cooling water: put what happens in order.',[
   'Water is cooled down',
   'The heat energy it absorbed is released',
   'The molecules slow down and move less',
   'The molecules become more tightly packed and form new intermolecular bonds',
   'A rigid structure forms: ice'],
   'Cooling is the opposite of heating: the energy is released, the molecules slow down, new bonds form and the water becomes ice.',SC+', slide 6'),
 spot('Find the mistake and tap it.','When water is cooled down, its molecules slow down and become [[less|more]] tightly packed.','Cooling is the opposite of heating: the molecules slow down, become MORE tightly packed and form new bonds - a rigid structure (ice).',SC+', slide 6'),
 match('What are the molecules doing? Match the phase change to the molecules.',[
   ['Melting','Bonds break and the molecules become less tightly packed'],
   ['Boiling','Added energy makes the molecules move faster and collide more often'],
   ['Evaporation','The more energetic molecules near the surface escape into the air'],
   ['Freezing','The molecules are held in fixed positions relative to each other'],
   ['Condensation','The molecules come closer together and form a liquid']],
   'Each change is the molecules gaining or losing energy and the bonds between them breaking or forming.',SC+', slides 8-14'),
 mc('What happens to the heat energy when water is cooled and turns into ice?','The heat energy that was absorbed is released',['The heat energy is destroyed completely','Even more heat energy is absorbed','Heat energy is not involved at all'],'When water is cooled, the opposite of heating happens: the absorbed heat energy is released and the molecules slow down.',SC+', slide 6'),
 multi('Tick ALL the things that the freezing point of a substance depends on.',['Pressure','Impurities in the liquid'],['The colour of the liquid','The shape of the container','How long the liquid has been cooling'],'The freezing point depends on factors such as pressure and the presence of impurities.',SC+', slide 13'),
 match('Match each phase change to the point the matter is cooled below.',[
   ['Freezing','A liquid is cooled below its freezing point'],
   ['Condensation','A gas is cooled below its dew point'],
   ['Deposition','A gas is cooled below its sublimation point']],
   'Freezing point (liquid to solid), dew point (gas to liquid), sublimation point (gas straight to solid).',SC+', slides 13-15'),
 scramble('A gas is cooled below its dew point, and its molecules come closer together to form a liquid.','condensation','Condensation: a gas changes into a liquid when it is cooled below its dew point.',SC+', slide 14'),
 tf('During boiling, the molecules move more slowly and collide less often.',false,'No - the added energy makes the molecules move around MORE rapidly and collide MORE frequently.',SC+', slide 9')
]},

{id:'boilevap', ico:'💨', name:'Boiling vs Evaporation', blurb:'Two ways a liquid becomes a gas: what is the same and what is different', col:'#17c1e8', Q:[
 mc('Boiling and evaporation are both phase changes from...','A liquid to a gas',['A gas to a liquid','A solid to a liquid','A solid straight to a gas'],'In both boiling and evaporation, a liquid changes into a gas.',SC+', slides 9 and 10'),
 hotspot('Tap the arrow that shows evaporation.',PHASE_SVG,PHASE_PTS,'Evaporation','Evaporation is the red arrow from LIQUID to GAS: energy is added and the liquid changes into a gas.',SC+', slides 3 and 10'),
 mc('Which statement about evaporation is correct?','It happens at a temperature below the liquid\'s boiling point',['It only happens when the liquid is boiling hot','It changes a gas into a liquid','It changes a solid straight into a gas with no liquid stage'],'Evaporation is a liquid changing into a gas at a temperature below its boiling point.',SC+', slide 10'),
 mc('Which molecules escape from a liquid during evaporation?','The more energetic molecules near the surface',['Only the slowest molecules at the bottom','Molecules from the air above the liquid','All of the molecules at exactly the same moment'],'The more energetic molecules near the surface of the liquid escape into the air as gas molecules.',SC+', slide 10'),
 mc('In which phase change does a liquid become a gas because of an increase in temperature and pressure?','Boiling',['Evaporation','Condensation','Melting'],'Boiling: a liquid changes into a gas due to an increase in temperature and pressure. The added energy makes the molecules move more rapidly and collide more often.',SC+', slide 9'),
 odd('Odd one out! Three cards describe the same phase change. Tap the card that does not belong.','Temperature and pressure increase',['Happens below the boiling point','Surface molecules escape into the air','The liquid is exposed to air'],'Three cards describe EVAPORATION: it happens below the boiling point, when a liquid is exposed to air and the more energetic molecules near the surface escape. An increase in temperature and pressure describes BOILING.',SC+', slides 9 and 10'),
 sort('Evaporation, boiling or both? Sort the descriptions.',['Evaporation','Boiling','Both'],[
   ['Happens at a temperature below the boiling point',0],
   ['Energetic molecules near the surface escape into the air',0],
   ['Caused by an increase in temperature and pressure',1],
   ['The molecules collide with each other more frequently as the temperature and pressure increase',1],
   ['A liquid changes into a gas',2],
   ['Energy is needed',2],
   ['Can continue until all of the liquid has changed into gas',2]],
   'Both: liquid to gas, energy needed, continues until all the liquid is gas. Evaporation: below the boiling point, surface molecules escape. Boiling: increase in temperature and pressure, more frequent collisions.',SC+', slides 9 and 10'),
 order('Evaporation: put what happens in order.',[
   'A liquid is exposed to the air',
   'The more energetic molecules near the surface escape into the air as gas molecules',
   'The process continues until all of the liquid has become a gas'],
   'Surface molecules with extra energy escape into the air, and this goes on until the liquid has all become a gas.',SC+', slide 10'),
 spot('Find the mistake and tap it.','In evaporation, the [[slowest|more energetic]] molecules near the surface escape into the air.','The MORE ENERGETIC molecules near the surface of the liquid escape into the air as gas molecules.',SC+', slide 10'),
 tf('Evaporation can only happen when a liquid has reached its boiling point.',false,'No! Evaporation happens at a temperature BELOW the boiling point.',SC+', slide 10'),
 typed('Type the name of the phase change in which a liquid changes into a gas at a temperature below its boiling point.',['evaporation'],'Evaporation (spelling: e-v-a-p-o-r-a-t-i-o-n): surface molecules gain energy and escape into the air.',SC+', slide 10'),
 write('Explain one way boiling and evaporation are the same and one way they are different.',['liquid|gas','energy|heat|temperature','below|surface|escape|pressure|collide'],'Both boiling and evaporation change a liquid into a gas and need energy (heat). Evaporation happens below the boiling point, when the more energetic molecules near the surface escape into the air.','Both are liquid to gas and need energy. Difference: evaporation is below the boiling point and happens as surface molecules escape.',SC+', slides 9 and 10')
]},

{id:'solutions', ico:'🧂', name:'Dissolving Basics', blurb:'Solute, solvent, solution, soluble and insoluble', col:'#39ff14', Q:[
 mc('A spoonful of sugar "vanishes" when you stir it into warm tea. What happened to the sugar?','It is still there, spread through the liquid',['It vanished into thin air and is gone forever','It was destroyed by the warm tea','It turned into water particles'],'The sugar did not disappear. It is still in the tea - you can still taste the sweetness!',DS+', slide 2'),
 match('Key scientific vocabulary: match each word to its meaning.',[
   ['Solute','The solid that dissolves into the liquid'],
   ['Solvent','The liquid that does the dissolving'],
   ['Solution','The mixture in which the solute is evenly spread through the solvent'],
   ['Soluble','Can dissolve in a liquid to form a clear mixture'],
   ['Insoluble','Cannot dissolve in that liquid'],
   ['Dissolving rate','How fast something dissolves']],
   'Solute (solid) + solvent (liquid) = solution. Soluble things dissolve, insoluble things do not.',DS+', slides 4 and 5'),
 scramble('The liquid that the solute spreads through in a solution - for example, water.','solvent','Solvent: the liquid that does the dissolving (e.g. water). The solute dissolves in it.',DS+', slide 5'),
 sort('Soluble or insoluble? Sort the cards.',['Soluble','Insoluble'],[
   ['Table salt',0],['Sugar',0],['A clear mixture forms',0],
   ['Sand',1],['Chalk',1],['Visible bits are left however long you stir',1]],
   'Table salt and sugar are soluble solids. Sand and chalk are insoluble: they sink or float and leave visible bits.',DS+', slide 4'),
 fill('When salt dissolves in water, the salt is the ___, the water is the ___ and the salty mixture is the ___.',['solute','solvent','solution'],['solute','solvent','solution','soluble','insoluble'],'Solute = what dissolves, solvent = the liquid that dissolves it, solution = the mixture.',DS+', slide 5'),
 mc('A student stirs sand into water, but visible bits stay however long they stir. What can we say about sand?','It is insoluble in water',['It is soluble in water','It is the solvent','It is a solution'],'Sand does not dissolve, so it is insoluble.',DS+', slide 4'),
 spot('Find the mistake and tap it.','A substance is soluble if it can dissolve in a liquid to form a [[cloudy|clear]] mixture.','A soluble substance dissolves in a liquid to form a CLEAR mixture. Table salt and sugar are common soluble solids.',DS+', slide 4'),
 tf('Dissolving is a chemical reaction that makes brand new substances.',false,'No! Dissolving is a PHYSICAL change. No brand new substances are created.',DS+', slide 6'),
 multi('Tick ALL the solids that are soluble in water.',['Table salt','Sugar'],['Sand','Chalk'],'Salt and sugar dissolve in water. Sand and chalk are insoluble.',DS+', slide 4'),
 typed('10 g of salt dissolves in 100 g of water. What is the mass of the solution in grams? Type the number.',['110','110 g','110g','110 grams'],'Total mass is conserved: 10 g + 100 g = 110 g of solution.',DS+', slide 6','g'),
 slider('You dissolve 25 g of sugar in 100 g of water. What is the mass of the solution?',{min:100,max:150,step:5,unit:'g'},125,0,'Total mass is conserved, nothing disappears: 25 g + 100 g = 125 g of solution. In the same way, 10 g of salt in 100 g of water makes 110 g of solution.',DS+', slide 6'),
 mc('What does it mean to stir?','To mix, which speeds up dissolving',['To heat the liquid so it dissolves','To take the solid out of the liquid','To freeze the mixture'],'To stir means mixing to speed up the dissolving rate.',DS+', slide 5'),
 mc('What happens to the solute particles when a solid dissolves?','They break apart and spread out among the solvent particles',['They are destroyed','They turn into brand new particles','They sink to the bottom as a solid'],'No new substance is made: the solute particles simply break apart and spread out among the solvent particles.',DS+', slide 6'),
 mc('A solid is dissolved in water. Compared with the solid and the water before mixing, the mass of the solution is...','The same - total mass is conserved',['Smaller, because the solid vanished','Bigger, because the particles take up more room','Smaller, because some mass turns into bubbles'],'Total mass is conserved. For example 10 g of salt in 100 g of water makes exactly 110 g of solution.',DS+', slide 6')
]},

{id:'faster', ico:'⚡', name:'Dissolving Faster: Particles', blurb:'The particle model, temperature and stirring', col:'#a78bfa', Q:[
 label('Label the particle picture! Choose the correct name for each number.',DISS_SVG,DISS_PTS,'In the crystal the solute particles are packed together. The water particles pull them away and the solute particles spread out between the water particles.',DS+', slide 7'),
 mc('In a solid crystal, how are the solute particles arranged?','Tightly packed together in orderly rows',['Far apart and spread out','Moving about quickly in the liquid','Hidden inside the water particles'],'In a solid crystal the solute particles are tightly packed in orderly rows.',DS+', slide 7'),
 odd('Odd one out! Three cards describe the same kind of particle. Tap the card that does not belong.','They are packed in orderly rows',['They are constantly moving','They bump against the crystal','They pull individual solute particles away'],'Three cards describe the WATER particles: they are constantly moving, bump against the crystal and pull solute particles away. The solute particles in a solid crystal are the ones tightly packed in orderly rows.',DS+', slide 7'),
 order('Particle model: put the dissolving process in order.',[
   'At the start, the solute particles are tightly packed in orderly rows in the crystal',
   'Water particles are constantly moving and bumping against the crystal',
   'The water particles pull individual solute particles away',
   'The solute particles fit into the gaps between the water particles'],
   'Moving water particles bump the crystal, pull solute particles away and the solute particles fit into the gaps.',DS+', slide 7'),
 mc('Why does sugar dissolve much faster in hot water than in cold water?','Hot water particles move faster and collide with the sugar more frequently',['Heating removes all the gaps between the water particles','Cold water destroys the sugar particles before they can separate','Hot water melts the sugar into a liquid through a chemical reaction'],'Heat gives the water particles more energy, so they move faster and hit the sugar more often.',DS+', slides 10-11'),
 spot('Find the mistake and tap it.','In hot water, the water particles move faster and collide with the solute [[less|more]] often.','Heating gives the water particles more thermal energy, so they move faster and collide with the solute MORE often and harder.',DS+', slide 8'),
 order('Temperature and dissolving rate: put the chain in order.',[
   'Heating the solvent transfers more thermal energy to the liquid particles',
   'The particles move faster and collide with the solute more often and harder',
   'Solute particles are broken away much faster',
   'The dissolving rate increases'],
   'More thermal energy, faster collisions, rapid dissolving.',DS+', slide 8'),
 mc('Why does stirring help a solid dissolve faster?','It sweeps the dissolved particles away and brings fresh solvent to the solid',['It heats the water up so the solid melts','It makes the crystal grow bigger so it dissolves','It takes the water particles out of the beaker'],'In still water the dissolved particles stay next to the crystal and block fresh water. Stirring sweeps them away.',DS+', slide 9'),
 hotspot('Tap the solute particles that have already dissolved.',DISS_SVG,DISS_PTS,'Dissolved solute particles','In the right beaker the solute particles have been pulled away from the crystal. They are spread out in the gaps between the water particles.',DS+', slide 7'),
 multi('Tick ALL the things that make a solid dissolve faster.',['Heating the solvent','Stirring'],['Using colder water','Leaving it completely still'],'Heat and stirring both increase the dissolving rate.',DS+', slides 8-11'),
 scramble('Two words: how fast a solute breaks apart and spreads into a solvent. Heating and stirring increase it.','dissolving rate','Dissolving rate = how fast something dissolves. Heating the solvent and stirring both speed it up.',DS+', slides 5, 8 and 9'),
 write('Use the particle model to explain why sugar dissolves faster in hot, stirred tea than in cold, still water.',['thermal|energy|heat|hot','fast|quick|rapid|speed','collid|collision|bump|hit|crash','stir|sweep|fresh|mix'],'Heating gives the water particles more thermal energy, so they move faster and collide with the sugar more often and harder. Stirring sweeps the dissolved particles away and brings fresh water particles to the sugar.','Heat = more energy, faster particles, more collisions. Stirring = sweeps dissolved particles away, fresh solvent arrives.',DS+', slides 8 and 9')
]},

{id:'reversible', ico:'↩️', name:'Reversible Changes (bonus)', blurb:'Physical changes you can undo', bonus:true, col:'#ffd23f', Q:[
 mc('Dissolving is a physical change. What does that mean?','No brand new substances are created',['A new substance is made','The solute turns into a gas','Only gases are involved'],'In a physical change no new substance is made: the solute particles just break apart and spread out among the solvent particles.',DS+', slide 6'),
 mc('How can you get the solid back from a salt solution?','Evaporate the water - the solid crystals remain behind',['Add more water to the solution','Stir the solution much faster','Add more salt to the solution'],'Because dissolving is a physical change it can be reversed: if you evaporate the water, the solid crystals remain.',DS+', slide 6'),
 spot('Find the mistake and tap it.','Dissolving is a [[chemical|physical]] change, so it can be reversed by evaporating the water.','Dissolving is a PHYSICAL change: no brand new substances are created. That is why it can be reversed - evaporate the water and the solid crystals remain.',DS+', slide 6'),
 order('Get the sugar back from a sugar solution: put the steps in order.',[
   'Sugar dissolves in the water to make a solution',
   'The water is evaporated',
   'The solid crystals remain behind'],
   'Dissolve, then evaporate the water, and the solid is left behind.',DS+', slide 6'),
 match('Match each phase change to its opposite (the arrow going the other way on the phase-change map).',[
   ['Melting','Freezing'],
   ['Evaporation','Condensation'],
   ['Sublimation','Deposition']],
   'The phase-change map has an arrow each way between solid, liquid and gas: melting and freezing, evaporation and condensation, sublimation and deposition.',SC+', slide 3')
]}
];

/* ---------- vocabulary (en / ru / note) ---------- */
const VOCAB=[
 ['Phase change','фазовый переход','Matter changes from one state to another'],['Solid / liquid / gas','твердое тело / жидкость / газ','The three common phases'],
 ['Melting','плавление','Solid to liquid'],['Freezing','замерзание','Liquid to solid'],['Evaporation','испарение','Liquid to gas below the boiling point'],['Boiling','кипение','Liquid to gas by heating'],
 ['Condensation','конденсация','Gas to liquid'],['Sublimation','сублимация','Solid straight to gas'],['Deposition','осаждение из газа (десублимация)','Gas straight to solid'],
 ['Molecule','молекула','Also called a particle'],['Bond (intermolecular)','связь между молекулами','Tiny invisible string holding molecules together'],['Kinetic energy','кинетическая энергия','More heat = more kinetic energy = molecules move more rapidly'],
 ['Freezing point','температура замерзания',''],['Dew point','точка росы','Gas cools below it and condenses'],['Boiling point','температура кипения',''],['Impurities','примеси',''],
 ['Solute','растворяемое вещество','The solid that dissolves'],['Solvent','растворитель','The liquid that does the dissolving'],['Solution','раствор','Solute evenly spread through the solvent'],
 ['Soluble / insoluble','растворимый / нерастворимый',''],['Dissolve','растворяться',''],['Dissolving rate','скорость растворения','How fast it dissolves'],['Stir','перемешивать',''],
 ['Thermal energy','тепловая энергия',''],['Physical change','физическое изменение','No new substance is made'],['Reversible','обратимый','Can be undone']
];

/* ---------- glossary: English term|other forms -> Russian (shown under each question; VOCAB terms are added automatically) ---------- */
const GLOSSARY=[
 /* states and phase changes */
 ['phase','фаза (состояние вещества)'],['physical state','агрегатное состояние'],['state','состояние (вещества)'],
 ['matter','вещество, материя'],['substance','вещество'],
 ['melting|melt','плавление (плавиться, таять)'],['freezing|freeze|froze|frozen','замерзание (замерзать)'],
 ['evaporation|evaporate','испарение (испаряться)'],['boiling|boil','кипение (кипеть)'],['boiling hot','очень горячий, кипящий'],
 ['condensation|condense','конденсация (конденсироваться)'],['sublimation','сублимация (возгонка)'],['sublimation point','температура сублимации'],
 ['heated|heating','нагревать (нагревание)'],['cooled|cooling','охлаждать (охлаждение)'],
 ['heat energy','тепловая энергия'],['energy','энергия'],['energetic','с большой энергией'],
 ['temperature','температура'],['room temperature','комнатная температура'],['pressure','давление'],
 ['increase','увеличение (увеличиваться)'],['reduce|reduction','уменьшать (уменьшение)'],['directly','напрямую, сразу'],['stage','стадия, этап'],
 ['pass through|passing through','проходить через'],['skip','пропускать'],['completely','полностью'],['continue','продолжаться'],
 ['depend on|depends on','зависеть от'],['opposite','противоположный'],['arrow','стрелка'],['statement','утверждение'],['odd one out','найди лишнее'],['tick','отметить галочкой'],
 ['dry ice','сухой лед'],['frost','иней'],['snowflake','снежинка'],['ice cube','кубик льда'],['popsicle','фруктовый лед (эскимо)'],
 /* molecules and particles */
 ['bond','связь (между частицами)'],['intermolecular bond','межмолекулярная связь'],['particle','частица'],['particle model','модель частиц'],
 ['rapidly|rapid','быстро (быстрый)'],['frequently','часто'],['freely','свободно'],['collide|collision','сталкиваться (столкновение)'],['gain','получать, набирать'],
 ['tightly packed','плотно упакованы'],['rigid','жесткий'],['structure','структура, строение'],['fixed position','неподвижное положение'],['relative to each other','относительно друг друга'],
 ['absorb','поглощать'],['release','выделять, отдавать'],['involved','участвует (задействован)'],['exposed','открыт воздуху'],['escape','вылетать, вырываться'],['surface','поверхность'],
 ['invisible','невидимый'],['tiny','крошечный'],['string','нить, ниточка'],['magnet','магнит'],['glue','клей'],['layer','слой'],['wrapped','обернутый'],['heavier','тяжелее'],['powder','порошок'],['container','сосуд, емкость'],
 /* dissolving */
 ['mixture','смесь'],['clear mixture','прозрачная смесь'],['table salt','поваренная соль'],['chalk','мел'],['sink','тонуть'],['visible','видимый'],['bit','кусочек'],['however long','как бы долго (сколько бы ни)'],
 ['vanish','исчезать'],['disappear','исчезать'],['into thin air','бесследно (в никуда)'],['destroy','разрушать, уничтожать'],['spread out|spread','распределяться'],['evenly','равномерно'],['among','среди'],
 ['conserved|conserve','сохраняться (не меняться)'],['mass','масса'],['compared with','по сравнению с'],['take up more room','занимать больше места'],['bubble','пузырек'],
 ['crystal','кристалл'],['orderly rows|orderly','ровными рядами'],['arrange','располагать'],['hidden','спрятанный'],['gap','промежуток'],['fit into','помещаться (входить в)'],
 ['bump','ударяться, толкаться'],['individual','отдельный'],['constantly','постоянно'],['separate','отделяться'],['remove','убирать'],['broken away','оторваны (отделены)'],
 ['transfer','передавать'],['harder','сильнее'],['stir|stirring|stirred','перемешивать'],['sweep','сметать, уносить'],['fresh','свежий, новый'],['speed up|speeds up','ускорять'],
 ['chemical reaction','химическая реакция'],['chemical','химический'],['brand new','совершенно новый'],['reverse','обратить (вернуть назад)'],['remain','оставаться'],
 ['beaker','химический стакан'],['spoonful','полная ложка']
];

/* ---------- cheat sheets ---------- */
const SHEETS={
phases:`<h3>Three phases</h3><p><b>Solid, liquid, gas.</b> A phase change = matter changes from one state to another.</p>
<table><tr><th>Change</th><th>From - to</th><th>Heat</th></tr>
<tr><td>Melting</td><td>solid → liquid</td><td>added</td></tr>
<tr><td>Evaporation</td><td>liquid → gas</td><td>added</td></tr>
<tr><td>Boiling</td><td>liquid → gas</td><td>added</td></tr>
<tr><td>Sublimation</td><td>solid → gas (no liquid)</td><td>added</td></tr>
<tr><td>Freezing</td><td>liquid → solid</td><td>taken away</td></tr>
<tr><td>Condensation</td><td>gas → liquid</td><td>taken away</td></tr>
<tr><td>Deposition</td><td>gas → solid (no liquid)</td><td>taken away</td></tr></table>
<p>Examples: melting popsicle, ice cubes freezing, dry ice sublimation, frost and snowflakes (deposition).</p>`,
heat:`<h3>Heating</h3><ul><li>Ice absorbs heat; the heat breaks the <b>bonds</b> (tiny invisible strings) between the molecules.</li>
<li>Temperature stays the same until all of the ice has melted.</li><li>Kinetic energy rises: molecules vibrate and move more rapidly, become less tightly packed and move more freely.</li></ul>
<h3>Cooling</h3><ul><li>The absorbed heat energy is released; molecules slow down, pack tighter and form new bonds - a rigid structure (ice).</li></ul>
<h3>Special points</h3><ul><li>Freezing point depends on pressure and impurities.</li><li>Gas below its <b>dew point</b> condenses; gas below its <b>sublimation point</b> turns to a solid.</li></ul>`,
boilevap:`<table><tr><th></th><th>Evaporation</th><th>Boiling</th></tr>
<tr><td>Change</td><td>liquid → gas</td><td>liquid → gas</td></tr>
<tr><td>Temperature</td><td>below the boiling point</td><td>increase in temperature and pressure</td></tr>
<tr><td>Molecules</td><td>energetic molecules near the surface escape into the air</td><td>added energy: molecules move rapidly and collide more often</td></tr>
<tr><td>Both</td><td colspan="2">need energy; can continue until all the liquid is gas</td></tr></table>`,
solutions:`<h3>Vocabulary</h3><ul><li><b>Solute</b> - solid that dissolves (salt, sugar)</li><li><b>Solvent</b> - liquid that does the dissolving (water)</li><li><b>Solution</b> - solute evenly spread through the solvent</li>
<li><b>Soluble</b> - dissolves to form a clear mixture (salt, sugar). <b>Insoluble</b> - does not dissolve (sand, chalk).</li><li><b>Dissolving rate</b> - how fast it dissolves. <b>Stir</b> - mix to speed it up.</li></ul>
<h3>Physical change</h3><ul><li>No brand new substance. Reverse it: evaporate the water and the crystals remain.</li><li>Mass is conserved: 10 g salt + 100 g water = 110 g solution.</li></ul>`,
faster:`<h3>Particle model</h3><ul><li>In the crystal, solute particles are tightly packed in orderly rows.</li><li>Moving water particles bump the crystal, pull solute particles away and fit them into the gaps between water particles.</li></ul>
<h3>Faster dissolving</h3><ul><li><b>Heat:</b> more thermal energy → particles move faster → collide more often and harder → faster dissolving.</li>
<li><b>Stir:</b> sweeps dissolved particles away from the crystal and brings fresh solvent to it.</li></ul>`,
reversible:`<ul><li>Dissolving is a <b>physical change</b> and can be reversed: evaporate the water, the solid crystals remain.</li>
<li>Phase changes come in opposite pairs: melting / freezing, evaporation / condensation, sublimation / deposition.</li><li>Cooling is the opposite of heating: absorbed heat energy is released.</li></ul>`
};
TOPICS.forEach(t=>{t.sheet=SHEETS[t.id]});
QuizEngine.run({id:'science-unit2-mini',lang:'en',logo:'🔬 Science Quest',title:'Unit 2 Mini Quiz: States, Phase Changes & Dissolving',bossSize:20,topics:TOPICS,vocab:VOCAB,glossary:GLOSSARY,games:[{href:'game/',ico:'🧪',name:'Phase Shifter',desc:'Particle lab arcade: melt, boil, freeze, sublimate and dissolve - you control the heat!'}]});
})();
