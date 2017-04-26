Volumes
=======

Volumes can help us develop content faster.  We create a volume for the current directory in a development container, and then we can just save and refresh without rebuilding the container.


Run a prebuilt Nginx image
--------------------------

1. `docker pull nginx`  You can learn more about this image from [Docker Hub](https://hub.docker.com/_/nginx/) and view the [Dockerfile](https://github.com/nginxinc/docker-nginx/blob/0c7611139f2ce7c5a6b1febbfd5b436c8c7d2d53/mainline/jessie/Dockerfile) used to create it.

2. `docker run -v /path/to/folder:/usr/share/nginx/html -p 8080:80 -d nginx` swapping out `/path/to/folder` with this folder.  This runs the nginx image, mapping the current folder into the container, and mapping port `8080` outside the container to port `80` inside the container.  (If you're already using port 8080, choose any free port.  Browse to this port in step 2 as well.)

3. Browse to [http://localhost:8080](http://localhost:8080).  Welcome to a 404.


Edit files
----------

1. Create some files in this folder.  Maybe `index.html` or `foo.html` or copy in an image

2. Browse to this url.

3. Change the file(s).

4. Browse to the url(s).

With this technique, you can quickly change content without rebuilding the container.  This is a wonderful technique for development, but doesn't work well for production -- the container is empty.

Let's solve this by creating a production container:


Craft a Dockerfile
------------------

1. Write this into a file named `Dockerfile-prod` (no extension):

```
FROM nginx
COPY . /usr/share/nginx/html
```

2. Build the dockerfile into an image: `docker build -t nginxprod:0.1 -f Dockerfile-prod`

3. Windows only: Right-click on the Docker system tray icon, choose Settings, go to Shared Drives, and turn on sharing for each of your drives.

![Windows: Turn on Shared Drives](shared-drives.png)

4. Run the image as a container: `docker run -p 8080:80 -d nginxprod:0.1`

We now have two Dockerfiles and two images -- one for rapid development, one for production deployment.
