const express = require('express');
const app = express();


const posts = [
    {id:1,name:'xyz'},
    {id:2,name:'abc'},
    {id:3,name:'pqr'},
];

app.get('/api/posts/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((i)=>i.id===id);
    if(!post){
        res.status(400).json({msg:'nodata'});
    }else{
        res.status(200).json(post);
    }
});

app.listen(8000,()=>{console.log(`server is running on 8000 port`)});