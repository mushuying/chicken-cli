# 脚手架脚本

## 安装

```
npm i chicken-cli -g
```

## 使用

```
chicken-cli create <project-name>
```

### 创建一项目

```
chicken-cli create myProject
```
这个命令会根据命令行参数去github拉去匹配的项目

#### 新建一个vue页面

```bash
# 注意：使用这个命令需要在项目的根目录
chicken-cli add <pageName>
```

#### 删除无用vue页面

```bash
# 注意：使用这个命令需要在项目的根目录
chicken-cli remove <pageName>
```
#### dev环境

```bash
# 注意：使用这个命令需要在项目的根目录
chicken-cli dev <pageName>
```
