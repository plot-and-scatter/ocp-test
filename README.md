# OCP test harness

A sample project to test the automatic deployment of a React frontend and .NET
Core backend.

## What we want to happen

### Backend

We want to be able to provide settings to the backend after building it.
Nominally this should be able to happen by placing an
`appsettings.Production.json` file, with appropriate settings in it, alongside
the built project.

### Frontend

Once we have deployed the backend, we want to be able to create/replace an
`__ENV.js` file in the `/public/config` folder of the `frontend` build, in
which case we can remove the `prestart` script in `package.json`.

## Working with this project

See the [OCPSetup](OCPSetup.md) document.
