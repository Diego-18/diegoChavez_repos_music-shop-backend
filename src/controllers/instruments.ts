import { Response } from "express";
import { RequestExt } from "../interfaces/request-extends";
import {
	deleteInstrument,
	getAllInstruments,
	getDetailsInstrument,
	insertInstrument,
	updateInstrument,
} from "../services/instruments";
import { handleHttp, handleHttpError } from "../utils/http.request.handle";

// Get musical instruments for ID
const getItem = async ({ params }: RequestExt, res: Response) => {
	try {
		const { id } = params;
		const response = await getDetailsInstrument(id);
		const data = response ? response : handleHttp(res, "NOT_FOUND", 404);
		res.send(data);
	} catch (error) {
		handleHttpError(res, "ERROR_GET");
	}
};

// Get all musical instruments.
const getItems = async (req: RequestExt, res: Response) => {
	try {
		const response = await getAllInstruments();
		res.send({ response });
	} catch (error) {
		handleHttpError(res, "ERROR_GET");
	}
};

// Update musical instruments.
const updateItem = async ({ params, body }: RequestExt, res: Response) => {
	try {
		const { id } = params;
		const response = await updateInstrument(id, body);
		const data =
			response.modifiedCount == 0
				? handleHttp(res, "NOT_FOUND", 404)
				: handleHttp(res, "SUCCESSFUL", 200);
	} catch (error) {
		handleHttpError(res, "ERROR_UPDATE");
	}
};

// Register musical instruments.
const postItem = async ({ body }: RequestExt, res: Response) => {
	try {
		const response = await insertInstrument(body);
		handleHttp(res, "SUCCESSFUL", 200);
	} catch (error) {
		handleHttpError(res, "ERROR_CREATE", error);
	}
};

// Delete musical instruments.
const deleteItem = async ({ params }: RequestExt, res: Response) => {
	try {
		const { id } = params;
		const response = await deleteInstrument(id);
		const data =
			response.deletedCount == 0
				? handleHttp(res, "NOT_FOUND", 404)
				: handleHttp(res, "SUCCESSFUL", 200);
	} catch (error) {
		handleHttpError(res, "ERROR_DELETE");
	}
};

export { getItems, getItem, postItem, updateItem, deleteItem };
