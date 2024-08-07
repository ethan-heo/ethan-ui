import { Token, TokenObj } from "./generateToken.token";
import iterateToken from "./utils/iterateToken";

const mapper = (token: Token) => {
	return iterateToken({
		data: {} as Record<string, TokenObj>,
		foundTokenObjCallback: (tokenNames, token, data) => {
			data[tokenNames.join("-")] = token;
		},
	})(token);
};

export default mapper;
