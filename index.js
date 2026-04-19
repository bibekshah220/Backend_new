import express from 'express';
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("twitter",(req,res)=>{
    res.send("twitter api");
});


app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});