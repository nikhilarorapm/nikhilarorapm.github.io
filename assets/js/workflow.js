/* Workflow map: on wide screens, clicking a step shows its details in one panel.
   On phones (or without JavaScript) every step stays in an expandable list. */
(function () {
  var wf = document.querySelector('.wf');
  if (!wf) return;
  var items = Array.prototype.slice.call(wf.querySelectorAll('.wf-item'));
  var links = Array.prototype.slice.call(wf.querySelectorAll('.wf-n'));
  var subs = Array.prototype.slice.call(wf.querySelectorAll('.wf-sub'));
  var pager = wf.querySelector('.wf-pager');
  var pos = wf.querySelector('.wf-pos');
  var prev = pager.querySelector('[data-dir="-1"]');
  var next = pager.querySelector('[data-dir="1"]');
  var mq = window.matchMedia('(min-width: 760px)');
  var current = null, currentId = null;

  function itemFor(id) {
    var el = id && document.getElementById(id);
    return el ? el.closest('.wf-item') : null;
  }

  function select(id) {
    var item = itemFor(id);
    if (!item) return;
    current = item; currentId = id;
    items.forEach(function (it) {
      var on = it === item;
      it.parentNode.hidden = !on;
      it.open = on;
      if (on) {
        var cfg = it.querySelector('.wf-body > .wf-cfg');
        if (cfg) cfg.open = true;
      }
    });
    links.forEach(function (a) {
      var nid = a.getAttribute('data-node');
      a.classList.toggle('is-active', nid === item.id || nid === id);
      if (nid === id) a.setAttribute('aria-current', 'step'); else a.removeAttribute('aria-current');
    });
    subs.forEach(function (s) { s.classList.toggle('is-active', s.id === id); });
    var n = items.indexOf(item);
    pos.textContent = 'Step ' + (n + 1) + ' of ' + items.length;
    prev.disabled = n === 0;
    next.disabled = n === items.length - 1;
  }

  function enable() {
    wf.classList.add('is-panel');
    pager.hidden = false;
    items.forEach(function (it) { it.querySelector('summary').setAttribute('tabindex', '-1'); });
    var h = location.hash.slice(1);
    select(itemFor(h) ? h : (currentId || 'node-cluster'));
  }

  function disable() {
    wf.classList.remove('is-panel');
    pager.hidden = true;
    items.forEach(function (it) {
      it.parentNode.hidden = false;
      it.open = false;
      it.querySelector('summary').removeAttribute('tabindex');
    });
    links.forEach(function (a) { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
    subs.forEach(function (s) { s.classList.remove('is-active'); });
  }

  links.forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (!mq.matches) return;
      e.preventDefault();
      var id = a.getAttribute('data-node');
      select(id);
      if (history.replaceState) history.replaceState(null, '', '#' + id);
    });
  });

  items.forEach(function (it) {
    it.querySelector('summary').addEventListener('click', function (e) {
      if (wf.classList.contains('is-panel')) e.preventDefault();
    });
  });

  [prev, next].forEach(function (b) {
    b.addEventListener('click', function () {
      var n = items.indexOf(current) + Number(b.getAttribute('data-dir'));
      if (n >= 0 && n < items.length) {
        select(items[n].id);
        if (history.replaceState) history.replaceState(null, '', '#' + items[n].id);
      }
    });
  });

  function apply() { if (mq.matches) enable(); else disable(); }
  if (mq.addEventListener) mq.addEventListener('change', apply); else mq.addListener(apply);
  apply();

  if (!mq.matches) {
    var it = itemFor(location.hash.slice(1));
    if (it) it.open = true;
  }
})();
