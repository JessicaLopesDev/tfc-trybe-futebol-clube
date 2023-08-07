import { Router } from 'express';
import teamRoutes from './team.routes';
import loginRoutes from './user.routes';
import matchRoutes from './match.routes';
import leaderBoard from './leaderBoard.routes';

const router = Router();

router.use('/teams', teamRoutes);
router.use('/login', loginRoutes);
router.use('/matches', matchRoutes);
router.use('/leaderboard', leaderBoard);

export default router;
