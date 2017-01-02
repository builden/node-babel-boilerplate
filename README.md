# 使用babel让node支持es6和es7语法

## 支持ES6、支持ES7
* [babel6相关的插件列表](https://github.com/babel/babel/tree/master/packages)
### 安装babel和插件
```bash
# 不建议安装成全局包，这样可以控制在不同的工程中使用不同的babel版本
$ yarn add babel-cli --save-dev

# ES6语法预设
$ yarn add babel-preset-env -D

# 用于转换成ES5的时候，动态提供一些ES6语法的实现
# 直接在入口import 'babel-polyfill'; 会导致文件尺寸过大，目前已经不需要了
$ yarn add babel-plugin-transform-runtime -D

# 支持ES7的Decorator，使用mobx必备
$ yarn add babel-plugin-transform-decorators-legacy -D

# 支持ES7的object-rest-spread
# e.g. const newObj = {...obj};
$ yarn add babel-plugin-transform-object-rest-spread -D
```
### 配置package.json
```json
{
  // ...
  "scripts": {
    "build": "babel ./lib -d ./dist -s",
    "build:watch": "yarn build -- -w",
    "start": "babel-node ./lib/index.js"
  },
  "babel": {
    "presets": [
      "env"
    ],
    "plugins": [
      "babel-plugin-transform-decorators-legacy",
      "babel-plugin-transform-object-rest-spread",
      "babel-plugin-transform-runtime"
    ]
  }
}
```
### 启动和编译
```bash
$ yarn start
$ yarn build
```

## eslint
### 安装
```bash
$ yarn add eslint-config-airbnb -D

$ yarn add eslint -D
$ yarn add eslint-plugin-import -D
$ yarn add eslint-plugin-jsx-a11y -D
$ yarn add eslint-plugin-react -D
```

### 配置package.json
```json
{
  // ...
  "eslintConfig": {
    "extends": "airbnb"
  }
}
```

### 配置jsconfig.json，让vscode支持ES7中的Decorator
```json
{
  "compilerOptions": {
    "target": "es6",
    "experimentalDecorators": true
  }
}
```

## 单元测试ava
* [Github](https://github.com/avajs/ava)
### 安装
```bash
$ yarn add ava --save-dev
```
### 配置package.json
```json
{
  // ...
  "scripts": {
    // ...
    "test": "ava"
  },
  "babel": {
    // ...
  },
  "ava": {
    "babel": "inherit"
  }
}
```
### 执行用例
```bash
$ yarn test
```

## EditorConfig
### 安装VS Code插件 `EditorConfig for VS Code`
### 配置`.editorconfig`
```yaml
# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*.js]
indent_style = space
indent_size = 2
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```