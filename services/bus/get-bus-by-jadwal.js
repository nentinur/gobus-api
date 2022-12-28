const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  const jurusan = httpRequest.query.jurusan;
  const jam = httpRequest.query.jam;
  pool.query(
    `
        SELECT * FROM app.bus 
        JOIN app.jadwal ON app.bus.no_bus = app.jadwal.no_bus
        WHERE app.bus.kode_jurusan = $1 AND app.jadwal.jam = $2
    `,
    [jurusan, jam],
    (dbError, dbResponse) => {
      if (dbError) throw dbError;
      httpResponse.json(dbResponse.rows[0]);
    }
  );
};
