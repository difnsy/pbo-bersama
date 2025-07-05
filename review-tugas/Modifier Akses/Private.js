class user {
    #password //private field
    constructor(name, password){
        this.name = name; //public property
        this.#password = password; //private property
    }

    checkPassword(input) {
        return input === this.#password;
    }
}

const user1 = new user('Dani', 'RahasiaPassword');

console.log(user1.name); //bisa akses karena public
//console.log(user1.#password); //error tidak bisa akses private
console.log(user1.checkPassword('RahasiaPassword')); //true

// Properti atau method yang diawali dengan # hanya bisa diakses dari dalam class.