A bigger site
=============

Build a more real-world app that consumes external resources.


Option 1: Build your app
------------------------

1. Fire up your favorite IDE
2. Build a quick sample website
3. Build a quick api
4. Build a Dockerfile for each
5. Run both containers


Option 2: Build my app
----------------------

I have here a .net core backend and a node frontend.  Use my app, and build and run these sites.

1. Open up `backend/Dockerfile` and add the content necessary to spin up the .net app.  You don't need to have .net installed to do so.

2. Open `frontend/Dockerfile` and add the content necessary to spin up the node app.  You'll also need to change `frontend/routes/index.js` where it defines the URL of the backend service.

3. `docker build ...` each container.

4. `docker run ...` each container.

5. Visit [http://localhost:3000/](http://localhost:3000/) to cast your vote.


Stretch goal
------------

Can you run these as Windows containers?
