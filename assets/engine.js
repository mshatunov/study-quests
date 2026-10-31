/* Study Quests - shared quiz engine.
   A test page loads this file, then its own data.js which calls QuizEngine.run(config).
   Optional config: games:[{href,ico,name,desc}] adds cards for game pages next to the game modes.
   Question builders (mc, tf, multi, order, match, sort, fill, typed, write, label, odd, spot, scramble, slider, hotspot) are globals.
   Progress lives in localStorage: 'sq:<test id>' (XP, best scores, mistake bank, records, badges, unfinished round),
   'sq:profile' (daily streak), 'sq:ui' (UI preferences). XP and mistakes are written after EVERY answer,
   so quitting a round or closing the tab never loses them. */
(function(){
"use strict";

/* ---------- labels (en / ru) ---------- */
const LANG={
en:{
 intro:'Pick a mission, answer the questions and collect XP. Every wrong answer goes to "My mistakes" - train them before the test!',
 play:'Play', sheet:'Cheat sheet', questions:'questions', best:'Best', fresh:'New',
 boss:'Final Boss Test', bossDesc:n=>n+' random questions from ALL topics - just like a real test.', bossStart:'Start boss test',
 words:'Word list', reset:'Reset scores (XP and badges stay)', again2:'Tap again to reset', back:'Back', allTests:'All tests',
 check:'Check', next:'Next', results:'See results', quit:'Quit', quitSure:'Quit? tap again',
 chooseAll:'Choose all that apply, then press Check.',
 hintOrder:'Tap the steps in the right order (tap a placed step to remove it).',
 hintMatch:'Tap a word on the left, then its match on the right. Tap a pair again to undo.',
 hintSort:'Choose a group for every card, then press Check.',
 hintFill:'Tap a word to put it in the next gap. Tap a filled gap to remove the word.',
 hintScramble:'Tap the letters to spell the word. Tap a placed letter to take it back.',
 hintSlider:'Move the slider (or use - and +) to the right number, then press Check.',
 hintHotspot:'Tap the right dot on the picture.', youTapped:'You tapped:',
 fillHead:'Fill in the gaps:', typeHere:'Type your answer', choose:'choose...', writeHint:'Write 2-4 sentences in your own words, then press Check to see the model answer.', model:'Model answer:', keys:'Key ideas:',
 from:'From:', shouldBe:'should be:', correct:'Correct answer:',
 yes:['Yes! 🎉','Perfect!','Nailed it! 💪','Scientist level! 🔬'], almost:'Almost! Some parts were right.', no:'Not this time - read the fact below. 📚',
 practice:'Practice more:', redo:n=>'Retry my '+n+' mistakes', playAgain:'Play again', home:'Home',
 msg:{high:'Incredible! You are ready for the test. 🏆',good:'Great job! A little more practice on the weak spots and you are ready.',mid:'Good start! Read the cheat sheet and try again.',low:'Don\'t worry - read the cheat sheet, then try again. Every try makes you stronger!'},
 outOf:(s,n)=>s+' out of '+n, wordHeads:['English','Русский','Remember'], wordTitle:'Word list',
 cont:'Continue', contQ:(i,n)=>'question '+i+' of '+n, contRes:'see your results', drop:'Start over',
 mistTitle:'My mistakes', mistDesc:n=>n+' question'+(n===1?'':'s')+' to fix. Answer each one right twice to clear it.', mistGo:'Train my mistakes',
 mistSaved:'🎯 Saved to "My mistakes" - train it before the test.', mistOne:'🎯 One more right answer clears this mistake.', mistClear:'🎯 Mistake cleared!',
 mistAdded:n=>'🎯 '+n+' new mistake'+(n===1?'':'s')+' saved. Train them before the test!',
 mistRes:(f,l)=>'Cleared: '+f+'. Still to fix: '+l+'.', mistEmpty:'No mistakes left to fix! 🎉',
 modes:'Game modes', light:'Lightning round', lightDesc:'60 seconds. Answer as many as you can!', surv:'Survival', survDesc:'3 hearts. How far can you go?', record:'Record', go:'Go!',
 bossWin:'Boss defeated! 🏆', bossLose:'The boss survived - train and come back!',
 lightRes:n=>n+' right in 60 seconds', survRes:n=>n+' right before the hearts ran out', newRec:'New record! 🎉', timeUp:'Time is up!',
 level:'Level', toNext:n=>n+' XP to the next level', streak:n=>n+(n===1?' day':' days')+' in a row', levelUp:l=>'Level up! You are now level '+l+'!',
 levels:['Rookie','Explorer','Apprentice','Investigator','Scholar','Expert','Master','Genius','Professor','Legend'],
 badges:'Badges', newBadge:'New badge:',
 badgeNames:{first:'First round',perfect:'Perfect round',combo10:'Combo x10',boss:'Boss beaten',all90:'Topic master',light:'Lightning fast',surv:'Survivor',fixer:'Mistake fixer'},
 badgeHow:{first:'Finish any round',perfect:'100% in a round of 5+ questions',combo10:'10 right answers in a row',boss:'90% or more in the boss test',all90:'Best score 90%+ in every topic',light:'12+ right in a lightning round',surv:'15+ right in survival',fixer:'Clear 10 mistakes'},
 memory:'Memory game', memDesc:'Flip two cards: find each English word and its Russian pair.', memDone:m=>'All pairs found in '+m+' moves!', moves:'Moves'
},
ru:{
 intro:'Выбери миссию, отвечай на вопросы и собирай XP. Каждая ошибка попадает в «Мои ошибки» - потренируй их перед контрольной!',
 play:'Играть', sheet:'Шпаргалка', questions:'вопросов', best:'Лучший', fresh:'Новое',
 boss:'Финальный босс', bossDesc:n=>n+' случайных вопросов по ВСЕМ темам - как на настоящей контрольной.', bossStart:'Начать',
 words:'Словарик', reset:'Сбросить результаты (XP и значки останутся)', again2:'Нажми еще раз', back:'Назад', allTests:'Все тесты',
 check:'Проверить', next:'Дальше', results:'Результат', quit:'Выйти', quitSure:'Выйти? нажми еще раз',
 chooseAll:'Выбери все подходящие варианты и нажми «Проверить».',
 hintOrder:'Нажимай шаги в правильном порядке (нажми на поставленный шаг, чтобы убрать).',
 hintMatch:'Нажми слово слева, потом пару справа. Нажми на пару еще раз, чтобы отменить.',
 hintSort:'Выбери группу для каждой карточки и нажми «Проверить».',
 hintFill:'Нажми слово, чтобы поставить его в следующий пропуск. Нажми на пропуск, чтобы убрать слово.',
 hintScramble:'Нажимай буквы, чтобы собрать слово. Нажми на поставленную букву, чтобы вернуть ее.',
 hintSlider:'Сдвинь ползунок (или нажимай - и +) на нужное число и нажми «Проверить».',
 hintHotspot:'Нажми на нужную точку на картинке.', youTapped:'Ты выбрал:',
 fillHead:'Заполни пропуски:', typeHere:'Введи ответ', choose:'выбери...', writeHint:'Напиши 2-4 предложения своими словами и нажми «Проверить», чтобы увидеть образец ответа.', model:'Образец ответа:', keys:'Ключевые идеи:',
 from:'Из:', shouldBe:'правильно:', correct:'Правильный ответ:',
 yes:['Да! 🎉','Отлично!','Точно в цель! 💪','Уровень ученого! 🔬'], almost:'Почти! Часть ответа верная.', no:'Не в этот раз - прочитай факт ниже. 📚',
 practice:'Стоит повторить:', redo:n=>'Повторить ошибки ('+n+')', playAgain:'Еще раз', home:'Домой',
 msg:{high:'Невероятно! Ты готов к контрольной. 🏆',good:'Отлично! Чуть повтори слабые места - и все готово.',mid:'Хорошее начало! Прочитай шпаргалку и попробуй еще раз.',low:'Не переживай - прочитай шпаргалку и попробуй снова. Каждая попытка делает сильнее!'},
 outOf:(s,n)=>s+' из '+n, wordHeads:['English','Русский','Запомни'], wordTitle:'Словарик',
 cont:'Продолжить', contQ:(i,n)=>'вопрос '+i+' из '+n, contRes:'посмотреть результат', drop:'Начать заново',
 mistTitle:'Мои ошибки', mistDesc:n=>'Исправить: '+n+'. Ответь на каждый вопрос верно два раза - и он уйдет из списка.', mistGo:'Тренировать ошибки',
 mistSaved:'🎯 Сохранено в «Мои ошибки» - потренируй перед контрольной.', mistOne:'🎯 Еще один верный ответ - и ошибка исправлена.', mistClear:'🎯 Ошибка исправлена!',
 mistAdded:n=>'🎯 Новых ошибок сохранено: '+n+'. Потренируй их перед контрольной!',
 mistRes:(f,l)=>'Исправлено: '+f+'. Осталось: '+l+'.', mistEmpty:'Ошибок для исправления не осталось! 🎉',
 modes:'Режимы игры', light:'Молния', lightDesc:'60 секунд. Ответь на как можно больше!', surv:'Выживание', survDesc:'3 жизни. Как далеко ты пройдешь?', record:'Рекорд', go:'Вперед!',
 bossWin:'Босс побежден! 🏆', bossLose:'Босс выстоял - потренируйся и возвращайся!',
 lightRes:n=>'Верных ответов за 60 секунд: '+n, survRes:n=>'Верных ответов, пока были жизни: '+n, newRec:'Новый рекорд! 🎉', timeUp:'Время вышло!',
 level:'Уровень', toNext:n=>'до следующего уровня: '+n+' XP', streak:n=>'дней подряд: '+n, levelUp:l=>'Новый уровень: '+l+'!',
 levels:['Новичок','Исследователь','Ученик','Следопыт','Знаток','Эксперт','Мастер','Гений','Профессор','Легенда'],
 badges:'Значки', newBadge:'Новый значок:',
 badgeNames:{first:'Первый раунд',perfect:'Без ошибок',combo10:'Комбо x10',boss:'Босс побежден',all90:'Мастер тем',light:'Быстрее молнии',surv:'Выживший',fixer:'Исправитель'},
 badgeHow:{first:'Пройди любой раунд',perfect:'100% в раунде из 5+ вопросов',combo10:'10 верных ответов подряд',boss:'90% и больше в боссе',all90:'Лучший результат 90%+ во всех темах',light:'12+ верных в «Молнии»',surv:'15+ верных в «Выживании»',fixer:'Исправь 10 ошибок'},
 memory:'Мемори', memDesc:'Открывай по две карточки: найди пары слово - перевод.', memDone:m=>'Все пары найдены за '+m+' ходов!', moves:'Ходы'
}};
const GLOSS_TITLE='Перевод терминов';
const BADGE_ICO={first:'🐣',perfect:'💯',combo10:'🔥',boss:'👑',all90:'🏆',light:'⚡',surv:'❤️',fixer:'🎯'};
const QUICK=['mc','tf','odd','spot','hotspot'];          /* types fast enough for the lightning round */
const RESUMABLE=['topic','boss','mist','redo'];          /* rounds that can be continued after closing the page */
const LIGHT_MS=60000, MIST_MAX=25, MIST_CLEAR=2;

/* ---------- builders (global) ---------- */
window.mc   =(q,a,w,e,s)=>({t:'mc',q,a,w,e,s});
window.tf   =(q,v,e,s)=>({t:'tf',q,v,e,s});
window.multi=(q,a,w,e,s)=>({t:'multi',q,a,w,e,s});
window.order=(q,items,e,s)=>({t:'order',q,items,e,s});
window.match=(q,pairs,e,s)=>({t:'match',q,pairs,e,s});
window.sort =(q,cats,items,e,s)=>({t:'sort',q,cats,items,e,s});
window.fill =(q,ans,bank,e,s)=>({t:'fill',q,ans,bank,e,s});
/* typed answer: accepted = array of accepted strings (case/space insensitive; numbers compare by value) */
window.typed=(q,accepted,e,s,unit)=>({t:'typed',q,acc:[].concat(accepted),e,s,unit});
/* written answer: keywords = array of key ideas, each 'a|b|c' (any alternative as a substring counts); model = model answer shown after Check */
window.write=(q,keywords,model,e,s)=>({t:'write',q,keywords,model,e,s});
/* label a picture: svg={vb:'0 0 440 370', body:'<rect .../>'}, points=[{n:'Aorta',x:385,y:258}, ...] */
window.label=(q,svg,points,e,s)=>({t:'label',q,svg,points,e,s});
/* odd one out: tap the card that does not belong (odd = the right answer, others = 2-5 cards that belong together) */
window.odd=(q,odd,others,e,s)=>({t:'odd',q,a:odd,w:others,e,s});
/* spot the mistake: text has exactly one [[wrong|right]] marker; the child taps the wrong word, the fix is shown after */
window.spot=(q,text,e,s)=>({t:'spot',q,text,e,s});
/* unscramble: q = clue (must not contain the word), word = the term spelled from shuffled letter tiles */
window.scramble=(q,word,e,s)=>({t:'scramble',q,word,e,s});
/* slider: scale={min,max,step,unit}; correct when |value-answer| <= tol */
window.slider=(q,scale,answer,tol,e,s)=>({t:'slider',q,scale,ans:answer,tol:tol||0,e,s});
/* hotspot: tap the right dot on a picture; svg/points as in label, target = name of the point to find */
window.hotspot=(q,svg,points,target,e,s)=>({t:'hotspot',q,svg,points,target,e,s});

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const SPOT=/\[\[([^|\]]+)\|([^\]]+)\]\]/;
/* stable question id: survives reshuffles and page reloads (used by the mistake bank and round resume) */
function hash(s){let h=5381;for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return (h>>>0).toString(36)}
function qkey(q,topic){return topic+':'+hash(q.t+'|'+q.q+'|'+JSON.stringify(q.a!=null?q.a:q.v!=null?q.v:q.items||q.pairs||q.cats||q.ans||q.acc||q.keywords||q.points||q.text||q.word||''))}
/* ---------- glossary: English term -> Russian, matched in the visible text of each question ---------- */
function buildGloss(cfg){
  const list=[];const have=f=>list.some(x=>x.forms.some(g=>g.toLowerCase()===f.toLowerCase()));
  (cfg.glossary||[]).forEach(g=>{const forms=String(g[0]).split('|').map(x=>x.trim()).filter(Boolean);if(forms.length&&g[1])list.push({show:forms[0],ru:g[1],forms})});
  (cfg.vocab||[]).forEach(v=>{const en=String(v[0]).replace(/\([^)]*\)/g,'').trim(),ens=en.split(/\s*\/\s*/),rus=String(v[1]||'').split(/\s*\/\s*/);
    ens.forEach((x,i)=>{if(x&&v[1]&&!have(x))list.push({show:/^[A-Z][a-z]/.test(x)?x.charAt(0).toLowerCase()+x.slice(1):x,ru:ens.length===rus.length?rus[i]:v[1],forms:[x]})})});
  list.forEach(x=>{
    const f=x.forms.slice();x.forms.forEach(w=>{if(/[^aeiou]e$/i.test(w)&&w.length>3)f.push(w.slice(0,-1)+'ing');if(/[^aeiou]y$/i.test(w))f.push(w.slice(0,-1)+'ies')});
    const alt=f.map(w=>w.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/\s+/g,'[\\s-]+')).join('|');
    x.re=new RegExp('(^|[^a-z0-9])('+alt+')(s|es|d|ed|ing)?(?![a-z0-9])','gi');x.len=Math.max.apply(null,x.forms.map(w=>w.length))});
  return list.sort((a,b)=>b.len-a.len);
}
/* the text a child sees before answering (never the hidden answer) */
function visibleText(q){
  const p=[q.q];
  if(q.t==='mc'||q.t==='odd')p.push(q.a,...q.w);
  if(q.t==='multi')p.push(...q.a,...q.w);
  if(q.t==='order')p.push(...q.items);
  if(q.t==='match')q.pairs.forEach(x=>p.push(x[0],x[1]));
  if(q.t==='sort')p.push(...q.cats,...q.items.map(x=>x[0]));
  if(q.t==='fill')p.push(...q.bank);
  if(q.t==='label')p.push(...q.points.map(x=>x.n));
  if(q.t==='spot')p.push(String(q.text).replace(SPOT,'$1'));
  if(q.unit)p.push(q.unit);if(q.scale&&q.scale.unit)p.push(q.scale.unit);
  return p.filter(x=>x!=null).join(' \n ').replace(/<[^>]+>/g,' ');
}
/* glossary lines for one question, in the order the terms appear; longer phrases win over their parts */
function glossFor(q){
  if(!GL||!GL.length)return [];
  let s=' '+visibleText(q)+' ';const hits=[];
  GL.forEach(x=>{let pos=-1;x.re.lastIndex=0;
    s=s.replace(x.re,(all,pre,w,suf,off)=>{if(pos<0)pos=off+pre.length;return pre+'\u0000'.repeat(all.length-pre.length)});
    const hide=(q.ng||[]).some(t=>x.forms.concat([x.show]).some(f=>f.toLowerCase()===String(t).toLowerCase()));   /* q.ng: terms whose translation would give this answer away */
    if(pos>=0&&!hide)hits.push({x,pos})});
  return hits.sort((a,b)=>a.pos-b.pos).map(h=>h.x);
}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
/* escape, then allow a tiny safe markup set: <sub> <sup> <b> <i> <br> */
function fmt(s){return esc(s).replace(/&lt;(\/?)(sub|sup|b|i|br)&gt;/g,'<$1$2>')}
function shuf(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function pick(a,n){return shuf(a).slice(0,n)}
function num(v){return String(Math.round(v*1000)/1000)}
function norm(s){return String(s).trim().toLowerCase().replace(/\s+/g,' ').replace(/,/g,'.').replace(/\.$/,'')}
function sameTyped(v,acc){
  const n=norm(v);if(n==='')return false;
  return acc.some(a=>{const m=norm(a);if(m===n)return true;
    const x=parseFloat(n),y=parseFloat(m);return !isNaN(x)&&!isNaN(y)&&/^[-+]?[\d.]+$/.test(n)&&/^[-+]?[\d.]+$/.test(m)&&Math.abs(x-y)<1e-9});
}

/* ---------- state + storage ---------- */
let Q=null,T=LANG.en,S=null,KEY='',app=null,GL=[],KEYMAP={},TMR=null,SELFTEST=false,SCREEN=0,ONHOME=false;   /* SCREEN: bumps on every screen change, stale timers check it */
const SRC=/[?&]src/.test(location.search);   /* ?src shows the source of each fact (for a parent checking "we did not learn this") */
const DEF=()=>({best:{},xp:0,mist:{},rec:{},badges:{},cur:null,fixedTotal:0});
let saved=DEF();
const PKEY='sq:profile',UKEY='sq:ui';
function jget(k,d){try{return JSON.parse(localStorage.getItem(k)||'null')||d}catch(e){return d}}
function jset(k,o){try{localStorage.setItem(k,JSON.stringify(o))}catch(e){}}
const store={get(){return jget(KEY,{})},set(o){jset(KEY,o)}};
let UI={};
function save(){store.set(saved)}
function load(){
  saved=Object.assign(DEF(),store.get());
  ['best','mist','rec','badges'].forEach(k=>{if(!saved[k]||typeof saved[k]!=='object')saved[k]={}});
  Object.keys(saved.mist).forEach(k=>{if(!KEYMAP[k])delete saved.mist[k]});   /* drop mistakes of questions that were edited or removed */
}
function dayStr(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function yesterday(){const d=new Date();d.setDate(d.getDate()-1);return dayStr(d)}
/* daily streak, shared by all tests */
function touchDay(){if(SELFTEST)return;const p=jget(PKEY,{}),today=dayStr(new Date());if(p.day===today)return;p.streak=p.day===yesterday()?(p.streak||0)+1:1;p.day=today;jset(PKEY,p)}
function streak(){const p=jget(PKEY,{});return (p.day===dayStr(new Date())||p.day===yesterday())?(p.streak||0):0}
/* XP of all tests on this device (level is global, like on the homepage) */
function totalXp(){let n=0;try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(/^sq:/.test(k)&&k!==PKEY&&k!==UKEY){const d=JSON.parse(localStorage.getItem(k)||'{}');n+=d.xp||0}}}catch(e){}return n}
function lvlFrom(L){return 25*(L-1)*(L+2)}   /* XP needed to reach level L: 0, 100, 250, 450, 700, 1000 ... */
function level(xp){let L=1;while(xp>=lvlFrom(L+1))L++;return {L,from:lvlFrom(L),to:lvlFrom(L+1),name:T.levels[Math.min(L,T.levels.length)-1]}}
function mistKeys(){return Object.keys(saved.mist).filter(k=>KEYMAP[k])}
function mistByTopic(){const o={};mistKeys().forEach(k=>{const t=KEYMAP[k][1];o[t]=(o[t]||0)+1});return o}
function allQs(){const a=[];Q.topics.forEach(t=>t.Q.forEach(q=>a.push([q,t.id])));return a}
function topicName(id){const t=Q.topics.find(x=>x.id===id);return t?t.ico+' '+t.name:''}
function modeName(m,id){const b=id==='boss'?'👑 '+T.boss:id==='mist'?'🎯 '+T.mistTitle:id==='light'?'⚡ '+T.light:id==='surv'?'❤️ '+T.surv:topicName(id);return m==='redo'?b+' - '+T.mistTitle.toLowerCase():b}
function toast(msg){if(SELFTEST)return;const d=document.createElement('div');d.className='toast';d.innerHTML=msg;d.style.top=(18+56*document.querySelectorAll('.toast:not(.out)').length)+'px';document.body.appendChild(d);setTimeout(()=>d.classList.add('out'),2600);setTimeout(()=>d.remove(),3200)}
function award(id){if(saved.badges[id])return;saved.badges[id]=1;save();toast(`🏅 ${T.newBadge} ${BADGE_ICO[id]} ${esc(T.badgeNames[id])}`);if(!SELFTEST)confetti(90)}
function stopTimer(){SCREEN++;ONHOME=false;if(TMR){clearInterval(TMR);TMR=null}}
const R={};

/* ---------- screens ---------- */
function home(){
  stopTimer();S=null;ONHOME=true;
  const topics=Q.topics,tx=totalXp(),lv=level(tx),st=streak(),mk=mistKeys().length,mt=mistByTopic();
  const lvp=Math.round((tx-lv.from)/(lv.to-lv.from)*100),c=saved.cur;
  const cont=c&&c.keys&&c.keys.some(k=>KEYMAP[k])?`<div class="panel cont"><div><h3>▶ ${T.cont}</h3><div>${fmt(modeName(c.mode,c.id))} - ${c.i<c.keys.length?T.contQ(c.i+1,c.keys.length):T.contRes}</div></div>
    <div class="row" style="margin:0"><button class="btn" data-cont="1">${T.cont}</button><button class="btn gray" data-drop="1">${T.drop}</button></div></div>`:'';
  const quick=allQs().filter(x=>QUICK.includes(x[0].t)).length;
  app.innerHTML=`
  <div class="top"><div class="logo">${fmt(Q.logo||Q.title)}</div>
    <div class="chips"><a class="chip" href="../../" style="text-decoration:none">← ${T.allTests}</a>${st?`<span class="chip">🔥 ${st}</span>`:''}<span class="chip">⭐ ${saved.xp} XP</span></div></div>
  <h1>${fmt(Q.title)}</h1>
  <p class="sub">${fmt(Q.intro||T.intro)}</p>
  <div class="player"><span class="lv">${T.level} ${lv.L}</span><b>${esc(lv.name)}</b><div class="bar"><i style="width:${lvp}%"></i></div><span class="soft">⭐ ${tx} XP · ${T.toNext(lv.to-tx)}</span>${st?`<span class="soft">🔥 ${T.streak(st)}</span>`:''}</div>
  ${cont}
  ${mk?`<div class="panel mist"><div><h3>🎯 ${T.mistTitle}: ${mk}</h3><div>${T.mistDesc(mk)}</div><div class="chips" style="margin-top:8px">${Object.entries(mt).map(([k,n])=>`<span class="chip">${(topics.find(x=>x.id===k)||{}).ico||''} ${n}</span>`).join('')}</div></div><button class="btn" data-mist="1">${T.mistGo}</button></div>`:''}
  <div class="grid">${topics.map(t=>{
    const b=saved.best[t.id]||0;
    return `<div class="tcard">
      <div class="ico">${t.ico}</div><h3>${fmt(t.name)}</h3><p>${fmt(t.blurb||'')}</p>
      <div class="bar"><i style="width:${b}%"></i></div>
      <div class="row"><span class="chip">${b?T.best+' '+b+'%':T.fresh} ${b>=90?'🏆':''}</span><span class="chip">${t.Q.length} ${T.questions}</span>${mt[t.id]?`<span class="chip">🎯 ${mt[t.id]}</span>`:''}</div>
      <div class="row"><button class="btn" data-play="${t.id}">${T.play}</button>${t.sheet?`<button class="btn ghost" data-sheet="${t.id}">${T.sheet}</button>`:''}</div>
    </div>`}).join('')}</div>
  <div class="boss"><div><h3>👑 ${T.boss}</h3><div>${T.bossDesc(bossSize())}</div>${saved.best.boss?`<div style="margin-top:4px;font-weight:800">${T.best}: ${saved.best.boss}%</div>`:''}</div>
    <button class="btn" data-boss="1">${T.bossStart}</button></div>
  <h2 class="h2">🎮 ${T.modes}</h2>
  <div class="grid">
   ${(Q.games||[]).map(g=>`<a class="tcard" href="${esc(g.href)}" style="text-decoration:none;color:inherit"><div class="ico">${g.ico||'🕹️'}</div><h3>${fmt(g.name)}</h3><p>${fmt(g.desc||'')}</p><div class="row"><span class="btn">${T.go}</span></div></a>`).join('')}
   ${quick>=6?`<div class="tcard"><div class="ico">⚡</div><h3>${T.light}</h3><p>${T.lightDesc}</p><div class="row"><span class="chip">${T.record}: ${saved.rec.light||0}</span></div><div class="row"><button class="btn" data-mode="light">${T.go}</button></div></div>`:''}
   <div class="tcard"><div class="ico">❤️</div><h3>${T.surv}</h3><p>${T.survDesc}</p><div class="row"><span class="chip">${T.record}: ${saved.rec.surv||0}</span></div><div class="row"><button class="btn" data-mode="surv">${T.go}</button></div></div>
   ${memOk()?`<div class="tcard"><div class="ico">🃏</div><h3>${T.memory}</h3><p>${T.memDesc}</p><div class="row">${saved.rec.mem?`<span class="chip">${T.record}: ${saved.rec.mem} ${T.moves.toLowerCase()}</span>`:''}</div><div class="row"><button class="btn" data-memory="1">${T.go}</button></div></div>`:''}
  </div>
  <h2 class="h2">🏅 ${T.badges}</h2>
  <div class="badges">${Object.keys(BADGE_ICO).map(b=>`<span class="badge ${saved.badges[b]?'on':''}" title="${esc(T.badgeHow[b])}">${BADGE_ICO[b]} ${esc(T.badgeNames[b])}<small>${esc(T.badgeHow[b])}</small></span>`).join('')}</div>
  <div class="row" style="margin-top:18px">${Q.vocab&&Q.vocab.length?`<button class="btn ghost" data-vocab="1">📖 ${T.words}</button>`:''}
  <button class="btn gray" data-reset="1">${T.reset}</button></div>`;
  app.querySelectorAll('[data-play]').forEach(b=>b.onclick=()=>start(b.dataset.play));
  app.querySelectorAll('[data-sheet]').forEach(b=>b.onclick=()=>sheet(b.dataset.sheet));
  app.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>start(b.dataset.mode));
  app.querySelector('[data-boss]').onclick=()=>start('boss');
  const on=(sel,f)=>{const el=app.querySelector(sel);if(el)el.onclick=f};
  on('[data-mist]',()=>start('mist'));on('[data-cont]',resume);on('[data-drop]',()=>{saved.cur=null;save();home()});
  on('[data-vocab]',vocab);on('[data-memory]',memory);
  app.querySelector('[data-reset]').onclick=function(){
    if(this.dataset.sure){saved=Object.assign(DEF(),{xp:saved.xp,badges:saved.badges,fixedTotal:saved.fixedTotal});save();home()}else{this.dataset.sure=1;this.textContent=T.again2}};
}
function bossSize(){const total=Q.topics.reduce((n,t)=>n+t.Q.length,0);return Math.min(Q.bossSize||25,total)}
function sheet(id){
  stopTimer();S=null;
  const t=Q.topics.find(x=>x.id===id);
  app.innerHTML=`<div class="top"><button class="btn ghost" id="back">← ${T.back}</button><div class="chips"><span class="chip">⭐ ${saved.xp} XP</span></div></div>
  <h1>${t.ico} ${fmt(t.name)}</h1><div class="sheet">${t.sheet}</div>
  <div class="row" style="margin-top:14px"><button class="btn" id="go">${T.play}</button></div>`;
  $('#back').onclick=home;$('#go').onclick=()=>start(id);
}
function vocab(){
  stopTimer();S=null;
  app.innerHTML=`<div class="top"><button class="btn ghost" id="back">← ${T.back}</button>${memOk()?`<button class="btn" id="mem">🃏 ${T.memory}</button>`:''}</div><h1>📖 ${T.wordTitle}</h1>
  <div class="sheet tablewrap"><table><tr>${T.wordHeads.map(h=>`<th>${h}</th>`).join('')}</tr>${Q.vocab.map(v=>`<tr><td><b>${fmt(v[0])}</b></td><td class="ru">${fmt(v[1]||'')}</td><td>${fmt(v[2]||'')}</td></tr>`).join('')}</table></div>`;
  $('#back').onclick=home;const m=$('#mem');if(m)m.onclick=memory;
}
function memOk(){return Q.vocab&&Q.vocab.filter(v=>v[0]&&v[1]).length>=6}
/* memory game: 6 random word pairs (English / Russian) face down */
function memory(){
  stopTimer();S=null;const scr=SCREEN;
  const pool=pick(Q.vocab.filter(v=>v[0]&&v[1]),6);
  const cards=shuf(pool.flatMap((v,i)=>[{i,s:v[0],en:1},{i,s:v[1],en:0}]));
  let open=[],moves=0,lock=false;const done=new Set();
  const draw=()=>{
    app.innerHTML=`<div class="top"><button class="btn ghost" id="back">← ${T.back}</button><div class="chips"><span class="chip">${T.moves}: ${moves}</span>${saved.rec.mem?`<span class="chip">${T.record}: ${saved.rec.mem}</span>`:''}</div></div>
    <h1>🃏 ${T.memory}</h1><p class="sub">${T.memDesc}</p>
    <div class="memg">${cards.map((c,k)=>{const up=open.includes(k)||done.has(c.i);return `<button class="mem ${up?'up':''} ${done.has(c.i)?'done':''} ${c.en?'en':'ru'}" data-k="${k}">${up?fmt(c.s):'?'}</button>`}).join('')}</div><div id="memres"></div>`;
    $('#back').onclick=home;
    app.querySelectorAll('.mem').forEach(b=>b.onclick=()=>{
      const k=+b.dataset.k,c=cards[k];if(lock||open.includes(k)||done.has(c.i))return;
      open.push(k);
      if(open.length===2){moves++;const a=cards[open[0]],d=cards[open[1]];
        if(a.i===d.i){done.add(a.i);open=[];draw();if(done.size===pool.length)win();return}
        lock=true;draw();setTimeout(()=>{if(scr!==SCREEN)return;open=[];lock=false;draw()},950);return}
      draw()});
  };
  const win=()=>{
    const gain=15;saved.xp+=gain;if(!saved.rec.mem||moves<saved.rec.mem)saved.rec.mem=moves;save();touchDay();confetti(140);
    $('#memres').innerHTML=`<div class="qcard res" style="margin-top:14px"><div class="big">🎉</div><p><b>${T.memDone(moves)}</b> +${gain} XP</p><div class="row" style="justify-content:center"><button class="btn" id="again">${T.playAgain}</button><button class="btn gray" id="home2">${T.home}</button></div></div>`;
    $('#again').onclick=memory;$('#home2').onclick=home;
  };
  draw();
}

/* ---------- session ---------- */
function prep(q,topic){
  const x=Object.assign({},q,{topic});
  x.key=qkey(q,topic);
  if(q.t==='mc'||q.t==='odd'){x.opts=shuf([q.a].concat(q.w))}
  if(q.t==='tf'){x.opts=[T===LANG.ru?'Верно':'True',T===LANG.ru?'Неверно':'False']}
  if(q.t==='multi'){x.opts=shuf(q.a.concat(q.w))}
  if(q.t==='order'){x.pool=shuf(q.items.map((s,i)=>({s,i})));if(x.pool.every((p,i)=>p.i===i))x.pool.reverse()}
  if(q.t==='match'){x.right=shuf(q.pairs.map((p,i)=>({s:p[1],i})))}
  if(q.t==='fill'){x.bankS=shuf(q.bank)}
  if(q.t==='label'){x.ls=shuf(q.points.map((_,i)=>i))}
  if(q.t==='scramble'){const L=q.word.toUpperCase().replace(/[^A-Z]/g,'').split('');let p=shuf(L);for(let k=0;k<8&&p.join('')===L.join('')&&new Set(L).size>1;k++)p=shuf(L);x.tiles=p}
  return x;
}
function newS(mode,id,qs){return {mode,id,qs,i:0,score:0,xp:0,combo:0,ok:0,wrong:[],byTopic:{},answered:false,hearts:3,fixed:0,added:0}}
function start(id,customQs){
  stopTimer();
  const mode=customQs?'redo':['boss','mist','light','surv'].includes(id)?id:'topic';
  let qs=[];
  if(customQs){qs=customQs.map(q=>prep(q,q.topic))}
  else if(mode==='boss'){
    const all=allQs();
    const size=bossSize();const core=Q.topics.filter(t=>!t.bonus);
    const per=Math.max(1,Math.floor(size*0.6/Math.max(1,core.length)));
    const chosen=[];core.forEach(t=>pick(t.Q.map(q=>[q,t.id]),per).forEach(c=>chosen.push(c)));
    const rest=all.filter(a=>!chosen.some(c=>c[0]===a[0]));
    pick(rest,size-chosen.length).forEach(c=>chosen.push(c));
    qs=shuf(chosen).slice(0,size).map(c=>prep(c[0],c[1]));
  }
  else if(mode==='mist'){qs=shuf(mistKeys()).sort((a,b)=>(saved.mist[b].w||0)-(saved.mist[a].w||0)).slice(0,MIST_MAX).map(k=>prep(KEYMAP[k][0],KEYMAP[k][1]));qs=shuf(qs)}
  else if(mode==='light'){qs=shuf(allQs().filter(c=>QUICK.includes(c[0].t))).map(c=>prep(c[0],c[1]))}
  else if(mode==='surv'){qs=shuf(allQs()).map(c=>prep(c[0],c[1]))}
  else{const t=Q.topics.find(x=>x.id===id);qs=shuf(t.Q).map(q=>prep(q,id))}
  if(!qs.length){home();return}
  S=newS(mode,id,qs);
  if(mode==='light'){S.end=Date.now()+LIGHT_MS;if(!SELFTEST)TMR=setInterval(tick,200)}
  show();
}
/* continue a round that was closed half-way (state saved after every answer) */
function resume(){
  const c=saved.cur;const qs=c.keys.filter(k=>KEYMAP[k]).map(k=>prep(KEYMAP[k][0],KEYMAP[k][1]));
  if(!qs.length||qs.length!==c.keys.length){saved.cur=null;save();home();return}   /* questions were edited since: score and position no longer match */
  S=Object.assign(newS(c.mode,c.id,qs),{i:Math.min(c.i,qs.length),score:c.score||0,xp:c.xp||0,combo:c.combo||0,ok:c.ok||0,byTopic:c.byTopic||{},fixed:c.fixed||0,added:c.added||0,
    wrong:(c.wrong||[]).filter(k=>KEYMAP[k]).map(k=>prep(KEYMAP[k][0],KEYMAP[k][1]))});
  if(S.i>=qs.length){S.i=qs.length-1;S.answered=true;results();return}
  show();
}
function snapshot(i){return {mode:S.mode,id:S.id,keys:S.qs.map(q=>q.key),i,score:S.score,xp:S.xp,combo:S.combo,ok:S.ok,byTopic:S.byTopic,fixed:S.fixed,added:S.added,wrong:S.wrong.map(q=>q.key)}}
function tick(){
  if(!S||S.mode!=='light'){stopTimer();return}
  const left=S.end-Date.now(),b=$('#tbar'),c=$('#tsec');
  if(b)b.style.width=Math.max(0,left/LIGHT_MS*100)+'%';if(c)c.textContent='⏱ '+Math.max(0,Math.ceil(left/1000));
  if(left<=0){stopTimer();S.timeUp=true;results()}
}
function show(){
  const q=S.qs[S.i];S.answered=false;S.cur={};
  const tname=(Q.topics.find(t=>t.id===q.topic)||{}).name||'';
  const gl=Q.lang==='ru'?[]:glossFor(q);
  let bar;
  if(S.mode==='light'){const left=Math.max(0,S.end-Date.now());bar=`<div class="bar timer"><i id="tbar" style="width:${left/LIGHT_MS*100}%"></i></div><span class="chip" id="tsec">⏱ ${Math.ceil(left/1000)}</span><span class="chip">⚡ ${S.ok}</span>`}
  else bar=`<div class="bar"><i style="width:${S.i/S.qs.length*100}%"></i></div><span class="chip">${S.i+1}/${S.qs.length}</span>`;
  if(S.mode==='surv')bar+=`<span class="chip hearts" id="hearts">${'❤️'.repeat(Math.max(0,S.hearts))}${'🖤'.repeat(3-Math.max(0,S.hearts))}</span>`;
  const hp=Math.max(0,100-S.score/S.qs.length*100);
  app.innerHTML=`<div class="qtop"><button class="xbtn" id="quit" title="${T.quit}">✕</button>${bar}
    <span class="chip">⭐ ${S.xp}</span>${S.combo>=2?`<span class="chip combo">🔥 ${S.combo}</span>`:''}</div>
  ${S.mode==='boss'?`<div class="bossline"><span class="bossico" id="bossico">${Q.boss||'🐉'}</span><div class="bar hp"><i id="hp" style="width:${hp}%"></i></div><span class="chip" id="hpn">${Math.round(hp)}%</span></div>`:''}
  <div class="qcard" id="qcard"><div class="qtag">${fmt(tname)}</div><p class="qtext">${q.t==='fill'?T.fillHead:fmt(q.q)}</p>${q.img?`<img class="qimg" src="${esc(q.img)}" alt="">`:''}<div id="body"></div>
  <div class="fb" id="fb"></div><div class="actions"><button class="btn" id="check" disabled>${T.check}</button><button class="btn" id="next" style="display:none">${T.next} →</button></div>
  ${gl.length?`<details class="gloss" id="gloss"${UI.gl?' open':''}><summary>🇷🇺 ${GLOSS_TITLE} (${gl.length})</summary><div class="glist">${gl.map(x=>`<span class="gi"><b>${esc(x.show)}</b> - ${esc(x.ru)}</span>`).join('')}</div></details>`:''}</div>`;
  $('#quit').onclick=function(){if(this.dataset.sure){home()}else{this.dataset.sure=1;this.textContent=T.quitSure;this.style.fontSize='15px';this.style.fontWeight='800'}};
  $('#next').onclick=next;$('#check').onclick=()=>finish(R[q.t].check(q));
  const g=$('#gloss');if(g)g.ontoggle=()=>{UI.gl=g.open;jset(UKEY,UI)};
  R[q.t].render(q,$('#body'));
}
function setReady(ok){const b=$('#check');if(b)b.disabled=!ok}
function finish(score){
  if(S.answered)return;S.answered=true;
  const q=S.qs[S.i];
  const ok=score>=0.999;
  if(ok){S.combo++;S.ok++}else{S.combo=0;S.wrong.push(q)}
  const gain=Math.round(10*score)+(ok?Math.min(S.combo,5)*2:0);
  const lvBefore=level(totalXp()).L;
  S.xp+=gain;S.score+=score;
  const bt=S.byTopic[q.topic]||(S.byTopic[q.topic]={s:0,n:0});bt.s+=score;bt.n++;
  /* persist right away: XP, mistake bank, resume point */
  saved.xp+=gain;
  let note='';const m=saved.mist[q.key];
  if(ok){if(m){m.r=(m.r||0)+1;if(m.r>=MIST_CLEAR){delete saved.mist[q.key];S.fixed++;saved.fixedTotal=(saved.fixedTotal||0)+1;note=T.mistClear}else note=T.mistOne}}
  else{const mm=m||(saved.mist[q.key]={w:0,r:0});mm.w++;mm.r=0;if(!m)S.added++;note=T.mistSaved}
  if(S.mode==='surv'&&!ok)S.hearts--;
  if(RESUMABLE.includes(S.mode))saved.cur=snapshot(S.i+1);
  save();touchDay();
  if(S.combo>=10)award('combo10');if(saved.fixedTotal>=10)award('fixer');
  const lvAfter=level(totalXp()).L;if(lvAfter>lvBefore){toast('🆙 '+esc(T.levelUp(lvAfter)));if(!SELFTEST)confetti(160)}
  const fb=$('#fb');
  fb.className='fb show '+(ok?'good':score>0?'part':'bad');
  const head=ok?T.yes[S.i%T.yes.length]:(score>0?T.almost:T.no);
  fb.innerHTML=`<b class="h">${head} +${gain} XP${ok&&S.combo>=2?' 🔥 x'+S.combo:''}</b>${S.cur.note?`<div>${S.cur.note}</div>`:''}<div>${fmt(q.e||'')}</div>${note?`<div class="mnote">${note}</div>`:''}${q.s&&SRC?`<div class="src">${T.from} ${fmt(q.s)}</div>`:''}`;
  $('#check').style.display='none';
  const last=S.i===S.qs.length-1||(S.mode==='surv'&&S.hearts<=0);
  const n=$('#next');n.style.display='';n.textContent=(last?T.results:T.next)+' →';n.focus();
  if(S.mode==='surv'){const h=$('#hearts');if(h)h.textContent='❤️'.repeat(Math.max(0,S.hearts))+'🖤'.repeat(3-Math.max(0,S.hearts))}
  if(S.mode==='boss'){const hp=Math.max(0,100-S.score/S.qs.length*100),bar=$('#hp'),hn=$('#hpn'),ico=$('#bossico');if(bar)bar.style.width=hp+'%';if(hn)hn.textContent=Math.round(hp)+'%';
    if(ico&&ok){ico.classList.remove('hit');void ico.offsetWidth;ico.classList.add('hit')}}
  if(!ok){const c=$('#qcard');if(c){c.classList.remove('shake');void c.offsetWidth;c.classList.add('shake')}}
  if(ok&&S.combo>0&&S.combo%5===0&&!SELFTEST)confetti(60);
  if(S.mode==='light'&&!SELFTEST){const at=S.i;setTimeout(()=>{if(S&&S.mode==='light'&&S.i===at&&S.answered&&!S.timeUp)next()},ok?650:1800)}
}
function next(){if(!S)return;if(S.mode==='surv'&&S.hearts<=0){results();return}if(S.i<S.qs.length-1){S.i++;show()}else results()}
function results(){
  if(!S||S.done)return;S.done=true;
  stopTimer();
  const mode=S.mode,done=mode==='light'||mode==='surv'?S.i+(S.answered?1:0):S.qs.length;
  const pct=Math.min(100,Math.round(S.score/Math.max(1,done)*100));
  if(mode==='topic'||mode==='boss')saved.best[S.id]=Math.max(saved.best[S.id]||0,pct);
  if(RESUMABLE.includes(mode))saved.cur=null;
  let rec=0,isNew=false;
  if(mode==='light'||mode==='surv'){rec=saved.rec[mode]||0;isNew=S.ok>rec;if(isNew)saved.rec[mode]=S.ok}
  save();
  if(done>0)award('first');
  if(pct===100&&done>=5&&(mode==='topic'||mode==='boss'))award('perfect');
  if(mode==='boss'&&pct>=90)award('boss');
  if(Q.topics.filter(t=>!t.bonus).every(t=>(saved.best[t.id]||0)>=90))award('all90');
  if(mode==='light'&&S.ok>=12)award('light');
  if(mode==='surv'&&S.ok>=15)award('surv');
  const stars=pct>=90?3:pct>=70?2:pct>=40?1:0;
  const weak=Object.entries(S.byTopic).map(([k,v])=>({t:Q.topics.find(x=>x.id===k),p:Math.round(v.s/v.n*100)})).filter(w=>w.t&&w.p<80).sort((a,b)=>a.p-b.p);
  const msg=pct>=90?T.msg.high:pct>=70?T.msg.good:pct>=40?T.msg.mid:T.msg.low;
  const left=mistKeys().length;
  let main;
  if(mode==='light'||mode==='surv'){
    main=`<div class="big">${mode==='light'?'⚡':'❤️'}</div>${S.timeUp?`<p><b>${T.timeUp}</b></p>`:''}<div class="bignum">${S.ok}</div><p>${mode==='light'?T.lightRes(S.ok):T.survRes(S.ok)} · +${S.xp} XP</p>
    <p>${isNew?`<b>${T.newRec}</b>`:`${T.record}: ${Math.max(rec,S.ok)}`}</p>`;
  }else{
    main=`<div class="big">${mode==='boss'?(pct>=70?'🏆':Q.boss||'🐉'):pct>=70?'🎉':'💪'}</div><div class="stars">${'⭐'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
    <div class="scorebig">${pct}%</div><p>${T.outOf(Math.round(S.score*10)/10,done)} · +${S.xp} XP</p>
    ${mode==='boss'?`<p><b>${pct>=70?T.bossWin:T.bossLose}</b></p>`:''}${mode==='mist'?`<p><b>${left?T.mistRes(S.fixed,left):T.mistEmpty}</b></p>`:`<p>${msg}</p>`}`;
  }
  app.innerHTML=`<div class="qcard res">${main}
  ${S.added&&mode!=='mist'?`<p class="mnote">${T.mistAdded(S.added)}</p>`:''}
  ${weak.length?`<div class="weak"><b>${T.practice}</b><ul>${weak.map(w=>`<li>${w.t.ico} ${fmt(w.t.name)} - ${w.p}% ${w.t.sheet?`<button class="btn ghost" style="padding:2px 10px;box-shadow:none" data-sheet="${w.t.id}">${T.sheet.toLowerCase()}</button>`:''}</li>`).join('')}</ul></div>`:''}
  <div class="row" style="justify-content:center">
   ${left?`<button class="btn" id="mist">🎯 ${T.mistGo} (${left})</button>`:''}
   ${S.wrong.length&&mode!=='mist'?`<button class="btn ghost" id="redo">${T.redo(S.wrong.length)}</button>`:''}
   <button class="btn ghost" id="again">${T.playAgain}</button><button class="btn gray" id="home">${T.home}</button></div></div>`;
  if(pct>=70&&mode!=='light'&&mode!=='surv'&&!SELFTEST)confetti(pct>=90?220:110);
  if(isNew&&!SELFTEST)confetti(160);
  app.querySelectorAll('[data-sheet]').forEach(b=>b.onclick=()=>sheet(b.dataset.sheet));
  const id=S.id,w=S.wrong.slice();
  $('#home').onclick=home;$('#again').onclick=()=>start(id);
  const r=$('#redo');if(r)r.onclick=()=>start(id,w);
  const mb=$('#mist');if(mb)mb.onclick=()=>start('mist');
}

/* ---------- renderers ---------- */
R.mc=R.tf={
  render(q,el){
    el.innerHTML=`<div class="opts">${q.opts.map((o,i)=>`<button class="opt" data-i="${i}">${fmt(o)}</button>`).join('')}</div>`;
    el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
      if(S.answered)return;
      const val=q.opts[+b.dataset.i];
      const right=q.t==='tf'?q.opts[q.v?0:1]:q.a;
      el.querySelectorAll('.opt').forEach(x=>{x.disabled=true;const v=q.opts[+x.dataset.i];if(v===right)x.classList.add('ok');else if(x===b)x.classList.add('no')});
      finish(val===right?1:0);
    });
    $('#check').style.display='none';
  },
  check(){return 0}
};
R.odd={
  render(q,el){
    el.innerHTML=`<div class="oddg">${q.opts.map((o,i)=>`<button class="opt oddc" data-i="${i}">${fmt(o)}</button>`).join('')}</div>`;
    el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
      if(S.answered)return;const val=q.opts[+b.dataset.i];
      el.querySelectorAll('.opt').forEach(x=>{x.disabled=true;const v=q.opts[+x.dataset.i];if(v===q.a)x.classList.add('ok');else if(x===b)x.classList.add('no')});
      finish(val===q.a?1:0);
    });
    $('#check').style.display='none';
  },
  check(){return 0}
};
R.multi={
  render(q,el){
    S.cur.sel=new Set();
    el.innerHTML=`<p class="sub" style="margin:0 0 8px">${T.chooseAll}</p><div class="opts">${q.opts.map((o,i)=>`<button class="opt" data-i="${i}">${fmt(o)}</button>`).join('')}</div>`;
    el.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
      if(S.answered)return;const i=+b.dataset.i;
      if(S.cur.sel.has(i)){S.cur.sel.delete(i);b.classList.remove('sel')}else{S.cur.sel.add(i);b.classList.add('sel')}
      setReady(S.cur.sel.size>0);
    });
  },
  check(q){
    const els=document.querySelectorAll('#body .opt');let good=0,bad=0;
    els.forEach(b=>{b.disabled=true;const i=+b.dataset.i,isC=q.a.includes(q.opts[i]),chosen=S.cur.sel.has(i);
      if(isC){b.classList.add('ok');if(chosen)good++}else if(chosen){b.classList.add('no');bad++}});
    return Math.max(0,(good-bad)/q.a.length);
  }
};
R.order={
  render(q,el){
    S.cur.seq=[];
    const draw=()=>{
      el.innerHTML=`<p class="sub" style="margin:0 0 8px">${T.hintOrder}</p>
      <div class="seq">${q.items.map((_,k)=>{const p=S.cur.seq[k];return `<div class="slot" data-k="${k}"><span class="n">${k+1}</span><span class="t">${p?fmt(p.s):'<span style="opacity:.35">...</span>'}</span></div>`}).join('')}</div>
      <div class="pool">${q.pool.map((p,j)=>`<button class="tile ${S.cur.seq.includes(p)?'used':''}" data-j="${j}">${fmt(p.s)}</button>`).join('')}</div>`;
      el.querySelectorAll('.tile').forEach(b=>b.onclick=()=>{if(S.answered)return;S.cur.seq.push(q.pool[+b.dataset.j]);draw();setReady(S.cur.seq.length===q.items.length)});
      el.querySelectorAll('.slot').forEach(s=>s.onclick=()=>{if(S.answered)return;const k=+s.dataset.k;if(S.cur.seq[k]){S.cur.seq.splice(k,1);draw();setReady(S.cur.seq.length===q.items.length)}});
    };draw();
  },
  check(q){
    let good=0;const el=$('#body');
    el.querySelectorAll('.tile').forEach(b=>b.disabled=true);
    el.querySelectorAll('.slot').forEach((s,k)=>{const p=S.cur.seq[k];if(p.i===k){good++;s.classList.add('ok')}else{s.classList.add('no');s.querySelector('.t').innerHTML=fmt(p.s)+'<br><small>✅ '+T.shouldBe+' '+fmt(q.items[k])+'</small>'}});
    return good/q.items.length;
  }
};
R.match={
  render(q,el){
    S.cur.pair={};S.cur.act=null;
    const draw=()=>{
      el.innerHTML=`<p class="sub" style="margin:0 0 8px">${T.hintMatch}</p><div class="mcols">
      <div class="mcol">${q.pairs.map((p,i)=>`<button class="mi ${S.cur.pair[i]!=null?'pc'+(i%7):''} ${S.cur.act===i?'act':''}" data-l="${i}">${fmt(p[0])}${S.cur.pair[i]!=null?'<span class="tg">●</span>':''}</button>`).join('')}</div>
      <div class="mcol">${q.right.map((r,j)=>{const li=Object.keys(S.cur.pair).find(k=>S.cur.pair[k]===j);return `<button class="mi ${li!=null?'pc'+(li%7):''}" data-r="${j}">${fmt(r.s)}</button>`}).join('')}</div></div>`;
      el.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>{if(S.answered)return;const i=+b.dataset.l;if(S.cur.pair[i]!=null){delete S.cur.pair[i];S.cur.act=i}else S.cur.act=i;draw();setReady(Object.keys(S.cur.pair).length===q.pairs.length)});
      el.querySelectorAll('[data-r]').forEach(b=>b.onclick=()=>{if(S.answered)return;const j=+b.dataset.r;
        const owner=Object.keys(S.cur.pair).find(k=>S.cur.pair[k]===j);
        if(owner!=null){delete S.cur.pair[owner];S.cur.act=+owner}
        else if(S.cur.act!=null){S.cur.pair[S.cur.act]=j;
          const nxt=q.pairs.findIndex((_,i)=>S.cur.pair[i]==null);S.cur.act=nxt>=0?nxt:null}
        draw();setReady(Object.keys(S.cur.pair).length===q.pairs.length)});
    };draw();
  },
  check(q){
    let good=0;const el=$('#body');
    el.querySelectorAll('.mi').forEach(b=>b.disabled=true);
    q.pairs.forEach((p,i)=>{const j=S.cur.pair[i],ok=q.right[j].i===i;if(ok)good++;
      const lb=el.querySelector(`[data-l="${i}"]`),rb=el.querySelector(`[data-r="${j}"]`);
      lb.classList.add(ok?'ok':'no');rb.classList.add(ok?'ok':'no');
      if(!ok){lb.innerHTML=fmt(p[0])+'<br><small>✅ '+fmt(p[1])+'</small>'}});
    return good/q.pairs.length;
  }
};
R.sort={
  render(q,el){
    S.cur.ch={};S.cur.order=shuf(q.items.map((_,i)=>i));
    const draw=()=>{
      el.innerHTML=`<p class="sub" style="margin:0 0 8px">${T.hintSort}</p><div class="srt">${S.cur.order.map(i=>`<div class="srow" data-i="${i}"><div>${fmt(q.items[i][0])}</div><div class="cats">${q.cats.map((c,k)=>`<button class="cb ${S.cur.ch[i]===k?'sel':''}" data-i="${i}" data-k="${k}">${fmt(c)}</button>`).join('')}</div></div>`).join('')}</div>`;
      el.querySelectorAll('.cb').forEach(b=>b.onclick=()=>{if(S.answered)return;S.cur.ch[+b.dataset.i]=+b.dataset.k;draw();setReady(Object.keys(S.cur.ch).length===q.items.length)});
    };draw();
  },
  check(q){
    let good=0;const el=$('#body');
    el.querySelectorAll('.cb').forEach(b=>b.disabled=true);
    q.items.forEach((it,i)=>{const row=el.querySelector(`.srow[data-i="${i}"]`);if(S.cur.ch[i]===it[1]){good++;row.classList.add('ok')}else{row.classList.add('no');row.insertAdjacentHTML('beforeend',`<div class="fix">✅ ${T.shouldBe} ${fmt(q.cats[it[1]])}</div>`)}});
    return good/q.items.length;
  }
};
R.fill={
  render(q,el){
    const parts=q.q.split('___');S.cur.b=new Array(q.ans.length).fill(null);
    const draw=()=>{
      let h='<div class="fillq">';
      parts.forEach((p,i)=>{h+=fmt(p);if(i<q.ans.length)h+=`<span class="blank" data-b="${i}">${S.cur.b[i]!=null?fmt(q.bankS[S.cur.b[i]]):'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'}</span>`});
      h+=`</div><p class="sub" style="margin:8px 0">${T.hintFill}</p><div class="pool">`+q.bankS.map((w,j)=>`<button class="tile ${S.cur.b.includes(j)?'used':''}" data-j="${j}">${fmt(w)}</button>`).join('')+'</div>';
      el.innerHTML=h;
      el.querySelectorAll('.tile').forEach(b=>b.onclick=()=>{if(S.answered)return;const k=S.cur.b.indexOf(null);if(k<0)return;S.cur.b[k]=+b.dataset.j;draw();setReady(!S.cur.b.includes(null))});
      el.querySelectorAll('.blank').forEach(b=>b.onclick=()=>{if(S.answered)return;S.cur.b[+b.dataset.b]=null;draw();setReady(false)});
    };draw();
  },
  check(q){
    let good=0;const el=$('#body');
    el.querySelectorAll('.blank').forEach((b,i)=>{const w=q.bankS[S.cur.b[i]];if(w===q.ans[i]){good++;b.classList.add('ok')}else{b.classList.add('no');b.innerHTML=fmt(w)+' → <u>'+fmt(q.ans[i])+'</u>'}});
    el.querySelectorAll('.tile').forEach(b=>b.disabled=true);
    return good/q.ans.length;
  }
};
R.typed={
  render(q,el){
    el.innerHTML=`<input class="typed" id="ti" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${T.typeHere}">${q.unit?`<span class="unit">${fmt(q.unit)}</span>`:''}`;
    const ti=$('#ti');ti.oninput=()=>setReady(ti.value.trim()!=='');
    ti.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();e.stopPropagation();const c=$('#check');if(c&&!c.disabled)c.click()}};
    setTimeout(()=>ti.focus(),50);
  },
  check(q){
    const ti=$('#ti');ti.disabled=true;
    const ok=sameTyped(ti.value,q.acc);ti.classList.add(ok?'ok':'no');
    if(!ok)ti.insertAdjacentHTML('afterend',`<div class="fix" style="margin-top:8px;font-weight:700">✅ ${T.correct} ${fmt(q.acc[0])}${q.unit?' '+fmt(q.unit):''}</div>`);
    return ok?1:0;
  }
};
R.write={
  render(q,el){
    el.innerHTML=`<p class="sub" style="margin:0 0 8px">${T.writeHint}</p><textarea class="typed" id="wi" rows="5" style="max-width:100%;resize:vertical" placeholder="${T.typeHere}"></textarea>`;
    const wi=$('#wi');wi.oninput=()=>setReady(wi.value.trim().length>=8);
    setTimeout(()=>wi.focus(),50);
  },
  check(q){
    const wi=$('#wi');wi.disabled=true;const txt=wi.value.toLowerCase();
    const hit=q.keywords.map(k=>k.split('|').some(a=>txt.includes(a.trim().toLowerCase())));
    const n=hit.filter(Boolean).length;
    wi.classList.add(n===q.keywords.length?'ok':'no');
    wi.insertAdjacentHTML('afterend',`<div class="fix" style="margin-top:10px"><b>${T.model}</b> ${fmt(q.model)}</div><div class="fix" style="margin-top:6px;font-size:15px">${T.keys} ${q.keywords.map((k,i)=>(hit[i]?'✅ ':'⬜ ')+fmt(k.split('|')[0])).join(' · ')}</div>`);
    return n/q.keywords.length;
  }
};
R.label={
  render(q,el){
    S.cur.pick={};
    const P=q.points;
    const dots=P.map((p,i)=>`<circle cx="${p.x}" cy="${p.y}" r="15" style="fill:var(--card);stroke:var(--ink)" stroke-width="3"/><text x="${p.x}" y="${p.y+6}" font-size="17" font-weight="800" text-anchor="middle" style="fill:var(--ink)">${i+1}</text>`).join('');
    el.innerHTML=`<div class="labelbox"><div><svg viewBox="${q.svg.vb}" width="100%" role="img">${q.svg.body}${dots}</svg></div>
      <div class="hl">${P.map((p,i)=>`<label><span class="num">${i+1}</span><select data-i="${i}"><option value="">${T.choose}</option>${q.ls.map(k=>`<option value="${k}">${esc(P[k].n)}</option>`).join('')}</select></label>`).join('')}</div></div>`;
    el.querySelectorAll('select').forEach(s=>s.onchange=()=>{S.cur.pick[+s.dataset.i]=s.value===''?null:+s.value;setReady(P.every((_,i)=>S.cur.pick[i]!=null))});
  },
  check(q){
    let good=0;
    document.querySelectorAll('#body select').forEach(s=>{const i=+s.dataset.i;s.disabled=true;if(+s.value===i){good++;s.classList.add('ok')}else{s.classList.add('no');s.insertAdjacentHTML('afterend',`<small style="grid-column:2">✅ ${esc(q.points[i].n)}</small>`)}});
    return good/q.points.length;
  }
};
/* spot the mistake: every word is a button; the [[wrong|right]] token (with punctuation glued to it) is the target */
R.spot={
  render(q,el){
    const m=SPOT.exec(q.text);let pre=q.text.slice(0,m.index),post=q.text.slice(m.index+m[0].length);
    const lead=(pre.match(/\S*$/)||[''])[0],tail=(post.match(/^\S*/)||[''])[0];
    pre=pre.slice(0,pre.length-lead.length);post=post.slice(tail.length);
    const words=s=>s.split(/\s+/).filter(Boolean).map(w=>({w}));
    const toks=words(pre).concat([{w:lead+m[1]+tail,bad:true}],words(post));S.cur.toks=toks;
    el.innerHTML=`<div class="spot">${toks.map((t,i)=>`<button class="wd" data-i="${i}">${fmt(t.w)}</button>`).join(' ')}</div>`;
    el.querySelectorAll('.wd').forEach(b=>b.onclick=()=>{
      if(S.answered)return;const t=toks[+b.dataset.i];
      el.querySelectorAll('.wd').forEach(x=>x.disabled=true);
      const bad=el.querySelector(`.wd[data-i="${toks.findIndex(x=>x.bad)}"]`);
      bad.classList.add(t.bad?'ok':'fixme');bad.innerHTML=`${fmt(lead)}<s>${fmt(m[1])}</s> → <b>${fmt(m[2])}</b>${fmt(tail)}`;
      if(!t.bad)b.classList.add('no');
      finish(t.bad?1:0);
    });
    $('#check').style.display='none';
  },
  check(){return 0}
};
R.scramble={
  render(q,el){
    const W=q.word.toUpperCase();S.cur.put=W.replace(/[^A-Z]/g,'').split('').map(()=>null);
    const draw=()=>{let k=0;
      el.innerHTML=`<p class="sub" style="margin:0 0 8px">${T.hintScramble}</p><div class="scr">${[...W].map(ch=>{if(!/[A-Z]/.test(ch))return `<span class="gap">${ch===' '?'':esc(ch)}</span>`;const i=k++,j=S.cur.put[i];return `<button class="ls ${j!=null?'full':''}" data-k="${i}">${j!=null?q.tiles[j]:''}</button>`}).join('')}</div>
      <div class="pool">${q.tiles.map((c,j)=>`<button class="tile lt ${S.cur.put.includes(j)?'used':''}" data-j="${j}">${c}</button>`).join('')}</div>`;
      el.querySelectorAll('.lt').forEach(b=>b.onclick=()=>{if(S.answered)return;const k2=S.cur.put.indexOf(null);if(k2<0)return;S.cur.put[k2]=+b.dataset.j;draw();setReady(!S.cur.put.includes(null))});
      el.querySelectorAll('.ls').forEach(b=>b.onclick=()=>{if(S.answered)return;S.cur.put[+b.dataset.k]=null;draw();setReady(false)});
    };S.cur.draw=draw;draw();
  },
  check(q){
    const L=q.word.toUpperCase().replace(/[^A-Z]/g,''),got=S.cur.put.map(j=>q.tiles[j]).join(''),ok=got===L,el=$('#body');
    el.querySelectorAll('button').forEach(b=>b.disabled=true);
    el.querySelectorAll('.ls').forEach(b=>b.classList.add(ok?'ok':'no'));
    if(!ok)el.querySelector('.scr').insertAdjacentHTML('afterend',`<div class="fix" style="margin:0 0 8px;font-weight:700">✅ ${T.correct} ${esc(q.word)}</div>`);
    return ok?1:0;
  }
};
R.slider={
  render(q,el){
    const c=q.scale,steps=Math.round((c.max-c.min)/c.step);
    let v0=c.min+Math.round(steps/2)*c.step;if(Math.abs(v0-q.ans)<=q.tol)v0=Math.abs(c.min-q.ans)>q.tol?c.min:c.max;   /* never start on the answer */
    S.cur.v=v0;
    el.innerHTML=`<p class="sub" style="margin:0 0 8px">${T.hintSlider}</p><div class="sld"><div class="sval" id="svb"><span id="sv">${num(v0)}</span>${c.unit?` <small>${fmt(c.unit)}</small>`:''}</div>
      <div class="srow2"><button class="btn ghost sb" data-d="-1">-</button><input type="range" id="sr" min="${c.min}" max="${c.max}" step="${c.step}" value="${v0}"><button class="btn ghost sb" data-d="1">+</button></div>
      <div class="sends"><span>${num(c.min)}</span><span>${num(c.max)}</span></div></div>`;
    const sr=$('#sr'),sv=$('#sv');
    const upd=v=>{v=Math.min(c.max,Math.max(c.min,Math.round(v*1e6)/1e6));S.cur.v=v;sr.value=v;sv.textContent=num(v);setReady(true)};
    sr.oninput=()=>{if(!S.answered)upd(+sr.value)};
    el.querySelectorAll('.sb').forEach(b=>b.onclick=()=>{if(!S.answered)upd(S.cur.v+(+b.dataset.d)*c.step)});
  },
  check(q){
    const ok=Math.abs(S.cur.v-q.ans)<=q.tol+1e-9,el=$('#body');
    el.querySelectorAll('input,button').forEach(b=>b.disabled=true);
    $('#svb').classList.add(ok?'ok':'no');
    if(!ok)el.querySelector('.sld').insertAdjacentHTML('beforeend',`<div class="fix" style="margin-top:8px;font-weight:700">✅ ${T.correct} ${num(q.ans)}${q.scale.unit?' '+fmt(q.scale.unit):''}</div>`);
    return ok?1:0;
  }
};
/* hotspot: HTML buttons laid over the picture at the points' viewBox coordinates */
R.hotspot={
  render(q,el){
    const vb=q.svg.vb.split(/[\s,]+/).map(Number);
    el.innerHTML=`<p class="sub" style="margin:0 0 8px">${T.hintHotspot}</p><div class="hsbox"><svg viewBox="${q.svg.vb}" role="img">${q.svg.body}</svg>${q.points.map((p,i)=>`<button class="hs" data-i="${i}" style="left:${(p.x-vb[0])/vb[2]*100}%;top:${(p.y-vb[1])/vb[3]*100}%" aria-label="${i+1}"></button>`).join('')}</div>`;
    el.querySelectorAll('.hs').forEach(b=>b.onclick=()=>{
      if(S.answered)return;const p=q.points[+b.dataset.i],ok=p.n===q.target;
      el.querySelectorAll('.hs').forEach(x=>{x.disabled=true;const pp=q.points[+x.dataset.i];
        if(pp.n===q.target){x.classList.add('ok');x.innerHTML=`✓<span class="hsn">${esc(pp.n)}</span>`}else if(x===b){x.classList.add('no');x.innerHTML=`✗<span class="hsn">${esc(pp.n)}</span>`}});
      if(!ok)S.cur.note=`${T.youTapped} <b>${esc(p.n)}</b>`;
      finish(ok?1:0);
    });
    $('#check').style.display='none';
  },
  check(){return 0}
};

/* ---------- confetti ---------- */
function confetti(n){
  const c=$('#confetti');if(!c||!c.getContext)return;const x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;
  const cols=['#6c4cf1','#17b26a','#f59e0b','#ef5350','#06b6d4','#d946ef'];
  const P=Array.from({length:n},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height*.4,vx:(Math.random()-.5)*4,vy:2+Math.random()*4,s:5+Math.random()*7,c:cols[Math.floor(Math.random()*cols.length)],r:Math.random()*6}));
  let f=0;(function loop(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.r+=.2;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);x.restore()});
    if(++f<150)requestAnimationFrame(loop);else x.clearRect(0,0,c.width,c.height)})();
}
document.addEventListener('keydown',e=>{
  if(!S)return;
  if(e.target&&(e.target.tagName==='TEXTAREA'||e.target.tagName==='INPUT'&&e.target.type==='text'))return;
  if(e.key==='Enter'){const n=$('#next');if(n&&n.style.display!=='none'){e.preventDefault();n.click()}else{const c=$('#check');if(c&&!c.disabled&&c.style.display!=='none'){e.preventDefault();c.click()}}}   /* preventDefault: otherwise the same Enter also presses the freshly focused Next */
  const q=S&&S.qs[S.i];if(!q||S.answered)return;
  if(q.t==='mc'||q.t==='tf'||q.t==='odd'){const k=+e.key;if(k>=1&&k<=q.opts.length){const b=document.querySelectorAll('#body .opt')[k-1];if(b)b.click()}}
  if(q.t==='scramble'&&S.cur.put){
    if(/^[a-z]$/i.test(e.key)){const j=q.tiles.findIndex((c,j)=>c===e.key.toUpperCase()&&!S.cur.put.includes(j));const b=j>=0&&document.querySelector(`#body .lt[data-j="${j}"]`);if(b)b.click()}
    if(e.key==='Backspace'){let k=-1;S.cur.put.forEach((j,i)=>{if(j!=null)k=i});if(k>=0){e.preventDefault();S.cur.put[k]=null;S.cur.draw();setReady(false)}}
  }
});

/* ---------- self-test (?selftest in the URL): validates data and auto-plays every question ---------- */
const TYPES=['mc','tf','multi','order','match','sort','fill','typed','write','label','odd','spot','scramble','slider','hotspot'];
function validate(){
  const bad=[];const ids=new Set(),keys=new Set();
  const chk=(c,m)=>{if(!c)bad.push(m)};
  Q.topics.forEach(t=>{
    chk(!ids.has(t.id),'duplicate topic id '+t.id);ids.add(t.id);
    chk(!['boss','mist','light','surv'].includes(t.id),'topic id '+t.id+' is reserved');
    chk(t.ico&&t.name&&Array.isArray(t.Q)&&t.Q.length>0,'topic '+t.id+' incomplete');
    (t.Q||[]).forEach((q,i)=>{const w=t.id+'#'+(i+1)+' ('+(q&&q.t)+')';try{
      chk(TYPES.includes(q.t),w+' unknown type');chk(q.q,w+' no text');chk(q.e,w+' no explanation');
      const k=qkey(q,t.id);chk(!keys.has(k),w+' duplicate question');keys.add(k);
      if(q.t==='mc'){chk(q.a&&q.w&&q.w.length>=2,w+' needs answer + >=2 wrong');chk(!q.w.includes(q.a),w+' answer repeated in wrong');chk(new Set([q.a].concat(q.w)).size===q.w.length+1,w+' duplicate options')}
      if(q.t==='tf')chk(typeof q.v==='boolean',w+' v must be boolean');
      if(q.t==='multi'){chk(q.a.length>=1&&q.w.length>=1,w+' needs correct and wrong options');chk(!q.a.some(x=>q.w.includes(x)),w+' option both correct and wrong')}
      if(q.t==='order')chk(q.items.length>=3&&new Set(q.items).size===q.items.length,w+' needs >=3 unique items');
      if(q.t==='match'){chk(q.pairs.length>=3,w+' needs >=3 pairs');chk(new Set(q.pairs.map(p=>p[1])).size===q.pairs.length,w+' duplicate right-hand texts');chk(new Set(q.pairs.map(p=>p[0])).size===q.pairs.length,w+' duplicate left-hand texts')}
      if(q.t==='sort'){chk(q.cats.length>=2&&q.items.length>=3,w+' needs >=2 groups and >=3 items');chk(q.items.every(it=>it[1]>=0&&it[1]<q.cats.length),w+' item group index out of range');chk(new Set(q.items.map(it=>it[1])).size>=2,w+' all items in one group')}
      if(q.t==='fill'){const n=(q.q.match(/___/g)||[]).length;chk(n===q.ans.length&&n>=1,w+' blanks ('+n+') != answers ('+q.ans.length+')');chk(q.ans.every(a=>q.bank.includes(a)),w+' answer missing from bank');chk(q.bank.length>=q.ans.length,w+' bank too small')}
      if(q.t==='typed')chk(q.acc.length>=1&&q.acc[0]!=='',w+' no accepted answer');
      if(q.t==='write')chk(q.keywords&&q.keywords.length>=2&&q.model,w+' needs >=2 keywords and a model answer');
      if(q.t==='label'){chk(q.points.length>=2&&q.svg&&q.svg.vb&&q.svg.body,w+' needs svg + >=2 points');chk(new Set(q.points.map(p=>p.n)).size===q.points.length,w+' duplicate point names')}
      if(q.t==='odd'){chk(q.a&&q.w&&q.w.length>=2&&q.w.length<=5,w+' needs the odd card + 2-5 others');chk(new Set([q.a].concat(q.w||[])).size===(q.w||[]).length+1,w+' duplicate cards')}
      if(q.t==='spot'){const m=String(q.text||'').match(new RegExp(SPOT.source,'g'))||[];chk(m.length===1,w+' needs exactly one [[wrong|right]] marker');const k2=SPOT.exec(q.text||'');chk(k2&&k2[1].trim()!==k2[2].trim(),w+' wrong and right words are the same')}
      if(q.t==='scramble'){const wd=String(q.word||'');chk(/^[A-Za-z][A-Za-z' -]{2,24}$/.test(wd),w+' word must be 3-25 letters');chk(!String(q.q).toLowerCase().includes(wd.toLowerCase().slice(0,Math.max(5,wd.length-3))),w+' clue gives the answer away')}
      if(q.t==='slider'){const c=q.scale||{};chk(c.max>c.min&&c.step>0&&q.ans>=c.min&&q.ans<=c.max,w+' bad scale or answer outside it');const st=(q.ans-c.min)/c.step;chk(Math.abs(st-Math.round(st))<1e-6,w+' answer is not on a step');chk(q.tol>=0&&2*q.tol<c.max-c.min,w+' tolerance must be >=0 and smaller than the scale')}
      if(q.t==='hotspot'){chk(q.points&&q.points.length>=2&&q.svg&&q.svg.vb&&q.svg.body,w+' needs svg + >=2 points');chk((q.points||[]).some(p=>p.n===q.target),w+' target is not one of the points')}
    }catch(err){bad.push(w+' malformed: '+err.message)}});
  });
  return bad;
}
function selftest(){
  SELFTEST=true;KEY='sq:__selftest__';saved=DEF();   /* never touch the real progress of this test */
  const out=[];const bad=validate();bad.forEach(b=>out.push('DATA: '+b));
  const solve=()=>{
    const q=S.qs[S.i],body=$('#body');
    if(q.t==='mc'||q.t==='tf'){const right=q.t==='tf'?q.opts[q.v?0:1]:q.a;body.querySelector('.opt[data-i="'+q.opts.indexOf(right)+'"]').click()}
    else if(q.t==='odd'){body.querySelector('.opt[data-i="'+q.opts.indexOf(q.a)+'"]').click()}
    else if(q.t==='multi'){q.opts.forEach((o,i)=>{if(q.a.includes(o))body.querySelector(`.opt[data-i="${i}"]`).click()});$('#check').click()}
    else if(q.t==='order'){q.items.forEach((_,k)=>{const j=q.pool.findIndex(p=>p.i===k);body.querySelector(`.tile[data-j="${j}"]`).click()});$('#check').click()}
    else if(q.t==='match'){q.pairs.forEach((p,i)=>{body.querySelector(`[data-l="${i}"]`).click();const j=q.right.findIndex(r=>r.i===i);body.querySelector(`[data-r="${j}"]`).click()});$('#check').click()}
    else if(q.t==='sort'){q.items.forEach((it,i)=>body.querySelector(`.cb[data-i="${i}"][data-k="${it[1]}"]`).click());$('#check').click()}
    else if(q.t==='fill'){q.ans.forEach(a=>{const j=q.bankS.findIndex((w,k)=>w===a&&!S.cur.b.includes(k));body.querySelector(`.tile[data-j="${j}"]`).click()});$('#check').click()}
    else if(q.t==='typed'){const ti=$('#ti');ti.value=q.acc[0];ti.dispatchEvent(new Event('input'));$('#check').click()}
    else if(q.t==='write'){const wi=$('#wi');wi.value=q.model;wi.dispatchEvent(new Event('input'));$('#check').click()}
    else if(q.t==='label'){body.querySelectorAll('select').forEach(s=>{s.value=s.dataset.i;s.dispatchEvent(new Event('change'))});$('#check').click()}
    else if(q.t==='spot'){body.querySelector(`.wd[data-i="${S.cur.toks.findIndex(t=>t.bad)}"]`).click()}
    else if(q.t==='scramble'){for(const ch of q.word.toUpperCase().replace(/[^A-Z]/g,'')){const j=q.tiles.findIndex((c,j)=>c===ch&&!S.cur.put.includes(j));body.querySelector(`.lt[data-j="${j}"]`).click()}$('#check').click()}
    else if(q.t==='slider'){const sr=$('#sr');sr.value=q.ans;sr.dispatchEvent(new Event('input'));$('#check').click()}
    else if(q.t==='hotspot'){body.querySelector(`.hs[data-i="${q.points.findIndex(p=>p.n===q.target)}"]`).click()}
  };
  const playAll=id=>{
    start(id);const n=S.qs.length;
    for(let k=0;k<n;k++){solve();if(!S.answered)out.push('NOT-ANSWERED '+id+' #'+(S.i+1)+' '+S.qs[S.i].t);$('#next').click()}
    return n;
  };
  let total=0;const nq=Q.topics.reduce((n,t)=>n+t.Q.length,0);
  for(const id of Q.topics.map(t=>t.id).concat(['boss'])){
    try{total+=playAll(id);const pct=(document.querySelector('.scorebig')||{}).textContent;if(pct!=='100%')out.push('SCORE '+id+' = '+pct+' (expected 100%)')}
    catch(err){out.push('ERROR '+id+': '+(err&&err.message))}
  }
  for(const id of ['light','surv']){
    try{const n=playAll(id);if(!document.querySelector('.res .bignum'))out.push('RESULTS '+id+' did not render');if(id==='surv'&&n!==nq)out.push('SURVIVAL played '+n+' of '+nq)}
    catch(err){out.push('ERROR '+id+': '+(err&&err.message))}
  }
  /* persistence path: a wrong answer is saved at once (XP, mistake bank, resume point); two right answers clear it */
  try{
    saved=DEF();save();
    start(Q.topics[0].id);const k0=S.qs[0].key;finish(0);
    const st=store.get();
    if(!(st.mist&&st.mist[k0]))out.push('MIST: wrong answer not saved');
    if(!(st.cur&&st.cur.i===1))out.push('RESUME: point not saved after an answer');
    $('#next').click();solve();
    if(!(store.get().xp>0))out.push('XP: not saved after a right answer');
    home();
    if(!document.querySelector('[data-cont]'))out.push('HOME: no Continue card');
    if(!document.querySelector('[data-mist]'))out.push('HOME: no My mistakes card');
    const cb=document.querySelector('[data-cont]');if(cb){cb.click();if(!S||S.i!==2)out.push('RESUME: continued at '+(S&&S.i)+' instead of 2')}
    for(let r=0;r<MIST_CLEAR;r++){start('mist');if(S.qs.length!==1)out.push('MIST: round has '+S.qs.length+' questions');solve();$('#next').click()}
    if(Object.keys(store.get().mist||{}).length)out.push('MIST: not cleared after '+MIST_CLEAR+' right answers');
    if(store.get().cur)out.push('RESUME: point not cleared by a finished round');
  }catch(err){out.push('ERROR persistence: '+(err&&err.message))}
  let cov=0;allQs().forEach(c=>{if(glossFor(c[0]).length)cov++});
  try{localStorage.removeItem(KEY)}catch(e){}
  const pre=document.createElement('pre');pre.id='selftest';
  pre.textContent=out.length?'SELFTEST_FAIL\n'+out.join('\n'):'SELFTEST_OK topics='+Q.topics.length+' questions='+nq+' played='+total+' gloss='+cov+'/'+nq;
  document.body.innerHTML='';document.body.appendChild(pre);
}
/* lint without a browser (tools/lint.js): data checks + how many questions get a glossary line */
function lint(cfg){
  Q=cfg;T=LANG[cfg.lang||'en']||LANG.en;GL=buildGloss(cfg);
  const bad=validate(),types={},miss=[];let n=0,cov=0;
  cfg.topics.forEach(t=>(t.Q||[]).forEach((q,i)=>{n++;types[q.t]=(types[q.t]||0)+1;if(glossFor(q).length)cov++;else miss.push(t.id+'#'+(i+1)+' '+String(q.q).slice(0,70))}));
  return {bad,topics:cfg.topics.length,questions:n,types,glossary:GL.length,gloss:cov+'/'+n,miss};
}

/* ---------- entry ---------- */
window.QuizEngine={
  run(cfg){
    if(window.SQ_LINT){window.SQ_LINT=lint(cfg);return}
    Q=cfg;T=LANG[cfg.lang||'en']||LANG.en;
    KEY='sq:'+cfg.id;
    app=document.getElementById('app');
    GL=Q.lang==='ru'?[]:buildGloss(cfg);
    KEYMAP={};allQs().forEach(c=>{KEYMAP[qkey(c[0],c[1])]=c});
    load();
    UI=jget(UKEY,{});
    if(/[?&]selftest/.test(location.search)){selftest();return}
    /* back from a game page (bfcache) or another tab: storage may hold newer XP - re-read before the next write */
    const fresh=()=>{load();if(ONHOME&&!S)home()};   /* re-render only the home screen, never a cheat sheet or a game the child is in */
    addEventListener('pageshow',e=>{if(e.persisted)fresh()});
    document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')fresh()});
    home();
    const pl=/[?&]play=([\w-]+)/.exec(location.search);   /* QA hook: ?play=<topicId|boss|light|surv|mist> opens a round directly */
    if(pl&&(['boss','light','surv','mist'].includes(pl[1])||Q.topics.some(t=>t.id===pl[1]))){start(pl[1]);const ot=/[&?]only=(\w+)/.exec(location.search),ix=/[&?]idx=(\d+)/.exec(location.search);   /* QA: &only=<type>&idx=<n> shows one question of that type */
      if(ot&&S){const f=S.qs.filter(q=>q.t===ot[1]);if(f.length){S.qs=[f[ix?+ix[1]:0]||f[0]];S.i=0;show()}}}
  }
};
})();
