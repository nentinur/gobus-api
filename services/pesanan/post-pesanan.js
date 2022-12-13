const pool = require("../../utils/db-pool");

module.exports = (httpRequest, httpResponse) => {
  pool.query(
    `
        INSERT INTO app.pesanan (
            id_pesanan, 
            id_jadwal,
            jumlah_kursi,
            nama,
            kontak, 
            waktu, 
            latitude_naik, 
            langitude_naik, 
            latitude_turun, 
            longitude_turun, 
            tanggal
        )
        VALUES (
            $1,
            $2,
            $3,
            $4,
            $6,
            $7,
            $8,
            $9,
            $10,
            $11
        )
    `,
    [
      httpRequest.body.idPesanan,
      httpRequest.body,idJadwal,
      httpRequest.body.jumlahKursi,
      httpRequest.body.nama,
      httpRequest.body.kontak,
      httpRequest.body.waktu,
      httpRequest.body.latitudeNaik,
      httpRequest.body.longitudeNaik,
      httpRequest.body.latitudeTurun,
      httpRequest.body.longitudeTurun,
      httpRequest.body.tanggal
    ],
    (dbError, dbResponse) => {
      if (dbError) throw dbError;
      httpResponse.json(dbResponse.rows);
    }
  );
};
