import express from 'express';
import posts from '../data/posts.js';

const router = express.Router();

//INDEX
router.get('/', (request, response) => {
    response.json(posts);
});

// SHOW
router.get('/:id', (request, response) => {
const id = Number(request.params.id);
const post = posts.find((p) => p.id === id);

if(!post){
    return response.status(404).json({message: 'Post non trovato'});
}
    response.json(post);
});

//CREATE
router.post('/', (request, response) => {
   const newId = posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
   const newPost = {id : newId, ...request.body};

   posts.push(newPost);
   response.status(201).json(newPost);
});

//UPDATE
router.put('/:id', (request, response) => {
    const id = Number(request.params.id);
    const index = posts.findIndex((p) => p.id === id);

    if(index === -1) {
        return response.status(404).json({message: 'Post non trovato'});
    }

    posts[index] = {...posts[index], ...request.body, id};
    response.json(posts[index]);
});

//DELETE
router.delete('/:id', (request, response) => {
    const id = Number(request.params.id);
    const index = posts.findIndex((p) => p.id === id);

    if(index === -1){
        return response.status(404).json({message: 'Post non trovato'});
    }

    const deleted = posts.splice(index, 1)[0];
    response.json({message: 'Post eliminato', deleted});
});

export default router;