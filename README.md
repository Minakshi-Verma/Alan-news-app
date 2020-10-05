## Voice_enabled-news_app

Alan news app is voice enabled smart news app that gives you latest news around you just using voice commands. You can find news from your favorite news source ( like, CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...) based on several different categories(like, business, entertainment, health, science, sports, general, technology...) or search terms(like, Bitcoin, PlayStation 5, Smartphones, Donald Trump...). The news are fetched from trusted https://newsapi.org/. To make this app more fun, we have integrated everyday coversation script as well.  

<img src="./img/Screenshot (17).png" alt="desktop" width="500">
<br/>

<img src="./img/Screenshot (16).png" alt="desktop" width="250">
<br/>


### This project was bootstrapped/initialized with [Create React App](https://github.com/facebook/create-react-app).( using npx create-react-app ./)<br />

## Available Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Dependacies and installations
1- npm i @alan-ai/alan-sdk-web   //Allow us to use voice capabilities
2- @material-ui/core
3- classnames          // help the components with multiple classnames
4- words-to-numbers   //npm library which parse the words to actual number<br />

### Alan AI software integration
1. Go to alan.app and sign up for a free account
2. You will recive limited free integration that you can use to test out your voice commands
3. Click integration and generate Alan API key
4. Initialize alanbtn in your react application with the alanKey you generated
5. Test out your react commands in alan studio as well as on your browser <br />
Please check the alan docs for more info https://alan.app/docs/usage/getting-started)

### Trusted webAPI source used to fetch data: https://newsapi.org/
