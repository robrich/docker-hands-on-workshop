Installing Docker Desktop Community Edition
===========================================

Install Docker Desktop for your OS
----------------------------------

### Linux

Follow the instructions on docs.docker.com for your OS:

- Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/
- Debian: https://docs.docker.com/install/linux/docker-ce/debian/
- CentOS: https://docs.docker.com/install/linux/docker-ce/centos/
- Fedora: https://docs.docker.com/install/linux/docker-ce/fedora/
- Other: https://docs.docker.com/install/linux/docker-ce/binaries/


### Mac

1. Visit [https://docs.docker.com/docker-for-mac/install/#what-to-know-before-you-install](https://docs.docker.com/docker-for-mac/install/#what-to-know-before-you-install) to ensure you have the requirements necessary.

2. Download [Docker Desktop](https://hub.docker.com/editions/community/docker-ce-desktop-mac) (either Edge or Stable) and install as you would any Mac app. It'll invite you to create a free account to download.

   ![Mac Install](mac.png)


### Windows

1. Turn on virtualization in the bios.  Every bios is different, so you'll need to search for the specifics.

![Windows Install](windows.gif)

2. Install `Hyper-V` from Start -> Control Panel -> Programs and Features -> Turn Windows Features on or off.

![Hyper-V](hyperv.png)

3. From the same dialog, also turn on Containers.

4. Download [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows) (either Edge or Stable) and install as you would any Windows app.  It'll invite you to create a free account to download.

5. Carefully pick "Linux Containers mode" when prompted.

6. Gratuitous reboots.


### Docker in a VM

If you're installing Docker in a VMware Workstation VM, see [this post](https://communities.vmware.com/thread/498837) to get a VMware Workstation virtual machine to run Docker.  This assumes you've enabled virtualization on the host's bios so you can run VMware.

If you're installing Docker in a Windows VM running inside Parallels on your mac, see [this post](http://tattoocoder.com/configure-docker-for-windows-under-parallels/) to configure Parallels for nested virtualization.

If you're not in a VM, you can skip this section.


Verify it Works
---------------

From a command prompt / terminal, type:

`docker --version`

then type

`docker run hello-world`

If both of these work as expected, you've succeeded!


Docker Desktop not working?
---------------------------

If Docker Desktop isn't working for you because of firewall issues or you don't have admin access to your machine or you have Windows 10 Home or other issues, you can try these alternate Docker runtimes:

1. [Minikube](https://github.com/kubernetes/minikube/) is a single-node Kubernetes cluster in a Linux VM. You can specify the `--vm-driver` as `hyperv` or `virtualbox` or others. 

   You'll likely need to specify the vm driver like this:

   `minikube start --vm-driver hyperv --hyperv-virtual-switch External` where `External` is the Hyper-V virtual switch name that is listed as `External Network`.

   Then you'll need to set docker environment variables like this:

   `minikube docker-env`

   When you use Minikube, you'll need to specify http://minikube:3000/... instead of http://localhost:3000/... in all the examples, and use `minikube mount ...` when doing `VOLUME` examples in 04 and 05.

2. [MicroK8s](https://microk8s.io/) runs on most Linux distributions, and is a light-weight, single-node Kubernetes cluster with Docker installed.

   When using microk8s, swap the command line `docker` with `microk8s.docker` in all examples.

3. [k3s](https://k3s.io/) runs on most Linux distributions, and is a light-weight, single-node Kubernetes cluster with Docker installed.

   When using k3s, you'll likely need two or more Linux VMs, and you'll need to install Docker command-line tools onto your machine, and configure your kubernetes environment.  Other options may be easier.


Start downloading docker images
-------------------------------

Downloading docker images takes a while, so let's kick this off so we make sure they exist when we need them:

1. `docker pull nginx:alpine`
2. `docker pull node:alpine`
3. `docker pull mcr.microsoft.com/dotnet/core/sdk:3.1-alpine`
4. `docker pull mcr.microsoft.com/dotnet/core/aspnet:3.1-alpine`

**Windows only:** If you're preparing for the conference from your hotel room or you're following this tutorial online, switch to Windows Containers by right-clicking the Docker icon in the system tray and choose "Switch to Windows Containers", then download these additional containers:

**If you're in the room, don't download these windows containers as we'll kill the conference wifi**

1. `docker pull stefanscherer/node-windows`
2. `docker pull microsoft/dotnet:2.1-aspnetcore-runtime`
3. `docker pull microsoft/dotnet:2.1-sdk`
4. Switch back to Linux containers -- we'll begin with Linux workloads

![Switch to Windows Containers](switch-to-windows.png)


Help your neighbor
------------------

There's someone sitting next to you who's struggling with this.  Let's pair and help each other.  When that machine is running, let's all celebrate and join another team.  At the end, we'll celebrate around the last machine.
