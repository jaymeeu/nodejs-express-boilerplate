import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import router from './routers/route.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));
app.disable('x-powered-by'); // less hackers know about our stack


/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Welcome!!!");
});

/** api routes */
app.use('/api', router)

app.listen(PORT, ()=>{
    console.log('App is listening on port ', PORT)
})