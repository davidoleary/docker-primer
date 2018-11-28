

** Build **
Build the "dev" instance of the image
```
docker build -t personal/primer:dev --target dev .
```

** Watch local changes **
Change code locally and have docker pick up the change using nodemon via(npm sart) - and see it via localhost
```
docker run  -p 3456:3456 --rm -it --init -v "${PWD}:/app" personal/primer:dev npm start

// -v "${PWD}:/app" mount the (local) current working directory to the `/app` directory in the docker container
// when we make a change locally the docker image will restart and used the new code (no need to build the image again)
```

** Debugger **
Expose the node debug port from the container to local by exposing the correct ports (9229) and different npm script that enables node inspect
```
docker run  -p 3456:3456 -p 9229:9229 --rm -it --init -v "${PWD}:/app" personal/primer:dev npm run debug-mode
```
Then go to `chrome://inspect` in the browser


NOTES and guides used:
https://blog.risingstack.com/how-to-debug-a-node-js-app-in-a-docker-container/
https://cravencode.com/post/docker/nodejs-local-development/
