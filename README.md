# Sigma UI Framework
### Skeleton for `aurelia-cli` based project

----

## 1. Create an aurelia project
```bash
mkdir <project_dir>
cd <project_dir>
au new --here

npm install sigma-ui-framework lodash --save
```

## 2. Replace generate files with skeleton files
```bash
cp -r <skeleton_dir>/* .
```

## 3. Update `aurelia_project/aurelia.json`

* Change `"stub": true` to `"stub": false`

* Add to `transpiler/dtsSource` `"./node_modules/sigma-ui-framework/dist/typings/**/*.d.ts"`

* Add to `bundles` object after `app-bundle.js`
```json
{
    "name": "ui-framework.js",
    "prepend": [
      "node_modules/whatwg-fetch/fetch.js",
      "node_modules/fabric/dist/fabric.js"
    ],
    "dependencies": [
      "lodash",
      "moment",
      "numeral",
      "aurelia-fetch-client",
      {
        "name": "text",
        "path": "../scripts/text"
      },
      {
        "name": "kramed",
        "path": "../node_modules/kramed/lib",
        "main": "kramed"
      },
      // ---- start
      // Remove if not using i18n
      {
        "name": "intl",
        "path": "../node_modules/intl/dist",
        "main": "intl"
      },
      {
        "name": "i18next",
        "path": "../node_modules/i18next/dist/umd",
        "main": "i18next"
      },
      {
        "name": "i18next-xhr-backend",
        "path": "../node_modules/i18next-xhr-backend/dist/umd",
        "main": "i18nextXHRBackend"
      },
      {
        "name": "aurelia-i18n",
        "path": "../node_modules/aurelia-i18n/dist/amd",
        "main": "aurelia-i18n"
      },
      // ---- end
      {
        "name": "aurelia-validation",
        "path": "../node_modules/aurelia-validation/dist/amd",
        "main": "aurelia-validation"
      },
      {
        "name": "amcharts",
        "path": "../node_modules/amcharts/dist",
        "main": "amcharts/amcharts"
      },
      {
        "name": "sigma-ui-framework",
        "path": "../node_modules/sigma-ui-framework/dist",
        "main": "sigma-ui-framework"
      }
    ]
}
```

## 4. development and Deployment

* `au run --watch`: Run project in development mode, serves the built project on `localhost:9000`

* `au build --env prod`: Build project for production deployment

* `gulp prod`: Build sass files and copy required files to deployment ready folder `dist/`
