const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const { rememberBounds } = require('./scripts/remember-bounds')

ipcMain.on('windowResized', () => {
  console.log('windowResized')
})

ipcMain.on('set-ignore-mouse-events', (event, ignore, options) => {
  const win = BrowserWindow.fromWebContents(event.sender)
  win.setIgnoreMouseEvents(ignore, options)
})

ipcMain.on('restore-window-bounds', (event, payload, options) => {
  const win = BrowserWindow.fromWebContents(event.sender)

  if (payload) {
    win.setBounds(payload)
  }
})

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    hasShadow: false,
    roundedCorners: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')

  win.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown' && input.key === 'ArrowDown') {
      const bounds = win.getBounds()

      if (input.alt) {
        win.setBounds({
          height: bounds.height + (input.shift ? 10 : 1)
        })

        rememberBounds(win.getBounds())

        return
      }

      win.setBounds({
        y: bounds.y + (input.shift ? 10 : 1)
      })

      rememberBounds(win.getBounds())
    }

    if (input.type === 'keyDown' && input.key === 'ArrowUp') {
      const bounds = win.getBounds()

      if (input.alt) {
        win.setBounds({
          height: bounds.height - (input.shift ? 10 : 1)
        })

        rememberBounds(win.getBounds())

        return
      }

      win.setBounds({
        y: bounds.y - (input.shift ? 10 : 1)
      })

      rememberBounds(win.getBounds())
    }

    if (input.type === 'keyDown' && input.key === 'ArrowLeft') {
      const bounds = win.getBounds()

      if (input.alt) {
        win.setBounds({
          width: bounds.width - (input.shift ? 10 : 1)
        })

        rememberBounds(win.getBounds())

        return
      }

      win.setBounds({
        x: bounds.x - (input.shift ? 10 : 1)
      })

      rememberBounds(win.getBounds())
    }

    if (input.type === 'keyDown' && input.key === 'ArrowRight') {
      const bounds = win.getBounds()

      if (input.alt) {
        win.setBounds({
          width: bounds.width + (input.shift ? 10 : 1)
        })

        rememberBounds(win.getBounds())

        return
      }

      win.setBounds({
        x: bounds.x + (input.shift ? 10 : 1)
      })

      rememberBounds(win.getBounds())
    }
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
