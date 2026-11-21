/* Science - Unit 2 End-of-Unit Check: vocabulary (lessons 2.1-2.4) + content (phase changes, boiling vs evaporation, conduction, dissolving, reversible changes, chemical reactions). Grade 5, Cambridge.
   Sources: teacher's Unit 2 vocabulary list + slides "State Changes in matter" and "Dissolving" + Unit 2 project sheet, rubric and sample poster (WhatsApp, 30 Oct - 6 Nov 2026).
   NOT available when written: Learner's Book and Workbook for Unit 2, slides for lesson 2.2 (conductors) and 2.4 (reactions), "States of matter and their property" - nothing here comes from them. */
(function(){
const SC='State Changes slides', DS='Dissolving slides', UV='Unit 2 vocabulary list', PJ='Unit 2 project sheet', RB='Unit 2 project rubric', PS='Unit 2 sample poster';
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
const DISS_PTS=[{n:'Water particles',x:105,y:88},{n:'Solute crystal',x:124,y:244},{n:'Dissolved solute particles',x:466,y:106}];

const BASE_GLOSSARY=[
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

/* ---- part-vocab.js ---- */
const PART_VOCAB = {
  topics: [
    { id:'vocab', ico:'📖', name:'Unit 2 Vocabulary', blurb:'All 18 Unit 2 words: boiling point, solvent, reversible, reactants and more', col:'#2f6fed', sheet:`<h3>Unit 2 words by lesson</h3>
<table>
<tr><th>Lesson</th><th>Word</th><th>Meaning</th></tr>
<tr><td>2.1</td><td><b>boiling point</b></td><td>the temperature at which particles throughout a liquid become a gas</td></tr>
<tr><td>2.1</td><td><b>melting point</b></td><td>the temperature at which a solid becomes a liquid</td></tr>
<tr><td>2.1</td><td><b>property</b></td><td>something about a substance that allows us to tell it apart from other substances</td></tr>
<tr><td>2.2</td><td><b>conduction</b></td><td>the transfer of heat or electrical energy from one object to another</td></tr>
<tr><td>2.2</td><td><b>electrical conductors</b></td><td>materials and substances that conduct electricity well</td></tr>
<tr><td>2.2</td><td><b>thermal conductors</b></td><td>materials and substances that conduct heat well</td></tr>
<tr><td>2.2</td><td><b>substance</b></td><td>Definition: "materials with special physical matters" (odd wording; in other definitions it simply means a kind of material, e.g. a property helps us tell one substance from another)</td></tr>
<tr><td>2.3</td><td><b>reversible</b></td><td>can be changed back to the way it was before</td></tr>
<tr><td>2.3</td><td><b>irreversible</b></td><td>cannot be changed back to the way it was before</td></tr>
<tr><td>2.3</td><td><b>physical change</b></td><td>any change that does not change a substance into a different substance</td></tr>
<tr><td>2.3</td><td><b>solute</b></td><td>the substance in a solution that is dissolved, e.g. salt</td></tr>
<tr><td>2.3</td><td><b>solvent</b></td><td>the substance in a solution in which the solute dissolves, e.g. water</td></tr>
<tr><td>2.3</td><td><b>rate</b></td><td>how fast something happens</td></tr>
<tr><td>2.3</td><td><b>uniform</b></td><td>the same throughout</td></tr>
<tr><td>2.4</td><td><b>evidence</b></td><td>the things we know that show us that something has happened or changed</td></tr>
<tr><td>2.4</td><td><b>react</b></td><td>to interact and change to make a new substance; also to respond to something</td></tr>
<tr><td>2.4</td><td><b>reactants</b></td><td>the substances that react together in a chemical reaction</td></tr>
<tr><td>2.4</td><td><b>products</b></td><td>the new substances that form in chemical reactions</td></tr>
</table>
<h3>Easy to mix up</h3>
<ul><li><b>reversible</b> = can be changed back; <b>irreversible</b> = cannot.</li>
<li><b>solute</b> dissolves (salt); <b>solvent</b> does the dissolving (water).</li>
<li><b>reactants</b> go in and react; <b>products</b> are the new substances that form.</li>
<li><b>melting point</b>: solid to liquid; <b>boiling point</b>: liquid to gas.</li></ul>`, Q:[
      Object.assign(match('Lesson 2.1 words: match each word to its meaning.',[
        ['Boiling point','The temperature at which particles throughout a liquid become a gas'],
        ['Melting point','The temperature at which a solid becomes a liquid'],
        ['Property','Something about a substance that allows us to tell it apart from other substances']],
        'Boiling point: liquid to gas. Melting point: solid to liquid. A property is something that helps us tell one substance from another.',UV),{ng:['boiling point','melting point','property']}),
      Object.assign(match('Lesson 2.3 words (part 1): match each word to its meaning.',[
        ['Reversible','Can be changed back to the way it was before'],
        ['Irreversible','Cannot be changed back to the way it was before'],
        ['Physical change','Any change that does not change a substance into a different substance']],
        'Reversible and irreversible are opposites. In a physical change no different substance is made.',UV),{ng:['reversible','irreversible','physical change']}),
      Object.assign(match('Lesson 2.3 words (part 2): match each word to its meaning.',[
        ['Solute','The substance in a solution that is dissolved, e.g. salt'],
        ['Solvent','The substance in a solution in which the solute dissolves, e.g. water'],
        ['Rate','How fast something happens'],
        ['Uniform','The same throughout']],
        'Solute = what dissolves (salt). Solvent = what it dissolves in (water). Rate = how fast. Uniform = the same all the way through.',UV),{ng:['solute','solvent','rate','uniform']}),
      Object.assign(match('Lesson 2.4 words: match each word to its meaning.',[
        ['Evidence','The things we know that show us that something has happened or changed'],
        ['React','To interact and change to make a new substance'],
        ['Products','The new substances that form in chemical reactions'],
        ['Reactants','The substances that react together in a chemical reaction']],
        'Reactants react together and the products are the new substances. Evidence shows us a change has happened. (React can also mean to respond to something.)',UV),{ng:['evidence','react','products','reactants']}),
      sort('Which lesson does each word belong to?',['Lesson 2.1','Lesson 2.2','Lesson 2.3','Lesson 2.4'],[
        ['Melting point',0],['Property',0],
        ['Conduction',1],['Electrical conductors',1],['Thermal conductors',1],
        ['Solvent',2],['Reversible',2],
        ['Evidence',3],['Products',3],['Reactants',3]],
        '2.1: melting point, property. 2.2: conduction and conductors. 2.3: solvent, reversible. 2.4: evidence, products, reactants.',UV),
      scramble('Cannot be changed back to the way it was before.','irreversible','Irreversible: it cannot be changed back to the way it was before.',UV),
      scramble('The things we know that show us that something has happened or changed.','evidence','Evidence shows us that something has happened or changed.',UV),
      typed('Type the word: the new substances that form in chemical reactions.',['products','product'],'Products are the new substances that form in chemical reactions.',UV),
      Object.assign(typed('Type the term (two words): any change that does not change a substance into a different substance.',['physical change','a physical change'],'A physical change is any change that does not change a substance into a different substance.',UV),{ng:['physical change']}),
      Object.assign(mc('Which word is defined as "materials with special physical matters"?','Substance',['Conduction','Reactants','Evidence'],'Substance: materials with special physical matters.',UV),{ng:['substance']}),
      Object.assign(fill('Salt dissolves in water. Dissolving is a ___ change, because it does not change a substance into a different substance. The salt is the ___ and the water is the ___.',['physical','solute','solvent'],['physical','solute','solvent','products'],'Dissolving is a physical change. The salt is the solute and the water is the solvent.',UV+'; '+DS+', slide 6'),{ng:['solute','solvent']}),
      odd('Odd one out! Three words are from lesson 2.4 (chemical reactions). Tap the word from a different lesson.','Solvent',['Reactants','Products','Evidence'],'Reactants, products and evidence are chemical reaction words (lesson 2.4). Solvent is a lesson 2.3 word about dissolving.',UV),
      Object.assign(spot('Find the mistake and tap it.','A reversible change [[cannot|can]] be changed back to the way it was before.','Reversible means it CAN be changed back to the way it was before. Irreversible means it cannot.',UV),{ng:['reversible']}),
      spot('Find the mistake and tap it.','The melting point is the temperature at which a [[gas|solid]] becomes a liquid.','At the melting point a SOLID becomes a liquid.',UV),
      mc('Which word means "something about a substance that allows us to tell it apart from other substances"?','Property',['Evidence','Reactants','Solute'],'A property is something about a substance that helps us tell it apart from other substances.',UV),
      Object.assign(multi('Tick ALL the correct meanings of the word react.',['To interact and change to make a new substance','To respond to something'],['To change back to the way it was before','To dissolve in a solvent'],'React has two meanings: to interact and change to make a new substance, and to respond to something.',UV),{ng:['react','respond']}),
      Object.assign(tf('Uniform means the same throughout.',true,'Yes! Uniform means the same throughout.',UV),{ng:['uniform']}),
      tf('The boiling point is the temperature at which a solid becomes a liquid.',false,'No - that is the melting point. At the boiling point particles throughout a liquid become a gas.',UV),
      Object.assign(tf('Reactants are the new substances that form in a chemical reaction.',false,'No - those are the products. Reactants are the substances that react together.',UV),{ng:['reactants']})
    ]},
    { id:'conduct', ico:'🔌', name:'Conduction: Heat & Electricity (2.2)', blurb:'Conduction, electrical conductors and thermal conductors', col:'#f5a524', sheet:`<h3>Lesson 2.2 in four lines</h3>
<ul><li><b>Conduction</b> - the transfer of heat or electrical energy from one object to another.</li>
<li><b>Electrical conductors</b> - materials and substances that conduct electricity well.</li>
<li><b>Thermal conductors</b> - materials and substances that conduct heat well.</li>
<li>Think: <b>electrical</b> = electricity, <b>thermal</b> = heat.</li></ul>`, Q:[
      mc('What is conduction?','Transfer of heat or electrical energy',['The temperature at which a solid becomes a liquid','A change that cannot be changed back','The new substances that form in a reaction'],'Conduction is the transfer of heat or electrical energy from one object to another.',UV),
      Object.assign(match('Match each word to its meaning.',[
        ['Conduction','The transfer of heat or electrical energy from one object to another'],
        ['Electrical conductors','Materials and substances that conduct electricity well'],
        ['Thermal conductors','Materials and substances that conduct heat well']],
        'Electrical = electricity. Thermal = heat. Conduction is the transfer itself.',UV),{ng:['electrical conductors','thermal conductors','electrical','thermal','electricity']}),
      Object.assign(tf('Thermal conductors are materials and substances that conduct heat well.',true,'Yes! Thermal conductors conduct heat well.',UV),{ng:['thermal conductors','thermal']}),
      Object.assign(tf('Electrical conductors are materials and substances that conduct heat well.',false,'No - electrical conductors conduct ELECTRICITY well. Thermal conductors conduct heat well.',UV),{ng:['electrical conductors','electrical']}),
      Object.assign(mc('Which word names materials and substances that conduct electricity well?','Electrical conductors',['Thermal conductors','Reactants and products','Solvents'],'Electrical conductors conduct electricity well. Thermal conductors conduct heat.',UV),{ng:['electrical conductors','thermal conductors']}),
      scramble('The transfer of heat or electrical energy from one object to another.','conduction','Conduction is the transfer of heat or electrical energy from one object to another.',UV),
      odd('Odd one out! Three words are about conducting heat or electricity (lesson 2.2). Tap the word that does not belong.','Solvent',['Conduction','Electrical conductors','Thermal conductors'],'Conduction, electrical conductors and thermal conductors are lesson 2.2 words. Solvent is about dissolving (lesson 2.3).',UV),
      Object.assign(spot('Find the mistake and tap it.','Thermal conductors are materials and substances that conduct [[electricity|heat]] well.','THERMAL conductors conduct HEAT well. Electrical conductors conduct electricity well.',UV),{ng:['thermal conductors','thermal']}),
      Object.assign(fill('Conduction is the ___ of heat or electrical energy from one object to another. Electrical conductors conduct ___ well. Thermal conductors conduct ___ well.',['transfer','electricity','heat'],['transfer','electricity','heat','rate'],'Conduction = transfer of heat or electrical energy. Electrical conductors: electricity. Thermal conductors: heat.',UV),{ng:['electrical conductors','thermal conductors','electrical','thermal']}),
      multi('Tick ALL the things that conduction can transfer from one object to another.',['Heat','Electrical energy'],['The new substances of a reaction','A dissolved solute'],'Conduction is the transfer of heat or electrical energy from one object to another.',UV)
    ]}
  ],
  vocab: [
    ['boiling point','температура кипения','The temperature at which particles throughout a liquid become a gas'],
    ['melting point','температура плавления','The temperature at which a solid becomes a liquid'],
    ['property','свойство','Something that helps us tell a substance apart from others'],
    ['conduction','проведение (передача) тепла или электричества','The transfer of heat or electrical energy from one object to another'],
    ['electrical conductors','проводники электричества','Conduct electricity well'],
    ['thermal conductors','проводники тепла (теплопроводники)','Conduct heat well'],
    ['substance','вещество','Definition: "materials with special physical matters"'],
    ['irreversible','необратимый','Cannot be changed back'],
    ['rate','скорость','How fast something happens'],
    ['solute','растворенное вещество','The substance that is dissolved, e.g. salt'],
    ['uniform','однородный','The same throughout'],
    ['physical change','физическое изменение','No different substance is made'],
    ['reversible','обратимый','Can be changed back'],
    ['solvent','растворитель','The substance the solute dissolves in, e.g. water'],
    ['evidence','доказательство, свидетельство','Shows that something has happened or changed'],
    ['react','реагировать','Interact and change to make a new substance; also: respond'],
    ['products','продукты реакции','The new substances that form'],
    ['reactants','реагенты','The substances that react together']
  ],
  glossary: [
    ['conduct|conduction','проводить (проводимость)'],['conductor|conductors','проводник'],['electricity|electrical','электричество (электрический)'],['electrical energy','электрическая энергия'],
    ['thermal','тепловой'],['material|materials','материал'],['object','предмет, объект'],['interact','взаимодействовать'],['respond','отвечать, откликаться'],
    ['throughout','по всему объему'],['tell apart|tell it apart','отличить, отличать'],['happen|happened|happens','происходить'],['evidence','доказательство'],['dissolve|dissolves|dissolved|dissolving','растворять(ся)'],
    ['change back|changed back','вернуть как было'],['thing|things','вещь'],['meaning','значение'],['lesson','урок'],['belong','принадлежать, относиться'],['solution','раствор'],['form|forms','образовываться']
  ]
};

/* ---- part-phases.js ---- */
const PART_PHASES = {
  topics: [

  { id:'phases', ico:'🔄', name:'Phase Changes & Heat', blurb:'Six phase changes, what heat does to molecules, and the points where matter changes', col:'#ff2d95',
    sheet:`<h3>Phase changes are physical changes</h3>
<ul>
<li>A <b>phase change</b> is matter changing from one <b>physical state (phase)</b> to another.</li>
<li>The three most common phases: <b>solid, liquid, gas</b>.</li>
<li>It is a <b>physical</b> change of matter, not a new substance.</li>
</ul>
<h3>The six phase changes</h3>
<table>
<tr><td><b>Melting</b></td><td>solid to liquid</td><td>heated</td></tr>
<tr><td><b>Freezing</b></td><td>liquid to solid</td><td>cooled</td></tr>
<tr><td><b>Evaporation</b> / <b>boiling</b></td><td>liquid to gas</td><td>heated</td></tr>
<tr><td><b>Condensation</b></td><td>gas to liquid</td><td>cooled</td></tr>
<tr><td><b>Sublimation</b></td><td>solid straight to gas (no liquid stage)</td><td>heat added and/or pressure reduced</td></tr>
<tr><td><b>Deposition</b></td><td>gas straight to solid (no liquid stage)</td><td>cooled</td></tr>
</table>
<h3>Heat and molecules</h3>
<ul>
<li>Bonds between molecules = <b>tiny invisible strings</b> that hold them together.</li>
<li>Heating ice: the heat energy <b>breaks the bonds</b>; the temperature stays the same until all the ice has melted.</li>
<li>Heated molecules gain <b>kinetic energy</b>: they vibrate and move more rapidly, move more freely and are less tightly packed.</li>
<li>Cooling = the <b>opposite</b>: the absorbed energy is <b>released</b>, molecules slow down, pack more tightly and form <b>new bonds</b> (rigid structure: ice).</li>
</ul>
<h3>Points</h3>
<ul>
<li><b>Melting point</b>: the temperature at which a solid becomes a liquid.</li>
<li>Freezing: liquid cooled below its <b>freezing point</b> (depends on <b>pressure</b> and <b>impurities</b>).</li>
<li>Condensation: gas cooled below its <b>dew point</b>.</li>
<li>Deposition: gas cooled below its <b>sublimation point</b> (frost, snowflakes).</li>
</ul>
<h3>Examples</h3>
<ul><li>popsicle melting, ice cubes freezing, dry ice sublimating, snowflakes and frost from deposition</li></ul>`,
    Q:[
    Object.assign(fill('Phase changes are ___ changes of matter: matter changes from one physical ___ to another.',['physical','state'],['physical','state','chemical','colour'],'A phase change only changes the physical state of matter (solid, liquid or gas). It is a physical change.',SC+', slides 1-2'),{ng:['physical state','state','phase']}),
    label('Label the phase-change map! Choose the correct name for each number. (Red arrow = heat added, blue arrow = heat taken away.)',PHASE_SVG,PHASE_PTS,'Heated: melting (solid to liquid), evaporation (liquid to gas), sublimation (solid straight to gas). Cooled: freezing (liquid to solid), condensation (gas to liquid), deposition (gas straight to solid).',SC+', slide 3'),
    multi('Tick ALL the phase changes that happen when heat is TAKEN AWAY (cooling).',['Freezing','Condensation','Deposition'],['Melting','Evaporation','Sublimation'],'Freezing, condensation and deposition happen through cooling. Melting, evaporation and sublimation are the opposite changes, through heating.',SC+', slides 3, 7 and 12'),
    hotspot('Tap the arrow that shows freezing.',PHASE_SVG,PHASE_PTS,'Freezing','Freezing is the blue arrow from LIQUID to SOLID: heat is taken away and the liquid becomes a solid.',SC+', slides 3 and 13'),
    hotspot('A gas turns straight into a solid, with no liquid stage. Tap the arrow for this phase change.',PHASE_SVG,PHASE_PTS,'Deposition','Deposition is the blue arrow along the top: GAS straight to SOLID. It can form frost and snowflakes.',SC+', slides 3 and 15'),
    sort('Which state does the matter START in? Sort the phase changes.',['Starts as a solid','Starts as a liquid','Starts as a gas'],[
      ['Melting',0],['Sublimation',0],
      ['Freezing',1],['Evaporation',1],['Boiling',1],
      ['Condensation',2],['Deposition',2]],
      'Melting and sublimation start with a solid. Freezing, evaporation and boiling start with a liquid. Condensation and deposition start with a gas.',SC+', slides 8-15'),
    tf('When ice is heated, its temperature goes up at once and keeps rising while it melts.',false,'No! The heat is used to break the bonds between the molecules, so the temperature stays the same until all of the ice has melted.',SC+', slide 5'),
    spot('Find the mistake and tap it.','When ice absorbs heat, its molecules move around [[less|more]] freely and become less tightly packed.','Heat lets the molecules of the ice move around MORE freely and become less tightly packed.',SC+', slide 5'),
    Object.assign(mc('What happens to the molecules of a liquid when it freezes?','They are held in fixed positions',['They move around more rapidly and freely','They break the bonds between the molecules','They collide with each other more frequently'],'When a liquid is cooled below its freezing point, its molecules become strong enough to hold each other in fixed positions.',SC+', slide 13'),{ng:['hold','fixed position']}),
    mc('As water is cooled down, what happens to its molecules?','They slow down and move less',['They speed up and move more rapidly','They break more bonds between them','They get farther apart'],'Cooling is the opposite of heating: the absorbed heat energy is released, so the molecules slow down and move less.',SC+', slide 6'),
    Object.assign(mc('Why does a solid sometimes change straight into a gas in sublimation?','It cannot melt at that temperature and pressure',['Its molecules stop moving before the change starts','It becomes a liquid for a very short time first','It always loses heat while it is changing'],'In sublimation the temperature and pressure are such that the solid cannot melt, so it goes directly into the gas phase.',SC+', slide 11'),{ng:['melt','temperature','pressure']}),
    mc('Which of these forms when a gas changes straight into a solid?','Frost',['Ice cubes made from water','A melting popsicle','Dry ice turning into a gas'],'Frost, snowflakes and other ice crystals can form by deposition. Ice cubes form by freezing a liquid.',SC+', slides 13 and 15'),
    order('Cool a gas down until it becomes a solid. Put the steps in order.',[
      'The matter is a gas',
      'It is cooled below its dew point and condenses',
      'The matter is a liquid',
      'It is cooled below its freezing point and freezes',
      'The matter is a solid'],
      'A gas condenses into a liquid below its dew point. The liquid freezes into a solid below its freezing point.',SC+', slides 13 and 14'),
    scramble('The temperature at which a solid becomes a liquid.','melting point','The melting point is the temperature at which a solid becomes a liquid.',UV),
    tf('The freezing point of a substance is always the same, whatever the pressure or impurities.',false,'No - the freezing point depends on factors such as pressure and the presence of impurities.',SC+', slide 13'),
    typed('Type the name of the phase change in which a liquid becomes a solid.',['freezing'],'Freezing: a liquid is cooled below its freezing point and becomes a solid.',SC+', slide 13'),
    Object.assign(fill('When a solid is heated, the kinetic ___ of its molecules increases, so they ___ and move more rapidly.',['energy','vibrate'],['energy','vibrate','pressure','condense'],'Heat raises the kinetic energy of the molecules. They vibrate and move more rapidly.',SC+', slide 8'),{ng:['energy','vibrate','pressure']}),
    mc('What happens to the bonds between molecules as water keeps cooling down?','New bonds start to form',['All the bonds between them are broken','No bonds are formed or broken','The molecules move around more freely'],'As the temperature keeps decreasing, the molecules become more tightly packed and begin to form new intermolecular bonds between each other.',SC+', slide 6'),
    spot('Find the mistake and tap it.','You can think of the bonds between molecules as tiny [[visible|invisible]] strings that hold the molecules together.','Bonds are like tiny INVISIBLE strings that hold the molecules together.',SC+', slide 5'),
    tf('Condensation happens when a gas is cooled below its dew point and its molecules come closer together to form a liquid.',true,'Yes - below its dew point the molecules of a gas come closer together and form a liquid.',SC+', slide 14'),
    Object.assign(mc('A gas changes straight into a solid, with no liquid stage. Its temperature was lowered below which point?','The sublimation point',['The dew point of the gas','The melting point of a solid','The boiling point of a liquid'],'In deposition the temperature of a gas is lowered below its sublimation point, and the gas forms a solid without first becoming a liquid.',SC+', slide 15'),{ng:['sublimation point']})
    ]},

  { id:'boilevap', ico:'💨', name:'Boiling, Evaporation & Points', blurb:'Two ways a liquid becomes a gas, plus the words melting point, boiling point and property', col:'#17c1e8',
    sheet:`<h3>Boiling vs evaporation</h3>
<table>
<tr><th></th><th>Boiling</th><th>Evaporation</th></tr>
<tr><td><b>Change</b></td><td>liquid to gas</td><td>liquid to gas</td></tr>
<tr><td><b>Where</b></td><td>particles <b>throughout</b> the liquid become a gas</td><td>the <b>more energetic molecules near the surface</b> escape into the air</td></tr>
<tr><td><b>Temperature</b></td><td>increase in temperature and pressure</td><td><b>below</b> the boiling point</td></tr>
<tr><td><b>Molecules</b></td><td>move around more rapidly and collide more frequently</td><td>surface molecules get energy and escape as gas molecules</td></tr>
<tr><td><b>Ends</b></td><td colspan="2">can go on until all of the liquid has become a gas</td></tr>
</table>
<h3>Words</h3>
<ul>
<li><b>Boiling point</b>: the temperature at which particles throughout a liquid become a gas.</li>
<li><b>Melting point</b>: the temperature at which a solid becomes a liquid.</li>
<li><b>Property</b>: something about a substance that allows us to tell it apart from other substances.</li>
</ul>`,
    Q:[
    Object.assign(mc('What is the boiling point of a liquid?','The temperature at which particles throughout a liquid become a gas',['The temperature at which a solid becomes a liquid','The temperature at which a gas becomes a liquid','The temperature at which only the molecules at the surface escape as a gas'],'The boiling point is the temperature at which particles THROUGHOUT a liquid become a gas, not just the ones at the surface.',UV),{ng:['throughout','particle']}),
    scramble('Something about a substance that allows us to tell it apart from others.','property','A property is something about a substance that allows us to tell it apart from other substances.',UV),
    typed('Type the term (two words) for the temperature at which particles throughout a liquid become a gas.',['boiling point','the boiling point','boiling-point'],'Boiling point (two words): the temperature at which particles throughout a liquid become a gas.',UV),
    spot('Find the mistake and tap it.','The boiling point is the temperature at which particles throughout a liquid become a [[solid|gas]].','At the boiling point, particles throughout the liquid become a GAS. A liquid becoming a solid is freezing.',UV+'; '+SC+', slide 13'),
    tf('In boiling, only the molecules at the surface of the liquid turn into a gas.',false,'No - at the boiling point particles throughout the liquid become a gas, not only the ones at the surface. Surface molecules escaping is how evaporation is described.',UV+' (boiling point); '+SC+', slides 9-10'),
    mc('Why can a liquid evaporate at a temperature below its boiling point?','Its energetic surface molecules can escape into the air',['All of its molecules gain enough energy at the very same moment','The whole liquid has already reached its boiling point','It has already turned into a solid'],'Evaporation does not need the whole liquid to reach the boiling point. Energetic molecules near the surface escape as gas molecules.',SC+', slide 10'),
    odd('Odd one out! Three phase changes start with a LIQUID. Tap the card that does not belong.','Melting',['Boiling','Evaporation','Freezing'],'Boiling, evaporation and freezing all start with a liquid. Melting starts with a solid.',SC+', slides 8-10 and 13'),
    sort('Evaporation, boiling or both? Sort the descriptions.',['Evaporation','Boiling','Both'],[
      ['Happens at a temperature below the boiling point',0],
      ['The energy is supplied to the surface molecules',0],
      ['Particles throughout the liquid become a gas',1],
      ['Happens when the liquid reaches its boiling point',1],
      ['A liquid changes into a gas',2],
      ['Can go on until all of the liquid has become a gas',2],
      ['Added energy makes it happen',2]],
      'Both: liquid to gas, energy needed, can go on until all the liquid is a gas. Evaporation: below the boiling point, surface molecules. Boiling: throughout the liquid, when it reaches its boiling point.',SC+', slides 9-10; '+UV),
    order('Boiling: put what happens in order.',[
      'A liquid is heated and energy is added to it',
      'The molecules move around more rapidly and collide more frequently',
      'This goes on until all of the liquid has become a gas'],
      'The added energy makes the molecules move more rapidly and collide more often, until all of the liquid has changed into a gas.',SC+', slide 9'),
    multi('Tick ALL the things that are true about boiling.',['A liquid changes into a gas','It happens due to an increase in temperature and pressure','The molecules collide with each other more frequently'],['It changes a gas into a liquid','It only happens at the surface of the liquid'],'Boiling: liquid to gas, because temperature and pressure increase, with molecules colliding more often. It happens throughout the liquid, not only at the surface.',SC+', slide 9; '+UV),
    tf('Both boiling and evaporation can go on until all of the liquid has become a gas.',true,'Yes - in both processes the change can continue until all of the liquid has been converted into gas.',SC+', slides 9-10'),
    hotspot('A liquid is exposed to air and its more energetic surface molecules escape as gas. Tap the arrow for this phase change.',PHASE_SVG,PHASE_PTS,'Evaporation','Evaporation is the red arrow from LIQUID to GAS: energy is added and surface molecules escape.',SC+', slides 3 and 10'),
    write('Explain what happens to the molecules when a liquid evaporates, and how this is different from boiling.',['surface|the top|top of|upper','energetic|more energy|energy','below|lower than|less than|under the boiling','throughout|whole|everywhere|all the liquid|all of the liquid|inside'],'In evaporation, the more energetic molecules near the surface escape into the air as gas, and it happens below the boiling point. In boiling, particles throughout the liquid become a gas.','Evaporation: energetic surface molecules escape, below the boiling point. Boiling: particles throughout the liquid become a gas.',SC+', slides 9-10; '+UV)
    ]}

  ],
  vocab: [],
  glossary: [
    ['properties|property','свойство'],
    ['tell apart|tell it apart','отличить, отличать'],
    ['throughout','по всему объему'],
    ['impurity|impurities','примеси'],
    ['dew point','точка росы'],
    ['freezing point','точка замерзания'],
    ['kinetic','кинетический (связанный с движением)'],
    ['vibrate','колебаться, вибрировать'],
    ['hold|held','удерживать']
  ]
};

/* ---- part-dissolve.js ---- */
const PART_DISSOLVE = {
  topics: [

    { id:'solutions', ico:'🧂', name:'Dissolving: Solute, Solvent & Solution', blurb:'Soluble or insoluble, solute + solvent = solution, and why dissolving is a reversible physical change', col:'#39ff14',
      sheet:`<h3>Dissolving: the key facts (Lesson 2.3)</h3>
<ul>
<li><b>Soluble</b> = can dissolve in a liquid to form a clear mixture. <b>Table salt</b> and <b>sugar</b> are soluble solids.</li>
<li><b>Insoluble</b> = cannot dissolve in that liquid. <b>Sand</b> and <b>chalk</b> sink or float and leave visible bits, however long you stir.</li>
<li>The sugar in warm tea does <b>not</b> disappear: it is still there (you can taste the sweetness).</li>
</ul>
<table>
<tr><th>Word</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>solute</b></td><td>the substance in a solution that is dissolved (the solid that dissolves into the liquid)</td><td>salt, sugar</td></tr>
<tr><td><b>solvent</b></td><td>the liquid that does the dissolving</td><td>water</td></tr>
<tr><td><b>solution</b></td><td>the mixture in which the solute is evenly spread through the solvent</td><td>salty water</td></tr>
<tr><td><b>uniform</b></td><td>the same throughout</td><td>evenly spread = the same throughout</td></tr>
</table>
<ul>
<li>Dissolving is a <b>physical change</b> (a change that does not turn a substance into a different substance). It is <b>not</b> a chemical reaction: no brand new substances are made.</li>
<li>The solute particles break apart and spread out among the solvent particles.</li>
<li>So it is <b>reversible</b> (can be changed back): evaporate the water and the solid crystals stay behind.</li>
<li><b>Total mass is conserved</b>: 10 g salt + 100 g water = 110 g solution.</li>
<li>To <b>stir</b> = to mix, which speeds dissolving up.</li>
<li><b>Reversible</b> = can be changed back. <b>Irreversible</b> = cannot be changed back.</li>
</ul>`, Q:[
 Object.assign(tf('If you cannot see the sugar any more after stirring it into warm tea, the sugar has vanished into thin air.',false,'No! The sugar is still in the tea - you can still taste the sweetness.',DS+', slide 2'),{ng:['vanish']}),
 Object.assign(mc('What does the word "uniform" mean?','The same throughout',['Able to dissolve in a liquid','Changed back to how it was before','Not able to dissolve in a liquid'],'Uniform means the same throughout - a solute that is evenly spread through the solvent is the same throughout.',UV),{ng:['uniform','throughout']}),
 Object.assign(odd('Odd one out! Two of these are solids that dissolve. Tap the card that does not belong.','Water',['Table salt','Sugar'],'Table salt and sugar are the solids that dissolve (solutes). Water is the liquid that does the dissolving (the solvent).',DS+', slide 5'),{ng:['dissolve']}),
 Object.assign(sort('In salty water: is it the solute, the solvent or the solution? Sort the cards.',['Solute','Solvent','Solution'],[
   ['The salt',0],['The solid that dissolves',0],
   ['The water',1],['The liquid that does the dissolving',1],
   ['The salty water as a whole',2],['The evenly spread mixture',2]],
   'Solute (salt) + solvent (water) = solution (salty water): the mixture in which the solute is evenly spread through the solvent.',DS+', slide 5; '+UV),{ng:['solute','solvent','solution']}),
 spot('Find the mistake and tap it.','Sand and chalk are [[soluble|insoluble]] in water: visible bits stay however long you stir.','Sand and chalk are INSOLUBLE: they cannot dissolve, so they sink or float and leave visible bits.',DS+', slide 4'),
 Object.assign(scramble('Describes a substance that is the same all the way through.','uniform','Uniform = the same throughout. A solute that is evenly spread through the solvent is the same throughout.',UV),{ng:['uniform']}),
 multi('Tick ALL the true things about a solution of salt in water.',['The salt is spread evenly through the water','No brand new substance is made','The salt particles have broken apart and spread out'],['The salt has changed into a brand new substance','Its mass is less than the salt and water added together','The salt has been destroyed'],'Dissolving is a physical change: the solute particles break apart and spread out among the solvent particles, evenly. Nothing is made or lost, so the total mass stays the same.',DS+', slides 5-6; '+UV),
 typed('A salty water solution has a mass of 110 g. It was made with 100 g of water. How many grams of salt were dissolved? Type the number.',['10','10 g','10g','10 grams','10 gram'],'Total mass is conserved, so salt + water = solution. 110 g - 100 g = 10 g of salt.',DS+', slide 6','g'),
 slider('You dissolve 5 g of sugar in 100 g of water. What is the mass of the solution?',{min:90,max:130,step:5,unit:'g'},105,0,'Total mass is conserved: 5 g + 100 g = 105 g of solution. Nothing disappears when something dissolves.',DS+', slide 6'),
 mc('Why can dissolving be reversed?','It is a physical change',['It is a chemical reaction that simply runs backwards','The solvent turns into a completely different substance','The solute is destroyed and then made again'],'In a physical change no new substance is made, so the solid can be got back by evaporating the water.',DS+', slide 6'),
 mc('Which pair are BOTH soluble solids?','Salt and sugar',['Sand and chalk','Sugar and sand','Table salt and chalk'],'Table salt and sugar dissolve to form a clear mixture. Sand and chalk are insoluble.',DS+', slide 4'),
 tf('An insoluble substance cannot dissolve in that liquid, however long you stir it.',true,'Yes. An insoluble substance cannot dissolve in that liquid - visible bits stay however long you stir.',DS+', slide 4'),
 Object.assign(match('Match each word to its meaning.',[
   ['Soluble','Can dissolve in a liquid to form a clear mixture'],
   ['Insoluble','Cannot dissolve in that liquid'],
   ['Dissolving rate','How fast something dissolves']],
   'Soluble things dissolve to form a clear mixture, insoluble things cannot dissolve in that liquid, and the dissolving rate is how fast something dissolves.',DS+', slides 4-5'),{ng:['soluble','insoluble','rate','dissolve']}),
 mc('Dissolving salt in water is reversible. What does "reversible" mean?','It can be changed back to the way it was before',['It cannot be changed back to the way it was before','It makes a brand new substance','It is a chemical reaction, not a physical change'],'Reversible means it can be changed back. Dissolving is reversible: evaporate the water and the salt crystals remain.',UV+'; '+DS+', slide 6')
 ]},

    { id:'dissrate', ico:'⚡', name:'Dissolving Faster: Particles', blurb:'How water particles pull a crystal apart, and why heat and stirring speed it up', col:'#a78bfa',
      sheet:`<h3>The particle model of dissolving (Lesson 2.3)</h3>
<ul>
<li><b>Rate</b> = how fast something happens. <b>Dissolving rate</b> = how fast something dissolves.</li>
<li>In a solid <b>crystal</b> the solute particles are <b>tightly packed in orderly rows</b>.</li>
<li><b>Water particles</b> are constantly moving and bumping against the crystal. They pull individual solute particles away and fit them into the gaps between the liquid particles.</li>
</ul>
<h3>Heat: a chain of 3 steps</h3>
<ol>
<li><b>More thermal energy</b>: heating the solvent transfers thermal energy to the liquid particles.</li>
<li><b>Faster collisions</b>: the particles move faster and collide with the solute more often and harder.</li>
<li><b>Rapid dissolving</b>: solute particles are broken away much faster, so the rate goes up.</li>
</ol>
<h3>Why stirring helps</h3>
<ul>
<li>In still water the dissolved particles linger right next to the crystal surface and <b>block fresh water</b> from reaching it.</li>
<li>Stirring <b>sweeps the dissolved particles away</b> and constantly brings <b>fresh solvent</b> particles to the solid.</li>
</ul>
<p><b>Hot water vs cold:</b> hot water particles move faster and collide with the sugar more frequently, so sugar dissolves much faster.</p>`, Q:[
 label('Label the particle picture! Choose the correct name for each number.',DISS_SVG,DISS_PTS,'In the crystal the solute particles are packed in rows. The water particles pull them away, and the dissolved solute particles spread out between the water particles.',DS+', slide 7'),
 hotspot('Tap the particles that pull solute particles away from the crystal.',DISS_SVG,DISS_PTS,'Water particles','The water particles move all the time. They bump the crystal, pull solute particles away and fit them into the gaps between the liquid particles.',DS+', slide 7'),
 Object.assign(mc('In science, what does "rate" mean?','How fast something happens',['How much of something there is','How hot something is','How long ago something happened'],'Rate = how fast something happens. The dissolving rate is how fast something dissolves.',UV+'; '+DS+', slide 5'),{ng:['rate']}),
 mc('What do the moving water particles do to a solid crystal?','Bump it and pull solute particles away',['Turn its particles into brand new particles','Pack its particles even more tightly','Push its particles together into orderly rows'],'Water particles bump against the crystal, pull individual solute particles away and fit them into the gaps between the liquid particles.',DS+', slide 7'),
 tf('In a glass of water, only the solute particles move - the water particles stay still.',false,'No! Water particles are constantly moving and bumping against the crystal.',DS+', slide 7'),
 order('Stirring: put the story in order.',[
   'A solid sits in still water',
   'Dissolved particles linger next to the crystal surface and block fresh water',
   'You stir the mixture',
   'The dissolved particles are swept away from the crystal',
   'Now fresh solvent particles can reach the solid'],
   'In still water the dissolved particles block fresh water. Stirring sweeps them away and brings fresh solvent to the solid.',DS+', slide 9'),
 Object.assign(spot('Find the mistake and tap it.','In still water, the dissolved particles linger [[far from|right next to]] the crystal surface and block fresh water from reaching it.','In still water the dissolved particles stay RIGHT NEXT TO the crystal and block fresh water. That is why stirring helps.',DS+', slide 9'),{ng:['linger']}),
 multi('Tick ALL the things that happen when a solvent is heated.',['The liquid particles get more thermal energy','The particles move faster','The particles collide with the solute more often and harder'],['The gaps between the water particles disappear','The solute particles are destroyed','The solute changes into a new substance'],'Heating gives the liquid particles more thermal energy. They move faster and hit the solute more often and harder, so solute particles break away faster.',DS+', slides 8, 10'),
 odd('Odd one out! Two cards make a solid dissolve faster. Tap the card that does not belong.','Leaving the mixture still',['Heating the water','Stirring'],'Heating the water and stirring both increase the dissolving rate. Leaving the mixture still does not help.',DS+', slides 8-9'),
 order('Heating a solvent: put the steps in order.',[
   'The liquid particles get more thermal energy',
   'The particles move faster and collide with the solute more often and harder',
   'Solute particles break away much faster'],
   'Heating gives the liquid particles more thermal energy. They move faster and collide harder, so solute particles break away much faster.',DS+', slide 8'),
 scramble('To bump into each other. Hot water particles do this more often and harder.','collide','Particles in hot water move faster and collide with the solute more often and harder.',DS+', slide 8'),
 tf('Heating the solvent makes the solute particles break away faster.',true,'Yes! Hot particles move faster and collide harder, so solute particles break away much faster and the rate goes up.',DS+', slide 8'),
 mc('In still water, what stops fresh water from reaching the crystal?','Dissolved particles right next to it',['The water particles all stop moving','The gaps between the water particles disappear','The solute particles are destroyed by the water'],'The dissolved particles linger right next to the crystal and block fresh water. Stirring sweeps them away.',DS+', slide 9'),
 write('Use the particle model to explain why stirring makes a solid dissolve faster.',['sweep|swept|away from','fresh|new water|new solvent','block|linger|next to|in the way'],'In still water the dissolved particles linger next to the crystal and block fresh water. Stirring sweeps them away and brings fresh solvent particles to the solid, so it dissolves faster.','Stirring sweeps dissolved particles away and brings fresh solvent to the solid.',DS+', slide 9'),
 mc('Why does sugar dissolve much faster in hot water than in cold water?','Hot water particles move faster and collide with sugar more often',['Heating removes all the gaps between the water particles','Cold water destroys the sugar particles before they can separate','Hot water melts the sugar into a liquid through a chemical reaction that makes new substances'],'Hot water particles move faster, so they collide with the sugar more often and pull its particles away faster.',DS+', slides 10-11'),
 Object.assign(mc('What does it mean to stir a mixture?','Mix it to speed up dissolving',['Heat it so its particles move faster','Leave it still so the particles settle','Take the solid out of the liquid'],'To stir means mixing, which speeds dissolving up: it sweeps dissolved particles away and brings fresh solvent to the solid.',DS+', slides 5, 9'),{ng:['stir','speed up']})
 ]}

  ],
  vocab: [],
  glossary: [
    ['solute','растворенное вещество (то, что растворяется)'],
    ['solvent','растворитель'],
    ['solution','раствор'],
    ['soluble','растворимый'],
    ['insoluble','нерастворимый'],
    ['uniform','однородный'],
    ['throughout','по всему объему'],
    ['reversible','обратимый'],
    ['irreversible','необратимый'],
    ['rate','скорость (как быстро происходит)'],
    ['physical change','физическое изменение'],
    ['thermal','тепловой'],
    ['sugar','сахар'],
    ['salt|salty','соль (соленый)'],
    ['tea','чай'],
    ['sweetness','сладость'],
    ['grain','крупинка'],
    ['linger','задерживаться, мешкать'],
    ['block','блокировать, мешать'],
    ['sweep away|swept away','смести, унести']
  ]
};

/* ---- part-reactions.js ---- */
const PART_REACTIONS = (function(){
const NG=(q,...t)=>Object.assign(q,{ng:t});
return {
topics: [

/* ===================== 2.3 Reversible & Irreversible Changes ===================== */
{id:'changes', ico:'↩️', name:'Reversible & Irreversible Changes (2.3)', blurb:'Physical change, reversible, irreversible - which changes can be undone?', col:'#ffd23f',
sheet:`<h3>Physical change</h3>
<ul>
<li><b>Physical change</b> = any change that does <b>not</b> change a substance into a different substance.</li>
<li><b>Reversible</b> = can be changed back to the way it was before. <b>Irreversible</b> = cannot be changed back.</li>
</ul>
<h3>Dissolving is a physical change</h3>
<ul>
<li>It is <b>not</b> a chemical reaction: no brand new substances are created.</li>
<li>The solute particles break apart and spread out among the solvent particles.</li>
<li>It can be reversed: <b>evaporate the water and the solid crystals remain</b>.</li>
<li>Mass is conserved: 10 g of salt + 100 g of water = 110 g of solution.</li>
</ul>
<h3>Opposite changes</h3>
<table>
<tr><td>melting (solid to liquid)</td><td>freezing (liquid to solid)</td></tr>
<tr><td>evaporation (liquid to gas)</td><td>condensation (gas to liquid)</td></tr>
<tr><td>sublimation (solid to gas)</td><td>deposition (gas to solid)</td></tr>
</table>
<ul>
<li>Heating makes ice melt. Cooling is the <b>opposite</b>: the water particles slow down and form ice again.</li>
<li>The other pairs go in opposite directions too.</li>
</ul>
<h3>Irreversible chemical changes</h3>
<ul>
<li>New substances are formed and the change <b>cannot easily be reversed</b>.</li>
<li>Examples: elephant toothpaste, cooking an egg, iodine and vitamin C, baking soda and vinegar.</li>
</ul>`, Q:[
 NG(mc('What is a physical change?','A change that does not make a different substance',['A change that makes a brand new substance','A change that can never be changed back','A change that only happens when something is heated'],'A physical change does not turn a substance into a different substance. It can be a state change, or dissolving.',UV+'; '+DS+', slide 6'),'physical change'),
 NG(match('Match each word to its meaning.',[
   ['Reversible','Can be changed back to the way it was before'],
   ['Irreversible','Cannot be changed back to the way it was before'],
   ['Physical change','A change that does not make a different substance'],
   ['Chemical reaction','A change in which new substances are made']],
   'Reversible: it can be undone. Irreversible: it cannot be undone. A physical change keeps the same substance. In a chemical reaction new substances form.',UV+'; '+PS),'reversible','irreversible','physical change'),
 odd('Odd one out! Three cards are physical changes. Tap the one that is NOT.','Vinegar reacting with baking soda',['Sugar dissolving in tea','Ice melting into water','Water evaporating'],'Vinegar and baking soda react and make new substances, so that is a chemical reaction. The other three do not make a new substance.',DS+', slide 6; '+SC+', slides 1, 8, 10; '+PS),
 spot('Find the mistake and tap it.','Dissolving is a physical change, so it [[cannot|can]] be reversed.','Dissolving can be reversed. If you evaporate the water, the solid crystals remain behind.',DS+', slide 6'),
 multi('Tick ALL the true statements about dissolving.',['It is a physical change','No brand new substances are created','It can be reversed by evaporating the water'],['It is a chemical reaction','The solute is destroyed'],'Dissolving is a physical change. The solute particles spread out among the solvent particles and no new substance is made.',DS+', slides 6-7'),
 NG(sort('Reversible or irreversible? Can the change be changed back?',['Reversible','Irreversible (cannot easily be changed back)'],[
   ['Salt dissolving in water',0],['Sugar dissolving in tea',0],['Ice melting into water',0],['Water freezing into ice',0],
   ['Baking soda reacting with vinegar',1],['Cooking an egg',1],['Making elephant toothpaste',1]],
   'Dissolving, melting and freezing are physical changes that can be undone. Baking soda with vinegar, cooking an egg and elephant toothpaste make new substances and are not easily reversed.',DS+', slides 2, 6; '+SC+', slides 3, 6; '+PS+'; '+PJ),'reversible','irreversible'),
 order('Salt in water: put the steps in order, from salt crystals to getting the salt back.',[
   'Salt crystals are put in water',
   'Water particles pull solute particles away from the crystal',
   'The solute particles spread out among the water particles',
   'The water is evaporated',
   'The solid salt crystals remain'],
   'The crystal breaks apart and spreads out, so a solution forms. Evaporating the water leaves the crystals behind.',DS+', slides 6-7'),
 NG(fill('Dissolving makes no brand new substance, so it is a ___ change. It can be changed back, so it is ___.',['physical','reversible'],['physical','chemical','reversible','irreversible'],'No brand new substance is made when something dissolves, so it is a physical change. It can be changed back, so it is reversible.',DS+', slide 6'),'reversible','changed back','irreversible','chemical'),
 scramble('Can be changed back to the way it was before.','reversible','Reversible: it can be changed back. The opposite word is irreversible.',UV),
 tf('Dissolving is a physical change.',true,'Yes. No brand new substance is made: the solute particles just spread out among the solvent particles.',DS+', slide 6'),
 write('Salt is dissolved in water. How can you get the salt back, and why does this work?',['evaporat','crystal|solid|left|remain','physical|reversible|no new|not a new|no brand new|not make a new|does not make a new|doesn'],'Evaporate the water and the salt crystals remain. This works because dissolving is a physical change, so no new substance is made.','Dissolving is a physical change, so it can be reversed. If the water evaporates, the solid crystals remain.',DS+', slide 6'),
 NG(mc('A change makes new substances and cannot easily be reversed. What kind of change is it?','An irreversible chemical change',['A physical change that can be undone','A phase change such as melting','Dissolving in water'],'New substances that cannot easily be changed back mean an irreversible chemical change.',PJ+'; '+PS),'irreversible')
]},

/* ===================== 2.4 Chemical Reactions ===================== */
{id:'reactions', ico:'🧪', name:'Chemical Reactions (2.4)', blurb:'Evidence, react, reactants, products - and the vinegar and baking soda experiment', col:'#ff5a36',
sheet:`<h3>Key words</h3>
<table>
<tr><td><b>react</b></td><td>to interact and change to make a new substance (also: to respond to something)</td></tr>
<tr><td><b>reactants</b></td><td>the substances that react together in a chemical reaction</td></tr>
<tr><td><b>products</b></td><td>the new substances that form in chemical reactions</td></tr>
<tr><td><b>evidence</b></td><td>the things we know that show us that something has happened or changed</td></tr>
</table>
<h3>Vinegar + baking soda</h3>
<ul>
<li>Bubbles start forming immediately. The mixture becomes <b>fizzy and foamy</b>; the foam rises up the cup.</li>
<li>Vinegar and baking soda <b>react</b> with each other and <b>produce new substances</b>.</li>
<li>Fizzing and foam <b>show</b> that a chemical reaction has happened.</li>
<li><b>Bubbles are evidence of gas production</b>. Carbon dioxide gas causes the bubbles.</li>
<li>Real life: used in cleaning products to remove dirt.</li>
</ul>
<h3>Careful with evidence</h3>
<ul>
<li>A <b>colour change alone</b> does not prove an irreversible reaction.</li>
<li>Iodine + vitamin C: vitamin C reacts with iodine and changes its colour.</li>
</ul>
<h3>The four project experiments</h3>
<table>
<tr><td>1 Elephant toothpaste</td><td>hydrogen peroxide, dry yeast, warm water, dishwashing liquid</td></tr>
<tr><td>2 Cooking an egg</td><td>an egg, a pan or pot, a heat source (with adult help)</td></tr>
<tr><td>3 Iodine and vitamin C</td><td>iodine solution, vitamin C tablet, water</td></tr>
<tr><td>4 Green fizzy eruption</td><td>baking soda, vinegar, green food colouring</td></tr>
</table>`, Q:[
 NG(mc('Vinegar and baking soda are mixed and they react. What are vinegar and baking soda called?','Reactants',['Products','Evidence','Properties'],'Reactants are the substances that react together in a chemical reaction.',UV+'; '+PS),'reactant','reactants','product','products','evidence','react'),
 Object.assign(mc('What does it mean when substances react?','They interact to make a new substance',['They dissolve and spread out evenly','They change state but stay the same substance','They stay exactly the same'],'To react means to interact and change to make a new substance.',UV),{ng:['react']}),
 odd('Odd one out! Three cards are signs of a chemical reaction. Tap the card that is NOT.','Vinegar in a clear cup',['Bubbles start forming','The mixture becomes fizzy','Foam rises up the cup'],'Vinegar in a clear cup is the start, before the baking soda is added. Bubbles, fizzing and foam show that a chemical reaction has happened.',PS),
 spot('Find the mistake and tap it.','When baking soda is added to vinegar, bubbles form and the mixture becomes [[flat|fizzy]].','The mixture becomes fizzy and foamy. That fizzing is a sign of a chemical reaction.',PS),
 tf('A colour change alone proves that an irreversible reaction has happened.',false,'A colour change on its own is not enough proof of an irreversible reaction. You need more evidence.',RB),
 mc('In the vinegar and baking soda reaction, bubbles are evidence of what?','Gas being produced',['A new solid being made','Water freezing into ice','A colour change happening'],'Bubbles are evidence of gas production. Carbon dioxide gas causes the bubbles.',RB),
 mc('What causes the bubbles when vinegar and baking soda react?','Carbon dioxide gas',['Green food colouring','Iodine solution','Vitamin C'],'Carbon dioxide gas is made in the reaction and it causes the bubbles.',RB),
 NG(fill('Vinegar and baking soda ___ with each other. This reaction produces new ___.',['react','substances'],['react','substances','evidence'],'They react with each other, and the reaction produces new substances.',PS),'react','substance','evidence'),
 order('Vinegar and baking soda: put the steps of the method in order.',[
   'Pour some vinegar into a clear cup',
   'Add a spoon of baking soda',
   'Stir the mixture gently',
   'Observe what happens',
   'Record your observations with photos or drawings'],
   'First pour the vinegar, then add the baking soda and stir gently. After that you observe what happens and record it.',PS),
 sort('Which experiment? Sort each material into the experiment it is used in.',['Elephant toothpaste','Cooking an egg','Iodine and vitamin C','Green fizzy eruption'],[
   ['Hydrogen peroxide',0],['Dry yeast',0],['Dishwashing liquid',0],
   ['An egg',1],['Iodine solution',2],['Vitamin C tablet',2],
   ['Baking soda',3],['Vinegar',3],['Green food colouring',3]],
   'Each project experiment has its own materials: the egg is cooked, iodine meets vitamin C, and baking soda meets vinegar.',PJ),
 NG(tf('Baking soda and vinegar are used in cleaning products, and the reaction helps to remove dirt.',true,'Yes. The reaction of baking soda and vinegar can be used to clean surfaces at home.',PS),'products'),
 mc('Which explanation is right for the iodine and vitamin C experiment?','Vitamin C reacts with iodine and changes its colour',['Vitamin C only dissolves in the water, so nothing reacts','Vitamin C boils as soon as it touches the iodine','The iodine solution evaporates and nothing is left'],'The vitamin C reacts with the iodine and changes its colour.',RB),
 write('You mix vinegar and baking soda and a chemical reaction happens. What is the evidence, and what is made? Use the word "evidence".',['evidence','bubbl|fizz|foam','new substance|new thing|gas'],'The evidence is that bubbles form and the mixture becomes fizzy and foamy. New substances are formed, so a chemical reaction has happened.','Fizzing and foam show that a chemical reaction has happened, and the reaction produces new substances.',PS+'; '+RB)
]},

/* ===================== Bonus: Working like a scientist ===================== */
{id:'scientist', ico:'📝', name:'Working Like a Scientist (project)', blurb:'Aim, hypothesis, method, results, conclusion, limitations', col:'#8b5cf6', bonus:true,
sheet:`<h3>The six parts of a science report</h3>
<table>
<tr><td><b>1 Aim / Question</b></td><td>What are you investigating?</td></tr>
<tr><td><b>2 Hypothesis</b></td><td>What do you think will happen? "I think ... because ..."</td></tr>
<tr><td><b>3 Method</b></td><td>What did you do? Write the steps.</td></tr>
<tr><td><b>4 Results / Findings</b></td><td>What happened? Photos or drawings.</td></tr>
<tr><td><b>5 Conclusion</b></td><td>Was your hypothesis correct? What did you learn?</td></tr>
<tr><td><b>6 Limitations</b></td><td>What could have affected your results? What would you do differently?</td></tr>
</table>
<h3>Good examples</h3>
<ul>
<li>Hypothesis: "I predict fizzing will occur when vinegar is added to baking soda."</li>
<li>Safe method: use a tray and list the steps. Cooking an egg: adult help with the heat source.</li>
<li>Limitations: "Only one trial was conducted." "Quantities were not measured."</li>
</ul>
<h3>Marking and presenting</h3>
<ul>
<li>The rubric has <b>5 criteria</b>, up to <b>4 points</b> each: <b>20 points</b> in total.</li>
<li>The criteria: aim and hypothesis; method and safety; results and findings; scientific explanation and conclusion; limitations and presentation.</li>
<li>Present in <b>one</b> way: a poster, a short video (2-3 minutes), or a presentation (PowerPoint or Canva).</li>
</ul>`, Q:[
 order('Put the six parts of a science report in order.',[
   'Aim / Question','Hypothesis','Method','Results / Findings','Conclusion','Limitations'],
   'First you say what you investigate, then what you think will happen, what you did, what happened, what you learned and what could have affected the results.',PJ),
 NG(match('Which part of the report answers each question?',[
   ['Aim / Question','What are you investigating?'],
   ['Hypothesis','What do you think will happen?'],
   ['Method','What did you do?'],
   ['Results / Findings','What happened?'],
   ['Conclusion','Was your hypothesis correct?'],
   ['Limitations','What could have affected your results?']],
   'Each part of the report answers one question.',PJ),'limitation'),
 odd('Odd one out! Three cards are clear hypotheses. Tap the card that is NOT.','I want to do an experiment.',['I predict fizzing will occur when vinegar is added to baking soda.','I think it will fizz.','I think bubbles will form because a chemical reaction will happen.'],'A hypothesis says what you think will happen. "I want to do an experiment" does not say that, so the aim or hypothesis is unclear.',RB+'; '+PS),
 tf('A hypothesis says what you think will happen.',true,'Yes. What actually happened goes in the Results.',PJ),
 mc('Which experiment needs an adult to help with the heat source?','Cooking an egg',['Iodine and vitamin C','Green fizzy eruption','Elephant toothpaste'],'Cooking an egg uses a heat source, so you need adult help. Safety is part of a good method.',PJ+'; '+RB),
 mc('Which one is an example of a limitation?','Only one trial was conducted',['Bubbles and foam formed immediately','The poster is colourful and clear','I think it will fizz because of a reaction'],'A limitation is something that could have affected your results, like doing only one trial or not measuring quantities.',RB+'; '+PS),
 spot('Find the mistake and tap it.','In the Conclusion you say whether your [[method|hypothesis]] was correct.','The Conclusion answers: was your hypothesis correct, and what did you learn?',PJ),
 sort('Which part of the report? Sort each sentence.',['Method','Results / Findings','Conclusion','Limitations'],[
   ['Pour some vinegar into a clear cup.',0],['Add a spoon of baking soda.',0],
   ['The mixture became fizzy and foamy.',1],['The foam rose up the cup.',1],
   ['When baking soda is added to vinegar, a chemical reaction happens.',2],
   ['I did not measure the exact amounts.',3],['I only used one amount of baking soda.',3]],
   'Method: the steps you did. Results: what you saw. Conclusion: what you learned. Limitations: what could have affected your results.',PS),
 scramble('What you think will happen, and why.','hypothesis','A hypothesis is what you think will happen. Write it as "I think ... because ...".',PJ),
 write('You will mix vinegar and baking soda. Write a hypothesis starting with "I think" and using the word "because".',['i think','because','bubbl|fizz|foam|gas|react|new substance'],'I think bubbles will form because a chemical reaction will happen when vinegar and baking soda are mixed.','A hypothesis uses a sentence like "I think ... because ...".',PJ+'; '+PS),
 mc('The project is marked out of how many points in total?','Up to 20 points',['Up to 25 points, 5 for each criterion','Up to 10 points in total','Up to 40 points in total'],'The rubric has 5 criteria, and each one is worth up to 4 points: 5 x 4 = 20 points.',RB),
 tf('For the project you must make a poster - there is no other choice.',false,'No. You choose one way to present: a poster, a short video of 2-3 minutes, or a presentation (PowerPoint or Canva).',PJ)
]}

],
vocab: [],
glossary: [
 ['evidence','доказательство, признак'],
 ['react|reaction','реагировать (реакция)'],
 ['reactant','реагент (исходное вещество)'],
 ['product','продукт (вещество, которое образуется)'],
 ['produce','образовывать, производить'],
 ['reversible','обратимый'],['irreversible','необратимый'],
 ['physical change','физическое изменение'],
 ['fizzy|fizz|fizzing','шипучий (шипеть)'],['foam|foamy','пена (пенистый)'],
 ['vinegar','уксус'],['baking soda','пищевая сода'],['iodine','йод'],['vitamin','витамин'],
 ['carbon dioxide','углекислый газ'],['gas','газ'],
 ['hydrogen peroxide','перекись водорода'],['dry yeast','сухие дрожжи'],['dishwashing liquid','средство для мытья посуды'],
 ['food colouring','пищевой краситель'],['tablet','таблетка'],['experiment','опыт, эксперимент'],
 ['solute','растворенное вещество'],['solvent','растворитель'],['solution','раствор'],
 ['hypothesis','гипотеза'],['aim','цель (исследования)'],['method','метод, ход работы'],['conclusion','вывод'],
 ['limitation','ограничение (слабое место опыта)'],['findings|results','результаты'],['observation|observe','наблюдение (наблюдать)'],
 ['trial','опыт, испытание (повтор опыта)'],['rubric','критерии оценивания'],['criterion|criteria','критерий (критерии)'],['poster','плакат'],['presentation','презентация'],['points','баллы'],['quantity|quantities','количество'],['safety','безопасность'],['tray','поднос'],
 ['heat source','источник тепла'],['predict','предсказывать'],['investigate|investigating','исследовать'],['record','записывать'],
 ['clear cup','прозрачный стакан'],['cleaning','уборка, чистка'],['dirt','грязь'],['proof|prove','доказательство (доказать)'],
 ['unclear','неясный'],['cooking','готовка (варить, жарить)'],['egg','яйцо'],['adult','взрослый'],['conducted','проведен'],
 ['properties|property','свойство']

]
};
})();

const TOPICS=[].concat(PART_VOCAB.topics,PART_PHASES.topics,PART_DISSOLVE.topics,PART_REACTIONS.topics);
const VOCAB=[].concat((PART_VOCAB.vocab||[]),(PART_PHASES.vocab||[]),(PART_DISSOLVE.vocab||[]),(PART_REACTIONS.vocab||[]));
const GLOSSARY=(function(){const seen={},out=[];BASE_GLOSSARY.concat((PART_VOCAB.glossary||[]),(PART_PHASES.glossary||[]),(PART_DISSOLVE.glossary||[]),(PART_REACTIONS.glossary||[])).forEach(g=>{const k=g[0].toLowerCase();if(!seen[k]){seen[k]=1;out.push(g)}});return out})();
QuizEngine.run({id:'science-unit2-end',lang:'en',logo:'🔬 Science Quest',title:'Unit 2 End-of-Unit Check: Vocabulary & Content',bossSize:25,topics:TOPICS,vocab:VOCAB,glossary:GLOSSARY});
})();
