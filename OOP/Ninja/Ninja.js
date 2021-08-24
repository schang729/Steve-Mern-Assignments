class Ninja {	
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 0;
    }
    sayName() {               
        console.log("Ninja Name is " + this.name)   
    }
    showStats() {
        console.log("name: " + this.name, "health: " + this.health, "speed: " + this.speed, "strength: " + this.strength)

    }
    drinkSake() {
        this.health += 10;

    }
}

class Sensei extends Ninja {
    constructor(name, health){
        super(name, health);
        this.wisdom = 10;
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }




} 
const Steve = new Ninja("Steve", 100);
const Mk = new Sensei("melinda", 200);
Mk.speakWisdom()
