We can mount a config map representing appsettings.json into the /app/config
directory, and load it. If it's there, it will be loaded preferentially to the
appsettings.json in the project root (if there is one).

See [a good article](https://medium.com/@fbeltrao/automatically-reload-configuration-changes-based-on-kubernetes-config-maps-in-a-net-d956f8c8399a)
on setting this up in Kubernetes.