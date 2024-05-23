const jwt = require("jsonwebtoken");

const secretKey = "HEALTHYBODY"; // Replace with a strong secret

const tokenUtil = {
	generateToken(user) {
		const payload = {
			userId: user.id,
			email: user.email,
		};

		const options = {
			expiresIn: "never",
		};

		return jwt.sign(payload, secretKey, options);
	},

	verifyToken(token) {
		try {
			const decoded = jwt.verify(token, secretKey);
			return decoded;
		} catch (err) {
			return null;
		}
	},
};

module.exports = tokenUtil;
