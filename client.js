const net = require("net");
const { IP, port, ID } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: port // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection successfully established.");
    
    conn.write(`Name: ${ID}`);

    // setTimeout(() => {
    //   conn.write("Move: up")
    // }, 1000);

    // setInterval(() => {
    //   conn.write("Move: left")
    // }, 1);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

// module.exports = connect;
module.exports = {connect};