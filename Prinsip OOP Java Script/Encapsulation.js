class account{
    #balance; //private

    constructor(owner,initialBalance){
        this.owner = owner;
        this.#balance = initialBalance;
    }

    deposit(amount){
        if (amount > 0){
            this.#balance += amount;
        }
    }

    getBalance(){
        return this.#balance;
    }
}

const acc = new account('Dani', 1000);
acc.deposit(500);
console.log(acc.getBalance());

//Menyembunyikan data dan hanya mengizinkan akses melalui method tertentu.