const ipc = window.require('electron').ipcRenderer

window.addEventListener('resize', () => {
  ipc.send('windowResized')
})
