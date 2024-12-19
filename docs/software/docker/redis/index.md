---
title: Redis
description: 
readingTime: false
recommend: 3
sticky: 1
layout: doc
comment: false
editLink: false
lastUpdated: true
---
# Redis

## 安装Redis

```plain
version: '3.8'
services:
  redis:
    container_name: redis
    image: redis:latest #redis:6.0.6
    restart: always
    ports:
      - 6390:6379
    privileged: true
    command: redis-server /etc/redis/redis.conf --appendonly yes --requirepass your_password
    volumes:
      - ./redis/data:/data
      - ./redis/conf/redis.conf:/etc/redis/redis.conf
```

### 简单验证

```plain
docker exec -it redis bash

# 登录
redis-cli -h redis-master
# 输入密码，配置文件里配置的密码
redis-master:6379> auth 123456
# 查看集群信息
redis-master:6379> info replication

# 非交互式，但是不建议，因为密码直接在history可以查到，安全问题
redis-cli -h redis-master -a 123456 info replication

```
