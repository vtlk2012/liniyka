function writeSize () {
  const rulerHor = document.querySelector('.ruler--horizontal .size')
  const rulerVer = document.querySelector('.ruler--vertical .size')
  const redLines = document.querySelector('.red-lines')

  const width = redLines.clientWidth
  const height = redLines.clientHeight

  rulerHor.innerHTML = width
  rulerVer.innerHTML = height
}

window.addEventListener('resize', writeSize)
window.addEventListener('DOMContentLoaded', writeSize)
