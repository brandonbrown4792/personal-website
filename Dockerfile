FROM nginx:latest
WORKDIR /
RUN mkdir -p /data/www
COPY ./main-site /data/www/
COPY ./default.conf /etc/nginx/conf.d/default.conf
