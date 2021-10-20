import express from 'express';
import modules from './modules';

const app = express();
const PORT = process.env.NODE_ENV

app.use(express.json());
// app.use(express.urlencoded({extended:true})); not needed anymore

modules(app);
app.get('/',(req,res) => {
    return res.send('Welcome to the Manulangat blog application')
});
app.get("*",(req,res) => {
    return res.status(404).send(`Ooops! Invalid url`)
})
app.listen(8000, () => {
    console.log(`Application running on port ${PORT || 8000}`)
})