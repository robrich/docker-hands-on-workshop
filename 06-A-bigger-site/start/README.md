A bigger site
=============

Build a more real-world microservices app.  I've provided a backend .net core site, and a frontend node site.

Here's your challenge: build both `Dockerfile`s necessary to run these two sites.


Backend
-------

1. Open up `backend/Dockerfile`

2. Modify the file to build the .net app.  I've listed the shell commands you'll need to run.  Turn these into `Dockerfile` commands.

3. `docker build ...` the back-end image, tagging the image as `backend:0.1`.  Look to exercise 3 for clues if necessary.

4. `docker run ...` the back-end container, directing traffic to port 5000.

5. The backend doesn't have any web pages, so if we browse to it, we'll get an HTTP 404.

6. Run `docker container list` and note the container id or name of the back-end container.

7. Run `docker container inspect --format "{{ .NetworkSettings.IPAddress }}" ...` replacing `...` with the container id or name to get the IP address of the back-end container.  Note this IP address.  We'll need it in a bit.



Frontend
--------

1. Open `frontend/routes/index.js`.  Note the line that says `const BACKEND = 'http://172.17.0.2:5000';`

   We need to update this to the actual IP address of the backend container we found above.

   Note: we can't just browse from the front-end container to `http://localhost:5000/` because nothing is running in the front-end container on port 5000.

2. Open `frontend/Dockerfile`

3. Modify the file to build the node app.  I've listed the shell commands you'll need to run.  Turn these into `Dockerfile` commands.  Look to exercise 2 for clues if necessary.

4. Build the front-end image, tagging it as `frontend:0.1`.

5. `docker run ...` the front-end container, directing traffic to port 3000.

6. Look at the container list and ensure both containers are now running.


Test it out
-----------

1. Visit [http://localhost:3000/](http://localhost:3000/) to cast your vote.

2. Look at the docker logs for each container.


Shut down the containers
------------------------

1. From a terminal:

   ```
   docker container list --all
   ```

2. A quick way to remove all stopped containers:

   ```
   docker container prune -f
   ```

   This doesn't stop any containers, but it removes ones that have stopped previously.

3. Run `docker container list --all` again to see what's left.

4. For each remaining container: `docker container rm -f ...` substituting the container name or id for `...`.  This both stops and removes the container in one command.

5. `docker container list --all` to ensure it's empty.


Bonus (Windows only)
---------------------------

Can you run these as Windows containers?


Bonus
-----

Can you swap out these microservices with sites in your favorite technology?

