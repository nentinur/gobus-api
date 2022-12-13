const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  pool.query(
    `
        SELECT * FROM app.posisi
    `,
    [],
    (dbError, dbResponse) => {
      if (dbError) throw dbError;
      httpResponse.json(dbResponse.rows);
    }
  );
};
