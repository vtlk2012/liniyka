const ipcRenderer = require('electron').ipcRenderer

window.addEventListener('resize', () => {
  ipcRenderer.send('windowResized')
})

window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('clickThroughElement')

  el.addEventListener('mouseenter', () => {
    ipcRenderer.send('set-ignore-mouse-events', true, { forward: true })
  })

  el.addEventListener('mouseleave', () => {
    ipcRenderer.send('set-ignore-mouse-events', false)
  })

  ipcRenderer.send('restore-window-bounds', localStorage.getItem('windowBounds'))
})
