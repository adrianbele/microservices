
DESCRIPTION
===========
Angular 2.0 client for vert.x server application

PREPARATION
===========
    npm install; sudo ln -s node_modules/angular2 app/angular2/;

    npm install -g typescript@^1.5.0-beta
    npm install -g tsd

    tsd install es6-promise --save
    tsd install rx --save
    tsd install rx-lite --save

    [optional]
    tsd query angular2 --action install

TEST
====
Start a simple http server from the app directory. For example use:

    npm install http-server
    cd app
    http-server

TODO
====
- get routing to work
- use vert.x authentication example (classic sessioncookie version) to allow/disallow user on todolist component
- create feedback for authentication call
- create todolist component
- add REST calls to api so user can add tasks to todolist
