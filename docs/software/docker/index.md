---
title: 安装Docker
description: 
readingTime: false
recommend: 3
sticky: 1
layout: doc
comment: false
editLink: false
lastUpdated: true
---
# 安装Docker

1. 使用root账号安装  
    `su root`
2. 更新yum包  
    `yum -y update`
3. 设置 yum 源

+ 中央仓库）  
  `yum-config-manager --add-repo [http://download.docker.com/linux/centos/docker-ce.repo](http://download.docker.com/linux/centos/docker-ce.repo)`
+ 阿里仓库）  
  `yum-config-manager --add-repo [http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo](http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo)`

4. 选择docker版本并安装 查看可用版本有哪些  
   `yum list docker-ce --showduplicates | sort -r`
5. 选择一个版本并安装：yum install docker-ce-版本号  
   `yum -y install docker-ce-20.10.9-3.el7`
6. 启动 Docker  
   `systemctl start docker`
7. 查看 Docker 状态  
   `systemctl status docker`
8. 设置开机自启  
   `systemctl enable docker`

> `<font style="color:rgb(61, 70, 77);">docker compose version</font>`<font style="color:rgb(61, 70, 77);">查看docker compose版本</font>

### 开启远程连接

#### 编译docker.server文件

```plain
vim /usr/lib/systemd/system/docker.service
```

<font style="color:rgb(77, 77, 77);">找到 </font>**<font style="color:rgb(77, 77, 77);">[Service]</font>**<font style="color:rgb(77, 77, 77);"> 节点，修改 ExecStart 属性，增加 -H tcp://0.0.0.0:2375</font>

> <font style="color:rgb(77, 77, 77);">对外开放的是 </font>**<font style="color:rgb(77, 77, 77);">2375</font>**<font style="color:rgb(77, 77, 77);"> 端口，当然也可以根据自己情况修改成其他的</font>

```plain
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:2375
```

![image](https://oss.aicoa.cn/markdown/2024/12/00b1d44754554c019e8105ca210142bf.png)

~~或~~

~~<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">在Docker的配置文件中（通常是</font>~~~~<font style="color:rgb(36, 41, 47);">/etc/docker/daemon.json</font>~~~~<font style="color:rgb(36, 41, 47);background-color:rgb(244, 246, 248);">），添加以下内容：</font>~~

```plain
{
    "hosts": ["tcp://0.0.0.0:2376"]
}

```

#### 重新加载，使docker配置生效

```plain
systemctl daemon-reload 
systemctl restart docker 
```

<font style="color:rgb(77, 77, 77);">通过浏览器访问 </font>**<font style="color:rgb(77, 77, 77);">2375</font>**<font style="color:rgb(77, 77, 77);"> 测试一下，格式为：http://ip:port/version</font>

#### <font style="color:rgb(77, 77, 77);">连接</font>

### docker配置域名https连接（nginx配置ssl证书）

[docker_dev_aicoa_cn.conf](https://www.yuque.com/attachments/yuque/0/2024/conf/38717562/1716134424791-7a1d3fd7-2a5a-47ec-a89a-4b4507a84f82.conf)

```plain
server {
 
 #SSL 默认访问端口号为 443
 listen 443 ssl; 
 #请填写绑定证书的域名
 server_name docker.dev.aicoa.cn; 
 #请填写证书文件的相对路径或绝对路径
 ssl_certificate cert/docker.dev.aicoa.cn_bundle.crt; 
 #请填写私钥文件的相对路径或绝对路径
 ssl_certificate_key cert/docker.dev.aicoa.cn.key; 
 ssl_session_timeout 5m;
 #请按照以下协议配置
 ssl_protocols TLSv1.2 TLSv1.3; 
 #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
 ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
 ssl_prefer_server_ciphers on;
 

 location = /404.html {
 }

 error_page 500 502 503 504 /50x.html;
 location = /50x.html {
 }

        location / {
                proxy_pass http://localhost:9001; # 代理地址地址
  proxy_set_header Host $host;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto $scheme;
 }
}

```

[https://docker.dev.aicoa.cn/version](https://docker.dev.aicoa.cn/version)

### 设置docker images 镜像源

#### 编辑daemon.json配置文件

`vim /etc/docker/daemon.json`

```sql
{
  ...
  "registry-mirrors": [
    "https://registry.cn-hangzhou.aliyuncs.com"
  ]
}
```

```sql
{
  "registry-mirrors": [
     "https://registry.cn-hangzhou.aliyuncs.com",
     "https://mirror.ccs.tencentyun.com",
     "http://registry.docker-cn.com",
     "http://docker.mirrors.ustc.edu.cn",
     "http://hub-mirror.c.163.com"
  ]
}
```

#### 刷新docker配置

<font style="color:rgb(0, 0, 0);"> </font>`<font style="color:rgb(0, 0, 0);">systemctl daemon-reload</font>`

#### 重启docker

`systemctl restart docker`
