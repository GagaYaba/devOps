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
      View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/166jw58f20ssiti5nczh2x7tz

 2. docker run --name docker-container -d -p 80:80 nginx

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

### Récupérer les images mysql (ou mariadb) et phpmyadmin/phpymyadmin depuis le Docker Hub

### Exécuter 2 containers à partir des images. Lancer le phpmyadmin (conteuneurisé et publié sur un port) et ajouter une table via l'interface