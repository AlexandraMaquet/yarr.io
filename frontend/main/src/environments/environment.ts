// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyARbvndfltC_SxaJPcy6utxz5p9OTQXiWk",
    authDomain: "gonpthegame.firebaseapp.com",
    databaseURL: "https://gonpthegame.firebaseio.com",
    projectId: "gonpthegame",
    storageBucket: "gonpthegame.appspot.com",
    messagingSenderId: "540782350272"
  },
  socketHost : "http://localhost:3000"
};