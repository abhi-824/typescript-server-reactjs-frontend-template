# typescript-server-reactjs-frontend-template

### Here were the steps used:

- > yarn init(If you don't have yarn installed, run npm i -g yarn)
- > yarn add -D typescript ts-node
- > npx tsc --init
- Now, create a folder named src. It will contain all the frontend as well as backend code(as we want to host one server only)
- Replace tsconfig with this:
```
{
  "compilerOptions": {
    "target": "es6" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "module": "commonjs" /* Specify what module code is generated. */,
    "rootDir": "./src" /* Specify the root folder within your source files. */,
    "resolveJsonModule": true /* Enable importing .json files */,
    "outDir": "./build" /* Specify an output folder for all emitted files. */,
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  },
  "exclude": ["node_modules", "build"]
}
```
- As you can see in tsconfig file, we have given rootDir as ./src and outDir as ./build. Our typescript will compile from src folder and the compiled javascript will go to build folder. 
- Create index.ts, app.ts, client, config, lib, models, routes foulder and files. Here is a short explanation of the folders:

File/Folder | Meaning
--- | --- 
index.ts | Entry point for our app(Server runs on this file)
app.ts | Contains the app for our server. Here we add api routes and cors dependencies to be used in app.
config | It contains a file index.ts which is responsible for loading the environmental variables
lib | We can use user defined libraries and utility functions here. 
models | contains db models
routes | contains all route cruds,etc.
routes/index.ts | contains router which is exported to the main app

- > yarn add express @types/express dotenv cors @types/cors
- > cd src/client
- > npx create-react-app .
- Meanwhile when installing react, add these scripts to package.json:

```
"scripts": {
    "start": "node build",
    "dev": "nodemon build --ignore client",
    "build": "tsc -p .",
    "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix src/client && npm run build --prefix src/client&&copyfiles src/client/**/* build",
    "postinstall": "npm run build",
    "pretty": "prettier --write \"./**/*.{js,jsx,json,html,scss,css}\""
  },
```
- > yarn add -D nodemon
- > yarn add module-alias
- > yarn build -w (In outer folder)
- > yarn dev(Server should run)
- > cd src/client
- > yarn start( React should run)

## Installation

> clone the repository
> cd typescript-server-reactjs-frontend-template
> yarn
> yarn build -w
> yarn dev
> cd src/client
> yarn start
