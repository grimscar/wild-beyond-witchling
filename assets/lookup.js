const WBW = (function () {
  "use strict";

  function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function aliasPattern(aliases, flags) {
    const parts = aliases.slice().sort(function (a, b) { return b.length - a.length; }).map(escapeRegExp);
    return new RegExp("\\b(?:" + parts.join("|") + ")\\b", flags || "");
  }

  function sessionLines(session) {
    const out = [];
    (session.scenes || []).forEach(function (scene) {
      scene.lines.forEach(function (text) { out.push({ scene: scene.title, text: text }); });
    });
    return out;
  }

  function mentions(aliases, sessions) {
    const re = aliasPattern(aliases);
    const out = [];
    sessions.forEach(function (session) {
      const lines = sessionLines(session).filter(function (line) { return re.test(line.text); });
      if (lines.length) out.push({ session: session, lines: lines });
    });
    return out;
  }

  function sessionLabel(session) {
    return session.label || "Session " + session.key;
  }

  function linkIndex(groups) {
    const byAlias = {};
    const aliases = [];
    groups.forEach(function (group) {
      group.entries.forEach(function (entry) {
        (entry.aliases || []).forEach(function (alias) {
          if (byAlias[alias]) return;
          byAlias[alias] = { type: group.type, entry: entry };
          aliases.push(alias);
        });
      });
    });
    return { pattern: aliases.length ? aliasPattern(aliases, "g") : null, byAlias: byAlias };
  }

  function splitLinks(text, index) {
    const parts = [];
    let last = 0;
    if (index.pattern) {
      index.pattern.lastIndex = 0;
      let m = index.pattern.exec(text);
      while (m) {
        if (m.index > last) parts.push({ text: text.slice(last, m.index) });
        parts.push({ text: m[0], ref: index.byAlias[m[0]] });
        last = m.index + m[0].length;
        m = index.pattern.exec(text);
      }
    }
    if (last < text.length) parts.push({ text: text.slice(last) });
    return parts;
  }

  return {
    aliasPattern: aliasPattern,
    sessionLines: sessionLines,
    mentions: mentions,
    sessionLabel: sessionLabel,
    linkIndex: linkIndex,
    splitLinks: splitLinks
  };
})();
