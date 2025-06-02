# Gaëlle Lanic

## QUESTION 3

### a
docker pull nginx

### b
docker images

### c
mkdir -p ./html
echo "Hello World" > ./html/index.html

### d
Etre dans le dossier racine du projet
Le fichier index.html doit être dans le dossier html : ./html/index.html.

docker run --name docker-container -d -p 80:80 -v $(pwd)/html:/usr/share/nginx/html nginx
    > 0f8ab69c159c5e5abac3f7fed63f45f2391c9289cb93c017717a87da7f785e6f

### e
docker stop docker-container
docker rm docker-container

### f
 1. docker run --name docker-container -d -p 80:80 nginx
    > 32da54b9ebf6257f0062a19ecf4e3784f464dede6ea0aceb420bfc2e68ed645a

 2. docker cp ./html/index.html docker-container:/usr/share/nginx/html/index.html
    > Successfully copied 2.05kB to docker-container:/usr/share/nginx/html/index.html
