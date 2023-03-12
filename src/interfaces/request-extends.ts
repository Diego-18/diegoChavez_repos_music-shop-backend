import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

// Extends the main request to get the user who is trying to log in.
export interface RequestExt extends Request {
	user?: JwtPayload | { id: string };
}
