var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var shape = /** @class */ (function () {
    function shape(x, y) {
        this.num1 = x;
        this.num2 = y;
    }
    shape.prototype.rectangleArea = function () {
        return this.num1 * this.num2;
    };
    shape.prototype.circleArea = function () {
        return Math.PI * this.num1 * this.num2;
    };
    return shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, width) {
        return _super.call(this, length, width) || this;
    }
    return Rectangle;
}(shape));
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(radius) {
        return _super.call(this, radius, radius) || this;
    }
    return circle;
}(shape));
var val1 = new Rectangle(10, 10);
console.log(val1);
var val2 = new circle(10);
console.log(val2);
