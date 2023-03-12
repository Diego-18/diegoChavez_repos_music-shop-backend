import { Instrument } from "../interfaces/instruments.interface";
import InstrumentModel from "../models/instruments";

// Insert Instruments
const insertInstrument = async (data: Instrument) => {
	const responseInsert = await InstrumentModel.create(data);
	return responseInsert;
};

// Get all instruments
const getAllInstruments = async () => {
	const responseAllInstruments = await InstrumentModel.find({});
	return responseAllInstruments;
};

// Get details instruments
const getDetailsInstrument = async (id: string) => {
	const responseInstrument = await InstrumentModel.findOne({ _id: id });
	return responseInstrument;
};

// Update instruments
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

// Delete instruments
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
