Docker Compose
==============

Run many containers together in concert

In a `docker-compose.yml` file we can specify both the `docker build` and `docker run` parameters for many images.  New in Docker Compose v3, we can also specify [scaling details](https://medium.com/@nagarwal/whats-new-in-docker-compose-v3-139bbdafa5ed) for Docker Swarm.


Option 1: Build your app
------------------------

Take the app you built in step 3, and build a `docker-compose.yml` file around it.  You can reference the completed `docker-compose.yml` in the done folder, [Docker docs](https://docs.docker.com/compose/gettingstarted/), and the [Welcome to Docker](https://robrich.org/slides/welcome-to-docker/#/) presentation for Docker compose syntax.


Option 2: Build my app
----------------------

Take the app we built in step 3 and build a `docker-compose.yml` file around it.

1. Create a file nameed `docker-compose.yml`.

2. Type `version: '3'`.  Version 3 adds support for scaling details for use with Docker Swarm.  If you're targeting Docker Toolbox, use `version: '2'`.

3. Type `services:`.  This begins the list of "services" or images.

4. Type `  backend:`.  This begins the details for the back-end site.

5. The build details include `    build: backend` saying "build the backend folder's Dockerfile"

6. The runtime details include `    ports:` and on the next line `- "5000"`.  Because we're only specifying the internal port here, the backend machine won't be exposed to the outside world, only to other containers in this list.

7. Next type `  frontend:`.  This begins the details for the front-end site.

8. The build details include `    build: frontend` saying "build the frontend folder's Dockerfile"

9. The runtime details include `    ports:` and on the next line `- "3000:3000"`.  We specify both ports to signify that we want this exposed as port 3000 to the outside.

10. Type `  links:` and `-backend`.  This identifies that this container will get a hosts file entry to the IP address of the `backend` container once it launches.  So now the front-end can reference the back-end as `http://backend:5000/`.

11. Tidy up `frontend/routes/index.js`, noting that the back-end is now just `http://backend:5000`.

12. To run the entire package together, run `docker-compose up -d`.  Like `docker run ...` the `-d` runs in daemon mode -- in the background.

13. Open a browser to [http://localhost:3000/](http://localhost:3000/) and start playing with your mesh of services.

14. You can use the standard `docker image list` and `docker container list` to view the images and containers Docker Compose built for you.

15. To stop all the containers, run `docker-compose down`.
