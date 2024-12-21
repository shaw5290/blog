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
# Verdaccio
>
> verdaccio （npm registry）

### 安装

#### 目录结构

```plain
# 目录结构
└── /verdaccio 项目目录
   ├──/conf 配置目录
   │  └── config.yaml verdaccio 配置文件
   │  └── htpasswd 用户密码文件
   │
   ├──/storage 包存放目录
   │
   └── docker-compose-npm-registry.yaml docker-compose配置文件
```

htpasswd：

```plain
aicoa:$apr1$w6mdra1o$T//ja.zAWLYq81ABsGkoc1
```

+ 生成htpasswd账号密码 [htpasswd-generator](https://hostingcanada.org/htpasswd-generator/)

```yaml
# 所有包的缓存目录
storage: /verdaccio/storage/
# 插件目录
plugins: /verdaccio/storage/
#开启web 服务,能够通过web 访问
web:
  # WebUI is enabled as default, if you want disable it, just uncomment this line
  enable: true
  title: Aicoa-Npm-Register #网站首页进入的正文标题
  # logo: #这里可以给定一个远程连接的图片,注释掉就采用默认的
  # comment out to disable gravatar support
  gravatar: true
  # by default packages are ordercer ascendant (asc|desc)
  # sort_packages: asc  # 包的排序
  # darkMode: true # 黑暗模式
  # scope: "@scope"
auth:
  htpasswd:
    # 用户信息存储目录
    file: ./htpasswd
    #此配置项可以关闭注册功能
    max_users: -1 #默认1000，为允许用户注册的数量。
                  #为-1时，不允许用户通过npm adduser注册。但是，当为-1时，可以通过直接编写htpasswd file内容的方式添加用户。有且只有一个用户 
publish:
  # 允许上传包到私库
  allow_offline: true
i18n:
# list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations
  web: zh-CN # 默认是en-US,我们改为默认中文,这个东东支持多语言
uplinks:
  npmjs:
    url: https://registry.npmjs.org/
  yarn:
    url: https://registry.yarnpkg.com/
    timeout: 10s
  taobao:
    url: https://registry.npm.taobao.org/
    timeout: 10s
packages:
#  "@*/*": # 带作用域名称的形式
#  "@scope-name/*" # 带作用域名称的形式
  "*": #强制要求使用作用域名称，匹配所有包名
    # 三种身份,所有人,匿名用户,认证(登陆)用户
    # "$all", "$anonymous", "$authenticated"
    access: $all
    #发布package 的权限
    publish: $all
    proxy: npmjs
  "**":
    access: $all
    publish: $all
    proxy: npmjs yarn taobao
# To use `npm audit` uncomment the following section
middlewares:
  audit:
    enabled: true
# 监听的端口 ,重点, 不配置这个,只能本机能访问
listen: 0.0.0.0:4873
logs:
  - { type: stdout, format: pretty, level: http }

```

[config.yaml](https://www.yuque.com/attachments/yuque/0/2024/yaml/38717562/1716197589480-c178eaf5-d67d-4086-bfde-12cebbd54140.yaml)

```yaml
version: '3' 
services:
  verdaccio:
    image: verdaccio/verdaccio:4
    container_name: npm-registry
    ports:
      - 905:4873
    volumes:
      - ./conf/:/verdaccio/conf/
      - ./plugins/:/verdaccio/plugins/
      - ./storage/:/verdaccio/storage/
```

[docker-compose-npm-registry.yaml](https://www.yuque.com/attachments/yuque/0/2024/yaml/38717562/1716194248239-c82a0b1e-6acd-408c-89a6-81c52850bb8c.yaml)

+ 构建verdaccio容器npm-registry
  + `docker compose -f docker-compose-npm-repository.yaml up -d --build`
+ 授权plugins，storage目录
  + `chown -R 10001:65533 plugins/`
  + `chown -R 10001:65533 storage/`

<font style="color:#DF2A3F;">注：修改</font>`<font style="color:#DF2A3F;">config.yaml</font>`<font style="color:#DF2A3F;">配置文件后重启docker容器</font>`<font style="color:#DF2A3F;">docker restart npm-registry</font>`<font style="color:#DF2A3F;">，使配置文件生效</font>

### nginx域名配置

```plain
server {
        listen 80; #监听ipv4
        listen [::]:80; #监听ipv6
        server_name npm.repository.aicoa.cn; #虚拟主机域名
        rewrite ^(.*)$ https://$host$1 permanent; #rewrite跳转
}


server {
 #SSL 默认访问端口号为 443
 listen 443 ssl;
 listen [::]:443 ssl; 
 #请填写绑定证书的域名
 server_name npm.repository.aicoa.cn; 
 #请填写证书文件的相对路径或绝对路径
 ssl_certificate cert/npm.repository.aicoa.cn_bundle.crt; 
 #请填写私钥文件的相对路径或绝对路径
 ssl_certificate_key cert/npm.repository.aicoa.cn.key; 
 ssl_session_timeout 5m;
 #请按照以下协议配置
 ssl_protocols TLSv1.2 TLSv1.3; 
 #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
 ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE; 
 ssl_prefer_server_ciphers on;
 
 client_max_body_size 102400M;

 location = /404.html {
 }

 error_page 500 502 503 504 /50x.html;
 location = /50x.html {
 }

        location / {
                proxy_pass http://localhost:905; # 代理register地址
  proxy_set_header Host $host;
         proxy_set_header X-Real-IP $remote_addr;
         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         proxy_set_header X-Forwarded-Proto $scheme;
 }

}
```

[npm_repository_aicoa_cn.conf](https://www.yuque.com/attachments/yuque/0/2024/conf/38717562/1716194698464-2e782758-3c15-41cf-a9e6-67ab35eb315f.conf)

### 删除nodejs包

+ `npm unpublish <package_name>`
  + package_name：<xxx@1.x.x>
  + --force：强制删除

### 更新版本号

+ `npm version <update_type>`
  + `patch`：小版本
  + `minor`：中版本
  + `major`：大版本

### npm 忽略文件`.npmignore` publish ignore

## 使用npm registry

### 设置镜像源

+ 引用nrm管理镜像`npm i -g nrm`
+ 查看镜像源`nrm ls`
+ 添加镜像源`nrm add xxx [https://npm.registry.xxx.cn/](https://npm.repository.aicoa.cn/)`
+ 使用镜像源`nrm use xxx`

### npm镜像源

+ 查看`npm config get registry`

### 初始化nodejs包

+ npm init

### 登录账号

```plain
npm login --registry https://npm.repository.aicoa.cn
```

+ `--registry [https://npm.repository.aicoa.cn](https://npm.repository.aicoa.cn)`可省略

### 推送nodejs包

```yaml
npm publish --registry https://npm.repository.aicoa.cn
```

+ `--registry [https://npm.repository.aicoa.cn](https://npm.repository.aicoa.cn)`可省略
