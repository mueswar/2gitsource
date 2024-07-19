import express from 'express';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errors.js';

const app = express();
app.use(logger);

app.use('/api/posts',posts);

app.use(errorHandler);

app.listen(8000,()=>{console.log(`server is running on 8000 port`)});

