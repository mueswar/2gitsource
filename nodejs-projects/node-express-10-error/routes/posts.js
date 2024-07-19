import express from 'express';
const router = express.Router();

const posts = [
    {id:1,name:'xyz'},
    {id:2,name:'abc'},
    {id:3,name:'pqr'},
];



router.get('/:id', (req, res, next)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((i)=>i.id===id);
    if(!post){
       const error = new Error('no data');
       error.status = 400;
       return next(error);
    }else{
        res.status(200).json(post);
    }
});


export default router;