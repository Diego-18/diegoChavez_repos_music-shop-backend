import { model, Schema } from "mongoose";
import { Instrument } from "../interfaces/instruments.interface";

// Squema musical instruments.
const InstrumentSchema = new Schema<Instrument>(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		ranking: {
			type: Number,
			required: true,
		},
		currency: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const InstrumentModel = model("instruments", InstrumentSchema);
export default InstrumentModel;
