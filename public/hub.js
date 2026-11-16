(function () {
  var root = document.getElementById('apps');
  var apps = window.HUB_APPS || [];
  apps.forEach(function (app) {
    var a = document.createElement('a');
    a.className = 'card';
    a.href = app.url;
    a.setAttribute('aria-label', 'Abrir ' + app.title);

    var badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = app.code;

    var h = document.createElement('h3');
    h.textContent = app.title;

    var p = document.createElement('p');
    p.textContent = app.description;

    var ul = document.createElement('ul');
    ul.className = 'inputs';
    app.inputs.forEach(function (t) {
      var li = document.createElement('li');
      li.textContent = t;
      ul.appendChild(li);
    });

    var cta = document.createElement('span');
    cta.className = 'cta';
    cta.textContent = 'Abrir aplicativo';
    cta.setAttribute('aria-hidden', 'true');
    cta.insertAdjacentHTML('beforeend', ' <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>');

    a.appendChild(badge);
    a.appendChild(h);
    a.appendChild(p);
    a.appendChild(ul);
    a.appendChild(cta);
    root.appendChild(a);
  });
})();
