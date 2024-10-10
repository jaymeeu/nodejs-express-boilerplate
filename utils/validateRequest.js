// validateRequest.js
import Joi from 'joi';

/**
 * Middleware to validate request payloads against a defined Joi schema.
 * @param {Joi.ObjectSchema} schema - Joi schema to validate against.
 */
export const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    // Format the error messages
    // console.log(error, "err")
    const errorDetails = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: {
        "message": "Invalid payload",
        "details": errorDetails,
        "statusCode": 400,
      } });
  }
  next();
};
