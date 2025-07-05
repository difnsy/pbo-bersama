var person = {
  name: "Dani",
  sayHello: function() {
    console.log("Halo, nama saya " + this.name);
  }
};

person.sayHello(); // Output: Halo, nama saya Dani