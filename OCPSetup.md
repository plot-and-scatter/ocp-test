# Building and deploying from the command line

Ensure you are logged in to the `oc` CLI (using `oc login`).

# Backend

## Set up the backend Secret

Using the web-based console, create a new secret:

Name: `ocp-test-backend-secret`
Key: `appsettings.json`
Value:
```json
{
  "ForecastPrefix": {
    "PrefixText": "Secretly",
    "SecretText": "MySecret"
  }
}
```

To help with organization, you should also apply a new label to the Secret:
`app=ocp-test-backend`.

## Applying the backend build config

You should be in the `/openshift/backend` folder.

If you have done this before and want to start from scratch, delete all the
build config objects. **Be sure you are in the correct project, and that you
really want to delete these objects! Ensure nothing you want to keep is tagged
`ocp-test-backend`!**

```
oc delete all -l build=ocp-test-backend
```

To recreate the objects from the build config:

```
oc process -f ./bc.yaml -p NAME=ocp-test-backend IMAGE_TAG=<SOMETAG> NAMESPACE=<YOURNAMESPACE> | oc apply -f -
```

Where NAMESPACE is the project name, e.g. `abc123-tools`.

## Applying the backend deploy config

You should be in the `/openshift/backend` folder.

Again, delete all objects. **Caveat developer! See warnings above!**

```
oc delete all -l app=ocp-test-backend
```

To recreate the objects from the deploy config:

```
oc process -f ./dc.yaml -p NAME=ocp-test-backend IMAGE_TAG=<SOMETAG> NAMESPACE=<YOURNAMESPACE> BASE_OPENSHIFT_URL=<BASEURL> | oc apply -f -
```

## Testing everything is running

`curl http://ocp-test-backend-<NAMESPACE>-<BASEURL>/WeatherForecast` should
return a weather forecast, with text as specified in the config and secrets.

## Changing the app settings

You can adjust the `appsettings.json` settings as you'd like, and redeploy.
However, note that the changes to the Config Map and Secrets don't automatically
get picked up by the running .NET Core app. You can pick them up by reducing the
pod count in the deployment to 0, and then increasing back up to 1.




# Frontend

## Applying the frontend build config

You should be in the `/openshift/frontend` folder.

To recreate the objects from the build config:

```
oc process -f ./bc.yaml -p NAME=ocp-test-frontend IMAGE_TAG=<SOMETAG> NAMESPACE=<YOURNAMESPACE> | oc apply -f -
```

Where NAMESPACE is the project name, e.g. `abc123-tools`.

## Building the frontend from a released .zip on GitHub

Find the release which has been built that you want to start a build from (required because we have build artifacts we want to use):

```
oc start-build ocp-test-frontend --from-archive=https://github.com/plot-and-scatter/ocp-test/releases/download/v0.1-alpha/ocp-test-frontend.zip
```

## Applying the frontend deploy config

To create the objects:

```
oc process -f ./dc.yaml -p NAME=ocp-test-frontend IMAGE_TAG=<SOMETAG> NAMESPACE=<YOURNAMESPACE> | oc apply -f -
```



# Triggering new builds

```
oc start-build ocp-test-backend
```

OR

```
oc start-build ocp-test-frontend --from-archive=https://github.com/plot-and-scatter/ocp-test/releases/download/v0.1-alpha/ocp-test-frontend.zip
```