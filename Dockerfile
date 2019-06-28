# 此基础镜像已包含上海时区
FROM node:10.16-slim

#创建app目录,保存我们的代码
RUN mkdir -p /usr/src/node/build
#设置工作目录
WORKDIR /usr/src/node

# 利用缓存
COPY build/ /usr/src/node/build/

#安装程序依赖,利用taobao的npm源
RUN npm config set registry https://registry.npm.taobao.org
RUN npm config set disturl https://npm.taobao.org/dist
RUN npm install -g serve

#暴露container的端口
EXPOSE 5000

#运行命令
CMD ["serve", "-s", "build"]