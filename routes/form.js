const express = require("express");

const router = express.Router();

const sql = require("mssql");

const conn = require("../connection/connect");

router.get("/", (req, res, next) => {
  conn
    .connect()
    .then(() => {
      const req = new sql.Request(conn);
      req
        .query("SELECT * FROM tbluser")
        .then((recordset) => {
          res.send(recordset.recordset);
          console.log(recordset.recordset);
          conn.close();
        })
        .catch((err) => {
          conn.close();
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

router.post("/user", (req, res, next) => {
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

      request
        .execute("UserAdd")
        .then((recordset) => {
          console.log(recordset);
          res.send(recordset.output);

          conn.close();
        })
        .catch((err) => {
          conn.close();
          console.log(err);
          res.send(err);
        });
    })
    .catch((err) => {
      conn.close();
      res.status(400).send("Error while inserting data");
    });
});

router.post("/search/:id", (req, res, next) => {
  console.log(req.body);
  conn
    .connect()
    .then(() => {
      const request = new sql.Request(conn);
      request.input("id", sql.Int, req.params.id);
      request.input("name", sql.VarChar(50), '');
      request.input("Mobile", sql.VarChar(50), '');
      request.input("error", sql.VarChar(50), '');
      // request.output("error", sql.VarChar(500), '');

      request
        .execute("Usersearch")
        .then((recordset) => {
          console.log(recordset);
          res.send(recordset.recordset);

          conn.close();
        })
        .catch((err) => {
          conn.close();
          console.log(err);
          res.send(err);
        });
    })
    .catch((err) => {
      conn.close();
      res.status(400).send("Error while searching data");
    });
});

router.delete("/delete/:id", (req, res, next) => {
  console.log(req.body);
  conn
    .connect()
    .then(() => {
      const request = new sql.Request(conn);
      request.input("id", sql.Int, req.params.id);
      request.input("name", sql.VarChar(50), "");
      request.output("error", sql.VarChar(500), "");

      request
        .execute("Userdelete")
        .then((recordset) => {
          console.log(recordset);
          res.send(recordset.output);

          conn.close();
        })
        .catch((err) => {
          conn.close();
          console.log(err);
          res.send(err);
        });
    })
    .catch((err) => {
      conn.close();
      res.status(400).send("Error while inserting data");
    });
});

router.get("/static", (req, res, next) => {
  conn
    .connect()
    .then(() => {
      const req = new sql.Request(conn);
      req
        .execute("cscp")
        .then((recordset) => {
          res.send(recordset);
          console.log(recordset);
          conn.close();
        })
        .catch((err) => {
          conn.close();
          console.log(err);
          res.send(err);
        });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
