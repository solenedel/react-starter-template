# ⚛️ React project starter template

This project was created using `create-react-app`

The following files have been removed from the initial project setup:
- App.css
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- manifest.json
- logo192.png and logo512.png


## Other additions

- set up ESlint with AirBnB style guide [tutorial](https://dev.to/saurabhggc/add-eslint-prettier-and-airbnb-to-your-project-3mo8) -> (also add format on save to local workspace settings in VScode)

- Added a simple backend - see the `backend` folder which contains `index.js` (main server file) and where the `.env` file should be created locally. **NOTE: `.env` has been added to the `.gitignore` files, as it is not there by default in create-react-app**.

- There is a test request made to the [Nomics API](https://nomics.com/docs/) from `index.js`, and the data is retrieved from the back end to the front end in `App.js`.

- Added CDN for Google Fonts and Font Awesome in `index.html` 


## Run in development mode

To run the react frontend: `npm run start-frontend`
To run the backend: `npm run start-backend`


