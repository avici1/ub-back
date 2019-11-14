import EventService from '../services/EventService';
import Helper from '../helpers/Helpers';

const helper = new Helper();

class EventController {
  static async getAllEvents(req, res) {
    try {
      const allEvents = await EventService.getAllEvents();
      if (allEvents.length > 0) {
        helper.setSuccess(200, 'Events retrieved successfully', allEvents);
      } else {
        helper.setSuccess(200, 'No Event Found');
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(400, error);
      return helper.send(res);
    }
  }

  static async addEvent(req, res) {
    const nameDuplicate = await EventService.eventNameCount(req.body.eventName);
    if (nameDuplicate) {
      return res.status(409).send({
        status: res.statusCode,
        message: 'Event Name already exists, Please Enter Another Name',
      });
    }
    const descriptionDuplicate = await EventService.eventDescrCount(req.body.eventDescription);
    if (descriptionDuplicate) {
      return res.status(409).send({
        status: res.statusCode,
        message: 'Event Description already exists, Please Enter Another Description',
      });
    }
    const dateDuplicate = await EventService.eventDateCount(req.body.eventDate);
    if (dateDuplicate) {
      return res.status(409).send({
        status: res.statusCode,
        message: 'Event Date already exists, Please Enter Another Date',
      });
    }
    const urlDuplicate = await EventService.eventImageUrlCount(req.body.eventImageUrl);
    if (urlDuplicate) {
      return res.status(409).send({
        status: res.statusCode,
        message: 'Event Image Url already exists, Please Enter Another Url',
      });
    }
    const newEvent = req.body;
    try {
      const createdEvent = await EventService.addEvent(newEvent);
      helper.setSuccess(201, 'Event Added!', createdEvent);
      return helper.send(res);
    } catch (error) {
      helper.setError(400, error.message);
      return helper.send(res);
    }
  }

  static async updatedEvent(req, res) {
    const nameDuplicate = req.body.eventName ? (await EventService.eventNameCount(req.body.eventName)) : ('');
    const descriptionDuplicate = req.body.eventDescription ? (await EventService.eventDescrCount(req.body.eventDescription)) : ('');
    const dateDuplicate = req.body.eventDate ? (await EventService.eventDateCount(req.body.eventDate)) : ('');
    const urlDuplicate = req.body.eventImageUrl ? (await EventService.eventImageUrlCount(req.body.eventImageUrl)) : ('');
    if (nameDuplicate || descriptionDuplicate || dateDuplicate || urlDuplicate) {
      return res.status(409).send({
        status: res.statusCode,
        message: 'Your Details already exists in DB, Please Enter new Details',
      });
    }
    const alteredEvent = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      helper.setError(400, 'Please Input Valid Numeric Value');
      return helper.send(res);
    }
    try {
      const updateEvent = await EventService.updateEvent(id, alteredEvent);
      if (!updateEvent) {
        helper.setError(404, `Can not find event with the id: ${id}`);
      } else {
        helper.setSuccess(200, 'Event Updated', updateEvent);
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(404, error);
      return helper.send(res);
    }
  }

  static async getAnEvent(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      helper.setError(400, 'Please input a valid numeric value');
      return helper.send(res);
    }

    try {
      const theEvent = await EventService.getAnEvent(id);

      if (!theEvent) {
        helper.setError(404, `Cannot find event with the id ${id}`);
      } else {
        helper.setSuccess(200, 'Event Found', theEvent);
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(404, error);
      return helper.send(res);
    }
  }

  static async deleteEvent(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      helper.setError(400, 'Please provide numeric value');
      return helper.send(res);
    }

    try {
      const eventToDelete = await EventService.deleteEvent(id);

      if (eventToDelete) {
        helper.setSuccess(200, 'Event Deleted');
      } else {
        helper.setError(404, `Event with id ${id} can't be found`);
      }
      return helper.send(res);
    } catch (error) {
      helper.setError(400, error);
      return helper.send(res);
    }
  }
}

export default EventController;