Volumes
=======

This section digs into volumes.  Volumes are durable storage.  Consider it a directory pulled out of the container, stored on the host, and sym-linked in on startup.


Setup
-----

1. Build the container: `docker build -t volumetest:0.1 .`


The problem
-----------

1. Launch the container: `docker run -p 3000:3000 -d volumetest:0.1`

2. Did you get a port in use error?  Run `docker container list` and stop any other containers running on this port.

3. Browse to [http://localhost:3000/](http://localhost:3000/) and upload a file.

4. Click on [See files](http://localhost:3000/files) and see the file you uploaded.

5. Stop the container with `docker container list` and `docker container stop ...` substituting the container name or id for `...`.

6. Start the container again: `docker run -p 3000:3000 -d volumetest:0.1`

7. Click on [See files](http://localhost:3000/files).

The thin read/write container from the first run is now gone and a new read/write layer was created.  The uploaded data is gone.

In most circumstances this is what we want -- we want isolated runtime environments where nothing changes and we can easily kill it off and start another.  In this case, we want a durable data store.  Let's experiment with volumes.


The solution
------------

1. Modify `Dockerfile`

2. Add this line: `VOLUME ["/app/public"]` just under the `EXPOSE` line.  (Technically it can be anywhere.)

3. Rebuild the container: `docker build -t volumetest:0.2 .`.  Note that it didn't re-run `npm init`.  Caching!

4. Create an empty folder to use as an upload location

5. Run the new image: `docker run -p 3000:3000 -v /path/to/empty/folder:/app/public volumetest:0.2` swapping out your folder path.  If your folder path has spaces in it, you'll need quotes around this.

6. Upload a file on [http://localhost:3000/](http://localhost:3000/), and click [See files](http://localhost:3000/files) and see the file you uploaded.

7. Note the file is now in the empty folder.

8. Stop the container, and start it again.

9. Click on [See files](http://localhost:3000/files) and see the file(s) uploaded previously.

Note: volume links can be a full path or a `.` meaning "the current directory".  In this case the current directory had lots of things in it, so we specified another folder.

Note: if you leave off the public side of the volume switch (the `/path/on/host:` part), Docker will manage the volume for you, storing it in the MobyLinux VM.
