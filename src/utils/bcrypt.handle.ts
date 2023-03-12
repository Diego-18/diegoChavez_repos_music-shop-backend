import { compare, hash } from "bcryptjs";

// Utility used for encrypting and decrypting passwords.

// Encrypts the password.
const encryptPassword = async (pass: string) => {
	const passwordHash = await hash(pass, 8);
	return passwordHash;
};

// Unencrypted password.
const verifiedPassword = async (pass: string, passHash: string) => {
	const isCorrect = await compare(pass, passHash);
	return isCorrect;
};

export { encryptPassword, verifiedPassword };
