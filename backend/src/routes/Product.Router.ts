import { Router } from 'express';

import ProductController from '../controller/ProductController';

const leaderBoardController = new ProductController();

const router = Router();

router.post('/product', leaderBoardController.createMany);

export default router;
