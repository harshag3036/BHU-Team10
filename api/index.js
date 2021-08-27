const express =require('express');
const bodyParser= require('body-parser');
const mongoose =require('mongoose');
const cors =require('cors');
const getstocksdata = require('./controllers/stockdata');
const app = express();
const dotenv = require("dotenv");


app.use(bodyParser.urlencoded({extended: false}));

dotenv.config();
app.use(cors());

app.get('/',getstocksdata);


//Database Connection

const PORT=process.env.PORT||3000;
mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.CONNECTION_URL}`,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>app.listen(PORT,()=>{console.log("server running")}))
  .catch((error)=>console.log(error.message));

