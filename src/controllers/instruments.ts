import { Request, Response } from "express";
import {
	deleteInstrument,
	getAllInstruments,
	getDetailsInstrument,
	insertInstrument,
	updateInstrument
} from "../services/instruments";
import { handleHttpError, handleHttpNotFound, handleHttpSuccessful } from "../utils/http.request.handle";

const getItem = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const response = await getDetailsInstrument(id);
		const data = response ? response : handleHttpNotFound(res, "NOT_FOUND");
		res.send(data);
	} catch (error) {
		handleHttpError(res, "ERROR_GET");
	}
};

const getItems = async (req: Request, res: Response) => {
	try {
		const response = await getAllInstruments();
		res.send(response);
	} catch (error) {
		handleHttpError(res, "ERROR_GET");
	}
};

const updateItem = async ({ params, body }: Request, res: Response) => {
	try {
		const { id } = params;
		const response = await updateInstrument(id, body);
		const data = response.modifiedCount == 0 ? handleHttpNotFound(res, "NOT_FOUND") : handleHttpSuccessful(res, "SUCCESSFUL");
	} catch (error) {
		handleHttpError(res, "ERROR_UPDATE");
	}
};

const postItem = async ({ body }: Request, res: Response) => {
	try {
		const response = await insertInstrument(body);
		handleHttpSuccessful(res, "SUCCESSFUL");
	} catch (error) {
		handleHttpError(res, "ERROR_CREATE", error);
	}
};

const deleteItem = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const response = await deleteInstrument(id);
		const data =
			response.deletedCount == 0
				? handleHttpNotFound(res, "NOT_FOUND")
				: handleHttpSuccessful(res, "SUCCESSFUL");

	} catch (error) {
		handleHttpError(res, "ERROR_DELETE");
	}
};

export {
	getItems,
	getItem,
	postItem,
	updateItem,
	deleteItem,
};
