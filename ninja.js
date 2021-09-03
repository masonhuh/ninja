class Ninja {
    constructor(name, health = 70, speed = 3, strength = 3){
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

//const ninja1 = new Ninja("Hyabusa");
//ninja1.sayName();
//ninja1.showStats();
//ninja1.takeNap();

class Sensei extends Ninja{
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10)
        this.wisdom = wisdom
    }

    speakWisdom(){
        this.takeNap()
        console.log("Learning how to controll one's breathe is learning how to obtain controll of one's self.")
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();