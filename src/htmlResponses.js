const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const richHtml = fs.readFileSync(`${__dirname}/../client/rich-client.html`);
const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getRichHtml = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(richHtml);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
module.exports.getRichHtml = getRichHtml;
