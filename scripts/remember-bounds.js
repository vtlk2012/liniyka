function rememberBounds (bounds) {
  localStorage.setItem('windowBounds', JSON.stringify(bounds))
}

function restoreBounds () {
  return JSON.parse(localStorage.getItem('windowBounds') || null)
}

module.exports = {
  rememberBounds,
  restoreBounds
}
