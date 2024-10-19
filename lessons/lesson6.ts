import {Taxi} from './Taxi'
import {Bus} from './Bus'

let taxi_1: Taxi = new Taxi({x:4,y:5},'blue');

let bus_1: Bus = new Bus({x:11,y:6});

taxi_1.travelTo({x:1,y:1});
bus_1.travelTo({x:10,y:0});