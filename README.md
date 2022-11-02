# Vue2通用后台管理系统

项目运行流程：

#### **Yarn**(1.22.19)

```
npm install -g yarn

yarn -v
```

![image-20221014000142892](C:\Users\Yz2Yq\AppData\Roaming\Typora\typora-user-images\image-20221014000142892.png)

#### node.js(v.16.16.0) + npm(8.11.0) + vue/cli(5.0.8)

```
nvm use 16.16.0

yarn global add @vue/cli
// vue/cli的版本有4.0版本、5.0版本（安装依赖时要与开发版本的一致！）
vue -V
```

#### 1、脚手架创建初始化项目

```
vue create my-app
```

#### 2、Element-UI框架

* Element - 网站快速成型工具：https://element.eleme.cn/#/zh-CN

```
// 安装到项目下（2.15.10）
npm i element-ui -S
```

（1）完整引入

```
// 在 main.js 中写入以下内容：
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

（2）按需引入的配置（npm  run build 打包的时候减小项目体积）

​       // 借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。首先，安装 babel-plugin-component：

```
  npm install babel-plugin-component -D
```

```
// 然后，将 .babelrc 修改为：
{
  "presets": 
  '@vue/cli-plugin-babel/preset',
  [["@babel/preset-env", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

#### 3、Vue-Router（路由3.6.5）

* Vue Router ：https://v3.router.vuejs.org/zh/installation.html

```
npm i vue-router@3.6.5
```

#### 4、less代码解析器

* Less 中文网：https://less.bootcss.com/
* npm官网：https://www.npmjs.com/（查询 less 的版本）

```
npm i less@4.1.2 less-loader@6.0.0
```

#### 5、Vuex（路由跳转）

* v3.vuex官网：https://v3.vuex.vuejs.org/zh/
* Vuex 中文网：https://vuex.vuejs.org/zh/index.html

```
npm i vuex@3.6.2
```

#### 6、axios（网络请求库）

* 基于promise可以用于浏览器和node.js的网络请求库
*  Axios 中文网：https://www.axios-http.cn/docs/intro

```
npm install axios      //0.27.2（我这里安装了1.1.2版本）
```

* **axios的二次封装**

```
// 项目根目录/src/utils/request.js文件
// 1.导入axios
import axios from "axios";

// 2.创建 axios 实例
const http = axios.create({
    // 通用请求的地址（前缀）
    baseURL: '/api',
    timeout: 10000, // 请求超时时间
})

// 3.添加请求拦截器
http.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function(response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function(error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default http
```

#### 7、mock.js（1.1.0）

* 前端用来 **模拟后端接口** 的工具（库）

```
npm install mockjs
```

#### 8、ECharts（指定版本5.1.2）

* 

```
npm i echarts@5.1.2
```

#### 9、Cookie(3.0.1)

* 

```
npm i js-cookie@3.0.1
```

```
// 登录权限和守卫导航

// 菜单权限功能
  1.不同的账号登录，会有不同的菜单权限
  2.通过url输入地址来显示页面
  3.对于菜单的数据在不同页面之间的数据通信
```



# Git分布式版本控制系统

* Git操作利于分支来操作管理代码（分布式）
* SVN操作一般倾向于可视化页面
* git官网：https://git-scm.com/downloads

![image-20221017203459968](C:\Users\Yz2Yq\AppData\Roaming\Typora\typora-user-images\image-20221017203459968.png)

```
说明：
workspace：工作区
staging area：暂存区/缓存区
local repository：版本库/本地仓库
remote repository：远程仓库
```

#### Git 基本操作（命令）

```
git clone <仓库地址>      // 拷贝一个 Git 仓库到本地

git merge <本地分支名>    //将两个分支的内容进行合并，并在合并分支后创建一个合并后的新节点
git rebase <本地分支名>   // 将两个分支的内容进行合并，在被合并分支后加入合并分支的节点内容

git branch    // 用于查看本地仓库分支和远程仓库分支

git remote add [shortname] [url]   // 添加远程版本库

git fetch      // 用于从远程获取代码库

git checkout <本地分支名>    // 切换本地分支

git pull <本地分支名>        // 用于远程获取代码并合并本地的版本

git add .               //添加当前目录下的所有文件到缓存区

git commit -m [message]     // 将缓存区内容添加到本地仓库中

git push <本地分支名>|<远程分支名>    // 用于从将本地的分支版本上传到远程并合并
```

* 项目中使用 git 的场景

```
1.需求开发前的 分支拉取流程(创建分支)？
     git checkout -branch 新分支名称
2.需求开发后的 分支合并流程？
     git add .    
     git commit -m'jack提交了修改'
     git push origin 分支名称
     // 合并分支
     git checkout master
     git merge 分支名称
     git push origin master
     
3.分支合并出现冲突如何解决？
     两个人在维护同一个文件出现冲突
4.出现线上问题时 hotfix分支的操作流程？
5.线上出现事故代码如何回退？
```

#### 项目开发流程

（1）项目调研

（2）需求分析

​           需求设计

* 需求文档编写
* 原型图设计
* UI设计

（3）需求评审

（4）项目开发

​            开发&测试

* 开发文档及数据库设计
* 测试编写用例
* 代码开发

（5）测试

​            开发&测试

* 测试人员测试
* 开发人员修改Bug

（6）上线

* 上线申请
* 提交上线分支

（7）迭代总结