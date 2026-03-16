const express = require("express");

const app = express();
const PORT = 1198;

app.get("/", (req, res) => {
    res.json({
        message: "Hello World from Express.js API",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
