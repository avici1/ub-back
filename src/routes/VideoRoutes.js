import { Router } from 'express';
import VideoController from '../controllers/VideoController';
import validation from '../middlewares/validation/videoValidation';

const router = Router();

router.get('/', VideoController.getAllVideos);
router.post('/', validation.videoValidation, VideoController.addVideo);
router.get('/:id', VideoController.getAVideo);
router.put('/:id', validation.videoUpdateValidation, VideoController.updatedVideo);
router.delete('/:id', VideoController.deleteVideo);

export default router;