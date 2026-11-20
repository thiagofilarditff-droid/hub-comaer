(function () {
  var PAPER = '#edf1f6', INK = '#27425f', BAR = '#9aaec4', BRASS = '#b8892b';

  function bar(x, y, w, h, fill) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + (h || 3.2) + '" rx="1" fill="' + (fill || BAR) + '"/>';
  }
  function rows(x, y0, step, widths, fill) {
    return widths.map(function (w, i) { return bar(x, y0 + i * step, w, 3.2, fill); }).join('');
  }
  // Total de demonstrativo: regra dupla sob a coluna
  function total(x1, x2, y) {
    return '<line x1="' + x1 + '" x2="' + x2 + '" y1="' + y + '" y2="' + y + '" stroke="' + BRASS + '" stroke-width="1"/>' +
           '<line x1="' + x1 + '" x2="' + x2 + '" y1="' + (y + 2.4) + '" y2="' + (y + 2.4) + '" stroke="' + BRASS + '" stroke-width="1"/>';
  }

  // Miniaturas de folha: cada uma imita a estrutura do demonstrativo que o aplicativo gera.
  var SHEETS = {
    bp: function () { // ativo | passivo e patrimônio líquido
      return '<line x1="36" x2="36" y1="26" y2="66" stroke="' + BAR + '" stroke-width=".8"/>' +
        rows(8, 28, 7.5, [20, 15, 18, 12, 19]) + rows(41, 28, 7.5, [17, 20, 13, 19, 12]) +
        total(8, 31, 69) + total(41, 64, 69);
    },
    bo: function () { // previsão | realizada | saldo
      return rows(8, 28, 6.8, [13, 10, 13, 9, 12, 11]) + rows(30, 28, 6.8, [12, 13, 9, 13, 10, 12]) +
        rows(50, 28, 6.8, [14, 9, 12, 13, 11, 13]) + total(8, 64, 71);
    },
    dvp: function () { // aumentativas, diminutivas e resultado
      var l1 = rows(8, 28, 7, [24, 19, 26]), r1 = rows(54, 28, 7, [10, 10, 9]).replace(/x="54"/g, 'x="54"');
      var l2 = rows(8, 52, 7, [22, 27, 17]), r2 = rows(52, 52, 7, [12, 9, 11]);
      return l1 + r1 + '<line x1="8" x2="64" y1="48.5" y2="48.5" stroke="' + BAR + '" stroke-width=".8"/>' + l2 + r2 + total(8, 64, 76);
    },
    rg: function () { // texto corrido com gráfico
      var ln = rows(8, 28, 6, [56, 56, 56, 34]);
      var chart = '<rect x="8" y="55" width="56" height="20" rx="1.5" fill="none" stroke="' + BAR + '" stroke-width=".8"/>' +
        '<rect x="16" y="64" width="6" height="8" fill="' + BAR + '"/><rect x="27" y="60" width="6" height="12" fill="' + BAR + '"/>' +
        '<rect x="38" y="66" width="6" height="6" fill="' + BAR + '"/><rect x="49" y="58" width="6" height="14" fill="' + BRASS + '"/>';
      return ln + chart + bar(8, 80, 40, 3.2);
    }
  };

  function sheet(app) {
    var draw = SHEETS[app.sheet] || SHEETS.rg;
    return '<svg class="sheet" viewBox="0 0 72 92" width="72" height="92" aria-hidden="true" focusable="false">' +
      '<rect width="72" height="92" rx="3" fill="' + PAPER + '"/>' +
      '<text x="8" y="16" font-size="10" font-weight="700" fill="' + INK + '">' + app.code + '</text>' +
      '<line x1="8" x2="64" y1="21" y2="21" stroke="' + BAR + '" stroke-width=".8"/>' + draw() + '</svg>';
  }

  var OUT = '<svg class="out" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';

  var list = document.getElementById('apps');
  (window.HUB_APPS || []).forEach(function (app) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.className = 'app';
    a.href = app.url;
    // Abre o aplicativo em outra guia, sem dar à página aberta acesso ao portal (noopener).
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', 'Abrir ' + app.title + ' em nova guia');

    a.insertAdjacentHTML('beforeend', sheet(app));

    var body = document.createElement('div');
    body.className = 'body';
    var h = document.createElement('h3');
    h.textContent = app.title;
    var d = document.createElement('p');
    d.className = 'desc';
    d.textContent = app.description;
    var e = document.createElement('p');
    e.className = 'entrada';
    e.textContent = app.entrada;
    body.appendChild(h);
    body.appendChild(d);
    body.appendChild(e);
    a.appendChild(body);

    var go = document.createElement('span');
    go.className = 'go';
    go.innerHTML = 'Abrir ' + OUT;
    a.appendChild(go);

    li.appendChild(a);
    list.appendChild(li);
  });
})();
