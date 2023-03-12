import { Response } from "express";

// This utility file is useful for returning standardized responses to HTTP requests.

// Returns HTTP requests that end in an error.
const handleHttpError = (res: Response, error: string, errorRaw?: any) => {
	res.status(500);
	res.send({ status: 500, msg: error });
};

// Returns HTTP requests globals.
const handleHttp = (res: Response, message: string, code: number) => {
	res.status(code);
	res.send({ status: code, msg: message });
};

export { handleHttpError, handleHttp };
