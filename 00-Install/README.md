Installing Docker Community Edition
===================================

Install Docker CE for your OS
-----------------------------

### Linux

Follow the instructions on docs.docker.com for your OS:

- Ubuntu: [https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/)
- Debian: [https://docs.docker.com/engine/installation/linux/docker-ce/debian/](https://docs.docker.com/engine/installation/linux/docker-ce/debian/)
- CentOS: [https://docs.docker.com/engine/installation/linux/docker-ce/centos/](https://docs.docker.com/engine/installation/linux/docker-ce/centos/)
- Fedora: [https://docs.docker.com/engine/installation/linux/docker-ce/fedora/](https://docs.docker.com/engine/installation/linux/docker-ce/fedora/)
- Other: [https://docs.docker.com/engine/installation/linux/docker-ce/binaries/](https://docs.docker.com/engine/installation/linux/docker-ce/binaries/)


### Mac

1. Visit [https://docs.docker.com/docker-for-mac/install/#what-to-know-before-you-install](https://docs.docker.com/docker-for-mac/install/#what-to-know-before-you-install) to ensure you have the requirements necessary.

2. Download [Docker Community Edition](https://store.docker.com/search?offering=community&type=edition) and install as you would any Mac app.

![Mac Install](mac.png)


### Windows

1. Turn on virtualization in the bios.  Every bios is different, so you'll need to search for the specifics.

![Windows Install](windows.gif)

2. Install `Hyper-V` from Start -> Control Panel -> Programs and Features -> Turn Windows Features on or off.

![Hyper-V](hyperv.png)

3. From the same dialog, also turn on Containers.

4. Download [Docker Community Edition](https://store.docker.com/search?offering=community&type=edition) and install as you would any Windows app.

5. Gratuitous reboots.


### Docker in a VMWare VM

If you're installing Docker in a VMware Workstation VM, see [this post](https://communities.vmware.com/thread/498837) to get a VMware Workstation virtual machine to run Docker.  This assumes you've enabled visualization on the host's bios so you can run VMware.

If you're not in a VM, use the instructions above.


Verify it Works
---------------

From a command prompt / terminal, type:

`docker --version`

then type

`docker run hello-world`

If both of these work as expected, you've succeeded!


Start downloading docker images
-------------------------------

Downloading docker images takes a while, so let's kick this off so we make sure they exist when we need them:

1. `docker pull nginx:alpine`
2. `docker pull node`
3. `docker pull microsoft/aspnetcore:2.0`
4. `docker pull microsoft/aspnetcore-build:2.0`

If you're preparing for the conference from your hotel room or you're following this tutorial online, switch to Windows Containers by right-clicking the Docker icon in the system tray and choose "Switch to Windows Containers", then download these additional containers:

**If you're in the room, don't download these windows containers as we'll kill the conference wifi**

1. `docker pull microsoft/nanoserver:1803`
2. `docker pull stefanscherer/node-windows`
3. `docker pull microsoft/aspnetcore:2.0`
4. `docker pull microsoft/aspnetcore-build:2.0`
5. Switch back to Linux containers -- we'll begin with Linux workloads

![Switch to Windows Containers](switch-to-windows.png)


Help your neighbor
------------------

There's someone sitting next to you whose struggling with this.  Let's pair and help each other.  When that machine is running, let's all celebrate and join another team.  At the end, we'll celebrate around the last machine.
