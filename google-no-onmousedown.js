// ==UserScript==
// @name        Google no onmousedown
// @namespace   Violentmonkey Scripts
// @match       https://www.google.com/search
// @grant       none
// @version     1.0
// @author      Daniel Liuzzi
// @description Removes Google's href tracking
// ==/UserScript==

(a => document.querySelectorAll(`[${a}]`).forEach(e => e.removeAttribute(a)))(`onmousedown`)
