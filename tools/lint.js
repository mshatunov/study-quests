#!/usr/bin/env node
/* Fast data check without Chrome: node tools/lint.js <test-id>
   Validates tests/<id>/data.js with the real engine rules and reports glossary coverage. */
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.join(__dirname,'..'),id=process.argv[2];
if(!id){console.error('usage: node tools/lint.js <test-id>');process.exit(2)}
const noop=()=>null;
const ctx={console,setTimeout,clearTimeout,SQ_LINT:true};ctx.window=ctx;
ctx.document={addEventListener:noop,querySelector:noop,querySelectorAll:()=>[],getElementById:noop,createElement:()=>({})};
ctx.localStorage={getItem:noop,setItem:noop,removeItem:noop};ctx.location={search:''};
vm.createContext(ctx);
for(const f of ['assets/engine.js',`tests/${id}/data.js`])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx,{filename:f});
const r=ctx.SQ_LINT;
if(r===true){console.error('data.js did not call QuizEngine.run');process.exit(1)}
console.log(`${r.bad.length?'LINT_FAIL':'LINT_OK'} topics=${r.topics} questions=${r.questions} glossary=${r.glossary} gloss=${r.gloss}`);
console.log('types '+JSON.stringify(r.types));
r.bad.forEach(b=>console.log('DATA: '+b));
if(r.miss.length)console.log('no glossary term in:\n  '+r.miss.join('\n  '));
process.exit(r.bad.length?1:0);
