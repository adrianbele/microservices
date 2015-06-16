
DESCRIPTION
===========
Angular 2.0 client for vert.x server application

PREPARATION
===========
npm install -g typescript@^1.5.0-beta
npm install -g tsd
tsd query angular2 --action install
tsd install es6-promise --save
tsd install rx --save
tsd install rx-lite --save

TEST
====
Start a simple http server from the app directory. For example use:
npm install http-server
cd app
http-server
