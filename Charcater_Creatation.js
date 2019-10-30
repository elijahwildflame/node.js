class Hero {
    constructor (name, profession, gender, age, strength, hitpoints){
        this.name = name;
        this.profession = profession;
        this.gender = gender;
        this.age = age;
        this.strength = strength;
        this.hitpoints = hitpoints;
    }

    printStates(){
        console.log("name: " + this.name + "\n" + "age: " + this.age + "\n" + "strength: " + this.strength + "\n" + "hitpoints: " +this.hitpoints)
    };

    isAlive(){
        if(this.hitpoints > 0){
            console.log(this.name + " is alive!")
        };
    };

    attack(enemy){
        enemy.hitpoints = enemy.hitpoints - this.strength
    };

    levelUp(){
        this.age = this.age + 1,
        this.strength = this.strength + 5,
        this.hitpoints = this.hitpoints + 35
    };
};
const zeus = new Hero("Zeus","Elementalist","male", 23, 50,100)

zeus.weapon = "Master Bolt"

const hades = new Hero("Hades", "Nercromancer", "male", 25, 60, 120)

hades.weapon = "Helm of Darkness"