const bcrypt = require("bcryptjs");
const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  const hashedPassword = bcrypt.hashSync(httpRequest.body.pass, 8);
  pool.query(
    `
        INSERT INTO app.penumpang (
            id_penumpang, 
            nama,
            no_telp,
            pass
        )
        VALUES (
            $1,
            $2,
            $3,
            $4
        )
    `,
    [
      httpRequest.body.idPenumpang,
      httpRequest.body.nama,
      httpRequest.body.noTelp,
      hashedPassword,
    ],
    (dbError, dbResponse) => {
      if (dbError) throw dbError;
      httpResponse.json(dbResponse.rows);
    }
  );
};
