# Linux常用命令

### 内存管理

#### 查看内存

```
free -h
```

#### 清理buff/cache缓存

```
sync && echo 1 > /proc/sys/vm/drop_caches
sync && echo 2 > /proc/sys/vm/drop_caches
sync && echo 3 > /proc/sys/vm/drop_caches
```
