# cash
<p align="center">
  <img src="./rdm_img/Currency_Exchange.jpg" alt="Intro image">
</p>

## How it works

The Cash application will allow you to easily convert a currency in another currency.

32 currencies are currently available. 

## Installation

To get the application running you first need to install all the packages and if you want to have a good documentation install the package JSDOC.

Execute the following commands in your working directory : 
```sh
$ npm install 

$ npm install jsdoc --save
```
## Usage

To see what you can do with the application run the index.js file, you will have brief description of the commands and some examples. 
```sh
$ node index.js
```

### Simple commands 

If you want to convert an amount of a currency 
```sh
$ node bin/index.js <amount> <currency>
```

If you want to convert an amount of a currency in another specific currency.
```sh
$ node bin/index.js <amount> <currency> <currency>
```

If you want to save currencies as default currencies 
```sh
$ node bin/index.js --save <currency> <currency> ...
```

If you are encountering some trouble use the help command
```sh
$ node bin/index.js --help
```
