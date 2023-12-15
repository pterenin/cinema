# Getting Started with Cinema App

1. Clone the project. 
2. Run **npm install** to install node modules
3. run: **npm run start** to run the app in the development mode. 
4. Open **http://localhost:3000** to view it in the browser.
5. Run **npm run test**  to run unit tests
6. Get valid **API_KEY** from themoviedb.org. Use this API key in **/src/unitls/urlUtils.ts**.

 <img width="962" alt="Screenshot 2023-12-15 at 12 16 39 PM" src="https://github.com/pterenin/cinema/assets/17990616/25be267a-a41a-43df-87c0-c6d724a1677c">
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test <file_name>`
 To test specific file

### API Key

Please get correct API key from themoviedb.org
Use this API key in `/src/unitls/urlUtils.ts`
export const API_KEY = <your API_KEY>;
