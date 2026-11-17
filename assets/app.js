(function () {
  "use strict";

  const SESSIONS = WBW_SESSIONS;
  const STORIES = SESSIONS.filter((s) => !s.gap);
  const ACTS = WBW_REALMS.filter((r) => r.id !== "prismeer");
  const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  const SITE = "Wild Beyond Witchling";

  const CODEX = {
    party: { entries: WBW_PARTY, back: "The Party" },
    people: { entries: WBW_PEOPLE, back: "Who's Who" },
    bestiary: { entries: WBW_BESTIARY, back: "Bestiary" },
    places: { entries: WBW_PLACES, back: "Places" }
  };

  const STATUS = {
    ally: "Ally", neutral: "Neutral", suspect: "Suspicious", foe: "Foe", hag: "Hag",
    dead: "Dead", missing: "Missing", rescued: "Rescued", unknown: "Unknown"
  };
  const LOOT_KINDS = { magic: "Magic item", potion: "Potion or brew", treasure: "Treasure", trinket: "Trinket", quest: "Quest item", gear: "Gear" };
  const QUEST_KINDS = { quest: "Quest", bargain: "Bargain", lead: "Lead" };
  const LORE_KINDS = { secret: "Secrets", rhyme: "Rhymes & Sayings", rule: "Rules & Customs", vision: "Visions" };

  const ICONS = {
    carnival: '<path d="M12 3 3 10h18zM5 10v10h14V10M10 20v-4a2 2 0 0 1 4 0v4"/>',
    hither: '<path d="M3 17c3-2 6 2 9 0s6-2 9 0M3 21c3-2 6 2 9 0s6-2 9 0M12 13c-4 0-6-3-6-6 4 0 6 3 6 6zm0 0c4 0 6-3 6-6-4 0-6 3-6 6z"/>',
    thither: '<circle cx="12" cy="8" r="5"/><path d="M12 21v-8M12 16l3-3M12 15l-3-3M8 21h8"/>',
    yon: '<path d="M2 20 9 8l4 6 2-3 7 9z"/><path d="M18.5 2.5a3.5 3.5 0 1 0 3 5 3 3 0 0 1-3-5z"/>',
    prismeer: '<path d="M6 3h12M6 21h12M7 3c0 5 10 6 10 9s-10 4-10 9M17 3c0 5-10 6-10 9s10 4 10 9"/>'
  };

  const realmById = Object.fromEntries(WBW_REALMS.map((r) => [r.id, r]));
  const sessionByKey = Object.fromEntries(SESSIONS.map((s) => [s.key, s]));
  const heroByName = Object.fromEntries(WBW_PARTY.map((p) => [p.aliases[0], p]));

  const appear = {};
  for (const type of Object.keys(CODEX)) {
    appear[type] = {};
    for (const entry of CODEX[type].entries) appear[type][entry.id] = WBW.mentions(entry.aliases, STORIES);
  }
  const links = WBW.linkIndex(["party", "people", "places", "bestiary"].map((type) => ({ type, entries: CODEX[type].entries })));

  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (text) => String(text).replace(/[&<>"']/g, (c) => ESC[c]);
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
  const label = WBW.sessionLabel;
  const href = (s) => `#/session/${encodeURIComponent(s.key)}`;
  const badge = (s) => s.badge || s.key;
  const seenIn = (type, id) => appear[type][id].map((m) => m.session.key);
  const icon = (realm) => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${ICONS[realm] || ICONS.prismeer}</svg>`;
  const entryHref = (type, entry) => `#/${type}/${encodeURIComponent(entry.id)}`;

  function rich(text) {
    return WBW.splitLinks(text, links)
      .map((p) => (p.ref ? `<a class="ref ref-${p.ref.type}" href="${entryHref(p.ref.type, p.ref.entry)}">${esc(p.text)}</a>` : esc(p.text)))
      .join("");
  }

  function sessionLink(key) {
    const s = sessionByKey[key];
    return `<a class="sess-link" href="${href(s)}">${esc(label(s))}</a>`;
  }

  function linkUrls(text) {
    return esc(text).replace(/https?:\/\/[^\s<]+/g, (url) => `<a href="${url}" target="_blank" rel="noopener">${url}</a>`);
  }

  function pageHead(eyebrow, title, intro) {
    return `<header class="page-head"><p class="eyebrow">${esc(eyebrow)}</p><h1>${esc(title)}</h1>${intro ? `<p class="lede">${esc(intro)}</p>` : ""}</header>`;
  }

  const state = { session: "", search: {}, chip: {} };

  const realmChips = (withPrismeer) => ({
    key: "realm",
    label: "Realm",
    all: "Everywhere",
    options: (withPrismeer ? WBW_REALMS : ACTS).map((r) => [r.id, r.short]),
    test: (e, v) => e.realm === v
  });

  const codexList = (type, eyebrow, title, intro, withPrismeer) => ({
    eyebrow,
    title,
    intro,
    placeholder: "Search names and notes…",
    items: () => CODEX[type].entries,
    text: (e) => [e.name, e.blurb].concat(e.aliases).join(" "),
    bySession: true,
    inSession: (e, key) => seenIn(type, e.id).includes(key),
    chips: [realmChips(withPrismeer)],
    render: (items) => codexGroups(type, items),
    noun: type === "places" ? ["place", "places"] : type === "bestiary" ? ["creature", "creatures"] : ["face", "faces"]
  });

  const LISTS = {
    chronicle: {
      top: chronicleTop,
      placeholder: "Search every session…",
      items: () => SESSIONS,
      text: (s) => (s.gap ? "" : [s.title, s.summary].concat(WBW.sessionLines(s).map((l) => l.text)).join(" ")),
      chips: [
        { key: "act", label: "Realm", all: "All realms", options: ACTS.map((a) => [a.id, a.short]), test: (s, v) => s.act === v },
        {
          key: "hero",
          label: "Hero",
          all: "Whole party",
          options: WBW_PARTY.filter((p) => appear.party[p.id].length > 1).map((p) => [p.id, p.aliases[0]]),
          test: (s, v) => !s.gap && seenIn("party", v).includes(s.key)
        }
      ],
      render: chronicleList,
      count: (items) => items.filter((s) => !s.gap).length,
      noun: ["session", "sessions"]
    },
    people: codexList("people", "Dramatis Personae", "Who's Who",
      "Everyone the party has met, from the carnival gate to the mountains of Yon. Choose a session to see who turned up in it.", true),
    bestiary: codexList("bestiary", "Foes & Fiends", "Bestiary",
      "Every creature that stood in the party's way, and how that went.", false),
    places: codexList("places", "The Map, Such As It Is", "Places",
      "Every corner of the carnival and of Prismeer the party has set foot in.", true),
    treasure: {
      eyebrow: "The Party's Haul",
      title: "Treasure",
      intro: "Magic, trinkets, gold and the odd mummified toad: everything picked up, won, stolen or handed over, and who has it now.",
      placeholder: "Search the hoard…",
      items: () => WBW_LOOT,
      text: (l) => [l.name, l.text, l.holder || "", l.value || "", l.status || ""].join(" "),
      bySession: true,
      inSession: (l, key) => l.s === key,
      chips: [
        {
          key: "kind",
          label: "Kind",
          all: "Everything",
          options: [["magic", "Magic items"], ["potion", "Potions"], ["treasure", "Treasure"], ["trinket", "Trinkets"], ["quest", "Quest items"], ["gear", "Gear"]],
          test: (l, v) => l.kind === v
        },
        { key: "holder", label: "Carried by", all: "Anyone", options: WBW_PARTY.filter((p) => WBW_LOOT.some((l) => l.holder === p.aliases[0])).map((p) => [p.aliases[0], p.aliases[0]]), test: (l, v) => l.holder === v }
      ],
      render: lootGrid,
      noun: ["treasure", "treasures"]
    },
    quests: {
      eyebrow: "Promises & Pacts",
      title: "Bargains & Quests",
      intro: "Deals struck with hags, favors promised and threads still hanging. In Prismeer, every bargain has teeth.",
      placeholder: "Search bargains and quests…",
      items: () => WBW_QUESTS,
      text: (q) => [q.title, q.giver].concat(q.steps.map((st) => st.text)).join(" "),
      bySession: true,
      inSession: (q, key) => q.steps.some((st) => st.s === key),
      chips: [
        { key: "status", label: "Status", all: "All", options: [["open", "Open"], ["done", "Done"]], test: (q, v) => q.status === v },
        { key: "kind", label: "Kind", all: "Every kind", options: [["quest", "Quests"], ["bargain", "Bargains"], ["lead", "Leads"]], test: (q, v) => q.kind === v }
      ],
      render: questList,
      noun: ["thread", "threads"]
    },
    lore: {
      eyebrow: "Secrets of Prismeer",
      title: "Lore & Riddles",
      intro: "What the party has learned, the rhymes they've been told, the rules of the Feywild and the visions they've seen.",
      placeholder: "Search the lore…",
      items: () => WBW_LORE,
      text: (l) => [l.title, l.text || "", (l.lines || []).join(" ")].join(" "),
      bySession: true,
      inSession: (l, key) => l.s === key,
      chips: [{ key: "kind", label: "Kind", all: "Everything", options: Object.entries(LORE_KINDS), test: (l, v) => l.kind === v }],
      render: loreGrid,
      noun: ["entry", "entries"]
    }
  };

  function sessionOptions() {
    const groups = ACTS.map((act) => {
      const options = STORIES.filter((s) => s.act === act.id)
        .map((s) => `<option value="${esc(s.key)}"${s.key === state.session ? " selected" : ""}>${esc(label(s))} · ${esc(s.title)}</option>`)
        .join("");
      return `<optgroup label="${esc(act.name)}">${options}</optgroup>`;
    });
    return `<option value="">All sessions</option>${groups.join("")}`;
  }

  function filterBar(name, view) {
    const search = `<label class="field search"><span class="sr-only">Search</span><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m20 20-4.5-4.5"/></svg><input type="search" data-filter="search" placeholder="${esc(view.placeholder)}" value="${esc(state.search[name] || "")}"></label>`;
    const session = view.bySession
      ? `<label class="field session"><span class="field-label">Seen in</span><select data-filter="session">${sessionOptions()}</select></label>`
      : "";
    const chips = (view.chips || [])
      .map((group) => {
        const current = state.chip[`${name}:${group.key}`] || "";
        const buttons = [["", group.all]]
          .concat(group.options)
          .map(([value, text]) => `<button type="button" class="chip" data-chip="${esc(group.key)}" data-value="${esc(value)}" aria-pressed="${value === current}">${esc(text)}</button>`)
          .join("");
        return `<div class="chips" role="group" aria-label="${esc(group.label)}"><span class="chips-label">${esc(group.label)}</span>${buttons}</div>`;
      })
      .join("");
    return `<div class="filters"><div class="filter-row">${search}${session}</div>${chips}</div>`;
  }

  function visible(name, view) {
    const q = (state.search[name] || "").trim().toLowerCase();
    return view.items().filter((item) => {
      if (q && !view.text(item).toLowerCase().includes(q)) return false;
      if (view.bySession && state.session && !view.inSession(item, state.session)) return false;
      return (view.chips || []).every((group) => {
        const want = state.chip[`${name}:${group.key}`] || "";
        return !want || group.test(item, want);
      });
    });
  }

  function chronicleTop() {
    const numbered = STORIES.filter((s) => /^\d+$/.test(s.key));
    const last = numbered[numbered.length - 1];
    const played = Math.max(...SESSIONS.map((s) => Number.parseInt(s.key, 10)).filter((n) => !Number.isNaN(n)));
    const open = WBW_QUESTS.filter((q) => q.status === "open").length;
    const stats = [
      [played, "sessions played"],
      [WBW_PEOPLE.length, "faces met"],
      [WBW_BESTIARY.length, "creatures faced"],
      [WBW_LOOT.length, "treasures found"],
      [open, "threads still open"]
    ];
    return `<section class="hero">
      <p class="hero-motto">Every visit has a cost.</p>
      <p class="hero-text">Strangers who each lost something long ago met at the gate of the Witchlight Carnival. Since then they've stolen a watch, crossed into the Feywild domain of Prismeer, crossed two hags, and lost a smile or two along the way. This is their story, session by session.</p>
      <dl class="stats">${stats.map(([n, t]) => `<div><dt>${esc(t)}</dt><dd>${n}</dd></div>`).join("")}</dl>
    </section>
    <a class="last-time realm-${last.act}" href="${href(last)}">
      <span class="medal">${esc(badge(last))}</span>
      <span><span class="eyebrow">Last time · ${esc(label(last))}</span><span class="last-title">${esc(last.title)}</span><span class="last-sum">${esc(last.summary)}</span></span>
    </a>
    <h1 class="sr-only">The Chronicle</h1>`;
  }

  function chronicleList(items) {
    return ACTS.map((act, i) => {
      const inAct = items.filter((s) => s.act === act.id);
      if (!inAct.length) return "";
      return `<section class="act realm-${act.id}">
        <header class="act-head">${icon(act.id)}<div><p class="eyebrow">Act ${ROMAN[i]}</p><h2>${esc(act.name)}</h2><p>${esc(act.blurb)}</p></div></header>
        <ol class="session-list">${inAct.map(sessionCard).join("")}</ol>
      </section>`;
    }).join("");
  }

  function sessionCard(s) {
    if (s.gap) {
      return `<li><a class="session-card gap" href="${href(s)}"><span class="medal">${esc(badge(s))}</span><span class="card-body"><span class="card-kicker">${esc(label(s))}</span><span class="card-sum">No notes were posted for this session.</span></span></a></li>`;
    }
    const faces = WBW_PEOPLE.filter((e) => seenIn("people", e.id).includes(s.key)).length;
    const loot = WBW_LOOT.filter((l) => l.s === s.key).length;
    const meta = [plural(s.scenes.length, "scene"), plural(faces, "face"), loot ? plural(loot, "treasure") : ""].filter(Boolean).join(" · ");
    const milestone = s.milestone ? `<span class="milestone">${esc(s.milestone)}</span>` : "";
    return `<li><a class="session-card" href="${href(s)}"><span class="medal">${esc(badge(s))}</span><span class="card-body"><span class="card-kicker">${esc(label(s))}${milestone}</span><span class="card-title">${esc(s.title)}</span><span class="card-sum">${esc(s.summary)}</span><span class="card-meta">${esc(meta)}</span></span></a></li>`;
  }

  function pager(prev, next) {
    const side = (s, dir) =>
      s ? `<a class="pager-${dir}" href="${href(s)}"><span class="pager-dir">${dir === "prev" ? "← Previous" : "Next →"}</span><span class="pager-name">${esc(label(s))}${s.gap ? "" : ` · ${esc(s.title)}`}</span></a>` : "<span></span>";
    return `<nav class="pager" aria-label="Sessions">${side(prev, "prev")}<a class="pager-up" href="#/chronicle">All sessions</a>${side(next, "next")}</nav>`;
  }

  function renderSession(key) {
    const s = sessionByKey[key];
    if (!s) return null;
    const i = SESSIONS.indexOf(s);
    const realm = realmById[s.act];
    const nav = pager(SESSIONS[i - 1], SESSIONS[i + 1]);
    if (s.gap) {
      return `<article class="session-page realm-${s.act}">${nav}
        <header class="page-head"><p class="eyebrow">${esc(label(s))} · ${esc(realm.name)}</p><h1>The Missing Page</h1>
        <p class="lede">No notes were posted for this session. If anyone remembers what happened, post it in the Discord channel and it can be added here.</p></header></article>`;
    }
    const scenes = s.scenes
      .map((sc, n) => `<section class="scene"><h2><span class="scene-num">${ROMAN[n]}</span>${esc(sc.title)}</h2><ul>${sc.lines.map((l) => `<li>${rich(l)}</li>`).join("")}</ul></section>`)
      .join("");
    const quotes = (s.quotes || []).length
      ? `<section class="said"><h2>Said at the Table</h2>${s.quotes.map((q) => `<figure class="quote"><blockquote>“${esc(q.text)}”</blockquote><figcaption>${esc(q.by)}</figcaption></figure>`).join("")}</section>`
      : "";
    const next = s.next ? `<p class="next-time"><span>Next time:</span> ${esc(s.next)}</p>` : "";
    return `<article class="session-page realm-${s.act}">${nav}
      <header class="page-head">
        <p class="eyebrow">${icon(s.act)}${esc(label(s))} · ${esc(realm.name)}</p>
        <h1>${esc(s.title)}</h1>
        <p class="lede">${rich(s.summary)}</p>
        ${s.milestone ? `<p class="milestone big">${esc(s.milestone)}</p>` : ""}
        ${s.aside ? `<p class="aside">${esc(s.aside)}</p>` : ""}
      </header>
      <div class="session-grid">
        <div class="session-main">${scenes}${quotes}${next}${tableNotes(s)}</div>
        <aside class="session-side" aria-label="In this session">${sessionSide(s)}</aside>
      </div>
      ${nav}
    </article>`;
  }

  function sessionSide(s) {
    const blocks = [];
    const refs = (type, title) => {
      const hits = CODEX[type].entries.filter((e) => seenIn(type, e.id).includes(s.key));
      if (!hits.length) return;
      const chips = hits.map((e) => `<a class="ref-chip ref-${type}" href="${entryHref(type, e)}">${esc(type === "party" ? e.aliases[0] : e.name)}</a>`).join("");
      blocks.push(`<section><h3>${title}</h3><div class="ref-chips">${chips}</div></section>`);
    };
    refs("party", "The Party");
    refs("people", "Faces");
    refs("bestiary", "Creatures");
    refs("places", "Places");
    const more = (tab) => `<a class="side-more" href="#/${tab}" data-set-session="${esc(s.key)}">Open in ${tab === "quests" ? "Bargains & Quests" : tab === "lore" ? "Lore & Riddles" : "Treasure"} →</a>`;
    const loot = WBW_LOOT.filter((l) => l.s === s.key);
    if (loot.length) {
      blocks.push(`<section><h3>Treasure</h3><ul class="side-list">${loot.map((l) => `<li>${esc(l.name)}${l.holder ? ` <span class="muted">· ${esc(l.holder)}</span>` : ""}</li>`).join("")}</ul>${more("treasure")}</section>`);
    }
    const quests = WBW_QUESTS.filter((q) => q.steps.some((st) => st.s === s.key));
    if (quests.length) {
      blocks.push(`<section><h3>Bargains & Quests</h3><ul class="side-list">${quests.map((q) => `<li><span class="dot status-${q.status}"></span>${esc(q.title)}</li>`).join("")}</ul>${more("quests")}</section>`);
    }
    const lore = WBW_LORE.filter((l) => l.s === s.key);
    if (lore.length) {
      blocks.push(`<section><h3>Lore Learned</h3><ul class="side-list">${lore.map((l) => `<li>${esc(l.title)}</li>`).join("")}</ul>${more("lore")}</section>`);
    }
    return blocks.join("");
  }

  function tableNotes(s) {
    const posts = WBW_NOTES[s.key] || [];
    if (!posts.length) return "";
    return `<details class="table-notes"><summary><span class="tn-title">From the Table</span><span class="tn-sub">${plural(posts.length, "post")} from our Discord channel, word for word</span></summary>
      ${posts.map((p) => `<article class="post"><h3>${esc(p.by)}</h3><div class="post-text">${linkUrls(p.text)}</div></article>`).join("")}</details>`;
  }

  function codexGroups(type, items) {
    return WBW_REALMS.map((realm) => {
      const inRealm = items.filter((e) => e.realm === realm.id);
      if (!inRealm.length) return "";
      return `<section class="codex-group realm-${realm.id}"><h2 class="group-head">${icon(realm.id)}${esc(realm.name)}</h2><div class="codex-grid">${inRealm.map((e) => codexCard(type, e)).join("")}</div></section>`;
    }).join("");
  }

  function codexCard(type, e) {
    const seen = seenIn(type, e.id).map((k) => badge(sessionByKey[k]));
    const tag = type === "bestiary" ? `<span class="outcome">${esc(e.outcome)}</span>`
      : e.status ? `<span class="status status-${e.status}">${esc(STATUS[e.status])}</span>` : "";
    return `<a class="codex-card realm-${e.realm}" href="${entryHref(type, e)}">
      <span class="card-top"><span class="codex-name">${esc(e.name)}</span>${tag}</span>
      <span class="codex-blurb">${esc(e.blurb)}</span>
      <span class="seen">${seen.length ? `${seen.length === 1 ? "Session" : "Sessions"} ${esc(seen.join(", "))}` : "Known from lore"}</span>
    </a>`;
  }

  function sigil(e) {
    return `<span class="sigil hero-${e.id}" aria-hidden="true">${esc(e.name.charAt(0))}</span>`;
  }

  function renderParty() {
    const milestones = STORIES.filter((s) => s.milestone);
    return `${pageHead("The Company", "The Prismeer Players",
      "Strangers who each lost something, thrown together at the gate of the Witchlight Carnival. Since then: a band (the Pixie? and Prismeer Players), Knights of the Soggy Court, and a running feud with three hags.")}
      <div class="party-grid">${WBW_PARTY.map(partyCard).join("")}</div>
      <section class="milestones"><h2>Milestones</h2><ol>${milestones.map((s) => `<li><a href="${href(s)}"><span class="medal small">${esc(badge(s))}</span><span>${esc(s.milestone)}</span></a></li>`).join("")}</ol></section>`;
  }

  function partyCard(e) {
    const seen = seenIn("party", e.id).length;
    return `<a class="party-card hero-${e.id}" href="${entryHref("party", e)}">
      ${sigil(e)}
      <span class="party-name">${esc(e.name)}</span>
      ${e.epithet ? `<span class="epithet">${esc(e.epithet)}</span>` : ""}
      <span class="party-race">${esc([e.race, e.path].filter(Boolean).join(" · "))}</span>
      <span class="party-blurb">${esc(e.blurb)}</span>
      <span class="seen">In ${plural(seen, "session")} of the chronicle</span>
    </a>`;
  }

  function partyExtras(e) {
    const name = e.aliases[0];
    const facts = [["Race", e.race], ["Path", e.path], ["Pixie name", e.pixie], ["Snail", e.snail], ["What was lost", e.lost]].filter(([, v]) => v);
    const carrying = WBW_LOOT.filter((l) => l.holder === name);
    const quotes = STORIES.flatMap((s) => (s.quotes || []).filter((q) => q.by === name).map((q) => ({ q, s })));
    const factHtml = facts.length ? `<dl class="facts">${facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${rich(v)}</dd></div>`).join("")}</dl>` : "";
    const packHtml = carrying.length
      ? `<section class="carrying"><h2>Carrying</h2><ul class="pack">${carrying.map((l) => `<li><span class="pack-name">${esc(l.name)}</span>${sessionLink(l.s)}</li>`).join("")}</ul></section>`
      : "";
    const saidHtml = quotes.length
      ? `<section class="said"><h2>Said at the Table</h2>${quotes.map(({ q, s }) => `<figure class="quote"><blockquote>“${esc(q.text)}”</blockquote><figcaption>${sessionLink(s.key)}</figcaption></figure>`).join("")}</section>`
      : "";
    return factHtml + packHtml + saidHtml;
  }

  function renderDetail(type, id) {
    const e = CODEX[type].entries.find((x) => x.id === id);
    if (!e) return null;
    const realm = realmById[e.realm];
    const hits = appear[type][id];
    const eyebrow = type === "party" ? "The Party" : [realm.name, type === "bestiary" ? e.outcome : STATUS[e.status]].filter(Boolean).join(" · ");
    const story = hits.length
      ? hits.map((m) => `<section class="appearance"><h3><a href="${href(m.session)}"><span class="medal small">${esc(badge(m.session))}</span>${esc(m.session.title)}</a></h3><ul>${m.lines.map((l) => `<li>${rich(l.text)}</li>`).join("")}</ul></section>`).join("")
      : `<p class="empty">Not named in a session recap yet: see Lore & Riddles.</p>`;
    return `<article class="detail ${type === "party" ? `hero-${e.id}` : `realm-${e.realm}`}">
      <a class="back" href="#/${type}">← ${esc(CODEX[type].back)}</a>
      <header class="page-head detail-head">${type === "party" ? sigil(e) : `<span class="detail-icon">${icon(e.realm)}</span>`}
        <div><p class="eyebrow">${esc(eyebrow)}</p><h1>${esc(e.name)}</h1>${e.epithet ? `<p class="epithet">${esc(e.epithet)}</p>` : ""}<p class="lede">${rich(e.blurb)}</p></div>
      </header>
      ${type === "party" ? partyExtras(e) : ""}
      <section class="story"><h2>${type === "party" ? "Their Story, Line by Line" : "In the Chronicle"}</h2>${story}</section>
    </article>`;
  }

  function lootGrid(items) {
    return `<div class="loot-grid">${items.map(lootCard).join("")}</div>`;
  }

  function lootCard(l) {
    const hero = heroByName[l.holder];
    const holder = hero ? `<a href="${entryHref("party", hero)}">${esc(l.holder)}</a>` : l.holder ? esc(l.holder) : "";
    const rows = [["Found", sessionLink(l.s)], holder && ["Carried by", holder], l.value && ["Worth", esc(l.value)], l.status && ["Now", esc(l.status)]].filter(Boolean);
    return `<article class="loot-card kind-${l.kind}">
      <span class="loot-kind">${esc(LOOT_KINDS[l.kind])}</span>
      <h3>${esc(l.name)}</h3>
      ${l.text ? `<p>${rich(l.text)}</p>` : ""}
      <dl>${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
      ${l.link ? `<a class="ext" href="${esc(l.link)}" target="_blank" rel="noopener">Look it up on D&amp;D Beyond ↗</a>` : ""}
    </article>`;
  }

  function questList(items) {
    return `<div class="quest-list">${items.map((q) => `<article class="quest status-${q.status}">
      <header class="quest-top"><span class="quest-kind">${esc(QUEST_KINDS[q.kind])}</span><span class="quest-status">${q.status === "done" ? "Done" : "Open"}</span></header>
      <h3>${esc(q.title)}</h3>
      <p class="giver">From ${rich(q.giver)}</p>
      <ol class="steps">${q.steps.map((st) => `<li${st.s === state.session ? ' class="here"' : ""}><span class="step-when">${sessionLink(st.s)}</span><span class="step-text">${rich(st.text)}</span></li>`).join("")}</ol>
    </article>`).join("")}</div>`;
  }

  function loreGrid(items) {
    return `<div class="lore-grid">${items.map((l) => {
      const body = l.lines
        ? l.kind === "rule"
          ? `<ol class="rules">${l.lines.map((line) => `<li>${esc(line)}</li>`).join("")}</ol>`
          : `<div class="verse">${l.lines.map((line) => `<p>${esc(line)}</p>`).join("")}</div>`
        : `<p>${rich(l.text)}</p>`;
      return `<article class="lore-card kind-${l.kind}"><span class="lore-kind">${esc(LORE_KINDS[l.kind])}</span><h3>${esc(l.title)}</h3>${body}<p class="learned">${sessionLink(l.s)}</p></article>`;
    }).join("")}</div>`;
  }

  const TABS = [
    ["chronicle", "Chronicle"], ["party", "The Party"], ["people", "Who's Who"], ["bestiary", "Bestiary"],
    ["places", "Places"], ["treasure", "Treasure"], ["quests", "Bargains & Quests"], ["lore", "Lore & Riddles"]
  ];

  const viewEl = document.getElementById("view");

  function renderTabs(active) {
    document.getElementById("tabs").innerHTML = TABS.map(([id, text]) =>
      `<a class="tab${id === active ? " active" : ""}" href="#/${id}"${id === active ? ' aria-current="page"' : ""}>${esc(text)}</a>`).join("");
  }

  function showList(name) {
    const view = LISTS[name];
    viewEl.innerHTML = `${view.top ? view.top() : pageHead(view.eyebrow, view.title, view.intro)}${filterBar(name, view)}<p class="count" id="count" aria-live="polite"></p><div id="list" class="list list-${name}"></div>`;
    viewEl.dataset.list = name;
    refreshList();
  }

  function refreshList() {
    const name = viewEl.dataset.list;
    const view = LISTS[name];
    const items = visible(name, view);
    document.getElementById("list").innerHTML = items.length ? view.render(items) : '<p class="empty">Nothing matches. Try another session, or fewer filters.</p>';
    const n = view.count ? view.count(items) : items.length;
    document.getElementById("count").textContent = `${n} ${n === 1 ? view.noun[0] : view.noun[1]}`;
  }

  function showPage(html, title) {
    delete viewEl.dataset.list;
    viewEl.innerHTML = html || `<section class="page-head"><p class="eyebrow">Lost in the Feywild</p><h1>This Path Leads Nowhere</h1><p class="lede">That page wandered off. <a href="#/chronicle">Back to the chronicle.</a></p></section>`;
    document.title = html ? `${title} · ${SITE}` : SITE;
  }

  function route() {
    const [name, arg] = location.hash.replace(/^#\/?/, "").split("/").map((part) => decodeURIComponent(part));
    let tab = name;
    if (name === "session") {
      tab = "chronicle";
      const s = sessionByKey[arg];
      showPage(renderSession(arg), s ? `${label(s)}${s.gap ? "" : `: ${s.title}`}` : "");
    } else if (CODEX[name] && arg) {
      const e = CODEX[name].entries.find((x) => x.id === arg);
      showPage(renderDetail(name, arg), e ? e.name : "");
    } else if (name === "party") {
      showPage(renderParty(), "The Party");
    } else if (LISTS[name] && name !== "chronicle") {
      showList(name);
      document.title = `${LISTS[name].title} · ${SITE}`;
    } else {
      tab = "chronicle";
      showList("chronicle");
      document.title = `${SITE} · The Chronicle`;
    }
    renderTabs(tab);
    window.scrollTo(0, 0);
  }

  viewEl.addEventListener("input", (ev) => {
    if (ev.target.dataset.filter !== "search") return;
    state.search[viewEl.dataset.list] = ev.target.value;
    refreshList();
  });

  viewEl.addEventListener("change", (ev) => {
    if (ev.target.dataset.filter !== "session") return;
    state.session = ev.target.value;
    refreshList();
  });

  viewEl.addEventListener("click", (ev) => {
    const chip = ev.target.closest("[data-chip]");
    if (chip) {
      state.chip[`${viewEl.dataset.list}:${chip.dataset.chip}`] = chip.dataset.value;
      for (const b of chip.parentElement.querySelectorAll("[data-chip]")) b.setAttribute("aria-pressed", String(b === chip));
      refreshList();
      return;
    }
    const jump = ev.target.closest("[data-set-session]");
    if (jump) state.session = jump.dataset.setSession;
  });

  function fireflies() {
    const host = document.getElementById("fireflies");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = (min, span) => (min + Math.random() * span).toFixed(1);
    let html = "";
    for (let i = 0; i < 18; i++) {
      html += `<span style="left:${r(0, 100)}%;top:${r(0, 100)}%;animation-duration:${r(10, 12)}s,${r(2, 3)}s;animation-delay:-${r(0, 10)}s,-${r(0, 3)}s"></span>`;
    }
    host.innerHTML = html;
  }

  window.addEventListener("hashchange", route);
  fireflies();
  route();
})();
