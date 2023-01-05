import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Route from './routes'
import path from "path";
import "dotenv-defaults/config.js";

import { dataInit, dataInitWithCrawler } from './init';
const app = express();

console.log("process.env.NODE_ENV: ", process.env.NODE_ENV)
if (process.env.NODE_ENV && process.env.NODE_ENV === "production") {
    app.use(express.json())
    app.use('/api', Route);
    const __dirname = path.resolve();
    console.log("__dirname: ", __dirname);
    app.use(express.static(path.join(__dirname, "../frontend", "build")));
    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
    });
 }
else{
    console.log("use cors")
    app.use(cors());
    app.use(express.json())
    app.use('/api', Route);
}

const url = process.env.MONGO_URL
const dboptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongoose.set("strictQuery", true);

mongoose.connect(url, dboptions).then((res) => {
    console.log("mongo db connection created");
    dataInit();
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server is up on port ${port}.`))