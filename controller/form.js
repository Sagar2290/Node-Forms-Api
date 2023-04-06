const sql = require("mssql");

const conn = require("../connection/connect");

exports.getAllUser = (req, res, next) => {
  conn
    .connect()
    .then(() => {
      const req = new sql.Request(conn);
      return req.query("SELECT * FROM tbluser");
    })
    .then((result) => {
      res.send(result);
      console.log(result);
      conn.close();
    })
    .catch((err) => {
      conn.close();
      console.log(err);
    });
};

exports.staticData = (req, res, next) => {
  conn
    .connect()
    .then(() => {
      const req = new sql.Request(conn);
      return req.execute("cscp");
    })
    .then((result) => {
      res.send(result);
      console.log(result);
      conn.close();
    })
    .catch((err) => {
      conn.close();
      console.log(err);
      res.send(err);
    });
};

exports.postNewUser = (req, res, next) => {
  console.log(req.body);
  conn
    .connect()
    .then(() => {
      const request = new sql.Request(conn);
      request.input("name", sql.VarChar(50), req.body.name);
      request.input("gender", sql.VarChar(10), req.body.gender);
      request.input("DateOfBirth", sql.Date, req.body.DateOfBirth);
      request.input("Mobile", sql.VarChar(10), req.body.Mobile);
      request.input("email", sql.VarChar(250), req.body.email);
      request.input("Peraddress", sql.VarChar(250), req.body.Peraddress);
      request.input("Percountry", sql.Int, req.body.Percountry);
      request.input("Perstate", sql.Int, req.body.Perstate);
      request.input("Percity", sql.Int, req.body.Percity);
      request.input("Perpincode", sql.Int, req.body.Perpincode);
      request.input("Checkbox", sql.Bit, req.body.Checkbox);
      request.input("Coraddress", sql.VarChar(250), req.body.Coraddress);
      request.input("Corcountry", sql.Int, req.body.Corcountry);
      request.input("Corstate", sql.Int, req.body.Corstate);
      request.input("Corcity", sql.Int, req.body.Corcity);
      request.input("Corpincode", sql.Int, req.body.Corpincode);
      request.output("error", sql.VarChar(500), "");

      return request.execute("UserAdd");
    })
    .then((result) => {
      console.log(result);
      res.send(result);
      conn.close();
    })
    .catch((err) => {
      conn.close();
      res.status(400).send(err);
    });
};

exports.getUserById = (req, res, next) => {
  console.log(req.body);
  conn
    .connect()
    .then(() => {
      const request = new sql.Request(conn);
      request.input("id", sql.Int, req.params.id);
      request.input("name", sql.VarChar(50), "");
      request.input("Mobile", sql.VarChar(50), "");
      request.input("error", sql.VarChar(50), "");
      // request.output("error", sql.VarChar(500), '');

      return request.execute("Usersearch");
    })
    .then((result) => {
      console.log(result);
      res.send(result);
      conn.close();
    })
    .catch((err) => {
      conn.close();
      console.log(err);
      res.status(400).send(err);
    });
};

exports.postUpdateUser = (req, res, next) => {
  console.log(req.body);
  conn
    .connect()
    .then(() => {
      const request = new sql.Request(conn);
      request.input("id", sql.Int, req.body.id);
      request.input("name", sql.VarChar(50), req.body.name);
      request.input("gender", sql.VarChar(10), req.body.gender);
      request.input("DateOfBirth", sql.Date, req.body.DateOfBirth);
      request.input("Mobile", sql.VarChar(10), req.body.Mobile);
      request.input("email", sql.VarChar(250), req.body.email);
      request.input("Peraddress", sql.VarChar(250), req.body.Peraddress);
      request.input("Percountry", sql.Int, req.body.Percountry);
      request.input("Perstate", sql.Int, req.body.Perstate);
      request.input("Percity", sql.Int, req.body.Percity);
      request.input("Perpincode", sql.Int, req.body.Perpincode);
      request.input("Checkbox", sql.Bit, req.body.Checkbox);
      request.input("Coraddress", sql.VarChar(250), req.body.Coraddress);
      request.input("Corcountry", sql.Int, req.body.Corcountry);
      request.input("Corstate", sql.Int, req.body.Corstate);
      request.input("Corcity", sql.Int, req.body.Corcity);
      request.input("Corpincode", sql.Int, req.body.Corpincode);
      request.output("error", sql.VarChar(500), "");

      return request.execute("UserUpdate");
    })
    .then((result) => {
      console.log(result);
      res.send(result);
      conn.close();
    })
    .catch((err) => {
      conn.close();
      console.log(err);
      res.status(400).send(err);
    });
};

exports.deleteUserById = (req, res, next) => {
  console.log(req.body);
  conn
    .connect()
    .then(() => {
      const request = new sql.Request(conn);
      request.input("id", sql.Int, req.params.id);
      request.input("name", sql.VarChar(50), "");
      request.output("error", sql.VarChar(500), "");

      return request.execute("Userdelete");
    })
    .then((result) => {
      console.log(result);
      res.send(result);

      conn.close();
    })
    .catch((err) => {
      conn.close();
      console.log(err);
      res.status(400).send("Error while deleting data");
    });
};
