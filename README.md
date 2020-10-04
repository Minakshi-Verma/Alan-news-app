## Voice_enabled-news_app

<img src="./img/Screenshot (17).png" alt="desktop" width="500">
<br/>

<img src="./img/Screenshot (16).png" alt="desktop" width="250">
<br/>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Initialize the project with create react app ( using npx create-react-app ./)

### Dependacies
1- npm i @alan-ai/alan-sdk-web   //Allow us to use voice capabilities
2- @material-ui/core
3- classnames          // help the components with multiple classnames
4- words-to-numbers   //npm library which parse the words to actual number


### Alan AI software integration
1. Go to alan.app and sign up for a free account
2. You will recive limited free integration that you can use to test out your voice commands
3. Click integration and generate Alan API key
4. Initialize alanbtn in your react application with the alanKey you generated
5. Test out your react commands in alan studio as well as on your browser
Please check the alan docs for more info https://alan.app/docs/usage/getting-started)

### webApi https://newsapi.org/
