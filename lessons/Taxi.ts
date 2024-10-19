import {Point} from './Point'
import {Vehicle} from './Vehicle'


export class Taxi implements Vehicle{
    constructor (private _location: Point,private _color?: string){
    }
    travelTo(point: Point): void {
        console.log(`Taxi X: ${this._location.x} Y: ${this._location.y} dan X: ${point.x} Y: ${point.y} noktasina dogru harekete basladi. `)
    }

    get location(){
        return this._location;
    }

    set location(value: Point){
        if (value.x < 0 || value.y<0){
            throw new Error('Location information cannot be negative !')
        }
        this._location = value;
    }

}