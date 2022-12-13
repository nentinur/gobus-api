const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  pool.query(
    `
        INSERT INTO app.jadwal (
            no_bus,
            id_sopir,
            jam,
            kursi_kosong
        )
        VALUES (
            $1,
            $2,
            $3,
            $4
        )
    `,
    [
      httpRequest.body.no_bus,
      httpRequest.body.id_sopir,
      httpRequest.body.jam,
      httpRequest.body.kursi_kosong,
    ],
    (dbError, dbResponse) => {
      if (dbError) throw dbError;
      httpResponse.json(dbResponse.rows);
    }
  );
};
