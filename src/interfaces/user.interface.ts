import { Auth } from "./auth.interface";

// Users Interfaces
export interface User extends Auth {
	name: string;
	description: string;
}
