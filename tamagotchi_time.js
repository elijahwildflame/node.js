class DigitalPal {
    constructor(){
        this.hungry = false;
        this.sleepy = false;
        this.bored = true;
        this.age = 0;
    };
    
    feed(){
        if (this.hungry === true){
            console.log("that was yummy");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full.");
        };
    };
    
    sleep(){
        if (this.sleepy === true){
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired.");
        };
    };

    play(){
        if (this.bored === true){
            console.log("Yay! Let's play!");
            this.bored= false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?");
        };
    };

    increaseAge(){
        this.age = this.age + 1;
        console.log("happy birthday to me I am " +age+ " old");
    };
};

const dog = new DigitalPal();

dog.outside = false
dog.bark = function(){
    console.log("woof woof")
};

dog.goOutside = function(){
    if (dog.outside === fasle){
        console.log("Yay I love the outdoors")
        dog.outside = true;
        dog.bark();
    } else {
        console.log("We're already outside though...")
    };
};

dog.goInside = function(){
    if (dog.outside === true){
        console.log("Do we have to? Fine... :(")
        dog.outside = false;
    } else {
        console.log("We're already inside.")
    }
};

const cat = new DigitalPal();

cat.houseCondition = 100;
cat.meow() = function (){
    console.log("Meow! Meow!")
};
cat.destoryFurniture() = function (){
    if (cat.houseCondition !== 0) {
        cat.houseCondition -= 10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        cat.bored = false;
        cat.sleepy = true;
    }
};

cat.buyNewFurniture() = function(){
    cat.houseCondition += 50;
    console.log("Are you sure about that?");
};