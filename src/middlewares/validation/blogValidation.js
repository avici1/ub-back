import Joi from 'joi';

export default class Validation {
  static async blogPostValidate(req, res, next) {
    const schema = Joi.object().keys({
      blogTitle: Joi.string().min(3).required(),
      blogDescription: Joi.string().min(3).required(),
      blogPost: Joi.string().min(7).required(),
      blogPic: Joi.string().min(3).required(),
    });
    await schema.validate(req.body, (err) => {
      if (err) {
        return res.status(400).json({
          status: 'Error',
          message: `${err.details[0].message}`,
        });
      }
      else {
        next();
      }
    });
  }

  static async blogUpdateValidate(req, res, next) {
    const schema = Joi.object().keys({
      blogTitle: Joi.string().min(3).optional(),
      blogDescription: Joi.string().min(3).optional(),
      blogPost: Joi.string().min(7).optional(),
      blogPic: Joi.string().min(3).optional(),
    });

    await schema.validate(req.body, (err) => {
      if (err) {
        return res.status(400).json({
          status: 'Error',
          message: `${err.details[0].message}`,
        });
      }
      else {
        next();
      }
    });
  }
}
