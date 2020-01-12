# TODOS and UPDATES for Development

- [x] Get profiles link working
- [ ] Get web app Api working
- [ ] Get typeOrm to initialize during CI testing w/cypress

### Possible CORS solution for good-faith Web App Api
==Works in development. Issues in production __ONLY__== [^1]
1) Get NestJs app to deploy only

2) Zip the necessary files manually upload via FTP

### Possible Soltuions for typeORM CI connection issue
1) Create dynamic configuartion module for [NestJs](https://docs.nestjs.com/techniques/configuration) 
2) Move the config file to the root of the project.



Authors
:  Jason Sprouse

This starter project is inspired by angular Auth0 aside project [angular-auth0-aside](https://github.com/auth0-blog/angular-auth0-aside)

[^1]:Have tried both deploying from IDE and connecting to github, files in the wwwroot folder do not reflect the desired project files.

