import axios from 'axios';
export const key = '8006d6e96387388ba7608cce58444ba0a651d6a1';
//  Access token 8006d6e96387388ba7608cce58444ba0a651d6a1
const api = axios.create({
	baseURL: 'https://api-ssl.bitly.com/v4',
	headers: {
		Authorization: `Bearer ${key}`,
	},
});

export default api;
