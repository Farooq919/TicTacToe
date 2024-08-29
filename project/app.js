require("dotenv").config()
const express = require ("express")
const path = require('path');
const bodyParser = require('body-parser');


const connection = require("./database/connect")
const app = express()
const {router} = require("./routes/formRoutes")


const port =  process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tic.html'));
  });

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tic.html'));
  });

app.get("/about", (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'About_tic.html'));
  });

app.get("/contactUs", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contactus.html'));
  });

app.use("/", router)


const startServer = async ()=>{
    const isConnected = await connection(process.env.MONGODB_URI);

    if (isConnected){
        app.listen(port,()=>{

            console.log(`Server is running on port ${port}`);
        })  
    }

    else{
        console.log(`Server is not running on port ${port}`);
    }
}

startServer();


