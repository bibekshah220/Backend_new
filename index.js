import express from 'express';
import 'dotenv/config';
const app = express();

const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/twitter",(req,res)=>{
    res.send("bibek.com");
});

app.get("/facebook",(req,res)=>{
    res.send("bibek.com");
});

app.get("/login",(req,res)=>{
    res.send("Login page");
});

app.get("/linkedin",(req,res)=>{
    res.send("bibek.com");
});


app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});