import express from 'express';

export const mobileRouter = express.Router();

mobileRouter.get('/start-testing', (req, res) => {
    res.send('Пока недоступно');
});
