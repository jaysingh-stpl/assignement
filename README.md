## DownTime Application

## Installation

```bash
# clone the repo
$ git clone https://github.com/rsurander/downtime_frontend.git downtime

# go into app's directory
$ cd downtime

# install app's dependencies
$ npm install
```

### Basic usage

```bash
# dev server  with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## Directories

```
Downtime
├── public/          #static files
│   ├── assets/      #assets
│   └── index.html   #html template
│
├── src/             #project root
│   ├── containers/  #container source
│   ├── scss/        #user scss/css source
│   ├── views/       #views source
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── _nav.js      #sidebar config
│   └── routes.js    #routes config
│
└── package.json
```

## Sctipts

`npm start` for developing (it runs webpack-dev-server)  
`npm run build` to run a dev build
