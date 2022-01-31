import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string,
    email: string,
    token: string
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload
        }
    }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];

    if(!token){
        return next();
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_KEY!) as UserPayload;
        req.currentUser = payload;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }

    next();
};
