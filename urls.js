const express = require('express');
const router = express.Router();
const shortid = require('shortid');
const urls = {};

router.get('/',(req,res)=>{
    const allUrls=[];
    Object.keys(urls).forEach(id => {
        allUrls.push(urls[id]);
    });
    res.send(allUrls);
});

router.post('/',(req,res)=>{
    const shortId = shortid.generate();
    const long_url = req.body.long_url;
    urls[shortId] = long_url;
    res.status(200).send("success");
});

router.get('/:id',(req,res)=>{
    console.log(req);
    const long_url = urls[req.params.id];
    res.send(long_url);
});


module.exports = router;