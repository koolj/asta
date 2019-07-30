cd ~/asta
export COMPOSER_CARD=admin@asta
export COMPOSER_TLS=true
export COMPOSER_TLS_CERTIFICATE=/etc/nginx/ssl/crt.crt
export COMPOSER_TLS_KEY=/etc/nginx/ssl/key.key
export COMPOSER_WEBSOCKETS=true
export COMPOSER_AUTHENTICATION=true
export COMPOSER_MULTIUSER=true
export COMPOSER_PROVIDERS='{
  "jwt": {
    "provider": "jwt",
    "module": "/home/a/asta/node_modules/custom-jwt.js",
    "secretOrKey": "asta2019lkjldsfJHIWURsddfjhjllOIOImmnnbUIIUYkjhjawqwe",
    "authScheme": "saml",
    "successRedirect": "/",
    "failureRedirect":"/"
    }
}'
export COMPOSER_DATASOURCES='{
  "db": {
    "name": "astaauth",
    "connector": "mongodb",
    "host": "localhost",
    "database": "astaauth",
    "username": "adm2",
    "password": "Wwedfsd4!134BVDsds"
  }
}'
#composer-rest-server -c admin@a
composer-rest-server -c admin@asta -a true -m true -t -e /etc/nginx/ssl/crt.crt -k /etc/nginx/ssl/key.key
