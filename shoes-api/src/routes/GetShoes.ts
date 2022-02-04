import {Request, Response} from 'express';

var express = require('express');

const Shoe = require("../models/Shoe")

const router = express.Router();

router.get(
    '/api/users/shoes',
    async (req: Request, res: Response) => {

        const shoes = await Shoe.find()

        res.status(200).send(shoes);
    }
);

//get all shoes for a user
router.get(
    '/api/users/shoes/:email',
    async (req: Request, res: Response) => {
        const {email} = req.params;
        const query = {email};
        const jsonQuery = JSON.stringify(query);

        const shoes = await Shoe.find({jsonQuery});

        console.log(`Trying to find shoes: ${shoes} for ${email} , query = ${jsonQuery}`)

        res.status(200).send(shoes);
    }
);

export {router as getShoeRouter};
