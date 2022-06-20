# Docker Simple WebServer structure

## What?
This is a simple webserver structure powered by express, redis and docker-compose.

When a request is made on any endpoint it is served by frontend, when a request is made on /gs_calc/:number endpoint it is forwarded from frontend to backend for compute using internal backend network. 
More information can be found at /documentation endpoint


## Running
Requirements:
* docker
* docker compose

Run
```
docker compose up
```
Or, for dev version
```
docker compose -f docker-compose.dev.yml up
```

