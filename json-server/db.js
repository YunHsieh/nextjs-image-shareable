const path = require("path");
const fs = require('fs');
const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults()

const port = 3000;
const target = {};

fs.readdirSync(__dirname).forEach(file => {
  if (file.indexOf('.') == -1) {
    fs.readdirSync(path.join(__dirname, file)).forEach(sub_file => {
      const fileModules = require(path.resolve(__dirname, file, sub_file));
      const source = {
        [sub_file.replace('.json', '')]: fileModules,
      }
      Object.assign(target, source);
    });
  }
});
const router = jsonServer.router(target);

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running')
})
