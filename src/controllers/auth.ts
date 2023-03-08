import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth";
import {
	handleHttp
} from "../utils/http.request.handle";

const register = async ({ body }: Request, res: Response) => {
	const responseUser = await registerNewUser(body);
	const data =
		responseUser === "ALREADY_USER"
			? handleHttp(res, "ALREADY_USER", 202)
			: handleHttp(res, "SUCCESSFUL", 200);
};

const login = async ({ body }: Request, res: Response) => {
	const { email, password } = body;
	const responseUser = await loginUser({ email, password });

	if (responseUser === "NOT_FOUND_USER") {
		handleHttp(res, "NOT_FOUND_USER", 404);
	}
	else if (responseUser === "PASSWORD_INCORRECT") {
		// res.status(403);
		// res.send(responseUser);
		handleHttp(res, "PASSWORD_INCORRECT", 403);
	} else {
		res.send(responseUser);
	}
};

export { login, register };
