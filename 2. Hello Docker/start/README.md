My First Container
==================

We're going to build our first container.

Step 1: Build the app
---------------------

1. Go to [nodejs.org](https://nodejs.org/en/about) and click on "About"

2. Copy the sample program

3. Paste into a new file called `server.js`

4. Modify this line: `server.listen(port, hostname, () => {` to this: `server.listen(port, () => {` (e.g. remove `hostname`.)


Step 2: Craft the Dockerfile
----------------------------

1. Create a new file named `Dockerfile` -- note it has no file extension

2. Write `FROM node`.  This says "start with the node base-image"

3. Write `WORKDIR /app`.  This says "I want my app folder to be the `/app` directory"

4. Write `COPY . /app`.  This says "Copy all the files in my current folder into the `/app` directory when the image is built."

4. Write `EXPOSE 3000`.  This says "I want the container's port 3000 to be accessible for inbound traffic from outside the container"

5. Write `CMD ["node", "server"]`.  This says "The command line to run when starting the container is `node server`. In other words, Start Node with the `server.js` file."

6. Save the Dockerfile


Step 3: Build the Dockerfile into an image
------------------------------------------

1. From within the folder with the `Dockerfile` and `server.js` file, run `docker build --tag hellonode:0.1 .` from a command prompt.  This says "Build the current directory's Dockerfile into an image".

2. After it finishes, run `docker image list` to see the image it built.  Your container is at the very top because this list is sorted by create date descending.


Step 4: Run the image as a container
------------------------------------

1. Run `docker run -p 3000:3000 -d hellonode:0.1` from a command prompt.  This says "Run the image named `hellonode`, version `0.1` as a container, and expose port 3000 as port 3000.

2. Open a browser to [http://localhost:3000](http://localhost:3000).  Success!

3. Run `docker container list` to see running containers.


**Note that you didn't install node**


Step 5: Stop and Remove the container
-------------------------------------

1. Run `docker container list` to see running containers.  Note the `CONTAINER ID` and/or the `NAMES` of the running container.

2. Run `docker container stop ...` replacing `...` with the first few characters of the `CONTAINER ID` or the `NAMES` you found above.  This stops the container.

3. Run `docker container list` and note the container is now stopped.

4. Run `docker container list --all` to see all containers -- both stopped and started.

5. Run `docker container rm ...` replacing `...` with the first few characters of the `CONTAINER ID` or the `NAMES` you found above.  This removes the container.


Step 6: Change the code, rebuild, rerun
---------------------------------------

1. Modify `server.js` to change `Hello World` to say something else interesting.

2. Run a `docker build` command, changing the version tag.

3. Run a `docker run` command to start the container.

4. Browse to [http://localhost:3000](http://localhost:3000) to see the changes.

5. Run a `docker container stop` command to stop the container.

6. Run a `docker container ps` command to remove the container.
