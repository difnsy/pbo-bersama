class user {
    constructor(name) {
        this.name = name; //public
    }

    sayHello() {
        console.log('Halo, saya ${this.name}');
    }
}
 const user1 = new user('Dani');
 console.log(user1.name);

 // Semua properti/method yang dideklarasikan tanpa tanda # adalah public.