import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new MotorcyclesController(req, res, next).create(),
);

routes.get(
  '/',
  (req, res, next) => new MotorcyclesController(req, res, next).create(),
);

routes.get(
  '/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).create(),
);

routes.put(
  '/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).create(),
);

routes.delete(
  '/:id',
  (req, res, next) => new MotorcyclesController(req, res, next).create(),
);

export default routes;