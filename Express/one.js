const app = require("express")();
const PORT = 5001;

app.listen(
    PORT,()=>console.log("Server is running on 5001")
);

app.get('/getReq',(req,res)=>{
    res.send("Hello Express! I am getting the request.")
});

app.post('/postReq',(req,res)=>{
    res.send("Hello Express! I am posting the request.")
});

app.route('/home').get(function(req,res){
    res.send("Welcome Home!")
});

app.route('/other').get(function(req,res){
    res.send("<h1>Welcome to another page!</h1>")
});