import express from 'express';
import logger from '../middleware/logger.js';
const router = express.Router();

const posts = [
    {id:1,name:'xyz'},
    {id:2,name:'abc'},
    {id:3,name:'pqr'},
];



router.get('/:id',logger, (req, res)=>{
    const id = parseInt(req.params.id);
    const post = posts.find((i)=>i.id===id);
    if(!post){
        res.status(400).json({msg:'nodata'});
    }else{
        res.status(200).json(post);
    }
});


export default router;