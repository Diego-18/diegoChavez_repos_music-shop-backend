import { NextFunction, Response } from "express";
import { RequestExt } from "../interfaces/request-extends";
import { handleHttp } from "../utils/http.request.handle";
import { verifyToken } from "../utils/jwt.handle";

// Check that the token is valid as well as identify which user and password you are trying to access.
const checkSession = (req: RequestExt, res: Response, next: NextFunction) => {
	try {
		const jwtByUser = req.headers.authorization || "";
		const jwt = jwtByUser.split(" ").pop();
		const isUser = verifyToken(`${jwt}`) as { email: string };
		if (!isUser) {
			handleHttp(res, "YOU_DO_NOT_HAVE_A_VALID_TOKEN", 401);
		} else {
			req.user = isUser;
			next();
		}
	} catch (e) {
		handleHttp(res, "INVALID_SESSION", 400);
	}
};

export { checkSession };
