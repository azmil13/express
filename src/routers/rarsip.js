const router = require('express').Router();
const { rarsip } = require('../controllers');

//Get localhost:8080/produk => Ambil Semua Data
router.get('/', rarsip.getDataRarsip);


// //Get localhost:8080/produk/2 => Ambil data semua produk berdasarkan id = 2
// router.get('/:id', produk.getDetailProduk);

// POST lcalhost:8080/produk/add => Tambah data produk ke database
router.post('/add', rarsip.addDataRarsip);

// // POST lcalhost:8080/produk/2 => Edit data produk
router.put('/edit/:id', rarsip.editDataRarsip);

// // POST lcalhost:8080/produk/delete => Delete data produk
router.delete('/delete/:id', rarsip.deleteDataRarsip);

module.exports = router;    