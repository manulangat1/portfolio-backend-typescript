import express from 'express';


const app = express();
const PORT = process.env.NODE_ENV

app.use(express.json());
// app.use(express.urlencoded({extended:true})); not needed anymore

app.get('/',(req,res) => {

    return res.send('Hello')
});

app.listen(8000, () => {
    console.log(`Application running on port ${PORT || 8000}`)
})