#!/usr/bin/env bash

error() {
    echo ">>>>>> Failed to pull and run MoneyApp <<<<<<"
    echo ""

    exit 1
}

echo "Pulling image samgreaves/moneyappbackend:0.1.$1"
docker pull samgreaves/moneyappbackend:0.1.$1

echo "Image pulled from docker successfully"
docker run -d -p 4000:4000 --link mongo:mongo --env MONGODB_URL=mongodb://mongo:27017/moneyapp samgreaves/moneyappbackend:0.1.$1

echo "MoneyApp backend running on http://localhost:4000"