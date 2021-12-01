const readline = require('readline');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

// // setup interface to handle user input from stdin
// const setupInput = function() {
// }

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === "w") {
    connection.write("Move: up");
  }

  if (key === "a") {
    connection.write("Move: left");
  }

  if (key === "s") {
    connection.write("Move: down");
  }

  if (key === "d") {
    connection.write("Move: right");
  }

  if (key === "1") {
    connection.write("Say: Hello!");
  }

  if (key === "2") {
    connection.write("Say: Move!");

  if (key === "3") {
    connection.write("Say: Boo!");
  }
  }
};

module.exports = {setupInput};