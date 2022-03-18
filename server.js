const express =require("express");
const bodyParser =require("body-parser");
const morgan =require("morgan");
const dotenv =require("dotenv");
const connectDB = require('./config/db.config');

const app = express();
dotenv.config();
connectDB();

// MIDDLEWARES
app.use(bodyParser.json());
app.use(morgan('tiny'));


// ROUTES
app.get('/', (req, res) => {
    res.status(200).json("🚀 API is running");
});

// LAUNCH
const port = process.env.PORT;
app.listen(5000, () => {
    console.log(`🚀 Server ready at http://0.0.0.0:${port}`);
});