docker rm -f maodou-react-redux-base

docker run \
       -d \
       --name=maodou-react-redux-base \
       --restart=always \
       -p 8800:5000 \
       -e TZ=Asia/Shanghai \
       -e VIRTUAL_HOST=base.maodouketang.com \
       -e LETSENCRYPT_HOST=base.maodouketang.com \
       -e LETSENCRYPT_EMAIL=dev@maodou.io \
       maodou-react-redux-base:latest