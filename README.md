# Python Code Debugger

This is a simple test project that utilizes Google's Generative AI to correct Python code. The project is built using Node.js and uses the `@google/generative-ai` package for AI-powered code correction.

## Features

- Accepts user-input Python code.
- Uses Google's Gemini API for code correction.
- Outputs the corrected Python code.

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd covertor
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your API key:
   ```sh
   API_KEY=your_google_api_key
   ```

## Usage

Run the script using:

```sh
node script.js
```

You will be prompted to enter your Python code, and the corrected version will be displayed.

## Dependencies

- `@google/generative-ai` (^0.24.0)
- `dotenv` (^16.4.7)

## Notes

- This project is for testing purposes only.
- Requires Node.js 18+.
- Do not expose your API key in public repositories.

## License

This project is licensed under the ISC License.

