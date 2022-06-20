const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const port = 80;

const staticPath = path.join(__dirname, "static");

app.use(express.static(staticPath));

app.get("/gs_calc/:number", (req, res) => {
    const options = {
        hostname: "backend",
        port: 3001,
        path: `/gs_calc/${req.params.number}`,
        method: "GET"
    };
    const iReq = http.request(options, iRes => {
        iRes.on("data", d => {
            res.send(d);
        });
    })
    iReq.end();
})

app.get("/gs_calc", (req, res) => {
    res.sendFile(path.join(staticPath, "/gs_calc.html"));
});

app.get("/documentation", (req, res) => {
    res.sendFile(path.join(staticPath, "/documentation.html"));
})

app.listen(port, () => {
    console.log(`Frontend listening on ${port}`);
});