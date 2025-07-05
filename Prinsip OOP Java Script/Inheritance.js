class animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} bersuara`);
    }
}

class dog extends animal {
    bark(){
        console.log(`${this.name} menggonggong`);
    }
}

const doggy = new dog('Rio');
doggy.speak(); //Rio bersuara
doggy.bark(); //Rio menggonggong

// inheritance(pewarisan) menggunakan extends
// Mewarisi properti/method dari class induk.