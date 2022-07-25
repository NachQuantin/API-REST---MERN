import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import cookieParser from "cookie-parser";
// import cors from "cors";

import authRouter from "./routes/auth.route.js"
import linkRouter from "./routes/linkRoute.js"
import redirectRouter from "./routes/redirect.route.js"

const app = express ();

//CORS
// const whiteList = [process.env.ORIGIN1]

// app.use(cors({
//     origin: function(origin, callback){
//         if (whiteList-includes(origin)){
//             return callback(null, origin)
//         }
//         return callback ("Error de CORS origin:" + origin + "no autorizado!")
//     }
// }))

app.use(express.json());
app.use(cookieParser());

//Ejemplo back redirect (opcional)
app.use ("/", redirectRouter);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/links", linkRouter);


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log ("Corriendo en el puerto http://localhost:" + PORT));

