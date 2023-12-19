#### Ce tutoriel fonctionne sur Debian 11

# Installation de Node.JS
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update
sudo apt-get install nodejs -y

# Installation des dépendences
sudo apt-get install php8.1 php8.1-pgsql php8.1-intl php8.1-mbstring nginx

# Installation du site web
sudo git clone https://GamerMine/so-permis.git --branch react /var/www/
cd /var/www/so-permis/frontend
npm install
npm run build

# Configuration de NGINX (frontend)
sudo nano /etc/nginx/sites-available

```
server {
server {
    listen 443 ssl;

    server_name adresse.fr;

    root /var/www/so-permis/frontend/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_log /var/log/nginx/so-permis.error.log;
    access_log /var/log/nginx/so-permis.access.log;

    # SSL parameters
    ssl_certificate /emplacement/de/la/clé/publique.pem;
    ssl_certificate_key /emplacement/de/la/clé/privée.pem;

    ssl_session_timeout 5m;

    ssl_protocols TLSv1.2;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
}

}
```

sudo chown www-data -R /var/www/so-permis
sudo chgrp www-data -R /var/www/so-permis

sudo systemctl enable --now nginx.service

# Configuration de la partie backend
sudo nano /etc/systemd/system/so-permis.service

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

sudo systemctl daemon-reload 
sudo systemctl enable --now so-permis.service