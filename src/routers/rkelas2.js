const router = require('express').Router();
const { rkelas2 } = require('../controllers');
//Get localhost:8080/produk => Ambil Semua Data
router.get('/', rkelas2.getDataRkelas2);

// //Get localhost:8080/produk/2 => Ambil data semua produk berdasarkan id = 2
// router.get('/:id', produk.getDetailProduk);

// POST lcalhost:8080/produk/add => Tambah data produk ke database
router.post('/add', rkelas2.addDataRkelas2);

// POST lcalhost:8080/produk/2 => Edit data produk
router.put('/edit/:id', rkelas2.editDataRkelas2);

// POST lcalhost:8080/produk/delete => Delete data produk
router.delete('/delete/:id', rkelas2.deleteDataRkelas2);

module.exports = router;