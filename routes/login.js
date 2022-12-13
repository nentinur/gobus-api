const express = require("express");
const router = express.Router();
const pool = require("utils/db-pool");

router.get("/", (httpRequest, httpResponse) => {
  pool.query(
    `
        SELECT * FROM app.users
    `,
    [],
    (dbError, dbResponse) => {
      if (dbError) throw dbError;
      httpResponse.json(dbResponse.rows);
    }
  );
});

module.exports = router;