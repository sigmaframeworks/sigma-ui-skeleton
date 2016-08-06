# Sigma UI Framework
### Skeleton for `aurelia-cli` based project

----

## 1. Create an aurelia project
```bash
mkdir <project_dir>
cd <project_dir>
au new --here
```

## 2. Replace generate files with skeleton files
```bash
cp -r <skeleton_dir>/* .
```

## 3. Update `aurelia_project/aurelia.json`

* Change `"stub": true` to `"stub": false`

* Add to `transpiler/dtsSource` `"./node_modules/sigma-ui-framework/dist/typings/**/*.d.ts"`

* Add to `bundles` object after `app-bundle.js`
```
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
      "aurelia-validatejs",
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
      {
        "name": "validate.js",
        "path": "../node_modules/validate.js",
        "main": "validate"
      },
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
        "path": "../node_modules/sigma-ui-framework",
        "main": "sigma-ui-framework"
      }
    ]
}
```

## 4. development and Deployment

* `au run --watch`: Run project in development mode, serves the built project on `localhost:9000`

* `au build --env prod`: Build project for production deployment

* `gulp prod`: Build sass files and copy required files to deployment ready folder `dist/`
