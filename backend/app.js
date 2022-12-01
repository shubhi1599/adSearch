import express from 'express';
import mongoose from 'mongoose';
import searchRouter from './routes/search';
import cors from 'cors';

const app = express();
app.use(cors({
   origin: "*"
}));
app.use(express.json());

app.use("/search",searchRouter);

mongoose.connect(
    'mongodb://localhost:27017/MernProj'
    )
    .then(()=>app.listen(5000))
    .then(()=>
       console.log("Connected,Listening on port 5000")
    )
    .catch((err) => console.log(err));

