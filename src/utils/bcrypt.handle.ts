import { compare, hash } from "bcryptjs";

const encryptPassword = async (pass: string) => {
	const passwordHash = await hash(pass, 8);
	return passwordHash;
};

const verifiedPassword = async (pass: string, passHash: string) => {
	const isCorrect = await compare(pass, passHash);
	return isCorrect;
};

export { encryptPassword, verifiedPassword };
