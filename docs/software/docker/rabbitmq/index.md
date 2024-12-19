---
title: Rabbitmq
description: 
readingTime: false
recommend: 3
sticky: 1
layout: doc
comment: false
editLink: false
lastUpdated: true
---
# Rabbitmq

## 安装

```yaml
version: "3"
services:
  rabbitmq:
    hostname: rabbitmq
    container_name: rabbitmq
    image: rabbitmq:3.8.12-management
    restart: always
    ports:
      - "5672:5672"
      - "15672:15672"
    volumes:
      - ./rabbitmq/data:/var/lib/rabbitmq
      - ./rabbitmq/config/rabbitmq.sh:/etc/rabbitmq/rabbitmq.sh
    environment:
      - RABBITMQ_DEFAULT_USER=admin #rabbitmq 的登录账户
      - RABBITMQ_DEFAULT_PASS=admin #rabbitmq 的登录密码

```

docker compose安装命令：`docker-compose -f ./rabbitmq.yaml  up -d`

防火墙开放端口**<font style="color:rgb(199, 37, 78);background-color:rgb(249, 242, 244);">15672</font>****<font style="color:rgba(0, 0, 0, 0.75);">，</font>****<font style="color:rgb(199, 37, 78);background-color:rgb(249, 242, 244);">5672</font>**

### 登录

<http://docker宿主机IP:15672>  
