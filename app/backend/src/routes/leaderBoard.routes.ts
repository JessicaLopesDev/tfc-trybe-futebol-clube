import { Request, Router, Response } from 'express';
import LeaderBoardController from '../controllers/LeaderBoardController';

const leaderBoardController = new LeaderBoardController();

const router = Router();

// router.get('/', (req: Request, res: Response) =>
//   leaderBoardController.getLeaderBoard(req, res));

router.get('/home', (req: Request, res: Response) =>
  leaderBoardController.getLeaderBoardHome(req, res));

// router.get('/away', (req: Request, res: Response) =>
//   leaderBoardController.getLeaderBoardAway(req, res));

export default router;
