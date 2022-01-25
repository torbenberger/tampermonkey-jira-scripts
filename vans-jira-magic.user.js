// ==UserScript==
// @name         VANS Jira Magic
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Torben Berger
// @match        https://jira.mercedes-benz.io/browse/VANS-*
// @icon         https://www.google.com/s2/favicons?domain=mercedes-benz.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        Array.from(document.querySelectorAll('.bbb-gp-codereview-issue-web-panel__merge-request-line a')).forEach(pr => {
            var spanChild = pr.parentElement.querySelector('span.aui-lozenge');
            var targetBranch = pr.getAttribute('title').match(/( -> .*\s)/)[0].trim().replace('&nbsp;➡️&nbsp;');
            spanChild.innerHTML = spanChild.innerHTML + ' ' + targetBranch;
        });
    }, 1000)
})();