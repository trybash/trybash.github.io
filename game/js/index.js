(function (win, doc) {
  var terminal = doc.getElementById('terminal')

  terminal.innerHTML = '$ '

  win.addEventListener('keypress', function (e) {
    terminal.innerHTML += e.key
  })
})(window, document)
