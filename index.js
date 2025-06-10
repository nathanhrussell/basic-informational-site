const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files (CSS, JS, images, etc.)
app.use(express.static("public"));

// Route handlers
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

// 404 handler - must be after all other routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});