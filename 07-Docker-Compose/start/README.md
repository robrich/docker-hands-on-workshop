Docker Compose
==============

Run many containers together in concert

In a `docker-compose.yml` file we can specify both the `docker build` and `docker run` parameters for many images.  New in Docker Compose v3, we can also specify [scaling details](https://medium.com/@nagarwal/whats-new-in-docker-compose-v3-139bbdafa5ed) for Docker Swarm.


Build Docker compose file
-------------------------

We're going to add to the app we built in step `06: A bigger Site` a `docker-compose.yml` file that will launch many things.

**Note:** Yaml files are white-space significant.  Indenting is done with **2 spaces**, not 4 spaces, not tabs.

1. Create a file named `docker-compose.yml` in the `06-A-bigger-site/start` folder.  This file goes at the root of the source code -- next to a solution file or main workspace configuration.

2. Add this line at the top of the file:

   ```
   version: '3'
   ```

   Version 3 adds support for scaling details for use with Docker Swarm.  If you're targeting Docker Toolbox, use `version: '2'`.

3. Add this line:

   ```
   services:
   ```

   This begins the list of "services" or images.

4. Indenting 2 spaces, add the first service:

   ```
     backend:
   ```

   This begins the details for the back-end site.

5. Indenting 2 more spaces, the build details include

   ```
       build: backend
   ```

   This says "build the backend folder's Dockerfile"

6. Mirroring the indenting for `build:`, the runtime details include:

   ```
       ports:
       - "5000"
    ```

    Because we're only specifying the internal port here, the backend machine won't be exposed to the outside world, only to other containers in this list.

7. Next we'll define the frontend container:

   ```
     frontend:
   ```

   This begins the details for the front-end site.

8. Indenting 2 spaces from `frontend:`, the build details include:

   ```
       build: frontend
   ```

   This says "build the frontend folder's Dockerfile"

9. Indenting 2 more spaces, the runtime details include:

   ```
       ports:
       - "3000:3000"
   ```

   We specify both ports to signify that we want this exposed as port 3000 to the outside.

10. Indented to match `ports:`, type:

    ```
        links:
        - backend
    ```

    This identifies that this container will get a hosts file entry to the IP address of the `backend` container once it launches.  So now the front-end can reference the back-end as `http://backend:5000/`.

11. Open up `frontend/routes/index.js`, and change the line ~~`const BACKEND = 'http://172.17.0.2:5000';`~~ to this:

    ```
    const BACKEND = 'http://backend:5000';
    ```

12. To run the entire package together, from a terminal run:

    ```
    docker-compose up -d
    ```

    Like `docker run ...` the `-d` runs in daemon mode -- in the background.

13. Open a browser to [http://localhost:3000/](http://localhost:3000/) and start playing with your mesh of services.

14. You can use the standard `docker image list` and `docker container list` to view the images and containers Docker Compose built for you.

15. To stop docker-compose, run:

    ```
    docker-compose down
    ```

    If you instead choose to stop the container with `docker stop ...`, Docker-compose will notice the stack is incomplete and start a new container.
