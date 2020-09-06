docker rm -f aicug-base

docker run \
       -d \
       --name=aicug-base \
       --restart=always \
	-e VIRTUAL_HOST=aicug-base.maodoulive.com \
       -p 8800:5000 \
       -e TZ=Asia/Shanghai \
       maodou-react-redux-base:aicug
