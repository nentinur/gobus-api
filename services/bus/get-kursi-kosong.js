const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  const no = httpRequest.query.no;
  if (no !== null) {
    pool.query(
      `
        SELECT app.bus.jurusan, app.keberangkatan.jam, app.keberangkatan.kursi_kosong FROM app.bus 
        INNER JOIN app.keberangkatan ON app.bus.no_bus = app.keberangkatan.no_bus 
        WHERE app.bus.no_bus = $1
    `,
      [no],
      (dbError, dbResponse) => {
        if (dbError) throw dbError;
        httpResponse.json(dbResponse.rows);
      }
    );
  } else {
    pool.query(
      `
        SELECT * FROM app.bus 
        INNER JOIN app.keberangkatan ON app.bus.no_bus = app.keberangkatan.no_bus
    `,
      [],
      (dbError, dbResponse) => {
        if (dbError) throw dbError;
        httpResponse.json(dbResponse.rows);
      }
    );
  }
};
