echo '检查npm依赖...'
npm i

echo '开始生成build文件...'
npm run build:cdn

echo '开始打包镜像...'
docker build -t="maodou-react-redux-base:latest" .
