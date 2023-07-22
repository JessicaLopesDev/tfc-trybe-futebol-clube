import { Request, Router, Response } from 'express';
import MatchController from '../controllers/MatchController';
import Validations from '../database/middlewares/Validations';

const matchController = new MatchController();

const router = Router();

router.get('/', (req: Request, res: Response) =>
  matchController.getAllMatches(req, res));

router.patch(
  '/:id/finish',
  Validations.tokenValidation,
  (req: Request, res: Response) =>
    matchController.finishMatch(req, res),
);

router.patch(
  '/:id',
  Validations.tokenValidation,
  (req: Request, res: Response) => matchController.updateMatch(req, res),
);

// router.post('/', Validations.loginValidation, (req: Request, res: Response) =>
//   matchController.getUserByEmail(req, res),
// );

export default router;
