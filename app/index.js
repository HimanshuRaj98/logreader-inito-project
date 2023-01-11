const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", function async(req, res) {
  res.sendFile(__dirname + "/views/viewLogs.html");
});

app.get("/addLogs", function async(req, res) {
  res.sendFile(__dirname + "/views/addLogs.html");
});
app.get("/styleAddLogs.css", function async(req, res) {
  res.sendFile(__dirname + "/views/styleAddLogs.css");
});
app.get("/styleViewLogs.css", function async(req, res) {
  res.sendFile(__dirname + "/views/styleViewLogs.css");
});

// For Loading The Information Logs
app.get("/getLogs", function async(req, res) {
  const allFileContents = fs.readFileSync("file.txt", "utf-8").split(/\r?\n/);
  let lines = allFileContents.length;
  let response = [];
  allFileContents.forEach((line) => {
    let lineContent = line.split("||").map((val) => val.trim());
    response.push({
      timestamp: lineContent[0],
      status: lineContent[1],
      operation: lineContent[2],
      message: lineContent[3],
    });
  });
  res.send({ data: response, lines: lines });
});

// Write Responses Function
app.get("/writeLogs", function async(req, res) {
  let status = req.query.status;
  let operation = req.query.operation;
  let message = req.query.message;
  let newLog = `\r\n${new Date().valueOf()} || ${status} || ${operation} || ${message}`;
  fs.appendFile(
    "file.txt",
    newLog,
    "utf8",

    // callback function
    function (err) {
      res.redirect("/");
    }
  );
});

//Visual Notification Of Node Js
app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
