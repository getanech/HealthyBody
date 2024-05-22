import axios from "axios";
const getQuoteOfTheDay = async () => {
	const url = "https://api.api-ninjas.com/v1/quotes?category=success";
	const response = await axios.get(url, {});
};
