import Joi from 'joi';

export const loginSchema = Joi.object({
    authType: Joi.string()
        .valid('email', 'phoneNumber')
        .required()
        .messages({
            'any.only': 'authType must be either "email" or "phoneNumber"',
            'any.required': 'authType is a required field',
        }),
    email: Joi.when('authType', {
        is: 'email',
        then: Joi.string().email().required().messages({
            'string.email': 'Email must be a valid email address',
            'any.required': 'Email is required when type is "email"',
        }),
        otherwise: Joi.forbidden(),
    }),
    phoneCode: Joi.when('authType', {
        is: 'phoneNumber',
        then: Joi.string().required().messages({
            'any.required': 'Phone code is required when type is "phoneNumber"',
        }),
        otherwise: Joi.forbidden(),
    }),
    phoneNumber: Joi.when('authType', {
        is: 'phoneNumber',
        then: Joi.string().required().messages({
            'any.required': 'Phone number is required when type is "phoneNumber"',
        }),
        otherwise: Joi.forbidden(),
    }),
});
