# Tore jobber opp React frontend:
- Router her; https://www.youtube.com/watch?v=0cSVuySEB0A&t=272s, se også prosjektet react-
- Navbar fra bootstrap her; https://morioh.com/p/9bfffb706d01router-six
- MS Identification here; https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react

# Status på fremdrift
- Har fått opp grunnleggende struktur og navigering
- Har fått opp autentisering til Azure AAD, og styrer Navigering (Menu) etter om den er restiricted eller ikke. Login, logout virker med popup og redirect.
- Er installer på static.stokkedal.net (dvs ikke siste version)
- Neste er
  - Å skru om til "Critical applicaitons list" 
  - Simpel fetch for applicaitons
  - Then supporting data (ork, locaitons, data regions, SW)


# Utfordringer løst

## Cors, se linker;
Når React prosjekt som kjører på localhost:3000 og bruker Quarkus prosjekt på localhost:8080 så får vi xsite scription feil...
- https://www.youtube.com/watch?v=PNtFSVU-YTI
- https://quarkus.io/guides/http-reference#cors-filter
- Oppdaterte appplicaiton.properties i Jaca prossjektet løste det :-)

## Feil på Webpack & polyfill
BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
Fent ingen god grunn, starter på scratch i react-struct, feilsøkt og fant feilen. Hadde lagt til " import { response } from "express";" det var årsaken

## Login do not work on IP adress, must use localhost


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

T start run npm install, if not allready installed on your computer, project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
