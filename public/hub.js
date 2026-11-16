(function () {
  var ICONS = {
    scale: '<path d="M12 3v18"/><path d="M7 21h10"/><path d="M5 7h14"/><path d="m5 7-3 7a3 3 0 0 0 6 0L5 7Z"/><path d="m19 7-3 7a3 3 0 0 0 6 0l-3-7Z"/>',
    chart: '<path d="M4 20V11"/><path d="M10 20V4"/><path d="M16 20v-6"/><path d="M22 20H2"/>',
    trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/>',
    app: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 12h6"/>'
  };
  var ARROW = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>';

  function svg(name) {
    return '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.app) + '</svg>';
  }

  var root = document.getElementById('apps');
  (window.HUB_APPS || []).forEach(function (app) {
    var a = document.createElement('a');
    a.className = 'card';
    a.href = app.url;
    a.setAttribute('aria-label', 'Abrir ' + app.title);
    if (app.accent) a.style.setProperty('--accent', app.accent);

    var top = document.createElement('div');
    top.className = 'card-top';
    var icon = document.createElement('span');
    icon.className = 'icon';
    icon.innerHTML = svg(app.icon);
    var badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = app.code;
    top.appendChild(icon);
    top.appendChild(badge);

    var h = document.createElement('h2');
    h.textContent = app.title;

    var p = document.createElement('p');
    p.className = 'desc';
    p.textContent = app.description;

    var ul = document.createElement('ul');
    ul.className = 'inputs';
    (app.inputs || []).forEach(function (t) {
      var li = document.createElement('li');
      li.textContent = t;
      ul.appendChild(li);
    });

    var cta = document.createElement('span');
    cta.className = 'cta';
    cta.innerHTML = 'Abrir aplicativo ' + ARROW;

    a.appendChild(top);
    a.appendChild(h);
    a.appendChild(p);
    a.appendChild(ul);
    a.appendChild(cta);
    root.appendChild(a);
  });
})();
