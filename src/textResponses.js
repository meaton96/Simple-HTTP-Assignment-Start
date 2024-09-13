const hello = 'Hello World!';

const getTimeString = () => new Date().toTimeString();

const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
};

module.exports.getTime = getTime;
module.exports.getHello = getHello;
module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
