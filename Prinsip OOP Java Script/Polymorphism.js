class Animal {
  speak() {
    console.log("Hewan bersuara.");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Kucing mengeong.");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Anjing menggonggong.");
  }
}

const animals = [new Cat(), new Dog(), new Animal()];
animals.forEach(animal => animal.speak());
// Output:
// Kucing mengeong.
// Anjing menggonggong.
// Hewan bersuara.

// Kemampuan method dengan nama sama menghasilkan perilaku berbeda di class berbeda.