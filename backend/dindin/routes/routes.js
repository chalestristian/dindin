const { Router } = require('express');
const CourseController = require('../controllers/CourseController');
const LessonController = require('../controllers/LessonController');
const routes = Router();

/* --------------- ROTAS CURSOS --------------- */

routes.get('/courses', CourseController.getAll);
routes.get('/course/:id', CourseController.getOne);
routes.post('/course', CourseController.create);
routes.put('/course/:id', CourseController.update);
routes.delete('/course/:id', CourseController.delete);

/* --------------- ROTAS AULAS --------------- */
routes.get('/lessons',  LessonController.getAll);
routes.get('/lesson/:id',  LessonController.getOne);
routes.post('/course',  LessonController.create);
//POST: locallhost:3333/course/2/lesson (I'm creating a lesson referenced this course);
routes.put('/lesson/:id',  LessonController.update);
routes.delete('/lesson/:id',  LessonController.delete);

routes.post('/course/:course_id/lesson',  LessonController.store);
module.exports = routes;