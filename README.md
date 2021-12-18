
# Template-React

#### 项目安装 启动 调试 发布流程
进入到项目中下载依赖1
`npm inatall or yarn install`

启动项目
`yarn start`

打包发布
```
yarn build-test
yarn build-prod
```


### 技术栈
开发中所用主要技术如下:

1. react:16.6.3 [参考文档](https://reactjs.org/)
3. webpack:4.4.20 [参考文档](https://webpack.js.org/)
4. less:3.9 [参考文档](http://lesscss.org/)
5. es2015,es2016... [参考文档](http://es6.ruanyifeng.com/)
6. babel:7.1.6 [参考文档](https://babeljs.io/)
7. eslint:10.0.1 [参考文档](https://eslint.org/)
8. Markdown [参考文档](https://maxiang.io)

### 相关规范

###### 目录命名

```
参照命名规则;
有复数结构时,要采用复数命名法;小驼峰写法;
例: scripts, dataModels
```

###### js, jsx文件命名

```
参照命名规则;
小驼峰写法;
例: account.js accountModel.js environmentDrawer.jsx
```

###### js变量以及Class命名

```
参照命名规则;
js变量:
    小驼峰写法;
    例: let showSystemOptions, hasError, birthday;
Class命名:
    大驼峰写法;
    例: Class MemberInfoDrawer   
```

###### CSS, SCSS,LESS 文件命名

``````
参照命名规则;
全小写或带下划线;
例: retina_sprites.scss
``````

###### css ClassName命名

```code
<div className="indexcontainer">
    <div className="indexcontainerr-navlist">
    	...
    </div>
</div>     
```

#### 文件结构
```js
+-- config
|   +-- config.js // 配置打包的输入输出和IP端口
|   +-- env.js // 配置环境信息
|   +-- proxy.js // 配置代理设置(可免nginx配置)
|   +-- utils.js // webpack相应的工具方法
+-- node_modules
|   +-- ...依赖包
+-- public
|   +-- assets // 静态资源目录
|   +-- favicon.ico // ico
|   +-- index.html 
+-- src
|   +-- component // 展示组件
|   +-- container // 容器组件
|   +-- utils  
|       +-- urls.js // 请求url, 获取queryString, 解析url的值
|       +-- http.js // 实例化请求库
|   +-- view //页面
|   +-- index.jsx //全局入口文件
+-- package.json // 依赖
+-- README.md  // 说明文档
+-- babel.config   // babel 配置
+-- .eslintrc.js // eslint 配置
+-- .eslintignore // eslint 忽略目录
+-- .prettierrc // prettierrc
+-- webpack.config.js // webpack文件
```
