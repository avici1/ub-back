import { Router } from 'express';
import VideoController from '../controllers/VideoController';
import checkAuth from '../middlewares/checkAuth';
import validation from '../middlewares/validation/videoValidation';

const router = Router();

router.get('/', VideoController.getAllVideos);
router.post('/', checkAuth, validation.videoValidation, VideoController.addVideo);
router.get('/:id', VideoController.getAVideo);
router.put('/:id', checkAuth, validation.videoUpdateValidation, VideoController.updatedVideo);
router.delete('/:id', checkAuth, VideoController.deleteVideo);

export default router;