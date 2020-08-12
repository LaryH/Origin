# GuliShop-Client

## Day01

### 1. 创建项目

> 下载 vue 脚手架

```
npm i @vue/cli -g
```

> 创建项目

```shell
vue create gulishop-client
cd gulishop-client
npm i
```

### 2. 认识项目目录及各个文件的作用

| 目录名       | 作用                         |
| ------------ | ---------------------------- |
| node_modules | 包文件目录                   |
| public       | 放置 index.html 文件         |
| src          | 源代码目录                   |
| assets       | 公共的静态资源文件夹(图片..) |
| components   | 非路由组件(公共组件)         |
| pages/views  | 路由组件                     |
| router       | 路由设置文件夹               |
| App.vue      | 模板渲染的主要文件           |
| main.js      |
| .gitignore   | git 忽略文件                 |
| package.json | 包管理文件                   |

### 3. 初始化

> 删除自带的 HelloWorld、main.js、App.vue 等文件,并重新进行编写

### 4. eslint 错误级别禁用

> 新建 vue.config.js

```js
lintOnSave: false;
```

### 5. jsconfig.json 配置别名@提示

```json
{
  "compilerOption": {
    "baseUrl": "./",
    "path": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

### 6. git 操作

    git基本操作
    	先有本地代码
    		创建本地库 $ git init
    		创建远程库
    		关联本地和远程 $ git remote add origin http..
    		修改本地
    		修改远程

    	先有远程代码
    		直接克隆 $ git clone http ...


    git分支扩展
    	分支创建和合并
    		本地创建分支   git checkout -b dev
    		本地推送新分支自动在远程库建立新分支  git push origin dev
    		合并分支之前如果是多人协作先拉取一下远程master，以防止别人已经做了更改
    		本地切换到master 然后再合并分支  git merge dev
    		合并之后再次推送到远程master
    	分支删除
    		项目开发完成可以删除分支
    		git push origin --delete dev  删除远程分支
    		git branch -d dev  删除本地分支

### 7. 确定页面结构

### 8. 定义页面主题组件组装,确定路由组件和非路由组件

### 9. 把 Header 和 Footer 的模板进行替换显示

- 将 `html` 写入 `template` 标签中,把 `less` 写入 `style` 标签中,引入图片
- 解决 loader 问题,安装对应的 loader

### 10. 配置路由在对应点自己切换路由组件的位置,替换路由链接

#### 声明式导航和编程式导航

- 声明式导航

```

```

- 编程式导航
