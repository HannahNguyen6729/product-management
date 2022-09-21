const express = require("express");
const app = express();
const PORT = 3000;
const router = require("./routers/rootRouter");

app.use(express.json());
//router
app.use(router);

app.listen(PORT, () => console.log("listening on port " + PORT));
