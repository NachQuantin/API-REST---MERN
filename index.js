import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import cookieParser from "cookie-parser";
// import cors from "cors";

import authRouter from "./routes/auth.route.js"
import linkRouter from "./routes/linkRoute.js"
import redirectRouter from "./routes/redirect.route.js"

const app = express ();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE,PATCH');
    next();
  });

app.use(express.json());
app.use(cookieParser());

//Ejemplo back redirect (opcional)
app.use ("/", redirectRouter);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/links", linkRouter);


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log ("Corriendo en el puerto http://localhost:" + PORT));

