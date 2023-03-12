import { Router } from "express";
import { readdirSync } from "fs";

// Manages dynamic routes according to the file contained in the routes folder.

const PATH_ROUTER = `${__dirname}`;
const router = Router();

// Clean routes
const cleanFileName = (fileName: string) => {
	const file = fileName.split(".").shift();
	return file;
};

// It reads the file and takes it into account as a route.
readdirSync(PATH_ROUTER).filter((fileName) => {
	const cleanName = cleanFileName(fileName);
	if (cleanName !== "index") {
		import(`./${cleanName}`).then((moduleRouter) => {
			router.use(`/${cleanName}`, moduleRouter.router);
		});
	}
});

export { router };
