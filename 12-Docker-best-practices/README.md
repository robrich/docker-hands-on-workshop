Docker Best Practices
=====================

Here's things I've found that make Docker most effective:

- Containers are a unit of scaling:  Separate the front-end web server from the back-end report processor from the database from the redis cache. When they're unique containers, they can scale independently.  For example: 1 database, 3 redis servers, 10 web servers, back-end only runs for an hour each night.

- 1 process per container:  If you need more than one process, use more than one container.

- Combine similar Dockerfile commands into one line:  Each line becomes a separate layer, so combine commands (including deleting temp files) to make fewer, smaller layers.

- Use multi-stage builds to make production images much smaller.  Multi-stage builds allow you to deploy just the built artifacts, not the build tools or source code.

- Use a managed data store:  Using a database-as-a-service product both eliminates stateful containers and it's one less thing to manage.  For example, Azure SQL Database and Amazon RDS.

- Rebuild production images frequently:  A docker image is ephemeral and deterministic -- it doesn't change.  Your dependencies evolve over time.  Rebuild production images frequently to get OS patches and dependency updates.  Orchestration engines can pick up the `latest` label change automatically, rolling the the updated image into production with ease.

- `docker system prune` frequently:  `docker container prune` will remove all stopped containers, `docker image prune` will remove dangling (and optionally unused) images, `docker volume prune` will remove volumes not used by any running container, and `docker system prune` will run all of these together.  Run this frequently to reclaim hard drive space.

- Develop with `VOLUME`:  When developing, use volumes to map the source code directory into the container.  Change a file and push refresh -- very rapid development.  Look to tools like `nodemon` to auto-restart the process if necessary.

- Production config as environment vars:  In production, expose anything that changes as an environment variable so ops can quickly adjust runtime behavior.

- [Store secrets carefully](https://robrich.org/slides/docker-secrets/#/):  Where you choose to store secrets depends a lot on what you trust and how much complexity and control you want around secrets.

- Use docker-compose as simpler command launch:  `docker-compose.yml` file includes all the parameters to build the image and run the container.  Tired of remembering all the `-p` and `-v` commands?  Replace your bash script and profile alias with `docker-compose up -d` -- even for a single container.

- Leverage cache layers:  In the docker file, first copy the app's manifest (`package.json`, `.csproj`, etc), then run the package installer (`npm install`, `pip install`, `nuget restore`, `gem install`, etc), then copy in the rest of the content.  The app's content probably changes frequently, but the package manifest doesn't.  With this approach, you're more likely to get a cache hit for the expensive package download during development and on the CI server.

- Nest `VOLUME`s for cleaner source development:  Imagine you're developing the app, you've mapped a volume for the app's source to your local directory, and in your dockerfile you run the package install.  As you build the image, docker writes the packages into your source folder.  Not detrimental, but now you need to consider OS permission differences and adjust your `.gitignore`.  Instead, use an array of volume folders: an outer one for the source, mapped to your source directory, and an inner one for the packages, without the "outside" folder path so Docker will place this folder elsewhere.

- Use `.dockerignore`:  Using the exact same "one line per entry" and "wildcard glob" syntax as `.gitignore` and `.npmignore`, you can use `.dockerignore` to ignore content when using `COPY` commands in your Dockerfile.

- Use [networks](http://training.play-with-docker.com/docker-networking/) as isolated "virtual lan":  In `docker-compose.yml`, you can clarify which containers are exposed outside, and which containers are exposed to each other.  Look at `overlay` networks to isolate containers across desperate networks like cross-cloud.
