class Car {
    #engineStatus = false; //private

    start(){
        this.#startEngine();
        console.log('Mobil Menyala.');
    }

    //detail internal (disembunyikan)
    #startEngine(){
        this.#engineStatus = true;
        console.log('Mesin Hidup.');
    }
}

const car = new Car();
car.start(); // Mesin Hidup. Mobil Menyala.
//car.#starEngine(); // Error : Private Method

// Menyembunyikan detail implementasi dan hanya menunjukkan interface yang perlu.