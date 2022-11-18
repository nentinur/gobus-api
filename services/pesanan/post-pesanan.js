const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  pool.query(
    `
        INSERT INTO app.pesanan (
            id_keberangkatan, 
            jumlah_kursi, 
            waktu, 
            latitude_naik, 
            langitude_naik, 
            latitude_turun, 
            longitude_turun, 
            status
        )
        VALUES (
            $1,
            $2,
            $3,
            $4,
            $6,
            $7,
            TRUE
        )
    `,
    [
      httpRequest.body.idKeberangkatan,
      httpRequest.body.jumlahKursi,
      httpRequest.body.waktu,
      httpRequest.body.latitudeNaik,
      httpRequest.body.longitudeNaik,
      httpRequest.body.latitudeTurun,
      httpRequest.body.longitudeTurun,
    ],
    (dbError, dbResponse) => {
      if (dbError) throw dbError;
      httpResponse.json(dbResponse.rows);
    }
  );
};
