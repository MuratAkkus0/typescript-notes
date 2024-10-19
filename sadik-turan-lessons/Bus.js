"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bus = void 0;
var Bus = /** @class */ (function () {
    function Bus(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus X: ".concat(this._location.x, " Y: ").concat(this._location.y, " dan X: ").concat(point.x, " Y: ").concat(point.y, " noktasina dogru harekete basladi. "));
    };
    return Bus;
}());
exports.Bus = Bus;
