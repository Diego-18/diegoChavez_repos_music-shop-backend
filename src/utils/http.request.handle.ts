import { Response } from "express";

const handleHttpError = (res: Response, error: string, errorRaw?: any) => {
	res.status(500);
	res.send({ status: 500, msg: error });
};

const handleHttp = (res: Response, message: string, code: number) => {
	res.status(code);
	res.send({ status: code, msg: message });
};

export {
	handleHttpError,
	handleHttp,
};
