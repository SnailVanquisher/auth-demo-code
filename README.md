# Firebase Auth Demo

## Dev setup

* install node
* `npm install -g @vue/cli`
* `npm install -g firebase-tools`
* `firebase login`

## Project setup

* `npm install`
    * (on osx, I had to use `npm install --force firebase`; see class notes for 10-29)
* create project at <https://console.firebase.google.com>
* add firebase settings to .env file
    * click "Add Firebase to your web app" to find your config
    * put your settings in `.env` (alternatively, put your settings in `.env.local`, which will not be tracked by git)
* `firebase init`
    * select "Hosting"
    * select your newly-created project
    * use "dist" as the public directory
    * choose "y" for single-page app

### Compiles and hot-reloads for development
```
npm run serve
```

## Set up Firebase Auth from firebase console.
