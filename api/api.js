import express from 'express';
import boookRouter from './routes/BookRoutes';

const api = express();

api.get('/test', (req, res) => {
    res.json({
        msg: 'API online',
        error: new Error('error prueba'),
    });
});

api.use('/books', boookRouter);

export default api;