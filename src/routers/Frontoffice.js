const router = require('express').Router();
const { frontoffice } = require('../controllers');
//Get localhost:8080/produk => Ambil Semua Data
router.get('/', frontoffice.getDataFrontOffice);


// //Get localhost:8080/produk/2 => Ambil data semua produk berdasarkan id = 2
// router.get('/:id', produk.getDetailProduk);

// POST lcalhost:8080/produk/add => Tambah data produk ke database
router.post('/add', frontoffice.addDataFrontOffice);

// // POST lcalhost:8080/produk/2 => Edit data produk
router.put('/edit/:id', frontoffice.editDataFrontOffice);

// // POST lcalhost:8080/produk/delete => Delete data produk
router.delete('/delete/:id', frontoffice.deleteDataFrontOffice);

module.exports = router;