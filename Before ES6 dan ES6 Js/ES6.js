const person = {
  name: "Dani",
  sayHello() {
    console.log(`Halo, nama saya ${this.name}`);
  }
};

person.sayHello(); // Output: Halo, nama saya Dani