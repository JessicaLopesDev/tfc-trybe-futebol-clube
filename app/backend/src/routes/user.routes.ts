import { Request, Router, Response } from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();

const router = Router();

// router.post('/', (req: Request, res: Response) =>
//   userController.login(req, res));
router.get('/', (req: Request, res: Response) =>
  userController.getAllUsers(req, res));
router.get('/', (req: Request, res: Response) =>
  userController.getUserById(req, res));

export default router;
