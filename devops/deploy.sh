#!/bin/sh
set -x

export SERVICE_NAME=vec-nextjs-service
export CLUSTER_NAME=grandeurseason-cluster
SERVICE_DESIRED_COUNT=1
TIME_TO_WAIT_NEW_SERVICE=30

aws ecs update-service --region ap-northeast-1 --service=${SERVICE_NAME}-${DEPLOY_STAGE} --cluster=${CLUSTER_NAME} --desired-count ${SERVICE_DESIRED_COUNT} --force-new-deployment 
