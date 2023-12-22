import express from "express";
import { initializeRoutes } from "./routes/index.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { connectMongoDB } from "./config/mongoDBConfig.js";
import dotenv from "dotenv";

dotenv.config();

connectMongoDB();

const port = process.env.PORT || 4000;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use( '/', (req, res) => { res.send('Welcome') } )

app = initializeRoutes(app);

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
