#!/bin/sh
set -x

# build docker iamge
docker build \
    --build-arg ENV_STAGE=$DEPLOY_STAGE/v1 \
    -t nextjs-image-shareable .

# login to ecr
$(aws ecr get-login --no-include-email --region ap-northeast-1)

# push image to ecr
export REPOSITORY=$(aws ssm get-parameters --region ap-northeast-1 --names /at-ut/v1/ecr/uri/nextjs --query "Parameters[0]"."Value" | sed -e 's/^"//' -e 's/"$//')
docker tag nextjs:latest $REPOSITORY:latest
docker push $REPOSITORY:latest
