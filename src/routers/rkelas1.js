const router = require('express').Router();
const { rkelas1 } = require('../controllers');
//Get localhost:8080/produk => Ambil Semua Data
router.get('/', rkelas1.getDataRkelas1);

// //Get localhost:8080/produk/2 => Ambil data semua produk berdasarkan id = 2
// router.get('/:id', produk.getDetailProduk);

// POST lcalhost:8080/produk/add => Tambah data produk ke database
router.post('/add', rkelas1.addDataRkelas1);

// POST lcalhost:8080/produk/2 => Edit data produk
router.put('/edit/:id', rkelas1.editDataRkelas1);

// POST lcalhost:8080/produk/delete => Delete data produk
router.delete('/delete/:id', rkelas1.deleteDataRkelas1);

module.exports = router;