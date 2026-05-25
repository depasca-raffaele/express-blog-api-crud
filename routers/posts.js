import express, { response } from 'express';

const router = express.Router();

//INDEX
router.get('/', (request, response) => {
    response.json({message: 'Lista dei post'});
});

// SHOW
router.get('/:id', (request, response) => {
const { id } = request.params;
response.json({ message: `Dettaglio del post ${id}` });
});

//CREATE
router.post('/', (request, response) => {
    response.json({message: 'Creazione di un nuovo post'});
});

//UPDATE
router.put('/:id', (request, response) => {
    const {id} = request.params;
    response.json({message: `Modifica integrale del post ${id}`});
});

//DELETE
router.delete('/:id', (request, response) => {
    const {id} = request.params;
    response.json({message: `Cancellazione del post ${id}`});
});

export default router;