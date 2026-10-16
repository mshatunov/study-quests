#!/usr/bin/env python3
"""Study Quests helper.

  sq.py themes                      list themes, usage counts, and the suggested next theme
  sq.py new <id> --subject science --title "..." [--theme auto|<theme>] [--lang en|ru] [--blurb "..."]
  sq.py check [<id>]                headless-Chrome selftest (validates data, auto-plays every question)
  sq.py build                       regenerate index.html (homepage) and every tests/<id>/index.html
  sq.py publish <id> -m "message"   check + build + git commit + push + wait for GitHub Pages
"""
import argparse, datetime, html, json, os, re, subprocess, sys, time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
REPO = "mshatunov/study-quests"
SITE = "https://mshatunov.github.io/study-quests/"
SUBJECT_EMOJI = {"science": "🔬", "maths": "➗", "math": "➗", "english": "📖", "russian": "✍️", "history": "🏛️",
                 "geography": "🌍", "azerbaijani": "🇦🇿", "computing": "💻", "art": "🎨", "music": "🎵"}


def load(path, default=None):
    p = os.path.join(ROOT, path)
    if not os.path.exists(p):
        return default
    with open(p, encoding="utf-8") as f:
        return json.load(f)


def save(path, obj):
    with open(os.path.join(ROOT, path), "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=1)
        f.write("\n")


def themes_usage():
    themes = load("themes/themes.json")
    tests = sorted(load("tests.json", []), key=lambda t: t["date"])
    counts = {t["id"]: 0 for t in themes}
    last = {t["id"]: "" for t in themes}
    for t in tests:
        counts[t["theme"]] = counts.get(t["theme"], 0) + 1
        last[t["theme"]] = t["date"]
    recent = [t["theme"] for t in tests][-3:]
    return themes, counts, last, recent


def suggest_theme():
    themes, counts, last, recent = themes_usage()
    pool = [t["id"] for t in themes if t["id"] not in recent] or [t["id"] for t in themes]
    pool.sort(key=lambda i: (counts[i], last[i], i))
    return pool[0]


def cmd_themes(_):
    themes, counts, last, recent = themes_usage()
    sug = suggest_theme()
    for t in themes:
        flag = "  <- suggested" if t["id"] == sug else ("  (used in the last 3 tests)" if t["id"] in recent else "")
        print(f'{t["id"]:10} used {counts[t["id"]]}x  last {last[t["id"]] or "-":10}  {t["vibe"]}{flag}')


DATA_TEMPLATE = '''/* {title} - source materials: FILL IN (file names, date). */
(function(){{
/* Builders: mc, tf, multi, order, match, sort, fill, typed, label. Read the skill's references/question-types.md.
   HTML allowed in text: <sub> <sup> <b> <i> <br>. Every question needs an explanation (e) and ideally a source (s). */
const TOPICS=[
{{id:'topic1', ico:'📘', name:'Topic one', blurb:'what is inside', Q:[
 mc('Example question?','Right answer',['Wrong 1','Wrong 2','Wrong 3'],'Why it is right (one or two sentences).','Slides.pdf'),
 tf('Example statement.',true,'Why.','Slides.pdf'),
]}}
];
const VOCAB=[['term','перевод','short note']];
TOPICS.forEach(t=>{{t.sheet='<h3>Key facts</h3><ul><li>...</li></ul>'}});
QuizEngine.run({{id:'{id}',lang:'{lang}',logo:'{emoji} {logo}',title:'{title}',bossSize:25,topics:TOPICS,vocab:VOCAB}});
}})();
'''


def cmd_new(a):
    tests = load("tests.json", [])
    if any(t["id"] == a.id for t in tests):
        sys.exit(f"test '{a.id}' already exists")
    theme = suggest_theme() if a.theme == "auto" else a.theme
    if theme not in [t["id"] for t in load("themes/themes.json")]:
        sys.exit(f"unknown theme {theme}")
    d = os.path.join(ROOT, "tests", a.id)
    os.makedirs(d, exist_ok=True)
    emoji = SUBJECT_EMOJI.get(a.subject.lower(), "📚")
    with open(os.path.join(d, "data.js"), "w", encoding="utf-8") as f:
        f.write(DATA_TEMPLATE.format(id=a.id, lang=a.lang, title=a.title.replace("'", "\\'"), emoji=emoji, logo=(a.subject.title() + " Quest")))
    tests.append({"id": a.id, "subject": a.subject.lower(), "title": a.title, "blurb": a.blurb or "", "theme": theme,
                  "date": datetime.date.today().isoformat(), "lang": a.lang, "questions": 0, "topics": 0})
    save("tests.json", tests)
    print(f"created tests/{a.id}/data.js with theme '{theme}'. Write the questions, then: sq.py check {a.id}")


PAGE = '''<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
{fonts}<link rel="stylesheet" href="../../assets/engine.css">
<link rel="stylesheet" href="../../themes/{theme}.css">
</head>
<body>
<canvas id="confetti"></canvas>
<div class="wrap" id="app"></div>
<script src="../../assets/engine.js"></script>
<script src="data.js"></script>
</body>
</html>
'''


def fonts_tag(theme_id):
    for t in load("themes/themes.json"):
        if t["id"] == theme_id and t.get("fonts"):
            return ('<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
                    f'<link rel="stylesheet" href="{t["fonts"]}">\n')
    return ""


def build_pages():
    tests = load("tests.json", [])
    for t in tests:
        d = os.path.join(ROOT, "tests", t["id"])
        if not os.path.exists(os.path.join(d, "data.js")):
            sys.exit(f"missing tests/{t['id']}/data.js")
        with open(os.path.join(d, "index.html"), "w", encoding="utf-8") as f:
            f.write(PAGE.format(lang=t.get("lang", "en"), title=html.escape(t["title"]), fonts=fonts_tag(t["theme"]), theme=t["theme"]))
    build_home(tests)
    print(f"built homepage + {len(tests)} test page(s)")


HOME = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Study Quests</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Nunito:wght@600;800&display=swap">
<style>
:root{{--bg:#f3f1ec;--ink:#1d2433;--soft:#5b6478;--card:#fff;--line:#e0dcd2;--accent:#2f5bea}}
*{{box-sizing:border-box}}
html,body{{margin:0}}
body{{background:var(--bg);color:var(--ink);font-family:"Nunito","Trebuchet MS",system-ui,sans-serif;font-size:18px;line-height:1.4}}
.wrap{{max-width:1000px;margin:0 auto;padding:22px 16px 80px}}
header{{display:flex;justify-content:space-between;align-items:flex-end;gap:12px;flex-wrap:wrap;margin-bottom:6px}}
h1{{font-family:"Baloo 2",system-ui,sans-serif;font-size:46px;line-height:1;margin:0;letter-spacing:-.01em}}
.xp{{font-weight:800;background:var(--card);border:2px solid var(--line);border-radius:999px;padding:5px 14px}}
.lead{{color:var(--soft);margin:6px 0 18px}}
.filters{{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px}}
.f{{font:inherit;font-weight:800;border:2px solid var(--line);background:var(--card);border-radius:999px;padding:6px 14px;cursor:pointer;color:var(--ink)}}
.f.on{{background:var(--ink);color:#fff;border-color:var(--ink)}}
h2{{font-family:"Baloo 2",system-ui,sans-serif;font-size:26px;margin:26px 0 10px}}
.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:16px}}
a.card{{display:flex;flex-direction:column;text-decoration:none;color:inherit;background:var(--card);border:2px solid var(--line);border-radius:20px;overflow:hidden;transition:transform .15s,box-shadow .15s}}
a.card:hover{{transform:translateY(-4px);box-shadow:0 12px 28px rgba(20,30,60,.16)}}
a.card:focus-visible{{outline:3px solid var(--accent)}}
.banner{{height:120px;display:flex;align-items:center;justify-content:center;font-size:56px;position:relative}}
.new{{position:absolute;top:10px;right:10px;background:#fff;color:#111;font:800 13px "Nunito",sans-serif;border-radius:999px;padding:3px 10px;letter-spacing:.05em}}
.body{{padding:12px 14px 14px;display:flex;flex-direction:column;gap:6px;flex:1;min-width:0}}
.body h3{{margin:0;font-family:"Baloo 2",system-ui,sans-serif;font-size:22px;line-height:1.15}}
.body p{{margin:0;color:var(--soft);font-size:15px}}
.meta{{display:flex;gap:6px;flex-wrap:wrap;margin-top:auto;padding-top:6px;font-size:14px;font-weight:800;color:var(--soft)}}
.pill{{border:2px solid var(--line);border-radius:999px;padding:1px 9px;background:#faf9f6}}
.stars{{color:#e8a400;letter-spacing:2px}}
footer{{margin-top:36px;color:var(--soft);font-size:15px}}
@media(prefers-reduced-motion:reduce){{a.card{{transition:none}}}}
</style>
</head>
<body>
<div class="wrap">
<header><h1>Study Quests</h1><span class="xp" id="xp">⭐ 0 XP</span></header>
<p class="lead">Pick a quest to get ready for the next test. Every quest looks different - and every question comes from your class materials.</p>
<div class="filters" id="filters"></div>
<main id="main"></main>
<footer>Progress is saved in this browser.</footer>
</div>
<script>
const TESTS={tests};
const SUBJECTS={subjects};
function esc(s){{return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}}
function progress(id){{try{{const d=JSON.parse(localStorage.getItem('sq:'+id)||'{{}}');return {{xp:d.xp||0,boss:(d.best||{{}}).boss||0}}}}catch(e){{return {{xp:0,boss:0}}}}}}
let filter='all';
function render(){{
  let totalXp=0;TESTS.forEach(t=>totalXp+=progress(t.id).xp);
  document.getElementById('xp').textContent='⭐ '+totalXp+' XP';
  const subs=[...new Set(TESTS.map(t=>t.subject))];
  document.getElementById('filters').innerHTML=['all'].concat(subs).map(s=>`<button class="f ${{filter===s?'on':''}}" data-f="${{s}}">${{s==='all'?'All':(SUBJECTS[s]||'📚')+' '+s.charAt(0).toUpperCase()+s.slice(1)}}</button>`).join('');
  document.querySelectorAll('.f').forEach(b=>b.onclick=()=>{{filter=b.dataset.f;render()}});
  const bySub={{}};TESTS.filter(t=>filter==='all'||t.subject===filter).forEach(t=>(bySub[t.subject]=bySub[t.subject]||[]).push(t));
  const now=Date.now();
  document.getElementById('main').innerHTML=Object.keys(bySub).map(s=>`<h2>${{SUBJECTS[s]||'📚'}} ${{s.charAt(0).toUpperCase()+s.slice(1)}}</h2><div class="grid">${{bySub[s].sort((a,b)=>b.date.localeCompare(a.date)).map(t=>{{
    const p=progress(t.id),isNew=(now-new Date(t.date).getTime())<8*864e5,st=p.boss>=90?3:p.boss>=70?2:p.boss>=40?1:0;
    return `<a class="card" href="tests/${{t.id}}/"><div class="banner" style="background:linear-gradient(135deg,${{t.preview[0]}},${{t.preview[1]}} 60%,${{t.preview[2]}})">${{t.mascot}}${{isNew?'<span class="new">NEW</span>':''}}</div>
    <div class="body"><h3>${{esc(t.title)}}</h3><p>${{esc(t.blurb)}}</p><div class="meta"><span class="pill">${{t.questions}} questions</span><span class="pill">${{esc(t.themeName)}} look</span>${{p.boss?`<span class="stars">${{'★'.repeat(st)}}${{'☆'.repeat(3-st)}}</span> <span>${{p.boss}}%</span>`:''}}</div></div></a>`}}).join('')}}</div>`).join('')||'<p class="lead">No quests yet.</p>';
}}
render();
</script>
</body>
</html>
'''


def build_home(tests):
    themes = {t["id"]: t for t in load("themes/themes.json")}
    items = []
    for t in tests:
        th = themes[t["theme"]]
        items.append({"id": t["id"], "subject": t["subject"], "title": t["title"], "blurb": t.get("blurb", ""), "date": t["date"],
                      "questions": t.get("questions", 0), "mascot": th["mascot"], "preview": th["preview"], "themeName": th["name"]})
    subj = {s: SUBJECT_EMOJI.get(s, "📚") for s in {t["subject"] for t in tests}}
    with open(os.path.join(ROOT, "index.html"), "w", encoding="utf-8") as f:
        f.write(HOME.format(tests=json.dumps(items, ensure_ascii=False), subjects=json.dumps(subj, ensure_ascii=False)))


def run_check(tid):
    page = os.path.join(ROOT, "tests", tid, "index.html")
    if not os.path.exists(page):
        build_pages()
    cmd = [CHROME, "--headless=new", "--disable-gpu", "--no-first-run", "--virtual-time-budget=30000", "--dump-dom", f"file://{page}?selftest"]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
    m = re.search(r'<pre id="selftest">(.*?)</pre>', r.stdout, re.S)
    if not m:
        print(f"[{tid}] SELFTEST did not run (page script error?)\n" + r.stdout[:600] + r.stderr[-600:])
        return False
    out = html.unescape(m.group(1)).strip()
    print(f"[{tid}] {out}")
    if out.startswith("SELFTEST_OK"):
        q = int(re.search(r"questions=(\d+)", out).group(1))
        tp = int(re.search(r"topics=(\d+)", out).group(1))
        tests = load("tests.json", [])
        for t in tests:
            if t["id"] == tid:
                t["questions"], t["topics"] = q, tp
        save("tests.json", tests)
        return True
    return False


def cmd_check(a):
    ids = [a.id] if a.id else [t["id"] for t in load("tests.json", [])]
    build_pages()
    ok = all([run_check(i) for i in ids])
    build_pages()  # refresh question counts on the homepage
    sys.exit(0 if ok else 1)


def cmd_build(_):
    build_pages()


def sh(*cmd, check=True):
    r = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True)
    if check and r.returncode:
        sys.exit(f"{' '.join(cmd)} failed:\n{r.stdout}{r.stderr}")
    return r.stdout.strip()


def cmd_publish(a):
    build_pages()
    if not run_check(a.id):
        sys.exit("selftest failed - not publishing")
    build_pages()
    sh("git", "add", "-A")
    if not sh("git", "status", "--porcelain"):
        print("nothing to commit")
    else:
        sh("git", "-c", "user.name=Maxim Shatunov", "-c", "user.email=mshatunov@gmail.com", "commit", "-m", a.m)
        sh("git", "push", "origin", "main")
    print("pushed; waiting for GitHub Pages ...")
    status = ""
    for _ in range(24):
        time.sleep(10)
        status = sh("gh", "api", f"repos/{REPO}/pages/builds/latest", "--jq", ".status", check=False)
        if status == "built":
            break
    print(f"pages build: {status or 'unknown'}")
    print(f"homepage: {SITE}\ntest:     {SITE}tests/{a.id}/")


def main():
    p = argparse.ArgumentParser()
    s = p.add_subparsers(dest="cmd", required=True)
    s.add_parser("themes").set_defaults(f=cmd_themes)
    n = s.add_parser("new"); n.add_argument("id"); n.add_argument("--subject", required=True); n.add_argument("--title", required=True)
    n.add_argument("--theme", default="auto"); n.add_argument("--lang", default="en"); n.add_argument("--blurb", default=""); n.set_defaults(f=cmd_new)
    c = s.add_parser("check"); c.add_argument("id", nargs="?"); c.set_defaults(f=cmd_check)
    s.add_parser("build").set_defaults(f=cmd_build)
    u = s.add_parser("publish"); u.add_argument("id"); u.add_argument("-m", required=True); u.set_defaults(f=cmd_publish)
    a = p.parse_args(); a.f(a)


if __name__ == "__main__":
    main()
