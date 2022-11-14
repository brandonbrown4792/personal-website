FROM nginx:latest
WORKDIR /projects
RUN mkdir -p /data/www
COPY ./main-site /data/www/
COPY ./default.conf /etc/nginx/conf.d/default.conf
