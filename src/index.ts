
import express from "express";
import logger from "./logger";
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hello world!");
});

// Start the server.
app.listen(port, () => {
    logger.info(`server started at http://localhost:${port}`);
});