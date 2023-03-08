import { Instrument } from "../interfaces/instruments.interface";
import InstrumentModel from "../models/instruments";

const insertInstrument = async (data: Instrument) => {
	const responseInsert = await InstrumentModel.create(data);
	return responseInsert;
};

const getAllInstruments = async () => {
	const responseAllInstruments = await InstrumentModel.find({});
	return responseAllInstruments;
};

const getDetailsInstrument = async (id: string) => {
	const responseInstrument = await InstrumentModel.findOne({ _id: id });
	return responseInstrument;
};

const updateInstrument = async (id: string, data: Instrument) => {
	const responseInstrument = await InstrumentModel.updateOne(
		{ _id: id },
		data,
		{
			new: true,
		}
	);
	return responseInstrument;
};

const deleteInstrument = async (id: string) => {
	const responseInstrument = await InstrumentModel.deleteOne({ _id: id });
	return responseInstrument;
};

export {
	insertInstrument,
	getAllInstruments,
	getDetailsInstrument,
	updateInstrument,
	deleteInstrument,
};
