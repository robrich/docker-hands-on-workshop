My First Container
==================

We're going to build our first container as a Linux workload.


Step 0: Switch to Linux containers
----------------------------------

1. Running on Windows?  Right-click on the docker system tray icon, and choose "Switch to Linux Containers".

2. If it says "Switch to Windows containers" you don't need to do anything, you're already there.


Step 1: Build the app
---------------------

1. Create a blank directory and open a terminal in that directory

2. Go to [nodejs.org](https://nodejs.org/en/about) and click on "About"

3. Copy the sample program

4. Paste into a new file called `server.js`

5. Modify this line: `server.listen(port, hostname, () => {` to this: `server.listen(port, () => {` (e.g. remove `hostname`.)


Step 2: Craft the Dockerfile
----------------------------

1. Create a new file named `Dockerfile` -- note it has no file extension.

2. Write `FROM node` into the Dockerfile.  This says "start with the node base-image".

3. Write `WORKDIR /app`.  This says "I want my process to start from the `/app` directory."

4. Write `COPY . /app`.  This says "Copy all the files in my current folder into the `/app` directory when the image is built."

4. Write `EXPOSE 3000`.  This says "I want the container's port 3000 to be accessible for inbound traffic from outside the container."

5. Write `CMD ["node", "server"]`.  This says "The command line to run when starting the container is `node server`. In other words, Start Node with the `server.js` file."

6. Save the Dockerfile


Step 3: Build the Dockerfile into an image
------------------------------------------

1. From within the folder with the `Dockerfile` and `server.js` file, run `docker build --tag hellonode:0.1 .` from a command prompt.  This says "Build the current directory's Dockerfile into an image".

2. After it finishes, run `docker image list` to see the image it built.  Your container is at the very top because this list is sorted by create date descending.


Step 4: Run the image as a container
------------------------------------

1. Run `docker run -p 3000:3000 -d hellonode:0.1` from a command prompt.  This says "Run the image named `hellonode`, version `0.1` as a container, and expose the container's port 3000 as port 3000 on the docker hypervisor.  `-d` says "run in daemon mode" or "run in the background".

2. Open a browser to [http://localhost:3000](http://localhost:3000).  Success!

3. Run `docker container list` to see running containers.  Is it not running?  See step 5.

**Note: you didn't install node**


Step 5: Debugging a failed container
------------------------------------

Did your container not start up correctly in Step 4?  Let's look for clues to what happened.

1. Run `docker container list --all`.  This will show both running and stopped containers.

2. Note the `CONTAINER ID` and/or the `NAMES` of the failed container.  We'll need it next.

3. Run `docker container logs ...`, replacing `...` with the first few characters of the `CONTAINER ID` or the `NAMES` you found above.  This shows the console output from the failed container.  Did this give you clues on how to fix it?

4. Remove the stopped container using Step 6 below, then return to Step 3 to rebuild the container.

5. Start the container using `docker run -p 3000:3000 hellonode:0.1` without the `-d` so the console output comes straight to your screen.

6. When you're ready, use CNTRL-C to break out of the console, and get back to the host's terminal.


Step 6: Stop and Remove the container
-------------------------------------

1. Run `docker container list` to see running containers.  Note the `CONTAINER ID` and/or the `NAMES` of the running container.

2. Run `docker container stop ...` replacing `...` with the first few characters of the `CONTAINER ID` or the `NAMES` you found above.  This stops the container.

3. Run `docker container list` and note the container is now stopped.

4. Run `docker container list --all` to see all containers -- both stopped and started.

5. Run `docker container rm ...` replacing `...` with the first few characters of the `CONTAINER ID` or the `NAMES` you found above.  This removes the container.


Step 7: Change the code, rebuild, rerun
---------------------------------------

1. Modify `server.js` to change `Hello World` to say something else interesting.

2. Run a `docker build` command, changing the version tag.

3. Run a `docker run` command to start the container.

4. Browse to [http://localhost:3000](http://localhost:3000) to see the changes.

5. Run a `docker container stop` command to stop the container.

6. Run a `docker container rm` command to remove the container.


Step 8: Stretch goal (Windows only)
-----------------------------------

Running on a Windows machine?  Switch to Windows Containers, and modify your dockerfile to run a Windows workload.

1. Change `FROM node` to `FROM stefanscherer/node-windows:7-nano`

2. Run a `docker build` command, setting a version tag.

3. Run a `docker run` command to start the container.

4. Windows workloads don't do the same DNS magic that Linux workloads do, so let's figure out the IP address of the machine.

5. Run `docker container list` and note the container id.

6. Run `docker container inspect --format "{{ .NetworkSettings.IPAddress }}" ...` replacing `...` with the Container ID or name.

7. Browse to the container's IP, port 3000.  If the IP was 123.45.67.89, I would browse to http://123.45.67.89:3000/.

8. Run a `docker container stop` command to stop the container.

9. Run a `docker container rm` command to remove the container.

10. Switch back to Linux containers to run the next section.
