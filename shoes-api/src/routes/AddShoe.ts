import {Request, Response} from 'express';

var express = require('express');

const Shoe = require("../models/Shoe")

const router = express.Router();

router.post(
    '/api/users/shoe',
    async (req: Request, res: Response) => {
        const {email, brand, model, typeOfShoe, miles, cost, startDate, endDate} = req.body;

        console.log(startDate);

        const shoe = new Shoe({
            email, brand, model, typeOfShoe, miles, cost, startDate, endDate
        })
        await shoe.save().catch(ex => console.log(ex));

        res.status(201).send(shoe);
    }
);

export {router as addShoeRouter};
