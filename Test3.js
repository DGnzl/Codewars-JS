function Car(color, doors, make) {
    this.color = color
    this.doors = doors
    this.make = make
    this.lock = function() {
        console.log(`${this.doors} doors have been locked`)
    }
}

myCar = new Car('red', 2, 'Toyota')
mySecondCar = new Car('blue', 4, 'Ford')
console.log(myCar)
console.log(mySecondCar)
mySecondCar.lock()

// console.log(myCar.track())
// Car.prototype.track = function() {
//     console.log('Tracking chip activated')
// }
// myCar.track()

// function VideoGame(title, players, console, developer) {
//     this.title = title
//     this.players = players
//     this.console = console
//     this.developer = developer
//     this.running = true
// }

class VideoGame2 {
    constructor(title, players, console, developer) {
        this.title = title
        this.players = players
        this.console = console
        this.developer = developer
        this.running = true
    }
    controller() {
        console.log('joystick')
    }
}

let vg = new VideoGame2('THPS', 1, 'PS1', 'Neversoft')
vg.controller()