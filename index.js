var fs = require('fs');
var Invoice = require('./lib/invoice-ninja');

today = new Date();
due = new Date()
due.setDate(today.getDate() + 14);

input = {
  currencyFormat: "£%d",
  invoice_number: 1421,
  date_now: today.toDateString(),
  date_due: due.toDateString(),
  from_name: 'nCrazed',
  client_name: 'Client Inc.',
  items: [
    {
      description: 'Freebie',
      quantity: 1,
      rate: 0,
      amount: 0
    }
  ]
};

var invoice = new Invoice();
invoice.generatePDFStream(input).pipe(fs.createWriteStream('invoice.pdf'));
