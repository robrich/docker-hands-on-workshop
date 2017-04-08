Installing Docker Community Edition
===================================

Mac
---

1. Visit [https://docs.docker.com/docker-for-mac/install/#what-to-know-before-you-install](https://docs.docker.com/docker-for-mac/install/#what-to-know-before-you-install) to ensure you have the requirements necessary.

2. Download [Docker Community Edition](https://store.docker.com/search?offering=community&type=edition) and install as you would any Mac app.

![Mac Install](mac.png)


Windows
-------

1. Turn on virtualization in the bios.  Every bios is different, so you'll need to search for the specifics.

![Windows Install](windows.gif)

2. Install `Hyper-V` from Start -> Control Panel -> Programs and Features -> Turn Windows Features on or off.

![Hyper-V](hyperv.png)

3. From the same dialog, also turn on Containers.

4. Download [Docker Community Edition](https://store.docker.com/search?offering=community&type=edition) and install as you would any Windows app.

5. Gratuitous reboots.


Docker in a VMWare VM
---------------------

See [this post](https://communities.vmware.com/thread/498837) to get a VMware virtual machine to run Docker.  This assumes you've enabled virtualiztion on the host's bios so you can run VMware.


Verify it Works
---------------

From a command prompt / terminal, type:

`docker --version`

then type

`docker run hello-world`

If both of these work as expected, you've succeeded!


Help your neighbor
------------------

There's someone sitting next to you whose struggling with this.  Let's pair and help each other.  When that machine is running, let's all celebrate and join another team.  At the end, we'll celebrate around the last machine.
