import express from 'express';
const router = express.Router();

const posts = [
    {id:1,name:'xyz'},
    {id:2,name:'abc'},
    {id:3,name:'pqr'},
];

router.post('/',(req, res)=>{
    const newPost = 
       {id : posts.length+1,
        name :req.body.name}

    posts.push(newPost);
    res.status(200).json(posts);
});


export default router;