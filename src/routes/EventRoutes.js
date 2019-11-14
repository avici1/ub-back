import { Router } from 'express';
import EventController from '../controllers/EventController';
import checkAuth from '../middlewares/checkAuth';
import validation from '../middlewares/validation/eventValidation';


const router = Router();

router.get('/', EventController.getAllEvents);
router.post('/', checkAuth, validation.eventValidation, EventController.addEvent);
router.get('/:id', EventController.getAnEvent);
router.put('/:id', checkAuth, validation.eventUpdateValidation, EventController.updatedEvent);
router.delete('/:id', checkAuth, EventController.deleteEvent);

export default router;