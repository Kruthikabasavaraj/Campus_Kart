import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import kartroute from "./route/kart.route.js"
import cors from "cors";
import userRoute from "./route/user.route.js"

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 600;
const URI = process.env.MongoDBURI;


// Connection to the database
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to database");
})
.catch((error) => {
    console.error("Error connecting to database:", error);
});

app.get('/', (req, res) => {
    res.send('Hello World kruthi fvuyjyfvfv bbbbn!')
})




//defining routes
app.use("/kart",kartroute)
app.use("/user",userRoute)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});
