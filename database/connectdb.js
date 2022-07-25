import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log('connect db OK');
} catch (error) {
    console.log("Error de conexion en mongo db" + error);
}
