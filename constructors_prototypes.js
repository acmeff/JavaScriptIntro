function Cat(name, owner){
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  console.log(`${this.owner} loves ${this.name}`);
};

let cat1 = new Cat("Alvin", "Monte");

Cat.prototype.cuteStatement = function() {
  console.log(`Everyone loves ${this.name}`);
};

Cat.prototype.meow = function() {
  console.log("meow..");
};

cat1.cuteStatement();
cat1.meow = function(){console.log("bark!")};
cat1.meow();

let cat2 = new Cat("Theodore", "Bob");
cat2.meow();
