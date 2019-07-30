This is ASTA - a blockchain based AI, bigData for Stopping Traffic Accidents solution.
A risk alerting system on Vietnam transportation & traffic.

Video demo: https://drive.google.com/drive/folders/1gpI8glnzBNZAgqhzPYSdyvnCIyM1OtFY

## PreInstall
You should have account on IBM's VPC, Compute, Function, Database, Hypeledger Fabric blockchain, PowerAI, IBM Analytics Engine, Db2, Watson to read write.

Of course you should have npm, node, react-app installed.

### Install web local:
Clone this git, then, on folder web, unzip asta.zip, remove ssl, install run:
### `npm install`

Test on local:8078
### `node server.js`

### Install blockchain local
Clone this git, then follow to build and config with namespace asta:
https://hyperledger.github.io/composer/latest/installing/development-tools.html

Instal mongodb, with admin authen via run.sh

Run npm install

Add custom-jwt.js to node-modules

Run run.sh, remove SSL if needed

Test on local:3000/explorer

### View device sensor
Copy folder sensor to asta folder, test on local:
http://local:8078/sensor/index.html

----------------------------------------
## Intro
There are numbers of traffic accidents in Vietnam reasoned by cars/bikes over-speed,  driving illegally zigzagging, drivers using alcohol, stimulants, failing brake

This version for: Alert/predict to alert people's smart phones (on road) if there is a harmful transporting signal pointing to them.

Next version for: analytic customer's need, report administrative tasks

## Technologies:
- IBM's VPC, Compute, Function, Database, Hypeledger Fabric blockchain, PowerAI, IBM Analytics Engine, Db2, Watson
- Using smart device's location, accelerometer, gyroscope, barometer, proximity sensors

## How it works:
1. Device (smart phones) will collect data from location, accelerometer, gyroscope, barometer, proximity sensors, then send to BigData lake server, where data will be trained and model will be submitted back to device.
2. When people join traffic, device will collect data and compare to model on device. If there is abnormal signal, it sends to blockchain server.
3. Blockchain server will send abnormal signals to administrative agents, to near devices if found.

----------------------------------------
## Solution by cases
Case:
- There are numbers of traffic accidents in Vietnam reasoned by cars/bikes over-speed,  driving illegally zigzagging, drivers using alcohol, stimulants, failing brake
- Cars and transportations always in over-loaded
- Bikes and cars over-speed, and drive illegally zigzagging
- Bikes, cars, and transportations used to fail to brake while in high speed


Solution:
- Positioned identities by detecting which transporting identity in what speed, location, position.
- Alert/predict to alert people's smart phones (on road) by detecting while other bikes, cars, and transportations are driven poiting at/near/targetting you in high speed.
- Alert to administrative agent about identities by detecting who are over over-loaded, over-speed, and drive illegally zigzagging

Better than other sulutions:
- Less and there is not much IT solution for traffic accident predicting or alerting in Vietnam


Any comments are appreciated.

KJ

TesterPRO.org/deepdata

TesterPRO.org/admincv
