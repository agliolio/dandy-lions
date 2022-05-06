# Instructions to setup UI tests 

# Pre-requisites

1. Ensure NodeJs is installed (version 12 and up)
2. Ensure npm is installed

# Installation for Cypress

1. cd to ui-tests directory

```
cd ui-tests
```

2. execute the following command 

```
npm config set registry "https://registry.npmjs.org"
```

3. install dependencies 

```
npm install 
```

4. run test 
```
npm run cy:run
```

OR 

if you want to view the runner 

```
npm run cy:open
```