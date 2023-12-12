// Import two Electron Modules with CommonJS module Syntax 
// app control application's event lifecycle
// BroswerWindow creates and manages app windows. 


const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BroswerWindow ({
        width: 800, 
        height: 500
});

// load file into new window 
    win.loadFile('index.html')
};

app.whenReady().then(() => {
    createWindow()
});