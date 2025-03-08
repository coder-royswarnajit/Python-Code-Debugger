const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); 

async function correctCode(userCode) {
    try {
        const prompt = `Correct the following python code and return only the corrected code:\n\n\`\`\`python\n${userCode}\n\`\`\``;
        const result = await model.generateContent(prompt);
        const correctedCode = result.response.text();

        // Extract code from markdown if present.
        const codeMatch = correctedCode.match(/```python\n([\s\S]*?)\n```/);
        if (codeMatch && codeMatch[1]) {
            return codeMatch[1].trim();
        } else {
            return correctedCode.trim(); // Return as is if no markdown found.
        }

    } catch (err) {
        console.error("Error correcting code:", err);
        return "An error occurred during code correction.";
    }
}

async function main() {
    readline.question("Enter your python code:\n", async (userCode) => {
        readline.close();
        const correctedCode = await correctCode(userCode);
        console.log("\nCorrected Code:\n", correctedCode);
    });
}

main();