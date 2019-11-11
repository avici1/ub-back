import { Router } from 'express';
import EventController from '../controllers/EventController';
import validation from '../middlewares/validation/eventValidation';


const router = Router();

router.get('/', EventController.getAllEvents);
router.post('/', validation.eventValidation, EventController.addEvent);
router.get('/:id', EventController.getAnEvent);
router.put('/:id', validation.eventUpdateValidation, EventController.updatedEvent);
router.delete('/:id', EventController.deleteEvent);

export default router;