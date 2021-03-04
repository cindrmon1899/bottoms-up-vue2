# Bottom's Up!
> Machine Problems 2 - 8 as of now

## Requirements:
1. Node.js
2. vue cli

### How to install Node.js:

#### For Windows and MacOS:
[Click here](https://nodejs.org/en/download/) to download Node.JS for Windows.

#### For Linux:
It depends on your linux distro. Just look up Node.js with the appropriate package manager.

If the linux package manager doesn't provide you with Node.js, [Click Here](https://snapcraft.io/node) to lead you to the snap version of Node.js.

> To check if you have successfully installed Node.js on your computer, type this command:
```
node --version
```
> The specified output must appear if node is successfully installed:
```
v14.15.4
```
> For as long as there is a version number, it means it is installed.

> Node.js does have a package manager built in (for the most part), called npm (node package manager). Type this command to double check if you have this installed as well in your computer:
```
npm --version
```
> Again, output should be any version number. You will need npm to install Vue CLI (for the most part again). Ex:
```
7.5.6
```

### How to install Vue CLI:
**NOTE: when installing global npm packages, it may require administration access. For Windows users, it is highly recommended to install global node packages (such as Vue CLI) by running the Administrator of PowerShell. For Linux users, type `sudo ` first before typing the following command.**
Instructions can be found [here](https://cli.vuejs.org/guide/installation.html), but the long story short, have node.js installed first, and type this command:
```
npm install -g @vue/cli
```

Double check the installation by typing this following command:
```
vue -V
```
It should output the version number of vue. The following is an example:
```
@vue/cli 4.5.11
```

> You can now follow the next steps to setup this project by yourself.

## Project setup 
**NOTE: Change directory first throught the cmd or terminal to the project location before running npm install, so that it would install the appropriate node modules for this project.**
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
