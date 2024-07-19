import express from 'express';
import posts from './routes/posts.js';

const app = express();

app.use('/api/posts',posts);

app.listen(8000,()=>{console.log(`server is running on 8000 port`)});

