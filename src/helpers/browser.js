
const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

const isFirefox = typeof InstallTrigger !== 'undefined';

const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

const isIE = /*@cc_on!@*/false || !!document.documentMode;

const isEdge = !isIE && !!window.StyleMedia;

const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

const isBlink = (isChrome || isOpera) && !!window.CSS;

export const browser = {
    isFirefox,
    isChrome,
    isSafari,
    isOpera,
    isIE,
    isEdge,
    isBlink
}