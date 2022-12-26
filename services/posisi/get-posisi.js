const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  const id = httpRequest.query.id;
  pool.query(
    `
      SELECT lat, lng FROM app.posisi WHERE no_bus = $1
    `,
    [id],
    (dbError, dbResponse) => {
      if (dbError) throw dbError;
      httpResponse.json(dbResponse.rows[0]);
    }
  );
};
