"use strict";
exports.__esModule = true;
exports.Substraction = exports.Addition = void 0;
var Addition = /** @class */ (function () {
    function Addition(x, y) {
        this.x = x;
        this.y = y;
    }
    Addition.prototype.sum = function () {
        console.log("SUM:" + (this.x + this.y));
    };
    return Addition;
}());
exports.Addition = Addition;
var Substraction = /** @class */ (function () {
    function Substraction(a, b) {
        this.a = a;
        this.b = b;
    }
    Substraction.prototype.sub = function () {
        console.log("SUB:" + (this.a - this.b));
    };
    return Substraction;
}());
exports.Substraction = Substraction;
