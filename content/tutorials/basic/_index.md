---
# Page title
title: Windows下开发与写作基本配置
# Page summary for search engines.
summary: 开发环境, 写作环境, 科学上网等
# Date page published
date: 2022-01-14
# Book page type (do not modify).
type: book
# Position of this page in the menu. Remove this option to sort alphabetically.
weight: 1
---

本文对Windows下开发与写作环境的基本配置进行描述

## 开发环境

### WSL与虚拟机

#### 两者对比

WSL: [WSL文档](https://docs.microsoft.com/zh-cn/windows/wsl/), WSL包含Version 1和2, 即WSL1和WSL2, 我们默认讨论WSL2

虚拟机: [VMWare Workstation Pro](https://www.vmware.com/products/workstation-pro.html) + [Ubuntu20.04 ISO](https://mirrors.ustc.edu.cn/ubuntu-releases/21.04/)

两者对比: 

- 与Windows系统的友好性: WSL优于虚拟机, 因为WSL是微软开发的, 搭配Windows Terminal还是挺好用的
- USB设备支持: 虚拟机优于WSL, 比如希望连接开发板, 对开发板进行烧写/调试, WSL的支持较为麻烦
  - WSL2连接USB设备[教程](https://docs.microsoft.com/zh-cn/windows/wsl/connect-usb), 我个人还没尝试过, 一直用的虚拟机来连接USB设备
- 小结: 如果是日常编译代码工程用WSL没问题, 如果要连接开发板, 那么建议使用虚拟机

#### WSL相关
{{< spoiler text="WSL2如何走本机代理?" >}}
WSL2如何走本机代理?

- WSL2基于Hyper-V运行, 导致WSL2和Windows在网络上是两台各自独立的机器, 让WSL2走本机代理需要先找到Windows的IP.
- 命令```cat /etc/resolv.conf```即可查到Windows的IP
- 可用下面的脚本来设置代理, 将其存到proxy.sh中, ```./proxy.sh set```即可设置代理, ```./proxy.sh unset```即可取消设置

配置脚本:
```bash
#!/bin/sh
# get host's ip
hostip=$(cat /etc/resolv.conf | grep nameserver | awk '{ print $2 }')
# get wsl's ip
wslip=$(hostname -I | awk '{print $1}')
# proxy's port in host
port=7890

PROXY_HTTP="http://${hostip}:${port}"

set_proxy(){
    export http_proxy="${PROXY_HTTP}"
    export HTTP_PROXY="${PROXY_HTTP}"
    
    export https_proxy="${PROXY_HTTP}"
    export HTTPS_proxy="${PROXY_HTTP}"
    
    export ALL_PROXY="${PROXY_SOCKS5}"
    export all_proxy=${PROXY_SOCKS5}
}

unset_proxy(){
    unset http_proxy
    unset HTTP_PROXY
    unset https_proxy
    unset HTTPS_PROXY
    unset ALL_PROXY
    unset all_proxy
}

test_setting(){
    echo "Host ip:" ${hostip}
    echo "WSL ip:" ${wslip}
    echo "Current proxy:" $https_proxy
}

if [ "$1" = "set" ]
then
    set_proxy
    
elif [ "$1" = "unset" ]
then
    unset_proxy
    
elif [ "$1" = "test" ]
then
    test_setting
else
    echo "Unsupported arguments."
fi

```
{{< /spoiler >}}

#### 虚拟机相关
{{< spoiler text="关于虚拟机下无法安装VMWare Tools的问题:" >}}


1. 无法在VMWare中安装VMWare tools，从而无法使用共享文件夹。经过搜索，可用open-vm-tools，安装命令为：
    ```bash
    sudo apt install open-vm-tools
    ```
2. 在虚拟机设置中启用共享文件夹并配置文件夹
3. 在ubuntu下使用命令vmware-hgfsclient即可查看到我们设置的共享文件夹，比如其输出为
    ```bash
    C 
    D 
    G
    ```
    即我们设置的三个共享文件夹
4. 如果不存在/mnt/hgfs文件夹，则需创建
    ```bash
    mkdir /mnt/hgfs
    ```
5. 使用挂载命令：
    ```bash
    sudo vmhgfs-fuse -o allow_other -o auto_unmount .host:/ /mnt/hgfs
    ```
    即可将.host:/下的C D G文件夹挂在到/mnt/hgfs下
    如果成功，使用命令 ls /mnt/hgfs即可看到C D G这三个文件夹
6. 上述挂载命令是一次性的，关机就会导致挂载消失，因此需配置开机自动挂载：

    ```bash
    cd /etc/systemd/system
    sudo gedit ./mnt.hgfs.service
    ```
    填入如下内容:
    ```bash
    [Unit]

    Description=Load VMware shared folders

    Requires=vmware-vmblock-fuse.service

    After=vmware-vmblock-fuse.service

    ConditionPathExists=.host:/

    ConditionVirtualization=vmware

    [Service]

    Type=oneshot

    RemainAfterExit=yes

    ExecStart=

    ExecStart=/usr/bin/vmhgfs-fuse -o allow_other -o auto_unmount .host:/ /mnt/hgfs

    [Install]

    WantedBy=multi-user.target
    ```

7. 使用systemctl命令启动该开机运行服务：

    ```bash
    sudo systemctl enable mnt.hgfs.service
    ```

{{< /spoiler >}}

## 写作环境

## 科学上网
