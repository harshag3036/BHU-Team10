import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { getstocksdata } from './controllers/stockdata';
const app = express();
app.listen(PORT, function () {
    console.log("Server is running on "+ PORT +" port");
  });
  
app.use(cors());

app.get('/', getstocksdata);



const CONNECTION_URL="mongodb+srv://subham:ohlc@cluster0.ytzf0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT=process.env.PORT||5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>app.listen(PORT,()=>{console.log("server running")}))
  .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false); 