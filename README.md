# Firefighting planner

POC of Collaborative planning tool for fire fighting against wildfire, created for [NASA International Space Apps Challenge
2019](https://2019.spaceappschallenge.org/).

## Getting started

### Install middleware

#### Git

1. Download Desktop from https://desktop.github.com/
2. Clone this repository into your local

#### Node.js

1. Download LTS version from https://nodejs.org/en/

### Run in local

1. Clone the repository

```console
$ git clone git@github.com:watilde/firefighting-planner.git
```

2. Install dependencies

```console
$ cd firefighting-planner
$ npm install
```

3. Put your token into `.env`

```console
$ cp .env.example .env
# Put your token
```

4. Run local server

```console
$ npm start
```

5. Open app

http://localhost:3000

## Known issues

### [.WebGL-0x7ffc5ed87800]RENDER WARNING: there is no texture bound to the unit 0

https://github.com/NASAWorldWind/WebWorldWind/issues/302
