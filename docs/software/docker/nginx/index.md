---
title: Nginx
description: 
readingTime: false
recommend: 3
sticky: 1
layout: doc
comment: false
editLink: false
lastUpdated: true
---
# Nginx

## 安装Nginx

### copy conf文件

1. 拉取镜像  
   `docker pull nginx`
2. 查看本地镜像  
   `docker images`
3. 启动容器  
   `docker run -d --name nginx nginx`
4. 获取容器ID或直接使用容器名  
   `docker ps -a`
5. <font style="color:rgb(51, 51, 51);">启动 Nginx 容器后，容器内部会生成 Nginx 的配置文件（其他想要的文件自行复制），将其复制到主机 Nginx  对应文件夹内  
   </font>`<font style="color:rgb(51, 51, 51);">docker cp nginx:/etc/nginx/nginx.conf /usr/local/nginx</font>`

> 提前准备好了`<font style="color:rgb(51, 51, 51);">nginx.conf</font>`配置文件

nginx.conf

```conf:line-numbers {1}
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;
    sendfile        on;
    #tcp_nopush     on;
    keepalive_timeout  65;
    #gzip  on;
    include /etc/nginx/conf.d/*.conf;
}

```

### 使用 `docker-compose-nginx.yaml` 安装nginx

nginx 安装包：[nginx.zip](https://www.yuque.com/attachments/yuque/0/2024/zip/38717562/1715076290396-c2915285-da8d-4ed3-a668-9af79927cfa5.zip)

```yaml:line-numbers {1}
version: '3'
services:
  nginx:
    container_name: nginx
    image: nginx
    restart: always
#   host 容器环境不隔离，将使用主机的端口和ip，不能与ports 端口映射同时使用
    network_mode: host
#    ports:
#      - 80:80
#      - 443:443
    volumes:
      - ./html:/usr/share/nginx/html
      # - ./nginx/www:/var/www
      # - ./nginx/logs:/var/log/nginx
      # # 有可能会出现不能挂载，这个时候用手动拷贝配置文件就行
      - ./nginx.conf/:/etc/nginx/nginx.conf
      # - ./etc/cert:/etc/nginx/cert
      # - ./conf.d:/etc/nginx/conf.d
    environment:
      - NGINX_PORT=80
      - TZ=Asia/Shanghai
    privileged: true
```

创建nginx容器`docker compose -f docker-compose-nginx.yaml up -d --build`

## nginx配置

### https ssl 配置模板

```plain
server {
        listen 80; #监听ipv4
        listen [::]:80; #监听ipv6
        server_name docker.repository.aicoa.cn; #虚拟主机域名
        rewrite ^(.*)$ https://$host$1 permanent; #rewrite跳转
}


server {
 #SSL 默认访问端口号为 443
 listen 443 ssl;
 listen [::]:443 ssl; 
 #请填写绑定证书的域名
 server_name docker.repository.aicoa.cn; 
 #请填写证书文件的相对路径或绝对路径
 ssl_certificate cert/docker.repository.aicoa.cn_bundle.crt; 
 #请填写私钥文件的相对路径或绝对路径
 ssl_certificate_key cert/docker.repository.aicoa.cn.key; 
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
     proxy_pass http://localhost:903; # 代理地址地址
     proxy_set_header Host $host;
     proxy_set_header X-Real-IP $remote_addr;
     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
     proxy_set_header X-Forwarded-Proto $scheme;
     client_max_body_size 1024M;  # 设置单次上传最大为1024m
 }
}
```
