const bcrypt = require("bcryptjs");
const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  pool.query(
    `
        INSERT INTO app.posisi(
            id_pesanan, 
            latitude, 
            longitude
            )
        VALUES (
            $1, 
            $2, 
            $3
        );
    `,
    [
      httpRequest.body.id_pesanan,
      httpRequest.body.latitude,
      httpRequest.body.longitude,
    ],
    (dbError, dbResponse) => {
      if (dbError) throw dbError;
      httpResponse.json(dbResponse.rows);
    }
  );
};
