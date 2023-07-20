import { Request, Router, Response } from 'express';
import Validations from '../database/middlewares/UserValidation';
import UserController from '../controllers/UserController';

const userController = new UserController();

const router = Router();

router.post('/', Validations.loginValidation, (req: Request, res: Response) =>
  userController.findOne(req, res));
// req 12
router.get('/', (req: Request, res: Response) =>
  userController.getAllUsers(req, res));

export default router;
