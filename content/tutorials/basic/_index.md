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

#### 虚拟机下共享文件夹

无法在vmware中安装VMware tools，从而无法使用共享文件夹。经过搜索，可用open-vm-tools，安装命令为：sudo apt install open-vm-tools
在虚拟机设置中启用共享文件夹并配置文件夹
在ubuntu下使用命令vmware-hgfsclient即可查看到我们设置的共享文件夹，比如其输出为C D G即我们设置的三个共享文件夹
如果不存在/mnt/hgfs文件夹，则需创建
使用挂载命令：sudo vmhgfs-fuse -o allow_other -o auto_unmount .host:/ /mnt/hgfs，即可将.host:/下的C D G文件夹挂在到/mnt/hgfs下
如果成功，使用命令 ls /mnt/hgfs即可看到C D G这三个文件夹

上述挂载命令是一次性的，关机就会导致挂载消失，因此需配置开机自动挂载：

```bash
cd /etc/systemd/system
```

```bash
sudo gedit ./mnt.hgfs.service
```

填入如下内容：
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

使用systemctl命令启动该开机运行服务：

```bash
sudo systemctl enable mnt.hgfs.service
```

## 写作环境

## 科学上网
