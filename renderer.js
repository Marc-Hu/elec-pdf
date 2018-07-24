const ipc = require('electron').ipcRenderer;
const printPDFButton = document.getElementById('print-pdf');

printPDFButton.addEventListener('click', function(event){
    //ipc.send('print-to-pdf');
    printJS('./pdf/testing.pdf');
});

ipc.on('wrote-pdf', function(event, path) {
   const message = `Wrote PDF to: ${path}`;
   document.getElementById('pdf-path').innerHTML = message;
});

ipc.on('read-pdf', function(event, data) {
    console.log("test", data);
    var pdfData = document.getElementById('pdfToShow');
    pdfData.innerHTML = data;
});