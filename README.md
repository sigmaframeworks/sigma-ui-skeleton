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
      // add if using amCharts
      "node_modules/fabric/dist/fabric.js",
      "node_modules/amcharts/dist/amcharts/amcharts.js",
      "node_modules/amcharts/dist/amcharts/pie.js",
      "node_modules/amcharts/dist/amcharts/serial.js",
      "node_modules/amcharts/dist/amcharts/themes/light.js",
      "node_modules/amcharts/dist/amcharts/plugins/export/export.js"
      // ------------
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
      // add if using datagrid with large data
      {
        "name": "aurelia-ui-virtualization",
        "path": "../node_modules/aurelia-ui-virtualization/dist/amd",
        "main": "aurelia-ui-virtualization"
      },
      // ------------
      // add if using `aurelia-i18n` plugin
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
      // ------------
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
