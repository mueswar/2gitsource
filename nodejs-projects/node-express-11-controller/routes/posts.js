import express from 'express';
import {getposts} from '../controller/postsController.js';

const router = express.Router();

router.get('/:id', getposts);


export default router;