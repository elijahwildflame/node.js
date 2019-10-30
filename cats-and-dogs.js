// create cats and dogs objects

class Animal {
  constructor(raining, noise) {
    this.raining = raining;
    this.noise = noise;
  }

  makeNoise(){
    if(this.raining === true){
      console.log(this.noise);
    }
  }
}

let dogs = new Animal(true,"Woof!")
let cats = new Animal(true,"Meow!")



    //   your code here


// call "makeNoise" methods for dogs 

dogs.makeNoise();

//   your code here

// change cats raining property to true and call "makeNoise" method for cats

cats.raining = true
cats.makeNoise();
    // creates a function called "massHysteria" which takes in both objects and
// logs "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" to the console if 
// raining is true for both of them.
function massHysteria(c, d){
  if (d.raining === true && c.raining === true){
      console.log ('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!')
  }
};
// call the massHysteria function

massHysteria(cats, dogs);

module.exports = {cats, dogs, massHysteria};