const router = require('express').Router();
const { kolidordapur } = require('../controllers');

//Get localhost:8080/produk => Ambil Semua Data
router.get('/', kolidordapur.getDataKolidordapur);


// //Get localhost:8080/produk/2 => Ambil data semua produk berdasarkan id = 2
// router.get('/:id', produk.getDetailProduk);

// POST lcalhost:8080/produk/add => Tambah data produk ke database
router.post('/add', kolidordapur.addDataKolidordapur);

// // POST lcalhost:8080/produk/2 => Edit data produk
router.put('/edit/:id', kolidordapur.editDataKolidordapur);

// // POST lcalhost:8080/produk/delete => Delete data produk
router.delete('/delete/:id', kolidordapur.deleteDataKolidordapur);

module.exports = router;