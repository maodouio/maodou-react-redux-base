docker rm -f maodou-react-redux-base

docker run \
       -d \
       --name=maodou-react-redux-base \
       --restart=always \
       -p 8800:5000 \
       -e TZ=Asia/Shanghai \
       maodou-react-redux-base:latest
