import Joi from 'joi';


class validation {
  static async eventValidation(req, res, next) {
    const schema = Joi.object().keys({
      eventName: Joi.string().min(3).max(150).required()
        .error(() => 'Please Enter A Valid Event Name, with at least 3 characters.'),
      eventDescription: Joi.string().min(3).max(250).optional()
        .error(() => 'Please Enter A Event Descritption, with at least 3 characters'),
      eventDate: Joi.string().min(3).max(50).required()
        .error(() => 'Please Enter A Valid Event Date, with at least 3 characters'),
      eventImageUrl: Joi.string().min(3).max(50).required()
        .error(() => 'Please Enter A Valid Event Image Url'),
    });
    await schema.validate(req.body, (err) => {
      if (err) {
        res.status(400).json({
          status: 400,
          message: err.details[0].message,
        });
      } else {
        next();
      }
    });
  }

  static async eventUpdateValidation(req, res, next) {
    const eventNames = req.body.eventName;
    const eventDescriptions = req.body.eventDescription;
    const eventDates = req.body.eventDate;
    const eventUrls = req.body.eventImageUrl;
    const schema = Joi.object().keys({
      eventName: eventNames ? (Joi.string().min(3).max(150).required()
        .error(() => 'Please Enter A valid Event name, with at least 3 characters')) : (null),
      eventDescription: eventDescriptions ? (Joi.string().min(3).max(250).required()
        .error(() => 'Please Enter A valid Event Descritption, with at least 3 characters')) : (null),
      eventDate: eventDates ? (Joi.string().min(3).max(50).required()
        .error(() => 'Please Enter A valid Event Date, with at least 3 characters')) : (null),
      eventImageUrl: eventUrls ? (Joi.string().min(3).max(50).required()
        .error(() => 'Please Enter A valid Event Image Url, with at least 3 characters')) : (null),
    });
    await schema.validate(req.body, (err) => {
      if (err) {
        res.status(400).json({
          status: 400,
          message: err.details[0].message,
        });
      } else {
        next();
      }
    });
  }
}
export default validation;