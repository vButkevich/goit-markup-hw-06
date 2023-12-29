'use strict';
{
    let module = '6';

    let versionInfo;
    versionInfo = '[2023.12.25]v.1.009:lesson:10;';
    versionInfo = '[2023.12.28]v.1.011:lesson:11.adaptive;';
    versionInfo = '[2023.12.29]v.1.013:lesson:11.mobile-menu;';
    versionInfo = '[2023.12.29]v.1.015:lesson:11.header-address;';

    function setVersionInfo(versionInfo) {
        document.getElementById('version').innerHTML = `module.#${module}|${versionInfo}`;
    }
    setVersionInfo(versionInfo);



    let selector = document.querySelector('#version');
    selector.addEventListener('click', function () {
        selector.classList.toggle('active');
        // showVersion();
    });
    // function showVersion() {
    //     selector.classList.toggle('active');
    // }
}