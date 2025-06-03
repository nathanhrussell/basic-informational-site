const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
  let filePath = "";

  switch (req.url) {
    case "/":
      filePath = "index.html";
      break;
    case "/about":
      filePath = "about.html";
      break;
    case "/contact-me":
      filePath = "contact-me.html";
      break;
    default:
      filePath = "404.html";
      res.statusCode = 404;
  }

  const fullPath = path.join(__dirname, filePath);

  fs.readFile(fullPath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server error");
    } else {
      res.writeHead(res.statusCode || 200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
