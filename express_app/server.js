// JavaScript source code
const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "static")));
app.use("/templates", express.static(path.resolve(__dirname, "templates")));



app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "templates", "index.html"));
})

app.listen(process.env.PORT || 8000, () => console.log("Server running..."));