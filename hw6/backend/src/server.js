import db from './db';
import express from 'express';
import cors from 'cors';
import scoreRoute from './routes';
db.connect();

const app = express();

//init middleware
app.use(cors());
app.use(express.json());

//define routes
app.use('/',scoreRoute);

//define server
const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
})