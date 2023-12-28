'use strict';
function showVersion(version) {
    document.getElementById('version').innerHTML = `module.#${module}|${version}`;
}
let module = '6';
// let version = '1.001';
// let version = '1.002'; //hero:width:1440px;
// let version = '1.005'; //lesson:module.#5;
let date = '[2023.12.20]v.1.006:lesson:module.#5;';
let curentDate = new Date().toDateString('yyyy.MM.dd');
let version = '[2023.12.25]v.1.009:lesson:module.#5.10;';
version = '[2023.12.28]v.1.011:lesson:module.#5.11.adaptive;';
showVersion(version);