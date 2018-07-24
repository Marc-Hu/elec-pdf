const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

const fs = require('fs');
const os = require('os');
//const printPdf = require('mapbox-print-pdf');
const ipc = electron.ipcMain;
const shell = electron.shell;

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow();

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    mainWindow.on('closed', function () {
      mainWindow = null;
    })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});

ipc.on('print-to-pdf', function(event){
    /*mainWindow.loadURL('file://' + __dirname + '/pdf/testing.pdf');

// if pdf is loaded start printing
    /*mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.print({silent: true, printBackground:true});
    });*/
    //printPdf.build();
        /*.format('a3')
        .portrait() // Unnecessary since it's the default but it's included for clarity.
        .print(map, mapboxgl)
        .then(function(pdf) {
            pdf.save('./pdf/testing.pdf');
        });*/
    /*const pdfPath = path.join(os.tmpdir(), 'print.pdf');
    const win = BrowserWindow.fromWebContents(event.sender);
    event.sender.send('wrote-pdf', pdfPath);

    const printPdf = require('./pdf/testing.pdf');

    printPdf.build()
        .format('a4')
        .portrait() // Unnecessary since it's the default but it's included for clarity.
        .print(map, mapboxgl);*/

  // fs.readdir('./pdf', function(err,dir) {
  //     for(let filePath of dir) {
  //         console.log(filePath);
  //     }
  // });

  // it working
  // win.webContents.print({'printBackground': true});


  // win.webContents.print({}, function(error, data) {
  //   if(error) return console.log(error.message);
  //
  //   fs.writeFile(pdfPath, data, function(err) {
  //     if(err) return console.log(err.message);
  //     shell.openExternal('file://'+pdfPath);
  //     event.sender.send('wrote-pdf', pdfPath);
  //   })
  // })
})