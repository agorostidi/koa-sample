# koa-sample
Koa-Sample on BlueMix

The manifest.yml of this project is ready to upload the application to the Cloud.
Package.json is also forcing to use latest releases of Node Engine, so we can run latest features
This way, we can use the Cloud Foundry (CF) feautures of IBM CLOUD  (BlueMix).

To upload/run the app on IBM Cloud  (Bluemix Cloud Foundry) the steps are:

1).- Initializate Bluemix  (set EndPoint)

bluemix api https://api.eu-gb.bluemix.net

2).-  Login

2.a).- On IBM Account

IBM eployees have a federated user on Bluemix and they need to login using SSO
using "bluemix login -o nombre_organización -s nombre_espacio -sso"

Example: bluemix login  -o IBMLabServices -s Test -sso

2.b).- On non IBM Account 

Most user will use normal login, using the command
"bluemix login -u userid -o nombre_organización -s nombre_espacio"

Example: "bluemix login -u info@europesip.com -o EuropeSIP -s prod"

3).- Push APP  (will use manifest.yml data)

bluemix app push "Nombre Aplicacion"

Example: bluemix app push Koa-Sample
