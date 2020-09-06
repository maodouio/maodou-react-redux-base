# maodou.io

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## aicug部署步骤

因为toCDN.sh包含敏感账号信息，所以没放到库里

```
npm i
npm run build:cdn
sh .deploy/docker-build.sh
sh .deploy/docker-run.sh
sh .deploy/toCDN.sh
```

## Available Scripts

In the project directory, you can run:

``` bash
# dev
npm install
npm start
# prod
npm run build
# analyze
npm run build
npm run analyze
```

## 说明

详细请参考`package.json`文件

注意：`package-lock.json`文件目前没有在git版本控制里，如果遇见版本错误或者项目启动不起来 请联系我们

## 文件引入方式

- 相对路径 `import Header from '../../components/home/Header'`
- 绝对路径 `import Header from 'components/home/Header'`
