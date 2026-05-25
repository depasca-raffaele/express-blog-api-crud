import express from 'express';
import postsRouter from './routers/posts.js';
import posts from './data/posts.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.get('/', (request, response) => {
    response.json({message: 'Server del blog attivo' });
});
app.use('/posts', postsRouter);


app.get('/bacheca', (request, response) => {
    response.json({posts});
});


app.listen(3000, (error) => {
    if (error) {
        console.error('server error');
    } else {
        console.log("server live");
    }
})