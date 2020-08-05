FROM node:14.5-slim

ARG ENV_STAGE
ENV ENV_STAGE=$ENV_STAGE

RUN apt-get update \
  && apt-get install -y \
    python \
    build-essential \
    curl \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /logs/errors \
    && mkdir /logs/responses

EXPOSE 8080

# RUN apt-get update
# RUN rm -f /etc/localtime
# RUN ln -s /usr/share/zoneinfo/Asia/Taipei /etc/localtime
RUN rm -f /etc/localtime
ENV TZ=Asia/Taipei
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# confd
RUN curl -sSL https://github.com/kelseyhightower/confd/releases/download/v0.16.0/confd-0.16.0-linux-amd64 -o /usr/local/bin/confd && \
  chmod +x /usr/local/bin/confd
RUN ./switch-env $ENV_STAGE
# node & yarn
RUN npm i npm@latest -g \
    && yarn add webpack@^4 \
    && yarn \
    && yarn global add pm2 \
    && yarn run build
