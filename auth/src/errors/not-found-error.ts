import { CustomError } from "./custom-error";

export class NotfoundError extends CustomError {
    statusCode = 400;

    constructor() {
        super('Route not found');
        Object.setPrototypeOf(this, NotfoundError.prototype);
    }

    serializeErrors() {
        return [{ message: 'Not Found' }]
    }
}