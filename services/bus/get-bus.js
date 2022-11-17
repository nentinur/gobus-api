const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  pool.query(
    `
        SELECT * FROM app.bus INNER JOIN app.keberangkatan ON app.bus.no_bus = app.keberangkatan.no_bus
    `,
    [],
    (dbError, dbResponse) => {
      if (dbError) throw dbError;
      httpResponse.json(dbResponse.rows);
    }
  );
};
