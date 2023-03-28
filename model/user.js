const sql = require("../connection/connect");


module.exports = class User {
  constructor(id, name, address, gender) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.gender = gender;
  }

  save() {
    return db.execute(
      "INSERT INTO products (name, address, gender) VALUES (?, ?, ?)",
      [this.name, this.address, this.gender]
    );
  }

  static deleteById(id) {}

  static fetchAll() {
    return sql.execute("SELECT * FROM products");
  }

  static findById(id) {
    return sql.execute("SELECT * FROM products WHERE products.id = ?", [id]);
  }
};
