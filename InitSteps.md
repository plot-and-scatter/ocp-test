# How I set up this project

## Frontend

`npx create-react-app frontend`

Test it works:

```
cd frontend
yarn install
yarn start
```

Visit http://localhost:3000 to see the app.

## Backend

```
dotnet new webapi -o backend
dotnet dev-certs https --trust
```

Test it works:

```
cd backend
dotnet run
```

Visit http://localhost:5000/WeatherForecast

## Misc

Adjusted gitignore settings.

# Adjustments to test ingestion of secrets / env variables

## Getting the frontend to know where the API lives

We will load a setting from an `__ENV.js` file using [react-env](https://github.com/andrewmclagan/react-env).

```
cd frontend
yarn add @beam-australia/react-env
```

Add a `prestart` line to `scripts` in `package.json` to run `react-env` before
start:

```json
  "scripts": {
    "prestart": "react-env",
    "start": "react-scripts start",
    [...]
  }
```

Create an `.env` file (gitignored), based on `.env.example`:

```
REACT_APP_API_URL=http://localhost:5050
```

Add a line to the `<head>` tag in `index.html` to load the file:

```html
<!-- Add dynamic (run-time) environment variables-->
<script src="%PUBLIC_URL%/__ENV.js"></script>
```


Add a loader into App.js:

```jsx
import env from '@beam-australia/react-env';

[...]

<p>
  The API URL is: {env("API_URL")}
</p>
```

This will now show the base URL, as well as retrieve the WeatherForecast using
window.fetch.

