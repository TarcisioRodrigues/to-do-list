import {Router} from 'express';

import * as TaskController from './controllers/TaskController';

const routes=Router();

routes.post('/task',TaskController.create);
routes.get('/task',TaskController.index);
routes.delete('/task/:id',TaskController.destroy);

export default routes;
