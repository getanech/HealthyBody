// const { GoogleGenerativeAI } = require("@google/generativeai");
import { GoogleGenerativeAI } from "@google/generative-ai";
import parameters from "./config";
const genAI = new GoogleGenerativeAI(parameters.API_KEY);
const getQuote = async (date, workouts) => {
	console.log("workouts", workouts);
	const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
	let prompt = `
        I am going on a workout today, my workout will look as follows: ${workouts.map(
					(workout) => JSON.stringify(workout)
				)}, these will be 
        my workouts for today they are in an JSON array, with the exercises and the name of the workout etc...
        inside the object, take it into account.
        Today's date is: ${new Date(date).toLocaleDateString(
					"he-IL"
				)}, take into account any additional information that you may have, about
        events \ holidays and or any other information that might be relevant.
        Please give me a motivational quote for my workout, at most 2 sentences.
        If you're quoting a famous person, please just give me their name.
        No yapping, keep only the quote in the response.
        I want random quote each time.

        The format should be as follows:
        quote - the name of the person
        Feel free to create your own quotes, in this case, the author should be - "היקום"

        Translate Everything to Hebrew.

    `;

	const result = await model.generateContent(prompt);
	const response = await result.response;
	const text = response.text();
	return text;
};

export default getQuote;
