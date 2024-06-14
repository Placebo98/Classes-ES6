// // const animal = {
// //   name: "Animal",
// //   age: 5,
// //   hasTail: true,
// // };

// class Animal {
//   static type = "Animal";

//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }

//   voice() {
//     console.log("I am " + this.name + " and I am " + this.age);
//   }
// }

// // const animal = new Animal({
// //   name: "Animal",
// //   age: 5,
// //   hasTail: true,
// // });

// class Dog extends Animal {
//   static type = "Пес";

//   constructor(options) {
//     super(options);
//     this.color = options.color;
//   }

//   voice() {
//     super.voice();
//     console.log("I am " + this.name + " I am " + this.age + " and I am Dog ");
//   }

//   get dogsAgeToHuman() {
//     return this.age * 8;
//   }

//   set dogsAgeToHuman(newAge) {
//     this.age = newAge;
//   }
// }

// const dog = new Dog({
//   name: "Max",
//   age: 6,
//   hasTail: false,
//   color: "brown",
// });

// dog.voice();

// const cat = new Animal({
//   name: "LOL",
//   age: 8,
//   hasTail: true,
//   color: "red",
// });

// cat.voice();

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "green",
});

const box2 = new Box({
  selector: "#box2",
  size: 150,
  color: "red",
});
const box3 = new Box({
  selector: "#box3",
  size: 200,
  color: "black",
});

class Circle extends Box {
  constructor(options) {
    super(options);

    this.$el.style.borderRadius = "50%";
  }
}

const cirkle1 = new Circle({
  selector: "#circle1",
  size: 100,
  color: "orange",
});
