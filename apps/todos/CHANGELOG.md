FYI - These are all notes that would normally be kept in a place similar to azure-devops **BOARDS** for development team

# TODOS and UPDATES for Development

- [x] Get profiles link working
- [ ] Get web app Api working
- [ ] Get typeOrm to initialize during CI testing w/cypress

### Possible CORS solution for good-faith Web App Api
==Works in development. Issues in production __ONLY__== [^1][^2]
1) Get NestJs app to deploy only

2) Zip the necessary files manually upload via FTP

### Possible Soltuions for typeORM CI connection issue
1) Create dynamic configuartion module for [NestJs](https://docs.nestjs.com/techniques/configuration) 
2) Move the config file to the root of the project.



Authors
:  Jason Sprouse

This starter project is inspired by angular Auth0 aside project [angular-auth0-aside](https://github.com/auth0-blog/angular-auth0-aside)

[^1]:Have tried both deploying from IDE and connecting to github, files in the wwwroot folder do not reflect the desired project files.   
[^2]:Since this is a monorepo IDE uses a deploy machenism that evaluates the entire repo, zips and uploads all the content in it to the web-app. This is not the behavior that we would like to have with this type of set-up. As a work around I changed the package.json file so that when it starts the container innitiates with a command that serves the api -- NOT THE CLIENT APPLICATION. Another possible solution to this would be to alter the command that is run when the project is uploaded.(Search Microsoft docs to figure out how?????). All the additional files in the web-app are unncecesarry and creates a more bloated applicaiton which would incur additional costs once the application starts to scale.  Still have not determined the best way to go about uploading just the API. Below are the logs that assisted in the diagnosis of the problem I was having.

2020-01-12 23:06:21.581 INFO  - Starting container for site
2020-01-12 23:06:21.592 INFO  - docker run -d -p 9611:8081 --name good-faith_0_c15e4276_middleware -e WEBSITE_NODE_DEFAULT_VERSION=10-lts -e APPSETTING_WEBSITE_NODE_DEFAULT_VERSION=10-lts -e WEBSITE_CORS_ALLOWED_ORIGINS=* -e WEBSITE_CORS_SUPPORT_CREDENTIALS=False -e WEBSITE_SITE_NAME=good-faith -e WEBSITE_AUTH_ENABLED=False -e WEBSITE_ROLE_INSTANCE_ID=0 -e WEBSITE_HOSTNAME=good-faith.azurewebsites.net -e WEBSITE_INSTANCE_ID=6ca5bf8733274f3438359f570cf2c71c573c2f0ddd00fa65d28f92818c823f25 -e HTTP_LOGGING_ENABLED=1 appsvc/middleware:1907112318 /Host.ListenUrl=http://0.0.0.0:8081 /Host.DestinationHostUrl=http://172.16.2.2:8080 /Host.UseFileLogging=true 

```
2020-01-12 23:06:23.947 INFO  - Initiating warmup request to container good-faith_0_c15e4276 for site good-faith

2020-01-12 23:06:40.098 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 16.1512471 sec

2020-01-12 23:06:55.520 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 31.5730733 sec

2020-01-12 23:07:11.109 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 47.1623565 sec

2020-01-12 23:07:26.580 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 62.6328442 sec

2020-01-12 23:07:42.115 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 78.168651 sec

2020-01-12 23:07:57.559 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 93.6122299 sec

2020-01-12 23:08:13.897 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 109.9499392 sec

2020-01-12 23:08:29.551 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 125.6040363 sec

2020-01-12 23:08:45.056 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 141.1093335 sec

2020-01-12 23:09:00.583 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 156.6362541 sec

2020-01-12 23:09:16.201 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 172.253987 sec

2020-01-12 23:09:32.728 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 188.7812938 sec

2020-01-12 23:09:48.590 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 204.6428646 sec

2020-01-12 23:10:04.813 INFO  - Waiting for response to warmup request for container good-faith_0_c15e4276. Elapsed time = 220.8664534 sec

2020-01-12T23:06:21.632901319Z   _____                               
2020-01-12T23:06:21.639386862Z   /  _  \ __________ _________   ____  
2020-01-12T23:06:21.715452184Z  /  /_\  \___   /  |  \_  __ \_/ __ \ 
2020-01-12T23:06:21.715473384Z /    |    \/    /|  |  /|  | \/\  ___/ 
2020-01-12T23:06:21.715478384Z \____|__  /_____ \____/ |__|    \___  >
2020-01-12T23:06:21.715482584Z         \/      \/                  \/ 
2020-01-12T23:06:21.715486684Z A P P   S E R V I C E   O N   L I N U X
2020-01-12T23:06:21.715490684Z 
2020-01-12T23:06:21.715494284Z Documentation: http://aka.ms/webapp-linux
2020-01-12T23:06:21.715508584Z NodeJS quickstart: https://aka.ms/node-qs
2020-01-12T23:06:21.715512684Z NodeJS Version : v10.17.0
2020-01-12T23:06:21.715516483Z Note: Any data outside '/home' is not persisted
2020-01-12T23:06:21.715520483Z 
2020-01-12T23:06:22.060553210Z Oryx Version: 0.2.20191105.2, Commit: 67e159d71419415435cb5d10c05a0f0758ee8809, ReleaseTagName: 20191105.2
2020-01-12T23:06:22.080135735Z Found build manifest file at '/home/site/wwwroot/oryx-manifest.toml'. Deserializing it...
2020-01-12T23:06:22.116689910Z Build Operation ID: |rFaBiDZxpzk=.cdbff04e_
2020-01-12T23:06:23.978154028Z Writing output script to '/opt/startup/startup.sh'
2020-01-12T23:06:24.280938131Z Running #!/bin/sh
2020-01-12T23:06:24.281430226Z 
2020-01-12T23:06:24.281442826Z # Enter the source directory to make sure the script runs where the user expects
2020-01-12T23:06:24.281448326Z cd "/home/site/wwwroot"
2020-01-12T23:06:24.281452426Z 
2020-01-12T23:06:24.281456426Z export NODE_PATH=$(npm root --quiet -g):$NODE_PATH
2020-01-12T23:06:24.282359718Z if [ -z "$PORT" ]; then
2020-01-12T23:06:24.282371518Z 		export PORT=8080
2020-01-12T23:06:24.282376318Z fi
2020-01-12T23:06:24.282380118Z 
2020-01-12T23:06:24.283298510Z echo Found tar.gz based node_modules.
2020-01-12T23:06:24.283309710Z extractionCommand="tar -xzf node_modules.tar.gz -C /node_modules"
2020-01-12T23:06:24.283314510Z echo "Removing existing modules directory from root..."
2020-01-12T23:06:24.289550254Z rm -fr /node_modules
2020-01-12T23:06:24.289564754Z mkdir -p /node_modules
2020-01-12T23:06:24.289585854Z echo Extracting modules...
2020-01-12T23:06:24.289590054Z $extractionCommand
2020-01-12T23:06:24.289594054Z export NODE_PATH="/node_modules":$NODE_PATH
2020-01-12T23:06:24.289607753Z export PATH=/node_modules/.bin:$PATH
2020-01-12T23:06:24.289884451Z if [ -d node_modules ] || [ -L node_modules ]; then
2020-01-12T23:06:24.289895151Z     mv -f node_modules _del_node_modules || true
2020-01-12T23:06:24.289899751Z fi
2020-01-12T23:06:24.290123949Z 
2020-01-12T23:06:24.290134149Z if [ -d /node_modules ]; then
2020-01-12T23:06:24.290346047Z     ln -s /node_modules ./node_modules 
2020-01-12T23:06:24.290472446Z fi
2020-01-12T23:06:24.290521145Z 
2020-01-12T23:06:24.290550645Z echo "Done."
2020-01-12T23:06:24.290696344Z npm start
2020-01-12T23:06:29.077297505Z Found tar.gz based node_modules.
2020-01-12T23:06:29.078012498Z Removing existing modules directory from root...
2020-01-12T23:06:29.156449500Z Extracting modules...
2020-01-12T23:09:52.742340086Z Done.
2020-01-12T23:10:01.102553416Z 
2020-01-12T23:10:01.102594516Z > goodfaith@0.1.0 start /home/site/wwwroot
2020-01-12T23:10:01.102601816Z > ng serve
2020-01-12T23:10:01.102606616Z 


2020-01-12 23:10:14.917 ERROR - Container good-faith_0_c15e4276 for site good-faith did not start within expected time limit. Elapsed time = 230.9706678 sec
2020-01-12 23:10:14.930 INFO  - Initiating warmup request to container good-faith_0_c15e4276_middleware for site good-faith

2020-01-12 23:10:22.113 INFO  - Container good-faith_0_c15e4276_middleware for site good-faith initialized successfully and is ready to serve requests.
2020-01-12 23:10:22.163 ERROR - Container good-faith_0_c15e4276 didn't respond to HTTP pings on port: 8080, failing site start. See container logs for debugging.
2020-01-12 23:10:22.448 INFO  - Stoping site good-faith because it failed during startup.
```

# New Logs

```
2020-01-13 01:16:25.011 INFO  - Initiating warmup request to container good-faith_0_4ca36440 for site good-faith

2020-01-13 01:16:41.474 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 16.4633257 sec

2020-01-13 01:16:58.446 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 33.4353702 sec

2020-01-13 01:17:13.964 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 48.9530964 sec

2020-01-13 01:17:29.774 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 64.7630117 sec

2020-01-13 01:17:45.214 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 80.2031368 sec

2020-01-13 01:18:00.869 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 95.8575667 sec

2020-01-13 01:18:16.382 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 111.3710038 sec

2020-01-13 01:18:31.957 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 126.9459286 sec

2020-01-13 01:18:47.296 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 142.2850416 sec

2020-01-13 01:19:02.822 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 157.8110775 sec

2020-01-13 01:19:18.330 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 173.3188889 sec

2020-01-13 01:19:33.949 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 188.9380815 sec

2020-01-13 01:19:49.166 INFO  - Waiting for response to warmup request for container good-faith_0_4ca36440. Elapsed time = 204.1547536 sec

2020-01-13T01:16:21.796461101Z   _____                               
2020-01-13T01:16:21.803697639Z   /  _  \ __________ _________   ____  
2020-01-13T01:16:21.803824138Z  /  /_\  \___   /  |  \_  __ \_/ __ \ 
2020-01-13T01:16:21.803836338Z /    |    \/    /|  |  /|  | \/\  ___/ 
2020-01-13T01:16:21.803841138Z \____|__  /_____ \____/ |__|    \___  >
2020-01-13T01:16:21.803845938Z         \/      \/                  \/ 
2020-01-13T01:16:21.803850338Z A P P   S E R V I C E   O N   L I N U X
2020-01-13T01:16:21.803854738Z 
2020-01-13T01:16:21.803858738Z Documentation: http://aka.ms/webapp-linux
2020-01-13T01:16:21.803863138Z NodeJS quickstart: https://aka.ms/node-qs
2020-01-13T01:16:21.803867337Z NodeJS Version : v10.17.0
2020-01-13T01:16:21.803871437Z Note: Any data outside '/home' is not persisted
2020-01-13T01:16:21.803875637Z 
2020-01-13T01:16:22.502427919Z Oryx Version: 0.2.20191105.2, Commit: 67e159d71419415435cb5d10c05a0f0758ee8809, ReleaseTagName: 20191105.2
2020-01-13T01:16:22.529647784Z Found build manifest file at '/home/site/wwwroot/oryx-manifest.toml'. Deserializing it...
2020-01-13T01:16:22.538430109Z Build Operation ID: |HyT4DpxfTeo=.4eca76c2_
2020-01-13T01:16:24.301996814Z Writing output script to '/opt/startup/startup.sh'
2020-01-13T01:16:24.448299754Z Running #!/bin/sh
2020-01-13T01:16:24.455165895Z 
2020-01-13T01:16:24.455181695Z # Enter the source directory to make sure the script runs where the user expects
2020-01-13T01:16:24.455187395Z cd "/home/site/wwwroot"
2020-01-13T01:16:24.455191895Z 
2020-01-13T01:16:24.455195994Z export NODE_PATH=$(npm root --quiet -g):$NODE_PATH
2020-01-13T01:16:24.455200394Z if [ -z "$PORT" ]; then
2020-01-13T01:16:24.457526374Z 		export PORT=8080
2020-01-13T01:16:24.457541674Z fi
2020-01-13T01:16:24.457546674Z 
2020-01-13T01:16:24.458440567Z echo Found tar.gz based node_modules.
2020-01-13T01:16:24.458473566Z extractionCommand="tar -xzf node_modules.tar.gz -C /node_modules"
2020-01-13T01:16:24.458928562Z echo "Removing existing modules directory from root..."
2020-01-13T01:16:24.459263159Z rm -fr /node_modules
2020-01-13T01:16:24.474511028Z mkdir -p /node_modules
2020-01-13T01:16:24.474890325Z echo Extracting modules...
2020-01-13T01:16:24.474903325Z $extractionCommand
2020-01-13T01:16:24.475446220Z export NODE_PATH="/node_modules":$NODE_PATH
2020-01-13T01:16:24.475457620Z export PATH=/node_modules/.bin:$PATH
2020-01-13T01:16:24.475464320Z if [ -d node_modules ] || [ -L node_modules ]; then
2020-01-13T01:16:24.475468520Z     mv -f node_modules _del_node_modules || true
2020-01-13T01:16:24.475472320Z fi
2020-01-13T01:16:24.476548111Z 
2020-01-13T01:16:24.476559710Z if [ -d /node_modules ]; then
2020-01-13T01:16:24.476564110Z     ln -s /node_modules ./node_modules 
2020-01-13T01:16:24.476567810Z fi
2020-01-13T01:16:24.504206572Z 
2020-01-13T01:16:24.504226772Z echo "Done."
2020-01-13T01:16:24.504239972Z npm start
2020-01-13T01:16:28.672730757Z Found tar.gz based node_modules.
2020-01-13T01:16:28.673611350Z Removing existing modules directory from root...
2020-01-13T01:16:28.702354202Z Extracting modules...
2020-01-13T01:19:38.456185083Z Done.
2020-01-13T01:19:42.337687508Z 
2020-01-13T01:19:42.337717408Z > goodfaith@0.1.0 start /home/site/wwwroot
2020-01-13T01:19:42.337722808Z > ng serve api
2020-01-13T01:19:42.337727108Z 
2020-01-13T01:20:02.953766657Z An unhandled exception occurred: ENOENT: no such file or directory, stat '/home/site/wwwroot/apps/api/src/assets'
2020-01-13T01:20:02.963252077Z See "/tmp/ng-57YOhe/angular-errors.log" for further details.
2020-01-13T01:20:03.002691142Z npm ERR! code ELIFECYCLE
2020-01-13T01:20:03.015776931Z npm ERR! syscall spawn
2020-01-13T01:20:03.032837286Z npm ERR! file sh
2020-01-13T01:20:03.032909585Z npm ERR! errno ENOENT
2020-01-13T01:20:03.033009884Z npm ERR! goodfaith@0.1.0 start: `ng serve api`
2020-01-13T01:20:03.033032484Z npm ERR! spawn ENOENT
2020-01-13T01:20:03.033096783Z npm ERR! 
2020-01-13T01:20:03.033194883Z npm ERR! Failed at the goodfaith@0.1.0 start script.
2020-01-13T01:20:03.033238182Z npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2020-01-13T01:20:03.083151858Z 
2020-01-13T01:20:03.091549887Z npm ERR! A complete log of this run can be found in:
2020-01-13T01:20:03.091564487Z npm ERR!     /root/.npm/_logs/2020-01-13T01_20_03_015Z-debug.log


2020-01-13 01:20:04.083 ERROR - Container good-faith_0_4ca36440 for site good-faith has exited, failing site start
2020-01-13 01:20:04.085 INFO  - Initiating warmup request to container good-faith_0_4ca36440_middleware for site good-faith
```