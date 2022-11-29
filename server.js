import express from 'express'
import cors from 'cors'
import { database } from './database/db.js';
import dotenv from 'dotenv'
import router from './routes/route.js';
import routerblog from './routes/blogRouter.js';

const app = express();
const PORT = process.env.PORT || 8000;
dotenv.config();

const mongo_name = process.env.db_name;
const mongo_password = process.env.db_password;

// mongoose database
const URL = process.env.mongodb_URL || `mongodb+srv://${mongo_name}:${mongo_password}@tourapp.eodnadv.mongodb.net/?retryWrites=true&w=majority`
database(URL);

// middleware

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
}

app.use('/', router)
app.use('/', routerblog)


app.listen(PORT, () => console.log(`server running on port: ${PORT}`))