
# Description
Angular 2.0 client for vert.x server application

# Preparation
	sudo npm install
	[sudo npm install -g gulp]
    gulp serve

# Update Packages and Definitions
	npm-check-updates -u
	tsd query angular2 --resolve --overwrite --save --action install

# Building the Docker Image

```bash
mkdir -p dep
(cd dep && test -f busybox && sha256sum -c ../busybox.sha256) || wget http://www.busybox.net/downloads/binaries/1.21.1/busybox-x86_64 -O dep/busybox
(cd dep && test -f busybox && sha256sum -c ../busybox.sha256)
chmod a+x dep/busybox
docker build -t poc/frontend .
```

# Running the Docker Image

```bash
docker run -itd -p 80:3000 --name poc_frontend_0 poc/frontend 'http://inn-o-as1.lan.inology.nl:8080'
```
