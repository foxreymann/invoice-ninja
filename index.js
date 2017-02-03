var fs = require('fs');
var Invoice = require('./lib/invoice-ninja');

today = new Date();
due = new Date()
due.setDate(today.getDate() + 14);

const input = require('./invoice.js')

var invoice = new Invoice();
invoice.generatePDFStream(input).pipe(fs.createWriteStream('invoice.pdf'));
