const readline = require('readline');
const { mvntKeys, msgKeys } = require("./constants");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// // setup interface to handle user input from stdin
// const setupInput = function() {
// }

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  for (let mvntKey in mvntKeys) {
    if (key === mvntKey) {
      connection.write(mvntKeys[mvntKey]);
    }
  }

  for (let msgkey in msgKeys) {
    if (key === msgkey) {
      connection.write(msgKeys[msgkey]);
    }
  }
};

module.exports = {setupInput};