const { Router } = require('express');
const CursosController = require('../controllers/CursoController');
const AulasController = require('../controllers/AulaController');
const routes = Router();

/* --------------- ROTAS CURSOS --------------- */

routes.get('/cursos', CursosController.getAll);
routes.get('/cursos/:id', CursosController.getOne);
routes.post('/cursos', CursosController.create);
routes.put('/cursos/:id', CursosController.update);
routes.delete('/cursos/:id', CursosController.delete);

/* --------------- ROTAS AULAS --------------- */
routes.get('/aulas',  AulasController.getAll);
routes.get('/aulas/:id',  AulasController.getOne);
routes.post('/aulas',  AulasController.create);
routes.put('/aulas/:id',  AulasController.update);
routes.delete('/aulas/:id',  AulasController.delete);

routes.get('/all',  CursosController.getCursoeAula);


module.exports = routes;