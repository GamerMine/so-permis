#### Ce tutoriel fonctionne sur Debian 11

# Installation de Node.JS
La documentation officiel pour l'installation de Node.JS est disponible [ici](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).<br>
Voici les instructions pour installer Node.JS sur Debian :

`sudo apt-get update`<br>
`sudo apt-get install -y ca-certificates curl gnupg`<br>
`sudo mkdir -p /etc/apt/keyrings`<br>
`curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg`<br>
`echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list`<br>
`sudo apt-get update`<br>
`sudo apt-get install nodejs -y`

# Installation des dépendences
Cette exemple est un exemple pour installer les dépendences nécessaires au fonctionnement du projet :<br>
`sudo apt-get install php8.1 php8.1-pgsql php8.1-intl php8.1-mbstring nginx`

# Copie du repository Github
Ces étapes vont dépendres de la gestion du projet par le client :

On clone le repository dans le dossier /var/www: <br>
`sudo git clone https://GamerMine/so-permis.git --branch react /var/www/`<br>
`cd /var/www/so-permis/frontend`<br>

On installe les dépendences nécessaires puis on construit le projet :<br>
`npm install`<br>
`npm run build`

# Configuration de NGINX (frontend/backend)
On configure NGINX pour héberger la partie frontend du site web de SO Permis et gérer les requêtes
clients pour le backend.

On créer le fichier de configuration NGINX :<br>
`sudo nano /etc/nginx/sites-available/so-permis.conf`

```
server {
    # Partie frontend
    listen 443 ssl;

    server_name so-permis.fr; # Adresse du site web

    # Racine du site web
    root /var/www/so-permis/frontend/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_log /var/log/nginx/so-permis.error.log;
    access_log /var/log/nginx/so-permis.access.log;

    # Paramètres SSL
    ssl_certificate /etc/letsencrypt/live/dwightstudio.fr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dwightstudio.fr/privkey.pem;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1.2;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
}

server {
    # Partie backend
    listen 9876 ssl;

    # Paramètres SSL
    ssl_certificate /etc/letsencrypt/live/dwightstudio.fr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/dwightstudio.fr/privkey.pem;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1.2;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass http://localhost:8080; # Le port du backend peut-être modifié ici
    }
}
```

Les fichier accessibles par NGINX doivent appartenir à l'utilisateur et au groupe nommé www-data:<br>
`sudo chown www-data -R /var/www/so-permis`<br>
`sudo chgrp www-data -R /var/www/so-permis`

On créer un lien symbolique pour activer la configuration NGINX so-permis.conf :<br>
`sudo ln -s /etc/nginx/sites-available/so-permis.conf /etc/nginx/sites-enabled/so-permis.conf`

On active le service NGINX :<br>
`sudo systemctl enable --now nginx.service`

# Configuration de la partie backend
Il est nécessaire de créer un service de type daemon pour faire fonctionner la partie backend du site web.
Pour cela nous allons configurer un service avec systemd :

Créer le fichier so-permis.service (l'éditeur nano peut-être remplacé par n'importe quel autre éditeur) : <br>
`sudo nano /etc/systemd/system/so-permis.service`

Copier le code suivant dans le fichier so-permis précédemment créé :
```
[Unit]
Description=SO Permis Daemon
 
[Service]
Type=simple
ExecStart=/usr/bin/php /var/www/so-permis/backend/spark serve
Restart=always
 
[Install]
WantedBy=multi-user.target
```

Recharger les services et activer le service backend de SO Permis :<br>
`sudo systemctl daemon-reload` <br>
`sudo systemctl enable --now so-permis.service`