#!/usr/bin/env bash

error() {
    echo ">>>>>> Failed to pull and run MoneyApp <<<<<<"
    echo ""

    exit 1
}

echo "Killing all containers running labeled with samgreaves/moneyapp"
docker kill $(docker ps | grep samgreaves/moneyapp | awk '{print $1}')


echo "Removing all containers labeled with samgreaves/moneyapp"
docker rm $(docker ps -a | grep samgreaves/moneyapp | awk '{print $1}')


echo "Removing all images labeled with samgreaves/moneyapp"
docker rmi $(docker images | grep samgreaves/moneyapp | awk '{print $3}')

