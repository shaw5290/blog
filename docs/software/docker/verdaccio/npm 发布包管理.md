# npm 发布包管理

## 发布

1. 初始化npm包

```bash
npm init
```

2. 切换npm源

```bash
nrm ls
nrm use aicoa
```

3. 登录npm账号

```bash
npm login
```

4. 发布

```bash
npm publish --access=public
```

- 指定npm源：`--registry=https://registry.npm.aicoa.cn`
- 发布公共包（默认私有）：`--access=public`

## 使用

```
npm i package-xxx@version-xxx
```

## 删除发布包

```
npm unpublish package-name-xxx
```

- package_name：<xxx@1.x.x>
- --force：强制删除
