const fs = require('fs');
const PDFDocument = require('pdfkit');
const doc = new PDFDocument;

doc.pipe(fs.createWriteStream('../../assets/pdf/lies.pdf')); // write to PDF                                     // HTTP response

// add stuff to PDF here using methods described below...
doc.text('Hello documents!')
// finalize the PDF and end the stream
doc.end();