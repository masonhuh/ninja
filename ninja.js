class Ninja {
    constructor(name, health = 70, speed = 2, strength = 6){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength
    }

    sayName(){
        console.log(`My name is ${this.name}!!`)
    }

    showStats(){
        console.log(this)
    }

    takeNap(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.takeNap();


