(function () {
  var btn = document.getElementById('copy-email');
  var status = document.getElementById('copy-status');
  if (!btn || !status) return;
  function selectEmail() {
    var el = document.getElementById('email');
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    status.textContent = 'Email selected. Press Ctrl+C or Cmd+C to copy it.';
  }
  btn.addEventListener('click', function () {
    var email = btn.getAttribute('data-email');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(function () {
        status.textContent = 'Email address copied.';
      }, selectEmail);
    } else {
      selectEmail();
    }
  });
})();
