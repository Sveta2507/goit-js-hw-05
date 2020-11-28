class Car {
    static getSpecs(car) {
        return console.log(`Max speed: ${car.maxSpeed}, Speed: ${car.speed}, IsOn: ${car.isOn}, Distance: ${car.distance}, Price: ${car.price}`);
    }
    constructor(maxSpeed, price) {
        this.speed = 0;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }
    set price(price) {
        return this._price = price;
    }
    get price() {
        return this._price;
    }
    turnOn() {
        return this.isOn = true;
    }
    turnOff() {
        return (this.isOn = false), (this.speed = 0);
    }
    accelerate(value) {
        if (this.speed <= this.maxSpeed) {
            return this.speed += value;
        }
    }
    decelerate(value) {
        if (this.speed >= 0) {
            return this.speed -= value;
        }
    }
    drive(hours) {
        if (this.isOn === true) {
            return this.distance = hours * this.speed;
        }
    }
}

const mustang = new Car(200, 2000);


mustang.turnOn();

mustang.accelerate(50);

mustang.drive(2);


Car.getSpecs(mustang);

// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000


mustang.decelerate(20);

mustang.drive(1);

mustang.turnOff();


Car.getSpecs(mustang);

// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000


console.log(mustang.price); // 2000

mustang.price = 4000;

console.log(mustang.price); // 4000