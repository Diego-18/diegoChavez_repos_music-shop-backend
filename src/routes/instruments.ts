import { Router } from "express";
import {
	deleteItem,
	getItem,
	getItems,
	postItem,
	updateItem
} from "../controllers/instruments";
import { checkSession } from "../middleware/session";

const router = Router();

router.get("/", checkSession, getItems);
router.get("/:id", checkSession,  getItem);
router.post("/", checkSession, postItem);
router.put("/:id", checkSession, updateItem);
router.delete("/:id", checkSession, deleteItem);

export { router };
