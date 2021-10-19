# Source code

Clone the repository if you have git installed on your machine:
```shell
git clone https://git.s4.smartdata.solutions/sergiu.manea/internship-nodejs-api.git
# or
git clone git@git.s4.smartdata.solutions:sergiu.manea/internship-nodejs-api.git
```
If you do not want to use git you can download the ZIP file from the link below:
https://git.s4.smartdata.solutions/sergiu.manea/internship-nodejs-api.git .

# Install node and npm 
Download node version for your system from the link below: https://nodejs.org/en/download/ .
Run the file and install it (with default parameters).
This will automatically also install node package manager and you can verify the version for both by running
```shell
node -v && npm -v
```
# download modules
Open project from terminal and configure it by running this commands:
```shell
npm install 
# this will download all modules from package.json file
```
# sequelize and db configurations
To work with sequelize from command line install the packages by running:
```
npm install --save-dev sequelize-cli
# this will install it as a dev dependence
npm install --global mysql2
# dowload the sequelize dialect
```
To create the database for the project run:
```shell
sequelize db:migrate;
# run migrations for creating tables
sequelize db:seed:all;
# run all seeds for populating the database
```
Add a folder to the project and name it config. Create a javascript file named default with the db configurations for your user as in this example:
```js
module.exports.development = {
username:  'mySqlAccountUsername',
password:  'mySqlAccountPassword',
database:  'mySqlDatabaseName',
host:  'localhost',
dialect:  'mysql',
};
``` 
Then open the terminal and run:
```js
mysql -u username -p
// replace username with your database account username
```
After that you will be asked to introduce the password .
# Run project
This is a typescript project that is way you will need to install typescript to compile it to javascript. Open the project in terminal and run: 
``` shell
npm install -g typescript
```
Note that this command will install it globally. If you don't want omit the g flag. After that you can compile the project by running:
```shell
tsc
# Run a compile based on a backwards look through the fs for a tsconfig.json
```
Finally, now you can run the project using nodejs:
```js
node dist
```
Also you can combine last two steps by running a rpm script:
```js
npm start
```