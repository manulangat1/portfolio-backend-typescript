import express from 'express';
import modules from './modules';
import * as  dotenv from 'dotenv';

dotenv.config()

const app = express();

const PORT = process.env.PORT

app.use(express.json());
// app.use(express.urlencoded({extended:true})); not needed anymore

modules(app);

app.get('/',(req,res) => {
    return res.send('Welcome to the Manu langat blog application')
});
app.get("*",(req,res) => {
    return res.status(404).send(`Ooops! Invalid url`)
})
app.listen(8000, () => {
    console.log(`Application running on port ${PORT || 8000}`)
})