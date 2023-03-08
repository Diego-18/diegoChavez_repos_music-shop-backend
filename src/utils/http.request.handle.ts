import { Response } from "express";

const handleHttpError = (res: Response, error: string, errorRaw?: any) => {
	res.status(500);
	res.send({ status: 500, msg: error });
};

const handleHttpNotFound = (res: Response, error: string, errorRaw?: any) => {
	res.status(404);
	res.send({ status: 404, msg: error });
};

const handleHttpSuccessful = (res: Response, message: string) => {
	res.status(200);
	res.send({ status: 200, msg: message });
};

export { handleHttpError, handleHttpNotFound, handleHttpSuccessful };
