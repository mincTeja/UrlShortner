const express = require('express');
const app = express();
const urls = require('./urls');

app.use(express.json());
app.use(express.static('public/static'));
app.use('/urls',urls)
app.get('/',(req,res)=>{
    res.send("hello world!!");
});

app.get('/:id',(req,res)=>{
    res.redirect(`/urls/${req.params.id}`);
})
app.listen(3000);