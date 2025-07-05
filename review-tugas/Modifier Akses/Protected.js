class User {
  constructor(name) {
    this._role = "guest"; // _role dianggap "protected"
    this.name = name;
  }

  getRole() {
    return this._role;
  }
}

class Admin extends User {
  constructor(name) {
    super(name);
    this._role = "admin"; // bisa diakses oleh turunan
  }
}

const admin = new Admin("Budi");
console.log(admin._role); // Bisa, tapi dianggap tidak etis (harusnya tidak diakses langsung)
console.log(admin);