import express from 'express';

const api = express();

api.get('/test', (req, res) => {
    res.json({
        msg: 'API online',
        error: new Error('error prueba'),
    });
});

export default api;