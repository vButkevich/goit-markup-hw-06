'use strict';
{
  let module = '6';

  let versionInfo;
  versionInfo = '[2023.12.25]v.1.009:lesson:10;';
  versionInfo = '[2023.12.28]v.1.011:lesson:11.adaptive;';
  versionInfo = '[2023.12.29]v.1.013:lesson:11.mobile-menu;';
  versionInfo = '[2023.12.29]v.1.015:lesson:11.header-address;';
  versionInfo = '[2023.12.30]v.1.019:lesson:11.img@2x;';
  versionInfo = '[2023.12.30]v.1.021:lesson:11.burger;';
  versionInfo = '[2023.12.31]v.1.019:lesson:11.versionInfo;';
  versionInfo = '[2024.01.01]v.1.021:lesson:11.fix-prettier;';
  versionInfo = '[2024.01.06]v.1.027:lesson:11.fix-issues;';
  versionInfo = '[2024.01.07]v.1.027:lesson:11.fix-footer;';
  versionInfo = '[2024.01.08]v.1.029:lesson:11.fix-last-issues;';

  function setVersionInfo(versionInfo) {
    document.getElementById(
      'version'
    ).innerHTML = `module.#${module}|${versionInfo}`;
  }
  setVersionInfo(versionInfo);

  let selector = document.querySelector('#version');
  selector.addEventListener('click', function () {
    selector.classList.toggle('active');
    selector.style.width = `${16}px`;
    if (selector.classList.length > 1) {
      selector.style.width = `${versionInfo.length * 6}px`;
    }
  });
}
