---
title: Mysql
description: 
readingTime: false
recommend: 3
sticky: 1
layout: doc
comment: false
editLink: false
lastUpdated: true
---
# Mysql

## 安装Mysql

### docker-compose-mysql8.yaml

```yaml
version: "3"
services:
  mysql:
    container_name: mysql
    image: mysql:5.7
    restart: always
    volumes:
      # 挂载mysql文件
      - ./mysql/data:/var/lib/mysql
      # 挂载mysql配置
      - ./mysql/conf:/etc/mysql/conf.d:rw
      # 挂载mysql错误日志
      - ./mysql/error_log:/var/log
    ports:
      - "3306:3306"
    environment:
      TZ: Asia/Shanghai
      LANG: C.UTF-8
      MYSQL_DATABASE: demo
      MYSQL_ROOT_PASSWORD: 1qazXSW@
    command:
      mysqld
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
      --max_allowed_packet=128M;
      --max_connections=2000
      --wait_timeout=20000
      --default-authentication-plugin=mysql_native_password #解决外部无法访问
```
