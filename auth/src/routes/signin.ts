import express from 'express';
import {body} from 'express-validator';
import {Request, Response} from 'express';
import {validateRequest} from '../middlewares/validate-request';
import {User} from '../models/user';
import {BadRequestError} from '../errors/bad-request-error';
import {Password} from '../services/password';
import jwt from 'jsonwebtoken';

require('dotenv').config();

const router = express.Router();

router.post('/api/users/signin', [
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .notEmpty()
            .withMessage('you must supply a password')
    ],
    validateRequest,
    async (req: Request, res: Response) => {
        const {email, password} = req.body;

        const existingUser = await User.findOne({email});
        if (!existingUser) {
            throw new BadRequestError('Invalid credentials');
        }

        const passwordsMatch = await Password.compare(existingUser.password, password);

        if (!passwordsMatch) {
            throw new BadRequestError('Invalid credentials');
        }

        const userJwt = jwt.sign({
            id: existingUser.id,
            email: existingUser.email
        }, process.env.JWT_KEY!, {
            expiresIn: `${process.env.JWT_KEY_LIFE}`,
        });

        req.session = {
            jwt: userJwt
        };

        existingUser.token = userJwt;
        res.status(200).send(existingUser);
    });


export {router as signinRouter};
