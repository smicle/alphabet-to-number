"use strict";
exports.__esModule = true;
exports.AtoN = function (A, n) {
    if (n === void 0) { n = 0; }
    return A.toLowerCase().charCodeAt(0) - 96 + n;
};
exports.NtoA = function (N, n) {
    if (n === void 0) { n = 0; }
    return String.fromCharCode(96 + Number(N) + n);
};
exports.AtoA = function (A, n) { return String.fromCharCode(A.charCodeAt(0) + n); };
