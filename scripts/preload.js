const { contextBridge, ipcRenderer } = require('electron/renderer');

contextBridge.exposeInMainWorld('electronAPI', {
    setIgnoreMouseEventsTrue: () => ipcRenderer.send('set-ignore-mouse-events', true, { forward: true }),

    setIgnoreMouseEventsFalse: () => ipcRenderer.send('set-ignore-mouse-events', false)
});
