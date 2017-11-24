Docker Hub
==========

Docker hub is to Docker as GitHub is to source control.

Docker hub is the central repository or "store" for sharing images.

You can also use private repositories such as [AWS Container Registry](https://aws.amazon.com/ecr/) or [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/) to store images more privately.  If you're inside the firewall, look to [Artifactory](https://www.jfrog.com/artifactory/) (paid) or [Nexus](https://www.sonatype.com/nexus-repository-oss) (free) for on-premise Docker repositories.


Using Docker Hub
----------------

We've been using `docker pull ...` throughout this course.  Each time we've done this, we've pulled content from docker hub.

Browse [https://hub.docker.com/](https://hub.docker.com/) to find other images to download.  With each image, you'll likely find a Dockerfile showing how that image was built.


Adding to Docker Hub
--------------------

(If you'd rather not expose your learning so publicly, you can use AWS, Azure, or other private registries.  See below.)

1. Create an account on [https://hub.docker.com/](https://hub.docker.com/).

2. From the command-line, run `docker login`.

3. Note the Docker system tray menu now shows your name and `Logout`.

4. Tag an image in the form `username/imagename:version`, so I would tag a node image as `robrich/backend:0.1`.  Note the registry details are in the image name.  Sadly, this makes it difficult to move images between repositories or to build automation around changing repositories.

5. `docker push username/imagename:version` substituting the details of the image you tagged above.

6. `docker pull username/imagename:version` substituting the details of the image you tagged above.

Note: By convention, docker hub uses the tag named `latest` when a version isn't specified.  If you push `0.1` and then pull `latest` you'll get unexpected results.


Adding to Azure Container Registry - a Private Docker Hub
---------------------------------------------------------

(If you'd rather not expose your learning so publicly, you can use AWS, Azure, or other private registries.)

1. Sign up for a [feee Azure trial](https://azure.microsoft.com/en-us/free/).

2. Login to the [Azure Portal](https://portal.azure.com).

3. Create a new Azure Container Registry.  (See also [https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal](https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal).

4. Once the registry is created, switch to the Keys page, and note the login and password.

5. From the command-line, run `docker login https://MY_REGISTRY_NAME.azurecr.io` substituting `MY_REGISTRY_NAME` with the name of your registry.

6. Tag an image in the form `registryname.azurecr.io/imagename:version`, so I would tag a node image as `robrich.azurecr.io/backend:0.1`.  Note the registry details are in the image name.  Sadly, this makes it difficult to move images between repositories or to build automation around changing repositories.

7. `docker push registryname.azurecr.io/imagename:version` substituting the details of the registry and image you tagged above.

6. `docker pull registryname.azurecr.io/imagename:version` substituting the details of the registry and image you tagged above.

Note: By convention, docker registries use the tag named `latest` when a version isn't specified.  If you push the tag `0.1` and then pull the `latest` tag you'll get unexpected results.
