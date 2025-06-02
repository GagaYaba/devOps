# Gaëlle Lanic

## 3. Exécuter un serveur web (nginx) dans un container docker

### Récupérer l'image sur le docker hub (nginx)
docker pull nginx

### Utiliser une commande pour vérifier que vous disposez bien de l'image en local
docker images

### Créer un fichier dans votre repo local /html/index.html qui contient "Hello World"
mkdir -p ./html
echo "Hello World" > ./html/index.html

### Démarrer un nouveau container et servir la page html créée précédemment à l'aide d'une référence absolue
Etre dans le dossier racine du projet
Le fichier index.html doit être dans le dossier html : ./html/index.html.

docker run --name docker-container -d -p 80:80 -v $(pwd)/html:/usr/share/nginx/html nginx
    > 0f8ab69c159c5e5abac3f7fed63f45f2391c9289cb93c017717a87da7f785e6f

### Supprimer le container
docker stop docker-container
docker rm docker-container

### Relancez le même container sans l'option -v puis utiliser la commande cp pour servir le fichier 
 1. docker run --name docker-container -d -p 80:80 nginx
    > 32da54b9ebf6257f0062a19ecf4e3784f464dede6ea0aceb420bfc2e68ed645a

 2. docker cp ./html/index.html docker-container:/usr/share/nginx/html/index.html
    > Successfully copied 2.05kB to docker-container:/usr/share/nginx/html/index.html

## 4. Builder une image

### A l'aide d'un Dockerfile, créer une image qui permet d'exécuter un serveur web (nginx)
Dockerfile:

FROM nginx
COPY /html/index.html /usr/share/nginx/html/index.html
EXPOSE 80

### Exécuter cette nouvelle image de manière à servir./html/index.html
 1. docker build -t nginx .
    > [+] Building 1.7s (7/7) FINISHED  
      View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/sjoqrjtdx7t6r1wh72npiq4dd

 2. docker run --name docker-container -d -p 80:80 nginx
    > 507b74cb690601261cc806502ac68ee766c66393cde840911e7366119673ad39

### Quelles différences existe-t-il entre les Questions 3 & 4 ? Trouver les avantages & inconvénients de chaque procédure
Question 3 (Docker cp)

    > Avantages :
    Rapide pour tester et pas besoin de reconstruire l’image à chaque changement

    > Inconvénients :
    Pas idéal pour partager ou déployer

Question 4 (Dockerfile)

    > Avantages :
    Image autonome, facile à partager ou à utiliser en production

    > Inconvénients :
    Reconstruire l’image s'il y a des modifications et moins pratique pour tester rapidement

## 5. Utiliser une base de données dans un container docker

### Récupérer les images mysql (ou mariadb) et phpmyadmin depuis le Docker Hub
docker pull mysql
    > Digest: sha256:04768cb63395f56140b4e92cad7c8d9f48dfa181075316e955da75aadca8a7cd
    Status: Downloaded newer image for mysql:latest
    docker.io/library/mysql:latest

docker pull phpmyadmin/phpmyadmin
    > Digest: sha256:95e01f723b5e55fabf16d0473f1df2354c4c6352b35902b51d6a6245e074aee4
    Status: Downloaded newer image for phpmyadmin/phpmyadmin:latest
    docker.io/phpmyadmin/phpmyadmin:latest

### Exécuter 2 containers à partir des images. Lancer le phpmyadmin (conteuneurisé et publié sur un port) et ajouter une table via l'interface
 1. docker network create network-docker
    > 2600402677c6b77f09649527f08b24f1f517ca80d4265b0324458d7db4ebefbc

 2. docker run -d --name mysql-docker --network network-docker -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=database -e MYSQL_USER=admin -e            MYSQL_PASSWORD=admin mysql
    > f83e8feaee05dd2a5ad4cc9fcaa307508076c4cd0ca7930afdf133394a38b19e

 3. docker run -d --name phpmyadmin-docker --network network-docker -e PMA_HOST=mysql-docker -p 8080:80 phpmyadmin/phpmyadmin
    > f8bc6bffdde48cf36f581d73f0f0665fc245c9a36e4684da27539329b06354d0