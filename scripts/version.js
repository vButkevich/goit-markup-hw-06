'use strict';
{
    let module = '6';

    function showVersion(version) {
        document.getElementById('version').innerHTML = `module.#${module}|${version}`;
    }
    let version;
    version = `[2023.12.25]v.1.009:lesson:10;`;
    version = `[2023.12.28]v.1.011:lesson:11.adaptive;`;

    showVersion(version);
}