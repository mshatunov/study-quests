/* Study Quests - shared quiz engine.
   A test page loads this file, then its own data.js which calls QuizEngine.run(config).
   Question builders (mc, tf, multi, order, match, sort, fill, typed, label) are globals. */
(function(){
"use strict";

/* ---------- labels (en / ru) ---------- */
const LANG={
en:{
 intro:'Pick a mission, answer the questions and collect stars. Every question comes from your class materials.',
 play:'Play', sheet:'Cheat sheet', questions:'questions', best:'Best', fresh:'New',
 boss:'Final Boss Test', bossDesc:n=>n+' random questions from ALL topics - just like a real test.', bossStart:'Start boss test',
 words:'Word list', reset:'Reset progress', again2:'Tap again to reset', back:'Back', allTests:'All tests',
 check:'Check', next:'Next', results:'See results', quit:'Quit', quitSure:'Quit? tap again',
 chooseAll:'Choose all that apply, then press Check.',
 hintOrder:'Tap the steps in the right order (tap a placed step to remove it).',
 hintMatch:'Tap a word on the left, then its match on the right. Tap a pair again to undo.',
 hintSort:'Choose a group for every card, then press Check.',
 hintFill:'Tap a word to put it in the next gap. Tap a filled gap to remove the word.',
 fillHead:'Fill in the gaps:', typeHere:'Type your answer', choose:'choose...',
 from:'From:', shouldBe:'should be:', correct:'Correct answer:',
 yes:['Yes! 🎉','Perfect!','Nailed it! 💪','Scientist level! 🔬'], almost:'Almost! Some parts were right.', no:'Not this time - read the fact below. 📚',
 practice:'Practice more:', redo:n=>'Retry my '+n+' mistakes', playAgain:'Play again', home:'Home',
 msg:{high:'Incredible! You are ready for the test. 🏆',good:'Great job! A little more practice on the weak spots and you are ready.',mid:'Good start! Read the cheat sheet and try again.',low:'Don\'t worry - read the cheat sheet, then try again. Every try makes you stronger!'},
 outOf:(s,n)=>s+' out of '+n, wordHeads:['English','Русский','Remember'], wordTitle:'Word list'
},
ru:{
 intro:'Выбери миссию, отвечай на вопросы и собирай звезды. Все вопросы - по материалам с уроков.',
 play:'Играть', sheet:'Шпаргалка', questions:'вопросов', best:'Лучший', fresh:'Новое',
 boss:'Финальный босс', bossDesc:n=>n+' случайных вопросов по ВСЕМ темам - как на настоящей контрольной.', bossStart:'Начать',
 words:'Словарик', reset:'Сбросить прогресс', again2:'Нажми еще раз', back:'Назад', allTests:'Все тесты',
 check:'Проверить', next:'Дальше', results:'Результат', quit:'Выйти', quitSure:'Выйти? нажми еще раз',
 chooseAll:'Выбери все подходящие варианты и нажми «Проверить».',
 hintOrder:'Нажимай шаги в правильном порядке (нажми на поставленный шаг, чтобы убрать).',
 hintMatch:'Нажми слово слева, потом пару справа. Нажми на пару еще раз, чтобы отменить.',
 hintSort:'Выбери группу для каждой карточки и нажми «Проверить».',
 hintFill:'Нажми слово, чтобы поставить его в следующий пропуск. Нажми на пропуск, чтобы убрать слово.',
 fillHead:'Заполни пропуски:', typeHere:'Введи ответ', choose:'выбери...',
 from:'Из:', shouldBe:'правильно:', correct:'Правильный ответ:',
 yes:['Да! 🎉','Отлично!','Точно в цель! 💪','Уровень ученого! 🔬'], almost:'Почти! Часть ответа верная.', no:'Не в этот раз - прочитай факт ниже. 📚',
 practice:'Стоит повторить:', redo:n=>'Повторить ошибки ('+n+')', playAgain:'Еще раз', home:'Домой',
 msg:{high:'Невероятно! Ты готов к контрольной. 🏆',good:'Отлично! Чуть повтори слабые места - и все готово.',mid:'Хорошее начало! Прочитай шпаргалку и попробуй еще раз.',low:'Не переживай - прочитай шпаргалку и попробуй снова. Каждая попытка делает сильнее!'},
 outOf:(s,n)=>s+' из '+n, wordHeads:['English','Русский','Запомни'], wordTitle:'Словарик'
}};

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
/* label a picture: svg={vb:'0 0 440 370', body:'<rect .../>'}, points=[{n:'Aorta',x:385,y:258}, ...] */
window.label=(q,svg,points,e,s)=>({t:'label',q,svg,points,e,s});

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
/* escape, then allow a tiny safe markup set: <sub> <sup> <b> <i> <br> */
function fmt(s){return esc(s).replace(/&lt;(\/?)(sub|sup|b|i|br)&gt;/g,'<$1$2>')}
function shuf(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function pick(a,n){return shuf(a).slice(0,n)}
function norm(s){return String(s).trim().toLowerCase().replace(/\s+/g,' ').replace(/,/g,'.').replace(/\.$/,'')}
function sameTyped(v,acc){
  const n=norm(v);if(n==='')return false;
  return acc.some(a=>{const m=norm(a);if(m===n)return true;
    const x=parseFloat(n),y=parseFloat(m);return !isNaN(x)&&!isNaN(y)&&/^[-+]?[\d.]+$/.test(n)&&/^[-+]?[\d.]+$/.test(m)&&Math.abs(x-y)<1e-9});
}

let Q=null,T=LANG.en,S=null,saved={best:{},xp:0},KEY='',app=null;
const store={
  get(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}},
  set(o){try{localStorage.setItem(KEY,JSON.stringify(o))}catch(e){}}
};
const R={};

/* ---------- screens ---------- */
function home(){
  S=null;
  const topics=Q.topics;
  app.innerHTML=`
  <div class="top"><div class="logo">${fmt(Q.logo||Q.title)}</div>
    <div class="chips"><a class="chip" href="../../" style="text-decoration:none">← ${T.allTests}</a><span class="chip">⭐ ${saved.xp} XP</span></div></div>
  <h1>${fmt(Q.title)}</h1>
  <p class="sub">${fmt(Q.intro||T.intro)}</p>
  <div class="grid">${topics.map(t=>{
    const b=saved.best[t.id]||0;
    return `<div class="tcard">
      <div class="ico">${t.ico}</div><h3>${fmt(t.name)}</h3><p>${fmt(t.blurb||'')}</p>
      <div class="bar"><i style="width:${b}%"></i></div>
      <div class="row"><span class="chip">${b?T.best+' '+b+'%':T.fresh} ${b>=90?'🏆':''}</span><span class="chip">${t.Q.length} ${T.questions}</span></div>
      <div class="row"><button class="btn" data-play="${t.id}">${T.play}</button>${t.sheet?`<button class="btn ghost" data-sheet="${t.id}">${T.sheet}</button>`:''}</div>
    </div>`}).join('')}</div>
  <div class="boss"><div><h3>👑 ${T.boss}</h3><div>${T.bossDesc(bossSize())}</div></div>
    <button class="btn" data-boss="1">${T.bossStart}</button></div>
  <div class="row" style="margin-top:16px">${Q.vocab&&Q.vocab.length?`<button class="btn ghost" data-vocab="1">📖 ${T.words}</button>`:''}
  <button class="btn gray" data-reset="1">${T.reset}</button></div>`;
  app.querySelectorAll('[data-play]').forEach(b=>b.onclick=()=>start(b.dataset.play));
  app.querySelectorAll('[data-sheet]').forEach(b=>b.onclick=()=>sheet(b.dataset.sheet));
  app.querySelector('[data-boss]').onclick=()=>start('boss');
  const v=app.querySelector('[data-vocab]');if(v)v.onclick=vocab;
  app.querySelector('[data-reset]').onclick=function(){
    if(this.dataset.sure){saved={best:{},xp:0};store.set(saved);home()}else{this.dataset.sure=1;this.textContent=T.again2}};
}
function bossSize(){const total=Q.topics.reduce((n,t)=>n+t.Q.length,0);return Math.min(Q.bossSize||25,total)}
function sheet(id){
  const t=Q.topics.find(x=>x.id===id);
  app.innerHTML=`<div class="top"><button class="btn ghost" id="back">← ${T.back}</button><div class="chips"><span class="chip">⭐ ${saved.xp} XP</span></div></div>
  <h1>${t.ico} ${fmt(t.name)}</h1><div class="sheet">${t.sheet}</div>
  <div class="row" style="margin-top:14px"><button class="btn" id="go">${T.play}</button></div>`;
  $('#back').onclick=home;$('#go').onclick=()=>start(id);
}
function vocab(){
  app.innerHTML=`<div class="top"><button class="btn ghost" id="back">← ${T.back}</button></div><h1>📖 ${T.wordTitle}</h1>
  <div class="sheet tablewrap"><table><tr>${T.wordHeads.map(h=>`<th>${h}</th>`).join('')}</tr>${Q.vocab.map(v=>`<tr><td><b>${fmt(v[0])}</b></td><td class="ru">${fmt(v[1]||'')}</td><td>${fmt(v[2]||'')}</td></tr>`).join('')}</table></div>`;
  $('#back').onclick=home;
}

/* ---------- session ---------- */
function prep(q,topic){
  const x=Object.assign({},q,{topic});
  if(q.t==='mc'){x.opts=shuf([q.a].concat(q.w))}
  if(q.t==='tf'){x.opts=[T===LANG.ru?'Верно':'True',T===LANG.ru?'Неверно':'False']}
  if(q.t==='multi'){x.opts=shuf(q.a.concat(q.w))}
  if(q.t==='order'){x.pool=shuf(q.items.map((s,i)=>({s,i})));if(x.pool.every((p,i)=>p.i===i))x.pool.reverse()}
  if(q.t==='match'){x.right=shuf(q.pairs.map((p,i)=>({s:p[1],i})))}
  if(q.t==='fill'){x.bankS=shuf(q.bank)}
  if(q.t==='label'){x.ls=shuf(q.points.map((_,i)=>i))}
  return x;
}
function start(id,customQs){
  let qs=[];
  if(customQs){qs=customQs}
  else if(id==='boss'){
    const all=[];Q.topics.forEach(t=>t.Q.forEach(q=>all.push([q,t.id])));
    const size=bossSize();const core=Q.topics.filter(t=>!t.bonus);
    const per=Math.max(1,Math.floor(size*0.6/Math.max(1,core.length)));
    const chosen=[];core.forEach(t=>pick(t.Q.map(q=>[q,t.id]),per).forEach(c=>chosen.push(c)));
    const rest=all.filter(a=>!chosen.some(c=>c[0]===a[0]));
    pick(rest,size-chosen.length).forEach(c=>chosen.push(c));
    qs=shuf(chosen).slice(0,size).map(c=>prep(c[0],c[1]));
  }else{
    const t=Q.topics.find(x=>x.id===id);
    qs=shuf(t.Q).map(q=>prep(q,id));
  }
  S={id,qs,i:0,score:0,xp:0,combo:0,wrong:[],byTopic:{},answered:false,custom:!!customQs};
  show();
}
function show(){
  const q=S.qs[S.i];S.answered=false;S.cur={};
  const tname=(Q.topics.find(t=>t.id===q.topic)||{}).name||'';
  app.innerHTML=`<div class="qtop"><button class="xbtn" id="quit" title="${T.quit}">✕</button>
    <div class="bar"><i style="width:${S.i/S.qs.length*100}%"></i></div>
    <span class="chip">${S.i+1}/${S.qs.length}</span><span class="chip">⭐ ${S.xp}</span>${S.combo>=2?`<span class="chip combo">🔥 ${S.combo}</span>`:''}</div>
  <div class="qcard"><div class="qtag">${fmt(tname)}</div><p class="qtext">${q.t==='fill'?T.fillHead:fmt(q.q)}</p>${q.img?`<img class="qimg" src="${esc(q.img)}" alt="">`:''}<div id="body"></div>
  <div class="fb" id="fb"></div><div class="actions"><button class="btn" id="check" disabled>${T.check}</button><button class="btn" id="next" style="display:none">${T.next} →</button></div></div>`;
  $('#quit').onclick=function(){if(this.dataset.sure){home()}else{this.dataset.sure=1;this.textContent=T.quitSure;this.style.fontSize='15px';this.style.fontWeight='800'}};
  $('#next').onclick=next;$('#check').onclick=()=>finish(R[q.t].check(q));
  R[q.t].render(q,$('#body'));
}
function setReady(ok){const b=$('#check');if(b)b.disabled=!ok}
function finish(score){
  if(S.answered)return;S.answered=true;
  const q=S.qs[S.i];
  const ok=score>=0.999;
  if(ok){S.combo++;}else{S.combo=0;S.wrong.push(q)}
  const gain=Math.round(10*score)+(ok?Math.min(S.combo,5)*2:0);
  S.xp+=gain;S.score+=score;
  const bt=S.byTopic[q.topic]||(S.byTopic[q.topic]={s:0,n:0});bt.s+=score;bt.n++;
  const fb=$('#fb');
  fb.className='fb show '+(ok?'good':score>0?'part':'bad');
  const head=ok?T.yes[S.i%T.yes.length]:(score>0?T.almost:T.no);
  fb.innerHTML=`<b class="h">${head} +${gain} XP${ok&&S.combo>=2?' 🔥 x'+S.combo:''}</b><div>${fmt(q.e||'')}</div>${q.s?`<div class="src">${T.from} ${fmt(q.s)}</div>`:''}`;
  $('#check').style.display='none';
  const n=$('#next');n.style.display='';n.textContent=(S.i===S.qs.length-1?T.results:T.next)+' →';n.focus();
  if(ok&&S.combo>0&&S.combo%5===0)confetti(60);
}
function next(){if(S.i<S.qs.length-1){S.i++;show()}else results()}
function results(){
  const n=S.qs.length,pct=Math.round(S.score/n*100);
  if(!S.custom)saved.best[S.id]=Math.max(saved.best[S.id]||0,pct);
  saved.xp+=S.xp;store.set(saved);
  const stars=pct>=90?3:pct>=70?2:pct>=40?1:0;
  const weak=Object.entries(S.byTopic).map(([k,v])=>({t:Q.topics.find(x=>x.id===k),p:Math.round(v.s/v.n*100)})).filter(w=>w.p<80).sort((a,b)=>a.p-b.p);
  const msg=pct>=90?T.msg.high:pct>=70?T.msg.good:pct>=40?T.msg.mid:T.msg.low;
  app.innerHTML=`<div class="qcard res"><div class="big">${pct>=70?'🎉':'💪'}</div><div class="stars">${'⭐'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
  <div class="scorebig">${pct}%</div><p>${T.outOf(Math.round(S.score*10)/10,n)} · +${S.xp} XP</p><p>${msg}</p>
  ${weak.length?`<div class="weak"><b>${T.practice}</b><ul>${weak.map(w=>`<li>${w.t.ico} ${fmt(w.t.name)} - ${w.p}% ${w.t.sheet?`<button class="btn ghost" style="padding:2px 10px;box-shadow:none" data-sheet="${w.t.id}">${T.sheet.toLowerCase()}</button>`:''}</li>`).join('')}</ul></div>`:''}
  <div class="row" style="justify-content:center">
   ${S.wrong.length?`<button class="btn" id="redo">${T.redo(S.wrong.length)}</button>`:''}
   <button class="btn ghost" id="again">${T.playAgain}</button><button class="btn gray" id="home">${T.home}</button></div></div>`;
  if(pct>=70)confetti(pct>=90?220:110);
  app.querySelectorAll('[data-sheet]').forEach(b=>b.onclick=()=>sheet(b.dataset.sheet));
  $('#home').onclick=home;$('#again').onclick=()=>start(S.id);
  const r=$('#redo');if(r){const w=S.wrong.map(q=>prep(q,q.topic));const id=S.id;r.onclick=()=>start(id,w)}
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
    ti.onkeydown=e=>{if(e.key==='Enter'){e.stopPropagation();const c=$('#check');if(c&&!c.disabled)c.click()}};
    setTimeout(()=>ti.focus(),50);
  },
  check(q){
    const ti=$('#ti');ti.disabled=true;
    const ok=sameTyped(ti.value,q.acc);ti.classList.add(ok?'ok':'no');
    if(!ok)ti.insertAdjacentHTML('afterend',`<div class="fix" style="margin-top:8px;font-weight:700">✅ ${T.correct} ${fmt(q.acc[0])}${q.unit?' '+fmt(q.unit):''}</div>`);
    return ok?1:0;
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

/* ---------- confetti ---------- */
function confetti(n){
  const c=$('#confetti');if(!c)return;const x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;
  const cols=['#6c4cf1','#17b26a','#f59e0b','#ef5350','#06b6d4','#d946ef'];
  const P=Array.from({length:n},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height*.4,vx:(Math.random()-.5)*4,vy:2+Math.random()*4,s:5+Math.random()*7,c:cols[Math.floor(Math.random()*cols.length)],r:Math.random()*6}));
  let f=0;(function loop(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.r+=.2;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);x.restore()});
    if(++f<150)requestAnimationFrame(loop);else x.clearRect(0,0,c.width,c.height)})();
}
document.addEventListener('keydown',e=>{
  if(!S)return;
  if(e.key==='Enter'){const n=$('#next');if(n&&n.style.display!=='none'){e.preventDefault();n.click()}else{const c=$('#check');if(c&&!c.disabled&&c.style.display!=='none')c.click()}}
  const q=S.qs[S.i];
  if(q&&(q.t==='mc'||q.t==='tf')&&!S.answered){const k=+e.key;if(k>=1&&k<=q.opts.length){const b=document.querySelectorAll('.opt')[k-1];if(b)b.click()}}
});

/* ---------- self-test (?selftest in the URL): validates data and auto-plays every question ---------- */
function validate(){
  const bad=[];const ids=new Set();
  const chk=(c,m)=>{if(!c)bad.push(m)};
  Q.topics.forEach(t=>{
    chk(!ids.has(t.id),'duplicate topic id '+t.id);ids.add(t.id);
    chk(t.ico&&t.name&&Array.isArray(t.Q)&&t.Q.length>0,'topic '+t.id+' incomplete');
    t.Q.forEach((q,i)=>{
      const w=t.id+'#'+(i+1)+' ('+q.t+')';
      chk(R[q.t],w+' unknown type');chk(q.q,w+' no text');chk(q.e,w+' no explanation');
      if(q.t==='mc'){chk(q.a&&q.w&&q.w.length>=2,w+' needs answer + >=2 wrong');chk(!q.w.includes(q.a),w+' answer repeated in wrong');chk(new Set([q.a].concat(q.w)).size===q.w.length+1,w+' duplicate options')}
      if(q.t==='tf')chk(typeof q.v==='boolean',w+' v must be boolean');
      if(q.t==='multi'){chk(q.a.length>=1&&q.w.length>=1,w+' needs correct and wrong options');chk(!q.a.some(x=>q.w.includes(x)),w+' option both correct and wrong')}
      if(q.t==='order')chk(q.items.length>=3&&new Set(q.items).size===q.items.length,w+' needs >=3 unique items');
      if(q.t==='match'){chk(q.pairs.length>=3,w+' needs >=3 pairs');chk(new Set(q.pairs.map(p=>p[1])).size===q.pairs.length,w+' duplicate right-hand texts');chk(new Set(q.pairs.map(p=>p[0])).size===q.pairs.length,w+' duplicate left-hand texts')}
      if(q.t==='sort'){chk(q.cats.length>=2&&q.items.length>=3,w+' needs >=2 groups and >=3 items');chk(q.items.every(it=>it[1]>=0&&it[1]<q.cats.length),w+' item group index out of range');chk(new Set(q.items.map(it=>it[1])).size>=2,w+' all items in one group')}
      if(q.t==='fill'){const n=(q.q.match(/___/g)||[]).length;chk(n===q.ans.length&&n>=1,w+' blanks ('+n+') != answers ('+q.ans.length+')');chk(q.ans.every(a=>q.bank.includes(a)),w+' answer missing from bank');chk(q.bank.length>=q.ans.length,w+' bank too small')}
      if(q.t==='typed')chk(q.acc.length>=1&&q.acc[0]!=='',w+' no accepted answer');
      if(q.t==='label'){chk(q.points.length>=2&&q.svg&&q.svg.vb&&q.svg.body,w+' needs svg + >=2 points');chk(new Set(q.points.map(p=>p.n)).size===q.points.length,w+' duplicate point names')}
    });
  });
  return bad;
}
function selftest(){
  const out=[];const bad=validate();bad.forEach(b=>out.push('DATA: '+b));
  const solve=()=>{
    const q=S.qs[S.i],body=$('#body');
    if(q.t==='mc'||q.t==='tf'){const right=q.t==='tf'?q.opts[q.v?0:1]:q.a;body.querySelector('.opt[data-i="'+q.opts.indexOf(right)+'"]').click()}
    else if(q.t==='multi'){q.opts.forEach((o,i)=>{if(q.a.includes(o))body.querySelector(`.opt[data-i="${i}"]`).click()});$('#check').click()}
    else if(q.t==='order'){q.items.forEach((_,k)=>{const j=q.pool.findIndex(p=>p.i===k);body.querySelector(`.tile[data-j="${j}"]`).click()});$('#check').click()}
    else if(q.t==='match'){q.pairs.forEach((p,i)=>{body.querySelector(`[data-l="${i}"]`).click();const j=q.right.findIndex(r=>r.i===i);body.querySelector(`[data-r="${j}"]`).click()});$('#check').click()}
    else if(q.t==='sort'){q.items.forEach((it,i)=>body.querySelector(`.cb[data-i="${i}"][data-k="${it[1]}"]`).click());$('#check').click()}
    else if(q.t==='fill'){q.ans.forEach(a=>{const j=q.bankS.findIndex((w,k)=>w===a&&!S.cur.b.includes(k));body.querySelector(`.tile[data-j="${j}"]`).click()});$('#check').click()}
    else if(q.t==='typed'){const ti=$('#ti');ti.value=q.acc[0];ti.dispatchEvent(new Event('input'));$('#check').click()}
    else if(q.t==='label'){body.querySelectorAll('select').forEach(s=>{s.value=s.dataset.i;s.dispatchEvent(new Event('change'))});$('#check').click()}
  };
  const ids=Q.topics.map(t=>t.id).concat(['boss']);
  let total=0;
  for(const id of ids){
    try{
      start(id);const n=S.qs.length;total+=n;
      for(let k=0;k<n;k++){solve();if(!S.answered)out.push('NOT-ANSWERED '+id+' #'+(S.i+1)+' '+S.qs[S.i].t);$('#next').click()}
      const pct=document.querySelector('.scorebig').textContent;
      if(pct!=='100%')out.push('SCORE '+id+' = '+pct+' (expected 100%)');
    }catch(err){out.push('ERROR '+id+': '+(err&&err.message))}
  }
  /* wrong-answer path: answer every question with nothing right is not needed; check results screen renders */
  try{localStorage.removeItem(KEY)}catch(e){}
  const pre=document.createElement('pre');pre.id='selftest';
  pre.textContent=out.length?'SELFTEST_FAIL\n'+out.join('\n'):'SELFTEST_OK topics='+Q.topics.length+' questions='+Q.topics.reduce((n,t)=>n+t.Q.length,0)+' played='+total;
  document.body.innerHTML='';document.body.appendChild(pre);
}

/* ---------- entry ---------- */
window.QuizEngine={
  run(cfg){
    Q=cfg;T=LANG[cfg.lang||'en']||LANG.en;
    KEY='sq:'+cfg.id;
    app=document.getElementById('app');
    saved=Object.assign({best:{},xp:0},store.get());
    if(/[?&]selftest/.test(location.search)){selftest();return}
    home();
    const pl=/[?&]play=([\w-]+)/.exec(location.search);   /* QA hook: ?play=<topicId|boss> opens a round directly */
    if(pl&&(pl[1]==='boss'||Q.topics.some(t=>t.id===pl[1])))start(pl[1]);
  }
};
})();
