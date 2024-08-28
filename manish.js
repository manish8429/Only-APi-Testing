import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Apirouter from "./router/Apirouter.js";


const app = express();
const Port = 3000;


app.get('/manish', (req, res) => {
    res.send("My Name Is Manish Prajapati And I Make This api only for testing yourse projects")
})

app.use('/manish',Apirouter);



app.listen(Port, () => {
  console.log(`Server is running on Port ${Port}`);
});
