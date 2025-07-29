const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const hotKeys = require('./scripts/hot-keys');

let windowsLocked = false;

const windows = {};

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        hasShadow: false,
        roundedCorners: false,
        icon: path.join(__dirname, 'images/icon.ico'),
        webPreferences: {
            preload: path.join(__dirname, 'scripts/preload.js')
        }
    });

    win.loadFile('index.html');

    win.webContents.on('before-input-event', (event, input) => {
        hotKeys({ win, input, windows, windowsLocked });
    });

    windows[win.id] = win;

    win.on('closed', () => {
        delete windows[win.id];
    });

    win.on('resize', () => {
        if (windowsLocked) {
            const { width, height } = win.getBounds();

            const wns = BrowserWindow.getAllWindows();

            for (let i = 0; i < wns.length; i++) {
                if (wns[i].id !== win.id) {
                    wns[i].setBounds({
                        width,
                        height
                    });
                }
            }

        }
    });
}

app.whenReady().then(() => {
    ipcMain.on('set-ignore-mouse-events', (event, ignore, options) => {
        const win = BrowserWindow.fromWebContents(event.sender);

        win?.setIgnoreMouseEvents(ignore, options);
    });

    createWindow();

    const isMac = process.platform === 'darwin';

    const macAppMenu = {
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideOthers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    };

    const fileMenu = {
        label: 'File',
        submenu: [isMac ? { role: 'close' } : { role: 'quit' }]
    };

    const windowMenu = {
        label: 'Window',
        submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            { type: 'separator' },
            {
                label: 'New window',
                click: () => {
                    createWindow();
                }
            },
            { type: 'separator' },
            {
                label: 'Lock windows',
                click: () => { windowsLocked = true; }
            },
            { type: 'separator' },
            {
                label: 'Unlock windows',
                click: () => { windowsLocked = false; }
            },
            ...(isMac
                ? [
                        { type: 'separator' },
                        { role: 'front' },
                        { type: 'separator' },
                        { role: 'window' }
                    ]
                : [{ role: 'close' }])
        ]
    };

    const template = [
        isMac ? macAppMenu : {},
        fileMenu,
        windowMenu
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
