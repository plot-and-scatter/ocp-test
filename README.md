# OCP test harness

A sample project to test the automatic deployment of a React frontend and .NET
Core backend.

## How I made this

### Frontend

`npx create-react-app frontend`

Test it works:

```
cd frontend
yarn install
yarn start
```

Visit http://localhost:3000 to see the app.

### Backend

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

### Misc

Adjusted gitignore settings.