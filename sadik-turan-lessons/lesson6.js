"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Taxi_1 = require("./Taxi");
var Bus_1 = require("./Bus");
var taxi_1 = new Taxi_1.Taxi({ x: 4, y: 5 }, 'blue');
var bus_1 = new Bus_1.Bus({ x: 11, y: 6 });
taxi_1.travelTo({ x: 1, y: 1 });
bus_1.travelTo({ x: 10, y: 0 });
