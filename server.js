const express = require("express");



const connectDB = require ("./DB/connection");
const ModelInput = require("./DB/schema");
connectDB();

const app = express();
const path = require("path");

app.use(express.urlencoded({extended: true}));
app.use(express.json());





if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
  });

}



app.get("/test", function(req, res){
    const str = [{
      id: "0",
      name: "schwan",
      city: "midyat",
      age: "something"
    }]
    res.end(JSON.stringify(str));
});

app.post("/articles", function(req, res){
  ModelInput.create(req.body).then(() => {
    res.end();
    console.log("article saved to database");
  });
});

app.get("/articles", function(req, res){
  ModelInput.find({}).sort({_id: -1}).then(function(records){
    res.end(JSON.stringify(records))
  });
});




const server = app.listen(process.env.PORT || 4000 );
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);