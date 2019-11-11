import database from '../database/models';

class EventService {
  static async getAllEvents() {
    try {
      return await database.Event.findAll(
        {
          order: [
            ['createdAt', 'DESC'],
          ],
        },
      );
    } catch (error) {
      throw error;
    }
  }

  static async addEvent(newEvent) {
    try {
      return await database.Event.create(newEvent);
    } catch (error) {
      throw error;
    }
  }

  static async eventNameCount(eventName) {
    try {
      return await database.Event.count({
        where: [{ eventName }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async eventDescrCount(eventDescription) {
    try {
      return await database.Event.count({
        where: [{ eventDescription }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async eventDateCount(eventDate) {
    try {
      return await database.Event.count({
        where: [{ eventDate }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async eventImageUrlCount(eventImageUrl) {
    try {
      return await database.Event.count({
        where: [{ eventImageUrl }],
      });
    } catch (error) {
      throw error;
    }
  }

  static async updateEvent(id, updateEvent) {
    try {
      const eventToUpdate = await database.Event.findOne({
        where: { id: Number(id) },
      });

      if (eventToUpdate) {
        return await database.Event.update(updateEvent, { where: { id: Number(id) }, returning: true });
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAnEvent(id) {
    try {
      const theEvent = await database.Event.findOne({
        where: { id: Number(id) },
      });
      return theEvent;
    } catch (error) {
      throw error;
    }
  }

  static async deleteEvent(id) {
    try {
      const eventToDelete = await database.Event.findOne({ where: { id: Number(id) } });

      if (eventToDelete) {
        const deletedEvent = await database.Event.destroy({
          where: { id: Number(id) },
        });
        return deletedEvent;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default EventService;
