import { Request, Router, Response } from 'express';
import Validations from '../database/middlewares/Validations';
import UserController from '../controllers/UserController';

const userController = new UserController();

const router = Router();

router.post('/', Validations.login, (req: Request, res: Response) =>
  userController.getUserByEmail(req, res));
router.get('/role', Validations.token, (req: Request, res: Response) =>
  userController.getUser(req, res));
router.get('/', (req: Request, res: Response) =>
  userController.getAllUsers(req, res));

export default router;
