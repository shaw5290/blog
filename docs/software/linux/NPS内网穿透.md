---
title: NPS内网穿透
description: 
readingTime: false
recommend: 3
tag:
 - 内网穿透
sticky: 1
layout: doc
comment: false
editLink: false
lastUpdated: true
---

# NPS内网穿透

### 下载

[Releases · ehang-io/nps](https://github.com/ehang-io/nps/releases/)

服务端：linux_amd64_server.tar.gz

客户端：linux_amd64_client.tar.gz

### 命令

- 服务启动：nps start
- 重载配置：nps reload
- 服务端停止：nps stop
- 服务端停止：nps restart

You can start with：nps start|stop|restart|uninstall|update or nps-update update

## 服务端

1. 下载：linux_amd64_server.tar.gz

2. 解压：tar -zxvf linux_amd64_server.tar.gz

3. 安装：./nps install

   - nps默认配置文件使用了80，443，8080，8024端口

     - 80与443端口为域名解析模式默认端口

     - 8080为web管理访问端口

     - 8024为网桥端口，用于客户端与服务器通信

4. 安装后修改配置文件：vim /etc/nps/conf/nps.conf

   - [配置文件参考](#配置文件参数说明)

5. 启动服务端服务：./nps start

6. 访问web管理8080端口（账号admin | 密码123）

7. 新建客服端

   ![image-20241219101412323](https://oss.aicoa.cn/markdown/2024/12/aa2f039f93e343d99c93ec421df5506f.png)

   客户端还没有启动，客户端连接状态为离线

   ![image-20241219101455326](https://oss.aicoa.cn/markdown/2024/12/75554b9ccf0044e1900fac141e51ab44.png)

## 客户端

#### 无配置文件启动

```
./npc -server=${您服务器的IP地址}:${bridge_port} -vkey=${vkey} >/dev/null 2>&1 &

./npc -server=192.168.1.122:8024 -vkey=t9uol8bognvqiqnh -type=tcp
```

- `${服务器的IP地址}` 要连接的 NPS 服务器的公网 IP 地址。
- `${bridge_port}` 是 NPS 服务器的通信端口，通常在服务器端的配置中定义。
- `-vkey=${vkey}`: 指定 NPS 客户端的验证密钥。这是服务器和客户端进行通信时的身份验证信息，必须与服务器的配置匹配。取Web页面中显示的密钥（唯一验证秘钥）

#### 配置文件启动

```
nohup ./npc -config=conf/npc.conf >/dev/null 2>&1 &
```

- -config=conf/npc.conf可省略

Tcp模式举例

```
[common]
# 填写登录后首页显示的客户端连接端口
# 也就是：
# ${您服务器的IP地址} 是您要连接的 NPS 服务器的公网 IP 地址。
# ${bridge_port} 是 NPS 服务器的通信端口，通常在服务器端的配置中定义。
server_addr=${您服务器的IP地址}:${bridge_port}
conn_type=tcp
# vkey填写上面的验证密钥
vkey=xxxxx
# 断线重连
auto_reconnection=true
```

### 配置自启动

#### start.sh

```
#!/bin/bash
cd /opt/software/nps/
sudo nohup ./npc > npc-log.log 2>&1 &
```

将start.sh与npc服务放一起

赋予Service执行start.sh的权限

```
sudo restorecon -rv /opt/software/nps/start.sh
```

`a+x` 代表给 **所有用户**（用户、组和其他人）添加执行权限。

```
chmod a+x /opt/software/nps/start.sh
```

#### 配置npc.service文件

```bash
vim /usr/lib/systemd/system/npc.service
```

注意`ExecStart`路径是npc本地路径/opt/software/nps/

```
[Unit]
Description=npc
After=network.target

[Service]
Type=forking
ExecStart=/opt/software/nps/start.sh
Restart=always
RestartSec=5
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

#### 启动测试

```
systemctl daemon-reload
systemctl enable npc #设置开机启动
systemctl start npc #开启服务
systemctl status npc #查看状态
```

启动成功，到服务端管理端-客户端，查看客户端连接状态在线

![image-20241219101715260](https://oss.aicoa.cn/markdown/2024/12/ee21f047215046f799630b1baefbbd96.png)

#### 添加TCP隧道

![image-20241219102042887](https://oss.aicoa.cn/markdown/2024/12/581c3b08c27e4a32931f2ee32af31654.png)

添加绑定成功后，客户端状态为在线，即可访问服务端Ip+端口9100来访问内网穿透的应用

## 配置文件参数说明

`/etc/nps/conf/nps.conf`

| 名称                | 含义                                                         |
| ------------------- | ------------------------------------------------------------ |
| web_port            | web管理端口                                                  |
| web_password        | web界面管理密码                                              |
| web_username        | web界面管理账号                                              |
| web_base_url        | web管理主路径,用于将web管理置于代理子路径后面                |
| bridge_port         | 服务端客户端通信端口                                         |
| https_proxy_port    | 域名代理https代理监听端口                                    |
| http_proxy_port     | 域名代理http代理监听端口                                     |
| auth_key            | web api密钥                                                  |
| bridge_type         | 客户端与服务端连接方式kcp或tcp                               |
| public_vkey         | 客户端以配置文件模式启动时的密钥，设置为空表示关闭客户端配置文件连接模式 |
| ip_limit            | 是否限制ip访问，true或false或忽略                            |
| flow_store_interval | 服务端流量数据持久化间隔，单位分钟，忽略表示不持久化         |
| log_level           | 日志输出级别                                                 |
| auth_crypt_key      | 获取服务端authKey时的aes加密密钥，16位                       |
| p2p_ip              | 服务端Ip，使用p2p模式必填                                    |
| p2p_port            | p2p模式开启的udp端口                                         |
| pprof_ip            | debug pprof 服务端ip                                         |
| pprof_port          | debug pprof 端口                                             |
| disconnect_timeout  | 客户端连接超时，单位 5s，默认值 60，即 300s = 5mins          |
