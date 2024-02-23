import OpenAI from 'openai';
import dotenv from 'dotenv'; 
dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.openAiKey, // https://platform.openai.com/api-keys create key from here. 
});

export default openai; 