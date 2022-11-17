const express = require("express");
const router = express.Router();

router.get("/", (httpRequest, httpResponse) => {
  httpResponse.json({
    hello: "Dunia !",
  });
});

// router.get("/", (req, res) => {
//   const client = new Client(connectionSettings);

//   client.connect((err) => {
//     if (err) throw err;
//     console.log("Connected !");
//   });

//   client.query(
//     //   `SELECT
//     //   contoh_atribut1,
//     //   contoh_atribut2,
//     //   contoh_atribut3
//     //   FROM
//     //     contoh_skema1.contoh_tabel1
//     // `,
//     (erornyaDatabase, hasilDariDatabase) => {
//       res.json({
//         data: hasilDariDatabase.rows,
//       });
//     }
//   );
// });

module.exports = router;
