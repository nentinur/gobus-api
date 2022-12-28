const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  const id = httpRequest.query.id;
  pool.query(
    `
        SELECT app.pesanan.id_pesanan, app.jadwal.id_jadwal, app.bus.jurusan, app.jadwal.jam, to_char(app.pesanan.tanggal,'DD-MM-YYYY') FROM app.pesanan 
        JOIN app.jadwal ON app.pesanan.id_jadwal = app.jadwal.id_jadwal 
        JOIN app.bus ON app.jadwal.no_bus = app.bus.no_bus 
        WHERE app.jadwal.id_jadwal = $1
    `,
    [id],
    (dbError, dbResponse) => {
      if (dbError) throw dbError;
      httpResponse.json(dbResponse.rows);
    }
  );
};
