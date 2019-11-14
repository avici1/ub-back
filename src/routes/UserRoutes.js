import { Router } from 'express';
import Users from '../controllers/UserController';

const router = Router();

router.post('/signin', Users.signin);

export default router;