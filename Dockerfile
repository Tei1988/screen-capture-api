FROM node:alpine
MAINTAINER Tei1988

WORKDIR /opt/screen-capture-api
ADD . /opt/screen-capture-api
RUN sed -E -i -e 's/v[.0-9]+/edge/g' /etc/apk/repositories &&\
    apk --update --no-cache add chromium yarn &&\
    wget -O NotoSansCJKjp-hinted.zip http://noto-website.storage.googleapis.com/pkgs/NotoSansCJKjp-hinted.zip &&\
    mkdir -p /usr/share/fonts/NotoSansCJKjp &&\
    unzip NotoSansCJKjp-hinted.zip -d /usr/share/fonts/NotoSansCJKjp/ &&\
    rm NotoSansCJKjp-hinted.zip &&\
    fc-cache -fv &&\
    yarn --production
