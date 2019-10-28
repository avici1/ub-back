import Joi from 'joi';


class validation {
  static async videoValidation(req, res, next) {
    const schema = Joi.object().keys({
      videoTitle: Joi.string().min(3).max(50).required()
        .error(() => 'Please Enter A Valid Video Title, with at least 3 characters.'),
      videoDescription: Joi.string().min(3).max(50).optional()
        .error(() => 'Please Enter A Valid Video Descritption, with at least 3 characters'),
      videoUrl: Joi.string().min(3).max(50).required()
        .error(() => 'Please Enter A Valid Video Url, with at least 3 characters'),
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

  static async videoUpdateValidation(req, res, next) {
    const videoTitles = req.body.videoTitle;
    const videoDescriptions = req.body.videoDescription;
    const videoUrls = req.body.videoUrl;
    const schema = Joi.object().keys({
      videoTitle: videoTitles ? (Joi.string().min(3).max(50).required()
        .error(() => 'Please Enter A valid video Title, with at least 3 characters')) : (null),
      videoDescription: videoDescriptions ? (Joi.string().min(3).max(50).required()
        .error(() => 'Please Enter A valid video Descritption, with at least 3 characters')) : (null),
      videoUrl: videoUrls ? (Joi.string().min(3).max(50).required()
        .error(() => 'Please Enter A valid video Url, with at least 3 characters')) : (null),
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