import {Point} from './Point'
import {Vehicle} from './Vehicle'
export class Bus implements Vehicle {
    constructor (private _location: Point,private _color?: string){
    }
    travelTo(point: Point): void {
        console.log(`Bus X: ${this._location.x} Y: ${this._location.y} dan X: ${point.x} Y: ${point.y} noktasina dogru harekete basladi. `)
    }
}
